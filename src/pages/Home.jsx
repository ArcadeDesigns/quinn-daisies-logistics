import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Box from "./components/Home/Box";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Slide from "./components/Home/Slide";
import Advert from "./components/Home/Advert";
import Banner from "./components/Home/Banner";
import Carousel from "./components/Home/Carousel";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";
import { industrySlides } from "../data/industrySlides";

const bgImages = [
  "https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542859/Quinn%20Daisies%20Logistics/technological-futuristic-holograms-logistics-means-transport_itrxu8.jpg",
  "https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542805/Quinn%20Daisies%20Logistics/logistics-means-transport-together-with-technological-futuristic-holograms_2_lb4ten.jpg",
  "https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1730132938/Quinn%20Daisies%20Logistics/transport-logistics-concept_2_thjbc1.jpg",
];

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useSmoothScroll();
  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const containerRef = useRef(null);
  const imagePinRef = useRef(null);
  const pageRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  // ✅ Apply animation
  usePinnedSlides(imagePinRef);

  // Smooth scroll should be created before the other ScrollTriggers.
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
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__top", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__left", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__right", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__top__interval", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__left__interval", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__bottom__interval", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__right__interval", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });
  }, []);

  const solutions = [
    {
      icon: "inventory",
      title: "Restock with less friction",
      text: "We help vendors reduce the operational burden of sourcing, coordinating, and receiving imported food shipments.",
      link: "/home",
    },
    {
      icon: "trending_up",
      title: "Improve compliance readiness",
      text: "Products and documentation are reviewed before export so issues can be addressed earlier, not after arrival.",
      link: "/home",
    },
    {
      icon: "delivery_truck_speed",
      title: "Get better shipment visibility",
      text: "Our workflow is designed around tracking milestones, exception handling, and proactive communication.",
      link: "/home",
    },
    {
      icon: "all_match",
      title: "Operate with more confidence",
      text: "With executive presence in the United States and operational coordination in Nigeria, we provide a stronger foundation for trust-sensitive vendor relationships.",
      link: "/home",
    },
  ];

  // ApplicationBox stagger animation
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

  // Horizontal carousel animation
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

  return (
    <>
      <Helmet>
        <title>
          Quinn Daisies Logistics | Professional Logistics & Shipping Solutions
        </title>
        <meta
          name="description"
          content="Quinn Daisies Logistics provides professional shipping, packaging, and international logistics solutions. Expert consultation and customs clearance services available."
        />
        <link rel="canonical" href="https://www.logistics.quinndaisies.com" />
        <link
          rel="og:canonical"
          href="https://www.logistics.quinndaisies.com"
        />

        <meta
          property="og:title"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          property="og:description"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          property="og:url"
          content="https://www.logistics.quinndaisies.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          name="twitter:description"
          content="Quinn Daisies Logistics provides professional shipping, packaging, and international logistics solutions. Expert consultation and customs clearance services available."
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />

        <meta
          name="keywords"
          content="Expert logistics solutions including international shipping, packaging services, customs clearance, and importation services across 150+ countries."
        />
        <meta
          name="og:keywords"
          content="Expert logistics solutions including international shipping, packaging services, customs clearance, and importation services across 150+ countries."
        />

        <meta name="author" content="Ebire Folayemi Michael" />
        <meta name="revised" content="12th of April 2025" />
      </Helmet>

      <div ref={pageRef}>
        <Navbar />

        <div id="smooth-wrapper" ref={smoothWrapperRef}>
          <div id="smooth-content" ref={smoothContentRef}>
            <section className="OpportunityAppCtn">
              <div className="OpportunityAppHeader">
                <div className="ContentCtn-Center">
                  <span className="ContentCtn-Center-Span reveal__top">
                    Reliable Logistics Solutions Tailored for You
                  </span>
                  <h1 className="reveal__left">
                    Discover How We Can Support Your Shipping Needs
                  </h1>
                  <p className="reveal__right">
                    We are dedicated to providing exceptional logistics services
                    that emphasize safety, efficiency, and timely delivery. Our
                    goal is to simplify your shipping experience—locally and
                    globally—through innovative, customer-focused solutions.
                  </p>
                </div>

                <div className="SingleBtnCtn-Center reveal__bottom">
                  <Link className="ApplicationButton" to="/get-a-quote">
                    Request a Personalized Quote
                    <span class="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>

              {bgImages.length > 0 && (
                <div className="BackgroundImage">
                  {bgImages.map((img, index) => (
                    <img
                      className="reveal__bottom__interval"
                      key={index}
                      src={img}
                      alt={`Background ${index + 1}`}
                    />
                  ))}
                </div>
              )}
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
                    <span class="BoxIcon material-symbols-outlined">
                      {item.icon}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    <Link className="ApplicationButton" to={item.link}>
                      Learn More Here
                      <span class="material-symbols-outlined">
                        globe_location_pin
                      </span>
                    </Link>
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

                          <Link className="ApplicationButton" to={item.link}>
                            Learn More Here
                            <span class="material-symbols-outlined">
                              globe_location_pin
                            </span>
                          </Link>
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
                      <h4>Fragmented supplier coordination</h4>
                      <p>
                        We streamline sourcing, shipping, and delivery
                        coordination to reduce delays and improve operational
                        clarity.
                      </p>
                    </div>

                    <div className="ApplicationCarouselSlideBoxImage">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761835851/QuinnDaisies/165478_jbtjkf.jpg"
                        alt="Quinn Daisies"
                      />
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <h4>Poor landed-cost visibility</h4>
                      <p>
                        We improve cost visibility across sourcing, freight, and
                        delivery to support better planning and decision-making.
                      </p>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <h4>Documentation errors</h4>
                      <p>
                        We help reduce documentation and labeling mistakes that
                        can delay imports and increase compliance risk.
                      </p>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <h4>Stock-out pressure</h4>
                      <p>
                        We support more reliable replenishment planning to help
                        vendors avoid delays, shortages, and lost sales.
                      </p>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <h4>Delivery uncertainty</h4>
                      <p>
                        We coordinate final handoff and delivery support to
                        improve consistency, visibility, and operational
                        confidence.
                      </p>
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
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1761822587/QuinnDaisies/10382_ixmdn7.jpg"
                    alt="Quinn Daisies"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    Quinndaisies supports growing businesses with the
                    coordination, market-entry logistics, and operational
                    structure needed to move into the U.S. with greater clarity
                    and control.
                  </p>

                  <Link className="ApplicationButton" to="/">
                    Learn More Here
                    <span class="material-symbols-outlined">
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
                    <span class="material-symbols-outlined">
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
