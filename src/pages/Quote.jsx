import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Form from "./components/Quote/Form";

gsap.registerPlugin(ScrollTrigger, Flip);

const heroSlides = [
  {
    span: "Transparent Freight & Trade Cost Projections",
    h1: "Precision Logistics Quotations Built for Predictable Execution",
    p: "Get customized ocean freight, air cargo, origin sourcing, and enterprise technology quotations with transparent itemized pricing, zero hidden port fees, and guaranteed transit schedules.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Direct Corridors | End-to-End Control",
    h1: "From Farmgate & Factory Floor to Final Destination Port",
    p: "Covering pre-shipment inspection, container consolidation, export documentation, customs clearance, and inland drayage across the United States, Nigeria, and global markets.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Sub-4-Hour Turnaround | Executive Governance",
    h1: "Dedicated Commercial Planners Reviewing Every Specification",
    p: "Submit your shipment or project parameters to receive an actionable, legally backed commercial proposal formulated under U.S. contractual standards.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 8000;

const quotePillars = [
  {
    icon: "directions_boat",
    title: "Multimodal Ocean & Air Freight",
    text: "Direct containerized shipping (FCL/LCL) between Lagos ports (Apapa/Tin Can) and U.S. East Coast ports, plus express air freight via NACHO MMIA.",
  },
  {
    icon: "biotech",
    title: "Origin Sourcing & Quality Assays",
    text: "Export-grade sesame, ginger, cocoa, and minerals sourced from audited cooperatives with mandatory SGS/Cotecna pre-shipment testing.",
  },
  {
    icon: "terminal",
    title: "Software & AI Engineering",
    text: "Turnkey enterprise applications, mobile platforms, custom AI/LLM models, and cloud DevOps pipelines with full client IP transfer.",
  },
  {
    icon: "inventory_2",
    title: "Institutional Procurement & Storage",
    text: "Government, diplomatic, and mission-critical procurement solutions backed by secure bonded warehousing and verifiable chain of custody.",
  },
];

// 4-Stage Quotation & Delivery Lifecycle (BizMaster pattern)
const quotationLifecycleSteps = [
  {
    num: "01",
    icon: "assignment",
    title: "Scope & Parameter Intake",
    desc: "Submit your shipment volume, container types, agricultural grade, or software requirements through our structured intake engine.",
    deliverable: "Deliverable: Logged Commercial Scope File",
  },
  {
    num: "02",
    icon: "route",
    title: "Route & Duty Optimization",
    desc: "Our trade compliance officers evaluate HS classifications, AGOA tariff exemptions, and current maritime slot availability.",
    deliverable: "Deliverable: Route Feasibility & Duty Matrix",
  },
  {
    num: "03",
    icon: "receipt_long",
    title: "Binding Itemized Proposal",
    desc: "Receive an all-inclusive quotation detailing ocean/air freight, origin assays, terminal handling, and customs clearance with zero hidden fees.",
    deliverable: "Deliverable: Formal Commercial Agreement",
  },
  {
    num: "04",
    icon: "local_shipping",
    title: "Bonded Staging & Milestone Execution",
    desc: "Cargo allocation, container stuffing, pre-shipment inspection, and live telemetry tracking with dedicated operations support.",
    deliverable: "Deliverable: Bill of Lading & Custody Telemetry",
  },
];

// Quotation FAQ Accordion (Growify pattern)
const quotationFaqs = [
  {
    q: "How are Quinn Daisies freight quotations calculated?",
    a: "Our quotations are formulated using direct carrier contract allocations, current bunker/fuel indices, origin testing requirements, and precise terminal handling tariffs. We itemize every component upfront so there are no unexpected demurrage or terminal charges upon cargo arrival.",
  },
  {
    q: "How fast will I receive my formal quotation?",
    a: "Standard container freight and agricultural origin quotes are returned within 4 business hours. Complex project cargo, multi-origin agricultural consolidation, and custom software engineering RFPs are comprehensively scoped within 24 hours.",
  },
  {
    q: "Are customs duties and pre-shipment inspections included in the rate?",
    a: "Yes, when you request a DDP (Delivered Duty Paid) or turnkey quotation, all destination customs brokerage, harbor maintenance fees, merchandise processing fees (MPF), and mandatory SGS/Cotecna origin assays are fully integrated.",
  },
  {
    q: "What payment structures and currencies are supported?",
    a: "Transactions are executed through our U.S. corporate entity in USD. We support irrevocable Letters of Credit (LC), structured escrow milestones, wire transfers, and verified trade credit facilities for approved institutional buyers.",
  },
  {
    q: "Can I quote for combined air cargo and ocean container freight?",
    a: "Yes. Many clients split consignments into urgent air cargo via our NACHO MMIA airport desk for rapid market access and bulk maritime shipping via Apapa/Tin Can ports for volume cost optimization.",
  },
];

export default function Quote() {
  useSmoothScroll();

  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const activeSlideRef = useRef(0);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const containerRef = useRef(null);
  const pageRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  const galleryWrapRef = useRef(null);
  const galleryCleanupRef = useRef(null);
  const serviceGalleryEight = useRef(null);

  // Hero auto-slider animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const next = (activeSlideRef.current + 1) % heroSlides.length;

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });

      tl.to(heroContentRef.current, {
        opacity: 0,
        y: -40,
        duration: 0.45,
        ease: "power2.in",
      }).to(
        heroBgRef.current,
        {
          opacity: 0,
          scale: 1.04,
          duration: 0.45,
          ease: "power2.in",
        },
        "<",
      );

      tl.add(() => {
        activeSlideRef.current = next;
        setActiveSlide(next);
      });

      tl.set(heroContentRef.current, { y: 50 })
        .to(heroContentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        })
        .to(
          heroBgRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          "<",
        );
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // ScrollSmoother setup
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

  // ScrollReveal setup
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

  // GSAP Zooming Animation (Flip with expoScale)
  useLayoutEffect(() => {
    let isActive = true;

    const createGalleryTween = () => {
      if (
        !isActive ||
        !serviceGalleryEight.current ||
        !galleryWrapRef.current
      ) {
        return;
      }

      galleryCleanupRef.current?.();

      const galleryElement = serviceGalleryEight.current;
      const galleryItems = galleryElement.querySelectorAll(
        ".ServiceGalleryItem",
      );

      if (!galleryItems.length) return;

      galleryElement.classList.remove("ServiceGalleryFinal");

      const ctx = gsap.context(() => {
        galleryElement.classList.add("ServiceGalleryFinal");
        const flipState = Flip.getState(galleryItems);
        galleryElement.classList.remove("ServiceGalleryFinal");

        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: galleryWrapRef.current,
            invalidateOnRefresh: true,
          },
        });

        tl.add(flip);

        galleryCleanupRef.current = () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          ctx.revert();
          galleryElement.classList.remove("ServiceGalleryFinal");
          gsap.set(galleryItems, { clearProps: "all" });
        };
      }, galleryWrapRef);
    };

    const handleResize = () => {
      if (!isActive) return;
      createGalleryTween();
      ScrollTrigger.refresh();
    };

    const initAll = () => {
      if (!isActive) return;
      createGalleryTween();
      window.addEventListener("resize", handleResize);
      ScrollTrigger.refresh();
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(initAll);
    } else {
      initAll();
    }

    return () => {
      isActive = false;
      window.removeEventListener("resize", handleResize);
      galleryCleanupRef.current?.();
    };
  }, []);

  // GSAP ApplicationBox scroll stagger
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".ApplicationBox");
      boxes.forEach((box) => {
        gsap.to(box, {
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: containerRef },
  );

  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <SEO
        title="Get an Instant Freight & Logistics Quote | Quinn Daisies Logistics"
        description="Request an instant enterprise quote for air freight, ocean containers, cold chain, bulk agricultural commodities, and logistics software development."
        keywords="freight quote, shipping cost calculator, international cargo quote, air freight quote, ocean freight rates, commodity pricing, supply chain quote Maryland Lagos"
        url="https://www.logistics.quinndaisies.com/get-a-quote"
      />

      <div ref={pageRef}>
        <Navbar />

        <div id="smooth-wrapper" ref={smoothWrapperRef}>
          <div id="smooth-content" ref={smoothContentRef}>
            {/* HERO SECTION: OpportunityAppCtn with rotating slides */}
            <section className="OpportunityAppCtn">
              <div className="OpportunityAppHeader">
                <div className="ContentCtn-Center" ref={heroContentRef}>
                  <span className="ContentCtn-Center-Span">
                    {currentSlide.span}
                  </span>
                  <h1>{currentSlide.h1}</h1>
                  <p>{currentSlide.p}</p>
                </div>

                <div className="HeroSlideIndicators">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      className={`HeroSlideIndicatorDot${
                        i === activeSlide ? " is-active" : ""
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => {
                        if (
                          isAnimatingRef.current ||
                          i === activeSlideRef.current
                        )
                          return;
                        isAnimatingRef.current = true;

                        const tl = gsap.timeline({
                          onComplete: () => {
                            isAnimatingRef.current = false;
                          },
                        });

                        tl.to(heroContentRef.current, {
                          opacity: 0,
                          y: -40,
                          duration: 0.45,
                          ease: "power2.in",
                        })
                          .to(
                            heroBgRef.current,
                            {
                              opacity: 0,
                              scale: 1.04,
                              duration: 0.45,
                              ease: "power2.in",
                            },
                            "<",
                          )
                          .add(() => {
                            activeSlideRef.current = i;
                            setActiveSlide(i);
                          })
                          .set(heroContentRef.current, { y: 50 })
                          .to(heroContentRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 0.55,
                            ease: "power3.out",
                          })
                          .to(
                            heroBgRef.current,
                            {
                              opacity: 1,
                              scale: 1,
                              duration: 0.55,
                              ease: "power3.out",
                            },
                            "<",
                          );
                      }}
                    />
                  ))}
                </div>

                <div className="SingleBtnCtn-Center reveal__bottom">
                  <a className="ApplicationButton" href="#quote-form-section">
                    Complete Quote Request
                    <span className="material-symbols-outlined">
                      arrow_downward
                    </span>
                  </a>
                </div>
              </div>

              <div className="BackgroundImage" ref={heroBgRef}>
                {currentSlide.images.map((img, index) => (
                  <img
                    key={`${activeSlide}-${index}`}
                    src={img}
                    alt={`Quinn Daisies Quote — slide ${
                      activeSlide + 1
                    }, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* TEMPLATE SECTION 1: CONTINUOUS TICKER MARQUEE (Template 1) */}
            <div className="TemplateMarqueeSection">
              <div className="TemplateMarqueeTrack">
                <span className="TemplateMarqueeItem">
                  Transparent Commercial Quotations
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Direct Port-to-Port Freight Pricing
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Zero Hidden Port or Demurrage Fees
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Sub-4-Hour Formal Response SLA
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Enforceable Contracts Under U.S. Law
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Bonded Origin Staging & Inspection
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                {/* Repeat for seamless infinite scroll */}
                <span className="TemplateMarqueeItem">
                  Transparent Commercial Quotations
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Direct Port-to-Port Freight Pricing
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Zero Hidden Port or Demurrage Fees
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Sub-4-Hour Formal Response SLA
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Enforceable Contracts Under U.S. Law
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Bonded Origin Staging & Inspection
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
              </div>
            </div>

            {/* SECTION 2: 4 CORE QUOTE PILLARS */}
            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Select Your Operational Requirements
                </h2>
              </div>

              <div className="ApplicationContainer">
                {quotePillars.map((item, index) => (
                  <div className="ApplicationBox" key={index}>
                    <span className="BoxIcon material-symbols-outlined">
                      {item.icon}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* TEMPLATE SECTION 2: SPLIT HIGHLIGHT BAR (Template 3 - BizMaster) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateSplitHighlightBar reveal__bottom">
                <div className="TemplateHighlightLeft">
                  <h3>Need an Immediate Transatlantic Quotation?</h3>
                  <p>
                    Submit your cargo parameters, destination ports, or engineering scopes
                    for guaranteed itemized pricing and transit timetables.
                  </p>
                </div>
                <div className="TemplateHighlightRight">
                  <div className="TemplateHighlightRightMeta">
                    <div className="TemplateHighlightCount">
                      <h4>&lt; 4-Hour Response SLA</h4>
                      <span>Senior Commercial Directors</span>
                    </div>
                  </div>
                  <a href="#quote-form-section" className="TemplateHighlightBtn">
                    <span>Jump to Quote Form</span>
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      arrow_downward
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* TEMPLATE SECTION 3: 4-STAGE QUOTATION PROCESS (Template 3 - BizMaster) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Quotation & Execution</span>
                <h2 className="TemplateProcessTitle">
                  From Scope Intake to Delivery Verification
                </h2>
                <p className="TemplateProcessSubtitle">
                  A transparent 4-stage process designed to eliminate pricing ambiguity,
                  ensure tariff accuracy, and deliver predictable commercial outcomes.
                </p>
              </div>

              <div className="TemplateProcessCardsGrid">
                {quotationLifecycleSteps.map((step, idx) => (
                  <div key={idx} className="TemplateProcessStepCard reveal__bottom">
                    <div className="TemplateProcessCardTop">
                      <span className="TemplateProcessStepNumber">{step.num}</span>
                      <div className="TemplateProcessStepIconWrap">
                        <span className="material-symbols-outlined">
                          {step.icon}
                        </span>
                      </div>
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                    <span className="TemplateProcessStepDeliverable">
                      {step.deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TEMPLATE SECTION 4: CONNECTED STATS ROW (Template 1) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateConnectedStatsRow reveal__bottom">
                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>&lt; 4h</h3>
                    <p>Formal Response SLA</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">visibility</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>100%</h3>
                    <p>Itemized Clarity</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">savings</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>$0</h3>
                    <p>Hidden Port Surcharges</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">verified</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>99.9%</h3>
                    <p>Invoice Price Match</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: FORM SECTION */}
            <div id="quote-form-section">
              <Form />
            </div>

            {/* SECTION 4: PRICING INTEGRITY & STATS (ServicesInformation) */}
            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Pricing Integrity & Contractual Guarantees
              </span>
              <h4 className="reveal__right">
                Transparent itemized cost modeling designed to eliminate demurrage spirals,
                unexpected customs surcharges, and currency slippage.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Formal Quote Turnaround</h6>
                    <p>
                      Comprehensive logistics analysis and price modeling delivered
                      directly to your executive team.
                    </p>
                  </div>
                  <h3>
                    &lt; 4<span> Hours</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Itemized Transparency</h6>
                    <p>
                      Zero hidden terminal handling or surprise storage fees. Every
                      cost is explicitly indexed and agreed upfront.
                    </p>
                  </div>
                  <h3>
                    100<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Direct Port-to-Port Tracking</h6>
                    <p>
                      End-to-end shipment custody monitoring from Nigerian origin
                      aggregation to North American destination arrival.
                    </p>
                  </div>
                  <h3>
                    2<span> Continents</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Milestone Pricing Accuracy</h6>
                    <p>
                      Invoices match quotes exactly, backed by bilateral U.S. contractual
                      governance and milestone release protocols.
                    </p>
                  </div>
                  <h3>
                    99.9<span>%</span>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                In cross-border trade, unexpected port fees, demurrage charges, and
                opaque carrier tariff surcharges can quickly destroy commercial margins.
                Quinn Daisies operates with complete financial and operational transparency.
                Every quotation we provide includes an itemized breakdown of ocean or air freight,
                origin testing, port handling, customs duties, and final inland transport.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Because our commercial contracts are executed through our U.S. entity,
                international buyers benefit from enforceable service level agreements,
                stable exchange-rate indexing, and transparent escrow payment terms.
                We eliminate counterparty risk and protect your capital from origin to destination.
              </p>
            </section>

            {/* SECTION 5: GSAP ZOOMING ANIMATION (ServiceGallerySection with expoScale Flip) */}
            <section className="ServiceGallerySection">
              <div className="ServiceGalleryWrap" ref={galleryWrapRef}>
                <div
                  className="ServiceGallery ServiceGalleryBento ServiceGallerySwitch"
                  ref={serviceGalleryEight}
                >
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg"
                      alt="Quinn Daisies Freight Quotation"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg"
                      alt="Quinn Daisies Cargo Verification"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                      alt="Quinn Daisies Logistics"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg"
                      alt="Quinn Daisies Container Freight"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg"
                      alt="Quinn Daisies Air Freight Quotes"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg"
                      alt="Quinn Daisies Bonded Clearance"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg"
                      alt="Quinn Daisies Cargo Pricing"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                      alt="Quinn Daisies Transatlantic Trade"
                    />
                  </div>
                </div>
              </div>

              <div className="Container Gap-XL ServicePosition">
                <div className="ServiceList">
                  <h3 className="reveal__left">
                    Predictable Commercial Planning
                  </h3>
                  <p className="ServiceListText reveal__right">
                    From ocean container bookings to origin agricultural assays,
                    we provide verified cost structures that protect your bottom line.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: OVERVIEW TRIO GRID (Pricing Guarantees) */}
            <section className="Dark-Background">
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <div className="ApplicationSetupDetails reveal__left">
                    <h2 className="reveal__left">
                      Our Commercial Quotation Standards
                    </h2>
                    <a
                      className="ApplicationButton"
                      href="#quote-form-section"
                      style={{ marginTop: "1.5rem", width: "fit-content" }}
                    >
                      Request Quote Now
                      <span className="material-symbols-outlined">
                        globe_location_pin
                      </span>
                    </a>
                  </div>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Every commercial quotation we issue is backed by contractual clarity,
                      fixed operational milestones, and dedicated logistics coordinators.
                    </p>
                  </div>
                </div>

                <div className="OverviewTrioGrid">
                  <div className="OverviewTrioCardWide reveal__bottom">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444163/2151541896_jeb7fg.jpg"
                      alt="Cost Certainty Guaranteed"
                    />
                    <div className="OverviewTrioCardWideOverlay">
                      <div className="OverviewTrioCardTop">
                        <span className="AdvanceUpdateSpan">
                          01 — Cost Certainty
                        </span>
                        <h3>Guaranteed All-Inclusive Freight Pricing</h3>
                      </div>
                      <p>
                        We include all terminal handling, bonded storage, customs
                        brokerage, and port documentation into clear transparent rates.
                        No unexpected supplemental invoices upon delivery.
                      </p>
                    </div>
                  </div>

                  <div className="OverviewTrioCardStandard reveal__bottom">
                    <div className="OverviewTrioCardTop">
                      <span className="AdvanceUpdateSpan">
                        02 — Regulatory Support
                      </span>
                      <h3>Customs & Duty Optimization</h3>
                    </div>
                    <p>
                      Our licensed trade compliance officers determine precise HS code
                      classifications, eligible AGOA tariff exemptions, and phytosanitary
                      protocols to minimize landed cost.
                    </p>
                  </div>

                  <div className="OverviewTrioCardStandard reveal__bottom">
                    <div className="OverviewTrioCardTop">
                      <span className="AdvanceUpdateSpan">
                        03 — Execution
                      </span>
                      <h3>Dedicated Operations Officer</h3>
                    </div>
                    <p>
                      Direct single-point-of-contact accountability for your consignment
                      across origin collection, maritime loading, and final warehouse handover.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* TEMPLATE SECTION 8: INTERACTIVE FAQ ACCORDION (Template 2 - Growify) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Quotation Intelligence</span>
                <h2 className="TemplateProcessTitle">
                  Frequently Asked Cost & Contracting Questions
                </h2>
                <p className="TemplateProcessSubtitle">
                  Clear answers regarding freight rate calculations, customs brokerage,
                  payment terms, and origin quality assays.
                </p>
              </div>

              <div className="TemplateFaqList">
                {quotationFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`TemplateFaqItem ${openFaq === index ? "open" : ""}`}
                  >
                    <button
                      className="TemplateFaqQuestion"
                      onClick={() =>
                        setOpenFaq((prev) => (prev === index ? -1 : index))
                      }
                    >
                      <span>{faq.q}</span>
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </button>
                    <div className="TemplateFaqAnswer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 7: INTERACTIVE MAP (USA Global Headquarters) */}
            <section className="SectionContainer" style={{ paddingTop: "0" }}>
              <div className="SectionHeader">
                <span className="AdvanceUpdateSpan" style={{ marginBottom: "12px", display: "inline-block" }}>
                  Global Logistics Coordination
                </span>
                <h2 className="reveal__top">
                  Frederick County, Maryland Administrative Office
                </h2>
                <p className="reveal__bottom" style={{ maxWidth: "680px", margin: "10px auto 30px auto", textAlign: "center", color: "#666" }}>
                  Direct operational connectivity to Baltimore, Newark, Houston, and Savannah ports.
                </p>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "480px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <iframe
                  title="Quinn Daisies Maryland Global Headquarters"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2748649816094!2d-77.42511932349208!3d39.463778613086454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9c52a5e57af13%3A0x210d900d99a68089!2s1915%20Wetterhorn%20Ct%2C%20Frederick%2C%20MD%2021702%2C%20USA!5e1!3m2!1sen!2sng!4v1778445237880!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>

            {/* SECTION 8: APPLICATION BANNER (CTA) */}
            <section className="SectionContainer">
              <div className="ApplicationBanner">
                <img
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                  alt="Quinn Daisies Quote CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Ready to Optimize Your Transatlantic Supply Chain?
                  </h2>
                  <p className="ApplicationText">
                    Connect with our freight specialists and origin sourcing directors
                    to build a resilient, compliant, and cost-effective commercial pathway.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Schedule Direct Consultation
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
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
