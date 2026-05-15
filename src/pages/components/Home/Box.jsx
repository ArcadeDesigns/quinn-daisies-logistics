import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "scrollreveal";

gsap.registerPlugin(ScrollTrigger);

export default function Box() {
  const containerRef = useRef(null);

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

  const solutions = [
    {
      icon: "inventory",
      title: "Restock with less friction",
      text: "We help vendors reduce the operational burden of sourcing, coordinating, and receiving imported food shipments.",
      link: "/home",
    },
    {
      icon: "trending_up",
      title: "Improve compliance readiness",
      text: "Products and documentation are reviewed before export so issues can be addressed earlier, not after arrival.",
      link: "/home",
    },
    {
      icon: "delivery_truck_speed",
      title: "Get better shipment visibility",
      text: "Our workflow is designed around tracking milestones, exception handling, and proactive communication.",
      link: "/home",
    },
    {
      icon: "all_match",
      title: "Operate with more confidence",
      text: "With executive presence in the United States and operational coordination in Nigeria, we provide a stronger foundation for trust-sensitive vendor relationships.",
      link: "/home",
    },
  ];

  // ApplicationBox stagger animation
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".ApplicationBox");

      boxes.forEach((box) => {
        gsap.to(box, {
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="sectionBox" ref={containerRef}>
      <div className="SectionHeader">
        <h2 className="reveal__top">Why businesses choose Quinn Daisies</h2>
      </div>

      <div className="ApplicationContainer">
        {solutions.map((item, index) => (
          <div className="ApplicationBox" key={index}>
            <span class="BoxIcon material-symbols-outlined">{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>

            <Link className="ApplicationButton" to={item.link}>
              Learn More Here
              <span class="material-symbols-outlined">globe_location_pin</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
