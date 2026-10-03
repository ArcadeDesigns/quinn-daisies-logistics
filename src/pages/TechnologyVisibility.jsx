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
    span: "Enterprise Software & Application Engineering",
    h1: "Architecting Scalable, Production-Grade Digital Platforms",
    p: "From distributed backend microservices and responsive web platforms to native mobile ecosystems and desktop suites, Quinn Daisies transforms complex commercial objectives into resilient, high-velocity software reality.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg",
    ],
  },
  {
    span: "Applied AI Engineering & Cloud DevOps",
    h1: "Autonomous Intelligence & Multi-Cloud Reliability",
    p: "We integrate custom generative LLMs, predictive machine-learning pipelines, computer vision OCR, and containerized Kubernetes cloud infrastructure engineered for 99.99% operational uptime.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/9395_ifws6o.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/2151910932_l06x8e.jpg",
    ],
  },
  {
    span: "Workforce Acceleration & Commercial Intelligence",
    h1: "Cultivating Elite Engineers & Data-Driven Growth",
    p: "Accelerating technical talent through intensive developer bootcamps, paid enterprise internships, and institutional partnerships while empowering leadership with algorithmic lead generation and real-time business intelligence.",
    images: [
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789482758/QuinnDaisies/639892_bqd1oj.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg",
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468842_qcq2hy.jpg",
    ],
  },
];

const SLIDE_INTERVAL = 8000;

const coreEngineeringBox = [
  {
    letter: "A",
    icon: "terminal",
    title: "Software Development",
    text: "Enterprise backend architectures, modular microservices, high-throughput distributed data pipelines, and REST/GraphQL APIs built with domain-driven design.",
  },
  {
    letter: "B",
    icon: "language",
    title: "Web Application Development",
    text: "Modern single-page applications, multi-tenant B2B SaaS platforms, and secure transaction portals crafted with React, Next.js, and TypeScript.",
  },
  {
    letter: "C",
    icon: "phone_iphone",
    title: "Mobile Application Development",
    text: "Native iOS (Swift), Android (Kotlin), and cross-platform (Flutter & React Native) apps with offline-first synchronization and biometric security.",
  },
  {
    letter: "D",
    icon: "desktop_windows",
    title: "Desktop Application Development",
    text: "High-performance enterprise desktop suites for Windows, macOS, and Linux using Tauri, Electron, and C#/.NET for intensive compute and hardware interfacing.",
  },
];

// 5-Stage Engineering Lifecycle (Template 3)
const engineeringLifecycleSteps = [
  {
    num: "01",
    icon: "search",
    title: "Technical Discovery & Scoping",
    desc: "Stakeholder requirements elicitation, architectural feasibility auditing, database schema design, and technical specification blueprinting.",
    deliverable: "Product Requirements Document (PRD)",
  },
  {
    num: "02",
    icon: "palette",
    title: "UI/UX Prototyping & Architecture",
    desc: "Interactive wireframes, design system tokens, database schema design, and microservices boundary mapping.",
    deliverable: "Clickable Prototype & Architecture Map",
  },
  {
    num: "03",
    icon: "code",
    title: "Agile Sprints & Continuous Audits",
    desc: "Two-week agile sprint deliveries, test-driven development, automated code quality analysis, and peer reviews.",
    deliverable: "Production Code & Automated Test Suites",
  },
  {
    num: "04",
    icon: "cloud_upload",
    title: "Automated CI/CD & Deployment",
    desc: "Docker containerization, Kubernetes cluster staging, security vulnerability testing, and zero-downtime deployment.",
    deliverable: "Production Cloud Cluster (AWS/GCP)",
  },
  {
    num: "05",
    icon: "verified",
    title: "Long-Term SLAs & Workforce Evolution",
    desc: "24/7 telemetry monitoring, bug-fixing guarantees, continuous feature iterations, and internal team upskilling.",
    deliverable: "Active SLA & Operations Dashboard",
  },
];

// Pinned Stage slides for ApplicationImageDesign (Disciplines A - F)
const engineeringLifecycle = [
  {
    title: "A. Software Development: Enterprise Microservices",
    description:
      "Full-lifecycle backend engineering built for fault tolerance, event-driven concurrency, and massive scale. We engineer clean domain architectures utilizing PostgreSQL, Kafka, and Redis with enterprise AES-256 encryption.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg",
  },
  {
    title: "B. Web Application Development: Multi-Tenant SaaS",
    description:
      "Sub-second loading web applications and customer-facing digital portals engineered with React, Next.js, and TypeScript. Featuring role-based access control, interactive data grids, and real-time WebSocket telemetry.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg",
  },
  {
    title: "C. Mobile Applications: Native iOS & Android",
    description:
      "Production-ready mobile applications built with Swift, Kotlin, and Flutter. Equipped with local SQLite caching, seamless background sync, push notification pipelines, and frictionless biometric login.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg",
  },
  {
    title: "D. Desktop Applications: Mission-Critical Workstations",
    description:
      "Cross-platform workstation software built using Tauri, Electron, and Qt. Designed for intensive local data processing, automated peripheral hardware communication, and air-gapped security compliance.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/9395_ifws6o.jpg",
  },
  {
    title: "E. Workforce Development: Paid Internships & Labs",
    description:
      "Bridging the divide between academic theory and production engineering. We mentor and deploy emerging developer talent through structured corporate apprenticeships and university partnerships across Nigeria and abroad.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
  },
  {
    title: "F. Research & Discovery: Architectural Audits & Prototyping",
    description:
      "De-risking technical investments through comprehensive scoping workshops, user research, clickable Figma prototypes, architectural stress-testing, and ROI feasibility audits.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789482758/QuinnDaisies/639892_bqd1oj.jpg",
  },
];

