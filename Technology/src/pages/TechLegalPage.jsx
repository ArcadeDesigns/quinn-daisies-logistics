import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { StripeTape210 } from "../components/QuinnGoogleAssets";
import "../App.css";

const LEGAL_CONTENT = {
  terms: {
    eyebrow: "LEGAL & ENTERPRISE GOVERNANCE",
    title: "Terms of Use — Quinn Daisies Technology & IT Solutions",
    url: "https://quinn-daisies-group.web.app/terms-of-use",
    description:
      "Enterprise Terms of Use governing Quinn Daisies Technology & IT Solutions software engineering, AI platforms, cloud infrastructure, and government contracting portals.",
    sections: [
      {
        heading: "1. Scope of Technology & Engineering Services",
        body: "These Terms of Use govern your access to the Quinn Daisies Technology & IT Solutions digital ecosystem (part of Quinn Daisies Group), including our software engineering documentation, AI & application accelerators, government contract procurement portals, and enterprise cloud telemetry tools.",
      },
      {
        heading: "2. Intellectual Property & Full-SDLC Deliverables",
        body: "All proprietary frameworks, UI/UX systems, code architectures (.NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, Flet), and technical documentation published on this portal are protected by copyright and trademark laws. Client-specific deliverables are governed by executed Master Services Agreements (MSA) and Statements of Work (SOW).",
      },
      {
        heading: "3. Security, Compliance & Acceptable Use",
        body: "Users agree not to probe, reverse-engineer, or disrupt any Quinn Daisies cloud infrastructure, API endpoints, or AI inference gateways. All government contracting and procurement engagements adhere strictly to FAR/DFARS, State of Maryland COMAR, and UNGM ethical standards.",
      },
      {
        heading: "4. Contact & Legal Notices",
        body: "For enterprise licensing, Master Services Agreements, or compliance inquiries, contact Quinn Daisies Group at 1915 Wetterhorn Ct, Frederick, MD 21702, USA or email info@quinndaisies.com.",
      },
    ],
  },
  privacy: {
    eyebrow: "DATA PRIVACY & ZERO-TRUST PROTECTION",
    title: "Privacy Policy — Quinn Daisies Technology & IT Solutions",
    url: "https://quinn-daisies-group.web.app/privacy-policy",
    description:
      "Privacy Policy detailing how Quinn Daisies Technology collects, protects, and governs enterprise and user data across our software, AI, and cloud platforms.",
    sections: [
      {
        heading: "1. Enterprise Data Protection Commitment",
        body: "Quinn Daisies Technology & IT Solutions enforces Zero-Trust data privacy across all web, mobile, desktop, and cloud platforms. We collect only the contact and project telemetry information you explicitly submit when requesting architecture consultations, RFP/RFQ proposals, or program enrollment.",
      },
      {
        heading: "2. AI & LLM Data Isolation",
        body: "Enterprise data shared during AI architecture reviews or processed within Quinn Daisies private RAG and agentic workflows is strictly isolated within tenant boundaries and is never used to train public foundation models.",
      },
      {
        heading: "3. Global Regulatory Compliance (GDPR, CCPA, NDPR & NIST)",
        body: "Our engineering and data governance practices comply with U.S. Federal and State privacy statutes, GDPR, and international data protection directives across North America, Europe, Asia, and Africa.",
      },
      {
        heading: "4. Your Privacy Rights",
        body: "You may request access, correction, or deletion of your personal contact records at any time by contacting info@quinndaisies.com or calling +1 (240) 405-5942.",
      },
    ],
  },
  cookie: {
    eyebrow: "TELEMETRY & SESSION GOVERNANCE",
    title: "Cookie Policy — Quinn Daisies Technology & IT Solutions",
    url: "https://quinn-daisies-group.web.app/cookie-policy",
    description:
      "Cookie & Telemetry Policy for Quinn Daisies Technology & IT Solutions web portals and Core Web Vitals analytics.",
    sections: [
      {
        heading: "1. Essential & Security Cookies",
        body: "We use strictly necessary session cookies and local storage tokens to maintain secure navigation, authentication state, and responsive performance across our React 19 and Firebase Hosting infrastructure.",
      },
      {
        heading: "2. Performance & Core Web Vitals Telemetry",
        body: "Anonymous performance metrics (LCP, INP, CLS) and aggregated route analytics help our engineering team maintain sub-second page speeds and optimal search/AI discoverability.",
      },
      {
        heading: "3. Managing Cookie Preferences",
        body: "You can control or clear cookies at any time through your browser settings without losing access to our public engineering documentation and service catalogs.",
      },
    ],
  },
};

export default function TechLegalPage({ type = "terms" }) {
  const doc = LEGAL_CONTENT[type] || LEGAL_CONTENT.terms;

  return (
    <div className="quinn-tech-google-root">
      <SEO
        title={`${doc.title} | Quinn Daisies Group`}
        description={doc.description}
        url={doc.url}
        ecosystem="technology"
      />
      <main id="main-content" className="glue-page" style={{ paddingTop: 48, paddingBottom: 88 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#fff3e3",
              color: "#2b1600",
              border: "1px solid rgba(249, 161, 68, 0.45)",
              padding: "6px 16px",
              borderRadius: 999,
              fontWeight: 500,
              fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
              letterSpacing: "0.06em",
            }}
          >
            {doc.eyebrow}
          </span>
          <StripeTape210 />
        </div>

        <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 16 }}>
          {doc.title}
        </h1>
        <p
          style={{
            color: "#3b3b3b",
            fontSize: "var(--qd-font-size-body-large, 1.15em)",
            lineHeight: 1.7,
            maxWidth: 780,
            marginBottom: 40,
          }}
        >
          {doc.description}
        </p>

        <div className="glue-grid">
          {doc.sections.map((s, idx) => (
            <div key={idx} className="glue-grid__col glue-grid__col--span-6">
              <div className="glue-card" style={{ padding: 28, height: "100%" }}>
                <h2 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 12 }}>
                  {s.heading}
                </h2>
                <p
                  style={{
                    color: "#3b3b3b",
                    fontSize: "var(--qd-font-size-body, 1em)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            to="/technology-contact-us"
            className="ApplicationButton glue-button glue-button--high-emphasis"
          >
            <span>Contact Legal &amp; Compliance Desk</span>
            <span className="material-symbols-outlined">memory</span>
          </Link>
          <Link
            to="/technology-and-visibility"
            className="ApplicationButton glue-button glue-button--medium-emphasis"
          >
            <span>Return to Technology Ecosystem</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
