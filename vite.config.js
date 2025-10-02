import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Optimize build for better performance
  build: {
    rollupOptions: {
      output: {
        // Separate chunks for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          icons: ["react-icons"],
        },
      },
    },
    // Enable source maps for production debugging
    sourcemap: true,
  },

  // Public directory for static assets
  publicDir: "public",

  // Server configuration for development
  server: {
    // Enable file watching for assets
    watch: {
      usePolling: true,
    },
    // CORS for development
    cors: true,
  },

  // Asset handling optimization
  assetsInclude: ["**/*.pdf", "**/*.mp4", "**/*.avif"],
});
