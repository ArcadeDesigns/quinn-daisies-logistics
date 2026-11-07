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

const DigitalMarketingPage = () => {
  const containerRef = useRef(null);
  const [selectedChannelFilter, setSelectedChannelFilter] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const featuredCampaigns = [
    {
      eyebrow: "ACCOUNT-BASED MARKETING (ABM) & B2B DEMAND GEN",
      title: "Precision Enterprise & Government Decision-Maker Acquisition",
      desc: "Target key accounts across logistics, manufacturing, enterprise IT, and public-sector procurement with orchestrated multi-channel campaigns.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67",
      deliverables: [
        "Tier-1 account intent tracking and LinkedIn / Programmatic ABM orchestration",
        "Custom industry landing pages built in React 19 with sub-second load times",
        "CRM & pipeline velocity integration (.NET Core / Python webhook automation)",
      ],
      codebases: ["LinkedIn ABM", "React 19", "GA4 Server-Side", "CRM Automation"],
    },
    {
      eyebrow: "PAID SEARCH, PERFORMANCE MAX & PROGRAMMATIC",
      title: "High-Intent Google Ads, Bing Ads & Algorithmic Bid Engineering",
      desc: "Capture bottom-of-funnel commercial demand with server-side conversion APIs, offline CRM revenue feedback, and negative-keyword guardrails.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_c4bf6ac4bf6ac4bf.jpg?alt=media&token=8ae19566-5ea0-4cde-892b-268cd74f7b34",
      deliverables: [
        "Server-side Google Tag Manager (sGTM) and Enhanced Conversions API deployment",
        "Offline Qualified Lead (SQL/Closed-Won) automated feedback loops into Google Ads",
        "Real-time ROAS, CAC, and LTV executive telemetry in Python Flet & Looker",
      ],
      codebases: ["Google Ads API", "sGTM", "Python", "BigQuery"],
    },
    {
      eyebrow: "CONVERSION RATE OPTIMIZATION (CRO) & MARKETING OPS",
      title: "Turning Existing Traffic Into Qualified Enterprise Pipeline",
      desc: "Full-funnel A/B testing, interactive ROI calculators, automated quote estimators, and multi-step lead qualification workflows.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ppcb8nppcb8nppcb.jpg?alt=media&token=559a6c92-8f13-49a7-a190-a8250d8b66d2",
      deliverables: [
        "Interactive freight, cloud, and software cost calculators engineered in React & TypeScript",
        "Heatmap, session replay, and form drop-off diagnostics",
        "Automated email/SMS/CRM lead nurturing sequences with AI personalization",
      ],
      codebases: ["React", "TypeScript", "A/B Testing", "Marketing Automation"],
    },
  ];

  const marketingModules = [
    {
      channel: "Paid Media & Search",
      title: "Google Ads, Microsoft Advertising & High-Intent Search Capture",
      tag: "PPC • Server-Side CAPI",
      desc: "Granular search campaign engineering focused on commercial pipeline, not vanity clicks.",
      deliverables: [
        "Exact and phrase-match high-intent campaign structures",
        "Server-side conversion tracking bypassing browser cookie loss",
        "Automated bid scripts and budget pacing monitors",
      ],
      codebases: ["Google Ads", "Bing Ads", "sGTM", "JavaScript"],
    },
    {
      channel: "Account-Based Marketing (ABM)",
      title: "LinkedIn B2B & Executive Decision-Maker Campaigns",
      tag: "B2B • Enterprise ABM",
      desc: "Reach C-suite executives, supply chain directors, and agency program managers by company, role, and seniority.",
      deliverables: [
        "Matched audience list enrichment and firmographic targeting",
        "Thought-leadership document ads, video case studies, and lead-gen forms",
        "Automated Slack/Teams & CRM instant alert routing when target accounts engage",
      ],
      codebases: ["LinkedIn Ads", "HubSpot / Salesforce", "Python Webhooks"],
    },
    {
      channel: "CRO & Interactive Experiences",
      title: "High-Converting Landing Pages & Interactive Quote Calculators",
      tag: "React • Sub-Second UX",
      desc: "Custom-engineered React landing experiences and interactive estimators that double lead-to-opportunity conversion rates.",
      deliverables: [
        "Custom multi-step quote and RFP intake flows",
        "Sub-second Core Web Vitals for maximum Quality Score and lower CPCs",
        "WCAG 2.1 AA compliant accessible forms",
      ],
      codebases: ["React", "TypeScript", "ASP.NET Core", "Tailwind/CSS"],
    },
    {
      channel: "Marketing Automation & CRM",
      title: "Custom CRM Pipelines, Lead Scoring & Attribution Engineering",
      tag: ".NET • Python • CRM APIs",
      desc: "Unify marketing touchpoints with your ERP, billing, and sales CRM through custom Python and .NET middleware.",
      deliverables: [
        "Bi-directional sync between web forms, HubSpot/Salesforce/Dynamics 365, and internal databases",
        "AI-driven lead enrichment and automated routing by territory or contract vehicle",
        "Multi-touch attribution modeling (First-Touch, W-Shaped, Data-Driven)",
      ],
      codebases: ["Python FastAPI", ".NET Core", "REST Webhooks", "SQL"],
    },
    {
      channel: "Content & Authority",
      title: "Technical Whitepapers, Case Studies & Video Production",
      tag: "B2B Content • GovCon",
      desc: "Authoritative engineering whitepapers, capability briefs, and customer success stories that build institutional trust.",
      deliverables: [
        "Deep technical architecture whitepapers written with Principal Engineers",
        "Interactive case study portals and downloadable capability statements",
        "Omnichannel distribution across search, social, and email newsletters",
      ],
      codebases: ["Content Engineering", "SEO & GEO", "Video", "Design"],
    },
    {
      channel: "Analytics & BI",
      title: "Executive Revenue, CAC & Pipeline Telemetry Dashboards",
      tag: "BigQuery • Python Flet",
      desc: "Real-time visibility into marketing spend, cost per qualified opportunity, and closed-won revenue.",
      deliverables: [
        "Unified data warehouse combining Google Ads, LinkedIn, GSC, GA4, and CRM revenue",
        "Custom Python Flet desktop/web executive cockpits and automated weekly briefings",
        "Cohort retention and customer lifetime value (LTV) forecasting",
      ],
      codebases: ["BigQuery", "Python Flet", "GA4", "PostgreSQL"],
    },
  ];

  const filteredModules =
    selectedChannelFilter === "All"
      ? marketingModules
      : marketingModules.filter((m) => m.channel === selectedChannelFilter);

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
        title="Digital Marketing, B2B Demand Generation & ABM | Quinn Daisies Technology"
        description="Full-funnel B2B and Enterprise Digital Marketing by Quinn Daisies Technology: Account-Based Marketing (ABM), Paid Search, Conversion Rate Optimization (CRO), Marketing Automation, and Revenue Attribution."
        keywords="digital marketing, B2B demand generation, Account-Based Marketing ABM, conversion rate optimization CRO, marketing automation CRM, paid search Google Ads LinkedIn Ads, Quinn Daisies"
        canonicalUrl="/digital-marketing"
      />

      {/* SECTION 1: FULL-BLEED STORIES HERO */}
      <section
        id="stories-hero-section"
        className="stories-hero"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_bb7zlobb7zlobb7z.jpg?alt=media&token=98dcf4a8-ff36-45a9-9f5a-930d4ed06594')",
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
            QUINN DAISIES DIGITAL MARKETING, ABM &amp; REVENUE ENGINEERING
          </span>
          <h1 className="glue-headline glue-headline--headline-1 stories-hero--heading">
            Data-engineered digital marketing that{" "}
            <span className="decorated-text underline" style={{ color: "#f9a144" }}>
              drives measurable pipeline
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
            We combine precision B2B Account-Based Marketing (ABM), high-intent paid acquisition, sub-second React
            conversion experiences, and custom Python/.NET attribution pipelines.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14, marginBottom: 26 }}>
            <Link
              to="/technology-contact-us"
              className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
            >
              <span>Launch Your Growth Campaign</span>
              <span className="material-symbols-outlined">memory</span>
            </Link>
            <Link
              to="/seo-and-geo"
              className="ApplicationButton glue-button glue-button--medium-emphasis glue-button--reversed"
            >
              <span>Explore SEO &amp; GEO Optimization</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StripeTape210 />
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED CAMPAIGN ARCHITECTURES */}
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
              FULL-FUNNEL GROWTH ENGINEERING
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Where software engineering meets{" "}
              <span className="decorated-text underline">high-velocity demand generation</span>
            </h2>
          </div>

          <div className="stories-big-card">
            <div className="stories-big-card-inner">
              <div className="stories-big-card-media">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ie5nmxie5nmxie5n.jpg?alt=media&token=23ffc884-cfe7-4505-91cf-3c23c8b8a0f4"
                  alt="Quinn Daisies Digital Marketing and Attribution Engineering"
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
                  ENGINEERING-LED GROWTH
                </span>
                <h3 className="glue-headline glue-headline--headline-3" style={{ color: "#ffffff", marginBottom: 16 }}>
                  Full-Loop Revenue Attribution From First Ad Impression to Signed Contract
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.88)",
                    fontSize: "var(--qd-font-size-body-large, 1.15em)",
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}
                >
                  Most marketing agencies stop at form fills. Because Quinn Daisies is a full-stack technology company,
                  we wire your ad platforms, server-side analytics, and CRM directly into your backend databases —
                  optimizing every dollar toward actual closed revenue.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
                  >
                    <span>Request a Growth &amp; Attribution Audit</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                  <Link
                    to="/seo-and-digital-marketing"
                    className="ApplicationButton glue-button glue-button--medium-emphasis glue-button--reversed"
                  >
                    <span>View Full Growth Catalog</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ul className="glue-grid series-cards">
            {featuredCampaigns.map((card) => (
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
                      architecture: "Quinn Daisies Growth & Attribution Engineering Stack.",
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
                        architecture: "Quinn Daisies Growth & Attribution Engineering Stack.",
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
                      <span>Inspect campaign blueprint</span>
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

      {/* SECTION 3: INTERACTIVE CHANNEL FILTER MODULE */}
      <section className="filter-module-a glue-filter">
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
              OMNICHANNEL DEMAND &amp; PIPELINE MODULES
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Filter our <span className="decorated-text underline">Digital Marketing &amp; Attribution</span> modules
            </h2>
          </div>

          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-3">
              <div className="glue-filter-sidebar-box">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h3 className="glue-headline glue-headline--headline-5" style={{ margin: 0 }}>
                    Filter By Channel
                  </h3>
                  {selectedChannelFilter !== "All" && (
                    <button
                      type="button"
                      onClick={() => setSelectedChannelFilter("All")}
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
                    "Paid Media & Search",
                    "Account-Based Marketing (ABM)",
                    "CRO & Interactive Experiences",
                    "Marketing Automation & CRM",
                    "Content & Authority",
                    "Analytics & BI",
                  ].map((ch) => (
                    <button
                      key={ch}
                      type="button"
                      className={`glue-filter-chip-btn ${selectedChannelFilter === ch ? "active" : ""}`}
                      style={{ width: "100%", justifyContent: "space-between", margin: 0 }}
                      onClick={() => setSelectedChannelFilter(ch)}
                    >
                      <span>{ch}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chevron_right</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

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
                          eyebrow: mod.channel,
                          title: mod.title,
                          description: mod.desc,
                          architecture: `Channel Focus: ${mod.tag}`,
                          deliverables: mod.deliverables,
                          codebases: mod.codebases,
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setActiveModalItem({
                            eyebrow: mod.channel,
                            title: mod.title,
                            description: mod.desc,
                            architecture: `Channel Focus: ${mod.tag}`,
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
                          {mod.channel}
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

export default DigitalMarketingPage;
