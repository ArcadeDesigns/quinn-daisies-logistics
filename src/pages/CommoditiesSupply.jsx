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
    span: "Agricultural Commodity Procurement | Origin Verification",
    h1: "Direct Farm-Gate Agricultural Sourcing with Absolute Purity.",
    p: "We bridge global commodity buyers and industrial processors directly with vetted agricultural cooperatives across Nigeria, eliminating broker opacity and delivering contractual quality backed by accredited lab assays.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Quality Assurance & Sorting | Pre-Shipment Inspection",
    h1: "Rigorous Mechanical Sorting, Cleaning & Chemical Assays.",
    p: "From Sortex optical cleaning to certified third-party testing (SGS, Bureau Veritas), every export shipment meets rigorous international specifications for moisture, oil content, and purity before departure.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Transatlantic Execution | Bonded Logistics & Export",
    h1: "Unbroken Chain-of-Custody from Inland Farms to Port Discharge.",
    p: "Consolidating high-tonnage agricultural commodities within bonded warehouses, managing container drayage to Lagos ports, and securing contracted ocean vessel space to major global destinations.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 10000;

gsap.registerPlugin(ScrollTrigger);

export default function CommoditiesSupply() {
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
      icon: "grain",
      title: "Natural White Sesame Seeds",
      text: "Machine-cleaned and Sortex-graded to 99%+ purity with oil content exceeding 50%. Sourced from vetted producer cooperatives across northern Nigeria with complete phytosanitary compliance.",
    },
    {
      icon: "spa",
      title: "Sun-Dried Split Ginger",
      text: "Naturally sun-dried split ginger rhizomes cultivated in Kaduna state, prized internationally for exceptional gingerol pungency, high oleoresin content, and strict moisture calibration below 10%.",
    },
    {
      icon: "compost",
      title: "Non-GMO Soybeans",
      text: "Premium non-genetically modified soybeans cultivated across Nigeria's agricultural heartland, delivering high protein levels (38%+) and low foreign matter for global crushers and food manufacturers.",
    },
    {
      icon: "inventory_2",
      title: "Coconut & Agricultural Derivatives",
      text: "Fresh green plantains, tropical fruit inputs, and industrial copra derivatives aggregated under temperature-controlled staging for specialty food processors and international commercial markets.",
    },
  ];

  const executionStages = [
    {
      title: "Cooperative Field Aggregation",
      description:
        "We source directly through long-term off-take agreements with audited farmer cooperatives, bypassing middlemen to secure volume consistency and fair producer compensation.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
    },
    {
      title: "Sortex Cleaning & Moisture Calibration",
      description:
        "Harvested crops undergo multi-stage mechanical sieving, optical Sortex impurity removal, and sun-drying to eliminate foreign matter, stones, and excess moisture.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    },
    {
      title: "Independent Laboratory Certification",
      description:
        "Accredited third-party inspection firms (SGS, Bureau Veritas, Cotecna) conduct on-site sampling and chemical assays to verify contractual purity, aflatoxin limits, and oil content.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg",
    },
    {
      title: "Export Packaging & Container Stuffing",
      description:
        "Certified commodities are packaged in multi-wall polypropylene bags with moisture-absorbing desiccants and loaded into inspected 20ft/40ft ocean containers under strict supervision.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
    },
    {
      title: "Port Drayage & Customs Pre-Clearance",
      description:
        "Bonded trucking fleets transport sealed containers to Apapa and Tin Can Island ports with pre-cleared export documentation, NXP electronic filings, and phytosanitary certificates.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
    },
    {
      title: "Ocean Transit & Destination Discharge",
      description:
        "Priority vessel berthing and bill-of-lading transfers managed under enforceable U.S. commercial contracts, guaranteeing predictable arrival at North American, European, and Asian ports.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
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
        title="Agricultural Commodities & Supply Chain | Quinn Daisies Logistics"
        description="Direct origin agricultural commodity sourcing from Nigeria: Natural White Sesame Seeds, Sun-Dried Split Ginger, Non-GMO Soybeans, and plantains backed by independent laboratory assays and end-to-end export logistics."
        keywords="agricultural commodities export Nigeria, sesame seeds export, split ginger supplier, non-GMO soybeans Nigeria, bulk commodity sourcing, commodity export logistics, raw cashew nuts, cocoa beans export"
        url="https://www.logistics.quinndaisies.com/commodities-and-supply"
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
                    Request Commodity Specifications
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
                    alt={`Quinn Daisies Commodities — slide ${activeSlide + 1}, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Core Sourcing Categories: Verified Origin Agricultural Commodities
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
                    From Farm Gate to Buyer Door: Integrated Sourcing Architecture
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
                Commodity Sourcing & Quality Metrics
              </span>
              <h4 className="reveal__right">
                Origin-verified agricultural pipelines engineered for volume predictability, contractual purity, and zero destination rejections.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Annual Sourcing Capacity</h6>
                    <p>
                      Direct off-take agreements across vetted Nigerian producer cooperatives delivering guaranteed tonnage allocations.
                    </p>
                  </div>
                  <h3>
                    35,000<text>+ MT</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Optical Sortex Purity</h6>
                    <p>
                      Mechanical cleaning and color-sorting protocols ensuring minimum 99.0%–99.5% purity for export sesame and grains.
                    </p>
                  </div>
                  <h3>
                    99.5<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Pre-Shipment Lab Compliance</h6>
                    <p>
                      Mandatory chemical testing and phytosanitary certification by SGS/Bureau Veritas prior to container sealing.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Vetted Cooperative Network</h6>
                    <p>
                      Audited farming clusters and primary aggregation centers operating across Jigawa, Benue, Kaduna, and Nasarawa.
                    </p>
                  </div>
                  <h3>
                    200<text>+</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                International agricultural commodity trading carries inherent risks when buyers rely on third-party intermediaries without physical origin assets. Foreign matter contamination, high moisture levels leading to transit mold, and delayed vessel loadings frequently result in costly demurrage penalties and contract defaults. Quinn Daisies eliminates these structural vulnerabilities through boots-on-the-ground cooperative sourcing, mechanical cleaning depots, and accredited laboratory pre-shipment inspections.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Every metric ton of sesame seeds, split ginger, or non-GMO soybeans supplied by Quinn Daisies is backed by transparent chain-of-custody documentation, certified assay certificates, and dual-jurisdiction commercial contracts. By combining origin aggregation with our dedicated ocean freight forwarding desk, we deliver seamless FOB and CIF trade execution directly to global processing plants, crushers, and food manufacturers.
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
                    Export-Grade Agricultural Commodities Portfolio
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Explore our primary commodity pipelines—consistently graded, scientifically tested, and packaged for transatlantic export to North American, European, and Asian markets.
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
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Natural White Sesame Seeds"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Natural White Sesame Seeds</h2>
                        <p>
                          Cleaned to 99%+ purity with oil content exceeding 50%. Sourced from top-tier growing zones in Jigawa, Benue, and Nasarawa, packed in double-layered polypropylene bags for export.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg"
                        alt="Sun-Dried Split Ginger"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Sun-Dried Split Ginger</h2>
                        <p>
                          Naturally sun-dried Kaduna split ginger with high pungent gingerol and oleoresin profiles. Moisture calibrated strictly under 10% to prevent transit spoilage.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                        alt="Non-GMO Soybeans"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Non-GMO Soybeans</h2>
                        <p>
                          High-protein, non-genetically modified soybeans cultivated across Nigeria's agricultural heartland, serving commercial food processors and high-yield crushing plants globally.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                        alt="Coconut & Copra Derivatives"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Coconut & Copra Derivatives</h2>
                        <p>
                          Sustainably harvested coastal coconut derivatives, copra meal, and cold-pressed crude coconut oil for industrial food processing, cosmetics, and confectionery manufacturing.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg"
                        alt="Export-Grade Plantain & Banana"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Export-Grade Plantain & Banana</h2>
                        <p>
                          Fresh, unripe green plantains and tropical fruit inputs aggregated under temperature-controlled protocols for specialty food manufacturing and ethnic consumer markets.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                        alt="Pre-Shipment Inspection Enforced"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Pre-Shipment Inspection (PSI) Enforced</h2>
                        <p>
                          Mandatory on-site sampling and chemical analysis through accredited testing agencies (SGS, Bureau Veritas) verifying purity, moisture, aflatoxin, and phytosanitary metrics.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg"
                        alt="Custom Commodity Procurement"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Custom Commodity Sourcing</h2>
                        <p>
                          Tailored procurement programs matching institutional buyer specifications across Cashew nuts, Shea butter, Hibiscus flowers, and solid minerals under structured commercial agreements.
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
                  Global Procurement & Origin Certainty
                </span>
                <h2 className="reveal__bottom">
                  Institutional Sourcing Backed by Bankable Execution
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    100% <span>Contractual Governance</span>
                  </h2>
                  <p>
                    Transact under enforceable U.S. commercial law contracts and escrow mechanisms, backed by licensed, boots-on-the-ground operational teams in Nigeria.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                    alt="Agricultural Sourcing"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                    alt="Lab Quality Assays"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                    alt="Bonded Commodity Staging"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    From deepwater terminals in West Africa to processing plants and commercial buyers across North America and Europe, Quinn Daisies guarantees origin authenticity and reliable delivery.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Request Sourcing
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
                  alt="Commodities Sourcing CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Ready to Secure Verified Origin Agricultural Commodities?
                  </h2>
                  <p className="ApplicationText">
                    Connect directly with our commodity sourcing and export execution specialists to receive product grade specifications, laboratory assay reports, and competitive FOB/CIF quotations.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Request Sourcing Consultation
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
