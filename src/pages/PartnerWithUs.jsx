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
import usePinnedSlides from "../hooks/usePinnedSlides";

gsap.registerPlugin(ScrollTrigger, Flip);

const heroSlides = [
  {
    span: "Strategic Alliances & Global Supply Chain",
    h1: "Co-Building Resilient Transatlantic Trade Infrastructure",
    p: "We partner with commodity exporters, multinational freight carriers, financial institutions, and academic technology labs to eliminate operational friction and scale cross-border commerce between North America and West Africa.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Commercial Sourcing & Freight Allocation",
    h1: "Expanding Market Access with Guaranteed Execution",
    p: "Unlock high-volume agricultural supply contracts, preferential maritime container allocation, bonded export staging, and bilateral legal governance under U.S. commercial law.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Institutional Tech & Capital Partnerships",
    h1: "Syndicated Growth Across Emerging Corridors",
    p: "Collaborate on trade finance facilities, digital supply chain tracking technologies, workforce fellowships, and sovereign institutional development missions.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 8000;

// 4 Core Partner Pillars
const partnershipPillars = [
  {
    icon: "handshake",
    title: "Agricultural Sourcing Alliances",
    text: "Partnering with certified producer cooperatives, aggregators, and processing mills across Nigeria to supply international buyers with verified, export-grade commodities.",
  },
  {
    icon: "directions_boat",
    title: "Multimodal Logistics Alliances",
    text: "Teaming up with premier maritime container shipping lines, air cargo carriers, and bonded drayage fleets to secure preferential allocations and reliable transit times.",
  },
  {
    icon: "account_balance",
    title: "Trade Finance & Institutional Syndicates",
    text: "Structuring institutional trade credit lines, secure letters of credit, and escrow disbursement frameworks that de-risk capital deployment across emerging markets.",
  },
  {
    icon: "school",
    title: "Academic & Tech Co-Ventures",
    text: "Collaborating with universities and polytechnics to sponsor engineering fellowships, developer internships, and applied AI research for automated logistics workflows.",
  },
];

// Pinned Stage Slides for ApplicationImageDesign
const partnerStages = [
  {
    title: "01. Counterparty Due Diligence & Alignment",
    description:
      "We conduct rigorous technical, compliance, and financial due diligence to verify capabilities, certifications, and jurisdictional standing before formulating bilateral agreements.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
  },
  {
    title: "02. Bilateral Contractual Recourse & SLA Mapping",
    description:
      "Structuring joint venture agreements, freight allocation contracts, or institutional MOUs under clear U.S. legal jurisdiction to protect intellectual property and capital.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
  },
  {
    title: "03. Operational Integration & Pipeline Sync",
    description:
      "Connecting ERP systems, cargo manifests, and warehousing protocols to ensure seamless handoffs between origin collection, container consolidation, and maritime transit.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
  },
  {
    title: "04. Coordinated Execution & Quality Assurance",
    description:
      "Enforcing mandatory pre-shipment laboratory assays, strict chain of custody, and real-time tracking across international maritime and aviation corridors.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
  },
  {
    title: "05. Transparent Settlement & Growth Scale",
    description:
      "Milestone-based fund disbursements, transparent fee reconciliations, and strategic joint investments into long-term infrastructure and regional processing assets.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg",
  },
];

// 5-Stage Work Process Sequence (Template 3)
const processSteps = [
  {
    num: "01",
    icon: "verified_user",
    title: "Strategic Discovery & Vetting",
    desc: "Rigorous compliance evaluation, production capacity validation, and trade corridor alignment.",
    deliverable: "Mutual Due Diligence Audit",
  },
  {
    num: "02",
    icon: "gavel",
    title: "Contract Governance & Recourse",
    desc: "Formulating transparent off-take and service level agreements governed under clear U.S. commercial law.",
    deliverable: "Enforceable SLA Charter",
  },
  {
    num: "03",
    icon: "hub",
    title: "Operational Staging & Sync",
    desc: "Connecting bonded warehouse custody, container allocations, and NACHO air freight priority channels.",
    deliverable: "Origin Integration Blueprint",
  },
  {
    num: "04",
    icon: "monitoring",
    title: "Active Corridor Execution",
    desc: "24/7 shipment tracking, third-party laboratory assays, and synchronized bilateral customs clearance.",
    deliverable: "Real-Time Telemetry Feed",
  },
  {
    num: "05",
    icon: "payments",
    title: "Milestone Settlement & Expansion",
    desc: "Automated escrow disbursements, transparent profit sharing, and co-investment into scalable regional assets.",
    deliverable: "Audited Financial Handover",
  },
];

// Bento Impact Case Studies (Template 2)
const bentoImpacts = [
  {
    tag: "Maritime Carrier Consortium",
    metric: "+240% Container Allocation",
    title: "Preferential Transatlantic Slot Guarantees",
    desc: "Co-chartered container allocation linking Lagos ports to Baltimore and Savannah with guaranteed weekly departures.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
  },
  {
    tag: "NACHO MMIA Staging",
    metric: "0 Demurrage Days",
    title: "Express Air Freight Pre-Clearance Facility",
    desc: "Physical bonded staging at Lagos airport eliminating storage penalties and expediting perishable agricultural exports.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
  },
  {
    tag: "Agricultural Syndicate",
    metric: "200+ Vetted Co-ops",
    title: "Origin Traceability & Living Wage Alliance",
    desc: "Direct supply agreements equipping farming communities with hermetic storage, soil assays, and prompt digital payments.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
  },
];

// Collaboration / Tier Cards (Template 2)
const collaborationTiers = [
  {
    title: "Origin Supplier Alliance",
    badge: null,
    featured: false,
    subtitle: "For producer cooperatives, aggregators, and processing mills across West Africa.",
    features: [
      "Direct Off-Take Contracts with International Buyers",
      "On-Site Quality Assurance & Lab Sampling",
      "Bonded Pre-Export Storage & Warehousing",
      "Prompt Milestone Settlement in Hard Currency",
      "Technical Capacity & Soil Health Workshops",
    ],
    ctaText: "Join as Supplier",
  },
  {
    title: "Multimodal Carrier Consortium",
    badge: "STRATEGIC PRIORITY",
    featured: true,
    subtitle: "For ocean container lines, air cargo fleets, and bonded inland drayage operators.",
    features: [
      "Guaranteed Seasonal Freight Volume Commitments",
      "Priority Cross-Docking & Terminal Handoffs",
      "Direct Billing Under U.S. Contract Governance",
      "24/7 Operations Desk Coordination",
      "Co-Branded Transatlantic Trade Corridor Routes",
    ],
    ctaText: "Carrier Partnership",
  },
  {
    title: "Institutional Co-Ventures",
    badge: null,
    featured: false,
    subtitle: "For development finance syndicates, universities, and sovereign trade missions.",
    features: [
      "Academic Developer Fellowships & Tech Labs",
      "Bilateral Trade Finance & Escrow Facilities",
      "Diplomatic & Mission-Critical Procurement",
      "Custom Scope 3 Carbon Accounting Telemetry",
      "Joint Infrastructure Co-Investment Projects",
    ],
    ctaText: "Institutional Inquiry",
  },
];

// Interactive FAQ Accordion (Template 2)
const partnerFaqs = [
  {
    q: "How does Quinn Daisies structure commercial partnerships under U.S. law?",
    a: "All commercial agreements, off-take contracts, freight allocation MOUs, and joint venture frameworks are executed through our U.S. corporate entity registered in Delaware and Maryland. This provides international partners and financiers with complete jurisdictional certainty, transparent dispute resolution, and enforceable legal recourse.",
  },
  {
    q: "What are the requirements to join our agricultural cooperative supplier network?",
    a: "Participating cooperatives must demonstrate legitimate land registration, non-deforested plot boundaries (EUDR compliance), zero child-labor practices, and willingness to undergo mandatory third-party laboratory testing (SGS/Cotecna) at origin before cargo is dispatched.",
  },
  {
    q: "How do you guarantee container space allocation with ocean carrier lines?",
    a: "We maintain strategic volume agreements and block space allocations (BSA) with major global shipping lines connecting Apapa and Tin Can Island ports to Baltimore, Newark, Houston, and Savannah. This insulates our partners from seasonal container shortages.",
  },
  {
    q: "How does the academic and workforce development co-venture operate?",
    a: "We partner with Nigerian universities and polytechnics to establish dedicated engineering labs, sponsor hackathons, and recruit high-potential computer science students into paid enterprise apprenticeships under the guidance of senior technical directors.",
  },
  {
    q: "What financial settlement and escrow mechanisms are utilized?",
    a: "Transactions are coordinated through Tier-1 banking partners with institutional escrow accounts, milestone-based disbursements, and transparent foreign exchange reconciliations to ensure complete financial safety for both buyers and suppliers.",
  },
];

export default function PartnerWithUs() {
  useSmoothScroll();

  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const activeSlideRef = useRef(0);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const containerRef = useRef(null);
  const imagePinRef = useRef(null);
  const pageRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  const galleryWrapRef = useRef(null);
  const galleryCleanupRef = useRef(null);
  const serviceGalleryEight = useRef(null);

  usePinnedSlides(imagePinRef);

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

  // GSAP Horizontal Carousel Strip
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

  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <SEO
        title="Partner With Us | Strategic Alliances & Global Supply Chain | Quinn Daisies Logistics"
        description="Partner with Quinn Daisies for commercial freight forwarding, agricultural commodity supply, institutional educational technology, and scalable cross-border execution."
        keywords="logistics partnerships, carrier partnerships, commercial freight alliance, commodity supplier partnership, global trade collaboration, supply chain partnership"
        url="https://www.logistics.quinndaisies.com/partner-with-us"
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
                      className={`HeroSlideIndicatorDot${i === activeSlide ? " is-active" : ""
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
                  <Link className="ApplicationButton" to="/contact-us">
                    Explore Partnership Opportunities
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>

              <div className="BackgroundImage" ref={heroBgRef}>
                {currentSlide.images.map((img, index) => (
                  <img
                    key={`${activeSlide}-${index}`}
                    src={img}
                    alt={`Quinn Daisies Partner — slide ${activeSlide + 1
                      }, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* TEMPLATE SECTION 1: CONTINUOUS TICKER MARQUEE (Template 1) */}
            <div className="TemplateMarqueeSection">
              <div className="TemplateMarqueeTrack">
                <span className="TemplateMarqueeItem">
                  Commodity Exporter Alliances
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Ocean Container Space Allocation
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  NACHO MMIA Bonded Air Freight
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Bilateral U.S. Contract Governance
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Trade Finance Syndication
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Academic Tech Labs & Internships
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                {/* Repeat for seamless infinite scroll */}
                <span className="TemplateMarqueeItem">
                  Commodity Exporter Alliances
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Ocean Container Space Allocation
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  NACHO MMIA Bonded Air Freight
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Bilateral U.S. Contract Governance
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Trade Finance Syndication
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Academic Tech Labs & Internships
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
              </div>
            </div>

            {/* SECTION 2: 4 CORE PARTNERSHIP PILLARS */}
            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Strategic Partnership Tracks
                </h2>
              </div>

              <div className="ApplicationContainer">
                {partnershipPillars.map((item, index) => (
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
                  <h3>Let's Build Transatlantic Commerce Together!</h3>
                  <p>
                    Connecting global buyers with verified West African supply chains
                    under enforceable U.S. commercial law and dedicated operational oversight.
                  </p>
                </div>
                <div className="TemplateHighlightRight">
                  <div className="TemplateHighlightRightMeta">
                    <div className="TemplateHighlightCount">
                      <h4>50+ Strategic Alliances</h4>
                      <span>Active Transatlantic Network</span>
                    </div>
                  </div>
                  <Link to="/contact-us" className="TemplateHighlightBtn">
                    <span>Initiate Dialogue</span>
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      arrow_outward
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* TEMPLATE SECTION 3: 5-STAGE WORK PROCESS (Template 3 - BizMaster) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Collaboration Framework</span>
                <h2 className="TemplateProcessTitle">
                  From Strategic Alignment to Shared Value
                </h2>
                <p className="TemplateProcessSubtitle">
                  A disciplined 5-stage lifecycle ensuring operational accountability,
                  statutory compliance, and predictable trade velocity.
                </p>
              </div>

              <div className="TemplateProcessCardsGrid five-col">
                {processSteps.map((step, idx) => (
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
                    <span className="material-symbols-outlined">handshake</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>50+</h3>
                    <p>Strategic Partners</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">payments</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>$250M+</h3>
                    <p>Bilateral Volume</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">gavel</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>100%</h3>
                    <p>U.S. Jurisdiction</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>24/7</h3>
                    <p>Operations Desk</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEMPLATE SECTION 5: PROFICIENCY & OPERATIONAL CAPACITY (Template 1) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProficiencySection reveal__bottom">
                <div className="TemplateProficiencyLeft">
                  <span className="TemplateProcessEyebrow">Institutional Standards</span>
                  <h3>Rigorous Governance Built for Global Commerce</h3>
                  <p>
                    We guarantee strict operational execution across origin laboratory testing,
                    ocean vessel space allocations, and dual-continent customs clearance.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>Enforceable contracts under U.S. commercial law</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>Tier-1 bank escrow facilities and auditable disbursements</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>Mandatory third-party pre-shipment quality assays</span>
                    </div>
                  </div>
                </div>

                <div className="TemplateSkillList">
                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Origin Quality Assay Compliance</span>
                      <span>99%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "99%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Ocean Container Space Allocation</span>
                      <span>96%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "96%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Transatlantic Customs Pre-Clearance</span>
                      <span>98%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "98%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Legal Governance & Contract Recourse</span>
                      <span>100%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "100%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: PINNED STAGE SLIDES (ApplicationImageDesign) */}
            <section className="ApplicationImageDesign" ref={imagePinRef}>
              <div className="ApplicationChartContentListContainer">
                <div className="fill"></div>
                <div className="ApplicationChartContentList">
                  <h2 className="ApplicationImageDesignHeader reveal__bottom__interval_slide">
                    Our Partnership Onboarding & Execution Framework
                  </h2>
                  {partnerStages.map((item, index) => (
                    <div
                      key={index}
                      className={`ApplicationChartDesignItem reveal__bottom__interval_slide ${index === 0 ? "is-active" : ""
                        }`}
                    >
                      <h4>{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ApplicationChartContent">
                <div className="ApplicationChartSlides">
                  {partnerStages.map((item, index) => (
                    <div
                      key={index}
                      className={`ApplicationChartSlide ${index === 0 ? "is-active" : ""
                        }`}
                    >
                      <div className="ApplicationChartContentContainer">
                        <img
                          className="ApplicationChartContentContainerImage"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="ApplicationChartContentContainerContent">
                          <p className="ApplicationChartContentContainerContentText">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 4: STATS & PARTNERSHIP METRICS (ServicesInformation) */}
            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Institutional Trust & Commercial Scale
              </span>
              <h4 className="reveal__right">
                Powering bilateral commerce with verifiable trade capacity,
                preferential ocean container allocations, and strict contract governance.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Global Strategic Alliances</h6>
                    <p>
                      Active commercial partnerships across international maritime carriers,
                      certified farmer cooperatives, and regional logistics hubs.
                    </p>
                  </div>
                  <h3>
                    50<span>+</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Bilateral Trade Volume Facilitated</h6>
                    <p>
                      Cumulative transatlantic commodity and industrial cargo value
                      successfully coordinated and cleared through our network.
                    </p>
                  </div>
                  <h3>
                    $250<span>M+</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Contractual Governance Under U.S. Law</h6>
                    <p>
                      Direct institutional legal recourse, banking escrow facilities,
                      and milestone settlement transparency eliminating counterparty risk.
                    </p>
                  </div>
                  <h3>
                    100<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Transatlantic Operating Desks</h6>
                    <p>
                      Synchronized operational teams across Maryland, USA and Lagos, Nigeria
                      providing round-the-clock customs and logistics execution.
                    </p>
                  </div>
                  <h3>
                    24/<span>7</span>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Cross-border commerce succeeds when partners are bonded by mutual
                operational accountability rather than speculative broker agreements.
                Quinn Daisies operates as an institutional execution bridge connecting
                producers in emerging markets directly to verified international demand.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                By co-investing in origin quality assurance, automated inventory tracking,
                and bonded port staging, we ensure that every participating cooperative,
                carrier, and financial institution realizes predictable trade yields,
                zero demurrage exposure, and sustainable long-term commercial growth.
              </p>
            </section>

            {/* TEMPLATE SECTION 6: BENTO IMPACT CASE STUDIES (Template 2 - Growify) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Proven Results</span>
                <h2 className="TemplateProcessTitle">
                  Real Commercial Impact Across Active Trade Lanes
                </h2>
                <p className="TemplateProcessSubtitle">
                  Measurable operational and financial outcomes delivered through our
                  bilateral logistics consortium.
                </p>
              </div>

              <div className="TemplateBentoGrid">
                {bentoImpacts.map((bento, idx) => (
                  <div key={idx} className="TemplateBentoCard reveal__bottom">
                    <div className="TemplateBentoImageWrap">
                      <img
                        src={bento.image}
                        alt={bento.title}
                        className="TemplateBentoImage"
                      />
                      <div className="TemplateBentoTag">{bento.tag}</div>
                      <div className="TemplateBentoMetricPill">{bento.metric}</div>
                    </div>
                    <div className="TemplateBentoBody">
                      <h4>{bento.title}</h4>
                      <p>{bento.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                      alt="Quinn Daisies Carrier Collaboration"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg"
                      alt="Quinn Daisies Trade Coordination"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                      alt="Quinn Daisies Strategic Alliances"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg"
                      alt="Quinn Daisies Port Operations"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg"
                      alt="Quinn Daisies Freight Networks"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg"
                      alt="Quinn Daisies Quality Staging"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg"
                      alt="Quinn Daisies Sourcing Hubs"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                      alt="Quinn Daisies Transatlantic Partnership"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: HORIZONTAL CAROUSEL (Co-Venture Case Studies) */}
            <section
              className="Dark-Background"
              id="CarouselAnimation"
              ref={carouselSectionRef}
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <h2 className="reveal__left">
                    Bilateral Co-Ventures & Trade Programs
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Explore active partnership engagements bridging transatlantic
                      freight lanes, origin aggregation clusters, and institutional supply chains.
                    </p>
                  </div>
                </div>

                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                  <div
                    className="ApplicationCarouselSlide"
                    ref={carouselStripRef}
                  >
                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg"
                        alt="Transatlantic Ocean Freight Consortium"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Transatlantic Ocean Freight Consortium</h2>
                        <p>
                          Dedicated container slot allocations linking Apapa and Tin Can
                          Island ports directly to Baltimore, Houston, and Savannah with
                          guaranteed vessel departures.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg"
                        alt="NACHO Express Air Cargo Staging"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>NACHO Express Air Cargo Staging</h2>
                        <p>
                          Secured joint operations at NACHO, MMIA Lagos providing accelerated
                          customs pre-clearance and cold-chain handling for high-value perishables.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                        alt="Cooperative Farmer Empowerment Syndicate"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Cooperative Farmer Empowerment Syndicate</h2>
                        <p>
                          Equipping over 200 agricultural cooperatives with hermetic storage,
                          solar dehydration, and fair-value trade finance to eliminate post-harvest losses.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Institutional Sourcing & Diplomatic Logistics"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Institutional Sourcing & Diplomatic Logistics</h2>
                        <p>
                          Fulfilling government, embassy, and multilateral mission-critical
                          procurement requirements with strict chain-of-custody compliance.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                        alt="Academic Technology & Engineering Labs"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Academic Tech & Engineering Labs</h2>
                        <p>
                          Sponsoring software development fellowships and paid enterprise
                          internships across leading Nigerian universities to cultivate elite tech talent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Frequently Asked Questions</span>
                <h2 className="TemplateProcessTitle">
                  Clear Answers for Prospective Partners
                </h2>
                <p className="TemplateProcessSubtitle">
                  Everything you need to know about our legal frameworks, origin verification,
                  and bilateral execution standards.
                </p>
              </div>

              <div className="TemplateFaqList">
                {partnerFaqs.map((faq, index) => (
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

            {/* SECTION 8: APPLICATION BANNER (CTA) */}
            <section className="SectionContainer">
              <div className="ApplicationBanner">
                <img
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                  alt="Quinn Daisies Partner CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Let's Build Stronger Cross-Border Trade Corridors Together
                  </h2>
                  <p className="ApplicationText">
                    Connect directly with our executive leadership team to discuss
                    joint ventures, strategic freight allocations, agricultural off-take
                    agreements, or institutional workforce programs.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Initiate Partnership Dialogue
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
