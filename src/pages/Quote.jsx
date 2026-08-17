import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ScrollReveal from "scrollreveal";
import Form from "./components/Quote/Form";

export default function Quote() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal__bottom", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".reveal__top", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".reveal__left", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });
    ScrollReveal().reveal(".reveal__right", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <SEO 
        title="Quinn Daisies Logistics | Get a Quote" 
        description="Discuss your logistics needs with Quinn Daisies. Tell us what you need to move and we'll provide a customized shipping solution." 
        url="https://www.logistics.quinndaisies.com/get-a-quote" 
      />
      <div>
        <Navbar />

        {/* ========== HERO SECTION ========== */}
        <section className="QuoteContainer">
          <div className="QuoteContentSection">
            <img
              src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg"
              alt="Quinn Daisies Logistics"
              className="QuoteBackgroundImage"
            />

            <div className="QuoteContentOverlay">
              <div className="QuoteHeaderContent">
                <h1 className="reveal__top">Discuss Your Logistics Needs</h1>
                <p className="reveal__bottom">
                  Tell us what you need to move and we’ll provide a customized
                  shipping solution with transparent pricing and expert
                  coordination.
                </p>
              </div>

              <div className="QuoteFlexCtnBoxCtn">
                <div className="FlexCtnBoxCtn">
                  <div className="FlexCtnBox reveal__bottom__interval">
                    <span className="material-symbols-outlined">
                      alternate_email
                    </span>
                    <div className="FlexCtnBoxContent">
                      <h3>Reach Out</h3>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@quinndaisies.com"
                        target="_blank"
                      >
                        info@quinndaisies.com
                      </a>
                    </div>
                  </div>

                  <div className="FlexCtnBox reveal__bottom__interval">
                    <span className="material-symbols-outlined">phone</span>
                    <div className="FlexCtnBoxContent">
                      <h3>Contact Sales</h3>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@quinndaisies.com"
                        target="_blank"
                      >
                        sales@quinndaisies.com
                      </a>
                    </div>
                  </div>

                  <div className="FlexCtnBox reveal__bottom__interval">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                    <div className="FlexCtnBoxContent">
                      <h3>Address</h3>
                      <a
                        href="https://maps.app.goo.gl/swpx8XwaJAT22RGq8"
                        target="_blank"
                      >
                        1915 Wetterhorn Ct, Frederick County, Maryland, United
                        States, 21702
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Form />
        </section>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2748649816094!2d-77.42511932349208!3d39.463778613086454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9c52a5e57af13%3A0x210d900d99a68089!2s1915%20Wetterhorn%20Ct%2C%20Frederick%2C%20MD%2021702%2C%20USA!5e1!3m2!1sen!2sng!4v1778445237880!5m2!1sen!2sng"
          width="100%"
          height="1000"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Footer />
      </div>
    </>
  );
}
