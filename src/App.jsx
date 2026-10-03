import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Contact from "./pages/Contact";
import ServicePage from "./pages/Service";
import Resources from "./pages/Resources";
import Corporate from "./pages/Corporate";
import Login from "./pages/authentication/Login";
import { HelmetProvider } from "react-helmet-async";
import Signup from "./pages/authentication/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mission from "./pages/Mission";
import GlobalCapabilities from "./pages/Global";
import ComplianceSafety from "./pages/Compliance";
import NorthAmerica from "./pages/NorthAmerica";
import Europe from "./pages/Europe";
import Asia from "./pages/Asia";
import MiddleEast from "./pages/MiddleEast";
import DirectSales from "./pages/DirectSales";
import DistributionPartnerships from "./pages/DistributionPartnerships";
import OnlinePresenceEcommerce from "./pages/OnlinePresenceEcommerce";
import EventExpoParticipation from "./pages/EventExpoParticipation";
import LogisticsSupplyChain from "./pages/LogisticsSupplyChain";
import TradeInvestmentFacilitation from "./pages/TradeInvestmentFacilitation";
import MarketExpansionSupport from "./pages/MarketExpansionSupport";
import TradeDataInsights from "./pages/TradeDataInsights";
import Sustainability from "./pages/Sustainability";
import Community from "./pages/Community";
import CommoditiesSupply from "./pages/CommoditiesSupply";
import TechnologyVisibility from "./pages/TechnologyVisibility";
import Careers from "./pages/Careers";
import PartnerWithUs from "./pages/PartnerWithUs";
import Insights from "./pages/Insights";
import LegalPrivacy from "./pages/LegalPrivacy";
import TermsOfUse from "./pages/TermsOfUse";
import LegalCookie from "./pages/LegalCookie";

export default function App() {
  return (
    <div>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/asia" element={<Asia />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/europe" element={<Europe />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/get-a-quote" element={<Quote />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/direct-sales" element={<DirectSales />} />
            <Route path="/north-america" element={<NorthAmerica />} />
            <Route path="/corporate-overview" element={<Corporate />} />
            <Route path="/our-mission-and-vision" element={<Mission />} />
            <Route path="/middle-east-and-africa" element={<MiddleEast />} />
            <Route path="/global-capabilities" element={<GlobalCapabilities />} />
            <Route path="/compliance-and-safety" element={<ComplianceSafety />} />
            <Route path="/online-presence-ecommerce" element={<OnlinePresenceEcommerce />} />
            <Route path="/distribution-partnerships" element={<DistributionPartnerships />} />
            <Route path="/event-and-expo-participation" element={<EventExpoParticipation />} />
            <Route path="/logistics-and-supply-chain" element={<LogisticsSupplyChain />} />
            <Route path="/trade-and-investment-facilitation" element={<TradeInvestmentFacilitation />} />
            <Route path="/market-expansion-support" element={<MarketExpansionSupport />} />
            <Route path="/trade-data-and-insights" element={<TradeDataInsights />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/community" element={<Community />} />
            <Route path="/commodities-and-supply" element={<CommoditiesSupply />} />
            <Route path="/technology-and-visibility" element={<TechnologyVisibility />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/privacy-policy" element={<LegalPrivacy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/cookie-policy" element={<LegalCookie />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}
