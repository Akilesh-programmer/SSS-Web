import { motion } from "framer-motion";
import { FaShieldAlt, FaInfoCircle } from "react-icons/fa";

/**
 * CMCHISSection — Government health insurance scheme information.
 * Bilingual (English + Tamil) card with the CMCHIS image and
 * department availability disclaimer.
 */
const CMCHISSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-teal-100/40 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200 mb-4">
            <FaShieldAlt className="text-emerald-600 text-sm" />
            <span className="text-emerald-700 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Government Health Scheme
            </span>
          </div>
          <h2 className="text-heading-xl text-center text-emerald-900">
            CMCHIS — Health Insurance
          </h2>
        </motion.div>

        {/* Content grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left — CMCHIS Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-30 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.3), rgba(20,184,166,0.3))",
                }}
              />
              <div className="relative bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 border border-emerald-100 shadow-xl">
                <img
                  src="/assets/CMCHIS.jpg"
                  alt="CMCHIS - முதலமைச்சரின் விரிவான மருத்துவ காப்பீட்டு திட்டம் - Chief Minister's Comprehensive Health Insurance Scheme"
                  className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] h-auto rounded-xl lg:rounded-2xl mx-auto"
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mt-3 flex items-center justify-center gap-2">
                  <FaShieldAlt className="text-emerald-500 text-sm" />
                  <span className="text-emerald-600 text-xs sm:text-sm font-medium tracking-wide">
                    தமிழ்நாடு அரசு முன்முயற்சி · Govt. of Tamil Nadu
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Bilingual Information */}
          <div className="text-center md:text-left space-y-5">
            {/* English title */}
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-800 mb-2 leading-tight">
                Chief Minister&apos;s Comprehensive Health Insurance Scheme
              </h3>
              <p className="text-base sm:text-lg text-emerald-600/80 font-medium leading-snug">
                முதலமைச்சரின் விரிவான மருத்துவ காப்பீட்டு திட்டம்
              </p>
            </div>

            {/* Separator */}
            <div className="w-16 h-[2px] bg-emerald-300 rounded-full mx-auto md:mx-0" />

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed" style={{ textAlign: "justify" }}>
              SSS Super Speciality Hospital is empanelled under the CMCHIS
              (Chief Minister&apos;s Comprehensive Health Insurance Scheme) by the
              Government of Tamil Nadu, providing cashless treatment coverage
              for eligible families.
            </p>

            {/* Department note — Bilingual */}
            <div className="bg-amber-50 rounded-xl border border-amber-200 p-4">
              <div className="flex items-start gap-3">
                <FaInfoCircle className="text-amber-500 text-base mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-amber-800 font-semibold text-sm mb-1.5">
                    Please Note · குறிப்பு
                  </p>
                  <p className="text-amber-700/80 text-xs sm:text-sm leading-relaxed mb-2">
                    CMCHIS is available only for specific departments at our
                    hospital. Please contact our reception desk for eligibility
                    details and covered departments.
                  </p>
                  <p className="text-amber-700/80 text-xs sm:text-sm leading-relaxed">
                    எங்கள் மருத்துவமனையில் குறிப்பிட்ட துறைகளுக்கு மட்டுமே
                    CMCHIS வசதி உள்ளது. தகுதி விவரங்கள் மற்றும்
                    உள்ளடக்கப்பட்ட துறைகளுக்கு எங்கள் வரவேற்புக் கவுண்டரை
                    தொடர்பு கொள்ளவும்.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CMCHISSection;
