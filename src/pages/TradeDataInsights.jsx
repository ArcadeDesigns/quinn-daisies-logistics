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
    span: "Predictive Intelligence | Trade Lane Telemetry",
    h1: "Empowering Cross-Border Trade with Real-Time Data & Actionable Intelligence.",
    p: "Quinn Daisies equips global traders, institutional buyers, and corporate supply chain directors with live freight indices, customs tariff intelligence, predictive route analytics, and origin commodity price transparency.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010387/QuinnDaisies/124625_jouegu.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Freight Benchmarking | Route Cost Optimization",
    h1: "Dynamic Spot & Contract Freight Rate Optimization.",
    p: "Analyze historical and forward-looking freight indices across key ocean corridors, bunker fuel adjustments, port congestion wait times, and demurrage risks to secure maximum margin on every shipment.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Commodity Market Telemetry | Origin Pricing Analytics",
    h1: "Transparent Farmgate-to-Port Commodity Price Discovery.",
    p: "Gain verified transparency into origin pricing, currency volatility hedge metrics, seasonal harvest yields, and export parity prices for key agricultural commodities moving between Africa, the Americas, and Europe.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 10000;

gsap.registerPlugin(ScrollTrigger);

export default function TradeDataInsights() {
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
      icon: "query_stats",
      title: "Predictive Rate Modeling",
      text: "Machine-learning assisted freight rate forecasting that helps shippers lock in long-term ocean and air bookings ahead of seasonal rate inflation.",
    },
    {
      icon: "monitoring",
      title: "Real-Time Cargo Telemetry",
      text: "Continuous tracking of vessel coordinates, container temperatures, moisture levels, and port dwell milestones with automated alerts.",
    },
    {
      icon: "calculate",
      title: "Customs Tariff & Duty Analytics",
      text: "Precise Harmonized System (HS) code classification and real-time duty modeling, maximizing AfCFTA and AGOA preferential tariff eligibility.",
    },
    {
      icon: "psychology",
      title: "Supply Chain Risk Forecasting",
      text: "Origin weather modeling, agricultural yield estimates, port strike alerts, and geopolitical risk indicators that protect business continuity.",
    },
  ];

  const executionStages = [
    {
      title: "Multi-Source Data Ingestion & Harmonization",
      description:
        "Aggregating live telemetry from shipping line manifests, port terminal management systems, customs broker declarations, and satellite vessel AIS networks.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    },
    {
      title: "Tariff Classification & Regulatory Modeling",
      description:
        "Validating product HS codes against national tariff schedules, determining exact duties, anti-dumping levies, and preferential treaty exemptions.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    },
    {
      title: "Freight Benchmark & Index Analysis",
      description:
        "Comparing contracted carrier rates against spot market indices and fuel surcharges, identifying margin recovery opportunities across all active lanes.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
      title: "Real-Time IoT & Environmental Sensor Tracking",
      description:
        "Monitoring high-value and perishable cargo in transit, measuring temperature, humidity, shock, and geofence breaches to maintain chain of custody.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
    },
    {
      title: "Predictive Port Dwell & Congestion Alerting",
      description:
        "Forecasting vessel queue times and terminal gate bottlenecks to reschedule inland drayage pickups before free time expires and demurrage accumulates.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
    },
    {
      title: "Executive Analytics & Strategic Reporting",
      description:
        "Customized commercial BI dashboards, quarterly lane performance reviews, and origin price discovery reports delivered directly to executive leadership.",
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
        title="Trade Data & Insights | Quinn Daisies Logistics"
        description="Predictive trade analytics, real-time freight rate benchmarking, customs tariff intelligence, and IoT cargo telemetry for global enterprises."
        keywords="trade data insights, freight rate benchmarking, customs tariff intelligence, supply chain analytics, predictive trade analytics, cargo telemetry, trade corridors data"
        url="https://www.logistics.quinndaisies.com/trade-data-and-insights"
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
                    Request Intelligence Consultation
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
                    alt={`Quinn Daisies Trade Data — slide ${activeSlide + 1}, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Cross-Border Data Into Commercial Advantage
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
                    Actionable Data Pipeline Connecting Sourcing to Destination Release
                  </h2>
                  {executionStages.map((item, index) => (
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
                  {executionStages.map((item, index) => (
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

            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Operational Intelligence & Telematics
              </span>
              <h4 className="reveal__right">
                Transforming complex freight signals and trade lane data into actionable commercial advantage.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Telemetry Milestone Accuracy</h6>
                    <p>
                      Continuous sensor feeds and automated electronic milestones capturing exact cargo status across maritime, air, and inland transit.
                    </p>
                  </div>
                  <h3>
                    99.8<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Monitored Global Trade Lanes</h6>
                    <p>
                      Active tracking of container dwell times, carrier reliability indexes, and spot-versus-contract rate spreads across core corridors.
                    </p>
                  </div>
                  <h3>
                    45<text>+</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Tariff Optimization & Duty Savings</h6>
                    <p>
                      Precise HS code classification, trade agreement utilization, and duty drawback auditing lowering total landed shipment costs.
                    </p>
                  </div>
                  <h3>
                    12–18<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Predictive ETA Variance Window</h6>
                    <p>
                      Machine-assisted transit forecasting accounting for seasonal port congestion, customs inspection delays, and weather disruptions.
                    </p>
                  </div>
                  <h3>
                    &lt;12<text>hrs</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                In volatile global supply chains, lack of visibility is the primary driver of cost overruns and stockouts. Commercial shippers are frequently blind to container hold-ups until penalty surcharges have already accrued. Quinn Daisies bridges this intelligence gap by equipping our physical operations with robust digital tracking and analytical telemetry. We do not sell detached software; we provide enterprise customers with direct, real-time insight into the physical reality of their freight.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Our trade intelligence systems integrate live carrier manifests, port gateway telemetry, customs pre-filing databases, and regional commodity pricing indices. By synthesizing these operational feeds, Quinn Daisies enables procurement managers and freight directors to anticipate terminal delays, optimize container loading schedules, and make data-backed freight allocation decisions with total precision.
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
                    Advanced Trade Analytics & Cargo Visibility Architecture
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Our digital intelligence layer provides real-time transparency across international trade corridors, turning raw shipment telemetry into decisive operational control.
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
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010387/QuinnDaisies/124625_jouegu.jpg"
                        alt="Quinn Daisies Real-Time Cargo Telematics"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Real-Time Cargo Telematics & Milestone Tracking</h2>
                        <p>
                          Continuous GPS, container temperature, and door-seal telemetry streamed directly to client dashboards from origin pickup to destination delivery.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg"
                        alt="Quinn Daisies Freight Rate Indexing"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Freight Rate Indexing & Spot-Spread Benchmarking</h2>
                        <p>
                          Historical and predictive rate analytics benchmarking ocean FCL/LCL and air cargo contracts against global market trends to ensure optimal freight spend.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg"
                        alt="Quinn Daisies HS Code Tariff Optimization"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>HS Code Tariff Optimization & Duty Advisory</h2>
                        <p>
                          Algorithmic customs tariff classification identifying preferential bilateral duty treatments, AGOA qualifications, and statutory duty reductions.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg"
                        alt="Quinn Daisies Port Congestion Modeling"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Port Congestion & Dwell-Time Predictive Modeling</h2>
                        <p>
                          Predictive transit analytics forecasting terminal gate bottlenecks and vessel berthing windows across major West African and U.S. deepwater ports.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg"
                        alt="Quinn Daisies Digital Trade Documentation Vault"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Digital Trade Documentation Vault</h2>
                        <p>
                          Secure, tamper-evident digital repository consolidating bills of lading, phytosanitary certificates, PSI reports, and customs releases into a single audit trail.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Quinn Daisies Seasonal Commodity Sourcing Analytics"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Seasonal Commodity Sourcing & Harvest Analytics</h2>
                        <p>
                          Yield projections, regional farm-gate price tracking, and quality grade trends across key Nigerian export commodities including sesame, ginger, and soy.
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
                  Live Telemetry | Actionable Intelligence
                </span>
                <h2 className="reveal__bottom">
                  Replacing Intuition with Verified Trade Data
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    99.8% <span>Telemetry Accuracy</span>
                  </h2>
                  <p>
                    Combining satellite AIS vessel positioning, port API integrations, digital bill of lading feeds, and IoT sensors into one crystal-clear operational view.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010387/QuinnDaisies/124625_jouegu.jpg"
                    alt="Quinn Daisies Data Analytics"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg"
                    alt="Quinn Daisies Freight Analytics"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                    alt="Quinn Daisies Cargo Telemetry"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    Our data platform eliminates blind spots across origin procurement, ocean voyages, customs release, and destination distribution, giving commercial leadership full control.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Request Intelligence Demo
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
                  alt="Quinn Daisies Trade Data CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Gain the Data Advantage in Cross-Border Trade
                  </h2>
                  <p className="ApplicationText">
                    Request customized trade lane analytics, customs duty benchmark reports, or live IoT supply chain monitoring tailored to your specific commercial corridors.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Trade Consultation
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
