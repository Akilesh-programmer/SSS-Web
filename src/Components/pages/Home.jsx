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
import hospitalImg from "../../assets/sss-hospital.avif";

export default function Home() {
  return (
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight text-center lg:text-left"
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
                className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 text-center lg:text-left px-4 lg:px-0"
              >
                Experience world-class healthcare with cutting-edge technology
                and compassionate care at SSS Super Speciality Hospital, Erode.
              </motion.p>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaHospital className="text-emerald-600 text-lg lg:text-xl" />
                  </div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">
                    30+
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600">ICU Beds</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaAward className="text-emerald-600 text-lg lg:text-xl" />
                  </div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">
                    25+
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600">
                    Specialities
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FaStethoscope className="text-emerald-600 text-lg lg:text-xl" />
                  </div>
                  <p className="text-xl lg:text-2xl font-bold text-gray-900">
                    24/7
                  </p>
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-0 sm:mx-4">
                <img
                  src={hospitalImg}
                  alt="SSS Hospital"
                  className="w-full h-80 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Floating stats card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg"
                >
                  <p className="text-emerald-600 font-semibold text-xs lg:text-sm">
                    Best Hospital in Erode
                  </p>
                  <p className="text-gray-900 font-bold text-sm lg:text-lg">
                    150+ Beds Available
                  </p>
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
                    key={`floating-${i}`}
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
  );
}
