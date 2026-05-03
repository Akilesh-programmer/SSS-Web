import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaHeartbeat,
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaInfoCircle,
} from "react-icons/fa";

const SLIDE_DURATION = 7000;
const TOTAL_SLIDES = 2;

/* Height classes that fit exactly within viewport minus navbar.
   Navbar heights: mobile 3.5rem, sm 4rem, xl 4.5rem */
const HERO_H = "h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] xl:h-[calc(100vh-4.5rem)]";

/**
 * HeroCarousel — Cinematic crossfade between Award Hero and CMCHIS slide.
 * Uses opacity-only animations (no transforms) for compatibility with global CSS.
 */
export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(null);
  const timerRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, [isPaused, nextSlide, currentSlide]);

  // Progress bar animation via ref (no re-renders)
  useEffect(() => {
    if (isPaused) return;
    const bar = progressRef.current;
    if (!bar) return;
    bar.style.transition = "none";
    bar.style.width = "0%";
    void bar.offsetWidth;
    bar.style.transition = `width ${SLIDE_DURATION}ms linear`;
    bar.style.width = "100%";
    return () => {
      bar.style.transition = "none";
      bar.style.width = "0%";
    };
  }, [currentSlide, isPaused]);

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── SLIDES ── */}
      <AnimatePresence mode="wait">
        {currentSlide === 0 && <SlideAward key="award" />}
        {currentSlide === 1 && <SlideCMCHIS key="cmchis" />}
      </AnimatePresence>

      {/* ── NAVIGATION CONTROLS ── */}
      {/* Arrows — desktop only */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-5 lg:left-8 top-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/80 hover:bg-white/25 hover:text-white transition-colors cursor-pointer"
        style={{ marginTop: "-1.375rem" }}
      >
        <FaChevronLeft className="text-sm" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-5 lg:right-8 top-1/2 z-30 w-11 h-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/80 hover:bg-white/25 hover:text-white transition-colors cursor-pointer"
        style={{ marginTop: "-1.375rem" }}
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* Bottom bar: dots + progress */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-30 flex flex-col items-center gap-2.5">
        {/* Dots */}
        <div className="flex gap-2.5">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 cursor-pointer border-0 ${
                currentSlide === i
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        {/* Progress bar */}
        <div className="w-24 sm:w-32 h-[3px] bg-white/20 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full bg-white/70 rounded-full"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SLIDE 1 — Award Ceremony Hero
   ═══════════════════════════════════════════════ */
function SlideAward() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <section
        className={`relative w-full ${HERO_H} mt-14 sm:mt-16 xl:mt-18 overflow-hidden bg-gray-900`}
      >
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/heroes/home-1.webp"
            alt="SSS Hospital Award Ceremony - BEST EMERGING HOSPITAL IN ERODE"
            className="w-full h-full object-cover object-[50%_35%]"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{ willChange: "transform" }}
          />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              boxShadow:
                "inset 0 -200px 250px rgba(0,0,0,0.5), inset 0 0 120px rgba(0,0,0,0.15)",
            }}
          />

          {/* Award Badge — desktop */}
          <div className="hidden md:inline-flex absolute z-10 top-8 right-8 lg:top-10 lg:right-10 items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 backdrop-blur-md rounded-full border border-white/50 shadow-2xl pointer-events-auto">
            <FaAward className="text-xl mr-3 text-white" />
            <span className="text-sm lg:text-base font-bold tracking-wide text-white">
              🏆 NALAM VIRUTHUGAL 2025 WINNER
            </span>
          </div>

          {/* Hero Content — bottom-left */}
          <div className="absolute left-0 bottom-0 z-10 pointer-events-auto">
            <div className="px-6 md:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
              <div className="max-w-md lg:max-w-lg xl:max-w-xl text-white">
                <h1
                  className="hidden md:block text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white"
                  style={{ textShadow: "0 4px 20px rgba(0,0,0,0.8)" }}
                >
                  BEST EMERGING HOSPITAL IN ERODE
                </h1>
                <p
                  className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed"
                  style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
                >
                  Honoured by Hon. Minister for Health &amp; Family Welfare,{" "}
                  <span className="inline-block">Thiru Ma. Subramanian,</span>{" "}
                  Government of Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          {/* Recognition — bottom-right (desktop) */}
          <div className="hidden md:block absolute right-0 bottom-0 z-10 pointer-events-auto">
            <div className="px-6 md:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
              <div className="max-w-md lg:max-w-lg text-white">
                <div className="flex items-start gap-4 bg-white/25 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-2xl">
                  <FaHeartbeat className="text-emerald-400 text-2xl mt-1 flex-shrink-0" />
                  <p
                    className="text-base lg:text-lg text-white leading-relaxed"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                  >
                    A testament to our dedicated team delivering world-class,
                    compassionate healthcare to our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile award content */}
      <div className="md:hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-100/40 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 py-4">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg">
              <FaAward className="text-lg mr-2.5 text-white" />
              <span className="text-sm font-bold tracking-wide text-white">
                🏆 NALAM VIRUTHUGAL 2025 WINNER
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-center mb-4">
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Best Emerging Hospital
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              in Erode
            </span>
          </h2>

          <p className="text-center text-sm sm:text-base leading-relaxed mb-6">
            <span className="block mb-1">
              <span className="text-gray-600 font-medium">Honoured by</span>{" "}
              <span className="text-emerald-700 font-semibold">
                Hon. Minister for Health &amp; Family Welfare,
              </span>
            </span>
            <span className="block">
              <span className="text-teal-700 font-bold text-base sm:text-lg">
                Thiru Ma. Subramanian,
              </span>{" "}
              <span className="text-gray-600 font-medium">
                Government of Tamil Nadu
              </span>
            </span>
          </p>

          <div className="flex items-center justify-center gap-3 text-center">
            <FaHeartbeat className="text-emerald-500 text-xl flex-shrink-0" />
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium italic">
              A testament to our dedicated team delivering world-class,
              compassionate healthcare to our community.
            </p>
            <FaHeartbeat className="text-emerald-500 text-xl flex-shrink-0" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   SLIDE 2 — CMCHIS Information (Bilingual)
   ═══════════════════════════════════════════════ */
