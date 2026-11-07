import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
  StripeTapeVertical26,
  QuoteMarkPinkSvg,
  QuinnProductModal,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const AiApplicationDevelopment = () => {
  const containerRef = useRef(null);
  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [activeKitIndex, setActiveKitIndex] = useState(0);
  const [kitViewIndex, setKitViewIndex] = useState(0);

  const ITEMS_PER_VIEW = 3;

  const aiTracks = [
    {
      name: "Autonomous AI & RAG",
      role: "Python FastAPI & LangGraph RAG",
      detail: "Deploy tool-calling LLM agents, Retrieval-Augmented Generation (RAG) over private enterprise documents, and vector search with pgvector/Qdrant.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: "Microsoft .NET AI Core",
      role: "C# Semantic Kernel & ASP.NET",
      detail: "Embed enterprise AI plugins, C# type-safe prompt orchestration, native function calling, and background worker queues into ASP.NET Core.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Cross-Platform Desktop AI",
      role: "Python Kivy & Flet Cockpits",
      detail: "GPU-accelerated OpenGL touch interfaces and Flutter-powered Python desktop cockpits with embedded local ONNX neural nets.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_vqyaewvqyaewvqya.jpg?alt=media&token=9f82c276-ae95-4e6b-9964-3c7b324fa358",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Native Mobile Engineering",
      role: "Kotlin Compose & On-Device ML",
      detail: "Deliver consumer-grade and rugged enterprise mobile apps in native Kotlin (Jetpack Compose) with offline Room sync and on-device vision.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ppcb8nppcb8nppcb.jpg?alt=media&token=559a6c92-8f13-49a7-a190-a8250d8b66d2",
      bg: "#f5efe8",
      fg: "#1e1e1e",
    },
    {
      name: "Modern Web Applications",
      role: "React 19 & Generative UI",
      detail: "Enterprise-grade React frontends with streaming AI responses, Server-Side Rendering (SSR), TanStack query caching, and Section 508 accessibility.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ie5nmxie5nmxie5n.jpg?alt=media&token=23ffc884-cfe7-4505-91cf-3c23c8b8a0f4",
      bg: "#2b1600",
      fg: "#ffffff",
    },
    {
      name: "JVM Enterprise Microservices",
      role: "Java 21 & Spring Boot 3",
      detail: "High-throughput transactional microservices with virtual threads, Apache Kafka event streams, and zero-downtime database migrations.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Enterprise Windows Suites",
      role: "C# .NET 8 WPF & WinUI 3",
      detail: "Heavy-duty desktop applications with high-density data grids, multi-window docking, hardware RS-232/USB I/O, and MSIX packaging.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
      bg: "#f5efe8",
      fg: "#2b1600",
    },
    {
      name: "Cloud DevOps & Kubernetes",
      role: "Terraform IaC & Zero-Trust SRE",
      detail: "Automate multi-cloud infrastructure with Kubernetes auto-scaling, Terraform IaC, OpenTelemetry tracing, and automated DevSecOps gates.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_bb7zlobb7zlobb7z.jpg?alt=media&token=98dcf4a8-ff36-45a9-9f5a-930d4ed06594",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Autonomous Process Automation",
      role: "Document OCR & ERP Robotics",
      detail: "Eliminate repetitive manual workflows with event-driven AI document intelligence, automated invoice reconciliation, and CRM/ERP synchronization.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      bg: "#fff4e6",
      fg: "#1e1e1e",
    },
  ];

  const geminiKitItems = [
    {
      id: "kit-1",
      eyebrow: "ENTERPRISE AI ORCHESTRATION",
      title: "Python FastAPI + LangGraph + RAG Agent Core",
      description:
        "Production-ready Python AI microservice template with vector search, streaming SSE responses, and structured JSON output.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      architecture: "Python 3.12, FastAPI, Pydantic v2, pgvector, Redis, and Docker.",
      deliverables: [
        "Streaming AI Chat & Tool-Calling API Endpoints",
        "Automated Document Ingestion, Chunking & Embedding Pipeline",
        "Token Usage Metering, Caching & Rate Limiting",
      ],
      codebases: ["Python", "FastAPI", "AI / LLM", "Docker"],
    },
    {
      id: "kit-2",
      eyebrow: "MICROSOFT .NET AI STACK",
      title: ".NET Core & C# Semantic Kernel Enterprise Hub",
      description:
        "Embed enterprise AI plugins, C# type-safe prompt orchestration, and background worker queues into ASP.NET Core.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60",
      architecture: ".NET 8/9, ASP.NET Core Web API, C# 12, Microsoft Semantic Kernel, Entity Framework Core.",
      deliverables: [
        "Strongly-Typed C# AI Plugins & Native Function Calling",
        "High-Concurrency gRPC & REST Endpoints with JWT Auth",
        "SQL Server / PostgreSQL Audit Logging & Telemetry",
      ],
      codebases: [".NET Core", "ASP.NET", "C#", "Semantic Kernel"],
    },
    {
      id: "kit-3",
      eyebrow: "PYTHON MULTI-PLATFORM UI",
      title: "Flet (Flutter-for-Python) Desktop, Web & Mobile Suite",
      description:
        "Build rich, stateful Desktop, Web, and Mobile applications entirely in Python without writing separate frontend glue.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_vqyaewvqyaewvqya.jpg?alt=media&token=9f82c276-ae95-4e6b-9964-3c7b324fa358",
      architecture: "Python Flet framework rendering native Flutter widgets across Windows, macOS, Linux, Web, iOS, and Android.",
      deliverables: [
        "Single Python Codebase Compiling to Desktop, Web & Mobile",
        "Real-Time Charts, Data Tables, File Pickers & Native Dialogs",
        "Seamless Integration with Python AI & Data Science Libraries",
      ],
      codebases: ["Flet", "Python", "Desktop App", "Mobile App", "Web App"],
    },
    {
      id: "kit-4",
      eyebrow: "GPU-ACCELERATED TOUCH UI",
      title: "Kivy & KivyMD Cross-Platform Application Engine",
      description:
        "Create custom OpenGL ES 2 hardware-accelerated multi-touch applications for industrial terminals, desktop, and mobile.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ppcb8nppcb8nppcb.jpg?alt=media&token=559a6c92-8f13-49a7-a190-a8250d8b66d2",
      architecture: "Python Kivy + KivyMD with custom Kv design language and native Cython extensions.",
      deliverables: [
        "High-FPS Multi-Touch Kiosk, POS & Industrial Control Interfaces",
        "Custom Hardware & Sensor Integration (Camera, Serial, GPIO, BLE)",
        "Packaged Standalone Executables for Windows, Linux, macOS & Android",
      ],
      codebases: ["Kivy", "Python", "Desktop App", "Mobile App"],
    },
    {
      id: "kit-5",
      eyebrow: "MODERN WEB FRONTEND",
      title: "React 19 & JavaScript/TypeScript Application Kit",
      description:
        "Enterprise-grade React frontend architecture with real-time state synchronization, streaming AI UI, and Core Web Vitals speed.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ie5nmxie5nmxie5n.jpg?alt=media&token=23ffc884-cfe7-4505-91cf-3c23c8b8a0f4",
      architecture: "React 19, Vite/Next.js, TypeScript, TanStack Query, and modular CSS.",
      deliverables: [
        "Generative UI Streaming Components & Interactive Dashboards",
        "Code-Split Routes, PWA Offline Support & WCAG Accessibility",
        "End-to-End Playwright Automated Browser Test Suite",
      ],
      codebases: ["React", "JavaScript", "TypeScript", "Frontend"],
    },
    {
      id: "kit-6",
      eyebrow: "NATIVE MOBILE ENGINEERING",
      title: "Kotlin & Jetpack Compose Android Fleet Kit",
      description:
        "Build ultra-reliable native Android applications with offline sync, hardware barcode/NFC scanning, and on-device ML.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa",
      architecture: "Kotlin, Jetpack Compose, Hilt DI, Room SQLite, Retrofit, and WorkManager.",
      deliverables: [
        "Offline-First Field Operations & Consumer Mobile Apps",
        "Biometric Authentication, Encrypted Storage & Push Notifications",
        "On-Device Vision / OCR & Real-Time GPS Tracking",
      ],
      codebases: ["Kotlin", "Android", "Mobile App"],
    },
    {
      id: "kit-7",
      eyebrow: "JVM ENTERPRISE BACKEND",
      title: "Java 21 & Spring Boot Distributed Microservices",
      description:
        "Scale high-volume financial, e-commerce, and logistics transactions with Java virtual threads and event-driven architecture.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
      architecture: "Java 21, Spring Boot 3, Spring Cloud, Apache Kafka, and PostgreSQL.",
      deliverables: [
        "Fault-Tolerant Microservices with Circuit Breakers & Retries",
        "Kafka Event Streaming & Asynchronous Saga Orchestration",
        "Comprehensive JUnit 5 & Testcontainers Integration Suite",
      ],
      codebases: ["Java", "Spring Boot", "Backend", "Kafka"],
    },
    {
      id: "kit-8",
      eyebrow: "NATIVE WINDOWS & CROSS-OS DESKTOP",
      title: "C# WPF, WinUI 3 & .NET MAUI Desktop Workstation",
      description:
        "Develop heavy-duty enterprise desktop applications with deep Windows OS integration, multi-window docking, and high-speed grids.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_bb7zlobb7zlobb7z.jpg?alt=media&token=98dcf4a8-ff36-45a9-9f5a-930d4ed06594",
      architecture: "C#, .NET 8/9, WPF / WinUI 3 / .NET MAUI, MVVM CommunityToolkit, and SQLite/SQL Server.",
      deliverables: [
        "High-Frequency Data Grids, CAD/Charting & Hardware Printing",
        "Background Windows Services & Daemons",
        "MSIX Signed Enterprise Deployment Packages",
      ],
      codebases: ["C#", ".NET Core", "WPF / MAUI", "Desktop App"],
    },
    {
      id: "kit-9",
      eyebrow: "CLOUD INFRASTRUCTURE & SRE",
      title: "Cloud DevOps, Kubernetes & Terraform Automation Kit",
      description:
        "Provision, secure, and auto-scale your entire polyglot application estate across AWS, Azure, and Google Cloud.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      architecture: "Terraform, Kubernetes, Docker, GitHub Actions, Prometheus, Grafana, and OpenTelemetry.",
      deliverables: [
        "One-Command Infrastructure-as-Code Environment Provisioning",
        "Automated CI/CD Security Scanning (SAST/DAST) & Canary Rollouts",
        "Unified Logs, Metrics & Distributed Tracing Dashboards",
      ],
      codebases: ["Cloud DevOps", "Kubernetes", "Terraform", "Automation"],
    },
  ];

  const totalKitViews = Math.ceil(geminiKitItems.length / ITEMS_PER_VIEW);
  const startKitIndex = kitViewIndex * ITEMS_PER_VIEW;
  const currentViewKits = geminiKitItems.slice(startKitIndex, startKitIndex + ITEMS_PER_VIEW);

  const handleKitViewChange = (newView) => {
    if (newView < 0 || newView >= totalKitViews) return;
    setKitViewIndex(newView);
    setActiveKitIndex(newView * ITEMS_PER_VIEW);
  };

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timeline
      gsap.fromTo(
        ".accelerator-hero-section .accelerator-hero-center > *",
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
        ".accelerator-hero-section .floating-media-card--top",
        { y: 32, x: -20, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      gsap.fromTo(
        ".accelerator-hero-section .floating-media-card--bottom",
        { y: 40, x: 20, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      // 2. Carousel Pinned Scrubbing (min-width 769px)
      const section = carouselSectionRef.current;
      const strip = carouselStripRef.current;

      if (section && strip && window.innerWidth >= 769) {
        const getScrollAmount = () => {
          const totalWidth = strip.scrollWidth;
          const viewportWidth = window.innerWidth;
          return -(totalWidth - viewportWidth + 96);
        };

        const horizontalTween = gsap.to(strip, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          horizontalTween.kill();
        };
      }

      // 3. Section 4 Showcase Reveal
      gsap.fromTo(
        "#ai-showcase .mobile-showcase-row",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#ai-showcase",
            start: "top 78%",
          },
        }
      );

      // 4. Section 5 Quote Section Reveal
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

      // 5. Floating cards animation for CTA banner
      gsap.fromTo(
        "#ai-cta .floating-media-card--top",
        { y: 36, x: -24, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#ai-cta",
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        "#ai-cta .floating-media-card--bottom",
        { y: 44, x: 24, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#ai-cta",
            start: "top 75%",
          },
        }
      );
      gsap.to("#ai-cta .floating-media-card--top", {
        y: -10,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.2,
      });
      gsap.to("#ai-cta .floating-media-card--bottom", {
        y: -8,
        duration: 3.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.6,
      });

      // 6. Underline accent sweep
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
        title="Artificial Intelligence & Application Development | AI, Web, Mobile & Desktop (.NET, C#, Python, React, Java, Kotlin, Kivy, Flet)"
        description="Innovate faster with Quinn Daisies AI & Application Development: Custom AI Agents, RAG, Web, Mobile, Desktop, and Cloud DevOps built across .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet."
        keywords="Artificial Intelligence and Application Development, AI Agents, RAG, Desktop Application, Web Application, Mobile Application, .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, Flet, Cloud DevOps"
        canonicalUrl="/ai-and-application-development"
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
            QUINN DAISIES ARTIFICIAL INTELLIGENCE &amp; APPLICATION DEVELOPMENT • AI AGENTS • RAG • WEB • MOBILE • DESKTOP
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 3-IMAGE FLOATING HERO */}
      <section className="accelerator-hero-section">
        <div className="accelerator-hero-floating-grid">
          <div className="floating-media-card floating-media-card--top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa"
              alt="Autonomous AI Agents and RAG Pipelines"
            />
            <div className="floating-media-caption">
              <strong>Enterprise AI &amp; Automation</strong>
              Python FastAPI, RAG, LangGraph &amp; C# Semantic Kernel
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
                ARTIFICIAL INTELLIGENCE &amp; APPLICATION DEVELOPMENT
              </span>
            </div>

            <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
              Innovate faster with{" "}
              <span className="decorated-text underline">Quinn Daisies AI</span>
            </h1>

            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                maxWidth: 740,
                margin: "0 auto 28px",
              }}
            >
              Supercharge your product roadmap with production AI agents, intelligent automation, and full-stack{" "}
              <strong>Web, Mobile, and Desktop applications</strong> engineered across{" "}
              <strong>.NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet</strong>.
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Start Building with AI</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
              <div style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
                <StripeTape83 fill="#f9a144" />
              </div>
            </div>
          </div>

          <div className="floating-media-card floating-media-card--bottom">
            <div style={{ position: "absolute", top: -18, right: -10, zIndex: 4 }}>
              <StripeTapeVertical26 fill="#f9a144" />
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf"
              alt="Polyglot Web, Desktop and Mobile Applications"
            />
            <div className="floating-media-caption">
              <strong>Cross-Platform Applications</strong>
              React Web, Kotlin Mobile, C# &amp; Python Kivy/Flet Desktop
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STICKY JUMPLINK BAR */}
      <nav className="custom-jumplink-bar" aria-label="AI and Application Jump Links">
        <ul className="custom-jumplink-list">
          <li>
            <a href="#ai-tracks" className="custom-jumplink-item">
              <span>AI Stacks &amp; Runtimes</span>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_downward</span>
            </a>
          </li>
          <li>
            <a href="#ai-showcase" className="custom-jumplink-item">
              <span>Architecture Kits</span>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_downward</span>
            </a>
          </li>
          <li>
            <a href="#ai-quote" className="custom-jumplink-item">
              <span>AI Leadership</span>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_downward</span>
            </a>
          </li>
          <li>
            <a href="#ai-cta" className="custom-jumplink-item">
              <span>Start Building</span>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_downward</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* SECTION 3: PINNED HORIZONTAL AI MATRIX CAROUSEL */}
      <section
        className="Dark-Background"
        id="ai-carousel-animation"
        ref={carouselSectionRef}
      >
        <div id="ai-tracks" style={{ position: "relative", top: -80, visibility: "hidden" }} />
        <div className="ApplicationCarouselRefurblished">
          <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
            <h2 className="reveal__left">
              Built for Enterprise AI &amp; Mission-Critical Runtimes
            </h2>

            <div className="ApplicationCarouselContainer reveal__right">
              <p className="ApplicationCarouselContainerText">
                Explore our cross-platform AI engineering matrix—architecting private RAG pipelines, autonomous LangGraph agents, sub-second React interfaces, and resilient C# &amp; Python applications.
              </p>
            </div>
          </div>

          <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
            <div
              className="ApplicationCarouselSlide"
              ref={carouselStripRef}
            >
              {aiTracks.map((item) => (
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

      <section id="ai-showcase" className="mobile-showcase-section">
        <div className="glue-page">
          <div className="mobile-showcase-grid">
            <div className="mobile-showcase-media">
              <div style={{ position: "absolute", top: -10, left: 24, zIndex: 4 }}>
                <StripeTape83 fill="#f9a144" />
              </div>
              <img
                src={geminiKitItems[activeKitIndex].image}
                alt={geminiKitItems[activeKitIndex].title}
              />
              <div style={{ position: "absolute", bottom: -8, right: 24, zIndex: 4 }}>
                <StripeTape91 fill="#c86d10" />
              </div>
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
                  marginBottom: 10,
                  textTransform: "uppercase",
                }}
              >
                FOR ENTERPRISES &amp; PRODUCT TEAMS
              </span>

              <h2
                className="glue-headline glue-headline--headline-4"
                style={{
                  marginBottom: 18,
                  color: "#2b1600",
                }}
              >
                Deploy what matters, and{" "}
                <span className="decorated-text underline">keep your models private</span>
              </h2>

              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Production-engineered foundations with private vector retrieval, strict schema evaluation, and zero data leakage across multi-tenant cloud networks. Click any kit to inspect full architecture specifications.
              </p>

              <div className="mobile-showcase-accordion" style={{ borderTop: "1px solid rgba(43, 22, 0, 0.14)" }}>
                <div
                  key={kitViewIndex}
                  style={{
                    animation: "fadeInView 0.32s ease forwards",
                  }}
                >
                  {currentViewKits.map((item, idx) => {
                    const globalIdx = startKitIndex + idx;
                    return (
                      <div
                        key={item.title}
                        role="button"
                        tabIndex={0}
                        onClick={() => setActiveModalItem(item)}
                        onMouseEnter={() => setActiveKitIndex(globalIdx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveModalItem(item);
                          }
                        }}
                        className={`mobile-showcase-row ${activeKitIndex === globalIdx ? "is-active" : ""}`}
                        style={{
                          padding: "10px 0",
                          borderBottom: "1px solid rgba(43, 22, 0, 0.14)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 16,
                          cursor: "pointer",
                        }}
                      >
                        <div>
                          <h3
                            className="glue-headline glue-headline--headline-6"
                            style={{
                              fontSize: "var(--qd-font-size-h4, 1.35em)",
                              fontWeight: 600,
                              color: activeKitIndex === globalIdx ? "#c86d10" : "#2b1600",
                              marginBottom: 6,
                              transition: "color 0.2s ease",
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "var(--qd-font-size-body, 1em)",
                              lineHeight: 1.65,
                              color: "#3b3b3b",
                              margin: 0,
                            }}
                          >
                            {item.description}
                          </p>
                        </div>

                        <div
                          className="mobile-showcase-row-arrow"
                          style={{
                            flexShrink: 0,
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: activeKitIndex === globalIdx ? "#c86d10" : "#2b1600",
                            transition: "transform 0.25s ease, color 0.25s ease",
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                            arrow_forward
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 24,
                    marginTop: 8,
                    flexWrap: "wrap",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span
                      style={{
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        color: "#c86d10",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      View {kitViewIndex + 1} of {totalKitViews}
                    </span>
                    <span style={{ color: "rgba(43, 22, 0, 0.35)", fontSize: 13 }}>•</span>
                    <span style={{ fontSize: "var(--qd-font-size-body-sm, 0.9em)", color: "#776355" }}>
                      Showing {startKitIndex + 1}–{Math.min(startKitIndex + ITEMS_PER_VIEW, geminiKitItems.length)} of {geminiKitItems.length} architecture kits
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* View Dots */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginRight: 6 }}>
                      {Array.from({ length: totalKitViews }).map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleKitViewChange(i)}
                          aria-label={`Switch to View ${i + 1}`}
                          style={{
                            width: kitViewIndex === i ? 26 : 8,
                            height: 8,
                            borderRadius: 999,
                            background: kitViewIndex === i ? "#c86d10" : "rgba(43, 22, 0, 0.2)",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.25s ease",
                          }}
                        />
                      ))}
                    </div>

                    {/* Left Arrow Button */}
                    <button
                      type="button"
                      onClick={() => handleKitViewChange(kitViewIndex - 1)}
                      disabled={kitViewIndex === 0}
                      aria-label="Previous view of architecture kits"
                      className="kit-slider-nav-btn"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "1px solid rgba(43, 22, 0, 0.22)",
                        background: kitViewIndex === 0 ? "rgba(43, 22, 0, 0.04)" : "#ffffff",
                        color: kitViewIndex === 0 ? "rgba(43, 22, 0, 0.25)" : "#2b1600",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: kitViewIndex === 0 ? "not-allowed" : "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: kitViewIndex === 0 ? "none" : "0 3px 8px rgba(43, 22, 0, 0.08)",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                        arrow_back
                      </span>
                    </button>

                    {/* Right Arrow Button */}
                    <button
                      type="button"
                      onClick={() => handleKitViewChange(kitViewIndex + 1)}
                      disabled={kitViewIndex === totalKitViews - 1}
                      aria-label="Next view of architecture kits"
                      className="kit-slider-nav-btn"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        border: "1px solid rgba(43, 22, 0, 0.22)",
                        background: kitViewIndex === totalKitViews - 1 ? "rgba(43, 22, 0, 0.04)" : "#ffffff",
                        color: kitViewIndex === totalKitViews - 1 ? "rgba(43, 22, 0, 0.25)" : "#2b1600",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: kitViewIndex === totalKitViews - 1 ? "not-allowed" : "pointer",
                        transition: "all 0.2s ease",
                        boxShadow: kitViewIndex === totalKitViews - 1 ? "none" : "0 3px 8px rgba(43, 22, 0, 0.08)",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-quote" className="accelerator-home-quote">
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
                &ldquo;Artificial intelligence in the enterprise must be grounded in reality—engineered with deterministic tool execution, private vector retrieval, and zero-hallucination guardrails that executives can trust.&rdquo;
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
                PRINCIPAL AI &amp; SYSTEMS ARCHITECT
              </span>
              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", margin: 0 }}>
                Quinn Daisies Technology &amp; Artificial Intelligence Division
              </p>
            </div>

            <div className="glue-grid__col glue-grid__col--span-5 glue-grid__col--align-middle">
              <div style={{ position: "relative" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_bb7zlobb7zlobb7z.jpg?alt=media&token=98dcf4a8-ff36-45a9-9f5a-930d4ed06594"
                  alt="Quinn Daisies Enterprise AI Leadership"
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

      {/* SECTION 6: DOTTED LOCKUP CTA WITH FLOATING CARDS (Matching Hero Section Structure) */}
      <section id="ai-cta" className="campus-signup-lockup">
        <div className="glue-page">
          <div className="accelerator-hero-floating-grid">
            <div className="floating-media-card floating-media-card--top">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60"
                alt="Enterprise AI Sprints"
              />
              <div className="floating-media-caption">
                <strong>Enterprise AI Delivery</strong>
                2-Week Prototype to Multi-Region Production
              </div>
            </div>

            <div className="accelerator-hero-center" style={{ maxWidth: 680, padding: "0 16px" }}>
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
                  RAPID AI DEPLOYMENT &amp; MODERNIZATION
                </span>
              </div>

              <h2 className="glue-headline glue-headline--headline-1" style={{ color: "#ffffff", marginBottom: 18 }}>
                Supercharge your <span className="decorated-text underline">enterprise roadmap</span> with Quinn Daisies
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Whether you need autonomous AI agents, private RAG pipelines, or a modern polyglot application suite in .NET, Python, React, and Kotlin, our engineers are ready to build.
              </p>

              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}>
                <Link
                  to="/technology-contact-us"
                  className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
                >
                  <span>Request Custom AI Blueprint</span>
                  <span className="material-symbols-outlined">memory</span>
                </Link>
              </div>
            </div>

            <div className="floating-media-card floating-media-card--bottom">
              <div style={{ position: "absolute", top: -18, right: -10, zIndex: 4 }}>
                <StripeTapeVertical26 fill="#f9a144" />
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ie5nmxie5nmxie5n.jpg?alt=media&token=23ffc884-cfe7-4505-91cf-3c23c8b8a0f4"
                alt="Private Data Security and Role-Based Access"
              />
              <div className="floating-media-caption">
                <strong>Private Data &amp; Security</strong>
                Zero Data Leakage, Encrypted RAG &amp; RBAC
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuinnProductModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </div>
  );
};

export default AiApplicationDevelopment;
