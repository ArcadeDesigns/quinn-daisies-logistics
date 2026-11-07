import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
  GreenTickSvg,
  QuoteMarkPinkSvg,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const ItSolutionsPage = () => {
  const containerRef = useRef(null);

  const itCapabilities = [
    {
      name: "24/7/365 NOC & Helpdesk",
      role: "Managed L1 / L2 / L3 Support",
      detail: "Sub-15 minute critical SLA response, automated ticket triage, and global remote/on-site remediation.",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: "Zero-Trust Cybersecurity",
      role: "Identity, EDR & SOC Monitoring",
      detail: "Microsoft Entra ID, Okta, CrowdStrike/Defender XDR, SIEM log correlation & continuous threat hunting.",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Cloud & Hybrid Migration",
      role: "AWS, Azure & Google Cloud",
      detail: "Zero-downtime lift-and-shift or cloud-native refactoring with Terraform IaC and FinOps cost governance.",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "NIST 800-171 & CMMC 2.0",
      role: "Federal & State Cyber Compliance",
      detail: "System Security Plans (SSP), POA&M remediation, SOC 2 Type II, ISO 27001 & FedRAMP readiness.",
      bg: "#f5efe8",
      fg: "#1e1e1e",
    },
    {
      name: "Endpoint & MDM Fleet",
      role: "Intune, Jamf & Autopilot",
      detail: "Zero-touch provisioning, automated patch compliance, BitLocker encryption & mobile device management.",
      bg: "#2b1600",
      fg: "#ffffff",
    },
    {
      name: "Network & SD-WAN",
      role: "Global Branch & Warehouse Connectivity",
      detail: "Redundant fiber/5G SD-WAN, Wi-Fi 6E/7 industrial heatmapping, VLAN segmentation & VPN tunnels.",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Disaster Recovery (BCDR)",
      role: "Immutable Backups & <15m RTO",
      detail: "Air-gapped ransomware-proof backups, multi-region database replication, and quarterly failover drills.",
      bg: "#f5efe8",
      fg: "#2b1600",
    },
    {
      name: "Microsoft 365 & Workspace",
      role: "Enterprise Collaboration & DLP",
      detail: "Tenant consolidation, Data Loss Prevention (DLP), eDiscovery, and secure Copilot deployment.",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "vCIO & IT Procurement",
      role: "Hardware, Licensing & GovCon IT",
      detail: "Strategic IT budgeting, vendor consolidation, and compliant hardware/software fulfillment.",
      bg: "#fff4e6",
      fg: "#1e1e1e",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timeline
      gsap.fromTo(
        ".cloud-hero-section .glue-grid__col:first-child > div > *",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".cloud-hero-section .cloud-floating-photo-card",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      // 2. Section 2 Reveal (Managed IT & Cybersecurity Pillars)
      gsap.fromTo(
        ".cloud-google-benefits-container .cloud-benefit-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cloud-google-benefits-container",
            start: "top 78%",
          },
        }
      );

      // 3. Section 3 Showcase Grid Reveal
      gsap.fromTo(
        ".bsp-logo-showcase-grid .bsp-logo-tile",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bsp-logo-showcase-grid",
            start: "top 82%",
          },
        }
      );

      // 4. Section 4 Quote Section Reveal
      gsap.fromTo(
        ".accelerator-home-quote",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".accelerator-home-quote",
            start: "top 80%",
          },
        }
      );

      // 5. Underline accent sweep
      const underlines = document.querySelectorAll(".decorated-text.underline");
      underlines.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          onEnter: () => {
            el.classList.add("in-view");
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="quinn-tech-google-root">
      <SEO
        title="Enterprise IT Solutions, Managed Infrastructure & Cybersecurity | Quinn Daisies Technology"
        description="End-to-end Enterprise IT Solutions by Quinn Daisies Technology: 24/7 Managed IT Helpdesk & NOC, Zero-Trust Cybersecurity (NIST 800-171, CMMC, SOC 2), Cloud Migration, and Disaster Recovery."
        keywords="IT solutions, managed IT services, cybersecurity NIST 800-171 CMMC SOC 2, cloud migration AWS Azure GCP, 24/7 NOC helpdesk, Frederick Maryland IT solutions"
        canonicalUrl="/it-solutions"
      />

      {/* Top Decorative Tape Bar */}
      <div className="glue-page" style={{ paddingTop: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span
            className="glue-eyebrow"
            style={{
              fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
              marginBottom: 0,
              letterSpacing: "0.04em",
            }}
          >
            QUINN DAISIES ENTERPRISE IT SOLUTIONS • MANAGED INFRASTRUCTURE, CYBERSECURITY &amp; CLOUD
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 2-COLUMN HERO WITH FLOATING PHOTO CARD */}
      <section className="cloud-hero-section accelerator-landing-hero">
        <div className="glue-page">
          <div className="glue-grid" style={{ alignItems: "center" }}>
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span
                    style={{
                      background: "#fff3e3",
                      color: "#2b1600",
                      border: "1px solid rgba(249, 161, 68, 0.45)",
                      padding: "6px 14px",
                      borderRadius: 999,
                      fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    24/7 NOC • ZERO-TRUST SECURITY • HYBRID CLOUD • NIST / SOC 2
                  </span>
                </div>

                <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
                  Resilient IT solutions built for{" "}
                  <span className="decorated-text underline">zero-downtime operations</span>
                </h1>

                <p
                  style={{
                    color: "#3b3b3b",
                    fontSize: "var(--qd-font-size-body-large)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  From 24/7/365 managed helpdesk and endpoint management to hybrid cloud infrastructure, SD-WAN
                  networking, and federal-grade cybersecurity (<strong>NIST SP 800-171</strong>,{" "}
                  <strong>CMMC 2.0</strong>, <strong>SOC 2</strong>) — Quinn Daisies secures and operates your entire IT
                  estate.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Request an IT &amp; Security Audit</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                  <div className="hero-tape-accent" style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
                    <StripeTape83 fill="#f9a144" />
                  </div>
                </div>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="cloud-floating-photo-card">
                <div className="cloud-floating-photo-tape">
                  <StripeTape83 fill="#f9a144" />
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b"
                  alt="Quinn Daisies Network Operations Center and Enterprise IT Infrastructure"
                  style={{
                    width: "100%",
                    height: 380,
                    objectFit: "cover",
                    borderRadius: 16,
                  }}
                />
                <div
                  style={{
                    marginTop: 14,
                    background: "#fff7ef",
                    border: "1px solid #e6ddd3",
                    borderRadius: 12,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        color: "#c86d10",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        display: "block",
                      }}
                    >
                      Enterprise SLA &amp; Cyber Posture
                    </span>
                    <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", fontWeight: 600, color: "#2b1600" }}>
                      &lt;15 Min P1 Response • 99.99% Infrastructure Availability
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                      background: "#2b1600",
                      color: "#f9a144",
                      padding: "4px 14px",
                      borderRadius: 999,
                      fontWeight: 500,
                    }}
                  >
                    24/7/365 NOC/SOC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CREAM BENEFITS CONTAINER */}
      <section id="it-pillars" className="cloud-google-benefits-container">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 56px" }}>
            <span
              className="glue-eyebrow"
              style={{
                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                color: "#c86d10",
                fontWeight: 600,
                letterSpacing: "0.06em",
                display: "inline-block",
                marginBottom: 12,
              }}
            >
              MANAGED IT &amp; CYBERSECURITY ARCHITECTURE
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Proactive IT governance across{" "}
              <span className="decorated-text underline">every endpoint and cloud</span>
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                maxWidth: 780,
                margin: "16px auto 0",
              }}
            >
              We combine continuous SOC threat monitoring, automated endpoint fleet management, and multi-region hybrid
              cloud SRE so your teams stay productive, compliant, and resilient.
            </p>
          </div>

          {/* Row 1: Zero-Trust Cybersecurity & Regulatory Compliance */}
          <div className="cloud-benefit-row">
            <div className="glue-grid" style={{ alignItems: "center" }}>
              <div className="glue-grid__col glue-grid__col--span-6">
                <div className="cloud-floating-photo-card">
                  <div className="cloud-floating-photo-tape">
                    <StripeTape83 fill="#f9a144" />
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ie5nmxie5nmxie5n.jpg?alt=media&token=23ffc884-cfe7-4505-91cf-3c23c8b8a0f4"
                    alt="Zero-Trust Cybersecurity and Compliance Governance"
                    style={{ height: 360, objectFit: "cover", width: "100%", borderRadius: 16 }}
                  />
                  <div style={{ marginTop: -12, marginLeft: 28 }}>
                    <StripeTape91 fill="#2b1600" />
                  </div>
                </div>
              </div>

              <div className="glue-grid__col glue-grid__col--span-6">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "#2b1600",
                    color: "#f9a144",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    boxShadow: "0 4px 12px rgba(43, 22, 0, 0.16)",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#f9a144" }}>
                    security
                  </span>
                </div>

                <span
                  className="glue-eyebrow"
                  style={{
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    color: "#2b1600",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  PILLAR 01 • ZERO-TRUST CYBERSECURITY &amp; REGULATORY COMPLIANCE
                </span>
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 18 }}>
                  NIST SP 800-171, CMMC 2.0, SOC 2 &amp; Continuous Threat Defense
                </h3>
                <ul className="cloud-standards-list">
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Identity-First Zero Trust:</strong> Phishing-resistant MFA (FIDO2/Passkeys), conditional
                      access policies, privileged access management (PAM), and micro-segmented networks.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>24/7 Managed Detection &amp; Response (MDR):</strong> Real-time endpoint telemetry,
                      automated isolation of compromised hosts, and vulnerability patch automation.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Government &amp; Enterprise Audit Readiness:</strong> Turnkey compliance documentation for{" "}
                      <Link to="/contract-procurement-and-writing" style={{ color: "#2b1600", fontWeight: 600, textDecoration: "underline" }}>
                        SAM.gov, Maryland eMMA &amp; UNGM contractors
                      </Link>.
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Schedule Cyber &amp; Compliance Review</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Cloud Infrastructure, SD-WAN & 24/7 Helpdesk */}
          <div className="cloud-benefit-row">
            <div className="glue-grid" style={{ alignItems: "center" }}>
              <div className="glue-grid__col glue-grid__col--span-6">
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "#2b1600",
                    color: "#f9a144",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    boxShadow: "0 4px 12px rgba(43, 22, 0, 0.16)",
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#f9a144" }}>
                    dns
                  </span>
                </div>

                <span
                  className="glue-eyebrow"
                  style={{
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    color: "#c86d10",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  PILLAR 02 • CLOUD INFRASTRUCTURE, SD-WAN &amp; 24/7 HELPDESK
                </span>
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 18 }}>
                  Global Workplace IT, Warehouse RF/Wi-Fi &amp; Hybrid Cloud SRE
                </h3>
                <ul className="cloud-standards-list">
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>L1–L3 Managed Helpdesk &amp; Endpoint Lifecycle:</strong> Automated Windows/macOS/Linux
                      and mobile fleet provisioning via Microsoft Intune and Jamf.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Industrial &amp; Warehouse Network Engineering:</strong> High-density Wi-Fi 6E/7
                      heatmapping, rugged handheld RF roaming, and redundant fiber/5G SD-WAN for logistics hubs.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Immutable BCDR &amp; Cloud FinOps:</strong> Sub-15 minute Recovery Time Objectives (RTO)
                      and continuous cloud cost optimization across AWS, Azure, and GCP.
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Deploy Managed Cloud &amp; NOC</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                </div>
              </div>

              <div className="glue-grid__col glue-grid__col--span-6">
                <div className="cloud-floating-photo-card">
                  <div className="cloud-floating-photo-tape">
                    <StripeTape83 fill="#c86d10" />
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf"
                    alt="24/7 Enterprise IT Helpdesk and Cloud Operations"
                    style={{ height: 360, objectFit: "cover", width: "100%", borderRadius: 16 }}
                  />
                  <div style={{ marginTop: -12, marginRight: 28, display: "flex", justifyContent: "flex-end" }}>
                    <StripeTape91 fill="#c86d10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 9-TILE IT SOLUTIONS MATRIX */}
      <section style={{ padding: "96px 0", background: "#ffffff" }}>
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 48px" }}>
            <span
              className="glue-eyebrow"
              style={{
                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                color: "#c86d10",
                fontWeight: 600,
                letterSpacing: "0.06em",
                display: "inline-block",
                marginBottom: 12,
              }}
            >
              COMPLETE IT SOLUTIONS CATALOG
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Everything required to run a{" "}
              <span className="decorated-text underline">modern digital enterprise</span>
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                maxWidth: 780,
                margin: "16px auto 0",
              }}
            >
              Explore our end-to-end managed IT, cybersecurity, network engineering, and cloud governance capabilities
              designed for zero-downtime commercial and public-sector operations.
            </p>
          </div>

          <div className="bsp-logo-showcase-grid">
            {itCapabilities.map((item) => (
              <div key={item.name} className="bsp-logo-tile">
                <div
                  style={{
                    background: item.bg,
                    color: item.fg,
                    padding: "6px 16px",
                    borderRadius: 999,
                    fontWeight: 500,
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    marginBottom: 6,
                    border: "1px solid rgba(249, 161, 68, 0.35)",
                    display: "inline-block",
                  }}
                >
                  {item.name}
                </div>
                <h3
                  className="glue-headline glue-headline--headline-5"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--qd-font-size-h5, 1.35em)",
                    color: "#1e1e1e",
                    margin: "4px 0",
                  }}
                >
                  {item.role}
                </h3>
                <p
                  style={{
                    fontSize: "var(--qd-font-size-body, 1em)",
                    lineHeight: 1.6,
                    color: "#3b3b3b",
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WARM CREAM LEADERSHIP QUOTE SECTION */}
      <section className="accelerator-home-quote">
        <div className="glue-page">
          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-7 glue-grid__col--align-middle">
              <div style={{ marginBottom: 16 }}>
                <QuoteMarkPinkSvg />
              </div>

              <h3
                className="glue-headline glue-headline--headline-3"
                style={{ color: "#2b1600", fontWeight: 500, marginBottom: 20 }}
              >
                &ldquo;Resilient IT infrastructure isn&apos;t judged when systems are idle—it&apos;s proven by sub-15
                minute incident response, immutable ransomware recovery, and continuous Zero-Trust enforcement across
                every branch, warehouse, and cloud workload.&rdquo;
              </h3>

              <div style={{ marginBottom: 16 }}>
                <QuoteMarkPinkSvg flip />
              </div>

              <span
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  color: "#2b1600",
                  marginBottom: 4,
                  display: "block",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                PRINCIPAL CLOUD INFRASTRUCTURE &amp; CYBERSECURITY ARCHITECT
              </span>
              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", margin: 0 }}>
                Quinn Daisies Managed IT &amp; Enterprise Security Division
              </p>
            </div>

            <div className="glue-grid__col glue-grid__col--span-5 glue-grid__col--align-middle">
              <div style={{ position: "relative" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_bb7zlobb7zlobb7z.jpg?alt=media&token=98dcf4a8-ff36-45a9-9f5a-930d4ed06594"
                  alt="Quinn Daisies Enterprise IT and Cybersecurity Leadership"
                  style={{
                    width: "100%",
                    minHeight: 460,
                    objectFit: "cover",
                    borderRadius: 25,
                    boxShadow: "0 14px 32px rgba(43, 22, 0, 0.18)",
                    display: "block",
                  }}
                />
                <div style={{ marginTop: -12, display: "flex", justifyContent: "center" }}>
                  <StripeTape210 fill="#f9a144" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItSolutionsPage;
