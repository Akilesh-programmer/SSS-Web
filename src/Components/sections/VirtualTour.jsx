import React, { useState } from "react";
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
import hospitalVideo from "../../assets/Hospital Full Tour Video.mp4";
import hospitalImg from "../../assets/sss-hospital.avif";

const VirtualTour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="virtual-tour"
      className="py-16 bg-gradient-to-br from-gray-50 via-emerald-50/30 to-gray-50 relative overflow-hidden"
    >
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100/20 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100/30 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200/20 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-blue-100/20 rounded-full opacity-30 animate-bounce"></div>

        {/* Floating medical icons */}
        {[
          {
            icon: FaStethoscope,
            delay: 0,
            x: 10,
            y: 15,
            color: "text-emerald-400/20",
          },
          {
            icon: FaHeartbeat,
            delay: 0.5,
            x: 85,
            y: 20,
            color: "text-red-400/20",
          },
          { icon: FaUserMd, delay: 1, x: 15, y: 70, color: "text-blue-400/20" },
          {
            icon: FaHospital,
            delay: 1.5,
            x: 90,
            y: 75,
            color: "text-green-400/20",
          },
          {
            icon: FaAmbulance,
            delay: 2,
            x: 25,
            y: 35,
            color: "text-orange-400/20",
          },
          {
            icon: FaMicroscope,
            delay: 2.5,
            x: 75,
            y: 45,
            color: "text-purple-400/20",
          },
          {
            icon: FaShieldAlt,
            delay: 3,
            x: 45,
            y: 80,
            color: "text-indigo-400/20",
          },
          {
            icon: FaCalendarAlt,
            delay: 3.5,
            x: 65,
            y: 25,
            color: "text-teal-400/20",
          },
        ].map((item, i) => (
          <motion.div
            key={`floating-bg-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.6, 0.3, 0.8, 0.2],
              scale: [0, 1.2, 0.8, 1.5, 0.6],
              rotate: [0, 180, 360],
              y: [0, -20, 0, -10, 0],
            }}
            transition={{
              delay: item.delay,
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute text-4xl"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
          >
            <item.icon className={item.color} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 mb-6"
          >
            <span className="text-emerald-700 font-semibold text-sm">
              🎥 VIRTUAL EXPERIENCE
            </span>
          </motion.div>

          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-900 via-teal-800 to-emerald-900 bg-clip-text text-transparent mb-6">
            Take a Virtual Tour
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our state-of-the-art facilities and modern infrastructure
            that makes SSS Super Speciality Hospital the best choice for your
            healthcare needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main video container with enhanced styling */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer hover:shadow-3xl transition-all duration-500">
              {/* Elegant border effect with multiple layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white p-1 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/50 via-transparent to-teal-200/50 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent rounded-3xl"></div>
              </div>

              <div className="relative rounded-3xl overflow-hidden bg-white p-2">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 p-1">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={hospitalImg}
                      alt="SSS Hospital Virtual Tour"
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-500"></div>

                    {/* Play Button with Multiple Ripple Effects */}
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="relative">
                        {/* Multiple ripple animations */}
                        <motion.div
                          className="absolute inset-0 w-24 h-24 bg-white/15 rounded-full"
                          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 w-24 h-24 bg-emerald-300/20 rounded-full"
                          animate={{
                            scale: [1, 1.8, 1],
                            opacity: [0.3, 0, 0.3],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                        />
                        <motion.div
                          className="absolute inset-0 w-24 h-24 bg-white/10 rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.4, 0, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        />

                        {/* Main play button - Enhanced */}
                        <motion.div
                          className="relative w-24 h-24 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-4 border-white/60"
                          whileHover={{
                            scale: 1.2,
                            backgroundColor: "rgba(255,255,255,1)",
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaPlay className="text-emerald-600 text-3xl ml-1 drop-shadow-lg" />
                        </motion.div>
                      </div>
                    </button>

                    {/* Enhanced Video Label */}
                    <motion.div
                      className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg border border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      <p className="text-emerald-900 font-bold text-lg">
                        Hospital Full Tour
                      </p>
                      <p className="text-gray-600 text-sm">
                        🎬 Click to explore our facilities
                      </p>
                    </motion.div>

                    {/* Duration badge */}
                    <motion.div
                      className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <p className="text-white text-sm font-medium">🕒 3:45</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Hospital Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {[
                {
                  number: "150+",
                  label: "Beds",
                  icon: "🏥",
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  number: "4",
                  label: "Operating Theatres",
                  icon: "⚕️",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  number: "30+",
                  label: "ICU Beds",
                  icon: "🚨",
                  color: "from-red-500 to-red-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={`stat-${index}`}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                >
                  <div className={`text-3xl mb-2`}>{stat.icon}</div>
                  <h3
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hospital Information - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header with floating accent */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-pulse"
              />
              <h3 className="text-4xl font-bold text-gray-900 mb-6 relative">
                Modern Healthcare Infrastructure
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 origin-left"
                />
              </h3>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                Our hospital features cutting-edge medical technology, spacious
                patient rooms, and world-class facilities designed to provide
                the highest standard of care in a comfortable and healing
                environment.
              </p>
            </div>

            {/* Key Features - Enhanced */}
            <div className="space-y-6">
              {[
                {
                  emoji: "🏥",
                  title: "Advanced AI & 3D Cath Lab",
                  description:
                    "State-of-the-art cardiac catheterization laboratory with AI technology",
                  color: "from-emerald-500 to-emerald-600",
                },
                {
                  emoji: "🚑",
                  title: "24/7 Emergency Services",
                  description:
                    "Round-the-clock emergency care with trained paramedics",
                  color: "from-red-500 to-red-600",
                },
                {
                  emoji: "🔬",
                  title: "Modern Diagnostic Center",
                  description:
                    "Advanced radiology and laboratory services for accurate diagnosis",
                  color: "from-blue-500 to-blue-600",
                },
              ].map((feature, index) => (
                <motion.div
                  key={`feature-${index}`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <span className="text-white text-2xl">{feature.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-emerald-700 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Video Modal */}
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-md z-[9999] flex items-center justify-center pt-20 pb-8 px-4"
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Floating medical icons around modal */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[
                {
                  icon: FaStethoscope,
                  delay: 0,
                  x: 10,
                  y: 15,
                  color: "text-emerald-400/60",
                },
                {
                  icon: FaHeartbeat,
                  delay: 0.5,
                  x: 85,
                  y: 20,
                  color: "text-red-400/60",
                },
                {
                  icon: FaUserMd,
                  delay: 1,
                  x: 15,
                  y: 70,
                  color: "text-blue-400/60",
                },
                {
                  icon: FaHospital,
                  delay: 1.5,
                  x: 90,
                  y: 75,
                  color: "text-green-400/60",
                },
                {
                  icon: FaAmbulance,
                  delay: 2,
                  x: 25,
                  y: 35,
                  color: "text-orange-400/60",
                },
                {
                  icon: FaMicroscope,
                  delay: 2.5,
                  x: 75,
                  y: 45,
                  color: "text-purple-400/60",
                },
                {
                  icon: FaShieldAlt,
                  delay: 3,
                  x: 45,
                  y: 80,
                  color: "text-indigo-400/60",
                },
                {
                  icon: FaCalendarAlt,
                  delay: 3.5,
                  x: 65,
                  y: 25,
                  color: "text-teal-400/60",
                },
              ].map((item, i) => (
                <motion.div
                  key={`modal-floating-${i}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.8, 0.4, 0.9, 0.3],
                    scale: [0, 1.5, 1, 1.8, 0.8],
                    rotate: [0, 180, 360],
                    y: [0, -30, 0, -15, 0],
                  }}
                  transition={{
                    delay: item.delay,
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute text-4xl"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                  }}
                >
                  <item.icon className={item.color} />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/30"
              onClick={(e) => e.stopPropagation()}
              style={{ aspectRatio: "16/9" }}
            >
              {/* Close button - Enhanced */}
              <motion.button
                onClick={() => setIsVideoOpen(false)}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(239, 68, 68, 0.8)",
                }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500/80 transition-all duration-300 border border-white/30 shadow-lg"
              >
                <FaTimes className="text-xl" />
              </motion.button>

              {/* Video title overlay */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30 shadow-lg"
              >
                <h3 className="text-white font-semibold">
                  🎬 SSS Hospital Full Tour
                </h3>
                <p className="text-white/80 text-sm">
                  Experience our world-class facilities
                </p>
              </motion.div>

              {/* Video element */}
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
