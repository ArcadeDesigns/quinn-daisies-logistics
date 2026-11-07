import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
  QuoteMarkPinkSvg,
  GreenTickSvg,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const TechnologyAboutUsPage = () => {
  const containerRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({ 0: true, 1: true, 2: false });

  const toggleCard = (idx) => {
    setExpandedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const aboutPillars = [
    {
      eyebrow: "PILLAR 01 • GLOBAL OPERATIONS & MARYLAND HEADQUARTERS",
      icon: "public",
      title: "Born From Real-World Global Operations",
      lead: "Unlike traditional agencies that only write code in isolation, Quinn Daisies Technology & IT was forged inside a global logistics, trade facilitation, and government contracting conglomerate headquartered in Frederick, Maryland.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454",
      imageLeft: true,
      bullets: [
        "Headquartered in Frederick, Maryland (U.S. Federal & Maryland eMMA hub) with global delivery across Europe, Asia, and Africa",
        "Deep domain fluency in multimodal supply chains, customs compliance, financial settlement, and public-sector operations",
        "Every software platform we build is battle-tested against real operational SLAs and physical world constraints",
      ],
      quote:
        "We built our technology ecosystem because off-the-shelf software couldn't handle the complexity of cross-border trade, multi-agency contracting, and real-time AI telemetry.",
      author: "Executive Leadership • Quinn Daisies Technology & IT Division",
    },
    {
      eyebrow: "PILLAR 02 • POLYGLOT FULL-SDLC ARCHITECTURE",
      icon: "hub",
      title: "True Polyglot Full-SDLC Engineering Culture",
      lead: "We select the right runtime for every workload — uniting enterprise .NET Core & C#, Python AI & Flet/Kivy, React & TypeScript, and Java & Kotlin under one cohesive architectural standard.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_3kz8z63kz8z63kz8.jpg?alt=media&token=1e0442c2-4145-4878-b6e9-6d9924b2292f",
      imageLeft: false,
      bullets: [
        "Backend & Microservices: .NET Core, ASP.NET, C#, Python (FastAPI/Django), and Java (Spring Boot)",
        "Web, Mobile & Desktop: React 19, Kotlin (Jetpack Compose), .NET MAUI, C# WPF/WinUI 3, Python Kivy, and Python Flet",
        "Cloud & DevSecOps: Kubernetes, Terraform IaC, AWS/Azure/GCP, OpenTelemetry, and Zero-Trust Security",
      ],
      quote:
        "Our engineers move seamlessly from a C# Web API and React portal to a Python Kivy warehouse touchscreen or Kotlin Android scanner fleet.",
      author: "Principal Systems Architect • Quinn Daisies Engineering",
    },
    {
      eyebrow: "PILLAR 03 • SAM.GOV, MARYLAND eMMA & UNGM CONTRACTING",
      icon: "verified_user",
      title: "Trusted Government & Multilateral Partner",
      lead: "Our dedicated Capture & Proposal Engineering practice helps government agencies and commercial partners win and execute complex technology contracts on SAM.gov, Maryland eMMA, and UNGM.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98",
      imageLeft: true,
      bullets: [
        "U.S. Federal (SAM.gov), State of Maryland (eMMA / CATS+ / MBE-VSBE), and United Nations (UNGM) procurement mastery",
        "Shipley-aligned technical proposal writing, compliance matrices, and post-award full-SDLC software delivery",
        "Unwavering commitment to Section 508 accessibility, NIST SP 800-171, SOC 2, and ethical AI governance",
      ],
      quote:
        "Combining Shipley proposal writing with in-house polyglot software engineering makes Quinn Daisies a powerhouse teaming partner.",
      author: "Government Capture & Proposal Directorate • Frederick, MD",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".alumni .hero-slides > div",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".al-campus--container",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".alumni-ongoing-support",
            start: "top 78%",
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
        title="About Quinn Daisies Technology & IT Ecosystem | Polyglot Engineering & GovCon"
        description="Learn about Quinn Daisies Technology & IT: our Frederick, Maryland headquarters, polyglot full-SDLC software engineering culture (.NET Core, C#, Python, React, Java, Kotlin, Kivy, Flet), and SAM.gov / Maryland eMMA / UNGM contracting practice."
        keywords="about Quinn Daisies Technology, Frederick Maryland software company, polyglot software engineering, government contracting SAM.gov eMMA UNGM, Quinn Daisies IT division"
        canonicalUrl="/technology-about-us"
      />

      <div className="alumni">
        {/* SECTION 1: MOSAIC HERO */}
        <section className="hero">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <span
              className="hero-preheading"
              style={{
                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                marginBottom: 0,
              }}
            >
              About Quinn Daisies Technology &amp; IT
            </span>
            <StripeTape210 />
          </div>

          <div className="hero-slides">
            <div className="glue-grid__col glue-grid__col--span-5">
              <h1
                className="glue-headline glue-headline--headline-1 hero-heading"
                style={{ marginBottom: 0 }}
              >
                A distinct{" "}
                <span style={{ color: "#c86d10", display: "block" }}>
                  technology ecosystem,
                </span>
                <span className="decorated-text underline">built for impact.</span>
              </h1>
            </div>

            <div className="glue-grid__col glue-grid__col--span-4">
              <div className="hero-image" style={{ height: 380 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67"
                  alt="Quinn Daisies Technology Leadership and Engineering Hub"
                />
              </div>
            </div>

            <div
              className="glue-grid__col glue-grid__col--span-3"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div className="hero-image" style={{ height: 182 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf"
                  alt="Frederick Maryland and Global Delivery"
                />
              </div>
              <div className="hero-image" style={{ height: 182 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_auxrf1auxrf1auxr.jpg?alt=media&token=2058152e-78bd-4467-b7fa-efc20afc2cd7"
                  alt="Industrial and Cloud Engineering"
                />
              </div>
            </div>
          </div>

          <div className="glue-grid" style={{ alignItems: "center", marginTop: 24 }}>
            <div className="glue-grid__col glue-grid__col--span-7">
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 0,
                }}
              >
                Quinn Daisies Technology &amp; IT is our dedicated software engineering, artificial intelligence,
                cloud infrastructure, digital growth, and government contract procurement ecosystem — operating from{" "}
                <strong>Frederick, Maryland</strong> across North America, Europe, Asia, and Africa.
              </p>
            </div>
            <div
              className="glue-grid__col glue-grid__col--span-5"
              style={{ display: "flex", gap: 12, justifyContent: "flex-end", flexWrap: "wrap" }}
            >
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Connect With Leadership</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
              <Link
                to="/technology-programs"
                className="ApplicationButton glue-button glue-button--medium-emphasis"
              >
                <span>Explore Our Programs</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: MISSION STATEMENT BANNER */}
        <section className="hero-description">
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
            OUR ENGINEERING MISSION &amp; GLOBAL ETHOS
          </span>
          <h2 className="glue-headline glue-headline--headline-3 hero-description-content">
            Our mission is to engineer dependable, intelligent, and accessible software systems that empower commercial
            enterprises and public-sector institutions to{" "}
            <span className="decorated-text underline">operate without boundaries.</span>
          </h2>
        </section>

        {/* SECTION 3: 3 ALTERNATING ABOUT PILLARS */}
        <section className="benefits-connect alumni-ongoing-support">
          <div className="glue-page">
            <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 32px" }}>
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
                WHO WE ARE &amp; HOW WE BUILD
              </span>
              <h2 className="glue-headline glue-headline--headline-2">
                Three pillars of{" "}
                <span className="decorated-text underline">Quinn Daisies Technology</span>
              </h2>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  maxWidth: 760,
                  margin: "16px auto 0",
                }}
              >
                From physical supply chain telemetry and polyglot microservices to federal-grade proposal capture, every
                division operates as one unified engineering team.
              </p>
            </div>

            {aboutPillars.map((pillar, idx) => {
              const isExpanded = !!expandedCards[idx];
              return (
                <div key={pillar.title} className="al-campus--container">
                  <div className="glue-grid" style={{ alignItems: "center" }}>
                    {pillar.imageLeft && (
                      <div className="glue-grid__col glue-grid__col--span-5">
                        <div className="cloud-floating-photo-card">
                          <div className="cloud-floating-photo-tape">
                            <StripeTape83 fill="#f9a144" />
                          </div>
                          <img
                            src={pillar.image}
                            alt={pillar.title}
                            style={{ height: 370, width: "100%", objectFit: "cover", borderRadius: 16 }}
                          />
                          <div style={{ marginTop: -12, marginLeft: 28 }}>
                            <StripeTape91 fill="#2b1600" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="glue-grid__col glue-grid__col--span-7">
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
                          {pillar.icon}
                        </span>
                      </div>

                      <span
                        className="glue-eyebrow"
                        style={{
                          fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                          color: idx % 2 === 1 ? "#c86d10" : "#2b1600",
                          fontWeight: 600,
                          letterSpacing: "0.06em",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        {pillar.eyebrow}
                      </span>

                      <h3
                        className="glue-headline glue-headline--headline-4 al-campus--card-heading"
                        style={{ marginBottom: 16 }}
                      >
                        {pillar.title}
                      </h3>

                      <p
                        className="al-campus--card-subheading"
                        style={{
                          color: "#3b3b3b",
                          fontSize: "var(--qd-font-size-body, 1em)",
                          lineHeight: 1.65,
                          marginBottom: 16,
                        }}
                      >
                        {pillar.lead}
                      </p>

                      <button
                        type="button"
                        className="alumni-read-toggle-btn"
                        onClick={() => toggleCard(idx)}
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Show less details" : "Inspect institutional pillar"}</span>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                          {isExpanded ? "expand_less" : "expand_more"}
                        </span>
                      </button>

                      {isExpanded && (
                        <div style={{ marginTop: 24 }}>
                          <ul className="cloud-standards-list">
                            {pillar.bullets.map((b) => (
                              <li key={b}>
                                <GreenTickSvg />
                                <span
                                  style={{
                                    fontSize: "var(--qd-font-size-body, 1em)",
                                    lineHeight: 1.65,
                                    color: "#3b3b3b",
                                  }}
                                >
                                  {b}
                                </span>
                              </li>
                            ))}
                          </ul>

                          <div className={`post-it-card ${idx % 2 === 1 ? "rotate-right" : ""}`}>
                            <div style={{ marginBottom: 12 }}>
                              <QuoteMarkPinkSvg />
                            </div>
                            <p
                              style={{
                                fontSize: "var(--qd-font-size-body-large, 1.1em)",
                                lineHeight: 1.65,
                                color: "#2b1600",
                                marginBottom: 12,
                              }}
                            >
                              &ldquo;{pillar.quote}&rdquo;
                            </p>
                            <div
                              style={{
                                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                                fontWeight: 600,
                                letterSpacing: "0.04em",
                                color: "#6b625b",
                              }}
                            >
                              — {pillar.author}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {!pillar.imageLeft && (
                      <div className="glue-grid__col glue-grid__col--span-5">
                        <div className="cloud-floating-photo-card">
                          <div className="cloud-floating-photo-tape">
                            <StripeTape83 fill="#c86d10" />
                          </div>
                          <img
                            src={pillar.image}
                            alt={pillar.title}
                            style={{ height: 370, width: "100%", objectFit: "cover", borderRadius: 16 }}
                          />
                          <div style={{ marginTop: -12, marginRight: 28, display: "flex", justifyContent: "flex-end" }}>
                            <StripeTape91 fill="#c86d10" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: DARK CALLOUT BLOCK */}
        <div className="alumni-news-community">
          <div className="alumni-community-news-block">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div>
                <span
                  className="glue-eyebrow"
                  style={{
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    color: "#f9a144",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  GLOBAL DELIVERY &amp; HEADQUARTERS
                </span>
                <h2 className="glue-headline glue-headline--headline-2" style={{ color: "#ffffff", margin: 0 }}>
                  Anchored in Frederick, Maryland • Delivering Worldwide
                </h2>
              </div>
              <StripeTape210 />
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.88)",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                marginBottom: 28,
              }}
            >
              From our Maryland headquarters in the D.C./Baltimore federal corridor to our international engineering and
              trade hubs across Europe, Asia, and Africa, Quinn Daisies provides 24/7 engineering velocity and contract
              execution.
            </p>
            <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis glue-button--reversed"
              >
                <span>Contact Our Frederick, MD &amp; Global Teams</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
              <Link
                to="/contract-procurement-and-writing"
                className="ApplicationButton glue-button glue-button--medium-emphasis glue-button--reversed"
              >
                <span>View Government Contracting Credentials</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <div className="hero-tape-accent" style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
                <StripeTape83 fill="#f9a144" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyAboutUsPage;
