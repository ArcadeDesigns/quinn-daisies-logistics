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
  QuoteMarkPinkSvg,
} from "../components/QuinnGoogleAssets";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const DesktopDevelopmentPage = () => {
  const containerRef = useRef(null);

  const desktopStacks = [
    {
      name: "C# WPF & WinUI 3",
      role: "Native Windows Workstation Suites",
      detail: "DirectX-accelerated .NET 8 desktop applications, MVVM architecture, multi-monitor docking & high-frequency grids.",
      bg: "#2b1600",
      fg: "#f9a144",
    },
    {
      name: "Python Kivy (OpenGL)",
      role: "Multi-Touch Industrial HMIs & Kiosks",
      detail: "GPU-accelerated OpenGL ES 2.0 touchscreens for warehouse sortation, medical terminals & rugged Linux/Windows kiosks.",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Python Flet (Flutter)",
      role: "Cross-OS Desktop Cockpits",
      detail: "Sleek Windows, macOS, and Linux desktop applications rendered by Flutter and written in 100% pure Python.",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: ".NET MAUI Desktop",
      role: "Windows & macOS Unified C#",
      detail: "Single-project C# desktop compilation targeting Windows App SDK (WinUI 3) and macOS Mac Catalyst.",
      bg: "#f5efe8",
      fg: "#1e1e1e",
    },
    {
      name: "JavaFX & Swing",
      role: "Cross-Platform JVM Workstations",
      detail: "Mission-critical command-and-control desktop consoles for financial, defense, and rail/port dispatch.",
      bg: "#2b1600",
      fg: "#ffffff",
    },
    {
      name: "Hardware & PLC I/O",
      role: "Serial, USB, Modbus & OPC-UA",
      detail: "Direct integration with industrial scales, RFID tunnels, thermal label printers, barcode guns & PLC controllers.",
      bg: "#fff4e6",
      fg: "#2b1600",
    },
    {
      name: "Offline-First SQLite",
      role: "Zero-Latency Local Persistence",
      detail: "Encrypted SQLCipher / SQLite local storage with automatic background cloud synchronization to SQL Server/PostgreSQL.",
      bg: "#f5efe8",
      fg: "#2b1600",
    },
    {
      name: "MSIX & Auto-Update",
      role: "Enterprise Packaging & Intune",
      detail: "Code-signed MSIX, Windows Installer, ClickOnce, and Linux AppImage/Snap silent auto-update pipelines.",
      bg: "#3d2000",
      fg: "#f9a144",
    },
    {
      name: "Legacy WinForms Migration",
      role: "VB6 / WinForms / MFC Modernization",
      detail: "Modernize legacy Windows desktop software to .NET 8 WPF/WinUI 3 or Python Flet without losing hardware drivers.",
      bg: "#fff4e6",
      fg: "#1e1e1e",
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
      gsap.fromTo(
        ".cloud-hero-section .glue-grid__col:first-child > *",
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
        ".cloud-hero-section .cloud-floating-photo-card",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      // 2. Section 2 Reveal (Two-Track Desktop Architecture)
      gsap.fromTo(
        ".cloud-google-benefits-container .cloud-benefit-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cloud-google-benefits-container",
            start: "top 78%",
          },
        }
      );

      // 3. Section 3 Showcase Grid Reveal
      gsap.fromTo(
        ".bsp-logo-showcase-grid .bsp-logo-tile",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bsp-logo-showcase-grid",
            start: "top 82%",
          },
        }
      );

      // 4. Section 4 Quote Section Reveal
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
    <div ref={containerRef} className="quinn-tech-google-root">
      <SEO
        title="Desktop Application Development (C# WPF, WinUI 3, Python Kivy, Python Flet, Java) | Quinn Daisies"
        description="High-performance Native and Cross-Platform Desktop Application Development by Quinn Daisies Technology: C# .NET 8 WPF & WinUI 3, Python Kivy industrial touch HMIs, Python Flet (Flutter) desktop apps, and hardware integration."
        keywords="desktop application development, C# WPF development, WinUI 3 .NET 8, Python Kivy desktop HMI, Python Flet desktop app, industrial touchscreen software, Windows macOS Linux desktop engineering"
        canonicalUrl="/desktop-application-development"
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
            QUINN DAISIES DESKTOP SYSTEMS ENGINEERING • C# WPF • WINUI 3 • PYTHON KIVY • PYTHON FLET • JAVAFX
          </span>
          <StripeTape210 />
        </div>
      </div>

      {/* SECTION 1: 2-COLUMN HERO WITH FLOATING PHOTO CARD */}
      <section className="cloud-hero-section accelerator-landing-hero">
        <div className="glue-page">
          <div className="glue-grid" style={{ alignItems: "center" }}>
            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <span
                    style={{
                      background: "#fff3e3",
                      color: "#2b1600",
                      border: "1px solid rgba(249, 161, 68, 0.45)",
                      padding: "6px 14px",
                      borderRadius: 999,
                      fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                    }}
                  >
                    WINDOWS • MACOS • LINUX • INDUSTRIAL TOUCH KIOSKS &amp; HMIs
                  </span>
                </div>

                <h1 className="glue-headline glue-headline--headline-1" style={{ marginBottom: 20 }}>
                  High-performance desktop &amp; HMI software{" "}
                  <span className="decorated-text underline">without compromise</span>
                </h1>

                <p
                  style={{
                    color: "#3b3b3b",
                    fontSize: "var(--qd-font-size-body-large, 1.15em)",
                    lineHeight: 1.7,
                    marginBottom: 28,
                  }}
                >
                  When browser tabs aren&apos;t enough, Quinn Daisies engineers native, hardware-accelerated desktop
                  applications and multi-touch industrial terminals using{" "}
                  <strong>C# (.NET 8 WPF, WinUI 3, .NET MAUI)</strong>, <strong>Python Kivy</strong>,{" "}
                  <strong>Python Flet (Flutter)</strong>, and <strong>JavaFX</strong>.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Discuss Your Desktop Architecture</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                  <div style={{ display: "inline-flex", alignItems: "center" }} aria-hidden="true">
                    <StripeTape83 fill="#f9a144" />
                  </div>
                </div>
              </div>
            </div>

            <div className="glue-grid__col glue-grid__col--span-6 glue-grid__col--align-middle">
              <div className="cloud-floating-photo-card">
                <div className="cloud-floating-photo-tape">
                  <StripeTape83 fill="#f9a144" />
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FNeon%20Africa_%20A%20Visionary%20Future.png?alt=media&token=71ff0b6e-c3ee-4386-a68b-430e5dd89454"
                  alt="Quinn Daisies Desktop Application and Industrial HMI Engineering"
                  style={{
                    width: "100%",
                    height: 380,
                    objectFit: "cover",
                    borderRadius: 16,
                  }}
                />
                <div
                  style={{
                    marginTop: 14,
                    background: "#fff7ef",
                    border: "1px solid #e6ddd3",
                    borderRadius: 12,
                    padding: "12px 16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <div>
                    <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", color: "#c86d10", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>
                      Native Workstation &amp; Kiosk Runtimes
                    </span>
                    <span style={{ fontSize: "var(--qd-font-size-eyebrow, 0.8em)", fontWeight: 600, color: "#2b1600" }}>
                      C# WPF &amp; WinUI 3 • Python Kivy • Python Flet
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                      background: "#2b1600",
                      color: "#f9a144",
                      padding: "4px 14px",
                      borderRadius: 999,
                      fontWeight: 500,
                    }}
                  >
                    60fps GPU Rendering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CREAM BENEFITS CONTAINER */}
      <section id="desktop-architectures" className="cloud-google-benefits-container">
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 56px" }}>
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
              NATIVE WINDOWS &amp; CROSS-OS DESKTOP SPECIALIZATION
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Engineered for heavy data, hardware I/O &amp;{" "}
              <span className="decorated-text underline">offline resilience</span>
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                maxWidth: 780,
                margin: "16px auto 0",
              }}
            >
              From high-density C# WPF trading and dispatch desks to GPU-accelerated Python Kivy touchscreens and cross-OS Flutter-powered Flet cockpits, we engineer desktop software that never crashes or locks the UI.
            </p>
          </div>

          {/* Row 1: C# / .NET 8 WPF, WinUI 3 & Windows Workstations */}
          <div className="cloud-benefit-row">
            <div className="glue-grid" style={{ alignItems: "center" }}>
              <div className="glue-grid__col glue-grid__col--span-6">
                <div className="cloud-floating-photo-card">
                  <div className="cloud-floating-photo-tape">
                    <StripeTape83 fill="#f9a144" />
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60"
                    alt="C# WPF and WinUI 3 Multi-Monitor Workstation Software"
                    style={{ height: 360, objectFit: "cover", width: "100%", borderRadius: 16 }}
                  />
                  <div style={{ marginTop: -12, marginLeft: 28 }}>
                    <StripeTape91 fill="#2b1600" />
                  </div>
                </div>
              </div>

              <div className="glue-grid__col glue-grid__col--span-6">
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
                    desktop_windows
                  </span>
                </div>

                <span
                  className="glue-eyebrow"
                  style={{
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    color: "#2b1600",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    display: "block",
                    marginBottom: 8,
                  }}
                >
                  TRACK 01 • C# / .NET 8 WPF, WINUI 3 &amp; WINDOWS WORKSTATIONS
                </span>
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 18 }}>
                  Enterprise Windows Desktop Suites &amp; Legacy WinForms Modernization
                </h3>
                <ul className="cloud-standards-list">
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Multi-Monitor Command &amp; Dispatch Consoles:</strong> High-density data grids capable
                      of streaming 100,000+ live rows/sec via gRPC and SignalR with zero UI thread blocking.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Direct Hardware &amp; Peripheral Control:</strong> Native RS-232/RS-485 serial ports, USB
                      HID, Zebra ZPL label printers, weighbridges, smart-card CAC/PIV readers, and PLC controllers.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Enterprise MSIX &amp; Intune Deployment:</strong> Code-signed installers with automatic
                      delta updates and Group Policy / Microsoft Intune configuration.
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Architect Windows Desktop Suite</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Python Kivy & Python Flet Cross-Platform Desktop */}
          <div className="cloud-benefit-row">
            <div className="glue-grid" style={{ alignItems: "center" }}>
              <div className="glue-grid__col glue-grid__col--span-6">
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
                    touch_app
                  </span>
                </div>

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
                  TRACK 02 • PYTHON KIVY (OPENGL) &amp; PYTHON FLET (FLUTTER ENGINE)
                </span>
                <h3 className="glue-headline glue-headline--headline-4" style={{ marginBottom: 18 }}>
                  Multi-Touch Industrial HMIs (Kivy) &amp; Cross-OS AI Desktop Apps (Flet)
                </h3>
                <ul className="cloud-standards-list">
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Python Kivy Multi-Touch Terminals:</strong> Custom OpenGL ES 2.0 touch interfaces for
                      warehouse sortation floors, manufacturing lines, medical devices, and self-service kiosks on
                      Windows, Linux, and Raspberry Pi/Jetson edge devices.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Python Flet Executive &amp; Operational Apps:</strong> Build modern, Flutter-rendered
                      desktop applications for Windows, macOS, and Linux in pure Python — with direct access to PyTorch,
                      ONNX, pandas, and local LLM/RAG models.
                    </span>
                  </li>
                  <li>
                    <GreenTickSvg />
                    <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                      <strong>Offline-First Operation:</strong> Local encrypted SQLite databases ensure 100% operational
                      continuity during network outages with automatic background sync when reconnected.
                    </span>
                  </li>
                </ul>

                <div style={{ marginTop: 24 }}>
                  <Link
                    to="/technology-contact-us"
                    className="ApplicationButton glue-button glue-button--high-emphasis"
                  >
                    <span>Build Touchscreen / Python Desktop</span>
                    <span className="material-symbols-outlined">memory</span>
                  </Link>
                </div>
              </div>

              <div className="glue-grid__col glue-grid__col--span-6">
                <div className="cloud-floating-photo-card">
                  <div className="cloud-floating-photo-tape">
                    <StripeTape83 fill="#c86d10" />
                  </div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_vqyaewvqyaewvqya.jpg?alt=media&token=9f82c276-ae95-4e6b-9964-3c7b324fa358"
                    alt="Python Kivy and Python Flet Cross-Platform Desktop Engineering"
                    style={{ height: 360, objectFit: "cover", width: "100%", borderRadius: 16 }}
                  />
                  <div style={{ marginTop: -12, marginRight: 28, display: "flex", justifyContent: "flex-end" }}>
                    <StripeTape91 fill="#c86d10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 9-TILE DESKTOP STACK SHOWCASE GRID */}
      <section style={{ padding: "96px 0", background: "#ffffff" }}>
        <div className="glue-page">
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 48px" }}>
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
              COMPLETE DESKTOP ENGINEERING CAPABILITIES
            </span>
            <h2 className="glue-headline glue-headline--headline-2">
              Every desktop runtime &amp;{" "}
              <span className="decorated-text underline">hardware interface</span>
            </h2>
            <p
              style={{
                color: "#3b3b3b",
                fontSize: "var(--qd-font-size-body-large, 1.15em)",
                lineHeight: 1.7,
                maxWidth: 780,
                margin: "16px auto 0",
              }}
            >
              Explore our desktop and edge software engineering matrix—architecting native C# .NET 8 WinUI applications, GPU-accelerated Python Kivy HMIs, and Flutter-based Python Flet cross-platform cockpits.
            </p>
          </div>

          <div className="bsp-logo-showcase-grid">
            {desktopStacks.map((item) => (
              <div key={item.name} className="bsp-logo-tile">
                <div
                  style={{
                    background: item.bg,
                    color: item.fg,
                    padding: "6px 16px",
                    borderRadius: 999,
                    fontWeight: 500,
                    fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                    marginBottom: 6,
                    border: "1px solid rgba(249, 161, 68, 0.35)",
                    display: "inline-block",
                  }}
                >
                  {item.name}
                </div>
                <h3
                  className="glue-headline glue-headline--headline-5"
                  style={{
                    fontWeight: 600,
                    fontSize: "var(--qd-font-size-h5, 1.35em)",
                    color: "#1e1e1e",
                    margin: "4px 0",
                  }}
                >
                  {item.role}
                </h3>
                <p
                  style={{
                    fontSize: "var(--qd-font-size-body, 1em)",
                    lineHeight: 1.6,
                    color: "#3b3b3b",
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WARM CREAM LEADERSHIP QUOTE SECTION */}
      <section className="accelerator-home-quote">
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
                &ldquo;Desktop and HMI engineering demands uncompromising stability—whether controlling high-speed industrial sortation PLCs or streaming 100k data points/sec across multi-monitor trader consoles, the UI must never drop a frame or lock a thread.&rdquo;
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
                PRINCIPAL DESKTOP &amp; INDUSTRIAL SYSTEMS ARCHITECT
              </span>
              <p style={{ color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", margin: 0 }}>
                Quinn Daisies Technology &amp; Industrial Systems Division
              </p>
            </div>

            <div className="glue-grid__col glue-grid__col--span-5 glue-grid__col--align-middle">
              <div style={{ position: "relative" }}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ppcb8nppcb8nppcb.jpg?alt=media&token=559a6c92-8f13-49a7-a190-a8250d8b66d2"
                  alt="Quinn Daisies Enterprise Desktop Leadership"
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

    </div>
  );
};

export default DesktopDevelopmentPage;
