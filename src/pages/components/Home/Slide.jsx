import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import usePinnedSlides from "../../../hooks/usePinnedSlides";
import { industrySlides } from "../../../data/industrySlides";
import ScrollReveal from "scrollreveal";

export default function Slide() {
  const imagePinRef = useRef(null);

  // ✅ Apply animation
  usePinnedSlides(imagePinRef);

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

    ScrollReveal().reveal(".reveal__bottom__interval_slide", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: false,
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
    <section className="ApplicationImageDesign" ref={imagePinRef}>
      <div className="ApplicationChartContentListContainer">
        <div className="fill"></div>

        <div className="ApplicationChartContentList">
          <h2 className="ApplicationImageDesignHeader reveal__bottom__interval_slide">
            Built for reliability, visibility, and vendor confidence
          </h2>
          {industrySlides.map((item, index) => (
            <div
              key={index}
              className={`ApplicationChartDesignItem reveal__bottom__interval_slide ${index === 0 ? "is-active" : ""
                }`}
            >
              <h4>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="ApplicationChartContent">
        <div className="ApplicationChartSlides">
          {industrySlides.map((item, index) => (
            <div
              key={index}
              className={`ApplicationChartSlide ${index === 0 ? "is-active" : ""
                }`}
            >
              <div className="ApplicationChartContentContainer">
                <img
                  className="ApplicationChartContentContainerImage"
                  src={item.image}
                  alt={item.title}
                />

                <div className="ApplicationChartContentContainerContent">
                  <p className="ApplicationChartContentContainerContentText">
                    {item.description}
                  </p>

                  <Link className="ApplicationButton" to={item.link}>
                    Learn More Here
                    <span class="material-symbols-outlined">
                      globe_location_pin
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
