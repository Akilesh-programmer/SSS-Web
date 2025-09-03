import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaAmbulance,
  FaHospital,
  FaUserMd,
  FaCalendarCheck,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: "Emergency Hotline",
      primary: "+91 98765 43210",
      secondary: "24/7 Emergency Services",
      action: "tel:+919876543210",
      urgent: true,
    },
    {
      icon: FaPhone,
      title: "Appointment Booking",
      primary: "+91 6379276131",
      secondary: "Mon-Sat: 9AM-8PM",
      action: "tel:+916379276131",
      urgent: false,
    },
    {
      icon: FaEnvelope,
      title: "Email Support",
      primary: "info@ssshospital.com",
      secondary: "Response within 24 hours",
      action: "mailto:info@ssshospital.com",
      urgent: false,
    },
    {
      icon: FaMapMarkerAlt,
      title: "Hospital Address",
      primary: "167/2C1, Perundurai Rd",
      secondary: "Diamond Nagar, Nalliyampalayam, Erode - 638009",
      action: "https://maps.google.com/?q=167/2C1+Perundurai+Rd+Erode",
      urgent: false,
    },
  ];

  const hospitalHours = [
    { service: "OPD Services", hours: "Mon-Sat: 9:00 AM - 8:00 PM" },
    { service: "Emergency Services", hours: "24/7 Available" },
    { service: "ICU Visiting", hours: "Daily: 4:00 PM - 6:00 PM" },
    { service: "Pharmacy", hours: "Mon-Sat: 8:00 AM - 9:00 PM" },
    { service: "Laboratory", hours: "Mon-Sat: 7:00 AM - 7:00 PM" },
    { service: "Radiology", hours: "Mon-Sat: 8:00 AM - 6:00 PM" },
  ];

  const quickActions = [
    {
      icon: FaCalendarCheck,
      title: "Book Appointment",
      subtitle: "Schedule your visit",
      action: () => window.open("tel:+916379276131"),
      color:
        "bg-gradient-to-r from-emerald-100 to-teal-200 hover:from-emerald-200 hover:to-teal-300 text-emerald-700 hover:text-emerald-800",
    },
    {
      icon: FaAmbulance,
      title: "Emergency",
      subtitle: "Call immediately",
      action: () => window.open("tel:+919876543210"),
      color:
        "bg-gradient-to-r from-red-100 to-rose-200 hover:from-red-200 hover:to-rose-300 text-red-700 hover:text-red-800",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      subtitle: "Chat with us",
      action: () => window.open("https://wa.me/916379276131"),
      color:
        "bg-gradient-to-r from-green-100 to-emerald-200 hover:from-green-200 hover:to-emerald-300 text-green-700 hover:text-green-800",
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61553553123476",
      color:
        "bg-gradient-to-r from-blue-100 to-indigo-200 hover:from-blue-200 hover:to-indigo-300 text-blue-600 hover:text-blue-700",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
      url: "https://www.instagram.com/ssshospitals_",
      color:
        "bg-gradient-to-r from-pink-100 to-purple-200 hover:from-pink-200 hover:to-purple-300 text-pink-600 hover:text-pink-700",
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://x.com/sss_hospitals",
      color:
        "bg-gradient-to-r from-sky-100 to-blue-200 hover:from-sky-200 hover:to-blue-300 text-sky-600 hover:text-sky-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-200 to-teal-300 text-emerald-800">
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-emerald-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-emerald-800">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 max-w-3xl mx-auto">
              We're here to provide you with exceptional healthcare services.
              Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Quick Actions
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              staggerChildren: 0.2,
            }}
          >
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className={`${action.color} p-8 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 transform hover:shadow-xl`}
                onClick={action.action}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                >
                  <action.icon className="text-4xl mb-4 mx-auto" />
                </motion.div>
                <h3 className="text-xl font-bold text-center mb-2">
                  {action.title}
                </h3>
                <p className="text-center opacity-90">{action.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Contact Information
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              staggerChildren: 0.15,
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 80,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 ${
                  info.urgent ? "border-red-400" : "border-emerald-400"
                } hover:shadow-xl transition-all duration-300 cursor-pointer transform`}
                onClick={() => window.open(info.action)}
              >
                <motion.div
                  className={`w-16 h-16 ${
                    info.urgent
                      ? "bg-gradient-to-r from-red-100 to-pink-100"
                      : "bg-gradient-to-r from-emerald-100 to-teal-100"
                  } rounded-full flex items-center justify-center mb-6 mx-auto`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <info.icon
                    className={`text-2xl ${
                      info.urgent ? "text-red-500" : "text-emerald-500"
                    }`}
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-center mb-3 text-gray-800">
                  {info.title}
                </h3>
                <p className="text-center font-semibold text-gray-700 mb-2">
                  {info.primary}
                </p>
                <p className="text-center text-sm text-gray-600">
                  {info.secondary}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Hospital Hours */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Hospital Hours
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-r from-white to-emerald-50 rounded-2xl shadow-lg p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                staggerChildren: 0.1,
              }}
            >
              {hospitalHours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.0 + index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    transition: { duration: 0.2 },
                  }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                    >
                      <FaClock className="text-emerald-500" />
                    </motion.div>
                    <span className="font-semibold text-gray-800">
                      {schedule.service}
                    </span>
                  </div>
                  <span className="text-gray-600">{schedule.hours}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Social Media */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Follow Us
          </motion.h2>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              staggerChildren: 0.2,
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.1 + index * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} p-4 rounded-full shadow-lg transition-all duration-300 transform hover:shadow-xl`}
              >
                <motion.div
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
                >
                  <social.icon className="text-2xl" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Emergency Notice */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <motion.div
            className="bg-gradient-to-r from-red-100 to-rose-200 text-red-800 p-8 rounded-2xl shadow-lg border-2 border-red-200"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, type: "spring" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            >
              <FaAmbulance className="text-4xl mb-4 mx-auto" />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Medical Emergency?
            </motion.h3>
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Call our 24/7 emergency hotline
            </motion.p>
            <motion.a
              href="tel:+919876543210"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 150 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-lg"
            >
              +91 98765 43210
            </motion.a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
