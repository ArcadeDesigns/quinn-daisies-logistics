import React, { useRef, useEffect } from "react";
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
  QuoteMarkPinkSvg,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const ApplicationDevelopmentPage = () => {
  const containerRef = useRef(null);
  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);

  const appShowcase = [
    {
      name: "ASP.NET Core & C#",
      role: "Enterprise Web APIs & Blazor",
      detail: "High-concurrency C# 12 Web APIs, gRPC services, SignalR real-time hubs, and Blazor enterprise portals.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_3kz8z63kz8z63kz8.jpg?alt=media&token=1e0442c2-4145-4878-b6e9-6d9924b2292f",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: "React & TypeScript",
      role: "Frontend SPAs & SSR Portals",
      detail: "Sub-second React 19 interfaces, Vite/Next.js SSR, design systems, and WCAG 2.1 AA / Section 508 UI.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_eu7e1ueu7e1ueu7e.jpg?alt=media&token=d84e2b97-7bef-43fd-a906-4e75d078d2f6",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Python FastAPI & Django",
      role: "Data-Intensive & AI Backends",
      detail: "Async Python REST/GraphQL APIs, Celery task queues, and native LLM/RAG pipeline integration.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_c4bf6ac4bf6ac4bf.jpg?alt=media&token=8ae19566-5ea0-4cde-892b-268cd74f7b34",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Java Spring Boot",
      role: "Distributed JVM Microservices",
      detail: "Event-driven Apache Kafka architectures, Spring Cloud, and high-throughput transactional engines.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_xt8oc7xt8oc7xt8o.jpg?alt=media&token=a3ad9571-28da-45e2-8687-0788d46ab4c9",
      bg: "#f5efe8",
      fg: "#1e1e1e",
    },
    {
      name: "Multi-Tenant SaaS",
      role: "B2B & Enterprise Platforms",
      detail: "Row-level tenant isolation, Stripe/ACH billing engines, RBAC/ABAC permissions, and audit trails.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_tfsqgntfsqgntfsq.jpg?alt=media&token=9c3f23fa-2fe0-4638-b32c-75082938fc13",
      bg: "#2b1600",
      fg: "#ffffff",
    },
    {
      name: "Legacy Modernization",
      role: "Strangler-Fig Cloud Migration",
      detail: "Zero-downtime refactoring of legacy .NET Framework, Java EE, and monolithic databases to microservices.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Python Flet & Kivy",
      role: "Cross-Platform App Suites",
      detail: "Unified web, desktop, and tablet operational cockpits powered by Python Flet (Flutter) and Kivy.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_kcr277kcr277kcr2.jpg?alt=media&token=f80bf418-149d-4fef-be94-f15d8b184001",
      bg: "#f5efe8",
      fg: "#2b1600",
    },
    {
      name: "API & EDI Gateways",
      role: "B2B & GovCon Interoperability",
      detail: "REST, GraphQL, gRPC, Webhooks, and X12/EDIFACT EDI gateways for ERP, customs, and finance.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qm0m9pqm0m9pqm0m.jpg?alt=media&token=90f307df-7175-49df-95fd-ca3507a505bc",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Automated QA & CI/CD",
      role: "Playwright, xUnit & Pytest",
      detail: "End-to-end automated testing, blue/green deployments, and OpenTelemetry observability.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_nobtlnnobtlnnobt.jpg?alt=media&token=8e73ab8b-fcf2-44f1-8a59-fdfc896f0665",
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
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      // 2. Section 2 Reveal (Two-Phase Model)
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

      // 3. Carousel Pinned Scrubbing (min-width 769px)
      const section = carouselSectionRef.current;
      const strip = carouselStripRef.current;
      if (section && strip) {
        ScrollTrigger.matchMedia({
          "(min-width: 769px)": function () {
            const getScrollAmount = () => -(strip.scrollWidth - window.innerWidth + 80);

            const tween = gsap.to(strip, {
              x: getScrollAmount,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                pin: true,
                pinSpacing: true,
                start: "top top",
                end: () => `+=${Math.max(strip.scrollWidth - window.innerWidth + 80, 800)}`,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
              },
            });

            return () => {
              if (tween.scrollTrigger) tween.scrollTrigger.kill();
              tween.kill();
            };
          },
        });
      }

      gsap.fromTo(
        "#app-carousel-animation .reveal__left",
        { x: -36, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#app-carousel-animation",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#app-carousel-animation .reveal__right",
        { x: 36, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#app-carousel-animation",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#app-carousel-animation .AdvanceDesignStructureSlideBox",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#app-carousel-animation",
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
        title="Enterprise Application Development (.NET Core, C#, Python, React, Java) | Quinn Daisies"
        description="Full-lifecycle Enterprise Application Development by Quinn Daisies Technology: Cloud-native web applications, multi-tenant SaaS, microservices, and legacy modernization across .NET Core, C#, Python, React, and Java."
        keywords="application development, enterprise web application development, multi-tenant SaaS engineering, ASP.NET Core C# web app, React TypeScript frontend, Python FastAPI Django, Java Spring Boot"
        canonicalUrl="/application-development"
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
            QUINN DAISIES APPLICATION DEVELOPMENT • WEB, SAAS, API &amp; CLOUD-NATIVE PLATFORMS
          </span>
          <StripeTape210 />
        </div>
      </div>

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
                    WEB • MULTI-TENANT SAAS • MICROSERVICES • LEGACY MODERNIZATION
                  </span>
                </div>

                <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
                  Custom application development{" "}
                  <span className="decorated-text underline">engineered for scale</span>
                </h1>

                <p
                  style={{
                    color: "#3b3b3b",
                    fontSize: "var(--qd-font-size-body-large, 1.15em)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  We design, build, and operate mission-critical web applications, B2B/enterprise portals, and
                  high-throughput APIs using <strong>ASP.NET Core, C#, Python, React, JavaScript/TypeScript, Java Spring Boot,
                    Flet, and Kivy</strong>.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Start Your Application Project</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                  <div style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
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
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_143o86143o86143o.jpg?alt=media&token=66947c0a-3ab5-413b-9a1d-f1dec9f6875f"
                  alt="Quinn Daisies Enterprise Application Development Team"
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
                    <strong>Full-Stack Application Delivery: ASP.NET Core • React 19 • Python • Java</strong>
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
                    99.99% Uptime SLA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CREAM BENEFITS CONTAINER */}
      <section id="app-lifecycle" className="cloud-google-benefits-container">
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
              TWO-PHASE APPLICATION ENGINEERING MODEL
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              From product discovery to{" "}
              <span className="decorated-text underline">multi-region production</span>
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
              Whether launching an agile MVP or modernizing high-throughput enterprise systems, Quinn Daisies delivers resilient architectures, automated DevSecOps, and seamless user experiences.
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
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_uyacyjuyacyjuyac.jpg?alt=media&token=28099705-d49d-4974-a66a-87c3b04f9752"
                    alt="Frontend and Backend Application Architecture"
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
                    layers
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
                  STAGE 01 • ARCHITECTURE, UI/UX &amp; CORE DEVELOPMENT
                </span>
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 18 }}>
                  Clean Hexagonal Backend &amp; Sub-Second Frontend Portals
                </h3>
                <ul className="cloud-standards-list">
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Responsive React &amp; TypeScript Web Applications:</strong> Component-driven design
                      systems, Server-Side Rendering (SSR), real-time WebSockets/SignalR, and Section 508 accessibility.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Polyglot Microservices &amp; APIs:</strong> High-performance backends engineered in{" "}
                      <strong>ASP.NET Core (C#), Python (FastAPI/Django), and Java (Spring Boot)</strong> with OpenAPI
                      3.1 and gRPC contracts.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Multi-Tenant SaaS &amp; Data Persistence:</strong> PostgreSQL, SQL Server, Redis, and
                      Kafka event streams with strict tenant isolation and encrypted audit trails.
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Engage Architecture Sprint</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

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
                    rocket_launch
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
                  STAGE 02 • LEGACY MODERNIZATION, QA &amp; CLOUD SCALE
                </span>
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 18 }}>
                  Zero-Downtime Modernization &amp; Automated DevSecOps
                </h3>
                <ul className="cloud-standards-list">
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Strangler-Fig Legacy Refactoring:</strong> Incrementally replace aging monoliths, VB/.NET
                      Framework apps, and slow databases without disrupting daily business operations.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Automated Testing &amp; Security Gates:</strong> Playwright E2E browser suites, xUnit/Pytest
                      unit coverage, SAST/DAST scanning, and OWASP Top 10 hardening.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Multi-Platform Extension:</strong> Seamlessly extend your web application to{" "}
                      <Link to="/mobile-application-development" style={{ color: "#2b1600", fontWeight: 500 }}>
                        Mobile (Kotlin / .NET MAUI)
                      </Link>{" "}
                      and{" "}
                      <Link to="/desktop-application-development" style={{ color: "#2b1600", fontWeight: 500 }}>
                        Desktop (C# WPF / Python Kivy &amp; Flet)
                      </Link>.
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Modernize Your Enterprise App</span>
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
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_tfsqgntfsqgntfsq.jpg?alt=media&token=9c3f23fa-2fe0-4638-b32c-75082938fc13"
                    alt="Enterprise SaaS Telemetry and Cloud Scaling"
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

      {/* SECTION 3: PINNED HORIZONTAL APPLICATION MATRIX CAROUSEL */}
      <section
        className="Dark-Background"
        id="app-carousel-animation"
        ref={carouselSectionRef}
      >
        <div className="ApplicationCarouselRefurblished">
          <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
            <h2 className="reveal__left">
              Built with the Industry&apos;s Most Reliable Codebases
            </h2>

            <div className="ApplicationCarouselContainer reveal__right">
              <p className="ApplicationCarouselContainerText">
                Explore our full-stack application engineering matrix—architecting responsive React interfaces, high-concurrency ASP.NET Core &amp; Python microservices, and enterprise multi-tenant cloud platforms.
              </p>
            </div>
          </div>

          <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
            <div
              className="ApplicationCarouselSlide"
              ref={carouselStripRef}
            >
              {appShowcase.map((item) => (
                <div className="AdvanceDesignStructureSlideBox" key={item.name}>
                  <div className="AdvanceDesignStructureSlideBoxImage">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="AdvanceDesignStructureSlideBoxContent">
                    <span className="AdvanceDesignStructureEyebrow">
                      {item.name}
                    </span>
                    <h2 className="AdvanceDesignStructureSlideBoxContent_h2">{item.role}</h2>
                    <p>{item.detail}</p>
                    <Link
                      to="/technology-contact-us"
                      className="ApplicationButton glue-button glue-button--high-emphasis AdvanceDesignStructureCTA"
                    >
                      <span>Deploy this stack</span>
                      <span className="material-symbols-outlined">memory</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
                &ldquo;Modern enterprise application engineering requires more than writing code—it demands deliberate architecture, strict type safety, frictionless UX, and zero-downtime scalability from day one.&rdquo;
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
                PRINCIPAL APPLICATION ENGINEERING DIRECTOR
              </span>
              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", margin: 0 }}>
                Quinn Daisies Technology &amp; Enterprise Application Division
              </p>
            </div>

            <div className="glue-grid__col glue-grid__col--span-5 glue-grid__col--align-middle">
              <div style={{ position: "relative" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dx17ymdx17ymdx17.jpg?alt=media&token=1c8866e0-cb51-4d54-bb2a-fb0940c936e5"
                  alt="Quinn Daisies Enterprise Application Leadership"
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

export default ApplicationDevelopmentPage;
