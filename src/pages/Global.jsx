import React from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import SEO from "../components/SEO";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SplitText } from "gsap/SplitText";
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import useSmoothScroll from "../hooks/useSmoothScroll";
import usePinnedSlides from "../hooks/usePinnedSlides";

const heroSlides = [
    {
        span: "Global Supply & Bilateral Trade",
        h1: "Supplying Global Markets With Nigerian Commodities & Industrial Inputs",
        p: "Quinn Daisies operates direct multi-modal supply chains connecting Nigerian agricultural production and commercial commodities to industrial buyers, government programs, and enterprise partners across the United States, Africa, and international markets.",
        images: [
            "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/9395_ifws6o.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1787010385/QuinnDaisies/2151910932_l06x8e.jpg",
        ],
    },
    {
        span: "U.S.–Nigeria Bilateral Corridors",
        h1: "Facilitating Over $10.5B in Transatlantic Bilateral Commerce",
        p: "Anchored in bilateral governance and regulatory alignment with USDA, FDA, and CBP, we manage verified sourcing, pre-clearance, and bonded ocean/air freight for U.S. government agencies, multinational enterprises, and institutional buyers.",
        images: [
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151468852_krro1f.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541845_zbq5lg.jpg",
        ],
    },
    {
        span: "Pan-African & Worldwide Corridors",
        h1: "Connecting Africa, North America & Global Markets Under AfCFTA",
        p: "Leveraging Nigeria's position as Africa's economic powerhouse, we bridge regional supply networks across ECOWAS, North America, Europe, and Asia with transparent chain of custody and accountable logistics execution.",
        images: [
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778444172/2151468840_wefsks.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg",
            "https://res.cloudinary.com/renaissance-images/image/upload/v1778448423/2152005465_splnhk.jpg",
        ],
    },
];

const marketsWeServe = [
    {
        title: "North American Agribusiness & Food Conglomerates",
        description:
            "High-volume, multi-container supply of non-GMO sesame seeds, premium dried split ginger, soybeans, and raw cashew nuts meeting strict USDA, FDA, and American food manufacturing purity standards.",
        link: "/services",
        icon: "agriculture",
    },
    {
        title: "Pan-African & ECOWAS Commercial Enterprises",
        description:
            "Accelerating intra-African cross-border commerce under the African Continental Free Trade Area (AfCFTA), providing bonded dry-port corridors, duty-free clearance, and reliable overland freight across West and Central Africa.",
        link: "/corporate-overview",
        icon: "public",
    },
    {
        title: "Heavy Industry, Energy & Infrastructure Inflows",
        description:
            "Turnkey import supply chains for American and European industrial machinery, specialized power generation components, solar infrastructure, and mining technology entering Nigeria's critical growth sectors.",
        link: "/services",
        icon: "precision_manufacturing",
    },
    {
        title: "Global Commodity Desks (Europe & Asia-Pacific)",
        description:
            "Supplying institutional trading houses and maritime charterers in Rotterdam, Singapore, and Dubai with certified origin-verified agricultural bulk parcels backed by SGS lab assays and verifiable chain of custody.",
        link: "/corporate-overview",
        icon: "domain",
    },
    {
        title: "Multilateral NGOs & Humanitarian Aid Missions",
        description:
            "Deploying rapid-response food security logistics, bonded warehousing, cold-chain transport, and secure last-mile distribution across developing and disaster-affected regions in partnership with global relief bodies.",
        link: "/services",
        icon: "volunteer_activism",
    },
];

const SLIDE_INTERVAL = 3000;

const statsItems = [
    {
        final: "$10.5B+",
        target: 10.5,
        decimals: 1,
        prefix: "$",
        suffix: "B+",
        label: "Annual U.S.–Nigeria Bilateral Trade Volume (AGOA & Commercial Flow)",
    },
    {
        final: "$78B+",
        target: 78,
        decimals: 0,
        prefix: "$",
        suffix: "B+",
        label: "Nigeria's Total Global Merchandise Trade Flow (2024–2025 Benchmark)",
    },
    {
        final: "$82B+",
        target: 82,
        decimals: 0,
        prefix: "$",
        suffix: "B+",
        label: "Projected 2026 Sovereign Trade Volume with Expanded Non-Oil Commodity Export",
    },
    {
        final: "34%",
        target: 34,
        decimals: 0,
        prefix: "",
        suffix: "%",
        label: "Intra-African Non-Oil Trade Growth Expansion Under AfCFTA Corridors",
    },
    {
        final: "$3.2B+",
        target: 3.2,
        decimals: 1,
        prefix: "$",
        suffix: "B+",
        label: "U.S. Industrial Equipment, High-Tech & Power Machinery Inflow to Nigeria",
    },
    {
        final: "18–24 Days",
        isRange: true,
        targetStart: 18,
        targetEnd: 24,
        suffix: " Days",
        label: "Direct Transatlantic Ocean Transit from Lekki & Apapa to U.S. Gateways",
    },
];

