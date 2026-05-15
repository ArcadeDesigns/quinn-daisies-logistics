import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import LinkedIn from "../assets/LinkedIn.png";

export default function Footer() {
  return (
    <>
      <div className="Footer ApplicationFooter">
        <div className="ApplicationFlex">
          <div className="ApplicationFooterBox">
            <Link to="/" className="Logo">
              <img
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1761785344/QuinnDaisies/Quinndaisies_rn3j1l.svg"
                alt="Quinn Daisies Logo"
              />
            </Link>
            <div className="ApplicationFooterBoxLink">
              <p>
                1915 Wetterhorn Ct,
                Frederick County, Maryland, United States, 21702
              </p>
            </div>

            <div className="ApplicationFooterBoxSocial">
              <Link to="/home" className="Cta">
                <img
                  src={LinkedIn}
                  alt="Quinn Daisies Logo"
                />
              </Link>
              <Link to="/home" className="Cta">
                <img
                  src={Instagram}
                  alt="Quinn Daisies Logo"
                />
              </Link>
              <Link to="/home" className="Cta">
                <img
                  src={Facebook}
                  alt="Quinn Daisies Logo"
                />
              </Link>
            </div>
          </div>

          <div className="ApplicationFooterBox">
            <h4>Reach Out</h4>
            <div className="ApplicationFooterBoxLink">
              <Link to="/home" className="Cta">
                contact.us@quinndaisies.com
              </Link>
              <Link to="/home" className="Cta">
                United States
              </Link>
              <Link to="/home" className="Cta">
                Nigeria
              </Link>
            </div>
          </div>

          <div className="ApplicationFooterBox">
            <h4>Quick Links</h4>
            <div className="ApplicationFooterBoxLink">
              <Link to="/" className="Cta">
                Home Page
              </Link>
              <Link to="/quinn-daisies/about-us" className="Cta">
                About Us
              </Link>
              <Link to="/quinn-daisies/contact-us" className="Cta">
                Contact Us
              </Link>
              <Link to="/quinn-daisies/resources" className="Cta">
                Resources
              </Link>
            </div>
          </div>

          <div className="ApplicationFooterBox">
            <h4>Expertise and Solutions</h4>
            <div className="ApplicationFooterBoxLink">
              <Link to="/home" className="Cta">
                Workforce & Talent Solutions
              </Link>
              <Link to="/home" className="Cta">
                Business Consulting & Growth Strategy
              </Link>
              <Link to="/home" className="Cta">
                Logistics & Government Contracting
              </Link>
              <Link to="/home" className="Cta">
                Staffing and Recruitment
              </Link>
            </div>
          </div>
        </div>

        <div className="ApplicationFooterBottom">
          <div className="ApplicationFooterBox">
            <h4>Resources</h4>
            <div className="ApplicationFooterBoxBottomLink">
              <Link to="/home" className="Cta">
                Terms of Use
              </Link>
              <Link to="/home" className="Cta">
                Privacy Policy
              </Link>
              <Link to="/home" className="Cta">
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
