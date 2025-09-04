import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly set scroll position to top without animation
    window.scrollTo(0, 0);

    // Force animations to render correctly after navigation
    if (pathname === "/services") {
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
        document.querySelectorAll(".grid-optimized").forEach((el) => {
          el.style.opacity = "0.99";
          setTimeout(() => (el.style.opacity = "1"), 5);
        });
      }, 5);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
