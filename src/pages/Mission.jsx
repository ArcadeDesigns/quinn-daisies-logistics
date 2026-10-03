import React from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SplitText } from "gsap/SplitText";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";

const heroSlides = [
  {
    span: "Our Purpose & Mission",
    h1: "Built to Make Cross-Border Commerce Work",
    p: "Quinn Daisies combines physical logistics, international sourcing, trade coordination, and operational technology to provide companies with a practical, accountable execution partner across borders.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/9395_ifws6o.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/2151910932_l06x8e.jpg",
    ],
  },
  {
    span: "Our Strategic Vision",
    h1: "Connecting Global Markets Through Dependable Trade Infrastructure",
    p: "We envision transparent, accessible, and dependable cross-border trade corridors between North America and West Africa—anchored by verified origin sourcing, strict chain of custody, and predictable logistics execution.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151468852_krro1f.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541845_zbq5lg.jpg",
    ],
  },
  {
    span: "Our Operating Philosophy",
    h1: "Trade Does Not Move on Paper — It Moves on Physical Execution",
    p: "Commercial intent only succeeds when goods are verified, prepared, documented, transported, cleared, and delivered. We build the physical and operational bridges that make international commerce reliable.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg",
    ],
  },
];

const industries = [
  {
    title: "Logistics and Supply Chain",
    description:
      "From strategic sourcing and procurement to warehousing, distribution, and last-mile delivery, we design resilient supply chain solutions that reduce costs, optimize inventory, and accelerate your time to market.",
    link: "/logistics-and-supply-chain",
    icon: "local_shipping",
  },
  {
    title: "Trade and Investment Facilitation",
    description:
      "Connecting global investors, commercial enterprises, and cross-border trade partners with viable market opportunities, regulatory advisory, bilateral partnerships, and seamless transaction execution.",
    link: "/trade-and-investment-facilitation",
    icon: "handshake",
  },
  {
    title: "Market Expansion Support",
    description:
      "Guiding businesses into dynamic regional and international markets through comprehensive market entry blueprints, localized distribution networks, compliance advisory, and commercial matchmaking.",
    link: "/market-expansion-support",
    icon: "travel_explore",
  },
  {
    title: "Trade Data and Insights",
    description:
      "Empowering cross-border operations with real-time trade lane analytics, customs tariff intelligence, freight rate benchmarks, and predictive market intelligence for confident decision-making.",
    link: "/trade-data-and-insights",
    icon: "query_stats",
  },
];

const SLIDE_INTERVAL = 3000;

gsap.registerPlugin(ScrollTrigger, SplitText, Flip, MorphSVGPlugin);

const missionLandingPool = [
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468842_qcq2hy.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151541857_njan6w.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998707_kqwtto.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg",
];

