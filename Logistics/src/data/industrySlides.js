export const industries = [
  {
    title: "Technology and Software Development",
    description:
      "We design and develop scalable software solutions, digital platforms, and technology systems that help organizations modernize operations, improve efficiency, and support long-term growth.",
    link: "/technology",
  },
  {
    title: "Cybersecurity, Cloud DevOps and AI",
    description:
      "We support secure digital transformation through cybersecurity, Cloud DevOps, artificial intelligence, quantum computing, prompt engineering, automation, and emerging technology solutions.",
    link: "/technology",
  },
  {
    title: "Systems Integration and Business Intelligence",
    description:
      "We help organizations connect systems, streamline workflows, improve data accessibility, and transform information into actionable intelligence for stronger operational and strategic decision-making.",
    link: "/consulting-services",
  },
  {
    title: "Logistics and Supply Chain Solutions",
    description:
      "We provide coordination and strategic support across logistics, supply chain operations, international shipping, trade processes, and the movement of goods across local and global markets.",
    link: "/logistics",
  },
  {
    title: "Vendor Acquisition and Resource Sourcing",
    description:
      "We help businesses identify qualified vendors, explore sourcing opportunities, evaluate available resources, and establish relationships that support reliable operations and commercial growth.",
    link: "/consulting-services",
  },
  {
    title: "Lead Generation and Business Development",
    description:
      "We support market expansion through lead generation, business analysis, marketing, strategic outreach, and business development designed to identify opportunities and build sustainable commercial relationships.",
    link: "/government-contracting",
  },
];

export const industryImages = [
  "https://res.cloudinary.com/renaissance-images/image/upload/v1787010429/QuinnDaisies/2148882663_ogfqjb.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1787010387/QuinnDaisies/124625_jouegu.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1787010416/QuinnDaisies/2151910935_fzm8q0.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1776766905/QuinnDaisies/2152001127_rzlgti.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1776766957/QuinnDaisies/2152005453_ydw2qc.jpg",
  "https://res.cloudinary.com/renaissance-images/image/upload/v1761872178/QuinnDaisies/51152_qph8bp.jpg",
];

export const industrySlides = industries.map((item, index) => ({
  ...item,
  image: industryImages[index % industryImages.length],
}));