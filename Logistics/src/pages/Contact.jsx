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

gsap.registerPlugin(ScrollTrigger, Flip);

const heroSlides = [
  {
    span: "Direct Global Access | Transatlantic Operations",
    h1: "Connecting North America & West Africa with Operational Precision",
    p: "Whether initiating transatlantic ocean freight, sourcing export-grade commodities, deploying enterprise software, or exploring workforce partnerships—our dual-corridor leadership is ready to execute.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Bilateral Presence | In-Market Accountability",
    h1: "Physical Headquarters in Maryland. Operations Hub at MMIA Lagos.",
    p: "Direct contact with senior logistics directors, origin sourcing specialists, and technical engineering architects under transparent U.S. contractual governance.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "24/7 Operations Desk | Sub-Hour Response",
    h1: "Immediate Operational Coordination Across Every Trade Milestone",
    p: "From customs documentation and laboratory assays to vessel tracking and dedicated cargo escort, our operations desk operates without downtime.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 8000;

const contactChannels = [
  {
    icon: "location_on",
    title: "Global Headquarters (USA)",
    subtitle: "Executive Governance & Finance",
    line1: "1915 Wetterhorn Ct, Frederick County",
    line2: "Maryland 21702, United States",
    badge: "U.S. Jurisdiction",
    linkText: "View on Google Maps",
    linkUrl: "https://maps.app.goo.gl/swpx8XwaJAT22RGq8",
  },
  {
    icon: "flight_takeoff",
    title: "West Africa Gateway (Nigeria)",
    subtitle: "Air Cargo & Origin Staging",
    line1: "NACHO Complex, Murtala Muhammed Int'l Airport",
    line2: "Ikeja, Lagos State, Nigeria",
    badge: "Bonded Staging",
    linkText: "Airport Cargo Desk",
    linkUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=lagos@quinndaisies.com",
  },
  {
    icon: "mail",
    title: "Executive Communications",
    subtitle: "Official Commercial Inquiries",
    line1: "Corporate: info@quinndaisies.com",
    line2: "Commercial Sales: sales@quinndaisies.com",
    badge: "Sub-Hour Response",
    linkText: "Send Email Directly",
    linkUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=info@quinndaisies.com",
  },
  {
    icon: "support_agent",
    title: "24/7 Operations Desk",
    subtitle: "Active Cargo Tracking & Support",
    line1: "Direct Dispatch: +1 (240) 405-5942",
    line2: "Emergency Telegram & WhatsApp Support",
    badge: "Always Active",
    linkText: "Call Operations",
    linkUrl: "tel:+12404055942",
  },
];

const departmentDirectory = [
  {
    dept: "Commercial Trade & Sourcing",
    lead: "Agricultural commodities, origin quality assays, and PSI governance.",
    email: "sourcing@quinndaisies.com",
    icon: "agriculture",
  },
  {
    dept: "Multimodal Freight & Shipping",
    lead: "Ocean FCL/LCL, NACHO air freight consolidation, and container haulage.",
    email: "sales@quinndaisies.com",
    icon: "directions_boat",
  },
  {
    dept: "Software & AI Engineering",
    lead: "Custom web/mobile apps, cloud DevOps, RAG pipelines, and digital roadmaps.",
    email: "tech@quinndaisies.com",
    icon: "code",
  },
  {
    dept: "Workforce & Strategic Alliances",
    lead: "Institutional joint ventures, developer fellowships, and university labs.",
    email: "partnerships@quinndaisies.com",
    icon: "handshake",
  },
];

// Contact FAQ Accordion (Growify pattern)
const contactFaqs = [
  {
    q: "What are your operating hours across North American and West African time zones?",
    a: "Our North American administrative headquarters in Maryland operates Monday through Friday, 8:00 AM – 6:00 PM EST. Our West African operational desk at NACHO MMIA Airport in Lagos operates 24/7/365 to handle ongoing air cargo pre-clearance, port drayage dispatch, and emergency vessel logistics.",
  },
  {
    q: "Where are your physical offices and bonded staging hubs?",
    a: "Our corporate headquarters is located at 1915 Wetterhorn Ct, Frederick County, Maryland 21702, United States. In Nigeria, our air freight operations and bonded consolidation warehouse are situated inside the NACHO Complex, Murtala Muhammed International Airport, Ikeja, Lagos, with direct port liaison teams stationed at Apapa and Tin Can Island ports.",
  },
  {
    q: "How quickly does Quinn Daisies respond to incoming inquiries?",
    a: "Urgent cargo tracking and active consignment inquiries are handled immediately through our 24/7 dispatch desk. General commercial trade proposals, freight quotation requests, and technology consultation requests receive formal responses within one business hour.",
  },
  {
    q: "Can I schedule an in-person meeting or origin warehouse inspection?",
    a: "Yes. Executive consultations can be held at our Maryland administrative office or scheduled via secure video conference. For commercial commodity buyers, we coordinate accredited on-site visits to our origin cleaning facilities and cooperative aggregation centers across Nigeria.",
  },
  {
    q: "How do you coordinate U.S. customs entry and FDA/USDA clearances?",
    a: "Our Maryland compliance team works directly with licensed U.S. customs brokers to file automated manifest system (AMS) filings, submit prior notices to the FDA, and manage USDA APHIS import permits prior to vessel docking, eliminating dwell time and port storage fees.",
  },
];

export default function Contact() {
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

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    department: "freight",
    priority: "standard",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

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
        title="Contact Us | Global Headquarters & West Africa Hub | Quinn Daisies Logistics"
        description="Contact Quinn Daisies Logistics. North American Headquarters: Frederick, Maryland (+1 240-405-5942) and West African Operations: NACHO, MMIA Ikeja, Lagos. 24/7 global freight desk."
        keywords="contact Quinn Daisies Logistics, logistics company phone number, Maryland logistics address, Lagos Nigeria cargo office, MMIA Nacho cargo office, freight forwarding contact, cargo support desk"
        url="https://www.logistics.quinndaisies.com/contact-us"
        geoRegion="US-MD;NG-LA"
        geoPlacename="Frederick, Maryland, United States; Ikeja, Lagos State, Nigeria"
        geoPosition="39.463779;-77.425119"
        icbm="39.463779, -77.425119"
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
                  <a className="ApplicationButton" href="#contact-inquiry">
                    Direct Inquiry Form
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
                    alt={`Quinn Daisies Contact — slide ${
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
                  Maryland Global Headquarters (USA)
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Lagos MMIA NACHO Aviation Gateway
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Sub-1-Hour Direct Response SLA
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  24/7 Active Operations & Dispatch Desk
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
                  Direct Senior Account Director Access
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                {/* Repeat for seamless infinite scroll */}
                <span className="TemplateMarqueeItem">
                  Maryland Global Headquarters (USA)
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Lagos MMIA NACHO Aviation Gateway
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Sub-1-Hour Direct Response SLA
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  24/7 Active Operations & Dispatch Desk
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
                  Direct Senior Account Director Access
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
              </div>
            </div>

            {/* SECTION 2: 4 CORE OPERATIONAL CHANNELS */}
            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Transatlantic Access Points & Corridors
                </h2>
              </div>

              <div className="ApplicationContainer">
                {contactChannels.map((item, index) => (
                  <div className="ApplicationBox" key={index}>
                    <span className="BoxIcon material-symbols-outlined">
                      {item.icon}
                    </span>
                    <h3>{item.title}</h3>
                    <p style={{ fontWeight: 600, color: "#e28a34", marginBottom: "6px" }}>
                      {item.subtitle}
                    </p>
                    <p style={{ marginBottom: "4px" }}>{item.line1}</p>
                    <p style={{ marginBottom: "14px", opacity: 0.85 }}>{item.line2}</p>
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#111",
                        textDecoration: "underline",
                      }}
                    >
                      <span>{item.linkText}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                        arrow_outward
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* TEMPLATE SECTION 2: SPLIT HIGHLIGHT BAR (Template 3 - BizMaster) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateSplitHighlightBar reveal__bottom">
                <div className="TemplateHighlightLeft">
                  <h3>Need Immediate Operational Dispatch or In-Market Support?</h3>
                  <p>
                    Our dual-continent desks are synchronized across Maryland and Lagos time zones
                    to ensure zero communication lag for active freight and origin trading.
                  </p>
                </div>
                <div className="TemplateHighlightRight">
                  <div className="TemplateHighlightRightMeta">
                    <div className="TemplateHighlightCount">
                      <h4>24/7 Operations Desk</h4>
                      <span>Sub-Hour Response Guarantee</span>
                    </div>
                  </div>
                  <a href="#contact-inquiry" className="TemplateHighlightBtn">
                    <span>Direct Inquiry Form</span>
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      arrow_downward
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* TEMPLATE SECTION 4: CONNECTED STATS ROW (Template 1) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateConnectedStatsRow reveal__bottom">
                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>&lt; 1h</h3>
                    <p>Response SLA</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">public</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>2</h3>
                    <p>Continents Active</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">headset_mic</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>24/7</h3>
                    <p>Live Cargo Desk</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">badge</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>100%</h3>
                    <p>Dedicated Officers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: DEPARTMENT DIRECTORY (OverviewTrioGrid / Feature Cards style) */}
            <section className="Dark-Background">
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <div className="ApplicationSetupDetails reveal__left">
                    <span className="AdvanceUpdateSpan">Department Routing</span>
                    <h2 className="reveal__left">
                      Connect Directly with Specialized Teams
                    </h2>
                  </div>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Route your inquiries directly to the appropriate operational division
                      for accelerated review, technical scoping, and commercial execution.
                    </p>
                  </div>
                </div>

                <div className="FeatureCardsGrid">
                  {departmentDirectory.map((dept, idx) => (
                    <div
                      key={idx}
                      className={`FeatureCard reveal__bottom ${
                        idx === 1
                          ? "FeatureCard--accent"
                          : idx === 2
                          ? "FeatureCard--dark"
                          : "FeatureCard--light"
                      }`}
                    >
                      <div className="FeatureCardTop">
                        <div className="FeatureCardIcon">
                          <span className="material-symbols-outlined">
                            {dept.icon}
                          </span>
                        </div>
                        <div className="FeatureCardContent">
                          <h3 className="FeatureCardHeading">{dept.dept}</h3>
                          <p className="FeatureCardText">{dept.lead}</p>
                        </div>
                      </div>

                      <div className="FeatureCardNotch">
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${dept.email}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ApplicationButton"
                        >
                          <span>{dept.email}</span>
                          <span className="material-symbols-outlined">
                            mail
                          </span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 4: STATS & RESPONSE METRICS (ServicesInformation) */}
            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Operational Integrity & Response Commitments
              </span>
              <h4 className="reveal__right">
                We believe global trade demands absolute clarity, transparent communication,
                and zero bureaucratic lag.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Critical Inquiry SLA</h6>
                    <p>
                      Guaranteed review and response timeline for urgent cargo booking,
                      customs clearance, and pre-shipment inquiries.
                    </p>
                  </div>
                  <h3>
                    &lt; 1<span> Hour</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Direct Account Officers</h6>
                    <p>
                      Every client is assigned a dedicated senior coordinator with
                      direct operational authority across origin and destination ports.
                    </p>
                  </div>
                  <h3>
                    100<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Active Operating Corridors</h6>
                    <p>
                      Bilateral physical offices and authorized facilities across
                      North America and West Africa.
                    </p>
                  </div>
                  <h3>
                    2<span> Continents</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Customs & Cargo Desk</h6>
                    <p>
                      Continuous operational monitoring synchronized across Maryland
                      and Lagos time zones for round-the-clock cargo visibility.
                    </p>
                  </div>
                  <h3>
                    24/<span>7</span>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                When shipping high-value commercial commodities or managing critical
                import-export deadlines, having direct access to decision-makers is
                non-negotiable. Quinn Daisies eliminates the friction of impersonal
                call centers and disconnected foreign freight agents.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Our dual-continent presence allows foreign buyers, local agricultural
                cooperatives, and technology enterprise clients to connect directly
                with licensed professionals who understand both U.S. federal regulatory
                mandates and West African in-market execution.
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
                      alt="Quinn Daisies Global Communications"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg"
                      alt="Quinn Daisies Client Execution"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                      alt="Quinn Daisies Logistics Desk"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg"
                      alt="Quinn Daisies Transatlantic Hub"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg"
                      alt="Quinn Daisies Operations Desk"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg"
                      alt="Quinn Daisies Air Freight Staging"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg"
                      alt="Quinn Daisies Ocean Freight Hub"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                      alt="Quinn Daisies Sourcing Operations"
                    />
                  </div>
                </div>
              </div>

              <div className="Container Gap-XL ServicePosition">
                <div className="ServiceList">
                  <h3 className="reveal__left">
                    Direct Operational Consultation
                  </h3>
                  <p className="ServiceListText reveal__right">
                    Connect with our dedicated logistics planners, commodity traders,
                    and technical architects for tailored bilateral solutions.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 6: INTERACTIVE DIRECT INQUIRY FORM */}
            <section
              id="contact-inquiry"
              className="SectionContainer"
              style={{ paddingTop: "60px", paddingBottom: "60px" }}
            >
              <div className="SectionHeader">
                <span className="AdvanceUpdateSpan" style={{ marginBottom: "12px", display: "inline-block" }}>
                  Direct Transmission
                </span>
                <h2 className="reveal__top">
                  Initiate Commercial & Technical Dialogue
                </h2>
                <p className="reveal__bottom" style={{ maxWidth: "700px", margin: "14px auto 0 auto", textAlign: "center", color: "#666" }}>
                  Please detail your trade requirements, freight cargo specifications,
                  or technical engineering objectives below. Our specialized department
                  leads will respond within one business hour.
                </p>
              </div>

              <div
                style={{
                  maxWidth: "960px",
                  margin: "40px auto 0 auto",
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  padding: "48px 6%",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.06)",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                }}
              >
                {formSubmitted ? (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: "64px", color: "#16a34a", marginBottom: "16px" }}
                    >
                      check_circle
                    </span>
                    <h3 style={{ fontSize: "1.8rem", color: "#111", marginBottom: "12px" }}>
                      Message Received & Logged
                    </h3>
                    <p style={{ maxWidth: "540px", margin: "0 auto 24px auto", color: "#555", lineHeight: 1.6 }}>
                      Thank you for contacting Quinn Daisies. Your inquiry has been
                      routed to our specialized operational team. A designated senior
                      account director will review your specifications and follow up within one hour.
                    </p>
                    <button
                      className="ApplicationButton"
                      onClick={() => setFormSubmitted(false)}
                      style={{ margin: "0 auto" }}
                    >
                      <span>Submit Another Inquiry</span>
                      <span className="material-symbols-outlined">restart_alt</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Marcus Vance"
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: "12px",
                            border: "1px solid #ddd",
                            backgroundColor: "#faf9f6",
                            fontSize: "1rem",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Atlantic Foods Group LLC"
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: "12px",
                            border: "1px solid #ddd",
                            backgroundColor: "#faf9f6",
                            fontSize: "1rem",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          Official Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="mvance@atlanticfoods.com"
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: "12px",
                            border: "1px solid #ddd",
                            backgroundColor: "#faf9f6",
                            fontSize: "1rem",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: "12px",
                            border: "1px solid #ddd",
                            backgroundColor: "#faf9f6",
                            fontSize: "1rem",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "24px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          Department / Operational Focus *
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: "12px",
                            border: "1px solid #ddd",
                            backgroundColor: "#faf9f6",
                            fontSize: "1rem",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        >
                          <option value="freight">Transatlantic Freight Forwarding (Ocean / Air / Drayage)</option>
                          <option value="sourcing">Agricultural Commodity Sourcing & PSI Assays</option>
                          <option value="technology">Enterprise Software, Mobile & AI Engineering</option>
                          <option value="workforce">Workforce Development, Training & Fellowships</option>
                          <option value="corporate">Institutional Governance & Strategic Joint Ventures</option>
                          <option value="general">General Corporate Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                          Inquiry Priority
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          style={{
                            width: "100%",
                            padding: "14px 18px",
                            borderRadius: "12px",
                            border: "1px solid #ddd",
                            backgroundColor: "#faf9f6",
                            fontSize: "1rem",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        >
                          <option value="standard">Standard Inquiry (Response within 1-2 hours)</option>
                          <option value="urgent">Urgent / Active Cargo in Transit (Immediate)</option>
                          <option value="scheduled">Planning for Next Quarter / Seasonal Booking</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: "32px" }}>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                        Project / Consignment Specifications *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe origin/destination, commodity type, volume/tonnage, technical requirements, or desired timeline..."
                        style={{
                          width: "100%",
                          padding: "16px 18px",
                          borderRadius: "12px",
                          border: "1px solid #ddd",
                          backgroundColor: "#faf9f6",
                          fontSize: "1rem",
                          outline: "none",
                          fontFamily: "inherit",
                          boxSizing: "border-box",
                        }}
                      ></textarea>
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <button
                        type="submit"
                        disabled={formLoading}
                        className="ApplicationButton"
                        style={{ minWidth: "260px", justifyContent: "center", margin: "0 auto" }}
                      >
                        {formLoading ? (
                          <span>Transmitting Specifications...</span>
                        ) : (
                          <>
                            <span>Transmit Inquiry</span>
                            <span className="material-symbols-outlined">send</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </section>

            {/* TEMPLATE SECTION 8: INTERACTIVE FAQ ACCORDION (Template 2 - Growify) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Direct Assistance</span>
                <h2 className="TemplateProcessTitle">
                  Frequently Asked Operational Questions
                </h2>
                <p className="TemplateProcessSubtitle">
                  Key details on office coordinates, cross-timezone operating desks,
                  urgent dispatch procedures, and customs brokerage support.
                </p>
              </div>

              <div className="TemplateFaqList">
                {contactFaqs.map((faq, index) => (
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
                  Global Headquarters
                </span>
                <h2 className="reveal__top">
                  Visit Our North American Administrative Office
                </h2>
                <p className="reveal__bottom" style={{ maxWidth: "680px", margin: "10px auto 30px auto", textAlign: "center", color: "#666" }}>
                  Located in Frederick County, Maryland—conveniently positioned to coordinate
                  transatlantic freight logistics through Baltimore, Newark, and East Coast ports.
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
                  alt="Quinn Daisies Contact Banner"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Need Immediate Freight or Trade Sourcing Solutions?
                  </h2>
                  <p className="ApplicationText">
                    Request a formal quotation with transparent origin-to-destination
                    cost modeling, transit timelines, and regulatory compliance protocols.
                  </p>
                  <Link className="ApplicationButton" to="/get-a-quote">
                    Request an Official Quote
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
