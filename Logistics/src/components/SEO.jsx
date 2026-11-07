import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

/**
 * Enterprise Search Engine Optimization (SEO), Generative Engine Optimization (GEO),
 * and Multi-Corridor Geographic Metadata Engine for Quinn Daisies Logistics LLC.
 *
 * Canonical Domain: https://quinndaisies.com
 * Sister Technology Ecosystem: https://quinndaisies.org
 */
const LOGISTICS_BASE_URL = (
  import.meta.env.VITE_LOGISTICS_SITE_URL || "https://quinndaisies.com"
).replace(/\/+$/, "");

const TECH_PORTAL_URL = (
  import.meta.env.VITE_TECH_PORTAL_URL || "https://quinndaisies.org"
).replace(/\/+$/, "");

const DEFAULT_SOCIAL_IMAGE =
  "https://res.cloudinary.com/renaissance-images/image/upload/w_1200,h_630,c_fill,q_auto,f_jpg/v1789465949/QuinnDaisies/2151541965_cfe0hz.jpg";

const BRAND_LOGO_SVG =
  "https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg";

const ALIAS_CANONICAL_MAP = {
  "/home": "/",
  "/contact": "/contact-us",
  "/terms-of-service": "/terms-of-use",
};

const NOINDEX_PATHS = new Set(["/404", "/login", "/signup", "/setup"]);

const ROUTE_PARENT_CATEGORY = {
  "/north-america": { name: "Regional Corridors", path: "/global-capabilities" },
  "/europe": { name: "Regional Corridors", path: "/global-capabilities" },
  "/asia": { name: "Regional Corridors", path: "/global-capabilities" },
  "/middle-east-and-africa": { name: "Regional Corridors", path: "/global-capabilities" },
  "/logistics-and-supply-chain": { name: "Services", path: "/services" },
  "/commodities-and-supply": { name: "Services", path: "/services" },
  "/trade-and-investment-facilitation": { name: "Services", path: "/services" },
  "/market-expansion-support": { name: "Services", path: "/services" },
  "/trade-data-and-insights": { name: "Services", path: "/services" },
  "/direct-sales": { name: "Commercial Channels", path: "/services" },
  "/distribution-partnerships": { name: "Commercial Channels", path: "/services" },
  "/online-presence-ecommerce": { name: "Commercial Channels", path: "/services" },
  "/event-and-expo-participation": { name: "Commercial Channels", path: "/services" },
  "/corporate-overview": { name: "About Us", path: "/about-us" },
  "/our-mission-and-vision": { name: "About Us", path: "/about-us" },
  "/compliance-and-safety": { name: "Governance", path: "/about-us" },
  "/sustainability": { name: "Governance", path: "/about-us" },
  "/community": { name: "Governance", path: "/about-us" },
};

const ROUTE_FAQ_MAP = {
  "/": [
    {
      question: "What international trade corridors does Quinn Daisies Logistics operate?",
      answer:
        "Quinn Daisies Logistics executes end-to-end multimodal freight forwarding, air cargo, ocean container shipping (FCL/LCL), cold-chain transport, and customs clearance across the United States–Nigeria corridor, Europe, the Middle East (GCC), and Asia from its Frederick, Maryland headquarters and Ikeja MMIA, Lagos operational hub.",
    },
    {
      question: "Does Quinn Daisies Logistics handle customs brokerage and agricultural commodity sourcing?",
      answer:
        "Yes. Quinn Daisies Logistics provides licensed customs documentation (HS tariff classification, FDA prior notice, CBP filing, SONCAP, PAAR, NXP), bonded warehousing, and lab-verified origin sourcing of sesame seeds, split ginger, non-GMO soybeans, cocoa, and industrial inputs.",
    },
    {
      question: "How can enterprises request a commercial air or ocean freight quote?",
      answer:
        "Enterprises can submit cargo specifications online at https://quinndaisies.com/get-a-quote or contact the global dispatch desk at +1-240-405-5942 and sales@quinndaisies.com for SLA-backed rate schedules.",
    },
  ],
  "/commodities-and-supply": [
    {
      question: "Which export commodities does Quinn Daisies source and verify?",
      answer:
        "Quinn Daisies sources, inspects, and exports export-grade Natural White Sesame Seeds, Sun-Dried Split Ginger, Non-GMO Soybeans, Hibiscus, Cashew Nuts, Shea Butter, and solid minerals with SGS/Cotecna pre-shipment quality assays and phytosanitary certification.",
    },
    {
      question: "How is quality assurance enforced before container stuffing?",
      answer:
        "Every lot undergoes farm-gate and warehouse moisture, purity, aflatoxin, and foreign-matter laboratory testing prior to fumigation, container sealing, and Bill of Lading issuance.",
    },
  ],
  "/compliance-and-safety": [
    {
      question: "Which international trade and customs compliance frameworks does Quinn Daisies enforce?",
      answer:
        "Quinn Daisies enforces U.S. CBP and FDA import regulations, Nigerian Export Promotion Council (NEPC) NXP, CBN Form M/PAAR, SONCAP conformity, EU Deforestation Regulation (EUDR) geolocation traceability, Incoterms 2020 governance, and AML/KYC counterparty screening.",
    },
  ],
};

