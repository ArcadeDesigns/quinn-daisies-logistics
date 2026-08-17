import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ScrollReveal from "scrollreveal";
import gsap from "gsap";
import { Flip } from "gsap/all";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import useSmoothScroll from "../hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const industries = [
  {
    title: "International Seller Onboarding",
    description:
      "International organisations can register, list products, and access the US market through a structured onboarding and verification process.",
    icon: "how_to_reg",
    spans: ["Global Marketplace", "International Sellers"],
  },
  {
    title: "Cross-Border Trade Facilitation",
    description:
      "The platform manages the commercial and logistical complexity of cross-border transactions — from payment processing to freight coordination.",
    icon: "currency_exchange",
    spans: ["Cross-Border Commerce", "Trade Facilitation"],
  },
  {
    title: "US Market Entry Support",
    description:
      "Organisations seeking to establish operations in the United States receive structured market access guidance and logistics infrastructure support.",
    icon: "flag",
    spans: ["US Market Entry"],
  },
  {
    title: "Compliance & Trade Documentation",
    description:
      "All cross-border transactions are supported by Quinn Daisies' customs and compliance expertise, ensuring regulatory adherence at every stage.",
    icon: "gavel",
    spans: ["Global Marketplace", "Trade Facilitation"],
  },
];

const faqs = [
  {
    question: "Why does Quinn Daisies invest in logistics technology?",
    answer:
      "At Quinn Daisies LLC, we recognise that the future of logistics is inseparable from the future of technology. Businesses operating in today's global trade environment require more than a freight carrier — they require a logistics partner with the digital infrastructure to match the pace, complexity, and scale of modern commerce.",
  },
  {
    question:
      "What drives the development of Quinn Daisies' proprietary platforms?",
    answer:
      "Our investment in proprietary technology platforms is a direct reflection of our commitment to delivering logistics solutions that are not only operationally excellent, but technologically advanced. By developing platforms that put inventory control, freight management, and market access directly in the hands of our clients, we are fundamentally changing the relationship between a logistics company and the businesses it serves.",
  },
  {
    question: "How are Quinn Daisies' platforms shaped around client needs?",
    answer:
      "Every platform we develop is informed by the real operational challenges faced by our clients — the need for greater visibility, faster response times, reduced administrative burden, and seamless access to international markets. Our technology is not developed in isolation; it is built in direct response to the needs of the businesses we serve and the markets we operate in.",
  },
  {
    question:
      "Will Quinn Daisies continue to develop and expand its technology offering?",
    answer:
      "As our platforms launch and mature, Quinn Daisies LLC will continue to invest in the development, refinement, and expansion of our technology ecosystem — ensuring that our clients always have access to the most advanced, most capable logistics technology available in the market.",
  },
  {
    question: "How secure are Quinn Daisies' digital platforms?",
    answer:
      "All Quinn Daisies platforms are built on secure, enterprise-grade infrastructure — ensuring that client data, inventory records, and transaction information are protected at all times.",
  },
  {
    question:
      "What support is available after onboarding to a Quinn Daisies platform?",
    answer:
      "Every client onboarded to a Quinn Daisies platform receives dedicated technical and operational support — ensuring smooth implementation and uninterrupted platform access at every stage of the engagement.",
  },
  {
    question: "Can Quinn Daisies' platforms scale as my business grows?",
    answer:
      "Our platforms are designed to scale with your business — accommodating increasing inventory volumes, transaction frequency, and operational complexity as your organisation grows, without any compromise to performance or reliability.",
  },
];

