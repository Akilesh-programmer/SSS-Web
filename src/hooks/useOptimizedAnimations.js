import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Performance optimized hook for scroll animations with speed detection
export const useOptimizedInView = (options = {}) => {
  const ref = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const lastScrollY = useRef(0);
  const lastTimestamp = useRef(Date.now());

  // Detect scroll speed
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const currentTime = Date.now();
      const distance = Math.abs(currentY - lastScrollY.current);
      const time = currentTime - lastTimestamp.current;
      const speed = time > 0 ? distance / time : 0;

      setScrollSpeed(speed);
      lastScrollY.current = currentY;
      lastTimestamp.current = currentTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adjust animation duration based on scroll speed
  const isFastScrolling = scrollSpeed > 2; // Threshold for fast scrolling
  const animationDuration = isFastScrolling ? 0.3 : 0.8; // Faster animations during fast scroll

  const isInView = useInView(ref, {
    once: true, // Only animate once
    margin: isFastScrolling ? "-20px" : "-50px", // Earlier trigger during fast scroll
    amount: isFastScrolling ? 0.1 : 0.2, // Lower threshold during fast scroll
    ...options,
  });

  return { ref, isInView, isFastScrolling, animationDuration };
};

// Throttled scroll hook for performance
export const useScrollThrottle = (callback, delay = 16) => {
  const [isThrottled, setIsThrottled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isThrottled) {
        callback();
        setIsThrottled(true);
        setTimeout(() => setIsThrottled(false), delay);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, delay, isThrottled]);
};

// Optimized animation variants
export const optimizedVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const staggeredVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Hook for viewport-triggered counting animations with route-aware reset
export const useCountAnimation = (endValue, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Reset animation state when component mounts (route change)
  useEffect(() => {
    setHasAnimated(false);
    setCount(0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
              setCount(Math.floor(endValue * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return { count, ref };
};