// Bento Case Studies / Impact Cards (Template 2)
const techBentoCards = [
  {
    tag: "Enterprise Cloud & Web Portals",
    metric: "+340% Throughput",
    title: "Distributed Microservices Architecture",
    desc: "Migrated monolithic legacy database into high-throughput cloud microservices, cutting response latency by 72% under heavy traffic.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg",
  },
  {
    tag: "Applied AI Engineering",
    metric: "99.8% Precision",
    title: "Autonomous RAG Knowledge Pipeline",
    desc: "Fine-tuned custom domain LLM and vector search for instant automated document parsing across thousands of shipping manifests.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg",
  },
  {
    tag: "Cross-Platform Mobile Ecosystem",
    metric: "4.8x Dev Velocity",
    title: "Native & Flutter Mobile Framework",
    desc: "Built unified offline-first mobile suite for logistics field agents, synchronizing inventory states seamlessly across 2 continents.",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg",
  },
];

// Engagement Frameworks / Tiers (Template 2)
const engagementTiers = [
  {
    title: "Dedicated Engineering Squad",
    badge: null,
    featured: false,
    subtitle: "An autonomous, cross-functional engineering team scaled to your product roadmap.",
    features: [
      "Senior Full-Stack & Mobile Engineers",
      "Dedicated Product Manager & Tech Lead",
      "DevOps & QA Automation Specialists",
      "Agile Sprint Planning & Daily Standups",
      "100% Intellectual Property (IP) Transfer",
    ],
    ctaText: "Assemble Squad",
  },
  {
    title: "Milestone-Based Project Delivery",
    badge: "MOST POPULAR",
    featured: true,
    subtitle: "Fixed-scope, milestone-driven execution for rapid time-to-market and budget predictability.",
    features: [
      "Guaranteed Delivery Timelines & Budgets",
      "Comprehensive Discovery & Blueprint Included",
      "Bi-Weekly Production Demos & Milestone Signoffs",
      "Zero-Downtime Cloud Deployment Handover",
      "90-Day Post-Launch Warranty & Support",
    ],
    ctaText: "Initiate Discovery",
  },
  {
    title: "Workforce & Institutional Tech Lab",
    badge: null,
    featured: false,
    subtitle: "Custom training labs, developer bootcamps, and institutional transformation.",
    features: [
      "Enterprise Staff Upskilling in Cloud & AI",
      "University & Polytechnic Tech Fellowships",
      "Production-Ready Paid Intern Placements",
      "Curriculum Design & Hackathon Coordination",
      "Long-Term Human Capital Pipeline",
    ],
    ctaText: "Partner on Workforce",
  },
];

// Interactive FAQ Accordion (Template 2)
const techFaqs = [
  {
    q: "Who owns the intellectual property (IP) and source code developed?",
    a: "You retain 100% full intellectual property ownership. Upon completion and milestone approval, all source code repositories, design assets, database schemas, and cloud deployment scripts are transferred directly to your organization with zero proprietary vendor lock-in.",
  },
  {
    q: "How do you ensure enterprise-grade security and compliance?",
    a: "We implement defense-in-depth security principles across the entire development lifecycle: OWASP Top 10 mitigation, end-to-end data encryption (AES-256 for data at rest, TLS 1.3 in transit), role-based access control (RBAC), and automated static/dynamic vulnerability scans in our CI/CD pipelines.",
  },
  {
    q: "Can you modernize our existing legacy software and database systems?",
    a: "Yes. Our systems integration and software engineering teams specialize in legacy modernization. We safely encapsulate monolithic legacy databases behind robust REST/GraphQL microservices, migrate on-premises workloads to secure cloud environments, and synchronize disparate departmental tools without interrupting live operations.",
  },
  {
    q: "How does the Workforce Development & Internship program collaborate with businesses?",
    a: "Our workforce program pairs vetted, high-performing software trainees and interns with active engineering projects under the close supervision of senior technical leads. Businesses benefit from scalable, cost-effective development capacity while investing in sustainable regional tech talent across Nigeria and international corridors.",
  },
  {
    q: "What post-launch support and SLAs do you provide?",
    a: "Every production deployment includes comprehensive post-launch warranty and SLA options: 24/7 cloud infrastructure monitoring, automated error tracking, sub-hour critical incident response times, regular security patching, and continuous feature enhancement sprints.",
  },
];

