import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
  GreenTickSvg,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const TechnologyProgramsPage = () => {
  const containerRef = useRef(null);

  const promoPrograms = [
    {
      bannerHeadline: "Started by you. Accelerated with Quinn Daisies.",
      eyebrow: "PROGRAM 01 • FULL-SDLC CO-ENGINEERING ACCELERATOR",
      icon: "rocket_launch",
      title: "Solve your hardest software & architectural challenges with Principal Engineer support",
      desc: "Our flagship Full-SDLC Accelerator pairs your product or operations team with Quinn Daisies Principal Architects and senior polyglot engineers across .NET Core, ASP.NET, C#, Python, React, Java, Kotlin, Kivy, and Flet.",
      bullets: [
        "10-to-16 week intensive architecture, refactoring, or greenfield product launch sprints",
        "Dedicated C4 system blueprints, CI/CD pipeline automation, and production Kubernetes deployment",
        "Seamless handover or ongoing 24/7 SRE co-management",
      ],
      ctaLabel: "Explore Software Engineering Track",
      ctaTo: "/software-development-and-engineering",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_3kz8z63kz8z63kz8.jpg?alt=media&token=1e0442c2-4145-4878-b6e9-6d9924b2292f",
      imageLeft: true,
    },
    {
      bannerHeadline: "Government & multilateral contract capture support",
      eyebrow: "PROGRAM 02 • SAM.GOV, MARYLAND eMMA & UNGM CAPTURE PROGRAM",
      icon: "gavel",
      title: "About the Government Contracting & Shipley Proposal Program",
      desc: "Designed for organizations bidding on U.S. Federal (SAM.gov), State of Maryland (eMMA / CATS+ / MBE-VSBE), and United Nations (UNGM) tenders. We provide end-to-end capture management, Shipley proposal writing, and technical execution.",
      bullets: [
        "Opportunity readiness assessments, Sources Sought / RFI shaping, and Prime/Sub teaming agreements",
        "Full Volume I–IV proposal engineering with Pink, Red, and Gold Team compliance reviews",
        "Turnkey technical delivery across software, AI, cloud infrastructure, and global logistics",
      ],
      ctaLabel: "Explore Contract Procurement & Writing",
      ctaTo: "/contract-procurement-and-writing",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98",
      imageLeft: false,
    },
    {
      bannerHeadline: "Build a defensible AI & Cloud core",
      eyebrow: "PROGRAM 03 • AI IMMERSION & CLOUD MODERNIZATION",
      icon: "psychology",
      title: "About the Enterprise AI, RAG & Multi-Cloud Immersion Program",
      desc: "A two-phased program moving organizations beyond AI theory into production Agentic AI workflows, citation-verified Enterprise RAG, and zero-trust multi-cloud infrastructure.",
      bullets: [
        "Phase 1: Data readiness, vector search (pgvector/Qdrant), and sovereign/GovCloud LLM sandboxing",
        "Phase 2: Production integration into Python FastAPI, C# Semantic Kernel, React, Kotlin, Kivy, and Flet apps",
        "Includes automated SEO & Generative Engine Optimization (GEO) for AI answer visibility",
      ],
      ctaLabel: "Explore AI & Cloud Programs",
      ctaTo: "/artificial-intelligence",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa",
      imageLeft: true,
    },
    {
      bannerHeadline: "From Quinn Daisies to your workforce",
      eyebrow: "PROGRAM 04 • CORPORATE ENGINEERING SCHOOL & IT RESIDENCY",
      icon: "school",
      title: "About the Workforce Development & Managed IT Academy",
      desc: "A comprehensive series of guided technical bootcamps, live architecture labs, and managed IT support partnerships designed to equip commercial and public-sector teams with lasting internal capability.",
      bullets: [
        "Instructor-led tracks in .NET Core, C#, Python, React, Java, Kotlin, Kivy, Flet, and Cloud DevSecOps",
        "Aligned with Maryland workforce development initiatives and UNGM capacity-building requirements",
        "Backed by our 24/7/365 L1–L3 Managed IT Helpdesk and NOC/SOC escalation engineers",
      ],
      ctaLabel: "Explore Workforce & Training",
      ctaTo: "/workforce-development-and-training",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67",
      imageLeft: false,
    },
  ];

  const additionalOpportunities = [
    {
      title: "Architecture Deep-Dives & Technical Workshops",
      desc: "Join our Principal Architects for hands-on sessions covering .NET 8 microservices, Python RAG pipelines, and Kivy/Flet industrial UI engineering.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
      to: "/technology-corporate-review",
    },
    {
      title: "AI & GEO Growth Sprints",
      desc: "Rapid 4-week sprints to deploy Enterprise RAG assistants or overhaul your JSON-LD Knowledge Graph for Google AI Overviews and ChatGPT Search.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_c4bf6ac4bf6ac4bf.jpg?alt=media&token=8ae19566-5ea0-4cde-892b-268cd74f7b34",
      to: "/seo-and-geo",
    },
    {
      title: "SAM.gov, Maryland eMMA & UNGM Teaming Desk",
      desc: "Partner with Quinn Daisies as a Prime or specialized technical Subcontractor on upcoming federal, state, and multilateral solicitations.",
      img: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b",
      to: "/contract-procurement-and-writing",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      heroTl
        .fromTo(
          ".accelerator-hero-section .accelerator-hero-center > *",
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }
        )
        .fromTo(
          ".accelerator-hero-section .floating-media-card--top",
          { y: 32, x: -20, opacity: 0 },
          { y: 0, x: 0, opacity: 1, duration: 0.8 },
          "-=0.45"
        )
        .fromTo(
          ".accelerator-hero-section .floating-media-card--bottom",
          { y: 40, x: 20, opacity: 0 },
          { y: 0, x: 0, opacity: 1, duration: 0.8 },
          "-=0.65"
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

      gsap.fromTo(
        ".promo-2up-section",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#program-tracks",
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

  return (
    <div ref={containerRef} className="quinn-tech-google-root">
      <SEO
        title="Technology Programs, Accelerators & GovCon Capture Tracks | Quinn Daisies Technology"
        description="Explore Quinn Daisies Technology Programs: Full-SDLC Co-Engineering Accelerator, SAM.gov / Maryland eMMA / UNGM Contract Capture Program, Enterprise AI Immersion, and Workforce Academy."
        keywords="technology programs, software accelerator, government contracting program SAM.gov eMMA UNGM, AI immersion program, workforce training program, Quinn Daisies Technology"
        canonicalUrl="/technology-programs"
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
            QUINN DAISIES TECHNOLOGY PROGRAMS &amp; INITIATIVES • ACCELERATORS • GOVCON CAPTURE
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 3-IMAGE FLOATING HERO (Cloned from AiApplicationDevelopment / MobileApplicationPage) */}
      <section className="accelerator-hero-section">
        <div className="accelerator-hero-floating-grid">
          <div className="floating-media-card floating-media-card--top">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ksm6tbksm6tbksm6.jpg?alt=media&token=0a33b5f6-7d28-4f52-bc3b-e42778a0984c"
              alt="Full-SDLC Co-Engineering Sprint"
            />
            <div className="floating-media-caption">
              <strong>Full-SDLC Co-Engineering</strong>
              .NET Core, Python, React, Java, Kotlin, Kivy &amp; Flet
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
                QUINN DAISIES TECHNOLOGY PROGRAMS &amp; INITIATIVES
              </span>
            </div>

            <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
              Programs to take your{" "}
              <span className="decorated-text underline">enterprise further</span>
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
              Quinn Daisies Technology offers structured programs and co-engineering initiatives to connect commercial
              enterprises and government agencies with the right Principal Architects, products, and technical best
              practices to scale.
            </p>

            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 14 }}>
              <a
                href="#program-tracks"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Find Programs Available to You</span>
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--medium-emphasis"
              >
                <span>Apply / Request Briefing</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
            </div>
          </div>

          <div className="floating-media-card floating-media-card--bottom">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98"
              alt="Government Contract Capture Desk"
            />
            <div className="floating-media-caption">
              <strong>GovCon &amp; Multilateral Capture</strong>
              SAM.gov • Maryland eMMA • UNGM Proposal Desk
            </div>
          </div>
        </div>
      </section>

      <div className="programs">
        {/* SECTION 2: 4 ALTERNATING 2-UP PROGRAM SHOWCASE SECTIONS */}
        <div id="program-tracks">
          {promoPrograms.map((prog, idx) => (
            <section key={prog.title} className="promo-2up-section">
              <div className="glue-page">
                <h2
                  className={
                    idx === 0
                      ? "custom-headline-2up-headline glue-headline glue-headline--headline-2"
                      : "financial-support-1up-headline glue-headline glue-headline--headline-2"
                  }
                >
                  {prog.bannerHeadline}
                </h2>

                <div className="glue-grid" style={{ alignItems: "center" }}>
                  {prog.imageLeft && (
                    <div className="glue-grid__col glue-grid__col--span-5">
                      <div className="cloud-floating-photo-card">
                        <div className="cloud-floating-photo-tape">
                          <StripeTape83 fill="#f9a144" />
                        </div>
                        <img
                          src={prog.img}
                          alt={prog.title}
                          style={{ height: 360, width: "100%", objectFit: "cover", borderRadius: 16 }}
                        />
                        <div style={{ marginTop: -12, marginLeft: 24 }}>
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
                        {prog.icon}
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
                      {prog.eyebrow}
                    </span>
                    <h3
                      className="glue-headline glue-headline--headline-4 promo-2up-content-headline"
                      style={{ marginBottom: 16 }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      style={{
                        color: "#3b3b3b",
                        fontSize: "var(--qd-font-size-body, 1em)",
                        lineHeight: 1.65,
                        marginBottom: 20,
                      }}
                    >
                      {prog.desc}
                    </p>
                    <ul className="cloud-standards-list">
                      {prog.bullets.map((b) => (
                        <li key={b}>
                          <GreenTickSvg />
                          <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: 24 }}>
                      <Link
                        to={prog.ctaTo}
                        className="ApplicationButton glue-button glue-button--high-emphasis"
                      >
                        <span>{prog.ctaLabel}</span>
                        <span className="material-symbols-outlined">memory</span>
                      </Link>
                    </div>
                  </div>

                  {!prog.imageLeft && (
                    <div className="glue-grid__col glue-grid__col--span-5">
                      <div className="cloud-floating-photo-card">
                        <div className="cloud-floating-photo-tape">
                          <StripeTape83 fill="#c86d10" />
                        </div>
                        <img
                          src={prog.img}
                          alt={prog.title}
                          style={{ height: 360, width: "100%", objectFit: "cover", borderRadius: 16 }}
                        />
                        <div style={{ marginTop: -12, marginRight: 24, display: "flex", justifyContent: "flex-end" }}>
                          <StripeTape91 fill="#c86d10" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* SECTION 3: EVENTS, PROCUREMENT & OPPORTUNITIES */}
        <div className="program-page-1up-section">
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
            EVENTS, SPRINTS &amp; CONTRACTING OPPORTUNITIES
          </span>
          <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 12 }}>
            Other <span className="decorated-text underline">events and opportunities</span>
          </h2>
          <p
            style={{
              color: "#3b3b3b",
              fontSize: "var(--qd-font-size-body-large, 1.15em)",
              lineHeight: 1.7,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            In addition to Quinn Daisies Technology&apos;s core programs, explore technical workshops, rapid AI/GEO
            sprints, and government teaming opportunities.
          </p>
        </div>

        <section className="card-list-a glue-page">
          <ul className="glue-grid series-cards">
            {additionalOpportunities.map((item) => (
              <li key={item.title} className="glue-grid__col glue-grid__col--span-4">
                <Link to={item.to} className="animated-card">
                  <div className="glue-card__asset">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="glue-card__content">
                    <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 10 }}>
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: "#3b3b3b",
                        fontSize: "var(--qd-font-size-body, 1em)",
                        lineHeight: 1.65,
                        flexGrow: 1,
                      }}
                    >
                      {item.desc}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
                      <span
                        style={{
                          fontWeight: 600,
                          fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          color: "#c86d10",
                        }}
                      >
                        Explore track
                      </span>
                      <span className="glue-circle-arrow-btn">
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TechnologyProgramsPage;
