import gsap from "gsap";
import { Flip } from "gsap/all";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import DHL from "../../src/assets/DHL.png";
import UPS from "../../src/assets/UPS.png";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SplitText } from "gsap/SplitText";
import Hero from "./components/Service/Hero";
import FedEx from "../../src/assets/FedEx.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { useEffect, useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip);

const industries = [
  {
    title: "Freight & Cargo Shipping",
    description:
      "We move your cargo — large or small — with precision and speed. Our freight network covers road, air, and ocean routes, fully managed from pickup to final delivery with real-time tracking at every step.",
    link: "/technology",
    icon: "local_shipping",
  },
  {
    title: "Last-Mile Delivery",
    description:
      "The final leg of delivery is where customer experience is defined. Our last-mile network guarantees fast, accurate, and professional delivery to residential and commercial endpoints — every time.",
    link: "/logistics",
    icon: "pallet",
  },
  {
    title: "Supply Chain Management",
    description:
      "We take a holistic view of your supply chain — identifying gaps, reducing costs, and building resilience. From supplier coordination to demand forecasting, we keep your operations running smoothly end to end.",
    link: "/consulting-services",
    icon: "dashboard_customize",
  },
  {
    title: "Customs & Brokerage",
    description:
      "Crossing borders requires expertise. Our customs brokerage team handles all import and export documentation, regulatory compliance, and duty optimization — so your goods clear customs without delays or surprises.",
    link: "/government-contracting",
    icon: "delivery_truck_bolt",
  },
];

const heroSlides = [
  {
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
    heading: "Growth, Performance, and Long-Term Value",
    text: "Quinn Daisies offers tailored logistics solutions designed to streamline operations and enhance efficiency for businesses across diverse industries. Our team specializes in providing seamless, end-to-end logistics management that prioritizes reliability, speed, and cost-effectiveness.",
  },
  {
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
    heading: "Precision Freight. Seamless Delivery.",
    text: "From road and air to ocean freight, our logistics network moves your cargo on time — with real-time tracking and full transparency at every stage of the journey. We leave nothing to chance.",
  },
  {
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg",
    heading: "Trusted Across Borders, Built for Scale",
    text: "Whether crossing one border or fifty, Quinn Daisies handles customs documentation, regulatory compliance, and end-to-end coordination — so your business moves without friction, delays, or surprises.",
  },
];

