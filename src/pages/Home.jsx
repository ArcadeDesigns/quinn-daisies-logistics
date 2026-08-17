import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Box from "./components/Home/Box";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import SEO from "../components/SEO";
import Slide from "./components/Home/Slide";
import Advert from "./components/Home/Advert";
import Banner from "./components/Home/Banner";
import Carousel from "./components/Home/Carousel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";
import { industrySlides } from "../data/industrySlides";

const heroSlides = [
  {
    span: "Reliable Logistics Solutions Tailored for You",
    h1: "Discover How We Can Support Your Shipping Needs",
    p: "We are dedicated to providing exceptional logistics services that emphasize safety, efficiency, and timely delivery. Our goal is to simplify your shipping experience—locally and globally—through innovative, customer-focused solutions.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998707_kqwtto.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541940_tnhpha.jpg",
    ],
  },
  {
    span: "End-to-End Freight Management, Simplified",
    h1: "From Pickup to Final Delivery — We Handle Every Step",
    p: "Whether you're moving goods across continents or clearing customs under tight deadlines, Quinn Daisies provides structured coordination, compliance review, and dedicated support throughout your entire supply chain.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151468852_krro1f.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541845_zbq5lg.jpg",
    ],
  },
  {
    span: "Cross-Border Expertise You Can Rely On",
    h1: "Need Help Expanding Into New Markets?",
    p: "With operational presence across Nigeria and the United States, Quinn Daisies gives growing businesses the infrastructure, documentation expertise, and market-entry logistics to move with confidence — wherever trade takes you.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 3000;

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
      icon: "inventory",
      title: "Restock with less friction",
      text: "We help vendors reduce the operational burden of sourcing, coordinating, and receiving imported food shipments.",
    },
    {
      icon: "trending_up",
      title: "Improve compliance readiness",
      text: "Products and documentation are reviewed before export so issues can be addressed earlier, not after arrival.",
    },
    {
      icon: "delivery_truck_speed",
      title: "Get better shipment visibility",
      text: "Our workflow is designed around tracking milestones, exception handling, and proactive communication.",
    },
    {
      icon: "all_match",
      title: "Operate with more confidence",
      text: "With executive presence in the United States and operational coordination in Nigeria, we provide a stronger foundation for trust-sensitive vendor relationships.",
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
      <SEO />

      <div ref={pageRef}>
        <Navbar />

        <section className="PromotionalAdsOverlay">
          <div className="PromotionalAds">
            <div className="PromotionalAdsImage">
              <img
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468864_q9vqox.jpg"
                alt="Quinn Daisies Logistics"
              />
            </div>

            <div className="PromotionalAdContent">
              <div className="PromotionalAdContentHeader">
                <h2>
                  Sell Your Products. Reach Global Markets. Build Something
                  Bigger.
                </h2>
                <p>
                  Whether you're a Nigerian vendor ready to reach U.S.
                  customers, or a business looking to establish a footprint in
                  Africa — Quinn Daisies is the platform that connects you,
                  moves your goods, and handles everything in between.
                </p>
              </div>

              <div className="PromotionalAdContentList">
                <div className="PromotionalAdContentListItem">
                  <h3>Looking to Expand into the U.S. or Nigeria?</h3>
                  <Link className="ApplicationButton" to="/get-a-quote">
                    Explore Trade Routes
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
                <div className="PromotionalAdContentListItem">
                  <h3>Are You a Vendor? Start Selling Today.</h3>
                  <Link className="ApplicationButton" to="/get-a-quote">
                    Join as a Vendor
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    Request a Personalized Quote
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
                    Built for reliability, visibility, and vendor confidence
                  </h2>
                  {industrySlides.map((item, index) => (
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
                  {industrySlides.map((item, index) => (
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

            <section
              className="Dark-Background"
              id="CarouselAnimation"
              ref={carouselSectionRef}
            >
              <div className="ApplicationCarousel">
                <div className="ApplicationCarouselFlex">
                  <h2 className="reveal__left">
                    We Solve the Problem of Fragmented Restocking and Unreliable
                    Import Coordination
                  </h2>
                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      For many African food retailers, specialty grocers,
                      wholesalers, and import-focused businesses in the United
                      States, restocking from Nigeria is often more difficult
                      than it should be. The challenge is not just shipping. It
                      is the lack of a structured, dependable system for
                      sourcing, documentation, shipment coordination, compliance
                      review, tracking, and final delivery support.
                    </p>
                  </div>
                </div>

                <div className="ApplicationCarouselViewport">
                  <div
                    className="ApplicationCarouselSlide"
                    ref={carouselStripRef}
                  >
                    <div className="ApplicationCarouselSlideBox">
                      <svg
                        id="imgsvg"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100px"
                        height="100px"
                        style={{
                          shapeRendering: "geometricPrecision",
                          textRendering: "geometricPrecision",
                          imageRendering: "optimizeQuality",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                        }}
                      >
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 99.5,51.5 C 99.5,52.8333 99.5,54.1667 99.5,55.5C 96.282,56.6918 93.1153,58.0251 90,59.5C 89.8316,67.5207 89.3316,75.5207 88.5,83.5C 75.6296,88.5676 62.6296,93.2343 49.5,97.5C 36.3704,93.2343 23.3704,88.5676 10.5,83.5C 9.66839,75.5207 9.16839,67.5207 9,59.5C 5.88466,58.0251 2.71799,56.6918 -0.5,55.5C -0.5,54.1667 -0.5,52.8333 -0.5,51.5C 2.80359,46.6737 5.97026,41.6737 9,36.5C 10.7533,35.373 12.5866,34.373 14.5,33.5C 19.2011,9.81864 33.5345,-0.681358 57.5,2C 73.1119,6.78206 82.1119,17.2821 84.5,33.5C 86.4134,34.373 88.2467,35.373 90,36.5C 93.0297,41.6737 96.1964,46.6737 99.5,51.5 Z M 47.5,5.5 C 52.4575,5.71112 57.1241,6.87779 61.5,9C 59.3911,10.1411 57.5578,11.6411 56,13.5C 55.5012,17.4862 55.3345,21.4862 55.5,25.5C 60.849,24.3891 65.1824,25.8891 68.5,30C 64.3654,31.4308 60.032,31.9308 55.5,31.5C 55.3345,35.5138 55.5012,39.5138 56,43.5C 56.6924,44.0253 57.1924,44.6919 57.5,45.5C 51.0538,49.3225 44.7205,48.9891 38.5,44.5C 37.6858,42.2338 37.1858,39.9005 37,37.5C 29.6122,33.0708 30.4455,30.2375 39.5,29C 40.8804,27.0748 42.3804,25.2415 44,23.5C 44.7876,17.3167 45.9543,11.3167 47.5,5.5 Z M 38.5,7.5 C 39.5,7.5 40.5,7.5 41.5,7.5C 43.1657,18.1869 38.8324,24.8536 28.5,27.5C 27.343,30.7844 27.1764,34.1177 28,37.5C 29.9734,38.6399 31.8067,39.9733 33.5,41.5C 29.1123,41.3282 24.7789,40.1615 20.5,38C 19.9152,24.057 25.9152,13.8904 38.5,7.5 Z M 65.5,11.5 C 75.3227,17.6453 79.656,26.4787 78.5,38C 73.6667,39.8333 68.8333,41.6667 64,43.5C 60.1857,42.1759 58.6857,39.5093 59.5,35.5C 64.6674,35.91 69.6674,35.2433 74.5,33.5C 74.8333,32.8333 75.1667,32.1667 75.5,31.5C 72.4161,24.3921 67.0827,21.0588 59.5,21.5C 59.3398,19.8008 59.5065,18.1341 60,16.5C 62.3284,15.3365 64.1618,13.6698 65.5,11.5 Z M 12.5,40.5 C 23.7424,44.2469 34.7424,48.5802 45.5,53.5C 43,57.8333 40.5,62.1667 38,66.5C 27.066,61.8568 16.2327,57.0235 5.5,52C 7.97007,48.2221 10.3034,44.3888 12.5,40.5 Z M 85.5,40.5 C 88.5139,44.005 91.1806,47.8384 93.5,52C 82.7673,57.0235 71.934,61.8568 61,66.5C 58.5,62.1667 56,57.8333 53.5,53.5C 64.0724,48.7581 74.739,44.4248 85.5,40.5 Z M 13.5,61.5 C 21.9503,64.9285 30.4503,68.2618 39,71.5C 40.1074,71.4148 41.1074,71.0814 42,70.5C 43.4131,67.3388 45.0797,64.3388 47,61.5C 47.4998,71.4944 47.6665,81.4944 47.5,91.5C 36.3473,88.171 25.3473,84.3377 14.5,80C 13.5236,73.9242 13.1903,67.7576 13.5,61.5 Z M 51.5,61.5 C 53.8096,64.1019 55.6429,67.1019 57,70.5C 57.8926,71.0814 58.8926,71.4148 60,71.5C 68.2735,68.4635 76.4402,65.1301 84.5,61.5C 85.8087,67.7221 85.8087,73.8888 84.5,80C 73.6527,84.3377 62.6527,88.171 51.5,91.5C 51.5,81.5 51.5,71.5 51.5,61.5 Z"
                          />
                        </g>
                      </svg>
                      <h4>We Fix Fragmented supplier coordination</h4>
                      <p>
                        We streamline sourcing, shipping, and delivery
                        coordination to reduce delays and improve operational
                        clarity.
                      </p>
                    </div>
                    <div className="ApplicationCarouselSlideBox">
                      <svg
                        id="imgsvg"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100px"
                        height="100px"
                        style={{
                          shapeRendering: "geometricPrecision",
                          textRendering: "geometricPrecision",
                          imageRendering: "optimizeQuality",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                        }}
                      >
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 7.5,7.5 C 35.5,7.5 63.5,7.5 91.5,7.5C 91.6666,24.8365 91.4999,42.1699 91,59.5C 90,58.8333 89,58.1667 88,57.5C 87.5001,42.1703 87.3334,26.837 87.5,11.5C 62.1667,11.5 36.8333,11.5 11.5,11.5C 11.5,36.8333 11.5,62.1667 11.5,87.5C 26.837,87.3334 42.1703,87.5001 57.5,88C 58.1667,89 58.8333,90 59.5,91C 42.1699,91.4999 24.8365,91.6666 7.5,91.5C 7.5,63.5 7.5,35.5 7.5,7.5 Z M 41.5,21.5 C 46.8437,21.334 52.1771,21.5006 57.5,22C 58.8333,23 58.8333,24 57.5,25C 52.1667,25.6667 46.8333,25.6667 41.5,25C 40.3157,23.8545 40.3157,22.6879 41.5,21.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 38.5,17.5 C 45.8409,17.3337 53.1742,17.5003 60.5,18C 63.2868,20.1672 64.1201,23.0006 63,26.5C 62.5,27.6667 61.6667,28.5 60.5,29C 53.1667,29.6667 45.8333,29.6667 38.5,29C 34.5548,25.1694 34.5548,21.3361 38.5,17.5 Z M 41.5,21.5 C 40.3157,22.6879 40.3157,23.8545 41.5,25C 46.8333,25.6667 52.1667,25.6667 57.5,25C 58.8333,24 58.8333,23 57.5,22C 52.1771,21.5006 46.8437,21.334 41.5,21.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 99.5,73.5 C 99.5,77.5 99.5,81.5 99.5,85.5C 96.5,91.8333 91.8333,96.5 85.5,99.5C 81.5,99.5 77.5,99.5 73.5,99.5C 61.9361,94.7111 57.4361,86.0444 60,73.5C 66.2666,59.85 76.4332,56.0167 90.5,62C 94.5378,65.183 97.5378,69.0164 99.5,73.5 Z M 78.5,63.5 C 93.0645,66.6365 97.5645,74.9698 92,88.5C 83.6667,97.8333 75.3333,97.8333 67,88.5C 61.5825,75.9979 65.4159,67.6646 78.5,63.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 78.5,65.5 C 79.5,65.5 80.5,65.5 81.5,65.5C 81.5,66.8333 81.5,68.1667 81.5,69.5C 85.3163,70.0897 86.9829,72.4231 86.5,76.5C 84.8333,76.5 83.1667,76.5 81.5,76.5C 80.3117,71.2044 79.4784,71.2044 79,76.5C 81.2503,77.7079 83.417,79.0413 85.5,80.5C 87.4551,84.829 86.4551,88.1624 82.5,90.5C 81.6143,91.325 81.281,92.325 81.5,93.5C 80.5,93.5 79.5,93.5 78.5,93.5C 78.719,92.325 78.3857,91.325 77.5,90.5C 73.8523,89.5268 72.1857,87.1935 72.5,83.5C 75.8819,83.7263 78.8819,84.7263 81.5,86.5C 81.2923,82.8561 79.2923,80.6895 75.5,80C 71.2843,75.2197 72.1177,71.3864 78,68.5C 78.4828,67.552 78.6495,66.552 78.5,65.5 Z"
                          />
                        </g>
                      </svg>
                      <h4>Improve landed-cost visibility</h4>
                      <p>
                        We improve cost visibility across sourcing, freight, and
                        delivery to support better planning and decision-making.
                      </p>
                    </div>
                    <div className="ApplicationCarouselSlideBox">
                      <svg
                        id="imgsvg"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100px"
                        height="100px"
                        style={{
                          shapeRendering: "geometricPrecision",
                          textRendering: "geometricPrecision",
                          imageRendering: "optimizeQuality",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                        }}
                      >
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 5.5,3.5 C 21.5035,3.33341 37.5035,3.50007 53.5,4C 61.3333,11.8333 69.1667,19.6667 77,27.5C 77.8214,30.5541 77.6548,33.5541 76.5,36.5C 75.8333,36.8333 75.1667,37.1667 74.5,37.5C 73.5344,35.604 73.2011,33.604 73.5,31.5C 65.5,31.5 57.5,31.5 49.5,31.5C 49.5,23.5 49.5,15.5 49.5,7.5C 36.1667,7.5 22.8333,7.5 9.5,7.5C 9.5,35.5 9.5,63.5 9.5,91.5C 30.8333,91.5 52.1667,91.5 73.5,91.5C 73.3398,89.8008 73.5065,88.1341 74,86.5C 74.7504,87.1258 75.5838,87.6258 76.5,88C 77.435,90.3806 77.7683,92.8806 77.5,95.5C 53.5,95.5 29.5,95.5 5.5,95.5C 5.5,64.8333 5.5,34.1667 5.5,3.5 Z M 53.5,11.5 C 58.9647,16.4636 64.298,21.6303 69.5,27C 64.1771,27.4994 58.8437,27.666 53.5,27.5C 53.5,22.1667 53.5,16.8333 53.5,11.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 99.5,66.5 C 99.5,67.5 99.5,68.5 99.5,69.5C 97.1768,70.5821 94.8435,70.4154 92.5,69C 88.3333,64.1667 84.1667,59.3333 80,54.5C 77.4066,56.5486 74.9066,58.7152 72.5,61C 74.783,61.2912 76.9497,60.7912 79,59.5C 81.4796,60.1224 81.9796,61.4557 80.5,63.5C 78.4864,66.3865 75.8197,67.5531 72.5,67C 69.672,64.7519 66.672,62.7519 63.5,61C 62.365,60.2506 61.365,60.4173 60.5,61.5C 64.9791,67.1468 69.6457,72.6468 74.5,78C 80.5017,80.8357 86.835,82.5024 93.5,83C 95.3937,84.0793 95.727,85.4126 94.5,87C 87.7025,87.0898 81.0359,86.0898 74.5,84C 69.3246,79.9906 64.658,75.4906 60.5,70.5C 54.1679,74.7519 47.3345,77.7519 40,79.5C 39.3076,78.9747 38.8076,78.3081 38.5,77.5C 40.1157,74.8296 41.4491,71.9962 42.5,69C 39.4397,65.8336 38.9397,62.3336 41,58.5C 45.1667,53.6667 49.3333,48.8333 53.5,44C 54.8732,43.1251 56.3732,42.6251 58,42.5C 62.4713,43.5127 66.9713,43.6794 71.5,43C 75.3869,39.8891 79.7202,37.5557 84.5,36C 91.0611,34.946 92.8945,37.446 90,43.5C 88.1877,46.2802 86.021,48.7802 83.5,51C 88.1188,57.1223 93.4521,62.289 99.5,66.5 Z M 82.5,41.5 C 85.0009,41.5109 85.1676,42.1776 83,43.5C 82.5357,42.9056 82.369,42.2389 82.5,41.5 Z M 77.5,44.5 C 78.3909,45.2613 79.0576,46.2613 79.5,47.5C 76.343,51.6541 72.5096,54.9875 68,57.5C 66.605,57.2196 65.4383,56.5529 64.5,55.5C 68.5594,51.4349 72.8927,47.7683 77.5,44.5 Z M 57.5,47.5 C 59.7505,47.1814 61.7505,47.6814 63.5,49C 57.6667,54.1667 51.8333,59.3333 46,64.5C 44.7705,63.7248 44.4372,62.7248 45,61.5C 49.0035,56.6646 53.1702,51.9979 57.5,47.5 Z M 54.5,63.5 C 55.9221,63.7496 56.9221,64.583 57.5,66C 52.9394,69.2715 51.9394,68.4381 54.5,63.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 21.5,43.5 C 30.8571,43.1684 40.1904,43.5017 49.5,44.5C 49.0233,45.4776 48.3567,46.3109 47.5,47C 38.8397,47.4998 30.1731,47.6664 21.5,47.5C 21.5,46.1667 21.5,44.8333 21.5,43.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 21.5,55.5 C 27.5092,55.3338 33.5092,55.5005 39.5,56C 38.6433,56.6891 37.9767,57.5224 37.5,58.5C 32.2079,59.4948 26.8746,59.8282 21.5,59.5C 21.5,58.1667 21.5,56.8333 21.5,55.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 21.5,67.5 C 27.1667,67.5 32.8333,67.5 38.5,67.5C 38.5,68.8333 38.5,70.1667 38.5,71.5C 32.8333,71.5 27.1667,71.5 21.5,71.5C 21.5,70.1667 21.5,68.8333 21.5,67.5 Z"
                          />
                        </g>
                      </svg>
                      <h4>Prevent Documentation errors</h4>
                      <p>
                        We help reduce documentation and labeling mistakes that
                        can delay imports and increase compliance risk.
                      </p>
                    </div>
                    <div className="ApplicationCarouselSlideBox">
                      <svg
                        id="imgsvg"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100px"
                        height="100px"
                        style={{
                          shapeRendering: "geometricPrecision",
                          textRendering: "geometricPrecision",
                          imageRendering: "optimizeQuality",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                        }}
                      >
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 41.5,3.5 C 61.6385,1.17511 75.8052,9.17511 84,27.5C 89.2846,49.3609 81.7846,64.8609 61.5,74C 39.6391,79.2846 24.1391,71.7846 15,51.5C 10.0502,27.671 18.8835,11.671 41.5,3.5 Z M 64.5,24.5 C 62.2999,28.88 59.4665,32.88 56,36.5C 55.7804,40.9496 53.6138,43.9496 49.5,45.5C 44.6961,43.896 43.1961,40.896 45,36.5C 51.7304,32.8843 58.2304,28.8843 64.5,24.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 93.5,99.5 C 64.1667,99.5 34.8333,99.5 5.5,99.5C 5.5,94.1667 5.5,88.8333 5.5,83.5C 18.1667,83.5 30.8333,83.5 43.5,83.5C 43.5,81.8333 43.5,80.1667 43.5,78.5C 47.5,79.8333 51.5,79.8333 55.5,78.5C 55.5,80.1667 55.5,81.8333 55.5,83.5C 68.1667,83.5 80.8333,83.5 93.5,83.5C 93.5,88.8333 93.5,94.1667 93.5,99.5 Z"
                          />
                        </g>
                      </svg>
                      <h4>Reduce Stock-out pressure</h4>
                      <p>
                        We support more reliable replenishment planning to help
                        vendors avoid delays, shortages, and lost sales.
                      </p>
                    </div>
                    <div className="ApplicationCarouselSlideBox">
                      <svg
                        id="imgsvg"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100px"
                        height="100px"
                        style={{
                          shapeRendering: "geometricPrecision",
                          textRendering: "geometricPrecision",
                          imageRendering: "optimizeQuality",
                          fillRule: "evenodd",
                          clipRule: "evenodd",
                        }}
                      >
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 13.5,13.5 C 32.9261,13.0249 52.2594,13.5249 71.5,15C 79.3886,22.8888 86.5553,31.3888 93,40.5C 93.9487,50.5998 93.6154,60.5998 92,70.5C 90.0656,73.688 87.2323,75.188 83.5,75C 79.6051,85.1199 72.9384,87.6199 63.5,82.5C 61.4224,80.6096 60.0891,78.2762 59.5,75.5C 52.8582,74.3358 46.1915,74.1691 39.5,75C 38.4214,75.956 37.2547,76.7894 36,77.5C 33.7382,74.1904 31.0715,71.1904 28,68.5C 23.0088,69.9635 21.8421,72.7968 24.5,77C 26.5,77.8333 28.5,78.6667 30.5,79.5C 32.131,83.0491 30.9643,85.0491 27,85.5C 20.9354,84.4351 17.1021,80.9351 15.5,75C 11.3689,75.0386 8.36885,73.2052 6.5,69.5C 0.932539,69.4492 -0.734128,66.9492 1.5,62C 4.5,61.3333 7.5,61.3333 10.5,62C 13.3607,68.9537 17.0273,69.287 21.5,63C 27.9127,60.2868 33.246,61.6201 37.5,67C 45.5,67.6667 53.5,67.6667 61.5,67C 63.4569,63.3171 66.2902,62.1505 70,63.5C 70.1667,64.3333 70.3333,65.1667 70.5,66C 69.3927,68.6108 68.0593,71.1108 66.5,73.5C 69.779,80.1304 73.1124,80.1304 76.5,73.5C 75.276,71.1608 75.276,68.8275 76.5,66.5C 79.6296,66.7592 82.7962,66.7592 86,66.5C 86.6667,58.5 86.6667,50.5 86,42.5C 80.2074,35.0386 74.0407,27.8719 67.5,21C 49.1667,20.6667 30.8333,20.3333 12.5,20C 11.1443,17.5859 11.4776,15.4193 13.5,13.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 60.5,24.5 C 62.4672,24.2606 64.3005,24.5939 66,25.5C 66.4993,30.4889 66.6659,35.4889 66.5,40.5C 71.1785,40.3342 75.8452,40.5008 80.5,41C 82.6983,42.67 83.0317,44.67 81.5,47C 61.6498,51.6477 54.6498,44.1477 60.5,24.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 5.5,28.5 C 10.5111,28.3341 15.5111,28.5007 20.5,29C 21.4231,31.0408 21.7564,33.2075 21.5,35.5C 15.8333,35.5 10.1667,35.5 4.5,35.5C 4.29803,33.0504 4.63137,30.717 5.5,28.5 Z"
                          />
                        </g>
                        <g>
                          <path
                            style={{ opacity: 1 }}
                            d="M 1.5,45.5 C 5.84611,45.3343 10.1794,45.501 14.5,46C 15.5762,47.7261 15.7429,49.5594 15,51.5C 10.5868,52.6324 6.08684,52.7991 1.5,52C 0.232038,49.8368 0.232038,47.6702 1.5,45.5 Z"
                          />
                        </g>
                      </svg>
                      <h4>Remove Delivery uncertainty</h4>
                      <p>
                        We coordinate final handoff and delivery support to
                        improve consistency, visibility, and operational
                        confidence.
                      </p>
                    </div>
                    
                    <div className="ApplicationCarouselSlideBoxImage">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761835851/QuinnDaisies/165478_jbtjkf.jpg"
                        alt="Quinn Daisies"
                      />
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
                  Expanding beyond your current market or Planning your next
                  stage of growth?
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    100% <span>logistics coordination</span>
                  </h2>
                  <p>
                    Quinndaisies helps simplify the move with structured
                    coordination, cross-border support, and a reliable framework
                    for market expansion.
                  </p>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1775773762/QuinnDaisies/Increase_z414ux.png"
                    alt="Quinn Daisies"
                  />
                </div>
                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444163/2151541896_jeb7fg.jpg"
                    alt="Quinn Daisies Image"
                  />
                </div>
                <div className="SectionBoxSmall reveal__top">
                  <p>
                    Quinn Daisies supports growing businesses with the
                    coordination, market-entry logistics, and operational
                    structure needed to move into the U.S. with greater clarity
                    and control.
                  </p>
                  <Link className="ApplicationButton" to="/">
                    Learn More Here
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
                    Need Deep Technical Expertise Supporting Modern Systems
                  </h2>
                  <p className="ApplicationText">
                    Turn your professional, technical and strategic difficulties
                    into a competitive advantage with our expert solutions.
                  </p>
                  <Link className="ApplicationButton" to="/">
                    Learn More Here
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
