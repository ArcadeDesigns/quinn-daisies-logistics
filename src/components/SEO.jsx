import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Quinn Daisies Logistics | Professional Logistics & Shipping Solutions",
  description = "Quinn Daisies Logistics provides professional shipping, packaging, and international freight solutions between the United States, Nigeria, and worldwide. Customs clearance and cargo tracking available.",
  keywords = "Quinn Daisies Logistics, international shipping, cargo solutions, freight forwarder, packaging services, customs clearance, import export logistics, Maryland logistics, Lagos Nigeria logistics, US to Nigeria shipping, Nigeria to US cargo, MMIA Ikeja logistics",
  url = "https://www.logistics.quinndaisies.com",
  image = "https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg",
  author = "Quinn Daisies Logistics",
}) => {
  // Schema.org JSON-LD for LogisticsService / Organization with dual US & Nigeria branches
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": "Quinn Daisies Logistics",
    "image": image,
    "url": url,
    "logo": image,
    "email": "info@quinndaisies.com",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Worldwide"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "1915 Wetterhorn Ct",
        "addressLocality": "Frederick",
        "addressRegion": "MD",
        "postalCode": "21702",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Saccho Car Park, Opposite Saccho Glass House, Payment Point 2, Nacho, MMIA",
        "addressLocality": "Ikeja",
        "addressRegion": "Lagos State",
        "addressCountry": "NG"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "email": "info@quinndaisies.com",
        "contactType": "customer service",
        "areaServed": ["US", "NG"],
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "email": "sales@quinndaisies.com",
        "contactType": "sales",
        "areaServed": ["US", "NG"],
        "availableLanguage": ["English"]
      }
    ],
    "description": description,
    "sameAs": [
      "https://www.linkedin.com/company/quinn-daisies/",
      "https://www.instagram.com/quinn_daisies"
    ]
  };

  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Multi-region targeting (hreflang) for US, Nigeria, and International */}
      <link rel="alternate" hrefLang="en-US" href={url} />
      <link rel="alternate" hrefLang="en-NG" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:site_name" content="Quinn Daisies Logistics" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_NG" />
      <link rel="og:canonical" href={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* GEO & Location Tags for US & Nigeria */}
      <meta name="geo.region" content="US-MD;NG-LA" />
      <meta name="geo.placename" content="Frederick, Maryland, United States; Ikeja, Lagos, Nigeria" />
      <meta name="geo.position" content="39.463779;-77.425119" />
      <meta name="ICBM" content="39.463779, -77.425119" />

      {/* Structured Data (Schema.org JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEO;
