import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * Enterprise Search Engine Optimization (SEO), Generative Engine Optimization (GEO),
 * and Geographic Metadata Engine for Quinn Daisies Technology & IT Solutions.
 *
 * Canonical Domain: https://quinndaisies.org
 * Sister Global Logistics Ecosystem: https://quinndaisies.com
 */
const TECH_BASE_URL = (
  import.meta.env.VITE_TECH_SITE_URL || "https://quinndaisies.org"
).replace(/\/+$/, "");

const LOGISTICS_PORTAL_URL = (
  import.meta.env.VITE_LOGISTICS_PORTAL_URL || "https://quinndaisies.com"
).replace(/\/+$/, "");

const DEFAULT_SOCIAL_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/quinn-daisies-group.firebasestorage.app/o/Quinn%20Daisies%20Group%2F2151719610.jpg?alt=media&token=d34600ad-bcba-4996-88c7-7b753c1cb33b";

const BRAND_LOGO_SVG =
  "https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg";

const ALIAS_CANONICAL_MAP = {
  "/home": "/",
  "/ai-application-development": "/ai-and-application-development",
  "/desktop-development": "/desktop-application-development",
  "/programs": "/technology-programs",
  "/products": "/technology-products",
  "/about-us": "/technology-about-us",
  "/contact": "/technology-contact-us",
  "/contact-us": "/technology-contact-us",
  "/terms-of-service": "/terms-of-use",
};

const ROUTE_PARENT_CATEGORY = {
  "/software-development-and-engineering": {
    name: "Engineering",
    path: "/technology-and-visibility",
  },
  "/artificial-intelligence": {
    name: "Engineering",
    path: "/software-development-and-engineering",
  },
  "/ai-and-application-development": {
    name: "Engineering",
    path: "/software-development-and-engineering",
  },
  "/application-development": {
    name: "Engineering",
    path: "/software-development-and-engineering",
  },
  "/mobile-application-development": {
    name: "Engineering",
    path: "/software-development-and-engineering",
  },
  "/desktop-application-development": {
    name: "Engineering",
    path: "/software-development-and-engineering",
  },
  "/it-solutions": {
    name: "Infrastructure & Workforce",
    path: "/technology-and-visibility",
  },
  "/workforce-development-and-it-support": {
    name: "Infrastructure & Workforce",
    path: "/it-solutions",
  },
  "/workforce-development-and-training": {
    name: "Infrastructure & Workforce",
    path: "/workforce-development-and-it-support",
  },
  "/seo-and-geo": {
    name: "Visibility & Growth",
    path: "/seo-and-digital-marketing",
  },
  "/digital-marketing": {
    name: "Visibility & Growth",
    path: "/seo-and-digital-marketing",
  },
  "/contract-procurement-and-writing": {
    name: "Government Contracting",
    path: "/technology-and-visibility",
  },
};

