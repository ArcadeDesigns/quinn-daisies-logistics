import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ─── INLINE STYLES (scoped) ───────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

  .platform-page * { box-sizing: border-box; margin: 0; padding: 0; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1);   opacity: 0.6; }
    100% { transform: scale(1.8); opacity: 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-10px); }
  }
  @keyframes ticker {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes draw-line {
    from { stroke-dashoffset: 1000; }
    to   { stroke-dashoffset: 0; }
  }
  @keyframes count-up {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .platform-hero-title {
    font-size: clamp(2.8rem, 6vw, 5.2rem);
    font-weight: 900;
    line-height: 1.0;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.1s both;
  }
  .platform-hero-sub {
    animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.3s both;
  }
  .platform-hero-btns {
    animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both;
  }
  .platform-hero-stats {
    animation: fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) 0.7s both;
  }

  .platform-card-hover {
    transition: transform 0.35s ease, border-color 0.35s ease, background 0.35s ease;
  }
  .platform-card-hover:hover {
    transform: translateY(-6px);
    border-color: #f9a14455 !important;
  }

  .platform-step-hover {
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    cursor: default;
  }
  .platform-step-hover:hover {
    transform: translateX(6px);
  }

  .platform-btn-primary {
    display: inline-flex; align-items: center; gap: 10px;
    background: #f9a144; color: #2b1600;
    border: none; border-radius: 50px; padding: 14px 28px 14px 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.82em; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    cursor: pointer; text-decoration: none;
    transition: background 0.2s ease, transform 0.2s ease;
    white-space: nowrap;
  }
  .platform-btn-primary:hover { background: #ffb35c; transform: translateY(-2px); }

  .platform-btn-secondary {
    display: inline-flex; align-items: center; gap: 10px;
    background: transparent; color: #ffffff;
    border: 1px solid rgba(255,255,255,0.3); border-radius: 50px;
    padding: 14px 28px 14px 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.82em; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.08em;
    cursor: pointer; text-decoration: none;
    transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
    white-space: nowrap;
  }
  .platform-btn-secondary:hover {
    border-color: #f9a144; background: rgba(249,161,68,0.08);
    transform: translateY(-2px);
  }

  .platform-icon-circle {
    width: 52px; height: 52px; border-radius: 16px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: #2b1600; border: 1px solid #f9a14433;
    font-size: 1.4em;
  }

  .route-node {
    width: 14px; height: 14px; border-radius: 50%;
    background: #f9a144; position: relative; flex-shrink: 0;
  }
  .route-node::after {
    content: '';
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    width: 28px; height: 28px; border-radius: 50%;
    border: 1px solid #f9a14466;
    animation: pulse-ring 2s ease-out infinite;
  }

  .ticker-track {
    display: flex;
    animation: ticker 30s linear infinite;
    width: max-content;
  }
  .ticker-track:hover { animation-play-state: paused; }

  .direction-tab {
    cursor: pointer;
    padding: 14px 28px; border-radius: 50px;
    font-size: 0.78em; font-weight: 600;
    text-transform: uppercase; letter-spacing: 0.08em;
    transition: all 0.25s ease;
    border: 1px solid transparent;
    font-family: 'Poppins', sans-serif;
  }
  .direction-tab.active {
    background: #f9a144; color: #2b1600; border-color: #f9a144;
  }
  .direction-tab.inactive {
    background: transparent; color: #808080;
    border-color: #2b2b2b;
  }
  .direction-tab.inactive:hover {
    border-color: #f9a14455; color: #ffffff;
  }

  .platform-number {
    font-size: clamp(2.5rem, 4vw, 4rem);
    font-weight: 900; color: #f9a144; line-height: 1;
    animation: count-up 0.6s ease both;
  }

  .float-badge {
    animation: float 4s ease-in-out infinite;
  }

  .progress-bar-fill {
    height: 3px; background: #f9a144; border-radius: 2px;
    transition: width 1.2s cubic-bezier(0.22,1,0.36,1);
  }

  @media (max-width: 900px) {
    .platform-two-col { flex-direction: column !important; }
    .platform-hero-content { max-width: 100% !important; }
    .platform-route-visual { display: none !important; }
    .platform-grid-3 { grid-template-columns: 1fr !important; }
    .platform-grid-2 { grid-template-columns: 1fr !important; }
    .platform-direction-panel { flex-direction: column !important; }
    .platform-hero-stats { flex-wrap: wrap !important; }
  }

  @media (max-width: 600px) {
    .platform-section { padding-left: 5% !important; padding-right: 5% !important; }
    .platform-hero-btns { flex-direction: column !important; align-items: flex-start !important; }
  }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PILLARS = [
  {
    icon: "🚢",
    title: "Freight & Route Management",
    text: "Air, sea, and road freight coordination across Nigeria, the U.S., and 40+ trade corridors. Every shipment is tracked, managed, and reported from point of origin.",
    tags: ["Air Freight", "Ocean Freight", "Road Haulage"],
  },
  {
    icon: "📋",
    title: "Documentation & Compliance",
    text: "From commercial invoices and packing lists to phytosanitary certificates and FDA filings — our compliance team ensures every document is complete before goods leave the origin country.",
    tags: ["Customs Brokerage", "FDA Compliance", "Export Docs"],
  },
  {
    icon: "🏭",
    title: "Vendor Sourcing & Coordination",
    text: "We connect buyers to verified African food producers, manufacturers, and suppliers. Sourcing, price negotiation, quality inspection, and readiness review — handled.",
    tags: ["Verified Vendors", "Quality Review", "Price Negotiation"],
  },
  {
    icon: "📦",
    title: "Last-Mile Delivery",
    text: "Final-stage delivery to warehouses, retail stores, and distribution hubs across the U.S. — fully coordinated with tracking updates and proof of delivery.",
    tags: ["U.S. Delivery", "Warehouse Drop", "POD Tracking"],
  },
  {
    icon: "💹",
    title: "Business Development & Analysis",
    text: "Market-entry strategy, competitor analysis, import/export viability studies, and growth roadmaps for companies expanding into or out of African markets.",
    tags: ["Market Entry", "Feasibility", "Growth Strategy"],
  },
  {
    icon: "🤝",
    title: "B2B Trade Facilitation",
    text: "Our platform connects businesses seeking partners, buyers, or distributors in Nigeria and the U.S. — with structured onboarding, verified profiles, and deal facilitation.",
    tags: ["Buyer Matching", "Distributor Network", "Deal Support"],
  },
];

const DIRECTIONS = {
  "nigeria-to-us": {
    from: "Nigeria 🇳🇬",
    to: "United States 🇺🇸",
    headline: "Exporting to the U.S.?",
    subheadline: "We manage the full corridor — from Nigerian suppliers to American storefronts.",
    steps: [
      { step: "01", title: "Vendor Sourcing", desc: "We identify and verify Nigerian food producers, manufacturers, and exporters aligned with your product categories." },
      { step: "02", title: "Pre-Export Compliance", desc: "We review and prepare all documentation — NAFDAC, NEPC, phytosanitary, and commercial export records." },
      { step: "03", title: "Freight Coordination", desc: "Air or sea freight booking, cargo consolidation, container loading supervision, and in-transit tracking." },
      { step: "04", title: "U.S. Customs Clearance", desc: "Our brokerage team handles CBP filings, FDA prior-notice, duties, and port release on arrival." },
      { step: "05", title: "Final Delivery", desc: "Cargo is routed to your U.S. warehouse, distribution center, or retail stores with full handoff documentation." },
    ],
    stat: { num: "98%", label: "Customs clearance rate" },
  },
  "us-to-nigeria": {
    from: "United States 🇺🇸",
    to: "Nigeria 🇳🇬",
    headline: "Entering the Nigerian Market?",
    subheadline: "We build your operational footprint in Nigeria — from compliance to local delivery.",
    steps: [
      { step: "01", title: "Market Entry Strategy", desc: "We analyze the Nigerian market for your product — demand sizing, pricing benchmarks, regulatory fit, and distribution channel mapping." },
      { step: "02", title: "Export Documentation", desc: "EEI filings, certificates of origin, commercial invoices, and any USDA or industry-specific export requirements." },
      { step: "03", title: "Freight & Forwarding", desc: "End-to-end freight management into Lagos, Abuja, Port Harcourt, or any designated port of entry." },
      { step: "04", title: "Nigerian Customs & NAFDAC", desc: "We handle SON, NAFDAC registration support, customs duty valuation, and port clearance through our on-ground team." },
      { step: "05", title: "In-Country Distribution", desc: "Goods are forwarded to Nigerian distributors, retailers, or your designated local warehouse with delivery receipts." },
    ],
    stat: { num: "40+", label: "Active trade routes into Nigeria" },
  },
};

const PROCESS_STEPS = [
  { num: "01", title: "Create Your Business Profile", desc: "Sign up and tell us about your business — what you import, export, or seek to source. Our team reviews your profile within 48 hours.", icon: "👤" },
  { num: "02", title: "Define Your Trade Goals", desc: "Are you expanding to the U.S.? Looking for Nigerian suppliers? Seeking a buyer for your goods abroad? We map a plan around your objective.", icon: "🎯" },
  { num: "03", title: "Get Matched & Coordinated", desc: "Our platform connects you to verified vendors, buyers, or logistics routes — with documentation support and a dedicated coordinator.", icon: "🔗" },
  { num: "04", title: "Move, Deliver, Grow", desc: "Shipments are tracked end-to-end. Your coordinator keeps you informed at every milestone — from origin to final handoff.", icon: "🚀" },
];

const TICKER_ITEMS = [
  "Freight Coordination", "Customs Clearance", "NAFDAC Compliance", "FDA Documentation",
  "B2B Trade Matching", "Last-Mile Delivery", "Market Entry Strategy", "Export Documentation",
  "Vendor Sourcing", "Supply Chain Analysis", "Business Development", "Import Facilitation",
];

const INDUSTRIES = [
  { icon: "🌾", name: "African Food & Agriculture", count: "150+ vendors" },
  { icon: "👗", name: "Fashion & Textiles", count: "80+ brands" },
  { icon: "🧴", name: "Health & Beauty", count: "60+ suppliers" },
  { icon: "🏺", name: "Arts, Crafts & Home Goods", count: "40+ artisans" },
  { icon: "⚙️", name: "Industrial & Manufacturing", count: "30+ partners" },
  { icon: "💊", name: "Pharmaceuticals & Wellness", count: "25+ suppliers" },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function Pillar({ item, index }) {
  return (
    <div
      className="platform-card-hover"
      style={{
        background: "#111",
        borderRadius: 24,
        padding: "28px 24px",
        border: "1px solid #1e1e1e",
        display: "flex", flexDirection: "column", gap: 16,
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <div className="platform-icon-circle">
        <span style={{ fontSize: "1.3em" }}>{item.icon}</span>
      </div>
      <div>
        <h3 style={{
          fontSize: "0.85em", color: "#ffffff",
          textTransform: "uppercase", letterSpacing: "0.06em",
          fontWeight: 700, marginBottom: 10, lineHeight: 1.4,
        }}>{item.title}</h3>
        <p style={{ fontSize: "0.78em", color: "#808080", lineHeight: 1.8 }}>{item.text}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
        {item.tags.map(tag => (
          <span key={tag} style={{
            fontSize: "0.6em", padding: "4px 12px", borderRadius: 50,
            background: "#2b1600", color: "#f9a144",
            border: "1px solid #f9a14430",
            textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600,
          }}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ item, index }) {
  return (
    <div
      className="platform-step-hover"
      style={{
        display: "flex", gap: 20, padding: "24px",
        background: "#0d0d0d", borderRadius: 20,
        border: "1px solid #1a1a1a",
        alignItems: "flex-start",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 14, flexShrink: 0,
        background: "#2b1600", border: "1px solid #f9a14433",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.2em",
      }}>{item.icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <span style={{
            fontSize: "0.58em", fontWeight: 800, color: "#f9a14477",
            letterSpacing: "0.12em",
          }}>{item.num}</span>
          <h4 style={{
            fontSize: "0.82em", color: "#ffffff", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.05em",
          }}>{item.title}</h4>
        </div>
        <p style={{ fontSize: "0.76em", color: "#666", lineHeight: 1.7 }}>{item.desc}</p>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function Platform() {
  const [activeDirection, setActiveDirection] = useState("nigeria-to-us");
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  // Intersection observer for stats section
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const dir = DIRECTIONS[activeDirection];

  return (
    <div
      className="platform-page"
      style={{
        background: "#000000",
        fontFamily: "'Poppins', sans-serif",
        color: "#ffffff",
        overflowX: "hidden",
      }}
    >
      <style>{css}</style>

      {/* ════════════════════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════════════════════ */}
      <section
        className="platform-section"
        style={{
          minHeight: "100vh", position: "relative",
          display: "flex", flexDirection: "column",
          justifyContent: "center",
          padding: "140px 10% 80px",
          overflow: "hidden",
        }}
      >
        {/* Background decorative arcs */}
        <svg
          aria-hidden="true"
          style={{ position: "absolute", right: "-10%", top: "10%", opacity: 0.08, pointerEvents: "none" }}
          width="700" height="700" viewBox="0 0 700 700" fill="none"
        >
          <circle cx="350" cy="350" r="300" stroke="#f9a144" strokeWidth="1" />
          <circle cx="350" cy="350" r="220" stroke="#f9a144" strokeWidth="1" />
          <circle cx="350" cy="350" r="140" stroke="#f9a144" strokeWidth="1" />
          <line x1="50" y1="350" x2="650" y2="350" stroke="#f9a144" strokeWidth="0.5" />
          <line x1="350" y1="50" x2="350" y2="650" stroke="#f9a144" strokeWidth="0.5" />
        </svg>

        {/* Floating badge - Nigeria */}
        <div
          className="float-badge"
          style={{
            position: "absolute", right: "8%", top: "25%",
            background: "#111", border: "1px solid #2b2b2b",
            borderRadius: 16, padding: "12px 18px",
            display: "flex", alignItems: "center", gap: 10,
            backdropFilter: "blur(8px)",
          }}
        >
          <span style={{ fontSize: "1.4em" }}>🇳🇬</span>
          <div>
            <p style={{ fontSize: "0.65em", color: "#f9a144", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Lagos, Nigeria</p>
            <p style={{ fontSize: "0.6em", color: "#666", lineHeight: 1.4 }}>Origin Hub</p>
          </div>
          <div className="route-node" style={{ marginLeft: 6 }} />
        </div>

        {/* Floating badge - USA */}
        <div
          className="float-badge"
          style={{
            position: "absolute", right: "14%", top: "50%",
            background: "#111", border: "1px solid #2b2b2b",
            borderRadius: 16, padding: "12px 18px",
            display: "flex", alignItems: "center", gap: 10,
            animationDelay: "2s",
            backdropFilter: "blur(8px)",
          }}
        >
          <span style={{ fontSize: "1.4em" }}>🇺🇸</span>
          <div>
            <p style={{ fontSize: "0.65em", color: "#f9a144", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Maryland, USA</p>
            <p style={{ fontSize: "0.6em", color: "#666", lineHeight: 1.4 }}>Destination Hub</p>
          </div>
          <div className="route-node" style={{ marginLeft: 6 }} />
        </div>

        <div className="platform-hero-content" style={{ maxWidth: 700, position: "relative", zIndex: 2 }}>
          {/* Label */}
          <span style={{
            fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f9a144",
            padding: "5px 18px", borderRadius: 50,
            background: "#2b1600", border: "1px solid #f9a14433",
            display: "inline-block", marginBottom: 24,
          }}>
            The Quinn Daisies Platform
          </span>

          <h1 className="platform-hero-title">
            Where African Trade<br />
            <span style={{ color: "#f9a144" }}>Meets Global</span><br />
            Infrastructure
          </h1>

          <p
            className="platform-hero-sub"
            style={{
              fontSize: "0.95em", color: "#808080",
              maxWidth: 540, lineHeight: 1.9, marginTop: 24, marginBottom: 36,
            }}
          >
            One platform for logistics coordination, documentation compliance, B2B trade matching, and international market expansion — connecting Nigeria and the United States.
          </p>

          {/* CTA Buttons */}
          <div
            className="platform-hero-btns"
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <Link to="/marketplace" className="platform-btn-primary">
              <span style={{
                background: "#2b1600", borderRadius: 50, width: 32, height: 32,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1em", flexShrink: 0,
              }}>🛍</span>
              Explore the Marketplace
            </Link>
            <Link to="/register" className="platform-btn-secondary">
              <span style={{
                background: "rgba(255,255,255,0.1)", borderRadius: 50, width: 32, height: 32,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1em", flexShrink: 0,
              }}>🚀</span>
              Get Started — It's Free
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="platform-hero-stats"
            style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}
          >
            {[
              { n: "500+", l: "Verified Vendors" },
              { n: "40+",  l: "Trade Routes" },
              { n: "98%",  l: "Clearance Rate" },
              { n: "12",   l: "Countries Served" },
            ].map(s => (
              <div key={s.n} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontSize: "1.5em", fontWeight: 800, color: "#f9a144", lineHeight: 1 }}>{s.n}</span>
                <span style={{ fontSize: "0.62em", color: "#555", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TICKER STRIP
      ════════════════════════════════════════════════════════════ */}
      <div style={{
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
        background: "#0a0a0a",
        padding: "14px 0",
        overflow: "hidden",
      }}>
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} style={{
              fontSize: "0.7em", fontWeight: 600, textTransform: "uppercase",
              letterSpacing: "0.1em", color: "#f9a14488",
              padding: "0 24px",
              display: "flex", alignItems: "center", gap: 16,
            }}>
              {item}
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#f9a144", display: "inline-block", flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          PLATFORM PILLARS
      ════════════════════════════════════════════════════════════ */}
      <section
        className="platform-section"
        style={{ padding: "100px 10%", background: "#000" }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{
            fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f9a144",
            padding: "5px 18px", borderRadius: 50,
            background: "#2b1600", display: "inline-block", marginBottom: 20,
          }}>What We Do</span>
          <h2 style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 800,
            textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.1,
          }}>
            Six Pillars of the<br />
            <span style={{ color: "#f9a144" }}>Quinn Daisies Platform</span>
          </h2>
          <p style={{ fontSize: "0.85em", color: "#666", maxWidth: 520, margin: "20px auto 0", lineHeight: 1.8 }}>
            From the moment a vendor lists a product to the moment it reaches a buyer's shelf — every function is built into one coordinated platform.
          </p>
        </div>

        <div
          className="platform-grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.2em",
          }}
        >
          {PILLARS.map((item, i) => <Pillar key={item.title} item={item} index={i} />)}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TRADE DIRECTION MODULE (Interactive)
      ════════════════════════════════════════════════════════════ */}
      <section
        className="platform-section"
        style={{
          padding: "100px 10%",
          background: "#060606",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div style={{ marginBottom: 48 }}>
          <span style={{
            fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f9a144",
            padding: "5px 18px", borderRadius: 50,
            background: "#2b1600", display: "inline-block", marginBottom: 20,
          }}>Trade Corridors</span>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 1.1,
              maxWidth: 500,
            }}>
              Choose Your<br />
              <span style={{ color: "#f9a144" }}>Trade Direction</span>
            </h2>
            {/* Toggle tabs */}
            <div style={{ display: "flex", gap: 8 }}>
              {Object.entries(DIRECTIONS).map(([key, val]) => (
                <button
                  key={key}
                  className={`direction-tab ${activeDirection === key ? "active" : "inactive"}`}
                  onClick={() => setActiveDirection(key)}
                >
                  {val.from.split(" ")[1]} → {val.to.split(" ")[1]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Panel */}
        <div
          className="platform-two-col platform-direction-panel"
          style={{ display: "flex", gap: "4em", alignItems: "flex-start" }}
        >
          {/* Left: description + steps */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ marginBottom: 32 }}>
              <h3 style={{
                fontSize: "1.3em", fontWeight: 800, color: "#f9a144",
                textTransform: "uppercase", marginBottom: 10,
              }}>{dir.headline}</h3>
              <p style={{ fontSize: "0.85em", color: "#808080", lineHeight: 1.8 }}>
                {dir.subheadline}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {dir.steps.map((s, i) => (
                <div
                  key={s.step}
                  style={{
                    display: "flex", gap: 16, padding: "20px",
                    background: "#0d0d0d", borderRadius: 18,
                    border: "1px solid #1a1a1a",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "#f9a14433"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1a1a1a"}
                >
                  {/* Step number with vertical line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flexShrink: 0 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: "#2b1600", border: "1px solid #f9a14444",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65em", fontWeight: 800, color: "#f9a144",
                      letterSpacing: "0.05em", flexShrink: 0,
                    }}>{s.step}</div>
                    {i < dir.steps.length - 1 && (
                      <div style={{ width: 1, flex: 1, minHeight: 12, background: "#f9a14422", marginTop: 6 }} />
                    )}
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <h4 style={{
                      fontSize: "0.8em", color: "#ffffff", fontWeight: 700,
                      textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6,
                    }}>{s.title}</h4>
                    <p style={{ fontSize: "0.74em", color: "#666", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual diagram */}
          <div
            className="platform-route-visual"
            style={{ width: 340, flexShrink: 0 }}
          >
            {/* Route card */}
            <div style={{
              background: "#111", borderRadius: 28, padding: 28,
              border: "1px solid #1e1e1e", marginBottom: 20,
            }}>
              <p style={{
                fontSize: "0.6em", color: "#f9a144", textTransform: "uppercase",
                letterSpacing: "0.12em", fontWeight: 700, marginBottom: 20,
              }}>Active Route</p>

              {/* Origin */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div className="route-node" />
                <div>
                  <p style={{ fontSize: "0.72em", color: "#ffffff", fontWeight: 600 }}>{dir.from}</p>
                  <p style={{ fontSize: "0.62em", color: "#666" }}>Origin</p>
                </div>
              </div>

              {/* Route line */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16, paddingLeft: 6 }}>
                <div style={{ width: 2, height: 60, background: "linear-gradient(to bottom, #f9a144, #f9a14433)", borderRadius: 2 }} />
                <div style={{ flex: 1 }}>
                  {["Freight Pickup", "Customs Clearance", "In-Transit Track"].map((step, i) => (
                    <div key={step} style={{
                      display: "flex", alignItems: "center", gap: 8, marginBottom: i < 2 ? 12 : 0,
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f9a14466", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.68em", color: "#888" }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Destination */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 14, height: 14, borderRadius: 4,
                  background: "#f9a144", flexShrink: 0,
                }} />
                <div>
                  <p style={{ fontSize: "0.72em", color: "#ffffff", fontWeight: 600 }}>{dir.to}</p>
                  <p style={{ fontSize: "0.62em", color: "#666" }}>Destination</p>
                </div>
              </div>
            </div>

            {/* Stat card */}
            <div style={{
              background: "#2b1600", borderRadius: 20, padding: "20px 24px",
              border: "1px solid #f9a14433",
            }}>
              <p style={{ fontSize: "0.6em", color: "#f9a14488", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
                Platform Metric
              </p>
              <p style={{ fontSize: "2.4em", fontWeight: 900, color: "#f9a144", lineHeight: 1 }}>{dir.stat.num}</p>
              <p style={{ fontSize: "0.72em", color: "#808080", marginTop: 4 }}>{dir.stat.label}</p>
            </div>

            {/* CTA */}
            <div style={{ marginTop: 20 }}>
              <Link to="/get-a-quote" className="platform-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Plan This Route
                <span style={{ marginLeft: "auto" }}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          INDUSTRIES SERVED
      ════════════════════════════════════════════════════════════ */}
      <section
        className="platform-section"
        style={{ padding: "100px 10%", background: "#000" }}
      >
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          marginBottom: 48, flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <span style={{
              fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#f9a144",
              padding: "5px 18px", borderRadius: 50,
              background: "#2b1600", display: "inline-block", marginBottom: 16,
            }}>Industries Served</span>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800,
              textTransform: "uppercase", lineHeight: 1.1,
            }}>
              We Serve Every Sector<br />
              <span style={{ color: "#f9a144" }}>of African Trade</span>
            </h2>
          </div>
          <p style={{
            fontSize: "0.82em", color: "#666", maxWidth: 380,
            lineHeight: 1.8,
          }}>
            Our logistics and trade infrastructure is built across six key industry verticals — each with dedicated vendor networks, compliance protocols, and route coverage.
          </p>
        </div>

        <div
          className="platform-grid-3"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1em" }}
        >
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              className="platform-card-hover"
              style={{
                display: "flex", alignItems: "center", gap: 16,
                background: "#0d0d0d", borderRadius: 18, padding: "20px 22px",
                border: "1px solid #1a1a1a",
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                background: "#1a1a1a", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "1.4em",
              }}>{ind.icon}</div>
              <div>
                <p style={{ fontSize: "0.78em", color: "#ffffff", fontWeight: 600, lineHeight: 1.4 }}>{ind.name}</p>
                <p style={{ fontSize: "0.62em", color: "#f9a14488", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{ind.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STATS SECTION
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={statsRef}
        className="platform-section"
        style={{
          padding: "100px 10%",
          background: "#060606",
          borderTop: "1px solid #1a1a1a",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800,
            textTransform: "uppercase", letterSpacing: "-0.01em",
          }}>
            The Numbers Behind<br />
            <span style={{ color: "#f9a144" }}>Every Shipment</span>
          </h2>
        </div>

        <div
          className="platform-grid-2"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5em" }}
        >
          {[
            { num: "500+",  label: "Verified Vendors", sub: "across Nigeria, Ghana & East Africa", bar: 80 },
            { num: "98%",   label: "On-Time Delivery", sub: "for managed freight shipments", bar: 98 },
            { num: "40+",   label: "Trade Routes",     sub: "active Nigeria ↔ U.S. corridors", bar: 65 },
            { num: "24/7",  label: "Support Coverage", sub: "across all time zones", bar: 100 },
          ].map(s => (
            <div key={s.label} style={{
              background: "#0d0d0d", borderRadius: 22, padding: "28px 24px",
              border: "1px solid #1a1a1a", display: "flex", flexDirection: "column", gap: 10,
            }}>
              <p className="platform-number" style={{
                animation: statsVisible ? "count-up 0.6s ease both" : "none",
              }}>{s.num}</p>
              <p style={{ fontSize: "0.78em", color: "#ffffff", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</p>
              <p style={{ fontSize: "0.68em", color: "#555", lineHeight: 1.5 }}>{s.sub}</p>
              <div style={{ height: 3, background: "#1a1a1a", borderRadius: 2, marginTop: 4 }}>
                <div
                  className="progress-bar-fill"
                  style={{ width: statsVisible ? `${s.bar}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════════════════════════ */}
      <section
        className="platform-section"
        style={{ padding: "100px 10%", background: "#000" }}
      >
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <span style={{
            fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f9a144",
            padding: "5px 18px", borderRadius: 50,
            background: "#2b1600", display: "inline-block", marginBottom: 20,
          }}>How It Works</span>
          <h2 style={{
            fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800,
            textTransform: "uppercase", lineHeight: 1.1,
          }}>
            From Signup to<br />
            <span style={{ color: "#f9a144" }}>First Shipment in 4 Steps</span>
          </h2>
          <p style={{ fontSize: "0.85em", color: "#666", maxWidth: 440, margin: "20px auto 0", lineHeight: 1.8 }}>
            No complicated onboarding. Just a clear path from your first conversation to your first trade.
          </p>
        </div>

        <div
          className="platform-grid-2"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.2em" }}
        >
          {PROCESS_STEPS.map((s, i) => <ProcessStep key={s.num} item={s} index={i} />)}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          DOCUMENT & COMPLIANCE DEEP DIVE
      ════════════════════════════════════════════════════════════ */}
      <section
        className="platform-section"
        style={{
          padding: "100px 10%",
          background: "#060606",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div
          className="platform-two-col"
          style={{ display: "flex", gap: "6em", alignItems: "center" }}
        >
          {/* Left text */}
          <div style={{ flex: 1 }}>
            <span style={{
              fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "#f9a144",
              padding: "5px 18px", borderRadius: 50,
              background: "#2b1600", display: "inline-block", marginBottom: 20,
            }}>Documentation</span>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800,
              textTransform: "uppercase", lineHeight: 1.1, marginBottom: 20,
            }}>
              Documentation<br />
              <span style={{ color: "#f9a144" }}>Done Before Departure</span>
            </h2>
            <p style={{ fontSize: "0.83em", color: "#808080", lineHeight: 1.9, marginBottom: 28 }}>
              The most common cause of delayed shipments is incomplete or incorrect documentation. Our compliance team prepares every record before your goods leave the origin country — eliminating surprises at the port.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Commercial Invoice & Packing List", region: "All routes" },
                { label: "Bill of Lading / Airway Bill", region: "Ocean & Air" },
                { label: "Certificate of Origin", region: "Export" },
                { label: "Phytosanitary Certificate", region: "Food & Agri" },
                { label: "NAFDAC / SON Registration Support", region: "Nigeria Import" },
                { label: "FDA Prior Notice & CBP Entry Filing", region: "U.S. Import" },
                { label: "EEI / SED (Shipper's Export Declaration)", region: "U.S. Export" },
                { label: "Duty Drawback & Tariff Classification", region: "Customs" },
              ].map(doc => (
                <div
                  key={doc.label}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 16px", background: "#0d0d0d", borderRadius: 12,
                    border: "1px solid #1a1a1a",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "#f9a14433"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "#1a1a1a"}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#f9a144", fontSize: "0.85em" }}>✓</span>
                    <span style={{ fontSize: "0.78em", color: "#ccc" }}>{doc.label}</span>
                  </div>
                  <span style={{
                    fontSize: "0.6em", padding: "3px 10px", borderRadius: 50,
                    background: "#1a1a1a", color: "#f9a14488",
                    border: "1px solid #2b2b2b", whiteSpace: "nowrap",
                  }}>{doc.region}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div style={{ width: 360, flexShrink: 0 }}>
            <div style={{
              background: "#111", borderRadius: 28, padding: 24,
              border: "1px solid #1e1e1e",
            }}>
              <p style={{
                fontSize: "0.6em", color: "#f9a144", textTransform: "uppercase",
                letterSpacing: "0.1em", fontWeight: 700, marginBottom: 20,
              }}>Shipment Compliance Score</p>

              {/* Score ring visual */}
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                <div style={{ position: "relative", width: 140, height: 140 }}>
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r="58" fill="none" stroke="#1a1a1a" strokeWidth="10" />
                    <circle
                      cx="70" cy="70" r="58" fill="none"
                      stroke="#f9a144" strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 58 * 0.98} ${2 * Math.PI * 58}`}
                      transform="rotate(-90 70 70)"
                    />
                    <text x="70" y="65" textAnchor="middle" fill="#f9a144" fontSize="22" fontWeight="900" fontFamily="Poppins">98%</text>
                    <text x="70" y="84" textAnchor="middle" fill="#666" fontSize="9" fontFamily="Poppins" textDecoration="uppercase">Compliant</text>
                  </svg>
                </div>
              </div>

              {[
                { label: "Documents Complete", val: 100 },
                { label: "Customs Ready", val: 98 },
                { label: "Labeling Correct", val: 96 },
              ].map(m => (
                <div key={m.label} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: "0.68em", color: "#888" }}>{m.label}</span>
                    <span style={{ fontSize: "0.68em", color: "#f9a144", fontWeight: 700 }}>{m.val}%</span>
                  </div>
                  <div style={{ height: 4, background: "#1a1a1a", borderRadius: 2 }}>
                    <div style={{ width: `${m.val}%`, height: "100%", background: "#f9a144", borderRadius: 2 }} />
                  </div>
                </div>
              ))}

              <div style={{
                marginTop: 20, padding: "12px 16px",
                background: "#2b1600", borderRadius: 12,
                border: "1px solid #f9a14422",
              }}>
                <p style={{ fontSize: "0.68em", color: "#f9a14499", lineHeight: 1.6 }}>
                  ✓ All documentation reviewed 48hrs before scheduled departure. Zero missing fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BUSINESS DEVELOPMENT SECTION
      ════════════════════════════════════════════════════════════ */}
      <section
        className="platform-section"
        style={{ padding: "100px 10%", background: "#000" }}
      >
        <div style={{ marginBottom: 56 }}>
          <span style={{
            fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f9a144",
            padding: "5px 18px", borderRadius: 50,
            background: "#2b1600", display: "inline-block", marginBottom: 20,
          }}>Business Development</span>
          <div
            className="platform-two-col"
            style={{ display: "flex", gap: "5em", alignItems: "flex-end" }}
          >
            <h2 style={{
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800,
              textTransform: "uppercase", lineHeight: 1.1, flex: 1,
            }}>
              We Don't Just Move Goods —<br />
              <span style={{ color: "#f9a144" }}>We Build Your Market Position</span>
            </h2>
            <p style={{
              fontSize: "0.83em", color: "#666", maxWidth: 400,
              lineHeight: 1.8, flex: 1,
            }}>
              For businesses entering a new market — whether expanding into the U.S. or entering Nigeria — we provide the strategic scaffolding alongside the operational execution.
            </p>
          </div>
        </div>

        <div
          className="platform-grid-2"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.4em" }}
        >
          {[
            {
              icon: "📊",
              title: "Market Entry Analysis",
              desc: "Demand sizing, competitive landscape mapping, regulatory requirements, pricing benchmarks, and channel strategy — delivered as an actionable briefing before you commit capital.",
              highlight: "Available for U.S. and Nigeria markets",
            },
            {
              icon: "🏢",
              title: "B2B Platform Matching",
              desc: "Our curated network connects exporters with importers, wholesalers with distributors, and brands with retail buyers — verified, vetted, and ready to transact.",
              highlight: "500+ active business profiles",
            },
            {
              icon: "📈",
              title: "Trade Finance Advisory",
              desc: "We help structure payment terms, letters of credit, and currency risk considerations for cross-border transactions — with referrals to trusted finance partners.",
              highlight: "Nigeria ↔ U.S. trade focus",
            },
            {
              icon: "🛡",
              title: "Compliance & Risk Management",
              desc: "Regulatory gap analysis, product registration support (NAFDAC, FDA), tariff optimization, and risk-mapping across customs environments — protecting your margin and reputation.",
              highlight: "Pre-export risk review included",
            },
          ].map(card => (
            <div
              key={card.title}
              className="platform-card-hover"
              style={{
                background: "#0d0d0d", borderRadius: 24, padding: "30px 26px",
                border: "1px solid #1a1a1a",
                display: "flex", flexDirection: "column", gap: 16,
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 16,
                background: "#2b1600", border: "1px solid #f9a14433",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4em",
              }}>{card.icon}</div>
              <h3 style={{
                fontSize: "0.85em", color: "#ffffff", fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.4,
              }}>{card.title}</h3>
              <p style={{ fontSize: "0.78em", color: "#666", lineHeight: 1.8 }}>{card.desc}</p>
              <div style={{
                marginTop: "auto", padding: "8px 14px",
                background: "#1a0a00", borderRadius: 8,
                border: "1px solid #f9a14422",
              }}>
                <p style={{ fontSize: "0.62em", color: "#f9a14488" }}>→ {card.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA SECTION
      ════════════════════════════════════════════════════════════ */}
      <section
        className="platform-section"
        style={{
          padding: "100px 10% 120px",
          background: "#060606",
          borderTop: "1px solid #1a1a1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: "absolute", bottom: "-20%", left: "50%",
          transform: "translateX(-50%)",
          width: 800, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(249,161,68,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span style={{
            fontSize: "0.62em", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#f9a144",
            padding: "5px 18px", borderRadius: 50,
            background: "#2b1600", display: "inline-block", marginBottom: 28,
          }}>Ready to Begin?</span>

          <h2 style={{
            fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "-0.02em",
            lineHeight: 1.05, marginBottom: 24, maxWidth: 720, margin: "0 auto 24px",
          }}>
            Your African Trade<br />
            <span style={{ color: "#f9a144" }}>Infrastructure Starts Here</span>
          </h2>

          <p style={{
            fontSize: "0.9em", color: "#666", maxWidth: 500,
            margin: "0 auto 44px", lineHeight: 1.9,
          }}>
            Whether you're sourcing from Nigeria, shipping to the U.S., or building a cross-border business — Quinn Daisies provides the full operational stack to make it happen.
          </p>

          {/* Dual CTAs */}
          <div style={{
            display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
          }}>
            <Link to="/marketplace" className="platform-btn-primary" style={{ padding: "16px 32px 16px 18px" }}>
              <span style={{
                background: "#2b1600", borderRadius: 50, width: 38, height: 38,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1em", flexShrink: 0,
              }}>🛍</span>
              Browse the Marketplace
            </Link>
            <Link to="/register" className="platform-btn-secondary" style={{ padding: "16px 32px 16px 18px" }}>
              <span style={{
                background: "rgba(255,255,255,0.08)", borderRadius: 50, width: 38, height: 38,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1em", flexShrink: 0,
              }}>🚀</span>
              Get Started — It's Free
            </Link>
          </div>

          {/* Trust line */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 24, marginTop: 44, flexWrap: "wrap",
          }}>
            {["No setup fee", "Dedicated coordinator", "Documentation support included", "Cancel anytime"].map(trust => (
              <div key={trust} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ color: "#f9a144", fontSize: "0.8em" }}>✓</span>
                <span style={{ fontSize: "0.7em", color: "#555", textTransform: "uppercase", letterSpacing: "0.06em" }}>{trust}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}