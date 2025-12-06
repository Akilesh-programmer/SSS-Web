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
      {/* Award Announcement Hero Section - Full Screen, starts after navbar */}
      {/* Counteract the negative margin from App.jsx for home page only */}
      <motion.section
        className="relative h-[96vh] sm:h-screen w-full flex items-end overflow-hidden mt-14 sm:mt-16 xl:mt-18"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Image - Different images for mobile and desktop */}
        <motion.div
          className="absolute inset-0 w-full h-full overflow-hidden"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Mobile image */}
          <img
            src="/assets/heroes/home-3.webp"
            alt="SSS Hospital Award Ceremony"
            className="sm:hidden w-full h-full object-cover object-center"
            width="1920"
            height="1080"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          {/* Desktop image */}
          <img
            src="/assets/heroes/home-1.webp"
            alt="SSS Hospital Award Ceremony"
            className="hidden sm:block w-full h-full object-cover object-center"
            width="1920"
            height="1080"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </motion.div>

        {/* Gradient overlay - stronger at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            boxShadow: "inset 0 -150px 200px rgba(0,0,0,0.4)",
          }}
        />

        {/* Award Badge - Top-left on desktop, top on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute z-10 top-6 left-4 md:left-6 lg:left-8 lg:top-8 inline-flex items-center px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-emerald-500/95 to-teal-500/95 backdrop-blur-md rounded-full border border-white/40 shadow-2xl"
        >
          <FaAward className="text-base md:text-xl mr-2 md:mr-3 drop-shadow-lg animate-pulse" />
          <span className="text-xs md:text-sm lg:text-base font-semibold drop-shadow-lg tracking-wide text-white">
            🏆 NALAM VIRUTHUGAL 2025 WINNER
          </span>
        </motion.div>

        {/* Hero Content - Positioned in bottom half of screen */}
        <div className="relative z-10 text-white px-4 md:px-6 lg:px-0 lg:pr-28 w-full pb-16 md:pb-20 lg:pb-24">
          <div className="w-full lg:flex lg:justify-end">
            {/* Content container - left on mobile, right on desktop with small gap from button */}
            <div className="max-w-3xl">
              {/* Main Title */}
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-5 leading-tight"
                style={{
                  textShadow:
                    "0 2px 10px rgba(0,0,0,0.4), 0 3px 20px rgba(0,0,0,0.3)",
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-white via-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                  Best Emerging Hospital in Erode
                </span>
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
                className="flex items-start gap-3 bg-white/15 backdrop-blur-md rounded-xl p-4 md:p-5 lg:p-6 border border-white/30 shadow-2xl max-w-2xl"
              >
                <FaHeartbeat className="text-emerald-400 text-lg md:text-xl lg:text-2xl mt-1 flex-shrink-0 animate-pulse" />
                <p
                  className="text-xs md:text-sm lg:text-base text-white/95 leading-relaxed"
                  style={{
                    textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                  }}
                >
                  A testament to our dedicated team delivering world-class,
                  compassionate healthcare to our community.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

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
