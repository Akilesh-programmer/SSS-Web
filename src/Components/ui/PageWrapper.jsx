import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const PageWrapper = ({ children, pageKey }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Always scroll to top immediately when navigating
    window.scrollTo(0, 0);

    // Reset loading state on route change
    setIsLoaded(false);

    // Ensure page is loaded and animations are triggered
    const timer = setTimeout(() => {
      setIsLoaded(true);

      // Trigger resize to ensure animations work
      window.dispatchEvent(new Event("resize"));

  // Special handling for specialities page
  if (pageKey === "specialities-page") {
        // Force re-render and animations to display correctly
        document.querySelectorAll(".grid-optimized").forEach((el) => {
          el.style.opacity = "0.99";
          setTimeout(() => {
            el.style.opacity = "1";
          }, 10);
        });
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [location.pathname, pageKey]);

  // Show content immediately
  return (
    <ErrorBoundary>
      <div
        className={`transition-opacity duration-100 ${
          isLoaded ? "opacity-100" : "opacity-99"
        }`}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </div>
    </ErrorBoundary>
  );
};

export default PageWrapper;
