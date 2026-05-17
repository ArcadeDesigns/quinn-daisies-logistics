import React from "react";
import Box from "./components/Home/Box";
import Header from "./components/Home/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Slide from "./components/Home/Slide";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Carousel from "./components/Home/Carousel";
import Advert from "./components/Home/Advert";
import Banner from "./components/Home/Banner";

const bgImages = [
  "https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542859/Quinn%20Daisies%20Logistics/technological-futuristic-holograms-logistics-means-transport_itrxu8.jpg",
  "https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542805/Quinn%20Daisies%20Logistics/logistics-means-transport-together-with-technological-futuristic-holograms_2_lb4ten.jpg",
  "https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1730132938/Quinn%20Daisies%20Logistics/transport-logistics-concept_2_thjbc1.jpg",
];

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>
          Quinn Daisies Logistics | Professional Logistics & Shipping Solutions
        </title>
        <meta
          name="description"
          content="Quinn Daisies Logistics provides professional shipping, packaging, and international logistics solutions. Expert consultation and customs clearance services available."
        />
        <link rel="canonical" href="https://www.logistics.quinndaisies.com" />
        <link
          rel="og:canonical"
          href="https://www.logistics.quinndaisies.com"
        />

        <meta
          property="og:title"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          property="og:description"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          property="og:url"
          content="https://www.logistics.quinndaisies.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quinn Daisies Logistics | Professional Logistics & Shipping Solutions"
        />
        <meta
          name="twitter:description"
          content="Quinn Daisies Logistics provides professional shipping, packaging, and international logistics solutions. Expert consultation and customs clearance services available."
        />

        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />

        <meta
          name="keywords"
          content="Expert logistics solutions including international shipping, packaging services, customs clearance, and importation services across 150+ countries."
        />
        <meta
          name="og:keywords"
          content="Expert logistics solutions including international shipping, packaging services, customs clearance, and importation services across 150+ countries."
        />

        <meta name="author" content="Ebire Folayemi Michael" />
        <meta name="revised" content="12th of April 2025" />
      </Helmet>

      <Navbar />

      <div>
        <div>
          <Header
            subtitle="Reliable Logistics Solutions Tailored for You"
            title="Discover How We Can Support Your Shipping Needs"
            description="We are dedicated to providing exceptional logistics services that emphasize safety, efficiency, and timely delivery. Our goal is to simplify your shipping experience—locally and globally—through innovative, customer-focused solutions."
            buttonText="Request a Personalized Quote"
            buttonLink="/get-a-quote"
            backgroundImages={bgImages}
          />
          <Box />
          <Slide />
          <Carousel />
          <Advert />
          <Banner />
          <Footer />
        </div>
      </div>
    </>
  );
}
