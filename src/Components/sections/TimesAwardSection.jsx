import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaNewspaper, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const AWARD_IMG = "/assets/other/times-healthcare-award-2026.avif";

/**
 * TimesAwardSection — Premium showcase for the
 * "Times Healthcare Achievers Tamil Nadu 2026" award.
 * Two-column layout (image + details) on desktop; stacked on mobile.
 */
const TimesAwardSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="Times Healthcare Achievers Tamil Nadu 2026 Award"
    >
      {/* Deep premium background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2035] to-[#0a1628]" />

      {/* Decorative glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(217,170,73,0.18) 0%, transparent 70%)",
            top: "-10%",
            right: "-8%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            bottom: "-12%",
            left: "-6%",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-full border border-amber-400/30 mb-5 sm:mb-6">
            <FaNewspaper className="text-amber-400 text-sm sm:text-base" />
            <span className="text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase">
              Bennett &amp; Coleman · The Times of India
            </span>
          </div>
        </motion.div>

        {/* Two-column content */}
        <article className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Award Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="order-1"
          >
            <div className="relative group">
              {/* Gold border glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/40 via-yellow-500/20 to-amber-400/40 rounded-2xl lg:rounded-3xl blur-sm group-hover:blur-md transition-all duration-500" />

              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl border border-amber-400/20">
                <img
                  src={AWARD_IMG}
                  alt="SSS Super Speciality Hospital receiving Times Healthcare Achievers Tamil Nadu 2026 Award — Certificate of Recognition for expertise in Multispeciality healthcare, presented by Bennett and Coleman, The Times of India, on 16th September 2026 in Chennai"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  width="800"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — Award Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="order-2 space-y-6 lg:space-y-8"
          >
            {/* Award badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 border border-amber-400/30 rounded-full">
              <FaAward className="text-amber-400 text-lg" />
              <span className="text-amber-300 text-sm font-bold tracking-wide">
                🏆 Award Winner
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-tight">
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                Times Healthcare Achievers
              </span>
              <br />
              <span className="text-white/90">Tamil Nadu 2026</span>
            </h2>

            {/* Separator */}
            <div className="w-20 h-[2px] bg-gradient-to-r from-amber-400/60 via-emerald-400/40 to-transparent rounded-full" />

            {/* Citation */}
            <div className="bg-white/[0.04] border border-white/10 rounded-xl p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-3">
                <FaCertificate className="text-amber-400/80 text-lg mt-0.5 flex-shrink-0" />
                <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">
                  Certificate of Recognition
                </p>
              </div>
              <blockquote className="text-white/85 text-base sm:text-lg leading-relaxed italic border-l-2 border-amber-400/40 pl-4">
                &ldquo;In recognition of your expertise in{" "}
                <span className="text-amber-300 font-semibold not-italic">
                  Multispeciality
                </span>{" "}
                and for creating a lasting impact through compassionate
                healthcare.&rdquo;
              </blockquote>
            </div>

            {/* Description */}
            <p
              className="text-white/70 text-sm sm:text-base leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              SSS Super Speciality Hospital has been honoured with the
              prestigious{" "}
              <span className="text-white font-semibold">
                Times Healthcare Achievers Tamil Nadu 2026
              </span>{" "}
              award by Bennett &amp; Coleman (The Times of India). This
              recognition celebrates our unwavering commitment to excellence,
              expertise in multispeciality healthcare, and dedication to
              delivering quality, compassionate patient care to the people of
              Erode and beyond.
            </p>

            {/* Meta info chips */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/[0.06] border border-white/10 rounded-lg">
                <FaCalendarAlt className="text-emerald-400/70 text-sm" />
                <span className="text-white/70 text-xs sm:text-sm font-medium">
                  16th September 2026
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/[0.06] border border-white/10 rounded-lg">
                <FaMapMarkerAlt className="text-emerald-400/70 text-sm" />
                <span className="text-white/70 text-xs sm:text-sm font-medium">
                  Chennai, Tamil Nadu
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/[0.06] border border-white/10 rounded-lg">
                <FaNewspaper className="text-emerald-400/70 text-sm" />
                <span className="text-white/70 text-xs sm:text-sm font-medium">
                  The Times of India
                </span>
              </div>
            </div>
          </motion.div>
        </article>
      </div>
    </section>
  );
};

export default TimesAwardSection;
