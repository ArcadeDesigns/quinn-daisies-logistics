import React, { useRef, useEffect, useState } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSmoothScroll from "../hooks/useSmoothScroll";

// Featured Hero Article
const featuredArticle = {
  id: "featured-1",
  category: "Supply Chain",
  title: "Enhancing Cross-Border Supply Velocity with Bonded Staging: A Game-Changer for Modern Trade",
  excerpt:
    "How high-volume commercial shippers and institutional importers are bypassing deepwater demurrage spirals through synchronized bonded staging, origin pre-clearance, and direct ocean vessel allocations.",
  image:
    "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
  date: "Aug 10",
  readTime: "10 min read",
};

// Latest Posts (Right Column, 4 articles)
const latestPosts = [
  {
    id: "latest-1",
    title: "Creating an Intuitive Logistics Interface for Enterprise Shippers",
    category: "EdTech & AI",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg",
    date: "Aug 10",
    readTime: "10 min read",
  },
  {
    id: "latest-2",
    title: "Tips for Designing Resilient Supply Chains and Mitigating Port Dwell",
    category: "Commodities",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
    date: "Aug 10",
    readTime: "10 min read",
  },
  {
    id: "latest-3",
    title: "Exploring How to Establish End-to-End Visibility in Global Commerce",
    category: "Trade Policy",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
    date: "Aug 10",
    readTime: "10 min read",
  },
  {
    id: "latest-4",
    title: "How to Optimize Freight Routing Across Transatlantic Maritime Lanes",
    category: "Multimodal Logistics",
    image:
      "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
    date: "Aug 10",
    readTime: "10 min read",
  },
];

// Founders Corner Sets (3 Cards per set, navigable with arrows & page numbers)
const foundersCornerSets = [
  [
    {
      id: "fc-1",
      category: "Supply Chain",
      title: "Our people make the difference in global operations",
      excerpt:
        "We're an extension of your customer service and logistics team, and all of our advisory resources are free. Chat to our friendly operational team 24/7 when you need help.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      date: "Aug 10",
      readTime: "10 min read",
    },
    {
      id: "fc-2",
      category: "EdTech & AI",
      title: "Pioneering institutional academic transformation",
      excerpt:
        "Integrating artificial intelligence platforms and automated administrative workflows across public and private Nigerian higher education institutions.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
      date: "Aug 10",
      readTime: "8 min read",
    },
    {
      id: "fc-3",
      category: "Commodities",
      title: "Origin agricultural aggregation and laboratory quality control",
      excerpt:
        "Connecting smallholder cooperative harvests directly to international off-takers with SGS-certified purity, moisture assays, and bonded staging.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg",
      date: "Aug 10",
      readTime: "10 min read",
    },
  ],
  [
    {
      id: "fc-4",
      category: "Supply Chain",
      title: "Bonded Staging vs. Spot Warehousing: De-Risking Landed Costs",
      excerpt:
        "Analyzing how climate-controlled bonded storage facilities shield commercial importers from demurrage liabilities and currency volatility.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
      date: "Sep 06, 2026",
      readTime: "5 min read",
    },
    {
      id: "fc-5",
      category: "Air Cargo",
      title: "Express Air Freight Consolidation via NACHO MMIA Gateway",
      excerpt:
        "High-security cargo handling and direct airline handoffs for time-critical industrial components and perishable commercial consignments.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
      date: "Sep 02, 2026",
      readTime: "4 min read",
    },
    {
      id: "fc-6",
      category: "Cold Chain",
      title: "Real-Time Telematics & IoT Sensor Monitoring for Perishables",
      excerpt:
        "Maintaining continuous temperature logs, humidity sensors, and GPS milestone tracking from origin harvest to transatlantic port offload.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
      date: "Aug 28, 2026",
      readTime: "6 min read",
    },
  ],
  [
    {
      id: "fc-7",
      category: "Maritime Shipping",
      title: "Decarbonization & Fuel Surcharges: Impact on Transatlantic Freight",
      excerpt:
        "Evaluating new maritime emissions compliance standards and carrier bunker adjustment factors (BAF) across Atlantic container trade lanes.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
      date: "Aug 22, 2026",
      readTime: "5 min read",
    },
    {
      id: "fc-8",
      category: "Commodities",
      title: "Smallholder Cooperative Financing: Enhancing Export Supply Velocity",
      excerpt:
        "Structured micro-financing and input support mechanisms enabling agricultural clusters to scale production of export-grade non-GMO crops.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg",
      date: "Aug 15, 2026",
      readTime: "6 min read",
    },
    {
      id: "fc-9",
      category: "Trade Policy",
      title: "Automated Commercial Environment (ACE) Pre-Filing Protocols",
      excerpt:
        "How digital single-window filings with U.S. CBP and FDA Prior Notice eliminate arrival dwell times and prevent terminal storage fees.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
      date: "Aug 09, 2026",
      readTime: "4 min read",
    },
  ],
  [
    {
      id: "fc-10",
      category: "EdTech & AI",
      title: "Deploying Neural Exam Evaluation in West African Polytechnics",
      excerpt:
        "How AI-assisted grading algorithms and digitized student accreditation repositories enhance institutional integrity and reduce administrative bottlenecks.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg",
      date: "Jul 31, 2026",
      readTime: "7 min read",
    },
    {
      id: "fc-11",
      category: "Supply Chain",
      title: "Bypassing Deepwater Demurrage: The Onne Port Inland Dry Terminal Advantage",
      excerpt:
        "Strategic off-dock container release protocols mitigating port congestion dwell for manufacturing raw material consignments.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789466483/QuinnDaisies/2151976946_nomiyd.jpg",
      date: "Jul 24, 2026",
      readTime: "6 min read",
    },
    {
      id: "fc-12",
      category: "Maritime Shipping",
      title: "AfCFTA Corridors: Streamlining West Africa Coastal Cabotage Trade",
      excerpt:
        "Examining regional multimodal feeder networks and tariff harmonizations creating tariff-free industrial trade between ECOWAS member states.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1787010387/QuinnDaisies/124625_jouegu.jpg",
      date: "Jul 18, 2026",
      readTime: "5 min read",
    },
  ],
  [
    {
      id: "fc-13",
      category: "Commodities",
      title: "Sesame Seed Harvest Quality Standards for European Confectionary Export",
      excerpt:
        "Preserving oil content above 52% and moisture below 6% through mechanical cleaning, sortex grading, and nitrogen-purged container liners.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
      date: "Jul 12, 2026",
      readTime: "5 min read",
    },
    {
      id: "fc-14",
      category: "Trade Policy",
      title: "Understanding AGOA Renewal Mechanisms for Non-Oil Agricultural Exports",
      excerpt:
        "Navigating preferential rules of origin and duty-free quota frameworks for value-added African agro-commodities entering the United States.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
      date: "Jul 05, 2026",
      readTime: "6 min read",
    },
    {
      id: "fc-15",
      category: "Supply Chain",
      title: "End-to-End Cold Chain Integrity for Fresh Tropical Agro-Produce",
      excerpt:
        "Maintaining uninterrupted reefer container cold chains from North-Central farm gates through Lagos export terminals to global consumer markets.",
      image:
        "https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg",
      date: "Jun 28, 2026",
      readTime: "6 min read",
    },
  ],
];

