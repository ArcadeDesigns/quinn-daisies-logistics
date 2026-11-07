import React, { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";

gsap.registerPlugin(ScrollTrigger);

/**
 * Universal GSAP + ScrollTrigger + ScrollReveal Motion Hook
 * Automatically animates heroes, 2-up columns, card grids, floating media,
 * and the top reading progress bar across all 19+ Technology pages.
 */
export const useQuinnTechMotion = (pathname, progressBarRef) => {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      // 1. Top Scroll Progress Bar
      if (progressBarRef?.current) {
        gsap.set(progressBarRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.to(progressBarRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.15,
          },
        });
      }

      // 2. Hero Entrance Stagger Timeline
      const heroTargets = document.querySelectorAll(
        ".accelerators-hero .devsite-landing-row-header-text > *, " +
        ".accelerator-hero-center > *, " +
        ".cloud-hero-section .glue-grid__col:first-child > *, " +
        ".products-hero-section .glue-grid__col:first-child > *, " +
        ".stories-hero--content > *, " +
        ".programs .hero--content-container > *, " +
        ".alumni .hero-preheading, " +
        ".alumni .hero-heading"
      );
      if (heroTargets.length > 0) {
        gsap.fromTo(
          heroTargets,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.72,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "transform,opacity",
          }
        );
      }

      // 3. Floating Hero Cards Entrance + Continuous Gentle Float
      const floatCards = document.querySelectorAll(
        ".floating-media-card, .floating-img-card, .alumni .hero-image, .products-collage-icon-tile"
      );
      if (floatCards.length > 0) {
        gsap.fromTo(
          floatCards,
          { y: 30, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.78,
            stagger: 0.07,
            ease: "power3.out",
            onComplete: () => {
              gsap.to(floatCards, {
                y: -6,
                duration: 2.8,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                stagger: {
                  each: 0.22,
                  from: "random",
                },
              });
            },
          }
        );
      }

      // 4. Parallax Scrub on Feature Photo Frames & Cards (Ported from Logistics Home.jsx)
      const parallaxImages = document.querySelectorAll(
        ".overlapping-photo-primary, .cloud-floating-photo-card, .promo-2up-image-media"
      );
      parallaxImages.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18 },
          {
            y: -14,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });

      // 5. Parallax Card Scrub (Ported from Logistics Home.jsx lines 298-313)
      const scrollBoxes = document.querySelectorAll(
        ".ApplicationBox, .devsite-card, .cloud-why-card, .benefit-card, .glue-card, " +
        ".featured-product-row-card, .gemini-dark-card, .bsp-logo-tile, .devsite-3-up-item, .multimedia-card"
      );
      scrollBoxes.forEach((box) => {
        gsap.fromTo(
          box,
          { y: 35 },
          {
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              end: "top 25%",
              scrub: 1.2,
            },
          }
        );
      });

      // 6. Animated Underline (Triggers immediately on scroll, and loops every 5s)
      const underlines = document.querySelectorAll(".decorated-text.underline, .animated-underline");
      underlines.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            el.classList.add("in-view");
            el.style.animation = "none";
            void el.offsetWidth;
            el.style.animation = "";
          },
        });
      });
    });

    // 6. ScrollReveal Animations (Exact Port from Logistics Home.jsx lines 156-224)
    let sr = null;
    const timer = setTimeout(() => {
      try {
        sr = ScrollReveal({
          distance: "80px",
          duration: 900,
          easing: "ease-in-out",
          reset: false,
          viewFactor: 0.08,
          mobile: true,
        });

        // Direction Reveals (Logistics Home.jsx standard)
        sr.reveal(".reveal__bottom", {
          origin: "bottom",
          distance: "100px",
          duration: 1000,
          reset: false,
          easing: "ease-in-out",
        });

        sr.reveal(".reveal__top", {
          origin: "top",
          distance: "100px",
          duration: 1000,
          reset: false,
          easing: "ease-in-out",
        });

        sr.reveal(".reveal__left", {
          origin: "left",
          distance: "100px",
          duration: 1000,
          reset: false,
          easing: "ease-in-out",
        });

        sr.reveal(".reveal__right", {
          origin: "right",
          distance: "100px",
          duration: 1000,
          reset: false,
          easing: "ease-in-out",
        });

        // Interval Reveals (Logistics Home.jsx staggered)
        sr.reveal(".reveal__top__interval", {
          origin: "top",
          distance: "100px",
          duration: 1000,
          interval: 200,
          reset: false,
          easing: "ease-in-out",
        });

        sr.reveal(".reveal__left__interval", {
          origin: "left",
          distance: "100px",
          duration: 1000,
          interval: 200,
          reset: false,
          easing: "ease-in-out",
        });

        sr.reveal(".reveal__bottom__interval", {
          origin: "bottom",
          distance: "100px",
          duration: 1000,
          interval: 200,
          reset: false,
          easing: "ease-in-out",
        });

        sr.reveal(".reveal__right__interval", {
          origin: "right",
          distance: "100px",
          duration: 1000,
          interval: 200,
          reset: false,
          easing: "ease-in-out",
        });

        // DevSite & Google For Startups structural reveals
        sr.reveal(
          ".devsite-row-header-flex, .custom-headline-2up-headline, .financial-support-1up-headline, .alumni .hero-description-content, .program-page-1up-section, .stories-big-card",
          {
            origin: "bottom",
            distance: "32px",
            duration: 750,
          }
        );

        sr.reveal(
          ".devsite-50-50-grid .devsite-50-col:first-child, .al-campus--container .glue-grid__col:first-child, .promo-2up-section .glue-grid__col:first-child, .cloud-benefit-row .glue-grid__col:first-child",
          {
            origin: "left",
            distance: "40px",
            duration: 800,
          }
        );

        sr.reveal(
          ".devsite-50-50-grid .devsite-50-col:last-child, .al-campus--container .glue-grid__col:last-child, .promo-2up-section .glue-grid__col:last-child, .cloud-benefit-row .glue-grid__col:last-child",
          {
            origin: "right",
            distance: "40px",
            duration: 800,
          }
        );

        sr.reveal(
          ".devsite-3-up-item, .devsite-card, .benefit-card, .glue-clipped-card, .cloud-why-card, .bsp-logo-tile, .featured-product-row-card, .gemini-dark-card, .multimedia-card, .alumni-carousel-card, .animated-card, .stay-in-touch-card, .glue-card, .alumni-category-pill-item, .devsite-expandable",
          {
            origin: "bottom",
            distance: "36px",
            duration: 720,
            interval: 90,
          }
        );
      } catch {
        // Fallback gracefully if running in headless test
      }
      ScrollTrigger.refresh();
    }, 60);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [pathname, progressBarRef]);
};

const QUINN_TECH_PAGES = [
  {
    path: "/technology-and-visibility",
    title: "Technology & Visibility",
    shortTitle: "Technology & Visibility",
    badge: "Cloud & Scale",
    keywords: "cloud devops sdlc visibility .net core c# python react java kotlin kivy flet",
  },
  {
    path: "/contract-procurement-and-writing",
    title: "Contract Procurement & Writing Services",
    shortTitle: "Contract Procurement",
    badge: "SAM.gov • UNGM • MD",
    keywords: "government contracting procurement proposal writing sam.gov ungm maryland emma rfp rfq rfi shipley far dfars",
  },
  {
    path: "/technology-corporate-review",
    title: "Technology Corporate Review",
    shortTitle: "Corporate Review",
    badge: "Alumni & Audit",
    keywords: "technology corporate review architecture audit sdlc maturity portfolio performance",
  },
  {
    path: "/software-development-and-engineering",
    title: "Software Development & Engineering",
    shortTitle: "Software Engineering",
    badge: "Full SDLC",
    keywords: "software development engineering full sdlc backend frontend desktop mobile .net asp.net c# python react java kotlin kivy flet",
  },
  {
    path: "/artificial-intelligence",
    title: "Artificial Intelligence",
    shortTitle: "Artificial Intelligence",
    badge: "Gemini & RAG",
    keywords: "artificial intelligence ai llm rag agents semantic kernel pytorch fastapi langgraph",
  },
  {
    path: "/application-development",
    title: "Application Development",
    shortTitle: "Application Dev",
    badge: "Web & SaaS",
    keywords: "application development enterprise web saas microservices asp.net core python react java",
  },
  {
    path: "/mobile-application-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile Apps",
    badge: "Kotlin • MAUI • Flet",
    keywords: "mobile application development android ios kotlin jetpack compose .net maui flet kivy",
  },
  {
    path: "/desktop-application-development",
    title: "Desktop Application Development",
    shortTitle: "Desktop Apps",
    badge: "WPF • WinUI • Kivy",
    keywords: "desktop application development windows macos linux c# wpf winui python kivy flet javafx",
  },
  {
    path: "/it-solutions",
    title: "IT Solutions & Managed Infrastructure",
    shortTitle: "IT Solutions",
    badge: "Cloud & Zero-Trust",
    keywords: "it solutions managed infrastructure cybersecurity zero trust cloud migration soc2 nist",
  },
  {
    path: "/workforce-development-and-training",
    title: "Workforce Development & Training",
    shortTitle: "Workforce & Training",
    badge: "Bootcamps",
    keywords: "workforce development training bootcamps upskilling corporate academy sre devops",
  },
  {
    path: "/seo-and-geo",
    title: "SEO & GEO (Generative Engine Optimization)",
    shortTitle: "SEO & GEO",
    badge: "Search & AI Citations",
    keywords: "seo geo generative engine optimization json-ld schema core web vitals llm search",
  },
  {
    path: "/digital-marketing",
    title: "Digital Marketing & Growth",
    shortTitle: "Digital Marketing",
    badge: "B2B & ABM",
    keywords: "digital marketing abm demand generation paid media cro analytics attribution",
  },
  {
    path: "/technology-programs",
    title: "Technology Programs",
    shortTitle: "Programs",
    badge: "Accelerators",
    keywords: "technology programs accelerators government capture cloud modernization immersion",
  },
  {
    path: "/technology-products",
    title: "Technology Products",
    shortTitle: "Products",
    badge: "Catalog",
    keywords: "technology products suite platforms apis frameworks tools",
  },
  {
    path: "/technology-about-us",
    title: "About Quinn Daisies Technology",
    shortTitle: "About Us",
    badge: "Ecosystem",
    keywords: "about quinn daisies technology engineering culture leadership frederick maryland",
  },
  {
    path: "/technology-contact-us",
    title: "Contact Quinn Daisies Technology",
    shortTitle: "Contact Us",
    badge: "RFP & SLA Desk",
    keywords: "contact technology rfp consultation quote support sla frederick maryland",
  },
];

