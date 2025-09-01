import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const PageWrapper = ({ children, pageKey }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset loading state on route change
    setIsLoaded(false);

    // Ensure page is loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, pageKey]);

  // Show content immediately but with smooth fade-in
  return (
    <ErrorBoundary>
      <div
        className={`transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-90"
        }`}
        style={{ minHeight: "100vh" }}
      >
        {children}
      </div>
    </ErrorBoundary>
  );
};

export default PageWrapper;
