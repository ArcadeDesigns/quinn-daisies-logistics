import gsap from "gsap";
import { Flip } from "gsap/all";
import SEO from "../components/SEO";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { useEffect, useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, Flip);

const industries = [
    {
        title: "Natural & Hulled Sesame Seeds (GCC Bakery, Tahini & Halva Grade)",
        description:
            "Sortex-cleaned to 99.9% purity with under 6% moisture and >52% oil content. Exported in high container volumes to leading sesame tahini manufacturers, halva producers, and commercial oil crushers across the UAE, Saudi Arabia, and Jordan.",
        icon: "grain",
    },
    {
        title: "Dried Split Ginger, Gum Arabic & Botanical Inputs",
        description:
            "Aromatic sun-dried split ginger (Kaduna quality), premium grade Acacia senegal (gum arabic), and export-grade hibiscus calyces sourced from northern agricultural belts for Middle Eastern spice blenders, beverage packers, and pharmaceutical extractors.",
        icon: "spa",
    },
    {
        title: "AfCFTA Cross-Border Freight & Regional Consolidation",
        description:
            "Bonded overland freight, coastal maritime feeder routing, and consolidated cargo corridors linking Nigeria with Ghana, Côte d'Ivoire, Benin, Togo, and Cameroon with single-window customs coordination and duty exemption execution under AfCFTA.",
        icon: "local_shipping",
    },
    {
        title: "GCC Petrochemicals, Polymers & Industrial Inbound",
        description:
            "Turnkey import logistics, container destuffing, and industrial distribution for Gulf-produced polyethylene, polypropylene resins, commercial fertilizers, and capital equipment flowing into West African manufacturing plants.",
        icon: "precision_manufacturing",
    },
];

const heroSlides = [
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1790166922/QuinnDaisies/2151983634_b1d5nz.jpg",
        heading: "Connecting West African Supply with Gulf & Middle Eastern Enterprise",
        text: "Quinn Daisies coordinates strategic maritime and air cargo pipelines connecting verified Nigerian agricultural commodities, minerals, and commercial trade directly into Jebel Ali, Dammam, and major GCC commercial centers.",
    },
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1790166922/QuinnDaisies/2151441268_glyitk.jpg",
        heading: "Accelerating Intra-African Trade Under the AfCFTA Framework",
        text: "From bonded coastal feeder lanes to cross-border overland corridors across ECOWAS and Central Africa, we provide the physical infrastructure, duty optimization, and customs execution required for borderless African commerce.",
    },
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1790166920/QuinnDaisies/2151794142_uwjjwm.jpg",
        heading: "Bi-Directional Supply: Origin Commodities & Industrial Inbound Inputs",
        text: "Balancing outward agro-commodity exports with turnkey import logistics for petrochemical polymers, construction inputs, fertilizers, and industrial machinery originating from UAE, Saudi Arabia, and regional manufacturing hubs.",
    },
];

