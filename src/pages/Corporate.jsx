import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, MorphSVGPlugin);

const partnerAccreditations = [
  {
    name: "Federal Express",
    img: "https://res.cloudinary.com/renaissance-images/image/upload/v1789244198/QuinnDaisies/FedEx-removebg-preview_quimi8.png",
  },
  {
    name: "United Parcel Service",
    img: "https://res.cloudinary.com/renaissance-images/image/upload/v1789244198/QuinnDaisies/images-removebg-preview_xataab.png",
  },
  {
    name: "African Export-Import Bank",
    img: "https://res.cloudinary.com/renaissance-images/image/upload/v1789244198/QuinnDaisies/Afreximbank-removebg-preview_dowtcd.png",
  },
  {
    name: "United States",
    sub: "Department Of Commerce",
    img: "https://res.cloudinary.com/renaissance-images/image/upload/v1789244199/QuinnDaisies/United_States_DOC-removebg-preview_zrsmav.png",
  },
  {
    name: "Maryland",
    sub: "Department Of Commerce",
    img: "https://res.cloudinary.com/renaissance-images/image/upload/v1789244199/QuinnDaisies/Maryland_DOC-removebg-preview_kduvyk.png",
  },
  {
    name: "Dalsey, Hillblom, and Lynn.",
    img: "https://res.cloudinary.com/renaissance-images/image/upload/v1789244198/QuinnDaisies/DHL-removebg-preview_n2bhnn.png",
  },
];

const corporateLandingPool = [
  "https://res.cloudinary.com/renaissance-images/image/upload/v1776766959/QuinnDaisies/2151541915_wnesos.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778444163/2151541896_jeb7fg.jpg",
];