const DEVSITE_UPPER_DROPDOWNS = [
  {
    id: "services",
    label: "Services & Engineering",
    columns: [
      {
        title: "Software & App Development",
        headerIcon: "terminal",
        items: [
          {
            title: "Software Dev & Engineering",
            description: "Full-SDLC polyglot engineering across .NET Core, C#, Python, React & Java",
            to: "/software-development-and-engineering",
            icon: "code",
          },
          {
            title: "Application Development",
            description: "Cloud-native multi-tenant SaaS, enterprise portals & distributed APIs",
            to: "/application-development",
            icon: "web",
          },
          {
            title: "Mobile Application Dev",
            description: "Native Android (Kotlin), iOS/Android (.NET MAUI) & Python Flet/Kivy fleets",
            to: "/mobile-application-development",
            icon: "phone_android",
          },
          {
            title: "Desktop Application Dev",
            description: "C# WPF/WinUI 3 workstations, Python Kivy touch HMIs & Flet desktop suites",
            to: "/desktop-application-development",
            icon: "desktop_windows",
          },
          {
            title: "AI & App Engineering Hub",
            description: "Integrated polyglot engineering & rapid prototype showcase",
            to: "/ai-and-application-development",
            icon: "hub",
          },
        ],
      },
      {
        title: "AI, Cloud & Infrastructure",
        headerIcon: "cloud",
        items: [
          {
            title: "Artificial Intelligence (Gemini Kit)",
            description: "Enterprise RAG, Agentic AI, LLM orchestration & computer vision",
            to: "/artificial-intelligence",
            icon: "psychology",
          },
          {
            title: "Technology & Visibility (Cloud)",
            description: "Multi-cloud DevOps, Kubernetes, Terraform IaC & real-time telemetry",
            to: "/technology-and-visibility",
            icon: "cloud",
          },
          {
            title: "IT Solutions & Infrastructure",
            description: "Zero-Trust security, 24/7 NOC, hybrid cloud & NIST/SOC 2 governance",
            to: "/it-solutions",
            icon: "security",
          },
          {
            title: "Workforce & Managed IT Support",
            description: "L1–L3 enterprise helpdesk, SRE reliability & staff augmentation",
            to: "/workforce-development-and-it-support",
            icon: "headset_mic",
          },
          {
            title: "Workforce Development & Training",
            description: "Corporate engineering academies, bootcamps & technical certification",
            to: "/workforce-development-and-training",
            icon: "school",
          },
        ],
      },
    ],
    showcases: [
      {
        badge: "FULL-SDLC CRAFTSMANSHIP",
        title: "Polyglot Cloud & Modern Systems",
        description: "Production-ready architectures engineered across ASP.NET Core, Python, React, Kotlin & Docker without tech debt.",
        image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2F2151719610.jpg?alt=media&token=d34600ad-bcba-4996-88c7-7b753c1cb33b",
        to: "/software-development-and-engineering",
        linkText: "Explore Engineering",
      },
      {
        badge: "GEMINI AGENTIC AI",
        title: "Enterprise AI & RAG Workflows",
        description: "Deploy semantic vector search, private LLM agents, and business automation workflows with speed.",
        image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_80vl5580vl5580vl.jpg?alt=media&token=7ad9d05f-306d-4243-b72f-2fb1db923f83",
        to: "/artificial-intelligence",
        linkText: "Discover AI Platform",
      },
    ],
  },
  {
    id: "solutions",
    label: "Solutions & Growth",
    columns: [
      {
        title: "Government Contracting & Governance",
        headerIcon: "verified_user",
        items: [
          {
            title: "Contract Procurement & Writing",
            description: "SAM.gov (Federal), Maryland Government (eMMA) & UNGM bid capture & proposals",
            to: "/contract-procurement-and-writing",
            icon: "shield",
          },
          {
            title: "Technology Corporate Review",
            description: "Executive architecture audits, SDLC maturity & contract past performance",
            to: "/technology-corporate-review",
            icon: "corporate_fare",
          },
          {
            title: "Technology Programs",
            description: "Contract capture accelerators, AI immersion & cloud modernization tracks",
            to: "/technology-programs",
            icon: "rocket_launch",
          },
          {
            title: "Technology Products",
            description: "Explore our full catalog of software modules, APIs & growth engines",
            to: "/technology-products",
            icon: "storefront",
          },
        ],
      },
      {
        title: "Search, GEO & Demand Generation",
        headerIcon: "travel_explore",
        items: [
          {
            title: "SEO & GEO Optimization",
            description: "Technical SEO + Generative Engine Optimization for AI Overviews & LLMs",
            to: "/seo-and-geo",
            icon: "travel_explore",
          },
          {
            title: "Digital Marketing & ABM",
            description: "Full-funnel B2B & government demand generation, CRO & attribution",
            to: "/digital-marketing",
            icon: "bar_chart",
          },
          {
            title: "SEO & Digital Marketing Hub",
            description: "Unified search authority, Core Web Vitals & programmatic growth catalog",
            to: "/seo-and-digital-marketing",
            icon: "language",
          },
        ],
      },
    ],
    showcases: [
      {
        badge: "GOVERNMENT TENDERS",
        title: "SAM.gov, eMMA & UNGM Bids",
        description: "Full-lifecycle technical proposal writing, compliance matrices (FAR/DFARS), and high-win tender capture.",
        image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2F2151719608.jpg?alt=media&token=da1677ce-707e-416e-ad29-4a094a344379",
        to: "/contract-procurement-and-writing",
        linkText: "GovCon RFP Desk",
      },
      {
        badge: "AI DISCOVERY & GEO",
        title: "Generative Engine Optimization",
        description: "Gain definitive brand citation authority inside Perplexity, Claude, ChatGPT, and Google AI Overviews.",
        image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2F2151719609.jpg?alt=media&token=e7a19218-6bdd-47f0-8666-5640806832d7",
        to: "/seo-and-geo",
        linkText: "Explore GEO System",
      },
    ],
  },
  {
    id: "ecosystem",
    label: "Company & Ecosystem",
    columns: [
      {
        title: "Quinn Daisies Technology Division",
        headerIcon: "domain",
        items: [
          {
            title: "About Us (Technology)",
            description: "Our polyglot engineering culture, leadership & global delivery centers",
            to: "/technology-about-us",
            icon: "groups",
          },
          {
            title: "Contact Us (Technology & RFP Desk)",
            description: "Submit an RFP/RFQ, request an architecture review or book a consultation",
            to: "/technology-contact-us",
            icon: "support_agent",
          },
          {
            title: "Legal & Compliance",
            description: "Master terms, data governance, cybersecurity SLAs & privacy commitments",
            to: "/tech-legal",
            icon: "gavel",
          },
        ],
      },
      {
        title: "Global Enterprise Operations",
        headerIcon: "local_shipping",
        items: [
          {
            title: "Main Logistics & Trade Portal",
            description: "Switch to Quinn Daisies Global Logistics, Ocean Freight & Supply Chain",
            to: "/",
            icon: "local_shipping",
          },
          {
            title: "Global Footprint & Locations",
            description: "Offices in Frederick, Maryland, USA & Ikeja, Lagos State, Nigeria",
            to: "/technology-contact-us",
            icon: "public",
          },
        ],
      },
    ],
    showcases: [
      {
        badge: "HEADQUARTERS & CULTURE",
        title: "Engineering Culture & Leadership",
        description: "Learn about our Maryland engineering headquarters, polyglot software philosophy, and mission.",
        image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_5hhg775hhg775hhg.jpg?alt=media&token=0fdeef16-5b5d-46ca-825e-7c25caaabc67",
        to: "/technology-about-us",
        linkText: "Meet the Team",
      },
      {
        badge: "CONGLOMERATE PORTAL",
        title: "Quinn Daisies Global Logistics",
        description: "Switch seamlessly into our international multimodal freight forwarding and maritime supply network.",
        image: "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_uyacyjuyacyjuyac.jpg?alt=media&token=28099705-d49d-4974-a66a-87c3b04f9752",
        to: "/",
        linkText: "Visit Logistics Hub",
      },
    ],
  },
];

