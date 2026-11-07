import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Universal GSAP ScrollSmoother hook for Quinn Daisies Technology template.
 * Provides luxury, butter-smooth 60-120fps scrolling physics across all pages,
 * perfectly matching the Logistics landing page experience.
 */
export default function useSmoothScroll(wrapperRef, contentRef) {
  useGSAP(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return undefined;

    // Kill any existing ScrollSmoother instance before creating a new one
    const existing = ScrollSmoother.get();
    if (existing) existing.kill();

    const wrapper =
      wrapperRef?.current || document.querySelector("#smooth-wrapper");
    const content =
      contentRef?.current || document.querySelector("#smooth-content");

    if (!wrapper || !content) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      return undefined;
    }

    ScrollTrigger.config({ ignoreMobileResize: true });

    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth: 1.2,
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: false,
    });

    // Refresh ScrollTrigger to ensure all markers and positions are accurate
    ScrollTrigger.refresh();

    return () => {
      if (smoother) smoother.kill();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      ScrollTrigger.clearScrollMemory();
    };
  }, []);
}

