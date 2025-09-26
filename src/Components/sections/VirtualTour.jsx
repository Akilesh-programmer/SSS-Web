import { useState } from "react";
import {
  FaPlay,
  FaTimes,
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaAmbulance,
  FaMicroscope,
  FaStethoscope,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCountAnimation } from "../../hooks/useOptimizedAnimations";
import hospitalVideo from "../../assets/Hospital Full Tour Video.mp4";
import hospitalImg from "../../assets/sss-hospital.avif";

// Individual stat component using hook for visibility-triggered counting
const TourStat = ({ value, suffix = "", label, icon, delay = 0 }) => {
  const { count, ref } = useCountAnimation(value, 2000);
  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
      <h3 className="text-2xl sm:text-3xl font-bold">
        {count}
        {suffix}
      </h3>
      <p className="text-xs sm:text-sm text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

TourStat.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  delay: PropTypes.number,
};

// Floating icons used in background and modal
const FloatingIcons = ({ variant = "bg" }) => {
  const base = [
    {
      Icon: FaStethoscope,
      x: "10%",
      y: "15%",
      color: "text-emerald-400/30",
      delay: 0,
    },
    {
      Icon: FaHeartbeat,
      x: "85%",
      y: "20%",
      color: "text-red-400/30",
      delay: 0.5,
    },
    { Icon: FaUserMd, x: "15%", y: "70%", color: "text-blue-400/30", delay: 1 },
    {
      Icon: FaHospital,
      x: "90%",
      y: "75%",
      color: "text-green-400/30",
      delay: 1.5,
    },
    {
      Icon: FaAmbulance,
      x: "25%",
      y: "35%",
      color: "text-orange-400/30",
      delay: 2,
    },
    {
      Icon: FaMicroscope,
      x: "75%",
      y: "45%",
      color: "text-purple-400/30",
      delay: 2.5,
    },
    {
      Icon: FaShieldAlt,
      x: "45%",
      y: "80%",
      color: "text-indigo-400/30",
      delay: 3,
    },
    {
      Icon: FaCalendarAlt,
      x: "65%",
      y: "25%",
      color: "text-teal-400/30",
      delay: 3.5,
    },
  ];

  // For background we keep slightly smaller icons; for modal make them more visible
  return base.map((it, idx) => (
    <motion.div
      key={`${variant}-icon-${idx}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: [0, 0.7, 0.3, 0.7],
        scale: [0.6, 1.1, 0.9, 1.2],
        y: [0, -20, 0],
      }}
      transition={{
        delay: it.delay,
        duration: variant === "modal" ? 6 : 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${variant === "modal" ? "text-5xl" : "text-4xl"}`}
      style={{ left: it.x, top: it.y }}
    >
      <it.Icon className={it.color} />
    </motion.div>
  ));
};

const VirtualTour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="virtual-tour"
      className="py-16 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50 relative overflow-hidden"
    >
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100/20 rounded-full opacity-50 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100/30 rounded-full opacity-60 animate-bounce" />
        <FloatingIcons variant="bg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
          >
            <span className="text-emerald-700 font-semibold text-xs sm:text-sm">
              🎥 VIRTUAL EXPERIENCE
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
            Take a Virtual Tour
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our state-of-the-art facilities and modern infrastructure
            that makes SSS Super Speciality Hospital the best choice for your
            healthcare needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative px-4 sm:px-0"
          >
            {/* Main video container with restored multi-layer border */}
            <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group cursor-pointer hover:shadow-3xl transition-all duration-500">
              {/* Elegant border effect with multiple layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white p-1 rounded-xl sm:rounded-2xl lg:rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 via-transparent to-teal-200/50 rounded-xl sm:rounded-2xl lg:rounded-3xl" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rounded-xl sm:rounded-2xl lg:rounded-3xl" />
              </div>

              <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-white p-1 sm:p-2">
                <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 p-1">
                  <div className="relative rounded-md sm:rounded-lg lg:rounded-xl overflow-hidden">
                    <img
                      src={hospitalImg}
                      alt="SSS Hospital Virtual Tour"
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />

                    {/* Play Button with ripple effects */}
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                      aria-label="Open hospital tour video"
                    >
                      <div className="relative">
                        <motion.div
                          className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/15 rounded-full"
                          animate={{
                            scale: [1, 1.9, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white/60"
                          whileHover={{ scale: 1.15 }}
                        >
                          <FaPlay className="text-emerald-600 text-xl sm:text-2xl lg:text-3xl ml-1 drop-shadow-lg" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Video label and duration */}
                    <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 lg:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
                      <p className="text-emerald-900 font-bold text-sm sm:text-base lg:text-lg">
                        Hospital Full Tour
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        🎬 Click to explore our facilities
                      </p>
                    </div>

                    <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 bg-black/80 backdrop-blur-sm rounded-md sm:rounded-lg px-2 sm:px-3 py-1">
                      <p className="text-white text-xs sm:text-sm font-medium">
                        🕒 3:45
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital Stats (compact) */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                { value: 150, suffix: "+", label: "Beds", icon: "🏥" },
                {
                  value: 4,
                  suffix: "",
                  label: "Operating Theatres",
                  icon: "⚕️",
                },
                { value: 30, suffix: "+", label: "ICU Beds", icon: "🚨" },
              ].map((stat, index) => {
                const key = (stat.label || "")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-");
                return (
                  <TourStat
                    key={key}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    icon={stat.icon}
                    delay={0.8 + index * 0.2}
                  />
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 px-4 sm:px-0"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-pulse"
              />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 relative">
                Modern Healthcare Infrastructure
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 origin-left"
                />
              </h3>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
                Our hospital features cutting-edge medical technology, spacious
                patient rooms, and world-class facilities designed to provide
                the highest standard of care in a comfortable and healing
                environment.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  emoji: "🏥",
                  title: "Advanced AI & 3D Cath Lab",
                  description:
                    "State-of-the-art cardiac catheterization laboratory with AI technology",
                },
                {
                  emoji: "🚑",
                  title: "24/7 Emergency Services",
                  description:
                    "Round-the-clock emergency care with trained paramedics",
                },
                {
                  emoji: "🔬",
                  title: "Modern Diagnostic Center",
                  description:
                    "Advanced radiology and laboratory services for accurate diagnosis",
                },
              ].map((feature, index) => {
                const key = (feature.title || "")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-");
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3 sm:gap-4 lg:gap-6 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
                    >
                      <span className="text-white text-lg sm:text-xl lg:text-2xl">
                        {feature.emoji}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-base sm:text-lg lg:text-xl mb-1 sm:mb-2 group-hover:text-emerald-700 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Video modal with floating icons */}
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-[9999] flex items-center justify-center pt-16 sm:pt-20 pb-4 sm:pb-8 px-2 sm:px-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <FloatingIcons variant="modal" />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/30"
              onClick={(e) => e.stopPropagation()}
              style={{ aspectRatio: "16/9" }}
            >
              <motion.button
                onClick={() => setIsVideoOpen(false)}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(239, 68, 68, 0.8)",
                }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500/80 transition-all duration-300 border border-white/30 shadow-lg"
              >
                <FaTimes className="text-lg sm:text-xl" />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 border border-white/30 shadow-lg"
              >
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  🎬 SSS Hospital Full Tour
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">
                  Experience our world-class facilities
                </p>
              </motion.div>

              <video
                src={hospitalVideo}
                controls
                autoPlay
                className="w-full h-full object-cover rounded-3xl"
                poster={hospitalImg}
              >
                <track
                  kind="captions"
                  src=""
                  srcLang="en"
                  label="English captions"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VirtualTour;
