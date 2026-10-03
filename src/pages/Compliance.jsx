import React from "react";
import gsap from "gsap";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";
import { industrySlides } from "../data/industrySlides";
import { Button } from "@mui/material";

const heroSlides = [
    {
        span: "Trade Assurance & Operational Safety",
        h1: "Reducing Risk Before Cargo Moves Across Global Corridors",
        p: "International commerce requires more than transportation. Quinn Daisies coordinates origin supplier due diligence, accredited laboratory testing, customs pre-clearance, and strict chain-of-custody protocols that guarantee compliant, zero-demurrage shipment execution.",
        images: [
            "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/9395_ifws6o.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/2151910932_l06x8e.jpg",
        ],
    },
    {
        span: "Dual-Entity Governance & Federal Standing",
        h1: "Transatlantic Legal Accountability & Institutional Governance",
        p: "By bridging U.S. contractual enforceability with licensed on-the-ground operational entities in Nigeria, we deliver institutional security, FAR-aligned procurement integrity, and complete regulatory transparency for global buyers and government missions.",
        images: [
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151468852_krro1f.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541845_zbq5lg.jpg",
        ],
    },
    {
        span: "Quality Verification & Regulatory Pre-Clearance",
        h1: "Certified Origin Quality Meeting USDA, FDA & Global Standards",
        p: "From farm-gate sampling in northern agricultural belts to destination discharge at U.S. and European ports, every consignment undergoes mandatory pre-shipment laboratory assays (SGS, Bureau Veritas) and phytosanitary certification.",
        images: [
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg",
        ],
    },
];

const SLIDE_INTERVAL = 3000;

