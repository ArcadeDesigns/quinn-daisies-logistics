import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { StripeTape210 } from "../components/QuinnGoogleAssets";
import "../App.css";

export default function TechNoPage() {
  return (
    <div className="quinn-tech-google-root">
      <SEO
        title="Page Not Found | Quinn Daisies Technology & IT Solutions"
        description="Explore Quinn Daisies Technology & IT Solutions: Full-SDLC Software Engineering, AI, Mobile, Desktop, Cloud DevOps, SEO & GEO, and Government Contract Procurement."
        url="https://quinn-daisies-group.web.app/"
        ecosystem="technology"
      />
      <main
        id="main-content"
        className="glue-page"
        style={{ paddingTop: 84, paddingBottom: 96, textAlign: "center" }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
          <StripeTape210 />
        </div>
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
            404 • ROUTE NOT FOUND
          </span>
        </div>
        <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 16 }}>
          We couldn&rsquo;t find that Technology route
        </h1>
        <p
          style={{
            color: "#3b3b3b",
            fontSize: "var(--qd-font-size-body-large, 1.15em)",
            lineHeight: 1.7,
            maxWidth: 680,
            margin: "0 auto 36px",
          }}
        >
          Explore our full-SDLC engineering suites, AI accelerators, government contract procurement desk, or SEO &amp;
          GEO solutions below.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/technology-and-visibility"
            className="ApplicationButton glue-button glue-button--high-emphasis"
          >
            <span>Technology &amp; Visibility Hub</span>
            <span className="material-symbols-outlined">memory</span>
          </Link>
          <Link
            to="/software-development-and-engineering"
            className="ApplicationButton glue-button glue-button--medium-emphasis"
          >
            <span>Software Engineering</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link
            to="/contract-procurement-and-writing"
            className="ApplicationButton glue-button glue-button--medium-emphasis"
          >
            <span>Contract Procurement (SAM.gov / UNGM / eMMA)</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
          <Link
            to="/seo-and-geo"
            className="ApplicationButton glue-button glue-button--medium-emphasis"
          >
            <span>SEO &amp; GEO Visibility</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
