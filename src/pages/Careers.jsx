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
    span: "Global Logistics Careers | High-Velocity Operations",
    h1: "Build the Future of Cross-Border Trade & Physical Logistics.",
    p: "Join an agile, mission-driven team bridging North American commercial demand with West African supply chains across maritime freight, bonded warehousing, commodity aggregation, and trade compliance.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Hands-On Field Leadership | Supply Chain Excellence",
    h1: "Real-World Execution Across Ports, Terminals & Depots.",
    p: "We don't manage trade from behind spreadsheets alone. Our professionals operate directly inside container freight stations, deepwater marine terminals, certified testing laboratories, and agricultural hubs.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
    ],
  },
  {
    span: "Dual-Market Impact | Bilateral Corporate Governance",
    h1: "Accelerate Your International Career Across Two Continents.",
    p: "Collaborate seamlessly across our United States headquarters and Nigerian operations, gaining invaluable expertise in international maritime regulations, customs brokerage, and enterprise logistics management.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 10000;

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
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

    ScrollReveal().reveal(".reveal__bottom__interval", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      interval: 200,
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
      icon: "directions_boat",
      title: "Logistics & Freight Operations",
      text: "Coordinate international ocean vessel allocations, airport cargo handling at NACHO MMIA, and intermodal Class I rail drayage across North American and African trade corridors.",
    },
    {
      icon: "agriculture",
      title: "Commodity Sourcing & Agronomy",
      text: "Manage direct cooperative relationships, origin quality assurance, field collection depots, and Sortex mechanical processing across key agricultural belts.",
    },
    {
      icon: "policy",
      title: "Trade Compliance & Customs",
      text: "Lead regulatory pre-filings, Harmonized Tariff Schedule (HTS) classifications, phytosanitary certifications, and customs coordination across U.S. CBP and Nigeria Customs Service.",
    },
    {
      icon: "terminal",
      title: "Technology & Digital Operations",
      text: "Engineer container telematics pipelines, digital document repositories, API integrations, and predictive trade data analytics that empower physical cargo movements.",
    },
  ];

  const executionStages = [
    {
      title: "Operational Leadership & Training",
      description:
        "Every team member receives comprehensive onboarding covering maritime law, customs regulations, commodity assays, and multimodal freight dispatching.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465952/QuinnDaisies/2150917196_bhmjrt.jpg",
    },
    {
      title: "Cross-Corridor Collaboration",
      description:
        "Work seamlessly across our United States headquarters and Nigerian regional operational centers, synchronizing physical execution across both ends of the trade lane.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1775925890/QuinnDaisies/2149636270_sl8t0l.jpg",
    },
    {
      title: "Field & Terminal Immersion",
      description:
        "Our professionals gain direct experience on the ground—visiting agricultural aggregations, container freight stations, bonded yards, and deepwater marine terminals.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
    },
    {
      title: "Enterprise Client Impact",
      description:
        "Directly manage relationships with multinational food processors, institutional importers, and ocean carriers, delivering high-stakes commercial certainty.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789466419/QuinnDaisies/2151794080_qmduaj.jpg",
    },
    {
      title: "Continuous Innovation & Growth",
      description:
        "Drive innovation in digital documentation, carbon-reduced freight strategies, and sustainable sourcing practices that elevate the global logistics sector.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1729542859/Quinn%20Daisies%20Logistics/technological-futuristic-holograms-logistics-means-transport_itrxu8.jpg",
    },
    {
      title: "Ethical & Fair-Trade Governance",
      description:
        "Champion ethical procurement and smallholder prosperity, ensuring rural farming communities benefit directly from international trade access.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg",
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

      const getScrollAmount = () => -(strip.scrollWidth - window.innerWidth + 80);

      const ctx = gsap.to(strip, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: () => `+=${Math.max(strip.scrollWidth - window.innerWidth, 1200)}`,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        if (ctx.scrollTrigger) ctx.scrollTrigger.kill();
      };
    },
    { scope: carouselSectionRef, dependencies: [] },
  );

  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <SEO
        title="Careers & Operational Culture | Quinn Daisies Logistics"
        description="Explore high-impact career opportunities in international logistics, multimodal freight forwarding, agricultural commodity procurement, and trade compliance across our U.S. and Nigerian operations."
        keywords="logistics careers, freight forwarding jobs, supply chain employment Maryland, Lagos Nigeria logistics careers, international trade jobs, maritime and air cargo hiring"
        url="https://www.logistics.quinndaisies.com/careers"
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
                    Explore Open Opportunities
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </Link>
                </div>
              </div>

              <div className="BackgroundImage" ref={heroBgRef}>
                {currentSlide.images.map((img, index) => (
                  <img
                    key={`${activeSlide}-${index}`}
                    src={img}
                    alt={`Quinn Daisies Careers — slide ${activeSlide + 1}, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Functional Teams: Operations-First Roles Powering Global Trade
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
                    The Quinn Daisies Experience: Six Pillars of Professional Growth
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
                Workforce & Operational Culture Indicators
              </span>
              <h4 className="reveal__right">
                Empowering operational teams across dual-market corridors with direct field experience, structured mentorship, and long-term retention.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Dual-Market Presence</h6>
                    <p>
                      Active operational bases across the United States and Nigeria, coordinating bilateral trade execution seamlessly.
                    </p>
                  </div>
                  <h3>
                    2<span> Continents</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Team Retention Rate</h6>
                    <p>
                      Industry-leading retention driven by transparent performance bonuses, career mobility, and collaborative leadership.
                    </p>
                  </div>
                  <h3>
                    94<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Field Experience Hours</h6>
                    <p>
                      Annual hands-on training hours spent at port docks, container terminals, and agricultural collection depots.
                    </p>
                  </div>
                  <h3>
                    1,200<span>+ hrs</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Compliance & Safety Record</h6>
                    <p>
                      Strict adherence to OSHA, CBP-TPAT, and international maritime security guidelines across all operating facilities.
                    </p>
                  </div>
                  <h3>
                    100<span>%</span>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Building a career in international trade requires mastering the friction of the real world. At Quinn Daisies, we deliberately cultivate a culture of physical accountability. We believe the best logistics leaders are forged not through theoretical models, but by understanding how containers move through customs bottlenecks, how freight rates are hedged against currency fluctuations, and how agricultural commodities are graded for export.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Whether you join our freight brokerage desk, our customs compliance team, our agronomy field network, or our digital logistics engineering group, you will work alongside experienced trade architects who value precision, integrity, and proactive problem-solving. We invest deeply in our personnel, offering clear pathways to executive leadership across our international operating hubs.
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
                    Functional Career Disciplines & Growth Pathways
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Discover the diverse specialized operational roles that drive our bilateral trade corridors, freight networks, and digital logistics infrastructure.
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
                        alt="Maritime & Freight Operations"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Maritime & Freight Operations</h2>
                        <p>
                          Manage international ocean carrier agreements, container scheduling, terminal berthing, and airport express operations across high-traffic transatlantic trade routes.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Origin Sourcing & Agronomy"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Origin Sourcing & Agronomy</h2>
                        <p>
                          Lead cooperative producer engagement, harvest forecasting, farm-gate aggregation, and primary processing for export-grade sesame, ginger, and non-GMO crops.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                        alt="Quality Assurance & Lab Assays"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Quality Assurance & Lab Assays</h2>
                        <p>
                          Oversee pre-shipment sampling, SGS/Bureau Veritas chemical assays, moisture calibration, and phytosanitary verification before containers are sealed.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg"
                        alt="Customs Brokerage & Compliance"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Customs Brokerage & Compliance</h2>
                        <p>
                          Coordinate bilateral regulatory pre-filings with U.S. CBP, FDA Prior Notice, USDA, and Nigeria Customs Service, guaranteeing zero demurrage releases.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg"
                        alt="Inland Haulage & Drayage Fleet"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Inland Haulage & Drayage Fleet</h2>
                        <p>
                          Supervise container truck fleets, bonded corridor transport, chassis staging, and Class I rail transfers connecting coastal ports with inland industrial centers.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1729542859/Quinn%20Daisies%20Logistics/technological-futuristic-holograms-logistics-means-transport_itrxu8.jpg"
                        alt="Digital Logistics Engineering"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Digital Logistics Engineering</h2>
                        <p>
                          Build real-time shipment telematics, automated documentation engines, and enterprise ERP integrations powering modern cross-border supply chains.
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
                  Workplace Culture & Professional Standards
                </span>
                <h2 className="reveal__bottom">
                  Building Tomorrow's Global Logistics & Trade Leaders
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    100% <span>Field Accountability</span>
                  </h2>
                  <p>
                    We value action over theory. Our professionals take pride in moving physical cargo across real borders, navigating complex terminal procedures, and delivering measurable commercial certainty.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg"
                    alt="Quinn Daisies Operations"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg"
                    alt="Maritime Logistics Team"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                    alt="Bonded Warehouse Leadership"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    From deepwater terminals in West Africa to inland logistics corridors and distribution centers across North America, Quinn Daisies offers high-velocity careers with tangible global impact.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Join Our Mission
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="SectionContainer">
              <div className="ApplicationBanner">
                <img
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                  alt="Join Quinn Daisies CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Ready to Advance Your Career in International Trade?
                  </h2>
                  <p className="ApplicationText">
                    Submit your resume or professional portfolio to our talent acquisition team and explore how your operational skills can drive cross-border commerce forward.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Submit Your Resume
                    <span className="material-symbols-outlined">
                      arrow_outward
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
