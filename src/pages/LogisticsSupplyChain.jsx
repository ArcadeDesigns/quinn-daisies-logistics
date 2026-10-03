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
    span: "Supply Chain Architecture | Global Logistics Network",
    h1: "Resilient Supply Chains Engineered for Global Market Velocity.",
    p: "From strategic origin procurement and cold-chain warehousing to multimodal transatlantic freight and last-mile fulfillment, Quinn Daisies engineers agile supply networks that lower landed costs and eliminate border bottlenecks.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Multimodal Integration | Port-to-Door Fulfillment",
    h1: "Synchronized Air, Ocean & Intermodal Freight Execution.",
    p: "We combine contracted container allocations across premier deepwater ports, bonded drayage fleets, and scheduled cargo flights to guarantee predictable transit times across transatlantic and intra-regional corridors.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Inventory Optimization | Bonded Staging & Distribution",
    h1: "Intelligent Inventory Flow Across Primary Trade Hubs.",
    p: "Consolidating origin commodities and finished commercial freight within secure bonded facilities, providing real-time inventory telemetry and flexible cross-dock dispatch directly to distributors.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 10000;

gsap.registerPlugin(ScrollTrigger);

export default function LogisticsSupplyChain() {
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
      icon: "local_shipping",
      title: "Dynamic Carrier Routing",
      text: "Multi-carrier redundancy across ocean, air, rail, and road to navigate seasonal capacity constraints and route disruptions with continuous agility.",
    },
    {
      icon: "warehouse",
      title: "Bonded Staging & Cold Chain",
      text: "Temperature-calibrated warehousing with integrated phytosanitary testing, automated fumigation staging, and bonded customs compliance.",
    },
    {
      icon: "verified_user",
      title: "Total Chain of Custody",
      text: "Strict integrity tracking with origin assays, tamper-proof container seals, digital bills of lading, and verified milestone logging.",
    },
    {
      icon: "speed",
      title: "Rapid Port Turnaround",
      text: "Pre-clearance customs filing, on-dock Class I rail connectivity, and dedicated drayage corridors to minimize demurrage and terminal dwell.",
    },
  ];

  const executionStages = [
    {
      title: "Strategic Sourcing & Demand Forecasting",
      description:
        "We align international commercial demand with verified producer networks, mapping volume requirements against seasonal supply realities to ensure uninterrupted material flow.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    },
    {
      title: "Origin Aggregation & Bonded Staging",
      description:
        "Cargo is consolidated at secure inland terminals where moisture, grade, assay specifications, and export packing standards are certified before transit commences.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    },
    {
      title: "Multimodal Carrier Allocation & Pre-Booking",
      description:
        "We secure priority container bookings across leading ocean alliances and commercial air lines, coordinating schedule handovers to eliminate port staging delays.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
      title: "Digital Customs Pre-Clearance & Tariff Optimization",
      description:
        "Our customs brokers pre-file CBP ISF 10+2, EU customs manifests, and import documentation, optimizing HS tariff lines to guarantee rapid cargo release on arrival.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
    },
    {
      title: "In-Transit Telemetry & Environmental Monitoring",
      description:
        "Every shipment is tracked with real-time GPS telemetry and IoT environmental sensors, providing live visibility into container location, humidity, and temperature.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
    },
    {
      title: "Final Hub Deconsolidation & Last-Mile Delivery",
      description:
        "Direct connection from gateway ports into bonded distribution centers, on-dock rail wagons, and regional haulage networks for controlled final-mile handover.",
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
        title="Logistics & Supply Chain Solutions | Quinn Daisies Logistics"
        description="End-to-end global supply chain architecture, multimodal freight coordination, bonded warehousing, and last-mile distribution across major trade lanes."
        keywords="logistics and supply chain, multimodal freight solutions, bonded warehousing, end to end logistics, international cargo management, 3PL logistics, 4PL supply chain architecture"
        url="https://www.logistics.quinndaisies.com/logistics-and-supply-chain"
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
                  <Link className="ApplicationButton" to="/get-a-quote">
                    Request Logistics Consultation
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
                    alt={`Quinn Daisies Logistics — slide ${activeSlide + 1}, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Global Enterprises Rely on Our Supply Chain
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
                    Architected for Resilience Across Every Operational Milestone
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
                Cross-Border Supply Chain Performance
              </span>
              <h4 className="reveal__right">
                Synchronized freight movement engineered for predictability, zero port-dwell penalties, and complete shipment custody.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>On-Time Last-Mile Dispatch</h6>
                    <p>
                      Dedicated haulage pipelines and precision routing guaranteeing seamless transit from coastal gateway to inland facility doors.
                    </p>
                  </div>
                  <h3>
                    99.4<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Contracted Freight & Drayage Units</h6>
                    <p>
                      Active access to verified tractor-trailers, bonded container depots, and cold-chain staging across U.S. and Nigerian corridors.
                    </p>
                  </div>
                  <h3>
                    350<span>+</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Port-to-Warehouse Turnaround</h6>
                    <p>
                      Accelerated electronic pre-clearance filings and dedicated terminal drayage power units minimizing detention and demurrage liabilities.
                    </p>
                  </div>
                  <h3>
                    24–48<span>hrs</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Documented Chain of Custody</h6>
                    <p>
                      Continuous sensor monitoring, telematics tracking, and milestone logging from farm collection through deepwater maritime offload.
                    </p>
                  </div>
                  <h3>
                    100<span>%</span>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Cross-border commerce breaks down when shippers rely on fragmented vendors across maritime bookings, terminal handling, and inland drayage. Port congestion and documentation discrepancies frequently lead to prohibitive demurrage surcharges and compromised transit schedules. Quinn Daisies eliminates these operational vulnerabilities by integrating origin aggregation, bonded terminal staging, accredited laboratory pre-clearance, and intermodal transport into one accountable operating structure.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Under our unified operational framework, commercial enterprises benefit from guaranteed container allocations on premier ocean carriers, secured airport cargo handling at NACHO MMIA, and direct Class I rail transfers at major U.S. ports of entry including Baltimore, Houston, Savannah, and Newark. We absorb the physical complexity of global logistics so your enterprise can scale cross-border trade with absolute commercial certainty.
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
                    Dedicated Freight Corridors & Multimodal Transit Capabilities
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Our direct sales framework links high-volume commercial shippers directly with scheduled vessel allocations, bonded warehousing, air cargo priority, and rapid customs clearance across key transatlantic trade corridors.
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
                        alt="Quinn Daisies Ocean Freight"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Ocean Freight (FCL/LCL)</h2>
                        <p>
                          Direct containerized export routes connecting Lagos Port Complex (Apapa/Tin Can Island) to major U.S. and transatlantic ports of entry, including Baltimore, Newark, Houston, and Savannah.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg"
                        alt="Quinn Daisies Air Cargo"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Air Cargo Consolidation</h2>
                        <p>
                          Rapid, high-security clearance and express handling operated out of our physical base at NACHO, MMIA in Lagos, synchronized with major international cargo airlines and express carriers.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg"
                        alt="Quinn Daisies Inland Haulage"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Inland Haulage & Drayage</h2>
                        <p>
                          Managed road-transit pipelines moving containerized cargo between remote agricultural collection zones, industrial manufacturing hubs, and maritime container terminals.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                        alt="Quinn Daisies Warehousing"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Bonded Warehousing & Inventory Staging</h2>
                        <p>
                          Secure intermediate staging facilities providing climate-controlled buffering, inventory consolidation, palletizing, and pre-export container preparation.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg"
                        alt="Quinn Daisies Cold Chain Logistics"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Cold Chain & Perishable Cargo Handling</h2>
                        <p>
                          Continuous temperature-controlled handling and telematics monitoring safeguarding sensitive agricultural exports and temperature-sensitive industrial goods throughout transit.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                        alt="Quinn Daisies Quality Inspection"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Pre-Shipment Inspection (PSI) Enforced</h2>
                        <p>
                          Mandatory on-site sampling and chemical analysis through accredited third-party inspection agencies (SGS, Bureau Veritas, Cotecna) before cargo is sealed, verifying purity and compliance.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg"
                        alt="Quinn Daisies Trade Risk Hedging"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Trade Risk Hedging & Accountability</h2>
                        <p>
                          Mitigating transatlantic commercial risks—cargo adulteration, demurrage spirals, and exchange-rate slippage—via structured agreements executed under U.S. jurisdictional oversight.
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
                  Global Freight Capacity | Cross-Border Execution
                </span>
                <h2 className="reveal__bottom">
                  Scalable Supply Chain Solutions for Expanding Enterprises
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    99.4% <span>On-Time Dispatch</span>
                  </h2>
                  <p>
                    From deepwater port operations in West Africa to railheads and commercial corridors across North America and Europe, Quinn Daisies delivers consistent execution backed by contractual SLA accountability.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg"
                    alt="Quinn Daisies Supply Chain Operations"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg"
                    alt="Quinn Daisies Ocean Freight"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                    alt="Quinn Daisies Warehouse Logistics"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    Whether importing agricultural raw materials, distributing industrial equipment, or orchestrating multi-country inventory movements, our logistics teams provide the physical capability and commercial transparency your enterprise requires.
                  </p>
                  <Link className="ApplicationButton" to="/get-a-quote">
                    Explore Logistics Corridors
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
                  alt="Quinn Daisies Supply Chain CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Optimize Your End-to-End Supply Chain Today
                  </h2>
                  <p className="ApplicationText">
                    Tell us what you need to move, store, clear, or distribute, and our logistics architects will engineer a dependable, cost-optimized routing strategy.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Supply Chain Consultation
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
