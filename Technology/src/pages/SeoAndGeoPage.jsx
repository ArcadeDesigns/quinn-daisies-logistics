import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  QuinnProductModal,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const SeoAndGeoPage = () => {
  const containerRef = useRef(null);
  const [selectedEngineFilter, setSelectedEngineFilter] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const featuredSeries = [
    {
      eyebrow: "GENERATIVE ENGINE OPTIMIZATION (GEO)",
      title: "Engineering Brand Citations in Google AI Overviews, Gemini, ChatGPT & Perplexity",
      desc: "Structure entity salience, authoritative fact-blocks, and `/llms.txt` markdown indexes so AI answer engines cite your brand first.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa",
      deliverables: [
        "Entity Knowledge Graph mapping (Organization, Service, Product, FAQPage, TechnicalArticle JSON-LD)",
        "Automated `/llms.txt` and RAG-friendly clean markdown endpoint generation",
        "Prompt-share-of-voice tracking across Gemini, ChatGPT Search, Perplexity, and Google AI Overviews",
      ],
      codebases: ["JSON-LD Schema", "llms.txt", "React SSR", "ASP.NET Core", "Python NLP"],
    },
    {
      eyebrow: "TECHNICAL SEO & CORE WEB VITALS",
      title: "Sub-Second LCP (<1.2s), Zero-CLS & Edge Server-Side Rendering",
      desc: "Eliminate JavaScript render-blocking, optimize crawl budgets, and achieve 99+ Lighthouse performance across React and .NET portals.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_c4bf6ac4bf6ac4bf.jpg?alt=media&token=8ae19566-5ea0-4cde-892b-268cd74f7b34",
      deliverables: [
        "Core Web Vitals engineering: LCP < 1.2s, INP < 80ms, and CLS < 0.01",
        "Automated XML Sitemap, Hreflang multi-region routing, and canonical tag governance",
        "Log-file bot crawl analysis for Googlebot, Bingbot, OAI-SearchBot, and Google-Extended",
      ],
      codebases: ["Core Web Vitals", "React 19", "ASP.NET Razor", "Cloudflare Edge", "XML Sitemaps"],
    },
    {
      eyebrow: "PROGRAMMATIC & MULTI-REGION SEO",
      title: "Dominating North America, Europe, Asia & Africa Trade Corridors",
      desc: "Data-driven programmatic landing architectures and localized entity hubs that capture high-intent commercial and government searches.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      deliverables: [
        "Programmatic route, industry, and technical stack landing page engines backed by PostgreSQL/SQL Server",
        "International SEO & Hreflang architecture for US, EU, Asian, and African markets",
        "Real-time Google Search Console & BigQuery rank/impression telemetry",
      ],
      codebases: ["Programmatic SEO", "Hreflang", "Python", ".NET Core", "BigQuery"],
    },
  ];

  const seoGeoModules = [
    {
      category: "GEO (Generative AI Search)",
      title: "AI Answer Engine Citation & Entity Salience Architecture",
      tag: "Gemini • ChatGPT • Perplexity",
      desc: "Optimize semantic triples, statistical proof points, and authoritative entity co-occurrence so LLMs synthesize and recommend your solutions.",
      deliverables: [
        "Entity disambiguation and SameAs Wikidata/LinkedIn/GovCon knowledge graph linking",
        "Direct-answer snippet formatting engineered for RAG retrieval chunkers",
        "Monthly AI Citation Share-of-Voice audit across 250+ commercial prompts",
      ],
      codebases: ["GEO", "JSON-LD", "Knowledge Graph", "Python"],
    },
    {
      category: "GEO (Generative AI Search)",
      title: "LLMs.txt, AI Crawler Governance & Markdown Twins",
      tag: "OAI-SearchBot • Google-Extended",
      desc: "Serve clean, token-efficient `/llms.txt` documentation and structured API endpoints purpose-built for AI search crawlers.",
      deliverables: [
        "Standardized `/llms.txt` and `/llms-full.txt` generation in build pipelines",
        "Granular `robots.txt` and HTTP header rules for search vs. training bots",
        "Structured pricing, capability, and NAICS/PSC tables for instant AI parsing",
      ],
      codebases: ["llms.txt", "Node.js", "Python", "ASP.NET Core"],
    },
    {
      category: "Technical SEO",
      title: "Core Web Vitals & React / .NET SSR Performance Overhaul",
      tag: "LCP < 1.2s • INP < 80ms",
      desc: "Deep code-level optimization of bundle splitting, font preloading, AVIF/WebP image pipelines, and edge caching.",
      deliverables: [
        "Route-level code splitting, tree-shaking, and critical CSS inlining",
        "Server-Side Rendering (SSR) & Static Site Generation (SSG) hydration tuning",
        "Continuous Lighthouse CI regression gates in GitHub Actions",
      ],
      codebases: ["React", "Vite", "ASP.NET Core", "Lighthouse CI"],
    },
    {
      category: "Technical SEO",
      title: "Nested JSON-LD Schema.org & Rich Result Engineering",
      tag: "Schema.org • Rich Snippets",
      desc: "Programmatic injection of validated Organization, Service, SoftwareApplication, BreadcrumbList, and FAQPage JSON-LD.",
      deliverables: [
        "Zero-error Google Rich Results Test validation across all routes",
        "Dynamic schema generation from C# .NET and Python backend models",
        "Sitelinks Searchbox and corporate contact point structured markup",
      ],
      codebases: ["JSON-LD", "Schema.org", "React Helmet", "TypeScript"],
    },
    {
      category: "Enterprise & Local Authority",
      title: "B2B, GovCon & Multi-Location Local Search Dominance",
      tag: "B2B • GovCon • Local Pack",
      desc: "Capture high-value enterprise RFPs, regional logistics queries, and software engineering searches across target metros.",
      deliverables: [
        "Maryland, D.C., Virginia (DMV) & global corridor local entity optimization",
        "NAICS, PSC, and technical capability keyword mapping for government buyers",
        "High-authority digital PR, technical whitepapers, and backlink acquisition",
      ],
      codebases: ["Local SEO", "GovCon SEO", "Google Business", "Analytics"],
    },
    {
      category: "Analytics & Attribution",
      title: "Search Console, GA4 & AI Referral Telemetry Warehouse",
      tag: "GA4 • GSC • BigQuery",
      desc: "Track organic search conversions alongside traffic and leads originating from ChatGPT, Perplexity, Gemini, and Copilot.",
      deliverables: [
        "Custom AI-referrer segmentation (chat.openai.com, perplexity.ai, gemini.google.com)",
        "Automated Python & Flet executive SEO/GEO ROI dashboards",
        "Multi-touch revenue attribution linking organic queries to closed contracts",
      ],
      codebases: ["GA4", "BigQuery", "Python Flet", "Looker / PowerBI"],
    },
  ];

  const filteredModules =
    selectedEngineFilter === "All"
      ? seoGeoModules
      : seoGeoModules.filter((m) => m.category === selectedEngineFilter);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stories-hero--content > *",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.72, stagger: 0.08, ease: "power3.out" }
      );

      gsap.fromTo(
        ".stories-big-card",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stories-big-card",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".series-cards .animated-card",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".series-cards",
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
        title="SEO & GEO (Generative Engine Optimization) Services | Quinn Daisies Technology"
        description="Dominate both traditional Google Search (Technical SEO) and AI Answer Engines (GEO — Generative Engine Optimization for Google AI Overviews, Gemini, ChatGPT, and Perplexity) with Quinn Daisies Technology."
        keywords="SEO and GEO, Generative Engine Optimization, Technical SEO, AI search optimization, JSON-LD knowledge graph, llms.txt, Core Web Vitals optimization, Quinn Daisies SEO"
        canonicalUrl="/seo-and-geo"
      />

      {/* SECTION 1: FULL-BLEED STORIES HERO */}
      <section
        id="stories-hero-section"
        className="stories-hero"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qm0m9pqm0m9pqm0m.jpg?alt=media&token=90f307df-7175-49df-95fd-ca3507a505bc')",
        }}
      >
        <div className="stories-hero--gradient" />
        <div className="stories-hero--content">
          <span
            className="glue-eyebrow"
            style={{
              fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
              color: "#f9a144",
              fontWeight: 600,
              letterSpacing: "0.06em",
              display: "inline-block",
              marginBottom: 14,
            }}
          >
            SEARCH ENGINE OPTIMIZATION (SEO) &amp; GENERATIVE ENGINE OPTIMIZATION (GEO)
          </span>
          <h1 className="glue-headline glue-headline--headline-1 stories-hero--heading">
            Be the #1 answer on Google Search{" "}
            <span className="decorated-text underline" style={{ color: "#f9a144" }}>
              and AI Engines
            </span>
          </h1>
          <p
            className="stories-hero-description"
            style={{
              fontSize: "var(--qd-font-size-body-large, 1.15em)",
              lineHeight: 1.7,
              maxWidth: 780,
              margin: "0 auto 30px",
            }}
          >
            Search has evolved. Quinn Daisies engineers your digital presence for both traditional SERPs (Google, Bing)
            and Generative AI Answer Engines (Google AI Overviews, Gemini, ChatGPT Search, Perplexity &amp; Claude).
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14, marginBottom: 26 }}>
            <Link
              to="/technology-contact-us"
              className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
            >
              <span>Request an SEO &amp; GEO Audit</span>
              <span className="material-symbols-outlined">memory</span>
            </Link>
            <a
              href="#seo-geo-catalog"
              className="ApplicationButton glue-button glue-button--medium-emphasis glue-button--reversed"
            >
              <span>Explore SEO &amp; GEO Modules</span>
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StripeTape210 />
          </div>
        </div>
      </section>

      {/* SECTION 2: STORIES FEATURE SECTION WITH BIG SPOTLIGHT CARD + 3 SERIES CARDS */}
      <section id="stories-feature-section" className="stories about-stories">
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
              DUAL-ENGINE VISIBILITY ARCHITECTURE
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              How we engineer <span className="decorated-text underline">organic &amp; AI citation dominance</span>
            </h2>
          </div>

          {/* Big Spotlight Card */}
          <div className="stories-big-card">
            <div className="stories-big-card-inner">
              <div className="stories-big-card-media">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_uyacyjuyacyjuyac.jpg?alt=media&token=28099705-d49d-4974-a66a-87c3b04f9752"
                  alt="Quinn Daisies SEO and Generative Engine Optimization Telemetry"
                />
              </div>
              <div className="stories-big-card-content">
                <span
                  className="glue-eyebrow"
                  style={{
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    color: "#f9a144",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: 10,
                  }}
                >
                  FEATURED ARCHITECTURE • SEO + GEO SYNERGY
                </span>
                <h3 className="glue-headline glue-headline--headline-3" style={{ color: "#ffffff", marginBottom: 16 }}>
                  Why Traditional SEO Alone Is No Longer Enough in the Age of AI Search
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.88)",
                    fontSize: "var(--qd-font-size-body-large, 1.15em)",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  Decision-makers in B2B, logistics, software, and government contracting increasingly ask AI engines
                  for vendor recommendations before clicking a single blue link. Our unified{" "}
                  <strong>SEO + GEO</strong> architecture combines sub-second technical performance and high-authority
                  backlinks with machine-readable <strong>JSON-LD Knowledge Graphs</strong>,{" "}
                  <strong>/llms.txt</strong> documentation, and high-density factual citations.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
                  >
                    <span>Get Your Brand Cited by AI</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                  <Link
                    to="/digital-marketing"
                    className="ApplicationButton glue-button glue-button--medium-emphasis glue-button--reversed"
                  >
                    <span>Explore Digital Marketing</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 3-Column Series Cards */}
          <ul className="glue-grid series-cards">
            {featuredSeries.map((card) => (
              <li key={card.title} className="glue-grid__col glue-grid__col--span-4">
                <div
                  className="animated-card"
                  style={{ cursor: "pointer" }}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setActiveModalItem({
                      eyebrow: card.eyebrow,
                      title: card.title,
                      description: card.desc,
                      architecture: "Quinn Daisies SEO & GEO Engineering Stack.",
                      deliverables: card.deliverables,
                      codebases: card.codebases,
                    })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModalItem({
                        eyebrow: card.eyebrow,
                        title: card.title,
                        description: card.desc,
                        architecture: "Quinn Daisies SEO & GEO Engineering Stack.",
                        deliverables: card.deliverables,
                        codebases: card.codebases,
                      });
                    }
                  }}
                >
                  <div className="glue-card__asset">
                    <img src={card.img} alt={card.title} />
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
                      {card.eyebrow}
                    </span>
                    <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 10 }}>
                      {card.title}
                    </h3>
                    <p
                      style={{
                        color: "#3b3b3b",
                        fontSize: "var(--qd-font-size-body, 1em)",
                        lineHeight: 1.65,
                        flexGrow: 1,
                      }}
                    >
                      {card.desc}
                    </p>
                    <div
                      style={{
                        marginTop: 16,
                        fontWeight: 600,
                        color: "#2b1600",
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span>Inspect technical deliverables</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE FILTER MODULE */}
      <section id="seo-geo-catalog" className="filter-module-a glue-filter">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 40px" }}>
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
              ALL SEO &amp; GEO CAPABILITIES
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Filter our <span className="decorated-text underline">Search &amp; Generative Optimization</span> modules
            </h2>
          </div>

          <div className="glue-grid">
            {/* Left Filter Sidebar */}
            <div className="glue-grid__col glue-grid__col--span-3">
              <div className="glue-filter-sidebar-box">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h3 className="glue-headline glue-headline--headline-5" style={{ margin: 0 }}>
                    Filter By Discipline
                  </h3>
                  {selectedEngineFilter !== "All" && (
                    <button
                      type="button"
                      onClick={() => setSelectedEngineFilter("All")}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#c86d10",
                        fontWeight: 600,
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        cursor: "pointer",
                      }}
                    >
                      Reset
                    </button>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    "All",
                    "GEO (Generative AI Search)",
                    "Technical SEO",
                    "Enterprise & Local Authority",
                    "Analytics & Attribution",
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`glue-filter-chip-btn ${selectedEngineFilter === cat ? "active" : ""}`}
                      style={{ width: "100%", justifyContent: "space-between", margin: 0 }}
                      onClick={() => setSelectedEngineFilter(cat)}
                    >
                      <span>{cat}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Results Grid */}
            <div className="glue-grid__col glue-grid__col--span-9">
              <div className="glue-grid">
                {filteredModules.map((mod) => (
                  <div key={mod.title} className="glue-grid__col glue-grid__col--span-6">
                    <div
                      className="product-catalog-card"
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setActiveModalItem({
                          eyebrow: mod.category,
                          title: mod.title,
                          description: mod.desc,
                          architecture: `Target Engines: ${mod.tag}`,
                          deliverables: mod.deliverables,
                          codebases: mod.codebases,
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveModalItem({
                            eyebrow: mod.category,
                            title: mod.title,
                            description: mod.desc,
                            architecture: `Target Engines: ${mod.tag}`,
                            deliverables: mod.deliverables,
                            codebases: mod.codebases,
                          });
                        }
                      }}
                    >
                      <div>
                        <span
                          className="glue-eyebrow"
                          style={{
                            fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                            color: "#c86d10",
                            fontWeight: 600,
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          {mod.category}
                        </span>
                        <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 10 }}>
                          {mod.title}
                        </h3>
                        <p
                          style={{
                            color: "#3b3b3b",
                            fontSize: "var(--qd-font-size-body, 1em)",
                            lineHeight: 1.65,
                            margin: 0,
                          }}
                        >
                          {mod.desc}
                        </p>
                      </div>
                      <div className="product-card-footer">
                        <span className="product-card-tag feature">{mod.tag}</span>
                        <span className="featured-product-plus-btn">
                          <span className="material-symbols-outlined" style={{ fontSize: 20 }}>add</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuinnProductModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </div>
  );
};

export default SeoAndGeoPage;