export default function Mission() {
  useSmoothScroll();

  const [activeSlide, setActiveSlide] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const activeSlideRef = useRef(0);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const landingOverlayRef = useRef(null);
  const landingContentRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const [overlayImages, setOverlayImages] = useState([
    missionLandingPool[0],
    missionLandingPool[1],
    missionLandingPool[2],
    missionLandingPool[3],
  ]);
  const overlayColIndexRef = useRef(0);
  const overlayPoolIndexRef = useRef(4);

  useEffect(() => {
    if (isUnlocked) return;

    const interval = setInterval(() => {
      const nextImg =
        missionLandingPool[
        overlayPoolIndexRef.current % missionLandingPool.length
        ];
      overlayPoolIndexRef.current += 1;
      const targetCol = overlayColIndexRef.current;
      overlayColIndexRef.current = (overlayColIndexRef.current + 1) % 4;

      setOverlayImages((prev) => {
        const next = [...prev];
        next[targetCol] = nextImg;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isUnlocked]);

  const galleryWrapRef = useRef(null);
  const galleryCleanupRef = useRef(null);
  const serviceGalleryEight = useRef(null);

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
  const pathRef = useRef(null);

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

  useEffect(() => {
    if (!isUnlocked) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isUnlocked]);

  const handleLearnMore = () => {
    if (isTransitioningRef.current || isUnlocked) return;
    isTransitioningRef.current = true;

    const path = pathRef.current;
    if (!path) {
      setIsUnlocked(true);
      isTransitioningRef.current = false;
      return;
    }

    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
    const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsUnlocked(true);
        isTransitioningRef.current = false;
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 100);
      },
    });

    // 1. Text & button fade out and rise
    tl.to(landingContentRef.current, {
      opacity: 0,
      y: -35,
      duration: 0.4,
      ease: "power2.in",
    });

    // 2. MorphSVG wave surges from bottom then fully covers screen
    tl.to(
      path,
      {
        morphSVG: start,
        ease: "power2.in",
        duration: 0.65,
      },
      "<0.05",
    ).to(path, {
      morphSVG: end,
      ease: "power2.out",
      duration: 0.65,
    });

    // 3. Once screen is covered, slide the curtain up to reveal the main page
    tl.to(landingOverlayRef.current, {
      yPercent: -100,
      duration: 0.85,
      ease: "power3.inOut",
    });
  };

  const handleReplayIntro = () => {
    if (isTransitioningRef.current || !isUnlocked) return;
    isTransitioningRef.current = true;

    window.scrollTo({ top: 0, behavior: "smooth" });

    const path = pathRef.current;
    const resetPath = "M 0 100 V 100 Q 50 100 100 100 V 100 z";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsUnlocked(false);
        isTransitioningRef.current = false;
        ScrollTrigger.refresh();
      },
    });

    // Slide landing overlay back down
    tl.to(landingOverlayRef.current, {
      yPercent: 0,
      duration: 0.75,
      ease: "power3.inOut",
    });

    // Reset path back to bottom
    if (path) {
      tl.to(path, {
        morphSVG: resetPath,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }

    // Fade content back in
    tl.to(landingContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    let isActive = true;
    const splitInstances = [];
    const splitTweens = [];

    const ctx = gsap.context(() => {
      gsap.set(".ServiceText", { opacity: 1 });

      const initSplitText = () => {
        const containers = gsap.utils.toArray(".ServiceContainer");

        containers.forEach((container) => {
          const text = container.querySelector(".ServiceText");
          if (!text) return;

          const split = SplitText.create(text, {
            type: "words,lines",
            mask: "lines",
            linesClass: "line",
            autoSplit: true,
          });

          splitInstances.push(split);

          const tween = gsap.from(split.lines, {
            yPercent: 120,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              scrub: true,
              start: "top center",
              end: "bottom center",
            },
          });

          splitTweens.push(tween);
        });
      };

      const rebuildSplitText = () => {
        if (!isActive) return;
        splitTweens.forEach((tween) => tween.kill());
        splitInstances.forEach((split) => split.revert());
        splitTweens.length = 0;
        splitInstances.length = 0;
        initSplitText();
        ScrollTrigger.refresh();
      };

      const initAll = () => {
        if (!isActive) return;
        initSplitText();
        ScrollTrigger.refresh();
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(initAll);
      } else {
        initAll();
      }

      window.addEventListener("resize", rebuildSplitText);
    }, pageRef);

    return () => {
      isActive = false;
      splitTweens.forEach((tween) => tween.kill());
      splitInstances.forEach((split) => split.revert());
      ctx.revert();
    };
  }, []);

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
        title="Our Mission, Vision & Operating Principles | Quinn Daisies Logistics"
        description="Discover the mission, vision, and operating principles of Quinn Daisies Logistics. Making cross-border trade executable through physical supply-chain management, verified sourcing, and bilateral accountability between the United States and Nigeria."
        keywords="Quinn Daisies Logistics mission, vision and operating principles, trade execution, cross border supply chain, logistics core values, US Nigeria trade mission, bilateral accountability"
        url="https://www.logistics.quinndaisies.com/our-mission-and-vision"
      />

      <div ref={pageRef}>
        <Navbar />

        <div
          ref={landingOverlayRef}
          className="CorporateLandingOverlay"
        >
          <div className="CorporateLandingBackdrop" />

          {overlayImages.map((src, idx) => (
            <img
              key={`${idx}-${src}`}
              src={src}
              alt="Quinn Daisies Mission & Operating Principles"
            />
          ))}

          <div className="ContentCtn-Center" ref={landingContentRef}>
            <span className="ContentCtn-Center-Span">Mission, Vision & Operating Principles</span>
            <h1>
              Built to Make Cross-Border Commerce Work
            </h1>
            <p>
              Quinn Daisies is a bilateral trade-execution and supply-chain company dedicated to making international commerce operationally reliable. We combine physical logistics, verified origin sourcing, trade coordination, and chain-of-custody governance to connect businesses across the United States, Nigeria, and global markets.
            </p>

            <div className="reveal__bottom">
              <button className="ApplicationButton" onClick={handleLearnMore}>
                Click Here to Explore
                <span className="material-symbols-outlined">
                  globe_location_pin
                </span>
              </button>
            </div>
          </div>

          <div className="AdvanceTransitionWrapper">
            <svg
              className="AdvanceTransition"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern
                  id="missionTransitionPattern"
                  patternUnits="userSpaceOnUse"
                  width="100"
                  height="100"
                >
                  <image
                    href="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                    xlinkHref="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
              </defs>
              <path
                ref={pathRef}
                className="path"
                fill="url(#missionTransitionPattern)"
                vectorEffect="non-scaling-stroke"
                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
              />
            </svg>
          </div>
        </div>

        <div id="smooth-wrapper" ref={smoothWrapperRef}>
          <div id="smooth-content" ref={smoothContentRef}>
            <section className="AdvanceUpdateDesign">
              <img className="AdvanceUpdateDesignImage" src="https://res.cloudinary.com/renaissance-images/image/upload/v1789482758/QuinnDaisies/639892_bqd1oj.jpg" alt="Quinn Daisies Image" />

              <div className="AdvanceUpdateDesignOverlay">
                <span className="AdvanceUpdateSpan">
                  Operating Philosophy & Core Purpose
                </span>

                <h2>Trade Moves Through Logistics.</h2>

                <p className="AdvanceUpdateText">
                  Global trade requires more than connecting buyers and suppliers. Quinn Daisies integrates sourcing, verification, preparation, documentation, transportation, clearance coordination, and delivery into a connected execution framework that moves goods reliably across borders.
                </p>

                <div className="AdvanceUpdateButtonContainer reveal__bottom">
                  <Link className="ApplicationButton" to="/global-capabilities">
                    Our Global Capabilities
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <section className="SectionContainer ServiceContainer">
              <h2 className="ServiceText">
                At Quinn Daisies, our mission is to eliminate the physical friction and opacity of cross-border commerce by delivering an accountable trade-execution bridge between North America and West Africa. Through verified origin sourcing, disciplined supply-chain custody, and institutional regulatory compliance, we make global trade predictable, transparent, and executable.
              </h2>
            </section>

            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Our Operational Creed & Mission
              </span>
              <h4 className="reveal__right">
                We don't just facilitate transactions — we build the sovereign logistics infrastructure that connects emerging African markets with global commerce.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Milestone Execution Rate</h6>
                    <p>
                      Every consignment is governed through documented origin aggregation, bonded staging, maritime transit, and customs release with verified chain-of-custody milestones.
                    </p>
                  </div>
                  <h3>
                    99<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Pre-Shipment Quality Assays</h6>
                    <p>
                      Mandatory accredited laboratory testing and physical inspection enforced at origin before any cargo is sealed or dispatched across transatlantic lanes.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Transatlantic Corridor Support</h6>
                    <p>
                      Continuous operational synchronization across U.S. and Nigerian management teams, ensuring round-the-clock customs clearance, tracking, and compliance.
                    </p>
                  </div>
                  <h3>
                    24/<text>7</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Vetted Sourcing Network</h6>
                    <p>
                      Direct logistics connectivity to over 200 qualified agricultural cooperatives, commodity aggregators, and commercial processors across Nigeria.
                    </p>
                  </div>
                  <h3>
                    200<text>+</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                At Quinn Daisies, we believe international trade succeeds only when physical logistics, trade compliance, and commercial accountability operate in complete unison. We exist to replace counterparty opacity, informal broker networks, and port-side bottlenecks with dependable, institutional-grade transatlantic supply chains.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                By maintaining a complementary dual-market structure across the United States and Nigeria, we provide foreign buyers and local producers with enforceable contractual protection, sovereign regulatory alignment, and hands-on operational custody from farm-gate collection to final delivery.
              </p>
            </section>

            <section className="AdvanceFlexDesignColumn">
              <div className="AdvanceFlexCtnBoxCtnRow">
                <div className="AdvanceFlexCtnBoxCtnRowContent">
                  <span className="reveal__left">Our Strategic Vision</span>
                  <h2 className="reveal__right">
                    Building the Transparent Infrastructure Behind Transatlantic Commerce
                  </h2>
                  <p className="reveal__bottom">
                    Our vision is driven by a conviction that international trade fails not from lack of commercial interest, but from systemic breakdown in execution. When cross-border corridors have verifiable sourcing, direct physical handling, and bilateral accountability, commerce thrives.
                  </p>
                  <div className="AdvanceImageFlexContainer">
                    <div className="AdvanceImageFlexContainerContainer reveal__bottom__interval">
                      <img
                        className="FlexCtnBoxCtnImg"
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg"
                        alt="Quinn Daisies Images"
                      />
                      <p>
                        We eliminate cross-border opacity so enterprises can source, move, and clear high-value commodities without port-side risk.
                      </p>
                    </div>

                    <div className="AdvanceImageFlexContainerContainer reveal__bottom__interval">
                      <img
                        className="FlexCtnBoxCtnImg"
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg"
                        alt="Quinn Daisies Images"
                      />
                      <p>
                        We invest in origin testing, bonded warehousing, and freight infrastructure to ensure every consignment arrives trade-ready.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ExtraAdvanceImageFlexContainer reveal__right__interval">
                  <div className="ExtraAdvanceImageFlexContainerContainer">
                    <img
                      className="FlexCtnBoxCtnImg"
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481021/QuinnDaisies/37874_i8j1ls.jpg"
                      alt="Quinn Daisies Images"
                    />
                    <p>
                      From farm-gate consolidation in Nigeria to port clearance in Baltimore and Houston, every decision we make is anchored in one goal: to be the trade-execution partner that global enterprises and institutional missions trust unconditionally.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="ServiceGallerySection">
              <div className="ServiceGalleryWrap" ref={galleryWrapRef}>
                <div
                  className="ServiceGallery ServiceGalleryBento ServiceGallerySwitch"
                  ref={serviceGalleryEight}
                >
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg"
                      alt="Quinn Daisies staffing and recruitment"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468842_qcq2hy.jpg"
                      alt="Quinn Daisies Logistics"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                      alt="Quinn Daisies Logistics"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg"
                      alt="Quinn Daisies Logistics"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151541857_njan6w.jpg"
                      alt="Quinn Daisies Logistics"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg"
                      alt="Quinn Daisies Logistics"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998707_kqwtto.jpg"
                      alt="Quinn Daisies Logistics"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg"
                      alt="Quinn Daisies Logistics"
                    />
                  </div>
                </div>
              </div>

              <div className="Container Gap-XL ServicePosition">
                <div className="ServiceList">
                  <h3 className="reveal__left">International Trade Solutions</h3>
                  <p className="ServiceListText reveal__right">
                    At Quinn Daisies, our mission is realized through an integrated international trade framework—uniting resilient supply chain logistics, cross-border investment facilitation, strategic market expansion, and predictive trade data analytics across every commercial corridor.
                  </p>
                </div>

                <div className="ServiceListBoxContainer">
                  {industries.map((industry) => (
                    <div
                      className="ServiceListBox reveal__bottom__interval"
                      key={industry.title}
                    >
                      <span className="material-symbols-outlined IconDesign">
                        {industry.icon}
                      </span>
                      <div className="ServiceListBoxContent">
                        <h4>{industry.title}</h4>
                        <p className="ServiceListBoxContentText">
                          {industry.description}
                        </p>

                        <Link
                          to={industry.link}
                          className="ApplicationIconButton"
                        >
                          <span className="material-symbols-outlined">
                            arrow_outward
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Institutional Mission & Execution Metrics
              </span>
              <h4 className="reveal__right">
                Anchoring global commerce in physical supply-chain execution, bilateral accountability, and verifiable origin standards.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Physical Trade Execution</h6>
                    <p>
                      Transactions anchored in real-world cargo custody, multimodal container transport, and verifiable destination delivery.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Origin Quality Verification</h6>
                    <p>
                      Accredited laboratory assays, pre-shipment sampling, and phytosanitary metrics verified before container gates close.
                    </p>
                  </div>
                  <h3>
                    99.8<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Supply Chain Resilience Index</h6>
                    <p>
                      Contracted ocean vessel slots and bonded staging buffers protecting commercial shippers from port congestion.
                    </p>
                  </div>
                  <h3>
                    99.2<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Direct Origin Producer Network</h6>
                    <p>
                      Audited cooperatives and commercial aggregators supplying verified agricultural commodities and industrial inputs.
                    </p>
                  </div>
                  <h3>
                    200<text>+</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Quinn Daisies was founded on a simple premise: trade does not move on paper, it moves through physical execution. Where traditional brokerage models create distance between commercial agreements and physical delivery, we take direct operational responsibility for origin aggregation, quality validation, export staging, and transatlantic freight movements.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Our mission unites local agricultural and industrial producers with global market demand through transparent, verifiable supply chains. By establishing enforceable accountability across both sides of the Atlantic, we protect balance sheets, elevate local farming communities, and make cross-border commerce genuinely dependable.
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
                    What We Stand For: Our Five Core Operating Principles
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Our mission is anchored in core principles that guide our day-to-day operations—from origin aggregation and quality assays in Nigeria to transatlantic shipping and final-mile distribution across North America.
                    </p>
                  </div>
                </div>

                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                  <div
                    className="ApplicationCarouselSlide"
                    ref={carouselStripRef}
                  >
                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>01 — Execution</h2>
                        <p>We focus on moving transactions from commercial intent to physical completion. Trade does not move on paper—it requires physical custody, coordinated transport, real-time tracking, and end-to-end delivery.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>02 — Accountability</h2>
                        <p>We build clear, contractual responsibility into every cross-border corridor. Dual-market presence in the United States and Nigeria ensures transparent recourse, regulatory compliance, and legal integrity.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>03 — Verification</h2>
                        <p>We prioritize accurate information, lab assays, and pre-shipment inspection before cargo moves. By verifying specs, weights, and phytosanitary metrics at origin, we eliminate costly destination disputes.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>04 — Reliability</h2>
                        <p>We design workflows around predictable execution, structured milestone communication, and bonded transit protocols that prevent cargo abandonment, demurrage penalties, and transit delays.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>05 — Partnership</h2>
                        <p>We work alongside buyers, agricultural aggregators, ocean carriers, and regulatory authorities to solve systemic trade barriers, building resilient and lasting transatlantic supply chains.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>06 — Chain of Custody</h2>
                        <p>From farm-gate consolidation and bonded warehousing in Lagos to direct discharge at U.S. ports, we maintain unbroken supervision over cargo handling, climate conditions, and transport security.</p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg" alt="Quinn Daisies Images" />

                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>07 — Risk Governance</h2>
                        <p>We protect trade counterparties against foreign exchange slippage, cargo contamination, and regulatory failure through structured commercial agreements executed under rigorous international standards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="Dark-Background"
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <h2 className="reveal__left">
                    Strategic Vision: Building Sustainable Cross-Border Supply Chains
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      We are building the operational backbone that connects high-potential African export sectors to North American and global commercial demand, replacing fragmented broker networks with institutional-grade logistics.
                    </p>
                  </div>
                </div>

                <div className="ApplicationPivotGrid">
                  <div className="ApplicationPivotGridLeft">
                    <div className="ApplicationPivotGridLeftItem">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg" alt="Quinn Daisies Images" />
                      <div className="ApplicationPivotGridLeftItemOverlay">
                        <span className="AdvanceUpdateSpan">01 — Sustainable Market Access</span>
                        <h3 className="reveal__left">Empowering Origin Producers & Aggregators</h3>
                        <p className="ApplicationCarouselContainerText">By establishing direct logistics pipelines and eliminating exploitative intermediaries, we enable Nigerian cooperatives and commercial aggregators to access premium international buyers with guaranteed fair pricing and transparent trade terms.</p>
                      </div>
                    </div>
                  </div>

                  <div className="ApplicationPivotGridRight">
                    <div className="ApplicationPivotGridRightFlex">
                      <div className="ApplicationPivotGridRightBox">
                        <div className="ApplicationPivotGridRightBoxContent">
                          <span className="AdvanceUpdateSpan">02 — Capital & Trade Efficiency</span>
                          <h4 className="reveal__left">Eliminating Systemic Counterparty Risk</h4>
                          <p className="ApplicationCarouselContainerText">Our vision replaces opaque, informal broker networks with institutional-grade contracts, verifiable escrow workflows, and pre-cleared logistics pathways that give global buyers absolute confidence.</p>
                        </div>
                        <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg" alt="Quinn Daisies Images" />
                      </div>

                      <div className="ApplicationPivotGridRightBox">
                        <div className="ApplicationPivotGridRightBoxContent">
                          <span className="AdvanceUpdateSpan">03 — Regulatory & Trade Assurance</span>
                          <h4 className="reveal__left">Embedded Compliance & Pre-Clearance</h4>
                          <p className="ApplicationCarouselContainerText">We embed destination-market regulatory standards—including USDA, FDA, NAFDAC, and NEPC requirements—directly into our origin workflows to guarantee seamless import clearance.</p>
                        </div>
                        <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg" alt="Quinn Daisies Images" />
                      </div>
                    </div>

                    <div className="ApplicationPivotGridRightBottomBox">
                      <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg" alt="Quinn Daisies Images" />
                      <div className="ApplicationPivotGridRightBottomBoxOverlay">
                        <span className="AdvanceUpdateSpan">04 — Modern Trade Infrastructure</span>
                        <h3 className="reveal__left">Building the Physical Backbone for Bilateral Commerce</h3>
                        <p className="ApplicationCarouselContainerText">From modernized consolidation warehouses in Lagos to specialized customs handling at Baltimore, Houston, and Savannah, we are continuously expanding the physical asset networks that make cross-border trade scalable, reliable, and sustainable.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="Dark-Background"
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <div className="ApplicationSetupDetails reveal__left">
                    <span className="AdvanceUpdateSpan">How We Go To Market</span>
                    <h2 className="reveal__left">Commercial channels driving global trade</h2>
                  </div>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      From direct enterprise agreements and bonded distribution networks to API-driven digital portals, our multi-channel market architecture accelerates trade across borders.
                    </p>
                  </div>
                </div>

                <div className="FeatureCardsGrid">
                  {/* Card 1: Light Theme */}
                  <div className="FeatureCard FeatureCard--light reveal__bottom">
                    <div className="FeatureCardTop">
                      <div className="FeatureCardIcon">
                        <span className="material-symbols-outlined">trending_up</span>
                      </div>
                      <div className="FeatureCardContent">
                        <h3 className="FeatureCardHeading">Direct Sales</h3>
                        <p className="FeatureCardText">
                          Engaging enterprise clients and global buyers directly with custom freight agreements, bulk shipping rate optimization, and dedicated corporate support.
                        </p>
                      </div>
                    </div>

                    <div className="FeatureCardNotch">
                      <Link to="/direct-sales" className="ApplicationButton">
                        <span>Explore More</span>
                        <span className="material-symbols-outlined">globe_location_pin</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: Accent Theme with Decorative Arcs */}
                  <div className="FeatureCard FeatureCard--accent reveal__bottom">
                    <svg
                      className="FeatureCardPattern"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" />
                    </svg>

                    <div className="FeatureCardTop">
                      <div className="FeatureCardIcon">
                        <span className="material-symbols-outlined">local_shipping</span>
                      </div>
                      <div className="FeatureCardContent">
                        <h3 className="FeatureCardHeading">Distribution Partnerships</h3>
                        <p className="FeatureCardText">
                          Collaborating with premier regional carriers, bonded warehousing operators, and 3PL networks to expand distribution reach and accelerate transit.
                        </p>
                      </div>
                    </div>

                    <div className="FeatureCardNotch">
                      <Link to="/distribution-partnerships" className="ApplicationButton">
                        <span>Explore More</span>
                        <span className="material-symbols-outlined">globe_location_pin</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 3: Deep Dark Contrast Card */}
                  <div className="FeatureCard FeatureCard--dark reveal__bottom">
                    <div className="FeatureCardTop">
                      <div className="FeatureCardIcon">
                        <span className="material-symbols-outlined">devices</span>
                      </div>
                      <div className="FeatureCardContent">
                        <h3 className="FeatureCardHeading">Online Presence & E-Commerce</h3>
                        <p className="FeatureCardText">
                          Powering digital trade portals, API-integrated freight booking, and automated tracking solutions for fast, borderless B2B commercial transactions.
                        </p>
                      </div>
                    </div>

                    <div className="FeatureCardNotch">
                      <Link to="/online-presence-ecommerce" className="ApplicationButton">
                        <span>Explore More</span>
                        <span className="material-symbols-outlined">globe_location_pin</span>
                      </Link>
                    </div>
                  </div>
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
