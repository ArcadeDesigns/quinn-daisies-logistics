import React, { useRef } from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  useSmoothScroll();
  const pageRef = useRef(null);

  const sections = [
    { id: "scope", title: "1. Corporate Scope & Controller" },
    { id: "collection", title: "2. Information We Collect" },
    { id: "legal-basis", title: "3. Legal Bases for Processing" },
    { id: "use-of-data", title: "4. How We Utilize Your Data" },
    { id: "cross-border", title: "5. Cross-Border Data Transfers" },
    { id: "security", title: "6. Cryptographic Security Standards" },
    { id: "retention", title: "7. Data Retention & Archival" },
    { id: "rights", title: "8. Statutory Privacy Rights" },
    { id: "subprocessors", title: "9. Third-Party Subprocessors" },
    { id: "cookies", title: "10. Cookies & Telemetry" },
    { id: "contact", title: "11. Data Protection Officer" },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy | Quinn Daisies Logistics LLC"
        description="Comprehensive enterprise privacy policy governing data protection, cross-border trade telemetry, GDPR, CCPA, and NDPR compliance for Quinn Daisies Logistics."
        keywords="privacy policy, data protection, GDPR compliance, NDPR compliance, CCPA CPRA privacy, logistics data protection, cross-border data transfer"
        url="https://www.logistics.quinndaisies.com/privacy-policy"
      />

      <div ref={pageRef}>
        <Navbar />

        {/* HERO SECTION */}
        <section className="LegalPageHero">
          <div className="LegalBadge">
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              verified_user
            </span>
            <span>Enterprise Data Governance</span>
          </div>
          <h1>Privacy Policy & Data Protection</h1>
          <p className="LegalPageHeroSubtitle">
            How Quinn Daisies Logistics LLC collects, protects, processes, and respects
            commercial, institutional, and personal data across transatlantic trade corridors.
          </p>
          <div className="LegalMetaRow">
            <div className="LegalMetaItem">
              <span className="material-symbols-outlined">calendar_today</span>
              <span>Effective: January 1, 2026</span>
            </div>
            <div className="LegalMetaItem">
              <span className="material-symbols-outlined">update</span>
              <span>Last Revised: October 3, 2026</span>
            </div>
            <div className="LegalMetaItem">
              <span className="material-symbols-outlined">gavel</span>
              <span>Governing Law: State of Maryland, USA</span>
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
                    <a href={`#${sec.id}`}>{sec.title}</a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Legal Content Stream */}
            <main className="LegalMainContent">
              {/* Section 1 */}
              <section id="scope" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">01</span>
                  Corporate Scope & Data Controller
                </h2>
                <p>
                  This Privacy Policy applies to <strong>Quinn Daisies Logistics LLC</strong>, a
                  corporation organized under the laws of the State of Maryland, United States,
                  and its authorized operational affiliates, subsidiaries, and bilateral joint
                  ventures (collectively, <em>"Quinn Daisies"</em>, <em>"we"</em>, <em>"us"</em>,
                  or <em>"our"</em>).
                </p>
                <p>
                  Quinn Daisies operates transatlantic logistics, air freight forwarding, maritime
                  container staging, agricultural commodity origin sourcing, and custom software
                  engineering services. In accordance with applicable global data privacy regulations—including
                  the European Union General Data Protection Regulation (GDPR 2016/679), the California
                  Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA/CPRA),
                  and the Nigeria Data Protection Act (NDPA)—Quinn Daisies acts as the primary
                  <strong> Data Controller</strong> for personal and commercial data collected through
                  this website (<a href="https://www.logistics.quinndaisies.com">www.logistics.quinndaisies.com</a>), our client
                  portals, trade telemetry APIs, and bilateral operational desks.
                </p>
                <div className="LegalCallout">
                  <div className="LegalCalloutTitle">
                    <span className="material-symbols-outlined" style={{ color: "#16a34a" }}>
                      shield
                    </span>
                    <span>Statutory Commitment</span>
                  </div>
                  <p>
                    We never monetize, broker, or sell personal data or proprietary commercial
                    consignment records to third-party advertising brokers under any circumstances.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="collection" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">02</span>
                  Information We Collect
                </h2>
                <p>
                  Depending on your interaction with Quinn Daisies, we collect and process several
                  distinct categories of data necessary to provide reliable cross-border logistics
                  and enterprise software services:
                </p>
                <h3>A. Commercial & Consignment Data</h3>
                <ul>
                  <li>
                    <strong>Consignment Details:</strong> Bills of Lading, airway bills (AWB), packing lists,
                    commercial invoices, certificates of origin, and laboratory assay reports.
                  </li>
                  <li>
                    <strong>Corporate Identifiers:</strong> Legal entity names, Employer Identification Numbers
                    (EIN), VAT/TIN numbers, registered physical business addresses, and authorized corporate signatories.
                  </li>
                  <li>
                    <strong>Origin & Farmgate Telemetry:</strong> EUDR GPS polygon coordinates, smallholder
                    cooperative farm registers, and agricultural harvest date logs.
                  </li>
                </ul>
                <h3>B. Personal & Contact Identifiers</h3>
                <ul>
                  <li>
                    <strong>Client Representative Information:</strong> Full names, executive titles, corporate email
                    addresses, direct telephone numbers, and time zone preferences.
                  </li>
                  <li>
                    <strong>Billing & Settlement Telemetry:</strong> Bank account routing numbers, wire transfer
                    remittance confirmations, Letter of Credit (LC) reference codes, and billing postal addresses.
                  </li>
                </ul>
                <h3>C. Automated Device & Technical Metadata</h3>
                <ul>
                  <li>
                    <strong>Network Information:</strong> Internet Protocol (IP) address, browser client architecture,
                    operating system version, referring URLs, and network latency logs.
                  </li>
                  <li>
                    <strong>Interaction Metrics:</strong> Page response times, session durations, download errors,
                    and API request tokens.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="legal-basis" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">03</span>
                  Legal Bases for Data Processing
                </h2>
                <p>
                  Under European and international data protection statutes, we only process personal
                  data where a lawful legal basis exists:
                </p>
                <ul>
                  <li>
                    <strong>Contractual Performance (GDPR Art. 6(1)(b)):</strong> To execute formal freight
                    forwarding agreements, origin sourcing contracts, software development statements of work (SOW),
                    and commercial quotations requested by you.
                  </li>
                  <li>
                    <strong>Legal & Regulatory Obligations (GDPR Art. 6(1)(c)):</strong> To comply with mandatory U.S.
                    Customs and Border Protection (CBP) regulations, European Union Deforestation Regulation (EUDR) filings,
                    international maritime anti-money laundering (AML) protocols, and tax withholding mandates.
                  </li>
                  <li>
                    <strong>Legitimate Commercial Interests (GDPR Art. 6(1)(f)):</strong> To secure our digital
                    infrastructure against cyberattacks, detect freight fraud, prevent cargo theft, and optimize transatlantic transit lanes.
                  </li>
                  <li>
                    <strong>Consent (GDPR Art. 6(1)(a)):</strong> For non-essential analytics cookies, optional
                    industry newsletter subscriptions, and marketing webinars. Consent may be revoked at any time.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section id="use-of-data" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">04</span>
                  How We Utilize Your Data
                </h2>
                <p>
                  All captured data is strictly segregated and applied to institutional operations:
                </p>
                <ul>
                  <li>
                    <strong>Freight Execution & Telemetry:</strong> Generating Automated Export System (AES) filings,
                    securing ocean container slot allocations, and routing NACHO MMIA air cargo manifests.
                  </li>
                  <li>
                    <strong>Quality & Regulatory Assays:</strong> Verifying agricultural commodity batches against
                    phytosanitary, EUDR deforestation, and SGS/Cotecna pre-shipment benchmarks.
                  </li>
                  <li>
                    <strong>Software & AI Engineering Delivery:</strong> Provisioning development environments,
                    managing continuous integration pipelines, and training proprietary client algorithms under strict confidentiality.
                  </li>
                  <li>
                    <strong>Dispute Resolution & Contract Recourse:</strong> Enforcing bilateral commercial agreements
                    under the jurisdiction of the State of Maryland, United States.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="cross-border" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">05</span>
                  Cross-Border Data Transfers
                </h2>
                <p>
                  Because Quinn Daisies orchestrates transatlantic trade between North America,
                  West Africa, Europe, and Asia, your data is routinely transferred across international
                  borders. Data processed in the European Union or United Kingdom is transferred to our
                  centralized operations in the United States and Nigeria under strict legal transfer
                  mechanisms:
                </p>
                <ul>
                  <li>
                    <strong>Standard Contractual Clauses (SCCs):</strong> We execute the European Commission's approved
                    Standard Contractual Clauses with all operating subsidiaries, port staging facilities, and technology subprocessors.
                  </li>
                  <li>
                    <strong>Supplementary Security Measures:</strong> All cross-border database replications are
                    enforced with end-to-end transport layer encryption (TLS 1.3) and encrypted at rest with AES-256 keys.
                  </li>
                </ul>
              </section>

              {/* Section 6 */}
              <section id="security" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">06</span>
                  Cryptographic Security Standards
                </h2>
                <p>
                  Quinn Daisies maintains defense-in-depth technical and organizational security controls
                  aligned with NIST SP 800-53 and ISO/IEC 27001 standards:
                </p>
                <div className="LegalCallout gold">
                  <div className="LegalCalloutTitle">
                    <span className="material-symbols-outlined" style={{ color: "#e28a34" }}>
                      lock
                    </span>
                    <span>Security Safeguards</span>
                  </div>
                  <p>
                    <strong>Encryption:</strong> AES-256 encryption at rest for all database volumes, S3-compatible
                    object stores, and backup archives. TLS 1.3 encryption for all data in transit across public networks.
                  </p>
                  <p style={{ marginTop: "8px" }}>
                    <strong>Access Governance:</strong> Multi-Factor Authentication (MFA) and Least-Privilege Role-Based
                    Access Controls (RBAC) enforced across all internal production systems.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="retention" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">07</span>
                  Data Retention & Archival
                </h2>
                <p>
                  We retain personal and commercial consignment data only for the duration necessary
                  to satisfy operational, contractual, and statutory requirements:
                </p>
                <ul>
                  <li>
                    <strong>Customs & Maritime Documentation:</strong> Retained for a minimum of seven (7) years to
                    satisfy U.S. Department of the Treasury, CBP, and Nigerian Customs statutory audit rules.
                  </li>
                  <li>
                    <strong>Software Project Source Code & Assets:</strong> Transferred in full to client custody upon
                    final invoice settlement; internal development staging copies deleted within ninety (90) days unless an active SLA is maintained.
                  </li>
                  <li>
                    <strong>General Inquiries & Marketing Leads:</strong> Retained for twenty-four (24) months, after
                    which records are permanently purged or anonymized.
                  </li>
                </ul>
              </section>

              {/* Section 8 */}
              <section id="rights" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">08</span>
                  Statutory Privacy Rights
                </h2>
                <p>
                  Subject to statutory exemptions (such as mandatory customs retention laws), you hold
                  the following rights regarding your personal information:
                </p>
                <ul>
                  <li>
                    <strong>Right of Access & Portability:</strong> Request a copy of your personal data in a structured,
                    machine-readable JSON or CSV format.
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request prompt correction of inaccurate or incomplete corporate or personal records.
                  </li>
                  <li>
                    <strong>Right to Erasure ("Right to be Forgotten"):</strong> Request permanent deletion of your personal
                    records when no longer required for statutory or contractual performance.
                  </li>
                  <li>
                    <strong>Right to Object & Restrict Processing:</strong> Object to processing predicated on legitimate
                    interests or direct commercial communications.
                  </li>
                  <li>
                    <strong>Non-Discrimination:</strong> We will never deny services, charge disparate rates, or provide
                    inferior service quality because you exercised statutory privacy rights.
                  </li>
                </ul>
                <p>
                  To exercise any of these rights, transmit a verified written request to our Data Protection
                  Office at <a href="mailto:dpo@quinndaisies.com">dpo@quinndaisies.com</a>. We respond to all
                  verified requests within thirty (30) calendar days.
                </p>
              </section>

              {/* Section 9 */}
              <section id="subprocessors" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">09</span>
                  Third-Party Subprocessors
                </h2>
                <p>
                  To deliver seamless transatlantic execution, Quinn Daisies shares specific data
                  subsets with audited third-party service providers bound by strict confidentiality
                  and data processing agreements:
                </p>
                <div className="LegalTableWrap">
                  <table className="LegalTable">
                    <thead>
                      <tr>
                        <th>Subprocessor Category</th>
                        <th>Purpose of Disclosure</th>
                        <th>Jurisdiction</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>Maritime & Air Carriers</strong></td>
                        <td>Cargo booking, vessel slot allocation, AWB issuance</td>
                        <td>Global / Regional</td>
                      </tr>
                      <tr>
                        <td><strong>Licensed Customs Brokers</strong></td>
                        <td>Customs clearance, duty settlement, phytosanitary filings</td>
                        <td>USA, Nigeria, EU</td>
                      </tr>
                      <tr>
                        <td><strong>Cloud Infrastructure (AWS/GCP)</strong></td>
                        <td>Encrypted database hosting, API execution, cloud storage</td>
                        <td>USA (SOC2 Type II)</td>
                      </tr>
                      <tr>
                        <td><strong>Accredited Testing Labs</strong></td>
                        <td>SGS / Cotecna pre-shipment quality and chemical assays</td>
                        <td>Nigeria / International</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 10 */}
              <section id="cookies" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">10</span>
                  Cookies & Web Telemetry
                </h2>
                <p>
                  We utilize cookies, local storage tokens, and web beacons to ensure platform
                  security, authenticate authenticated client portal sessions, and analyze traffic
                  patterns. For comprehensive details regarding cookie categories, specific lifetimes,
                  and instructions on configuring your browser settings, review our dedicated{" "}
                  <Link to="/cookie-policy" style={{ color: "#e28a34", fontWeight: 700 }}>
                    Cookie Policy
                  </Link>.
                </p>
              </section>

              {/* Section 11 */}
              <section id="contact" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">11</span>
                  Data Protection Officer & Inquiries
                </h2>
                <p>
                  For inquiries, statutory rights requests, or concerns regarding our privacy and data
                  protection governance, please contact our designated Data Protection Officer:
                </p>
                <div style={{ background: "#faf9f6", padding: "24px", borderRadius: "16px", border: "1px solid #e5e0d8" }}>
                  <p style={{ margin: "0 0 6px 0", fontWeight: 800, color: "#111613" }}>
                    Office of the Data Protection Officer (DPO)
                  </p>
                  <p style={{ margin: "0 0 4px 0" }}>Quinn Daisies Logistics LLC</p>
                  <p style={{ margin: "0 0 4px 0" }}>1915 Wetterhorn Ct, Frederick County, Maryland 21702, United States</p>
                  <p style={{ margin: "0 0 4px 0" }}>
                    Official Email: <a href="mailto:dpo@quinndaisies.com" style={{ color: "#e28a34", fontWeight: 600 }}>dpo@quinndaisies.com</a>
                  </p>
                  <p style={{ margin: "0" }}>
                    Executive Operations Desk: <a href="tel:+12404055942" style={{ color: "#e28a34", fontWeight: 600 }}>+1 (240) 405-5942</a>
                  </p>
                </div>
              </section>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