const ALL_SEARCHABLE_ITEMS = [
  ...QUINN_TECH_PAGES.map((p) => ({
    title: p.title,
    category: p.badge,
    to: p.path,
    keywords: p.keywords,
  })),
  {
    title: "SAM.gov, Maryland eMMA & UNGM Contract Writing",
    category: "GovCon & RFPs",
    to: "/contract-procurement-and-writing",
    keywords: "sam.gov ungm maryland government emma rfp rfq rfi proposal writing shipley far dfars naics",
  },
  {
    title: "SEO & Digital Marketing Hub",
    category: "Search & Growth",
    to: "/seo-and-digital-marketing",
    keywords: "seo digital marketing core web vitals json-ld analytics",
  },
  {
    title: "AI & Application Development Hub",
    category: "AI & Multi-Platform",
    to: "/ai-and-application-development",
    keywords: "ai application development rag llm kivy flet kotlin .net",
  },
  {
    title: "Workforce Development & IT Support Hub",
    category: "Accelerators & SLA",
    to: "/workforce-development-and-it-support",
    keywords: "workforce development it support helpdesk sre training",
  },
];

const NavItemIcon = ({ type }) => {
  let iconName = type || "terminal";
  switch (type) {
    case "cloud": iconName = "cloud"; break;
    case "ai": iconName = "psychology"; break;
    case "search": iconName = "search"; break;
    case "support": iconName = "headset_mic"; break;
    case "shield": iconName = "verified_user"; break;
    case "corp": iconName = "corporate_fare"; break;
    case "mission": iconName = "rocket_launch"; break;
    case "store": iconName = "storefront"; break;
    case "chart": iconName = "bar_chart"; break;
    case "globe": iconName = "language"; break;
    case "truck": iconName = "local_shipping"; break;
    case "code": iconName = "code"; break;
    case "react": iconName = "web"; break;
    case "jvm": iconName = "phone_android"; break;
    case "dotnet": iconName = "desktop_windows"; break;
    case "python": iconName = "hub"; break;
    default:
      iconName = type || "terminal";
      break;
  }
  return (
    <span
      className="material-symbols-outlined nav-symbol-icon"
      style={{ fontSize: 20, lineHeight: 1, display: "inline-flex", alignItems: "center" }}
    >
      {iconName}
    </span>
  );
};

/* ==========================================================================
   EXACT DEVSITE HEADER REPLICA (https://developers.google.com/community/accelerators)
   Styled in the Quinn Daisies Codebase Color Scheme (#2b1600, #f9a144, #ffffff)
   ========================================================================== */
