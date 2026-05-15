import { useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    <section className="SectionContainer">
      <div className="SectionColorHeader">
        <span className="reveal__top">We help businesses navigate cross-border expansion</span>
        <h2 className="reveal__bottom">
          Expanding beyond your current market or Planning your next stage of
          growth?
        </h2>
      </div>

      <div className="SectionFlex">
        <div className="SectionBoxSmall reveal__left">
          <h2>
            100% <span>logistics coordination</span>
          </h2>
          <p>
            Quinndaisies helps simplify the move with structured coordination,
            cross-border support, and a reliable framework for market expansion.
          </p>
          <img
            src="https://res.cloudinary.com/renaissance-images/image/upload/v1775773762/QuinnDaisies/Increase_z414ux.png"
            alt="Quinn Daisies"
          />
        </div>

        <div className="SectionBoxLarge reveal__bottom">
          <img
            src="https://res.cloudinary.com/renaissance-images/image/upload/v1761822587/QuinnDaisies/10382_ixmdn7.jpg"
            alt="Quinn Daisies"
          />
        </div>

        <div className="SectionBoxSmall reveal__top">
          <p>
            Quinndaisies supports growing businesses with the coordination,
            market-entry logistics, and operational structure needed to move
            into the U.S. with greater clarity and control.
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
