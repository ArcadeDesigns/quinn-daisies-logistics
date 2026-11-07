import React, { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { QuinnDevsiteHeader, QuinnTechFooter } from "../components/QuinnGoogleAssets";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/**
 * Master Technology Template Layout
 * 1. Pinned sticky QuinnDevsiteHeader outside the smooth wrapper to maintain
 *    100% stable positioning, native search, and zero matrix3d transform distortion.
 * 2. GSAP ScrollSmoother wrapping the Outlet and QuinnTechFooter for luxury
 *    smooth scrolling across all 21+ Technology pages.
 * 3. Automatic route-change reset, ensuring instant scroll to top and ScrollTrigger recalculation.
 */
export default function TechnologyLayout() {
  const { pathname, hash } = useLocation();
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  // Initialize GSAP Smooth Scroll
  useSmoothScroll(wrapperRef, contentRef);

  // On route or hash change, handle scroll repositioning & recalculate triggers
  useEffect(() => {
    const smoother = ScrollSmoother.get();

    if (hash) {
      // If there's an anchor tag in URL, scroll to target cleanly
      const target = document.querySelector(hash);
      if (target) {
        if (smoother) {
          smoother.scrollTo(target, true, "top 120px");
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      if (smoother) {
        smoother.scrollTop(0);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    }

    // Refresh GSAP markers and measurements on page DOM change
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return (
    <div className="qd-tech-app-shell">
      {/* Pinned DevSite Header placed outside #smooth-wrapper */}
      <QuinnDevsiteHeader />

      {/* GSAP ScrollSmoother Container */}
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <main className="qd-tech-main-outlet">
            <Outlet />
          </main>
          <QuinnTechFooter />
        </div>
      </div>
    </div>
  );
}

