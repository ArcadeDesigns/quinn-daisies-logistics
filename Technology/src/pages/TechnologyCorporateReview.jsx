import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
  QuoteMarkPinkSvg,
  GreenTickSvg,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const TechnologyCorporateReview = () => {
  const containerRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({ 0: true, 1: false, 2: false });

  const toggleCard = (idx) => {
    setExpandedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const reviewPillars = [
    {
      eyebrow: "REVIEW PILLAR 01 • CONTINUOUS SDLC & ARCHITECTURE AUDITS",
      icon: "layers",
      title: "Ongoing Architectural & SDLC Governance",
      lead: "Quinn Daisies Technology governance doesn't stop at initial deployment. Once an enterprise or government agency partners with our engineering division, we conduct continuous architectural, security, and performance reviews across the entire software development lifecycle.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67",
      imageLeft: true,
      bullets: [
        "Quarterly C4 Architecture, Code Quality, and Technical Debt Audits across .NET Core, C#, Python, React, and Java",
        "Automated CI/CD Pipeline, SAST/DAST Vulnerability Scanning, and Container Hardening Reviews",
        "Database Query Optimization, Read-Replica Scaling, and Sub-50ms API Latency Benchmarking",
        "Executive CTO Scorecards with actionable modernization roadmaps and TCO reduction metrics",
      ],
      quote:
        "Quinn Daisies' Technology Corporate Review transformed our legacy monolith into a resilient .NET 8 and React microservice platform while cutting cloud infrastructure spend by 34%.",
      author: "Enterprise Architecture Review Board • North American Logistics & Trade Client",
    },
    {
      eyebrow: "REVIEW PILLAR 02 • SAM.GOV, MARYLAND eMMA & UNGM EXECUTION",
      icon: "account_balance",
      title: "Global Multi-Agency & Enterprise Network",
      lead: "Our technology division serves a global ecosystem of commercial enterprises, U.S. Federal agencies (SAM.gov), Maryland state/county departments (eMMA), and United Nations organizations (UNGM) across four continents.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98",
      imageLeft: false,
      bullets: [
        "Verified contract execution and technical compliance across SAM.gov, Maryland eMMA (CATS+), and UNGM",
        "Cross-border engineering delivery centers supporting North America, Europe, Asia, and Africa",
        "Interoperable EDI, REST, GraphQL, and gRPC integrations connecting customs, ERP, and financial gateways",
        "24/7/365 follow-the-sun Site Reliability Engineering (SRE) and L1–L3 managed IT operations",
      ],
      quote:
        "Having a single partner capable of writing compliant UNGM & Federal technical volumes and immediately deploying the C#, Python, and Kotlin engineering teams to build them is unmatched.",
      author: "Director of Public Sector Programs • Multilateral Supply Chain Initiative",
    },
    {
      eyebrow: "REVIEW PILLAR 03 • ZERO-TRUST SECURITY & POLYGLOT CERTIFICATION",
      icon: "shield_lock",
      title: "Backed by Quinn Daisies Polyglot Engineering",
      lead: "Completing a Quinn Daisies Corporate Technology Review certifies that your Web, Mobile, Desktop, Cloud, and AI systems meet rigorous federal-grade reliability, accessibility (Section 508), and zero-trust security standards.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
      imageLeft: true,
      bullets: [
        "Full-stack codebase proficiency: .NET Core, ASP.NET, C#, Python, JavaScript/TypeScript, Java, React, Kotlin, Kivy, and Flet",
        "NIST SP 800-171, SOC 2 Type II, ISO 27001, and GDPR security posture validation",
        "Production AI & Enterprise RAG readiness audits with hallucination guardrails and audit logging",
        "Dedicated Principal Solution Architects assigned to every long-term enterprise agreement",
      ],
      quote:
        "Their polyglot mastery allowed us to unify our Windows C# WPF workstations, Python Kivy warehouse touchscreens, and Kotlin Android driver apps under one cohesive cloud architecture.",
      author: "VP of Operations & Engineering • Global Cold-Chain & Distribution Fleet",
    },
  ];

  const portfolioShowcase = [
    {
      name: "FinCore .NET 8 Gateway",
      summary: "High-frequency ASP.NET Core & C# settlement microservices processing 18,000+ req/sec.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_3kz8z63kz8z63kz8.jpg?alt=media&token=1e0442c2-4145-4878-b6e9-6d9924b2292f",
      to: "/software-development-and-engineering",
    },
    {
      name: "GovCapture AI & SAM.gov Suite",
      summary: "Automated RFP compliance matrix & Shipley technical volume engine for Federal & eMMA bids.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98",
      to: "/contract-procurement-and-writing",
    },
    {
      name: "KivyTouch Warehouse HMI",
      summary: "GPU-accelerated Python Kivy & C# WPF industrial touch terminals for automated sortation.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_vqyaewvqyaewvqya.jpg?alt=media&token=9f82c276-ae95-4e6b-9964-3c7b324fa358",
      to: "/desktop-application-development",
    },
    {
      name: "KotlinFleet Android Telemetry",
      summary: "Offline-first Kotlin & Jetpack Compose mobile app for 4,500+ cross-border freight drivers.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60",
      to: "/mobile-application-development",
    },
    {
      name: "FletOps Executive Cockpit",
      summary: "Cross-platform Python Flet (Flutter) desktop & web analytics portal for real-time KPIs.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ppcb8nppcb8nppcb.jpg?alt=media&token=559a6c92-8f13-49a7-a190-a8250d8b66d2",
      to: "/application-development",
    },
    {
      name: "OmniRAG Enterprise Assistant",
      summary: "Air-gapped Python FastAPI & C# Semantic Kernel RAG engine over 2.4M technical documents.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa",
      to: "/artificial-intelligence",
    },
    {
      name: "GeoAuthority Search Engine",
      summary: "JSON-LD Knowledge Graph & Generative Engine Optimization (GEO) driving +290% AI citations.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_c4bf6ac4bf6ac4bf.jpg?alt=media&token=8ae19566-5ea0-4cde-892b-268cd74f7b34",
      to: "/seo-and-geo",
    },
    {
      name: "ZeroTrust Cloud & NOC",
      summary: "Multi-region Kubernetes, Terraform IaC & 24/7 managed IT helpdesk with 99.99% uptime SLA.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_80vl5580vl5580vl.jpg?alt=media&token=7ad9d05f-306d-4243-b72f-2fb1db923f83",
      to: "/it-solutions",
    },
  ];

  const reviewHighlights = [
    {
      tag: "SAM.GOV & MARYLAND eMMA",
      title: "100% Section L/M Compliance Record Across Federal, State & UNGM Technical Proposals",
      to: "/contract-procurement-and-writing",
    },
    {
      tag: "FULL-SDLC ARCHITECTURE",
      title: "99.99% Production Availability Across .NET Core, Python, Java Spring & React Cloud Workloads",
      to: "/software-development-and-engineering",
    },
    {
      tag: "AI & GENERATIVE ENGINE (GEO)",
      title: "Enterprise RAG & Multi-Agent Automation Deployed with Zero Data Leakage Governance",
      to: "/artificial-intelligence",
    },
    {
      tag: "WORKFORCE & IT SUPPORT",
      title: "Sub-15 Minute Critical SLA Response & Hands-On Corporate Engineering Bootcamps",
      to: "/workforce-development-and-training",
    },
  ];

  const ecosystemCategories = [
    { label: "Contract Procurement & Writing (SAM.gov / UNGM / MD)", to: "/contract-procurement-and-writing" },
    { label: "Software Development & Full-SDLC Engineering", to: "/software-development-and-engineering" },
    { label: "Artificial Intelligence & Enterprise RAG", to: "/artificial-intelligence" },
    { label: "Enterprise Web & SaaS Application Development", to: "/application-development" },
    { label: "Native & Cross-Platform Mobile Apps (Kotlin / MAUI / Flet)", to: "/mobile-application-development" },
    { label: "Desktop & Industrial HMI Systems (C# WPF / WinUI / Kivy)", to: "/desktop-application-development" },
    { label: "IT Solutions, Cloud DevOps & Zero-Trust Security", to: "/it-solutions" },
    { label: "SEO, GEO & Full-Funnel Digital Marketing", to: "/seo-and-geo" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".alumni .hero-slides > div",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".al-campus--container",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".alumni-ongoing-support",
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".alumni-community-carousel-grid .alumni-carousel-card",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".alumni-community-carousel-grid",
            start: "top 82%",
          },
        }
      );

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
        title="Technology Corporate Review & Architecture Audit | Quinn Daisies Technology"
        description="Executive Technology Corporate Review, SDLC maturity assessment, portfolio performance, and government contracting credentials (SAM.gov, Maryland eMMA, UNGM) by Quinn Daisies Technology."
        keywords="technology corporate review, architecture audit, SDLC assessment, Quinn Daisies Technology credentials, past performance SAM.gov Maryland eMMA UNGM, enterprise software review"
        canonicalUrl="/technology-corporate-review"
      />

      <div className="alumni">
        {/* SECTION 1: MULTI-SLIDE MOSAIC HERO */}
        <section className="hero">
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
              className="hero-preheading"
              style={{
                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                marginBottom: 0,
              }}
            >
              Quinn Daisies Technology Corporate Review
            </span>
            <StripeTape210 />
          </div>

          <div className="hero-slides">
            <div className="glue-grid__col glue-grid__col--span-5">
              <h1
                className="glue-headline glue-headline--headline-1 hero-heading"
                style={{ marginBottom: 0 }}
              >
                Engineering{" "}
                <span style={{ color: "#c86d10", display: "block" }}>
                  excellence,
                </span>
                <span className="decorated-text underline">verified at scale.</span>
              </h1>
            </div>

            <div className="glue-grid__col glue-grid__col--span-4">
              <div className="hero-image" style={{ height: 380 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b"
                  alt="Quinn Daisies Principal Engineering Review Board"
                />
              </div>
            </div>

            <div
              className="glue-grid__col glue-grid__col--span-3"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div className="hero-image" style={{ height: 182 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_auxrf1auxrf1auxr.jpg?alt=media&token=2058152e-78bd-4467-b7fa-efc20afc2cd7"
                  alt="Polyglot Codebase Governance"
                />
              </div>
              <div className="hero-image" style={{ height: 182 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_80vl5580vl5580vl.jpg?alt=media&token=7ad9d05f-306d-4243-b72f-2fb1db923f83"
                  alt="Cloud SLA and Security Telemetry"
                />
              </div>
            </div>
          </div>

          <div className="glue-grid" style={{ alignItems: "center", marginTop: 24 }}>
            <div className="glue-grid__col glue-grid__col--span-7">
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 0,
                }}
              >
                Quinn Daisies Technology helps commercial enterprises, U.S. Federal agencies (<strong>SAM.gov</strong>),
                Maryland state departments (<strong>eMMA</strong>), and multilateral organizations (<strong>UNGM</strong>)
                audit, modernize, and scale mission-critical software, AI, and IT infrastructure — far beyond a single
                project release.
              </p>
            </div>
            <div
              className="glue-grid__col glue-grid__col--span-5"
              style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}
            >
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Request Corporate Review</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
              <a
                href="#benefits-connect"
                className="ApplicationButton glue-button glue-button--medium-emphasis"
              >
                <span>Explore Audit Pillars</span>
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: HERO DESCRIPTION STATEMENT BANNER */}
        <section className="hero-description">
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
            EXECUTIVE ARCHITECTURE GOVERNANCE &amp; PAST PERFORMANCE
          </span>
          <h2 className="glue-headline glue-headline--headline-3 hero-description-content">
            We are committed to engineering resilient, audit-ready digital ecosystems so organizations everywhere can
            turn complex operational, regulatory, and technical challenges into{" "}
            <span className="decorated-text underline">measurable competitive advantage.</span>
          </h2>
        </section>

        {/* SECTION 3: 3 ALTERNATING EXPANDABLE BENEFIT CARDS + POST-IT QUOTES */}
        <section id="benefits-connect" className="benefits-connect alumni-ongoing-support">
          <div className="glue-page">
            <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 32px" }}>
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
                CORPORATE AUDIT &amp; ASSURANCE PILLARS
              </span>
              <h2 className="glue-headline glue-headline--headline-2">
                Continuous architectural{" "}
                <span className="decorated-text underline">oversight &amp; certification</span>
              </h2>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  maxWidth: 760,
                  margin: "16px auto 0",
                }}
              >
                Inspect how our Principal Engineering Review Board audits code quality, federal security compliance, and
                production SLA resilience across every client engagement.
              </p>
            </div>

            {reviewPillars.map((pillar, idx) => {
              const isExpanded = !!expandedCards[idx];
              return (
                <div key={pillar.title} className="al-campus--container">
                  <div className="glue-grid" style={{ alignItems: "center" }}>
                    {pillar.imageLeft && (
                      <div className="glue-grid__col glue-grid__col--span-5">
                        <div className="cloud-floating-photo-card">
                          <div className="cloud-floating-photo-tape">
                            <StripeTape83 fill="#f9a144" />
                          </div>
                          <img
                            src={pillar.image}
                            alt={pillar.title}
                            style={{ height: 370, width: "100%", objectFit: "cover", borderRadius: 16 }}
                          />
                          <div style={{ marginTop: -12, marginLeft: 28 }}>
                            <StripeTape91 fill="#2b1600" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="glue-grid__col glue-grid__col--span-7">
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
                          {pillar.icon}
                        </span>
                      </div>

                      <span
                        className="glue-eyebrow"
                        style={{
                          fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                          color: idx % 2 === 1 ? "#c86d10" : "#2b1600",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        {pillar.eyebrow}
                      </span>

                      <h3
                        className="glue-headline glue-headline--headline-4 al-campus--card-heading"
                        style={{ marginBottom: 16 }}
                      >
                        {pillar.title}
                      </h3>

                      <p
                        className="al-campus--card-subheading"
                        style={{
                          color: "#3b3b3b",
                          fontSize: "var(--qd-font-size-body, 1em)",
                          lineHeight: 1.65,
                          marginBottom: 16,
                        }}
                      >
                        {pillar.lead}
                      </p>

                      <button
                        type="button"
                        className="alumni-read-toggle-btn"
                        onClick={() => toggleCard(idx)}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Show less details" : "Inspect audit deliverables"}</span>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                          {isExpanded ? "expand_less" : "expand_more"}
                        </span>
                      </button>

                      {isExpanded && (
                        <div style={{ marginTop: 24 }}>
                          <ul className="cloud-standards-list">
                            {pillar.bullets.map((b) => (
                              <li key={b}>
                                <GreenTickSvg />
                                <span
                                  style={{
                                    fontSize: "var(--qd-font-size-body, 1em)",
                                    lineHeight: 1.65,
                                    color: "#3b3b3b",
                                  }}
                                >
                                  {b}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className={`post-it-card ${idx % 2 === 1 ? "rotate-right" : ""}`}>
                            <div style={{ marginBottom: 12 }}>
                              <QuoteMarkPinkSvg />
                            </div>
                            <p
                              style={{
                                fontSize: "var(--qd-font-size-body-large, 1.1em)",
                                lineHeight: 1.65,
                                color: "#2b1600",
                                marginBottom: 12,
                              }}
                            >
                              &ldquo;{pillar.quote}&rdquo;
                            </p>
                            <div
                              style={{
                                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                                fontWeight: 600,
                                letterSpacing: "0.04em",
                                color: "#6b625b",
                              }}
                            >
                              — {pillar.author}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {!pillar.imageLeft && (
                      <div className="glue-grid__col glue-grid__col--span-5">
                        <div className="cloud-floating-photo-card">
                          <div className="cloud-floating-photo-tape">
                            <StripeTape83 fill="#c86d10" />
                          </div>
                          <img
                            src={pillar.image}
                            alt={pillar.title}
                            style={{ height: 370, width: "100%", objectFit: "cover", borderRadius: 16 }}
                          />
                          <div style={{ marginTop: -12, marginRight: 28, display: "flex", justifyContent: "flex-end" }}>
                            <StripeTape91 fill="#c86d10" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: GLOBAL COMMUNITY / PORTFOLIO CAROUSEL */}
        <section className="alumni-community-section">
          <div className="glue-page">
            <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
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
                VERIFIED PRODUCTION PLATFORMS &amp; CASE STUDIES
              </span>
              <h2 className="glue-headline glue-headline--headline-2">
                Our global <span className="decorated-text underline">engineering portfolio</span>
              </h2>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  maxWidth: 740,
                  margin: "16px auto 0",
                }}
              >
                Explore representative platforms architected, audited, and operated by Quinn Daisies across .NET Core,
                C#, Python, React, Java, Kotlin, Kivy, and Flet.
              </p>
            </div>

            <div className="alumni-community-carousel-grid">
              {portfolioShowcase.map((card) => (
                <Link key={card.name} to={card.to} className="alumni-carousel-card">
                  <img src={card.img} alt={card.name} />
                  <div className="alumni-carousel-card-body">
                    <div>
                      <h3
                        className="glue-headline glue-headline--headline-5"
                        style={{ color: "#2b1600", marginBottom: 8 }}
                      >
                        {card.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "var(--qd-font-size-body, 1em)",
                          lineHeight: 1.6,
                          color: "#3b3b3b",
                          marginBottom: 16,
                        }}
                      >
                        {card.summary}
                      </p>
                    </div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#c86d10",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span>Inspect architecture</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: CORPORATE BENCHMARKS BLOCK */}
        <div className="alumni-news-community">
          <div className="alumni-community-news-block">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 28,
              }}
            >
              <div>
                <span
                  className="glue-eyebrow"
                  style={{
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    color: "#f9a144",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  CORPORATE BENCHMARKS &amp; AUDIT CREDENTIALS
                </span>
                <h2 className="glue-headline glue-headline--headline-2" style={{ color: "#ffffff", margin: 0 }}>
                  Quinn Daisies Technology in review
                </h2>
              </div>
              <StripeTape210 />
            </div>

            <div className="glue-grid">
              {reviewHighlights.map((item) => (
                <div key={item.title} className="glue-grid__col glue-grid__col--span-6">
                  <Link
                    to={item.to}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(249, 161, 68, 0.3)",
                      borderRadius: 16,
                      padding: 24,
                      textDecoration: "none",
                      color: "#ffffff",
                      height: "100%",
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                          fontWeight: 600,
                          color: "#f9a144",
                          letterSpacing: "0.08em",
                          display: "block",
                        }}
                      >
                        {item.tag}
                      </span>
                      <h3 className="glue-headline glue-headline--headline-4" style={{ color: "#ffffff", margin: "10px 0 16px" }}>
                        {item.title}
                      </h3>
                    </div>
                    <span
                      style={{
                        color: "#f9a144",
                        fontWeight: 600,
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span>Review division capabilities</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        arrow_forward
                      </span>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 6: EXPLORE DIVISIONS / CATEGORY PILL LIST */}
        <div className="alumni-explore">
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
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
              EXPLORE QUINN DAISIES TECHNOLOGY DIVISIONS
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Explore our specialized <span className="decorated-text underline">engineering &amp; contracting</span> practices
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                margin: "16px auto 0",
              }}
            >
              Navigate directly to any specialized practice area within the Quinn Daisies Technology &amp; IT Ecosystem.
            </p>
          </div>

          <div className="alumni-category-pill-grid">
            {ecosystemCategories.map((cat) => (
              <Link key={cat.label} to={cat.to} className="alumni-category-pill-item">
                <span style={{ fontSize: "var(--qd-font-size-body, 1em)" }}>{cat.label}</span>
                <span className="material-symbols-outlined" style={{ color: "#c86d10", fontSize: 18 }}>
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 28 }}>
            <Link
              to="/technology-products"
              className="ApplicationButton glue-button glue-button--high-emphasis"
            >
              <span>See Full Technology Product Catalog</span>
              <span className="material-symbols-outlined">memory</span>
            </Link>
          </div>
        </div>

        {/* SECTION 7: JOIN OUR ECOSYSTEM 2-CARD CALLOUT */}
        <div className="join-alumni join-alumni-container glue-text-center">
          <div style={{ maxWidth: 780, margin: "0 auto 40px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <StripeTape210 />
            </div>
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
              PARTNERSHIPS &amp; CONTRACTING VEHICLES
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Partner with <span className="decorated-text underline">Quinn Daisies Technology</span>
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                margin: "16px auto 0",
              }}
            >
              Find the right engagement model to accelerate your software roadmap, win government contracts, or upskill
              your technical workforce.
            </p>
          </div>

          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-6">
              <div className="animated-card" style={{ textAlign: "left" }}>
                <div className="glue-card__asset" style={{ position: "relative" }}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98"
                    alt="Government Contracting and Proposal Capture"
                  />
                  <div style={{ position: "absolute", bottom: -10, right: 20 }}>
                    <StripeTape83 />
                  </div>
                </div>
                <div className="glue-card__content">
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
                    GOVERNMENT &amp; MULTILATERAL CAPTURE
                  </span>
                  <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 10 }}>
                    SAM.gov, Maryland eMMA &amp; UNGM Contracting
                  </h3>
                  <p
                    style={{
                      color: "#3b3b3b",
                      fontSize: "var(--qd-font-size-body, 1em)",
                      lineHeight: 1.65,
                      marginBottom: 20,
                      flexGrow: 1,
                    }}
                  >
                    Partner with Quinn Daisies as a Prime, Subcontractor, or dedicated Shipley proposal engineering team.
                  </p>
                  <div>
                    <Link
                      to="/contract-procurement-and-writing"
                      className="ApplicationButton glue-button glue-button--high-emphasis"
                    >
                      <span>Find out more</span>
                      <span className="material-symbols-outlined">memory</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6">
              <div className="animated-card" style={{ textAlign: "left" }}>
                <div className="glue-card__asset" style={{ position: "relative" }}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ksm6tbksm6tbksm6.jpg?alt=media&token=0a33b5f6-7d28-4f52-bc3b-e42778a0984c"
                    alt="Quinn Daisies Technology Programs and Accelerators"
                  />
                  <div style={{ position: "absolute", bottom: -10, right: 20 }}>
                    <StripeTape83 fill="#c86d10" />
                  </div>
                </div>
                <div className="glue-card__content">
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
                    PROGRAMS &amp; CO-ENGINEERING
                  </span>
                  <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 10 }}>
                    Quinn Daisies Technology Programs
                  </h3>
                  <p
                    style={{
                      color: "#3b3b3b",
                      fontSize: "var(--qd-font-size-body, 1em)",
                      lineHeight: 1.65,
                      marginBottom: 20,
                      flexGrow: 1,
                    }}
                  >
                    Explore our Cloud Modernization, AI Immersion, Full-SDLC Co-Engineering, and Workforce Programs.
                  </p>
                  <div>
                    <Link
                      to="/technology-programs"
                      className="ApplicationButton glue-button glue-button--high-emphasis"
                    >
                      <span>Explore Programs</span>
                      <span className="material-symbols-outlined">memory</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCorporateReview;