export default function Services() {
  useSmoothScroll();
  const pageRef = useRef(null);
  const galleryWrapRef = useRef(null);
  const galleryCleanupRef = useRef(null);
  const serviceGalleryEight = useRef(null);

  const heroImagesRef = useRef([]);
  const heroHeadingRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroDotsRef = useRef([]);
  const heroCurrentRef = useRef(0);
  const heroIntervalRef = useRef(null);

  useEffect(() => {
    const images = heroImagesRef.current;
    const total = heroSlides.length;

    // Set initial state — only first slide visible
    gsap.set(images, { opacity: 0, zIndex: 0, scale: 1.08 });
    gsap.set(images[0], { opacity: 1, zIndex: 1 });
    gsap.to(images[0], { scale: 1, duration: 6, ease: "power1.out" });

    const updateDots = (index) => {
      heroDotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        gsap.to(dot, {
          width: i === index ? 28 : 8,
          opacity: i === index ? 1 : 0.4,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    };

    const goToSlide = (next) => {
      const prev = heroCurrentRef.current;
      if (next === prev) return;
      heroCurrentRef.current = next;

      // Crossfade images with subtle ken burns
      gsap.to(images[prev], {
        opacity: 0,
        zIndex: 0,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.set(images[next], { zIndex: 1, scale: 1.08 });
      gsap.to(images[next], {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });
      gsap.to(images[next], {
        scale: 1,
        duration: 6,
        ease: "power1.out",
      });

      // Animate text out, swap content, animate back in
      const heading = heroHeadingRef.current;
      const text = heroTextRef.current;

      gsap.to([heading, text], {
        yPercent: -15,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          heading.textContent = heroSlides[next].heading;
          text.textContent = heroSlides[next].text;
          gsap.fromTo(
            heading,
            { yPercent: 20, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
          );
          gsap.fromTo(
            text,
            { yPercent: 20, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.55,
              delay: 0.1,
              ease: "power3.out",
            },
          );
        },
      });

      updateDots(next);
    };

    updateDots(0);

    const startInterval = () => {
      heroIntervalRef.current = setInterval(() => {
        const next = (heroCurrentRef.current + 1) % total;
        goToSlide(next);
      }, 5500);
    };

    startInterval();

    return () => {
      clearInterval(heroIntervalRef.current);
    };
  }, []);

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
            // markers: true,
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
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <section className="HeroContainer">
              {heroSlides.map((slide, i) => (
                <img
                className="HeroImageSlides"
                  key={i}
                  ref={(el) => (heroImagesRef.current[i] = el)}
                  src={slide.image}
                  alt={`Quinn Daisies slide ${i + 1}`}
                />
              ))}

              <div className="HeroOverlay OverwriteHeroOverlayFlex">
                <div className="ServiceHeroContent">
                  <h1 ref={heroHeadingRef}>{heroSlides[0].heading}</h1>

                  <p ref={heroTextRef} className="ServiceHeroContentText">
                    {heroSlides[0].text}
                  </p>

                  {/* Dot navigation */}
                  <div className="HeroSliderDots">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        ref={(el) => (heroDotsRef.current[i] = el)}
                        className="HeroSliderDot"
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => {
                          clearInterval(heroIntervalRef.current);
                          const prev = heroCurrentRef.current;
                          if (i !== prev) {
                            heroCurrentRef.current = prev; // reset so goToSlide works
                            // re-trigger via ref approach
                            const images = heroImagesRef.current;
                            const total = heroSlides.length;

                            gsap.to(images[prev], {
                              opacity: 0,
                              zIndex: 0,
                              duration: 1,
                              ease: "power2.inOut",
                            });
                            gsap.set(images[i], { zIndex: 1, scale: 1.08 });
                            gsap.to(images[i], {
                              opacity: 1,
                              duration: 1,
                              ease: "power2.inOut",
                            });
                            gsap.to(images[i], {
                              scale: 1,
                              duration: 6,
                              ease: "power1.out",
                            });

                            const heading = heroHeadingRef.current;
                            const text = heroTextRef.current;
                            gsap.to([heading, text], {
                              yPercent: -15,
                              opacity: 0,
                              duration: 0.35,
                              ease: "power2.in",
                              onComplete: () => {
                                heading.textContent = heroSlides[i].heading;
                                text.textContent = heroSlides[i].text;
                                gsap.fromTo(
                                  heading,
                                  { yPercent: 20, opacity: 0 },
                                  {
                                    yPercent: 0,
                                    opacity: 1,
                                    duration: 0.55,
                                    ease: "power3.out",
                                  },
                                );
                                gsap.fromTo(
                                  text,
                                  { yPercent: 20, opacity: 0 },
                                  {
                                    yPercent: 0,
                                    opacity: 1,
                                    duration: 0.55,
                                    delay: 0.1,
                                    ease: "power3.out",
                                  },
                                );
                              },
                            });

                            heroCurrentRef.current = i;
                            heroDotsRef.current.forEach((dot, idx) => {
                              if (!dot) return;
                              gsap.to(dot, {
                                width: idx === i ? 28 : 8,
                                opacity: idx === i ? 1 : 0.4,
                                duration: 0.4,
                                ease: "power2.out",
                              });
                            });

                            heroIntervalRef.current = setInterval(() => {
                              const next = (heroCurrentRef.current + 1) % total;
                              const p = heroCurrentRef.current;
                              heroCurrentRef.current = next;
                              gsap.to(images[p], {
                                opacity: 0,
                                zIndex: 0,
                                duration: 1,
                                ease: "power2.inOut",
                              });
                              gsap.set(images[next], {
                                zIndex: 1,
                                scale: 1.08,
                              });
                              gsap.to(images[next], {
                                opacity: 1,
                                duration: 1,
                                ease: "power2.inOut",
                              });
                              gsap.to(images[next], {
                                scale: 1,
                                duration: 6,
                                ease: "power1.out",
                              });
                              const h = heroHeadingRef.current;
                              const t = heroTextRef.current;
                              gsap.to([h, t], {
                                yPercent: -15,
                                opacity: 0,
                                duration: 0.35,
                                ease: "power2.in",
                                onComplete: () => {
                                  h.textContent = heroSlides[next].heading;
                                  t.textContent = heroSlides[next].text;
                                  gsap.fromTo(
                                    h,
                                    { yPercent: 20, opacity: 0 },
                                    {
                                      yPercent: 0,
                                      opacity: 1,
                                      duration: 0.55,
                                      ease: "power3.out",
                                    },
                                  );
                                  gsap.fromTo(
                                    t,
                                    { yPercent: 20, opacity: 0 },
                                    {
                                      yPercent: 0,
                                      opacity: 1,
                                      duration: 0.55,
                                      delay: 0.1,
                                      ease: "power3.out",
                                    },
                                  );
                                },
                              });
                              heroDotsRef.current.forEach((dot, idx) => {
                                if (!dot) return;
                                gsap.to(dot, {
                                  width: idx === next ? 28 : 8,
                                  opacity: idx === next ? 1 : 0.4,
                                  duration: 0.4,
                                });
                              });
                            }, 5500);
                          }
                        }}
                      />
                    ))}
                  </div>

                  <Link className="ApplicationButton reveal__bottom" to="/quinn-daisies/resources">
                    Learn More Here
                    <span className="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>

                <div className="PartnerBoxContainer">
                  <div className="PartnerBox reveal__bottom__interval">
                    <img src={DHL} alt="DHL" />
                    <p>DHL</p>
                  </div>
                  <div className="PartnerBox reveal__bottom__interval">
                    <img src={UPS} alt="UPS" />
                    <p>UPS</p>
                  </div>
                  <div className="PartnerBox reveal__bottom__interval">
                    <img src={FedEx} alt="FedEx" />
                    <p>FedEx</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="SectionContainer ServiceContainer">
              <h2 className="ServiceText">
                At Quinn Daisies, we provide a comprehensive range of
                professional services designed to help organizations solve
                complex challenges, strengthen operations, and achieve
                sustainable success. From technology and logistics to
                consulting, workforce solutions, business development, and
                digital innovation, our services are tailored to deliver
                measurable value and long-term impact.
              </h2>
            </section>

            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Why Organizations Partner With Quinn Daisies.
              </span>
              <h4 className="reveal__right">
                We don't just move cargo — we build logistics systems that keep
                your business competitive. Every partnership is shaped around
                your shipment volumes, routes, timelines, and operational
                realities.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>On-Time Delivery Rate</h6>
                    <p>
                      We've built our entire operation around one promise — your
                      cargo arrives when it's supposed to. From route planning
                      to real-time dispatch management, we leave nothing to
                      chance.
                    </p>
                  </div>
                  <h3>
                    99<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Tailored Logistics Planning</h6>
                    <p>
                      No two supply chains are the same. We design freight,
                      warehousing, and delivery solutions specifically around
                      your cargo types, volumes, destinations, and business
                      cycles.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Cargo Safety & Compliance</h6>
                    <p>
                      Your goods are handled with the highest care at every
                      stage. We enforce strict safety protocols, regulatory
                      compliance, and customs adherence — so you never face
                      delays or liability issues at the border.
                    </p>
                  </div>
                  <h3>
                    24/<text>7</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Scalable Freight Capacity</h6>
                    <p>
                      Whether you're shipping five pallets or five hundred, our
                      infrastructure scales with you. As your business grows,
                      our logistics network expands to match — with no gaps in
                      service quality or delivery speed.
                    </p>
                  </div>
                  <h3>
                    50<text>X</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                At Quinn Daisies, we combine logistics expertise, freight
                technology, and operational discipline to deliver supply chain
                solutions that address both your immediate shipping needs and
                your long-term growth ambitions. Our work is guided by
                accountability, transparency, and an unwavering commitment to
                keeping your cargo — and your business — moving forward.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                We do not treat logistics as a one-size-fits-all operation.
                Every engagement is engineered around the specific freight
                volumes, routes, timelines, and compliance requirements of each
                client — ensuring our solutions remain reliable, scalable, and
                built to last.
              </p>
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
                  <h3 className="reveal__left">Our Logistics Approach</h3>
                  <p className="ServiceListText reveal__right">
                    At Quinn Daises LLC, we take a structured, client-first
                    approach to logistics — combining industry expertise,
                    advanced systems, and a dedicated team to ensure your goods
                    move efficiently, safely, and on schedule from origin to
                    destination.
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

            <section className="ServicePosition Container Gap-XL">
              <div className="ServiceApproach">
                <div className="ServiceApproachHeader">
                  <span className="reveal__top">
                    How we Approach Every Project
                  </span>
                  <h2 className="reveal__bottom">
                    Strategic Approach Built on Precision, Partnership, and
                    Results
                  </h2>
                </div>
                <p className="reveal__left">
                  We combine strategic insight, technical expertise, and
                  disciplined execution to deliver solutions that are practical,
                  scalable, and aligned with long-term success.
                </p>
              </div>

              <div className="ServiceApproachContainer">
                <div className="ServiceApproachContainerContent reveal__left">
                  <img
                    src="Our Approach to Delivering Meaningful Business Results
https://res.cloudinary.com/renaissance-images/image/upload/v1778362094/QuinnDaisies/2151541927_afrcah.jpg"
                    alt="Quinn Daisies Image"
                  />
                  <div className="ServiceApproachContainerContentOverlay">
                    <div className="hr"></div>
                    <h3>
                      Our Approach to Delivering Meaningful Business Results
                    </h3>
                    <p>
                      We do not believe in one-size-fits-all solutions. Every
                      engagement is guided by a tailored process that emphasizes
                      collaboration, responsiveness, and performance. By
                      aligning our services with the specific needs of each
                      organization, we help clients improve efficiency,
                      strengthen capabilities, and create lasting business
                      value.
                    </p>
                  </div>
                </div>

                <div className="ServiceApproachContainerContentRight reveal__right">
                  <div className="hr"></div>
                  <h5>Tailored Service Strategies for Sustainable Growth</h5>
                  <p>
                    From initial consultation to implementation and ongoing
                    support, we work as a trusted partner committed to quality,
                    accountability, and measurable outcomes.
                  </p>
                </div>
              </div>
            </section>

            <section className="serviceBanner">
              <div className="serviceBannerSection">
                <span className="spanText reveal__top">
                  Importers, exporters, and businesses engaged in cross-border
                  trade.
                </span>
                <h2 className="reveal__bottom">
                  Not Sure Which Service You Need?
                </h2>
                <p className="paragraphText reveal__left">
                  Our logistics consultants are happy to assess your needs and
                  recommend the right solution. Contact us for a free
                  consultation.
                </p>

                <a
                  className="linkText reveal__bottom"
                  href="mailto:info@quinndaisies.com"
                >
                  Send an Email?
                </a>

                <Link to="/home" className="ApplicationButton reveal__bottom">
                  <p>Request a free Consultation</p>
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </Link>
              </div>

              <div className="serviceBannerSectionImages">
                <div className="serviceBannerSectionImagesBox">
                  <div className="serviceBannerSectionImagesBoxContent">
                    <h5>100%</h5>
                    <p>
                      Growing businesses, enterprises, and any organization
                      looking to scale operations efficiently.
                    </p>
                  </div>
                  <span class="material-symbols-outlined">graph_6</span>
                </div>

                <img
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1761784412/QuinnDaisies/2_piuplt.jpg"
                  alt="Quinn Daisies Images"
                />

                <div className="serviceBannerSectionImagesBox">
                  <div className="serviceBannerSectionImagesBoxContentRight">
                    <span class="material-symbols-outlined">bar_chart</span>
                    <h5>
                      International trade brings opportunity — and complexity.
                    </h5>
                  </div>
                  <p className="contentRight">
                    Our customs brokerage team cuts through the red tape so your
                    goods clear borders without delay.
                  </p>
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
