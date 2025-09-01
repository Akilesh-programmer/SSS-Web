import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaUserMd,
  FaGraduationCap,
  FaClock,
  FaCalendarAlt,
  FaStethoscope,
  FaAward,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaHeart,
  FaHeartbeat,
  FaSyringe,
  FaHospital,
  FaMicroscope,
} from "react-icons/fa";
import DefaultDoctorAvatar from "./DefaultDoctorAvatar";

const DoctorPopup = ({ isOpen, onClose, doctor }) => {
  if (!doctor) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(10px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-black/50"
          />

          {/* Floating medical icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => {
              const icons = [
                <FaHeart className="text-2xl text-emerald-300" />,
                <FaStethoscope className="text-2xl text-blue-300" />,
                <FaHeartbeat className="text-2xl text-red-300" />,
                <FaSyringe className="text-2xl text-green-300" />,
                <FaHospital className="text-2xl text-purple-300" />,
                <FaMicroscope className="text-2xl text-cyan-300" />,
              ];

              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 360],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    delay: i * 0.4,
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  style={{
                    left: `${10 + ((i * 8) % 80)}%`,
                    top: `${15 + ((i * 6) % 70)}%`,
                  }}
                >
                  {icons[i % icons.length]}
                </motion.div>
              );
            })}
          </div>

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors group"
            >
              <FaTimes className="text-gray-600 group-hover:text-gray-800" />
            </button>

            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 text-white p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>

              <div className="relative flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-3 border-white/30">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  ) : (
                    <DefaultDoctorAvatar size="medium" className="w-20 h-20" />
                  )}
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-2">{doctor.name}</h2>
                  <p className="text-emerald-100 text-lg font-medium mb-1">
                    {doctor.designation}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-200">
                    <FaClock className="text-sm" />
                    <span>{doctor.experience} Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Qualifications */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Qualifications
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {doctor.qualifications}
                </p>
              </div>

              {/* Specialization */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <FaStethoscope className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Specialization
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {doctor.specialization}
                </p>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <FaCalendarAlt className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Availability
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {doctor.availability}
                </p>
              </div>

              {/* Awards & Recognition (if available) */}
              {doctor.awards && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                      <FaAward className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Awards & Recognition
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {doctor.awards.map((award, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FaStar className="text-yellow-500 text-sm" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact Actions */}
              <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FaCalendarAlt />
                  Book Appointment
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FaPhone />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FaEnvelope />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DoctorPopup;
