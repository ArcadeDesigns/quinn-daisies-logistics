import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SEO from "../components/SEO";
import {
  StripeTape210,
  StripeTape83,
  GreenTickSvg,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const TechnologyContactUsPage = () => {
  const containerRef = useRef(null);
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    organization: "",
    inquiryType: "SAM.gov / Maryland eMMA / UNGM Contract & Proposal Writing",
    primaryStack: "Full-SDLC Polyglot (.NET Core, C#, Python, React, Java, Kotlin, Kivy, Flet)",
    solicitationOrTimeline: "",
    projectSummary: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cloud-hero-section .glue-grid__col:first-child > *",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
      );

      gsap.fromTo(
        ".cloud-hero-section .glue-grid__col:last-child > *",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 }
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

  const labelStyle = {
    display: "block",
    fontWeight: 600,
    fontSize: "var(--qd-font-size-eyebrow, 0.82em)",
    letterSpacing: "0.03em",
    marginBottom: 6,
    color: "#2b1600",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: 10,
    border: "1px solid rgba(43,22,0,0.25)",
    fontSize: "var(--qd-font-size-body, 1em)",
    background: "#ffffff",
    color: "#1e1e1e",
    fontFamily: "inherit",
  };

  return (
    <div ref={containerRef} className="quinn-tech-google-root">
      <SEO
        title="Contact Quinn Daisies Technology & RFP Desk | Frederick, MD & Global"
        description="Contact Quinn Daisies Technology & IT for custom software engineering (.NET Core, C#, Python, React, Java, Kotlin, Kivy, Flet), AI/RAG, and SAM.gov / Maryland eMMA / UNGM contract proposal writing."
        keywords="contact Quinn Daisies Technology, RFP proposal desk SAM.gov Maryland eMMA UNGM, software engineering consultation Frederick MD, IT support contact"
        canonicalUrl="/technology-contact-us"
      />

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
            QUINN DAISIES TECHNOLOGY &amp; IT • ENGINEERING CONSULTATION &amp; RFP CAPTURE DESK
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 2-COLUMN CONTACT & RFP PORTAL */}
      <section className="cloud-hero-section accelerator-landing-hero">
        <div className="glue-page">
          <div className="glue-grid" style={{ alignItems: "flex-start" }}>
            {/* Left Column: Direct Engineering & Contracting Desks */}
            <div className="glue-grid__col glue-grid__col--span-5">
              <div style={{ marginBottom: 16 }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#fff3e3",
                    color: "#2b1600",
                    border: "1px solid rgba(249, 161, 68, 0.45)",
                    padding: "6px 16px",
                    borderRadius: 999,
                    fontWeight: 500,
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    letterSpacing: "0.06em",
                  }}
                >
                  DIRECT ENGINEERING &amp; GOVCON DESK
                </span>
              </div>
              <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
                Let&apos;s architect your{" "}
                <span className="decorated-text underline">next breakthrough</span>
              </h1>
              <p
                style={{
                  color: "#3b3b3b",
                  fontSize: "var(--qd-font-size-body-large, 1.15em)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Whether you are responding to a time-sensitive <strong>SAM.gov, Maryland eMMA, or UNGM</strong>{" "}
                solicitation, launching an AI/RAG platform, or modernizing web, desktop, and mobile software — our
                Principal Architects respond within 4 business hours.
              </p>

              <div
                style={{
                  background: "#fff7ef",
                  border: "1px solid rgba(249, 161, 68, 0.45)",
                  borderRadius: 18,
                  padding: 28,
                  marginBottom: 24,
                }}
              >
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 14 }}>
                  Quinn Daisies Technology Headquarters
                </h3>
                <ul className="cloud-standards-list" style={{ marginBottom: 0 }}>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>U.S. Headquarters:</strong> Frederick, MD, United States
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Phone &amp; WhatsApp Desk:</strong>{" "}
                      <a href="tel:+12405598037" style={{ color: "#2b1600", fontWeight: 600 }}>
                        +1 (240) 559-8037
                      </a>
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Engineering &amp; RFP Email:</strong>{" "}
                      <a href="mailto:info@quinndaisies.com" style={{ color: "#2b1600", fontWeight: 600 }}>
                        info@quinndaisies.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Contracting Portals:</strong> SAM.gov (U.S. Federal) • Maryland eMMA (CATS+ / MBE-VSBE) •
                      UNGM (United Nations Global Marketplace)
                    </span>
                  </li>
                </ul>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                <Link
                  to="/contract-procurement-and-writing"
                  className="ApplicationButton glue-button glue-button--medium-emphasis"
                >
                  <span>View GovCon Capabilities</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
                <div className="hero-tape-accent" style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
                  <StripeTape83 />
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation & RFP Intake Form */}
            <div className="glue-grid__col glue-grid__col--span-7">
              <div
                className="qd-contact-form-card"
                style={{
                  background: "#ffffff",
                  border: "2px solid #2b1600",
                  borderRadius: 22,
                  padding: "36px 32px",
                  boxShadow: "0 18px 40px rgba(43, 22, 0, 0.12)",
                }}
              >
                {submitted ? (
                  <div style={{ textAlign: "center", padding: "32px 16px" }}>
                    <div
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: "#fff4e6",
                        color: "#2b1600",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                        border: "2px solid #f9a144",
                      }}
                    >
                      <GreenTickSvg />
                    </div>
                    <h2 className="glue-headline glue-headline--headline-3" style={{ marginBottom: 12 }}>
                      Technical Briefing &amp; RFP Request Received
                    </h2>
                    <p
                      style={{
                        color: "#3b3b3b",
                        fontSize: "var(--qd-font-size-body-large, 1.15em)",
                        lineHeight: 1.7,
                        marginBottom: 24,
                      }}
                    >
                      Thank you, <strong>{formState.fullName || "Partner"}</strong>. Your request regarding{" "}
                      <strong>{formState.inquiryType}</strong> has been routed to our Principal Solution Architects and
                      Capture Directorate in Frederick, MD.
                    </p>
                    <button
                      type="button"
                      className="ApplicationButton glue-button glue-button--high-emphasis"
                      onClick={() => setSubmitted(false)}
                    >
                      <span>Submit Another Inquiry</span>
                      <span className="material-symbols-outlined">refresh</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
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
                      CONFIDENTIAL INTAKE &amp; ARCHITECTURE BRIEFING
                    </span>
                    <h2 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 24 }}>
                      Request an Engineering Consultation or RFP Proposal Team
                    </h2>

                    <div className="glue-grid" style={{ rowGap: 18 }}>
                      <div className="glue-grid__col glue-grid__col--span-6">
                        <label style={labelStyle}>Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formState.fullName}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          style={inputStyle}
                        />
                      </div>

                      <div className="glue-grid__col glue-grid__col--span-6">
                        <label style={labelStyle}>Work or Agency Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="name@organization.gov / .com"
                          style={inputStyle}
                        />
                      </div>

                      <div className="glue-grid__col glue-grid__col--span-6">
                        <label style={labelStyle}>Organization / Agency Name</label>
                        <input
                          type="text"
                          name="organization"
                          value={formState.organization}
                          onChange={handleChange}
                          placeholder="Company, Federal/State Agency, or UN Office"
                          style={inputStyle}
                        />
                      </div>

                      <div className="glue-grid__col glue-grid__col--span-6">
                        <label style={labelStyle}>Solicitation # / Target Timeline</label>
                        <input
                          type="text"
                          name="solicitationOrTimeline"
                          value={formState.solicitationOrTimeline}
                          onChange={handleChange}
                          placeholder="e.g., SAM.gov RFP #, eMMA TORFP, or Q3 Launch"
                          style={inputStyle}
                        />
                      </div>

                      <div className="glue-grid__col glue-grid__col--span-6">
                        <label style={labelStyle}>Primary Service Area *</label>
                        <select
                          name="inquiryType"
                          value={formState.inquiryType}
                          onChange={handleChange}
                          style={inputStyle}
                        >
                          <option>SAM.gov / Maryland eMMA / UNGM Contract &amp; Proposal Writing</option>
                          <option>Custom Software Development &amp; Full-SDLC Engineering</option>
                          <option>Artificial Intelligence, Enterprise RAG &amp; Autonomous Agents</option>
                          <option>Web &amp; Multi-Tenant SaaS Application Development</option>
                          <option>Mobile Application Development (Kotlin / .NET MAUI / Flet)</option>
                          <option>Desktop &amp; Industrial HMI Development (C# WPF / WinUI / Kivy / Flet)</option>
                          <option>IT Solutions, Cloud DevOps &amp; Zero-Trust Cybersecurity</option>
                          <option>SEO, GEO (Generative Engine Optimization) &amp; Digital Marketing</option>
                          <option>Workforce Development, Bootcamps &amp; 24/7 Managed IT Support</option>
                        </select>
                      </div>

                      <div className="glue-grid__col glue-grid__col--span-6">
                        <label style={labelStyle}>Preferred Codebase / Stack</label>
                        <select
                          name="primaryStack"
                          value={formState.primaryStack}
                          onChange={handleChange}
                          style={inputStyle}
                        >
                          <option>Full-SDLC Polyglot (.NET Core, C#, Python, React, Java, Kotlin, Kivy, Flet)</option>
                          <option>.NET Core, ASP.NET, C#, WPF, WinUI 3 &amp; .NET MAUI</option>
                          <option>Python, FastAPI, AI/RAG, Kivy &amp; Flet</option>
                          <option>React, TypeScript &amp; Modern Web Frontend</option>
                          <option>Java Spring Boot &amp; Kotlin Android</option>
                          <option>Shipley Proposal Writing &amp; Government Capture Only</option>
                        </select>
                      </div>

                      <div className="glue-grid__col glue-grid__col--span-12">
                        <label style={labelStyle}>Project Scope, RFP Requirements, or Architecture Goals *</label>
                        <textarea
                          name="projectSummary"
                          rows={4}
                          required
                          value={formState.projectSummary}
                          onChange={handleChange}
                          placeholder="Tell us about your solicitation (SAM.gov, Maryland eMMA, UNGM), software requirements, target platforms, or timeline..."
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                      <button
                        type="submit"
                        className="ApplicationButton glue-button glue-button--high-emphasis"
                      >
                        <span>Submit Engineering / RFP Inquiry</span>
                        <span className="material-symbols-outlined">send</span>
                      </button>
                      <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", color: "#6b625b" }}>
                        Protected by NDA • 4-Hour Principal Architect SLA
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyContactUsPage;
