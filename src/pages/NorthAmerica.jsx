import gsap from "gsap";
import { Flip } from "gsap/all";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { useEffect, useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip);

const industries = [
    {
        title: "Port of Baltimore — Mid-Atlantic & Rail Gateway",
        description:
            "Situated on the Chesapeake Bay with on-dock Class I rail (CSX and Norfolk Southern), Baltimore provides fast drayage along I-95 for containerized Nigerian commodities moving directly to Mid-Atlantic and Midwest processors.",
        icon: "anchor",
    },
    {
        title: "Port of Houston — Gulf Coast Industrial Gateway",
        description:
            "America's top foreign tonnage port connects direct ocean routes to the Texas commercial triangle and Central U.S., offering specialized container yards and bonded staging for high-volume agricultural and industrial inflows.",
        icon: "warehouse",
    },
    {
        title: "Port of Savannah — Southeast Intermodal Corridor",
        description:
            "Featuring North America's largest single-terminal container facility, Savannah delivers rapid container throughput, dual on-dock rail, and interstate access to funnel bulk food-grade imports into Southeast processing plants.",
        icon: "hub",
    },
    {
        title: "Port of New York & New Jersey — Northeast & Canadian Hub",
        description:
            "Serving the nation's largest consumer market, Newark and Elizabeth terminals provide streamlined FDA/USDA clearance coordination and direct bonded rail pathways into Eastern Canadian commercial centers like Montreal and Toronto.",
        icon: "domain",
    },
];

const heroSlides = [
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1775925890/QuinnDaisies/788_bvaktx.jpg",
        heading: "Linking North American Demand to Origin Supply",
        text: "Quinn Daisies operates direct multi-modal supply chains linking Nigerian agricultural commodities to U.S. and Canadian food processors, manufacturers, and institutional procurement programs.",
    },
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789661151/QuinnDaisies/2150806042_yuuhye.jpg",
        heading: "Strategic U.S. Port Access for Transatlantic Trade",
        text: "With scheduled container allocations through Baltimore, Houston, Savannah, and Newark, we coordinate origin assays, CBP ISF 10+2 pre-filing, and nationwide distribution across all 48 states.",
    },
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789481033/QuinnDaisies/2151541841_aynx4q.jpg",
        heading: "Cross-Border Rail Corridors into Canada",
        text: "Extending resilient bilateral supply chains into Montreal, Toronto, and Vancouver through bonded customs clearance, Class I rail logistics, and unbroken chain-of-custody tracking.",
    },
];