const ROUTE_FAQ_MAP = {
  "/": [
    {
      question:
        "What programming languages and runtimes does Quinn Daisies Technology engineer across the full SDLC?",
      answer:
        "Quinn Daisies Technology delivers full-SDLC enterprise software across .NET Core, ASP.NET Core, C#, Python, JavaScript, TypeScript, React, Java Spring Boot, Kotlin (Android & Multiplatform), Python Kivy, and Python Flet across web, mobile, desktop, cloud, and AI workloads.",
    },
    {
      question:
        "Does Quinn Daisies provide Government Contract Procurement and Technical Proposal Writing?",
      answer:
        "Yes. Quinn Daisies manages end-to-end government contract capture, FAR/DFARS & COMAR compliance matrices, and Shipley Pink/Red/Gold Team technical proposal writing for U.S. Federal SAM.gov, State of Maryland eMMA (CATS+, MBE/VSBE/SBR), and United Nations Global Marketplace (UNGM) tenders.",
    },
    {
      question:
        "How does Quinn Daisies optimize digital platforms for both Search Engines (SEO) and AI Answer Engines (GEO)?",
      answer:
        "Quinn Daisies unifies Technical Search Engine Optimization (sub-second Core Web Vitals, crawlable architecture, international hreflang) with Generative Engine Optimization (GEO), deploying multi-entity Schema.org JSON-LD graphs, /llms.txt and /llms-full.txt knowledge indexes, and citation-ready authority architectures for Google AI Overviews, Gemini, ChatGPT Search, Perplexity, and Claude.",
    },
  ],
  "/technology-and-visibility": [
    {
      question:
        "What does the Quinn Daisies Cloud, SDLC & Visibility Program include?",
      answer:
        "The program unifies C4 architecture discovery, polyglot full-SDLC engineering (.NET Core, C#, Python, Java, React, Kotlin, Kivy, Flet), multi-cloud Kubernetes/Terraform DevOps, 99.99% SLA SRE, and dual-engine SEO + Generative Engine Optimization (GEO).",
    },
    {
      question:
        "How quickly can an enterprise initiate a Technical Discovery and Codebase Audit?",
      answer:
        "Organizations schedule an assessment at https://quinndaisies.org/technology-contact-us and receive an architectural blueprint, milestone schedule, and SLA-backed execution roadmap within 10 business days.",
    },
  ],
  "/seo-and-geo": [
    {
      question:
        "What is Generative Engine Optimization (GEO) and how does it differ from traditional SEO?",
      answer:
        "Traditional SEO optimizes pages for ranked blue-link search results in Google and Bing, while Generative Engine Optimization (GEO) engineers structured Schema.org entity graphs, /llms.txt knowledge files, high-information-gain citations, and authoritative entity corroboration so AI Answer Engines (Google AI Overviews, Gemini, ChatGPT Search, Perplexity, and Claude) directly cite and recommend your brand.",
    },
    {
      question:
        "Do Quinn Daisies SEO & GEO architectures support multi-region enterprises?",
      answer:
        "Yes. Every deployment includes multi-region hreflang mapping, LocalBusiness GeoCoordinates, Core Web Vitals optimization (<1.2s LCP), and server-side telemetry across North America, Europe, Africa, and global markets.",
    },
  ],
  "/artificial-intelligence": [
    {
      question:
        "Can Quinn Daisies deploy private, zero-data-leakage RAG and AI agent systems?",
      answer:
        "Yes. Quinn Daisies architects tenant-isolated Retrieval-Augmented Generation (RAG), LangGraph and C# Semantic Kernel multi-agent swarms, and air-gapped vLLM inference clusters aligned with NIST SP 800-171, SOC 2 Type II, and HIPAA/GDPR governance.",
    },
  ],
};

