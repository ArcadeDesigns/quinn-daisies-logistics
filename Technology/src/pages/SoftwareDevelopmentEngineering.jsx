import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  QuinnDevsiteHeader,
  QuinnTechFooter,
  StripeTape210,
  StripeTape83,
  StripeTape79,
  StripeTapeVertical26,
  StripeTapeGrey320,
  QuoteMarkPinkSvg,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const SoftwareDevelopmentEngineering = () => {
  const containerRef = useRef(null);
  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timeline
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .fromTo(
          ".accelerator-hero-center > *",
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.1 }
        )
        .fromTo(
          ".floating-media-card--top",
          { y: 36, x: -24, opacity: 0 },
          { y: 0, x: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".floating-media-card--bottom",
          { y: 44, x: 24, opacity: 0 },
          { y: 0, x: 0, opacity: 1, duration: 0.8 },
          "-=0.7"
        )
        .add(() => {
          // Floating breathing motion after entrance
          gsap.to(".floating-media-card--top", {
            y: -10,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(".floating-media-card--bottom", {
            y: -8,
            duration: 3.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.4,
          });
        });

      // 2. Section 2: About Dark Section Scroll Reveal + Parallax
      gsap.fromTo(
        ".accelerator-about--dark .glue-grid__col:last-child > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".accelerator-about--dark",
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".accelerator-about--dark .overlapping-photo-primary",
        { y: 24 },
        {
          y: -24,
          ease: "none",
          scrollTrigger: {
            trigger: ".accelerator-about--dark",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        ".accelerator-about--dark .overlapping-photo-secondary",
        { y: 36 },
        {
          y: -16,
          ease: "none",
          scrollTrigger: {
            trigger: ".accelerator-about--dark",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.4,
          },
        }
      );

      // 3. Section 3: Key Benefits Stagger Scroll Reveal
      gsap.fromTo(
        ".accelerator-benefits-section .benefit-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".accelerator-benefits-section",
            start: "top 75%",
          },
        }
      );

      // 4. Section 4: SDLC Delivery Standards Stagger Scroll Reveal
      gsap.fromTo(
        ".accelerator-about--light .criteria-list-item",
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".accelerator-about--light",
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".accelerator-about--light .overlapping-photo-primary",
        { y: 20 },
        {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".accelerator-about--light",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        ".accelerator-about--light .overlapping-photo-secondary",
        { y: 32 },
        {
          y: -14,
          ease: "none",
          scrollTrigger: {
            trigger: ".accelerator-about--light",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.4,
          },
        }
      );

      // 5. Section 5: Pinned Horizontal Scroll Carousel (Logistics design structure)
      const section = carouselSectionRef.current;
      const strip = carouselStripRef.current;
      if (section && strip) {
        ScrollTrigger.matchMedia({
          // Desktop: Pin and scrub horizontally
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
        "#CarouselAnimation .reveal__left",
        { x: -36, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#CarouselAnimation",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#CarouselAnimation .reveal__right",
        { x: 36, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#CarouselAnimation",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#CarouselAnimation .AdvanceDesignStructureSlideBox",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#CarouselAnimation",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".accelerator-home-quote .glue-grid__col",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".accelerator-home-quote",
            start: "top 80%",
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

  const keyBenefits = [
    {
      title: "End-to-End Full SDLC Governance",
      desc: "Complete lifecycle execution from PRD discovery, C4 system architecture, and UI/UX wireframing to agile sprints, automated QA, and zero-downtime production releases.",
      icon: (
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--qd-espresso)" }}>
          layers
        </span>
      ),
    },
    {
      title: "Enterprise .NET Core, ASP.NET & C#",
      desc: "High-concurrency ASP.NET Core Web APIs, gRPC microservices, Blazor portals, Entity Framework Core data layers, and mission-critical C# enterprise backends.",
      icon: (
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--qd-espresso)" }}>
          terminal
        </span>
      ),
    },
    {
      title: "Python, Kivy & Flet Ecosystems",
      desc: "FastAPI and Django backends paired with hardware-accelerated Kivy touch applications and Flutter-powered Flet multi-platform Desktop, Web, and Mobile apps.",
      icon: (
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--qd-espresso)" }}>
          code
        </span>
      ),
    },
    {
      title: "React, JavaScript & Modern Frontend",
      desc: "Pixel-perfect, accessible, sub-second React and TypeScript web applications, real-time telemetry dashboards, and progressive web apps (PWAs).",
      icon: (
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--qd-espresso)" }}>
          web
        </span>
      ),
    },
    {
      title: "Java & Kotlin Enterprise & Mobile",
      desc: "Resilient Java Spring Boot distributed microservices, Kafka event streaming, and native Kotlin Android & Kotlin Multiplatform mobile fleets.",
      icon: (
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--qd-espresso)" }}>
          smartphone
        </span>
      ),
    },
    {
      title: "Cross-Platform Desktop Applications",
      desc: "Native-speed Windows, macOS, and Linux desktop applications engineered using C# (WPF, WinUI 3, .NET MAUI) and Python (Kivy, Flet, PyQt) with offline sync.",
      icon: (
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--qd-espresso)" }}>
          desktop_windows
        </span>
      ),
    },
    {
      title: "Cloud DevOps, CI/CD & SRE Automation",
      desc: "Automated GitHub Actions/GitLab pipelines, Docker & Kubernetes orchestration, Terraform IaC, and 24/7 OpenTelemetry observability across AWS, Azure, and GCP.",
      icon: (
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--qd-espresso)" }}>
          cloud_sync
        </span>
      ),
    },
    {
      title: "AI Engineering & Workflow Automation",
      desc: "Autonomous LLM agents, Retrieval-Augmented Generation (RAG), computer vision, and intelligent RPA bots integrated directly into your core software stack.",
      icon: (
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: "var(--qd-espresso)" }}>
          bolt
        </span>
      ),
    },
  ];

  const engineeringTracks = [
    {
      eyebrow: ".NET CORE • ASP.NET • C#",
      title: "Enterprise .NET Core & C# Distributed Systems Track",
      desc: "Architect high-throughput ASP.NET Core Web APIs, gRPC microservices, SignalR real-time hubs, and SQL Server/PostgreSQL transactional engines.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_3kz8z63kz8z63kz8.jpg?alt=media&token=1e0442c2-4145-4878-b6e9-6d9924b2292f",
    },
    {
      eyebrow: "PYTHON • FASTAPI • DJANGO • AI",
      title: "Python Backend, Data Engineering & AI Automation Track",
      desc: "Build asynchronous FastAPI/Django services, ETL pipelines, celery workers, and production LLM/RAG automation workflows.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_c4bf6ac4bf6ac4bf.jpg?alt=media&token=8ae19566-5ea0-4cde-892b-268cd74f7b34",
    },
    {
      eyebrow: "REACT • JAVASCRIPT • TYPESCRIPT",
      title: "Modern Frontend & Web Application Engineering Track",
      desc: "Deliver sub-second React SPAs, SSR portals, micro-frontends, and interactive enterprise command centers with strict accessibility.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_eu7e1ueu7e1ueu7e.jpg?alt=media&token=d84e2b97-7bef-43fd-a906-4e75d078d2f6",
    },
    {
      eyebrow: "KOTLIN • ANDROID • KMP",
      title: "Kotlin Native Mobile & Multiplatform Fleet Track",
      desc: "Engineer offline-first Android applications with Jetpack Compose, barcode/NFC hardware telemetry, and shared Kotlin Multiplatform logic.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_kqqzovkqqzovkqqz.jpg?alt=media&token=606e9964-5814-42ee-bbdd-551aab19b798",
    },
    {
      eyebrow: "KIVY • FLET • C# WPF & MAUI",
      title: "Cross-Platform Desktop & Touch Application Track",
      desc: "Develop GPU-accelerated Python Kivy & Flet apps alongside C# WPF, WinUI 3, and .NET MAUI desktop suites for Windows, macOS, and Linux.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_kcr277kcr277kcr2.jpg?alt=media&token=f80bf418-149d-4fef-be94-f15d8b184001",
    },
    {
      eyebrow: "JAVA • SPRING BOOT • KAFKA",
      title: "Java Enterprise Backend & Event-Driven Architecture Track",
      desc: "Power mission-critical banking, logistics, and ERP systems with Java 21, Spring Boot 3, Apache Kafka, and resilient distributed caching.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_xt8oc7xt8oc7xt8o.jpg?alt=media&token=a3ad9571-28da-45e2-8687-0788d46ab4c9",
    },
    {
      eyebrow: "CLOUD DEVOPS • KUBERNETES • TERRAFORM",
      title: "Cloud Infrastructure, CI/CD & SRE Automation Track",
      desc: "Automate multi-cloud provisioning, Kubernetes container orchestration, zero-trust secrets management, and 24/7 telemetry.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_f5iiy2f5iiy2f5ii.jpg?alt=media&token=2105750f-ab38-430c-8d27-ac18d4bdb19a",
    },
    {
      eyebrow: "API GATEWAYS • ERP & LEGACY MIGRATION",
      title: "Legacy Modernization & Systems Integration Track",
      desc: "Strangle legacy monoliths into clean microservices, unify disparate ERPs, and expose secure REST, GraphQL, and Webhook ecosystems.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_gerrjagerrjagerr.jpg?alt=media&token=333fcf86-cb2d-4cbc-b41f-1f8a9cdfe56e",
    },
    {
      eyebrow: "AUTOMATED QA • DEVSECOPS • PEN-TESTING",
      title: "Quality Engineering, Load Testing & Security Track",
      desc: "Embed Playwright/Cypress E2E testing, xUnit/PyTest suites, OWASP SAST/DAST scanning, and high-concurrency load simulations.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_siy3whsiy3whsiy3.jpg?alt=media&token=964f1c07-b8eb-4930-acab-416bf8711930",
    },
  ];

  return (
    <div ref={containerRef} className="qd-google-page">
      <SEO
        title="Software Development & Engineering | Full SDLC, .NET Core, C#, Python, React, Java, Kotlin, Kivy & Flet"
        description="Quinn Daisies Software Development & Engineering Accelerator: Full SDLC delivery for Web, Mobile, Desktop, Cloud DevOps, and AI using .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet."
        keywords="Software Development and Engineering, Full SDLC, .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, Flet, Desktop Application, Web Application, Cloud DevOps"
        url="/software-development-and-engineering"
      />

      <div className="accelerator-top-bar" aria-hidden="true">
        <StripeTape210 fill="#2b1600" />
      </div>

      <section className="accelerator-hero-section">
        <div className="accelerator-hero-floating-grid">

          <div className="floating-media-card floating-media-card--top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qm0m9pqm0m9pqm0m.jpg?alt=media&token=90f307df-7175-49df-95fd-ca3507a505bc"
              alt="Quinn Daisies Full SDLC Architecture Squad"
            />
            <div className="floating-media-caption">
              <strong>Full-SDLC Squads</strong>
              .NET Core, C#, Python, Java &amp; React Principal Engineers
            </div>
          </div>

          <div className="accelerator-hero-center">
            <div style={{ marginBottom: 16 }}>
              <span
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "#fff3e3",
                  color: "#2b1600",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  border: "1px solid rgba(249, 161, 68, 0.45)",
                }}
              >
                QUINN DAISIES ENGINEERING ACCELERATOR
              </span>
            </div>

            <h1 className="glue-headline glue-headline--headline-1">
              Vision started by you.
              <br />
              <span className="decorated-text underline">Engineered</span> with Quinn Daisies.
            </h1>

            <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body-large, 1.15em)", lineHeight: 1.7, marginBottom: 28 }}>
              End-to-end Software Development &amp; Systems Engineering across the full SDLC—building mission-critical{" "}
              <strong>Web, Mobile, Desktop, Cloud DevOps, and AI Automation</strong> systems using{" "}
              <strong>.NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet</strong>.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <Link to="/contact" className="glue-button glue-button--high-emphasis">
                <span>Start Your Engineering Project</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
            </div>
          </div>

          <div className="floating-media-card floating-media-card--bottom">
            <div style={{ position: "absolute", top: -18, right: -10, zIndex: 4 }}>
              <StripeTapeVertical26 fill="#f9a144" />
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b"
              alt="Cross-Platform Desktop, Web and Mobile Delivery"
            />
            <div className="floating-media-caption">
              <strong>Multi-Platform Delivery</strong>
              Desktop (C# / Kivy / Flet), Web (React) &amp; Mobile (Kotlin)
            </div>
          </div>
        </div>
      </section>

      <section className="accelerator-about--dark">
        <div style={{ position: "absolute", top: 0, right: "10%", zIndex: 2 }}>
          <StripeTapeGrey320 fill="#6e4720" />
        </div>

        <div className="glue-page">
          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="overlapping-photos-wrapper">
                <div className="overlapping-photo-tape">
                  <StripeTape83 fill="#f9a144" />
                </div>
                <div className="overlapping-photo-primary">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_nobtlnnobtlnnobt.jpg?alt=media&token=8e73ab8b-fcf2-44f1-8a59-fdfc896f0665"
                    alt="System Architecture and Code Review"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div className="overlapping-photo-secondary">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ksm6tbksm6tbksm6.jpg?alt=media&token=0a33b5f6-7d28-4f52-bc3b-e42778a0984c"
                    alt="Cloud DevOps and Automated Testing"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 24 }}>
                <span className="decorated-text underline">About</span> our Full-SDLC Engineering Program
              </h2>

              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.7, marginBottom: 16, color: "rgba(255, 255, 255, 0.92)" }}>
                <strong>1. Complete Software Development Life Cycle (SDLC):</strong> We manage every engineering phase
                with military precision—Requirements Discovery, C4 Domain-Driven Design, UI/UX Prototyping, Agile
                Sprint Implementation, Automated Unit/Integration/E2E Testing, DevSecOps Hardening, and 24/7 SRE
                Observability.
              </p>

              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.7, marginBottom: 16, color: "rgba(255, 255, 255, 0.92)" }}>
                <strong>2. Enterprise Backend Engineering (.NET Core, ASP.NET, C#, Java, Python):</strong> We build
                fault-tolerant APIs, microservices, and transactional databases using <strong>.NET 8/9 &amp; C#</strong>,{" "}
                <strong>ASP.NET Core</strong>, <strong>Java Spring Boot</strong>, and{" "}
                <strong>Python (FastAPI &amp; Django)</strong>.
              </p>

              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.7, marginBottom: 16, color: "rgba(255, 255, 255, 0.92)" }}>
                <strong>3. Modern Web Applications (React &amp; JavaScript/TypeScript):</strong> Our frontend architects
                deliver ultra-responsive single-page applications (SPAs), server-side rendered portals, and real-time
                operational dashboards using <strong>React</strong> and modern <strong>JavaScript/TypeScript</strong>.
              </p>

              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.7, marginBottom: 16, color: "rgba(255, 255, 255, 0.92)" }}>
                <strong>4. Cross-Platform Desktop Applications (C#, Kivy &amp; Flet):</strong> Need native hardware
                access, industrial touch terminals, or offline-capable desktop workstations? We engineer rich desktop
                suites using <strong>C# (WPF, WinUI, .NET MAUI)</strong> and{" "}
                <strong>Python (Kivy &amp; Flet)</strong>.
              </p>

              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.7, marginBottom: 16, color: "rgba(255, 255, 255, 0.92)" }}>
                <strong>5. Native &amp; Multiplatform Mobile Apps (Kotlin, Kivy &amp; Flet):</strong> From consumer
                mobile experiences to rugged logistics &amp; barcode-scanning field apps, we build native Android fleets
                in <strong>Kotlin (Jetpack Compose)</strong> and cross-platform mobile apps in{" "}
                <strong>Flet &amp; Kivy</strong>.
              </p>

              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.7, marginBottom: 28, color: "rgba(255, 255, 255, 0.92)" }}>
                <strong>6. Cloud DevOps, AI &amp; Process Automation:</strong> Every codebase ships with automated CI/CD
                pipelines, Docker/Kubernetes orchestration, Terraform IaC, and embedded AI automation.
              </p>

              <Link
                to="/contact"
                className="glue-button glue-button--high-emphasis glue-button--reversed"
              >
                <span>Request Custom Architecture Blueprint</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "10%", marginTop: 48 }}>
          <StripeTape210 fill="#f9a144" />
        </div>
      </section>

      {/* SECTION 3: KEY BENEFITS 8-CARD GRID (accelerator-benefits exact replica) */}
      <section className="accelerator-benefits-section">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 56px" }}>
            <h2 className="glue-headline glue-headline--headline-2">
              <span className="decorated-text underline">Key</span> engineering capabilities
            </h2>
            <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body-large, 1.15em)", lineHeight: 1.7 }}>
              Quinn Daisies combines multi-language software craftsmanship with cloud-native automation so your systems
              scale effortlessly under real-world load.
            </p>
          </div>

          <div className="glue-grid">
            {keyBenefits.map((b) => (
              <div key={b.title} className="glue-grid__col glue-grid__col--span-4">
                <div className="benefit-card">
                  <div className="benefit-card-icon">{b.icon}</div>
                  <h3 className="glue-headline glue-headline--headline-6" style={{ marginBottom: 10 }}>
                    {b.title}
                  </h3>
                  <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-nav, 0.95em)", lineHeight: 1.62, margin: 0 }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: ENTRY CRITERIA / SDLC STANDARDS (accelerator-about--light exact replica) */}
      <section className="accelerator-about--light">
        <div className="glue-page">
          <div className="glue-grid">
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="overlapping-photos-wrapper">
                <div className="overlapping-photo-tape">
                  <StripeTape83 fill="#f9a144" />
                </div>
                <div className="overlapping-photo-primary">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_jgbc94jgbc94jgbc.jpg?alt=media&token=9aefa4d2-5dda-4fd3-b4e3-aecd9db13e0b"
                    alt="Quinn Daisies SDLC Quality Standards"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
                <div className="overlapping-photo-secondary">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_h42b7gh42b7gh42b.jpg?alt=media&token=389e827d-1b93-41ec-a97e-2a7167e794e5"
                    alt="Clean Polyglot Codebases"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <h2 className="glue-headline glue-headline--headline-2">
                <span className="decorated-text underline">SDLC</span> Delivery &amp; Engagement Standards
              </h2>
              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body-large, 1.15em)", lineHeight: 1.7, marginBottom: 24 }}>
                Whether we are building a brand-new product from scratch or taking over an existing enterprise codebase,
                every Quinn Daisies engagement adheres to five non-negotiable engineering pillars:
              </p>

              <ul className="criteria-list">
                <li className="criteria-list-item">
                  <span className="criteria-bullet" style={{ fontSize: "var(--qd-font-size-caption, 0.85em)" }}>1</span>
                  <div style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Clean, Modular &amp; Documented Architecture:</strong> Strict separation of concerns
                    (Clean/Hexagonal Architecture), OpenAPI/Swagger specs, and comprehensive README &amp; runbook
                    documentation.
                  </div>
                </li>
                <li className="criteria-list-item">
                  <span className="criteria-bullet" style={{ fontSize: "var(--qd-font-size-caption, 0.85em)" }}>2</span>
                  <div style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Automated Testing &amp; Continuous Integration:</strong> Every pull request is validated via
                    automated unit, integration, and end-to-end tests (xUnit, NUnit, PyTest, JUnit, Jest, Playwright).
                  </div>
                </li>
                <li className="criteria-list-item">
                  <span className="criteria-bullet" style={{ fontSize: "var(--qd-font-size-caption, 0.85em)" }}>3</span>
                  <div style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Security-by-Design (DevSecOps):</strong> OAuth2/OIDC identity, RBAC/ABAC permissions,
                    encrypted data-at-rest/in-transit, and OWASP Top 10 vulnerability scanning.
                  </div>
                </li>
                <li className="criteria-list-item">
                  <span className="criteria-bullet" style={{ fontSize: "var(--qd-font-size-caption, 0.85em)" }}>4</span>
                  <div style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Cross-Platform Parity (Web, Desktop, Mobile):</strong> Shared design tokens and unified API
                    contracts across React Web, Kotlin Android, C# Desktop, and Python Kivy/Flet clients.
                  </div>
                </li>
                <li className="criteria-list-item">
                  <span className="criteria-bullet" style={{ fontSize: "var(--qd-font-size-caption, 0.85em)" }}>5</span>
                  <div style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    <strong>Full IP Ownership &amp; Workforce Handover:</strong> 100% transparent Git repository access,
                    cloud infrastructure ownership, and hands-on training for your internal IT team.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PINNED HORIZONTAL CAROUSEL (PORTED FROM LOGISTICS / HOME.JSX) */}
      <section
        className="Dark-Background"
        id="CarouselAnimation"
        ref={carouselSectionRef}
      >
        <div id="engineering-tracks" style={{ position: "relative", top: -80, visibility: "hidden" }} />
        <div className="ApplicationCarouselRefurblished">
          <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
            <h2 className="reveal__left">
              Find an Engineering Track in Your Codebase
            </h2>

            <div className="ApplicationCarouselContainer reveal__right">
              <p className="ApplicationCarouselContainerText">
                Select a specialized Quinn Daisies engineering track below—from .NET Core and C# enterprise systems to Python AI, Kivy/Flet desktop apps, React web portals, and Kotlin mobile fleets.
              </p>
            </div>
          </div>

          <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
            <div
              className="ApplicationCarouselSlide"
              ref={carouselStripRef}
            >
              {engineeringTracks.map((track) => (
                <div className="AdvanceDesignStructureSlideBox" key={track.title}>
                  <div className="AdvanceDesignStructureSlideBoxImage">
                    <img
                      src={track.image}
                      alt={track.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="AdvanceDesignStructureSlideBoxContent">
                    <span className="AdvanceDesignStructureEyebrow">
                      {track.eyebrow}
                    </span>
                    <h2 className="AdvanceDesignStructureSlideBoxContent_h2">{track.title}</h2>
                    <p>{track.desc}</p>
                    <Link
                      to="/contact"
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

      {/* SECTION 6: WARM CREAM QUOTE SECTION (accelerator-home-quote exact replica) */}
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
                &ldquo;Great software engineering is never confined to a single language—it is the seamless
                orchestration of .NET Core &amp; Java resilience, Python AI intelligence, React web speed, and
                Kotlin/Kivy/Flet device experiences under one disciplined SDLC.&rdquo;
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
                PRINCIPAL SYSTEMS ARCHITECTURE DIRECTOR
              </span>
              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", margin: 0 }}>
                Quinn Daisies Technology &amp; Enterprise Engineering Division
              </p>
            </div>

            <div className="glue-grid__col glue-grid__col--span-5 glue-grid__col--align-middle">
              <div style={{ position: "relative" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dx17ymdx17ymdx17.jpg?alt=media&token=1c8866e0-cb51-4d54-bb2a-fb0940c936e5"
                  alt="Quinn Daisies Engineering Leadership"
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

export default SoftwareDevelopmentEngineering;
