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
            "Mechanically cleaned and Sortex-sorted to 99.9% purity with under 6% moisture and high oil content (>50%). Shipped in high volumes to major crushing plants and food processors in China, Japan, and Vietnam.",
        icon: "grain",
    },
    {
        title: "Raw Cashew Nuts (In-Shell & High KOR)",
        description:
            "Premium in-shell raw cashew nuts featuring high Kernel Output Ratios (48–52 KOR) and strict moisture grading, supplied directly to primary roasting and processing conglomerates across India and Vietnam.",
        icon: "nutrition",
    },
    {
        title: "Solid Minerals & Industrial Metal Concentrates",
        description:
            "Certified high-grade lithium, lead, zinc, and tin concentrates sourced from verified Nigerian mining concessions, assay-certified by accredited labs for Asian smelting and battery manufacturing giants.",
        icon: "layers",
    },
    {
        title: "Dried Split Ginger & Botanical Agro-Inputs",
        description:
            "Aromatic dried split ginger, export-grade hibiscus calyces, and gum arabic, cured to strict moisture specifications for pharmaceutical extractors, beverage producers, and spice markets across Asia.",
        icon: "spa",
    },
];

const heroSlides = [
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789661150/QuinnDaisies/2152006027_zaoda6.jpg",
        heading: "Supplying Asian Markets with Verified Origin Commodities",
        text: "Quinn Daisies coordinates high-volume maritime supply chains, delivering laboratory-certified agricultural commodities and solid minerals directly to industrial processors and trading conglomerates across Asia.",
    },
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789644070/2151493233_mzltlu.jpg",
        heading: "Strategic Maritime Corridors into Asian Gateways",
        text: "Through scheduled ocean vessel routings into Shanghai, Ningbo, Singapore, and Nhava Sheva, we manage origin testing, export customs documentation, and seamless port-side discharge.",
    },
    {
        image:
            "https://res.cloudinary.com/renaissance-images/image/upload/v1789481036/QuinnDaisies/2151913313_mevzqk.jpg",
        heading: "Bi-Directional Trade & Industrial Equipment Sourcing",
        text: "Balancing outward commodity flows with turnkey import logistics for heavy machinery, renewable solar infrastructure, and manufacturing technology originating from Asia's leading industrial centers.",
    },
];

