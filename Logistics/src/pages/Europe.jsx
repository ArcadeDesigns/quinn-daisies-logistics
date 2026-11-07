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
        title: "Natural Sesame Seeds (White & Brown Varieties)",
        description:
            "Mechanically cleaned and Sortexed to 99.9% purity with under 6% moisture and high oil content (>50%). Sourced from northern agricultural belts for European bakeries, confectionery, tahini production, and oil crushing.",
        icon: "grain",
    },
    {
        title: "Premium Dried Split Ginger (Kaduna Pungency)",
        description:
            "Internationally renowned for high gingerol content and intense aromatic pungency. Sun-cured with low moisture (<10%) and zero pesticide residues, fully certified for European pharmaceutical, beverage, and spice blenders.",
        icon: "nutrition",
    },
    {
        title: "Traceable Fermented Cocoa Beans & Derivatives",
        description:
            "Grade 1 sun-cured cocoa beans, butter, and liquor featuring strict bean count and low moisture. Backed by farm-level GPS polygon mapping for total compliance with European Union Deforestation Regulations (EUDR).",
        icon: "spa",
    },
    {
        title: "Raw Cashew Nuts & Organic Shea Butter",
        description:
            "High-outturn Raw Cashew Nuts (48–52 KOR) and premium cold-pressed Grade A shea butter, delivered in bulk to European nut roasters, confectionery brands, and natural cosmetic manufacturers across France, Germany, and the UK.",
        icon: "eco",
    },
];

const heroSlides = [
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1790074610/QuinnDaisies/2151762335_l72ycf.jpg",
        heading: "Supplying European Companies with Origin Products",
        text: "Quinn Daisies bridges European corporate demand with verified agricultural and industrial commodities, managing end-to-end ocean freight, rigorous EUDR compliance, and scheduled port delivery.",
    },
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789661150/QuinnDaisies/2150893035_q5i5wu.jpg",
        heading: "Strategic Maritime Corridors into Europe's Gateways",
        text: "Through scheduled container vessel bookings into Rotterdam, Antwerp-Bruges, Hamburg, and Le Havre, we coordinate destination customs, bonded staging, and inland intermodal transit across Europe.",
    },
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1790074612/QuinnDaisies/2151075930_pr26pf.jpg",
        heading: "Uncompromising EFSA & EUDR Regulatory Assurance",
        text: "Every consignment destined for European buyers undergoes pre-shipment laboratory assays, phytosanitary verification, and parcel-level GPS mapping to guarantee rapid first-pass EU border clearance.",
    },
];

export default function Europe() {
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
                title="Europe Trade Corridors & Commodity Supply Logistics | Quinn Daisies Logistics"
                description="Supplying European companies with verified agricultural commodities and industrial inputs through Rotterdam, Antwerp, Hamburg, and Le Havre. Complete EUDR compliance, EFSA assays, and multimodal European delivery."
                keywords="Europe freight logistics, Port of Rotterdam shipping, Port of Antwerp cargo, EUDR compliance, European commodity supply, transatlantic cargo Europe, EFSA certified agricultural imports"
                url="https://www.logistics.quinndaisies.com/europe"
                geoRegion="NL;BE;DE;GB"
                geoPlacename="Rotterdam, Netherlands; Antwerp, Belgium; Hamburg, Germany; London, United Kingdom"
                geoPosition="51.9244;4.4777"
                icbm="51.9244, 4.4777"
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

                                    <Link className="ApplicationButton reveal__bottom" to="/our-mission-and-vision">
                                        Our Mission and Vision
                                        <span className="material-symbols-outlined">
                                            globe_location_pin
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServiceContainer">
                            <h2 className="ServiceText">
                                Quinn Daisies anchors bilateral trade with European enterprises, supplying verified agricultural commodities and industrial inputs through certified origin testing, complete EUDR traceability, and scheduled maritime delivery into premier European hubs.
                            </h2>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                European Trade Metrics & Supply Ratios
                            </span>
                            <h4 className="reveal__right">
                                Bilateral commercial execution across European port gateways, strict EUDR compliance metrics, and direct industrial commodity delivery.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Bilateral Commodity Flow Ratio</h6>
                                        <p>
                                            In our Europe trade corridors, outbound verified African commodities represent 71% of total tonnage, matched by 29% inbound European industrial machinery and tech.
                                        </p>
                                    </div>
                                    <h3>
                                        71<span>:29</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>North Sea Gateway Volume</h6>
                                        <p>
                                            Over 82% of our containerized European consignments discharge via Rotterdam and Antwerp-Bruges, accessing bonded barge and rail networks into Central Europe.
                                        </p>
                                    </div>
                                    <h3>
                                        82<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>EUDR & EFSA Assay Conformance</h6>
                                        <p>
                                            100% of agricultural products delivered to European processors feature origin geolocation data, aflatoxin assays, and independent SGS quality certificates.
                                        </p>
                                    </div>
                                    <h3>
                                        100<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>First-Pass EU Customs Clearance</h6>
                                        <p>
                                            With advance TRACES NT documentation, EUR.1 movement forms, and pre-arrival veterinary checks, we maintain a 99.6% uninterrupted EU green-lane release rate.
                                        </p>
                                    </div>
                                    <h3>
                                        99.6<span>%</span>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                Trading with European enterprises requires exact specification compliance and rigorous sustainability certification. Quinn Daisies supplies leading European food processors, commodity desks, and manufacturers with verified origin inputs including sesame, ginger, cashew, and cocoa, backed by end-to-end maritime execution.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                By combining origin laboratory verification across West Africa with direct vessel handling at Rotterdam, Antwerp, Hamburg, and Le Havre, we eliminate supply disruptions. Every shipment arrives fully compliant with European Union Deforestation Regulations (EUDR) and ready for immediate multimodal dispatch.
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
                                    <h3 className="reveal__left">Primary Nigerian Commodities & Products Shipped to Europe</h3>
                                    <p className="ServiceListText reveal__right">
                                        Quinn Daisies aggregates, grades, and exports verified Nigerian agricultural commodities directly to European food processors, industrial manufacturers, and commodity trading desks. From origin farm-gate quality control to destination port delivery, we supply institutional buyers with products that strictly satisfy EU safety, purity, and sustainability directives.
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
                                    European Commodity Sourcing & Trade Execution
                                </span>
                                <h2 className="reveal__bottom">
                                    Supplying European Enterprise with Guaranteed Quality & Timely Delivery
                                </h2>
                                <p className="paragraphText reveal__left">
                                    From single-container sample validation to multi-thousand-metric-ton commercial contracts, Quinn Daisies sources, inspects, and delivers the exact products European enterprises require.
                                </p>

                                <a
                                    className="linkText reveal__bottom"
                                    href="mailto:info@quinndaisies.com"
                                >
                                    Speak with our European Operations Team
                                </a>

                                <Link to="/get-a-quote" className="ApplicationButton reveal__bottom">
                                    <p>Request a Commodity & Route Consultation</p>
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
                                            Certified chain of custody with origin purity testing, EUDR geolocation tracking, and temperature-monitored ocean transport.
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
                                            Direct West Africa–Europe Inbound Corridors
                                        </h5>
                                    </div>
                                    <p className="contentRight">
                                        Linking Lekki and Apapa ports to Rotterdam, Antwerp, Hamburg, and Le Havre with seamless barge, rail, and road delivery across the EU.
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
