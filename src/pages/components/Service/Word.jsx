import gsap from "gsap";
import { Flip } from "gsap/all";
import { Link } from "react-router-dom";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip);

gsap.registerPlugin(ScrollTrigger);

export default function Advert() {
  const pageRef = useRef(null);
  const galleryWrapRef = useRef(null);
  const galleryCleanupRef = useRef(null);
  const serviceGalleryEight = useRef(null);

  useEffect(() => {
    let isActive = true;
    const splitInstances = [];
    const splitTweens = [];

    const ctx = gsap.context(() => {
      gsap.set(".ServiceText", { opacity: 1 });

      const initSplitText = () => {
        const containers = gsap.utils.toArray(".ServiceContainer");

        containers.forEach((container) => {
          const text = container.querySelector(".ServiceText");
          if (!text) return;

          const split = SplitText.create(text, {
            type: "words,lines",
            mask: "lines",
            linesClass: "line",
            autoSplit: true,
          });

          splitInstances.push(split);

          const tween = gsap.from(split.lines, {
            yPercent: 120,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container,
              scrub: true,
              start: "top center",
              end: "bottom center",
            },
          });

          splitTweens.push(tween);
        });
      };

      const initAll = () => {
        if (!isActive) return;
        initSplitText();
        ScrollTrigger.refresh();
      };

      if (document.fonts?.ready) {
        document.fonts.ready.then(initAll);
      } else {
        initAll();
      }
    }, pageRef);

    return () => {
      isActive = false;
      splitTweens.forEach((tween) => tween.kill());
      splitInstances.forEach((split) => split.revert());
      ctx.revert();
    };
  }, []);

  useLayoutEffect(() => {
    let isActive = true;

    const createGalleryTween = () => {
      if (
        !isActive ||
        !serviceGalleryEight.current ||
        !galleryWrapRef.current
      ) {
        return;
      }

      galleryCleanupRef.current?.();

      const galleryElement = serviceGalleryEight.current;
      const galleryItems = galleryElement.querySelectorAll(
        ".ServiceGalleryItem",
      );

      if (!galleryItems.length) return;

      galleryElement.classList.remove("ServiceGalleryFinal");

      const ctx = gsap.context(() => {
        galleryElement.classList.add("ServiceGalleryFinal");
        const flipState = Flip.getState(galleryItems);
        galleryElement.classList.remove("ServiceGalleryFinal");

        const flip = Flip.to(flipState, {
          simple: true,
          ease: "expoScale(1, 5)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: galleryWrapRef.current,
            invalidateOnRefresh: true,
            // markers: true,
          },
        });

        tl.add(flip);

        galleryCleanupRef.current = () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          ctx.revert();
          galleryElement.classList.remove("ServiceGalleryFinal");
          gsap.set(galleryItems, { clearProps: "all" });
        };
      }, galleryWrapRef);
    };

    const handleResize = () => {
      if (!isActive) return;
      createGalleryTween();
      ScrollTrigger.refresh();
    };

    const initAll = () => {
      if (!isActive) return;
      createGalleryTween();
      window.addEventListener("resize", handleResize);
      ScrollTrigger.refresh();
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(initAll);
    } else {
      initAll();
    }

    return () => {
      isActive = false;
      window.removeEventListener("resize", handleResize);
      galleryCleanupRef.current?.();
    };
  }, []);

  return (
    <section className="Container ServiceContainer">
      <h2 className="ServiceText">
        At Quinn Daisies, we provide a comprehensive range of professional
        services designed to help organizations solve complex challenges,
        strengthen operations, and achieve sustainable success. From technology
        and logistics to consulting, workforce solutions, business development,
        and digital innovation, our services are tailored to deliver measurable
        value and long-term impact.
      </h2>
    </section>
  );
}
