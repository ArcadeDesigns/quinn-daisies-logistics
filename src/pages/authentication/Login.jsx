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
import GoogleLogo from "../../assets/Google.png";

export default function Login() {
  useSmoothScroll();

  return (
    <>
      <SEO 
        title="Quinn Daisies Logistics | Login" 
        description="Sign in to your Quinn Daisies account to manage shipments, track deliveries, and access your logistics dashboard." 
        url="https://www.logistics.quinndaisies.com/login" 
      />

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
                  <button>
                    <p>Login Account</p>
                  </button>
                  <span>---------- OR ----------</span>
                  <button className="GoogleApplicationButton">
                    <img src={GoogleLogo} alt="Google Logo" />
                    <p>Continue with Google</p>
                  </button>
                  <div className="LoginSectionFooterContent">
                    <p>Don't own an account?</p>
                    <Link to="/signup">Sign up instead</Link>
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
