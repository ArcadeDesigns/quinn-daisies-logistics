import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./App.css";

import TechnologyLayout from "./layouts/TechnologyLayout";
import TechnologyVisibility from "./pages/TechnologyVisibility";
import SoftwareDevelopmentEngineering from "./pages/SoftwareDevelopmentEngineering";
import SeoDigitalMarketing from "./pages/SeoDigitalMarketing";
import AiApplicationDevelopment from "./pages/AiApplicationDevelopment";
import WorkforceDevelopmentItSupport from "./pages/WorkforceDevelopmentItSupport";
import ContractProcurementWriting from "./pages/ContractProcurementWriting";
import TechnologyCorporateReview from "./pages/TechnologyCorporateReview";
import ArtificialIntelligencePage from "./pages/ArtificialIntelligencePage";
import ApplicationDevelopmentPage from "./pages/ApplicationDevelopmentPage";
import MobileApplicationPage from "./pages/MobileApplicationPage";
import DesktopDevelopmentPage from "./pages/DesktopDevelopmentPage";
import WorkforceDevelopmentTrainingPage from "./pages/WorkforceDevelopmentTrainingPage";
import ItSolutionsPage from "./pages/ItSolutionsPage";
import SeoAndGeoPage from "./pages/SeoAndGeoPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import TechnologyProgramsPage from "./pages/TechnologyProgramsPage";
import TechnologyProductsPage from "./pages/TechnologyProductsPage";
import TechnologyAboutUsPage from "./pages/TechnologyAboutUsPage";
import TechnologyContactUsPage from "./pages/TechnologyContactUsPage";
import TechLegalPage from "./pages/TechLegalPage";
import TechNoPage from "./pages/TechNoPage";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          <Route element={<TechnologyLayout />}>

            <Route index element={<TechnologyVisibility />} />
            <Route path="/" element={<TechnologyVisibility />} />
            <Route path="/home" element={<TechnologyVisibility />} />
            <Route path="/technology-and-visibility" element={<TechnologyVisibility />} />

            <Route path="/contract-procurement-and-writing" element={<ContractProcurementWriting />} />

            <Route path="/technology-corporate-review" element={<TechnologyCorporateReview />} />

            <Route path="/software-development-and-engineering" element={<SoftwareDevelopmentEngineering />} />
            <Route path="/artificial-intelligence" element={<ArtificialIntelligencePage />} />
            <Route path="/ai-and-application-development" element={<AiApplicationDevelopment />} />
            <Route path="/ai-application-development" element={<AiApplicationDevelopment />} />
            <Route path="/application-development" element={<ApplicationDevelopmentPage />} />
            <Route path="/mobile-application-development" element={<MobileApplicationPage />} />
            <Route path="/desktop-application-development" element={<DesktopDevelopmentPage />} />
            <Route path="/desktop-development" element={<DesktopDevelopmentPage />} />

            <Route path="/workforce-development-and-training" element={<WorkforceDevelopmentTrainingPage />} />
            <Route path="/workforce-development-and-it-support" element={<WorkforceDevelopmentItSupport />} />
            <Route path="/it-solutions" element={<ItSolutionsPage />} />

            <Route path="/seo-and-geo" element={<SeoAndGeoPage />} />
            <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
            <Route path="/seo-and-digital-marketing" element={<SeoDigitalMarketing />} />

            <Route path="/technology-programs" element={<TechnologyProgramsPage />} />
            <Route path="/programs" element={<TechnologyProgramsPage />} />
            <Route path="/technology-products" element={<TechnologyProductsPage />} />
            <Route path="/products" element={<TechnologyProductsPage />} />
            <Route path="/technology-about-us" element={<TechnologyAboutUsPage />} />
            <Route path="/about-us" element={<TechnologyAboutUsPage />} />
            <Route path="/technology-contact-us" element={<TechnologyContactUsPage />} />
            <Route path="/contact-us" element={<TechnologyContactUsPage />} />
            <Route path="/contact" element={<TechnologyContactUsPage />} />

            <Route path="/terms-of-use" element={<TechLegalPage type="terms" />} />
            <Route path="/terms-of-service" element={<TechLegalPage type="terms" />} />
            <Route path="/privacy-policy" element={<TechLegalPage type="privacy" />} />
            <Route path="/cookie-policy" element={<TechLegalPage type="cookie" />} />

            <Route path="*" element={<TechNoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