export default function Asia() {
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
                title="Asia Trade Corridors & Commodity Supply Logistics | Quinn Daisies Logistics"
                description="Supplying Asian enterprises with verified Nigerian agricultural commodities, solid minerals, and raw inputs. Scheduled maritime freight to Shanghai, Ningbo, Singapore, and Nhava Sheva."
                keywords="Asia freight forwarder, Shanghai port cargo, Singapore logistics hub, Port of Ningbo shipping, Nhava Sheva maritime freight, agricultural commodities Asia, solid minerals export Asia"
                url="https://www.logistics.quinndaisies.com/asia"
                geoRegion="CN;SG;IN;HK"
                geoPlacename="Shanghai, China; Singapore; Mumbai, India; Hong Kong"
                geoPosition="31.2304;121.4737"
                icbm="31.2304, 121.4737"
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

                                    <Link className="ApplicationButton reveal__bottom" to="/global-capabilities">
                                        Global Capabilities
                                        <span className="material-symbols-outlined">
                                            globe_location_pin
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="SectionContainer ServiceContainer">
                            <h2 className="ServiceText">
                                Quinn Daisies drives bilateral commerce with Asian enterprise, supplying verified agricultural commodities and critical solid minerals through origin laboratory assays, scheduled ocean freight, and coordinated gateway port clearance.
                            </h2>
                        </section>

                        <section className="SectionContainer ServicesInformation">
                            <span className="reveal__left">
                                Asian Trade Metrics & Supply Ratios
                            </span>
                            <h4 className="reveal__right">
                                Commercial execution across trans-Indian and Pacific maritime routes, export quality ratios, and multi-sector industrial trade.
                            </h4>

                            <div className="ServicesInformationBoxContainer">
                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Bilateral Commodity Flow Ratio</h6>
                                        <p>
                                            In our Asian corridors, outbound Nigerian agricultural commodities and minerals represent 64% of cargo volume, paired with 36% inbound Asian capital goods and technology.
                                        </p>
                                    </div>
                                    <h3>
                                        64<span>:36</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>East & South Asian Gateway Share</h6>
                                        <p>
                                            Over 88% of containerized export volume reaches leading industrial terminals across China, India, and Vietnam, maintaining streamlined 28-to-35 day direct transit.
                                        </p>
                                    </div>
                                    <h3>
                                        88<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>Origin Purity & Specification Assay</h6>
                                        <p>
                                            Every consignment undergoes independent laboratory testing (SGS/Bureau Veritas), achieving a 99.8% buyer specification acceptance rate at destination ports.
                                        </p>
                                    </div>
                                    <h3>
                                        99.8<span>%</span>
                                    </h3>
                                </div>

                                <div className="ServicesInformationBox reveal__bottom__interval">
                                    <div className="ServicesInformationBoxHeader">
                                        <h6>First-Pass Customs Clearance</h6>
                                        <p>
                                            Through accurate pre-shipment phytosanitary documentation and customs pre-filing, our Asian consignments achieve a 99.5% clean customs release rate.
                                        </p>
                                    </div>
                                    <h3>
                                        99.5<span>%</span>
                                    </h3>
                                </div>
                            </div>

                            <p className="ServicesInformationBottomText reveal__left">
                                Connecting Nigerian commodity production with Asian manufacturing powerhouses requires disciplined supply-chain governance. Quinn Daisies supplies leading crushing facilities, nut roasters, and smelters across China, India, and Vietnam with verified agricultural commodities and industrial minerals, executing direct ocean shipping from West Africa.
                            </p>
                            <p className="ServicesInformationBottomText reveal__right">
                                By pairing rigorous farm-gate aggregation and mechanical sorting in Nigeria with trusted maritime carrier agreements into Shanghai, Ningbo, Singapore, and Nhava Sheva, we ensure continuous supply. Every cargo parcel is verified before departure and monitored through delivery, reducing commercial risk for Asian enterprise partners.
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
                                    <h3 className="reveal__left">Primary Nigerian Commodities & Products Shipped to Asia</h3>
                                    <p className="ServiceListText reveal__right">
                                        Quinn Daisies aggregates, processes, and exports verified Nigerian agricultural commodities and solid minerals directly to Asian industrial processors, food conglomerates, and commodity trading houses. We manage origin quality testing, export compliance, and ocean transit to supply buyers with verified commercial-grade products.
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
                                    Asian Trade Corridors & Commodity Sourcing
                                </span>
                                <h2 className="reveal__bottom">
                                    Supplying Asian Industry with Verified Origin Commodities
                                </h2>
                                <p className="paragraphText reveal__left">
                                    From scheduled container shipments to multi-vessel bulk charters, Quinn Daisies manages origin aggregation, accredited assays, and ocean logistics with guaranteed reliability.
                                </p>

                                <a
                                    className="linkText reveal__bottom"
                                    href="mailto:info@quinndaisies.com"
                                >
                                    Speak with our Asian Operations Team
                                </a>

                                <Link to="/get-a-quote" className="ApplicationButton reveal__bottom">
                                    <p>Request an Asian Trade Consultation</p>
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
                                            Chain of custody assurance with independent origin testing, container seal integrity, and milestone tracking across all Asian lanes.
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
                                            Direct West Africa–Asia Maritime Corridors
                                        </h5>
                                    </div>
                                    <p className="contentRight">
                                        Linking Lekki and Apapa container terminals to major gateways including Shanghai, Ningbo, Singapore, and Nhava Sheva for uninterrupted industrial supply.
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
