import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function useSmoothScroll() {
  useGSAP(() => {
    const existing = ScrollSmoother.get();
    if (existing) existing.kill();

    const wrapper = document.querySelector("#smooth-wrapper");
    const content = document.querySelector("#smooth-content");
    if (!wrapper || !content) {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      return;
    }

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: false,
    });

    return () => {
      if (smoother) smoother.kill();
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);
}
