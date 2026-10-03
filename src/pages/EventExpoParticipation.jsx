import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";
import useSmoothScroll from "../hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, SplitText);

const expoEngagementPrinciples = [
    {
        number: "01",
        title: "Pre-Summit Counterparty Vetting",
        description:
            "Before every international expo, our market intelligence team conducts rigorous commercial due diligence on registered participants, arranging targeted B2B meetings with creditworthy buyers and qualified producers.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
    },
    {
        number: "02",
        title: "Private Executive Deal Rooms",
        description:
            "We host dedicated negotiation deal rooms at major summits to structure binding, multi-vessel freight contracts, verify payment terms, and align legal recourse under U.S. and international jurisdictions.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
        number: "03",
        title: "Physical Commodity Grading & Assays",
        description:
            "At agricultural and industrial expos, we exhibit certified physical samples backed by laboratory test certificates confirming purity, moisture content, Sortex machine cleaning, and phytosanitary compliance.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
    },
    {
        number: "04",
        title: "Bilateral Tariff & Regulatory Alignment",
        description:
            "Working directly with customs authorities, USDA/FDA specialists, and trade ministry officials during summit workshops to streamline HS code classifications, AGOA benefits, and export pre-clearance filings.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
    },
    {
        number: "05",
        title: "Post-Expo Operational Activation",
        description:
            "Within 72 hours of summit completion, our operations teams in Baltimore, Houston, and Lagos initiate line-haul reservations, warehousing space allocations, and milestone tracking to execute agreed freight volumes.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
    },
];

const whyConnectReasons = [
    {
        icon: "domain",
        title: "Direct Origin Assets & Custody",
        text: "Meet directly with the operating team that owns and manages the physical aggregation hubs, bonded export warehouses, and customs licensing in West Africa—completely eliminating middle-tier broker markups.",
    },
    {
        icon: "gavel",
        title: "Enforceable U.S. Governance",
        text: "Execute trade contracts backed by our corporate presence in Maryland, USA, providing international counterparties with transparent legal recourse, institutional security, and clear dispute resolution under Incoterms® 2020.",
    },
    {
        icon: "flight_takeoff",
        title: "Guaranteed Multimodal Allocations",
        text: "Secure committed container allocations on scheduled ocean vessels and priority air freight slots across high-demand transatlantic shipping corridors through pre-negotiated carrier capacity agreements.",
    },
    {
        icon: "shield_with_heart",
        title: "Turnkey Regulatory Clearance",
        text: "Eliminate border and demurrage risks through our pre-filed customs procedures, FDA facility registrations, and single-window automated export-import documentation compliance.",
    },
];

const expoLandingPool = [
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg",
];

