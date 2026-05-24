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
                1915 Wetterhorn Ct, Frederick County, Maryland, United States,
                21702
              </p>
            </div>

            <div className="ApplicationFooterBoxSocial">
              <Link to="/home" className="Cta">
                <img src={LinkedIn} alt="Quinn Daisies Logo" />
              </Link>
              <Link to="/home" className="Cta">
                <img src={Instagram} alt="Quinn Daisies Logo" />
              </Link>
              <Link to="/home" className="Cta">
                <img src={Facebook} alt="Quinn Daisies Logo" />
              </Link>
            </div>
          </div>

          <div className="ApplicationFooterBox">
            <h4>Reach Out</h4>
            <div className="ApplicationFooterBoxLink">
              <Link to="/home" className="Cta">
                contact.us@quinndaisies.com
              </Link>
              <Link
                to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2748649816094!2d-77.42511932349208!3d39.463778613086454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9c52a5e57af13%3A0x210d900d99a68089!2s1915%20Wetterhorn%20Ct%2C%20Frederick%2C%20MD%2021702%2C%20USA!5e1!3m2!1sen!2sng!4v1778445237880!5m2!1sen!2sng"
                className="Cta"
              >
                Locate us in Maryland
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
              <Link to="/quinn-daisies/services" className="Cta">
                Our Services
              </Link>
              <Link to="/quinn-daisies/resources" className="Cta">
                Resources
              </Link>
            </div>
          </div>

          <div className="ApplicationFooterBox">
            <h4>Expertise and Solutions</h4>
            <div className="ApplicationFooterBoxLink">
              <Link
                to="https://calendly.com/quinndaisies-info/meeting"
                className="Cta"
              >
                Our Marketplace
              </Link>
              <Link
                to="https://calendly.com/quinndaisies-info/meeting"
                className="Cta"
              >
                Need a Consultation?
              </Link>
              <Link to="/get-a-quote" className="Cta">
                Get a Quote
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
