import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * OptimizedImageGrid
 * Reusable performant image grid with:
 * - IntersectionObserver based lazy hydration (only render visible + small buffer)
 * - Progressive loading (tiny blurred placeholder -> full image)
 * - Prevent re-loading / flicker when scrolling up & down (cache in-memory)
 * - Staggered Framer Motion entrance similar to Doctors page cards
 * - content-visibility + contain for paint optimization
 */

// Simple in-memory cache so already loaded images don't fade/blink again
const loadedSrcSet = new Set();

const defaultGetKey = (item, index) => item.id || item.src || index;

const OptimizedImageGrid = ({
  items = [], // [{ id, src, alt, previewSrc? }]
  columnsMinWidth = 240,
  onItemClick,
  getKey = defaultGetKey,
  aspectRatio = "4/3",
  enableAnimation = true,
  className = "",
}) => {
  const containerRef = useRef(null);
  const [visibleMap, setVisibleMap] = useState({});

  // Track which indices have been animated already (so we don't replay)
  const animatedOnceRef = useRef(new Set());

  const observerRef = useRef(null);

  const observe = useCallback(() => {
    if (!containerRef.current) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisibleMap((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = Number(entry.target.dataset.index);
              next[idx] = true;
            }
          });
          return next;
        });
      },
      {
        rootMargin: "200px 0px 400px 0px", // pre-load ahead & behind
        threshold: 0.05,
      }
    );

    const nodes = containerRef.current.querySelectorAll(
      "[data-observe='true']"
    );
    nodes.forEach((n) => observerRef.current.observe(n));
  }, [items.length]);

  useEffect(() => {
    observe();
    return () => observerRef.current && observerRef.current.disconnect();
  }, [observe]);

  return (
    <div
      ref={containerRef}
      className={`grid gap-5 sm:gap-6 md:gap-7 grid-optimized ${className}`}
      style={{
        gridTemplateColumns: `repeat(auto-fill, minmax(${columnsMinWidth}px, 1fr))`,
      }}
    >
      {items.map((item, index) => {
        const key = getKey(item, index);
        const isVisible = !!visibleMap[index];
        const hasLoadedBefore = loadedSrcSet.has(item.src);
        const showMotion = enableAnimation && (isVisible || hasLoadedBefore);

        // If animations are disabled, render a plain non-animated button/image
        if (!enableAnimation) {
          return (
            <button
              data-observe="true"
              data-index={index}
              key={key}
              onClick={() => onItemClick && onItemClick(item, index)}
              className="relative rounded-2xl overflow-hidden bg-white"
              style={{ aspectRatio }}
            >
              <div className="w-full h-full overflow-hidden relative">
                {isVisible && (
                  <img
                    src={item.src}
                    alt={item.alt || ""}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => loadedSrcSet.add(item.src)}
                    className="h-full w-full object-cover select-none"
                    draggable={false}
                  />
                )}
              </div>
            </button>
          );
        }

        // Animated path (existing behavior)
        return (
          <motion.button
            data-observe="true"
            data-index={index}
            key={key}
            initial={
              showMotion && !animatedOnceRef.current.has(index)
                ? { opacity: 0, y: 30, scale: 0.95 }
                : false
            }
            animate={showMotion ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.9,
              ease: [0.2, 0.65, 0.3, 0.9],
              delay: (index % 6) * 0.07,
            }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onItemClick && onItemClick(item, index)}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 bg-gradient-to-br from-emerald-50 to-white"
            style={{ willChange: "transform, opacity" }}
            onAnimationComplete={() => animatedOnceRef.current.add(index)}
          >
            <div
              className="w-full overflow-hidden relative"
              style={{ aspectRatio }}
            >
              {/* Placeholder (blur) */}
              {!hasLoadedBefore && (
                <div className="absolute inset-0 bg-emerald-100/40 animate-pulse" />
              )}
              {isVisible && (
                <img
                  src={item.src}
                  alt={item.alt || ""}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => loadedSrcSet.add(item.src)}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-focus:scale-105 select-none"
                  draggable={false}
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="bg-white/90 text-gray-800 rounded-full p-3 shadow-lg backdrop-blur-md ring-1 ring-emerald-200/60 scale-75 group-hover:scale-100 transition-transform">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl ring-0 ring-emerald-500/0 group-hover:ring-4 group-hover:ring-emerald-400/30 transition-all duration-500 pointer-events-none" />
          </motion.button>
        );
      })}
    </div>
  );
};

export default OptimizedImageGrid;
