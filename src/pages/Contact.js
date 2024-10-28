import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Contact() {
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

    ScrollReveal().reveal(".reveal__bottom__interval", {
      origin: "bottom",
      interval: 300,
      duration: 3000,
      reset: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact-content-container">
          <img
            className="contact-content-container-image"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729771779/Quinn%20Daisies%20Logistics/cargo-ship-background-world-map_1111504-17953_wsta24.avif"
            alt="Quinn Daisies Logistics"
          />

          <div className="contact-content">
            <h2>Looking for a Personalized Quote? Connect with Us Today</h2>
            <p>
              Our team is committed to delivering exceptional service tailored
              to your needs. Schedule a consultation with us to explore
              customized solutions.
            </p>
            <a
              href="https://calendly.com/quinndaisies-info/meeting"
              className="home-content-button"
            >
              <span className="home-content-button-span">
                Schedule a Meeting
              </span>
              <img
                className="home-content-button-image"
                src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729712988/Quinn%20Daisies%20Logistics/Near_Me_htd7ob.png"
                alt="Arrow Right"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