export default function Corporate() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const landingOverlayRef = useRef(null);
  const landingContentRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const [overlayImages, setOverlayImages] = useState([
    corporateLandingPool[0],
    corporateLandingPool[1],
    corporateLandingPool[2],
    corporateLandingPool[3],
  ]);
  const overlayColIndexRef = useRef(0);
  const overlayPoolIndexRef = useRef(4);

  useEffect(() => {
    if (isUnlocked) return;

    const interval = setInterval(() => {
      const nextImg =
        corporateLandingPool[
        overlayPoolIndexRef.current % corporateLandingPool.length
        ];
      overlayPoolIndexRef.current += 1;
      const targetCol = overlayColIndexRef.current;
      overlayColIndexRef.current = (overlayColIndexRef.current + 1) % 4;

      setOverlayImages((prev) => {
        const next = [...prev];
        next[targetCol] = nextImg;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isUnlocked]);

  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const pageRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  const pathRef = useRef(null);

  useGSAP(
    () => {
      if (!smoothWrapperRef.current || !smoothContentRef.current)
        return undefined;

      ScrollTrigger.config({ ignoreMobileResize: true });

      const existingSmoother = ScrollSmoother.get();
      if (existingSmoother) existingSmoother.kill();

      const smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: smoothContentRef.current,
        smooth: 1.2,
        smoothTouch: 0.1,
        effects: true,
        normalizeScroll: true,
      });

      ScrollTrigger.refresh();

      return () => {
        smoother.kill();
        ScrollTrigger.clearScrollMemory();
      };
    },
    { scope: pageRef },
  );

  useEffect(() => {
    ScrollReveal().reveal(".reveal__bottom", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__top", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__left", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__right", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__top__interval", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__left__interval", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__bottom__interval", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: false,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__right__interval", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: false,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    if (!isUnlocked) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isUnlocked]);

  const handleLearnMore = () => {
    if (isTransitioningRef.current || isUnlocked) return;
    isTransitioningRef.current = true;

    const path = pathRef.current;
    if (!path) {
      setIsUnlocked(true);
      isTransitioningRef.current = false;
      return;
    }

    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
    const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsUnlocked(true);
        isTransitioningRef.current = false;
        if (landingOverlayRef.current) {
          landingOverlayRef.current.style.display = "none";
          landingOverlayRef.current.style.pointerEvents = "none";
        }
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      },
    });

    // 1. Text & button fade out and rise
    tl.to(landingContentRef.current, {
      opacity: 0,
      y: -35,
      duration: 0.4,
      ease: "power2.in",
    });

    // 2. MorphSVG wave surges from bottom then fully covers screen
    tl.to(
      path,
      {
        morphSVG: start,
        ease: "power2.in",
        duration: 0.65,
      },
      "<0.05",
    ).to(path, {
      morphSVG: end,
      ease: "power2.out",
      duration: 0.65,
    });

    // 3. Once screen is covered, slide the curtain up to reveal the main page
    tl.to(landingOverlayRef.current, {
      yPercent: -100,
      duration: 0.85,
      ease: "power3.inOut",
    });
  };

  const handleReplayIntro = () => {
    if (isTransitioningRef.current || !isUnlocked) return;
    isTransitioningRef.current = true;

    if (landingOverlayRef.current) {
      landingOverlayRef.current.style.display = "flex";
      landingOverlayRef.current.style.pointerEvents = "auto";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    const path = pathRef.current;
    const resetPath = "M 0 100 V 100 Q 50 100 100 100 V 100 z";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsUnlocked(false);
        isTransitioningRef.current = false;
        ScrollTrigger.refresh();
      },
    });

    // Slide landing overlay back down
    tl.to(landingOverlayRef.current, {
      yPercent: 0,
      duration: 0.75,
      ease: "power3.inOut",
    });

    // Reset path back to bottom
    if (path) {
      tl.to(path, {
        morphSVG: resetPath,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }

    // Fade content back in
    tl.to(landingContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useGSAP(
    () => {
      const section = carouselSectionRef.current;
      const strip = carouselStripRef.current;
      if (!section || !strip) return;

      const getScrollAmount = () => -(strip.scrollWidth - window.innerWidth);

      gsap.to(strip, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: () => `+=${strip.scrollWidth - window.innerWidth}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: carouselSectionRef },
  );

  return (
    <>
      <SEO
        title="Corporate Overview & Leadership | Quinn Daisies Logistics"
        description="Explore Quinn Daisies Logistics corporate structure, executive leadership, transatlantic trade corridors, and institutional compliance standards connecting North America and West Africa."
        keywords="Quinn Daisies Logistics corporate overview, logistics leadership, transatlantic freight company, bilateral trade facilitation, US Nigeria logistics firm, institutional supply chain, Frederick MD logistics HQ"
        url="https://www.logistics.quinndaisies.com/corporate-overview"
      />

      <div ref={pageRef}>
        <Navbar />

        <div
          ref={landingOverlayRef}
          className="CorporateLandingOverlay"
          style={{ display: isUnlocked ? "none" : undefined }}
        >
          <div className="CorporateLandingBackdrop" />

          {overlayImages.map((src, idx) => (
            <img
              key={`${idx}-${src}`}
              src={src}
              alt="Quinn Daisies Corporate Infrastructure"
            />
          ))}

          <div className="ContentCtn-Center" ref={landingContentRef}>
            <span className="ContentCtn-Center-Span">Corporate Overview</span>
            <h1>
              Transatlantic Logistics Infrastructure That Powers Cross-Border Commerce
            </h1>
            <p>
              Bilateral logistics and trade execution bridge connecting North America and West Africa. We eliminate supply chain opacity, enforce origin-to-destination chain of custody, and manage end-to-end multi-modal freight forwarding to make global trade friction-free, compliant, and legally dependable.
            </p>

            <div className="reveal__bottom">
              <button className="ApplicationButton" onClick={handleLearnMore}>
                Click Here to Explore
                <span className="material-symbols-outlined">
                  globe_location_pin
                </span>
              </button>
            </div>
          </div>

          <div className="AdvanceTransitionWrapper">
            <svg
              className="AdvanceTransition"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern
                  id="corporateTransitionPattern"
                  patternUnits="userSpaceOnUse"
                  width="100"
                  height="100"
                >
                  <image
                    href="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                    xlinkHref="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
              </defs>
              <path
                ref={pathRef}
                className="path"
                fill="url(#corporateTransitionPattern)"
                vectorEffect="non-scaling-stroke"
                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
              />
            </svg>
          </div>
        </div>

        <div id="smooth-wrapper" ref={smoothWrapperRef}>
          <div id="smooth-content" ref={smoothContentRef}>
            <section className="AdvanceUpdateDesign">
              <img className="AdvanceUpdateDesignImage" src="https://res.cloudinary.com/renaissance-images/image/upload/v1789240372/QuinnDaisies/639176_xzxyky.jpg" alt="Quinn Daisies Image" />

              <div className="AdvanceUpdateDesignOverlay">
                <span className="AdvanceUpdateSpan">
                  Logistics engine and commercial execution bridge
                </span>

                <h2>Cross-border trade between developed economies and emerging African markets</h2>
                <p className="AdvanceUpdateText">Without dependable freight handling, pre-shipment quality verification, inland drayage, and customs clearance, global trade lanes collapse under counterparty risk and port-side bottlenecks.</p>
                <div className="AdvanceUpdateImagesItem">
                  <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789241208/QuinnDaisies/2151582422_fh3r2u.jpg" alt="Quinn Daisies Images" />
                  <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789241211/QuinnDaisies/2151696365_x4qg4l.jpg" alt="Quinn Daisies Images" />
                  <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789241211/QuinnDaisies/2151201356_lhykbe.jpg" alt="Quinn Daisies Images" />
                  <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789241235/QuinnDaisies/2150917100_eoytea.jpg" alt="Quinn Daisies Images" />
                  <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789241235/QuinnDaisies/2151831190_waonhm.jpg" alt="Quinn Daisies Images" />
                  <div className="AdvanceUpdateImagesContent">
                    <span className="material-symbols-outlined">globe</span>
                    <p>Over 200+ Clients</p>
                  </div>
                </div>

                <div className="AdvanceUpdateButtonContainer reveal__bottom">
                  <Link className="ApplicationButton" to="/services">
                    Explore Our Services
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="sectionBox">
              <div className="AdvanceImagesIconsItms AdvanceImagesIconsSlider" aria-label="Corporate partner accreditations">
                <div className="AdvanceImagesIconsItmsContainer AdvanceImagesIconsTrack">
                  {[...partnerAccreditations, ...partnerAccreditations, ...partnerAccreditations, ...partnerAccreditations].map((partner, index) => (
                    <div className="AdvanceImagesIconsItmsContainer AdvanceImagesIconsItem" key={index}>
                      <img src={partner.img} alt={partner.name} />
                      <p>
                        {partner.name}
                        {partner.sub && <span>{partner.sub}</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="AdvanceDesignStructureFlex">
                <div className="AdvanceDesignStructure">
                  <span className="AdvanceUpdateSpan">Dual-Entity Corporate Structure & Federal Standing</span>
                  <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766959/QuinnDaisies/2151541915_wnesos.jpg" alt="Quinn Daisies Image" />
                </div>

                <div className="AdvanceDesignStructure">
                  <p>We maintain a complementary corporate structure designed to provide U.S.-based contractual accountability and administrative capacity while supporting licensed and authorized operational activities in Nigeria. This structure enables the company to coordinate cross-border trade, logistics, procurement, and supply-chain activities through appropriate jurisdictional entities.</p>
                  <Link className="ApplicationButton" to="/about-us">
                    Learn More Here
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Corporate Governance & Operational Architecture
              </span>
              <h4 className="reveal__right">
                Dual-market structural integrity designed for U.S.-based contractual accountability and licensed African operational execution.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Dual-Entity Governance</h6>
                    <p>
                      Bilateral corporate architecture providing U.S. contractual recourse, banking governance, and licensed in-market execution.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Active Operating Footprint</h6>
                    <p>
                      Direct physical offices and authorized logistics hubs across Delaware, Maryland, and Lagos commercial corridors.
                    </p>
                  </div>
                  <h3>
                    2<text> Continents</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Commercial Settlement Accuracy</h6>
                    <p>
                      Institutional escrow frameworks, auditable milestone disbursement, and automated trade reconciliation protocols.
                    </p>
                  </div>
                  <h3>
                    99.9<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Statutory & Regulatory Alignment</h6>
                    <p>
                      Full federal and state compliance across export-import licensing, trade registries, and maritime transport authorizations.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Cross-border commercial execution demands structural integrity that transcends single-market limitations. Quinn Daisies maintains a complementary corporate structure designed to combine U.S.-based contractual enforceability, administrative capacity, and banking governance with licensed, on-the-ground operational execution across Nigeria and West Africa.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                By operating through integrated bilateral entities, we provide institutional shippers and international buyers with clear jurisdictional recourse, transparent compliance oversight, and unified operating accountability. This dual-market architecture eliminates counterparty uncertainty and ensures every trade milestone is legally enforceable and operationally sound.
              </p>
            </section>

            <section
              className="Dark-Background"
              id="CarouselAnimation"
              ref={carouselSectionRef}
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <h2 className="reveal__left">
                    Logistics Execution: The Foundation of Trade and Procurement
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Our operational foundation, coordinating reliable multimodal freight, consolidation, and delivery across international supply chains with a focus on visibility, control, and end-to-end execution.
                    </p>
                  </div>
                </div>

                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                  <div
                    className="ApplicationCarouselSlide"
                    ref={carouselStripRef}
                  >
                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Ocean Freight (FCL/LCL)</h2>
                        <p>Direct containerized export routes connecting Lagos Port Complex (Apapa/Tin Can Island) to major U.S. and transatlantic ports of entry, including Baltimore, Newark, Houston, and Savannah.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Air Cargo Consolidation</h2>
                        <p>Rapid, high-security clearance and express handling operated out of our physical base at NACHO, MMIA in Lagos, synchronized with major international cargo airlines and express carriers (DHL, FedEx, UPS).</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Inland Haulage & Drayage</h2>
                        <p>Managed road-transit pipelines moving containerized cargo between remote agricultural collection zones, industrial manufacturing hubs, and maritime container terminals.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Bonded Warehousing & Inventory Staging</h2>
                        <p>Secure intermediate staging facilities providing climate-controlled buffering, inventory consolidation, palletizing, and pre-export container preparation.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>200+ Vetted Origin Sourcing Network</h2>
                        <p>Direct logistics connectivity to an audited network of over 200 qualified Nigerian agricultural cooperatives, commodity aggregators, and commercial processors.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Pre-Shipment Inspection (PSI) Enforced</h2>
                        <p>Mandatory on-site sampling and chemical analysis through accredited third-party inspection agencies (SGS, Bureau Veritas, Cotecna) before cargo is sealed, verifying purity, moisture tolerances, aflatoxin limits, and phytosanitary metrics.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Trade Risk Hedging</h2>
                        <p>Mitigating the classic risks of transatlantic commerce—cargo adulteration, demurrage spirals, exchange-rate slippage, and contract default—by using structured commercial agreements executed through our U.S. entity.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="Dark-Background"
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <h2 className="reveal__left">
                    Mission-Critical Logistics, Procurement & Compliance
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      We deliver structured logistics and procurement solutions for government missions, diplomatic posts, institutional clients, and multilateral development programs, combining compliant sourcing, controlled fulfillment, and accountable supply-chain execution.
                    </p>
                  </div>
                </div>

                <div className="ApplicationPivotGrid">
                  <div className="ApplicationPivotGridLeft">
                    <div className="ApplicationPivotGridLeftItem">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg" alt="Quinn Daisies Images" />
                      <div className="ApplicationPivotGridLeftItemOverlay">
                        <span className="AdvanceUpdateSpan">01 — Institutional Procurement</span>
                        <h3 className="reveal__left">Government & Mission-Critical Procurement</h3>
                        <p className="ApplicationCarouselContainerText">We support institutional procurement requirements across technology, automotive, industrial, and operational categories, coordinating qualified sourcing, specification compliance, documentation, and delivery against defined mission requirements.</p>
                      </div>
                    </div>
                  </div>

                  <div className="ApplicationPivotGridRight">
                    <div className="ApplicationPivotGridRightFlex">
                      <div className="ApplicationPivotGridRightBox">
                        <div className="ApplicationPivotGridRightBoxContent">
                          <span className="AdvanceUpdateSpan">02 — Supply Chain Governance</span>
                          <h4 className="reveal__left">Controlled Cross-Border Fulfillment</h4>
                          <p className="ApplicationCarouselContainerText">Our fulfillment model combines verified suppliers, controlled routing, documented custody, and end-to-end shipment visibility for accountable domestic and international delivery.</p>
                        </div>
                        <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg" alt="Quinn Daisies Images" />
                      </div>

                      <div className="ApplicationPivotGridRightBox">
                        <div className="ApplicationPivotGridRightBoxContent">
                          <span className="AdvanceUpdateSpan">03 — Regulatory & Contract Compliance</span>
                          <h4 className="reveal__left">Federal Compliance & Procurement Integrity</h4>
                          <p className="ApplicationCarouselContainerText">We embed procurement, trade, security, and regulatory compliance into sourcing and fulfillment, with controls supporting due diligence, federal standards, and procurement integrity.</p>
                        </div>
                      </div>
                    </div>

                    <div className="ApplicationPivotGridRightBottomBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg" alt="Quinn Daisies Images" />
                      <div className="ApplicationPivotGridRightBottomBoxOverlay">
                        <span className="AdvanceUpdateSpan">04 — Mission Delivery</span>
                        <h3 className="reveal__left">Reliable Execution Across Complex Missions</h3>
                        <p className="ApplicationCarouselContainerText">From specialized equipment and fleet components to technology and operational supplies, we coordinate multi-party logistics, documentation, and delivery requirements to provide dependable execution for time-sensitive institutional and government missions.</p>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </section>

            <section
              className="Dark-Background"
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <div className="ApplicationSetupDetails reveal__left">

                    <h2 className="reveal__left">
                      What is Quinn Daisies Logistics Engine?
                    </h2>

                    <Link className="ApplicationButton" to="/our-mission-and-vision" style={{ marginTop: "1.5rem", width: "fit-content" }}>
                      Explore Now
                      <span className="material-symbols-outlined">
                        globe_location_pin
                      </span>
                    </Link>
                  </div>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      We deliver a high-yield, structured logistics framework that powers trade execution and capital efficiency between North America and African markets while maintaining strict federal compliance and chain-of-custody governance.
                    </p>
                  </div>
                </div>

                <div className="OverviewTrioGrid">
                  <div className="OverviewTrioCardWide reveal__bottom">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444163/2151541896_jeb7fg.jpg"
                      alt="Capital that grows"
                    />
                    <div className="OverviewTrioCardWideOverlay">
                      <div className="OverviewTrioCardTop">
                        <span className="AdvanceUpdateSpan">01 — Value Creation</span>
                        <h3>Capital that grows</h3>
                      </div>
                      <p>
                        Consolidate financing, multi-modal transport, and pre-shipment quality verification into one accountable pipeline that eliminates costly port delays and accelerates trade deployment.
                      </p>
                    </div>
                  </div>

                  <div className="OverviewTrioCardStandard reveal__bottom">
                    <div className="OverviewTrioCardTop">
                      <span className="AdvanceUpdateSpan">02 — Liquidity</span>
                      <h3>Always liquid, always stable</h3>
                    </div>
                    <p>
                      Maintain transparent cost structures and predictable transit timelines with documented origin-to-destination chain of custody across transatlantic corridors — no lockups or delays.
                    </p>
                  </div>

                  <div className="OverviewTrioCardStandard reveal__bottom">
                    <div className="OverviewTrioCardTop">
                      <span className="AdvanceUpdateSpan">03 — Execution</span>
                      <h3>100% hands-free</h3>
                    </div>
                    <p>
                      No need to manage complex freight logistics manually. Quinn Daisies coordinates regulatory compliance, carrier routing, and customs clearance in the background for you.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="Dark-Background"
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <div className="ApplicationSetupDetails reveal__left">
                    <span className="AdvanceUpdateSpan">Market We Serve</span>
                    <h2 className="reveal__left">Connecting global commerce corridors</h2>
                  </div>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">Explore our established freight connectivity, bonded customs clearance, and multimodal logistics infrastructure bridging key commercial hubs worldwide.</p>
                  </div>
                </div>

                <div className="FeatureCardsGrid">
                  {/* Card 1: Light Theme */}
                  <div className="FeatureCard FeatureCard--light reveal__bottom">
                    <div className="FeatureCardTop">
                      <div className="FeatureCardIcon">
                        <span className="material-symbols-outlined">public</span>
                      </div>
                      <div className="FeatureCardContent">
                        <h3 className="FeatureCardHeading">North America (US & Canada)</h3>
                        <p className="FeatureCardText">
                          Comprehensive trans-Atlantic and overland freight connectivity, bonded customs clearance, FDA compliance, and multi-state distribution.
                        </p>
                      </div>
                    </div>

                    <div className="FeatureCardNotch">
                      <Link to="/north-america" className="ApplicationButton">
                        <span>Explore More</span>
                        <span className="material-symbols-outlined">globe_location_pin</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: Accent Theme with Decorative Arcs */}
                  <div className="FeatureCard FeatureCard--accent reveal__bottom">
                    <svg
                      className="FeatureCardPattern"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" />
                    </svg>

                    <div className="FeatureCardTop">
                      <div className="FeatureCardIcon">
                        <span className="material-symbols-outlined">travel_explore</span>
                      </div>
                      <div className="FeatureCardContent">
                        <h3 className="FeatureCardHeading">Europe</h3>
                        <p className="FeatureCardText">
                          Direct trade corridor facilitation to Western and Northern Europe, navigating EU import directives, VAT compliance, and multimodal transport.
                        </p>
                      </div>
                    </div>

                    <div className="FeatureCardNotch">
                      <Link to="/europe" className="ApplicationButton">
                        <span>Explore More</span>
                        <span className="material-symbols-outlined">globe_location_pin</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 3: Deep Dark Contrast Card */}
                  <div className="FeatureCard FeatureCard--dark reveal__bottom">
                    <div className="FeatureCardTop">
                      <div className="FeatureCardIcon">
                        <span className="material-symbols-outlined">hub</span>
                      </div>
                      <div className="FeatureCardContent">
                        <h3 className="FeatureCardHeading">Asia</h3>
                        <p className="FeatureCardText">
                          Strategic logistics hubs linking manufacturing epicenters and consumer markets across Asia with competitive sea and air freight routing.
                        </p>
                      </div>
                    </div>

                    <div className="FeatureCardNotch">
                      <Link to="/asia" className="ApplicationButton">
                        <span>Explore More</span>
                        <span className="material-symbols-outlined">globe_location_pin</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
