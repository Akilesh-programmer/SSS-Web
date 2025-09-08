import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { departments as allDepartments } from "../../data/DoctorDepartmentData";
import PropTypes from "prop-types";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaEye,
  FaUserMd,
  FaAmbulance,
  FaXRay,
  FaStethoscope,
  FaTooth,
  FaChild,
  FaLungs,
  FaMicroscope,
  FaUserInjured,
  FaUserFriends,
  FaSyringe,
  FaHospital,
  FaCut,
  FaHeart,
  FaBandAid,
  FaFlask,
  FaPrescriptionBottleAlt,
  FaPills,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const SpecialitiesPreview = ({ count = 4 }) => {
  const navigate = useNavigate();
  // use all departments but exclude the 'All Specialists' entry
  const departments = (allDepartments || []).filter(
    (d) => (d.name || "").toLowerCase() !== "all specialists"
  );

  // Carousel refs/state
  const listRef = useRef(null);
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paginationConfig, setPaginationConfig] = useState(() => ({
    size: "w-2 h-2",
    spacing: "gap-2",
  }));

  const handleSeeAll = () => navigate("/specialities");

  const GAP = 24; // matches gap-6 (6 * 4px)
  const displayedItems = departments;

  const getCardAmount = (el) => {
    if (!el) return 0;
    const firstChild = el.children[0];
    const cardWidth = firstChild
      ? firstChild.clientWidth
      : Math.floor(el.clientWidth * 0.9);
    return cardWidth + GAP;
  };

  // observe section visibility for autoplay
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // autoplay like DoctorsSection
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

    const isOverflowing = () => el.scrollWidth > el.clientWidth + 8;

    const updateAutoplay = () => {
      const willAutoplay =
        isOverflowing() && displayedItems.length > 1 && isInView;
      if (willAutoplay) start();
      else stop();
    };

    updateAutoplay();

    const stopOnInteraction = () => stop();
    el.addEventListener("touchstart", stopOnInteraction, { passive: true });
    el.addEventListener("pointerenter", stopOnInteraction);
    el.addEventListener("mouseenter", stopOnInteraction);

    const maybeRestart = () => {
      if (isOverflowing() && isInView) start();
    };
    el.addEventListener("mouseleave", maybeRestart);

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
      if (ro && typeof ro.disconnect === "function") ro.disconnect();
    };
  }, [isInView, displayedItems]);

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

  const handleScroll = () => requestAnimationFrame(updateCurrentIndex);

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
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    } else {
      el.scrollBy({ left: -amount, behavior: "smooth" });
    }
  };

  // helpers to avoid complex inline handlers (improves static analysis)
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      scroll("left");
    } else if (e.key === "ArrowRight") {
      scroll("right");
    }
  };

  const goToIndex = (idx) => {
    const el = listRef.current;
    if (!el) return;
    const child = el.children[idx];
    if (child) {
      el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    }
  };

  const makeGoToIndex = (idx) => () => goToIndex(idx);

  const getPaginationConfig = () => {
    if (typeof window === "undefined")
      return { size: "w-2 h-2", spacing: "gap-2" };
    const width = window.innerWidth;
    if (width < 640) return { size: "w-2 h-2", spacing: "gap-1" };
    if (width < 768) return { size: "w-2 h-2", spacing: "gap-2" };
    return { size: "w-2 h-2", spacing: "gap-2" };
  };

  useEffect(() => {
    const handleResize = () => {
      setPaginationConfig(getPaginationConfig());
      // update visible index when layout changes
      updateCurrentIndex();
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const departmentIcons = {
    "Accident & Emergency Care": <FaAmbulance />,
    Cardiology: <FaHeartbeat />,
    Dermatology: <FaBandAid />,
    Dentistry: <FaTooth />,
    Endocrinology: <FaFlask />,
    "ENT (Ear, Nose & Throat)": <FaStethoscope />,
    "General Medicine": <FaUserMd />,
    "General Surgery": <FaCut />,
    Gastroenterology: <FaMicroscope />,
    "Obstetrics & Gynaecology": <FaUserFriends />,
    Nephrology: <FaPills />,
    Neurology: <FaBrain />,
    "Neuro Surgery": <FaBrain />,
    Orthopaedics: <FaBone />,
    Orthopedics: <FaBone />,
    Ophthalmology: <FaEye />,
    Paediatrics: <FaChild />,
    Psychiatry: <FaBrain />,
    Pulmonology: <FaLungs />,
    Radiology: <FaXRay />,
    Anaesthesiology: <FaSyringe />,
    Physiotherapy: <FaUserInjured />,
    "Critical Care Medicine": <FaHeart />,
    Pathology: <FaMicroscope />,
    "Plastic Surgery": <FaCut />,
    Pharmacy: <FaPrescriptionBottleAlt />,
  };

  const getDepartmentIcon = (name) => departmentIcons[name] || <FaHospital />;

  return (
    <section
      ref={sectionRef}
      className="py-12 lg:py-16 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden"
    >
      {/* Floating decorative icons (large screens) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {[
          { icon: FaStethoscope, delay: 1.5, x: 10, y: 18 },
          { icon: FaUserMd, delay: 1.7, x: 68, y: 12 },
          { icon: FaHeartbeat, delay: 1.9, x: 22, y: 62 },
          { icon: FaAmbulance, delay: 2.1, x: 78, y: 44 },
          { icon: FaMicroscope, delay: 2.3, x: 44, y: 26 },
          { icon: FaHospital, delay: 2.5, x: 58, y: 72 },
        ].map((item, i) => (
          <motion.div
            key={`sp-floating-${
              item.icon && item.icon.displayName
                ? item.icon.displayName
                : "icon"
            }-${item.delay}-${item.x}-${item.y}`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{
              opacity: [0, 0.6, 0.4, 0.7],
              scale: [0, 1.2, 0.8, 1],
              rotate: [0, 360],
              y: [0, -10, 0, -5, 0],
            }}
            transition={{
              delay: item.delay,
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute"
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
          >
            <div className="relative">
              <item.icon className="text-emerald-500/70 text-lg drop-shadow-lg" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-0.5 top-1/2 -translate-y-1/2"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
                transition={{
                  delay: item.delay + 0.15,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-emerald-900">
            Our Key Specialities
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            A selection of our major departments delivering advanced care and
            expert teams.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* Prev / Next controls */}
          <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous specialities"
              onClick={() => scroll("left")}
              className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/60 text-emerald-600 hover:shadow-xl transition-all duration-300"
            >
              <FaChevronLeft className="text-lg" />
            </motion.button>
          </div>
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-30 hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next specialities"
              onClick={() => scroll("right")}
              className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg border border-white/60 text-emerald-600 hover:shadow-xl transition-all duration-300"
            >
              <FaChevronRight className="text-lg" />
            </motion.button>
          </div>

          <motion.div
            ref={listRef}
            onScroll={handleScroll}
            onTouchStart={() => {
              if (autoplayRef.current) clearInterval(autoplayRef.current);
            }}
            onTouchEnd={() => {
              window.dispatchEvent(new Event("resize"));
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory py-6 px-1 scrollbar-hide"
          >
            {displayedItems.map((dept, idx) => (
              <div
                key={dept.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 snap-center px-1"
              >
                <motion.div
                  className="group relative text-center p-4 lg:p-6 rounded-2xl bg-white/95 shadow-lg hover:shadow-2xl border border-transparent hover:border-emerald-100 transition-all duration-300 cursor-default overflow-hidden h-40 sm:h-44 lg:h-48 flex flex-col items-center justify-center"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px rgba(2,6,23,0.08)",
                  }}
                  transition={{ duration: 0.35 }}
                >
                  {/* decorative accent */}
                  <motion.div
                    aria-hidden
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.06 }}
                    transition={{
                      duration: 0.9,
                      delay: idx * 0.04,
                      ease: "easeInOut",
                      repeat: 0,
                    }}
                    className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 opacity-10 pointer-events-none blur-3xl"
                  />

                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <motion.div
                      aria-hidden
                      className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md text-xl"
                      // keep icon visible at all times; slightly livelier floating and tilt
                      initial={{ scale: 1, rotate: 0, y: 0, opacity: 1 }}
                      animate={{
                        scale: [1, 1.08, 0.96, 1.06],
                        rotate: [0, 6, -3, 0],
                        y: [0, -6, 0, -4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: idx * 0.05,
                      }}
                      whileHover={{ scale: 1.16, rotate: 8 }}
                    >
                      <div className="text-xl">
                        {getDepartmentIcon(dept.name)}
                      </div>
                    </motion.div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 px-2 text-center">
                      {dept.name}
                    </h4>
                  </div>

                  {/* hover shimmer */}
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-900 ease-out" />
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Pagination dots */}
          <div
            className={`flex justify-center mt-6 ${paginationConfig.spacing}`}
          >
            {displayedItems.map((item, idx) => {
              const dotKey = (item?.name || `dot-${idx}`)
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-");
              return (
                <button
                  key={dotKey}
                  onClick={makeGoToIndex(idx)}
                  aria-label={`Go to ${item.name}`}
                  className={`${
                    paginationConfig.size
                  } rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-emerald-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              );
            })}
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSeeAll}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            See all specialities
            <FaArrowRight className="ml-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesPreview;

SpecialitiesPreview.propTypes = {
  count: PropTypes.number,
};
