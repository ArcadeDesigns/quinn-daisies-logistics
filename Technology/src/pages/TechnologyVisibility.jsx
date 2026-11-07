import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SEO from "../components/SEO";
import QuinnOperationalFramework from "../components/QuinnOperationalFramework";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
  StripeTapeVertical26,
} from "../components/QuinnGoogleAssets";
import "../App.css";

const heroSlides = [
  {
    badge: "QUINN DAISIES CLOUD & VISIBILITY",
    title: "Quinn Daisies Cloud, SDLC & Visibility Program: Build faster. Go further.",
    description:
      "Unify your full Software Development Life Cycle (SDLC), Cloud DevOps, AI Automation, Web, Mobile, and Desktop applications with global Search Visibility—engineered across .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2F2151719610.jpg?alt=media&token=d34600ad-bcba-4996-88c7-7b753c1cb33b",
    tag: "Full-Stack Delivery: Backend, Frontend, Desktop, Mobile & Cloud",
    statBadge: "99.99% SLA Ready",
    btnText: "Apply for Architecture & Cloud Assessment",
    btnLink: "/software-development-and-engineering",
  },
  {
    badge: "ENTERPRISE AI & DISTRIBUTED SYSTEMS",
    title: "Autonomous AI Agents, Enterprise Microservices & Polyglot Systems",
    description:
      "Deploy custom cognitive agent swarms, LangGraph orchestration, RAG vector retrieval stores, and high-throughput .NET 9 and Java Spring microservices that process high-concurrency enterprise workloads with sub-millisecond execution latency.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2F2151719608.jpg?alt=media&token=da1677ce-707e-416e-ad29-4a094a344379",
    tag: "Cognitive AI & Microservices: Python, .NET 9, Java, Kotlin & Docker",
    statBadge: "NIST 800-171 & SOC 2 Ready",
    btnText: "Explore AI & Microservices Engineering",
    btnLink: "/artificial-intelligence",
  },
  {
    badge: "GOVERNMENT PROCUREMENT & SEARCH DOMINANCE",
    title: "SAM.gov, Maryland eMMA & UNGM Bids with Top-Tier GEO Visibility",
    description:
      "Win high-value federal, state, and international technical contracts paired with programmatic Generative Engine Optimization (GEO) and technical SEO to guarantee domain authority and multi-corridor market visibility.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2F2151719609.jpg?alt=media&token=e7a19218-6bdd-47f0-8666-5640806832d7",
    tag: "GovTech Procurement & GEO: FAR / DFARS Compliant Proposals",
    statBadge: "CAGE 9T0A5 • UEI Active",
    btnText: "View Contracting & Writing Services",
    btnLink: "/contract-procurement-and-writing",
  },
];

