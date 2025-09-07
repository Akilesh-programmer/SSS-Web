import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaChevronLeft,
  FaChevronRight,
  FaGraduationCap,
} from "react-icons/fa";
import { doctors } from "../../../data/doctorsData";
import DefaultDoctorAvatar from "../../ui/DefaultDoctorAvatar";

const DoctorsSection = ({ limit }) => {
  const listRef = useRef(null);
  const sectionRef = useRef(null);
  // modal state removed — clicking a card no longer opens a popup
  const [isInView, setIsInView] = useState(false);
  const autoplayRef = useRef(null);

  // Layout constants
  const GAP = 24; // matches gap-6 (6 * 4px)

  // Helper: calculate scroll amount for one card (width + gap)
  const getCardAmount = (el) => {
    if (!el) return 0;
    const firstChild = el.children[0];
    const cardWidth = firstChild
      ? firstChild.clientWidth
      : Math.floor(el.clientWidth * 0.9);
    return cardWidth + GAP;
  };

  const items = doctors || [];
  const displayedItems =
    typeof limit === "number" ? items.slice(0, limit) : items;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Intersection Observer to detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-scroll carousel when in view, pause on interaction
  useEffect(() => {
    const el = listRef.current;
    if (!el || !isInView) return;

    const start = () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        const amount = getCardAmount(el);
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: amount, behavior: "smooth" });
        }
      }, 4000);
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
      // only autoplay when there's overflow, more than one item, and section is in view
      const willAutoplay =
        isOverflowing() && (displayedItems || []).length > 1 && isInView;
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
      if (isOverflowing() && isInView) start();
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
  }, [isInView, displayedItems]);

  // description removed from cards

  // modal removed - no focus handling required

  const scroll = (dir = "right") => {
    const el = listRef.current;
    if (!el) return;
    const amount = getCardAmount(el);

    if (dir === "right") {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: amount, behavior: "smooth" });
      }
    } else if (el.scrollLeft <= 10) {
      el.scrollTo({
        left: el.scrollWidth - el.clientWidth,
        behavior: "smooth",
      });
    } else {
      el.scrollBy({ left: -amount, behavior: "smooth" });
    }
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

  // Calculate dynamic pagination based on screen size
  const getPaginationConfig = () => {
    if (typeof window === "undefined")
      return { size: "w-2 h-2", spacing: "gap-2" };

    const width = window.innerWidth;
    if (width < 640) {
      return { size: "w-2 h-2", spacing: "gap-1" };
    } else if (width < 768) {
      return { size: "w-2.5 h-2.5", spacing: "gap-1.5" };
    } else if (width < 1024) {
      return { size: "w-3 h-3", spacing: "gap-2" };
    } else {
      return { size: "w-3 h-3", spacing: "gap-2.5" };
    }
  };

  const [paginationConfig, setPaginationConfig] = useState(
    getPaginationConfig()
  );

  useEffect(() => {
    const handleResize = () => {
      setPaginationConfig(getPaginationConfig());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="doctors-section"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50 scroll-mt-20 lg:scroll-mt-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-emerald-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-blue-300 to-teal-300 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <FaUserMd className="text-6xl text-blue-600 drop-shadow-lg" />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                viewport={{ once: true }}
                className="absolute -inset-2 bg-blue-100 rounded-full opacity-20 animate-pulse"
              />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-700 to-gray-800 bg-clip-text text-transparent mb-6"
          >
            Meet Our Expert Doctors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Our dedicated team of medical professionals brings years of
            experience and expertise to provide you with the best healthcare
            possible.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-30 hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous doctors"
              onClick={() => scroll("left")}
              className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/60 text-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <FaChevronLeft className="text-lg" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-30 hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next doctors"
              onClick={() => scroll("right")}
              className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/60 text-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <FaChevronRight className="text-lg" />
            </motion.button>
          </motion.div>

          <motion.div
            ref={listRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
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
            {displayedItems.map((doctor, idx) => {
              const keyId =
                (doctor?.name || "")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-") || `doctor-${idx}`;
              return (
                <motion.button
                  key={keyId}
                  type="button"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex-shrink-0 w-80 sm:w-96 snap-center"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 h-full transition-all duration-300 group-hover:shadow-xl group-hover:bg-white/90">
                    {/* Doctor Image */}
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-32 h-32 sm:w-36 lg:w-40 mx-auto"
                      >
                        {doctor.image ? (
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-full rounded-full object-cover border-4 border-blue-100 transition-colors duration-300"
                          />
                        ) : (
                          <DefaultDoctorAvatar
                            name={doctor.name}
                            className="w-full h-full border-4 border-blue-100"
                          />
                        )}
                        {/* removed overlay icon to give image more space */}
                      </motion.div>
                    </div>

                    {/* Doctor Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                        {doctor.name}
                      </h3>

                      <div className="flex items-center justify-center gap-2 mb-3">
                        <FaGraduationCap className="text-blue-600 text-sm" />
                        <p className="text-sm text-gray-600 font-medium">
                          {doctor.qualification}
                        </p>
                      </div>

                      <p className="text-blue-600 font-semibold mb-3">
                        {doctor.specialty}
                      </p>

                      {/* only study (qualification) and specialty shown on cards */}
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent rounded-2xl pointer-events-none"
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Dynamic Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.4 }}
            viewport={{ once: true }}
            className={`flex justify-center mt-8 ${paginationConfig.spacing}`}
          >
            {displayedItems.map((item, idx) => {
              const dotKey = (item?.name || `dot-${idx}`)
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-");
              return (
                <motion.button
                  key={dotKey}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    const el = listRef.current;
                    if (el) {
                      const cardWidth = el.children[0]?.clientWidth || 0;
                      const gap = 24; // 6 * 4px from gap-6
                      el.scrollTo({
                        left: idx * (cardWidth + gap),
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`${
                    paginationConfig.size
                  } rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-blue-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Doctor detail popup removed - clicking cards no longer opens a modal */}
    </section>
  );
};

DoctorsSection.propTypes = {
  limit: PropTypes.number,
};

export default DoctorsSection;