function resolveCanonicalPath(urlProp, currentPathname) {
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

  // If browsing root '/' directly, always preserve '/' as canonical
  if (currentPathname === "/" || currentPathname === "/home") {
    rawPath = "/";
  }

  const normalized =
    rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : "/";

  return ALIAS_CANONICAL_MAP[normalized] || normalized;
}

const SEO = ({
  title = "Quinn Daisies Logistics | Global Freight Forwarding, Cold Chain & Commodity Supply Chain",
  description = "Quinn Daisies Logistics LLC delivers international air cargo, FCL/LCL ocean freight, customs brokerage, cold-chain transport, and verified commodity sourcing across North America (Frederick, MD HQ), West Africa (MMIA Lagos Hub), Europe, the Middle East, and Asia.",
  keywords = "Quinn Daisies Logistics, international freight forwarding, US Nigeria shipping, air cargo, ocean freight FCL LCL, customs clearance, cold chain logistics, agricultural commodities export, Frederick Maryland logistics, Lagos MMIA cargo, supply chain management",
  url = "",
  image = DEFAULT_SOCIAL_IMAGE,
  author = "Quinn Daisies Logistics LLC",
  type = "website",
  geoRegion = "US-MD;NG-LA",
  geoPlacename = "Frederick, Maryland, United States; Ikeja, Lagos State, Nigeria",
  geoPosition = "39.463779;-77.425119",
  icbm = "39.463779, -77.425119",
  breadcrumbs = null,
  schemaType = "LogisticsService",
  faqItems = null,
  noindex = false,
}) => {
  const location = useLocation();
  const canonicalPath = resolveCanonicalPath(url, location?.pathname);
  const canonicalUrl =
    canonicalPath === "/"
      ? `${LOGISTICS_BASE_URL}/`
      : `${LOGISTICS_BASE_URL}${canonicalPath}`;

  const isNoIndex =
    Boolean(noindex) ||
    NOINDEX_PATHS.has(canonicalPath) ||
    NOINDEX_PATHS.has(location?.pathname) ||
    /\b404\b|not found/i.test(title);

  const isLegalPage =
    canonicalPath === "/privacy-policy" ||
    canonicalPath === "/terms-of-use" ||
    canonicalPath === "/cookie-policy";

  const socialImage =
    !image || image.endsWith(".svg") ? DEFAULT_SOCIAL_IMAGE : image;

  const siteBrandName = "Quinn Daisies Logistics";

  // Build hierarchical BreadcrumbList
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Quinn Daisies Logistics",
      item: `${LOGISTICS_BASE_URL}/`,
    },
  ];

  if (Array.isArray(breadcrumbs) && breadcrumbs.length > 0) {
    breadcrumbs.forEach((bc) => {
      const bcPath = resolveCanonicalPath(bc.url, "");
      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: bc.name,
        item:
          bcPath === "/"
            ? `${LOGISTICS_BASE_URL}/`
            : `${LOGISTICS_BASE_URL}${bcPath}`,
      });
    });
  } else if (canonicalPath !== "/") {
    const parent = ROUTE_PARENT_CATEGORY[canonicalPath];
    if (parent) {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: parent.name,
        item: `${LOGISTICS_BASE_URL}${parent.path}`,
      });
    }
    const slugLabel = canonicalPath
      .replace(/^\//, "")
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    breadcrumbItems.push({
      "@type": "ListItem",
      position: breadcrumbItems.length + 1,
      name: slugLabel,
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
        name: "International Air Cargo & Charter Freight",
        description:
          "Scheduled express air freight, consolidated air cargo, and dedicated aircraft charters linking IAD, JFK, ATL, and BWI with MMIA Lagos, London, Frankfurt, Dubai, and Shanghai.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Ocean Freight Forwarding (FCL & LCL)",
        description:
          "Full-container-load, less-than-container-load, reefer, and breakbulk maritime transport across Atlantic, European, Gulf, and Asian ports.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Customs Brokerage & Bilateral Trade Compliance",
        description:
          "End-to-end HS tariff classification, CBP/FDA clearance, SONCAP/PAAR/NXP documentation, EUDR traceability, and bonded drayage.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Cold Chain & Temperature-Controlled Logistics",
        description:
          "IoT-monitored pharmaceutical, perishable, and agro-allied cold-chain logistics maintaining unbroken thermal integrity.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Origin Commodities Sourcing & Export Execution",
        description:
          "Direct farm-gate and processor procurement, SGS/Cotecna quality assays, and export delivery of sesame, ginger, soybeans, cocoa, and industrial minerals.",
      },
    },
  ];

  const graphNodes = [
    {
      "@type": "Organization",
      "@id": `${LOGISTICS_BASE_URL}/#organization`,
      name: "Quinn Daisies Logistics LLC",
      legalName: "Quinn Daisies Logistics LLC",
      alternateName: [
        "Quinn Daisies Logistics",
        "Quinn Daisies Global Logistics",
        "Quinn Daisies Group",
      ],
      url: `${LOGISTICS_BASE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: BRAND_LOGO_SVG,
        caption: "Quinn Daisies Logistics Official Emblem",
      },
      image: socialImage,
      email: "info@quinndaisies.com",
      telephone: "+1-240-405-5942",
      foundingLocation: {
        "@type": "Place",
        name: "Frederick, Maryland, United States",
      },
      knowsAbout: [
        "International Freight Forwarding",
        "Air Cargo & Charter Aviation Logistics",
        "Ocean Container Shipping (FCL & LCL)",
        "United States–Nigeria Bilateral Trade Execution",
        "Customs Brokerage & HS Tariff Classification",
        "Cold Chain & Pharmaceutical Transport",
        "Bonded Warehousing & Port Drayage",
        "Agricultural & Solid Mineral Commodities Export",
        "Incoterms 2020 Commercial Structuring",
        "FDA, CBP, SONCAP, PAAR & EUDR Regulatory Compliance",
      ],
      sameAs: [
        TECH_PORTAL_URL,
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
          areaServed: ["US", "CA", "NG", "GB", "DE", "NL", "AE", "CN", "SG", "Worldwide"],
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+1-240-405-5942",
          contactType: "sales",
          email: "sales@quinndaisies.com",
          areaServed: ["US", "CA", "NG", "GB", "DE", "NL", "AE", "CN", "SG", "Worldwide"],
          availableLanguage: ["English"],
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${LOGISTICS_BASE_URL}/#hq-us`,
      name: "Quinn Daisies Logistics — North America Global Headquarters",
      parentOrganization: { "@id": `${LOGISTICS_BASE_URL}/#organization` },
      image: socialImage,
      telephone: "+1-240-405-5942",
      email: "info@quinndaisies.com",
      url: `${LOGISTICS_BASE_URL}/north-america`,
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
      "@id": `${LOGISTICS_BASE_URL}/#hub-lagos`,
      name: "Quinn Daisies Logistics — West Africa Air & Sea Cargo Hub (MMIA)",
      parentOrganization: { "@id": `${LOGISTICS_BASE_URL}/#organization` },
      image: socialImage,
      telephone: "+1-240-405-5942",
      email: "info@quinndaisies.com",
      url: `${LOGISTICS_BASE_URL}/middle-east-and-africa`,
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
      "@type": "LocalBusiness",
      "@id": `${LOGISTICS_BASE_URL}/#hub-ogun`,
      name: "Quinn Daisies Logistics — Ogun State Consolidation & Inland Operations",
      parentOrganization: { "@id": `${LOGISTICS_BASE_URL}/#organization` },
      image: socialImage,
      telephone: "+1-240-405-5942",
      email: "info@quinndaisies.com",
      url: `${LOGISTICS_BASE_URL}/middle-east-and-africa`,
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "130Km Idiroko Road, Opposite Zenith Bank, Ijoko",
        addressLocality: "Ijoko",
        addressRegion: "Ogun State",
        addressCountry: "NG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 6.6841,
        longitude: 3.2356,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${LOGISTICS_BASE_URL}/#website`,
      name: siteBrandName,
      alternateName: "Quinn Daisies Global Freight & Trade Portal",
      url: `${LOGISTICS_BASE_URL}/`,
      inLanguage: "en-US",
      publisher: {
        "@id": `${LOGISTICS_BASE_URL}/#organization`,
      },
      potentialAction: {
        "@type": "CommunicateAction",
        name: "Request Enterprise Freight & Commodity Quote",
        target: `${LOGISTICS_BASE_URL}/get-a-quote`,
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
        "@id": `${LOGISTICS_BASE_URL}/#website`,
      },
      about: {
        "@id": `${LOGISTICS_BASE_URL}/#organization`,
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
        cssSelector: ["h1", "h2", ".HeroContent p", ".ApplicationHeader p"],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: breadcrumbItems,
    },
  ];

  if (!isNoIndex && !isLegalPage) {
    graphNodes.push({
      "@type": schemaType || "LogisticsService",
      "@id": `${canonicalUrl}#service`,
      name: title,
      provider: {
        "@id": `${LOGISTICS_BASE_URL}/#organization`,
      },
      url: canonicalUrl,
      image: socialImage,
      description: description,
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Nigeria" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Netherlands" },
        { "@type": "Country", name: "Germany" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "China" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Quinn Daisies Global Freight & Trade Services",
        itemListElement: offerCatalogItems,
      },
    });
  }

  if (!isNoIndex && activeFaqs && activeFaqs.length > 0) {
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

  const robotsDirective = isNoIndex
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
      <meta name="generator" content="Quinn Daisies Enterprise Logistics Platform" />

      {/* Search Engine & Generative AI Answer Engine (GEO) Crawler Directives */}
      <meta name="robots" content={robotsDirective} />
      <meta name="googlebot" content={robotsDirective} />
      <meta name="bingbot" content={robotsDirective} />
      {!isNoIndex && (
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
      {!isNoIndex && (
        <>
          <meta name="citation_title" content={title} />
          <meta name="citation_author" content="Quinn Daisies Logistics LLC" />
          <meta name="citation_publisher" content={siteBrandName} />
          <meta name="citation_public_url" content={canonicalUrl} />
          <meta name="dc.title" content={title} />
          <meta name="dc.description" content={description} />
          <meta name="dc.creator" content="Quinn Daisies Logistics LLC" />
          <meta name="dc.publisher" content={siteBrandName} />
          <meta name="dc.language" content="en-US" />
        </>
      )}

      {/* Canonical & LLM Discovery Endpoints (llms.txt GEO Standard) */}
      {!isNoIndex && <link rel="canonical" href={canonicalUrl} />}
      <link rel="sitemap" type="application/xml" href={`${LOGISTICS_BASE_URL}/sitemap.xml`} />
      <link rel="llms-txt" href={`${LOGISTICS_BASE_URL}/llms.txt`} />
      <link rel="llms-full-txt" href={`${LOGISTICS_BASE_URL}/llms-full.txt`} />

      {/* Multi-Region Internationalization (hreflang) */}
      {!isNoIndex && (
        <>
          <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en-NG" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en-GB" href={canonicalUrl} />
          <link rel="alternate" hrefLang="en-AE" href={canonicalUrl} />
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
