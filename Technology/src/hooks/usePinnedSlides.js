import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned Slides Hook for Quinn Daisies Technology.
 * Directly ported from the Logistics landing page (usePinnedSlides.js),
 * enabling an interactive operational framework with a vertical progress track fill,
 * slide transitions (autoAlpha + x slide), and stage item state toggling.
 */
export default function usePinnedSlides(ref) {
  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;

      const listItems = gsap.utils.toArray(
        ".ApplicationChartDesignItem",
        section
      );
      const slides = gsap.utils.toArray(".ApplicationChartSlide", section);
      const fill = section.querySelector(".fill");

      if (!listItems.length || !slides.length || !fill) return;

      let activeIndex = 0;

      const setActive = (index) => {
        listItems.forEach((item, i) => {
          item.classList.toggle("is-active", i === index);
        });

        slides.forEach((slide, i) => {
          gsap.to(slide, {
            autoAlpha: i === index ? 1 : 0,
            x: i === index ? 0 : i < index ? -60 : 60,
            duration: 0.35,
            overwrite: true,
          });
        });
      };

      gsap.set(fill, { transformOrigin: "top center", scaleY: 0 });
      gsap.set(slides, { autoAlpha: 0, x: 60 });
      gsap.set(slides[0], { autoAlpha: 1, x: 0 });

      setActive(0);

      const clickHandlers = listItems.map((item, idx) => {
        const handler = () => {
          activeIndex = idx;
          setActive(idx);
          gsap.to(fill, {
            scaleY: (idx + 1) / listItems.length,
            duration: 0.25,
            overwrite: "auto",
          });
        };
        item.addEventListener("click", handler);
        return { item, handler };
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 993px)", () => {
        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerHeight * Math.max(slides.length - 1, 1)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            gsap.set(fill, { scaleY: self.progress });

            const nextIndex = Math.min(
              slides.length - 1,
              Math.floor(self.progress * slides.length)
            );

            if (nextIndex !== activeIndex) {
              activeIndex = nextIndex;
              setActive(activeIndex);
            }
          },
        });

        return () => trigger.kill();
      });

      mm.add("(max-width: 992px)", () => {
        gsap.set(fill, { scaleY: 1 / listItems.length });
        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top 75%",
          end: "bottom 35%",
          pin: false,
          scrub: 0.5,
          onUpdate: (self) => {
            gsap.set(fill, { scaleY: Math.max(1 / listItems.length, self.progress) });
            const nextIndex = Math.min(
              slides.length - 1,
              Math.floor(self.progress * slides.length)
            );
            if (nextIndex !== activeIndex) {
              activeIndex = nextIndex;
              setActive(activeIndex);
            }
          },
        });

        return () => trigger.kill();
      });

      return () => {
        clickHandlers.forEach(({ item, handler }) =>
          item.removeEventListener("click", handler)
        );
        mm.revert();
      };
    },
    { scope: ref }
  );
}

