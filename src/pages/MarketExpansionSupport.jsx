import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";

const heroSlides = [
  {
    span: "Market Entry Strategy | Cross-Border Commercialization",
    h1: "Accelerating Enterprise Footprints into High-Growth Global Markets.",
    p: "Quinn Daisies provides the operational blueprint, legal foundation, localized distribution networks, and regulatory clearances required to successfully launch and scale commercial enterprises across international borders.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1776766905/QuinnDaisies/2152001127_rzlgti.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "In-Market Infrastructure | Localized Operations",
    h1: "Turnkey In-Market Operations from Day One.",
    p: "Overcome the operational friction of foreign market entry. We provide on-the-ground corporate structuring, licensed bonded drayage, vetted wholesale distribution channels, and localized operational personnel.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Regulatory Compliance | Tariff & Market Clearances",
    h1: "Frictionless Market Access Through Total Regulatory Alignment.",
    p: "From FDA, USDA, and EUDR compliance to Nigerian SON, NAFDAC, and AfCFTA rules of origin, we turn complex regulatory obstacles into lasting competitive market-entry advantages.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 10000;

gsap.registerPlugin(ScrollTrigger);

export default function MarketExpansionSupport() {
  useSmoothScroll();

  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(0);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const isAnimatingRef = useRef(false);

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

  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const containerRef = useRef(null);
  const imagePinRef = useRef(null);
  const pageRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  usePinnedSlides(imagePinRef);

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

  const solutions = [
    {
      icon: "explore",
      title: "Market Entry Blueprints",
      text: "Data-driven commercial feasibility models, competitor price mapping, import tariff structures, and localized consumer demand analytics for clear strategic direction.",
    },
    {
      icon: "domain_add",
      title: "In-Market Corporate Structuring",
      text: "Legal entity establishment, cross-border corporate tax optimization, commercial banking setups, and regulatory compliance with foreign investment laws.",
    },
    {
      icon: "hub",
      title: "Vetted Distribution Channels",
      text: "Instant connectivity to pre-screened wholesale distributors, retail chain procurement heads, and high-volume commercial off-takers across target territories.",
    },
    {
      icon: "verified_user",
      title: "Pre-Emptive Regulatory Clearance",
      text: "Rapid product registrations, sanitary/phytosanitary licensing, customs tariff classifications, and trademark protections to prevent bureaucratic border halts.",
    },
  ];

  const executionStages = [
    {
      title: "Feasibility Modeling & Market Assessment",
      description:
        "We analyze target market dynamics, tariff classifications, port handling infrastructure, local consumer demand, and competitive pricing benchmarks.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    },
    {
      title: "Legal Entity & Corporate Governance",
      description:
        "Structuring local commercial entities, opening merchant banking accounts, and ensuring compliance with local corporate laws, tax treaties, and foreign ownership regulations.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    },
    {
      title: "Product Certification & Labeling Compliance",
      description:
        "Adapting packaging, nutritional labeling, ingredient compliance, and barcodes to satisfy FDA, EU, or African standard requirements before commercial dispatch.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
      title: "Bonded Staging & Supply Chain Setup",
      description:
        "Securing dedicated bonded warehousing space, multimodal container contracts, and reliable regional drayage fleets to fulfill local market orders without delays.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
    },
    {
      title: "Commercial Matchmaking & Distribution Signing",
      description:
        "Negotiating commercial distribution agreements with premier regional distributors, wholesalers, and retail operators backed by clear volume commitments.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
    },
    {
      title: "Full Commercial Launch & Revenue Scaling",
      description:
        "Continuous operational support, marketing liaison, replenishment logistics, and financial repatriation advisory to accelerate enterprise market share.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg",
    },
  ];

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
        title="Market Expansion Support | Quinn Daisies Logistics"
        description="Comprehensive cross-border market entry blueprints, in-market corporate structuring, regulatory clearances, and distribution matchmaking."
        keywords="market expansion support, international market entry, African market entry, US market expansion, trade matchmaking, cross border business setup, distribution channel expansion"
        url="https://www.logistics.quinndaisies.com/market-expansion-support"
      />

      <div ref={pageRef}>
        <Navbar />

        <div id="smooth-wrapper" ref={smoothWrapperRef}>
          <div id="smooth-content" ref={smoothContentRef}>
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
                      className={`HeroSlideIndicatorDot${i === activeSlide ? " is-active" : ""}`}
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
                    Schedule Expansion Consultation
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
                    alt={`Quinn Daisies Market Expansion — slide ${activeSlide + 1}, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Strategic Capabilities Driving Global Market Penetration
                </h2>
              </div>

              <div className="ApplicationContainer">
                {solutions.map((item, index) => (
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

            <section className="ApplicationImageDesign" ref={imagePinRef}>
              <div className="ApplicationChartContentListContainer">
                <div className="fill"></div>
                <div className="ApplicationChartContentList">
                  <h2 className="ApplicationImageDesignHeader reveal__bottom__interval_slide">
                    From Inception to Sustainable International Market Share
                  </h2>
                  {executionStages.map((item, index) => (
                    <div
                      key={index}
                      className={`ApplicationChartDesignItem reveal__bottom__interval_slide ${
                        index === 0 ? "is-active" : ""
                      }`}
                    >
                      <h4>{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ApplicationChartContent">
                <div className="ApplicationChartSlides">
                  {executionStages.map((item, index) => (
                    <div
                      key={index}
                      className={`ApplicationChartSlide ${
                        index === 0 ? "is-active" : ""
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

            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Cross-Border Market Entry Velocity
              </span>
              <h4 className="reveal__right">
                Accelerating commercial penetration with localized warehousing, certified distribution, and complete regulatory clearance.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Time-to-Market Acceleration</h6>
                    <p>
                      Pre-established regulatory roadmaps and physical infrastructure reducing regional market entry timelines from years to months.
                    </p>
                  </div>
                  <h3>
                    65<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Regional Retail & Commercial Channels</h6>
                    <p>
                      Direct operational linkages to tier-one distributors, industrial processors, and commercial buyers across the Americas and West Africa.
                    </p>
                  </div>
                  <h3>
                    180<text>+</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Statutory Clearance Turnaround</h6>
                    <p>
                      Expedited dossier management for regulatory product registrations, customs classification, and commercial compliance approvals.
                    </p>
                  </div>
                  <h3>
                    30–60<text>days</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>First-Year Retention & Compliance</h6>
                    <p>
                      Maintaining full statutory adherence, active distributor engagement, and zero regulatory product recalls across managed entries.
                    </p>
                  </div>
                  <h3>
                    99.1<text>%</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Entering new sovereign markets presents severe operational barriers—including fragmented distribution landscapes, opaque statutory approvals, and unpredictable port-side import hurdles. Multinationals and growing exporters often spend millions on market feasibility studies, only to encounter insurmountable delays in physical execution once commercial shipments land at the port. Quinn Daisies bridges the divide between strategic market planning and real-world commercial delivery.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Whether supporting North American manufacturers expanding into Nigeria or assisting verified West African producers entering U.S. and European retail networks, we provide a complete in-market operating platform. From regulatory filings and local bonded warehousing to vetted distributor matchmaking and final-mile haulage, Quinn Daisies acts as your dedicated on-the-ground execution partner.
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
                    Strategic Market Expansion & Commercial Entry Framework
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Our market expansion solutions combine regulatory advisory, bonded staging, and localized distribution networks to de-risk your commercial entry into high-potential global markets.
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
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766905/QuinnDaisies/2152001127_rzlgti.jpg"
                        alt="Quinn Daisies Market Entry Blueprints"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Localized Market Entry Blueprints</h2>
                        <p>
                          Data-driven market assessment mapping competitor pricing, tariff structures, import duties, and optimal regional entry corridors.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                        alt="Quinn Daisies Regulatory & Statutory Registration"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>In-Country Regulatory & Statutory Registration</h2>
                        <p>
                          Comprehensive management of product filings, FDA Prior Notice, USDA phytosanitary clearance, NAFDAC registration, and standard bureau compliance.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Quinn Daisies Commercial Distributor Matchmaking"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Vetted Commercial Distributor Matchmaking</h2>
                        <p>
                          Direct introduction to audited regional distributors, commercial wholesalers, and industrial procurement desks with verifiable off-take capacity.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                        alt="Quinn Daisies Bonded Staging & Regional Fulfillment"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Bonded Staging & Regional Fulfillment Hubs</h2>
                        <p>
                          Immediate access to secure bonded facilities enabling local inventory buffering, duty deferral, and rapid domestic order fulfillment.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg"
                        alt="Quinn Daisies Last-Mile Commercial Logistics"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Last-Mile Commercial Logistics Execution</h2>
                        <p>
                          Dedicated haulage fleets and scheduled delivery routes moving goods reliably from central distribution depots to retail shelves and factory floors.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg"
                        alt="Quinn Daisies Continuous Regulatory Monitoring"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Continuous Regulatory Monitoring & Compliance</h2>
                        <p>
                          Active monitoring of shifting trade tariffs, bilateral trade treaties, and customs mandates to safeguard ongoing commercial operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="SectionContainer">
              <div className="SectionColorHeader">
                <span className="reveal__top">
                  Global Footprint | Bilateral Growth Corridors
                </span>
                <h2 className="reveal__bottom">
                  Proven Operational Infrastructure Across 4 Continents
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    4 Continents <span>Operational Reach</span>
                  </h2>
                  <p>
                    With deep roots in the United States and West Africa, and established commercial partner corridors across Europe and Asia, Quinn Daisies scales enterprise operations with speed, certainty, and compliance.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766905/QuinnDaisies/2152001127_rzlgti.jpg"
                    alt="Quinn Daisies Global Operations"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg"
                    alt="Quinn Daisies Market Entry"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                    alt="Quinn Daisies Commercial Expansion"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    Whether bringing North American goods to African consumer centers, establishing European distribution for African commodities, or expanding Asian manufacturing trade, we execute your expansion blueprint flawlessly.
                  </p>
                  <Link className="ApplicationButton" to="/services">
                    Explore Trade Corridors
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="SectionContainer">
              <div className="ApplicationBanner">
                <img
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                  alt="Quinn Daisies Expansion CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Ready to Expand Your Business into New Markets?
                  </h2>
                  <p className="ApplicationText">
                    Tell us which region or product category you wish to expand, and our trade strategy team will engineer your end-to-end commercial pathway.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Expansion Consultation
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
