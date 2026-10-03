import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const dropdownData = {
  "we-are-quinn-daisies": {
    title: "We Are Quinn Daisies",
    defaultImage: {
      src: "https://res.cloudinary.com/renaissance-images/image/upload/v1789465952/QuinnDaisies/2150917196_bhmjrt.jpg",
      title: "Corporate Overview",
    },
    links: [
      {
        title: "Corporate Overview.",
        description:
          "A world-class trade and logistics conglomerate built on trust, operational precision, and borderless commercial connectivity.",
        to: "/corporate-overview",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789465952/QuinnDaisies/2150917196_bhmjrt.jpg",
      },
      {
        title: "Our Mission & Vision.",
        description:
          "Empowering enterprise growth by removing supply chain friction, optimizing distribution, and connecting regional producers to global markets.",
        to: "/our-mission-and-vision",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1775925890/QuinnDaisies/2149636270_sl8t0l.jpg",
      },
      {
        title: "Global Capabilities.",
        description:
          "Integrated multimodal shipping infrastructure spanning ocean freight, air express, cross-docking, and smart warehousing.",
        to: "/global-capabilities",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789466419/QuinnDaisies/2151794080_qmduaj.jpg",
      },
      {
        title: "Compliance & Safety.",
        description:
          "Strict adherence to international trade directives, customs compliance, rigorous safety protocols, and ethical governance.",
        to: "/compliance-and-safety",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
      },
    ],
  },

  "market-we-serve": {
    title: "Market We Serve",
    defaultImage: {
      src: "https://res.cloudinary.com/renaissance-images/image/upload/v1789661151/QuinnDaisies/2150806042_yuuhye.jpg",
      title: "North America (US & Canada)",
    },
    links: [
      {
        title: "North America (US & Canada).",
        description:
          "Comprehensive trans-Atlantic and overland freight connectivity, bonded customs clearance, FDA compliance, and multi-state distribution.",
        to: "/north-america",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789661151/QuinnDaisies/2150806042_yuuhye.jpg",
      },
      {
        title: "Europe.",
        description:
          "Direct trade corridor facilitation to Western and Northern Europe, navigating EU import directives, VAT compliance, and multimodal transport.",
        to: "/europe",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789661150/QuinnDaisies/2150893035_q5i5wu.jpg",
      },
      {
        title: "Asia.",
        description:
          "Strategic logistics hubs linking manufacturing epicenters and consumer markets across Asia with competitive sea and air freight routing.",
        to: "/asia",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789661150/QuinnDaisies/2152006027_zaoda6.jpg",
      },
      {
        title: "Middle East and Africa.",
        description:
          "Deep regional networks driving high-growth import/export lanes, AfCFTA trade integration, and Gulf commercial connectivity.",
        to: "/middle-east-and-africa",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      },
    ],
  },

  "how-we-go-to-market": {
    title: "How We Go To Market",
    defaultImage: {
      src: "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      title: "Direct Sales & Commercial Strategy",
    },
    links: [
      {
        title: "Direct Sales.",
        description:
          "Engaging enterprise clients and global buyers directly with custom freight agreements, bulk shipping rate optimization, and dedicated corporate support.",
        to: "/direct-sales",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
      },
      {
        title: "Distribution Partnerships.",
        description:
          "Collaborating with premier regional carriers, bonded warehousing operators, and 3PL networks to expand distribution reach and accelerate transit.",
        to: "/distribution-partnerships",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789481023/QuinnDaisies/2151541941_an6wpy.jpg",
      },
      {
        title: "Online Presence & E-Commerce.",
        description:
          "Powering digital trade portals, API-integrated freight booking, and automated tracking solutions for fast, borderless B2B commercial transactions.",
        to: "/online-presence-ecommerce",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1789465947/QuinnDaisies/2151003712_gbfv0i.jpg",
      },
      {
        title: "Event and Expo Participation.",
        description:
          "Showcasing international trade capabilities, connecting with industry leaders, and forging bilateral trade deals across key global logistics summits.",
        to: "/event-and-expo-participation",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1775925890/QuinnDaisies/40197_qxydbd.jpg",
      },
    ],
  },

  "international-trade": {
    title: "International Trade",
    defaultImage: {
      src: "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
      title: "Logistics and Supply Chain Solutions",
    },
    links: [
      {
        title: "Logistics and Supply Chain.",
        description:
          "From strategic sourcing and procurement to warehousing, distribution, and last-mile delivery, we design resilient supply chain solutions that reduce costs, optimize inventory, and accelerate your time to market.",
        to: "/logistics-and-supply-chain",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
      },
      {
        title: "Trade and Investment Facilitation.",
        description:
          "Connecting global investors, commercial enterprises, and cross-border trade partners with viable market opportunities, regulatory advisory, bilateral partnerships, and seamless transaction execution.",
        to: "/trade-and-investment-facilitation",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
      },
      {
        title: "Market Expansion Support.",
        description:
          "Guiding businesses into dynamic regional and international markets through comprehensive market entry blueprints, localized distribution networks, compliance advisory, and commercial matchmaking.",
        to: "/market-expansion-support",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1776766905/QuinnDaisies/2152001127_rzlgti.jpg",
      },
      {
        title: "Trade Data and Insights.",
        description:
          "Empowering cross-border operations with real-time trade lane analytics, customs tariff intelligence, freight rate benchmarks, and predictive market intelligence for confident decision-making.",
        to: "/trade-data-and-insights",
        image:
          "https://res.cloudinary.com/renaissance-images/image/upload/v1787010387/QuinnDaisies/124625_jouegu.jpg",
      },
    ],
  },
};

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentTopic, setCurrentTopic] = useState("international-trade");
  const [dropdownImage, setDropdownImage] = useState(
    dropdownData["international-trade"].defaultImage
  );
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if current route belongs to any link in a category
  const isCategoryActive = (topicKey) => {
    const topic = dropdownData[topicKey];
    if (!topic) return false;
    return topic.links.some(
      (link) => !link.external && link.to === location.pathname
    );
  };

  // Close menus and auto-expand active category accordion when navigating
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);

    for (const [key, category] of Object.entries(dropdownData)) {
      if (category.links.some((l) => !l.external && l.to === location.pathname)) {
        setOpenMobileDropdown(key);
        break;
      }
    }
  }, [location.pathname]);

  const handleNavTopicEnter = (topicKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(topicKey);
    setCurrentTopic(topicKey);
    if (dropdownData[topicKey]) {
      const activeLink = dropdownData[topicKey].links.find(
        (l) => !l.external && l.to === location.pathname
      );
      setDropdownImage(
        activeLink
          ? { src: activeLink.image, title: activeLink.title }
          : dropdownData[topicKey].defaultImage
      );
    }
  };

  const handleNavLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const isHomeActive =
    location.pathname === "/" || location.pathname === "/home";
  const isQuoteActive = location.pathname === "/get-a-quote";
  const isContactActive = location.pathname === "/contact-us";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMobileDropdown = (key) => {
    setOpenMobileDropdown((prev) => (prev === key ? null : key));
  };

  const currentDropdown =
    dropdownData[currentTopic] || dropdownData["international-trade"];

  return (
    <>
      <nav
        className={`${isScrolled ? "Scroll" : ""}`}
        onMouseLeave={handleNavLeave}
      >
        <div className="Navlink-Left">
          <Link
            className={`NavlinkItem ${activeDropdown === "we-are-quinn-daisies" ||
              isCategoryActive("we-are-quinn-daisies")
              ? "active"
              : ""
              }`}
            to="/corporate-overview"
            onMouseEnter={() => handleNavTopicEnter("we-are-quinn-daisies")}
          >
            We are Quinn Daisies
          </Link>

          <Link
            className={`NavlinkItem ${activeDropdown === "market-we-serve" ||
              isCategoryActive("market-we-serve")
              ? "active"
              : ""
              }`}
            to="/north-america"
            onMouseEnter={() => handleNavTopicEnter("market-we-serve")}
          >
            Market we serve
          </Link>

          <Link
            className={`NavlinkItem ${activeDropdown === "how-we-go-to-market" ||
              isCategoryActive("how-we-go-to-market")
              ? "active"
              : ""
              }`}
            to="/direct-sales"
            onMouseEnter={() => handleNavTopicEnter("how-we-go-to-market")}
          >
            How We Go To Market
          </Link>

          <div
            className={`NavlinkItem ${activeDropdown === "international-trade" ||
              isCategoryActive("international-trade")
              ? "active"
              : ""
              }`}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => handleNavTopicEnter("international-trade")}
          >
            International Trade
          </div>
        </div>

        <Link className="Navbar-Logo" to="/">
          <img
            src="https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg"
            alt="Quinn Daisies Logo"
          />
        </Link>

        <ul className="Navlink-Right">
          <Link
            className={`NavlinkItem ${location.pathname === "/insights" ? "active" : ""}`}
            to="/insights"
          >
            News & Press
          </Link>

          <Link
            className={`NavlinkItem ${location.pathname === "/partner-with-us" ? "active" : ""}`}
            to="/partner-with-us"
          >
            Partner With Us
          </Link>
        </ul>

        {/* Global Animated Mega Dropdown Menu */}
        <div
          className={`DropdownMenu ${activeDropdown ? "active" : ""}`}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleNavLeave}
        >
          <div className="DropdownMenuContainer">
            {currentDropdown.links.map((link, idx) => {
              const isLinkActive =
                !link.external && location.pathname === link.to;

              return link.external ? (
                <a
                  key={idx}
                  className="DropdownLink"
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setActiveDropdown(null)}
                  onMouseEnter={() =>
                    setDropdownImage({
                      src: link.image,
                      title: link.title,
                    })
                  }
                >
                  <h2>{link.title}</h2>
                  <p>{link.description}</p>
                </a>
              ) : (
                <Link
                  key={idx}
                  className={`DropdownLink ${isLinkActive ? "active" : ""}`}
                  to={link.to}
                  onClick={() => setActiveDropdown(null)}
                  onMouseEnter={() =>
                    setDropdownImage({
                      src: link.image,
                      title: link.title,
                    })
                  }
                >
                  <h2>{link.title}</h2>
                  <p>{link.description}</p>
                </Link>
              );
            })}
          </div>
          <div className="DropdownMenuImage">
            <img
              src={dropdownImage.src}
              alt={dropdownImage.title}
            />
          </div>
        </div>
      </nav>

      <div className={`ResponsiveNavigation ${isScrolled ? "Scroll" : ""}`}>
        <Link className="Navbar-Logo" to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg"
            alt="Quinn Daisies Logo"
          />
        </Link>

        <div className="ResponsiveNavigationControl" onClick={toggleMenu}>
          <div className="ResponsiveIcons active">
            <p>{menuOpen ? "Close" : "Menu"}</p>
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          className="ResponsiveMenuOverlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <ul className={`responsiveMenuList ${menuOpen ? "active" : ""}`}>
        <li className="MenuHeader">MENU</li>

        <li className={`ResponsiveDropdownItem ${isHomeActive ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        {/* Dropdown Accordions for Each Category */}
        {Object.entries(dropdownData).map(([key, category]) => {
          const isOpen = openMobileDropdown === key;
          const isCategoryCurrent = isCategoryActive(key);

          return (
            <li key={key} className="ResponsiveDropdownItem">
              <div
                className={`ResponsiveDropdownHeader ${isOpen ? "open" : ""} ${isCategoryCurrent ? "active" : ""
                  }`}
                onClick={() => toggleMobileDropdown(key)}
              >
                <span>{category.title}</span>
                <span className="material-symbols-outlined">
                  {isOpen ? "expand_less" : "expand_more"}
                </span>
              </div>

              {isOpen && (
                <ul className="ResponsiveSubmenu">
                  {category.links.map((link, idx) => {
                    const isLinkActive =
                      !link.external && location.pathname === link.to;

                    return (
                      <li key={idx}>
                        {link.external ? (
                          <a
                            href={link.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ResponsiveSubmenuLink"
                            onClick={() => setMenuOpen(false)}
                          >
                            <span className="submenu-title">
                              {link.title.replace(/\.$/, "")}
                            </span>
                          </a>
                        ) : (
                          <Link
                            to={link.to}
                            className={`ResponsiveSubmenuLink ${isLinkActive ? "active" : ""
                              }`}
                            onClick={() => setMenuOpen(false)}
                          >
                            <span className="submenu-title">
                              {link.title.replace(/\.$/, "")}
                            </span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}

        <li className={`ResponsiveDropdownItem ${location.pathname === "/insights" ? "active" : ""}`}>
          <Link to="/insights" onClick={() => setMenuOpen(false)}>
            News & Press
          </Link>
        </li>

        <li className={`ResponsiveDropdownItem ${location.pathname === "/partner-with-us" ? "active" : ""}`}>
          <Link to="/partner-with-us" onClick={() => setMenuOpen(false)}>
            Partner With Us
          </Link>
        </li>

        <li className={`ResponsiveDropdownItem ${isQuoteActive ? "active" : ""}`}>
          <Link to="/get-a-quote" onClick={() => setMenuOpen(false)}>
            Get Quotes
          </Link>
        </li>

        <li className={`ResponsiveDropdownItem ${isContactActive ? "active" : ""}`}>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </li>

        <div className="ResponsiveMenuBottom">
          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login Account
            </Link>
          </li>
          <li>
            <a
              href="https://calendly.com/quinndaisies-info/meeting"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Consultation
            </a>
          </li>
        </div>
      </ul>
    </>
  );
}
