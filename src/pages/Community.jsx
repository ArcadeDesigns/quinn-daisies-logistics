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
    span: "Inclusive Trade Ecosystems | Economic Empowerment",
    h1: "Empowering Local Producers and Communities Through Direct Global Trade.",
    p: "Quinn Daisies builds inclusive trade bridges that connect smallholder agricultural producers, emerging rural cooperatives, and local businesses directly to high-value international commercial buyers, fostering sustainable economic prosperity.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "Capacity Building | Post-Harvest Quality Training",
    h1: "Equipping Origin Producers with World-Class Trade Skills.",
    p: "We provide practical on-the-ground training in post-harvest drying, automated grading, moisture control, and international phytosanitary standards, enabling local farming communities to consistently earn premium export pricing.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Fair Value Distribution | Community Wealth Creation",
    h1: "Eliminating Exploitative Middlemen in Origin Supply Chains.",
    p: "By connecting cooperatives directly to U.S., European, and Asian processors, we ensure that a greater proportion of the global commodity purchase value returns directly into rural African farming communities.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 10000;

gsap.registerPlugin(ScrollTrigger);

export default function Community() {
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
      icon: "groups",
      title: "Cooperative Partnerships",
      text: "Direct commercial contracts with over 150 regional farming cooperatives, ensuring dependable bulk volumes and fair, transparent pricing for producers.",
    },
    {
      icon: "school",
      title: "Quality & Assay Workshops",
      text: "Continuous educational programs teaching ISO-grade sorting, organic moisture management, pest control, and proper grain bagging techniques.",
    },
    {
      icon: "savings",
      title: "Direct Digital Payments",
      text: "Transparent, real-time digital settlement systems that protect local producers against currency exploitation, unfair discounting, and payment delays.",
    },
    {
      icon: "diversity_3",
      title: "Rural Infrastructure Reinvestment",
      text: "Reinvesting trade revenues into rural aggregation hubs, solar-powered grain dryers, clean water access, and community road improvements.",
    },
  ];

  const executionStages = [
    {
      title: "Cooperative Onboarding & Fair-Trade Alignment",
      description:
        "Partnering directly with local farming cooperatives, setting transparent seasonal volume targets and locking in guaranteed minimum floor prices.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    },
    {
      title: "Agronomic & Phytosanitary Training",
      description:
        "Deploying field agronomists to teach chemical-free pest control, proper harvest timing, and optimal solar drying techniques to reduce mold and aflatoxins.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    },
    {
      title: "Decentralized Quality Testing & Aggregation",
      description:
        "Equipping rural aggregation depots with digital moisture meters, optical sorters, and calibrated scales, ensuring farmers receive immediate grade validation.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
      title: "Direct Commercial Sale & Transparent Pricing",
      description:
        "Connecting aggregated cooperative output directly to international manufacturing off-takers, passing export premiums directly back to producers.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
    },
    {
      title: "Digital Remittance & Financial Inclusion",
      description:
        "Disbursing payments directly into verified cooperative accounts and mobile wallets, building verifiable financial credit histories for rural families.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
    },
    {
      title: "Community Impact & Intergenerational Growth",
      description:
        "Measuring long-term socio-economic metrics, expanding education facilities, and funding youth agricultural mentorship programs in origin regions.",
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
        title="Community & Inclusive Trade | Quinn Daisies Logistics"
        description="Empowering smallholder agricultural producers, rural cooperatives, and origin communities through transparent global trade integration."
        keywords="community trade impact, ethical trade Africa, smallholder farmer empowerment, rural logistics integration, sustainable agriculture Nigeria, community supply chain, inclusive global trade"
        url="https://www.logistics.quinndaisies.com/community"
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
                    Partner with Our Community Program
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
                    alt={`Quinn Daisies Community — slide ${activeSlide + 1}, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Transforming Agricultural Supply Chains for Lasting Local Impact
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
                    Building Sustainable Prosperity from Farmgate to Global Market
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
                Origin Community Empowerment & Inclusive Trade
              </span>
              <h4 className="reveal__right">
                Strengthening rural farming economies through direct market access, technical training, and guaranteed commercial off-take.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Empowered Smallholder Farmers</h6>
                    <p>
                      Direct agricultural training, quality equipment access, and fair-contract participation across verified Nigerian farming clusters.
                    </p>
                  </div>
                  <h3>
                    12,500<span>+</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Direct Farm-Gate Price Uplift</h6>
                    <p>
                      Eliminating predatory intermediate brokers, channeling higher commercial margins directly back into cooperative bank accounts.
                    </p>
                  </div>
                  <h3>
                    25–35<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Post-Harvest Loss Reduction</h6>
                    <p>
                      Deploying localized collection hubs, moisture testing tools, and hermetic storage to preserve harvested crop volumes.
                    </p>
                  </div>
                  <h3>
                    40<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Female Cooperative Leadership</h6>
                    <p>
                      Proportion of partner aggregation groups and sorting hubs owned or led by women agricultural entrepreneurs.
                    </p>
                  </div>
                  <h3>
                    48<span>%</span>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Sustainable global supply chains are built upon the economic vitality of origin producers. Historically, smallholder farmers across West Africa have borne the highest risks of agricultural trade while receiving the lowest economic returns. Unscrupulous middlemen, high post-harvest decay, and complete lack of direct market access have kept rural farming communities economically marginalized. Quinn Daisies fundamentally transforms this dynamic by integrating communities directly into the formal export pipeline.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Through our Community Trade Alliance, we provide local farming cooperatives with physical collection centers, calibrated moisture meters, digital accounting tools, and guaranteed purchase contracts at transparent, market-linked rates. By connecting rural producers directly with international food manufacturers and commodities buyers in the United States and Europe, Quinn Daisies proves that global logistics can be a powerful engine for durable social transformation.
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
                    Community Empowerment & Inclusive Trade Infrastructure
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Our community initiatives invest in the human foundation of international commerce, equipping smallholders, female aggregators, and youth with tools for sustainable prosperity.
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
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg"
                        alt="Quinn Daisies Cooperative Off-Take Contracts"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Direct Cooperative Off-Take Contracts</h2>
                        <p>
                          Providing verified agricultural cooperatives with binding, fair-value pre-harvest purchase agreements that bypass exploitative local middlemen.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg"
                        alt="Quinn Daisies Modern Agronomy Training"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Modern Agronomy & Post-Harvest Training</h2>
                        <p>
                          Educating farmers on proper harvesting techniques, natural solar drying, and aflatoxin prevention to maximize marketable yields.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                        alt="Quinn Daisies Rural Collection Depots"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Rural Collection & Storage Infrastructure</h2>
                        <p>
                          Constructing secure, ventilated community consolidation depots that protect harvested crops from pest infestation and spoilage.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Quinn Daisies Women & Youth Enterprise"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Women & Youth Enterprise Inclusions</h2>
                        <p>
                          Targeted financing and technical support for women-led processing collectives and youth logistics entrepreneurs across agricultural clusters.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                        alt="Quinn Daisies Quality Testing Micro-Grants"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Quality Testing & Equipment Micro-Grants</h2>
                        <p>
                          Equipping rural aggregation stations with digital moisture meters, optical sorters, and certified weighing scales to ensure fair transaction metrics.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg"
                        alt="Quinn Daisies Transparent Digital Settlements"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Transparent Digital Payment Settlements</h2>
                        <p>
                          Instant, auditable digital payments delivered directly to cooperative bank accounts upon physical grain delivery, ensuring rapid capital liquidity.
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
                  Grassroots Impact | Cooperative Prosperity
                </span>
                <h2 className="reveal__bottom">
                  Connecting Over 150 Regional Agricultural Cooperatives
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    150+ <span>Partner Cooperatives</span>
                  </h2>
                  <p>
                    Spanning sesame, cashew, ginger, cocoa, and soybean producing belts across Nigeria and West Africa, delivering sustainable livelihoods through ethical trade.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg"
                    alt="Quinn Daisies Agricultural Cooperative"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg"
                    alt="Quinn Daisies Community Farmers"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                    alt="Quinn Daisies Cooperative Training"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    When global buyers procure through Quinn Daisies, they receive laboratory-verified commodities while directly empowering the farming communities at the roots of global supply.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Support Community Sourcing
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
                  alt="Quinn Daisies Community CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Partner with an Impact-Driven Global Trade Leader
                  </h2>
                  <p className="ApplicationText">
                    Whether seeking ethically sourced origin commodities, establishing direct cooperative supply lines, or participating in our trade capacity-building programs, connect with our community team.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Community Partnership
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
