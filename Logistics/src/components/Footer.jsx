import React from "react";
import { Link } from "react-router-dom";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";

const TECH_PORTAL_URL =
  import.meta.env.VITE_TECH_PORTAL_URL || "https://quinndaisies.org";

export default function Footer() {
  return (
    <>
      <div className="Footer ApplicationFooter">
        <div className="ApplicationFlex">
          <div className="ApplicationFooterBoxContainer">
            <Link to="/" className="Logo">
              <img
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg"
                alt="Quinn Daisies Logo"
              />
            </Link>
            <div className="ApplicationFooterBoxLink">
              <p>
                1915 Wetterhorn Ct, Frederick County, Maryland, United States,
                21702
              </p>
              <p>
                130Km Idiroko Road Opposite Zenith Bank, Ijoko, Ogun State
              </p>
              <p>
                Saccho Car Park, Opposite Saccho Glass House, Payment Point 2, Nacho, MMIA, Ikeja, Lagos State
              </p>
            </div>

            <div className="ApplicationFooterBoxSocial">
              <a
                href="https://www.linkedin.com/company/quinn-daisies/"
                target="_blank"
                rel="noopener noreferrer"
                className="Cta"
              >
                <img src={LinkedIn} alt="Quinn Daisies LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/quinn_daisies"
                target="_blank"
                rel="noopener noreferrer"
                className="Cta"
              >
                <img src={Instagram} alt="Quinn Daisies Instagram" />
              </a>
            </div>
          </div>

          <div className="FooterGridApplicationStructure">
            <div className="ApplicationFooterBox">
              <h4>Quick Links</h4>
              <div className="ApplicationFooterBoxLink">
                <Link to="/" className="Cta">
                  Home Page
                </Link>
                <Link to="/about-us" className="Cta">
                  About Us
                </Link>
                <Link to="/services" className="Cta">
                  Our Services
                </Link>
                <Link to="/resources" className="Cta">
                  Resources
                </Link>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>About Us</h4>
              <div className="ApplicationFooterBoxLink">
                <Link to="/corporate-overview" className="Cta">
                  Corporate Overview
                </Link>
                <Link className="Cta" to="/global-capabilities">
                  Global Capabilities
                </Link>
                <Link className="Cta" to="/our-mission-and-vision">
                  Our Mission & Vision
                </Link>
                <Link to="/compliance-and-safety" className="Cta">
                  Compliance & Safety
                </Link>
                <Link to="/careers" className="Cta">
                  Careers
                </Link>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>Market We Serve</h4>
              <div className="ApplicationFooterBoxLink">
                <Link to="/north-america" className="Cta">
                  North America (US & Canada)
                </Link>
                <Link to="/europe" className="Cta">
                  Europe
                </Link>
                <Link to="/asia" className="Cta">
                  Asia
                </Link>
                <Link to="/middle-east-and-africa" className="Cta">
                  Middle East & Africa
                </Link>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>Our Approach</h4>
              <div className="ApplicationFooterBoxLink">
                <Link to="/direct-sales" className="Cta">
                  Direct Sales
                </Link>
                <Link to="/distribution-partnerships" className="Cta">
                  Distribution Partnerships
                </Link>
                <Link to="/online-presence-ecommerce" className="Cta">
                  Online Presence & E-Commerce
                </Link>
                <Link to="/event-and-expo-participation" className="Cta">
                  Event & Expo Participation
                </Link>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>International Trade</h4>
              <div className="ApplicationFooterBoxLink">
                <Link to="/logistics-and-supply-chain" className="Cta">
                  Logistics and Supply Chain
                </Link>
                <Link to="/trade-and-investment-facilitation" className="Cta">
                  Trade & Investment Facilitation
                </Link>
                <Link to="/market-expansion-support" className="Cta">
                  Market Expansion Support
                </Link>
                <Link to="/trade-data-and-insights" className="Cta">
                  Trade Data & Insights
                </Link>
                <Link to="/commodities-and-supply" className="Cta">
                  Commodities & Supply
                </Link>
                <Link to="/sustainability" className="Cta">
                  Sustainability
                </Link>
                <Link to="/community" className="Cta">
                  Community
                </Link>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>Technology and IT Solutions</h4>
              <div className="ApplicationFooterBoxLink">
                <a
                  href={`${TECH_PORTAL_URL}/technology-and-visibility`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Technology & Visibility
                </a>
                <a
                  href={`${TECH_PORTAL_URL}/contract-procurement-and-writing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Contract Procurement & Writing Services
                </a>
                <a
                  href={`${TECH_PORTAL_URL}/technology-corporate-review`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Technology Corporate Review
                </a>
                <a
                  href={`${TECH_PORTAL_URL}/software-development-and-engineering`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Software Development & Engineering
                </a>
                <a
                  href={`${TECH_PORTAL_URL}/artificial-intelligence`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Artificial Intelligence & Application Dev
                </a>
                <a
                  href={`${TECH_PORTAL_URL}/mobile-application-development`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Mobile & Desktop Application Development
                </a>
                <a
                  href={`${TECH_PORTAL_URL}/seo-and-geo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  SEO, GEO & Digital Marketing
                </a>
                <a
                  href={`${TECH_PORTAL_URL}/workforce-development-and-training`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Workforce Development & IT Solutions
                </a>
                <a
                  href={`${TECH_PORTAL_URL}/technology-programs`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Tech Programs & Products
                </a>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>News & Press</h4>
              <div className="ApplicationFooterBoxLink">
                <Link to="/insights" className="Cta">
                  Press Releases
                </Link>
                <Link to="/resources" className="Cta">
                  Media Kit & Assets
                </Link>
                <Link to="/insights" className="Cta">
                  Industry Reports & Insights
                </Link>
                <Link to="/event-and-expo-participation" className="Cta">
                  Events & Media Coverage
                </Link>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>Partnership</h4>
              <div className="ApplicationFooterBoxLink">
                <Link to="/partner-with-us" className="Cta">
                  Partner With Us
                </Link>
                <Link to="/distribution-partnerships" className="Cta">
                  Distribution Partnerships
                </Link>
                <a
                  href="https://calendly.com/quinndaisies-info/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Direct Consultation
                </a>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>Reach Out</h4>
              <div className="ApplicationFooterBoxLink">
                <a href="mailto:info@quinndaisies.com" className="Cta">
                  info@quinndaisies.com
                </a>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2748649816094!2d-77.42511932349208!3d39.463778613086454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9c52a5e57af13%3A0x210d900d99a68089!2s1915%20Wetterhorn%20Ct%2C%20Frederick%2C%20MD%2021702%2C%20USA!5e1!3m2!1sen!2sng!4v1778445237880!5m2!1sen!2sng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Locate us in Maryland
                </a>
              </div>
            </div>

            <div className="ApplicationFooterBox">
              <h4>Expertise and Solutions</h4>
              <div className="ApplicationFooterBoxLink">
                <a
                  href="https://calendly.com/quinndaisies-info/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Our Marketplace
                </a>
                <a
                  href="https://calendly.com/quinndaisies-info/meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Cta"
                >
                  Need a Consultation?
                </a>
                <Link to="/get-a-quote" className="Cta">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="ApplicationFooterBottom">
          <div className="ApplicationFooterBox">
            <h4>Legal & Compliance</h4>
            <div className="ApplicationFooterBoxBottomLink">
              <Link to="/terms-of-use" className="Cta">
                Terms of Use
              </Link>
              <Link to="/privacy-policy" className="Cta">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="Cta">
                Cookie Policy
              </Link>
            </div>
          </div>
          <p>2026 All rights Reserved - Quinn Daisies</p>
        </div>
      </div>
    </>
  );
}