const TechnologyVisibility = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const heroContentRef = useRef(null);
  const heroMediaRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const goToSlide = (nextIdx) => {
    if (isAnimatingRef.current || nextIdx === activeSlide) return;
    isAnimatingRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    tl.to([heroContentRef.current, heroMediaRef.current], {
      opacity: 0,
      y: -18,
      duration: 0.32,
      ease: "power2.in",
    })
      .add(() => {
        setActiveSlide(nextIdx);
      })
      .set([heroContentRef.current, heroMediaRef.current], { y: 22 })
      .to([heroContentRef.current, heroMediaRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.46,
        ease: "power3.out",
      });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((activeSlide + 1) % heroSlides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const currentSlide = heroSlides[activeSlide];

  const stackShowcase = [
    {
      name: ".NET Core & ASP.NET",
      role: "Enterprise Backend & Microservices",
      detail: "High-throughput C# Web APIs, gRPC services, Minimal APIs, and distributed worker clusters.",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: "C# Desktop & Cloud",
      role: "WPF, WinUI, MAUI & Multi-Cloud",
      detail: "Mission-critical Windows & cross-platform desktop suites, background daemons, and ERP cores.",
      bg: "#3b2004",
      fg: "#f9a144",
    },
    {
      name: "Python & AI Automation",
      role: "FastAPI, Django, LLM Agents & ETL",
      detail: "AI pipelines, autonomous workflow orchestration, RAG vector search, and data engineering.",
      bg: "#f9a144",
      fg: "#2b1600",
    },
    {
      name: "Kivy & Flet (Python UI)",
      role: "Cross-Platform Desktop & Mobile",
      detail: "Hardware-accelerated Kivy touch apps and Flutter-powered Flet desktop/web/mobile interfaces.",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: "React & Modern JavaScript",
      role: "Frontend, SSR & Edge Web Apps",
      detail: "Core Web Vitals-optimized React SPAs, TypeScript design systems, and real-time dashboards.",
      bg: "#f9a144",
      fg: "#2b1600",
    },
    {
      name: "Java Enterprise Systems",
      role: "Spring Boot, Kafka & FinTech",
      detail: "JVM distributed event streaming, high-concurrency banking & logistics backends.",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: "Kotlin Mobile & Multiplatform",
      role: "Native Android & KMP",
      detail: "Jetpack Compose Android apps, offline-first field scanners, and Kotlin Multiplatform SDKs.",
      bg: "#3b2004",
      fg: "#f9a144",
    },
    {
      name: "Cloud DevOps & SRE",
      role: "Kubernetes, Terraform & CI/CD",
      detail: "Zero-downtime deployments, GitHub Actions, Docker, OpenTelemetry, and multi-cloud FinOps.",
      bg: "#f9a144",
      fg: "#2b1600",
    },
    {
      name: "SEO & Digital Visibility",
      role: "Technical SEO, Schema & Growth",
      detail: "Programmatic SEO, JSON-LD entity graphs, conversion telemetry, and global search dominance.",
      bg: "#2b1600",
      fg: "#f9a144",
    },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  const faqList = [
    {
      q: "What does Quinn Daisies' Full SDLC Governance & Lifecycle Management cover?",
      a: "Our delivery methodology spans comprehensive Discovery and PRD authoring, domain-driven C4 System Architecture modeling, high-fidelity UI/UX prototyping in Figma, frontend and backend engineering, automated end-to-end QA test suites, SecOps compliance audits, automated cloud deployments, and continuous L1–L3 managed SRE support.",
    },
    {
      q: "Which codebases, programming languages, and cloud runtimes do you support?",
      a: "We maintain deep production competency in .NET 8/9 (.NET Core, ASP.NET Core MVC/Web API, Blazor, C# WPF/WinUI/MAUI), Python 3.11+ (FastAPI, Django, Kivy, Flet, PyTorch, LangChain), JavaScript and TypeScript (React 19, Vite, Next.js, Node.js), and the JVM ecosystem (Java 21 Spring Boot, Kotlin Android/Multiplatform) across GCP, AWS, Azure, and private Kubernetes clusters.",
    },
    {
      q: "How do you ensure Search Visibility and Generative Engine Optimization (GEO)?",
      a: "Every digital property ships with automated XML sitemaps, rich JSON-LD entity graph structured schema, sub-second Core Web Vitals optimization, and real-time telemetry. This ensures both traditional search engines (Google, Bing) and AI search engines (ChatGPT, Google Gemini, Perplexity) recognize and cite your platform with high authority.",
      linkText: "Explore our full SEO & Digital Marketing catalog",
      linkTo: "/seo-and-digital-marketing",
    },
    {
      q: "How do we initiate a Technical Discovery or RFP Procurement engagement?",
      a: "Organizations can book a Technical Discovery & Codebase Audit directly through our portal. For public sector and commercial tenders, our dedicated Contract Procurement team supports SAM.gov, Maryland eMMA, and UNGM bids with compliant technical proposals, pricing schedules, and strict SLA commitments.",
      linkText: "View Contract Procurement & Proposal Writing",
      linkTo: "/contract-procurement-and-writing",
    },
  ];

  return (
    <div className="qd-google-page">
      <SEO
        title="Technology & Visibility | Cloud, Full SDLC, DevOps & Multi-Stack Engineering"
        description="Quinn Daisies Technology & Visibility Program: Build faster and go further across Cloud Services, DevOps, AI, Web, Mobile, and Desktop using .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet."
        keywords="Quinn Daisies Technology, Cloud Services, Cloud DevOps, Full SDLC, .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, Flet, Desktop Application, Web Application"
        url="/technology-and-visibility"
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
            QUINN DAISIES TECHNOLOGY &amp; VISIBILITY • MULTI-STACK ENGINEERING • FULL SDLC
          </span>
          <StripeTape210 />
        </div>
      </div>

      <section className="cloud-hero-section accelerator-landing-hero">
        <div className="glue-page">
          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div ref={heroContentRef}>
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
                    {currentSlide.badge}
                  </span>
                </div>

                <h1 className="glue-headline glue-headline--headline-1">
                  {currentSlide.title}
                </h1>

                <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body-large, 1.15em)", lineHeight: 1.7, marginBottom: 18 }}>
                  {currentSlide.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
                  <Link
                    to={currentSlide.btnLink}
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>{currentSlide.btnText}</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                  <div className="hero-tape-accent" style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
                    <StripeTape83 fill="#f9a144" />
                  </div>
                </div>
              </div>

              <div className="qd-hero-slider-controls">
                <button
                  type="button"
                  className="qd-hero-slider-arrow-btn"
                  aria-label="Previous Slide"
                  onClick={() =>
                    goToSlide((activeSlide - 1 + heroSlides.length) % heroSlides.length)
                  }
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                    chevron_left
                  </span>
                </button>

                <div className="qd-hero-slider-dots">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`qd-hero-slider-dot${idx === activeSlide ? " is-active" : ""}`}
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => goToSlide(idx)}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="qd-hero-slider-arrow-btn"
                  aria-label="Next Slide"
                  onClick={() => goToSlide((activeSlide + 1) % heroSlides.length)}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                    chevron_right
                  </span>
                </button>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="cloud-floating-photo-card" ref={heroMediaRef}>
                <div className="cloud-floating-photo-tape">
                  <StripeTape83 fill="#f9a144" />
                </div>
                <img
                  src={currentSlide.image}
                  alt={`Quinn Daisies Technology — ${currentSlide.title}`}
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
                  <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", color: "#2b1600" }}>
                    <strong>{currentSlide.tag}</strong>
                  </span>
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
                    {currentSlide.statBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-google-benefits-container">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
            <h2 className="glue-headline glue-headline--headline-2">
              Strategic engineering support from{" "}
              <span className="decorated-text underline">MVP</span> to Enterprise Scale
            </h2>
            <p className="glue-body--large">
              Whether you are launching a greenfield prototype or modernizing distributed enterprise workloads, Quinn
              Daisies provides end-to-end architecture, Cloud DevOps, and market visibility.
            </p>
          </div>

          <div className="glue-grid cloud-benefit-row">
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
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
                  layers
                </span>
              </div>

              <h2 className="glue-headline glue-headline--headline-4">
                Phase 1: Architect &amp; Build your Prototype (Rapid SDLC)
              </h2>

              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-nav, 0.95em)", lineHeight: 1.7, marginBottom: 18 }}>
                Accelerate from initial product discovery and system architecture to a production-hardened MVP across Web,
                Mobile, and Desktop without accumulating technical debt. Our agile prototype sprints deliver responsive
                React web applications alongside native Android in Kotlin and high-performance desktop software in Python
                (Kivy and Flet) or C# .NET, powered by modular REST and GraphQL APIs engineered with ASP.NET Core, FastAPI,
                and Java Spring Boot.
              </p>

              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-nav, 0.95em)", lineHeight: 1.7, marginBottom: 28 }}>
                Every codebase is fortified from Day 1 with containerized Docker workflows, automated test coverage, and
                Terraform infrastructure-as-code for zero-downtime deployment. Built-in Core Web Vitals optimization,
                server-side rendering, and rich JSON-LD schema ensure instant search visibility and Generative Engine
                Optimization (GEO)—tailored for product teams, logistics operators, and commercial ventures launching
                mission-critical digital products.
              </p>

              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Start Prototype Sprint</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="cloud-floating-photo-card">
                <div className="cloud-floating-photo-tape">
                  <StripeTape91 fill="#f9a144" />
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_uyacyjuyacyjuyac.jpg?alt=media&token=28099705-d49d-4974-a66a-87c3b04f9752"
                  alt="Rapid Prototype and MVP Engineering at Quinn Daisies"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phase 2 (Paragraph Structure) */}
          <div className="glue-grid cloud-benefit-row" style={{ marginTop: 64 }}>
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="cloud-floating-photo-card">
                <div className="cloud-floating-photo-tape">
                  <StripeTape91 fill="#f9a144" />
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b"
                  alt="Enterprise Cloud DevOps and Distributed Systems Scaling"
                />
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "#f9a144",
                  color: "#2b1600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  boxShadow: "0 4px 12px rgba(249, 161, 68, 0.25)",
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#2b1600" }}>
                  rocket_launch
                </span>
              </div>

              <h2 className="glue-headline glue-headline--headline-4">
                Phase 2: Grow, Automate &amp; Scale Globally
              </h2>

              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-nav, 0.95em)", lineHeight: 1.7, marginBottom: 18 }}>
                Scale mission-critical enterprise workloads with high-availability multi-cloud DevOps, distributed
                microservices, and fault-tolerant architecture capable of processing millions of concurrent transactions
                with zero downtime. Our principal engineers modernize monolithic backends into decoupled .NET Core, Java
                Spring Boot, and Python microservices orchestrated over Kubernetes clusters, Kafka event streams, and
                optimized cloud environments across Google Cloud Platform, AWS, and Microsoft Azure.
              </p>

              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-nav, 0.95em)", lineHeight: 1.7, marginBottom: 28 }}>
                Simultaneously, we embed cognitive AI copilots, retrieval-augmented generation (RAG) knowledge stores, and
                automated computer vision directly into your ERP and supply chain networks. Field operators and headquarters
                teams remain synchronized through high-performance cross-platform interfaces, while advanced technical SEO
                and algorithmic search dominance compound commercial growth for high-volume enterprises, logistics
                operators, and financial institutions.
              </p>

              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Scale Your Infrastructure</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-nextstep-section">
        <div className="glue-page">
          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <h2 className="glue-headline glue-headline--headline-4">Take the next step</h2>
              <p className="glue-body--large" style={{ marginBottom: 18 }}>
                Partnering with Quinn Daisies Technology provides an immediate engineering force multiplier governed by
                rigorous C4 architecture modeling, continuous QA automation, and strict DevSecOps release pipelines. We
                bring polyglot mastery across .NET Core, ASP.NET, C#, Python, React, Kotlin, and Java Spring Boot to
                deliver sub-second latency, robust enterprise security, and maintainable software across cloud, edge, and
                air-gapped environments.
              </p>

              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body-large, 1.15em)", lineHeight: 1.7, marginBottom: 28 }}>
                To begin onboarding, your team schedules a Technical Discovery and Codebase Audit with our Principal
                Architects to assess current infrastructure, data flows, and performance bottlenecks. Within 10 business
                days, you receive a tailored SDLC, Cloud DevOps, and Digital Visibility Blueprint complete with precise
                milestone deliverables, architectural diagrams, and SLA-backed guarantees.
              </p>

              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Book Technical Discovery</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
            </div>

            {/* Right Column: Animated Vertical Striped Tape (Top to Bottom Oscillation) */}
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div style={{ position: "relative", padding: "20px 28px" }}>
                <div style={{ position: "absolute", top: 10, right: 0, zIndex: 4 }}>
                  <StripeTapeVertical26 fill="#f9a144" />
                </div>
                <div className="cloud-floating-photo-card">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf"
                    alt="Quinn Daisies Enterprise Architecture and DevOps Team"
                  />
                  <div
                    style={{
                      marginTop: 14,
                      background: "#2b1600",
                      color: "#ffffff",
                      borderRadius: 12,
                      padding: "16px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 10,
                    }}
                  >
                    <span style={{ fontSize: "var(--qd-font-size-nav, 0.95em)", fontWeight: 500 }}>
                      Enterprise Architecture Assessment
                    </span>
                    <span
                      style={{
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        background: "#f9a144",
                        color: "#2b1600",
                        padding: "4px 12px",
                        borderRadius: 999,
                        fontWeight: 500,
                      }}
                    >
                      Complimentary 45-Min Audit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cloud-why-build--grey">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
            <h2 className="glue-headline glue-headline--headline-2">
              Why build your enterprise on{" "}
              <span className="decorated-text underline">Quinn Daisies Cloud?</span>
            </h2>
            <p className="glue-body--large">
              <strong>
                Open, polyglot, and engineered for speed: we combine enterprise backend rigor with modern AI,
                cross-platform UI, and growth visibility.
              </strong>
            </p>
          </div>

          <div className="glue-grid-container">
            <div className="glue-grid__col glue-grid__col--span-6">
              <div className="cloud-why-card">
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "#2b1600",
                    color: "#f9a144",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#f9a144" }}>
                    psychology
                  </span>
                </div>
                <h3 className="glue-headline glue-headline--headline-6">Innovate with cutting-edge AI</h3>
                <p style={{ color: "#3b3b3b", margin: 0 }}>
                  Integrate Python AI pipelines, LLM function-calling agents, RAG vector search, and predictive
                  telemetry into your existing <strong>.NET Core</strong>, <strong>Java</strong>, and{" "}
                  <strong>React</strong> applications.
                </p>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6">
              <div className="cloud-why-card">
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "#fff3e3",
                    color: "#2b1600",
                    border: "1px solid rgba(249, 161, 68, 0.45)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#2b1600" }}>
                    view_quilt
                  </span>
                </div>
                <h3 className="glue-headline glue-headline--headline-6">Build a full-stack polyglot platform</h3>
                <p style={{ color: "#3b3b3b", margin: 0 }}>
                  From <strong>ASP.NET / C#</strong> and <strong>Java</strong> microservices to{" "}
                  <strong>Python Kivy &amp; Flet</strong> desktop/mobile apps, <strong>Kotlin</strong> Android fleets,
                  and <strong>React</strong> web portals—all unified under one architecture.
                </p>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6">
              <div className="cloud-why-card">
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "#fff3e3",
                    color: "#2b1600",
                    border: "1px solid rgba(249, 161, 68, 0.45)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#2b1600" }}>
                    terminal
                  </span>
                </div>
                <h3 className="glue-headline glue-headline--headline-6">Freedom to develop your way</h3>
                <p style={{ color: "#3b3b3b", margin: 0 }}>
                  Zero vendor lock-in. We engineer portable Docker &amp; Kubernetes workloads, open-source database
                  clusters (PostgreSQL, Redis, SQL Server), and clean hexagonal architectures.
                </p>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6">
              <div className="cloud-why-card">
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    background: "#2b1600",
                    color: "#f9a144",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 24, color: "#f9a144" }}>
                    bolt
                  </span>
                </div>
                <h3 className="glue-headline glue-headline--headline-6">Ship faster with automated DevOps</h3>
                <p style={{ color: "#3b3b3b", margin: 0 }}>
                  Automated CI/CD pipelines, blue/green deployments, infrastructure-as-code, and continuous security
                  scanning cut release cycles from weeks to minutes.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }} className="reveal__bottom">
            <Link
              to="/software-development-and-engineering"
              className="ApplicationButton glue-button glue-button--high-emphasis"
            >
              <span>Explore Our Engineering Stack</span>
              <span className="material-symbols-outlined">memory</span>
            </Link>
          </div>
        </div>
      </section>

      <QuinnOperationalFramework />

      <section style={{ padding: "84px 0", background: "#ffffff" }}>
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <h3 className="glue-headline glue-headline--headline-3 reveal__top">
              Production Codebases &amp; Platforms Engineered by Quinn Daisies
            </h3>
            <p style={{ color: "#3b3b3b" }} className="reveal__bottom">
              Every solution is built with clean architecture, strict type safety, automated testing, and enterprise
              observability across our core languages and frameworks:
            </p>
          </div>

          <div className="bsp-logo-showcase-grid reveal__bottom__interval">
            {stackShowcase.map((item) => (
              <div key={item.name} className="bsp-logo-tile">
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    borderRadius: 999,
                    background: item.bg,
                    color: item.fg,
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </span>
                <strong style={{ color: "#2b1600", fontSize: "var(--qd-font-size-nav, 0.95em)" }}>{item.role}</strong>
                <span style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-caption, 0.85em)" }}>{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="launchpad-faq" style={{ background: "#ffffff", padding: "88px 0", borderTop: "1px solid #e6ddd3" }}>
        <div className="glue-page">
          <div style={{ maxWidth: 700, margin: "0 auto 48px", textAlign: "center" }}>
            <span className="glue-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="glue-headline glue-headline--headline-2">
              Program &amp; Architecture Specifications
            </h2>
            <p className="glue-body--large">
              Everything you need to know about our SDLC governance, supported runtime environments, generative search optimization, and enterprise onboarding.
            </p>
          </div>

          <div style={{ margin: "0 auto" }}>
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="devsite-expandable"
                  style={{
                    border: "1px solid #e6ddd3",
                    borderRadius: 14,
                    marginBottom: 16,
                    background: isOpen ? "#fff7ef" : "#ffffff",
                    transition: "all 0.25s ease",
                    overflow: "hidden",
                  }}
                >
                  <button
                    type="button"
                    className="devsite-expandable-header"
                    style={{
                      width: "100%",
                      padding: "20px 24px",
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
                        paddingRight: 16,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 20,
                        color: "#f9a144",
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
                        padding: "0 24px 22px",
                        fontSize: "1em",
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
                              memory
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
    </div>
  );
};

export default TechnologyVisibility;
