import React from "react";
import Box from "../components/Home/Box";
import Header from "../components/Home/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import Slide from "../components/Home/Slide";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import Carousel from "../components/Home/Carousel";
import Advert from "../components/Home/Advert";
import Banner from "../components/Home/Banner";
import { Link } from "react-router-dom";

export default function Setup() {
  useSmoothScroll();

  return (
    <>
      <SEO 
        title="Quinn Daisies Logistics | Setup" 
        description="Setup your Quinn Daisies Logistics account." 
        url="https://www.logistics.quinndaisies.com/setup" 
      />

      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="LoginSection">
            <div className="LoginSectionImage">
              <img
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151468852_krro1f.jpg"
                alt="Quinn Daisies Logistics"
              />
            </div>

            <div className="LoginSectionForm">
              <div className="LoginSectionFormContainer">
                <div className="LoginSectionFormHeader">
                  <h1>Welcome back</h1>
                  <p>
                    Sign in to your Quinn Daisies account to manage shipments,
                    track deliveries, and access your logistics dashboard.
                  </p>
                </div>

                <div className="LoginSectionFormInput">
                  <div className="LoginSectionFormInputItem">
                    <span>Email Address</span>
                    <input
                      type="email"
                      placeholder="info@yourcompany.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="LoginSectionFormInputItem">
                    <span>Password</span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                    />
                  </div>

                  <div className="LoginSectionFormInputItem">
                    <span>Confirm Password</span>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                    />
                  </div>

                  <div className="LoginSectionFormInputItemOptionFlex">
                    <Link to="/">Forgot password?</Link>

                    <div className="LoginSectionFormInputItemOption">
                      <input type="checkbox" placeholder="" />
                      <p>Remember me</p>
                    </div>
                  </div>
                </div>

                <div className="LoginSectionFooter">
                  <button className="ApplicationButton">Login Account</button>
                  <div className="LoginSectionFooterContent">
                    <p>Don't own an account?</p>
                    <Link to="#">Sign up instead</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
