import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ScrollReveal from "scrollreveal";

export default function Contact() {
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
                title="Quinn Daisies Logistics | Contact Us" 
                description="Get in touch with Quinn Daisies Logistics. We are your trusted partner for import and export cargo solutions." 
                url="https://www.logistics.quinndaisies.com/quinn-daisies/contact-us" 
            />

            <Navbar />
            <div className="ContactHeader">
                <h1>Quinn Daisies Logistics – Your Trusted Partner for Import & Export Cargo Solutions</h1>
            </div>
            <Footer />
        </>
    );
}
