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
import usePinnedSlides from "../hooks/usePinnedSlides";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin, SplitText);

const digitalTradeStages = [
    {
        title: "Storefront & ERP Data Ingestion",
        description:
            "Automated order synchronization bridging client enterprise resource planning (ERP), e-commerce marketplaces, and commercial web stores directly into the Quinn Daisies central logistics engine via REST APIs and secure EDI feeds.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1761854281/QuinnDaisies/133718_fdmnuv.jpg",
    },
    {
        title: "SKU-Level Barcode Intake & Consolidation",
        description:
            "Physical cargo induction into our secure consolidation hubs in Lagos, Baltimore, and Houston, featuring individual item verification, automated dimensional scanning, barcoding, and export-grade pallet packaging.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1761854286/QuinnDaisies/2150038846_akompk.jpg",
    },
    {
        title: "Automated Electronic Customs Pre-Filing",
        description:
            "Digital tariff classification (HS codes), automated declaration drafting, and electronic customs pre-filing (US CBP ACE, Nigeria Single Window) executing before freight departure to ensure zero arrival hold-ups.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1761821787/QuinnDaisies/122602_pvkxns.jpg",
    },
    {
        title: "Priority Air Cargo & Ocean Line-Haul",
        description:
            "Scheduled transatlantic multimodal line-haul transport with contracted vessel allocations and express air freight slots, monitored continuously through satellite telematics and geofenced transit milestones.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    },
    {
        title: "Bonded Cross-Dock & De-Consolidation",
        description:
            "Rapid arrival clearance, bonded terminal transfer, and automated de-stuffing at destination gateway facilities, preparing individual commercial orders for immediate regional transport dispatch.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1775925889/QuinnDaisies/1200_kzmwos.jpg",
    },
    {
        title: "Final-Mile Distribution & Verifiable Digital PoD",
        description:
            "Final delivery execution directly to regional distribution centers, commercial warehouses, or retail partner facilities with real-time electronic proof of delivery (e-PoD), instant timestamping, and invoice closeout.",
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg",
    },
];

const ecomLandingPool = [
    "https://res.cloudinary.com/renaissance-images/image/upload/v1761854281/QuinnDaisies/133718_fdmnuv.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1761854286/QuinnDaisies/2150038846_akompk.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1761821787/QuinnDaisies/122602_pvkxns.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1775925889/QuinnDaisies/1200_kzmwos.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789481021/QuinnDaisies/37874_i8j1ls.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789465947/QuinnDaisies/2151003712_gbfv0i.jpg",
];

export default function OnlinePresenceEcommerce() {
    useSmoothScroll();

    const [isUnlocked, setIsUnlocked] = useState(false);
    const landingOverlayRef = useRef(null);
    const landingContentRef = useRef(null);
    const isTransitioningRef = useRef(false);

    const [overlayImages, setOverlayImages] = useState([
        ecomLandingPool[0],
        ecomLandingPool[1],
        ecomLandingPool[2],
        ecomLandingPool[3],
    ]);
    const overlayColIndexRef = useRef(0);
    const overlayPoolIndexRef = useRef(4);

    useEffect(() => {
        if (isUnlocked) return;

        const interval = setInterval(() => {
            const nextImg =
                ecomLandingPool[
                    overlayPoolIndexRef.current % ecomLandingPool.length
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

    const imagePinRef = useRef(null);
    const pageRef = useRef(null);
    const smoothWrapperRef = useRef(null);
    const smoothContentRef = useRef(null);
    const pathRef = useRef(null);
    const carouselSectionRef = useRef(null);
    const carouselStripRef = useRef(null);

    usePinnedSlides(imagePinRef);

    useGSAP(
        () => {
            const section = carouselSectionRef.current;
            const strip = carouselStripRef.current;
            if (!section || !strip) return;

            const getScrollAmount = () => -(strip.scrollWidth - window.innerWidth + 80);

            const ctx = gsap.to(strip, {
                x: getScrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    pin: true,
                    scrub: 1.2,
                    start: "top top",
                    end: () => `+=${Math.max(strip.scrollWidth - window.innerWidth, 1200)}`,
                    invalidateOnRefresh: true,
                },
            });

            return () => {
                if (ctx.scrollTrigger) ctx.scrollTrigger.kill();
            };
        },
        { scope: carouselSectionRef, dependencies: [] }
    );

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

    useEffect(() => {
        let isActive = true;
        const splitInstances = [];
        const splitTweens = [];

        const ctx = gsap.context(() => {
            gsap.set(".ServiceText", { opacity: 1 });

            const initSplitText = () => {
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

                    splitInstances.push(split);

                    const tween = gsap.from(split.lines, {
                        yPercent: 120,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: container,
                            scrub: true,
                            start: "top center",
                            end: "bottom center",
                        },
                    });

                    splitTweens.push(tween);
                });
            };

            const initAll = () => {
                if (!isActive) return;
                initSplitText();
                ScrollTrigger.refresh();
            };

            if (document.fonts?.ready) {
                document.fonts.ready.then(initAll);
            } else {
                initAll();
            }
        }, pageRef);

        return () => {
            isActive = false;
            splitTweens.forEach((tween) => tween.kill());
            splitInstances.forEach((split) => split.revert());
            ctx.revert();
        };
    }, []);

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

    return (
        <>
            <SEO
                title="Online Presence & Cross-Border E-Commerce Logistics | Quinn Daisies"
                description="Powering digital trade portals, API-integrated freight booking, and automated tracking solutions for fast, borderless B2B commercial transactions and transatlantic e-commerce."
                keywords="cross border ecommerce logistics, B2B digital trade portal, ecommerce fulfillment Nigeria US, freight API integration, automated shipment tracking, transatlantic ecommerce, online cargo booking"
                url="https://www.logistics.quinndaisies.com/online-presence-ecommerce"
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
                            alt="Quinn Daisies Digital Trade & E-Commerce Execution"
                        />
                    ))}

                    <div className="ContentCtn-Center" ref={landingContentRef}>
                        <span className="ContentCtn-Center-Span">Digital Trade & E-Commerce Execution</span>
                        <h1>
                            Digital Trade Portals, API Logistics & Cross-Border E-Commerce Fulfillment
                        </h1>
                        <p>
                            Powering modern digital trade through enterprise API integration, automated rate quotes, real-time cargo telematics, and bonded transatlantic fulfillment connecting North American e-commerce platforms with West African markets.
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
                                    id="ecomTransitionPattern"
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
                                fill="url(#ecomTransitionPattern)"
                                vectorEffect="non-scaling-stroke"
                                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                            />
                        </svg>
                    </div>
                </div>

                <div id="smooth-wrapper" ref={smoothWrapperRef}>
                    <div id="smooth-content" ref={smoothContentRef}>
                        <section className="SectionContainer ServiceContainer">
                            <h2 className="ServiceText">
                                E-commerce and digital commerce cannot scale on consumer tracking numbers alone. High-volume cross-border trade requires automated data synchronization, bonded international warehousing, electronic customs pre-clearance, and accountable physical fulfillment across bilateral trade lanes.
                            </h2>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                Digital Trade & E-Commerce Infrastructure
                            </span>
                            <h4 className="reveal__right">
                                End-to-end automated physical execution connecting online commercial marketplaces, storefronts, and international freight networks.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>API Order & Telemetry Accuracy</h6>
                                        <p>
                                            Instantaneous automated synchronization between client e-commerce platforms, customs filings, and live container tracking milestones.
                                        </p>
                                    </div>
                                    <h3>
                                        99.6<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Continuous Live System Telemetry</h6>
                                        <p>
                                            Round-the-clock API connectivity, geofenced GPS container monitoring, and automated status alerts throughout transit.
                                        </p>
                                    </div>
                                    <h3>
                                        24/<text>7</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Bonded Cross-Border Fulfillment</h6>
                                        <p>
                                            Rapid turnaround from maritime port discharge or air arrival to bonded warehouse sorting, packaging, and onward dispatch.
                                        </p>
                                    </div>
                                    <h3>
                                        48–72<text>hrs</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Automated Pre-Clearance Filing</h6>
                                        <p>
                                            Electronic single-window documentation compliance ensuring cargo is cleared prior to vessel berthing or aircraft landing.
                                        </p>
                                    </div>
                                    <h3>
                                        100<text>%</text>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                As global commerce shifts towards direct B2B online ordering and cross-border digital marketplaces, traditional freight forwarding workflows create severe friction. Incomplete commercial invoices, manual tariff calculations, and opaque tracking cause shipments to sit in port for weeks, resulting in customer churn and severe financial penalties. Quinn Daisies eliminates these barriers by marrying digital storefront integration with institutional physical logistics.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                Through our open API architecture and secure EDI pipelines, e-commerce brands, industrial distributors, and wholesale suppliers can automate freight quoting, trigger bonded warehouse pickups, file customs documentation electronically, and deliver complete milestone visibility to end customers across the United States, Nigeria, and transatlantic corridors.
                            </p>
                        </section>

                        {/* SECTION 2: 6-Stage Operational Pipeline Pin Scrub (From Home.jsx ApplicationImageDesign) */}
                        <section className="ApplicationImageDesign" ref={imagePinRef}>
                            <div className="ApplicationChartContentListContainer">
                                <div className="fill"></div>
                                <div className="ApplicationChartContentList">
                                    <h2 className="ApplicationImageDesignHeader reveal__bottom__interval_slide">
                                        From Online Checkout to Physical Delivery: The Digital Execution Pipeline
                                    </h2>
                                    {digitalTradeStages.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`ApplicationChartDesignItem reveal__bottom__interval_slide ${index === 0 ? "is-active" : ""
                                                }`}
                                        >
                                            <h4>{item.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="ApplicationChartContent">
                                <div className="ApplicationChartSlides">
                                    {digitalTradeStages.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`ApplicationChartSlide ${index === 0 ? "is-active" : ""
                                                }`}
                                        >
                                            <div className="ApplicationChartContentContainer">
                                                <img
                                                    className="ApplicationChartContentContainerImage"
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                                <div className="ApplicationChartContentContainerContent">
                                                    <p className="ApplicationChartContentContainerContentText">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: Multi-Channel E-Commerce Architecture (From Mission.jsx AdvanceFlexDesignColumn) */}
                        <section className="AdvanceFlexDesignColumn">
                            <div className="AdvanceFlexCtnBoxCtnRow">
                                <div className="AdvanceFlexCtnBoxCtnRowContent">
                                    <span className="reveal__left">Omnichannel Trade Integration</span>
                                    <h2 className="reveal__right">
                                        Bridging Digital Marketplaces With Sovereign Logistics Assets
                                    </h2>
                                    <p className="reveal__bottom">
                                        Digital storefronts need physical muscle. We provide the container freight stations, bonded storage yards, customs licenses, and freight capacity required to execute high-volume digital trade without counterparty risk.
                                    </p>
                                    <div className="AdvanceImageFlexContainer">
                                        <div className="AdvanceImageFlexContainerContainer reveal__bottom__interval">
                                            <img
                                                className="FlexCtnBoxCtnImg"
                                                src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg"
                                                alt="API Integrated Logistics"
                                            />
                                            <p>
                                                Direct API and webhook connections allow e-commerce platforms to automate freight booking and generate instant shipping manifests.
                                            </p>
                                        </div>

                                        <div className="AdvanceImageFlexContainerContainer reveal__bottom__interval">
                                            <img
                                                className="FlexCtnBoxCtnImg"
                                                src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg"
                                                alt="SKU Verification & Barcoding"
                                            />
                                            <p>
                                                Pre-shipment verification and barcode scanning ensure complete inventory accuracy before shipments are palletized and sealed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="ExtraAdvanceImageFlexContainer reveal__right__interval">
                                    <div className="ExtraAdvanceImageFlexContainerContainer">
                                        <img
                                            className="FlexCtnBoxCtnImg"
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481021/QuinnDaisies/37874_i8j1ls.jpg"
                                            alt="Transatlantic Fulfillment"
                                        />
                                        <p>
                                            Whether fulfilling wholesale B2B reorders or scheduled e-commerce container flows, our dual-market infrastructure in North America and West Africa guarantees unbroken custody, transparent documentation, and predictable transit schedules.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 4: 6-Stage E-Commerce Logistics Capabilities (CarouselAnimation) */}
                        <section
                            className="Dark-Background"
                            id="CarouselAnimation"
                            ref={carouselSectionRef}
                        >
                            <div className="ApplicationCarouselRefurblished">
                                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                                    <div className="ApplicationSetupDetails reveal__left">
                                        <span className="AdvanceUpdateSpan">Digital Capabilities</span>
                                        <h2 className="reveal__left">Core Pillars of Our E-Commerce & Online Logistics</h2>
                                    </div>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            Engineered for online merchants, wholesale trade distributors, and B2B platforms requiring institutional accountability across borders.
                                        </p>
                                    </div>
                                </div>

                                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                                    <div
                                        className="ApplicationCarouselSlide"
                                        ref={carouselStripRef}
                                    >
                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg" alt="API Rate Engine & Booking" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>API Rate Engine & Automated Booking</h2>
                                                <p>Integrate live ocean and air freight rates, container booking automation, and electronic shipping document generation directly into enterprise ERP portals.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg" alt="SKU-Level Barcode Intake" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>SKU-Level Barcoding & Intake Consolidation</h2>
                                                <p>Automated dimensional scanning, itemized serial auditing, barcoding, and export-grade pallet packaging across our regional staging hubs.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481021/QuinnDaisies/37874_i8j1ls.jpg" alt="Bonded E-Commerce Cross-Docking" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Bonded Cross-Docking & De-Stuffing</h2>
                                                <p>Secure intermediate staging hubs in Lagos, Baltimore, and Houston providing pallet breakdown, individual SKU sorting, and rapid onward dispatch.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg" alt="Electronic Customs Filing" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Automated Customs Pre-Filing</h2>
                                                <p>Proactive digital entry preparation, automated HS tariff code lookup, and certified single-window customs filings ensuring border clearance with zero port hold-ups.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465947/QuinnDaisies/2151003712_gbfv0i.jpg" alt="Milestone Telematics" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Real-Time Milestone Telematics</h2>
                                                <p>Live tracking alerts, GPS transit pings, temperature telematics for sensitive cargo, and digital proof-of-delivery receipts delivered via API or web portal.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg" alt="B2B Final-Mile Fulfillment" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>B2B Commercial Final-Mile Delivery</h2>
                                                <p>Synchronized road freight haulage and direct container drayage delivering commercial consignments reliably to retail distribution hubs and factories.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 5: Service Banner CTA (From MiddleEast.jsx lines 749-804) */}
                        <section className="serviceBanner">
                            <div className="serviceBannerSection">
                                <span className="spanText reveal__top">
                                    Online Presence & Cross-Border E-Commerce
                                </span>
                                <h2 className="reveal__bottom">
                                    Powering Digital Trade Execution with Total Operational Precision
                                </h2>
                                <p className="paragraphText reveal__left">
                                    From automated API order syncing to physical bonded cross-docking and final-mile delivery, Quinn Daisies delivers the reliable supply chain backbone modern digital enterprises require.
                                </p>

                                <a
                                    className="linkText reveal__bottom"
                                    href="mailto:info@quinndaisies.com"
                                >
                                    Speak with our E-Commerce Operations Team
                                </a>

                                <Link to="/get-a-quote" className="ApplicationButton reveal__bottom">
                                    <p>Request E-Commerce Consultation</p>
                                    <span className="material-symbols-outlined">
                                        arrow_outward
                                    </span>
                                </Link>
                            </div>

                            <div className="serviceBannerSectionImages">
                                <div className="serviceBannerSectionImagesBox">
                                    <div className="serviceBannerSectionImagesBoxContent">
                                        <h5>100%</h5>
                                        <p>
                                            API-driven milestone tracking, SKU-level inventory audits, and digital customs filings across all transatlantic fulfillment corridors.
                                        </p>
                                    </div>
                                    <span className="material-symbols-outlined">verified</span>
                                </div>

                                <img
                                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                                    alt="Quinn Daisies E-Commerce Operations"
                                />

                                <div className="serviceBannerSectionImagesBox">
                                    <div className="serviceBannerSectionImagesBoxContentRight">
                                        <span className="material-symbols-outlined">shopping_cart</span>
                                        <h5>
                                            Multi-Platform Storefront & EDI Sync
                                        </h5>
                                    </div>
                                    <p className="contentRight">
                                        Unified inventory visibility linking direct brand web stores, B2B wholesale portals, and global marketplaces with automated customs pre-clearance.
                                    </p>
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
