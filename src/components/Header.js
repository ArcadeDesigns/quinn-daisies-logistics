import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Header() {
    
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
        <div>
          <h1>Header</h1>
        </div>
      </>
    );

}