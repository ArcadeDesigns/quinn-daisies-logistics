import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";

gsap.registerPlugin(ScrollTrigger);

export default function Carousel() {
  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);

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

  // Horizontal carousel animation
  useGSAP(
    () => {
      const section = carouselSectionRef.current;
      const strip = carouselStripRef.current;

      if (!section || !strip) return;

      const getScrollAmount = () => -(strip.scrollWidth - window.innerWidth);

      gsap.to(strip, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: () => `+=${strip.scrollWidth - window.innerWidth}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    },
    { scope: carouselSectionRef },
  );

  return (
    <section
      className="Dark-Background"
      id="CarouselAnimation"
      ref={carouselSectionRef}
    >
      <div className="ApplicationCarousel">
        <div className="ApplicationCarouselFlex">
          <h2 className="reveal__left">
            We Solve the Problem of Fragmented Restocking and Unreliable Import
            Coordination
          </h2>

          <div className="ApplicationCarouselContainer reveal__right">
            <p className="ApplicationCarouselContainerText">
              For many African food retailers, specialty grocers, wholesalers,
              and import-focused businesses in the United States, restocking
              from Nigeria is often more difficult than it should be. The
              challenge is not just shipping. It is the lack of a structured,
              dependable system for sourcing, documentation, shipment
              coordination, compliance review, tracking, and final delivery
              support.
            </p>
          </div>
        </div>

        <div className="ApplicationCarouselViewport">
          <div className="ApplicationCarouselSlide" ref={carouselStripRef}>
            <div className="ApplicationCarouselSlideBox">
              <h4>Fragmented supplier coordination</h4>
              <p>
                We streamline sourcing, shipping, and delivery coordination to
                reduce delays and improve operational clarity.
              </p>
            </div>

            <div className="ApplicationCarouselSlideBoxImage">
              <img
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1761835851/QuinnDaisies/165478_jbtjkf.jpg"
                alt="Quinn Daisies"
              />
            </div>

            <div className="ApplicationCarouselSlideBox">
              <h4>Poor landed-cost visibility</h4>
              <p>
                We improve cost visibility across sourcing, freight, and
                delivery to support better planning and decision-making.
              </p>
            </div>

            <div className="ApplicationCarouselSlideBox">
              <h4>Documentation errors</h4>
              <p>
                We help reduce documentation and labeling mistakes that can
                delay imports and increase compliance risk.
              </p>
            </div>

            <div className="ApplicationCarouselSlideBox">
              <h4>Stock-out pressure</h4>
              <p>
                We support more reliable replenishment planning to help vendors
                avoid delays, shortages, and lost sales.
              </p>
            </div>

            <div className="ApplicationCarouselSlideBox">
              <h4>Delivery uncertainty</h4>
              <p>
                We coordinate final handoff and delivery support to improve
                consistency, visibility, and operational confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
