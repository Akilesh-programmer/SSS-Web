import { motion } from "framer-motion";
import { FaAward, FaHeartbeat } from "react-icons/fa";

/**
 * AwardBanner — Compact award recognition strip for the homepage.
 * Displays: Nalam Viruthugal 2025 Winner, Best Emerging Hospital in Erode,
 * and the Minister's honour.
 */
const AwardBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
            top: "-20%",
            right: "-5%",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)",
            bottom: "-15%",
            left: "-5%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        {/* Content — centered layout */}
        <div className="text-center">
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full border border-amber-200 mb-5 sm:mb-6 shadow-sm"
          >
            <FaAward className="text-amber-600 text-base sm:text-lg" />
            <span className="text-amber-700 text-xs sm:text-sm font-bold tracking-wider uppercase">
              🏆 Nalam Viruthugal 2025 Winner
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 leading-tight bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
          >
            Best Emerging Hospital in Erode
          </motion.h2>

          {/* Thin separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
            className="w-20 h-[2px] bg-gradient-to-r from-amber-400/60 via-emerald-400/60 to-amber-400/60 rounded-full mx-auto mb-4 sm:mb-5"
          />

          {/* Minister honour */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-5 sm:mb-6"
          >
            Honoured by{" "}
            <span className="text-emerald-700 font-semibold">
              Hon. Minister for Health &amp; Family Welfare,
            </span>{" "}
            <span className="text-amber-700 font-bold">
              Thiru Ma. Subramanian,
            </span>{" "}
            <span className="text-gray-700">Government of Tamil Nadu</span>
          </motion.p>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-100 shadow-sm"
          >
            <FaHeartbeat className="text-emerald-500 text-sm sm:text-base" />
            <p className="text-xs sm:text-sm text-gray-600 font-medium italic leading-relaxed">
              A testament to our dedicated team delivering world-class,
              compassionate healthcare to our community.
            </p>
            <FaHeartbeat className="text-emerald-500 text-sm sm:text-base hidden sm:block" />
          </motion.div>

          {/* Times Award teaser */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-amber-50/80 backdrop-blur-sm rounded-lg border border-amber-200/60 shadow-sm"
          >
            <FaAward className="text-amber-500 text-sm" />
            <p className="text-xs text-amber-700 font-semibold">
              Also recognised: Times Healthcare Achievers Tamil Nadu 2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardBanner;
