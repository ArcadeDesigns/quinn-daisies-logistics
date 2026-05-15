export const industries = [
  {
    title: "B2B Shipment Coordination",
    description:
      "We coordinate Nigerian-origin food shipments for vendors importing into the United States, from request through delivery support.",
    link: "/technology",
  },
  {
    title: "Sourcing and Quotation Support",
    description:
      "We help confirm supplier availability and prepare clear landed-cost quotations so customers can make better-informed buying decisions.",
    link: "/logistics",
  },
  {
    title: "Documentation and Compliance Support",
    description:
      "We assist with shipment files, labeling review, prior-notice support workflows, and pre-export checks designed to reduce avoidable regulatory issues.",
    link: "/consulting-services",
  },
  {
    title: "Shipment Tracking and Status Updates",
    description:
      "We provide milestone-based tracking and communication so vendors have better visibility into shipment progress and exception handling.",
    link: "/government-contracting",
  },

  {
    title: "Final-Mile Delivery Coordination",
    description:
      "We arrange local delivery support into the vendor’s store or receiving point through approved partners where needed.",
    link: "/government-contracting",
  },

  {
    title: "Vendor Platform and Portal Expansion",
    description:
      "As operations mature, Quinndaisies plans to expand into vendor portal capabilities such as order requests, limited document upload, inventory-status inputs, alerts, and shipment updates.",
    link: "/government-contracting",
  },
];

export const industryImages = [
  "https://res.cloudinary.com/renaissance-images/image/upload/v1776766959/QuinnDaisies/2151541915_wnesos.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1776766966/QuinnDaisies/2151940462_ntcfkb.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1776766956/QuinnDaisies/2151964096_liogs7.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1776766905/QuinnDaisies/2152001127_rzlgti.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1776766957/QuinnDaisies/2152005453_ydw2qc.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg",
];

export const industrySlides = industries.map((item, index) => ({
  ...item,
  image: industryImages[index % industryImages.length],
}));