export default function MiddleEast() {
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
                title="Middle East & Africa Trade Corridors | Quinn Daisies Logistics"
                description="Executing bilateral trade and cross-border freight between West Africa, the Gulf Cooperation Council (GCC), and Pan-African markets under AfCFTA. Verified origin commodities, bonded ocean freight to Jebel Ali, Dammam, and Jeddah, and multimodal regional logistics."
                keywords="Middle East logistics, Africa trade corridors, AfCFTA freight, Jebel Ali shipping, Nigeria to UAE export, sesame seeds Dubai, ginger Saudi Arabia, West Africa shipping, Lekki deep sea port, multimodal African logistics, ECOWAS trade, SFDA compliance, Halal commodity export"
                url="https://www.logistics.quinndaisies.com/middle-east-and-africa"
                geoRegion="AE;SA;NG-LA;GH"
                geoPlacename="Dubai, United Arab Emirates; Lagos, Nigeria; Jeddah, Saudi Arabia; Accra, Ghana"
                geoPosition="25.2048;55.2708"
                icbm="25.2048, 55.2708"
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
                                                        heroCurrentRef.current = prev;
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

                                    <Link className="ApplicationButton reveal__bottom" to="/compliance-and-safety">
                                        Our Compliance and Safety
                                        <span className="material-symbols-outlined">
                                            globe_location_pin
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServiceContainer">
                            <h2 className="ServiceText">
                                Quinn Daisies provides the institutional trade infrastructure connecting West Africa, the Middle East, and the Pan-African commercial sphere — combining verified origin commodity aggregation, scheduled maritime freight into GCC gateways, and cross-border execution under AfCFTA.
                            </h2>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                Middle East & Africa Trade Architecture
                            </span>
                            <h4 className="reveal__right">
                                Commercial execution across the Arabian Gulf, Red Sea corridors, and Pan-African trade networks.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>GCC Outbound Purity & Specification</h6>
                                        <p>
                                            Every agricultural consignment undergoes independent laboratory assay (SGS/Bureau Veritas) to guarantee 99.8%+ purity and full SFDA/ESMA standard compliance.
                                        </p>
                                    </div>
                                    <h3>
                                        99.8<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Direct Maritime Transit to Jebel Ali & Red Sea</h6>
                                        <p>
                                            Express containerized ocean routes connecting Lekki Deep Sea Port and Apapa to Jebel Ali, Dammam, and Jeddah in 22 to 28 days with zero demurrage protocols.
                                        </p>
                                    </div>
                                    <h3>
                                        22<text>–28 Days</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>AfCFTA First-Pass Clearance Rate</h6>
                                        <p>
                                            Streamlined customs pre-clearance and expedited border crossings across ECOWAS and intra-African trade lanes utilizing harmonized digital documentation.
                                        </p>
                                    </div>
                                    <h3>
                                        99.4<text>%</text>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Bi-Directional Corridor Flow Balance</h6>
                                        <p>
                                            Balanced container utilization pairing outward Nigerian agro-commodities and solid minerals with inward GCC polymers, fertilizers, and industrial equipment.
                                        </p>
                                    </div>
                                    <h3>
                                        68<text>:32</text>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                Connecting Nigerian origin commodity production with Middle Eastern industrial and consumer markets demands rigorous trade discipline. The Gulf Cooperation Council (GCC) represents one of the world's most demanding destinations for agricultural staples—requiring pristine Sortex cleanliness, strict moisture tolerances, and complete phytosanitary certification. Quinn Daisies manages origin aggregation across Nigeria's agricultural heartlands, conducts mechanical pre-cleaning, and coordinates scheduled ocean bookings into premier Gulf hubs including Jebel Ali (Dubai), King Abdulaziz Port (Dammam), and Hamad Port (Qatar).
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                Concurrently, Quinn Daisies acts as a foundational logistics catalyst for intra-African commerce under the African Continental Free Trade Area (AfCFTA) and the ECOWAS Trade Liberalization Scheme (ETLS). By bridging coastal container feeder lanes with bonded overland transport corridors, we eliminate traditional border bottlenecks between Nigeria, Ghana, Côte d'Ivoire, and regional economic hubs. From origin farm-gate inspection to destination customs release, we deliver end-to-end chain of custody, contract certainty, and institutional security for cross-border enterprises.
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
                                    <h3 className="reveal__left">Primary Commodities & Commercial Trade Across the Middle East & Africa</h3>
                                    <p className="ServiceListText reveal__right">
                                        Quinn Daisies aggregates, inspects, and delivers commercial-grade agricultural commodities, industrial minerals, and cross-border manufactured goods between West Africa, the Gulf Cooperation Council (GCC), and regional African markets. We combine origin farm-gate quality control with bonded freight execution to provide institutional buyers and industrial enterprises with reliable, compliant supply chains.
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
                                    Middle East & Pan-African Commercial Corridors
                                </span>
                                <h2 className="reveal__bottom">
                                    Supplying Middle Eastern & African Enterprise with Guaranteed Reliability
                                </h2>
                                <p className="paragraphText reveal__left">
                                    From multi-container agricultural exports destined for Gulf food manufacturers to cross-border logistics under AfCFTA, Quinn Daisies manages origin aggregation, regulatory compliance, and multi-modal transport with total operational precision.
                                </p>

                                <a
                                    className="linkText reveal__bottom"
                                    href="mailto:info@quinndaisies.com"
                                >
                                    Speak with our MEA Operations Team
                                </a>

                                <Link to="/get-a-quote" className="ApplicationButton reveal__bottom">
                                    <p>Request a MEA Trade Consultation</p>
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
                                            Verified chain-of-custody protocols with independent laboratory assays, seal integrity validation, and real-time transit tracking across all Middle Eastern and African lanes.
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
                                            Bilateral GCC Gateways & Pan-African Connectivity
                                        </h5>
                                    </div>
                                    <p className="contentRight">
                                        Direct maritime links from Lekki and Apapa to Jebel Ali, Dammam, and Jeddah, integrated with multimodal overland corridors serving ECOWAS and Central African commercial centers.
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
