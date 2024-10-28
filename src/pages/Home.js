import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Quinn Daisies | Innovative Software Development & Design Solutions
        </title>
        <meta
          name="description"
          content="Quinn Daisies offers cutting-edge Software development, design, and digital solutions. Transform your online presence with our expert team and innovative technology."
        />
        <link rel="canonical" href="https://www.quinndaisies.com" />
        <link rel="og:canonical" href="https://www.quinndaisies.com" />
        <meta
          property="og:title"
          content="Quinn Daisies | Innovative Software Development & Design"
        />
        <meta
          property="og:description"
          content="Elevate your digital presence with Quinn Daisies. We provide expert Software development, stunning design, and innovative tech solutions to drive your business forward."
        />
        <meta property="og:url" content="https://www.quinndaisies.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quinn Daisies | Innovative Software Development & Design"
        />
        <meta
          name="twitter:description"
          content="Discover Quinn Daisies' innovative Software development and design services. We create powerful digital solutions to help your business thrive online."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta
          name="keywords"
          content="Quinn Daisies, Software development, Software design, digital solutions, innovative technology, custom Software, UI/UX design, responsive design, SEO optimization"
        />
        <meta
          name="og:keywords"
          content="Quinn Daisies, Software development, digital solutions, innovative technology, custom Software"
        />
        <meta name="author" content="Quinn Daisies Tech Team" />
        <meta name="revised" content="2024-03-18" />{" "}
        {/* Update this date as needed */}
      </Helmet>
      <Navbar />

      <div className="home-container">
        <img
          className="home-image"
          src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1730132938/Quinn%20Daisies%20Logistics/transport-logistics-concept_2_thjbc1.jpg"
          alt="Quinn Daisies Logo"
        />

        <div className="home-content">
          <span className="home-content-span">Quinn Daisies Logistics</span>
          <h1>Reliable Logistics Solutions</h1>
          <p>
            We are committed to delivering excellence through seamless logistics
            solutions that prioritize safety, efficiency, and punctuality.
          </p>

          <a href="#contact" className="home-content-button">
            <span className="home-content-button-span">
              Request a Personalized Quote
            </span>
            <img
              className="home-content-button-image"
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729712988/Quinn%20Daisies%20Logistics/Near_Me_htd7ob.png"
              alt="Arrow Right"
            />
          </a>
        </div>
      </div>

      <div className="home-about">
        <div className="home-about-grid">
          <div className="home-about-grid-item">
            <h2>
              About <br /> us
            </h2>
          </div>

          <img
            className="home-about-grid-item-image"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542805/Quinn%20Daisies%20Logistics/logistics-means-transport-together-with-technological-futuristic-holograms_2_lb4ten.jpg"
            alt="About Us"
          />
          <img
            className="home-about-grid-item-image"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542859/Quinn%20Daisies%20Logistics/technological-futuristic-holograms-logistics-means-transport_itrxu8.jpg"
            alt="About Us"
          />
        </div>

        <div className="home-about-content">
          <h2>
            Logistics solutions tailored to meet the unique demands of
            businesses and individuals alike.
          </h2>
          <p>
            With a strong focus on reliability, efficiency, and personalized
            service, we handle every aspect of your logistics journey—from
            consultation to final delivery. We leverage advanced technology and
            innovative practices to offer our clients end-to-end logistics
            support that is seamless and stress-free.
          </p>

          <a href="/contact" className="home-content-button">
            <span className="home-content-button-span">
              About Quinn Daisies Logistics
            </span>
            <img
              className="home-content-button-image"
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729712988/Quinn%20Daisies%20Logistics/Near_Me_htd7ob.png"
              alt="Arrow Right"
            />
          </a>
        </div>
      </div>

      <div className="home-services">
        <div className="home-services-box">
          <h2>
            Our <br /> Services
          </h2>
          <a
            href="/contact"
            className="home-content-button"
            style={{ backgroundColor: "#F9A144" }}
          >
            <span className="home-content-button-span">
              Learn More About Our Services
            </span>
            <img
              className="home-content-button-image"
              src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729712988/Quinn%20Daisies%20Logistics/Near_Me_htd7ob.png"
              alt="Arrow Right"
            />
          </a>
        </div>

        <div className="home-services-box">
          <img
            className="home-services-box-image"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729772011/Quinn%20Daisies%20Logistics/19964825_6184545_vr5mjg.jpg"
            alt="Shipping Consultation"
          />

          <div className="home-services-box-content">
            <h2>Shipping Consultation</h2>
            <p>
              Our expert team helps you navigate complex shipping decisions,
              providing insights on the best methods, carriers, and
              transportation modes to meet your specific needs, saving you both
              time and costs.
            </p>
          </div>
        </div>

        <div className="home-services-box">
          <img
            className="home-services-box-image"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729771779/Quinn%20Daisies%20Logistics/couriers-with-parcel-truck_1320745-36610_sxvhz5.avif"
            alt="Shipping Consultation"
          />

          <div className="home-services-box-content">
            <h2>Packaging Services</h2>
            <p>
              We use high-quality materials and best practices to carefully pack
              your goods, ensuring maximum protection and secure transport for
              both local and international deliveries.
            </p>
          </div>
        </div>

        <div className="home-services-box">
          <img
            className="home-services-box-image"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729771779/Quinn%20Daisies%20Logistics/global-shipping-delivery-concept_1296762-8516_dhjkmr.jpg"
            alt="Shipping Consultation"
          />

          <div className="home-services-box-content">
            <h2>International Shipping</h2>
            <p>
              With partnerships across the globe, we offer international
              shipping to over 150 countries. Our team assists in selecting the
              most suitable shipping options for your requirements while
              managing customs regulations to ensure smooth transit.
            </p>
          </div>
        </div>

        <div className="home-services-box">
          <img
            className="home-services-box-image"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729771789/Quinn%20Daisies%20Logistics/735_x3nndt.jpg"
            alt="Shipping Consultation"
          />

          <div className="home-services-box-content">
            <h2>Importation Services</h2>
            <p>
              We simplify the importation process for individuals and businesses
              by handling goods from over 33 countries into Nigeria, offering
              fast and safe transport every step of the way.
            </p>
          </div>
        </div>

        <div className="home-services-box">
          <img
            className="home-services-box-image"
            src="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1729542833/Quinn%20Daisies%20Logistics/technological-futuristic-holograms-logistics-means-transport_1_vm61wy.jpg"
            alt="Shipping Consultation"
          />

          <div className="home-services-box-content">
            <h2>Customs Clearance</h2>
            <p>
              Our experienced customs team ensures quick and efficient clearance
              for your goods, minimizing delays and avoiding complications with
              regulatory authorities, so your items reach their destination
              without hassle.
            </p>
          </div>
        </div>
      </div>
      
      <Contact />
      <Footer />
    </>
  );
}