const complianceLandingPool = [
    "https://res.cloudinary.com/renaissance-images/image/upload/v1776766959/QuinnDaisies/2151541915_wnesos.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151468852_krro1f.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541845_zbq5lg.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg",
];

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default function ComplianceSafety() {
    useSmoothScroll();

    const [activeSlide, setActiveSlide] = useState(0);
    const [isUnlocked, setIsUnlocked] = useState(false);
    const activeSlideRef = useRef(0);
    const heroContentRef = useRef(null);
    const heroBgRef = useRef(null);
    const isAnimatingRef = useRef(false);
    const landingOverlayRef = useRef(null);
    const landingContentRef = useRef(null);
    const isTransitioningRef = useRef(false);

    const [overlayImages, setOverlayImages] = useState([
        complianceLandingPool[0],
        complianceLandingPool[1],
        complianceLandingPool[2],
        complianceLandingPool[3],
    ]);
    const overlayColIndexRef = useRef(0);
    const overlayPoolIndexRef = useRef(4);

    useEffect(() => {
        if (isUnlocked) return;

        const interval = setInterval(() => {
            const nextImg =
                complianceLandingPool[
                overlayPoolIndexRef.current % complianceLandingPool.length
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

    useEffect(() => {
        const interval = setInterval(() => {
            if (isAnimatingRef.current) return;
            isAnimatingRef.current = true;

            const next = (activeSlideRef.current + 1) % heroSlides.length;

            const tl = gsap.timeline({
                onComplete: () => {
                    isAnimatingRef.current = false;
                },
            });

            tl.to(heroContentRef.current, {
                opacity: 0,
                y: -40,
                duration: 0.45,
                ease: "power2.in",
            }).to(
                heroBgRef.current,
                {
                    opacity: 0,
                    scale: 1.04,
                    duration: 0.45,
                    ease: "power2.in",
                },
                "<",
            );

            tl.add(() => {
                activeSlideRef.current = next;
                setActiveSlide(next);
            });

            tl.set(heroContentRef.current, { y: 50 })
                .to(heroContentRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power3.out",
                })
                .to(
                    heroBgRef.current,
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.55,
                        ease: "power3.out",
                    },
                    "<",
                );
        }, SLIDE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    const carouselSectionRef = useRef(null);
    const carouselStripRef = useRef(null);
    const containerRef = useRef(null);
    const imagePinRef = useRef(null);
    const pageRef = useRef(null);
    const smoothWrapperRef = useRef(null);
    const smoothContentRef = useRef(null);
    const pathRef = useRef(null);

    usePinnedSlides(imagePinRef);

    useGSAP(
        () => {
            if (!smoothWrapperRef.current || !smoothContentRef.current)
                return undefined;

            ScrollTrigger.config({ ignoreMobileResize: true });

            const existingSmoother = ScrollSmoother.get();
            if (existingSmoother) existingSmoother.kill();

            const smoother = ScrollSmoother.create({
                wrapper: smoothWrapperRef.current,
                content: smoothContentRef.current,
                smooth: 1.2,
                smoothTouch: 0.1,
                effects: true,
                normalizeScroll: true,
            });

            ScrollTrigger.refresh();

            return () => {
                smoother.kill();
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

    const currentSlide = heroSlides[activeSlide];

    return (
        <>
            <SEO
                title="Safety, Regulatory Compliance & Trade Assurance | Quinn Daisies Logistics"
                description="Quinn Daisies eliminates cross-border trade risk through rigorous supplier due diligence, accredited laboratory quality assays, dual-entity federal compliance, and destination-market regulatory pre-clearance."
                keywords="logistics compliance, trade assurance, cargo safety, customs regulatory clearance, FDA compliance shipping, NAFDAC clearance, international trade risk mitigation, cargo inspection, CBP compliance"
                url="https://www.logistics.quinndaisies.com/compliance-and-safety"
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
                            alt="Quinn Daisies Compliance Infrastructure"
                        />
                    ))}

                    <div className="ContentCtn-Center" ref={landingContentRef}>

                        <span className="ContentCtn-Center-Span">Safety, Compliance & Trade Assurance</span>
                        <h1>
                            Reducing Cross-Border Risk Through Rigorous Compliance & Trade Assurance
                        </h1>
                        <p>
                            International trade demands more than freight forwarding. Quinn Daisies coordinates supplier due diligence, certified laboratory assays, dual-jurisdiction corporate governance, and regulatory pre-clearance across U.S., African, and global corridors—ensuring total shipment readiness and legal accountability.
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
                                    id="advanceTransitionPattern"
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
                                fill="url(#advanceTransitionPattern)"
                                vectorEffect="non-scaling-stroke"
                                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                            />
                        </svg>
                    </div>
                </div>

                <div id="smooth-wrapper" ref={smoothWrapperRef}>
                    <div id="smooth-content" ref={smoothContentRef}>
                        <section className="AdvanceUpdateDesign">
                            <img className="AdvanceUpdateDesignImage" src="https://res.cloudinary.com/renaissance-images/image/upload/v1789482616/QuinnDaisies/91_tyghem.jpg" alt="Quinn Daisies Compliance Image" />

                            <div className="AdvanceUpdateDesignOverlay">
                                <span className="AdvanceUpdateSpan">
                                    Institutional Safety & Regulatory Compliance
                                </span>

                                <h2>De-Risking Cross-Border Commerce Through Disciplined Origin Verification</h2>
                                <p className="AdvanceUpdateText">
                                    Cross-border trade between developed economies and emerging African markets collapses when quality assays fail or regulatory filings stall. We de-risk every transaction by embedding destination-market standards directly into origin aggregation—enforcing 100% pre-clearance compliance across USDA, FDA, NAFDAC, and NEPC protocols.
                                </p>
                                <div className="AdvanceUpdateImagesItem">
                                    <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg" alt="Quinn Daisies Client" />
                                    <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468842_qcq2hy.jpg" alt="Quinn Daisies Client" />
                                    <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg" alt="Quinn Daisies Client" />
                                    <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151541857_njan6w.jpg" alt="Quinn Daisies Client" />
                                    <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg" alt="Quinn Daisies Client" />
                                    <div className="AdvanceUpdateImagesContent">
                                        <span className="material-symbols-outlined">verified</span>
                                        <p>100% Pre-Clearance</p>
                                    </div>
                                </div>

                                <div className="AdvanceUpdateButtonContainer reveal__bottom">
                                    <Link className="ApplicationButton" to="/services">
                                        Explore Our Services
                                        <span className="material-symbols-outlined">
                                            globe_location_pin
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="sectionBox">
                            <div className="AdvanceDesignStructureFlex">
                                <div className="AdvanceDesignStructure">
                                    <span className="AdvanceUpdateSpan">Dual-Entity Corporate Structure & Federal Standing</span>
                                    <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766959/QuinnDaisies/2151541915_wnesos.jpg" alt="Quinn Daisies Corporate Standing" />
                                </div>

                                <div className="AdvanceDesignStructure">
                                    <p>Quinn Daisies maintains a complementary dual-entity corporate structure designed to provide U.S.-based contractual accountability, American commercial law protection, and institutional escrow governance while supporting fully licensed, authorized physical logistics operations in Nigeria. This jurisdictional architecture enables institutional clients, government programs, and international corporations to transact with complete legal certainty, mitigating counterparty, sovereign, and cross-border currency risks.</p>
                                    <Link className="ApplicationButton" to="/corporate-overview">
                                        Learn More Here
                                        <span className="material-symbols-outlined">
                                            globe_location_pin
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                Compliance & Trade Assurance Indicators
                            </span>
                            <h4 className="reveal__right">
                                Rigorous origin verification, statutory pre-filing accuracy, and tamper-proof chain of custody across international trade lanes.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Pre-Shipment Assay Compliance</h6>
                                        <p>
                                            Mandatory independent laboratory testing (SGS/Bureau Veritas) verifying purity, moisture, and chemical limits at origin.
                                        </p>
                                    </div>
                                    <h3>
                                        100<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>First-Pass Customs Clearance</h6>
                                        <p>
                                            Pre-arrival documentation and automated ACE/CBP filings achieving rapid green-lane clearance with zero demurrage penalties.
                                        </p>
                                    </div>
                                    <h3>
                                        99.4<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Secured Chain of Custody</h6>
                                        <p>
                                            ISO 17712 high-security container bolt seals and continuous telematics monitoring from warehouse gate to destination discharge.
                                        </p>
                                    </div>
                                    <h3>
                                        100<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Bilateral Agency Alignment</h6>
                                        <p>
                                            Full statutory integration across USDA APHIS, FDA Prior Notice, CBP, NAFDAC, and NEPC export licensing frameworks.
                                        </p>
                                    </div>
                                    <h3>
                                        5<text>+ Agencies</text>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                Cross-border commerce breaks down when regulatory compliance is treated as an afterthought at destination ports. Demurrage penalties, product detentions, and rejected consignments almost always stem from origin documentation gaps or unverified quality metrics. Quinn Daisies eliminates these operational hazards by enforcing strict pre-shipment compliance before cargo ever departs the farm gate or aggregation depot.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                Through mandatory independent laboratory assays, accurate Harmonized Tariff Schedule (HTS) classifications, and coordinated filings across U.S. and Nigerian statutory bodies, we de-risk the transatlantic trade corridor. Our clients transact with absolute confidence, knowing every consignment meets international food safety laws, customs regulations, and verifiable chain-of-custody protocols.
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
                                        Comprehensive Trade Assurance & Verification Architecture
                                    </h2>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            From farm-gate origin inspection to destination port clearance, Quinn Daisies eliminates cross-border trade vulnerabilities through a 6-pillar operational assurance framework that protects buyers, financiers, and cargo integrity.
                                        </p>
                                    </div>
                                </div>

                                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                                    <div
                                        className="ApplicationCarouselSlide"
                                        ref={carouselStripRef}
                                    >
                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg" alt="Supplier Due Diligence & Origin Vetting" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Supplier Due Diligence & Origin Vetting</h2>
                                                <p>Verifying enterprise registration, physical production capacity, warehouse storage hygiene, and financial solvency across origin cooperatives before contracts execute.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg" alt="Accredited Laboratory Assays" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Accredited Laboratory Assays (SGS / BV)</h2>
                                                <p>Mandatory origin sampling and chemical assays verifying moisture limits, purity levels, aflatoxin thresholds, and grade specifications before cargo packaging.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg" alt="Bilateral Regulatory Pre-Filing" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Bilateral Regulatory Coordination & Pre-Filing</h2>
                                                <p>Securing NEPC export permits and NAFDAC clearances in Nigeria while coordinating pre-arrival filings with U.S. USDA APHIS, FDA, and CBP ACE systems.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466488/QuinnDaisies/2151976962_rvpgb9.jpg" alt="Tamper-Proof Custody & Bolt Sealing" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>Tamper-Proof Custody & ISO 17712 Bolt Sealing</h2>
                                                <p>Ensuring agricultural moisture-barrier packaging, high-security ISO 17712 bolt seals, bonded staging, and GPS-monitored corridor transport before vessel gate-in.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg" alt="EUDR & Environmental Compliance" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>EUDR & Deforestation Due Diligence</h2>
                                                <p>Origin GPS plot mapping and chain-of-custody documentation ensuring full compliance with European Union Deforestation Regulation standards.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151663021_qg5kyt.jpg" alt="FAR Compliance & Institutional Governance" />
                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>FAR-Aligned Procurement Governance</h2>
                                                <p>Strict corporate anti-corruption compliance, FCPA adherence, transparent pricing structures, and enforceable trade governance under U.S. jurisdiction.</p>
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
                                    <div className="ApplicationSetupDetails reveal__left">

                                        <h2 className="reveal__left">
                                            We Are Quinn Daisies
                                        </h2>

                                        <Link className="ApplicationButton" to="/corporate-overview" style={{ marginTop: "1.5rem", width: "fit-content" }}>
                                            Corporate Overview
                                            <span className="material-symbols-outlined">
                                                globe_location_pin
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            A world-class trade and logistics conglomerate built on trust, operational precision, and borderless commercial connectivity—empowering enterprise growth and connecting regional supply to global corridors.
                                        </p>
                                    </div>
                                </div>

                                <div className="OverviewTrioGrid">
                                    <div className="OverviewTrioCardWide reveal__bottom">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465952/QuinnDaisies/2150917196_bhmjrt.jpg"
                                            alt="Corporate Overview"
                                        />
                                        <div className="OverviewTrioCardWideOverlay">
                                            <div className="OverviewTrioCardTop">
                                                <span className="AdvanceUpdateSpan">01 — Corporate Overview</span>
                                                <h3>Corporate Overview</h3>
                                            </div>
                                            <p>
                                                A world-class trade and logistics conglomerate built on trust, operational precision, and borderless commercial connectivity.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="OverviewTrioCardStandard reveal__bottom">
                                        <div className="OverviewTrioCardTop">
                                            <span className="AdvanceUpdateSpan">02 — Mission & Vision</span>
                                            <h3>Our Mission & Vision</h3>
                                        </div>
                                        <p>
                                            Empowering enterprise growth by removing supply chain friction, optimizing distribution, and connecting regional producers to global markets.
                                        </p>
                                    </div>

                                    <div className="OverviewTrioCardStandard reveal__bottom">
                                        <div className="OverviewTrioCardTop">
                                            <span className="AdvanceUpdateSpan">03 — Global Capabilities</span>
                                            <h3>Global Capabilities</h3>
                                        </div>
                                        <p>
                                            Integrated multimodal shipping infrastructure spanning ocean freight, air express, cross-docking, and smart warehousing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            className="Dark-Background"
                        >
                            <div className="ApplicationCarouselRefurblished">
                                <div className="ApplicationCarouselRefurblishedFlex ApplicationCarouselFlex">
                                    <div className="ApplicationSetupDetails reveal__left">
                                        <span className="AdvanceUpdateSpan">Institutional Safeguards</span>
                                        <h2 className="reveal__left">Compliance & Cargo Protection Standards</h2>
                                    </div>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">Our multi-layered compliance framework bridges agricultural hygiene, bilateral customs clearance, and physical cargo chain of custody to protect enterprise consignments.</p>
                                    </div>
                                </div>

                                <div className="FeatureCardsGrid">
                                    {/* Card 1: Light Theme */}
                                    <div className="FeatureCard FeatureCard--light reveal__bottom">
                                        <div className="FeatureCardTop">
                                            <div className="FeatureCardIcon">
                                                <span className="material-symbols-outlined">verified_user</span>
                                            </div>
                                            <div className="FeatureCardContent">
                                                <h3 className="FeatureCardHeading">Agricultural & Food Safety Compliance</h3>
                                                <p className="FeatureCardText">
                                                    Enforcing strict compliance with U.S. FDA Food Safety Modernization Act (FSMA), USDA APHIS phytosanitary regulations, and Nigerian NAFDAC/NEPC standards. We ensure chemical residue limits, aflatoxin thresholds, and hermetic packaging preserve cargo integrity from farm gate to destination warehouse.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="FeatureCardNotch">
                                            <Link to="/services" className="ApplicationButton">
                                                <span>Explore Services</span>
                                                <span className="material-symbols-outlined">globe_location_pin</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Card 2: Accent Theme with Decorative Arcs */}
                                    <div className="FeatureCard FeatureCard--accent reveal__bottom">
                                        <svg
                                            className="FeatureCardPattern"
                                            viewBox="0 0 200 200"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" />
                                            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>

                                        <div className="FeatureCardTop">
                                            <div className="FeatureCardIcon">
                                                <span className="material-symbols-outlined">policy</span>
                                            </div>
                                            <div className="FeatureCardContent">
                                                <h3 className="FeatureCardHeading">Customs Classification & Tariff Pre-Clearance</h3>
                                                <p className="FeatureCardText">
                                                    Eliminating import/export bottlenecks through precision Harmonized Tariff Schedule (HTS) classification, Automated Commercial Environment (ACE) pre-filings, AGOA duty-free qualification verification, and proactive clearance coordination with U.S. CBP and Nigeria Customs Service (NCS).
                                                </p>
                                            </div>
                                        </div>

                                        <div className="FeatureCardNotch">
                                            <Link to="/services" className="ApplicationButton">
                                                <span>Explore Services</span>
                                                <span className="material-symbols-outlined">globe_location_pin</span>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Card 3: Deep Dark Contrast Card */}
                                    <div className="FeatureCard FeatureCard--dark reveal__bottom">
                                        <div className="FeatureCardTop">
                                            <div className="FeatureCardIcon">
                                                <span className="material-symbols-outlined">lock</span>
                                            </div>
                                            <div className="FeatureCardContent">
                                                <h3 className="FeatureCardHeading">Physical Cargo Security & Chain of Custody</h3>
                                                <p className="FeatureCardText">
                                                    Maintaining unbroken chain-of-custody governance aligned with C-TPAT security benchmarks. From tamper-evident ISO 17712 high-security container bolt seals to GPS corridor telemetry and bonded port staging, your high-value cargo is safeguarded against pilferage and transit loss.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="FeatureCardNotch">
                                            <Link to="/services" className="ApplicationButton">
                                                <span>Explore Services</span>
                                                <span className="material-symbols-outlined">globe_location_pin</span>
                                            </Link>
                                        </div>
                                    </div>
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
