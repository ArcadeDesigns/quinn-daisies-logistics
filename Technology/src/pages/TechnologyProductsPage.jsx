import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  GridIconSvg,
  ListIconSvg,
  QuinnProductModal,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const TechnologyProductsPage = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = [
    {
      id: "all",
      label: "Show everything",
    },
    {
      id: "ai-and-agents",
      label: "AI, RAG & Autonomous Agents",
      desc: "Production LLM agents, hybrid vector search, and document OCR intelligence built in Python and C#.",
    },
    {
      id: "govcon-and-procurement",
      label: "GovCon & Proposal Suite",
      desc: "SAM.gov, Maryland eMMA, and UNGM capture intelligence, RFP shredders, and Shipley compliance engines.",
    },
    {
      id: "web-mobile-desktop",
      label: "Web, Mobile & Desktop Platforms",
      desc: "Reusable application frameworks across .NET Core, C# WPF/WinUI/MAUI, React, Kotlin, Python Kivy & Flet.",
    },
    {
      id: "cloud-and-devops",
      label: "Cloud, DevOps & Zero-Trust IT",
      desc: "Terraform IaC modules, Kubernetes GitOps blueprints, OpenTelemetry observability, and NIST/SOC 2 kits.",
    },
    {
      id: "seo-geo-growth",
      label: "SEO, GEO & Growth Engines",
      desc: "JSON-LD Knowledge Graphs, /llms.txt generators, Core Web Vitals accelerators, and ABM attribution.",
    },
  ];

  const featuredProducts = [
    {
      eyebrow: "SAM.GOV • MARYLAND eMMA • UNGM",
      title: "QuinnGov Capture & RFP Compliance Engine",
      description: "Automated solicitation shredder, Section L/M matrix generator, and Shipley proposal workbench.",
      lightBlue: false,
      architecture: "Python FastAPI + Document AI + React 19 + PostgreSQL pgvector.",
      deliverables: [
        "Instant Section L & M requirement extraction from SAM.gov, eMMA, and UNGM PDFs",
        "Automated past-performance and capability-statement matching",
        "Exportable Word/Excel compliance matrices and Red Team scoring rubrics",
      ],
      codebases: ["Python", "FastAPI", "React", "SAM.gov", "UNGM", "Maryland eMMA"],
    },
    {
      eyebrow: "PYTHON • C# SEMANTIC KERNEL • PGVECTOR",
      title: "OmniRAG Enterprise Knowledge & Agent Core",
      description: "Zero-hallucination Enterprise RAG and multi-agent orchestrator with strict ACL security.",
      lightBlue: true,
      architecture: "Python LangGraph / FastAPI + .NET 8 Semantic Kernel + pgvector / Qdrant.",
      deliverables: [
        "Hybrid semantic + BM25 search with inline page/paragraph citations",
        "Tool-calling agents connected to SQL Server, PostgreSQL, and REST/gRPC APIs",
        "Air-gapped & GovCloud deployment support",
      ],
      codebases: ["Python", "C# .NET 8", "Semantic Kernel", "pgvector", "React"],
    },
    {
      eyebrow: "C# WPF/WINUI • PYTHON KIVY & FLET • KOTLIN",
      title: "QuinnPolyglot Multi-Platform App Kit",
      description: "Unified starter architectures for Windows desktop, multi-touch Kivy kiosks, Flet apps, and Kotlin mobile.",
      lightBlue: true,
      architecture: "C# .NET 8, Python Kivy/Flet, Kotlin Jetpack Compose, and ASP.NET Core SignalR.",
      deliverables: [
        "Offline-first SQLite synchronization and conflict resolution engine",
        "Hardware serial/USB/BLE/barcode/RFID device bridge",
        "MSIX, Intune MDM, Google Play, and App Store CI/CD pipelines",
      ],
      codebases: ["C# WPF/WinUI", "Python Kivy", "Python Flet", "Kotlin", ".NET MAUI"],
    },
    {
      eyebrow: "JSON-LD • LLMS.TXT • CORE WEB VITALS",
      title: "GeoAuthority SEO & AI Answer Engine Suite",
      description: "Programmatic Schema.org graphs and /llms.txt feeds engineered for Google Search & AI Overviews.",
      lightBlue: false,
      architecture: "React 19 SSR + ASP.NET Core + BigQuery Search Console & AI Citation Telemetry.",
      deliverables: [
        "Automated nested JSON-LD Knowledge Graph injection across all routes",
        "Standardized /llms.txt markdown index for ChatGPT, Gemini, and Perplexity crawlers",
        "Sub-second LCP (<1.2s) and zero-CLS asset optimization",
      ],
      codebases: ["JSON-LD", "llms.txt", "React", "TypeScript", "BigQuery"],
    },
  ];

  const catalogProducts = [
    {
      cat: "ai-and-agents",
      title: "OmniRAG Citation Engine",
      tag: "Python • pgvector",
      feature: true,
      desc: "Enterprise Retrieval-Augmented Generation over PDFs, contracts, and SQL databases with strict RBAC.",
      deliverables: ["Hybrid dense + sparse retrieval", "Document ACL enforcement", "Inline source citations"],
      codebases: ["Python", "FastAPI", "pgvector", "React"],
    },
    {
      cat: "ai-and-agents",
      title: ".NET Semantic Kernel Agent Hub",
      tag: "C# • .NET 8",
      feature: false,
      desc: "Native C# AI copilot and tool-calling agent runtime for ASP.NET Core, Blazor, and WPF applications.",
      deliverables: ["C# plugin orchestration", "SQL Server vector memory", "OpenTelemetry token tracing"],
      codebases: ["C#", ".NET Core", "ASP.NET", "Semantic Kernel"],
    },
    {
      cat: "ai-and-agents",
      title: "VisionEdge OCR & Barcode SDK",
      tag: "PyTorch • ONNX",
      feature: false,
      desc: "High-speed Bill of Lading, invoice, and pallet barcode/vision extraction for Kivy HMIs and Kotlin mobile.",
      deliverables: ["99.4% field OCR accuracy", "Quantized edge inference", "Camera & laser scanner hooks"],
      codebases: ["Python", "ONNX", "Kivy", "Kotlin"],
    },
    {
      cat: "govcon-and-procurement",
      title: "SAM.gov & eMMA Capture Radar",
      tag: "Federal & Maryland",
      feature: true,
      desc: "Automated daily monitoring, NAICS/PSC filtering, and Pwin scoring for SAM.gov and Maryland eMMA feeds.",
      deliverables: ["Real-time solicitation alerts", "Incumbent & contract history lookup", "Teaming partner matcher"],
      codebases: ["SAM.gov API", "Maryland eMMA", "Python", "React"],
    },
    {
      cat: "govcon-and-procurement",
      title: "UNGM Multilateral Tender Workbench",
      tag: "UNDP • UNICEF • WHO",
      feature: false,
      desc: "Structured technical and commercial bid builder for United Nations Global Marketplace (UNGM) ITBs and RFPs.",
      deliverables: ["UNGM Level 1 & 2 checklist", "Multi-currency BOE pricing sheets", "Sustainability & SLA templates"],
      codebases: ["UNGM", "Proposal Engineering", "Excel/Word Automation"],
    },
    {
      cat: "govcon-and-procurement",
      title: "Shipley Color Team Compliance Matrix",
      tag: "Section L & M",
      feature: false,
      desc: "Automated cross-reference matrix generator ensuring 100% alignment between RFP instructions and evaluation criteria.",
      deliverables: ["Annotated outline generator", "Pink/Red/Gold review scorecards", "Section 508 VPAT templates"],
      codebases: ["Shipley Method", "FAR/DFARS", "Python", "C#"],
    },
    {
      cat: "web-mobile-desktop",
      title: "WinCore C# WPF & WinUI 3 Workstation",
      tag: "C# • .NET 8 Desktop",
      feature: true,
      desc: "High-frequency Windows desktop application shell with multi-monitor docking, hardware I/O, and MSIX auto-update.",
      deliverables: ["DirectX 60fps data grids", "Serial/USB/PLC hardware bridge", "Offline SQLite sync"],
      codebases: ["C#", "WPF", "WinUI 3", ".NET 8"],
    },
    {
      cat: "web-mobile-desktop",
      title: "KivyTouch & Flet Cross-OS Suite",
      tag: "Python Kivy & Flet",
      feature: true,
      desc: "Build industrial multi-touch kiosks in Python Kivy and Flutter-rendered desktop/mobile apps in Python Flet.",
      deliverables: ["OpenGL ES 2.0 touch UI", "Pure-Python Flutter desktop/mobile", "Embedded local AI inference"],
      codebases: ["Python", "Kivy", "Flet", "Flutter"],
    },
    {
      cat: "web-mobile-desktop",
      title: "KotlinFleet & .NET MAUI Mobile Core",
      tag: "Kotlin • C# MAUI",
      feature: false,
      desc: "Offline-first Android and iOS enterprise mobility foundation with GPS telemetry, barcode scanning, and Passkeys.",
      deliverables: ["Room / SQLite offline queue", "Zebra/Honeywell scanner SDK", "Biometric & Entra ID SSO"],
      codebases: ["Kotlin", "Jetpack Compose", ".NET MAUI", "C#"],
    },
    {
      cat: "cloud-and-devops",
      title: "TerraCube Multi-Cloud IaC Blueprints",
      tag: "Terraform • Kubernetes",
      feature: true,
      desc: "Production-hardened Terraform modules and Helm charts for AWS, Azure, and Google Cloud Kubernetes clusters.",
      deliverables: ["Zero-downtime blue/green CI/CD", "OpenTelemetry + Grafana stack", "Automated FinOps scaling"],
      codebases: ["Terraform", "Kubernetes", "Docker", "GitHub Actions"],
    },
    {
      cat: "cloud-and-devops",
      title: "ZeroTrust NIST 800-171 & SOC 2 Enclave",
      tag: "Cybersecurity • CMMC",
      feature: false,
      desc: "Pre-configured identity, SIEM, encrypted storage, and compliance documentation for regulated workloads.",
      deliverables: ["System Security Plan (SSP) kit", "FIDO2 MFA & RBAC policies", "Immutable ransomware backups"],
      codebases: ["NIST 800-171", "SOC 2", "Entra ID", "Cloud Security"],
    },
    {
      cat: "seo-geo-growth",
      title: "GeoSchema Knowledge Graph & LLMs.txt",
      tag: "SEO & GEO",
      feature: true,
      desc: "Dynamic JSON-LD entity injection and AI-crawler markdown feeds for Google Search and AI Overviews.",
      deliverables: ["Nested Schema.org graphs", "Automated /llms.txt build plugin", "AI citation share-of-voice tracker"],
      codebases: ["JSON-LD", "llms.txt", "React", "ASP.NET Core"],
    },
  ];

  const featuredIcons = ["gavel", "psychology", "devices", "travel_explore"];

  const visibleCategories =
    selectedCategory === "all"
      ? categories.filter((c) => c.id !== "all")
      : categories.filter((c) => c.id === selectedCategory);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".products-hero-section .glue-grid__col:first-child > *",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
      );

      gsap.fromTo(
        ".products-collage-grid .products-collage-icon-tile",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.04, ease: "power3.out", delay: 0.1 }
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
        title="Technology Products, SDKs & Enterprise Platforms | Quinn Daisies Technology"
        description="Explore the Quinn Daisies Technology Product Catalog: AI & RAG Engines, SAM.gov/eMMA/UNGM GovCon Suite, .NET Core/C#/Python/React/Kotlin/Kivy/Flet Application Kits, Cloud DevOps, and SEO/GEO tools."
        keywords="technology products, software SDKs, enterprise RAG platform, government contracting software SAM.gov UNGM, Python Kivy Flet kit, C# .NET 8 platform, Quinn Daisies Products"
        canonicalUrl="/technology-products"
      />

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
            QUINN DAISIES TECHNOLOGY PRODUCT CATALOG • PLATFORMS, SDKS &amp; ACCELERATORS
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 2-COLUMN HERO WITH 8-TILE ICON COLLAGE */}
      <section className="products-hero-section">
        <div className="glue-page">
          <div className="glue-grid" style={{ alignItems: "center" }}>
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
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
                  QUINN DAISIES TECHNOLOGY PRODUCT CATALOG
                </span>
              </div>
              <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
                Products &amp; platforms to{" "}
                <span className="decorated-text underline">power your stack</span>
              </h1>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Explore our production-ready software modules, AI/RAG engines, government contracting workbenches, and
                cross-platform application kits engineered across{" "}
                <strong>.NET Core, ASP.NET, C#, Python, React, Java, Kotlin, Kivy, and Flet</strong>.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <a
                  href="#product-catalog"
                  className="ApplicationButton glue-button glue-button--high-emphasis"
                >
                  <span>Browse Full Product Catalog</span>
                  <span className="material-symbols-outlined">arrow_downward</span>
                </a>
                <Link
                  to="/technology-contact-us"
                  className="ApplicationButton glue-button glue-button--medium-emphasis"
                >
                  <span>Request Custom Demo</span>
                  <span className="material-symbols-outlined">memory</span>
                </Link>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="products-collage-grid">
                {[
                  { name: ".NET 8 & C#", sub: "Web API & WPF", icon: "terminal", bg: "#2b1600", fg: "#f9a144" },
                  { name: "Python AI", sub: "RAG & FastAPI", icon: "psychology", bg: "#f9a144", fg: "#2b1600" },
                  { name: "React 19", sub: "SSR & Portals", icon: "web", bg: "#2b1600", fg: "#f9a144" },
                  { name: "Kotlin", sub: "Native Android", icon: "smartphone", bg: "#f9a144", fg: "#2b1600" },
                  { name: "Python Kivy", sub: "Touch HMIs", icon: "touch_app", bg: "#f9a144", fg: "#2b1600" },
                  { name: "Python Flet", sub: "Flutter Desktop", icon: "desktop_windows", bg: "#2b1600", fg: "#f9a144" },
                  { name: "GovCon Suite", sub: "SAM • eMMA • UNGM", icon: "gavel", bg: "#f9a144", fg: "#2b1600" },
                  { name: "SEO & GEO", sub: "JSON-LD & LLMs", icon: "travel_explore", bg: "#2b1600", fg: "#f9a144" },
                ].map((tile) => (
                  <div key={tile.name} className="products-collage-icon-tile">
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 10,
                        background: tile.bg,
                        color: tile.fg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 20, color: tile.fg }}>
                        {tile.icon}
                      </span>
                    </div>
                    <strong style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", color: "#2b1600" }}>{tile.name}</strong>
                    <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", color: "#6b625b" }}>{tile.sub}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
                <StripeTape83 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED PRODUCTS ESPRESSO BANNER */}
      <section className="featured-products-section">
        <div style={{ position: "absolute", top: -11, left: "10%", zIndex: 3 }}>
          <StripeTape210 fill="#f9a144" />
        </div>

        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 48px" }}>
            <span
              className="glue-eyebrow"
              style={{
                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                color: "#f9a144",
                fontWeight: 600,
                letterSpacing: "0.06em",
                display: "inline-block",
                marginBottom: 12,
              }}
            >
              FLAGSHIP PLATFORMS &amp; KITS
            </span>
            <h2 className="glue-headline glue-headline--headline-2" style={{ color: "#ffffff" }}>
              Featured Quinn Daisies Technology Products
            </h2>
          </div>

          <div className="glue-grid">
            {featuredProducts.map((item, idx) => (
              <div key={item.title} className="glue-grid__col glue-grid__col--span-6">
                <div
                  className={`featured-product-row-card ${item.lightBlue ? "light-blue-card" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveModalItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalItem(item);
                    }
                  }}
                >
                  <div className="featured-product-card-left">
                    <div className="featured-product-icon-box">
                      <span className="material-symbols-outlined" style={{ fontSize: 26, color: "var(--qd-espresso)" }}>
                        {featuredIcons[idx % featuredIcons.length]}
                      </span>
                    </div>
                    <div>
                      <span
                        className="glue-eyebrow"
                        style={{
                          fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                          color: "#c86d10",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          display: "block",
                          marginBottom: 4,
                        }}
                      >
                        {item.eyebrow}
                      </span>
                      <h3 className="glue-headline glue-headline--headline-4" style={{ margin: "0 0 6px" }}>
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: "#3b3b3b",
                          fontSize: "var(--qd-font-size-body, 1em)",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="featured-product-plus-btn">
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE 12-COLUMN PRODUCT FILTER & GRID/LIST CATALOG */}
      <section id="product-catalog" className="product-filter-section">
        <div className="glue-page">
          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-3">
              <div className="product-filter-sidebar">
                <span
                  className="glue-eyebrow"
                  style={{
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    color: "#f9a144",
                    marginBottom: 14,
                    letterSpacing: "0.08em",
                    display: "block",
                  }}
                >
                  FILTER BY CATEGORY
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`product-filter-cat-btn ${selectedCategory === cat.id ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
                  </button>
                ))}

                <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(249, 161, 68, 0.28)" }}>
                  <span
                    className="glue-eyebrow"
                    style={{
                      fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                      color: "#f9a144",
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    VIEW MODE
                  </span>
                  <div className="product-view-toggle-group">
                    <button
                      type="button"
                      className={`product-view-btn ${viewMode === "grid" ? "active" : ""}`}
                      onClick={() => setViewMode("grid")}
                    >
                      <GridIconSvg fill={viewMode === "grid" ? "#2b1600" : "#FFFFFF"} />
                      <span>Grid</span>
                    </button>
                    <button
                      type="button"
                      className={`product-view-btn ${viewMode === "list" ? "active" : ""}`}
                      onClick={() => setViewMode("list")}
                    >
                      <ListIconSvg fill={viewMode === "list" ? "#2b1600" : "#FFFFFF"} />
                      <span>List</span>
                    </button>
                  </div>
                </div>

                <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
                  <StripeTape83 fill="#f9a144" />
                </div>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-9">
              {visibleCategories.map((cat) => {
                const items = catalogProducts.filter((p) => p.cat === cat.id);
                return (
                  <div key={cat.id} className="product-catalog-category-block">
                    <div style={{ marginBottom: 24 }}>
                      <h2 className="glue-headline glue-headline--headline-3" style={{ marginBottom: 6 }}>
                        {cat.label}
                      </h2>
                      <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.6, margin: 0 }}>
                        {cat.desc}
                      </p>
                    </div>

                    <div className={viewMode === "grid" ? "product-catalog-grid" : "product-catalog-list"}>
                      {items.map((prod) => (
                        <div
                          key={prod.title}
                          className={`product-catalog-card ${viewMode === "list" ? "list-mode" : ""}`}
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            setActiveModalItem({
                              eyebrow: cat.label.toUpperCase(),
                              title: prod.title,
                              description: prod.desc,
                              architecture: `Stack & Runtime: ${prod.tag}`,
                              deliverables: prod.deliverables,
                              codebases: prod.codebases,
                            })
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setActiveModalItem({
                                eyebrow: cat.label.toUpperCase(),
                                title: prod.title,
                                description: prod.desc,
                                architecture: `Stack & Runtime: ${prod.tag}`,
                                deliverables: prod.deliverables,
                                codebases: prod.codebases,
                              });
                            }
                          }}
                        >
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                              <div
                                style={{
                                  width: 42,
                                  height: 42,
                                  borderRadius: 10,
                                  background: "#2b1600",
                                  color: "#f9a144",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: 20, color: "#f9a144" }}>
                                  deployed_code
                                </span>
                              </div>
                              <span
                                className="glue-eyebrow"
                                style={{
                                  margin: 0,
                                  color: "#c86d10",
                                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                                  fontWeight: 600,
                                }}
                              >
                                {cat.label}
                              </span>
                            </div>

                            <h3 className="glue-headline glue-headline--headline-5" style={{ marginBottom: 8 }}>
                              {prod.title}
                            </h3>
                            <p
                              style={{
                                color: "#3b3b3b",
                                fontSize: "var(--qd-font-size-body, 1em)",
                                lineHeight: 1.6,
                                margin: 0,
                              }}
                            >
                              {prod.desc}
                            </p>
                          </div>
                          <div className="product-card-footer" style={viewMode === "list" ? { marginTop: 0, borderTop: "none", paddingTop: 0, marginLeft: 24, gap: 16 } : undefined}>
                            <span className={`product-card-tag ${prod.feature ? "feature" : ""}`}>{prod.tag}</span>
                            <span className="featured-product-plus-btn">
                              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <QuinnProductModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </div>
  );
};

export default TechnologyProductsPage;