const categoryTabs = [
  "All",
  "Supply Chain",
  "Commodities",
  "EdTech & AI",
  "Trade Policy",
  "Maritime Shipping",
];

export default function Insights() {
  useSmoothScroll();

  const [activeCategory, setActiveCategory] = useState("All");
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const pageRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);

  const totalSets = foundersCornerSets.length;

  const handlePrevSet = () => {
    const nextIdx = currentSetIndex > 0 ? currentSetIndex - 1 : totalSets - 1;
    setCurrentSetIndex(nextIdx);
    setActivePage(nextIdx + 1);
  };

  const handleNextSet = () => {
    const nextIdx = currentSetIndex < totalSets - 1 ? currentSetIndex + 1 : 0;
    setCurrentSetIndex(nextIdx);
    setActivePage(nextIdx + 1);
  };

  const handlePageSelect = (pageNumber) => {
    setActivePage(pageNumber);
    setCurrentSetIndex((pageNumber - 1) % totalSets);
  };

  // Filter cards based on selected category tab
  const rawCards = foundersCornerSets[currentSetIndex] || foundersCornerSets[0];
  const currentCards =
    activeCategory === "All"
      ? rawCards
      : rawCards.filter(
        (c) =>
          c.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
          activeCategory.toLowerCase().includes(c.category.toLowerCase()),
      ).length > 0
        ? rawCards.filter(
          (c) =>
            c.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
            activeCategory.toLowerCase().includes(c.category.toLowerCase()),
        )
        : rawCards; // fallback to set if none in current set

  return (
    <>
      <SEO
        title="News, Press & Global Trade Insights | Quinn Daisies Logistics"
        description="Authoritative intelligence on cross-border logistics, transatlantic trade corridors, agricultural commodity harvests, EdTech AI modernization, and regulatory compliance."
        keywords="global trade insights, logistics industry news, freight rate trends, agricultural harvest reports, customs regulatory updates, supply chain intelligence"
        url="https://www.logistics.quinndaisies.com/insights"
      />

      <div ref={pageRef} className="InsightsRoot">
        <Navbar />

        <div id="smooth-wrapper" ref={smoothWrapperRef}>
          <div id="smooth-content" ref={smoothContentRef}>
            <div className="InsightsPageContainer">
              <div className="InsightsHeaderSection">
                <div className="InsightsHeaderBadge">
                  <span className="InsightsHeaderBadgeDot" />
                  <span>Quinn Daisies Intelligence & Editorial</span>
                </div>
                <h1 className="InsightsPageMainTitle">
                  Operational Insights & Global Trade Intelligence
                </h1>
                <p className="InsightsPageSubTitle">
                  Authoritative analysis, trade corridor telemetry, agricultural commodity harvest outlooks, and enterprise technology perspectives.
                </p>

                {/* Category Filter Pills */}
                <div className="InsightsCategoryTabsBar">
                  {categoryTabs.map((cat, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`InsightsCategoryPillBtn ${activeCategory === cat ? "is-active" : ""
                        }`}
                      onClick={() => {
                        setActiveCategory(cat);
                        setActivePage(1);
                        setCurrentSetIndex(0);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* SECTION 1: HERO GRID (FEATURED ARTICLE + LATEST POSTS) */}
              <section className="InsightsHeroGrid">
                {/* Left Column: Featured Highlight Article Card */}
                <Link
                  to="/contact-us"
                  className="InsightsFeaturedCard"
                >
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="InsightsFeaturedImage"
                  />
                  <div className="InsightsFeaturedOverlay">
                    <div className="InsightsCategoryPill">
                      <span className="InsightsCategoryDot" />
                      <span className="InsightsCategoryText">
                        {featuredArticle.category}
                      </span>
                    </div>
                    <h2 className="InsightsFeaturedTitle">
                      {featuredArticle.title}
                    </h2>
                    <span className="InsightsFeaturedMeta">
                      {featuredArticle.date} • {featuredArticle.readTime}
                    </span>
                  </div>
                </Link>

                {/* Right Column: Latest post list */}
                <div className="InsightsLatestCol">
                  <h2 className="InsightsLatestHeading">Latest post</h2>

                  <div className="InsightsLatestList">
                    {latestPosts.map((post) => (
                      <Link
                        key={post.id}
                        to="/contact-us"
                        className="InsightsLatestItem"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="InsightsLatestThumb"
                        />
                        <div className="InsightsLatestInfo">
                          <h3 className="InsightsLatestTitle">
                            {post.title}
                          </h3>
                          <span className="InsightsLatestMeta">
                            {post.date} • {post.readTime}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              <section className="InsightsFoundersSection">
                <div className="InsightsFoundersHeader">
                  <h2 className="InsightsFoundersTitle">
                    Founders corner
                  </h2>

                  <div className="InsightsNavArrows">
                    <button
                      type="button"
                      className="InsightsArrowBtn"
                      onClick={handlePrevSet}
                      aria-label="Previous set"
                    >
                      <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                      type="button"
                      className="InsightsArrowBtn"
                      onClick={handleNextSet}
                      aria-label="Next set"
                    >
                      <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                  </div>
                </div>

                <div className="InsightsFoundersGrid">
                  {currentCards.map((card) => (
                    <Link
                      key={card.id}
                      to="/contact-us"
                      className="InsightsCard"
                    >
                      <div className="InsightsCardImageWrap">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="InsightsCardImage"
                        />
                      </div>

                      <div className="InsightsCardCategory">
                        <span className="InsightsCardCategoryDot" />
                        <span className="InsightsCardCategoryName">
                          {card.category}
                        </span>
                      </div>

                      <h3 className="InsightsCardTitle">{card.title}</h3>
                      <p className="InsightsCardExcerpt">{card.excerpt}</p>
                      <span className="InsightsCardMeta">
                        {card.date} • {card.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>

              {/* SECTION 3: PAGINATION */}
              <div className="InsightsPagination">
                <button
                  type="button"
                  className="InsightsPageArrow"
                  disabled={activePage === 1}
                  onClick={handlePrevSet}
                  aria-label="Previous page"
                >
                  <span className="material-symbols-outlined">chevron_left</span> Previous
                </button>

                <div className="InsightsPaginationNumbers">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      className={`InsightsPageNumber ${activePage === num ? "active" : ""
                        }`}
                      onClick={() => handlePageSelect(num)}
                    >
                      {num}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className="InsightsPageArrow"
                  disabled={activePage === 5}
                  onClick={handleNextSet}
                  aria-label="Next page"
                >
                  Next <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
