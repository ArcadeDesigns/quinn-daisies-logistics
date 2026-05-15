import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

export default function Header({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImages = [],
}) {

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
    <div className="OpportunityAppCtn">
      <div className="OpportunityAppHeader">
        <div className="ContentCtn-Center">
          {subtitle && (
            <span className="ContentCtn-Center-Span reveal__top">{subtitle}</span>
          )}
          {title && <h1 className="reveal__left">{title}</h1>}
          {description && <p className="reveal__right">{description}</p>}
        </div>

        {buttonText && buttonLink && (
          <div className="SingleBtnCtn-Center reveal__bottom">
            <Link className="ApplicationButton" to={buttonLink}>
              {buttonText}
              <span class="material-symbols-outlined">globe_location_pin</span>
            </Link>
          </div>
        )}
      </div>

      {backgroundImages.length > 0 && (
        <div className="BackgroundImage">
          {backgroundImages.map((img, index) => (
            <img className="reveal__bottom__interval" key={index} src={img} alt={`Background ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}