export default function EventExpoParticipation() {
    useSmoothScroll();

    const [isUnlocked, setIsUnlocked] = useState(false);
    const landingOverlayRef = useRef(null);
    const landingContentRef = useRef(null);
    const isTransitioningRef = useRef(false);

    const [overlayImages, setOverlayImages] = useState([
        expoLandingPool[0],
        expoLandingPool[1],
        expoLandingPool[2],
        expoLandingPool[3],
    ]);
    const overlayColIndexRef = useRef(0);
    const overlayPoolIndexRef = useRef(4);

    useEffect(() => {
        if (isUnlocked) return;

        const interval = setInterval(() => {
            const nextImg =
                expoLandingPool[
                    overlayPoolIndexRef.current % expoLandingPool.length
                ];
            overlayPoolIndexRef.current += 1;
            const targetCol = overlayColIndexRef.current;
            overlayColIndexRef.current = (overlayColIndexRef.current + 1) % 4;

            setOverlayImages((prev) => {
                const next = [...prev];
                next[targetCol] = nextImg;
                return next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isUnlocked]);

    const pageRef = useRef(null);
    const smoothWrapperRef = useRef(null);
    const smoothContentRef = useRef(null);
    const pathRef = useRef(null);
    const carouselSectionRef = useRef(null);
    const carouselStripRef = useRef(null);
    const containerRef = useRef(null);

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

        ScrollReveal().reveal(".reveal__top__interval", {
            origin: "top",
            distance: "100px",
            duration: 1000,
            interval: 200,
            reset: false,
            easing: "ease-in-out",
        });

        ScrollReveal().reveal(".reveal__left__interval", {
            origin: "left",
            distance: "100px",
            duration: 1000,
            interval: 200,
            reset: false,
            easing: "ease-in-out",
        });

        ScrollReveal().reveal(".reveal__bottom__interval", {
            origin: "bottom",
            distance: "100px",
            duration: 1000,
            interval: 200,
            reset: false,
            easing: "ease-in-out",
        });

        ScrollReveal().reveal(".reveal__right__interval", {
            origin: "right",
            distance: "100px",
            duration: 1000,
            interval: 200,
            reset: false,
            easing: "ease-in-out",
        });
    }, []);

    useGSAP(
        () => {
            if (!isUnlocked) return;

            gsap.set(".ServiceText", { opacity: 1 });

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

                gsap.from(split.lines, {
                    yPercent: 120,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: container,
                        scrub: true,
                        start: "top 80%",
                        end: "center center",
                    },
                });
            });

            if (document.fonts?.ready) {
                document.fonts.ready.then(() => {
                    ScrollTrigger.refresh();
                });
            } else {
                ScrollTrigger.refresh();
            }
        },
        { scope: pageRef, dependencies: [isUnlocked] },
    );

    useEffect(() => {
        if (!isUnlocked) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
            ScrollTrigger.refresh();
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isUnlocked]);

    const handleLearnMore = () => {
        if (isTransitioningRef.current || isUnlocked) return;
        isTransitioningRef.current = true;

        const path = pathRef.current;
        if (!path) {
            setIsUnlocked(true);
            isTransitioningRef.current = false;
            return;
        }

        const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
        const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

        const tl = gsap.timeline({
            onComplete: () => {
                setIsUnlocked(true);
                isTransitioningRef.current = false;
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 60);
            },
        });

        tl.to(landingContentRef.current, {
            opacity: 0,
            y: -35,
            duration: 0.4,
            ease: "power2.in",
        });

        tl.to(
            path,
            {
                morphSVG: start,
                ease: "power2.in",
                duration: 0.65,
            },
            "<0.05",
        ).to(path, {
            morphSVG: end,
            ease: "power2.out",
            duration: 0.65,
        });

        tl.to(landingOverlayRef.current, {
            yPercent: -100,
            duration: 0.85,
            ease: "power3.inOut",
        });
    };

    // Horizontal Carousel Scroll (from Mission.jsx)
    useGSAP(
        () => {
            const section = carouselSectionRef.current;
            const strip = carouselStripRef.current;
            if (!section || !strip) return;

            const getScrollAmount = () => -(strip.scrollWidth - window.innerWidth);

            gsap.to(strip, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    pinSpacing: true,
                    start: "top top",
                    end: () => `+=${strip.scrollWidth - window.innerWidth}`,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            ScrollTrigger.refresh();
        },
        { scope: carouselSectionRef },
    );

    // Upward scrub for ApplicationBox cards (from Home.jsx)
    useGSAP(
        () => {
            const boxes = gsap.utils.toArray(".ApplicationBox");
            boxes.forEach((box) => {
                gsap.to(box, {
                    y: 0,
                    scrollTrigger: {
                        trigger: box,
                        start: "bottom bottom",
                        end: "top 20%",
                        scrub: 1.2,
                    },
                });
            });
        },
        { scope: containerRef },
    );

    return (
        <>
            <SEO
                title="Event & Expo Participation | Global Trade Summits | Quinn Daisies Logistics"
                description="Showcasing international trade capabilities, connecting with industry leaders, and forging bilateral trade deals across key global logistics summits, maritime conferences, and commodity expos."
                keywords="global trade expos, logistics summits, maritime conferences, international trade events, freight exhibitions, commodity trade forums, bilateral trade delegations"
                url="https://www.logistics.quinndaisies.com/event-and-expo-participation"
            />

            <div ref={pageRef}>
                <Navbar />

                <div
                    ref={landingOverlayRef}
                    className="CorporateLandingOverlay"
                >
                    <div className="CorporateLandingBackdrop" />

                    {overlayImages.map((src, idx) => (
                        <img
                            key={`${idx}-${src}`}
                            src={src}
                            alt="Quinn Daisies Global Trade Summits"
                        />
                    ))}

                    <div className="ContentCtn-Center" ref={landingContentRef}>
                        <span className="ContentCtn-Center-Span">Global Trade Summits & Diplomatic Delegations</span>
                        <h1>
                            Connecting Sovereign Commercial Intent with Physical Multimodal Logistics Execution
                        </h1>
                        <p>
                            Quinn Daisies actively participates at premier global logistics summits, maritime conferences, and agricultural commodity expos worldwide—transforming bilateral summit negotiations into binding freight contracts, guaranteed carrier allocations, and documented trade pipelines.
                        </p>

                        <div className="reveal__bottom">
                            <button className="ApplicationButton" onClick={handleLearnMore}>
                                Click Here to Explore
                                <span className="material-symbols-outlined">
                                    globe_location_pin
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="AdvanceTransitionWrapper">
                        <svg
                            className="AdvanceTransition"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid slice"
                        >
                            <defs>
                                <pattern
                                    id="expoTransitionPattern"
                                    patternUnits="userSpaceOnUse"
                                    width="100"
                                    height="100"
                                >
                                    <image
                                        href="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                                        xlinkHref="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                                        x="0"
                                        y="0"
                                        width="100"
                                        height="100"
                                        preserveAspectRatio="xMidYMid slice"
                                    />
                                </pattern>
                            </defs>
                            <path
                                ref={pathRef}
                                className="path"
                                fill="url(#expoTransitionPattern)"
                                vectorEffect="non-scaling-stroke"
                                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                            />
                        </svg>
                    </div>
                </div>

                <div id="smooth-wrapper" ref={smoothWrapperRef}>
                    <div id="smooth-content" ref={smoothContentRef}>

                        {/* SECTION 1: Strategic Summit Engagement & Deal Rooms (From DirectSales.jsx sectionBox) */}
                        <section className="sectionBox">
                            <div className="sectionBoxContainer">
                                <div className="advacneSectionContentHeaderBox">
                                    <img
                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                                        alt="Quinn Daisies Summit Deal Room"
                                    />

                                    <div className="advacneSectionContentHeader">
                                        <h1>
                                            Bilateral Deal Rooms & Direct Institutional Contracting
                                        </h1>
                                        <p>
                                            We host private executive deal rooms at major international trade summits to structure binding, multi-vessel Service Level Agreements, verify international escrow and settlement mechanisms, and execute enforceable commercial terms under U.S. and transatlantic jurisdictions.
                                        </p>

                                        <Link className="ApplicationButton" to="/contact-us" style={{ marginTop: "1.5rem", width: "fit-content" }}>
                                            Book Summit Deal Room
                                            <span className="material-symbols-outlined">
                                                calendar_month
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="advacneSectionContentHeaderBoxFlex">
                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg"
                                            alt="Pre-Summit Vetting"
                                        />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Pre-Summit Counterparty Vetting</h3>
                                            <p>Rigorous commercial and fiscal due diligence conducted on registered buyers and suppliers prior to conference sessions.</p>
                                        </div>
                                    </div>

                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg"
                                            alt="Commodity Assaying"
                                        />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Physical Commodity Assaying</h3>
                                            <p>Exhibiting verified physical samples backed by accredited laboratory certificates (SGS, Bureau Veritas) confirming purity and moisture thresholds.</p>
                                        </div>
                                    </div>

                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                                            alt="Regulatory Alignment"
                                        />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Regulatory & Tariff Harmonization</h3>
                                            <p>Direct workshop alignment with customs authorities and trade ministry delegations to streamline HS classifications and duty exemptions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 2: Service Statement & 4-Metric KPI Architecture (From MiddleEast.jsx / Mission.jsx) */}
                        <section className="SectionContainer ServiceContainer">
                            <h2 className="ServiceText">
                                International trade agreements cannot succeed on diplomatic intent alone. Quinn Daisies converts summit discussions into guaranteed vessel allocations, verified origin commodity pipelines, and bonded customs clearance across bilateral trade lanes.
                            </h2>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                Summit Operational Performance & Deal Realization
                            </span>
                            <h4 className="reveal__right">
                                Measurable commercial results delivered from premier global maritime, logistics, and commodity exhibitions.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Summit Deal Realization Rate</h6>
                                        <p>
                                            Conversion rate of conference letters of intent into active, binding physical cargo and commodity supply contracts.
                                        </p>
                                    </div>
                                    <h3>
                                        94.8<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Contracted Carrier Allocations</h6>
                                        <p>
                                            Committed annual vessel space and container equipment secured with major global carrier alliances during maritime symposiums.
                                        </p>
                                    </div>
                                    <h3>
                                        1,500<span>+ TEU</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Pre-Shipment Quality Compliance</h6>
                                        <p>
                                            Laboratory assay conformity rate matching strict USDA, SFDA, and European import standards across exhibited commodities.
                                        </p>
                                    </div>
                                    <h3>
                                        100<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Post-Summit Activation Window</h6>
                                        <p>
                                            Immediate operational transition from expo deal closure to vessel booking and origin warehouse consolidation.
                                        </p>
                                    </div>
                                    <h3>
                                        72<span>hrs</span>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                Global trade expos, maritime logistics symposiums, and commodity conferences are the proving grounds for major cross-border commercial relationships. While many industry participants attend to exchange business cards and generic brochures, Quinn Daisies attends to execute. We come prepared with pre-negotiated vessel slots, verified agricultural warehouse receipts, accredited laboratory assay sheets, and standard U.S. corporate contracting frameworks.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                By meeting our senior trade executives on the ground at events in Baltimore, Houston, Dubai, London, and Lagos, institutional buyers and multinational supply chain directors gain immediate commercial certainty. We bridge the gap between high-level diplomatic policy discussions and the practical realities of freight line-hauls, bonded staging, and port container clearance.
                            </p>
                        </section>

                        {/* SECTION 3: Five-Stage Summit Engagement Architecture (From Mission.jsx CarouselAnimation with AdvanceDesignStructureSlideBox) */}
                        <section
                            className="Dark-Background"
                            id="CarouselAnimation"
                            ref={carouselSectionRef}
                        >
                            <div className="ApplicationCarouselRefurblished">
                                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                                    <h2 className="reveal__left">
                                        Our Five-Stage Summit Engagement Architecture
                                    </h2>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            How Quinn Daisies transforms conference discussions into verifiable cargo bookings, guaranteed carrier allocations, and binding cross-border freight execution.
                                        </p>
                                    </div>
                                </div>

                                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                                    <div
                                        className="ApplicationCarouselSlide"
                                        ref={carouselStripRef}
                                    >
                                        {expoEngagementPrinciples.map((item, index) => (
                                            <div className="AdvanceDesignStructureSlideBox" key={index}>
                                                <img src={item.image} alt={item.title} />

                                                <div className="AdvanceDesignStructureSlideBoxContent">
                                                    <h2>{item.number} — {item.title}</h2>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 4: Why Global Enterprises Connect (From Home.jsx sectionBox with strict 4 ApplicationBox stagger) */}
                        <section className="sectionBox" ref={containerRef}>
                            <div className="SectionHeader">
                                <h2 className="reveal__top">
                                    Why Global Enterprises Connect With Quinn Daisies at Trade Expos
                                </h2>
                            </div>

                            <div className="ApplicationContainer">
                                {whyConnectReasons.map((item, index) => (
                                    <div className="ApplicationBox" key={index}>
                                        <span className="BoxIcon material-symbols-outlined">
                                            {item.icon}
                                        </span>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="SectionContainer">
                            <div className="ApplicationBanner">
                                <img
                                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                                    alt="Global Trade Summits CTA"
                                />
                                <div className="ApplicationBannerOverlay">
                                    <h2>
                                        Schedule an Executive Briefing at Our Next Global Trade Summit
                                    </h2>
                                    <p className="ApplicationText">
                                        Whether you are an institutional buyer seeking certified origin commodities, a freight forwarder requiring reliable West African drayage, or a corporate delegation structuring bilateral trade lanes, meet with our senior leadership.
                                    </p>
                                    <Link className="ApplicationButton" to="/contact-us">
                                        Summit Meeting Room
                                        <span className="material-symbols-outlined">
                                            calendar_month
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