export const QuinnDevsiteHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);
  const headerRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const progressBarRef = useRef(null);

  useQuinnTechMotion(location.pathname, progressBarRef);

  // Scroll detection: transparent when at top, brings up background once scrolling starts
  useEffect(() => {
    const checkScroll = () => {
      const top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      setIsScrolled(top > 15);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    // Check periodically for smooth scroll wrappers
    const interval = setInterval(checkScroll, 250);

    return () => {
      window.removeEventListener("scroll", checkScroll);
      clearInterval(interval);
    };
  }, []);

  const handleDropdownEnter = (menuId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(menuId);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileDrawerOpen(false);
    setSearchFocused(false);
  }, [location.pathname, location.hash]);

  // Press '/' to focus search input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "/" &&
        document.activeElement !== searchInputRef.current &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === "Escape") {
        setOpenDropdown(null);
        setSearchFocused(false);
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredSearchItems = searchQuery.trim()
    ? ALL_SEARCHABLE_ITEMS.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : ALL_SEARCHABLE_ITEMS.slice(0, 6);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredSearchItems.length > 0) {
      navigate(filteredSearchItems[0].to);
      setSearchFocused(false);
      setSearchQuery("");
    }
  };

  return (
    <header
      className={`devsite-header ${isScrolled ? "devsite-header--scrolled" : "devsite-header--transparent"} ${openDropdown ? "devsite-header--dropdown-active" : ""}`}
      role="banner"
      ref={headerRef}
    >
      <div className="devsite-header--inner">
        <div className="devsite-top-logo-row-wrapper-wrapper">
          <div className="devsite-top-logo-row-wrapper">
            <div className="devsite-top-logo-row">
              {/* Brand Logo with alive hover glow */}
              <div className="devsite-product-name-wrapper">
                <Link to="/" className="devsite-site-logo-link" aria-label="Quinn Daisies Home">
                  <img
                    className="devsite-site-logo"
                    alt="Quinn Daisies Logo"
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg"
                  />
                </Link>
              </div>

              {/* Center Tabs Navigation */}
              <div className="devsite-top-logo-row-middle">
                <div className="devsite-header-upper-tabs">
                  <nav className="devsite-tabs-wrapper upper-tabs" aria-label="Primary Navigation">
                    {DEVSITE_UPPER_DROPDOWNS.map((menu) => {
                      const isOpen = openDropdown === menu.id;
                      const hasActiveChild = menu.columns.some((c) =>
                        c.items.some((i) => i.to !== "/" && i.to === location.pathname)
                      );
                      return (
                        <div
                          key={menu.id}
                          className="devsite-tab"
                          onMouseEnter={() => handleDropdownEnter(menu.id)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="devsite-dropdown devsite-dropdown-full">
                            <button
                              type="button"
                              className={`devsite-tabs-content devsite-dropdown-toggle ${isOpen ? "active" : ""} ${hasActiveChild ? "has-active-child" : ""}`}
                              aria-expanded={isOpen}
                              onClick={() => setOpenDropdown(isOpen ? null : menu.id)}
                            >
                              <span>{menu.label}</span>
                            </button>

                            {/* FULL-WIDTH MEGA DROPDOWN PANEL SPANNING ENTIRE PAGE WIDTH */}
                            <div
                              className={`devsite-tabs-dropdown ${isOpen ? "open" : ""}`}
                              aria-hidden={!isOpen}
                              onMouseEnter={() => handleDropdownEnter(menu.id)}
                              onMouseLeave={handleDropdownLeave}
                            >
                              <div className="devsite-tabs-dropdown-inner">
                                <div className="devsite-tabs-dropdown-content">
                                  {/* Left: Categorized Navigation Columns */}
                                  <div className="devsite-tabs-dropdown-nav-columns">
                                    {menu.columns.map((col) => (
                                      <div key={col.title} className="devsite-tabs-dropdown-column">
                                        <div className="devsite-nav-column-header">
                                          <span className="material-symbols-outlined devsite-nav-column-icon" style={{ fontSize: 19 }}>
                                            {col.headerIcon}
                                          </span>
                                          <span className="devsite-nav-title">{col.title}</span>
                                        </div>
                                        <ul className="devsite-tabs-dropdown-section">
                                          {col.items.map((item) => {
                                            const isCurrentPage = location.pathname === item.to;
                                            return (
                                              <li key={item.title} className="devsite-nav-item">
                                                <Link
                                                  to={item.to}
                                                  className={`devsite-nav-item-link ${isCurrentPage ? "devsite-nav-item-link--current" : ""}`}
                                                  onClick={() => setOpenDropdown(null)}
                                                >
                                                  <div className="devsite-nav-item-icon-container">
                                                    <NavItemIcon type={item.icon} />
                                                  </div>
                                                  <div className="devsite-nav-item-column-container">
                                                    <div className="devsite-nav-item-title">
                                                      <span>{item.title}</span>
                                                      {isCurrentPage && <span className="devsite-active-pill">ACTIVE</span>}
                                                    </div>

                                                    <div className="devsite-nav-item-description">{item.description}</div>
                                                  </div>

                                                  <div className="devsite-nav-item-icon-container">
                                                    <span className="material-symbols-outlined devsite-item-arrow" style={{ fontSize: 16 }}>
                                                      arrow_forward
                                                    </span>
                                                  </div>
                                                </Link>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Right: Featured Showcase Cards WITH IMAGES */}
                                  <div className="devsite-dropdown-showcases-wrapper">
                                    <div className="devsite-showcases-header">
                                      <span className="material-symbols-outlined" style={{ fontSize: 18, color: "var(--qd-amber-deep)" }}>
                                        auto_awesome
                                      </span>
                                      <span>FEATURED CAPABILITIES &amp; CASE STUDIES</span>
                                    </div>
                                    <div className="devsite-showcases-grid">
                                      {menu.showcases.map((card) => (
                                        <Link
                                          key={card.title}
                                          to={card.to}
                                          className="devsite-showcase-card"
                                          onClick={() => setOpenDropdown(null)}
                                        >
                                          <div className="devsite-showcase-image-wrapper">
                                            <img
                                              src={card.image}
                                              alt={card.title}
                                              className="devsite-showcase-image"
                                              loading="lazy"
                                            />
                                            <div className="devsite-showcase-image-overlay" />
                                            <span className="devsite-showcase-badge">{card.badge}</span>
                                          </div>
                                          <div className="devsite-showcase-body">
                                            <div className="devsite-showcase-title">{card.title}</div>
                                            <p className="devsite-showcase-desc">{card.description}</p>
                                            <span className="devsite-showcase-link">
                                              <span>{card.linkText || "Explore Solution"}</span>
                                              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
                                                arrow_forward
                                              </span>
                                            </span>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="devsite-tab">
                      <Link
                        to="/technology-programs"
                        className={`devsite-tabs-content ${location.pathname === "/technology-programs" ? "active" : ""}`}
                      >
                        Programs
                      </Link>
                    </div>

                    <div className="devsite-tab">
                      <Link
                        to="/technology-products"
                        className={`devsite-tabs-content ${location.pathname === "/technology-products" ? "active" : ""}`}
                      >
                        Products
                      </Link>
                    </div>
                  </nav>
                </div>

                {/* Quick Search Form */}
                <form className="devsite-search-form" onSubmit={handleSearchSubmit} role="search">
                  <div className="devsite-search-container">
                    <div className={`devsite-searchbox ${searchFocused ? "focused" : ""}`}>
                      <div className="devsite-search-input-container">
                        <span
                          className="material-symbols-outlined devsite-search-ai-image"
                          style={{ fontSize: 20, color: "var(--qd-amber-deep)" }}
                          aria-hidden="true"
                        >
                          travel_explore
                        </span>
                        <input
                          ref={searchInputRef}
                          type="text"
                          className="devsite-search-field devsite-search-query"
                          name="q"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          onFocus={() => setSearchFocused(true)}
                          placeholder="Search .NET, Python, SAM.gov..."
                          aria-label="Search Quinn Daisies Technology"
                          autoComplete="off"
                        />
                        <kbd className="devsite-search-shortcut-icon" aria-hidden="true">
                          /
                        </kbd>
                      </div>

                      {searchFocused && (
                        <div className="devsite-search-popout" role="listbox">
                          <div className="devsite-search-popout-header">
                            Quick Jump — Technology &amp; Platforms
                          </div>
                          {filteredSearchItems.map((item) => (
                            <Link
                              key={item.title}
                              to={item.to}
                              className="devsite-search-popout-item"
                              onClick={() => {
                                setSearchFocused(false);
                                setSearchQuery("");
                              }}
                            >
                              <span className="devsite-search-popout-title">{item.title}</span>
                              <span className="devsite-search-popout-badge">{item.category}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>

              <div className="devsite-header-right-actions">
                <Link to="/technology-contact-us" className="devsite-top-action-cta">
                  Consultation
                </Link>
              </div>

              <button
                type="button"
                id="devsite-hamburger-menu"
                className="devsite-header-icon-button"
                aria-label="Open menu"
                aria-expanded={mobileDrawerOpen}
                onClick={() => setMobileDrawerOpen((prev) => !prev)}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
                  {mobileDrawerOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* GSAP Scroll Reading Progress Bar pinned at bottom of single-tier navbar */}
        <div className="qd-scroll-progress-track" aria-hidden="true">
          <div className="qd-scroll-progress-bar" ref={progressBarRef} />
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileDrawerOpen && (
        <div className="devsite-mobile-drawer" role="dialog" aria-label="Mobile Navigation">
          {DEVSITE_UPPER_DROPDOWNS.map((group) => (
            <div key={group.id} className="devsite-mobile-drawer-section">
              <div className="devsite-mobile-drawer-title">{group.label}</div>
              {group.columns
                .flatMap((c) => c.items)
                .map((item) => (
                  <Link
                    key={item.title}
                    to={item.to}
                    className="devsite-mobile-drawer-link"
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <NavItemIcon type={item.icon} />
                      <span>{item.title}</span>
                    </div>
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                  </Link>
                ))}
            </div>
          ))}

          <div className="devsite-mobile-drawer-section">
            <div className="devsite-mobile-drawer-title">Direct Programs &amp; Products</div>
            <Link
              to="/technology-programs"
              className="devsite-mobile-drawer-link"
              onClick={() => setMobileDrawerOpen(false)}
            >
              <span>Technology Programs</span>
              <span className="qd-tech-subnav-badge">ACCELERATORS</span>
            </Link>
            <Link
              to="/technology-products"
              className="devsite-mobile-drawer-link"
              onClick={() => setMobileDrawerOpen(false)}
            >
              <span>Technology Products</span>
              <span className="qd-tech-subnav-badge">MODULES</span>
            </Link>
          </div>

          <div className="devsite-mobile-drawer-actions">
            <Link
              to="/contract-procurement-and-writing"
              className="glue-button glue-button--medium-emphasis"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMobileDrawerOpen(false)}
            >
              GovCon &amp; RFPs
            </Link>
            <Link
              to="/technology-contact-us"
              className="glue-button glue-button--high-emphasis"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => setMobileDrawerOpen(false)}
            >
              Book Engineering Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

/* Alias QuinnTechSubnav to QuinnDevsiteHeader so any existing references work seamlessly */
export const QuinnTechSubnav = QuinnDevsiteHeader;

/* Exact 210x22 Striped Tape SVG — Quinn Daisies Warm Amber (#f9a144) with horizontal slide */
export const StripeTape210 = ({ fill = "#f9a144", className = "", style = {} }) => (
  <svg
    role="presentation"
    aria-hidden="true"
    width="210"
    height="22"
    viewBox="0 0 210 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`qd-stripe-tape-210 tape-slide-lr ${className}`.trim()}
    style={style}
  >
    <g>
      <path d="M0.00486111 0.00195312L0 0.00681424V3.44362L3.44167 0.00195312H0.00486111Z" fill={fill} />
      <path d="M8.30278 0.00195312L0 8.30473V11.7415L11.7396 0.00195312H8.30278Z" fill={fill} />
      <path d="M17.0722 0.00195312L0 17.0742V20.511L20.509 0.00195312H17.0722Z" fill={fill} />
      <path d="M25.8398 0.00195312L4.83984 21.002H8.27665L29.2766 0.00195312H25.8398Z" fill={fill} />
      <path d="M34.6094 0.00195312L13.6094 21.002H17.0462L38.0462 0.00195312H34.6094Z" fill={fill} />
      <path d="M43.3789 0.00195312L22.3789 21.002H25.8157L46.8157 0.00195312H43.3789Z" fill={fill} />
      <path d="M52.1484 0.00195312L31.1484 21.002H34.5852L55.5852 0.00195312H52.1484Z" fill={fill} />
      <path d="M60.918 0.00195312L39.918 21.002H43.3596L64.3548 0.00195312H60.918Z" fill={fill} />
      <path d="M69.6904 0.00195312L48.6953 21.002H52.1321L73.1272 0.00195312H69.6904Z" fill={fill} />
      <path d="M78.46 0.00195312L57.4648 21.002H60.9016L81.8968 0.00195312H78.46Z" fill={fill} />
      <path d="M87.2295 0.00195312L66.2344 21.002H69.6712L90.6663 0.00195312H87.2295Z" fill={fill} />
      <path d="M95.999 0.00195312L75.0039 21.002H78.4407L99.4407 0.00195312H95.999Z" fill={fill} />
      <path d="M104.773 0.00195312L83.7734 21.002H87.2102L108.21 0.00195312H104.773Z" fill={fill} />
      <path d="M113.539 0.00195312L92.5391 21.002H95.9759L116.976 0.00195312H113.539Z" fill={fill} />
      <path d="M122.309 0.00195312L101.309 21.002H104.745L125.745 0.00195312H122.309Z" fill={fill} />
      <path d="M131.078 0.00195312L110.078 21.002H113.515L134.515 0.00195312H131.078Z" fill={fill} />
      <path d="M139.848 0.00195312L118.848 21.002H122.284L143.284 0.00195312H139.848Z" fill={fill} />
      <path d="M148.617 0.00195312L127.617 21.002H131.054L152.054 0.00195312H148.617Z" fill={fill} />
      <path d="M157.387 0.00195312L136.387 21.002H139.824L160.824 0.00195312H157.387Z" fill={fill} />
      <path d="M166.156 0.00195312L145.156 21.002H148.593L169.593 0.00195312H166.156Z" fill={fill} />
      <path d="M174.926 0.00195312L153.926 21.002H157.363L178.363 0.00195312H174.926Z" fill={fill} />
      <path d="M183.695 0.00195312L162.695 21.002H166.132L187.132 0.00195312H183.695Z" fill={fill} />
      <path d="M192.465 0.00195312L171.465 21.002H174.902L195.902 0.00195312H192.465Z" fill={fill} />
      <path d="M201.234 0.00195312L180.234 21.002H183.671L204.671 0.00195312H201.234Z" fill={fill} />
      <path d="M209.999 0.00585938L189.004 21.001H192.441L209.999 3.44267V0.00585938Z" fill={fill} />
      <path d="M209.999 8.77539L197.773 21.0011H201.21L209.999 12.2122V8.77539Z" fill={fill} />
      <path d="M209.999 17.5449L206.543 21.0012H209.98L209.999 20.9817V17.5449Z" fill={fill} />
    </g>
  </svg>
);

/* Exact 83x21 Striped Tape SVG with animated 5px-10px top-to-bottom movement */
export const StripeTape83 = ({ fill = "#f9a144", className = "", style = {} }) => (
  <svg
    role="presentation"
    aria-hidden="true"
    width="83"
    height="21"
    viewBox="0 0 83 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`qd-stripe-tape-83 tape-slide-tb ${className}`.trim()}
    style={style}
  >
    <path d="M0 0L0 3.42863L3.24487 0L0 0Z" fill={fill} />
    <path d="M8.29399 0L0 8.76368L0 12.202L11.5481 0L8.29399 0Z" fill={fill} />
    <path d="M16.5972 0L0 17.5371L0 20.9754L19.8513 0L16.5972 0Z" fill={fill} />
    <path d="M24.9016 0L5.02734 20.9998H8.28142L28.1557 0L24.9016 0Z" fill={fill} />
    <path d="M33.2024 0L13.3281 20.9998H16.5822L36.4565 0L33.2024 0Z" fill={fill} />
    <path d="M41.5071 0L21.6328 20.9998H24.8869L44.7611 0L41.5071 0Z" fill={fill} />
    <path d="M49.8079 0L29.9336 20.9998H33.1923L53.0619 0L49.8079 0Z" fill={fill} />
    <path d="M58.1119 0L38.2422 20.9998H41.4963L61.3659 0L58.1119 0Z" fill={fill} />
    <path d="M66.4165 0L46.5469 20.9998H49.801L69.6706 0L66.4165 0Z" fill={fill} />
    <path d="M74.7212 0L54.8516 20.9998H58.1056L77.9753 0L74.7212 0Z" fill={fill} />
    <path d="M66.4064 20.9989L82.999 3.4618V0.0234375L63.1523 20.9989H66.4064Z" fill={fill} />
    <path d="M74.7111 20.9989L83.0005 12.2352V8.79688L71.457 20.9989H74.7111Z" fill={fill} />
    <path d="M82.9981 20.9989V17.5703L79.7578 20.9989H82.9981Z" fill={fill} />
  </svg>
);

/* Exact 91x23 Striped Tape SVG with animated 5px-10px top-to-bottom movement */
export const StripeTape91 = ({ fill = "#f9a144", className = "", style = {} }) => (
  <svg
    role="presentation"
    aria-hidden="true"
    width="91"
    height="23"
    viewBox="0 0 91 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`qd-stripe-tape-91 tape-slide-tb ${className}`.trim()}
    style={style}
  >
    <path d="M0 0V3.73971L3.53928 0H0Z" fill={fill} />
    <path d="M9.04649 0L0 9.5588V13.3091L12.5958 0H9.04649Z" fill={fill} />
    <path d="M18.103 0L0 19.1282V22.8785L21.6523 0H18.103Z" fill={fill} />
    <path d="M27.1594 0L5.48193 22.905H9.03125L30.7087 0H27.1594Z" fill={fill} />
    <path d="M36.2165 0L14.5391 22.905H18.0884L39.7658 0H36.2165Z" fill={fill} />
    <path d="M45.2721 0L23.5947 22.905H27.144L48.8215 0H45.2721Z" fill={fill} />
    <path d="M54.3283 0L32.6509 22.905H36.2052L57.8776 0H54.3283Z" fill={fill} />
    <path d="M63.3858 0L41.7134 22.905H45.2627L66.9351 0H63.3858Z" fill={fill} />
    <path d="M72.4424 0L50.77 22.905H54.3193L75.9918 0H72.4424Z" fill={fill} />
    <path d="M81.4991 0L59.8267 22.905H63.376L85.0484 0H81.4991Z" fill={fill} />
    <path d="M72.4316 22.9049L90.5296 3.77668V0.0263672L68.8823 22.9049H72.4316Z" fill={fill} />
    <path d="M81.4883 22.9053L90.5298 13.3465V9.59619L77.939 22.9053H81.4883Z" fill={fill} />
    <path d="M90.5299 22.9052V19.1655L86.9956 22.9052H90.5299Z" fill={fill} />
  </svg>
);

/* Exact 79x17 Striped Tape SVG with animated 5px-10px top-to-bottom movement */
export const StripeTape79 = ({ fill = "#f9a144", className = "", style = {} }) => (
  <svg
    role="presentation"
    aria-hidden="true"
    width="79"
    height="17"
    viewBox="0 0 79 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`qd-stripe-tape-79 tape-slide-tb ${className}`.trim()}
    style={style}
  >
    <path d="M0 0L0 2.76391L3.08837 0L0 0Z" fill={fill} />
    <path d="M7.89396 0L0 7.06464L0 9.83639L10.9911 0L7.89396 0Z" fill={fill} />
    <path d="M15.7967 0L0 14.1371L0 16.9089L18.8938 0L15.7967 0Z" fill={fill} />
    <path d="M23.7009 0L4.78516 16.9285H7.88229L26.798 0L23.7009 0Z" fill={fill} />
    <path d="M31.6032 0L12.6875 16.9285H15.7846L34.7004 0L31.6032 0Z" fill={fill} />
    <path d="M39.5056 0L20.5898 16.9285H23.687L42.6027 0L39.5056 0Z" fill={fill} />
    <path d="M47.4079 0L28.4922 16.9285H31.5937L50.505 0L47.4079 0Z" fill={fill} />
    <path d="M55.3098 0L36.3984 16.9285H39.4956L58.4069 0L55.3098 0Z" fill={fill} />
    <path d="M63.2121 0L44.3008 16.9285H47.3979L66.3093 0L63.2121 0Z" fill={fill} />
    <path d="M71.1145 0L52.2031 16.9285H55.3003L74.2116 0L71.1145 0Z" fill={fill} />
    <path d="M63.2026 16.9284L78.9949 2.79128V0.0195313L60.1055 16.9284H63.2026Z" fill={fill} />
    <path d="M71.105 16.9287L78.9946 9.86404V7.09229L68.0078 16.9287H71.105Z" fill={fill} />
    <path d="M78.9981 16.9285V14.1646L75.9141 16.9285H78.9981Z" fill={fill} />
  </svg>
);

/* Exact 26x92 Vertical Striped Tape SVG with animated 5px-10px top-to-bottom movement */
export const StripeTapeVertical26 = ({ fill = "#f9a144", className = "", style = {} }) => (
  <svg
    role="presentation"
    aria-hidden="true"
    width="26"
    height="92"
    viewBox="0 0 26 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`qd-stripe-tape-vertical tape-slide-tb ${className}`.trim()}
    style={style}
  >
    <path d="M2.72656 91.1792L6.46457 91.0666L2.61997 87.6416L2.72656 91.1792Z" fill={fill} />
    <path d="M2.45412 82.1369L12.281 90.8914L16.0296 90.7784L2.34723 78.5891L2.45412 82.1369Z" fill={fill} />
    <path d="M2.18137 73.0844L21.8461 90.6032L25.5947 90.4902L2.07448 69.5367L2.18137 73.0844Z" fill={fill} />
    <path d="M1.90868 64.0326L25.4562 85.0104L25.3493 81.4627L1.80179 60.4849L1.90868 64.0326Z" fill={fill} />
    <path d="M1.63573 54.9789L25.1832 75.9567L25.0763 72.409L1.52884 51.4312L1.63573 54.9789Z" fill={fill} />
    <path d="M1.36327 45.9272L24.9108 66.905L24.8039 63.3573L1.25638 42.3795L1.36327 45.9272Z" fill={fill} />
    <path d="M1.09032 36.8754L24.6378 57.8532L24.5308 54.3005L0.983433 33.3277L1.09032 36.8754Z" fill={fill} />
    <path d="M0.817526 27.8223L24.3649 48.7951L24.258 45.2474L0.710635 24.2746L0.817526 27.8223Z" fill={fill} />
    <path d="M0.545066 18.7696L24.0924 39.7424L23.9855 36.1947L0.438174 15.2219L0.545066 18.7696Z" fill={fill} />
    <path d="M0.272117 9.71685L23.8195 30.6896L23.7126 27.1419L0.165225 6.16914L0.272117 9.71685Z" fill={fill} />
    <path d="M23.44 18.0905L3.77539 0.576754L0.0267788 0.689699L23.5469 21.6382L23.44 18.0905Z" fill={fill} />
    <path d="M23.1674 9.03783L13.3406 0.288297L9.592 0.401242L23.2743 12.5856L23.1674 9.03783Z" fill={fill} />
    <path d="M22.8952 0.000749138L19.1572 0.113375L23.0017 3.53341L22.8952 0.000749138Z" fill={fill} />
  </svg>
);

/* Exact 320x40 Striped Tape SVG with animated 5px-10px top-to-bottom movement */
export const StripeTapeGrey320 = ({ fill = "#6e4720", className = "", style = {} }) => (
  <svg
    role="presentation"
    aria-hidden="true"
    width="320"
    height="40"
    viewBox="0 0 320 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`qd-stripe-tape-grey320 tape-slide-tb ${className}`.trim()}
    style={style}
  >
    <path d="M0 0V6.8L6.8 0H0Z" fill={fill} />
    <path d="M20.6 0L0 20.6V27.6L27.6 0H20.6Z" fill={fill} />
    <path d="M41.5 0L1.5 40H8.4L48.4 0H41.5Z" fill={fill} />
    <path d="M62.3008 0L22.3008 40H29.2008L69.2008 0H62.3008Z" fill={fill} />
    <path d="M83.0996 0L43.0996 40H49.9996L89.9996 0H83.0996Z" fill={fill} />
    <path d="M103.9 0L63.9004 40H70.9004L110.9 0H103.9Z" fill={fill} />
    <path d="M124.699 0L84.6992 40H91.6992L131.699 0H124.699Z" fill={fill} />
    <path d="M145.6 0L105.6 40H112.5L152.5 0H145.6Z" fill={fill} />
    <path d="M166.4 0L126.4 40H133.3L173.3 0H166.4Z" fill={fill} />
    <path d="M187.199 0L147.199 40H154.099L194.099 0H187.199Z" fill={fill} />
    <path d="M208 0L168 40H175L215 0H208Z" fill={fill} />
    <path d="M228.801 0L188.801 40H195.801L235.801 0H228.801Z" fill={fill} />
    <path d="M249.699 0L209.699 40H216.599L256.599 0H249.699Z" fill={fill} />
    <path d="M270.5 0L230.5 40H237.4L277.4 0H270.5Z" fill={fill} />
    <path d="M291.301 0L251.301 40H258.301L298.301 0H291.301Z" fill={fill} />
    <path d="M312.1 0L272.1 40H279.1L319.1 0H312.1Z" fill={fill} />
    <path d="M293 40H299.9L320 19.9V13L293 40Z" fill={fill} />
    <path d="M320.001 39.9998V33.7998L313.801 39.9998H320.001Z" fill={fill} />
  </svg>
);

/* Google Font Checkmark Icon in Quinn Daisies Amber/Espresso Palette */
export const GreenTickSvg = ({ fill = "#f9a144" }) => (
  <span
    className="material-symbols-outlined"
    style={{
      fontSize: "var(--qd-font-size-h5, 1.4em)",
      color: fill,
      flexShrink: 0,
      marginTop: 2,
      marginRight: 8,
      lineHeight: 1,
      verticalAlign: "middle",
      display: "inline-flex",
    }}
  >
    check_circle
  </span>
);

/* Exact 35x26 Quotation Mark SVG in Quinn Daisies Warm Amber (#f9a144) */
export const QuoteMarkPinkSvg = ({ flip = false, fill = "#f9a144" }) => (
  <svg
    role="presentation"
    aria-hidden="true"
    width="35"
    height="26"
    viewBox="0 0 35 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={flip ? { transform: "rotate(180deg)" } : undefined}
  >
    <path
      d="M34.966 16.3704C34.9324 15.6481 34.6632 14.8915 34.192 14.2725C33.7209 13.6534 33.1487 13.2751 32.5766 13.0344C31.4324 12.5873 30.4228 12.5873 29.5141 12.6561C28.6055 12.7593 27.8314 12.9656 27.1584 13.2064C26.4853 13.4471 25.9132 13.6878 25.4757 13.963C24.7689 14.3413 24.3314 14.6852 24.1295 14.8228C24.1632 14.6508 24.2305 14.5132 24.2641 14.3757C24.5334 13.5159 24.8362 12.6905 25.1728 11.8651C25.8459 10.2487 26.6535 8.76984 27.3939 7.49735C28.9084 4.95238 30.2209 3.2328 30.5237 2.88889C30.692 2.68254 30.2882 2.26984 29.9853 2.0291C29.1439 1.27249 27.5959 0 27.2257 0C26.9564 0 26.418 0.687831 25.9805 1.37566C25.543 2.06349 25.1728 2.75132 25.1728 2.75132C25.1728 2.75132 24.5334 3.78307 23.9276 4.91799C23.2882 6.01852 22.716 7.25661 22.5814 7.46296C22.5478 7.53175 22.1776 8.21958 21.6391 9.42328C21.1007 10.627 20.3939 12.3466 19.8891 14.582C19.6535 15.6825 19.4516 16.9206 19.418 18.2619C19.418 18.4339 19.418 18.6058 19.418 18.7778C19.418 18.9841 19.4516 19.2249 19.4853 19.4312C19.4853 19.6376 19.5526 19.8783 19.6199 20.119C19.6535 20.3598 19.7545 20.6005 19.8555 20.8069C19.9564 21.0476 20.0574 21.254 20.2257 21.4947C20.3603 21.7355 20.5285 21.9074 20.6968 22.1138C21.0334 22.4921 21.4372 22.8016 21.841 23.0423C22.6487 23.5238 23.4564 23.7302 24.1968 23.8333C24.9709 23.9709 25.6776 23.9709 26.3843 23.9709C26.5526 23.9709 26.7882 23.9365 26.9901 23.9365C27.192 23.9365 27.3939 23.9021 27.5959 23.8677C27.7978 23.8333 27.966 23.7989 28.168 23.7646C28.3699 23.7302 28.5382 23.6958 28.7064 23.627C29.4468 23.4206 30.1199 23.1455 30.793 22.8016C31.9035 22.2169 32.9805 21.4603 33.8218 20.3598L34.1247 19.9471C34.2257 19.8095 34.293 19.6376 34.3939 19.5C34.5622 19.1905 34.6968 18.8466 34.7978 18.537C34.8651 18.3651 34.8987 18.1931 34.9324 18.0212C34.966 17.8492 34.9997 17.6772 35.0334 17.5053C35.0334 17.3333 35.067 17.1614 35.067 16.9894C34.9997 16.7487 34.9997 16.5767 34.966 16.3704Z"
      fill={fill}
    />
    <path
      d="M15.3798 16.5092C15.0769 15.9589 14.6394 15.5118 14.1683 15.1679C13.6971 14.8584 13.226 14.6176 12.7548 14.5145C11.8125 14.2737 11.0048 14.2737 10.2644 14.3425C9.55769 14.4457 8.95192 14.6176 8.48077 14.7896C7.50481 15.1335 7 15.5118 6.93269 15.5462C6.59615 15.787 5.75481 16.3372 5.11538 17.1282C4.8125 17.4721 4.57692 17.8504 4.40865 18.1944C4.71154 16.6811 5.18269 15.1679 5.75481 13.7579C6.39423 12.1758 7.13462 10.7314 7.80769 9.45891C9.22115 6.94833 10.4327 5.26314 10.7019 4.91923C10.8702 4.71288 10.4327 4.33457 10.1298 4.09383C9.22115 3.33722 7.63942 2.09912 7.26923 2.13351C7 2.13351 6.49519 2.82134 6.09135 3.50918C5.6875 4.19701 5.35096 4.88484 5.35096 4.88484C5.35096 4.88484 5.21635 5.12558 4.98077 5.53828C4.77885 5.95097 4.47596 6.46685 4.17308 7.01711C3.60096 8.11764 3.0625 9.28695 2.92788 9.4933C2.89423 9.56209 2.55769 10.2155 2.05288 11.3848C1.64904 12.5541 1.00962 14.2393 0.504808 16.3372C0.269231 17.4034 0.0673077 18.6071 0 19.8795C0 20.2235 0 20.533 0 20.8769C0 21.0833 0.0336538 21.2896 0.0673077 21.5303C0.0673077 21.7367 0.168269 21.9774 0.201923 22.2182C0.235577 22.4589 0.336538 22.6653 0.4375 22.906C0.538462 23.1467 0.639423 23.3531 0.774038 23.5594C0.908654 23.7658 1.07692 23.9721 1.21154 24.1441C1.37981 24.3504 1.54808 24.488 1.75 24.66C2.49038 25.2446 3.29808 25.5541 4.07212 25.7605C4.8125 25.9325 5.55288 26.0012 6.25962 26.0356C6.42788 26.0356 6.59615 26.0356 6.76442 26.0356C6.93269 26.0356 7.10096 26.0356 7.30289 26.0356C7.70673 26.0012 8.07692 25.9668 8.44712 25.8981C9.15385 25.7605 9.82692 25.5541 10.5 25.279C11.6106 24.8319 12.6875 24.2473 13.6298 23.4563C14.101 23.0436 14.5385 22.5965 14.9087 22.0806C15.2788 21.5647 15.5817 20.9457 15.7837 20.3266C15.9856 19.6732 16.0192 18.9854 15.9519 18.3663C15.8846 17.6785 15.7163 17.0594 15.3798 16.5092Z"
      fill={fill}
    />
  </svg>
);

/* Google Font Grid & List View Icons */
export const GridIconSvg = ({ fill = "currentColor" }) => (
  <span
    className="material-symbols-outlined"
    style={{ fontSize: "var(--qd-font-size-h5, 1.4em)", color: fill, display: "inline-flex", alignItems: "center" }}
    aria-hidden="true"
  >
    grid_view
  </span>
);

export const ListIconSvg = ({ fill = "currentColor" }) => (
  <span
    className="material-symbols-outlined"
    style={{ fontSize: "var(--qd-font-size-h5, 1.4em)", color: fill, display: "inline-flex", alignItems: "center" }}
    aria-hidden="true"
  >
    view_list
  </span>
);

/* Interactive Google Glue Modal for Products, Kit Items, and Multimedia Library */
export const QuinnProductModal = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  const modalMarkup = (
    <div
      className="qd-glue-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="qd-modal-title"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99999,
      }}
    >
      <div className="qd-glue-modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="qd-glue-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 22 }}>close</span>
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          {item.icon && (
            <div className="featured-product-icon-box" style={{ width: 64, height: 64 }}>
              {item.icon}
            </div>
          )}
          <div>
            {item.eyebrow && (
              <span
                className="glue-eyebrow"
                style={{
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  color: "#c86d10",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                {item.eyebrow}
              </span>
            )}
            <h3 id="qd-modal-title" className="glue-headline glue-headline--headline-4" style={{ margin: 0 }}>
              {item.title}
            </h3>
          </div>
        </div>

        <p
          style={{
            fontSize: "var(--qd-font-size-body, 1em)",
            lineHeight: 1.65,
            color: "#3b3b3b",
            marginBottom: 20,
          }}
        >
          {item.description}
        </p>

        {item.architecture && (
          <div style={{ background: "#fff7ef", border: "1px solid rgba(249, 161, 68, 0.35)", borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <span
              className="glue-eyebrow"
              style={{
                fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                color: "#2b1600",
                fontWeight: 600,
                letterSpacing: "0.06em",
                display: "block",
                marginBottom: 8,
              }}
            >
              Quinn Daisies Architecture &amp; Stack Integration
            </span>
            <p style={{ margin: 0, color: "#3b3b3b", fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.6 }}>
              {item.architecture}
            </p>
          </div>
        )}

        {item.deliverables && item.deliverables.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <h4 className="glue-headline glue-headline--headline-5" style={{ marginBottom: 10 }}>
              Key Engineering Deliverables &amp; Capabilities
            </h4>
            <ul className="cloud-standards-list" style={{ marginBottom: 0 }}>
              {item.deliverables.map((deliv, idx) => (
                <li key={idx}>
                  <GreenTickSvg />
                  <span style={{ fontSize: "var(--qd-font-size-body, 1em)", lineHeight: 1.65, color: "#3b3b3b" }}>
                    {deliv}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.codebases && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {item.codebases.map((cb) => (
              <span
                key={cb}
                style={{
                  background: "#fff4e6",
                  color: "#2b1600",
                  border: "1px solid rgba(249, 161, 68, 0.45)",
                  padding: "4px 12px",
                  borderRadius: 999,
                  fontSize: "var(--qd-font-size-eyebrow, 0.8em)",
                  fontWeight: 500,
                }}
              >
                {cb}
              </span>
            ))}
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <Link
            to="/technology-contact-us"
            className="ApplicationButton glue-button glue-button--high-emphasis"
            onClick={onClose}
          >
            <span>Request Consultation</span>
            <span className="material-symbols-outlined">memory</span>
          </Link>
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(modalMarkup, document.body)
    : modalMarkup;
};

/* ==========================================================================
   GSAP INTERACTIVE ECOSYSTEM SLIDER & INFINITE TECH STACK MARQUEE
   Automatically rendered across all Quinn Daisies Technology & IT pages
   ========================================================================== */
const ECOSYSTEM_SLIDES = [
  {
    id: "sdlc-engineering",
    badge: "FULL-SDLC POLYGLOT ENGINEERING",
    title: "Production-grade architectures across 11 enterprise codebases",
    description:
      "We design, build, test, and operate high-throughput web, backend, desktop, and mobile systems in .NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, and Flet with automated CI/CD and 99.99% SLA telemetry.",
    metrics: [
      { value: "11+", label: "Core Codebases" },
      { value: "99.99%", label: "Production Uptime" },
      { value: "<85ms", label: "API P95 Latency" },
    ],
    tags: [".NET Core 9", "ASP.NET Core", "C# 13", "Python 3.12", "React 19", "Java Spring Boot"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_3kz8z63kz8z63kz8.jpg?alt=media&token=1e0442c2-4145-4878-b6e9-6d9924b2292f",
    ctaLabel: "Explore Software Engineering",
    ctaTo: "/software-development-and-engineering",
    secondaryLabel: "View Product Suite",
    secondaryTo: "/technology-products",
  },
  {
    id: "govcon-procurement",
    badge: "SAM.GOV • MARYLAND eMMA • UNGM TENDERS",
    title: "Government Contract Procurement & Shipley Proposal Engineering",
    description:
      "End-to-end public-sector capture management, FAR/DFARS & COMAR compliance matrices, Section L & M technical volumes, and socioeconomic teaming for U.S. Federal SAM.gov, State of Maryland eMMA, and United Nations (UNGM) solicitations.",
    metrics: [
      { value: "100%", label: "Compliance Matrix Coverage" },
      { value: "3 Tiers", label: "Federal • State • UNGM" },
      { value: "24/7", label: "Rapid RFP Capture Desk" },
    ],
    tags: ["SAM.gov Federal", "Maryland eMMA", "UNGM Multilateral", "Shipley Method", "FAR / DFARS", "Past Performance"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_ayn7h5ayn7h5ayn7.jpg?alt=media&token=781b1452-1062-47a4-8f5c-82eb5fb89f98",
    ctaLabel: "Explore Contract Procurement",
    ctaTo: "/contract-procurement-and-writing",
    secondaryLabel: "Submit Solicitation / RFP",
    secondaryTo: "/technology-contact-us",
  },
  {
    id: "ai-rag-agents",
    badge: "ARTIFICIAL INTELLIGENCE & AGENTIC WORKFLOWS",
    title: "Private RAG knowledge engines & autonomous multi-agent systems",
    description:
      "Deploy hallucination-guarded Retrieval-Augmented Generation (RAG), computer vision inspection, and multi-agent orchestration built on Python FastAPI, PyTorch, LangGraph, and C# Microsoft Semantic Kernel.",
    metrics: [
      { value: "Zero", label: "Public Model Data Leakage" },
      { value: "10x", label: "Document Triage Velocity" },
      { value: "SOC2", label: "Zero-Trust Guardrails" },
    ],
    tags: ["Python PyTorch", "C# Semantic Kernel", "Enterprise RAG", "Multi-Agent AI", "Vector Databases", "Computer Vision"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_drzqtgdrzqtgdrzq.jpg?alt=media&token=9048bd2a-8820-4b25-8412-29af037e03fa",
    ctaLabel: "Explore Artificial Intelligence",
    ctaTo: "/artificial-intelligence",
    secondaryLabel: "AI & App Development",
    secondaryTo: "/ai-and-application-development",
  },
  {
    id: "seo-geo-visibility",
    badge: "SEARCH ENGINE (SEO) & GENERATIVE ENGINE OPTIMIZATION (GEO)",
    title: "Command organic SERPs and AI Answer Engine citations simultaneously",
    description:
      "We engineer sub-second Core Web Vitals (<1.2s LCP), multi-entity Schema.org JSON-LD graphs, and /llms.txt knowledge architectures so Google Search, AI Overviews, Gemini, ChatGPT Search, Perplexity, and Claude cite your brand first.",
    metrics: [
      { value: "<1.2s", label: "Largest Contentful Paint" },
      { value: "6+ LLMs", label: "GEO Citation Coverage" },
      { value: "3.4x", label: "Qualified Pipeline Lift" },
    ],
    tags: ["Generative Engine Optimization", "Technical SEO", "Schema.org JSON-LD", "llms.txt Standard", "ABM & Paid Search", "Core Web Vitals"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_c4bf6ac4bf6ac4bf.jpg?alt=media&token=8ae19566-5ea0-4cde-892b-268cd74f7b34",
    ctaLabel: "Explore SEO & GEO",
    ctaTo: "/seo-and-geo",
    secondaryLabel: "Digital Marketing",
    secondaryTo: "/digital-marketing",
  },
  {
    id: "mobile-desktop-apps",
    badge: "MOBILE (KOTLIN / MAUI) & DESKTOP (WPF / KIVY / FLET)",
    title: "Offline-first field mobile apps & hardware-integrated desktop consoles",
    description:
      "From rugged Android barcode/telematics apps in Kotlin Jetpack Compose to multi-monitor industrial control workstations in C# WPF/WinUI 3, Python Kivy, and Python Flet.",
    metrics: [
      { value: "60fps", label: "GPU Native Rendering" },
      { value: "100%", label: "Offline SQLite Sync" },
      { value: "3 OS", label: "Windows • Linux • macOS" },
    ],
    tags: ["Kotlin Compose", "C# .NET MAUI & WPF", "Python Kivy", "Python Flet", "React Native", "Hardware Serial/USB"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_zi54buzi54buzi54.jpg?alt=media&token=9170ce27-fff0-4b6e-aec7-f22b2553db60",
    ctaLabel: "Explore Mobile Apps",
    ctaTo: "/mobile-application-development",
    secondaryLabel: "Explore Desktop Apps",
    secondaryTo: "/desktop-application-development",
  },
  {
    id: "cloud-it-workforce",
    badge: "CLOUD DEVOPS, 24/7 NOC/SOC & WORKFORCE ACADEMY",
    title: "Resilient multi-cloud infrastructure & role-based technical training",
    description:
      "Automate Kubernetes, Terraform, and Firebase/Cloud deployments while upskilling your engineering, cybersecurity, and procurement teams through hands-on Quinn Daisies Academy labs.",
    metrics: [
      { value: "<15m", label: "P1 Incident Response" },
      { value: "Zero-Trust", label: "IAM & Endpoint Posture" },
      { value: "Hands-On", label: "Cohort Engineering Labs" },
    ],
    tags: ["Kubernetes & Terraform", "Firebase & GCP", "AWS & Azure", "24/7 Managed IT", "Cybersecurity SOC", "Workforce Training"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2FGemini_Generated_Image_dgeb2cdgeb2cdgeb.jpg?alt=media&token=c020162c-0de0-4750-a995-ab4b61ccf9bf",
    ctaLabel: "Explore IT Solutions",
    ctaTo: "/it-solutions",
    secondaryLabel: "Workforce Training",
    secondaryTo: "/workforce-development-and-training",
  },
];

const MARQUEE_STACK_ITEMS = [
  { label: ".NET Core 9 & ASP.NET Core", tag: "Backend" },
  { label: "C# 13 Enterprise Microservices", tag: "Systems" },
  { label: "Python 3.12 AI, FastAPI & RAG", tag: "AI / ML" },
  { label: "React 19 & TypeScript", tag: "Frontend" },
  { label: "Java 21 Spring Boot & Kafka", tag: "Distributed" },
  { label: "Kotlin Jetpack Compose", tag: "Mobile" },
  { label: "Python Kivy & Flet", tag: "Desktop / Cross-Platform" },
  { label: "SAM.gov U.S. Federal Capture", tag: "GovCon" },
  { label: "Maryland eMMA Procurement", tag: "State Gov" },
  { label: "United Nations UNGM Tenders", tag: "Multilateral" },
  { label: "Generative Engine Optimization (GEO)", tag: "AI Visibility" },
  { label: "Technical SEO & Core Web Vitals", tag: "Organic Growth" },
  { label: "Kubernetes, Docker & Terraform", tag: "Cloud DevOps" },
  { label: "Firebase Hosting & Google Cloud", tag: "Edge Cloud" },
];

export const QuinnTechEcosystemSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideContentRef = useRef(null);
  const slideVisualRef = useRef(null);
  const slideProgressRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const marqueeTweenRef = useRef(null);
  const touchStartXRef = useRef(null);

  const animateToSlide = useCallback((nextIndex) => {
    setActiveIndex(nextIndex);

    if (slideContentRef.current && slideVisualRef.current) {
      gsap.killTweensOf([slideContentRef.current, slideVisualRef.current]);
      const tl = gsap.timeline();
      tl.fromTo(
        slideContentRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.52, ease: "power3.out" }
      ).fromTo(
        slideVisualRef.current,
        { opacity: 0, x: 26, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 0.56, ease: "power3.out" },
        "<0.05"
      );
    }
  }, []);

  const handleNext = useCallback(() => {
    animateToSlide((activeIndex + 1) % ECOSYSTEM_SLIDES.length);
  }, [activeIndex, animateToSlide]);

  const handlePrev = useCallback(() => {
    animateToSlide(
      (activeIndex - 1 + ECOSYSTEM_SLIDES.length) % ECOSYSTEM_SLIDES.length
    );
  }, [activeIndex, animateToSlide]);

  // Auto-advance timer with GSAP progress bar
  useEffect(() => {
    if (isPaused) {
      if (slideProgressRef.current) {
        gsap.killTweensOf(slideProgressRef.current);
      }
      return undefined;
    }

    if (slideProgressRef.current) {
      gsap.killTweensOf(slideProgressRef.current);
      gsap.fromTo(
        slideProgressRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 6.5, ease: "none" }
      );
    }

    const timer = setTimeout(() => {
      handleNext();
    }, 6500);

    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, handleNext]);

  // Infinite GSAP Marquee Ticker
  useEffect(() => {
    if (!marqueeTrackRef.current) return undefined;
    const tween = gsap.to(marqueeTrackRef.current, {
      xPercent: -50,
      duration: 38,
      ease: "none",
      repeat: -1,
    });
    marqueeTweenRef.current = tween;
    return () => {
      tween.kill();
    };
  }, []);

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches?.[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? touchStartXRef.current;
    const deltaX = endX - touchStartXRef.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) handleNext();
      else handlePrev();
    }
    touchStartXRef.current = null;
  };

  const activeSlide = ECOSYSTEM_SLIDES[activeIndex];

  return (
    <></>
  );
};

export const QuinnTechFooter = ({ showSlider = true }) => {
  return (
    <>
      {showSlider && <QuinnTechEcosystemSlider />}
      <footer className="glue-footer" role="contentinfo">
        {/* Upper Row: Follow us + 5 exact 24px social icons */}
        <section className="glue-footer__upper custom-footer--upper">
          <section className="glue-social">
            <div className="glue-social__group">
              <p className="glue-social__title glue-social__title--inline">Follow us</p>
              <ul className="glue-social__list glue-no-bullet" role="list">
                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Quinn Daisies Technology on Instagram"
                    title="Follow us on Instagram"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--24px glue-icon--social" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </li>
                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Quinn Daisies Technology on YouTube"
                    title="Follow us on YouTube"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--24px glue-icon--social" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </li>
                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Quinn Daisies Technology on LinkedIn"
                    title="Follow us on LinkedIn"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--24px glue-icon--social" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                </li>
                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Quinn Daisies Technology on Facebook"
                    title="Follow us on Facebook"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--24px glue-icon--social" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </a>
                </li>
                <li className="glue-social__item">
                  <a
                    className="glue-social__link"
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Quinn Daisies Technology on X (Twitter)"
                    title="Follow us on Twitter"
                  >
                    <svg role="presentation" aria-hidden="true" className="glue-icon glue-icon--24px glue-icon--social" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>

        {/* Middle 4-Column Site Links Grid (Exact structure of F: https://startup.google.com/programs/) */}
        <div
          className="glue-footer__site-links custom-footer__site-links"
          role="navigation"
          aria-label="Quinn Daisies Technology & IT Ecosystem Directory"
        >
          <div className="glue-footer__site-links-grid glue-footer__site-links-grid--4-col">
            {/* Column 1: Core Platforms, Programs, Products & Engineering */}
            <div className="glue-footer__site-links-column footer-menu-1">
              <ul className="glue-footer__site-links-list glue-no-bullet">
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/technology-programs" aria-label="Quinn Daisies Technology Programs page">
                    <span>Programs</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/technology-products" aria-label="Quinn Daisies Technology Products page">
                    <span>Products</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/technology-and-visibility" aria-label="Technology and Visibility Cloud page">
                    <span>Cloud &amp; Visibility</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/artificial-intelligence" aria-label="Artificial Intelligence and Gemini page">
                    <span>Artificial Intelligence (Gemini)</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/software-development-and-engineering" aria-label="Software Development and Engineering page">
                    <span>Software Development &amp; Engineering</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/application-development" aria-label="Application Development page">
                    <span>Application Development</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/mobile-application-development" aria-label="Mobile Application Development page">
                    <span>Mobile Application Development</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/desktop-application-development" aria-label="Desktop Application Development page">
                    <span>Desktop Application Development</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Government Contracting, Corporate Review, IT, Workforce, SEO/GEO & Company */}
            <div className="glue-footer__site-links-column footer-menu-2">
              <ul className="glue-footer__site-links-list glue-no-bullet">
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/contract-procurement-and-writing" aria-label="Contract Procurement and Writing Services page">
                    <span>Contract Procurement &amp; Writing (SAM.gov / UNGM / MD)</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/technology-corporate-review" aria-label="Technology Corporate Review page">
                    <span>Technology Corporate Review (Alumni)</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/it-solutions" aria-label="IT Solutions page">
                    <span>IT Solutions &amp; Infrastructure</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/workforce-development-and-training" aria-label="Workforce Development and Training page">
                    <span>Workforce Development &amp; Training</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/seo-and-geo" aria-label="SEO and GEO page">
                    <span>SEO &amp; GEO Optimization</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/digital-marketing" aria-label="Digital Marketing page">
                    <span>Digital Marketing</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/technology-about-us" aria-label="About us">
                    <span>About us</span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item">
                  <Link className="glue-footer__link" to="/technology-contact-us" aria-label="Contact us">
                    <span>Contact us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Exact Program & Government Contracting Callout from Design F */}
            <div className="glue-footer__site-links-column footer-menu-3">
              <ul className="glue-footer__site-links-list glue-no-bullet">
                <li className="glue-footer__site-links-list-item">
                  <p>
                    Looking for information on Quinn Daisies Government Contracting (SAM.gov, Maryland eMMA, UNGM) &amp; Cloud Modernization Programs?
                  </p>
                  <Link
                    className="glue-footer__link find-out-more-link"
                    to="/contract-procurement-and-writing"
                    aria-label="Find out more about Quinn Daisies Contract Procurement and Cloud Programs"
                  >
                    <span>Find out more </span>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: "middle", marginLeft: 4 }}>
                      open_in_new
                    </span>
                  </Link>
                </li>
                <li className="glue-footer__site-links-list-item" style={{ marginTop: 24 }}>
                  <p>
                    Looking for the Quinn Daisies Global Logistics, Freight Forwarding &amp; Supply Chain Ecosystem?
                  </p>
                  <a
                    className="glue-footer__link find-out-more-link"
                    href="https://quinndaisies.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Quinn Daisies Global Logistics Portal"
                  >
                    <span>Visit Logistics Ecosystem </span>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: "middle", marginLeft: 4 }}>
                      open_in_new
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Global Bar */}
        <section className="glue-footer__global">
          <div className="glue-footer__logo">
            <Link to="/technology-and-visibility" className="glue-footer__logo-link" aria-label="Quinn Daisies Technology Home">
              <img
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg"
                alt="Quinn Daisies Logo"
                className="glue-footer__logo-img"
              />
              <span>Quinn Daisies Technology &amp; IT</span>
            </Link>
          </div>

          <ul className="glue-footer__global-links glue-no-bullet">
            <li className="glue-footer__global-links-list-item">
              <Link className="glue-footer__link" to="/technology-about-us">
                About Quinn Daisies Tech
              </Link>
            </li>
            <li className="glue-footer__global-links-list-item">
              <Link className="glue-footer__link" to="/privacy-policy">
                Privacy
              </Link>
            </li>
            <li className="glue-footer__global-links-list-item">
              <Link className="glue-footer__link" to="/terms-of-service">
                Terms
              </Link>
            </li>
            <li className="glue-footer__global-links-list-item">
              <Link className="glue-footer__link" to="/cookie-policy">
                Cookie Policy
              </Link>
            </li>
            <li className="glue-footer__global-links-list-item">
              <Link className="glue-footer__link" to="/technology-contact-us">
                Help &amp; RFP Desk
              </Link>
            </li>
          </ul>

          <div className="glue-footer__locale">
            <span>Frederick, MD • United States &amp; Global Delivery</span>
          </div>
        </section>
      </footer>
    </>
  );
};
