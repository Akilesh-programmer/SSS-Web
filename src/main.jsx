import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppointmentProvider } from "./contexts/AppointmentContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
import App from "./App.jsx";

// Register service worker for caching and offline support
if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        // If there's a waiting SW, tell it to activate
        if (registration.waiting) {
          registration.waiting.postMessage({ type: "SKIP_WAITING" });
        }
        // Listen for updates
        registration.addEventListener("updatefound", () => {
          const newSW = registration.installing;
          if (newSW) {
            newSW.addEventListener("statechange", () => {
              if (newSW.state === "installed" && registration.waiting) {
                registration.waiting.postMessage({ type: "SKIP_WAITING" });
              }
            });
          }
        });
      })
      .catch(() => {
        // Silent failure
      });

    // Reload when controller changes (new SW taking control)
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      // Force refresh to get latest inline global CSS & layout fixes
      window.location.reload();
    });

    // Listen for version messages (optional logging)
    navigator.serviceWorker.addEventListener("message", (event) => {
      if (event.data?.type === "SW_VERSION") {
        // console.info("SW active version:", event.data.version);
      }
    });
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    </BrowserRouter>
    <Analytics />
    <SpeedInsights />
  </StrictMode>
);
