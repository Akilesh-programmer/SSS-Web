import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaHeartbeat,
  FaStethoscope,
  FaUserMd,
  FaHospital,
} from "react-icons/fa";
import { useCountAnimation } from "../../hooks/useOptimizedAnimations";
import CallModal from "../ui/CallModal";

// Top-level StatItem component (keeps lint happy)
const StatItem = ({ number, label, icon: Icon, suffix = "" }) => {
  const { count, ref } = useCountAnimation(number, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true, amount: 0.3 }}
      className="group text-center rounded-2xl p-2 sm:p-3 hover:scale-[1.01] transition-transform duration-200 h-full flex w-full"
    >
      <div className="bg-gradient-to-br from-emerald-50 to-white/60 rounded-xl p-4 sm:p-5 shadow-md border border-emerald-100/40 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col items-center justify-center w-full">
        <Icon className="text-3xl sm:text-4xl md:text-5xl text-emerald-600 mb-3 mx-auto" />

        <div className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-gray-800 mb-1 sm:mb-2">
          {count}
          {suffix}
        </div>

        <div className="text-gray-600 text-sm sm:text-sm md:text-base font-medium">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

StatItem.propTypes = {
  number: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  suffix: PropTypes.string,
};

const AppointmentBooking = () => {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

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
                  onClick={() => setIsCallModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg lg:text-xl shadow-lg hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center gap-2 sm:gap-3 mx-auto w-full sm:w-auto max-w-sm sm:max-w-none justify-center"
                >
                  <FaCalendarAlt className="text-sm sm:text-base" />
                  <span className="text-sm sm:text-base lg:text-xl">
                    Book Appointment Now
                  </span>
                </motion.button>

                {/* Hospital Stats (compact on small screens) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 items-stretch">
                  {stats.map((stat) => (
                    <StatItem
                      key={(stat.label || "")
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")}
                      number={stat.number}
                      label={stat.label}
                      icon={stat.icon}
                      suffix={stat.suffix}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call Modal */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        title="Book Appointment"
        primaryNumber="0424 - 2888777"
        secondaryNumber="+91 7729 888777"
        whatsappNumber="+91 7729 888777"
      />
    </>
  );
};

export default AppointmentBooking;
