import React from "react";
import Box from "./components/Home/Box";
import Header from "./components/Home/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Slide from "./components/Home/Slide";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Carousel from "./components/Home/Carousel";
import Advert from "./components/Home/Advert";
import Banner from "./components/Home/Banner";
import { Link } from "react-router-dom";

export default function Login() {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>
          Quinn Daisies Logistics | Professional Logistics & Shipping Solutions
        </title>
        <meta
          name="description"
          content="Quinn Daisies Logistics provides professional shipping, packaging, and international logistics solutions. Expert consultation and customs clearance services available."
        />
        <link rel="canonical" href="https://www.logistics.quinndaisies.com" />
        <link
          rel="og:canonical"
          href="https://www.logistics.quinndaisies.com"
        />

        <meta
          property="og:title"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          property="og:description"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          property="og:url"
          content="https://www.logistics.quinndaisies.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          name="twitter:description"
          content="Quinn Daisies Logistics provides professional shipping, packaging, and international logistics solutions. Expert consultation and customs clearance services available."
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />

        <meta
          name="keywords"
          content="Expert logistics solutions including international shipping, packaging services, customs clearance, and importation services across 150+ countries."
        />
        <meta
          name="og:keywords"
          content="Expert logistics solutions including international shipping, packaging services, customs clearance, and importation services across 150+ countries."
        />

        <meta name="author" content="Ebire Folayemi Michael" />
        <meta name="revised" content="12th of April 2025" />
      </Helmet>

      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="LoginSection">
            <div className="LoginSectionImage">
              <img
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444167/2151468865_shzovx.jpg"
                alt=""
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
