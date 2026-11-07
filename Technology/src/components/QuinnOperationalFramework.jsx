import React, { useRef } from "react";
import usePinnedSlides from "../hooks/usePinnedSlides";

const technologyLifecycleStages = [
  {
    stage: "Stage 01",
    title: "Enterprise Discovery & C4 Architecture",
    description:
      "Deep-dive technical discovery, PRD authoring, domain-driven C4 system architecture, and schema blueprints across .NET Core, C#, Java Spring, and cloud topologies.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_qpyk4eqpyk4eqpyk.jpg?alt=media&token=5c70550d-eb75-49b0-8d88-bfd58140119b",
    badge: ".NET 9 • C# • Java • C4 Model",
  },
  {
    stage: "Stage 02",
    title: "AI Cognitive Systems & Agentic Orchestration",
    description:
      "Autonomous multi-agent swarms, RAG vector retrieval, Gemini API integrations, semantic kernels, and LangGraph workflow orchestration in Python and enterprise runtimes.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_rd819rd819rd819r.jpg?alt=media&token=713cbb9a-7096-4743-a68f-4d224f03f8b0",
    badge: "Python • Gemini • LangGraph • RAG",
  },
  {
    stage: "Stage 03",
    title: "Cross-Platform Desktop & Mobile Engineering",
    description:
      "High-performance native Android & Kotlin Multiplatform apps, WPF/WinUI Windows desktop suites, and hardware-accelerated Kivy and Flet cross-platform applications.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_tf2h2ttf2h2ttf2h.jpg?alt=media&token=72462a2b-0fbb-459c-9889-1957a5b362b4",
    badge: "Kotlin • Kivy • Flet • WPF • MAUI",
  },
  {
    stage: "Stage 04",
    title: "Edge Web Apps & Core Web Vitals Optimization",
    description:
      "High-throughput React 19 single-page apps, TypeScript component systems, server-rendered edge modules, and sub-second Core Web Vitals with programmatic SEO instrumentation.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_tfsqgntfsqgntfsq.jpg?alt=media&token=9c3f23fa-2fe0-4638-b32c-75082938fc13",
    badge: "React 19 • TypeScript • Vite • Tailwind",
  },
  {
    stage: "Stage 05",
    title: "Multi-Cloud DevOps & GovCon Compliance",
    description:
      "Zero-downtime Kubernetes deployments, Terraform IaC, automated CI/CD pipelines, and stringent NIST 800-171 / FAR compliance for SAM.gov, Maryland eMMA, and UNGM bids.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_uyacyjuyacyjuyac.jpg?alt=media&token=28099705-d49d-4974-a66a-87c3b04f9752",
    badge: "GCP • AWS • Azure • GovCon FAR/DFARS",
  },
  {
    stage: "Stage 06",
    title: "Continuous Delivery & 24/7 Managed SRE",
    description:
      "Round-the-clock site reliability engineering, OpenTelemetry distributed tracing, automated vulnerability scanning, and L1–L3 mission-critical enterprise helpdesk SLAs.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_whfikpwhfikpwhfi.jpg?alt=media&token=6a080cb1-31cc-49ed-8c58-dca471ba3126",
    badge: "24/7 SRE • L1–L3 • 99.99% Uptime",
  },
];

/**
 * Pinned Slides Operational Framework Component
 * Directly replicates the Logistics landing page pinned animation (usePinnedSlides),
 * featuring a vertical progress bar that tracks scroll position,
 * interactive stage switching, and smooth slide autoAlpha/translateX transitions.
 */
export default function QuinnOperationalFramework() {
  const pinSectionRef = useRef(null);
  usePinnedSlides(pinSectionRef);

  return (
    <section className="ApplicationImageDesign" ref={pinSectionRef}>
      {/* Left Column: Interactive Stage List + Animated Vertical Progress Track */}
      <div className="ApplicationChartContentListContainer">
        <div className="fill" aria-hidden="true" />
        <div className="ApplicationChartContentList">
          <h2 style={{ color: '#FFFFFF' }} className="ApplicationImageDesignHeader reveal__bottom">
            From Architecture to Production SRE: One Unified Engineering Lifecycle
          </h2>
          {technologyLifecycleStages.map((stage, idx) => (
            <div
              key={idx}
              className={`ApplicationChartDesignItem${idx === 0 ? " is-active" : ""}`}
            >
              <h4>
                {stage.stage}: {stage.title}
              </h4>
              <p>{stage.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Pinned Slides with Photo & Content Overlay */}
      <div className="ApplicationChartContent">
        <div className="ApplicationChartSlides">
          {technologyLifecycleStages.map((stage, idx) => (
            <div key={idx} className="ApplicationChartSlide">
              <div className="ApplicationChartContentContainer">
                <img
                  src={stage.image}
                  alt={`Quinn Daisies Technology — ${stage.title}`}
                  className="ApplicationChartContentContainerImage"
                  loading="lazy"
                />
                <div className="ApplicationChartContentContainerContent">
                  <span className="ApplicationChartContentContainerContentText">
                    {stage.badge}
                  </span>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

