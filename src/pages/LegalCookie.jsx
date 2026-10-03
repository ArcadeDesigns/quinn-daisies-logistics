import React, { useRef } from "react";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { Link } from "react-router-dom";

export default function CookiePolicy() {
  useSmoothScroll();
  const pageRef = useRef(null);

  const sections = [
    { id: "what-are-cookies", title: "1. What Are Cookies" },
    { id: "categories", title: "2. Cookie Categories We Use" },
    { id: "inventory", title: "3. Detailed Cookie Inventory" },
    { id: "analytics", title: "4. Analytics & Telemetry" },
    { id: "control", title: "5. Managing Cookie Preferences" },
    { id: "updates", title: "6. Policy Updates & Modifications" },
    { id: "contact", title: "7. Contact Our Privacy Team" },
  ];

  return (
    <>
      <SEO
        title="Cookie Policy & Tracking Technologies | Quinn Daisies Logistics"
        description="Learn how Quinn Daisies Logistics utilizes essential cookies, analytics, and telemetry to secure trade portals and optimize user experience."
        keywords="cookie policy, tracking technologies, browser cookies, web telemetry, analytics cookies, session storage, privacy preferences"
        url="https://www.logistics.quinndaisies.com/cookie-policy"
      />

      <div ref={pageRef}>
        <Navbar />

        {/* HERO SECTION */}
        <section className="LegalPageHero">
          <div className="LegalBadge">
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
              cookie
            </span>
            <span>Transparent Web Telemetry</span>
          </div>
          <h1>Cookie Policy & Tracking Technologies</h1>
          <p className="LegalPageHeroSubtitle">
            Transparency regarding how Quinn Daisies Logistics LLC deploys cookies,
            local storage tokens, and web beacons across our commercial portals.
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
              <span className="material-symbols-outlined">security</span>
              <span>GDPR (ePrivacy) & CCPA Compliant</span>
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
              <section id="what-are-cookies" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">01</span>
                  What Are Cookies & Tracking Technologies?
                </h2>
                <p>
                  Cookies are compact alphanumeric text files stored on your computer, tablet, or
                  mobile device by your web browser when visiting websites. They enable digital platforms
                  to recognize your browser session, maintain secure authenticated states, remember
                  customs portal preferences, and deliver responsive page interactions.
                </p>
                <p>
                  In addition to traditional HTTP cookies, <strong>Quinn Daisies Logistics LLC</strong>{" "}
                  (<em>"Quinn Daisies"</em>, <em>"we"</em>, <em>"us"</em>) may utilize related web
                  telemetry technologies including HTML5 local storage, session storage, and cryptographic
                  API authorization tokens. We deploy these technologies strictly to facilitate seamless
                  cross-border logistics execution and secure platform operation.
                </p>
              </section>

              {/* Section 2 */}
              <section id="categories" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">02</span>
                  Cookie Categories We Use
                </h2>
                <p>
                  We categorize the cookies utilized across our digital properties into four distinct
                  functional classifications:
                </p>
                <h3>A. Strictly Necessary & Security Cookies (Always Active)</h3>
                <p>
                  These cookies are vital for the platform to function and cannot be disabled in our
                  systems. They are established in response to actions performed by you, such as
                  logging into secure client consignment dashboards, setting privacy preferences,
                  or submitting quote inquiries. They carry no personally identifiable information
                  used for behavioral advertising.
                </p>
                <h3>B. Performance & Analytics Cookies</h3>
                <p>
                  These cookies allow us to count page visits, evaluate traffic origin corridors,
                  and analyze load performance. They help us identify which trade route pages are
                  most engaging and monitor for API latency bottlenecks. All aggregated metrics are
                  anonymized.
                </p>
                <h3>C. Functional & Preference Cookies</h3>
                <p>
                  These cookies enable enhanced website functionality and personalization, such
                  as remembering selected shipping weight metrics (Metric Tons vs. Pounds), language
                  settings, and preferred regional portal views (North America vs. West Africa).
                </p>
                <h3>D. Security & Anti-Fraud Telemetry</h3>
                <p>
                  Cryptographic tokens used by edge firewalls (such as Cloudflare) to detect automated
                  bots, mitigate distributed denial-of-service (DDoS) threats, and protect commercial
                  transaction data from unauthorized tampering.
                </p>
              </section>

              {/* Section 3 */}
              <section id="inventory" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">03</span>
                  Detailed Cookie Inventory
                </h2>
                <p>
                  The following table details the primary cookies deployed on our platform:
                </p>
                <div className="LegalTableWrap">
                  <table className="LegalTable">
                    <thead>
                      <tr>
                        <th>Cookie Identifier</th>
                        <th>Provider</th>
                        <th>Purpose</th>
                        <th>Lifespan</th>
                        <th>Classification</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>__cf_bm</code></td>
                        <td>Cloudflare</td>
                        <td>Bot management, DDoS protection, edge security verification</td>
                        <td>30 minutes</td>
                        <td>Strictly Necessary</td>
                      </tr>
                      <tr>
                        <td><code>qd_session_token</code></td>
                        <td>Quinn Daisies</td>
                        <td>Secure token for authenticated client portal & freight tracking</td>
                        <td>Session</td>
                        <td>Strictly Necessary</td>
                      </tr>
                      <tr>
                        <td><code>qd_cookie_consent</code></td>
                        <td>Quinn Daisies</td>
                        <td>Records user preference regarding optional analytics cookies</td>
                        <td>12 months</td>
                        <td>Functional</td>
                      </tr>
                      <tr>
                        <td><code>_ga</code>, <code>_ga_*</code></td>
                        <td>Google Analytics</td>
                        <td>Aggregated traffic analytics and page interaction measurement</td>
                        <td>24 months</td>
                        <td>Analytics (Optional)</td>
                      </tr>
                      <tr>
                        <td><code>preferred_corridor</code></td>
                        <td>Quinn Daisies</td>
                        <td>Remembers regional trade corridor selection (US/NG/EU)</td>
                        <td>6 months</td>
                        <td>Functional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4 */}
              <section id="analytics" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">04</span>
                  Analytics & Telemetry Standards
                </h2>
                <p>
                  We utilize privacy-centric configurations for all analytics tooling:
                </p>
                <ul>
                  <li>
                    <strong>IP Masking & Anonymization:</strong> IP addresses processed through Google Analytics
                    are automatically truncated before storage, ensuring individual user locations cannot be resolved.
                  </li>
                  <li>
                    <strong>No Ad-Network Remarketing:</strong> We do not deploy third-party advertising retargeting pixels
                    (such as Meta Pixel or Google Ads Remarketing) on our commercial trade portal.
                  </li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="control" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">05</span>
                  Managing Cookie Preferences
                </h2>
                <p>
                  You have full autonomy to control and manage how cookies are deployed on your browser:
                </p>
                <div className="LegalCallout gold">
                  <div className="LegalCalloutTitle">
                    <span className="material-symbols-outlined" style={{ color: "#e28a34" }}>
                      settings
                    </span>
                    <span>Browser Level Configuration</span>
                  </div>
                  <p>
                    Most web browsers permit you to reject or erase cookies through browser settings.
                    Please consult the official documentation for your browser:
                  </p>
                  <ul style={{ marginTop: "10px", marginBottom: "0" }}>
                    <li><strong>Google Chrome:</strong> Settings &gt; Privacy & Security &gt; Cookies and other site data</li>
                    <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy & Security &gt; Cookies and Site Data</li>
                    <li><strong>Apple Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                    <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions</li>
                  </ul>
                </div>
                <p style={{ marginTop: "16px" }}>
                  <em>Note:</em> Disabling strictly necessary cookies may restrict access to secure
                  authenticated areas of our portal, such as real-time Bill of Lading downloads and quotation dashboards.
                </p>
              </section>

              {/* Section 6 */}
              <section id="updates" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">06</span>
                  Policy Updates & Modifications
                </h2>
                <p>
                  We may periodically revise this Cookie Policy to reflect changes in applicable legal
                  frameworks (such as ePrivacy Directive guidelines) or updates to our operational
                  infrastructure. The revised policy will be posted with an updated <em>"Last Revised"</em> date.
                </p>
              </section>

              {/* Section 7 */}
              <section id="contact" className="LegalSection">
                <h2>
                  <span className="LegalSectionNumber">07</span>
                  Contact Our Privacy Team
                </h2>
                <p>
                  If you have questions regarding our deployment of cookies or web telemetry, please
                  contact our compliance desk:
                </p>
                <div style={{ background: "#faf9f6", padding: "24px", borderRadius: "16px", border: "1px solid #e5e0d8" }}>
                  <p style={{ margin: "0 0 6px 0", fontWeight: 800, color: "#111613" }}>
                    Quinn Daisies Logistics LLC — Privacy & Digital Compliance
                  </p>
                  <p style={{ margin: "0 0 4px 0" }}>1915 Wetterhorn Ct, Frederick County, Maryland 21702, United States</p>
                  <p style={{ margin: "0 0 4px 0" }}>
                    Inquiries Email: <a href="mailto:privacy@quinndaisies.com" style={{ color: "#e28a34", fontWeight: 600 }}>privacy@quinndaisies.com</a>
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