const globalLandingPool = [
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468842_qcq2hy.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151541857_njan6w.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998707_kqwtto.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg",
    "https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg",
];

export default function GlobalCapabilities() {
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
        globalLandingPool[0],
        globalLandingPool[1],
        globalLandingPool[2],
        globalLandingPool[3],
    ]);
    const overlayColIndexRef = useRef(0);
    const overlayPoolIndexRef = useRef(4);

    useEffect(() => {
        if (isUnlocked) return;

        const interval = setInterval(() => {
            const nextImg =
                globalLandingPool[
                overlayPoolIndexRef.current % globalLandingPool.length
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

    const galleryWrapRef = useRef(null);
    const galleryCleanupRef = useRef(null);
    const serviceGalleryEight = useRef(null);
    const servicesScrollRef = useRef(null);
    const [servicesPage, setServicesPage] = useState(0);
    const touchStartX = useRef(0);

    const handleServicesScroll = (direction) => {
        if (direction === "right") {
            setServicesPage((prev) => (prev < 2 ? prev + 1 : 0));
        } else {
            setServicesPage((prev) => (prev > 0 ? prev - 1 : 2));
        }
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 50) {
            handleServicesScroll("right");
        } else if (diff < -50) {
            handleServicesScroll("left");
        }
    };

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
    const statsSectionRef = useRef(null);
    const statNumberRefs = useRef([]);
    const statUnderlineRefs = useRef([]);

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

            if (statsSectionRef.current) {
                // 1. Separate Number Loader: triggers once the section is viewed
                gsap.set(statNumberRefs.current, {
                    opacity: 0,
                    y: 22,
                });
                statNumberRefs.current.forEach((el, idx) => {
                    if (!el) return;
                    const item = statsItems[idx];
                    if (!item) return;
                    if (item.isRange) {
                        el.textContent = "0–0 Days";
                    } else if (item.decimals > 0) {
                        el.textContent = `${item.prefix}0.0${item.suffix}`;
                    } else {
                        el.textContent = `${item.prefix}0${item.suffix}`;
                    }
                });

                const numbersTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: statsSectionRef.current,
                        start: "top 75%",
                        once: true,
                    },
                });

                numbersTl.to(statNumberRefs.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power2.out",
                    stagger: 0.08,
                });

                const counterObj = { progress: 0 };
                numbersTl.to(
                    counterObj,
                    {
                        progress: 1,
                        duration: 2.0,
                        ease: "power2.out",
                        onUpdate: () => {
                            statNumberRefs.current.forEach((el, idx) => {
                                if (!el) return;
                                const item = statsItems[idx];
                                if (!item) return;
                                const p = counterObj.progress;
                                if (p >= 1) {
                                    el.textContent = item.final;
                                } else if (item.isRange) {
                                    const s = Math.round(p * item.targetStart);
                                    const e = Math.round(p * item.targetEnd);
                                    el.textContent = `${s}–${e} Days`;
                                } else if (item.decimals > 0) {
                                    const val = (p * item.target).toFixed(
                                        item.decimals,
                                    );
                                    el.textContent = `${item.prefix}${val}${item.suffix}`;
                                } else {
                                    const val = Math.round(p * item.target);
                                    el.textContent = `${item.prefix}${val}${item.suffix}`;
                                }
                            });
                        },
                        onComplete: () => {
                            statNumberRefs.current.forEach((el, idx) => {
                                if (el && statsItems[idx]) {
                                    el.textContent = statsItems[idx].final;
                                }
                            });
                        },
                    },
                    "<",
                );

                // 2. Separate Infinite Line Loader: loads from right to left for 4s continuously
                gsap.set(statUnderlineRefs.current, {
                    scaleX: 0,
                    opacity: 1,
                    transformOrigin: "right center",
                });

                const lineLoaderTl = gsap.timeline({
                    repeat: -1,
                    scrollTrigger: {
                        trigger: statsSectionRef.current,
                        start: "top 90%",
                        toggleActions: "play pause resume pause",
                    },
                });

                lineLoaderTl
                    .fromTo(
                        statUnderlineRefs.current,
                        {
                            scaleX: 0,
                            opacity: 1,
                            transformOrigin: "right center",
                        },
                        {
                            scaleX: 1,
                            opacity: 1,
                            duration: 3.6,
                            ease: "power1.inOut",
                        },
                    )
                    .to(statUnderlineRefs.current, {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power1.out",
                    })
                    .set(statUnderlineRefs.current, {
                        scaleX: 0,
                        opacity: 1,
                        transformOrigin: "right center",
                    });
            }

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
                }, 100);
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

            const rebuildSplitText = () => {
                if (!isActive) return;
                splitTweens.forEach((tween) => tween.kill());
                splitInstances.forEach((split) => split.revert());
                splitTweens.length = 0;
                splitInstances.length = 0;
                initSplitText();
                ScrollTrigger.refresh();
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

            window.addEventListener("resize", rebuildSplitText);
        }, pageRef);

        return () => {
            isActive = false;
            splitTweens.forEach((tween) => tween.kill());
            splitInstances.forEach((split) => split.revert());
            ctx.revert();
        };
    }, []);

    useLayoutEffect(() => {
        let isActive = true;

        const createGalleryTween = () => {
            if (
                !isActive ||
                !serviceGalleryEight.current ||
                !galleryWrapRef.current
            ) {
                return;
            }

            galleryCleanupRef.current?.();

            const galleryElement = serviceGalleryEight.current;
            const galleryItems = galleryElement.querySelectorAll(
                ".ServiceGalleryItem",
            );

            if (!galleryItems.length) return;

            galleryElement.classList.remove("ServiceGalleryFinal");

            const ctx = gsap.context(() => {
                galleryElement.classList.add("ServiceGalleryFinal");
                const flipState = Flip.getState(galleryItems);
                galleryElement.classList.remove("ServiceGalleryFinal");

                const flip = Flip.to(flipState, {
                    simple: true,
                    ease: "expoScale(1, 5)",
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: galleryElement,
                        start: "center center",
                        end: "+=100%",
                        scrub: true,
                        pin: galleryWrapRef.current,
                        invalidateOnRefresh: true,
                    },
                });

                tl.add(flip);

                galleryCleanupRef.current = () => {
                    tl.scrollTrigger?.kill();
                    tl.kill();
                    ctx.revert();
                    galleryElement.classList.remove("ServiceGalleryFinal");
                    gsap.set(galleryItems, { clearProps: "all" });
                };
            }, galleryWrapRef);
        };

        const handleResize = () => {
            if (!isActive) return;
            createGalleryTween();
            ScrollTrigger.refresh();
        };

        const initAll = () => {
            if (!isActive) return;
            createGalleryTween();
            window.addEventListener("resize", handleResize);
            ScrollTrigger.refresh();
        };

        if (document.fonts?.ready) {
            document.fonts.ready.then(initAll);
        } else {
            initAll();
        }

        return () => {
            isActive = false;
            window.removeEventListener("resize", handleResize);
            galleryCleanupRef.current?.();
        };
    }, []);

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
                title="Global Trade Capabilities & Supply Infrastructure | Quinn Daisies Logistics"
                description="Explore Quinn Daisies' global supply capabilities and bilateral trade infrastructure. Delivering commercial commodities, industrial supply, and verified cross-border logistics between Nigeria, the United States, Africa, and global markets."
                keywords="global trade capabilities, international supply chain infrastructure, commercial commodities, industrial supply, cross border logistics Nigeria US Africa, global cargo routes, multi-modal freight network"
                url="https://www.logistics.quinndaisies.com/global-capabilities"
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
                            alt="Quinn Daisies Global Capabilities"
                        />
                    ))}

                    <div className="ContentCtn-Center" ref={landingContentRef}>
                        <span className="ContentCtn-Center-Span">Global Capabilities & Trade Corridors</span>
                        <h1>
                            Supplying Global Markets Through Resilient Bilateral Trade Infrastructure
                        </h1>
                        <p>
                            Quinn Daisies orchestrates international commodity supply and cross-border logistics—bridging Nigerian agricultural and commercial output with the United States government, global corporate buyers, Pan-African markets, and transatlantic supply chains with verified chain of custody.
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
                                    id="globalTransitionPattern"
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
                                fill="url(#globalTransitionPattern)"
                                vectorEffect="non-scaling-stroke"
                                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
                            />
                        </svg>
                    </div>
                </div>

                <div id="smooth-wrapper" ref={smoothWrapperRef}>
                    <div id="smooth-content" ref={smoothContentRef}>
                        <section className="AdvanceUpdateDesign">
                            <img className="AdvanceUpdateDesignImage" src="https://res.cloudinary.com/renaissance-images/image/upload/v1789482759/QuinnDaisies/637883_siqlmk.jpg" alt="Quinn Daisies Image" />

                            <div className="AdvanceUpdateDesignOverlay">
                                <span className="AdvanceUpdateSpan">
                                    Global Supply Infrastructure & Trade Execution
                                </span>

                                <h2>Unbroken Global Supply Chains from Origin to Destination.</h2>

                                <p className="AdvanceUpdateText">
                                    Supplying international markets requires physical mastery over the trade corridor. Quinn Daisies integrates farm-gate aggregation, accredited lab assays, bonded staging in Lagos, transatlantic ocean freight, and customs clearance into a unified supply pipeline serving the United States, Africa, and global partners.
                                </p>

                                <div className="AdvanceUpdateButtonContainer reveal__bottom">
                                    <Link className="ApplicationButton" to="/compliance-and-safety">
                                        Explore Compliance and Safety
                                        <span className="material-symbols-outlined">
                                            globe_location_pin
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="GlobalAboutStatsSection" ref={statsSectionRef}>
                            <div className="GlobalAboutStatsContainer">
                                <div className="GlobalAboutContent reveal__left">
                                    <h2 className="GlobalAboutTitle">Global Trade Execution & Bilateral Scale (2023 – 2026)</h2>
                                    <p className="GlobalAboutText">
                                        Between 2023 and 2025, trade between Nigeria and the global economy experienced unprecedented momentum, with total bilateral merchandise volume accelerating past $75B+ annually and projected to exceed $82B+ in 2026. Bilateral commerce with the United States represents over $10.5B+ in annual exchange, anchored by growing American demand for verified non-oil agricultural commodities—including sesame seeds, dried split ginger, raw soybeans, and solid minerals—procured under the African Growth and Opportunity Act (AGOA) and U.S. Commercial Service initiatives.
                                    </p>

                                    <p className="GlobalAboutText">
                                        Quinn Daisies operates at the core of this global trade expansion. Beyond direct transatlantic shipping corridors to Baltimore, Houston, Savannah, and Newark, we spearhead commercial supply across the African continent under the African Continental Free Trade Area (AfCFTA)—where intra-African merchandise trade grew by 34% through 2025. By maintaining dual-market infrastructure across the U.S. and Nigeria, we deliver unbroken supply custody, accredited laboratory assays, and seamless customs pre-clearance for government agencies, institutional missions, and global corporations.
                                    </p>
                                </div>

                                <div className="GlobalStatsGrid">
                                    {statsItems.map((item, idx) => (
                                        <div className="GlobalStatBox" key={idx}>
                                            <h3
                                                className="GlobalStatNumber"
                                                ref={(el) => (statNumberRefs.current[idx] = el)}
                                            >
                                                {item.final}
                                            </h3>
                                            <p className="GlobalStatLabel">
                                                {item.label}
                                            </p>
                                            <div className="GlobalStatUnderlineTrack">
                                                <span
                                                    className="GlobalStatUnderline"
                                                    ref={(el) => (statUnderlineRefs.current[idx] = el)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="GlobalServicesCarouselSection">
                            <div className="Container GlobalServicesContainer">
                                <div className="GlobalServicesHeader">
                                    <h2 className="GlobalServicesTitle reveal__left">Global Supply & Trade Capabilities</h2>
                                    <div className="GlobalServicesNav reveal__right">
                                        <button
                                            type="button"
                                            className={`GlobalNavArrow ${servicesPage > 0 ? "GlobalNavArrowActive" : "GlobalNavArrowPrev"}`}
                                            onClick={() => handleServicesScroll("left")}
                                            aria-label="Previous service"
                                        >
                                            <span className="material-symbols-outlined">arrow_back</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`GlobalNavArrow ${servicesPage < 2 ? "GlobalNavArrowActive" : "GlobalNavArrowNext"}`}
                                            onClick={() => handleServicesScroll("right")}
                                            aria-label="Next service"
                                        >
                                            <span className="material-symbols-outlined">arrow_forward</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="GlobalServicesTrackWrapper reveal__bottom">
                                    <div
                                        className="GlobalServicesTrack"
                                        ref={servicesScrollRef}
                                        onTouchStart={handleTouchStart}
                                        onTouchEnd={handleTouchEnd}
                                        style={{
                                            transform: `translateX(-${servicesPage * 100}%)`,
                                        }}
                                    >
                                        {/* Page 1: Capabilities 01 - 04 */}
                                        <div className="GlobalServicesPage">
                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">01</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481033/QuinnDaisies/2151541841_aynx4q.jpg"
                                                        alt="Transatlantic Ocean Freight"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Transatlantic Ocean Freight</h3>
                                                    <p>Direct containerized vessel shipping linking Lagos with Baltimore, Houston, Savannah, and Newark.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">02</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789481030/QuinnDaisies/17010_tvwnqb.jpg"
                                                        alt="Agricultural Commodity Supply"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Agricultural Commodity Supply</h3>
                                                    <p>Origin-verified aggregation, mechanical cleaning, and bulk export of sesame seeds, dried ginger, and soybeans.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">03</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465947/QuinnDaisies/2151003712_gbfv0i.jpg"
                                                        alt="U.S. Institutional Procurement"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>U.S. Institutional Procurement</h3>
                                                    <p>Fulfillment infrastructure for U.S. government agencies, NGOs, and corporations meeting FAR and USAID standards.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">04</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1787010383/QuinnDaisies/2151910927_dv2ozf.jpg"
                                                        alt="Regulatory Pre-Clearance"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Regulatory Pre-Clearance</h3>
                                                    <p>Active coordination with U.S. CBP, FDA, USDA APHIS, and Nigerian Customs for zero-demurrage clearance.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Page 2: Capabilities 05 - 08 */}
                                        <div className="GlobalServicesPage">
                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">05</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766905/QuinnDaisies/2152001127_rzlgti.jpg"
                                                        alt="Pan-African Trade (AfCFTA)"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Pan-African Trade (AfCFTA)</h3>
                                                    <p>Cross-border bonded transit, road freight, and dry-port handling across ECOWAS and Central African growth hubs.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">06</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg"
                                                        alt="Industrial Equipment Inflow"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Industrial Equipment Inflow</h3>
                                                    <p>Turnkey import logistics for American and European manufacturing machinery, power systems, and technology.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">07</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237502/QuinnDaisies/2151589636_v3h3yj.jpg"
                                                        alt="Bonded Warehousing & Assays"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Bonded Warehousing & Assays</h3>
                                                    <p>Secured origin consolidation, accredited lab testing, and moisture verification in Lagos and Kano hubs.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">08</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg"
                                                        alt="End-to-End Chain of Custody"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>End-to-End Chain of Custody</h3>
                                                    <p>GPS-monitored multi-modal transport ensuring cargo integrity from farm-gate to destination warehouse delivery.</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Page 3: Capabilities 09 - 12 */}
                                        <div className="GlobalServicesPage">
                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">09</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466418/QuinnDaisies/2152020400_fcm4o9.jpg"
                                                        alt="Solid Minerals & Raw Materials"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Solid Minerals & Raw Materials</h3>
                                                    <p>Origin-sourced bulk export of certified lithium, lead, zinc, and tantalite meeting international smelter specifications.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">10</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465949/QuinnDaisies/2151541965_cfe0hz.jpg"
                                                        alt="Cold-Chain & Perishable Cargo"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Cold-Chain & Perishable Cargo</h3>
                                                    <p>Temperature-monitored air freight routes connecting fresh agricultural produce and botanicals to global distributors.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">11</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465950/QuinnDaisies/2151657954_yngm28.jpg"
                                                        alt="Institutional Relief Logistics"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Institutional Relief Logistics</h3>
                                                    <p>Rapid-response food supply, bonded reserves, and secure field distribution for international humanitarian organizations.</p>
                                                </div>
                                            </div>

                                            <div className="GlobalServiceCard">
                                                <div className="GlobalServiceCardImageWrap">
                                                    <span className="GlobalServiceCardBadge">12</span>
                                                    <img
                                                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1789644063/36806_jmfrpc.jpg"
                                                        alt="Trade Finance & Escrow Advisory"
                                                    />
                                                </div>
                                                <div className="GlobalServiceCardContent">
                                                    <h3>Trade Finance & Escrow Advisory</h3>
                                                    <p>Structured letters of credit (LC), bilateral escrow settlement, and risk-mitigated institutional contract execution.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServiceContainer">
                            <h2 className="ServiceText">
                                Supplying global markets demands unbroken physical execution. Across the United States, Africa, and international trade routes, Quinn Daisies bridges commercial contracts with verified origin sourcing, strict chain-of-custody logistics, and sovereign regulatory compliance to make bilateral trade dependable, profitable, and scalable. From direct agricultural consolidation across Nigeria's farming belts to containerized ocean freight reaching U.S. and European gateways, we eliminate trade friction, enforce certified laboratory purity standards, and deliver absolute operational accountability for institutional and commercial buyers worldwide.
                            </h2>
                        </section>

                        <section className="GlobalPortfolioBentoSection">
                            <div className="Container GlobalPortfolioContainer">
                                <div className="GlobalPortfolioGrid">
                                    {/* Column 1: Header + Bottom Card */}
                                    <div className="GlobalPortfolioCol GlobalPortfolioColLeft">
                                        <div className="GlobalPortfolioHeader reveal__left">
                                            <h2 className="GlobalPortfolioTitle">
                                                Our Global Trade Corridors & Supply Assets
                                            </h2>
                                            <p className="GlobalPortfolioSubtitle">
                                                Strategic maritime gateways, bonded aggregation hubs, and transatlantic trade corridors connecting Nigerian supply to world markets
                                            </p>
                                        </div>

                                        <div className="GlobalPortfolioCard GlobalPortfolioCardBottom reveal__bottom">
                                            <img
                                                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151541857_njan6w.jpg"
                                                alt="Lekki Deep Sea & Apapa Gateways"
                                            />
                                            <span className="GlobalPortfolioCardTag">Lekki Deep Sea & Apapa Gateways (Nigeria)</span>
                                        </div>
                                    </div>

                                    {/* Column 2: Stacked Cards */}
                                    <div className="GlobalPortfolioCol GlobalPortfolioColCenter">
                                        <div className="GlobalPortfolioCard GlobalPortfolioCardStacked reveal__top">
                                            <img
                                                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg"
                                                alt="Port of Baltimore & Houston Terminals"
                                            />
                                            <span className="GlobalPortfolioCardTag">Port of Baltimore & Houston Terminals (USA)</span>
                                        </div>

                                        <div className="GlobalPortfolioCard GlobalPortfolioCardStacked reveal__bottom">
                                            <img
                                                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778448422/2152005451_ijeqyj.jpg"
                                                alt="Bonded Commodity Consolidation Hubs"
                                            />
                                            <span className="GlobalPortfolioCardTag">Bonded Commodity Consolidation Hubs</span>
                                        </div>
                                    </div>

                                    {/* Column 3: Tall Card + See More Projects Button */}
                                    <div className="GlobalPortfolioCol GlobalPortfolioColRight">
                                        <div className="GlobalPortfolioCard GlobalPortfolioCardTall reveal__right">
                                            <img
                                                src="https://res.cloudinary.com/renaissance-images/image/upload/v1789644069/2151493181_hqt8ti.jpg"
                                                alt="Transatlantic Bilateral Trade Lane"
                                            />
                                            <span className="GlobalPortfolioCardTag">Transatlantic Bilateral Trade Lane</span>
                                        </div>

                                        <div className="GlobalPortfolioAction reveal__bottom">
                                            <Link to="/services" className="ApplicationButton GlobalPortfolioSeeMore">
                                                Explore Trade Corridors
                                                <span className="material-symbols-outlined">arrow_outward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="ServiceGallerySection">
                            <div className="ServiceGalleryWrap" ref={galleryWrapRef}>
                                <div
                                    className="ServiceGallery ServiceGalleryBento ServiceGallerySwitch"
                                    ref={serviceGalleryEight}
                                >
                                    <div className="ServiceGalleryItem">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg"
                                            alt="Quinn Daisies staffing and recruitment"
                                        />
                                    </div>
                                    <div className="ServiceGalleryItem">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468842_qcq2hy.jpg"
                                            alt="Quinn Daisies Logistics"
                                        />
                                    </div>
                                    <div className="ServiceGalleryItem">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                                            alt="Quinn Daisies Logistics"
                                        />
                                    </div>
                                    <div className="ServiceGalleryItem">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg"
                                            alt="Quinn Daisies Logistics"
                                        />
                                    </div>
                                    <div className="ServiceGalleryItem">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151541857_njan6w.jpg"
                                            alt="Quinn Daisies Logistics"
                                        />
                                    </div>
                                    <div className="ServiceGalleryItem">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg"
                                            alt="Quinn Daisies Logistics"
                                        />
                                    </div>
                                    <div className="ServiceGalleryItem">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998707_kqwtto.jpg"
                                            alt="Quinn Daisies Logistics"
                                        />
                                    </div>
                                    <div className="ServiceGalleryItem">
                                        <img
                                            src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289411/QuinnDaisies/2151998728_ha2wny.jpg"
                                            alt="Quinn Daisies Logistics"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="Container Gap-XL ServicePosition">
                                <div className="ServiceList">
                                    <h3 className="reveal__left">Global Markets & Key Sectors We Serve</h3>
                                    <p className="ServiceListText reveal__right">
                                        Quinn Daisies provides structured commodity supply, industrial equipment logistics, and mission-critical trade fulfillment across major sovereign, institutional, and commercial markets worldwide—anchored by bilateral trade corridors with the United States, intra-continental African commerce, and global trade centers.
                                    </p>
                                </div>

                                <div className="ServiceListBoxContainer">
                                    {marketsWeServe.map((market) => (
                                        <div
                                            className="ServiceListBox reveal__bottom__interval"
                                            key={market.title}
                                        >
                                            <span className="material-symbols-outlined IconDesign">
                                                {market.icon}
                                            </span>
                                            <div className="ServiceListBoxContent">
                                                <h4>{market.title}</h4>
                                                <p className="ServiceListBoxContentText">
                                                    {market.description}
                                                </p>

                                                <Link
                                                    to={market.link}
                                                    className="ApplicationIconButton"
                                                >
                                                    <span className="material-symbols-outlined">
                                                        arrow_outward
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                Global Corridors & Multimodal Performance
                            </span>
                            <h4 className="reveal__right">
                                Cross-continental trade lanes synchronized for scheduled vessel allocations, pre-arrival clearance, and end-to-end cargo integrity.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Global Trade Corridors</h6>
                                        <p>
                                            Active bilateral shipping lanes linking North America, West Africa, Europe, Asia, and Middle East gateways.
                                        </p>
                                    </div>
                                    <h3>
                                        6<text>+</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Multimodal Cargo Tracking</h6>
                                        <p>
                                            Verifiable telematics and milestone confirmation across maritime ocean freight, air cargo, and container drayage.
                                        </p>
                                    </div>
                                    <h3>
                                        100<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Gateway Clearance Turnaround</h6>
                                        <p>
                                            Pre-arrival documentation and electronic customs filing ensuring accelerated container release at international ports.
                                        </p>
                                    </div>
                                    <h3>
                                        24–48<text>hrs</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Regulatory & Import Compliance</h6>
                                        <p>
                                            Zero-tolerance adherence to destination phytosanitary regulations, FDA requirements, and international trade protocols.
                                        </p>
                                    </div>
                                    <h3>
                                        99.7<text>%</text>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                International trade corridors cannot rely on disconnected freight brokers and fragmented point-to-point contractors. Quinn Daisies synchronizes maritime container shipping, bonded terminal access, automated customs pre-clearance, and intermodal inland drayage across pivotal global trade lanes—centered around our high-volume United States ↔ Nigeria bilateral bridge.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                Through established carrier volume commitments and strategic origin aggregation hubs, we provide multinational corporations, food processors, and industrial buyers with predictable transit schedules, insulated ocean freight rates, and legally enforceable chain-of-custody oversight under U.S. jurisdictional governance.
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
                                        Seven Operating Pillars Powering Global Supply Chains
                                    </h2>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            Our global supply operations are anchored in seven institutional pillars—guiding every consignment from farm-gate aggregation and quality testing in Nigeria to transatlantic shipping and final-mile distribution across the United States and global corridors.
                                        </p>
                                    </div>
                                </div>

                                <div className="ApplicationCarouselViewportSpacing ApplicationCarouselViewport">
                                    <div
                                        className="ApplicationCarouselSlide"
                                        ref={carouselStripRef}
                                    >
                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg" alt="Quinn Daisies Images" />

                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>01 — Execution</h2>
                                                <p>We focus on moving transactions from commercial intent to physical completion. Global trade requires direct physical custody, multimodal container coordination, real-time tracking, and verified destination delivery.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789465954/QuinnDaisies/2151493235_if2axi.jpg" alt="Quinn Daisies Images" />

                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>02 — Bilateral Accountability</h2>
                                                <p>We maintain dual-market operational infrastructure across the United States and Nigeria, ensuring enforceable commercial contracts, regulatory alignment, and legal integrity across all bilateral transactions.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg" alt="Quinn Daisies Images" />

                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>03 — Origin Quality Assays</h2>
                                                <p>We enforce 100% accredited laboratory assays and pre-shipment inspections before cargo is dispatched. Verifying purity, moisture, and absence of contaminants at origin prevents costly border delays.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1789237513/QuinnDaisies/2151468920_pinckg.jpg" alt="Quinn Daisies Images" />

                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>04 — Corridor Reliability</h2>
                                                <p>We design supply workflows around predictable maritime transit schedules, bonded transport corridors, and structured communication protocols that eliminate demurrage penalties and port-side bottlenecks.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766959/QuinnDaisies/2151541915_wnesos.jpg" alt="Quinn Daisies Images" />

                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>05 — Institutional Partnerships</h2>
                                                <p>We work alongside U.S. government agencies, international procurement bodies, ocean carriers, and Nigerian export authorities (NEPC) to solve systemic trade hurdles and build scalable supply corridors.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg" alt="Quinn Daisies Images" />

                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>06 — Chain of Custody</h2>
                                                <p>From agricultural consolidation warehouses in Lagos and Kano to direct container discharge at U.S. East and Gulf Coast ports, we maintain rigorous supervisory control over cargo security and handling.</p>
                                            </div>
                                        </div>

                                        <div className="AdvanceDesignStructureSlideBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1775925890/QuinnDaisies/788_bvaktx.jpg" alt="Quinn Daisies Images" />

                                            <div className="AdvanceDesignStructureSlideBoxContent">
                                                <h2>07 — Risk Governance</h2>
                                                <p>We safeguard counterparties against currency volatility, cargo damage, and regulatory disruption through structured commercial agreements executed under international trade standards.</p>
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
                                        Strategic Vision: Scaling Global Supply & Bilateral Corridors
                                    </h2>

                                    <div className="ApplicationCarouselContainer reveal__right">
                                        <p className="ApplicationCarouselContainerText">
                                            We are building the sovereign logistics infrastructure that connects emerging African commodity supply directly to North American, European, and Pan-African enterprise demand—replacing informal broker networks with institutional-grade supply lines.
                                        </p>
                                    </div>
                                </div>

                                <div className="ApplicationPivotGrid">
                                    <div className="ApplicationPivotGridLeft">
                                        <div className="ApplicationPivotGridLeftItem">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg" alt="Quinn Daisies Images" />
                                            <div className="ApplicationPivotGridLeftItemOverlay">
                                                <span className="AdvanceUpdateSpan">01 — Bilateral U.S.–Nigeria Corridors</span>
                                                <h3 className="reveal__left">Empowering U.S. Government & Corporate Procurement</h3>
                                                <p className="ApplicationCarouselContainerText">Leveraging AGOA frameworks and U.S. Commercial Service initiatives, we provide American government agencies, commercial food processors, and multinational buyers with direct access to verified Nigerian commodities with guaranteed compliance and origin traceability.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ApplicationPivotGridRight">
                                        <div className="ApplicationPivotGridRightFlex">
                                            <div className="ApplicationPivotGridRightBox">
                                                <div className="ApplicationPivotGridRightBoxContent">
                                                    <span className="AdvanceUpdateSpan">02 — Pan-African Trade Integration</span>
                                                    <h4 className="reveal__left">Connecting West Africa Across the AfCFTA Network</h4>
                                                    <p className="ApplicationCarouselContainerText">As intra-African commerce expands by 34%+ under the African Continental Free Trade Area, we orchestrate bonded cross-border trucking, regional dry-port logistics, and commodity aggregation that position Nigeria as the primary trade gateway.</p>
                                                </div>
                                                <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg" alt="Quinn Daisies Images" />
                                            </div>

                                            <div className="ApplicationPivotGridRightBox">
                                                <div className="ApplicationPivotGridRightBoxContent">
                                                    <span className="AdvanceUpdateSpan">03 — Embedded Regulatory Pre-Clearance</span>
                                                    <h4 className="reveal__left">Strict Alignment with USDA, FDA, CBP & NAFDAC</h4>
                                                    <p className="ApplicationCarouselContainerText">We embed destination-market regulatory standards directly into our origin workflows in Nigeria—performing phytosanitary screenings, laboratory assays, and customs pre-filing to guarantee frictionless discharge at destination ports.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="ApplicationPivotGridRightBottomBox">
                                            <img src="https://res.cloudinary.com/renaissance-images/image/upload/v1778295154/QuinnDaisies/2151468800_dlzetj.jpg" alt="Quinn Daisies Images" />
                                            <div className="ApplicationPivotGridRightBottomBoxOverlay">
                                                <span className="AdvanceUpdateSpan">04 — Global Logistics Infrastructure</span>
                                                <h3 className="reveal__left">Building the Physical Backbone for Multilateral Commerce</h3>
                                                <p className="ApplicationCarouselContainerText">From modernized consolidation warehouses in Lagos and Kano to bonded container handling at the ports of Baltimore, Houston, and Savannah, we are continuously expanding the physical asset network that makes global trade dependable and scalable.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="GlobalStrategistSection" id="global-strategist">
                            <div className="GlobalStrategistContainer">
                                <div className="GlobalStrategistGrid">
                                    <div className="GlobalStrategistCardLeft reveal__left">
                                        <div className="GlobalStrategistTopContent">
                                            <div className="StrategistEyebrow">
                                                <svg
                                                    className="StrategistSparkleIcon"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M12 2L14.2 8.6L21 9.8L15.9 14.3L17.4 21L12 17.5L6.6 21L8.1 14.3L3 9.8L9.8 8.6L12 2Z"
                                                        fill="var(--tertiary-color)"
                                                    />
                                                </svg>
                                                <span>About the strategist</span>
                                            </div>

                                            <h2 className="StrategistHeading">
                                                Strategy first.<br />
                                                Always.
                                            </h2>

                                            <p className="StrategistBody">
                                                We lead complex global trade and supply chain execution with strategic precision—aligning Nigerian commodity supply with U.S. and international procurement demands through disciplined regulatory pre-clearance, verified sourcing, and unbroken logistics custody.
                                            </p>

                                            <div className="StrategistButtonGroup">
                                                <Link to="/about-us" className="ApplicationButton">
                                                    More About Us
                                                    <span className="material-symbols-outlined">globe_location_pin</span>
                                                </Link>
                                                <Link to="/services" className="ApplicationButton">
                                                    See Services
                                                    <span className="material-symbols-outlined">globe_location_pin</span>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="StrategistFeatureCard">
                                            <div className="StrategistFeatureThumb">
                                                <img
                                                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1789466486/QuinnDaisies/2151794095_nivnlp.jpg"
                                                    alt="Strategic Portfolio Highlight"
                                                />
                                            </div>
                                            <div className="StrategistFeatureInfo">
                                                <h4>Scaling Bilateral Trade Flow to $50M+ Across Key Corridors</h4>
                                                <Link to="/corporate-overview" className="StrategistFeatureLink">
                                                    <span>See Details</span>
                                                    <span className="material-symbols-outlined">north_east</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Bento Card: Portrait & Floating Badges */}
                                    <div className="GlobalStrategistCardRight reveal__right">
                                        <div className="StrategistPortraitWrapper">
                                            <img
                                                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444165/2151541845_zbq5lg.jpg"
                                                alt="Quinn Daisies Global Strategist & Executive Leadership"
                                                className="StrategistPortraitImg"
                                            />
                                            <div className="StrategistPortraitOverlay"></div>

                                            {/* Floating Stats Badges */}
                                            <div className="StrategistStatsOverlay">
                                                <div className="StrategistStatBadge reveal__bottom">
                                                    <div className="StrategistStatHeader">
                                                        <span className="StrategistStatNum">3.8</span>
                                                        <span className="StrategistStatUnit">x</span>
                                                    </div>
                                                    <p className="StrategistStatLabel">Across all managed trade corridors</p>
                                                    <div className="StrategistStatTrend">
                                                        <span className="material-symbols-outlined">arrow_upward</span>
                                                        <span>84% above industry avg</span>
                                                    </div>
                                                </div>

                                                <div className="StrategistStatBadge reveal__bottom">
                                                    <div className="StrategistStatHeader">
                                                        <span className="StrategistStatNum">+240</span>
                                                        <span className="StrategistStatUnit">%</span>
                                                    </div>
                                                    <p className="StrategistStatLabel">Bilateral trade growth — 2023 to 2026</p>
                                                    <div className="StrategistStatTrend">
                                                        <span className="material-symbols-outlined">arrow_upward</span>
                                                        <span>Compounding, verified flow</span>
                                                    </div>
                                                </div>
                                            </div>
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
