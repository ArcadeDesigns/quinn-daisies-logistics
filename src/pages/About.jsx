import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ScrollReveal from "scrollreveal";
import Intro from "./components/About/Intro";
import Flex from "./components/About/Flex";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function About() {
    useSmoothScroll();

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
    }, []);

    return (
        <>
            <SEO 
                title="Quinn Daisies Logistics | About Us" 
                description="Built on Trust. Driven by Precision. We are a full-service logistics company committed to moving goods efficiently, safely, and on time." 
                url="https://www.logistics.quinndaisies.com/quinn-daisies/about-us" 
            />

            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <Intro
                        title="Built on Trust. Driven by Precision."
                        description="We are a full-service logistics company committed to moving goods efficiently, safely, and on time — for businesses that can't afford to slow down."
                        backgroundImage="https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg"
                    />
                    <Flex />
                    <Footer />
                </div>
            </div>
        </>
    );
}
