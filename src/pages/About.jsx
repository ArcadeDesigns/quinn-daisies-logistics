import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
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
            <Helmet>
                <title>Quinn Daisies Logistics | About Us</title>
                <meta name="description" content="Example Content." />
                <link rel="canonical" href="https://www.example.com/home" />
                <link rel="og:canonical" href="https://www.example.com/home" />

                <meta property="og:title" content="Home | The Benin App" />
                <meta property="og:description" content="Example Content." />
                <meta property="og:url" content="https://www.example.com/home" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/theexample/image/upload/v1726758920/edoBenin-removebg-preview_cf749i.png"
                />
                <meta name="robots" content="index, follow" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Home | The Benin App" />
                <meta name="twitter:description" content="Example Contents." />
                <meta
                    name="twitter:image"
                    content="https://res.cloudinary.com/theexample/image/upload/v1726758920/edoBenin-removebg-preview_cf749i.png"
                />

                <meta name="keywords" content="Example Contents." />
                <meta name="og:keywords" content="Example Contents." />

                <meta name="author" content="Ebire Folayemi Michael" />
                <meta name="revised" content="12th of March 2025" />
            </Helmet>

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
