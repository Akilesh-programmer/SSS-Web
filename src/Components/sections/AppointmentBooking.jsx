import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
  FaHeartbeat,
  FaStethoscope,
  FaUserMd,
  FaHospital,
  FaAward,
  FaUsers,
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
        className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
      >
        <Icon className="text-4xl text-white mb-3 mx-auto" />
        <div className="text-3xl font-bold text-white mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-emerald-100 text-sm">{label}</div>
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
            {/* Gradient header */}
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 text-white p-12 relative">
              <div className="absolute inset-0 opacity-20">
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
                      fill="white"
                      fillOpacity="0.1"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>

              <div className="relative text-center">
                <h3 className="text-4xl font-bold mb-4">
                  Ready to Book Your Appointment?
                </h3>
                <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                  Get immediate access to our comprehensive appointment booking
                  system. Choose your preferred doctor, time, and department
                  with just a few clicks.
                </p>

                <motion.button
                  onClick={() => setIsAppointmentOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-emerald-700 px-10 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto"
                >
                  <FaCalendarAlt />
                  Book Appointment Now
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

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center border border-red-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaPhone className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">
                Emergency
              </h3>
              <p className="text-red-700 mb-4">
                24/7 emergency medical services
              </p>
              <p className="text-3xl font-bold text-red-600 mb-6">
                +91 9876543210
              </p>
              <a
                href="tel:+919876543210"
                className="inline-block bg-red-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-600 transition-colors"
              >
                Call Emergency
              </a>
            </div>

            {/* General Contact */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                General Inquiry
              </h3>
              <p className="text-emerald-700 mb-4">
                For general questions and information
              </p>
              <p className="text-xl font-semibold text-emerald-600 mb-6">
                info@ssshospital.com
              </p>
              <a
                href="mailto:info@ssshospital.com"
                className="inline-block bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
              >
                Send Email
              </a>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Visit Us
              </h3>
              <p className="text-blue-700 mb-4">
                Come to our hospital for consultation
              </p>
              <p className="text-lg text-blue-600 mb-6">
                Mon-Sat: 9AM-8PM
                <br />
                Sunday: Emergency Only
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps/place/SSS+superspeciality+hospital/@11.3254179,77.68973,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96ee50acf6c25:0x737ed856b07b068e!8m2!3d11.3254179!4d77.6923049!16s%2Fg%2F11rd8y7h8v?entry=ttu&g_ep=EgoyMDI1MDEyOS4wIKXMDSoASAFQAw%3D%3D",
                    "_blank"
                  )
                }
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Get Directions
              </button>
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
