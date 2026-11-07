import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  StripeTape91,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const WorkforceDevelopmentItSupport = () => {
  const containerRef = useRef(null);
  const [selectedTrackFilter, setSelectedTrackFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const directoryTracks = [
    {
      category: "Managed IT & Helpdesk",
      region: "24/7 Global SLA (L1 / L2 / L3)",
      title: "Enterprise Managed IT Support, Endpoint Security & NOC/SOC",
      stack: "Active Directory, Azure AD/Entra, Intune, Linux/Windows Server, Zero-Trust Networking",
      desc: "Proactive 24/7/365 helpdesk, workstation lifecycle management, network monitoring, disaster recovery, and cybersecurity incident response.",
    },
    {
      category: "Full SDLC & Cloud DevOps",
      region: "Cloud & Hybrid On-Prem",
      title: "Cloud DevOps, SRE & CI/CD Engineering Residency",
      stack: "Kubernetes, Docker, Terraform, GitHub Actions, AWS, Azure, Google Cloud, OpenTelemetry",
      desc: "Upskill internal IT operations teams into Site Reliability Engineers (SREs) while automating infrastructure-as-code and zero-downtime releases.",
    },
    {
      category: ".NET Core / C# / Java",
      region: "Enterprise Backend Track",
      title: ".NET Core, ASP.NET, C# & Java Spring Boot Architecture Bootcamp",
      stack: ".NET 8/9, ASP.NET Core, C#, Entity Framework, Java 21, Spring Boot, Kafka, SQL Server",
      desc: "Intensive hands-on engineering cohorts teaching clean architecture, microservices, unit testing, and high-concurrency API design.",
    },
    {
      category: "Python / AI / Kivy / Flet",
      region: "AI & Cross-Platform Track",
      title: "Python AI Automation, Kivy & Flet Desktop/Mobile Engineering Track",
      stack: "Python 3.12, FastAPI, Django, LangChain/RAG, Kivy, Flet, PyTest, PostgreSQL",
      desc: "Train your technical workforce to build autonomous AI workflows, ETL pipelines, and cross-platform Kivy & Flet desktop/mobile applications.",
    },
    {
      category: "React / JS / Kotlin Mobile",
      region: "Frontend & Mobile Track",
      title: "Modern Web (React/JS) & Native Mobile (Kotlin) Engineering Track",
      stack: "React 19, JavaScript, TypeScript, Kotlin, Jetpack Compose, Android SDK, Playwright",
      desc: "Equip frontend and mobile developers to ship accessible, sub-second React web apps and offline-first Kotlin Android enterprise fleets.",
    },
    {
      category: "Managed IT & Helpdesk",
      region: "Dedicated Staff Augmentation",
      title: "Embedded Principal Engineers, QA Automation & Scrum Pods",
      stack: "Full SDLC, Agile Scrum/Kanban, DevSecOps, Automated QA, Legacy Modernization",
      desc: "Embed vetted Quinn Daisies senior engineers, solution architects, and IT support specialists directly into your internal teams.",
    },
  ];

  const trackFilters = [
    "All",
    "Managed IT & Helpdesk",
    "Full SDLC & Cloud DevOps",
    ".NET Core / C# / Java",
    "Python / AI / Kivy / Flet",
    "React / JS / Kotlin Mobile",
  ];

  const filteredDirectory = directoryTracks.filter((item) => {
    const matchesCat = selectedTrackFilter === "All" || item.category === selectedTrackFilter;
    const matchesQuery =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.stack.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const storyCards = [
    {
      label: "Workforce Upskilling • .NET Core & React",
      title: "How a 120-person enterprise IT department modernized legacy ERP systems to ASP.NET Core C# & React",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60",
    },
    {
      label: "24/7 Managed IT & Cloud DevOps",
      title: "Achieving 99.99% uptime and 68% faster incident resolution with Quinn Daisies NOC & Kubernetes SRE",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b",
    },
    {
      label: "Python AI, Kivy & Flet Desktop",
      title: "Deploying offline-capable Python Flet & Kivy warehouse desktop terminals across 18 regional hubs",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_vqyaewvqyaewvqya.jpg?alt=media&token=9f82c276-ae95-4e6b-9964-3c7b324fa358",
    },
    {
      label: "Kotlin Mobile & Java Microservices",
      title: "Training field engineering squads to maintain Kotlin Android scanners and Java Spring Boot APIs",
      image:
        "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ksm6tbksm6tbksm6.jpg?alt=media&token=0a33b5f6-7d28-4f52-bc3b-e42778a0984c",
    },
  ];

  const faqs = [
    {
      q: "What is included in Quinn Daisies Workforce Development & IT Support?",
      a: (
        <div>
          <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
            Our program unifies <strong>24/7 Managed IT Support (L1–L3 Helpdesk, Infrastructure &amp; Security)</strong>{" "}
            with <strong>Hands-On Engineering Workforce Development</strong> across the full Software Development Life
            Cycle (SDLC):
          </p>
          <ul>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>Managed IT &amp; Systems Administration:</strong> Workstation/server patching, Microsoft 365 &amp;
              Google Workspace governance, network firewall security, backup/disaster recovery, and SLA-backed helpdesk.
            </li>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>Polyglot Developer &amp; Architect Bootcamps:</strong> Role-based corporate training in{" "}
              <strong>.NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet</strong>.
            </li>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>Cloud DevOps &amp; AI Enablement:</strong> Practical labs on Docker, Kubernetes, Terraform, CI/CD
              automation, and enterprise AI agent deployment.
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "How do your corporate engineering bootcamps and pair-programming residencies work?",
      a: (
        <div>
          <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
            Unlike generic video courses, Quinn Daisies Principal Engineers work side-by-side with your staff directly
            on your real-world codebases and architecture challenges:
          </p>
          <ul>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>Phase 1 — Skills &amp; Codebase Audit:</strong> We evaluate your team&apos;s current proficiency
              and architectural bottlenecks across Backend, Frontend, Desktop, Mobile, and DevOps.
            </li>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>Phase 2 — Guided Architecture &amp; Sprint Labs:</strong> Weekly code reviews, pair-programming
              sessions, automated testing workshops, and CI/CD pipeline implementation.
            </li>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>Phase 3 — Certification &amp; Runbook Handover:</strong> Your team graduates with production-ready
              systems, internal documentation, and verified engineering competency.
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "Which programming languages, frameworks, and platforms do you support and train?",
      a: (
        <div>
          <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
            We provide both managed production support and workforce training across our full polyglot stack:
          </p>
          <ul>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>.NET &amp; C# Ecosystem:</strong> .NET Core (.NET 8/9), ASP.NET Core Web API/MVC, Blazor, C# WPF,
              WinUI 3, and .NET MAUI Desktop/Mobile.
            </li>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>Python Ecosystem:</strong> FastAPI, Django, AI/LLM Agents, RAG pipelines, Data Engineering,{" "}
              <strong>Kivy</strong> multi-touch apps, and <strong>Flet</strong> Desktop/Web/Mobile suites.
            </li>
            <li style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
              <strong>Web &amp; JVM Ecosystem:</strong> React, JavaScript/TypeScript, Node.js, Java Spring Boot, and
              native <strong>Kotlin</strong> Android &amp; Multiplatform.
            </li>
          </ul>
        </div>
      ),
    },
    {
      q: "Can Quinn Daisies provide dedicated staff augmentation or co-managed IT pods?",
      a: (
        <div>
          <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
            Yes. Whether you need a single Principal .NET/Python Architect, a 24/7 L1–L3 IT Helpdesk pod, or a complete
            full-SDLC squad (Backend, Frontend, Mobile, QA, and DevOps), our engineers integrate seamlessly into your
            Slack/Teams, Jira, and Git workflows under strict enterprise SLAs.
          </p>
        </div>
      ),
    },
    {
      q: "How do we get started with an IT Support SLA or Workforce Training cohort?",
      a: (
        <div>
          <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65 }}>
            Click <strong>Apply for Workforce &amp; IT Assessment</strong> or contact our engineering team. Within 48
            hours, our Principal Architects will conduct a complimentary infrastructure &amp; skills discovery session
            and deliver a tailored SLA and curriculum proposal.
          </p>
        </div>
      ),
    },
  ];

  const stayInTouchChannels = [
    { title: "24/7 IT Helpdesk", sub: "L1–L3 SLA Support", link: "/technology-contact-us", icon: "support_agent" },
    { title: "Full SDLC Squads", sub: "Software Engineering", link: "/software-development-and-engineering", icon: "code_blocks" },
    { title: "Cloud & Visibility", sub: "DevOps & Scale", link: "/technology-and-visibility", icon: "cloud_done" },
    { title: "AI & App Dev Kit", sub: "Agents, Web, Mobile & Desktop", link: "/ai-and-application-development", icon: "smart_toy" },
    { title: "SEO & Growth", sub: "Digital Marketing Catalog", link: "/seo-and-digital-marketing", icon: "monitoring" },
    { title: "Book Discovery", sub: "Architecture Consultation", link: "/technology-contact-us", icon: "calendar_month" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      // 1. Hero entrance
      gsap.fromTo(
        ".accelerators-hero .devsite-landing-row-header-text > *",
        { y: 26, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      // 2. 50/50 Feature Rows
      gsap.utils.toArray(".devsite-50-50-grid").forEach((grid) => {
        gsap.fromTo(
          grid.children,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 80%",
            },
          }
        );
      });

      // 3. 3-Up Pillars (Focus, Benefits, Impact)
      gsap.fromTo(
        ".devsite-3-up-grid .devsite-3-up-item",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".devsite-3-up-grid",
            start: "top 82%",
          },
        }
      );

      // 4. 4-Up Story Cards
      gsap.fromTo(
        ".devsite-4-up-cards .devsite-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".devsite-4-up-cards",
            start: "top 82%",
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
    <div ref={containerRef} className="qd-google-page devsite-landing-page">
      <SEO
        title="Workforce Development & IT Support | Managed IT, Corporate Training & Engineering Accelerators"
        description="Quinn Daisies Workforce Development & IT Support: 24/7 Managed IT Support, Cloud DevOps SRE, and hands-on engineering training across .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet."
        keywords="Workforce Development and IT Support, Managed IT Support, Corporate Developer Training, Full SDLC, .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, Flet"
        url="/workforce-development-and-it-support"
      />

      {/* DevSite Breadcrumb & Top Tape Bar */}
      <div className="devsite-breadcrumb-bar" aria-label="Breadcrumb">
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <Link to="/">Home</Link>
          <span>&rsaquo;</span>
          <Link to="/technology-and-visibility">Technology &amp; IT Solutions</Link>
          <span>&rsaquo;</span>
          <span style={{ color: "#2b1600", fontWeight: 500 }}>Workforce Development &amp; IT Support</span>
        </div>
        <div className="hero-tape-accent" aria-hidden="true">
          <StripeTape210 />
        </div>
      </div>

      {/* ROW 1: CENTERED DEVSITE HERO */}
      <section className="devsite-landing-row accelerators-hero">
        <div className="devsite-landing-row-inner">
          <div className="devsite-landing-row-header-text">
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span
                style={{
                  background: "#fff3e3",
                  color: "#2b1600",
                  border: "1px solid rgba(249, 161, 68, 0.45)",
                  padding: "6px 16px",
                  borderRadius: 999,
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                24/7 NOC HELPDESK • CLOUD DEVOPS SRE • FULL-SDLC WORKFORCE BOOTCAMPS
              </span>
            </div>

            <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
              Quinn Daisies Workforce Development &amp;{" "}
              <span className="decorated-text underline">IT Support Accelerators</span>
            </h1>

            <p
              className="devsite-landing-row-description"
              style={{
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                color: "#3b3b3b",
                marginBottom: 32,
              }}
            >
              Empower your enterprise with <strong>24/7/365 Managed IT Support, Cloud DevOps SRE</strong>, and
              intensive <strong>Full-SDLC Engineering Workforce Development</strong> across{" "}
              <strong>.NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet</strong>.
            </p>

            <div className="devsite-landing-row-cta">
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Apply for Workforce &amp; IT Assessment</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
              <a
                href="#accelerator-directory"
                className="ApplicationButton glue-button glue-button--medium-emphasis"
              >
                <span>Find a training or support track</span>
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 2: 50/50 1-UP FEATURE ROW (Impact Report) */}
      <section className="devsite-landing-row">
        <div className="devsite-landing-row-inner">
          <div className="devsite-50-50-grid">
            <div className="devsite-50-col">
              <div className="cloud-floating-photo-card">
                <div className="cloud-floating-photo-tape">
                  <StripeTape83 fill="#f9a144" />
                </div>
                <div className="devsite-item-media">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_80vl5580vl5580vl.jpg?alt=media&token=7ad9d05f-306d-4243-b72f-2fb1db923f83"
                    alt="Quinn Daisies Workforce Development and Managed IT Impact Report"
                  />
                </div>
                <div style={{ marginTop: -12, marginLeft: 28 }}>
                  <StripeTape91 fill="#2b1600" />
                </div>
              </div>
            </div>

            <div className="devsite-50-col devsite-landing-row-item-description">
              <span
                className="glue-eyebrow"
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  color: "#c86d10",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                ENTERPRISE PERFORMANCE BENCHMARK
              </span>
              <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 18 }}>
                Enterprise Workforce &amp;{" "}
                <span className="decorated-text underline">Managed IT Impact Report</span>
              </h2>
              <p
                style={{
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  color: "#3b3b3b",
                  marginBottom: 24,
                }}
              >
                Discover how Quinn Daisies Technology transforms internal IT departments and engineering teams—reducing
                unplanned downtime by 94%, accelerating SDLC deployment velocity by 3.4x, and upskilling teams across
                modern Cloud, AI, Desktop, Web, and Mobile codebases.
              </p>
              <Link
                to="/technology-contact-us"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Request Full Impact Benchmark</span>
                <span className="material-symbols-outlined">memory</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 3: 3-UP TEXT COLUMNS (Focus, Benefits, Impact) */}
      <section
        className="devsite-landing-row"
        style={{ background: "#fff7ef", borderTop: "1px solid #e6ddd3", borderBottom: "1px solid #e6ddd3" }}
      >
        <div className="devsite-landing-row-inner">
          <div className="devsite-3-up-grid">
            <div className="devsite-3-up-item">
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#2b1600",
                  color: "#f9a144",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#f9a144" }}>
                  center_focus_strong
                </span>
              </div>
              <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 12 }}>
                Focus
              </h3>
              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b", margin: 0 }}>
                Quinn Daisies Workforce Development &amp; IT Support bridges the gap between day-to-day infrastructure
                stability and advanced software engineering. We support your mission-critical servers, endpoints, and
                cloud networks while training your developers across the full SDLC.
              </p>
            </div>

            <div className="devsite-3-up-item">
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#2b1600",
                  color: "#f9a144",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#f9a144" }}>
                  verified
                </span>
              </div>
              <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 12 }}>
                Benefits
              </h3>
              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b", margin: 0 }}>
                Partner organizations receive SLA-guaranteed L1–L3 IT helpdesk coverage, proactive cybersecurity &amp;
                DevSecOps monitoring, dedicated Principal Architect mentorship, and customized bootcamps in{" "}
                <strong>.NET Core, C#, Python, React, Java, Kotlin, Kivy, and Flet</strong>.
              </p>
            </div>

            <div className="devsite-3-up-item">
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "#2b1600",
                  color: "#f9a144",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 22, color: "#f9a144" }}>
                  trending_up
                </span>
              </div>
              <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 12 }}>
                Impact
              </h3>
              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b", margin: 0 }}>
                Your workforce gains self-sufficiency in modern Cloud DevOps, AI automation, and multi-platform
                application engineering—while your executive team enjoys predictable IT costs, zero-downtime
                operations, and complete documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 4: 2-UP 50/50 MEDIA + TEXT ("An accelerator for every team") */}
      <section className="devsite-landing-row">
        <div className="devsite-landing-row-inner">
          <div className="devsite-50-50-grid">
            <div className="devsite-50-col">
              <div className="cloud-floating-photo-card">
                <div className="cloud-floating-photo-tape">
                  <StripeTape83 fill="#c86d10" />
                </div>
                <div className="devsite-item-media">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67"
                    alt="Polyglot Engineering Residency and IT Support"
                  />
                </div>
                <div style={{ marginTop: -12, marginRight: 28, display: "flex", justifyContent: "flex-end" }}>
                  <StripeTape91 fill="#c86d10" />
                </div>
              </div>
            </div>

            <div className="devsite-50-col devsite-landing-row-item-description">
              <span
                className="glue-eyebrow"
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  color: "#c86d10",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: 10,
                }}
              >
                TAILORED POLYGLOT ENABLEMENT
              </span>
              <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 18 }}>
                An engineering &amp; IT support accelerator{" "}
                <span className="decorated-text underline">for every team</span>
              </h2>
              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                Quinn Daisies tailors every engagement to your organization&apos;s exact technology stack and
                operational maturity. From 24/7 managed helpdesk and cloud migration to advanced developer residencies,
                we meet your team where they are.
              </p>
              <p style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b", marginBottom: 24 }}>
                Our curriculum and support coverage span <strong>Backend</strong> (.NET Core, ASP.NET, C#, Java Spring
                Boot, Python FastAPI/Django), <strong>Frontend Web</strong> (React, JavaScript, TypeScript),{" "}
                <strong>Desktop Applications</strong> (C# WPF/MAUI, Python Kivy &amp; Flet),{" "}
                <strong>Mobile Fleets</strong> (Kotlin, Flet, Kivy), and <strong>Cloud DevOps</strong>.
              </p>
              <a
                href="#accelerator-directory"
                className="ApplicationButton glue-button glue-button--high-emphasis"
              >
                <span>Explore Support &amp; Training Tracks</span>
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROW 5: 1-UP 100% INTERACTIVE DIRECTORY / TRACK FINDER */}
      <section id="accelerator-directory" className="devsite-landing-row">
        <div className="devsite-landing-row-inner">
          <div style={{ marginBottom: 28, maxWidth: 820 }}>
            <span
              className="glue-eyebrow"
              style={{
                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                color: "#c86d10",
                fontWeight: 600,
                letterSpacing: "0.06em",
                display: "block",
                marginBottom: 10,
              }}
            >
              INTERACTIVE CURRICULUM &amp; SLA DIRECTORY
            </span>
            <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 12 }}>
              Find a Workforce &amp; IT Support Track{" "}
              <span className="decorated-text underline">for Your Stack</span>
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Filter by technology domain or search by codebase (.NET Core, C#, Python, Kivy, Flet, React, Kotlin,
              Java, Cloud DevOps, Managed IT):
            </p>
          </div>

          <div className="devsite-directory-box">
            <div className="devsite-directory-toolbar">
              <div className="devsite-directory-tabs" role="tablist">
                {trackFilters.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    aria-selected={selectedTrackFilter === tab}
                    className={`devsite-directory-tab ${selectedTrackFilter === tab ? "active" : ""}`}
                    onClick={() => setSelectedTrackFilter(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <input
                type="search"
                className="devsite-directory-search"
                placeholder="Search stack (e.g. Kivy, .NET, Kotlin)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search workforce and IT support tracks"
              />
            </div>

            <div className="devsite-directory-grid">
              {filteredDirectory.map((item) => (
                <div key={item.title} className="devsite-directory-card">
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 8,
                        marginBottom: 12,
                      }}
                    >
                      <span className="community-story-label" style={{ marginBottom: 0 }}>
                        {item.category}
                      </span>
                      <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", color: "#6b625b" }}>
                        {item.region}
                      </span>
                    </div>
                    <h3
                      className="glue-headline glue-headline--headline-5"
                      style={{ color: "#2b1600", marginBottom: 10 }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "var(--qd-font-size-body, 1em)",
                        lineHeight: 1.6,
                        color: "#3b3b3b",
                        marginBottom: 14,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: "1px solid #e6ddd3", paddingTop: 14, marginTop: 8 }}>
                    <div
                      style={{
                        fontSize: "var(--qd-font-size-eyebrow, 0.82em)",
                        lineHeight: 1.5,
                        color: "#2b1600",
                        marginBottom: 14,
                      }}
                    >
                      <strong>Stack:</strong> {item.stack}
                    </div>
                    <Link
                      to="/technology-contact-us"
                      className="devsite-btn devsite-btn-secondary"
                      style={{ width: "100%" }}
                    >
                      <span>Request Track Syllabus &amp; SLA</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 17 }}>
                        memory
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROW 6: 4-UP STORY CARDS */}
      <section
        className="devsite-landing-row"
        style={{ background: "#faf6f2", borderTop: "1px solid #e6ddd3", borderBottom: "1px solid #e6ddd3" }}
      >
        <div className="devsite-landing-row-inner">
          <div className="devsite-row-header-flex">
            <div style={{ maxWidth: 740 }}>
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
                ENTERPRISE TRANSFORMATION STORIES
              </span>
              <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 10 }}>
                Workforce &amp; IT{" "}
                <span className="decorated-text underline">Transformation Stories</span>
              </h2>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                See how enterprise teams partner with Quinn Daisies to modernize codebases and stabilize IT operations.
              </p>
            </div>
            <Link
              to="/technology-contact-us"
              className="ApplicationButton glue-button glue-button--high-emphasis"
            >
              <span>Partner with us</span>
              <span className="material-symbols-outlined">memory</span>
            </Link>
          </div>

          <div className="devsite-4-up-cards">
            {storyCards.map((card) => (
              <div key={card.title} className="devsite-card">
                <div className="devsite-card-media">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="devsite-card-body">
                  <span className="community-story-label">{card.label}</span>
                  <h3>
                    {card.title}
                  </h3>
                  <div>
                    <Link
                      to="/technology-contact-us"
                      className="devsite-btn devsite-btn-flat"
                      style={{ display: "inline-flex", alignItems: "center", gap: 6, paddingLeft: 0 }}
                    >
                      <span>Read case study</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16, color: "#c86d10" }}>
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="devsite-landing-row launchpad-faq">
        <div className="devsite-landing-row-inner">
          <div style={{ marginBottom: 28 }}>
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
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="glue-headline glue-headline--headline-2" style={{ marginBottom: 0 }}>
              Workforce &amp; Managed IT{" "}
              <span className="decorated-text underline">FAQs</span>
            </h2>
          </div>

          <div>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={faq.q} className="devsite-expandable">
                  <button
                    type="button"
                    className="devsite-expandable-header"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  >
                    <span>{faq.q}</span>
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: 22,
                        color: "#c86d10",
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                      }}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && <div className="devsite-expandable-body">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkforceDevelopmentItSupport;
