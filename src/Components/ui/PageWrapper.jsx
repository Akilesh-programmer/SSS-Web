import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const PageWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <div style={{ minHeight: "100vh" }}>{children}</div>
    </ErrorBoundary>
  );
};

export default PageWrapper;
