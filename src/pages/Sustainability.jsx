import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";

gsap.registerPlugin(ScrollTrigger, Flip);

const heroSlides = [
  {
    span: "Responsible Global Commerce | Eco-Efficient Logistics",
    h1: "Leading Sustainable Trade with Carbon-Conscious Logistics & Ethical Sourcing.",
    p: "Quinn Daisies embeds environmental sustainability and social governance directly into global trade corridors, providing carbon-reduced freight routing, EUDR-compliant deforestation-free supply chains, and transparent ESG reporting.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg",
    ],
  },
  {
    span: "EUDR & Traceability | Zero Deforestation",
    h1: "100% Geolocation Traceability from Farmgate to Destination Port.",
    p: "Fully compliant with the European Union Deforestation Regulation (EUDR), capturing polygon farm mapping, verified harvesting dates, and ethical labor certifications for every metric ton moved.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    ],
  },
  {
    span: "Carbon Optimization | Circular Freight Systems",
    h1: "Measurably Reducing Supply Chain Carbon Footprints.",
    p: "We optimize cargo consolidation to maximize container utilization, prioritize modern fuel-efficient vessels and electric/rail drayage corridors, and deliver verified carbon offset certificates.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 8000;

// 5-Stage ESG & Traceability Lifecycle (BizMaster process pattern)
const sustainabilityProcessSteps = [
  {
    num: "01",
    icon: "pin_drop",
    title: "Farmgate Geolocation Mapping",
    desc: "Registering exact GPS polygon boundaries for every farmer cooperative plot, verified against EU satellite forestry registers.",
    deliverable: "Deliverable: Verified EUDR Polygon Map",
  },
  {
    num: "02",
    icon: "verified_user",
    title: "Living Wage & Fair Labor Audits",
    desc: "Rigorous on-site social compliance ensuring child-labor-free guarantees and prompt transparent digital disbursements.",
    deliverable: "Deliverable: Certified Ethical Labor Audit",
  },
  {
    num: "03",
    icon: "local_shipping",
    title: "Low-Emission Multimodal Routing",
    desc: "Optimizing container consolidation and substituting long-haul trucking with electrified rail and eco-efficient modern vessels.",
    deliverable: "Deliverable: Route Decarbonization Plan",
  },
  {
    num: "04",
    icon: "wb_sunny",
    title: "Solar Dehydration & Bio-Packaging",
    desc: "Replacing fossil fuel heaters with clean solar drying canopies and packing in certified biodegradable, recyclable container liners.",
    deliverable: "Deliverable: 0-Chemical Bio-Packaging Log",
  },
  {
    num: "05",
    icon: "co2",
    title: "Audited Scope 3 Telemetry & Offsets",
    desc: "Continuous per-ton carbon telemetry compiled into standardized ESG reports and certified carbon offset retirements.",
    deliverable: "Deliverable: Third-Party ESG Audit Dossier",
  },
];

// Bento Impact Case Studies (Growify pattern)
const sustainabilityBentoImpacts = [
  {
    image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
    tag: "Deforestation Prevention",
    metric: "0% Deforestation",
    title: "100% EUDR Satellite Verification",
    desc: "Over 12,000 hectares of smallholder agricultural acreage mapped and verified against historical forestry baselines with zero deforestation recorded.",
  },
  {
    image: "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
    tag: "Farmer Prosperity",
    metric: "+28% Living Income",
    title: "Smallholder Cooperative Enrichment",
    desc: "Direct digital contract payments and solar processing infrastructure boosted participating farming household earnings by 28% year-over-year.",
  },
  {
    image: "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
    tag: "Maritime Decarbonization",
    metric: "-22% Carbon Footprint",
    title: "Low-Emission Freight Corridors",
    desc: "Intermodal rail coordination and modern fuel-efficient container carriers eliminated 22% of transatlantic Scope 3 freight emissions per TEU.",
  },
];

// 3 Sustainable Sourcing Tiers (Growify pattern)
const sustainabilityTiers = [
  {
    title: "EUDR Provenance Tier",
    subtitle: "For importers requiring statutory deforestation due diligence and plot polygon maps.",
    badge: null,
    featured: false,
    ctaText: "Select Provenance Tier",
    features: [
      "GPS polygon farmgate geolocation maps",
      "EU satellite deforestation baseline check",
      "Harvest date & cooperative chain of custody",
      "Standard digital due diligence statement",
    ],
  },
  {
    title: "Comprehensive Decarbonization",
    subtitle: "For global brands targeting verified Scope 3 emission cuts and circular packaging.",
    badge: "Most Popular",
    featured: true,
    ctaText: "Select Decarbonization Tier",
    features: [
      "All EUDR Provenance features included",
      "Eco-optimized intermodal & rail freight routing",
      "Solar dehydration post-harvest processing",
      "Per-ton Scope 3 carbon telemetry reporting",
      "Certified compostable & recyclable dunnage",
      "Third-party audited ESG disclosure pack",
    ],
  },
  {
    title: "Sovereign & Institutional Syndicate",
    subtitle: "Turnkey ESG trade infrastructure for multilateral bodies, funds, and large processors.",
    badge: "Enterprise",
    featured: false,
    ctaText: "Inquire Sovereign Syndicate",
    features: [
      "Dedicated cooperative aggregation clusters",
      "On-site solar processing facility deployment",
      "Direct living-wage digital payroll audit",
      "Custom carbon offset retirement registry",
      "Executive ESG steering committee seats",
      "Guaranteed priority container allocation",
    ],
  },
];

// Sustainability FAQ Accordion (Growify pattern)
const sustainabilityFaqs = [
  {
    q: "How does Quinn Daisies guarantee 100% compliance with EUDR regulations?",
    a: "We collect precise GPS polygon boundaries of every smallholder plot at the point of origin harvest. These coordinates are cross-referenced with European Union satellite forestry baseline maps (December 31, 2020 cutoff) to verify zero deforestation. Every shipment is accompanied by a complete due diligence statement referencing official national agricultural registries.",
  },
  {
    q: "How are Scope 3 supply chain carbon emissions tracked and audited?",
    a: "We capture real-time multimodal transport telemetry across trucking, Class I on-dock rail, and transatlantic ocean carrier routes. Emission factors conform to GLEC (Global Logistics Emissions Council) standards and ISO 14083, delivering verifiable per-ton data that integrates directly into corporate ESG disclosure filings.",
  },
  {
    q: "What post-harvest practices reduce agricultural chemical dependency?",
    a: "We deploy solar dehydration canopies at cooperative aggregation centers, replacing fossil fuel driers. Cargo is packaged in hermetic, food-grade biodegradable liners and certified recyclable kraft bags, completely eliminating the need for synthetic fumigants and preserving natural organic quality.",
  },
  {
    q: "How does your procurement model safeguard farmer livelihoods?",
    a: "Our contracts guarantee fair-value floor pricing indexed above spot local markets, protecting farmers against speculative volatility. Disbursements are settled directly into digital bank accounts, and independent third-party monitors audit cooperative clusters to enforce zero tolerance for child or forced labor.",
  },
  {
    q: "Can Quinn Daisies issue verified carbon offset certificates for our cargo?",
    a: "Yes. In partnership with certified climate registries, we can bundle verified nature-based carbon removal credits with your freight consignments, enabling your organization to achieve net-zero landed emissions on transatlantic trade lanes.",
  },
];

export default function Sustainability() {
  useSmoothScroll();

  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const activeSlideRef = useRef(0);
  const heroContentRef = useRef(null);
  const heroBgRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const containerRef = useRef(null);
  const imagePinRef = useRef(null);
  const pageRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  const galleryWrapRef = useRef(null);
  const galleryCleanupRef = useRef(null);
  const serviceGalleryEight = useRef(null);

  usePinnedSlides(imagePinRef);

  // Hero auto-slider animation
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

  // ScrollSmoother setup
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

  // ScrollReveal setup
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

  // GSAP Zooming Animation (Flip with expoScale)
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

  const solutions = [
    {
      icon: "eco",
      title: "EUDR Geolocation Mapping",
      text: "Comprehensive polygon geolocation mapping of smallholder agricultural plots to verify zero deforestation and satisfy strict EUDR regulations.",
    },
    {
      icon: "co2",
      title: "Scope 3 Carbon Accounting",
      text: "Audited emissions tracking across ocean routes, air freight, and inland drayage, producing standardized ESG reports for corporate sustainability disclosures.",
    },
    {
      icon: "recycling",
      title: "Circular Supply Logistics",
      text: "Reusable dunnage, certified compostable bulk packaging, and container repositioning algorithms that eliminate physical waste and deadhaul mileage.",
    },
    {
      icon: "volunteer_activism",
      title: "Ethical Procurement Standards",
      text: "Strict enforcement of fair farmer compensation, child-labor-free guarantees, cooperative profit sharing, and third-party ethical workplace audits.",
    },
  ];

  const executionStages = [
    {
      title: "Farmgate Geolocation & Deforestation Due Diligence",
      description:
        "Every harvest is registered with precise GPS polygon boundaries, verified against European Union satellite forestry baseline maps to prove zero deforestation.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    },
    {
      title: "Ethical Labor & Living Wage Validation",
      description:
        "On-site audits guarantee that producer cooperatives operate free of forced or child labor, with prompt digital payments supporting community livelihood.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg",
    },
    {
      title: "Eco-Efficient Multimodal Routing Optimization",
      description:
        "Prioritizing on-dock rail over long-distance road trucking and allocating cargo to newer, fuel-efficient ocean carrier vessels to minimize emissions.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
      title: "Biodegradable & Reusable Packaging Integration",
      description:
        "Replacing non-recyclable plastic dunnage and lining with biodegradable grain bags, certified recyclable pallets, and moisture-controlled natural liners.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg",
    },
    {
      title: "In-Transit Carbon Telemetry & Footprint Logging",
      description:
        "Continuous carbon emissions tracking per metric ton moved, aggregating verified Scope 3 data for client ESG auditors and regulatory filings.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
    },
    {
      title: "Audited ESG Due Diligence & Certification Handover",
      description:
        "Complete chain-of-custody documentation, EUDR due diligence statement references, and certified carbon offset certificates delivered on arrival.",
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
        title="Sustainability & ESG Logistics | Quinn Daisies Logistics"
        description="Eco-efficient freight routing, EUDR zero-deforestation compliance, Scope 3 carbon accounting, and ethical agricultural origin sourcing."
        keywords="sustainable logistics, green freight forwarding, ESG supply chain, Scope 3 carbon accounting, EUDR compliance, zero deforestation commodities, eco-efficient shipping"
        url="https://www.logistics.quinndaisies.com/sustainability"
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
                      className={`HeroSlideIndicatorDot${
                        i === activeSlide ? " is-active" : ""
                      }`}
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
                    Request Sustainability Audit
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
                    alt={`Quinn Daisies Sustainability — slide ${
                      activeSlide + 1
                    }, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* TEMPLATE SECTION 1: CONTINUOUS TICKER MARQUEE (Template 1) */}
            <div className="TemplateMarqueeSection">
              <div className="TemplateMarqueeTrack">
                <span className="TemplateMarqueeItem">
                  100% EUDR Geolocation Mapping
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Zero Deforestation Guarantee
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Audited Scope 3 Decarbonization
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Clean Solar Dehydration Clusters
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Living Wage Cooperative Sourcing
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Circular Biodegradable Packaging
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                {/* Repeat for seamless infinite scroll */}
                <span className="TemplateMarqueeItem">
                  100% EUDR Geolocation Mapping
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Zero Deforestation Guarantee
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Audited Scope 3 Decarbonization
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Clean Solar Dehydration Clusters
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Living Wage Cooperative Sourcing
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  Circular Biodegradable Packaging
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
              </div>
            </div>

            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Balancing High-Volume Trade Velocity with Environmental Stewardship
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

            {/* TEMPLATE SECTION 2: SPLIT HIGHLIGHT BAR (Template 3 - BizMaster) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateSplitHighlightBar reveal__bottom">
                <div className="TemplateHighlightLeft">
                  <h3>Accelerate Your Decarbonization & EUDR Compliance!</h3>
                  <p>
                    Future-proof your global commodities against carbon border taxes and
                    regulatory scrutiny with certified satellite provenance and ethical sourcing.
                  </p>
                </div>
                <div className="TemplateHighlightRight">
                  <div className="TemplateHighlightRightMeta">
                    <div className="TemplateHighlightCount">
                      <h4>100% Satellite Verified</h4>
                      <span>Zero Deforestation Standard</span>
                    </div>
                  </div>
                  <Link to="/contact-us" className="TemplateHighlightBtn">
                    <span>Request ESG Audit</span>
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                      arrow_outward
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* TEMPLATE SECTION 3: 5-STAGE WORK PROCESS (Template 3 - BizMaster) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Responsible Traceability</span>
                <h2 className="TemplateProcessTitle">
                  5-Stage Ecological Due Diligence Lifecycle
                </h2>
                <p className="TemplateProcessSubtitle">
                  From farmgate polygon registration to certified Scope 3 audit delivery,
                  every metric ton is held to the highest international ESG benchmarks.
                </p>
              </div>

              <div className="TemplateProcessCardsGrid five-col">
                {sustainabilityProcessSteps.map((step, idx) => (
                  <div key={idx} className="TemplateProcessStepCard reveal__bottom">
                    <div className="TemplateProcessCardTop">
                      <span className="TemplateProcessStepNumber">{step.num}</span>
                      <div className="TemplateProcessStepIconWrap">
                        <span className="material-symbols-outlined">
                          {step.icon}
                        </span>
                      </div>
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                    <span className="TemplateProcessStepDeliverable">
                      {step.deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TEMPLATE SECTION 4: CONNECTED STATS ROW (Template 1) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateConnectedStatsRow reveal__bottom">
                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">satellite_alt</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>100%</h3>
                    <p>EUDR Traceability</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">diversity_3</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>150+</h3>
                    <p>Farming Co-ops</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">co2</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>22%</h3>
                    <p>Carbon Slashing</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">forest</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>0%</h3>
                    <p>Deforestation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEMPLATE SECTION 5: PROFICIENCY & COMPLIANCE BARS (Template 1) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProficiencySection reveal__bottom">
                <div className="TemplateProficiencyLeft">
                  <span className="TemplateProcessEyebrow">Audited Metrics</span>
                  <h3>Verifiable Environmental Stewardship</h3>
                  <p>
                    We provide transparent, data-backed guarantees so multinational
                    buyers can satisfy European Union, North American, and global ESG regulations.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>EUDR Deforestation Due Diligence Statements Included</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>GLEC-Compliant Scope 3 Greenhouse Gas Telemetry</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>Independent Fair-Labor & Zero-Child-Labor Certification</span>
                    </div>
                  </div>
                </div>

                <div className="TemplateSkillList">
                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>EUDR Geolocation Polygon Mapping</span>
                      <span>100%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "100%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Scope 3 Multimodal Decarbonization</span>
                      <span>94%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "94%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Fair Farmer Compensation Compliance</span>
                      <span>100%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "100%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Clean Solar Dehydration Infrastructure</span>
                      <span>98%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "98%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Plastic-Free Biodegradable Packaging</span>
                      <span>95%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "95%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="ApplicationImageDesign" ref={imagePinRef}>
              <div className="ApplicationChartContentListContainer">
                <div className="fill"></div>
                <div className="ApplicationChartContentList">
                  <h2 className="ApplicationImageDesignHeader reveal__bottom__interval_slide">
                    Audited ESG Governance Embedded into Every Shipment
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
                Sustainable Trade & Environmental Governance
              </span>
              <h4 className="reveal__right">
                Embedding environmental stewardship, EUDR traceability, and ethical procurement into cross-border logistics.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>EUDR Geolocation Traceability</h6>
                    <p>
                      Plot-level GPS polygon mapping verifying zero-deforestation compliance for all agricultural commodities destined for global markets.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Cooperative Farmer Partners</h6>
                    <p>
                      Engaged smallholder farming cooperatives adhering to regenerative agricultural standards, ethical labor, and fair-value pricing.
                    </p>
                  </div>
                  <h3>
                    150<text>+</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Supply Chain Carbon Reduction</h6>
                    <p>
                      Intermodal rail substitution, optimized vessel stowage, and consolidated drayage reducing freight carbon footprint across core routes.
                    </p>
                  </div>
                  <h3>
                    22<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Chemical-Free Post-Harvest Handling</h6>
                    <p>
                      Utilizing solar dehydration, certified hermetic storage liners, and physical cleaning protocols that eliminate harmful chemical fumigants.
                    </p>
                  </div>
                  <h3>
                    99.5<text>%</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Modern international commerce is experiencing an unprecedented regulatory shift toward strict environmental traceability and ethical provenance. Regulations such as the European Union Deforestation Regulation (EUDR) and corporate Scope 3 decarbonization mandates require buyers to prove the exact origin of their imported commodities. Supply chains that cannot document plot-level compliance risk outright shipment seizures and permanent market exclusion. Quinn Daisies embeds sustainability directly into origin logistics.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Our sustainability framework starts at the farm gate in Nigeria, where we provide participating agricultural cooperatives with GPS boundary mapping, organic soil health training, and solar-powered post-harvest drying infrastructure. By pairing regenerative agricultural stewardship with eco-optimized multimodal shipping—including low-emission maritime routing and Class I rail logistics—Quinn Daisies delivers commercial commodities that fulfill the highest global ESG benchmarks.
              </p>
            </section>

            {/* TEMPLATE SECTION 6: BENTO IMPACT CASE STUDIES (Template 2 - Growify) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Proven Results</span>
                <h2 className="TemplateProcessTitle">
                  Real Ecological & Economic Impact
                </h2>
                <p className="TemplateProcessSubtitle">
                  Measurable outcomes delivering zero deforestation, enhanced producer
                  prosperity, and audited carbon savings across core supply chains.
                </p>
              </div>

              <div className="TemplateBentoGrid">
                {sustainabilityBentoImpacts.map((bento, idx) => (
                  <div key={idx} className="TemplateBentoCard reveal__bottom">
                    <div className="TemplateBentoImageWrap">
                      <img
                        src={bento.image}
                        alt={bento.title}
                        className="TemplateBentoImage"
                      />
                      <div className="TemplateBentoTag">{bento.tag}</div>
                      <div className="TemplateBentoMetricPill">{bento.metric}</div>
                    </div>
                    <div className="TemplateBentoBody">
                      <h4>{bento.title}</h4>
                      <p>{bento.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GSAP ZOOMING ANIMATION (ServiceGallerySection with expoScale Flip) */}
            <section className="ServiceGallerySection">
              <div className="ServiceGalleryWrap" ref={galleryWrapRef}>
                <div
                  className="ServiceGallery ServiceGalleryBento ServiceGallerySwitch"
                  ref={serviceGalleryEight}
                >
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg"
                      alt="Quinn Daisies ESG Logistics"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg"
                      alt="Quinn Daisies Clean Sourcing"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                      alt="Quinn Daisies Sustainability"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466490/QuinnDaisies/2151976954_xlv0a5.jpg"
                      alt="Quinn Daisies Zero Deforestation"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg"
                      alt="Quinn Daisies Eco Freight"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg"
                      alt="Quinn Daisies Ethical Supply"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg"
                      alt="Quinn Daisies Solar Dehydration"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                      alt="Quinn Daisies Green Corridors"
                    />
                  </div>
                </div>
              </div>

              <div className="Container Gap-XL ServicePosition">
                <div className="ServiceList">
                  <h3 className="reveal__left">
                    Responsible Supply Chain Operations
                  </h3>
                  <p className="ServiceListText reveal__right">
                    Balancing high-volume trade velocity with ethical agricultural stewardship,
                    biodegradable packaging, and verifiable carbon reduction.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="Dark-Background"
              id="CarouselAnimation"
              ref={carouselSectionRef}
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <h2 className="reveal__left">
                    Core Pillars of Responsible & Traceable Global Trade
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      How Quinn Daisies integrates environmental responsibility, strict regulatory compliance, and community stewardship across every stage of the trade lifecycle.
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
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg"
                        alt="Quinn Daisies Farm-to-Port EUDR Traceability"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Farm-to-Port EUDR Traceability & GPS Mapping</h2>
                        <p>
                          Rigorous polygonal geolocation logging verifying that every batch of sesame, cocoa, and ginger is sourced exclusively from zero-deforestation land.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg"
                        alt="Quinn Daisies Eco-Efficient Multimodal Freight"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Eco-Efficient Multimodal Freight Routing</h2>
                        <p>
                          Prioritizing modern, fuel-efficient container vessels and intermodal rail freight to slash per-ton greenhouse gas emissions across transatlantic corridors.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg"
                        alt="Quinn Daisies Natural Solar Dehydration"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Natural Solar Dehydration & Chemical-Free Drying</h2>
                        <p>
                          Deploying clean solar drying canopies and hermetic storage bags in origin collection clusters to eliminate fossil-fueled drying and chemical preservatives.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg"
                        alt="Quinn Daisies Ethical Labor Practices"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Ethical Labor Practices & Fair-Value Pricing</h2>
                        <p>
                          Enforcing strict zero-child-labor policies, safe working conditions, and transparent contract pricing that directly enriches farming communities.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                        alt="Quinn Daisies Circular Packaging"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Circular Packaging & Biodegradable Storage Liners</h2>
                        <p>
                          Utilizing multi-wall recyclable paper sacks and food-grade biodegradable container liners to eliminate single-use plastics from agricultural shipping.
                        </p>
                      </div>
                    </div>

                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010387/QuinnDaisies/124625_jouegu.jpg"
                        alt="Quinn Daisies Scope 3 Carbon Auditing"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>Scope 3 Carbon Auditing & ESG Reporting</h2>
                        <p>
                          Providing corporate buyers with certified carbon-accounting telemetry and independent third-party audit reports for corporate sustainability disclosures.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* OVERVIEW TRIO GRID (ESG Assurance) */}
            <section className="Dark-Background">
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <div className="ApplicationSetupDetails reveal__left">
                    <h2 className="reveal__left">
                      Our Certified Environmental Guarantees
                    </h2>
                    <Link
                      className="ApplicationButton"
                      to="/contact-us"
                      style={{ marginTop: "1.5rem", width: "fit-content" }}
                    >
                      Request ESG Audit
                      <span className="material-symbols-outlined">
                        globe_location_pin
                      </span>
                    </Link>
                  </div>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Every shipment is documented with audited provenance, verifiable carbon
                      metrics, and zero-deforestation certification ready for global regulators.
                    </p>
                  </div>
                </div>

                <div className="OverviewTrioGrid">
                  <div className="OverviewTrioCardWide reveal__bottom">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444163/2151541896_jeb7fg.jpg"
                      alt="EUDR Verified Compliance"
                    />
                    <div className="OverviewTrioCardWideOverlay">
                      <div className="OverviewTrioCardTop">
                        <span className="AdvanceUpdateSpan">
                          01 — Deforestation Compliance
                        </span>
                        <h3>EUDR Satellite Polygon Verification</h3>
                      </div>
                      <p>
                        Comprehensive plot-level satellite audits cross-referenced against
                        EU forestry registers to guarantee 100% deforestation-free cargo.
                      </p>
                    </div>
                  </div>

                  <div className="OverviewTrioCardStandard reveal__bottom">
                    <div className="OverviewTrioCardTop">
                      <span className="AdvanceUpdateSpan">
                        02 — Decarbonization
                      </span>
                      <h3>Verified Scope 3 Offsetting</h3>
                    </div>
                    <p>
                      Independently audited emissions metrics for ocean, air, and drayage
                      movements, providing turn-key ESG disclosures for corporate compliance.
                    </p>
                  </div>

                  <div className="OverviewTrioCardStandard reveal__bottom">
                    <div className="OverviewTrioCardTop">
                      <span className="AdvanceUpdateSpan">
                        03 — Community Impact
                      </span>
                      <h3>Direct Cooperative Enrichment</h3>
                    </div>
                    <p>
                      Fair-value contracts, transparent digital settlements, and zero-child-labor
                      audits empowering agricultural communities across West Africa.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* TEMPLATE SECTION 7: SUSTAINABLE SOURCING TIERS (Template 2 - Growify) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">ESG Partnership Tracks</span>
                <h2 className="TemplateProcessTitle">
                  Tailored Sourcing & Decarbonization Frameworks
                </h2>
                <p className="TemplateProcessSubtitle">
                  Choose the sustainability tier that matches your corporate ESG mandates,
                  audit requirements, and import market regulations.
                </p>
              </div>

              <div className="TemplateTiersGrid">
                {sustainabilityTiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`TemplateTierCard reveal__bottom ${tier.featured ? "featured" : ""}`}
                  >
                    {tier.badge && (
                      <div className="TemplateTierBadge">{tier.badge}</div>
                    )}
                    <div>
                      <h3>{tier.title}</h3>
                      <p className="TemplateTierSubtitle">{tier.subtitle}</p>

                      <div className="TemplateTierFeatures">
                        {tier.features.map((feat, fIdx) => (
                          <div key={fIdx} className="TemplateTierFeatureItem">
                            <span className="material-symbols-outlined">
                              check
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact-us"
                      className="ApplicationButton"
                      style={{ textAlign: "center", justifyContent: "center" }}
                    >
                      <span>{tier.ctaText}</span>
                      <span className="material-symbols-outlined">
                        arrow_outward
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* TEMPLATE SECTION 8: INTERACTIVE FAQ ACCORDION (Template 2 - Growify) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Frequently Asked Questions</span>
                <h2 className="TemplateProcessTitle">
                  Clear Insights on Traceability & Compliance
                </h2>
                <p className="TemplateProcessSubtitle">
                  Frequently requested details regarding EUDR compliance, carbon accounting,
                  and cooperative fair-trade practices.
                </p>
              </div>

              <div className="TemplateFaqList">
                {sustainabilityFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`TemplateFaqItem ${openFaq === index ? "open" : ""}`}
                  >
                    <button
                      className="TemplateFaqQuestion"
                      onClick={() =>
                        setOpenFaq((prev) => (prev === index ? -1 : index))
                      }
                    >
                      <span>{faq.q}</span>
                      <span className="material-symbols-outlined">
                        expand_more
                      </span>
                    </button>
                    <div className="TemplateFaqAnswer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <section className="SectionContainer">
              <div className="SectionColorHeader">
                <span className="reveal__top">
                  Responsible Trade | Measurable Impact
                </span>
                <h2 className="reveal__bottom">
                  Creating Value While Safeguarding Natural Ecosystems
                </h2>
              </div>

              <div className="SectionFlex">
                <div className="SectionBoxSmall reveal__left">
                  <h2>
                    0% <span>Deforestation Tolerance</span>
                  </h2>
                  <p>
                    Every ton of agricultural commodities managed by Quinn Daisies is mapped directly to certified, non-deforested farmland, protecting biodiversity and ancestral lands.
                  </p>

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg"
                    alt="Quinn Daisies Eco Logistics"
                  />
                </div>

                <div className="SectionBoxLarge reveal__bottom">
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg"
                    alt="Quinn Daisies Sustainable Shipping"
                  />

                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                    alt="Quinn Daisies Green Supply Chain"
                  />
                </div>

                <div className="SectionBoxSmall reveal__top">
                  <p>
                    We demonstrate that international trade can be environmentally restorative and commercially lucrative. Partner with us to future-proof your global supply chains against carbon border taxes and regulatory shifts.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Partner in Sustainable Trade
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
                  alt="Quinn Daisies Sustainability CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Build a Resilient, Sustainable Trade Supply Chain
                  </h2>
                  <p className="ApplicationText">
                    Meet stringent global environmental mandates, secure EUDR certifications, and decarbonize your freight operations with Quinn Daisies' sustainable logistics agency.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Sustainability Consultation
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
