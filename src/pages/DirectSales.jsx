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
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

const directSalesLandingPool = [
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg",
];

export default function DirectSales() {
    useSmoothScroll();

    const [isUnlocked, setIsUnlocked] = useState(false);
    const landingOverlayRef = useRef(null);
    const landingContentRef = useRef(null);
    const isTransitioningRef = useRef(false);

    const [overlayImages, setOverlayImages] = useState([
        directSalesLandingPool[0],
        directSalesLandingPool[1],
        directSalesLandingPool[2],
        directSalesLandingPool[3],
    ]);
    const overlayColIndexRef = useRef(0);
    const overlayPoolIndexRef = useRef(4);

    useEffect(() => {
        if (isUnlocked) return;

        const interval = setInterval(() => {
            const nextImg =
                directSalesLandingPool[
                    overlayPoolIndexRef.current % directSalesLandingPool.length
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

    const carouselSectionRef = useRef(null);
    const carouselStripRef = useRef(null);
    const containerRef = useRef(null);
    const imagePinRef = useRef(null);
    const pageRef = useRef(null);
    const smoothWrapperRef = useRef(null);
    const smoothContentRef = useRef(null);
    const pathRef = useRef(null);
    const cardsListRef = useRef(null);

    usePinnedSlides(imagePinRef);

    useGSAP(
        () => {
            if (!smoothWrapperRef.current || !smoothContentRef.current)
                return undefined;

            ScrollTrigger.config({ ignoreMobileResize: true });

            const cardsList = cardsListRef.current || pageRef.current?.querySelector(".DirectSalesPlatformCardsList");
            let initialCardsHeight = cardsList?.offsetHeight || 2750;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardsList || ".DirectSalesPlatformCardsList",
                    pin: true,
                    start: "top 90px",
                    end: "+=950",
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(".DirectSalesPlatformCardBody p", {
                height: 0,
                opacity: 0,
                paddingBottom: 0,
                margin: 0,
                stagger: 0.25,
                ease: "power1.inOut",
            });

            tl.to(
                ".DirectSalesCardHighlights",
                {
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    stagger: 0.25,
                    ease: "power1.inOut",
                },
                "<",
            );

            tl.to(
                ".DirectSalesPlatformCardFooter",
                {
                    height: 0,
                    opacity: 0,
                    paddingTop: 0,
                    margin: 0,
                    stagger: 0.25,
                    ease: "power1.inOut",
                },
                "<",
            );

            tl.to(
                ".DirectSalesPlatformCardMedia",
                {
                    width: 0,
                    height: 0,
                    flex: "0 0 0px",
                    opacity: 0,
                    margin: 0,
                    stagger: 0.25,
                    ease: "power1.inOut",
                },
                "<",
            );

            tl.to(
                ".DirectSalesPlatformCardBody",
                {
                    gap: 0,
                    stagger: 0.25,
                    ease: "power1.inOut",
                },
                "<",
            );

            tl.to(
                cardsList,
                {
                    gap: "8px",
                    paddingTop: 20,
                    paddingBottom: 20,
                    ease: "power1.inOut",
                },
                "<",
            );

            tl.to(
                ".DirectSalesPlatformCard",
                {
                    gap: 0,
                    paddingTop: 14,
                    paddingBottom: 14,
                    marginBottom: 0,
                    stagger: 0.25,
                    ease: "power1.inOut",
                },
                "<",
            );

            tl.to(
                ".DirectSalesPlatformCardMeta .material-symbols-outlined",
                {
                    rotate: 180,
                    stagger: 0.25,
                    ease: "power1.inOut",
                },
                "<",
            );

            ScrollTrigger.refresh();

            return () => {
                tl.kill();
                ScrollTrigger.clearScrollMemory();
            };
        },
        { scope: pageRef },
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
        if (!isUnlocked) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
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

        // 1. Text & button fade out and rise
        tl.to(landingContentRef.current, {
            opacity: 0,
            y: -35,
            duration: 0.4,
            ease: "power2.in",
        });

        // 2. MorphSVG wave surges from bottom then fully covers screen
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

        // 3. Once screen is covered, slide the curtain up to reveal the main page
        tl.to(landingOverlayRef.current, {
            yPercent: -100,
            duration: 0.85,
            ease: "power3.inOut",
        });
    };

    const handleReplayIntro = () => {
        if (isTransitioningRef.current || !isUnlocked) return;
        isTransitioningRef.current = true;

        window.scrollTo({ top: 0, behavior: "smooth" });

        const path = pathRef.current;
        const resetPath = "M 0 100 V 100 Q 50 100 100 100 V 100 z";

        const tl = gsap.timeline({
            onComplete: () => {
                setIsUnlocked(false);
                isTransitioningRef.current = false;
                ScrollTrigger.refresh();
            },
        });

        // Slide landing overlay back down
        tl.to(landingOverlayRef.current, {
            yPercent: 0,
            duration: 0.75,
            ease: "power3.inOut",
        });

        // Reset path back to bottom
        if (path) {
            tl.to(path, {
                morphSVG: resetPath,
                duration: 0.5,
                ease: "power2.inOut",
            });
        }

        // Fade content back in
        tl.to(landingContentRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const platformModules = [
        {
            icon: "handshake",
            title: "Custom Enterprise Freight Agreements (SLAs)",
            badgeText: "Enterprise Contracting",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1789481027/QuinnDaisies/2151541855_fmbau8.jpg",
            description: "Direct bilateral commercial contracting for high-volume enterprise shippers, establishing multi-quarter fixed rate structures, guaranteed vessel space, and performance-backed transit SLAs across transatlantic lanes.",
            highlights: ["Fixed-Term Rate Stability", "Index-Linked Bunker Protection", "Zero Broker Intermediary Fees"],
            tags: ["Volume Contracting", "Capacity Guarantee", "Rate Protection"],
            icons: ["handshake", "verified"],
            actionText: "Inquire Enterprise Terms",
        },
        {
            icon: "agriculture",
            title: "Bulk Commodity Procurement & Direct Origin Off-Take",
            badgeText: "Verified Origin Supply",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1789481023/QuinnDaisies/2151541941_an6wpy.jpg",
            description: "Direct-from-origin agricultural commodity procurement across Nigeria, connecting global processors to raw cashew nuts, non-GMO sesame seeds, split ginger, and soybeans from over 200 vetted grower cooperatives.",
            highlights: ["Audited Cooperative Sourcing", "Direct Farm-Gate Traceability", "Origin Quality Certification"],
            tags: ["Direct Sourcing", "Origin Verification", "Cooperative Network"],
            icons: ["agriculture", "inventory_2"],
            actionText: "Request Sourcing Spec",
        },
        {
            icon: "directions_boat",
            title: "Guaranteed Capacity & Carrier Allocation",
            badgeText: "Reserved Vessel Space",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1789481021/QuinnDaisies/2152005480_a0jgob.jpg",
            description: "Tier-1 volume carrier commitments with leading ocean alliances and scheduled international air cargo operators, safeguarding enterprise cargo against peak-season rollovers, container equipment shortages, and demurrage spirals.",
            highlights: ["Priority Vessel Boarding", "Zero Peak Rollover", "Dedicated Reefer & Dry Equipment"],
            tags: ["FCL Allocation", "Air Priority", "Zero Rollover"],
            icons: ["directions_boat", "speed"],
            actionText: "Lock Freight Allocation",
        },
        {
            icon: "gavel",
            title: "Bilateral Governance & U.S. Contract Execution",
            badgeText: "Legal Assurance",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1775925890/QuinnDaisies/788_bvaktx.jpg",
            description: "Every enterprise commercial transaction is executed and governed through our registered U.S. corporate structure, providing international trade partners with binding commercial jurisdiction, escrow-backed settlement, and standardized Incoterms® 2020 terms.",
            highlights: ["U.S. Corporate Jurisdiction", "Incoterms® 2020 Compliance", "Transparent Legal Recourse"],
            tags: ["U.S. Jurisdiction", "Commercial Law", "Incoterms® 2020"],
            icons: ["gavel", "verified_user"],
            actionText: "Review Governance Model",
        },
        {
            icon: "fact_check",
            title: "Pre-Shipment Quality & Chain of Custody Assurance",
            badgeText: "Quality Control",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg",
            description: "Mandatory third-party sampling, accredited laboratory chemical assaying (aflatoxin, moisture, FFA, purity metrics), and physical container sealing certified by SGS, Cotecna, or Bureau Veritas before bills of lading are issued.",
            highlights: ["Accredited Third-Party Assaying", "Aflatoxin & Moisture Testing", "Tamper-Evident Container Seals"],
            tags: ["PSI Certification", "Lab Testing", "Sealed Custody"],
            icons: ["fact_check", "shield"],
            actionText: "View Quality Protocol",
        },
        {
            icon: "support_agent",
            title: "Dedicated Corporate Account Management",
            badgeText: "Single Point of Contact",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1778362094/QuinnDaisies/2151541927_afrcah.jpg",
            description: "An assigned senior logistics strategist providing enterprise clients with single-desk operational accountability, milestone telemetry tracking, priority customs escalation, and synchronized cross-border coordination across our Lagos and U.S. offices.",
            highlights: ["Dedicated Senior Strategist", "24/7 Transatlantic Monitoring", "Direct Executive Escalation"],
            tags: ["Dedicated Strategist", "24/7 Coordination", "Direct Reporting"],
            icons: ["support_agent", "hub"],
            actionText: "Connect With Strategist",
        },
        {
            icon: "warehouse",
            title: "Bonded Staging & Export Warehousing Solutions",
            badgeText: "Infrastructure Staging",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151657954_yngm28.jpg",
            description: "Secure intermediate staging and storage facilities strategically positioned along export corridors in Lagos, providing climate-controlled buffering, fumigation bays, mechanical palletization, and pre-customs container stuffing.",
            highlights: ["Secure Bonded Holding", "Temperature & Humidity Control", "Pre-Export Mechanical Palletizing"],
            tags: ["Bonded Warehousing", "Export Staging", "Fumigation Bays"],
            icons: ["warehouse", "inventory"],
            actionText: "Inspect Staging Facility",
        },
        {
            icon: "assignment_turned_in",
            title: "Export-Import Customs Pre-Clearance & Regulatory Filing",
            badgeText: "Regulatory Coordination",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1787010383/QuinnDaisies/125749_kh41em.jpg",
            description: "Proactive regulatory coordination managing clean inspection reports, NXP electronic filings, NEPC export licensing, phytosanitary certifications, and U.S. CBP/FDA prior notice documentation for seamless port clearance.",
            highlights: ["NXP & NEPC Compliance", "Automated Phytosanitary Filing", "U.S. CBP/FDA Prior Notice Sync"],
            tags: ["Customs Pre-Clearance", "Trade Filings", "Regulatory Compliance"],
            icons: ["assignment_turned_in", "policy"],
            actionText: "Consult Compliance Team",
        },
        {
            icon: "payments",
            title: "Structured Trade Settlement & Risk Hedging",
            badgeText: "Commercial Assurance",
            image: "https://res.cloudinary.com/renaissance-images/image/upload/v1787010383/QuinnDaisies/126845_hedzv1.jpg",
            description: "Structured trade settlement frameworks including documentary letters of credit (LC), bank payment obligations (BPO), and milestone escrow payments, shielding enterprise buyers and exporters from currency slippage and contract default.",
            highlights: ["Confirmed Documentary L/C", "Multi-Currency Settlement", "Performance-Bonded Execution"],
            tags: ["Trade Settlement", "L/C Structuring", "Currency Hedging"],
            icons: ["payments", "account_balance"],
            actionText: "Explore Structured Terms",
        },
    ];

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

    return (
        <>
            <SEO
                title="Direct Sales & Enterprise Freight Contracting | Quinn Daisies Logistics"
                description="Direct commercial engagement for enterprise cargo shippers and bulk commodity buyers. Custom SLAs, guaranteed ocean and air capacity, verified origin sourcing, and U.S.-governed contracts."
                keywords="direct sales logistics, enterprise freight contracts, bulk commodity procurement, guaranteed freight capacity, U.S. governed freight contracting, institutional cargo volume, spot freight quotes"
                url="https://www.logistics.quinndaisies.com/direct-sales"
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
                            alt="Quinn Daisies Direct Commercial Engagement"
                        />
                    ))}

                    <div className="ContentCtn-Center" ref={landingContentRef}>
                        <span className="ContentCtn-Center-Span">Direct Commercial Engagement</span>
                        <h1>
                            Direct Commercial Agreements & Guaranteed Freight Allocations
                        </h1>
                        <p>
                            Direct enterprise access to custom Service Level Agreements (SLAs), dedicated vessel and air cargo allocations, verified origin commodity supply chains, and transparent bilateral commercial execution under U.S. jurisdictional governance.
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
                                    id="directSalesTransitionPattern"
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
                                fill="url(#directSalesTransitionPattern)"
                                vectorEffect="non-scaling-stroke"
                                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                            />
                        </svg>
                    </div>
                </div>

                <div id="smooth-wrapper" ref={smoothWrapperRef}>
                    <div id="smooth-content" ref={smoothContentRef}>

                        {/* SECTION 1: Direct Commercial Execution & Overview Boxes */}
                        <section className="sectionBox">
                            <div className="sectionBoxContainer">
                                <div className="advacneSectionContentHeaderBox">
                                    <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466479/QuinnDaisies/2151763093_uclmdh.jpg" alt="Quinn Daisies Direct Sales" />

                                    <div className="advacneSectionContentHeader">
                                        <h1>
                                            Direct Commercial Execution & Enterprise Supply Chains
                                        </h1>
                                        <p>
                                            Engaging multinational corporations, industrial processors, and commercial importers directly—delivering custom freight volume agreements, dedicated vessel capacity, and verified origin procurement with complete legal accountability.
                                        </p>

                                        <Link className="ApplicationButton" to="/contact-us" style={{ marginTop: "1.5rem", width: "fit-content" }}>
                                            Enterprise Consultation
                                            <span className="material-symbols-outlined">
                                                globe_location_pin
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="advacneSectionContentHeaderBoxFlex">
                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466467/QuinnDaisies/2151599738_wgtskd.jpg" alt="Quinn Daisies Origin Sourcing" />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Verified Origin Sourcing & Supply Assurance</h3>
                                            <p>Direct commercial procurement connecting global enterprise buyers with vetted origin producers.</p>
                                        </div>
                                    </div>

                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg" alt="Quinn Daisies Freight Agreements" />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Custom Freight Agreements & Rate Optimization</h3>
                                            <p>Structured volume agreements across scheduled ocean and air routes with guaranteed carrier capacity.</p>
                                        </div>
                                    </div>

                                    <div className="advacneSectionContentHeaderBoxFlexBox">
                                        <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg" alt="Quinn Daisies Trade Compliance" />
                                        <div className="advacneSectionContentHeaderBoxFlexBoxContent">
                                            <h3>Trade Compliance & Guaranteed Chain of Custody</h3>
                                            <p>Comprehensive customs pre-clearance, phytosanitary validation, and tariff documentation management.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                Enterprise Commercial Execution & Sourcing Metrics
                            </span>
                            <h4 className="reveal__right">
                                Connecting institutional shippers and volume buyers with scheduled carrier capacity, contracted rates, and verifiable origin supply.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>SLA Delivery Fulfillment</h6>
                                        <p>
                                            Precision contract execution and priority booking ensuring scheduled delivery from origin collection to final destination.
                                        </p>
                                    </div>
                                    <h3>
                                        99.2<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Vetted Origin Supply Partners</h6>
                                        <p>
                                            Audited agricultural cooperatives, commercial aggregators, and certified industrial processors across Nigeria.
                                        </p>
                                    </div>
                                    <h3>
                                        200<span>+</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Freight Cost Optimization</h6>
                                        <p>
                                            Long-term carrier volume commitments and container load balancing eliminating volatile spot rate spikes.
                                        </p>
                                    </div>
                                    <h3>
                                        15–25<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>U.S.-Governed Commercial Agreements</h6>
                                        <p>
                                            Enforceable trade contracts, transparent documentary letters of credit, and clear legal jurisdictional oversight.
                                        </p>
                                    </div>
                                    <h3>
                                        100<span>%</span>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                High-volume commercial buyers and industrial off-takers require direct, unmediated access to freight capacity and origin supply chains. Relying on layers of brokers introduces margin leakage, opacity, and counterparty defaults. Quinn Daisies addresses this through direct commercial engagement backed by physical asset infrastructure—providing institutional clients with dedicated account executives, scheduled container allocations, and transparent pricing structures.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                From contract negotiation to destination gate-in, our direct sales team coordinates all logistics milestones under a unified service level agreement. Shippers gain guaranteed vessel berthing windows, priority air freight handling at NACHO MMIA, bonded warehouse staging, and end-to-end telematics tracking under our established corporate governance in the United States and Nigeria.
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
                                        Dedicated Freight Corridors & Multimodal Transit Capabilities
                                    </h2>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            Our direct sales framework links high-volume commercial shippers directly with scheduled vessel allocations, bonded warehousing, air cargo priority, and rapid customs clearance across key transatlantic trade corridors.
                                        </p>
                                    </div>
                                </div>

                                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                                    <div
                                        className="ApplicationCarouselSlide"
                                        ref={carouselStripRef}
                                    >
                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg" alt="Quinn Daisies Ocean Freight" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Ocean Freight (FCL/LCL)</h2>
                                                <p>Direct containerized export routes connecting Lagos Port Complex (Apapa/Tin Can Island) to major U.S. and transatlantic ports of entry, including Baltimore, Newark, Houston, and Savannah.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789248900/QuinnDaisies/2151541891_o5wyhf.jpg" alt="Quinn Daisies Air Cargo" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Air Cargo Consolidation</h2>
                                                <p>Rapid, high-security clearance and express handling operated out of our physical base at NACHO, MMIA in Lagos, synchronized with major international cargo airlines and express carriers (DHL, FedEx, UPS).</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg" alt="Quinn Daisies Inland Haulage" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Inland Haulage & Drayage</h2>
                                                <p>Managed road-transit pipelines moving containerized cargo between remote agricultural collection zones, industrial manufacturing hubs, and maritime container terminals.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg" alt="Quinn Daisies Warehousing" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Bonded Warehousing & Inventory Staging</h2>
                                                <p>Secure intermediate staging facilities providing climate-controlled buffering, inventory consolidation, palletizing, and pre-export container preparation.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789249438/QuinnDaisies/36467_ncwdts.jpg" alt="Quinn Daisies Sourcing Network" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>200+ Vetted Origin Sourcing Network</h2>
                                                <p>Direct logistics connectivity to an audited network of over 200 qualified Nigerian agricultural cooperatives, commodity aggregators, and commercial processors.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg" alt="Quinn Daisies Quality Inspection" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Pre-Shipment Inspection (PSI) Enforced</h2>
                                                <p>Mandatory on-site sampling and chemical analysis through accredited third-party inspection agencies (SGS, Bureau Veritas, Cotecna) before cargo is sealed, verifying purity, moisture tolerances, aflatoxin limits, and phytosanitary metrics.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg" alt="Quinn Daisies Trade Risk Hedging" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Trade Risk Hedging</h2>
                                                <p>Mitigating the classic risks of transatlantic commerce—cargo adulteration, demurrage spirals, exchange-rate slippage, and contract default—by using structured commercial agreements executed through our U.S. entity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            className="Dark-Background"
                        >
                            <div className="ApplicationCarouselRefurblished">
                                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                                    <h2 className="reveal__left">
                                        Enterprise Commercial Procurement & Supply Assurance
                                    </h2>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            We structure bilateral commercial agreements designed for multinational corporations, industrial commodity buyers, and high-volume commercial shippers requiring predictable logistics pricing, guaranteed allocation, and legal accountability.
                                        </p>
                                    </div>
                                </div>

                                <div className="ApplicationPivotGrid">
                                    <div className="ApplicationPivotGridLeft">
                                        <div className="ApplicationPivotGridLeftItem">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg" alt="Quinn Daisies Direct Contracting" />
                                            <div className="ApplicationPivotGridLeftItemOverlay">
                                                <span className="AdvanceUpdateSpan">01 — Commercial Contracting</span>
                                                <h3 className="reveal__left">Direct Bilateral SLAs & Volume Rate Locks</h3>
                                                <p className="ApplicationCarouselContainerText">We negotiate and execute custom Service Level Agreements directly with high-volume enterprise shippers—securing fixed quarterly and annual rate structures, guaranteed vessel space, and zero intermediate broker markups.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ApplicationPivotGridRight">
                                        <div className="ApplicationPivotGridRightFlex">
                                            <div className="ApplicationPivotGridRightBox">
                                                <div className="ApplicationPivotGridRightBoxContent">
                                                    <span className="AdvanceUpdateSpan">02 — Direct Commodity Procurement</span>
                                                    <h4 className="reveal__left">Audited Cooperative Networks & Verified Supply</h4>
                                                    <p className="ApplicationCarouselContainerText">Direct sourcing access to over 200 vetted agricultural cooperatives and commercial aggregators across Nigeria, providing enterprise buyers with stable, origin-verified pipelines for raw commodities.</p>
                                                </div>
                                                <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg" alt="Quinn Daisies Supply Chain Governance" />
                                            </div>

                                            <div className="ApplicationPivotGridRightBox">
                                                <div className="ApplicationPivotGridRightBoxContent">
                                                    <span className="AdvanceUpdateSpan">03 — Commercial Governance</span>
                                                    <h4 className="reveal__left">U.S. Commercial Law & Transatlantic Jurisdiction</h4>
                                                    <p className="ApplicationCarouselContainerText">Every direct sales contract is executed through our registered U.S. corporate structure under Incoterms® 2020, providing international buyers with enforceable commercial terms, compliance protection, and transparent legal recourse.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ApplicationPivotGridRightBottomBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg" alt="Quinn Daisies Mission Delivery" />
                                            <div className="ApplicationPivotGridRightBottomBoxOverlay">
                                                <span className="AdvanceUpdateSpan">04 — Chain of Custody Assurance</span>
                                                <h3 className="reveal__left">Accredited Pre-Shipment Quality Assaying</h3>
                                                <p className="ApplicationCarouselContainerText">Independent accredited inspection (SGS, Cotecna, Bureau Veritas) is conducted at origin prior to container sealing—verifying moisture, aflatoxin, purity, and phytosanitary metrics to protect buyer capital.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="ResourcesSectionWrapper">
                            <div id="ResourcesSectionContent">
                                <div className="ResourcesSectionSpacerTop"></div>
                                <div className="ResourcesSectionHeader">
                                    <div className="ResourcesSectionHeaderContent">
                                        <span className="reveal__top">Direct Commercial Engagement</span>
                                        <h2 className="reveal__bottom">
                                            Direct Enterprise Contracting. Guaranteed Capacity. Scalable Sourcing.
                                        </h2>
                                    </div>
                                    <p className="reveal__right">
                                        Our Direct Sales framework provides high-volume shippers, institutional buyers, and industrial manufacturers with direct corporate access to structured freight agreements, dedicated cargo allocations, verified origin commodity pipelines, and bilateral commercial execution under U.S. jurisdictional governance.
                                    </p>
                                </div>

                                <div className="ResourcesSectionHeaderExtra">
                                    <p className="reveal__bottom__interval">
                                        Direct Sales at Quinn Daisies eliminates intermediate broker friction, giving commercial and government enterprises direct contracting pathways for cross-border cargo movement. By structuring custom Service Level Agreements (SLAs) directly with our U.S. corporate entity, clients secure transparent pricing structures, prioritized vessel space, and origin-to-destination chain of custody without broker layers or speculative pricing.
                                    </p>
                                    <p className="reveal__bottom__interval">
                                        Through bilateral operational coordination across North America and West Africa, our direct sales team works directly with corporate procurement leaders to model freight demand, lock quarterly and annual carrier allocations, and pre-qualify agricultural and industrial commodity supply chains. This pre-positioned capacity guarantees operational readiness and shields clients from sudden ocean spot-rate volatility and port congestion delays.
                                    </p>
                                    <p className="reveal__bottom__interval">
                                        Every direct commercial agreement is backed by dedicated enterprise account managers, milestone-driven shipment telemetry, formal pre-shipment inspections (SGS/Cotecna), and comprehensive export-import documentation compliance—ensuring complete legal, fiscal, and regulatory assurance across every trade corridor.
                                    </p>
                                </div>

                                <div ref={cardsListRef} className="DirectSalesPlatformCardsList">
                                    {platformModules.map((item, index) => (
                                        <div key={index} className="DirectSalesPlatformCard">
                                            <div className="DirectSalesPlatformCardMedia">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className="DirectSalesPlatformCardBody">
                                                <div className="DirectSalesPlatformCardHeader">
                                                    <h3>{item.title}</h3>
                                                    <div className="DirectSalesPlatformCardMeta">
                                                        <span>{item.badgeText}</span>
                                                        <span className="material-symbols-outlined">expand_more</span>
                                                    </div>
                                                </div>
                                                <p>{item.description}</p>

                                                {item.highlights && item.highlights.length > 0 && (
                                                    <div className="DirectSalesCardHighlights">
                                                        {item.highlights.map((h, idx) => (
                                                            <div key={idx} className="DirectSalesCardHighlightItem">
                                                                <span className="material-symbols-outlined">verified</span>
                                                                <span>{h}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="DirectSalesPlatformCardFooter">
                                                    <div className="DirectSalesPlatformCardTags">
                                                        {item.icons.map((ic, i) => (
                                                            <span key={i} className="DirectSalesCardIconCircle">
                                                                <span className="material-symbols-outlined">{ic}</span>
                                                            </span>
                                                        ))}
                                                        {item.tags.map((tag, i) => (
                                                            <span key={i} className="DirectSalesCardTagPill">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    {item.actionText && (
                                                        <Link to="/contact-us" className="DirectSalesCardActionBtn">
                                                            {item.actionText}
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer DirectSalesBannerSection">
                            <div className="ApplicationBanner">
                                <img
                                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                                    alt="Quinn Daisies Enterprise CTA"
                                />
                                <div className="ApplicationBannerOverlay">
                                    <h2>
                                        Move Your Business Across Borders
                                    </h2>
                                    <p className="ApplicationText">
                                        Tell us what you need to source, move, import, export, distribute, or establish,
                                        and our team will determine the appropriate operational pathway.
                                    </p>
                                    <Link className="ApplicationButton" to="/contact-us">
                                        Trade Consultation
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
