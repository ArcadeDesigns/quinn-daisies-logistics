import React, { useState, useRef, useEffect } from "react";
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

const SeoDigitalMarketing = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = [
    { id: "all", label: "Show everything" },
    { id: "brand-and-marketing", label: "Brand and marketing", desc: "Capture high-intent search traffic, dominate local & global SERPs, and scale paid acquisition." },
    { id: "insights-and-analytics", label: "Insights and analytics", desc: "Measure full-funnel attribution, Core Web Vitals, search telemetry, and customer lifetime value." },
    { id: "product-design", label: "Product design", desc: "Design high-converting React web portals, Kotlin mobile experiences, and Kivy/Flet desktop interfaces." },
    { id: "productivity", label: "Productivity", desc: "Automate marketing ops, CRM pipelines, AI content workflows, and cross-team collaboration." },
    { id: "technology-and-data", label: "Technology and data", desc: "Power your digital presence with .NET Core, ASP.NET, C#, Python, Java, React, and Cloud DevOps." },
  ];

  const featuredProducts = [
    {
      id: "feat-ai-seo",
      eyebrow: "AI-Powered Search & Generative Engine Optimization",
      title: "Quinn Daisies Technical SEO & AI Search Engine Suite",
      tag: "Product",
      description:
        "Dominate Google Search, AI Overviews, and global organic rankings through code-level Technical SEO, programmatic landing pages, JSON-LD knowledge graphs, and sub-second React/SSR architectures.",
      architecture:
        "Built directly into your React, ASP.NET Core, and Python web applications with automated XML sitemaps, dynamic OpenGraph/Twitter meta injection, canonical governance, and Core Web Vitals telemetry.",
      deliverables: [
        "Full Technical SEO & Crawlability Audit (Indexation, Core Web Vitals LCP/INP/CLS, Log File Analysis)",
        "Rich Schema.org JSON-LD Entity Graphs (Organization, Service, Product, FAQPage, BreadcrumbList)",
        "Programmatic SEO & Dynamic Landing Page Engine powered by .NET Core, Python, and React",
        "AI Search (GEO) & Semantic Content Authority Engineering for high-intent commercial keywords",
      ],
      codebases: ["React", "JavaScript", "ASP.NET Core", "Python", "JSON-LD Schema", "Core Web Vitals"],
    },
    {
      id: "feat-omnichannel-growth",
      eyebrow: "Performance Marketing & Conversion Engineering",
      title: "Omnichannel Digital Marketing & Revenue Attribution Engine",
      tag: "Product",
      description:
        "Scale customer acquisition across Search Ads, Display, LinkedIn/Meta B2B campaigns, and automated email/CRM sequences backed by server-side conversion tracking and Python predictive ROAS modeling.",
      architecture:
        "Combines server-side event pipelines (C# .NET Core & Python FastAPI) with real-time React executive dashboards so every marketing dollar is tied to verified pipeline revenue.",
      deliverables: [
        "High-Intent Paid Search (PPC), Performance Max & Retargeting Campaign Architecture",
        "Server-Side Conversion API & First-Party Data Telemetry (Zero cookie-loss attribution)",
        "Landing Page Conversion Rate Optimization (CRO), A/B Testing & Heatmap Engineering",
        "Automated Lead Scoring & CRM Synchronization with ERP/Logistics Backends",
      ],
      codebases: ["Digital Marketing", "Analytics API", "Python", "C# .NET", "React", "CRM Automation"],
    },
  ];

  const catalogItems = [
    // Brand and marketing
    {
      id: "bm-1",
      category: "brand-and-marketing",
      eyebrow: "Organic Search Dominance",
      title: "Enterprise Technical SEO & Site Architecture",
      tag: "Product",
      description:
        "Eliminate crawl bottlenecks, indexation waste, and slow rendering across large-scale web applications and e-commerce catalogs.",
      architecture:
        "Engineered at the code level across React SPAs, ASP.NET Razor/Blazor, and Python web backends with edge caching and prerendering.",
      deliverables: [
        "Core Web Vitals optimization (<1.2s LCP, <50ms INP, 0.00 CLS)",
        "Automated XML Sitemap, Robots.txt, Hreflang & Canonical Tag Governance",
        "Internal Linking Graph & Semantic Topic Cluster Architecture",
      ],
      codebases: ["Technical SEO", "React", "ASP.NET", "JavaScript", "Cloud CDN"],
    },
    {
      id: "bm-2",
      category: "brand-and-marketing",
      eyebrow: "Paid Acquisition & PPC",
      title: "Search Ads & Performance Max Growth Suite",
      tag: "Product",
      description:
        "Capture bottom-of-funnel commercial demand with granular keyword bidding, negative keyword automation, and high-converting ad extensions.",
      architecture:
        "Integrated with automated Python bid-optimization scripts and dynamic landing page personalization.",
      deliverables: [
        "Search, Display, Remarketing & Video Campaign Structuring",
        "Dynamic Keyword Insertion & Custom Landing Page Routing",
        "Real-Time Cost-Per-Acquisition (CPA) & ROAS Guardrails",
      ],
      codebases: ["Paid Search", "Python Scripts", "JavaScript", "CRO"],
    },
    {
      id: "bm-3",
      category: "brand-and-marketing",
      eyebrow: "Local & Regional Visibility",
      title: "Multi-Location Local SEO & Map Pack Engine",
      tag: "Product feature",
      description:
        "Rank #1 in local map packs and regional commercial searches across all branches, warehouses, and service hubs.",
      architecture:
        "Automated LocalBusiness JSON-LD schema, citation synchronization, and geo-targeted landing pages.",
      deliverables: [
        "Google Business Profile Optimization & Review Velocity Automation",
        "Geo-Targeted Service Pages with Local Schema Markup",
        "NAP (Name, Address, Phone) Directory Consistency & Local Backlinks",
      ],
      codebases: ["Local SEO", "JSON-LD", "React", "REST APIs"],
    },
    {
      id: "bm-4",
      category: "brand-and-marketing",
      eyebrow: "Authority & PR",
      title: "Content Engineering, Digital PR & Link Authority",
      tag: "Product feature",
      description:
        "Build unassailable domain authority through research-backed whitepapers, interactive calculators, and high-authority editorial placements.",
      architecture:
        "Combines technical subject-matter expertise with interactive React/JavaScript data visualizations that naturally earn backlinks.",
      deliverables: [
        "Pillar Content & Technical Buying Guides Engineered for Search Intent",
        "Interactive ROI Calculators & Industry Benchmark Widgets",
        "High-DR Digital PR & Editorial Backlink Acquisition",
      ],
      codebases: ["Content Strategy", "React Widgets", "Digital PR", "SEO"],
    },

    // Insights and analytics
    {
      id: "ia-1",
      category: "insights-and-analytics",
      eyebrow: "Full-Funnel Telemetry",
      title: "Server-Side Analytics & Attribution Pipeline",
      tag: "Product",
      description:
        "Bypass ad-blockers and browser cookie restrictions with first-party server-side event collection and multi-touch attribution.",
      architecture:
        "Powered by Python FastAPI and C# .NET Core ingestion endpoints streaming into BigQuery/PostgreSQL.",
      deliverables: [
        "GA4 Server-Side Tagging & Custom Event Taxonomy",
        "First-Party Identity Resolution & CRM Revenue Matching",
        "Executive BI Dashboards with Real-Time Funnel Drop-Off Alerts",
      ],
      codebases: ["Python", "C# .NET Core", "JavaScript", "SQL / BigQuery"],
    },
    {
      id: "ia-2",
      category: "insights-and-analytics",
      eyebrow: "Search Intelligence",
      title: "SERP Rank Tracker & Competitor Share-of-Voice",
      tag: "Product",
      description:
        "Monitor daily keyword movements, featured snippet ownership, and competitor content gaps across desktop and mobile search.",
      architecture:
        "Automated Python scraping & Search Console API aggregation visualized in a Flet/React analytics portal.",
      deliverables: [
        "Automated Daily Keyword & Share-of-Voice Telemetry",
        "Keyword Cannibalization & Content Decay Detection",
        "Competitor Backlink & Landing Page Diff Alerts",
      ],
      codebases: ["Python", "Search Console API", "Flet", "React"],
    },
    {
      id: "ia-3",
      category: "insights-and-analytics",
      eyebrow: "Performance Telemetry",
      title: "Real-User Monitoring (RUM) & Core Web Vitals Lab",
      tag: "Product feature",
      description:
        "Track real-world page speed, JavaScript bundle execution, and API latency across global regions and device classes.",
      architecture:
        "Lightweight JavaScript beacon reporting field Web Vitals (LCP, INP, CLS, TTFB) to OpenTelemetry collectors.",
      deliverables: [
        "Per-Route Core Web Vitals Field & Lab Benchmarking",
        "JavaScript Bundle Splitting, Tree-Shaking & Image WebP/AVIF Pipeline",
        "CDN Edge Caching & TTFB Optimization",
      ],
      codebases: ["JavaScript", "React", "OpenTelemetry", "Cloud DevOps"],
    },
    {
      id: "ia-4",
      category: "insights-and-analytics",
      eyebrow: "Predictive Data Science",
      title: "Customer Lifetime Value (LTV) & Churn AI Models",
      tag: "Product feature",
      description:
        "Predict high-value customer segments and prevent churn before it happens using machine learning on transactional data.",
      architecture:
        "Python scikit-learn/PyTorch models exposed via FastAPI microservices to your CRM and marketing automation engine.",
      deliverables: [
        "Propensity-to-Buy & Lead Scoring ML Models",
        "Automated High-LTV Lookalike Audience Sync",
        "Cohort Retention & Revenue Forecasting",
      ],
      codebases: ["Python", "Machine Learning", "FastAPI", "PostgreSQL"],
    },

    // Product design
    {
      id: "pd-1",
      category: "product-design",
      eyebrow: "Web Application UI/UX",
      title: "React & TypeScript Conversion Design System",
      tag: "Product",
      description:
        "Build accessible, brand-consistent, ultra-fast web applications and marketing portals using reusable component libraries.",
      architecture:
        "Modular React 19 + TypeScript component architecture with WCAG 2.1 AA accessibility and zero-layout-shift CSS.",
      deliverables: [
        "Atomic Design System & Interactive Storybook Component Library",
        "Conversion-Engineered Hero, Pricing, Checkout & Lead Flows",
        "Responsive Mobile-First & Dark/Light Theme Architecture",
      ],
      codebases: ["React", "JavaScript", "TypeScript", "Frontend CSS"],
    },
    {
      id: "pd-2",
      category: "product-design",
      eyebrow: "Mobile Experience",
      title: "Kotlin Jetpack Compose & Mobile Growth UX",
      tag: "Product",
      description:
        "Design and engineer fluid native Android applications with deep-linking, push notification journeys, and App Store Optimization (ASO).",
      architecture:
        "Native Kotlin + Jetpack Compose UI with Material 3 expressive motion and offline-first local storage.",
      deliverables: [
        "Native Kotlin Android UI/UX & Deep-Link Attribution",
        "App Store Optimization (ASO) & Play Store Conversion Assets",
        "In-App Onboarding & Push Retention Loops",
      ],
      codebases: ["Kotlin", "Android", "Jetpack Compose", "Mobile ASO"],
    },
    {
      id: "pd-3",
      category: "product-design",
      eyebrow: "Desktop & Multiplatform UI",
      title: "Python Flet, Kivy & C# Desktop Interface Suite",
      tag: "Product",
      description:
        "Craft modern, hardware-accelerated desktop and industrial touch interfaces that feel as sleek as consumer web apps.",
      architecture:
        "Engineered using Python Flet (Flutter engine), Kivy OpenGL ES 2, and C# WPF/WinUI/.NET MAUI.",
      deliverables: [
        "Cross-Platform Desktop UI for Windows, macOS & Linux",
        "Multi-Touch Kiosk & Warehouse Terminal Interfaces in Kivy",
        "Unified Python Flet Apps Running on Desktop, Web & Mobile",
      ],
      codebases: ["Python", "Kivy", "Flet", "C# WPF / MAUI"],
    },

    // Productivity
    {
      id: "pr-1",
      category: "productivity",
      eyebrow: "Marketing & Sales Automation",
      title: "CRM, Lead Routing & Omnichannel Workflow Automation",
      tag: "Product",
      description:
        "Eliminate manual lead entry and slow follow-ups with instant webhook orchestration across forms, WhatsApp/SMS, email, and CRM.",
      architecture:
        "Event-driven Python and C# .NET background workers connecting web forms directly to sales pipelines.",
      deliverables: [
        "Instant Lead Capture, Enrichment & Territory Routing",
        "Automated Multi-Channel Nurture Sequences (Email, SMS, WhatsApp)",
        "Bi-Directional ERP, Billing & CRM Synchronization",
      ],
      codebases: ["Python", "C# .NET Core", "REST Webhooks", "Automation"],
    },
    {
      id: "pr-2",
      category: "productivity",
      eyebrow: "AI Content & Operations",
      title: "Autonomous AI Content & Localization Copilot",
      tag: "Product feature",
      description:
        "Generate, fact-check, optimize, and translate technical documentation, product catalogs, and SEO landing pages at scale.",
      architecture:
        "RAG-grounded LLM pipelines in Python enforcing your brand voice, terminology glossary, and SEO schema rules.",
      deliverables: [
        "Brand-Grounded AI Copywriting & Technical Documentation Workflows",
        "Automated Multi-Language Localization with Hreflang Sync",
        "Bulk Product Catalog & Meta Tag Optimization",
      ],
      codebases: ["Python", "AI / LLM", "RAG", "Content Ops"],
    },
    {
      id: "pr-3",
      category: "productivity",
      eyebrow: "Executive Command Center",
      title: "Flet & React Internal Operations Portals",
      tag: "Product feature",
      description:
        "Give your marketing, logistics, finance, and support teams unified internal tools to manage campaigns, inventory, and SLAs.",
      architecture:
        "Rapidly deployed internal apps built with Python Flet or React + ASP.NET Core with role-based access control.",
      deliverables: [
        "Custom Admin Portals, Approval Workflows & Audit Logs",
        "Automated PDF/Excel Executive Reporting & Scheduled Alerts",
        "SSO & Role-Based Access Control (RBAC)",
      ],
      codebases: ["Flet", "React", "ASP.NET Core", "C#"],
    },

    // Technology and data
    {
      id: "td-1",
      category: "technology-and-data",
      eyebrow: "Enterprise Backend",
      title: ".NET Core, ASP.NET & C# High-Concurrency APIs",
      tag: "Product",
      description:
        "Power your digital platforms with blazing-fast, strongly-typed C# and ASP.NET Core backends engineered for millions of requests.",
      architecture:
        ".NET 8/9 Minimal APIs, gRPC, Entity Framework Core, Dapper, and Redis distributed caching.",
      deliverables: [
        "RESTful & GraphQL API Gateways with OpenAPI/Swagger Specs",
        "Microservices & Background Worker Queues",
        "SQL Server & PostgreSQL High-Availability Database Design",
      ],
      codebases: [".NET Core", "ASP.NET", "C#", "SQL Server", "Redis"],
    },
    {
      id: "td-2",
      category: "technology-and-data",
      eyebrow: "JVM Distributed Systems",
      title: "Java Spring Boot & Kafka Event-Driven Core",
      tag: "Product",
      description:
        "Build bank-grade transactional backends and real-time event streaming pipelines using modern Java and Spring Boot.",
      architecture:
        "Java 21 Virtual Threads, Spring Boot 3, Spring Security OAuth2, and Apache Kafka event brokers.",
      deliverables: [
        "Distributed Order, Payment & Logistics Processing Engines",
        "Real-Time Event Streaming & Webhook Dispatchers",
        "Enterprise Legacy SOAP/XML to Modern REST Modernization",
      ],
      codebases: ["Java", "Spring Boot", "Kafka", "Microservices"],
    },
    {
      id: "td-3",
      category: "technology-and-data",
      eyebrow: "Cloud DevOps & Infrastructure",
      title: "Kubernetes, Terraform & Multi-Cloud CI/CD",
      tag: "Product",
      description:
        "Ensure 99.99% uptime, instant global CDN delivery, and automated zero-downtime deployments across AWS, Azure, and GCP.",
      architecture:
        "Terraform IaC, Docker containers, Kubernetes (EKS/AKS/GKE), GitHub Actions, and Cloudflare/CloudFront edge security.",
      deliverables: [
        "Automated Build, Test & Blue/Green Deployment Pipelines",
        "WAF, DDoS Mitigation, SSL/TLS & Zero-Trust Network Security",
        "24/7 Prometheus, Grafana & OpenTelemetry Alerting",
      ],
      codebases: ["Cloud DevOps", "Kubernetes", "Terraform", "Docker"],
    },
    {
      id: "td-4",
      category: "technology-and-data",
      eyebrow: "Data Warehousing & ETL",
      title: "Python Data Pipelines & Vector Search Infrastructure",
      tag: "Product feature",
      description:
        "Unify fragmented customer, logistics, and marketing data into a clean warehouse ready for BI analytics and AI retrieval.",
      architecture:
        "Python Airflow/Prefect ETL pipelines, PostgreSQL/pgvector, and automated data quality validation.",
      deliverables: [
        "Automated Multi-Source API & Database ETL Connectors",
        "Data Cleansing, Deduplication & Governance",
        "Vector Embeddings & Semantic Search Indexing",
      ],
      codebases: ["Python", "ETL", "PostgreSQL", "Vector DB"],
    },
  ];

  const collageTiles = [
    { label: "Technical SEO", sub: "Core Web Vitals", icon: "travel_explore", bg: "#2b1600", fg: "#f9a144" },
    { label: "Search Ads", sub: "PPC & ROAS", icon: "ads_click", bg: "#f9a144", fg: "#2b1600" },
    { label: "GA4 & BI", sub: "Server Telemetry", icon: "monitoring", bg: "#2b1600", fg: "#f9a144" },
    { label: "JSON-LD", sub: "Schema Graphs", icon: "schema", bg: "#f9a144", fg: "#2b1600" },
    { label: ".NET Core", sub: "ASP.NET & C#", icon: "terminal", bg: "#f9a144", fg: "#2b1600" },
    { label: "Python AI", sub: "FastAPI & RAG", icon: "psychology", bg: "#2b1600", fg: "#f9a144" },
    { label: "React 19", sub: "SSR & Frontend", icon: "web", bg: "#f9a144", fg: "#2b1600" },
    { label: "Kotlin", sub: "Android & ASO", icon: "smartphone", bg: "#2b1600", fg: "#f9a144" },
    { label: "Kivy & Flet", sub: "Desktop & Touch", icon: "touch_app", bg: "#2b1600", fg: "#f9a144" },
    { label: "Java 21", sub: "Spring Boot", icon: "dns", bg: "#f9a144", fg: "#2b1600" },
    { label: "Cloud DevOps", sub: "K8s & CDN", icon: "cloud_done", bg: "#2b1600", fg: "#f9a144" },
    { label: "CRM Ops", sub: "Lead Automation", icon: "hub", bg: "#f9a144", fg: "#2b1600" },
  ];

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
        title="Search Engine Optimization (SEO) & Digital Marketing | Products, Visibility & Growth Engineering"
        description="Quinn Daisies Search Engine Optimization (SEO), Digital Marketing, Analytics, and Full-Stack Growth Products built across React, .NET Core, ASP.NET, C#, Python, JavaScript, Java, Kotlin, Kivy, and Flet."
        keywords="Search Engine Optimization, Digital Marketing, Technical SEO, Core Web Vitals, JSON-LD, Quinn Daisies Products, .NET Core, ASP.NET, C#, Python, React, JavaScript, Java, Kotlin, Kivy, Flet"
        url="/seo-and-digital-marketing"
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
            QUINN DAISIES GROWTH &amp; PRODUCT CATALOG • TECHNICAL SEO • DIGITAL MARKETING
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: SPLIT HERO + 12-TILE PRODUCT COLLAGE */}
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
                  QUINN DAISIES GROWTH &amp; PRODUCT CATALOG
                </span>
              </div>
              <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
                <span className="decorated-text underline">SEO, Digital</span> Marketing &amp; Growth Products
              </h1>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Discover how Quinn Daisies combines code-level <strong>Search Engine Optimization (SEO)</strong>,{" "}
                <strong>Performance Digital Marketing</strong>, and <strong>Full-Stack Product Engineering</strong>{" "}
                (.NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy &amp; Flet) to turn visibility
                into measurable enterprise revenue.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <a
                  href="#product-catalog"
                  className="ApplicationButton glue-button glue-button--high-emphasis"
                >
                  <span>Browse Solutions Catalog</span>
                  <span className="material-symbols-outlined">arrow_downward</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalItem(featuredProducts[0])}
                  className="ApplicationButton glue-button glue-button--medium-emphasis"
                >
                  <span>Inspect Technical SEO Suite</span>
                  <span className="material-symbols-outlined">memory</span>
                </button>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="products-collage-grid">
                {collageTiles.map((tile) => (
                  <div key={tile.label} className="products-collage-icon-tile">
                    <span
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 10,
                        background: tile.bg,
                        color: tile.fg,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 20, color: tile.fg }}>
                        {tile.icon}
                      </span>
                    </span>
                    <strong style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", color: "#2b1600" }}>{tile.label}</strong>
                    <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", color: "#6b625b" }}>{tile.sub}</span>
                  </div>
                ))}
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
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 44px" }}>
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
              FEATURED SOLUTIONS
            </span>
            <h2 className="glue-headline glue-headline--headline-2" style={{ color: "#ffffff" }}>
              Dominate search &amp; scale with AI-driven marketing
            </h2>
          </div>

          <div className="glue-grid">
            {featuredProducts.map((item, idx) => (
              <div key={item.id} className="glue-grid__col glue-grid__col--span-6">
                <div
                  className="featured-product-row-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveModalItem(item)}
                  onKeyDown={(e) => e.key === "Enter" && setActiveModalItem(item)}
                >
                  <div className="featured-product-card-left">
                    <div className="featured-product-icon-box">
                      <span className="material-symbols-outlined" style={{ fontSize: 26, color: "var(--qd-espresso)" }}>
                        {idx === 0 ? "travel_explore" : "campaign"}
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
                  <span className="featured-product-plus-btn" aria-hidden="true">
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
            {/* Left Sticky Espresso Sidebar (span-3) */}
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

                <div role="tablist" aria-label="Filter solutions by category">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={selectedCategory === cat.id}
                      className={`product-filter-cat-btn ${selectedCategory === cat.id ? "active" : ""}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <span>{cat.label}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(249,161,68,0.28)" }}>
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

            {/* Right Categorized Catalog Area (span-9) */}
            <div className="glue-grid__col glue-grid__col--span-9">
              {visibleCategories.map((cat) => {
                const items = catalogItems.filter((item) => item.category === cat.id);
                return (
                  <div key={cat.id} id={cat.id} className="product-catalog-category-block">
                    <div style={{ marginBottom: 24 }}>
                      <h2 className="glue-headline glue-headline--headline-3" style={{ marginBottom: 6 }}>
                        {cat.label}
                      </h2>
                      <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.6, margin: 0 }}>
                        {cat.desc}
                      </p>
                    </div>

                    <div className={viewMode === "grid" ? "product-catalog-grid" : "product-catalog-list"}>
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className={`product-catalog-card ${viewMode === "list" ? "list-mode" : ""}`}
                          role="button"
                          tabIndex={0}
                          onClick={() => setActiveModalItem(item)}
                          onKeyDown={(e) => e.key === "Enter" && setActiveModalItem(item)}
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
                                  memory
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
                                {item.eyebrow}
                              </span>
                            </div>

                            <h3 className="glue-headline glue-headline--headline-5" style={{ marginBottom: 8 }}>
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

                          <div
                            className="product-card-footer"
                            style={
                              viewMode === "list"
                                ? { marginTop: 0, paddingTop: 0, borderTop: "none", marginLeft: 24, gap: 16 }
                                : undefined
                            }
                          >
                            <span
                              className={`product-card-tag ${
                                item.tag === "Product feature" ? "feature" : ""
                              }`}
                            >
                              {item.tag}
                            </span>
                            <span className="featured-product-plus-btn" aria-hidden="true">
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

      {/* Interactive Product / Solution Modal */}
      <QuinnProductModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </div>
  );
};

export default SeoDigitalMarketing;
