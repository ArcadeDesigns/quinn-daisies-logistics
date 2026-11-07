import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
  StripeTapeVertical26,
  GreenTickSvg,
  QuinnProductModal,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const ContractProcurementWriting = () => {
  const containerRef = useRef(null);
  const [selectedPortalFilter, setSelectedPortalFilter] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const procurementFaqs = [
    {
      q: "How does Quinn Daisies structure SAM.gov & U.S. Federal RFPs under FAR and DFARS?",
      a: "All federal proposals are engineered in strict accordance with the Federal Acquisition Regulation (FAR), Defense Federal Acquisition Regulation Supplement (DFARS), and agency-specific supplements. We support Prime bids, Subcontractor technical and pricing volumes, Teaming Agreements (TAs), Joint Ventures, GSA MAS task orders, IDIQs, and GWACs with 100% Section L and Section M compliance matrix coverage.",
    },
    {
      q: "Do you support State of Maryland (eMMA / CATS+) and local county government procurements?",
      a: "Yes. Headquartered in Frederick, Maryland, Quinn Daisies supports Maryland state agencies (DoIT CATS+ TORFPs, MDOT, MDH, DGS) as well as Frederick, Montgomery, Prince George's, Howard, and Baltimore county procurements with full MBE/DBE/VSBE and Small Business Reserve (SBR) utilization compliance.",
    },
    {
      q: "Which international agencies are covered under your UNGM (United Nations Global Marketplace) tender writing?",
      a: "Our international multilateral capture and tender preparation covers UNDP, UNICEF, UNOPS, WHO, WFP, UNHCR, and multilateral development banks across North America, Europe, Asia, and Africa—spanning EOIs, ITBs, RFPs, and multi-year Long-Term Agreements (LTAs).",
      linkTo: "/technology-contact-us",
      linkText: "Schedule a confidential RFP capture briefing",
    },
    {
      q: "What is included in your Shipley proposal management and Color Team review process?",
      a: "Every engagement includes solicitation Shredding & Compliance Matrices, Capture Win-Theme Architecture, Pink Team (storyboard & outline), Red Team (independent scoring simulation against Section M evaluation criteria), Gold Team (executive sign-off & Basis of Estimate pricing audit), and compliant portal submission.",
    },
    {
      q: "Can Quinn Daisies both write the technical proposal and deliver the underlying software or IT scope?",
      a: "Yes. Unlike generalist grant writers, our proposals are authored alongside Principal Solution Architects who actively build and operate systems in .NET Core, ASP.NET, C#, Python, React, Java, Kotlin, Kivy, Flet, Enterprise AI/RAG, and 24/7 Managed Cloud/IT Support—allowing us to serve as your technical writer, Prime contractor, or specialized subcontractor.",
      linkTo: "/software-development-and-engineering",
      linkText: "Explore our Full-SDLC Engineering capabilities",
    },
  ];

  const procurementPortals = [
    {
      name: "SAM.gov (U.S. Federal)",
      role: "Federal System for Award Management",
      detail: "UEI & CAGE registration, Sources Sought, RFIs, RFPs, RFQs, GSA MAS, IDIQs, GWACs & FAR/DFARS compliance.",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: "Maryland Gov (eMMA)",
      role: "eMaryland Marketplace Advantage",
      detail: "Maryland DoIT CATS+, MDOT, MDH, County/Municipal bids, MBE/DBE/VSBE & SBR proposal engineering.",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "UNGM (United Nations)",
      role: "UN Global Marketplace Tenders",
      detail: "UNDP, UNICEF, UNOPS, WHO, WFP & UNHCR international ITBs, RFPs, EOIs & Long-Term Agreements (LTAs).",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Shipley Proposal Writing",
      role: "Pink, Red & Gold Team Reviews",
      detail: "Section L & M compliance matrices, win-theme development, technical volumes & executive summaries.",
      bg: "#f5efe8",
      fg: "#1e1e1e",
    },
    {
      name: "Technical & SDLC Volumes",
      role: "Polyglot Engineering Narratives",
      detail: "Architecture blueprints for .NET Core, C#, Python, React, Java, Kotlin, Kivy, Flet & Cloud DevOps bids.",
      bg: "#2b1600",
      fg: "#ffffff",
    },
    {
      name: "Cost, BOE & Pricing",
      role: "Price-to-Win & Labor Categories",
      detail: "FFP, T&M, and Cost-Plus Basis of Estimates (BOE), LCAT mapping, wrap rates & indirect rate justifications.",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Security & CMMC / NIST",
      role: "Federal & State Cyber Readiness",
      detail: "NIST SP 800-171, CMMC 2.0, FedRAMP, SOC 2 Type II, ISO 27001 & Section 508 VPAT accessibility compliance.",
      bg: "#f5efe8",
      fg: "#2b1600",
    },
    {
      name: "Capability Statements",
      role: "Agency Briefing & Teaming Decks",
      detail: "Tailored 1-page federal/state capability statements, Prime/Sub teaming agreements & joint venture packages.",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Past Performance & CPARS",
      role: "Relevant Contract Case Studies",
      detail: "Structured past performance questionnaires (PPQs), relevance matrices & quantifiable SLA outcome proof.",
      bg: "#fff4e6",
      fg: "#1e1e1e",
    },
  ];

  const bidCaseStudies = [
    {
      portal: "SAM.gov (U.S. Federal)",
      code: "NAICS 541511 / 541512",
      title: "Federal Enterprise Cloud Modernization, .NET Core Microservices & Zero-Trust DevSecOps RFP",
      agency: "U.S. Federal Civilian & Defense Agencies",
      summary:
        "Full Volume I (Technical Approach), Volume II (Management & Staffing), Volume III (Past Performance), and Volume IV (Cost/BOE) engineered to strict FAR Part 15 & Section L/M evaluation criteria.",
      deliverables: [
        "100% Section L & Section M cross-referenced compliance matrix with zero deficiencies",
        "C4 system architecture diagrams for ASP.NET Core, C#, Python FastAPI, React 19, and Kubernetes",
        "NIST SP 800-171 / FedRAMP High System Security Plan (SSP) and Section 508 VPAT narrative",
        "Key Personnel resumes, Labor Category (LCAT) mapping, and 30-60-90 day Phase-In Transition Plan",
      ],
      codebases: ["SAM.gov", "FAR/DFARS", ".NET Core", "C#", "Python", "React", "Kubernetes"],
    },
    {
      portal: "Maryland Government (eMMA)",
      code: "eMMA / CATS+ / MBE-VSBE",
      title: "Maryland State Agency Digital Portal, Mobile Field Operations & Managed IT Support",
      agency: "State of Maryland (DoIT, MDOT, MDH & County Procurements)",
      summary:
        "Turnkey Maryland technical and financial proposal packages engineered for eMaryland Marketplace Advantage (eMMA) task orders, TORFPs, and county RFPs across Frederick, Montgomery, Prince George's, and Baltimore.",
      deliverables: [
        "Complete Maryland MBE / DBE / VSBE / SBR subcontractor utilization and compliance attachments",
        "Full-stack application modernization plan using React, ASP.NET Core, Kotlin Android, and Python Flet",
        "24/7/365 Maryland-based helpdesk SLA governance and on-site Frederick/Baltimore escalation workflows",
        "Oral presentation slide decks and technical demonstration scripts for State evaluation committees",
      ],
      codebases: ["Maryland eMMA", "CATS+ TORFP", "MBE/VSBE", "React", "Kotlin", ".NET MAUI", "Cloud SLA"],
    },
    {
      portal: "UNGM (United Nations)",
      code: "UNGM Level 1 & 2 / LTA",
      title: "United Nations Global Supply Chain Telemetry, AI Document Intelligence & Multi-Region Software Tender",
      agency: "UNDP, UNICEF, WHO, WFP & UNOPS International Procurement",
      summary:
        "Comprehensive Technical & Commercial ITB/RFP submissions for UN agencies, combining Quinn Daisies' multimodal international logistics expertise with enterprise software and AI application engineering.",
      deliverables: [
        "UNGM Vendor Level 1 & Level 2 qualification, UN Supplier Code of Conduct & Sustainability compliance",
        "Multilingual web, mobile (Kotlin/Flet), and offline-first desktop (C# WPF / Python Kivy) field software architecture",
        "AI-driven customs, humanitarian cold-chain, and warehouse inventory tracking technical volumes",
        "Multi-currency commercial schedule of rates and Long-Term Agreement (LTA) service level commitments",
      ],
      codebases: ["UNGM", "UNDP / UNICEF / WHO", "Python AI", "Kivy / Flet", "Java Spring", "Global Logistics"],
    },
    {
      portal: "SAM.gov (U.S. Federal)",
      code: "NAICS 541614 / 488510",
      title: "Federal Supply Chain Visibility, Automated Warehouse HMI & Multimodal Freight Management IDIQ",
      agency: "Federal Logistics & Defense Transportation Commands",
      summary:
        "Integrated technology-plus-logistics proposal writing uniting EDI/API freight telemetry, C# & Python Kivy industrial touch terminals, and compliant federal freight forwarding.",
      deliverables: [
        "End-to-end EDI 204/210/214/856 & REST API integration architecture for government shippers",
        "Hardware-integrated desktop & tablet apps (C# WPF, WinUI 3, Python Kivy/Flet) for warehouse barcode/RFID scanning",
        "Past Performance narratives highlighting on-time delivery and real-time GPS/IoT shipment visibility",
      ],
      codebases: ["SAM.gov IDIQ", "NAICS 541614", "C# WPF/WinUI", "Python Kivy", "EDI & APIs"],
    },
    {
      portal: "Maryland Government (eMMA)",
      code: "State & Municipal RFP",
      title: "Workforce Upskilling, Technical Bootcamp & Enterprise IT Helpdesk Modernization Bid",
      agency: "Maryland Workforce & Educational Agencies",
      summary:
        "Proposal capture and curriculum engineering for state-funded technology workforce development, cyber readiness bootcamps, and managed L1–L3 educational IT support.",
      deliverables: [
        "Competency-based curriculum blueprints across .NET Core, C#, Python, React, Java, and Cloud DevOps",
        "Measurable placement, certification, and hands-on lab assessment frameworks",
        "Full compliance with Maryland state procurement forms, affidavits, and living-wage certifications",
      ],
      codebases: ["Maryland eMMA", "Workforce Training", "Managed IT", "Python & .NET", "Cybersecurity"],
    },
    {
      portal: "UNGM (United Nations)",
      code: "EOI / RFP International",
      title: "Multilateral Trade Facilitation Portal, Generative AI Policy Assistant & Data Analytics Platform",
      agency: "UN Agencies, Development Banks & AfCFTA Corridors",
      summary:
        "Technical bid writing and system architecture for cross-border trade portals, Enterprise RAG document assistants, and executive data lakes across emerging and developed markets.",
      deliverables: [
        "Sovereign cloud and air-gapped LLM / RAG deployment architecture (Python, FastAPI, pgvector, C# Semantic Kernel)",
        "Knowledge transference and local capacity-building plan for host-country ministries and UN field offices",
        "ISO 27001, GDPR, and UN Personal Data Protection and Privacy Principles compliance matrix",
      ],
      codebases: ["UNGM RFP", "Enterprise RAG", "Python FastAPI", "React SSR", "Data Lakes"],
    },
  ];

  const filteredStudies =
    selectedPortalFilter === "All"
      ? bidCaseStudies
      : bidCaseStudies.filter((item) => item.portal === selectedPortalFilter);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cloud-hero-section .glue-grid__col:first-child > *",
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
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.12,
        }
      );

      gsap.fromTo(
        ".cloud-benefit-row",
        { y: 36, opacity: 0 },
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

      gsap.fromTo(
        ".bsp-logo-showcase-grid .bsp-logo-tile",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bsp-logo-showcase-grid",
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
        title="Contract Procurement & Proposal Writing Services (SAM.gov, Maryland eMMA, UNGM) | Quinn Daisies Technology"
        description="End-to-end government contract procurement, capture management, and Shipley technical proposal writing across SAM.gov (U.S. Federal), Maryland Government (eMMA / CATS+), and UNGM (United Nations Global Marketplace)."
        keywords="contract procurement, government contract writing, SAM.gov proposal writing, UNGM tenders, Maryland government contracting eMMA, CATS+ TORFP, RFP RFQ RFI technical writer, Shipley proposal management, Frederick Maryland government contractor"
        canonicalUrl="/contract-procurement-and-writing"
        faqItems={procurementFaqs.map((item) => ({ question: item.q, answer: item.a }))}
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
            QUINN DAISIES GOVERNMENT CONTRACTING, CAPTURE &amp; TECHNICAL PROPOSAL ENGINEERING
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 2-COLUMN HERO WITH FLOATING PHOTO CARD & STRIPED TAPE */}
      <section className="cloud-hero-section accelerator-landing-hero">
        <div className="glue-page">
          <div className="glue-grid" style={{ alignItems: "center" }}>
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div>
                <div style={{ marginBottom: 16 }}>
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
                    SAM.GOV • MARYLAND eMMA • UNGM • SHIPLEY CAPTURE
                  </span>
                </div>

                <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
                  Win more government &amp; multilateral contracts with{" "}
                  <span className="decorated-text underline">Quinn Daisies</span>
                </h1>

                <p
                  style={{
                    color: "#3b3b3b",
                    fontSize: "var(--qd-font-size-body-large, 1.15em)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  From <strong>SAM.gov</strong> U.S. Federal RFPs and <strong>Maryland Government (eMMA / CATS+)</strong>{" "}
                  task orders to <strong>UNGM (United Nations Global Marketplace)</strong> international tenders — we
                  architect compliant, high-scoring technical proposals, capability statements, and full-SDLC software &amp;
                  IT delivery packages.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 14 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Request RFP / Proposal Support</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                  <a
                    href="#procurement-vehicles"
                    className="ApplicationButton glue-button glue-button--medium-emphasis"
                  >
                    <span>Explore SAM.gov, eMMA &amp; UNGM</span>
                    <span className="material-symbols-outlined">arrow_downward</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="cloud-floating-photo-card">
                <div className="cloud-floating-photo-tape">
                  <StripeTape83 fill="#f9a144" />
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98"
                  alt="Quinn Daisies Government Contract Procurement and Technical Proposal Writing Team"
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
                      Prime, Subcontractor &amp; Proposal Engineering
                    </span>
                    <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", fontWeight: 600, color: "#2b1600" }}>
                      SAM.gov • Maryland eMMA • UNGM • Shipley Color Reviews
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
                    100% Section L/M Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CREAM BENEFITS CONTAINER */}
      <section id="procurement-vehicles" className="cloud-google-benefits-container">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 56px" }}>
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
              GOVERNMENT &amp; MULTILATERAL PROCUREMENT ECOSYSTEMS
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Three core contracting arenas,{" "}
              <span className="decorated-text underline">engineered to win</span>
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
              Whether we are bidding as a Prime Contractor, teaming as a specialized technical Subcontractor, or writing
              and engineering your organization&apos;s entire proposal response, Quinn Daisies brings deep regulatory
              mastery across Federal, State, and United Nations procurement portals.
            </p>
          </div>

          <div className="cloud-benefit-row">
            <div className="glue-grid" style={{ alignItems: "center" }}>
              <div className="glue-grid__col glue-grid__col--span-6">
                <div className="cloud-floating-photo-card">
                  <div className="cloud-floating-photo-tape">
                    <StripeTape83 fill="#f9a144" />
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b"
                    alt="SAM.gov Federal Contract Capture and FAR DFARS Proposal Engineering"
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
                    gavel
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
                  ARENA 01 • U.S. FEDERAL GOVERNMENT (SAM.GOV)
                </span>
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 16 }}>
                  SAM.gov Capture, RFPs, Sources Sought &amp; FAR/DFARS Technical Volumes
                </h3>
                <p
                  style={{
                    color: "#3b3b3b",
                    fontSize: "var(--qd-font-size-body, 1em)",
                    lineHeight: 1.65,
                    marginBottom: 18,
                  }}
                >
                  We manage the complete federal procurement lifecycle on <strong>SAM.gov</strong> — from UEI &amp; CAGE
                  code readiness and market intelligence to shaping requirements through Sources Sought / RFIs and
                  producing evaluator-ready RFP &amp; RFQ volumes.
                </p>
                <ul className="cloud-standards-list">
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Federal Vehicle &amp; Solicitation Mastery:</strong> Full support for Open-Market RFPs,
                      RFQs, GSA MAS Schedule orders, GWACs, IDIQs, SBIR/STTR Phase I–III, and 8(a) / SDVOSB / WOSB /
                      HUBZone set-aside teaming.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Strict Section L &amp; Section M Alignment:</strong> Line-by-line compliance matrices,
                      annotated outlines, and Shipley Pink/Red/Gold Team reviews that directly map to government
                      evaluation factors.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Cyber, Section 508 &amp; DevSecOps Narratives:</strong> Authoritative technical writing
                      for NIST SP 800-171, CMMC 2.0, FedRAMP, Zero-Trust Architecture, and full-SDLC software delivery.
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Start SAM.gov Capture</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Maryland Government (eMMA) & UNGM (United Nations) */}
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
                    public
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
                  ARENA 02 &amp; 03 • MARYLAND GOVERNMENT (eMMA) &amp; UNITED NATIONS (UNGM)
                </span>
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 16 }}>
                  Maryland State (eMMA / CATS+) &amp; UNGM Multilateral Tender Engineering
                </h3>
                <p
                  style={{
                    color: "#3b3b3b",
                    fontSize: "var(--qd-font-size-body, 1em)",
                    lineHeight: 1.65,
                    marginBottom: 18,
                  }}
                >
                  Headquartered in <strong>Frederick, Maryland</strong> with global operations across North America,
                  Europe, Asia, and Africa, Quinn Daisies is uniquely positioned for both Maryland state/county
                  procurements and international United Nations tenders.
                </p>
                <ul className="cloud-standards-list">
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Maryland Government &amp; eMMA (eMaryland Marketplace Advantage):</strong> Proposal
                      capture and technical writing for Maryland DoIT (CATS+ TORFPs), MDOT, MDH, MSDE, and county/municipal
                      bids including full <strong>MBE / DBE / VSBE / SBR</strong> compliance documentation.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>UNGM (United Nations Global Marketplace):</strong> End-to-end vendor registration (Level 1
                      &amp; Level 2), EOI responses, ITBs, and complex technical/financial RFP bids for{" "}
                      <strong>UNDP, UNICEF, UNOPS, WHO, WFP, UNHCR, and World Bank/AfDB</strong> projects worldwide.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Dual Technology + Logistics Advantage:</strong> Unlike pure-play writing agencies, Quinn
                      Daisies executes both custom software engineering (.NET Core, C#, Python, React, Java, Kotlin,
                      Kivy, Flet) AND physical global supply chain operations.
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Engage eMMA &amp; UNGM Desk</span>
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
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_143o86143o86143o.jpg?alt=media&token=66947c0a-3ab5-413b-9a1d-f1dec9f6875f"
                    alt="Maryland eMMA and United Nations Global Marketplace UNGM Tender Writing"
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

      {/* SECTION 3: READY TO TAKE THE NEXT STEP? PROPOSAL WRITING DELIVERABLES */}
      <section className="cloud-nextstep-section">
        <div className="glue-page">
          <div className="glue-grid" style={{ alignItems: "center" }}>
            <div className="glue-grid__col glue-grid__col--span-6">
              <span
                className="glue-eyebrow"
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  color: "#c86d10",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                FULL-LIFECYCLE CAPTURE &amp; PROPOSAL WRITING
              </span>
              <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 16 }}>
                Ready to submit a <span className="decorated-text underline">winning bid?</span>
              </h2>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 22,
                }}
              >
                Our proposal directors, Shipley-trained technical writers, solution architects, and pricing analysts
                handle every volume of your government or multilateral submission:
              </p>

              <ul className="cloud-standards-list">
                <li>
                  <GreenTickSvg />
                  <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Capture Management &amp; Opportunity Qualification:</strong> Daily monitoring of SAM.gov,
                    Maryland eMMA, and UNGM feeds, Pwin scoring, competitor Black Hat analysis, and agency capability
                    briefings.
                  </span>
                </li>
                <li>
                  <GreenTickSvg />
                  <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Technical &amp; Architecture Volumes:</strong> Solution architects draft deep, credible
                    SDLC narratives, C4 system diagrams, AI/RAG pipelines, and DevSecOps topologies tailored to the
                    solicitation&apos;s Statement of Work (SOW / PWS).
                  </span>
                </li>
                <li>
                  <GreenTickSvg />
                  <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Management, Staffing &amp; Phase-In Plans:</strong> Organizational charts, RACI matrices,
                    Quality Control Plans (QCP), Risk Mitigation Registers, and 30-60-90 day zero-disruption transition
                    schedules.
                  </span>
                </li>
                <li>
                  <GreenTickSvg />
                  <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Capability Statements, Past Performance &amp; Pricing Volumes:</strong> Tailored agency
                    capability statements, CPARS/PPQ narratives, and defensible Basis of Estimate (BOE) cost workbooks.
                  </span>
                </li>
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 28 }}>
                <Link
                  to="/technology-contact-us"
                  className="ApplicationButton glue-button glue-button--high-emphasis"
                >
                  <span>Engage Our Proposal &amp; Capture Team</span>
                  <span className="material-symbols-outlined">memory</span>
                </Link>
                <Link
                  to="/technology-corporate-review"
                  className="ApplicationButton glue-button glue-button--medium-emphasis"
                >
                  <span>View Technology Corporate Review</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6">
              <div className="overlapping-photos-wrapper">
                <div style={{ position: "absolute", top: 20, right: 12, zIndex: 5 }}>
                  <StripeTapeVertical26 />
                </div>
                <div className="overlapping-photo-primary">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67"
                    alt="Shipley Color Team Review and Proposal Engineering"
                    style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }}
                  />
                </div>
                <div className="overlapping-photo-secondary">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_auxrf1auxrf1auxr.jpg?alt=media&token=2058152e-78bd-4467-b7fa-efc20afc2cd7"
                    alt="Compliance Matrix and Technical Architecture Blueprints"
                    style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FILTERABLE CONTRACT VEHICLES & PROPOSAL CASE STUDIES */}
      <section className="cloud-why-build--grey">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto 40px" }}>
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
              REPRESENTATIVE CONTRACT CAPTURES &amp; TECHNICAL VOLUMES
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Explore our procurement &amp; proposal blueprints{" "}
              <span className="decorated-text underline">by portal</span>
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                margin: "16px auto 0",
              }}
            >
              Filter by procurement portal to inspect how Quinn Daisies structures winning technical, management, and
              pricing volumes across SAM.gov, Maryland eMMA, and UNGM. Click any card for full deliverable details.
            </p>

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
              {["All", "SAM.gov (U.S. Federal)", "Maryland Government (eMMA)", "UNGM (United Nations)"].map((portal) => (
                <button
                  key={portal}
                  type="button"
                  className={`glue-filter-chip-btn ${selectedPortalFilter === portal ? "active" : ""}`}
                  onClick={() => setSelectedPortalFilter(portal)}
                >
                  {portal}
                </button>
              ))}
            </div>
          </div>

          <div className="glue-grid">
            {filteredStudies.map((study) => (
              <div key={study.title} className="glue-grid__col glue-grid__col--span-4">
                <div
                  className="animated-card"
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setActiveModalItem({
                      eyebrow: `${study.portal} • ${study.code}`,
                      title: study.title,
                      description: study.summary,
                      architecture: `Target Agency / Portal: ${study.agency}. Engineered by Quinn Daisies Capture Directors and Principal Solution Architects.`,
                      deliverables: study.deliverables,
                      codebases: study.codebases,
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalItem({
                        eyebrow: `${study.portal} • ${study.code}`,
                        title: study.title,
                        description: study.summary,
                        architecture: `Target Agency / Portal: ${study.agency}. Engineered by Quinn Daisies Capture Directors and Principal Solution Architects.`,
                        deliverables: study.deliverables,
                        codebases: study.codebases,
                      });
                    }
                  }}
                >
                  <div className="glue-card__content">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 12 }}>
                      <span className="product-card-tag feature">{study.portal}</span>
                      <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", fontWeight: 500, color: "#6b625b" }}>{study.code}</span>
                    </div>
                    <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 10 }}>
                      {study.title}
                    </h3>
                    <p style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", fontWeight: 600, color: "#c86d10", marginBottom: 10 }}>
                      {study.agency}
                    </p>
                    <p
                      style={{
                        color: "#3b3b3b",
                        fontSize: "var(--qd-font-size-body, 1em)",
                        lineHeight: 1.65,
                        marginBottom: 20,
                        flexGrow: 1,
                      }}
                    >
                      {study.summary}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                      {study.codebases.slice(0, 4).map((cb) => (
                        <span key={cb} className="product-card-tag">
                          {cb}
                        </span>
                      ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid rgba(43,22,0,0.1)" }}>
                      <span style={{ fontWeight: 600, fontSize: "var(--qd-font-size-eyebrow, 0.8em)", letterSpacing: "0.04em", textTransform: "uppercase", color: "#2b1600", display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <span>Inspect Volume Blueprint</span>
                        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                      </span>
                      <span className="featured-product-plus-btn">
                        <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: 9-TILE PROCUREMENT & PROPOSAL CAPABILITY SHOWCASE GRID */}
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
              COMPLETE GOVERNMENT CONTRACTING &amp; WRITING MATRIX
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              One unified capture &amp; engineering partner across{" "}
              <span className="decorated-text underline">every solicitation phase</span>
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
              From initial vendor registration and capability statements to Red Team proposal reviews and post-award
              software/IT execution.
            </p>
          </div>

          <div className="bsp-logo-showcase-grid">
            {procurementPortals.map((item) => (
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

      {/* SECTION 6: CONTRACT PROCUREMENT & GOVERNANCE FAQS */}
      <section className="launchpad-faq" style={{ background: "#fff7ef", borderTop: "1px solid #e6ddd3" }}>
        <div className="glue-page">
          <div style={{ maxWidth: 760, margin: "0 auto 40px", textAlign: "center" }}>
            <span className="glue-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="glue-headline glue-headline--headline-2">
              Contract Procurement &amp; Proposal{" "}
              <span className="decorated-text underline">Governance FAQs</span>
            </h2>
            <p className="glue-body--large">
              Key regulatory, compliance, and technical volume specifications across SAM.gov, Maryland eMMA, and United
              Nations (UNGM) solicitations.
            </p>
          </div>

          <div style={{ margin: "0 auto" }}>
            {procurementFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="devsite-expandable"
                  style={{
                    border: "1px solid #e6ddd3",
                    borderRadius: 14,
                    marginBottom: 14,
                    background: isOpen ? "#ffffff" : "#fcf9f5",
                    transition: "all 0.25s ease",
                    overflow: "hidden",
                  }}
                >
                  <button
                    type="button"
                    className="devsite-expandable-header"
                    style={{
                      width: "100%",
                      padding: "18px 22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontWeight: 500,
                        color: "#2b1600",
                        paddingRight: 12,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 20,
                        color: "#c86d10",
                        transition: "transform 0.25s ease",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        flexShrink: 0,
                      }}
                    >
                      keyboard_arrow_down
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      className="devsite-expandable-body"
                      style={{
                        padding: "0 22px 20px",
                        fontSize: "var(--qd-font-size-body, 1em)",
                        lineHeight: 1.7,
                        color: "#3b3b3b",
                      }}
                    >
                      <p style={{ margin: 0 }}>{faq.a}</p>
                      {faq.linkTo && (
                        <div style={{ marginTop: 14 }}>
                          <Link
                            to={faq.linkTo}
                            style={{
                              color: "#2b1600",
                              fontWeight: 500,
                              textDecoration: "underline",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <span>{faq.linkText}</span>
                            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                              arrow_forward
                            </span>
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <QuinnProductModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </div>
  );
};

export default ContractProcurementWriting;
