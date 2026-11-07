import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: ".vite-root",
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react-router-dom",
      "react-helmet-async",
      "gsap",
      "gsap/all",
      "gsap/Flip",
      "gsap/MorphSVGPlugin",
      "gsap/ScrollSmoother",
      "gsap/ScrollTrigger",
      "gsap/SplitText",
      "@gsap/react",
      "scrollreveal",
      "@mui/material",
      "@emotion/react",
      "@emotion/styled",
      "framer-motion",
      "@motionone/utils",
      "firebase/app",
      "firebase/auth",
      "firebase/firestore",
    ],
  },
});
