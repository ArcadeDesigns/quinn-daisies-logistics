import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomeActive =
    location.pathname === "/" || location.pathname === "/home";
  const isQuoteActive = location.pathname === "/get-a-quote";
  const isAboutActive = location.pathname === "/quinn-daisies/about-us";
  const isServiceActive = location.pathname === "/quinn-daisies/services";
  const isResourcesActive = location.pathname === "/quinn-daisies/resources";
  const isContactActive =
    location.pathname === "/contact-quinn-daisies-logistics";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`${isScrolled ? "Scroll" : ""}`}>
        <div className="Navlink-Left">
          <Link
            className={`NavlinkItem ${isHomeActive ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`NavlinkItem ${isServiceActive ? "active" : ""}`}
            to="/quinn-daisies/services"
          >
            Our Service
          </Link>

          <Link
            className={`NavlinkItem ${isAboutActive ? "active" : ""}`}
            to="/quinn-daisies/about-us"
          >
            About Us
          </Link>

          <Link
            className={`NavlinkItem ${isResourcesActive ? "active" : ""}`}
            to="/quinn-daisies/resources"
          >
            Our Resources
          </Link>

          <Link
            className={`NavlinkItem ${isQuoteActive ? "active" : ""}`}
            to="/get-a-quote"
          >
            Get Quotes
          </Link>
        </div>

        <Link className="Navbar-Logo" to="/">
          <img
            src="https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg"
            alt="Quinn Daisies Logo"
          />
        </Link>

        <ul className="Navlink-Right">
          <Link className="NavlinkItem" to="/login">
            Login Account
          </Link>

          <Link
            className="NavlinkItem active"
            href="https://calendly.com/quinndaisies-info/meeting"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultation
          </Link>
        </ul>
      </nav>

      <div className={`ResponsiveNavigation ${isScrolled ? "Scroll" : ""}`}>
        <Link className="Navbar-Logo" to="/">
          <img
            src="https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg"
            alt="Quinn Daisies Logo"
          />
        </Link>

        <div className="ResponsiveNavigationControl" onClick={toggleMenu}>
          <div className="ResponsiveIcons active">
            <p>Menu</p>
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </div>
        </div>
      </div>

      <ul className={`responsiveMenuList ${menuOpen ? "active" : ""}`}>
        <li className="MenuHeader">MENU</li>
        <li className={isHomeActive ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={isServiceActive ? "active" : ""}>
          <Link to="/quinn-daisies/services">Our Service</Link>
        </li>
        <li className={isAboutActive ? "active" : ""}>
          <Link to="/quinn-daisies/about-us">About Us</Link>
        </li>
        <li className={isResourcesActive ? "active" : ""}>
          <Link to="/quinn-daisies/resources">Our Resources</Link>
        </li>
        <li className={isQuoteActive ? "active" : ""}>
          <Link to="/get-a-quote">Get Quotes</Link>
        </li>
        <li className={isContactActive ? "active" : ""}>
          <Link to="/quinn-daisies/contact-us">Contact Us</Link>
        </li>

        <div className="ResponsiveMenuBottom">
          <li className={isContactActive ? "active" : ""}>
            <Link to="/login">Login Account</Link>
          </li>
          <li>
            <a
              href="https://calendly.com/quinndaisies-info/meeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultation
            </a>
          </li>
        </div>
      </ul>
    </>
  );
}
