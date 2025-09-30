import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Optimize build output for images and performance
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "animation-vendor": ["framer-motion", "gsap"],
          "ui-vendor": ["react-icons"],
        },
      },
    },
    // Enable optimizations
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Image optimization settings
    assetsInlineLimit: 4096, // Inline small images as base64
    chunkSizeWarningLimit: 1000,
  },

  // Optimize asset handling
  assetsInclude: ["**/*.avif", "**/*.webp"],

  // Development server optimization
  server: {
    fs: {
      allow: [".."],
    },
  },

  // Performance optimizations
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
});
