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

const distLandingPool = [
    "https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1776766957/QuinnDaisies/2152005453_ydw2qc.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789481023/QuinnDaisies/2151541941_an6wpy.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg",
];

export default function DistributionPartnerships() {
    useSmoothScroll();

    const [isUnlocked, setIsUnlocked] = useState(false);
    const landingOverlayRef = useRef(null);
    const landingContentRef = useRef(null);
    const isTransitioningRef = useRef(false);

    const [overlayImages, setOverlayImages] = useState([
        distLandingPool[0],
        distLandingPool[1],
        distLandingPool[2],
        distLandingPool[3],
    ]);
    const overlayColIndexRef = useRef(0);
    const overlayPoolIndexRef = useRef(4);

    useEffect(() => {
        if (isUnlocked) return;

        const interval = setInterval(() => {
            const nextImg =
                distLandingPool[
                overlayPoolIndexRef.current % distLandingPool.length
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

    const containerRef = useRef(null);
    const imagePinRef = useRef(null);
    const pageRef = useRef(null);
    const smoothWrapperRef = useRef(null);
    const smoothContentRef = useRef(null);
    const pathRef = useRef(null);
    const carouselSectionRef = useRef(null);
    const carouselStripRef = useRef(null);

    usePinnedSlides(imagePinRef);

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

    return (
        <>
            <SEO
                title="Distribution Partnerships & 3PL Carrier Alliances | Quinn Daisies Logistics"
                description="Expand your distribution reach with Quinn Daisies. Collaborating with regional freight carriers, bonded warehousing operators, and 3PL networks across North America and West Africa."
                keywords="distribution partnerships, 3PL carrier network, freight alliance, bonded warehousing partner, logistics network expansion, freight forwarding alliance, carrier contracting, last mile distribution"
                url="https://www.logistics.quinndaisies.com/distribution-partnerships"
            />

            <div ref={pageRef}>
                <Navbar />

                {/* Hero Curtain Overlay */}
                <div
                    ref={landingOverlayRef}
                    className="CorporateLandingOverlay"
                >
                    <div className="CorporateLandingBackdrop" />

                    {overlayImages.map((src, idx) => (
                        <img
                            key={`${idx}-${src}`}
                            src={src}
                            alt="Quinn Daisies Distribution & 3PL Alliances"
                        />
                    ))}

                    <div className="ContentCtn-Center" ref={landingContentRef}>
                        <span className="ContentCtn-Center-Span">Distribution & 3PL Alliances</span>
                        <h1>
                            Regional Carrier Alliances, Bonded Warehousing & Last-Mile Distribution
                        </h1>
                        <p>
                            Expanding commercial reach across North America, West Africa, and global trade corridors through strategic partnerships with premier 3PL operators, regional freight carriers, container freight stations, and bonded warehouse operators.
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
                                    id="distTransitionPattern"
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
                                fill="url(#distTransitionPattern)"
                                vectorEffect="non-scaling-stroke"
                                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                            />
                        </svg>
                    </div>
                </div>

                <div id="smooth-wrapper" ref={smoothWrapperRef}>
                    <div id="smooth-content" ref={smoothContentRef}>

                        {/* SECTION 1: Strategic 3PL Integration & Regional Networks (From DirectSales.jsx sectionBox) */}
                        <section className="sectionBox">
                            <div className="sectionBoxContainer">
                                <div className="advacneSectionContentHeaderBox">
                                    <img
                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg"
                                        alt="Quinn Daisies Distribution Hub"
                                    />

                                    <div className="advacneSectionContentHeader">
                                        <h1>
                                            Strategic 3PL Integration & Regional Distribution Networks
                                        </h1>
                                        <p>
                                            We collaborate with established freight forwarders, container haulage fleets, bonded warehouse operators, and regional distribution networks to deliver frictionless, accountable cargo distribution from maritime ports to inland destinations.
                                        </p>

                                        <Link className="ApplicationButton" to="/contact-us" style={{ marginTop: "1.5rem", width: "fit-content" }}>
                                            Join Distribution Network
                                            <span className="material-symbols-outlined">
                                                globe_location_pin
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="advacneSectionContentHeaderBoxFlex">
                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg"
                                            alt="Bonded Warehousing"
                                        />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Bonded Warehousing & Staging Hubs</h3>
                                            <p>Secure intermediate consolidation facilities positioned along key transit arteries in Lagos, Baltimore, and Houston.</p>
                                        </div>
                                    </div>

                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg"
                                            alt="Inland Drayage"
                                        />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Dedicated Road Drayage & Haulage Fleets</h3>
                                            <p>Synchronized container transport linking maritime terminals to inland manufacturing and retail distribution centers.</p>
                                        </div>
                                    </div>

                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766957/QuinnDaisies/2152005453_ydw2qc.jpg"
                                            alt="Customs Brokerage"
                                        />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Customs Brokerage & Clearance Integration</h3>
                                            <p>Proactive alignment with licensed customs brokers for rapid port clearance and documented delivery release.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServiceContainer">
                            <h2 className="ServiceText">
                                Quinn Daisies bridges the operational gap between international maritime shipping and domestic delivery networks. By integrating contracted carrier capacity, audited bonded warehousing, and multi-tier logistics partnerships, we give global enterprises dependable, documented access to critical regional markets.
                            </h2>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                Distribution Network Architecture
                            </span>
                            <h4 className="reveal__right">
                                Synchronized distribution execution across coastal gateways, inland drayage corridors, and regional commercial hubs.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>On-Time Last-Mile Delivery</h6>
                                        <p>
                                            Precision dispatch protocols and dedicated transport routing ensuring high reliability from container port to inland facility doors.
                                        </p>
                                    </div>
                                    <h3>
                                        99.2<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Audited Distribution & Carrier Partners</h6>
                                        <p>
                                            Contracted access to certified haulage operators, bonded warehouses, and cross-docking facilities across North America and Nigeria.
                                        </p>
                                    </div>
                                    <h3>
                                        200<span>+</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Port-to-Warehouse Turnaround</h6>
                                        <p>
                                            Expedited terminal drayage and rapid de-stuffing procedures minimizing container detention and demurrage liabilities.
                                        </p>
                                    </div>
                                    <h3>
                                        24–48<span>hrs</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Documented Chain of Custody</h6>
                                        <p>
                                            Milestone telematics and verifiable proof-of-delivery logging across every freight leg from collection to final destination.
                                        </p>
                                    </div>
                                    <h3>
                                        100<span>%</span>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                Effective distribution in cross-border trade requires seamless integration between international ocean or air carriers and domestic road transport. Too often, commercial shipments encounter expensive delays once they arrive at maritime ports due to equipment shortages, congested terminal gates, or disorganized inland drayage. Quinn Daisies solves this by establishing pre-negotiated service agreements with audited regional trucking fleets, rail hauliers, and container freight stations.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                Through our collaborative partnership model, regional logistics operators gain access to steady, high-volume transatlantic freight flows, while international shippers benefit from predictable inland transit times, fixed contracted drayage rates, and complete chain-of-custody assurance under U.S. jurisdictional oversight.
                            </p>
                        </section>

                        <section
                            className="Dark-Background"
                            id="CarouselAnimation"
                            ref={carouselSectionRef}
                        >
                            <div className="ApplicationCarouselRefurblished">
                                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                                    <h2 className="reveal__left">
                                        Multi-Tiered Distribution Partnership Framework
                                    </h2>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            How we collaborate with regional carriers, warehousing operators, and logistics providers to create synchronized, reliable cargo distribution pipelines.
                                        </p>
                                    </div>
                                </div>

                                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                                    <div
                                        className="ApplicationCarouselSlide"
                                        ref={carouselStripRef}
                                    >
                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg" alt="Dedicated Haulage & Container Drayage" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Dedicated Haulage & Container Drayage Alliances</h2>
                                                <p>Contracted partnerships with licensed fleet operators offering pre-positioned flatbeds, chassis, and heavy-duty drayage units for rapid evacuation from maritime ports.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg" alt="Bonded Warehousing Networks" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Bonded Warehousing & Inventory Buffering</h2>
                                                <p>Shared and dedicated bonded warehouse space providing palletization, repacking, quality inspection bays, and temp-controlled buffer storage for commercial consignments.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg" alt="Customs Brokerage Alliances" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Customs Brokerage & Clearance Integration</h2>
                                                <p>Integrated digital handoffs with certified customs brokers, accelerating entry filings, automated duty settlements, and border releases across transit corridors.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg" alt="Last-Mile Distribution Fleet" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Last-Mile & Regional Feeder Distribution</h2>
                                                <p>Coordinated regional carrier routes ensuring reliable inland transport to distribution centers, retail fulfillment facilities, and manufacturing plants.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481023/QuinnDaisies/2151541941_an6wpy.jpg" alt="Cross-Docking & Transloading" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Cross-Docking & Transloading Hubs</h2>
                                                <p>Rapid transfer from ocean containers to domestic over-the-road dry vans and reefers, minimizing terminal dwell times and eliminating demurrage charges.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465947/QuinnDaisies/2151003712_gbfv0i.jpg" alt="Digital Visibility & Carrier Telematics" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Digital Visibility & Carrier Telematics</h2>
                                                <p>Unified milestone reporting, GPS tracking, and digital proof-of-delivery logging across every partner carrier leg from collection to final destination.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer">
                            <div className="ApplicationBanner">
                                <img
                                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                                    alt="Distribution Partnerships CTA"
                                />
                                <div className="ApplicationBannerOverlay">
                                    <h2>
                                        Scale Your Regional Distribution Reach With Quinn Daisies
                                    </h2>
                                    <p className="ApplicationText">
                                        Whether you operate a haulage fleet, manage bonded warehousing, or require dependable distribution partners across transatlantic trade lanes, let us structure a high-volume commercial partnership.
                                    </p>
                                    <Link className="ApplicationButton" to="/contact-us">
                                        Distribution Partnership
                                        <span className="material-symbols-outlined">
                                            globe_location_pin
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
