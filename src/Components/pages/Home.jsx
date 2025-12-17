import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaAward,
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaHospital,
  FaAmbulance,
  FaMicroscope,
  FaCalendarAlt,
  FaShieldAlt,
} from "react-icons/fa";
const hospitalImg = "/assets/other/other-sss-hospital.avif";
import PropTypes from "prop-types";

// Small counter component that animates from 0 -> end when `start` becomes true
function Counter({
  end = 0,
  suffix = "",
  start = false,
  duration = 2000,
  className = "text-heading-md text-gray-900",
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Observe this counter's visibility and start counting only when visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let startTs = null;

    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const current = Math.round(progress * end);
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible, end, duration]);

  return (
    <div ref={containerRef}>
      <p className={className}>
        {value}
        {suffix}
      </p>
    </div>
  );
}

Counter.propTypes = {
  end: PropTypes.number,
  suffix: PropTypes.string,
  start: PropTypes.bool,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default function Home() {
  const indicatorsRef = useRef(null);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const el = indicatorsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
        } else if (!entry.isIntersecting && countersStarted) {
          // Reset when element goes out of view
          setCountersStarted(false);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [countersStarted]);

  return (
    <>
      {/* Award Announcement Hero Section - Professional responsive hero */}
      {/* Counteract the negative margin from App.jsx for home page only */}
      <motion.section
        className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[70vh] lg:min-h-[85vh] xl:min-h-screen mt-14 sm:mt-16 xl:mt-18 overflow-hidden bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Image - Optimized for award ceremony focal point */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/heroes/home-1.webp"
            alt="SSS Hospital Award Ceremony - Best Emerging Hospital in Erode"
            className="w-full h-full object-cover object-[50%_35%]"
            width="1920"
            height="1080"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            style={{ willChange: "transform" }}
          />
        </div>

        {/* Overlay Container - Enhanced gradients for optimal text readability */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Multi-layer gradient overlay for professional look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              boxShadow:
                "inset 0 -200px 250px rgba(0,0,0,0.5), inset 0 0 120px rgba(0,0,0,0.15)",
            }}
          />

          {/* Award Badge - Top-left on desktop only (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:inline-flex absolute z-10 top-6 left-4 md:left-6 lg:left-8 lg:top-8 items-center px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-emerald-500/95 to-teal-500/95 backdrop-blur-md rounded-full border border-white/40 shadow-2xl pointer-events-auto"
          >
            <FaAward className="text-base md:text-xl mr-2 md:mr-3 drop-shadow-lg animate-pulse" />
            <span className="text-xs md:text-sm lg:text-base font-semibold drop-shadow-lg tracking-wide text-white">
              🏆 NALAM VIRUTHUGAL 2025 WINNER
            </span>
          </motion.div>

          {/* Hero Content - Positioned at bottom with professional spacing */}
          <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
              <div className="flex justify-start lg:justify-end">
                {/* Content container - optimized for readability and visual hierarchy */}
                <div className="max-w-3xl w-full lg:w-auto text-white">
                  {/* Main Title - Desktop only (hidden on mobile) */}
                  <motion.h1
                    className="hidden md:block text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white"
                    style={{
                      textShadow:
                        "0 3px 15px rgba(0,0,0,0.6), 0 5px 30px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.8)",
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Best Emerging Hospital in Erode
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    className="text-sm md:text-base lg:text-lg text-white/95 mb-4 md:mb-6 leading-relaxed max-w-2xl"
                    style={{
                      textShadow:
                        "0 1px 8px rgba(0,0,0,0.5), 0 2px 12px rgba(0,0,0,0.4)",
                    }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Honoured by Hon. Minister for Health & Family Welfare,{" "}
                    <span className="inline-block">Thiru Ma. Subramanian,</span>{" "}
                    Government of Tamil Nadu
                  </motion.p>

                  {/* Recognition Text */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex items-start gap-3 sm:gap-4 bg-white/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/40 shadow-2xl max-w-2xl"
                  >
                    <FaHeartbeat className="text-emerald-400 text-xl md:text-2xl lg:text-2xl mt-0.5 sm:mt-1 flex-shrink-0 animate-pulse" />
                    <p
                      className="text-sm sm:text-base md:text-base lg:text-lg text-white/95 leading-relaxed"
                      style={{
                        textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                      }}
                    >
                      A testament to our dedicated team delivering world-class,
                      compassionate healthcare to our community.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mobile-only content below image */}
      <div className="md:hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-100/40 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 py-10">
          {/* Award Badge - Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaAward className="text-lg mr-2.5 text-white animate-pulse" />
              <span className="text-sm font-bold tracking-wide text-white">
                🏆 NALAM VIRUTHUGAL 2025 WINNER
              </span>
            </div>
          </motion.div>

          {/* Main Title - Mobile */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl font-bold leading-tight text-center text-gray-900 mb-0"
          >
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Best Emerging Hospital
            </span>
            <br />
            <span className="text-gray-800">in Erode</span>
          </motion.h1>
        </div>
      </div>

      {/* Original Home Content Section - Now appears after hero */}
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-4 lg:left-10 w-16 h-16 lg:w-32 lg:h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-4 lg:right-10 w-12 h-12 lg:w-24 lg:h-24 bg-teal-100 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 lg:w-16 lg:h-16 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        </div>

        <div className="relative z-10 flex items-center pt-20 lg:pt-24 pb-8 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 order-2 lg:order-1"
              >
                {/* Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <FaHeartbeat className="text-emerald-600 text-lg lg:text-xl heart-pulse-red" />
                  </div>
                  <span className="text-emerald-600 font-semibold text-base lg:text-lg">
                    Your Health, Our Priority
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-display-xl text-gray-900 text-center lg:text-left"
                >
                  The Care You Deserve,{" "}
                  <span className="text-emerald-600 relative">
                    Now Closer
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-200 origin-left"
                    />
                  </span>{" "}
                  Than Ever
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 lg:px-0"
                  style={{ textAlign: "justify" }}
                >
                  Experience world-class healthcare with cutting-edge technology
                  and compassionate care at SSS Super Speciality Hospital,
                  Erode.
                </motion.p>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto lg:mx-0"
                  ref={indicatorsRef}
                >
                  <div className="text-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaHospital className="text-emerald-600 text-lg lg:text-xl" />
                    </div>
                    <Counter end={30} suffix="+" start={countersStarted} />
                    <p className="text-xs lg:text-sm text-gray-600">ICU Beds</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaAward className="text-emerald-600 text-lg lg:text-xl" />
                    </div>
                    <Counter end={25} suffix="+" start={countersStarted} />
                    <p className="text-xs lg:text-sm text-gray-600">
                      Specialities
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <FaStethoscope className="text-emerald-600 text-lg lg:text-xl" />
                    </div>
                    <p className="text-heading-md text-gray-900">24/7</p>
                    <p className="text-xs lg:text-sm text-gray-600">
                      Emergency Care
                    </p>
                  </div>
                </motion.div>

                {/* Action buttons intentionally removed per request */}
              </motion.div>

              {/* Right Content - Hospital Image with floating elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative order-1 lg:order-2"
              >
                {/* Main hospital image */}
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 mx-0 sm:mx-2 lg:mx-0">
                  <img
                    src={hospitalImg}
                    alt="SSS Hospital"
                    className="w-full h-96 sm:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>

                  {/* Floating stats card (moved slightly more left & down) */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-2 left-1 lg:bottom-3 lg:left-2 bg-white/95 backdrop-blur-sm rounded-lg p-2 lg:p-3 shadow"
                  >
                    <p className="text-emerald-600 font-semibold text-[10px] lg:text-xs">
                      Best Hospital in Erode
                    </p>

                    <div className="mt-1 flex items-baseline gap-2">
                      <div className="flex-shrink-0">
                        <Counter
                          end={150}
                          suffix="+"
                          duration={2000}
                          className="text-heading-sm text-gray-900"
                        />
                      </div>
                      <div className="text-gray-900 font-semibold text-sm lg:text-sm">
                        Beds Available
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Floating medical icons */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
                  {[
                    { icon: FaStethoscope, delay: 1.5, x: 15, y: 20 },
                    { icon: FaUserMd, delay: 1.7, x: 70, y: 15 },
                    { icon: FaHeartbeat, delay: 1.9, x: 25, y: 60 },
                    { icon: FaAmbulance, delay: 2.1, x: 80, y: 45 },
                    { icon: FaMicroscope, delay: 2.3, x: 45, y: 25 },
                    { icon: FaHospital, delay: 2.5, x: 60, y: 70 },
                    { icon: FaCalendarAlt, delay: 2.7, x: 35, y: 80 },
                    { icon: FaShieldAlt, delay: 2.9, x: 85, y: 75 },
                  ].map((item, i) => (
                    <motion.div
                      key={`floating-${
                        item.icon && item.icon.displayName
                          ? item.icon.displayName
                          : "icon"
                      }-${i}`}
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
                      style={{
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                      }}
                    >
                      <div className="relative">
                        <item.icon className="text-emerald-500/70 text-lg drop-shadow-lg" />
                        {/* Red pulse line effect through the center */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-0.5 top-1/2 -translate-y-1/2"
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
                          transition={{
                            delay: item.delay + 1,
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