function resolveCanonicalPath(urlProp, currentPathname, is404Page) {
  if (is404Page) {
    return currentPathname || "/404";
  }

  // Root homepage '/' or '/home' always canonicalizes to '/'
  if (currentPathname === "/" || currentPathname === "/home") {
    return "/";
  }

  let rawPath = currentPathname || "/";
  if (urlProp && typeof urlProp === "string") {
    const stripped = urlProp
      .trim()
      .replace(/^https?:\/\/[^/]+/i, "")
      .split(/[?#]/)[0];
    if (stripped) {
      rawPath = stripped.startsWith("/") ? stripped : `/${stripped}`;
    }
  }

  const normalized =
    rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : "/";

  return ALIAS_CANONICAL_MAP[normalized] || normalized;
}

const SEO = ({
  title = "Quinn Daisies Technology & IT Solutions | Full-SDLC Engineering, AI, Cloud, SEO/GEO & GovCon",
  description = "Quinn Daisies Technology & IT Solutions (Quinn Daisies Group) engineers full-SDLC enterprise software (.NET Core, ASP.NET, C#, Python, JavaScript, Java, React, Kotlin, Kivy, Flet), Agentic AI, Cloud DevOps, SAM.gov/Maryland eMMA/UNGM government contract procurement, and Technical SEO & Generative Engine Optimization (GEO).",
  keywords = "Quinn Daisies Technology, Quinn Daisies Group, software development engineering, .NET Core, ASP.NET, C#, Python, JavaScript, TypeScript, Java, React, Kotlin, Kivy, Flet, Artificial Intelligence, Enterprise RAG, Cloud DevOps, SEO and GEO, Generative Engine Optimization, Digital Marketing, SAM.gov contracting, Maryland eMMA procurement, UNGM tenders, Desktop Application Development, Mobile Application Development, IT Solutions Maryland",
  url = "",
  image = DEFAULT_SOCIAL_IMAGE,
  author = "Quinn Daisies Group",
  type = "website",
  geoRegion = "US-MD;NG-LA",
  geoPlacename = "Frederick, Maryland, United States; Ikeja, Lagos State, Nigeria",
  geoPosition = "39.463779;-77.425119",
  icbm = "39.463779, -77.425119",
  breadcrumbs = null,
  schemaType = "ProfessionalService",
  faqItems = null,
  noindex = false,
}) => {
  const location = useLocation();
  const is404Page =
    Boolean(noindex) || /\b404\b|page not found/i.test(title);

  const canonicalPath = resolveCanonicalPath(
    url,
    location?.pathname,
    is404Page
  );
  const canonicalUrl =
    canonicalPath === "/"
      ? `${TECH_BASE_URL}/`
      : `${TECH_BASE_URL}${canonicalPath}`;

  const isLegalPage =
    canonicalPath === "/privacy-policy" ||
    canonicalPath === "/terms-of-use" ||
    canonicalPath === "/cookie-policy";

  const socialImage =
    !image || image.endsWith(".svg") ? DEFAULT_SOCIAL_IMAGE : image;

  const siteBrandName = "Quinn Daisies Technology & IT Solutions";

  // Build hierarchical BreadcrumbList
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Quinn Daisies Technology",
      item: `${TECH_BASE_URL}/`,
    },
  ];

  if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    breadcrumbs.forEach((bc) => {
      const bcPath = resolveCanonicalPath(bc.url, "", false);
      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: bc.name,
        item:
          bcPath === "/" ? `${TECH_BASE_URL}/` : `${TECH_BASE_URL}${bcPath}`,
      });
    });
  } else if (canonicalPath !== "/") {
    const parent = ROUTE_PARENT_CATEGORY[canonicalPath];
    if (parent && parent.path !== canonicalPath) {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: parent.name,
        item: `${TECH_BASE_URL}${parent.path}`,
      });
    }
    const pageName = canonicalPath
      .replace(/^\//, "")
      .split("-")
      .map((w) =>
        ["ai", "it", "seo", "geo"].includes(w.toLowerCase())
          ? w.toUpperCase()
          : w.charAt(0).toUpperCase() + w.slice(1)
      )
      .join(" ");
    breadcrumbItems.push({
      "@type": "ListItem",
      position: breadcrumbItems.length + 1,
      name: pageName,
      item: canonicalUrl,
    });
  }

  const activeFaqs =
    Array.isArray(faqItems) && faqItems.length > 0
      ? faqItems
      : ROUTE_FAQ_MAP[canonicalPath] || null;

  const offerCatalogItems = [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Full-SDLC Software Development & Distributed Engineering",
        description:
          "Enterprise web, backend, and event-driven microservice architectures engineered in .NET Core, ASP.NET Core, C#, Python, Java Spring Boot, JavaScript, TypeScript, and React.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Artificial Intelligence, Enterprise RAG & Agentic Systems",
        description:
          "Autonomous multi-agent workflows, LangGraph & C# Semantic Kernel orchestration, zero-hallucination RAG vector pipelines, and sovereign vLLM deployments.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Native & Cross-Platform Mobile and Desktop Engineering",
        description:
          "Mission-critical mobile and desktop software built with Kotlin, Jetpack Compose, .NET MAUI, C# WPF/WinUI 3, Python Kivy, and Python Flet.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Government Contract Procurement & Shipley Proposal Writing",
        description:
          "End-to-end RFP/RFQ/IFB capture, FAR/DFARS & COMAR compliance matrices, and technical volume authoring across U.S. Federal SAM.gov, State of Maryland eMMA, and UNGM.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Technical SEO, Generative Engine Optimization (GEO) & Digital Growth",
        description:
          "Core Web Vitals optimization, multi-entity Schema.org JSON-LD graphs, /llms.txt indexing, AI Overviews & LLM citation engineering, and B2B Account-Based Marketing.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Multi-Cloud DevOps, 24/7 Managed IT & Workforce Bootcamps",
        description:
          "Kubernetes/Terraform IaC across GCP, AWS, and Azure, NIST 800-171 Zero-Trust cybersecurity, L1–L3 NOC/SOC SLAs, and corporate engineering training.",
      },
    },
  ];

  const graphNodes = [
    {
      "@type": "Organization",
      "@id": `${TECH_BASE_URL}/#organization`,
      name: "Quinn Daisies Technology & IT Solutions",
      legalName: "Quinn Daisies Group",
      alternateName: [
        "Quinn Daisies Technology",
        "Quinn Daisies Group",
        "Quinn Daisies IT Solutions",
      ],
      url: `${TECH_BASE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: BRAND_LOGO_SVG,
        caption: "Quinn Daisies Technology & IT Solutions Official Emblem",
      },
      image: socialImage,
      email: "info@quinndaisies.com",
      telephone: "+1-240-405-5942",
      foundingLocation: {
        "@type": "Place",
        name: "Frederick, Maryland, United States",
      },
      knowsAbout: [
        "Full-SDLC Software Engineering",
        ".NET Core & ASP.NET Core Microservices",
        "C# Enterprise Architecture & Semantic Kernel",
        "Python AI, FastAPI & Machine Learning",
        "JavaScript, TypeScript & React 19 Web Applications",
        "Java Spring Boot & Apache Kafka Event Streaming",
        "Kotlin Android & Kotlin Multiplatform Mobile Apps",
        "Kivy & Flet Cross-Platform Desktop & Mobile Engineering",
        "Enterprise Retrieval-Augmented Generation (RAG) & Agentic AI",
        "Generative Engine Optimization (GEO) & Technical SEO",
        "B2B Digital Marketing & Account-Based Marketing (ABM)",
        "SAM.gov U.S. Federal Contract Procurement (FAR/DFARS)",
        "State of Maryland eMMA Contracting (COMAR, CATS+, MBE/VSBE/SBR)",
        "United Nations Global Marketplace (UNGM) International Tenders",
        "Multi-Cloud DevOps, Kubernetes, Terraform & Zero-Trust Security",
      ],
      sameAs: [
        LOGISTICS_PORTAL_URL,
        "https://www.linkedin.com/company/quinn-daisies/",
        "https://www.instagram.com/quinn_daisies",
        "https://twitter.com/quinndaisies",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-240-405-5942",
          contactType: "customer service",
          email: "info@quinndaisies.com",
          areaServed: ["US", "NG", "GB", "CA", "AE", "Worldwide"],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-240-405-5942",
          contactType: "sales",
          email: "sales@quinndaisies.com",
          areaServed: ["US", "NG", "GB", "CA", "AE", "Worldwide"],
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${TECH_BASE_URL}/#hq-us`,
      name: "Quinn Daisies Technology — North America Architecture & GovCon HQ",
      parentOrganization: { "@id": `${TECH_BASE_URL}/#organization` },
      image: socialImage,
      telephone: "+1-240-405-5942",
      email: "info@quinndaisies.com",
      url: `${TECH_BASE_URL}/technology-contact-us`,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1915 Wetterhorn Ct",
        addressLocality: "Frederick",
        addressRegion: "MD",
        postalCode: "21702",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.463779,
        longitude: -77.425119,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${TECH_BASE_URL}/#hub-lagos`,
      name: "Quinn Daisies Technology — West Africa Engineering & Operations Center",
      parentOrganization: { "@id": `${TECH_BASE_URL}/#organization` },
      image: socialImage,
      telephone: "+1-240-405-5942",
      email: "info@quinndaisies.com",
      url: `${TECH_BASE_URL}/technology-contact-us`,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Saccho Car Park, Opposite Saccho Glass House, Payment Point 2, NACHO, MMIA",
        addressLocality: "Ikeja",
        addressRegion: "Lagos State",
        postalCode: "100271",
        addressCountry: "NG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.5774,
        longitude: 3.3211,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${TECH_BASE_URL}/#website`,
      name: siteBrandName,
      alternateName: "Quinn Daisies Technology & Engineering Portal",
      url: `${TECH_BASE_URL}/`,
      inLanguage: "en-US",
      publisher: {
        "@id": `${TECH_BASE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${TECH_BASE_URL}/technology-products?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: title,
      description: description,
      inLanguage: "en-US",
      isPartOf: {
        "@id": `${TECH_BASE_URL}/#website`,
      },
      about: {
        "@id": `${TECH_BASE_URL}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: socialImage,
      },
      breadcrumb: {
        "@id": `${canonicalUrl}#breadcrumb`,
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [
          "h1",
          "h2",
          ".glue-headline",
          ".glue-body--large",
          ".devsite-landing-row-description",
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
  ];

  if (!is404Page && !isLegalPage) {
    graphNodes.push({
      "@type": schemaType || "ProfessionalService",
      "@id": `${canonicalUrl}#service`,
      name: title,
      provider: {
        "@id": `${TECH_BASE_URL}/#organization`,
      },
      url: canonicalUrl,
      image: socialImage,
      description: description,
      priceRange: "$$$",
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "State", name: "Maryland" },
        { "@type": "Country", name: "Nigeria" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: siteBrandName,
        itemListElement: offerCatalogItems,
      },
    });
  }

  if (!is404Page && activeFaqs && activeFaqs.length > 0) {
    graphNodes.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: activeFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": graphNodes,
  };

  const robotsDirective = is404Page
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <Helmet>
      {/* Primary Search Engine Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="application-name" content={siteBrandName} />
      <meta name="generator" content="Quinn Daisies Enterprise React Platform" />

      {/* Search Engine & Generative AI Answer Engine (GEO) Crawler Directives */}
      <meta name="robots" content={robotsDirective} />
      <meta name="googlebot" content={robotsDirective} />
      <meta name="bingbot" content={robotsDirective} />
      {!is404Page && (
        <>
          <meta name="OAI-SearchBot" content="index, follow, max-snippet:-1" />
          <meta name="ChatGPT-User" content="index, follow" />
          <meta name="PerplexityBot" content="index, follow, max-snippet:-1" />
          <meta name="ClaudeBot" content="index, follow, max-snippet:-1" />
          <meta name="Google-Extended" content="index, follow" />
          <meta name="Applebot-Extended" content="index, follow" />
        </>
      )}

      {/* Generative Engine Optimization (GEO) Citation & Dublin Core Attribution */}
      {!is404Page && (
        <>
          <meta name="citation_title" content={title} />
          <meta name="citation_author" content="Quinn Daisies Group" />
          <meta name="citation_publisher" content={siteBrandName} />
          <meta name="citation_public_url" content={canonicalUrl} />
          <meta name="dc.title" content={title} />
          <meta name="dc.description" content={description} />
          <meta name="dc.creator" content="Quinn Daisies Group" />
          <meta name="dc.publisher" content={siteBrandName} />
          <meta name="dc.language" content="en-US" />
        </>
      )}

      {/* Canonical & LLM Discovery Endpoints (llms.txt standard for GEO) */}
      {!is404Page && <link rel="canonical" href={canonicalUrl} />}
      <link rel="sitemap" type="application/xml" href={`${TECH_BASE_URL}/sitemap.xml`} />
      <link rel="llms-txt" href={`${TECH_BASE_URL}/llms.txt`} />
      <link rel="llms-full-txt" href={`${TECH_BASE_URL}/llms-full.txt`} />

      {/* Multi-Region Internationalization (hreflang) */}
      {!is404Page && (
        <>
          <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en-NG" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en-GB" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en-CA" href={canonicalUrl} />
          <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        </>
      )}

      {/* Open Graph / LinkedIn / Facebook / WhatsApp / Slack */}
      <meta property="og:site_name" content={siteBrandName} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:secure_url" content={socialImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_NG" />
      <meta property="og:locale:alternate" content="en_GB" />

      {/* Twitter / X Large Summary Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quinndaisies" />
      <meta name="twitter:creator" content="@quinndaisies" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Geographic (GEO) Location Coordinates */}
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.placename" content={geoPlacename} />
      <meta name="geo.position" content={geoPosition} />
      <meta name="ICBM" content={icbm} />

      {/* Multi-Entity Structured Data (Schema.org JSON-LD for SEO + GEO) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataGraph)}
      </script>
    </Helmet>
  );
};

export default SEO;
