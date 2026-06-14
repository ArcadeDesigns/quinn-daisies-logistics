import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import {
  animate,
  scroll,
  cubicBezier,
} from "https://cdn.jsdelivr.net/npm/motion@11.11.16/+esm";
import ScrollReveal from "scrollreveal";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();

  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function Flex() {
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
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const image = document.querySelector(".AdvanceSectionContainerScaler img");
    const firstSection = document.querySelector(
      ".AdvanceSectionContainer:first-of-type",
    );
    const layers = document.querySelectorAll(
      ".AdvanceSectionContainerGrid > .AdvanceSectionContainerLayer",
    );

    if (!image || !firstSection || !layers.length) return;

    const naturalWidth = image.offsetWidth;
    const naturalHeight = image.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    scroll(
      animate(
        image,
        {
          width: [viewportWidth, naturalWidth],
          height: [viewportHeight, naturalHeight],
        },
        {
          width: { easing: cubicBezier(0.65, 0, 0.35, 1) },
          height: { easing: cubicBezier(0.42, 0, 0.58, 1) },
        },
      ),
      {
        target: firstSection,
        offset: ["start start", "80% end"], // Fix: was "80% end end"
      },
    );

    const scaleEasings = [
      cubicBezier(0.42, 0, 0.58, 1),
      cubicBezier(0.76, 0, 0.24, 1),
      cubicBezier(0.87, 0, 0.13, 1),
    ];

    layers.forEach((layer, index) => {
      const endOffset = `${1 - index * 0.05} end`;

      scroll(
        animate(
          layer,
          {
            opacity: [0, 0, 1],
          },
          {
            times: [0, 0.55, 1], // Fix: was `offset`
            easing: cubicBezier(0.61, 1, 0.88, 1),
          },
        ),
        {
          target: firstSection,
          offset: ["start start", endOffset],
        },
      );

      scroll(
        animate(
          layer,
          {
            scale: [0, 0, 1],
          },
          {
            times: [0, 0.3, 1], // Fix: was `offset`
            easing: scaleEasings[index],
          },
        ),
        {
          target: firstSection,
          offset: ["start start", endOffset],
        },
      );
    });
  }, []);

  return (
    <div className="FlexCtn">
      <div className="FlexDesignColumn">
        <div className="FlexCtnBoxCtnRow">
          <div className="FlexCtnBoxCtnRowContent">
            <span className="reveal__left">Our Mission</span>
            <h2 className="reveal__right">
              What We Set Out to Do — Every Single Day
            </h2>
            <p className="reveal__bottom">
              At Quinn Daisies LLC, our mission is to provide fast, reliable,
              and transparent logistics services that empower businesses to
              operate without boundaries — removing supply chain friction so our
              clients can focus on what they do best: growing.
            </p>
          </div>
          <div className="ImageFlexContainer">
            <div className="ImageFlexContainerContainer reveal__bottom__interval">
              <img
                className="FlexCtnBoxCtnImg"
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766966/QuinnDaisies/2151940462_ntcfkb.jpg"
                alt="Quinn Daisies Images"
              />
              <p>
                The Right Move, Every Time — For Businesses of Every Size and
                Every Scale.
              </p>
            </div>

            <div className="ImageFlexContainerContainer reveal__bottom__interval">
              <img
                className="FlexCtnBoxCtnImg"
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998707_kqwtto.jpg"
                alt="Quinn Daisies Images"
              />
              <p>
                Built on Discipline and Care, Committed to Getting It Right at
                Every Stage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="parallaxContainer">
        <ParallaxText baseVelocity={-5}>
          The Right Move, Every Time. The Right Move, Every Time. The Right
          Move, Every Time.
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          Simplifying Logistics. Simplifying Logistics. Simplifying Logistics.
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>
          Built to Scale With You. Built to Scale With You. Built to Scale With
          You.
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          Committed to Getting It Right. Committed to Getting It Right.
          Committed to Getting It Right.
        </ParallaxText>
      </section>

      <section className="AdvanceFlexDesignColumn">
        <div className="AdvanceFlexCtnBoxCtnRow">
          <div className="AdvanceFlexCtnBoxCtnRowContent">
            <span className="reveal__left">Our Vision</span>
            <h2 className="reveal__right">
              More Than a Logistics Company — A Partner Businesses Can Count On
              for the Long Term
            </h2>
            <p className="reveal__bottom">
              Our vision is driven by a belief that logistics, done right, is
              one of the most powerful enablers of business success. When supply
              chains run smoothly, businesses grow faster, serve their customers
              better, and operate with greater confidence. We exist to make that
              possible — consistently, responsibly, and at scale.
            </p>
            <div className="AdvanceImageFlexContainer">
              <div className="AdvanceImageFlexContainerContainer reveal__bottom__interval">
                <img
                  className="FlexCtnBoxCtnImg"
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468863_pksww9.jpg"
                  alt="Quinn Daisies Images"
                />
                <p>
                  We simplify complex logistics so businesses of every size can
                  grow without supply chain limitations.
                </p>
              </div>

              <div className="AdvanceImageFlexContainerContainer reveal__bottom__interval">
                <img
                  className="FlexCtnBoxCtnImg"
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766959/QuinnDaisies/2151541915_wnesos.jpg"
                  alt="Quinn Daisies Images"
                />
                <p>
                  We invest continuously in our people, processes, and
                  technology to ensure every client.
                </p>
              </div>
            </div>
          </div>

          <div className="ExtraAdvanceImageFlexContainer reveal__right__interval">
            <div className="ExtraAdvanceImageFlexContainerContainer">
              <img
                className="FlexCtnBoxCtnImg"
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg"
                alt="Quinn Daisies Images"
              />
              <p>
                Every decision we make, every process we refine, and every team
                member we develop is aligned with one long-term goal: to be the
                logistics company that businesses across every sector trust
                completely — today, tomorrow, and for the years ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="AdvanceContentWrap">
        <div className="AdvanceSectionContainer">
          <div className="AdvanceSectionContainerContent">
            <div className="AdvanceSectionContainerGrid">
              <div className="AdvanceSectionContainerLayer">
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362102/QuinnDaisies/2152021825_y3d8sd.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362101/QuinnDaisies/2151989565_gwpjcm.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362096/QuinnDaisies/2152005492_t9qg4y.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362094/QuinnDaisies/2151541927_afrcah.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468868_ispgpz.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151541828_yw9zny.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
              </div>

              <div className="AdvanceSectionContainerLayer">
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2151468864_q9vqox.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778362093/QuinnDaisies/2152021790_hxnmmm.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289413/QuinnDaisies/2151468884_hipy7q.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998717_pmxeig.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778289412/QuinnDaisies/2151998707_kqwtto.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1776766959/QuinnDaisies/2151541915_wnesos.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
              </div>

              <div className="AdvanceSectionContainerLayer">
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444167/2151468865_shzovx.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
                <div>
                  <img
                    src="https://res.cloudinary.com/renaissance-images/image/upload/v1778444167/2151468865_shzovx.jpg"
                    alt="Quinn Daisies Logistics"
                  />
                </div>
              </div>

              <div className="AdvanceSectionContainerScaler">
                <img
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1776033536/QuinnDaisies/Quinn_Diaies_Image_nbtzfq.png"
                  alt="Quinn Daisies Logistics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="AdvanceContentHeader">
        <h2 className="reveal__left">
          A Global Logistics Presence, Rooted in Two Strategic Locations
        </h2>
        <h3 className="reveal__right">
          Connecting Businesses Across Borders — From Maryland, USA to Nigeria
          and Beyond
        </h3>
        <p className="reveal__bottom">
          At Quinn Daisies LLC, we operate from two strategically positioned
          branches — one in the heart of Maryland, United States, and one in
          Nigeria — giving our clients a truly international logistics footprint
          that bridges North America and Africa with precision, reliability, and
          operational depth.
        </p>

        <p className="reveal__left">
          Our dual presence is not accidental. It is by design. We recognized
          early that businesses operating across continents needed a logistics
          partner with boots on the ground in both markets — a company that
          understands the regulatory landscapes, port operations, trade routes,
          and business cultures of both regions intimately. That is exactly what
          Quinn Daisies LLC delivers.
        </p>

        <p className="reveal__right">
          From our Maryland base, we serve as a gateway to North American and
          global freight networks — coordinating shipments, managing
          documentation, and ensuring seamless cargo movement across the United
          States and into international markets. Our Maryland operations give
          clients direct access to major East Coast ports, air freight hubs, and
          established trade corridors that connect the US to destinations
          worldwide.
        </p>

        <p className="reveal__bottom">
          From our Nigeria branch, we provide on-the-ground logistics expertise
          across West Africa and beyond — handling import and export freight,
          customs clearance, last-mile distribution, and supply chain
          coordination for businesses operating in one of Africa's most dynamic
          and fast-growing economies. Our Nigerian team understands the local
          regulatory environment deeply, ensuring your cargo clears customs
          efficiently and reaches its destination without unnecessary delays or
          compliance issues.
        </p>

        <p className="reveal__left">
          Together, our two branches form a unified logistics operation capable
          of managing end-to-end freight and cargo shipments to multiple
          countries around the world. Whether your cargo is moving from the
          United States to Africa, from Africa to Europe, or across any
          international trade corridor we serve, Quinn Daisies LLC has the
          infrastructure, the expertise, and the global network to make it
          happen — on time, in full, and without compromise.
        </p>

        <p className="reveal__right">
          We specialize in international freight and cargo shipment across a
          growing portfolio of countries and regions — including but not limited
          to destinations across Africa, Europe, North America, and Asia. Our
          clients range from small businesses shipping their first international
          order to established enterprises managing high-volume,
          multi-destination freight operations. Regardless of scale, every
          shipment receives the same standard of care, compliance, and
          professional execution that defines the Quinn Daisies LLC name.
        </p>

        <p className="reveal__bottom">
          When you partner with Quinn Daisies LLC, you are not simply hiring a
          freight company. You are gaining a logistics ally with a physical
          presence on two continents, a deep understanding of international
          trade, and an unwavering commitment to getting your cargo where it
          needs to go — safely, efficiently, and on schedule.
        </p>
      </section>

      <div className="FlexCtnBoxCtn">
        <div className="FlexCtnBox reveal__bottom__interval">
          <span className="material-symbols-outlined">alternate_email</span>
          <div className="FlexCtnBoxContent">
            <h3>Reach Out</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@quinndaisies.com"
              target="_blank"
            >
              info@quinndaisies.com
            </a>
          </div>
        </div>

        <div className="FlexCtnBox reveal__bottom__interval">
          <span className="material-symbols-outlined">phone</span>
          <div className="FlexCtnBoxContent">
            <h3>Contact Sales</h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@quinndaisies.com"
              target="_blank"
            >
              sales@quinndaisies.com
            </a>
          </div>
        </div>

        <div className="FlexCtnBox reveal__bottom__interval">
          <span className="material-symbols-outlined">location_on</span>
          <div className="FlexCtnBoxContent">
            <h3>Address</h3>
            <a href="https://maps.app.goo.gl/swpx8XwaJAT22RGq8" target="_blank">
              1915 Wetterhorn Ct, Frederick County, Maryland, United States,
              21702
            </a>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.2748649816094!2d-77.42511932349208!3d39.463778613086454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c9c52a5e57af13%3A0x210d900d99a68089!2s1915%20Wetterhorn%20Ct%2C%20Frederick%2C%20MD%2021702%2C%20USA!5e1!3m2!1sen!2sng!4v1778445237880!5m2!1sen!2sng"
        width="100%"
        height="1000"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
