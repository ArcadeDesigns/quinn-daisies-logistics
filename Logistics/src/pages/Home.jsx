import React from "react";
import gsap from "gsap";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";

const heroSlides = [
  {
    span: "Trade Execution | Supply Chain Management",
    h1: "Making International Trade Executable.",
    p: "We manage logistics, sourcing, compliance, and in-market execution to facilitate the reliable movement of goods across borders, with a primary operating focus on the United States–Nigeria trade corridor.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465949/QuinnDaisies/2151541965_cfe0hz.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Logistics Infrastructure | Multimodal Freight",
    h1: "Moving Cargo with Precision.",
    p: "We provide coordinated logistics across ocean and air freight, inland transportation, cargo consolidation, warehousing, and customs clearance, delivering greater control and visibility across complex international supply chains.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Origin Sourcing | Quality Assurance",
    h1: "Connecting Demand with Verified Supply.",
    p: "We connect international buyers with qualified origin suppliers and commodities through supplier verification, quality inspection, trade documentation, and coordinated execution across both sides of the market.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 10000;

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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

  const solutions = [
    {
      icon: "local_shipping",
      title: "Physical Execution",
      text: "We manage the physical movement of goods from origin to destination, coordinating collection, handling, freight, and delivery across international supply chains.",
    },

    {
      icon: "verified",
      title: "Verified Supply",
      text: "We identify qualified suppliers, validate origin, verify specifications, and coordinate pre-shipment quality checks before commercial commitments are made.",
    },

    {
      icon: "sync_alt",
      title: "Cross-Border Accountability",
      text: "Our coordinated operating structure provides accountability across both sides of the trade corridor, connecting origin operations with destination markets.",
    },

    {
      icon: "hub",
      title: "Integrated Logistics",
      text: "We coordinate sourcing, freight, documentation, customs clearance, and final delivery as one integrated process for greater control and visibility.",
    },
  ];

  const executionStages = [
    {
      title: "Origin Supply & Procurement",
      description:
        "We align buyer requirements with qualified origin suppliers, aggregators, cooperatives, and producers to establish reliable supply at the point of origin.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    },
    {
      title: "Supplier & Cargo Assurance",
      description:
        "We validate counterparties, specifications, quality, and cargo readiness through supplier due diligence, origin verification, inspections, and applicable testing before shipment.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    },
    {
      title: "Export Readiness & Consolidation",
      description:
        "We coordinate consolidation, packaging, labelling, documentation, and export preparation to align cargo with applicable origin and destination requirements.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
      title: "Multimodal Freight Execution",
      description:
        "We coordinate ocean, air, inland transportation, and port logistics to move cargo efficiently between origin and destination while maintaining shipment visibility.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
    },
    {
      title: "Trade Documentation & Clearance",
      description:
        "We coordinate trade documentation, tariff classification, export requirements, and customs processes with the relevant parties to support compliant cargo release.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
    },
    {
      title: "Inland Distribution & Handover",
      description:
        "We coordinate destination transport from ports and entry points to warehouses, processing facilities, distribution centers, and buyer locations for controlled final delivery.",
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
        title="Quinn Daisies Logistics | Global Freight Forwarding, Cold Chain & Supply Chain Systems"
        description="Quinn Daisies Logistics delivers premier air cargo, ocean freight, customs clearance, cold-chain solutions, and supply chain technology connecting North America, West Africa, and global trade hubs."
        keywords="Quinn Daisies Logistics, global logistics, international shipping, air freight, ocean freight, customs clearance, cold chain logistics, US Nigeria shipping, freight forwarder Maryland, cargo Lagos Nigeria, MMIA Ikeja freight forwarder"
        url="https://www.logistics.quinndaisies.com/"
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
                  <Link className="ApplicationButton" to="/services">
                    Our Services
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
                  Why businesses choose Quinn Daisies
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
                    From Origin to Destination, One Operational Framework
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
                Trade Execution & Logistics Architecture
              </span>
              <h4 className="reveal__right">
                Connecting origin sourcing, accredited verification, multimodal freight, and in-market execution across core transatlantic trade corridors.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>On-Time Last-Mile Dispatch</h6>
                    <p>
                      Dedicated transport routing and scheduled container allocations ensuring high reliability from origin ports to inland destination doors.
                    </p>
                  </div>
                  <h3>
                    99.4<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Verified Origin Supply Network</h6>
                    <p>
                      Direct commercial access to audited agricultural cooperatives, registered processors, and commercial aggregators across Nigeria.
                    </p>
                  </div>
                  <h3>
                    200<span>+</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Port-to-Warehouse Velocity</h6>
                    <p>
                      Expedited customs pre-clearance filings and dedicated terminal drayage power units minimizing detention and demurrage liabilities.
                    </p>
                  </div>
                  <h3>
                    24–48<span>hrs</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Cross-Border Accountability</h6>
                    <p>
                      Unbroken chain-of-custody logging and commercial agreements executed under dual-entity U.S. and Nigerian corporate governance.
                    </p>
                  </div>
                  <h3>
                    100<span>%</span>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                International commerce depends on far more than finding a buyer or introducing a supplier. Goods must be sourced, laboratory-verified, packaged, documented, transported, customs-cleared, and physically delivered to inland facility doors. Fragmented vendor relationships frequently lead to demurrage spirals, delayed release, and contract friction. Quinn Daisies solves this by providing the end-to-end operational infrastructure that connects every stage of the trade flow under one accountable operating framework.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                With active ground operations in Nigeria and commercial coordination in the United States, we bridge the gap between commercial intent and physical execution. From containerized agricultural exports transiting through Baltimore, Houston, Savannah, and Newark to inbound industrial freight and localized market distribution, Quinn Daisies gives expanding enterprises the reliability, compliance certainty, and transparency needed to scale cross-border commerce.
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
                    Navigating the Physical Complexity of Cross-Border Trade
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      International trade requires more than moving goods—it demands coordinated sourcing, logistics, documentation, compliance, and destination execution. Quinn Daisies integrates these functions into one accountable operating framework, providing greater control and visibility from origin to final delivery.
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
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Quinn Daisies Sourcing Network"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>200+ Vetted Origin Sourcing Network</h2>
                        <p>
                          Direct logistics connectivity to an audited network of over 200 qualified Nigerian agricultural cooperatives, commodity aggregators, and commercial processors.
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
                          Mandatory on-site sampling and chemical analysis through accredited third-party inspection agencies (SGS, Bureau Veritas, Cotecna) before cargo is sealed, verifying purity and phytosanitary metrics.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg"
                        alt="Quinn Daisies Trade Risk Hedging"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Trade Risk Hedging & Governance</h2>
                        <p>
                          Mitigating transatlantic commercial risks—cargo adulteration, demurrage spirals, exchange-rate slippage, and contract default—through structured U.S. jurisdictional agreements.
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
                  We help businesses navigate cross-border expansion
                </span>
                <h2 className="reveal__bottom">
                  Expanding beyond your current market or Planning your next stage of growth?
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    100% <span>Logistics Coordination</span>
                  </h2>
                  <p>
                    Operating directly across the United States and Nigeria,
                    We connects American commercial demand with
                    verified Nigerian supply chains, backed by dual-market logistics
                    coordination and domestic legal accountability.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg"
                    alt="Quinn Daisies Images"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg"
                    alt="Quinn Daisies Image"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                    alt="Quinn Daisies Image"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    From Nigerian agricultural commodities to U.S. industrial and commercial
                    goods, we coordinate sourcing, origin handling, transatlantic freight,
                    customs clearance, and inland distribution across North America,
                    West Africa, and global markets.
                  </p>
                  <Link className="ApplicationButton" to="/direct-sales">
                    Direct Sales
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
                  alt="Quinn Daisies"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Move Your Business Across Borders
                  </h2>
                  <p className="ApplicationText">
                    Tell us what you need to source, move, import, export, distribute, or establish,
                    and our team will determine the appropriate operational pathway.
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
