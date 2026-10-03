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
    span: "Bilateral Deal Architecture | Cross-Border Capital Execution",
    h1: "Bridging Global Capital with Verified Emerging Trade Corridors.",
    p: "Quinn Daisies bridges the operational and legal gap between institutional capital, sovereign trade missions, and high-volume commodity pipelines across North America, Europe, Africa, and global commercial hubs.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Trade Finance Integration | Risk De-Escalation",
    h1: "Structured Trade Finance Backed by Bankable Commodities.",
    p: "We structure bankable Letters of Credit (LCs), Afreximbank-aligned export credit instruments, and verified escrow frameworks that eliminate counterparty non-performance and payment settlement hazards.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Bilateral Investment & Sovereign Advisory",
    h1: "De-Risking Cross-Border Commercial Investment & Market Entry.",
    p: "Guiding multinational corporations, institutional investors, and trade syndicates through foreign direct investment (FDI) regulations, bilateral treaty protections, and localized joint venture structures.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 10000;

gsap.registerPlugin(ScrollTrigger);

export default function TradeInvestmentFacilitation() {
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
      icon: "account_balance",
      title: "Structured Trade Financing",
      text: "Seamless collaboration with correspondent tier-1 banks, Afreximbank trade facilities, and irrevocable documentary letters of credit to de-risk transactions.",
    },
    {
      icon: "handshake",
      title: "Counterparty Due Diligence",
      text: "Deep forensic vetting of buyers, origin producers, and commercial aggregators to guarantee transactional integrity, solvency, and AML/KYC compliance.",
    },
    {
      icon: "gavel",
      title: "Bilateral Legal Structuring",
      text: "Contract drafting under international commercial and maritime law, securing binding arbitration protections enforceable across origin and destination markets.",
    },
    {
      icon: "trending_up",
      title: "Bankable Commodity Pipelines",
      text: "Direct access to high-value agro-commodity and industrial trade assets backed by audited warehouse receipts, assay certifications, and pre-negotiated off-take.",
    },
  ];

  const executionStages = [
    {
      title: "Deal Scoping & Commercial Viability",
      description:
        "We evaluate cross-border commercial opportunities against international market demand, currency convertibility, tariff structures, and localized risk parameters.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    },
    {
      title: "Counterparty Forensic Vetting & KYC",
      description:
        "Comprehensive screening of buyers, producers, export houses, and government entities to ensure clean corporate records, regulatory standing, and financial solvency.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    },
    {
      title: "Trade Finance & Escrow Architecture",
      description:
        "Structuring multi-currency payment instruments, performance bonds, transferable LCs, and trusted third-party escrow mechanisms to safeguard capital during transit.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
      title: "Regulatory Alignment & Treaty Clearance",
      description:
        "Navigating bilateral investment treaties, AfCFTA trade concessions, AGOA export privileges, and destination import quotas for frictionless cross-border entry.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
    },
    {
      title: "Physical Collateral Verification & Staging",
      description:
        "Independent inspection and bonded warehousing of physical cargo, linking financial drawdowns directly to verified laboratory assay results and bills of lading.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
    },
    {
      title: "Contract Settlement & Capital Disbursal",
      description:
        "Final handover at destination terminals, triggering automated documentary settlement, customs clearance release, and distribution of investor yields.",
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
        title="Trade & Investment Facilitation | Quinn Daisies Logistics"
        description="Structured trade finance, bilateral investment deal architecture, counterparty forensic vetting, and cross-border commercial facilitation."
        keywords="trade and investment facilitation, structured trade finance, bilateral investment deals, cross border trade facilitation, commodity trade finance, US Nigeria trade investment, letter of credit facilitation"
        url="https://www.logistics.quinndaisies.com/trade-and-investment-facilitation"
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
                    Request Deal Room Consultation
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
                    alt={`Quinn Daisies Trade Facilitation — slide ${activeSlide + 1}, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Framework for Cross-Border Investment
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
                    Disciplined Execution Across Every Phase of Bilateral Commerce
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
                Bilateral Capital & Trade Infrastructure
              </span>
              <h4 className="reveal__right">
                De-risking transatlantic capital flows and structuring bankable cross-border commercial transactions.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Trade Contract Enforceability</h6>
                    <p>
                      All commercial agreements and off-take contracts executed under U.S. legal jurisdiction, mitigating cross-border default risk.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Verified Origin Supply Partners</h6>
                    <p>
                      Direct commercial access to audited agricultural cooperatives, registered processors, and commercial aggregators across Nigeria.
                    </p>
                  </div>
                  <h3>
                    200<text>+</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Capital Settlement Cycle</h6>
                    <p>
                      Structured Letter of Credit (LC), documentary collections, and milestone-linked payment releases backed by verified inspection certificates.
                    </p>
                  </div>
                  <h3>
                    3–5<text>days</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Transaction Fulfillment Rate</h6>
                    <p>
                      Eliminating phantom inventory and delivery defaults through mandatory physical custody checks prior to capital commitment.
                    </p>
                  </div>
                  <h3>
                    98.9<text>%</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                International investors and commercial buyers frequently struggle to deploy capital into emerging African trade corridors due to fragmented counterparty verification, unpredictable regulatory hurdles, and currency volatility. Without verified origin custody and transparent compliance frameworks, promising commercial deals frequently collapse before cargo reaches the water. Quinn Daisies solves this by providing the institutional architecture that transforms speculative trade opportunities into bankable, enforceable transactions.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                By coordinating between institutional investors, regional commodity producers, accredited inspection authorities, and international financial institutions, we establish transparent off-take pipelines. Our dual-entity presence in the United States and Nigeria ensures that capital disbursement is strictly tethered to verified milestones—including PSI certification, bonded warehouse entry, and bill-of-lading issuance—safeguarding balance sheets on both sides of the corridor.
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
                    Structured Trade Execution & Investment Facilitation Pillars
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Our bilateral trade framework transforms commercial intent into verifiable transactions, providing global enterprises and investors with guaranteed accountability across high-growth corridors.
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
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg"
                        alt="Quinn Daisies Commercial Off-Take Structuring"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Bankable Commercial Off-Take Structuring</h2>
                        <p>
                          Crafting long-term bilateral supply agreements with transparent pricing mechanisms, defined quality benchmarks, and U.S.-jurisdiction legal governance.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Quinn Daisies Verified Origin Due Diligence"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Verified Origin Supplier Due Diligence</h2>
                        <p>
                          Rigorous field verification of producer capacity, processing infrastructure, regulatory registrations, and financial stability before trade onboarding.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg"
                        alt="Quinn Daisies Milestone Escrow Settlement"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Milestone-Linked Escrow & Settlement Support</h2>
                        <p>
                          Aligning letter-of-credit releases and trade finance tranches strictly with verified third-party inspection certificates and container gate-in manifests.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766905/QuinnDaisies/2152001127_rzlgti.jpg"
                        alt="Quinn Daisies Strategic FDI Advisory"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Strategic Foreign Direct Investment (FDI) Advisory</h2>
                        <p>
                          Assisting international enterprises in establishing localized processing hubs, warehousing joint ventures, and agricultural aggregation corridors in West Africa.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                        alt="Quinn Daisies Regulatory & Trade Compliance"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Regulatory & Trade Compliance Navigation</h2>
                        <p>
                          Managing bilateral statutory filings, export incentives, central bank trade documentation, and destination customs protocols with zero ambiguity.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                        alt="Quinn Daisies Physical Custody"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Physical Custody & Asset Preservation</h2>
                        <p>
                          Safeguarding underlying commodity assets through secured bonded warehousing, real-time inventory auditing, and comprehensive marine transit insurance.
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
                  Institutional Deal Room | Cross-Border Capital
                </span>
                <h2 className="reveal__bottom">
                  Unlocking High-Yield Bilateral Trade for Global Investors
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    $250M+ <span>Deal Pipeline Capacity</span>
                  </h2>
                  <p>
                    From structured agri-commodity export facilities to infrastructure equipment imports and cross-border commercial partnerships, Quinn Daisies delivers institutional discipline across high-growth trade lanes.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1790074610/QuinnDaisies/2151762335_l72ycf.jpg"
                    alt="Quinn Daisies Summit Deal Room"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg"
                    alt="Quinn Daisies Bilateral Trade"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                    alt="Quinn Daisies Executive Meeting"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    We act as the operational bridge between international capital syndicates and verified origin supply chains, ensuring seamless execution, legal enforceability, and bankable return on capital.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Schedule Private Meeting
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
                  alt="Quinn Daisies Trade Finance CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Structure Your Next Cross-Border Trade Deal
                  </h2>
                  <p className="ApplicationText">
                    Whether seeking bankable commodity off-take agreements, structured trade credit, or foreign investment advisory, meet with our senior trade architects.
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
