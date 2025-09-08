import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaTimes,
  FaEye,
} from "react-icons/fa";
import { testimonials } from "../../data/testimonialsData";

const PatientTestimonials = ({ limit = 6 }) => {
  const listRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [active, setActive] = useState(null);
  const autoplayRef = useRef(null);

  const items = (testimonials || []).slice(0, limit);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // mobile autoplay: auto-scroll carousel on small screens, pause on interaction
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    const start = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        if (active) return; // don't autoplay when modal open
        const amount = Math.floor(el.clientWidth * 0.9);
        // if at (or near) end, go back to start
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: amount, behavior: "smooth" });
        }
      }, 3800);
    };

    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    // decide whether carousel content overflows visible area
    const isOverflowing = () => el.scrollWidth > el.clientWidth + 8;

    const updateAutoplay = () => {
      // only autoplay when there's overflow and more than one item
      const willAutoplay = isOverflowing() && (items || []).length > 1;
      if (willAutoplay) start();
      else stop();
    };

    // start if necessary initially
    updateAutoplay();

    // stop on interaction
    const stopOnInteraction = () => stop();
    el.addEventListener("touchstart", stopOnInteraction, { passive: true });
    el.addEventListener("pointerenter", stopOnInteraction);
    el.addEventListener("mouseenter", stopOnInteraction);

    // restart autoplay on leaving the carousel only if still overflowing
    const maybeRestart = () => {
      if (isOverflowing() && !active) start();
    };
    el.addEventListener("mouseleave", maybeRestart);

    // observe size changes and window resizes
    let ro = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(updateAutoplay);
      ro.observe(el);
    }

    const onResize = () => updateAutoplay();
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      el.removeEventListener("touchstart", stopOnInteraction);
      el.removeEventListener("pointerenter", stopOnInteraction);
      el.removeEventListener("mouseenter", stopOnInteraction);
      el.removeEventListener("mouseleave", maybeRestart);
      window.removeEventListener("resize", onResize);
      if (ro && typeof ro.disconnect === "function") {
        ro.disconnect();
        ro = null;
      }
    };
  }, [active]);

  const truncate = (text, n = 160) => {
    if (!text) return "";
    return text.length > n ? text.slice(0, n).trim() + "..." : text;
  };

  // when modal opens, focus the close button for accessibility
  useEffect(() => {
    if (active && closeBtnRef.current) {
      // ensure focus after animation
      setTimeout(() => closeBtnRef.current && closeBtnRef.current.focus(), 80);
    }
  }, [active]);

  const scroll = (dir = "right") => {
    const el = listRef.current;
    if (!el) return;
    const amount = Math.floor(el.clientWidth * 0.8);
    el.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  // update current index based on scroll position (center-based)
  const updateCurrentIndex = () => {
    const el = listRef.current;
    if (!el) return;
    const children = Array.from(el.children).filter(
      (c) => c instanceof HTMLElement
    );
    if (!children.length) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setCurrentIndex(best);
  };

  const handleScroll = () => {
    // use rAF for smoother updates
    requestAnimationFrame(updateCurrentIndex);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <FaQuoteLeft className="text-6xl text-emerald-600 drop-shadow-lg" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
                className="absolute -inset-2 bg-emerald-100 rounded-full opacity-20 animate-pulse"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-emerald-700 to-gray-800 bg-clip-text text-transparent mb-6"
          >
            What Patients Say About Us
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-30 hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonials"
              onClick={() => scroll("left")}
              className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/60 text-emerald-600 hover:shadow-xl transition-all duration-300"
            >
              <FaChevronLeft className="text-lg" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-30 hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonials"
              onClick={() => scroll("right")}
              className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/60 text-emerald-600 hover:shadow-xl transition-all duration-300"
            >
              <FaChevronRight className="text-lg" />
            </motion.button>
          </motion.div>

          <motion.div
            ref={listRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            onScroll={handleScroll}
            onTouchStart={() => {
              if (autoplayRef.current) clearInterval(autoplayRef.current);
            }}
            onTouchEnd={() => {
              // let the resize observer / window resize handler re-evaluate autoplay
              window.dispatchEvent(new Event("resize"));
            }}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-6 px-1 scrollbar-hide"
          >
            {items.map((d, idx) => {
              const keyId =
                (d?.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
                `testimonial-${idx}`;
              return (
                <motion.button
                  key={keyId}
                  type="button"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + idx * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  onClick={() => setActive(d)}
                  aria-haspopup="dialog"
                  aria-expanded={active === d}
                  className="min-w-[85vw] sm:min-w-[350px] lg:min-w-[400px] bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 snap-start cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 relative text-left hover:shadow-2xl group"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 50%, rgba(255,255,255,0.9) 100%)",
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.7), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex-1 pb-2">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="mt-2 flex items-center space-x-4"
                      >
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-inner border border-emerald-300/30">
                          <span className="text-lg font-bold text-emerald-700">
                            {(d.name || "")
                              .split(" ")
                              .map((n) => n[0])
                              .slice(0, 2)
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-gray-900">
                            {d.name || "Anonymous"}
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="mt-3 flex items-center space-x-1"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <motion.div
                            key={`${d.name}-star-${i}`}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: 1.15 + idx * 0.05 + i * 0.04,
                              type: "spring",
                              stiffness: 500,
                              damping: 15,
                            }}
                            viewport={{ once: true }}
                          >
                            <FaStar
                              className={`text-lg ${
                                i < (d.rating || 0)
                                  ? "text-amber-400"
                                  : "text-gray-300"
                              } drop-shadow-sm`}
                            />
                          </motion.div>
                        ))}
                      </motion.div>

                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium mt-4">
                        {truncate(d.review)}
                      </p>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.6 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="mt-6 sm:mt-8"
                      >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium rounded-full shadow-lg border border-emerald-400/30">
                          <FaEye className="text-xs" />
                          <span className="hidden sm:inline">
                            View full review
                          </span>
                          <span className="sm:hidden">Read more</span>
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Enhanced Pagination indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center items-center space-x-3"
          >
            {items.map((item, i) => {
              const pagKey =
                (item?.name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
                `pag-${i}`;
              return (
                <motion.button
                  key={pagKey}
                  type="button"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: 0.8 + i * 0.05,
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    const el = listRef.current;
                    const child = el && el.children && el.children[i];
                    if (child)
                      child.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest",
                        inline: "center",
                      });
                  }}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-lg transition-all duration-300 shadow-md ${
                    currentIndex === i
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 scale-125 shadow-emerald-500/50"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              );
            })}
          </motion.div>

          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                /* align to top on small screens so modal sits below header and above bottom buttons */
                className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4"
              >
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  type="button"
                  className="absolute inset-0 bg-black/60 backdrop-blur-md"
                  onClick={() => setActive(null)}
                  aria-label="Close testimonials modal"
                />

                <motion.div
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 50, opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  /* place modal lower on small screens and limit its height so header and bottom buttons remain visible */
                  className="relative max-w-4xl w-full bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl z-10 border border-white/60 mt-20 sm:mt-0 overflow-hidden"
                  role="dialog"
                  aria-modal="true"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 50%, rgba(255,255,255,0.95) 100%)",
                    boxShadow:
                      "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.8), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  {/* close button inside modal so it stays visible when modal content scrolls */}
                  <motion.button
                    ref={closeBtnRef}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActive(null)}
                    aria-label="Close testimonial"
                    className="absolute right-4 top-4 sm:top-6 sm:right-6 z-40 text-gray-500 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full p-2 bg-white/90 backdrop-blur-sm shadow-lg border border-white/60"
                  >
                    <FaTimes className="text-lg" />
                  </motion.button>
                  {/* inner scrollable content */}
                  <div className="overflow-auto max-h-[calc(100vh-160px)] p-6 sm:p-8">
                    <div className="flex items-start space-x-6">
                      {/* removed modal quote icon per request to fit content */}
                      <div className="pr-16 sm:pr-20 flex-1">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="mt-2 flex items-center space-x-4"
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shadow-lg border border-emerald-300/30">
                            <span className="text-xl font-bold text-emerald-700">
                              {(active.name || "")
                                .split(" ")
                                .map((n) => n[0])
                                .slice(0, 2)
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-gray-900">
                              {active.name}
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="mt-4 flex items-center space-x-1"
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div
                              key={`${(active.name || "")
                                .toLowerCase()
                                .replace(/[^a-z0-9]+/g, "-")}-modal-star-${i}`}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: 0.65 + i * 0.05,
                                type: "spring",
                                stiffness: 500,
                                damping: 15,
                              }}
                            >
                              <FaStar
                                className={`text-xl ${
                                  i < (active.rating || 0)
                                    ? "text-amber-400"
                                    : "text-gray-300"
                                } drop-shadow-sm`}
                              />
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.75 }}
                          className="mt-6 text-gray-700 text-lg sm:text-xl leading-relaxed whitespace-pre-line font-medium"
                        >
                          {active.review}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

PatientTestimonials.propTypes = {
  limit: PropTypes.number,
};

// note: default prop value is provided in the function signature: ({ limit = 6 })

export default PatientTestimonials;
