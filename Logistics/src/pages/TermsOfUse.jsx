import React, { useRef } from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { Link } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export default function TermsOfUse() {
  useSmoothScroll();
  const pageRef = useRef(null);

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "services", title: "2. Scope of Services" },
    { id: "quotations", title: "3. Quotations & Incoterms 2020" },
    { id: "shipping", title: "4. Bill of Lading & Title Transfer" },
    { id: "compliance", title: "5. Export Controls & EUDR" },
    { id: "software", title: "6. Software IP & Client Ownership" },
    { id: "payments", title: "7. Payment & Escrow Settlement" },
    { id: "liability", title: "8. Maritime Risk & Limitations" },
    { id: "indemnity", title: "9. Mutual Indemnification" },
    { id: "disputes", title: "10. Governing Law & Arbitration" },
    { id: "notices", title: "11. Corporate Legal Notices" },
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(`#${id}`, true, "top 120px");
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <SEO
        title="Terms of Use & Master Commercial Agreement | Quinn Daisies Logistics"
        description="Official enterprise terms of service governing transatlantic freight forwarding, commodity sourcing, software engineering, and bilateral commercial execution."
        keywords="terms of use, terms of service, logistics terms, bill of lading conditions, Incoterms 2020 terms, commercial freight agreement, software licensing terms"
        url="https://www.logistics.quinndaisies.com/terms-of-use"
      />

      <div ref={pageRef}>
        <Navbar />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* HERO SECTION - ADVANCE UPDATE DESIGN */}
            <section className="AdvanceUpdateDesign LegalAdvanceHeader">
              <img
                className="AdvanceUpdateDesignImage"
                src="https://res.cloudinary.com/renaissance-images/image/upload/v1789240372/QuinnDaisies/639176_xzxyky.jpg"
                alt="Quinn Daisies Master Commercial Agreement"
              />
              <div className="AdvanceUpdateDesignOverlay">
                <span className="AdvanceUpdateSpan">
                  Master Commercial Terms
                </span>
                <h2>Terms of Use & Master Agreement</h2>
                <p className="AdvanceUpdateText">
                  Governing commercial freight execution, bill of lading custody, intellectual
                  property ownership, and legal obligations between Quinn Daisies Logistics LLC and enterprise partners.
                </p>
                <div className="LegalMetaRow">
                  <div className="LegalMetaItem">
                    <span className="material-symbols-outlined">calendar_today</span>
                    <span>Effective: Jan 1, 2026</span>
                  </div>
                  <div className="LegalMetaItem">
                    <span className="material-symbols-outlined">update</span>
                    <span>Last Revised: Oct 4, 2026</span>
                  </div>
                  <div className="LegalMetaItem">
                    <span className="material-symbols-outlined">account_balance</span>
                    <span>State of Maryland, USA</span>
                  </div>
                </div>
                <div className="AdvanceUpdateButtonContainer">
                  <a
                    className="ApplicationButton"
                    href="#acceptance"
                    onClick={(e) => handleScrollTo(e, "acceptance")}
                  >
                    Read Document
                    <span className="material-symbols-outlined">
                      arrow_downward
                    </span>
                  </a>
                </div>
              </div>
            </section>

            {/* MAIN BODY WITH STICKY TOC */}
            <div className="LegalPageWrapper">
              <div className="LegalPageContainer">
                {/* Table of Contents */}
                <aside className="LegalTocSidebar">
                  <div className="LegalTocHeader">
                    <span className="material-symbols-outlined">format_list_bulleted</span>
                    <span>Document Contents</span>
                  </div>
                  <ul className="LegalTocList">
                    {sections.map((sec) => (
                      <li key={sec.id} className="LegalTocItem">
                        <a
                          href={`#${sec.id}`}
                          onClick={(e) => handleScrollTo(e, sec.id)}
                        >
                          {sec.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>

            {/* Legal Content Stream */}
            <main className="LegalMainContent">
              {/* Section 1 */}
              <section id="acceptance" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">01</span>
                  Acceptance of Terms & Institutional Authority
                </h2>
                <p>
                  These Terms of Use (the <em>"Agreement"</em> or <em>"Terms"</em>) constitute a legally
                  binding contract between <strong>Quinn Daisies Logistics LLC</strong>, a Maryland
                  corporation (<em>"Quinn Daisies"</em>, <em>"we"</em>, <em>"us"</em>, or <em>"our"</em>),
                  and any enterprise, institutional counterparty, shipper, consignee, or user (<em>"Client"</em>,
                  <em>"you"</em>, or <em>"your"</em>) accessing our digital portals, requesting commercial
                  quotations, or executing logistics, sourcing, or software development contracts.
                </p>
                <p>
                  By accessing <a href="https://www.logistics.quinndaisies.com">www.logistics.quinndaisies.com</a>, booking cargo,
                  submitting a formal request for quotation, or signing an affiliated Statement of Work (SOW),
                  you affirm that you possess the full institutional authority to legally bind your corporate
                  entity to these Terms. If you do not possess such authority or do not agree with any provision,
                  you must immediately cease all use of our services.
                </p>
              </section>

              {/* Section 2 */}
              <section id="services" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">02</span>
                  Scope of Commercial Services
                </h2>
                <p>
                  Quinn Daisies coordinates multifaceted transatlantic commercial operations:
                </p>
                <ul>
                  <li>
                    <strong>Multimodal Freight Forwarding:</strong> Ocean containerized freight (FCL/LCL),
                    express air cargo staging via our NACHO MMIA airport facility, bonded drayage, port consolidation,
                    and destination customs brokerage.
                  </li>
                  <li>
                    <strong>Agricultural Commodity Sourcing:</strong> Origin procurement, Sortex cleaning,
                    hermetic storage, and pre-shipment quality assurance for sesame seeds, ginger, cocoa, and allied agro-commodities.
                  </li>
                  <li>
                    <strong>Enterprise Software & AI Engineering:</strong> Bespoke web applications, mobile platforms,
                    desktop workstation suites, autonomous machine learning pipelines, and cloud DevOps management.
                  </li>
                  <li>
                    <strong>Workforce Fellowships & Technical Training:</strong> Enterprise developer apprenticeships,
                    university co-ventures, and specialized engineering academy placements.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="quotations" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">03</span>
                  Commercial Quotations & Incoterms 2020
                </h2>
                <p>
                  All commercial freight and sourcing proposals issued by Quinn Daisies are governed
                  by the International Chamber of Commerce (ICC) <strong>Incoterms® 2020</strong> rules:
                </p>
                <ul>
                  <li>
                    <strong>Binding Validity:</strong> Formal quotations remain legally binding for fourteen (14)
                    calendar days from issuance unless otherwise specified in writing, subject to sudden carrier
                    bunker fuel adjustments or statutory tariff changes.
                  </li>
                  <li>
                    <strong>Incoterms Application:</strong> Unless explicitly contracted otherwise in a bilateral agreement,
                    all maritime export consignments from Nigerian ports are priced under <strong>FOB (Free On Board)</strong>
                    or <strong>CIF (Cost, Insurance and Freight)</strong> terms. Destination delivery within North America
                    is executed under <strong>DDP (Delivered Duty Paid)</strong> or <strong>DAP (Delivered at Place)</strong>.
                  </li>
                </ul>
                <div className="LegalCallout">
                  <div className="LegalCalloutTitle">
                    <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>
                      price_check
                    </span>
                    <span>Itemized Transparency Standard</span>
                  </div>
                  <p>
                    All Quinn Daisies quotations include an itemized breakdown of base freight rates,
                    port terminal handling charges (THC), documentation fees, and pre-shipment laboratory assays.
                    No undisclosed fees or unexpected demurrage charges will be levied.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="shipping" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">04</span>
                  Bill of Lading, Title Transfer & Lien Rights
                </h2>
                <p>
                  For all maritime shipments, the issued <strong>Bill of Lading (B/L)</strong> or Multimodal
                  Transport Document constitutes the definitive contract of carriage and receipt of goods:
                </p>
                <ul>
                  <li>
                    <strong>Title Transfer:</strong> Title to physical agricultural commodities transfers to the
                    buyer upon final milestone payment settlement or negotiation of original shipping documents
                    through an authorized banking Letter of Credit (LC).
                  </li>
                  <li>
                    <strong>General Maritime Lien:</strong> Quinn Daisies maintains a general and continuing lien
                    on all cargo, documents, and property within its custody or control for any outstanding freight,
                    demurrage, customs duties, or storage charges accrued by the Client.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="compliance" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">05</span>
                  Export Controls, Sanctions & EUDR Compliance
                </h2>
                <p>
                  Both parties warrant strict compliance with all applicable domestic and international
                  trade regulations:
                </p>
                <ul>
                  <li>
                    <strong>U.S. Sanctions & OFAC:</strong> Client warrants that neither it nor any beneficial owner
                    appears on the Specially Designated Nationals (SDN) list maintained by the U.S. Department
                    of the Treasury’s Office of Foreign Assets Control (OFAC).
                  </li>
                  <li>
                    <strong>EUDR Deforestation Mandate:</strong> For agricultural commodities destined for the European
                    Union, Quinn Daisies guarantees 100% polygon farmgate geolocation verification proving zero deforestation
                    after December 31, 2020, complying fully with EU Regulation 2023/1115.
                  </li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="software" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">06</span>
                  Software Engineering & Intellectual Property Rights
                </h2>
                <p>
                  Our technology engineering engagements operate under strict intellectual property governance:
                </p>
                <div className="LegalCallout gold">
                  <div className="LegalCalloutTitle">
                    <span className="material-symbols-outlined" style={{ color: "#e28a34" }}>
                      code
                    </span>
                    <span>100% Client Intellectual Property Transfer</span>
                  </div>
                  <p>
                    Upon full and final payment of all agreed project milestone invoices, Quinn Daisies assigns
                    and transfers to Client <strong>100% exclusive ownership</strong> of all custom source code,
                    compiled binaries, database schemas, UI designs, and digital assets created under the Statement of Work.
                  </p>
                  <p style={{ marginTop: "8px" }}>
                    Client retains full freedom to commercialize, license, deploy, modify, or patent all custom software deliverables without ongoing royalties or vendor lock-in.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="payments" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">07</span>
                  Payment Terms, Letters of Credit & Currency
                </h2>
                <p>
                  Commercial settlement terms are structured to eliminate counterparty default risks:
                </p>
                <ul>
                  <li>
                    <strong>Currency:</strong> All commercial contracts, invoices, and quotations are indexed and
                    payable in United States Dollars (USD) unless explicitly agreed in writing.
                  </li>
                  <li>
                    <strong>Letters of Credit (LC):</strong> Commodity sourcing and high-volume freight agreements
                    routinely utilize irrevocable, confirmed Letters of Credit issued by top-tier international financial
                    institutions, payable against original shipping documents.
                  </li>
                  <li>
                    <strong>Late Payment Penalties:</strong> Undisputed invoices unpaid after thirty (30) calendar days
                    accrue interest at 1.5% per month or the maximum rate permissible by Maryland law.
                  </li>
                </ul>
              </section>

              {/* Section 8 */}
              <section id="liability" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">08</span>
                  Maritime Risk & Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by applicable maritime and commercial law:
                </p>
                <ul>
                  <li>
                    <strong>Carriage of Goods by Sea Act (COGSA):</strong> Ocean carriage is subject to the provisions
                    of the U.S. Carriage of Goods by Sea Act (46 U.S.C. § 30701 note), limiting ocean carrier liability
                    to $500 per customary freight unit unless higher value is declared in advance.
                  </li>
                  <li>
                    <strong>Aviation Limits:</strong> Air cargo is subject to liability limits established under the
                    Montreal Convention (1999) or Warsaw Convention as applicable.
                  </li>
                  <li>
                    <strong>Consequential Damages Waiver:</strong> Under no circumstances shall Quinn Daisies be liable
                    for indirect, incidental, punitive, or consequential damages, including loss of anticipated profit,
                    production line downtime, or market spoilage, regardless of whether advised of the possibility of such damages.
                  </li>
                  <li>
                    <strong>Force Majeure:</strong> Neither party is liable for failure or delay resulting from acts of God,
                    war, armed conflict, maritime blockades, port strikes, tropical storms, export embargoes, or sovereign regulatory freezes.
                  </li>
                </ul>
              </section>

              {/* Section 9 */}
              <section id="indemnity" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">09</span>
                  Mutual Indemnification
                </h2>
                <p>
                  Client agrees to defend, indemnify, and hold harmless Quinn Daisies, its directors, officers,
                  employees, and port agents against any claims, fines, liabilities, or losses arising from:
                </p>
                <ul>
                  <li>Inaccurate or fraudulent declarations of cargo contents, weights, or values provided by Client.</li>
                  <li>Breach of foreign exchange, anti-money laundering, or sanctions regulations by Client.</li>
                  <li>Infringement of third-party intellectual property rights resulting from materials provided by Client for software development.</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section id="disputes" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">10</span>
                  Governing Law & Binding Arbitration
                </h2>
                <p>
                  This Agreement, and all disputes arising from or relating to transatlantic logistics,
                  sourcing, or technology engagements with Quinn Daisies, shall be governed exclusively by the
                  substantive laws of the <strong>State of Maryland, United States</strong>, without regard
                  to conflict of law principles.
                </p>
                <div className="LegalCallout">
                  <div className="LegalCalloutTitle">
                    <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>
                      balance
                    </span>
                    <span>Arbitration Protocol</span>
                  </div>
                  <p>
                    Any dispute, controversy, or claim that cannot be resolved amicably within forty-five (45)
                    days of written notice shall be submitted to binding arbitration administered by the
                    <strong> American Arbitration Association (AAA)</strong> in accordance with its Commercial
                    Arbitration Rules. The seat and venue of arbitration shall be Baltimore, Maryland, and proceedings
                    shall be conducted in the English language.
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="notices" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">11</span>
                  Corporate Legal Notices
                </h2>
                <p>
                  Official legal notices, formal summons, or contractual correspondence must be delivered
                  by registered mail or confirmed electronic transmission to:
                </p>
                <div className="LegalContactBox">
                  <h4 className="LegalContactBoxTitle">
                    Quinn Daisies Logistics LLC — Legal & Governance Directorate
                  </h4>
                  <p className="LegalContactBoxText">
                    1915 Wetterhorn Ct, Frederick County, Maryland 21702, United States
                  </p>
                  <p className="LegalContactBoxText">
                    Corporate Counsel: <a href="mailto:legal@quinndaisies.com">legal@quinndaisies.com</a>
                  </p>
                  <p className="LegalContactBoxText">
                    Executive Operations Desk: <a href="tel:+12404055942">+1 (240) 405-5942</a>
                  </p>
                </div>
              </section>
            </main>
          </div>
        </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