function SlideCMCHIS() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <section
        className={`relative w-full ${HERO_H} mt-14 sm:mt-16 xl:mt-18 overflow-hidden`}
        style={{
          background:
            "linear-gradient(135deg, #022c22 0%, #0a3d2e 25%, #064e3b 50%, #0d5040 75%, #052e16 100%)",
        }}
      >
        {/* Decorative glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
              top: "10%",
              right: "-5%",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(20,184,166,0.4) 0%, transparent 70%)",
              bottom: "5%",
              left: "-5%",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Content container — vertically centered */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
          <div className="max-w-7xl w-full mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-14 items-center">
              {/* Left — CMCHIS Image in glass card */}
              <div className="flex justify-center order-1">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-40 blur-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(20,184,166,0.3))",
                    }}
                  />
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-3 sm:p-5 lg:p-6 border border-white/20 shadow-2xl">
                    <img
                      src="/assets/CMCHIS.jpg"
                      alt="CMCHIS - முதலமைச்சரின் விரிவான மருத்துவ காப்பீட்டு திட்டம் - Chief Minister's Comprehensive Health Insurance Scheme"
                      className="w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px] h-auto rounded-xl lg:rounded-2xl"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <FaShieldAlt className="text-emerald-400 text-sm" />
                      <span className="text-emerald-300/90 text-xs sm:text-sm font-medium tracking-wide">
                        தமிழ்நாடு அரசு முன்முயற்சி · Govt. of Tamil Nadu
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Bilingual Information */}
              <div className="order-2 text-center md:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/15 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-4 lg:mb-5">
                  <FaShieldAlt className="text-emerald-400 text-xs" />
                  <span className="text-emerald-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                    Government Health Scheme
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 leading-none"
                  style={{
                    background:
                      "linear-gradient(135deg, #6ee7b7 0%, #a7f3d0 30%, #ffffff 60%, #99f6e4 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  CMCHIS
                </h2>

                {/* English subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium leading-snug mb-2 max-w-lg mx-auto md:mx-0">
                  Chief Minister&apos;s Comprehensive Health Insurance Scheme
                </p>

                {/* Tamil subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-emerald-300/80 font-medium leading-snug mb-5 lg:mb-6 max-w-lg mx-auto md:mx-0">
                  முதலமைச்சரின் விரிவான மருத்துவ காப்பீட்டு திட்டம்
                </p>

                {/* Thin separator */}
                <div className="w-16 h-[2px] bg-emerald-500/40 rounded-full mb-5 lg:mb-6 mx-auto md:mx-0" />

                {/* Department note — Bilingual */}
                <div className="bg-amber-500/10 backdrop-blur-sm rounded-xl border border-amber-400/25 p-4 max-w-lg mx-auto md:mx-0">
                  <div className="flex items-start gap-3">
                    <FaInfoCircle className="text-amber-400 text-base mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-amber-200 font-semibold text-sm mb-1.5">
                        Please Note · குறிப்பு
                      </p>
                      <p className="text-amber-100/70 text-xs sm:text-sm leading-relaxed mb-2">
                        CMCHIS is available only for specific departments at our
                        hospital. Please contact our reception desk for
                        eligibility details and covered departments.
                      </p>
                      <p className="text-amber-100/70 text-xs sm:text-sm leading-relaxed">
                        எங்கள் மருத்துவமனையில் குறிப்பிட்ட துறைகளுக்கு மட்டுமே
                        CMCHIS வசதி உள்ளது. தகுதி விவரங்கள் மற்றும்
                        உள்ளடக்கப்பட்ட துறைகளுக்கு எங்கள் வரவேற்புக்
                        கவுண்டரை தொடர்பு கொள்ளவும்.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile extra info strip */}
      <div className="md:hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-3 text-center">
            <FaShieldAlt className="text-emerald-500 text-xl flex-shrink-0" />
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium italic">
              தமிழ்நாடு அரசு திட்டத்தின் கீழ் விரிவான மருத்துவ காப்பீடு
            </p>
            <FaShieldAlt className="text-emerald-500 text-xl flex-shrink-0" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