export default function NorthAmerica() {
    useSmoothScroll();
    const pageRef = useRef(null);
    const galleryWrapRef = useRef(null);
    const galleryCleanupRef = useRef(null);
    const serviceGalleryEight = useRef(null);

    const heroImagesRef = useRef([]);
    const heroHeadingRef = useRef(null);
    const heroTextRef = useRef(null);
    const heroDotsRef = useRef([]);
    const heroCurrentRef = useRef(0);
    const heroIntervalRef = useRef(null);

    useEffect(() => {
        const images = heroImagesRef.current;
        const total = heroSlides.length;

        // Set initial state — only first slide visible
        gsap.set(images, { opacity: 0, zIndex: 0, scale: 1.08 });
        gsap.set(images[0], { opacity: 1, zIndex: 1 });
        gsap.to(images[0], { scale: 1, duration: 6, ease: "power1.out" });

        const updateDots = (index) => {
            heroDotsRef.current.forEach((dot, i) => {
                if (!dot) return;
                gsap.to(dot, {
                    width: i === index ? 28 : 8,
                    opacity: i === index ? 1 : 0.4,
                    duration: 0.4,
                    ease: "power2.out",
                });
            });
        };

        const goToSlide = (next) => {
            const prev = heroCurrentRef.current;
            if (next === prev) return;
            heroCurrentRef.current = next;

            // Crossfade images with subtle ken burns
            gsap.to(images[prev], {
                opacity: 0,
                zIndex: 0,
                duration: 1,
                ease: "power2.inOut",
            });
            gsap.set(images[next], { zIndex: 1, scale: 1.08 });
            gsap.to(images[next], {
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
            });
            gsap.to(images[next], {
                scale: 1,
                duration: 6,
                ease: "power1.out",
            });

            // Animate text out, swap content, animate back in
            const heading = heroHeadingRef.current;
            const text = heroTextRef.current;

            gsap.to([heading, text], {
                yPercent: -15,
                opacity: 0,
                duration: 0.35,
                ease: "power2.in",
                onComplete: () => {
                    heading.textContent = heroSlides[next].heading;
                    text.textContent = heroSlides[next].text;
                    gsap.fromTo(
                        heading,
                        { yPercent: 20, opacity: 0 },
                        { yPercent: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
                    );
                    gsap.fromTo(
                        text,
                        { yPercent: 20, opacity: 0 },
                        {
                            yPercent: 0,
                            opacity: 1,
                            duration: 0.55,
                            delay: 0.1,
                            ease: "power3.out",
                        },
                    );
                },
            });

            updateDots(next);
        };

        updateDots(0);

        const startInterval = () => {
            heroIntervalRef.current = setInterval(() => {
                const next = (heroCurrentRef.current + 1) % total;
                goToSlide(next);
            }, 5500);
        };

        startInterval();

        return () => {
            clearInterval(heroIntervalRef.current);
        };
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
                        // markers: true,
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

    return (
        <>
            <SEO
                title="North America (U.S. & Canada) Trade Corridors & Port Logistics | Quinn Daisies Logistics"
                description="Connecting North American enterprise demand with verified Nigerian supply chains, strategic U.S. port gateways (Baltimore, Houston, Savannah, Newark), multimodal inland drayage, bonded customs pre-clearance, and nationwide distribution."
                keywords="North America logistics, US freight forwarder, Port of Baltimore cargo, Port of Houston shipping, Newark port drayage, US customs preclearance, Maryland logistics hub, cross border freight USA Canada"
                url="https://www.logistics.quinndaisies.com/north-america"
                geoRegion="US-MD"
                geoPlacename="Frederick, Maryland, United States"
                geoPosition="39.463779;-77.425119"
                icbm="39.463779, -77.425119"
            />

            <div ref={pageRef}>
                <Navbar />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <section className="HeroContainer">
                            {heroSlides.map((slide, i) => (
                                <img
                                    className="HeroImageSlides"
                                    key={i}
                                    ref={(el) => (heroImagesRef.current[i] = el)}
                                    src={slide.image}
                                    alt={`Quinn Daisies slide ${i + 1}`}
                                />
                            ))}

                            <div className="HeroOverlay OverwriteHeroOverlayFlex">
                                <div className="ServiceHeroContent">
                                    <h1 ref={heroHeadingRef}>{heroSlides[0].heading}</h1>

                                    <p ref={heroTextRef} className="ServiceHeroContentText">
                                        {heroSlides[0].text}
                                    </p>

                                    {/* Dot navigation */}
                                    <div className="HeroSliderDots">
                                        {heroSlides.map((_, i) => (
                                            <button
                                                key={i}
                                                ref={(el) => (heroDotsRef.current[i] = el)}
                                                className="HeroSliderDot"
                                                aria-label={`Go to slide ${i + 1}`}
                                                onClick={() => {
                                                    clearInterval(heroIntervalRef.current);
                                                    const prev = heroCurrentRef.current;
                                                    if (i !== prev) {
                                                        heroCurrentRef.current = prev; // reset so goToSlide works
                                                        // re-trigger via ref approach
                                                        const images = heroImagesRef.current;
                                                        const total = heroSlides.length;

                                                        gsap.to(images[prev], {
                                                            opacity: 0,
                                                            zIndex: 0,
                                                            duration: 1,
                                                            ease: "power2.inOut",
                                                        });
                                                        gsap.set(images[i], { zIndex: 1, scale: 1.08 });
                                                        gsap.to(images[i], {
                                                            opacity: 1,
                                                            duration: 1,
                                                            ease: "power2.inOut",
                                                        });
                                                        gsap.to(images[i], {
                                                            scale: 1,
                                                            duration: 6,
                                                            ease: "power1.out",
                                                        });

                                                        const heading = heroHeadingRef.current;
                                                        const text = heroTextRef.current;
                                                        gsap.to([heading, text], {
                                                            yPercent: -15,
                                                            opacity: 0,
                                                            duration: 0.35,
                                                            ease: "power2.in",
                                                            onComplete: () => {
                                                                heading.textContent = heroSlides[i].heading;
                                                                text.textContent = heroSlides[i].text;
                                                                gsap.fromTo(
                                                                    heading,
                                                                    { yPercent: 20, opacity: 0 },
                                                                    {
                                                                        yPercent: 0,
                                                                        opacity: 1,
                                                                        duration: 0.55,
                                                                        ease: "power3.out",
                                                                    },
                                                                );
                                                                gsap.fromTo(
                                                                    text,
                                                                    { yPercent: 20, opacity: 0 },
                                                                    {
                                                                        yPercent: 0,
                                                                        opacity: 1,
                                                                        duration: 0.55,
                                                                        delay: 0.1,
                                                                        ease: "power3.out",
                                                                    },
                                                                );
                                                            },
                                                        });

                                                        heroCurrentRef.current = i;
                                                        heroDotsRef.current.forEach((dot, idx) => {
                                                            if (!dot) return;
                                                            gsap.to(dot, {
                                                                width: idx === i ? 28 : 8,
                                                                opacity: idx === i ? 1 : 0.4,
                                                                duration: 0.4,
                                                                ease: "power2.out",
                                                            });
                                                        });

                                                        heroIntervalRef.current = setInterval(() => {
                                                            const next = (heroCurrentRef.current + 1) % total;
                                                            const p = heroCurrentRef.current;
                                                            heroCurrentRef.current = next;
                                                            gsap.to(images[p], {
                                                                opacity: 0,
                                                                zIndex: 0,
                                                                duration: 1,
                                                                ease: "power2.inOut",
                                                            });
                                                            gsap.set(images[next], {
                                                                zIndex: 1,
                                                                scale: 1.08,
                                                            });
                                                            gsap.to(images[next], {
                                                                opacity: 1,
                                                                duration: 1,
                                                                ease: "power2.inOut",
                                                            });
                                                            gsap.to(images[next], {
                                                                scale: 1,
                                                                duration: 6,
                                                                ease: "power1.out",
                                                            });
                                                            const h = heroHeadingRef.current;
                                                            const t = heroTextRef.current;
                                                            gsap.to([h, t], {
                                                                yPercent: -15,
                                                                opacity: 0,
                                                                duration: 0.35,
                                                                ease: "power2.in",
                                                                onComplete: () => {
                                                                    h.textContent = heroSlides[next].heading;
                                                                    t.textContent = heroSlides[next].text;
                                                                    gsap.fromTo(
                                                                        h,
                                                                        { yPercent: 20, opacity: 0 },
                                                                        {
                                                                            yPercent: 0,
                                                                            opacity: 1,
                                                                            duration: 0.55,
                                                                            ease: "power3.out",
                                                                        },
                                                                    );
                                                                    gsap.fromTo(
                                                                        t,
                                                                        { yPercent: 20, opacity: 0 },
                                                                        {
                                                                            yPercent: 0,
                                                                            opacity: 1,
                                                                            duration: 0.55,
                                                                            delay: 0.1,
                                                                            ease: "power3.out",
                                                                        },
                                                                    );
                                                                },
                                                            });
                                                            heroDotsRef.current.forEach((dot, idx) => {
                                                                if (!dot) return;
                                                                gsap.to(dot, {
                                                                    width: idx === next ? 28 : 8,
                                                                    opacity: idx === next ? 1 : 0.4,
                                                                    duration: 0.4,
                                                                });
                                                            });
                                                        }, 5500);
                                                    }
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <Link className="ApplicationButton reveal__bottom" to="/corporate-overview">
                                        Corporate Overview
                                        <span className="material-symbols-outlined">
                                            globe_location_pin
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServiceContainer">
                            <h2 className="ServiceText">
                                Executing cross-border trade into North America demands hands-on physical precision, regulatory vigilance, and unbroken supply custody. Quinn Daisies bridges commercial enterprise demand with verified Nigerian origin sourcing—integrating accredited laboratory testing, scheduled maritime container routing into strategic U.S. deepwater gateways across Baltimore, Houston, Savannah, and Newark, and expedited CBP, FDA, and USDA pre-clearance. By synchronizing transatlantic ocean freight with bonded inland drayage and Class I intermodal rail reaching all 48 contiguous states and Canadian industrial hubs, we eliminate costly port-side demurrage, guarantee verified cargo purity, and build dependable bilateral supply chains that global enterprises trust unconditionally.
                            </h2>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                North American Trade Metrics & Operational Ratios
                            </span>
                            <h4 className="reveal__right">
                                Commercial execution across containerized maritime inflows, bilateral trade balances, and regulatory clearance precision.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Bilateral Trade Flow Ratio</h6>
                                        <p>
                                            In the $10.5B+ annual U.S.–Nigeria corridor, outbound Nigerian commodities represent 68% of commercial flow, while U.S. capital goods and machinery account for 32%.
                                        </p>
                                    </div>
                                    <h3>
                                        68<text>:32</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Atlantic & Gulf Gateway Share</h6>
                                        <p>
                                            Over 85% of transatlantic containerized cargo from West Africa enters via Baltimore, Houston, Savannah, and Newark, achieving streamlined 18-to-24 day direct transit.
                                        </p>
                                    </div>
                                    <h3>
                                        85<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Intermodal Rail & Drayage Velocity</h6>
                                        <p>
                                            Over 72% of containerized cargo cleared at our primary ports is dispatched via Class I rail and bonded drayage fleets, reaching inland hubs within 48 to 72 hours.
                                        </p>
                                    </div>
                                    <h3>
                                        72<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>First-Pass Customs Clearance</h6>
                                        <p>
                                            Through mandatory origin testing, CBP ISF 10+2 pre-filing, and FDA Prior Notice alignment, we maintain a 99.4% release rate—eliminating demurrage penalties.
                                        </p>
                                    </div>
                                    <h3>
                                        99.4<text>%</text>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                Cross-border commerce across North America requires disciplined logistics and strict regulatory alignment. Quinn Daisies connects high-volume West African agricultural production with American food manufacturers and institutional programs through reliable transatlantic shipping lanes.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                By pairing origin verification in Nigeria with primary port operations in Baltimore, Houston, Savannah, and Newark, we eliminate shipping friction. Every consignment is pre-cleared, laboratory-certified, and transferred directly to bonded drayage across the United States and Canada.
                            </p>
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
                                    <h3 className="reveal__left">Strategic U.S. Port Gateways & Inbound Hubs</h3>
                                    <p className="ServiceListText reveal__right">
                                        At Quinn Daisies, we anchor our logistics agency around premier deepwater ports along the Atlantic and Gulf coasts. Through terminal access, on-dock rail, and customs pre-clearance across Baltimore, Houston, Savannah, and Newark, we accelerate commercial cargo entering U.S. and Canadian markets.
                                    </p>
                                </div>

                                <div className="ServiceListBoxContainer">
                                    {industries.map((industry) => (
                                        <div
                                            className="ServiceListBox reveal__bottom__interval"
                                            key={industry.title}
                                        >
                                            <span className="material-symbols-outlined IconDesign">
                                                {industry.icon}
                                            </span>
                                            <div className="ServiceListBoxContent">
                                                <h4>{industry.title}</h4>
                                                <p className="ServiceListBoxContentText">
                                                    {industry.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="serviceBanner">
                            <div className="serviceBannerSection">
                                <span className="spanText reveal__top">
                                    North American Inbound Logistics & Port Execution
                                </span>
                                <h2 className="reveal__bottom">
                                    Ready to Leverage U.S. Port Gateways for Your Trade Flow?
                                </h2>
                                <p className="paragraphText reveal__left">
                                    Whether importing agricultural commodities or exporting industrial goods, Quinn Daisies manages ocean bookings, customs pre-clearance, and inland delivery with complete accountability.
                                </p>

                                <a
                                    className="linkText reveal__bottom"
                                    href="mailto:info@quinndaisies.com"
                                >
                                    Speak with our North American Operations Team
                                </a>

                                <Link to="/get-a-quote" className="ApplicationButton reveal__bottom">
                                    <p>Request a Trade & Route Consultation</p>
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
                                            End-to-end chain of custody with origin testing, bonded drayage, and climate monitoring across every North American lane.
                                        </p>
                                    </div>
                                    <span className="material-symbols-outlined">verified</span>
                                </div>

                                <img
                                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1761784412/QuinnDaisies/2_piuplt.jpg"
                                    alt="Quinn Daisies Images"
                                />

                                <div className="serviceBannerSectionImagesBox">
                                    <div className="serviceBannerSectionImagesBoxContentRight">
                                        <span className="material-symbols-outlined">anchor</span>
                                        <h5>
                                            Direct Transatlantic Inbound Corridors
                                        </h5>
                                    </div>
                                    <p className="contentRight">
                                        Linking Lekki and Apapa ports to Baltimore, Houston, Savannah, and Newark with seamless rail and highway connectivity across the 48 states and Canada.
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
