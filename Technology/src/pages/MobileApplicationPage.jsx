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

const MobileApplicationPage = () => {
  const containerRef = useRef(null);
  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [activeKitIndex, setActiveKitIndex] = useState(0);

  const mobileTracks = [
    {
      name: "Kotlin & Jetpack Compose",
      role: "Native Android & Rugged Scanners",
      detail: "Hardware-accelerated Kotlin 2.0, offline Room SQLite databases, Zebra DataWedge/Honeywell barcode scanning, and Material 3 UI.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_kqqzovkqqzovkqqz.jpg?alt=media&token=606e9964-5814-42ee-bbdd-551aab19b798",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: ".NET 8 MAUI & C#",
      role: "Enterprise iOS & Android Fleets",
      detail: "Shared C# 12 business logic and validation across iOS and Android, SignalR real-time dispatch, and Entra ID SSO.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_rd819rd819rd819r.jpg?alt=media&token=713cbb9a-7096-4743-a68f-4d224f03f8b0",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Python Flet (Flutter)",
      role: "Cross-Platform Mobile AI",
      detail: "60fps Flutter UI engine driven by pure Python, embedded ONNX neural nets, and seamless FastAPI backend synchronization.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_kcr277kcr277kcr2.jpg?alt=media&token=f80bf418-149d-4fef-be94-f15d8b184001",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Python Kivy Multi-Touch",
      role: "Industrial Tablet & Touch Cockpits",
      detail: "GPU-accelerated OpenGL ES 2.0 multi-touch field software, custom hardware telemetry, and offline logging.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_tfsqgntfsqgntfsq.jpg?alt=media&token=9c3f23fa-2fe0-4638-b32c-75082938fc13",
      bg: "#f5efe8",
      fg: "#1e1e1e",
    },
    {
      name: "React Native & PWA",
      role: "Consumer Commerce & Offline Portals",
      detail: "Cross-platform iOS and Android apps, installable service workers, Apple Pay / Stripe checkout, and sub-second Core Web Vitals.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_eu7e1ueu7e1ueu7e.jpg?alt=media&token=d84e2b97-7bef-43fd-a906-4e75d078d2f6",
      bg: "#2b1600",
      fg: "#ffffff",
    },
    {
      name: "Rugged Scanner Integration",
      role: "Zebra, Honeywell & Barcode SDKs",
      detail: "Direct OEM API hooks for 1D/2D laser imagers, long-range RFID, thermal Bluetooth mobile printers, and DPM code reading.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_d5buykd5buykd5bu.jpg?alt=media&token=ca3390cc-18c0-4c65-b2bb-16d3ee432089",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "GovCon & Section 508",
      role: "FIPS 140-3 & VPAT Accessibility",
      detail: "VPAT accessibility compliance, TalkBack/VoiceOver screen reader audits, and FIPS-validated encryption for federal field agents.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dx17ymdx17ymdx17.jpg?alt=media&token=1c8866e0-cb51-4d54-bb2a-fb0940c936e5",
      bg: "#f5efe8",
      fg: "#2b1600",
    },
    {
      name: "Mobile DevSecOps",
      role: "OWASP MASVS & MDM Deployment",
      detail: "Certificate pinning, SQLCipher database encryption, root/jailbreak detection, and automated Microsoft Intune/SOTI deployment.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dx17ymdx17ymdx17.jpg?alt=media&token=1c8866e0-cb51-4d54-bb2a-fb0940c936e5",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Offline Sync & GPS Dispatch",
      role: "Fleet Telemetry & Turn-by-Turn",
      detail: "Background location services, geofencing, route optimization, and conflict-free delta sync engines over fragile networks.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_h42b7gh42b7gh42b.jpg?alt=media&token=389e827d-1b93-41ec-a97e-2a7167e794e5",
      bg: "#fff4e6",
      fg: "#1e1e1e",
    },
  ];

  const mobileKitItems = [
    {
      eyebrow: "KOTLIN • JETPACK COMPOSE",
      title: "Native Android & Scanner SDK",
      description: "Production Kotlin foundation with Room offline sync, barcode/RFID hardware hooks, and Material 3.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_kqqzovkqqzovkqqz.jpg?alt=media&token=606e9964-5814-42ee-bbdd-551aab19b798",
      architecture: "Kotlin 2.0, Jetpack Compose, Room, WorkManager, Zebra/Honeywell Scanner Bridge.",
      deliverables: [
        "Offline-first queue and background sync engine with conflict resolution",
        "CameraX & hardware laser barcode/QR/OCR scanner module integration",
        "Live GPS telemetry, geofenced tracking, and turn-by-turn proof-of-delivery capture",
      ],
      codebases: ["Kotlin", "Jetpack Compose", "Android", "Room SQLite"],
    },
    {
      eyebrow: ".NET 8 MAUI • C#",
      title: "Enterprise iOS & Android (.NET MAUI)",
      description: "Shared .NET 8 MAUI architecture with Entra ID SSO, gRPC streaming, and native iOS/Android views.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ksm6tbksm6tbksm6.jpg?alt=media&token=0a33b5f6-7d28-4f52-bc3b-e42778a0984c",
      architecture: "C# 12, .NET 8 MAUI, ASP.NET Core Web API, SignalR, SQLite-net.",
      deliverables: [
        "Shared C# DTOs, business logic, and validation between backend and mobile clients",
        "Biometric FaceID / TouchID / Android BiometricPrompt authentication",
        "Push notification hub integration (APNs & Firebase Cloud Messaging)",
      ],
      codebases: [".NET MAUI", "C#", "ASP.NET Core", "iOS", "Android"],
    },
    {
      eyebrow: "PYTHON • FLET • KIVY",
      title: "Python Flet & Kivy Mobile AI",
      description: "Build cross-platform mobile and tablet apps in pure Python with native AI and computer vision.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_kcr277kcr277kcr2.jpg?alt=media&token=f80bf418-149d-4fef-be94-f15d8b184001",
      architecture: "Python 3.11+, Flet (Flutter Engine), Kivy, FastAPI, ONNX Runtime.",
      deliverables: [
        "Cross-platform iOS, Android, and rugged tablet packaging directly from Python",
        "Embedded edge AI chat, voice capture, and document OCR scanning",
        "Real-time WebSocket dashboard telemetry and hardware sensor monitoring",
      ],
      codebases: ["Python", "Flet", "Kivy", "FastAPI"],
    },
    {
      eyebrow: "GOVCON • SAM.GOV • MARYLAND eMMA",
      title: "Section 508 & Zero-Trust Mobility",
      description: "Compliant mobile architecture for federal, state, and UNGM field inspection and citizen apps.",
      image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_uyacyjuyacyjuyac.jpg?alt=media&token=28099705-d49d-4974-a66a-87c3b04f9752",
      architecture: "FIPS 140-3 Crypto, SQLCipher, OAuth 2.0 PKCE, Section 508 VPAT.",
      deliverables: [
        "FIPS-validated encryption at rest and in transit with hardware Keystore",
        "Full Section 508 VPAT accessibility compliance and TalkBack/VoiceOver certification",
        "Offline field inspection forms with digital signature & secure photo timestamping",
      ],
      codebases: ["FIPS 140-3", "Section 508", "Kotlin", ".NET MAUI"],
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
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .fromTo(
          ".accelerator-hero-center > *",
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, stagger: 0.1 }
        )
        .fromTo(
          ".accelerator-hero-section .floating-media-card--top",
          { y: 36, x: -24, opacity: 0 },
          { y: 0, x: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".accelerator-hero-section .floating-media-card--bottom",
          { y: 44, x: 24, opacity: 0 },
          { y: 0, x: 0, opacity: 1, duration: 0.8 },
          "-=0.7"
        )
        .add(() => {
          gsap.to(".accelerator-hero-section .floating-media-card--top", {
            y: -10,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(".accelerator-hero-section .floating-media-card--bottom", {
            y: -8,
            duration: 3.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.4,
          });
        });

      // 2. Horizontal Pinned Carousel Scrubbing
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
        "#mobile-carousel-animation .reveal__left",
        { x: -36, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#mobile-carousel-animation",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#mobile-carousel-animation .reveal__right",
        { x: 36, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#mobile-carousel-animation",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        "#mobile-carousel-animation .AdvanceDesignStructureSlideBox",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#mobile-carousel-animation",
            start: "top 82%",
          },
        }
      );

      // 3. Mobile Reference Showcase Scroll Reveal
      gsap.fromTo(
        "#mobile-showcase .mobile-showcase-media",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#mobile-showcase",
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        "#mobile-showcase .mobile-showcase-row",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#mobile-showcase",
            start: "top 78%",
          },
        }
      );

      // 4. Leadership Quote Section Reveal
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

      // 5. Floating cards animation for CTA banner
      gsap.fromTo(
        "#mobile-cta .floating-media-card--top",
        { y: 36, x: -24, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#mobile-cta",
            start: "top 75%",
          },
        }
      );
      gsap.fromTo(
        "#mobile-cta .floating-media-card--bottom",
        { y: 44, x: 24, opacity: 0 },
        {
          y: 0,
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: "#mobile-cta",
            start: "top 75%",
          },
        }
      );
      gsap.to("#mobile-cta .floating-media-card--top", {
        y: -10,
        duration: 3.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.2,
      });
      gsap.to("#mobile-cta .floating-media-card--bottom", {
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
        title="Mobile Application Development (Kotlin, .NET MAUI, Python Flet & Kivy, React) | Quinn Daisies"
        description="Native and cross-platform Mobile Application Development by Quinn Daisies Technology: Kotlin & Jetpack Compose Android, C# .NET MAUI iOS/Android, Python Flet & Kivy, and offline-first field mobility."
        keywords="mobile application development, Kotlin Android development, .NET MAUI C# mobile apps, Python Flet mobile, Python Kivy tablet app, enterprise mobile engineering, Quinn Daisies"
        canonicalUrl="/mobile-application-development"
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
            QUINN DAISIES MOBILE APPLICATION ENGINEERING • KOTLIN • .NET MAUI • FLET • KIVY • REACT
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 3-IMAGE FLOATING HERO */}
      <section className="accelerator-hero-section">
        <div className="accelerator-hero-floating-grid">
          <div className="floating-media-card floating-media-card--top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_uyacyjuyacyjuyac.jpg?alt=media&token=28099705-d49d-4974-a66a-87c3b04f9752"
              alt="Native Kotlin Android and Field Mobility"
            />
            <div className="floating-media-caption">
              <strong>Native Android Fleets</strong>
              Kotlin 2.0, Jetpack Compose &amp; Rugged Scanners
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
                NATIVE &amp; CROSS-PLATFORM MOBILE FLEETS
              </span>
            </div>

            <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
              Mobile applications built for{" "}
              <span className="decorated-text underline">mission-critical scale</span>
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
              From consumer iOS &amp; Android marketplaces to offline-first rugged field scanners and government citizen
              apps—we engineer high-velocity mobile platforms using <strong>Kotlin (Jetpack Compose)</strong>,{" "}
              <strong>C# (.NET MAUI)</strong>, <strong>Python (Flet &amp; Kivy)</strong>, and <strong>React</strong>.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Scope Your Mobile Application</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
            </div>
          </div>

          <div className="floating-media-card floating-media-card--bottom">
            <div style={{ position: "absolute", top: -18, right: -10, zIndex: 4 }}>
              <StripeTapeVertical26 fill="#f9a144" />
            </div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_143o86143o86143o.jpg?alt=media&token=66947c0a-3ab5-413b-9a1d-f1dec9f6875f"
              alt="Cross-Platform iOS, Android and Tablet Engineering"
            />
            <div className="floating-media-caption">
              <strong>Cross-Platform Mobility</strong>
              .NET MAUI, iOS, React Native &amp; Python Flet
            </div>
          </div>
        </div>
      </section>

      <section
        className="Dark-Background"
        id="mobile-carousel-animation"
        ref={carouselSectionRef}
      >
        <div id="mobile-tracks" style={{ position: "relative", top: -80, visibility: "hidden" }} />
        <div className="ApplicationCarouselRefurblished">
          <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
            <h2 className="reveal__left">
              Built for Mission-Critical Mobile Runtimes
            </h2>

            <div className="ApplicationCarouselContainer reveal__right">
              <p className="ApplicationCarouselContainerText">
                Explore our cross-platform and native mobility matrix—architecting sub-second Kotlin Compose interfaces, unified .NET MAUI fleets, Python Flet mobile cockpits, and offline-first scanner sync engines.
              </p>
            </div>
          </div>

          <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
            <div
              className="ApplicationCarouselSlide"
              ref={carouselStripRef}
            >
              {mobileTracks.map((item) => (
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

      <section id="mobile-showcase" className="mobile-showcase-section">
        <div className="glue-page">
          <div className="mobile-showcase-grid">
            <div className="mobile-showcase-media">
              <div style={{ position: "absolute", top: -10, left: 24, zIndex: 4 }}>
                <StripeTape83 fill="#f9a144" />
              </div>
              <img
                src={mobileKitItems[activeKitIndex]?.image || "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_tfsqgntfsqgntfsq.jpg?alt=media&token=9c3f23fa-2fe0-4638-b32c-75082938fc13"}
                alt={mobileKitItems[activeKitIndex]?.title || "Mobile Reference Kits"}
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
                FOR ORGANIZATIONS &amp; ENTERPRISE FIELD FLEETS
              </span>

              <h2
                className="glue-headline glue-headline--headline-4"
                style={{
                  marginBottom: 18,
                  color: "#2b1600",
                }}
              >
                See what changed, and{" "}
                <span className="decorated-text underline">keep every source close</span>
              </h2>

              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large)",
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Pre-engineered mobility foundations with offline-first synchronization, hardware scanner bridges, and strict enterprise security profiles ensure your field fleets remain resilient.
              </p>

              <div className="mobile-showcase-accordion" style={{ borderTop: "1px solid rgba(43, 22, 0, 0.14)" }}>
                {mobileKitItems.map((item, idx) => (
                  <div
                    key={item.title}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveModalItem(item)}
                    onMouseEnter={() => setActiveKitIndex(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveModalItem(item);
                      }
                    }}
                    className={`mobile-showcase-row ${activeKitIndex === idx ? "is-active" : ""}`}
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
                          fontWeight: 600,
                          color: activeKitIndex === idx ? "#c86d10" : "#2b1600",
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
                        color: activeKitIndex === idx ? "#c86d10" : "#2b1600",
                        transition: "transform 0.25s ease, color 0.25s ease",
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 22 }}>
                        arrow_forward
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WARM CREAM LEADERSHIP QUOTE SECTION */}
      <section id="mobile-quote" className="accelerator-home-quote">
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
                &ldquo;Enterprise mobility is fundamentally about resilience—engineering offline-first architectures
                that never drop a transaction, whether operating in remote warehouse dead zones or across
                high-concurrency multi-tenant cloud networks.&rdquo;
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
                PRINCIPAL MOBILE ENGINEERING DIRECTOR
              </span>
              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", margin: 0 }}>
                Quinn Daisies Technology &amp; Enterprise Mobility Division
              </p>
            </div>

            <div className="glue-grid__col glue-grid__col--span-5 glue-grid__col--align-middle">
              <div style={{ position: "relative" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dx17ymdx17ymdx17.jpg?alt=media&token=1c8866e0-cb51-4d54-bb2a-fb0940c936e5"
                  alt="Quinn Daisies Enterprise Mobile Leadership"
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

      {/* SECTION 6: DOTTED LOCKUP CTA WITH FLOATING CARDS (Design like Hero Section) */}
      <section id="mobile-cta" className="campus-signup-lockup">
        <div className="glue-page">
          <div className="accelerator-hero-floating-grid">
            <div className="floating-media-card floating-media-card--top">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_c4bf6ac4bf6ac4bf.jpg?alt=media&token=8ae19566-5ea0-4cde-892b-268cd74f7b34"
                alt="Mission-Critical Mobile Architecture Squad"
              />
              <div className="floating-media-caption">
                <strong>Enterprise Mobile Delivery</strong>
                Kotlin, C# .NET MAUI &amp; Python Flet Sprints
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
                  FLEET DEPLOYMENT &amp; ARCHITECTURE
                </span>
              </div>

              <h2 className="glue-headline glue-headline--headline-1" style={{ color: "#ffffff", marginBottom: 18 }}>
                Launch your <span className="decorated-text underline">mobile fleet</span> with Quinn Daisies
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Whether you need a native Kotlin Android scanner app, a C# .NET MAUI enterprise suite, or a Python Flet
                mobile cockpit, our engineers are ready to architect and deploy.
              </p>

              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 }}>
                <Link
                  to="/technology-contact-us"
                  className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
                >
                  <span>Request Mobile Engineering Quote</span>
                  <span className="material-symbols-outlined">memory</span>
                </Link>
              </div>
            </div>

            <div className="floating-media-card floating-media-card--bottom">
              <div style={{ position: "absolute", top: -18, right: -10, zIndex: 4 }}>
                <StripeTapeVertical26 fill="#f9a144" />
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_3kz8z63kz8z63kz8.jpg?alt=media&token=1e0442c2-4145-4878-b6e9-6d9924b2292f"
                alt="Rugged Field Handheld Scanner Terminals"
              />
              <div className="floating-media-caption">
                <strong>Zero-Downtime Reliability</strong>
                Rugged Scanners, Offline Room Sync &amp; BLE
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuinnProductModal item={activeModalItem} onClose={() => setActiveModalItem(null)} />
    </div>
  );
};

export default MobileApplicationPage;
