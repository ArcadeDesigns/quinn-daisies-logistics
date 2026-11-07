import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  cacheDir: ".vite-technology",
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react-router-dom",
      "react-helmet-async",
      "gsap",
      "gsap/ScrollTrigger",
      "@gsap/react",
      "scrollreveal",
    ],
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom", "react-helmet-async"],
          "vendor-motion": ["gsap", "@gsap/react", "scrollreveal"],
        },
      },
    },
  },
});