export default function Resources() {
  useSmoothScroll();
  const galleryWrapRef = useRef(null);
  const galleryCleanupRef = useRef(null);
  const serviceGalleryEight = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

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
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".ResourcesSectionAccordions",
        pin: true,
        start: "top top",
        end: "+=200%",
        scrub: 1,
      },
    });

    tl.to(".ResourcesSectionAccordion p", {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
      ease: "power1.inOut",
    });

    tl.to(
      ".ResourcesSectionAccordion",
      {
        marginBottom: -60,
        stagger: 0.5,
        ease: "power1.inOut",
      },
      "<",
    );

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

    return () => {
      tl.kill();

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (smoother) {
        smoother.kill();
      }
    };
  }, []);

  return (
    <>
      <SEO 
        title="Quinn Daisies Logistics | Resources" 
        description="Comprehensive, End-to-End Logistics Solutions for Global Commerce. Connecting businesses to markets across every major region of the world with precision." 
        url="https://www.logistics.quinndaisies.com/quinn-daisies/resources" 
      />

      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="ResourcesHeaderContainer">
            <img
              src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg"
              alt="Quinn Daisies Logistics"
            />
            <div className="ResourcesHeaderContainerContent">
              <h1 className="reveal__left">
                Comprehensive, End-to-End Logistics Solutions for Global
                Commerce
              </h1>
              <p className="reveal__right">
                Connecting businesses to markets across every major region of
                the world with precision
              </p>
            </div>
          </section>

          <section className="ResourcesImageSection">
            <h2 className="reveal__left">Our Technology Ecosystem</h2>
            <img
              className="reveal__bottom"
              src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541940_tnhpha.jpg"
              alt="Quinn Daisies LLC Image"
            />
            <p className="reveal__right">
              Recognizing that modern logistics demands more than physical
              freight capability, Quinn Daisies LLC has invested in the
              development of a comprehensive technology ecosystem that places
              operational control directly in the hands of our clients. From
              inventory management to cross-border commerce facilitation, our
              platforms are designed to reduce friction, increase visibility,
              and enable businesses to operate with greater efficiency and
              confidence across every stage of the supply chain.
            </p>
            <p className="reveal__left">
              Our technology suite comprises three integrated solutions — one
              fully operational and available to clients today, and two
              extensively researched, requirement-validated platforms positioned
              for imminent launch. Together, they represent Quinn Daisies LLC's
              commitment to delivering not just logistics services, but a
              complete, technology-driven logistics experience.
            </p>
          </section>

          <section id="ResourcesSectionWrapper">
            <div id="ResourcesSectionContent">
              <div className="ResourcesSectionSpacerTop"></div>
              <div className="ResourcesSectionHeader">
                <div className="ResourcesSectionHeaderContent">
                  <span className="reveal__top">Live & Operational</span>
                  <h2 className="reveal__bottom">
                    One Platform. Total Logistics Control.
                  </h2>
                </div>
                <p className="reveal__right">
                  The Quinn Daisies Logistics Management Platform consolidates
                  every aspect of your freight operation into a single,
                  intelligent system — giving your organization the visibility,
                  control, and operational agility to manage logistics with
                  confidence at every stage.
                </p>
              </div>

              <div className="ResourcesSectionHeaderExtra">
                <p className="reveal__bottom__interval">
                  The Quinn Daisies Logistics Management Platform is our
                  flagship digital solution — a fully operational, web-based
                  system that gives businesses direct access to a comprehensive
                  suite of inventory management, order processing, and shipment
                  coordination tools. Designed for organizations that require
                  real-time control over their logistics operations, the
                  platform eliminates the inefficiencies of manual freight
                  coordination and provides a single, centralized environment in
                  which all logistics activities are managed, tracked, and
                  reported.
                </p>
                <p className="reveal__bottom__interval">
                  Through the platform, clients are able to onboard their
                  inventory, configure shipment parameters, and establish
                  freight preferences in advance — ensuring that when a shipment
                  is required, all necessary preparations have already been
                  completed and the cargo is effectively ready to ship. This
                  pre-configuration capability dramatically reduces lead times
                  and enables businesses to respond to demand with speed and
                  operational precision.
                </p>
                <p className="reveal__bottom__interval">
                  The platform further enables clients to submit freight
                  requests, monitor order status in real time, manage
                  documentation, and access a complete historical record of all
                  logistics activity — providing the visibility and
                  accountability that modern supply chain management demands.
                </p>
              </div>

              <div className="ResourcesSectionAccordions">
                <div className="ResourcesSectionAccordion">
                  <span className="material-symbols-outlined">inventory_2</span>
                  <h3>Inventory Management</h3>
                  <p>
                    Onboard, organise, and monitor your full inventory in real
                    time — with complete visibility across all stock levels,
                    product categories, and storage locations at every point in
                    the supply chain.
                  </p>
                  <div className="ResourceSectionSpanContainer">
                    <span>Web-Based Platform</span>
                    <span>Real-Time Sync</span>
                    <span>Multi-Location</span>
                  </div>
                </div>

                <div className="ResourcesSectionAccordion">
                  <span className="material-symbols-outlined">assignment</span>
                  <h3>Order & Shipment Requests</h3>
                  <p>
                    Submit freight requests, configure detailed shipment
                    specifications, and track every order from placement through
                    to confirmed delivery — all within a single, structured
                    workflow.
                  </p>
                  <div className="ResourceSectionSpanContainer">
                    <span>Order Management</span>
                    <span>Freight Coordination</span>
                    <span>Status Tracking</span>
                  </div>
                </div>

                <div className="ResourcesSectionAccordion">
                  <span className="material-symbols-outlined">
                    schedule_send
                  </span>
                  <h3>Pre-Configured Freight Readiness</h3>
                  <p>
                    Establish shipment parameters, carrier preferences, and
                    delivery requirements in advance — so your cargo is fully
                    prepared and operationally ready to dispatch the moment a
                    request is placed.
                  </p>
                  <div className="ResourceSectionSpanContainer">
                    <span>Advance Configuration</span>
                    <span>Reduced Lead Times</span>
                    <span>Dispatch Ready</span>
                  </div>
                </div>

                <div className="ResourcesSectionAccordion">
                  <span className="material-symbols-outlined">folder_open</span>
                  <h3>Documentation Management</h3>
                  <p>
                    Store, manage, and retrieve all shipping documentation,
                    customs declarations, compliance certificates, and freight
                    reports from one secure, centralised document repository.
                  </p>
                  <div className="ResourceSectionSpanContainer">
                    <span>Secure Storage</span>
                    <span>Compliance Records</span>
                    <span>Freight Reports</span>
                  </div>
                </div>

                <div className="ResourcesSectionAccordion">
                  <span className="material-symbols-outlined">radar</span>
                  <h3>Real-Time Shipment Tracking</h3>
                  <p>
                    Monitor the live status of all active shipments across every
                    freight leg — from origin pickup through international
                    transit to final delivery — with full operational
                    transparency at every stage.
                  </p>
                  <div className="ResourceSectionSpanContainer">
                    <span>Real-Time Tracking</span>
                    <span>Live Updates</span>
                    <span>End-to-End Visibility</span>
                  </div>
                </div>

                <div className="ResourcesSectionAccordion">
                  <span className="material-symbols-outlined">bar_chart</span>
                  <h3>Logistics Reporting & Analytics</h3>
                  <p>
                    Access a complete historical record of all logistics
                    activity — including shipment performance, delivery
                    timelines, and operational metrics — to inform business
                    decisions and supply chain improvements.
                  </p>
                  <div className="ResourceSectionSpanContainer">
                    <span>Performance Analytics</span>
                    <span>Activity History</span>
                    <span>Operational Metrics</span>
                  </div>
                </div>
              </div>
              <div className="ResourcesSectionSpacerBottom"></div>
            </div>
          </section>

          <section className="ResourcesBanner">
            <div className="ResourcesBannerContent">
              <div className="ResourcesBannerContentFlex">
                <span className="reveal__bottom">
                  Research Complete — Launching Soon
                </span>
                <h2 className="reveal__left">
                  Quinn Daisies Global Marketplace Platform
                </h2>
                <p className="reveal__right">
                  The Quinn Daisies Global Marketplace Platform is a
                  purpose-built digital commerce and business facilitation
                  ecosystem developed to serve international organisations
                  seeking to establish a commercial presence in the United
                  States and access new markets through Quinn Daisies' logistics
                  and trade network. The platform has been designed following
                  rigorous market research and detailed requirements
                  engineering, and is positioned for launch as a transformative
                  tool for cross-border commerce and business establishment.
                </p>
              </div>

              <div className="ResourcesBannerContentFlex">
                <p className="reveal__bottom">
                  The Global Marketplace Platform will provide international
                  businesses — particularly those based in Africa, Europe, the
                  Middle East, and Asia — with a structured, technology-enabled
                  pathway to enter the United States market. Through the
                  platform, organisations will be able to list and promote their
                  products, engage with US-based buyers and distributors, and
                  leverage Quinn Daisies' established freight infrastructure to
                  manage the physical movement of goods across borders.
                </p>
                <p className="reveal__bottom">
                  Beyond product commerce, the platform is designed to support
                  organisations at the broader level of international business
                  establishment — providing resources, logistics support, and
                  market access tools that facilitate the process of building a
                  commercially viable presence in the United States. This
                  positions Quinn Daisies LLC not only as a freight partner, but
                  as a strategic enabler of international business growth and
                  cross-border market entry.
                </p>

                <div className="ResourcesBannerContentFlexSpan">
                  <span className="reveal__bottom__interval">
                    Global Marketplace
                  </span>
                  <span className="reveal__bottom__interval">
                    US Market Entry
                  </span>
                  <span className="reveal__bottom__interval">
                    Cross-Border Commerce
                  </span>
                  <span className="reveal__bottom__interval">
                    International Sellers
                  </span>
                  <span className="reveal__bottom__interval">
                    Trade Facilitation
                  </span>
                </div>
              </div>
            </div>

            <div className="ResourcesBannerContentBox">
              <div className="ResourcesBannerContentBoxItem reveal__right__interval">
                <span className="material-symbols-outlined">local_mall</span>
                <h4>International Seller Onboarding</h4>
                <p>
                  International organisations can register, list products, and
                  access the US market through a structured onboarding and
                  verification process.
                </p>
              </div>
              <div className="ResourcesBannerContentBoxItem reveal__right__interval">
                <span className="material-symbols-outlined">autorenew</span>
                <h4>Cross-Border Trade Facilitation</h4>
                <p>
                  The platform manages the commercial and logistical complexity
                  of cross-border transactions — from payment processing to
                  freight coordination.
                </p>
              </div>
              <div className="ResourcesBannerContentBoxItem reveal__right__interval">
                <span className="material-symbols-outlined">flag</span>
                <h4>US Market Entry Support</h4>
                <p>
                  Organisations seeking to establish operations in the United
                  States receive structured market access guidance and logistics
                  infrastructure support.
                </p>
              </div>
              <div className="ResourcesBannerContentBoxItem reveal__right__interval">
                <span className="material-symbols-outlined">verified_user</span>
                <h4>Compliance & Trade Documentation</h4>
                <p>
                  All cross-border transactions are supported by Quinn Daisies'
                  customs and compliance expertise, ensuring regulatory
                  adherence at every stage.
                </p>
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
                <h3 className="reveal__left">
                  Quinn Daisies Global Marketplace Platform
                </h3>
                <p className="ServiceListText reveal__right">
                  The platform has been designed following rigorous market
                  research and detailed requirements engineering, and is
                  positioned for launch as a transformative tool for
                  cross-border commerce and business establishment.
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

                      <div className="ServiceListBoxContentSpan">
                        {industry.spans.map((span) => (
                          <span key={span}>{span}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="ResourcesFAQSection">
            <div className="ResourcesFAQLeft">
              <span>Technology & Platform</span>
              <h2>Frequently Asked Questions</h2>
              <p>
                Everything you need to know about Quinn Daisies' logistics
                technology platforms, security infrastructure, and ongoing
                development roadmap.
              </p>
            </div>

            <div className="ResourcesFAQRight">
              {faqs.map((faq, index) => (
                <div
                  className={`ResourcesFAQItem ${openIndex === index ? "open" : ""}`}
                  key={index}
                  onClick={() => toggle(index)}
                >
                  <div className="ResourcesFAQItemHeader">
                    <h4>{faq.question}</h4>
                    <span className="material-symbols-outlined">add</span>
                  </div>
                  {openIndex === index && (
                    <p className="ResourcesFAQItemText">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section></section>

          <Footer />
        </div>
      </div>
    </>
  );
}
