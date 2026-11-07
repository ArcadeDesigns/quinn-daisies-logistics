import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import GoogleLogo from "../../assets/Google.png";
import useSmoothScroll from "../../hooks/useSmoothScroll";

export default function Signup() {
  useSmoothScroll();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <SEO 
        title="Create an Account | Quinn Daisies Logistics" 
        description="Create your free Quinn Daisies Logistics account. Get access to real-time shipment tracking, customs clearance, and international shipping across 150+ countries." 
        url="https://www.logistics.quinndaisies.com/signup" 
      />

      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="RegisterSection">
            {/* ── Left Panel: Brand Image + Trust Signals ── */}
            <div className="LoginSectionImage">
              <img
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151468852_krro1f.jpg"
                alt="Quinn Daisies Logistics — Global shipping and freight solutions"
              />

              {/* Overlay trust badges — add className styling in your CSS */}
              <div className="LoginImageOverlay">
                <div className="LoginImageOverlayBadge">
                  <span className="LoginImageOverlayBadgeIcon">🌍</span>
                  <div>
                    <strong>150+ Countries</strong>
                    <p>Worldwide delivery network</p>
                  </div>
                </div>
                <div className="LoginImageOverlayBadge">
                  <span className="LoginImageOverlayBadgeIcon">🔒</span>
                  <div>
                    <strong>Secure & Insured</strong>
                    <p>Full cargo protection on every shipment</p>
                  </div>
                </div>
                <div className="LoginImageOverlayBadge">
                  <span className="LoginImageOverlayBadgeIcon">📦</span>
                  <div>
                    <strong>Real-Time Tracking</strong>
                    <p>Live updates from pickup to delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Panel: Signup Form ── */}
            <div className="LoginSectionForm">
              <div className="LoginSectionFormContainer">
                {/* Header */}
                <div className="LoginSectionFormHeader">
                  <h1>Create your account</h1>
                </div>

                {/* Form Fields */}
                <div className="LoginSectionFormInput">
                  <div className="LoginSectionFormInputItem">
                    <span>Business Email Address</span>
                    <input
                      type="email"
                      placeholder="you@yourcompany.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="RegisterSectionFormInputItem">
                    <span>Password</span>
                    <div className="LoginSectionFormInputItemPasswordWrapper">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        autoComplete="new-password"
                        required
                      />
                      <button
                        type="button"
                        className="LoginSectionPasswordToggle"
                        onClick={() => setShowPassword((p) => !p)}
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        <span className="material-symbols-outlined">
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>

                    <p className="LoginSectionFormInputHint">
                      Minimum 8 characters, including one uppercase letter and
                      one number.
                    </p>
                  </div>

                  {/* Confirm Password */}
                  <div className="RegisterSectionFormInputItem">
                    <span>Confirm Password</span>
                    <div className="LoginSectionFormInputItemPasswordWrapper">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        autoComplete="new-password"
                        required
                      />
                      <button
                        type="button"
                        className="LoginSectionPasswordToggle"
                        onClick={() => setShowConfirmPassword((p) => !p)}
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                      >
                        <span className="material-symbols-outlined">
                          {showConfirmPassword
                            ? "visibility_off"
                            : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="LoginSectionFormInputItemOptionFlex">
                    <div className="LoginSectionFormInputItemOption">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        required
                      />
                      <p>
                        I agree to the{" "}
                        <Link to="/terms-of-service">Terms of Service</Link> and{" "}
                        <Link to="/privacy-policy">Privacy Policy</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="LoginSectionFooter">
                  <button>
                    <p>Create Account</p>
                  </button>
                  <span>---------- OR ----------</span>
                  <button className="GoogleApplicationButton">
                    <img src={GoogleLogo} alt="Google Logo" />
                    <p>Continue with Google</p>
                  </button>
                  <div className="LoginSectionFooterContent">
                    <p>Already have an account?</p>
                    <Link to="/login">Sign in instead</Link>
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
