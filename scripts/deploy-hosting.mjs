#!/usr/bin/env node
/**
 * Zero-dependency Firebase Hosting REST API Deployer for Quinn Daisies Group
 * Uses native Node.js (>=20) crypto, zlib, fs, and fetch to deploy directly
 * to Firebase Hosting without requiring external CLI downloads in CI.
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import crypto from "node:crypto";

function parseServiceAccount(rawInput) {
  if (!rawInput || !rawInput.trim()) {
    throw new Error(
      "Missing Firebase Service Account JSON. Ensure secret FIREBASE_SERVICE_ACCOUNT_QUINN_DAISIES_GROUP is set in GitHub Repository Secrets."
    );
  }
  let cleaned = rawInput.replace(/^\uFEFF/, "").trim();

  // Support base64-encoded service account secrets if provided
  if (!cleaned.includes("{") && /^[A-Za-z0-9+/=\r\n]+$/.test(cleaned)) {
    cleaned = Buffer.from(cleaned, "base64").toString("utf8").trim();
  }

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.slice(firstBrace, lastBrace + 1);
  }

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    // Handle cases where literal newlines inside string values were pasted
    const repaired = cleaned.replace(
      /"private_key"\s*:\s*"([\s\S]*?)"\s*,/,
      (_, keyBody) => `"private_key": "${keyBody.replace(/\r?\n/g, "\\n")}",`
    );
    parsed = JSON.parse(repaired);
  }

  if (typeof parsed.private_key === "string") {
    parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
  }
  if (!parsed.client_email || !parsed.private_key) {
    throw new Error("Service Account JSON is missing 'client_email' or 'private_key'.");
  }
  return parsed;
}

async function getAccessToken(sa) {
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const claim = Buffer.from(
    JSON.stringify({
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/firebase",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  ).toString("base64url");

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const signature = signer.sign(sa.private_key, "base64url");
  const assertion = `${header}.${claim}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${assertion}`,
  });
  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`OAuth2 token exchange failed (${res.status}): ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

function collectFiles(rootDir, currentDir = rootDir, out = []) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      collectFiles(rootDir, fullPath, out);
    } else if (entry.isFile()) {
      const relPath = "/" + path.relative(rootDir, fullPath).replace(/\\/g, "/");
      out.push({ fullPath, relPath });
    }
  }
  return out;
}

function buildServingConfig(hostingEntry) {
  const config = {};
  if (Array.isArray(hostingEntry.rewrites)) {
    config.rewrites = hostingEntry.rewrites.map((r) => ({
      glob: r.source || r.glob,
      path: r.destination || r.path,
    }));
  }
  if (Array.isArray(hostingEntry.headers)) {
    config.headers = hostingEntry.headers.map((h) => ({
      glob: h.source || h.glob,
      headers: Array.isArray(h.headers)
        ? Object.fromEntries(h.headers.map((pair) => [pair.key, pair.value]))
        : h.headers,
    }));
  }
  if (typeof hostingEntry.cleanUrls === "boolean") {
    config.cleanUrls = hostingEntry.cleanUrls;
  }
  if (hostingEntry.trailingSlash === true) {
    config.trailingSlashBehavior = "ADD";
  } else if (hostingEntry.trailingSlash === false) {
    config.trailingSlashBehavior = "REMOVE";
  }
  return config;
}

async function apiRequest(url, token, options = {}) {
  const res = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} on ${options.method || "GET"} ${url}: ${text}`);
  }
  return json;
}

async function main() {
  const targetName = process.argv[2];
  const channelId = process.argv[3] || "live";
  if (!targetName) {
    throw new Error("Usage: node scripts/deploy-hosting.mjs <logistics|technology> [channelId]");
  }

  const repoRoot = process.cwd();
  const firebaserc = JSON.parse(fs.readFileSync(path.join(repoRoot, ".firebaserc"), "utf8"));
  const firebaseJson = JSON.parse(fs.readFileSync(path.join(repoRoot, "firebase.json"), "utf8"));

  const projectId = firebaserc.projects?.default || "quinn-daisies-group";
  const targetSites = firebaserc.targets?.[projectId]?.hosting?.[targetName];
  if (!targetSites || !targetSites.length) {
    throw new Error(`No hosting site mapped for target '${targetName}' in .firebaserc`);
  }
  const siteId = targetSites[0];

  const hostingList = Array.isArray(firebaseJson.hosting) ? firebaseJson.hosting : [firebaseJson.hosting];
  const hostingEntry = hostingList.find((h) => h.target === targetName || h.site === siteId);
  if (!hostingEntry) {
    throw new Error(`No hosting entry found for target '${targetName}' in firebase.json`);
  }

  const publicDir = path.resolve(repoRoot, hostingEntry.public);
  if (!fs.existsSync(publicDir)) {
    throw new Error(`Build directory does not exist: ${publicDir}`);
  }

  let rawSa =
    process.env.SA_KEY_PRIMARY ||
    process.env.SA_KEY_FALLBACK ||
    process.env.FIREBASE_SERVICE_ACCOUNT_QUINN_DAISIES_GROUP ||
    process.env.FIREBASE_SERVICE_ACCOUNT ||
    "";

  if (!rawSa && process.env.GOOGLE_APPLICATION_CREDENTIALS && fs.existsSync(process.env.GOOGLE_APPLICATION_CREDENTIALS)) {
    rawSa = fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS, "utf8");
  }

  const sa = parseServiceAccount(rawSa);
  console.log(`[1/5] Authenticating as ${sa.client_email} for project '${projectId}' (site: '${siteId}')...`);
  const token = await getAccessToken(sa);

  // Prepare gzipped files and SHA-256 hashes
  const files = collectFiles(publicDir);
  console.log(`[2/5] Hashing & compressing ${files.length} files from ${hostingEntry.public}...`);
  const filePathToHash = {};
  const hashToGzipBuffer = new Map();

  for (const file of files) {
    const rawBuf = fs.readFileSync(file.fullPath);
    const gzBuf = zlib.gzipSync(rawBuf, { level: 9 });
    const sha256 = crypto.createHash("sha256").update(gzBuf).digest("hex");
    filePathToHash[file.relPath] = sha256;
    hashToGzipBuffer.set(sha256, gzBuf);
  }

  // Create new version
  const servingConfig = buildServingConfig(hostingEntry);
  console.log(`[3/5] Creating new Firebase Hosting version on site '${siteId}'...`);
  const versionData = await apiRequest(
    `https://firebasehosting.googleapis.com/v1beta1/projects/-/sites/${siteId}/versions`,
    token,
    {
      method: "POST",
      body: JSON.stringify({
        status: "CREATED",
        config: servingConfig,
        labels: { "deployment-tool": "github-actions-rest" },
      }),
    }
  );
  const versionName = versionData.name;

  // Populate files
  const populateData = await apiRequest(
    `https://firebasehosting.googleapis.com/v1beta1/${versionName}:populateFiles`,
    token,
    {
      method: "POST",
      body: JSON.stringify({ files: filePathToHash }),
    }
  );

  const requiredHashes = populateData.uploadRequiredHashes || [];
  const uploadUrl = populateData.uploadUrl;
  console.log(`[4/5] Uploading ${requiredHashes.length} new/modified files (cached: ${files.length - requiredHashes.length})...`);

  for (const hash of requiredHashes) {
    const gzBuf = hashToGzipBuffer.get(hash);
    const upRes = await fetch(`${uploadUrl}/${hash}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/octet-stream",
      },
      body: gzBuf,
    });
    if (!upRes.ok) {
      throw new Error(`Upload failed for hash ${hash} (${upRes.status}): ${await upRes.text()}`);
    }
  }

  // Finalize version
  await apiRequest(
    `https://firebasehosting.googleapis.com/v1beta1/${versionName}?updateMask=status,config`,
    token,
    {
      method: "PATCH",
      body: JSON.stringify({
        status: "FINALIZED",
        config: servingConfig,
      }),
    }
  );

  // Ensure channel exists if deploying to a PR preview channel
  if (channelId !== "live") {
    try {
      await apiRequest(
        `https://firebasehosting.googleapis.com/v1beta1/projects/-/sites/${siteId}/channels?channelId=${encodeURIComponent(channelId)}`,
        token,
        { method: "POST", body: JSON.stringify({ ttl: "604800s" }) }
      );
    } catch {
      // Channel already exists
    }
  }

  // Create release on channel
  console.log(`[5/5] Releasing finalized version to channel '${channelId}'...`);
  const releaseData = await apiRequest(
    `https://firebasehosting.googleapis.com/v1beta1/projects/-/sites/${siteId}/channels/${encodeURIComponent(channelId)}/releases?versionName=${encodeURIComponent(versionName)}`,
    token,
    {
      method: "POST",
      body: JSON.stringify({ message: `GitHub Actions CI/CD (${process.env.GITHUB_SHA?.slice(0, 7) || "local"})` }),
    }
  );

  console.log(`SUCCESS! Released ${releaseData.name} to https://${siteId}.web.app`);
}

main().catch((err) => {
  console.error("::error::" + (err?.message || err));
  process.exit(1);
});

