import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh for better development experience
      fastRefresh: true,
    }),
    tailwindcss(),
  ],

  // Optimize build output for images and performance
  build: {
    // Modern target for better performance
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],

    // Enable minification
    minify: "terser",

    // Terser options for maximum compression
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info",
          "console.debug",
          "console.warn",
        ],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },

    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Enhanced manual chunks for better caching
        manualChunks: {
          // Core React libraries
          "react-vendor": ["react", "react-dom"],

          // Animation libraries (keep separate for better caching)
          "animation-vendor": ["framer-motion", "gsap", "lottie-react"],

          // UI and routing libraries
          "ui-vendor": ["react-icons", "react-router-dom"],

          // Utility libraries
          "utils-vendor": [
            "react-countup",
            "react-simple-typewriter",
            "react-markdown",
            "remark-gfm",
          ],

          // Email and external services
          "services-vendor": ["@emailjs/browser", "emailjs-com"],

          // Carousel and interactive components
          "interactive-vendor": [
            "react-multi-carousel",
            "slick-carousel",
            "react-intersection-observer",
          ],
        },

        // Optimize file naming for better caching
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] || assetInfo.name || "";
          const info = fileName.split(".");
          const ext = info[info.length - 1];

          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/i.test(fileName)) {
            return `assets/images/[name]-[hash].${ext}`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(fileName)) {
            return `assets/fonts/[name]-[hash].${ext}`;
          }
          if (/\.(css)$/i.test(fileName)) {
            return `assets/css/[name]-[hash].${ext}`;
          }

          return `assets/[name]-[hash].${ext}`;
        },
      },

      // External dependencies (if needed)
      external: [],
    },

    // Asset optimization
    assetsInlineLimit: 4096, // 4KB - inline smaller assets
    chunkSizeWarningLimit: 1000, // 1MB warning threshold

    // Disable source maps for production builds
    sourcemap: false,

    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: true,

    // Report compressed gzip sizes
    reportCompressedSize: true,
  },

  // Optimize asset handling
  assetsInclude: ["**/*.avif", "**/*.webp", "**/*.mp4"],

  // Development server optimization
  server: {
    fs: {
      allow: [".."],
    },
    // Enable compression
    compress: true,
    // Optimize dev server
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },

  // Performance optimizations
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    // Target modern browsers for better performance
    target: "es2020",
  },

  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "react-icons",
    ],
    exclude: ["@vite/client", "@vite/env"],
  },

  // Define globals for better tree shaking
  define: {
    __DEV__: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
  },
});
