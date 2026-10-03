import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Universal Enterprise SEO & GEO Engine for Quinn Daisies Logistics
 * Injects dynamic OpenGraph, Twitter Cards, Dublin Core, Geographic (GEO) micro-tags,
 * Hreflang internationalization, and multi-tier Schema.org JSON-LD structured data.
 */
const SEO = ({
  title = "Quinn Daisies Logistics | Global Freight Forwarding, Cold Chain & Supply Chain Systems",
  description = "Quinn Daisies Logistics provides international freight forwarding, customs brokerage, cold-chain logistics, and enterprise technology across the US, Nigeria, UK, Europe, Middle East, and Asia.",
  keywords = "Quinn Daisies Logistics, international shipping, air cargo, ocean freight, customs brokerage, cold chain logistics, freight forwarding Maryland, Lagos Nigeria cargo, US to Nigeria shipping, supply chain management, MMIA Ikeja cargo",
  url = "https://www.logistics.quinndaisies.com",
  image = "https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg",
  author = "Quinn Daisies Logistics LLC",
  type = "website",
  geoRegion = "US-MD;NG-LA",
  geoPlacename = "Frederick, Maryland, United States; Ikeja, Lagos State, Nigeria",
  geoPosition = "39.463779;-77.425119",
  icbm = "39.463779, -77.425119",
  breadcrumbs = null,
  schemaType = "LogisticsService",
}) => {
  // Normalize canonical URL to official subdomain
  const canonicalUrl = url.replace(
    /^https?:\/\/(www\.)?quinndaisies\.com(?!\/logistics)/,
    "https://www.logistics.quinndaisies.com"
  );

  // Extract page slug for breadcrumb trail
  const pathParts = canonicalUrl.replace("https://www.logistics.quinndaisies.com", "").split("/").filter(Boolean);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.logistics.quinndaisies.com/"
    }
  ];

  if (breadcrumbs && Array.isArray(breadcrumbs)) {
    breadcrumbs.forEach((bc, idx) => {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": idx + 2,
        "name": bc.name,
        "item": bc.url
      });
    });
  } else if (pathParts.length > 0) {
    const pageName = pathParts[pathParts.length - 1]
      .split("-")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": pageName,
      "item": canonicalUrl
    });
  }

  // Schema.org JSON-LD structured graph for search engines & rich snippets
  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.logistics.quinndaisies.com/#organization",
        "name": "Quinn Daisies Logistics LLC",
        "alternateName": "Quinn Daisies Global Logistics",
        "url": "https://www.logistics.quinndaisies.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg",
          "caption": "Quinn Daisies Logistics Official Emblem"
        },
        "email": "info@quinndaisies.com",
        "telephone": "+1-240-405-5942",
        "sameAs": [
          "https://www.linkedin.com/company/quinn-daisies/",
          "https://www.instagram.com/quinn_daisies",
          "https://twitter.com/quinndaisies"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-240-405-5942",
            "contactType": "customer service",
            "email": "info@quinndaisies.com",
            "areaServed": ["US", "NG", "GB", "AE", "Worldwide"],
            "availableLanguage": ["English"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+1-240-405-5942",
            "contactType": "sales",
            "email": "sales@quinndaisies.com",
            "areaServed": ["US", "NG", "GB", "AE", "Worldwide"],
            "availableLanguage": ["English"]
          }
        ]
      },
      {
        "@type": "LogisticsService",
        "@id": "https://www.logistics.quinndaisies.com/#service",
        "name": "Quinn Daisies Logistics Global Freight & Supply Chain",
        "provider": {
          "@id": "https://www.logistics.quinndaisies.com/#organization"
        },
        "url": canonicalUrl,
        "image": image,
        "description": description,
        "priceRange": "$$",
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "Nigeria" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "United Arab Emirates" },
          { "@type": "Country", "name": "China" },
          { "@type": "AdministrativeArea", "name": "Worldwide" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Global Logistics & Technology Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Air Freight & Express Air Cargo",
                "description": "Daily scheduled air freight and chartered transport connecting North America, Europe, Asia, and West Africa."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ocean Freight (FCL / LCL)",
                "description": "Full container load and consolidated maritime shipping across transatlantic trade lanes."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Customs Brokerage & Regulatory Compliance",
                "description": "End-to-end tariff classification, automated single-window clearance, and import/export documentation."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cold Chain & Temperature Controlled Logistics",
                "description": "Pharma and perishable transport with continuous temperature monitoring and verified cold-chain integrity."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Supply Chain Visibility & Telemetry Engineering",
                "description": "Custom software development, IoT sensor feeds, cloud devops, and automated shipment tracking across 11 core disciplines."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commodities Sourcing & Trade Facilitation",
                "description": "Agricultural, mineral, and industrial bulk procurement and international commodity trading."
              }
            }
          ]
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "14:00"
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.logistics.quinndaisies.com/#hq-us",
        "name": "Quinn Daisies Logistics - North American Global Headquarters",
        "image": image,
        "telephone": "+1-240-405-5942",
        "email": "info@quinndaisies.com",
        "url": "https://www.logistics.quinndaisies.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1915 Wetterhorn Ct",
          "addressLocality": "Frederick",
          "addressRegion": "MD",
          "postalCode": "21702",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "39.463779",
          "longitude": "-77.425119"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.logistics.quinndaisies.com/#hub-nigeria",
        "name": "Quinn Daisies Logistics - West Africa Operational Hub",
        "image": image,
        "telephone": "+1-240-405-5942",
        "email": "info@quinndaisies.com",
        "url": "https://www.logistics.quinndaisies.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Saccho Car Park, Opposite Saccho Glass House, Payment Point 2, NACHO, MMIA",
          "addressLocality": "Ikeja",
          "addressRegion": "Lagos State",
          "postalCode": "100271",
          "addressCountry": "NG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "6.577400",
          "longitude": "3.321100"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": breadcrumbItems
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": title,
        "description": description,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.logistics.quinndaisies.com/#website",
          "name": "Quinn Daisies Logistics",
          "url": "https://www.logistics.quinndaisies.com"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Multi-Region Internationalization (hreflang) */}
      <link rel="alternate" hrefLang="en-US" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-NG" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-GB" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:site_name" content="Quinn Daisies Logistics" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_NG" />
      <meta property="og:locale:alternate" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quinndaisies" />
      <meta name="twitter:creator" content="@quinndaisies" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geographic (GEO) Meta Tags */}
      <meta name="geo.region" content={geoRegion} />
      <meta name="geo.placename" content={geoPlacename} />
      <meta name="geo.position" content={geoPosition} />
      <meta name="ICBM" content={icbm} />

      {/* Structured Data (Schema.org JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataGraph)}
      </script>
    </Helmet>
  );
};

export default SEO;
