import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

export default function Intro({ title, description, backgroundImage }) {
  useEffect(() => {
    ScrollReveal().reveal(".reveal__bottom", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__top", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__left", {
      origin: "left",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__right", {
      origin: "right",
      distance: "100px",
      duration: 1000,
      reset: true,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal__bottom__interval", {
      origin: "bottom",
      distance: "100px",
      duration: 1000,
      interval: 200,
      reset: true,
      easing: "ease-in-out",
    });
  }, []);

  const industries = [
    {
      title: "Integrity",
      description:
        "No hidden fees. No vague timelines. We operate with complete transparency — what we commit to, we deliver.",
      icon: "person_shield",
    },
    {
      title: "Excellence",
      description:
        "Every shipment receives the same level of care and professionalism, regardless of size or destination.",
      icon: "workspace_premium",
    },
    {
      title: "Reliability",
      description:
        "Our clients trust us because we show up — on time, prepared, and accountable — every single time.",
      icon: "assured_workload",
    },
  ];

  return (
    <div className="AboutHeaderCtn">
      {backgroundImage && (
        <img
          className="BackgroundImagePosition"
          src={backgroundImage}
          alt="Quinn Daisies Logistics Image"
        />
      )}
      <div className="AboutHeader">
        <div className="AboutHeaderContent">
          {title && <h1 className="reveal__top">{title}</h1>}
          {description && <p className="reveal__bottom">{description}</p>}
        </div>

        <div className="AboutGrid">
          {industries.map((industry) => (
            <div className="AboutGridBox reveal__bottom__interval" key={industry.title}>
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

        <div className="AboutFlex">
          <h2 className="reveal__left">From the Ground Up: How Quinn Daisies LLC Came to Be</h2>
          <div className="AboutFlexParagraphContainer reveal__right">
            <p>
              Starting from Frederick County, Maryland, 2026, we built our
              operation from the ground up — investing in the right people, the
              right processes, and the right technology to deliver logistics
              services that actually work. Today, we serve clients across the
              United States and other regions, handling everything from daily
              freight runs to complex cross-border supply chain operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
