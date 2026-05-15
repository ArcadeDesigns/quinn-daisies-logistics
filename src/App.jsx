import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import "./index.css";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import Quote from "./pages/Quote";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServicePage from "./pages/Service";
import Resources from "./pages/Resources";
import Login from "./pages/Login";

export default function App() {
  return (
    <div>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/get-a-quote" element={<Quote />} />
            <Route path="/quinn-daisies/about-us" element={<About />} />
            <Route path="/quinn-daisies/contact-us" element={<Contact />} />
            <Route path="/quinn-daisies/services" element={<ServicePage />} />
            <Route path="/quinn-daisies/resources" element={<Resources />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}
