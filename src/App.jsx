import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./style/index.css";
import "./style/app.css";
import { HelmetProvider } from "react-helmet-async";
import Quote from "./pages/Quote";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicePage from "./pages/Service";

export default function App() {
  return (
    <div>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/get-a-quote" element={<Quote />} />
            <Route path="/about-quinn-daisies-logistics" element={<About />} />
            <Route path="/contact-quinn-daisies-logistics" element={<Contact />} />
            <Route path="/quinn-daisies-logistics-services" element={<ServicePage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}
