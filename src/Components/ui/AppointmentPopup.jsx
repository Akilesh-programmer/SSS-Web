import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaCalendarAlt,
  FaUserMd,
  FaClock,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaSpinner,
  FaTimes,
  FaHeart,
  FaStethoscope,
  FaHeartbeat,
  FaSyringe,
  FaHospital,
  FaMicroscope,
  FaHandHoldingMedical,
  FaCapsules,
} from "react-icons/fa";

const AppointmentPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = [
    "Cardiology",
    "Dermatology & Cosmetology",
    "Neurology",
    "Orthopaedics",
    "Paediatrics",
    "General Surgery",
    "Internal Medicine",
    "Ophthalmology",
    "Dental & Oral Surgery",
    "Obstetrics & Gynaecology",
    "ENT & Head & Neck",
    "Emergency Care",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
  ];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset form when popup closes
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        department: "",
        doctor: "",
        date: "",
        time: "",
        message: "",
      });
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration (you'll need to set this up)
      const templateParams = {
        to_name: "SSS Hospital Admin",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        department: formData.department,
        doctor: formData.doctor,
        date: formData.date,
        time: formData.time,
        message: formData.message,
        reply_to: formData.email,
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      );

      setIsSubmitted(true);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert(
        "Failed to send appointment request. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get tomorrow's date as minimum date for appointment
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  const handleClose = () => {
    onClose();
  };

  // Success Screen
  const SuccessScreen = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center p-8"
    >
      <div className="relative mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-4"
        >
          <FaCheckCircle className="text-4xl text-white" />
        </motion.div>

        {/* Floating particles effect */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, (i - 3) * 40],
                y: [0, -60],
              }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              style={{
                left: "50%",
                top: "50%",
              }}
            />
          ))}
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-gray-900 mb-4"
      >
        Appointment Request Sent!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-600 mb-6 max-w-md mx-auto"
      >
        Thank you for choosing SSS Super Speciality Hospital. We have received
        your appointment request and will contact you shortly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 mb-8 border border-emerald-200"
      >
        <div className="flex items-center justify-center mb-3">
          <FaPhone className="text-emerald-600 mr-2" />
          <p className="text-emerald-800 font-semibold">Emergency Contact</p>
        </div>
        <p className="text-emerald-900 text-xl font-bold">+91 9876543210</p>
        <p className="text-emerald-700 text-sm">Available 24/7</p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        onClick={handleClose}
        className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        Close
      </motion.button>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ backdropFilter: "blur(0px)" }}
            animate={{ backdropFilter: "blur(10px)" }}
            exit={{ backdropFilter: "blur(0px)" }}
            className="absolute inset-0 bg-black/50"
          />

          {/* Floating decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(16)].map((_, i) => {
              const icons = [
                <FaHeart className="text-3xl text-emerald-300" />,
                <FaStethoscope className="text-3xl text-blue-300" />,
                <FaHeartbeat className="text-3xl text-red-300" />,
                <FaUserMd className="text-3xl text-indigo-300" />,
                <FaSyringe className="text-3xl text-green-300" />,
                <FaHospital className="text-3xl text-purple-300" />,
                <FaMicroscope className="text-3xl text-cyan-300" />,
                <FaHandHoldingMedical className="text-3xl text-pink-300" />,
                <FaCapsules className="text-3xl text-yellow-300" />,
                <FaCalendarAlt className="text-3xl text-orange-300" />,
              ];

              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.4, 0],
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360],
                    x: [0, Math.sin(i) * 20, 0],
                    y: [0, Math.cos(i) * 20, 0],
                  }}
                  transition={{
                    delay: i * 0.3,
                    duration: 6,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${5 + ((i * 6) % 90)}%`,
                    top: `${10 + ((i * 7) % 80)}%`,
                    filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))",
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
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors group"
            >
              <FaTimes className="text-gray-600 group-hover:text-gray-800" />
            </button>

            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 text-white p-8 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              </div>

              <div className="relative">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl font-bold flex items-center gap-3 mb-2"
                >
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <FaCalendarAlt />
                  </motion.div>
                  Book Your Appointment
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-emerald-100"
                >
                  Schedule your consultation with our expert medical team
                </motion.p>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
              {isSubmitted ? (
                <SuccessScreen />
              ) : (
                <form onSubmit={handleSubmit} className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Personal Information */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 flex items-center gap-3 border-b border-gray-200 pb-3">
                        <FaUser className="text-emerald-600" />
                        Personal Information
                      </h4>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </motion.div>

                    {/* Appointment Details */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6"
                    >
                      <h4 className="text-xl font-semibold text-gray-900 flex items-center gap-3 border-b border-gray-200 pb-3">
                        <FaUserMd className="text-emerald-600" />
                        Appointment Details
                      </h4>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Department *
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300"
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Doctor (Optional)
                        </label>
                        <input
                          type="text"
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="Any specific doctor preference"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            min={minDate}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Time *
                          </label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300"
                          >
                            <option value="">Select Time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 hover:border-gray-300"
                      placeholder="Any specific symptoms, concerns, or additional information..."
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-center"
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3 mx-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <FaCalendarAlt />
                          Book Appointment
                        </>
                      )}
                    </button>
                    <p className="text-sm text-gray-600 mt-4">
                      * Required fields. We'll contact you within 24 hours to
                      confirm your appointment.
                    </p>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentPopup;
