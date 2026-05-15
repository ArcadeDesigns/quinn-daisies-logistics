import React from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  return (
    <section className="SectionContainer">
      <div className="ApplicationBanner">
        <img
          src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
          alt="Quinn Daisies"
        />

        <div className="ApplicationBannerOverlay">
          <h2>Need Deep Technical Expertise Supporting Modern Systems</h2>
          <p className="ApplicationText">
            Turn your professional, technical and strategic difficulties into a
            competitive advantage with our expert solutions.
          </p>

          <Link className="ApplicationButton" to="/">
            Learn More Here
            <span class="material-symbols-outlined">globe_location_pin</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
