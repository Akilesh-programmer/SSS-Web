import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Optimize build for better performance
  build: {
    // Target modern browsers for smaller bundle
    target: "es2020",

    // Preload critical modules
    modulePreload: {
      polyfill: false, // Smaller bundle, modern browsers support it
    },

    // Optimize chunk size
    chunkSizeWarningLimit: 1000,

    // Minification options
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },

    rollupOptions: {
      // Optimize dependencies
      external: [],
      output: {
        // Warn if chunk exceeds 500KB
        experimentalMinChunkSize: 500000,
        // Optimized manual chunking strategy
        manualChunks: (id) => {
          // Vendor chunks
          if (id.includes("node_modules")) {
            // React ecosystem - critical, load first
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router")
            ) {
              return "react-vendor";
            }
            // Framer Motion - separate due to size, lazy load
            if (id.includes("framer-motion")) {
              return "animations";
            }
            // Icons - separate for better caching
            if (id.includes("react-icons")) {
              return "icons";
            }
            // Email service - lazy load
            if (id.includes("@emailjs")) {
              return "email";
            }
            // Markdown - lazy load
            if (id.includes("react-markdown") || id.includes("remark")) {
              return "markdown";
            }
            // Analytics - load async
            if (id.includes("@vercel")) {
              return "analytics";
            }
            // Other vendor code
            return "vendor";
          }

          // Critical UI components - load with main bundle
          if (
            id.includes("/src/Components/ui/Navigation") ||
            id.includes("/src/Components/ui/Footer") ||
            id.includes("/src/Components/ui/SEO")
          ) {
            return "critical-ui";
          }

          // Other UI components - can be chunked separately
          if (id.includes("/src/Components/ui/")) {
            return "ui-components";
          }

          // Home page components - load immediately
          if (
            id.includes("/src/Components/pages/Home") ||
            id.includes("/src/Components/sections/HomeAboutUs")
          ) {
            return "home-page";
          }

          // Department pages (lazy loaded)
          if (id.includes("/src/Components/pages/departments/")) {
            return "departments";
          }
        },

        // Optimize output file names for caching
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash].[ext]",
      },
    },

    // Enable source maps only for errors (smaller than full maps)
    sourcemap: false,

    // Report compressed size
    reportCompressedSize: true,

    // Optimize CSS delivery
    cssCodeSplit: true,

    // Inline small CSS files for faster initial render
    assetsInlineLimit: 4096, // Inline assets < 4kb
  },

  // Public directory for static assets
  publicDir: "public",

  // Asset handling optimization
  assetsInclude: ["**/*.pdf", "**/*.mp4", "**/*.avif"],

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "react-icons",
    ],
    exclude: ["@vercel/analytics", "@vercel/speed-insights"],
  },

  // Performance optimizations
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    legalComments: "none",
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
    // Drop console in production via esbuild too
    drop: import.meta.env?.PROD ? ["console", "debugger"] : [],
  },

  // Experimental features for better performance
  experimental: {
    renderBuiltUrl(filename) {
      // Use CDN or optimized URL structure if needed
      return "/" + filename;
    },
  },
});
