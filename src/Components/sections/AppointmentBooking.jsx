import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaPhone,
  FaClock,
  FaHeartbeat,
  FaStethoscope,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";
import { useCountAnimation } from "../../hooks/useOptimizedAnimations";
import AppointmentPopup from "../ui/AppointmentPopup";

const AppointmentBooking = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  // Statistics with counting animations
  const StatItem = ({ number, label, icon: Icon, suffix = "" }) => {
    const { count, ref } = useCountAnimation(number, 2500);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 border border-emerald-200/30 shadow-sm hover:shadow-md"
      >
        <Icon className="text-4xl text-emerald-600 mb-3 mx-auto" />
        <div className="text-3xl font-bold text-gray-800 mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-gray-600 text-sm font-medium">{label}</div>
      </motion.div>
    );
  };

  const stats = [
    { number: 150, label: "Hospital Beds", icon: FaHospital, suffix: "+" },
    { number: 30, label: "ICU Beds", icon: FaHeartbeat, suffix: "+" },
    { number: 25, label: "Specialties", icon: FaUserMd, suffix: "+" },
    { number: 4, label: "Operating Theatres", icon: FaStethoscope },
  ];

  return (
    <>
      <section
        id="appointment"
        className="py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 relative overflow-hidden scroll-mt-20 lg:scroll-mt-24"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-100 rounded-full opacity-60"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-100 rounded-full opacity-40"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 bg-emerald-200 rounded-full opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0.3, y: 15 }} // Start with some opacity to show content
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              viewport={{ once: true, amount: 0.3 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <div className="relative">
                <FaHeartbeat className="text-8xl text-emerald-600 heart-pulse-red drop-shadow-lg" />
                <div className="absolute inset-0 bg-emerald-200 rounded-full opacity-20 animate-ping"></div>
              </div>
            </motion.div>

            <h2 className="text-5xl font-bold text-emerald-900 mb-6">
              Your Health, Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Book your appointment with our world-class medical experts.
              Experience healthcare excellence with state-of-the-art facilities
              and compassionate care.
            </p>
          </motion.div>

          {/* Main CTA Section */}
          <motion.div
            initial={{ opacity: 0.3, y: 15 }} // Start with some opacity to show content
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 relative"
          >
            {/* Professional gradient header */}
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 text-gray-800 p-12 relative border-b border-emerald-200/50">
              <div className="absolute inset-0 opacity-10">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="w-full h-full"
                >
                  <pattern
                    id="pattern"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="20"
                      cy="20"
                      r="10"
                      fill="currentColor"
                      fillOpacity="0.05"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>

              <div className="relative text-center">
                <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                  Ready to Book Your Appointment?
                </h3>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  Get immediate access to our comprehensive appointment booking
                  system. Choose your preferred doctor, time, and department
                  with just a few clicks.
                </p>

                <motion.button
                  onClick={() => setIsAppointmentOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-2 sm:gap-3 mx-auto w-full sm:w-auto max-w-sm sm:max-w-none justify-center"
                >
                  <FaCalendarAlt className="text-sm sm:text-base" />
                  <span className="text-sm sm:text-base lg:text-xl">
                    Book Appointment Now
                  </span>
                </motion.button>

                {/* Hospital Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  {stats.map((stat, index) => (
                    <StatItem
                      key={index}
                      number={stat.number}
                      label={stat.label}
                      icon={stat.icon}
                      suffix={stat.suffix}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaClock className="text-2xl text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Quick Booking
                  </h4>
                  <p className="text-gray-600">
                    Book your appointment in less than 2 minutes with our
                    streamlined process.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaCalendarAlt className="text-2xl text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Flexible Scheduling
                  </h4>
                  <p className="text-gray-600">
                    Choose from available time slots that work best for your
                    schedule.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <FaPhone className="text-2xl text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Instant Confirmation
                  </h4>
                  <p className="text-gray-600">
                    Get immediate confirmation via call or message within 24
                    hours.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Popup */}
      <AppointmentPopup
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </>
  );
};

export default AppointmentBooking;