export default function TechnologyVisibility() {
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

  // GSAP ApplicationBox scroll stagger
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

  // GSAP Horizontal Carousel Strip
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
        title="Enterprise Technology, Software Engineering & AI Solutions | Quinn Daisies Logistics"
        description="Production-grade digital systems across 11 disciplines: Software, Web, Mobile, Desktop, Workforce Training, R&D, AI Engineering, Cloud DevOps, Lead Generation, Business Analysis, and BI."
        keywords="enterprise software development, web application engineering, mobile app development, desktop software, AI engineering logistics, cloud DevOps AWS Azure, workforce technical training, business intelligence telemetry, supply chain visibility platform"
        url="https://www.logistics.quinndaisies.com/technology-and-visibility"
      />

      <div ref={pageRef}>
        <Navbar />

        <div id="smooth-wrapper" ref={smoothWrapperRef}>
          <div id="smooth-content" ref={smoothContentRef}>
            {/* HERO SECTION: OpportunityAppCtn with rotating slides */}
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
                      className={`HeroSlideIndicatorDot${i === activeSlide ? " is-active" : ""
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
                    Initiate Technical Discovery
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
                    alt={`Quinn Daisies Technology — slide ${activeSlide + 1
                      }, image ${index + 1}`}
                  />
                ))}
              </div>
            </section>

            {/* TEMPLATE SECTION 1: CONTINUOUS TICKER MARQUEE (Template 1) */}
            <div className="TemplateMarqueeSection">
              <div className="TemplateMarqueeTrack">
                <span className="TemplateMarqueeItem">
                  A. Software Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  B. Web Application Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  C. Mobile Application Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  D. Desktop Application Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  E. Workforce Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  F. Research and Discovery
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  G. AI Engineering
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  H. Cloud Services & DevOps
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  I. Lead Generation
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  J. Business Analysis
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  K. Business Intelligence
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                {/* Repeat for seamless infinite scroll */}
                <span className="TemplateMarqueeItem">
                  A. Software Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  B. Web Application Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  C. Mobile Application Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  D. Desktop Application Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  E. Workforce Development
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  F. Research and Discovery
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  G. AI Engineering
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
                <span className="TemplateMarqueeItem">
                  H. Cloud Services & DevOps
                  <span className="material-symbols-outlined TemplateMarqueeIcon">
                    star
                  </span>
                </span>
              </div>
            </div>

            {/* SECTION 2: CORE ENGINEERING DISCIPLINES (A through D) */}
            <section className="sectionBox" ref={containerRef}>
              <div className="SectionHeader">
                <h2 className="reveal__top">
                  Core Engineering & Application Disciplines (A through D)
                </h2>
              </div>

              <div className="ApplicationContainer">
                {coreEngineeringBox.map((item, index) => (
                  <div className="ApplicationBox" key={index}>
                    <span className="BoxIcon material-symbols-outlined">
                      {item.icon}
                    </span>
                    <h3>
                      {item.title}
                    </h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* TEMPLATE SECTION 2: SPLIT HIGHLIGHT BAR (Template 3 - BizMaster) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateSplitHighlightBar reveal__bottom">
                <div className="TemplateHighlightLeft">
                  <h3>Let's Build World-Class Software!</h3>
                  <p>
                    Transforming complex commercial goals into high-concurrency
                    distributed systems, custom LLMs, and responsive digital products.
                  </p>
                </div>
                <div className="TemplateHighlightRight">
                  <div className="TemplateHighlightRightMeta">
                    <div className="TemplateHighlightCount">
                      <h4>150+ Applications Shipped</h4>
                      <span>Enterprise Production Deployments</span>
                    </div>
                  </div>
                  <Link to="/contact-us" className="TemplateHighlightBtn">
                    <span>Schedule Discovery</span>
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
                <span className="TemplateProcessEyebrow">Delivery Lifecycle</span>
                <h2 className="TemplateProcessTitle">
                  Disciplined 5-Stage Engineering Process
                </h2>
                <p className="TemplateProcessSubtitle">
                  From initial technical scoping to long-term cloud SLA management,
                  every phase is governed by clear deliverables and automated audits.
                </p>
              </div>

              <div className="TemplateProcessCardsGrid five-col">
                {engineeringLifecycleSteps.map((step, idx) => (
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
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>150+</h3>
                    <p>Apps Shipped</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">cloud_done</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>99.99%</h3>
                    <p>Cloud SLA</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>1,200+</h3>
                    <p>Engineers Trained</p>
                  </div>
                </div>

                <div className="TemplateConnectedStatItem">
                  <div className="TemplateConnectedStatNode">
                    <span className="material-symbols-outlined">query_stats</span>
                  </div>
                  <div className="TemplateConnectedStatContent">
                    <h3>10M+</h3>
                    <p>Daily API Calls</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TEMPLATE SECTION 5: PROFICIENCY & SKILL BARS SECTION (Template 1) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProficiencySection reveal__bottom">
                <div className="TemplateProficiencyLeft">
                  <span className="TemplateProcessEyebrow">Technical Mastery</span>
                  <h3>Engineering Precision & Governance</h3>
                  <p>
                    We build mission-critical digital solutions on modern cloud-native
                    stacks with automated vulnerability scans and clean domain architectures.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>100% Client Intellectual Property & Source Code Transfer</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>End-to-End AES-256 Encryption & TLS 1.3 Compliance</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.95rem", fontWeight: 600 }}>
                      <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>check_circle</span>
                      <span>Automated CI/CD Testing & Zero-Downtime Deployments</span>
                    </div>
                  </div>
                </div>

                <div className="TemplateSkillList">
                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Enterprise Backend & Microservices</span>
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
                      <span>Cloud DevOps & Kubernetes (K8s)</span>
                      <span>96%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "96%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Applied AI Engineering & Vector RAG</span>
                      <span>95%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "95%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Native Mobile & Web Applications</span>
                      <span>97%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "97%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>

                  <div className="TemplateSkillItem">
                    <div className="TemplateSkillMeta">
                      <span>Business Intelligence & ETL Pipelines</span>
                      <span>94%</span>
                    </div>
                    <div className="TemplateSkillTrack">
                      <div className="TemplateSkillFill" style={{ width: "94%" }}>
                        <div className="TemplateSkillDot"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: PINNED SLIDES (ApplicationImageDesign: Disciplines A - F) */}
            <section className="ApplicationImageDesign" ref={imagePinRef}>
              <div className="ApplicationChartContentListContainer">
                <div className="fill"></div>
                <div className="ApplicationChartContentList">
                  <h2 className="ApplicationImageDesignHeader reveal__bottom__interval_slide">
                    Engineering Architecture & Scalable Execution Blueprint
                  </h2>
                  {engineeringLifecycle.map((item, index) => (
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
                  {engineeringLifecycle.map((item, index) => (
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

            {/* SECTION 4: STATS & GOVERNANCE (ServicesInformation) */}
            <section className="SectionContainer ServicesInformation">
              <span className="reveal__left">
                Production-Grade Engineering & Operational Uptime
              </span>
              <h4 className="reveal__right">
                Empowering enterprises with fault-tolerant distributed backends,
                embedded AI models, and world-class developer talent.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Enterprise Applications Shipped</h6>
                    <p>
                      Robust web platforms, native mobile applications, and
                      cloud SaaS products delivered across global markets.
                    </p>
                  </div>
                  <h3>
                    150<span>+</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Cloud Infrastructure SLA</h6>
                    <p>
                      High-availability Kubernetes clusters, automated zero-downtime
                      deployments, and 24/7 active infrastructure telemetry.
                    </p>
                  </div>
                  <h3>
                    99.99<span>%</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Workforce Developers Trained</h6>
                    <p>
                      Vetted software engineers, apprentice interns, and cloud
                      specialists graduated through our hands-on tech academies.
                    </p>
                  </div>
                  <h3>
                    1,200<span>+</span>
                  </h3>
                </div>

                <div className="ServicesInformationBox reveal__bottom__interval">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Daily API & Model Transactions</h6>
                    <p>
                      Microservices queries, automated vector RAG retrieval, and
                      mission-critical data pipeline throughput handled daily.
                    </p>
                  </div>
                  <h3>
                    10M<span>+</span>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText reveal__left">
                Modern enterprise engineering demands more than building user
                interfaces—it requires architectural discipline, clean domain-driven
                design, and reliable infrastructure capable of scaling under high
                concurrency. Quinn Daisies unites full-stack software development,
                applied artificial intelligence, multi-cloud DevOps, and rigorous
                workforce training into one unified engineering power-house.
              </p>
              <p className="ServicesInformationBottomText reveal__right">
                Whether deploying custom large language models into existing
                business operations, modernizing legacy enterprise databases into
                reactive cloud microservices, or building automated B2B customer
                acquisition engines, we deliver end-to-end solutions that grant
                clients 100% intellectual property ownership, zero vendor lock-in,
                and sovereign technical control.
              </p>
            </section>

            {/* TEMPLATE SECTION 6: BENTO IMPACT CASE STUDIES (Template 2 - Growify) */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Proven Results</span>
                <h2 className="TemplateProcessTitle">
                  Measurable Impact Across Production Deployments
                </h2>
                <p className="TemplateProcessSubtitle">
                  Real-world metrics demonstrating performance gains, developer velocity,
                  and model accuracy.
                </p>
              </div>

              <div className="TemplateBentoGrid">
                {techBentoCards.map((bento, idx) => (
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

            {/* SECTION 5: ADVANCE FLEX COLUMN (E. Workforce Development & F. Research and Discovery) */}
            <section className="AdvanceFlexDesignColumn">
              <div className="AdvanceFlexCtnBoxCtnRow">
                <div className="AdvanceFlexCtnBoxCtnRowContent">
                  <span className="reveal__left">
                    Human Capital & Technical Scoping
                  </span>
                  <h2 className="reveal__right">
                    E. Workforce Development & F. Research & Discovery
                  </h2>
                  <p className="reveal__bottom">
                    Sustainable technological transformation requires two pillars:
                    rigorous upfront discovery that eliminates architectural risk,
                    and a continuous pipeline of world-class developers trained on
                    production-grade stacks.
                  </p>
                  <div className="AdvanceImageFlexContainer">
                    <div className="AdvanceImageFlexContainerContainer reveal__bottom__interval">
                      <img
                        className="FlexCtnBoxCtnImg"
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg"
                        alt="Quinn Daisies Workforce Training"
                      />
                      <p>
                        <strong>E. Workforce Development:</strong> Bridging the
                        gap through paid enterprise internships, university
                        partnerships across Nigeria, and hands-on bootcamps in
                        React, Node.js, Cloud DevOps, and AI.
                      </p>
                    </div>

                    <div className="AdvanceImageFlexContainerContainer reveal__bottom__interval">
                      <img
                        className="FlexCtnBoxCtnImg"
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg"
                        alt="Quinn Daisies Research and Discovery"
                      />
                      <p>
                        <strong>F. Research & Discovery:</strong> De-risking
                        technology investments before writing code through UX
                        prototyping, system feasibility audits, database schema
                        modeling, and ROI projections.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ExtraAdvanceImageFlexContainer reveal__right__interval">
                  <div className="ExtraAdvanceImageFlexContainerContainer">
                    <img
                      className="FlexCtnBoxCtnImg"
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481021/QuinnDaisies/37874_i8j1ls.jpg"
                      alt="Quinn Daisies Enterprise Engineering"
                    />
                    <p>
                      By pairing rigorous academic discovery with continuous
                      practical apprenticeships under senior technical directors,
                      we build software that withstands institutional scrutiny,
                      secures client IP, and establishes long-term competitive
                      advantage.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 6: GSAP ZOOMING ANIMATION (ServiceGallerySection with expoScale Flip) */}
            <section className="ServiceGallerySection">
              <div className="ServiceGalleryWrap" ref={galleryWrapRef}>
                <div
                  className="ServiceGallery ServiceGalleryBento ServiceGallerySwitch"
                  ref={serviceGalleryEight}
                >
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                      alt="Quinn Daisies Cloud Engineering"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg"
                      alt="Quinn Daisies Mobile App Dev"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                      alt="Quinn Daisies Technology"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg"
                      alt="Quinn Daisies AI Systems"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/9395_ifws6o.jpg"
                      alt="Quinn Daisies Desktop Suites"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg"
                      alt="Quinn Daisies BI Dashboards"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/2151910932_l06x8e.jpg"
                      alt="Quinn Daisies DevOps Clusters"
                    />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1789482758/QuinnDaisies/639892_bqd1oj.jpg"
                      alt="Quinn Daisies Technical Labs"
                    />
                  </div>
                </div>
              </div>

              <div className="Container Gap-XL ServicePosition">
                <div className="ServiceList">
                  <h3 className="reveal__left">
                    Enterprise Digital Engineering Solutions
                  </h3>
                  <p className="ServiceListText reveal__right">
                    We engineer reliable, scalable, and secure digital platforms
                    designed to power transatlantic commerce, mission-critical
                    enterprise operations, and automated operational intelligence.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 7: HORIZONTAL CAROUSEL (Disciplines G, H, I, J, K) */}
            <section
              className="Dark-Background"
              id="CarouselAnimation"
              ref={carouselSectionRef}
            >
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <h2 className="reveal__left">
                    Disciplines G Through K: AI, Cloud, Growth & Intelligence
                  </h2>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      Explore our specialized capabilities in generative artificial
                      intelligence, multi-cloud DevOps pipelines, algorithmic lead
                      generation, BPMN business analysis, and predictive enterprise
                      dashboards.
                    </p>
                  </div>
                </div>

                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                  <div
                    className="ApplicationCarouselSlide"
                    ref={carouselStripRef}
                  >
                    {/* G. AI Engineering */}
                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                        alt="G. AI Engineering"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>G. AI Engineering & Machine Learning</h2>
                        <p>
                          Fine-tuned LLMs, vector Retrieval-Augmented Generation
                          (RAG), computer vision OCR for shipping documents, and
                          autonomous decision agents that eliminate operational
                          toil.
                        </p>
                      </div>
                    </div>

                    {/* H. Cloud Services and Cloud DevOps */}
                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/9395_ifws6o.jpg"
                        alt="H. Cloud Services and Cloud DevOps"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>H. Cloud Services & Cloud DevOps</h2>
                        <p>
                          Architecting resilient multi-cloud environments across
                          AWS, Azure, and GCP with automated GitHub Actions CI/CD,
                          Kubernetes (K8s) orchestration, and Terraform IaC.
                        </p>
                      </div>
                    </div>

                    {/* I. Lead Generation */}
                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg"
                        alt="I. Lead Generation"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>I. Lead Generation Engines</h2>
                        <p>
                          Algorithmic B2B customer acquisition funnels, verified
                          buyer data enrichment, bi-directional CRM synchronizations
                          (HubSpot/Salesforce), and automated commercial outreach.
                        </p>
                      </div>
                    </div>

                    {/* J. Business Analysis and Development */}
                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg"
                        alt="J. Business Analysis and Development"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>J. Business Analysis & Development</h2>
                        <p>
                          BPMN 2.0 business process modeling, technical debt
                          auditing, requirements elicitation, user journey mapping,
                          and commercial market expansion blueprints.
                        </p>
                      </div>
                    </div>

                    {/* K. Business Intelligence */}
                    <div className="AdvanceDesignStructureSlideBox">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg"
                        alt="K. Business Intelligence"
                      />
                      <div className="AdvanceDesignStructureSlideBoxContent">
                        <h2>K. Business Intelligence & Dashboards</h2>
                        <p>
                          Centralized cloud data warehouses (Snowflake, BigQuery),
                          automated ETL/ELT pipelines with dbt and Airflow, and
                          interactive PowerBI and Tableau executive KPI dashboards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ENTERPRISE TECHNOLOGY STACK & TOOLING ECOSYSTEM (OverviewTrioGrid) */}
            <section className="Dark-Background">
              <div className="ApplicationCarouselRefurblished">
                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                  <div className="ApplicationSetupDetails reveal__left">
                    <span className="AdvanceUpdateSpan">Production Tooling</span>
                    <h2 className="reveal__left">
                      Enterprise Technology Stack & Architecture
                    </h2>
                    <Link
                      className="ApplicationButton"
                      to="/contact-us"
                      style={{ marginTop: "1.5rem", width: "fit-content" }}
                    >
                      Schedule Tech Review
                      <span className="material-symbols-outlined">
                        globe_location_pin
                      </span>
                    </Link>
                  </div>

                  <div className="ApplicationCarouselContainer reveal__right">
                    <p className="ApplicationCarouselContainerText">
                      We engineer digital systems on battle-tested open-source and cloud-native
                      foundations, ensuring high concurrency, sub-second latency, and zero vendor lock-in.
                    </p>
                  </div>
                </div>

                <div className="OverviewTrioGrid">
                  <div className="OverviewTrioCardWide reveal__bottom">
                    <img
                      src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                      alt="Cloud Native Microservices Architecture"
                    />
                    <div className="OverviewTrioCardWideOverlay">
                      <div className="OverviewTrioCardTop">
                        <span className="AdvanceUpdateSpan">
                          01 — Distributed Core
                        </span>
                        <h3>Event-Driven Backends & Cloud Microservices</h3>
                      </div>
                      <p>
                        Scalable microservices utilizing Node.js, Go (Golang), and Python FastAPI
                        coupled with Apache Kafka event streams, Redis caching, and PostgreSQL
                        clusters built for massive transaction throughput.
                      </p>
                    </div>
                  </div>

                  <div className="OverviewTrioCardStandard reveal__bottom">
                    <div className="OverviewTrioCardTop">
                      <span className="AdvanceUpdateSpan">
                        02 — Intelligence Layer
                      </span>
                      <h3>Autonomous AI & Vector Knowledge Graphs</h3>
                    </div>
                    <p>
                      Retrieval-Augmented Generation (RAG) pipelines, Pinecone vector stores,
                      and fine-tuned transformer models running on optimized vLLM inference clusters.
                    </p>
                  </div>

                  <div className="OverviewTrioCardStandard reveal__bottom">
                    <div className="OverviewTrioCardTop">
                      <span className="AdvanceUpdateSpan">
                        03 — Cross-Platform Client
                      </span>
                      <h3>Native Mobile & Ultra-Fast Web Apps</h3>
                    </div>
                    <p>
                      React 19, Next.js 15, Flutter, Swift, and Kotlin client architectures delivering
                      sub-second loading, offline-first SQLite synchronization, and biometric security.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ENTERPRISE SECURITY & CRYPTOGRAPHIC GOVERNANCE */}
            <section className="sectionBox">
              <div className="SectionHeader">
                <span className="AdvanceUpdateSpan" style={{ marginBottom: "12px", display: "inline-block" }}>
                  Defense-in-Depth Protocol
                </span>
                <h2 className="reveal__top">
                  Enterprise Security, Cryptography & Compliance
                </h2>
                <p className="reveal__bottom" style={{ maxWidth: "750px", margin: "14px auto 0 auto", textAlign: "center", color: "#666" }}>
                  Every line of code and cloud resource is engineered to satisfy strict international
                  banking, healthcare, and enterprise regulatory compliance benchmarks.
                </p>
              </div>

              <div className="ApplicationContainer">
                <div className="ApplicationBox">
                  <span className="BoxIcon material-symbols-outlined">lock</span>
                  <h3>End-to-End Cryptography</h3>
                  <p>
                    AES-256 encryption at rest for all database volumes and object stores, paired with
                    TLS 1.3 in transit and automated secret rotation via HashiCorp Vault.
                  </p>
                </div>

                <div className="ApplicationBox">
                  <span className="BoxIcon material-symbols-outlined">security</span>
                  <h3>Zero-Trust Architecture</h3>
                  <p>
                    Least-privilege role-based access control (RBAC), multi-factor authentication (MFA),
                    and micro-segmented Virtual Private Clouds (VPC) with air-gapped staging options.
                  </p>
                </div>

                <div className="ApplicationBox">
                  <span className="BoxIcon material-symbols-outlined">bug_report</span>
                  <h3>Automated CI/CD Scans</h3>
                  <p>
                    Static code analysis with SonarQube, automated Snyk dependency vulnerability scanning,
                    and continuous container image auditing integrated directly into every pull request.
                  </p>
                </div>

                <div className="ApplicationBox">
                  <span className="BoxIcon material-symbols-outlined">copyright</span>
                  <h3>100% Client IP Ownership</h3>
                  <p>
                    Complete contractual assignment of all custom source code repositories, design assets,
                    and cloud deployment scripts upon delivery with zero recurring license royalties.
                  </p>
                </div>
              </div>
            </section>

            {/* ADVANCED DISCIPLINES G - K ARCHITECTURAL DEEP DIVE */}
            <section className="SectionContainer">
              <div className="SectionColorHeader">
                <span className="reveal__top">
                  Advanced Disciplines G Through K
                </span>
                <h2 className="reveal__bottom">
                  Deep Technical Architecture & Production Execution
                </h2>
                <p className="reveal__bottom" style={{ maxWidth: "780px", margin: "14px auto 0 auto", textAlign: "center", color: "#666", fontSize: "1.05rem" }}>
                  A closer examination of our specialized capabilities in generative AI engineering,
                  multi-cloud Kubernetes DevOps, algorithmic lead generation, business analysis, and BI data warehousing.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginTop: "40px" }}>
                {/* Card G */}
                <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 30px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "28px", color: "#e28a34", background: "rgba(226,138,52,0.12)", padding: "10px", borderRadius: "12px" }}>
                      neurology
                    </span>
                    <div>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#e28a34", letterSpacing: "0.06em", textTransform: "uppercase" }}>Discipline G</span>
                      <h3 style={{ margin: "2px 0 0 0", fontSize: "1.25rem", color: "#111" }}>Applied AI Engineering</h3>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.65, marginBottom: "18px" }}>
                    Developing bespoke Large Language Models (LLMs), dense vector retrieval pipelines,
                    and computer vision models for automated shipping document OCR and cargo damage inspection.
                  </p>
                  <div style={{ background: "#faf9f6", padding: "14px 16px", borderRadius: "12px", border: "1px solid #eee" }}>
                    <strong style={{ fontSize: "0.82rem", textTransform: "uppercase", color: "#777", display: "block", marginBottom: "4px" }}>Core Technology Stack</strong>
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#222" }}>PyTorch • LangChain • LlamaIndex • Pinecone • Hugging Face • vLLM</span>
                  </div>
                </div>

                {/* Card H */}
                <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 30px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "28px", color: "#e28a34", background: "rgba(226,138,52,0.12)", padding: "10px", borderRadius: "12px" }}>
                      cloud_done
                    </span>
                    <div>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#e28a34", letterSpacing: "0.06em", textTransform: "uppercase" }}>Discipline H</span>
                      <h3 style={{ margin: "2px 0 0 0", fontSize: "1.25rem", color: "#111" }}>Cloud Services & Cloud DevOps</h3>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.65, marginBottom: "18px" }}>
                    Architecting fault-tolerant multi-cloud clusters across AWS, GCP, and Azure with
                    automated Terraform Infrastructure as Code, Kubernetes autoscaling, and zero-downtime CI/CD.
                  </p>
                  <div style={{ background: "#faf9f6", padding: "14px 16px", borderRadius: "12px", border: "1px solid #eee" }}>
                    <strong style={{ fontSize: "0.82rem", textTransform: "uppercase", color: "#777", display: "block", marginBottom: "4px" }}>Core Technology Stack</strong>
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#222" }}>Kubernetes (K8s) • Docker • Terraform • AWS EKS • GitHub Actions • Datadog</span>
                  </div>
                </div>

                {/* Card I */}
                <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 30px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "28px", color: "#e28a34", background: "rgba(226,138,52,0.12)", padding: "10px", borderRadius: "12px" }}>
                      trending_up
                    </span>
                    <div>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#e28a34", letterSpacing: "0.06em", textTransform: "uppercase" }}>Discipline I</span>
                      <h3 style={{ margin: "2px 0 0 0", fontSize: "1.25rem", color: "#111" }}>Algorithmic Lead Generation</h3>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.65, marginBottom: "18px" }}>
                    Engineered customer acquisition engines utilizing verified B2B buyer intent telemetry,
                    automated domain scraping, enrichment workflows, and bi-directional CRM data sync.
                  </p>
                  <div style={{ background: "#faf9f6", padding: "14px 16px", borderRadius: "12px", border: "1px solid #eee" }}>
                    <strong style={{ fontSize: "0.82rem", textTransform: "uppercase", color: "#777", display: "block", marginBottom: "4px" }}>Core Technology Stack</strong>
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#222" }}>Python Scrapy • PostgreSQL • Redis Queue • HubSpot / Salesforce API • Webhooks</span>
                  </div>
                </div>

                {/* Card J */}
                <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 30px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "28px", color: "#e28a34", background: "rgba(226,138,52,0.12)", padding: "10px", borderRadius: "12px" }}>
                      account_tree
                    </span>
                    <div>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#e28a34", letterSpacing: "0.06em", textTransform: "uppercase" }}>Discipline J</span>
                      <h3 style={{ margin: "2px 0 0 0", fontSize: "1.25rem", color: "#111" }}>Business Analysis & Systems Architecture</h3>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.65, marginBottom: "18px" }}>
                    BPMN 2.0 operational process modeling, system bottleneck auditing, API interface contracts,
                    and commercial viability blueprints that eliminate architectural ambiguity.
                  </p>
                  <div style={{ background: "#faf9f6", padding: "14px 16px", borderRadius: "12px", border: "1px solid #eee" }}>
                    <strong style={{ fontSize: "0.82rem", textTransform: "uppercase", color: "#777", display: "block", marginBottom: "4px" }}>Core Technology Stack</strong>
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#222" }}>BPMN 2.0 • OpenAPI 3.0 Specification • PlantUML • Jira Enterprise • Confluence</span>
                  </div>
                </div>

                {/* Card K */}
                <div style={{ background: "#ffffff", borderRadius: "20px", padding: "36px", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 30px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "28px", color: "#e28a34", background: "rgba(226,138,52,0.12)", padding: "10px", borderRadius: "12px" }}>
                      analytics
                    </span>
                    <div>
                      <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#e28a34", letterSpacing: "0.06em", textTransform: "uppercase" }}>Discipline K</span>
                      <h3 style={{ margin: "2px 0 0 0", fontSize: "1.25rem", color: "#111" }}>Business Intelligence & Warehousing</h3>
                    </div>
                  </div>
                  <p style={{ color: "#555", fontSize: "0.94rem", lineHeight: 1.65, marginBottom: "18px" }}>
                    Constructing centralized cloud data lakehouses, automated dbt data modeling pipelines,
                    and interactive executive dashboards delivering real-time operational visibility.
                  </p>
                  <div style={{ background: "#faf9f6", padding: "14px 16px", borderRadius: "12px", border: "1px solid #eee" }}>
                    <strong style={{ fontSize: "0.82rem", textTransform: "uppercase", color: "#777", display: "block", marginBottom: "4px" }}>Core Technology Stack</strong>
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#222" }}>Snowflake • Google BigQuery • dbt Core • Apache Airflow • Tableau • PowerBI</span>
                  </div>
                </div>
              </div>
            </section>

            {/* PRODUCTION SLA & RESPONSE MATRIX */}
            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">SLA Governance</span>
                <h2 className="TemplateProcessTitle">
                  Production Support & Incident Response Matrix
                </h2>
                <p className="TemplateProcessSubtitle">
                  Enforceable service-level commitments ensuring high availability, rapid incident resolution,
                  and uninterrupted commercial continuity.
                </p>
              </div>

              <div className="TemplateTiersGrid">
                <div className="TemplateTierCard reveal__bottom">
                  <div className="TemplateTierBadge" style={{ background: "#dc2626" }}>Priority 1</div>
                  <div>
                    <h3>Critical Outage</h3>
                    <p className="TemplateTierSubtitle">Total production platform downtime or active security breach.</p>
                    <div className="TemplateTierFeatures">
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">timer</span>
                        <span>&lt; 15 Minutes Initial Response</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">emergency</span>
                        <span>24/7 Dedicated War Room Bridge</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">published_with_changes</span>
                        <span>Continuous hourly executive status logs</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">verified</span>
                        <span>RCA (Root Cause Analysis) in 48h</span>
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "#dc2626", fontWeight: 700, textAlign: "center" }}>
                    99.99% Uptime SLA Target
                  </span>
                </div>

                <div className="TemplateTierCard reveal__bottom featured">
                  <div className="TemplateTierBadge">Priority 2</div>
                  <div>
                    <h3>Major Degradation</h3>
                    <p className="TemplateTierSubtitle">Core feature impaired with significant business impact but partial workaround.</p>
                    <div className="TemplateTierFeatures">
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">timer</span>
                        <span>&lt; 1 Hour Initial Response</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">group</span>
                        <span>Dedicated Senior Lead Developer</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">speed</span>
                        <span>Same-day emergency patch release</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">verified</span>
                        <span>Automated regression test suite</span>
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "#e28a34", fontWeight: 700, textAlign: "center" }}>
                    Sub-4-Hour Remediation Target
                  </span>
                </div>

                <div className="TemplateTierCard reveal__bottom">
                  <div className="TemplateTierBadge" style={{ background: "#16a34a" }}>Priority 3 & 4</div>
                  <div>
                    <h3>Standard Evolution</h3>
                    <p className="TemplateTierSubtitle">Minor bug, visual defect, or ongoing feature enhancements.</p>
                    <div className="TemplateTierFeatures">
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">timer</span>
                        <span>&lt; 4 Hours Initial Response</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">view_kanban</span>
                        <span>Next-sprint backlog prioritization</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">support</span>
                        <span>Regular bi-weekly release cadence</span>
                      </div>
                      <div className="TemplateTierFeatureItem">
                        <span className="material-symbols-outlined">verified</span>
                        <span>Full documentation & changelog</span>
                      </div>
                    </div>
                  </div>
                  <span style={{ fontSize: "0.82rem", color: "#16a34a", fontWeight: 700, textAlign: "center" }}>
                    Continuous Agile Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="TemplateSectionWrap">
              <div className="TemplateProcessSectionHeader">
                <span className="TemplateProcessEyebrow">Frequently Asked Questions</span>
                <h2 className="TemplateProcessTitle">
                  Clear Answers to Critical Inquiries
                </h2>
                <p className="TemplateProcessSubtitle">
                  Essential details regarding intellectual property ownership, security compliance,
                  and post-launch engineering SLAs.
                </p>
              </div>

              <div className="TemplateFaqList">
                {techFaqs.map((faq, index) => (
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

            {/* SECTION 8: APPLICATION BANNER (CTA) */}
            <section className="SectionContainer">
              <div className="ApplicationBanner">
                <img
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                  alt="Quinn Daisies Technology CTA"
                />
                <div className="ApplicationBannerOverlay">
                  <h2>
                    Ready to Architect, Build & Scale Your Digital Solutions?
                  </h2>
                  <p className="ApplicationText">
                    Connect directly with our senior software architects, AI
                    engineers, and workforce directors to discuss your product
                    roadmap, system integration, or institutional modernization.
                  </p>
                  <Link className="ApplicationButton" to="/contact-us">
                    Schedule Technical Discovery
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
