import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DHL from "../../../assets/DHL.png";
import UPS from "../../../assets/UPS.png";
import FedEx from "../../../assets/FedEx.png";
import ScrollReveal from "scrollreveal";

gsap.registerPlugin(ScrollTrigger);

export default function Advert() {

  useEffect(() => {
    ScrollReveal().reveal(".reveal__bottom", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__top", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__left", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__right", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__top__interval", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__left__interval", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__bottom__interval", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__right__interval", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="HeroContainer">
      <img
        src="https://res.cloudinary.com/renaissance-images/image/upload/v1775929345/QuinnDaisies/2151937269_ubbvn4.jpg"
        alt="Quinn Daisies"
      />

      <div className="HeroOverlay OverwriteHeroOverlayFlex">
        <div className="ServiceHeroContent">
          <h1 className="reveal__top">Growth, Performance, and Long-Term Value</h1>
          <p className="ServiceHeroContentText reveal__bottom">
            Quinn Daisies offers tailored logistics solutions designed to
            streamline operations and enhance efficiency for businesses across
            diverse industries. Our team specializes in providing seamless,
            end-to-end logistics management that prioritizes reliability, speed,
            and cost-effectiveness, ensuring your goods reach their destination
            safely and on schedule.
          </p>

          <Link className="ApplicationButton reveal__bottom" to="/">
            Learn More Here
            <span class="material-symbols-outlined">globe_location_pin</span>
          </Link>
        </div>

        <div className="PartnerBoxContainer">
          <div className="PartnerBox reveal__bottom__interval">
            <img src={DHL} alt="DHL" />
            <p>DHL</p>
          </div>

          <div className="PartnerBox reveal__bottom__interval">
            <img src={UPS} alt="UPS" />
            <p>UPS</p>
          </div>

          <div className="PartnerBox reveal__bottom__interval">
            <img src={FedEx} alt="FedEx" />
            <p>FedEx</p>
          </div>
        </div>
      </div>
    </section>
  );
}
