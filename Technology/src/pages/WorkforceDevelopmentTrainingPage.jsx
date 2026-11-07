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

const WorkforceDevelopmentTrainingPage = () => {
  const containerRef = useRef(null);
  const [expandedCards, setExpandedCards] = useState({ 0: true, 1: false, 2: false });

  const toggleCard = (idx) => {
    setExpandedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const trainingPillars = [
    {
      eyebrow: "ACADEMY 01 • FULL-SDLC SOFTWARE & POLYGLOT RESIDENCIES",
      icon: "school",
      title: "Polyglot Software & Full-SDLC Bootcamps",
      lead: "Hands-on, mentor-led engineering residencies that transform junior developers and transitioning analysts into production-ready full-stack engineers across our core enterprise codebases.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67",
      imageLeft: true,
      bullets: [
        "Backend & Systems Engineering: .NET 8 / ASP.NET Core, C#, Python (FastAPI/Django), and Java Spring Boot",
        "Frontend, Desktop & Mobile: React 19, TypeScript, Kotlin Android, C# WPF/WinUI, Python Kivy, and Python Flet",
        "Agile SDLC, Git workflows, automated unit/E2E testing, code review discipline, and C4 architecture modeling",
      ],
      quote:
        "Our internal IT staff completed Quinn Daisies' 12-week .NET Core, Python, and React bootcamp and immediately took ownership of three production microservices.",
      author: "Chief Information Officer • Regional Enterprise Partner",
    },
    {
      eyebrow: "ACADEMY 02 • CLOUD INFRASTRUCTURE, SRE & CYBER DEFENSE",
      icon: "cloud_done",
      title: "Cloud DevOps, SRE & Cybersecurity Academies",
      lead: "Equip your infrastructure and security teams with practical mastery of Kubernetes, Terraform IaC, CI/CD automation, and federal-grade zero-trust compliance.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
      imageLeft: false,
      bullets: [
        "Multi-Cloud Architecture Labs across AWS, Microsoft Azure, and Google Cloud Platform",
        "Docker containerization, Kubernetes cluster orchestration, Helm, and GitHub Actions CI/CD",
        "Cybersecurity readiness: NIST SP 800-171, CMMC 2.0, SOC 2, incident response, and OWASP secure coding",
      ],
      quote:
        "The live SRE war-room simulations prepared our operations team to cut Mean Time to Resolution (MTTR) by over 60%.",
      author: "VP of Cloud Infrastructure • Global Logistics Network",
    },
    {
      eyebrow: "ACADEMY 03 • ENTERPRISE AI GOVERNANCE & GOVCON ENABLEMENT",
      icon: "psychology",
      title: "AI Literacy, Prompt Engineering & Public-Sector Capacity Building",
      lead: "Tailored workforce upskilling programs for corporate executives, government agencies (Federal, Maryland eMMA, and UNGM field offices), and non-technical operational teams.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98",
      imageLeft: true,
      bullets: [
        "Executive AI Governance, Enterprise RAG workflows, and safe LLM utilization without data leakage",
        "Government & Multilateral Capacity Building aligned with Maryland state workforce grants and UNGM knowledge-transfer mandates",
        "Verifiable capstone projects, competency assessments, and continuing mentorship from Principal Engineers",
      ],
      quote:
        "Quinn Daisies delivered a bilingual technical capacity-building program that empowered our regional staff to operate and maintain the new digital trade platform independently.",
      author: "Program Director • Multilateral Trade & Capacity Initiative",
    },
  ];

  const curriculumTracks = [
    {
      name: ".NET Core & C# Mastery",
      summary: "ASP.NET Core Web APIs, Blazor, Entity Framework, WPF/WinUI 3 & .NET MAUI.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_auxrf1auxrf1auxr.jpg?alt=media&token=2058152e-78bd-4467-b7fa-efc20afc2cd7",
      to: "/software-development-and-engineering",
    },
    {
      name: "Python, AI, Kivy & Flet",
      summary: "FastAPI, PyTorch/RAG, plus cross-platform Kivy touch & Flet desktop/mobile apps.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_80vl5580vl5580vl.jpg?alt=media&token=7ad9d05f-306d-4243-b72f-2fb1db923f83",
      to: "/artificial-intelligence",
    },
    {
      name: "React & Modern Frontend",
      summary: "React 19, TypeScript, SSR, Core Web Vitals, Accessibility (Section 508) & Design Systems.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67",
      to: "/application-development",
    },
    {
      name: "Java Spring & Kotlin Mobile",
      summary: "Distributed JVM microservices, Kafka event streaming & native Kotlin Android fleets.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
      to: "/mobile-application-development",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      // 1. Hero Mosaic Entrance
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

      // 2. Alternating Training Pillars
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

      // 3. Curriculum Carousel Cards
      gsap.fromTo(
        ".alumni-community-carousel-grid .alumni-carousel-card",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".alumni-community-carousel-grid",
            start: "top 82%",
          },
        }
      );

      // 4. Underline accent sweep
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
        title="Workforce Development, Technical Training & Corporate Bootcamps | Quinn Daisies Technology"
        description="Corporate engineering bootcamps, public-sector workforce development, and hands-on technical training across .NET Core, C#, Python, React, Java, Kotlin, Kivy, Flet, AI, and Cloud DevOps."
        keywords="workforce development and training, corporate coding bootcamp, .NET Python React training, government workforce upskilling Maryland eMMA UNGM, IT training Frederick MD"
        canonicalUrl="/workforce-development-and-training"
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
              Quinn Daisies Workforce Development &amp; Technical Academy
            </span>
            <StripeTape210 />
          </div>

          <div className="hero-slides">
            <div className="glue-grid__col glue-grid__col--span-5">
              <h1
                className="glue-headline glue-headline--headline-1 hero-heading"
                style={{ marginBottom: 0 }}
              >
                Upskilling{" "}
                <span style={{ color: "#c86d10", display: "block" }}>
                  engineering teams,
                </span>
                <span className="decorated-text underline">together.</span>
              </h1>
            </div>

            <div className="glue-grid__col glue-grid__col--span-4">
              <div className="hero-image" style={{ height: 380 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98"
                  alt="Quinn Daisies Workforce Development and Engineering Bootcamp"
                />
              </div>
            </div>

            <div
              className="glue-grid__col glue-grid__col--span-3"
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <div className="hero-image" style={{ height: 182 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_auxrf1auxrf1auxr.jpg?alt=media&token=2058152e-78bd-4467-b7fa-efc20afc2cd7"
                  alt="Hands-On Pair Programming"
                />
              </div>
              <div className="hero-image" style={{ height: 182 }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_80vl5580vl5580vl.jpg?alt=media&token=7ad9d05f-306d-4243-b72f-2fb1db923f83"
                  alt="Cloud DevOps and Cyber Lab"
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
                We equip corporate engineering teams, government agencies, and emerging technologists with production
                mastery across{" "}
                <strong>
                  .NET Core, C#, Python, React, Java, Kotlin, Kivy, Flet, AI/RAG, and Cloud DevOps
                </strong>.
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
                <span>Enroll a Cohort</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
              <Link
                to="/workforce-development-and-it-support"
                className="ApplicationButton glue-button glue-button--medium-emphasis"
              >
                <span>IT Support &amp; Directory</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 2: HERO STATEMENT BANNER */}
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
            KNOWLEDGE TRANSFER &amp; OPERATIONAL OWNERSHIP
          </span>
          <h2 className="glue-headline glue-headline--headline-3 hero-description-content">
            Technology transformation only succeeds when your people can confidently architect, operate, and{" "}
            <span className="decorated-text underline">evolve the systems</span> we build together.
          </h2>
        </section>

        {/* SECTION 3: 3 ALTERNATING EXPANDABLE TRAINING CARDS + POST-IT QUOTES */}
        <section id="benefits-connect" className="benefits-connect alumni-ongoing-support">
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
                CORPORATE &amp; PUBLIC-SECTOR ACADEMIES
              </span>
              <h2 className="glue-headline glue-headline--headline-2">
                Mentor-led engineering{" "}
                <span className="decorated-text underline">residencies &amp; bootcamps</span>
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
                Each academy combines live Principal Architect code reviews, production sprint labs, and verifiable
                competency milestones tailored to your internal codebase.
              </p>
            </div>

            {trainingPillars.map((pillar, idx) => {
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
                        <span>{isExpanded ? "Show less details" : "Inspect curriculum & outcomes"}</span>
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

        {/* SECTION 4: CURRICULUM SHOWCASE */}
        <section className="alumni-community-section">
          <div className="glue-page">
            <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
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
                CORE TRAINING CURRICULA
              </span>
              <h2 className="glue-headline glue-headline--headline-2">
                Hands-on <span className="decorated-text underline">engineering tracks</span>
              </h2>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  maxWidth: 740,
                  margin: "16px auto 0",
                }}
              >
                Role-specific technical tracks spanning backend microservices, AI agent orchestration, modern React
                frontends, desktop HMIs, and native mobile fleets.
              </p>
            </div>

            <div className="alumni-community-carousel-grid">
              {curriculumTracks.map((card) => (
                <Link key={card.name} to={card.to} className="alumni-carousel-card">
                  <img src={card.img} alt={card.name} />
                  <div className="alumni-carousel-card-body">
                    <div>
                      <h3
                        className="glue-headline glue-headline--headline-5"
                        style={{ color: "#2b1600", marginBottom: 8 }}
                      >
                        {card.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "var(--qd-font-size-body, 1em)",
                          lineHeight: 1.6,
                          color: "#3b3b3b",
                          marginBottom: 16,
                        }}
                      >
                        {card.summary}
                      </p>
                    </div>
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "#c86d10",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span>Explore track</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: BOTTOM CALLOUT */}
        <div className="join-alumni join-alumni-container glue-text-center">
          <div style={{ maxWidth: 780, margin: "0 auto 40px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <StripeTape210 />
            </div>
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
              TAILORED COHORTS &amp; SLA COVERAGE
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Build a custom training or{" "}
              <span className="decorated-text underline">managed IT program</span>
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                maxWidth: 680,
                margin: "16px auto 28px",
              }}
            >
              Combine custom cohort training with 24/7 L1–L3 Managed IT Support and Government Contracting capacity
              building.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
                marginTop: 24,
              }}
            >
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Request Custom Training Syllabus</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
              <Link
                to="/workforce-development-and-it-support"
                className="ApplicationButton glue-button glue-button--medium-emphasis"
              >
                <span>Explore Managed IT Support</span>
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

export default WorkforceDevelopmentTrainingPage;
