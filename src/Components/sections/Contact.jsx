import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaAmbulance,
  FaCalendarCheck,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Helper animation presets to avoid repeating identical motion props
const riseIn = (delay = 0, duration = 0.8) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay },
});

const fadeIn = (delay = 0, duration = 0.6) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration, delay },
});

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-gradient-to-r from-emerald-200 to-teal-300 text-emerald-800">
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-emerald-50/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...riseIn(0, 0.8)}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-emerald-800 px-4">
              Get in Touch
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-emerald-700 max-w-3xl mx-auto px-4">
              We're here to provide you with exceptional healthcare services.
              Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Quick Actions */}
        <motion.section {...riseIn(0.2, 0.8)} className="mb-12 lg:mb-16">
          <motion.h2
            {...fadeIn(0.3, 0.6)}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-800 px-4"
          >
            Quick Actions
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0"
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
                className={`${action.color} p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg cursor-pointer transition-all duration-300 transform hover:shadow-xl min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex flex-col justify-center`}
                onClick={action.action}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <action.icon className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 mx-auto" />
                </motion.div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-center mb-1 sm:mb-2">
                  {action.title}
                </h3>
                <p className="text-center opacity-90 text-xs sm:text-sm lg:text-base">
                  {action.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          {...riseIn(0.4, 0.8)}
          className="mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            {...fadeIn(0.5, 0.6)}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800"
          >
            Contact Information
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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
                className={`bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border-l-4 ${
                  info.urgent ? "border-red-400" : "border-emerald-400"
                } hover:shadow-xl transition-all duration-300 cursor-pointer transform min-h-[200px] sm:min-h-[220px] flex flex-col justify-center`}
                onClick={() => window.open(info.action)}
              >
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${
                    info.urgent
                      ? "bg-gradient-to-r from-red-100 to-pink-100"
                      : "bg-gradient-to-r from-emerald-100 to-teal-100"
                  } rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <info.icon
                    className={`text-lg sm:text-xl lg:text-2xl ${
                      info.urgent ? "text-red-500" : "text-emerald-500"
                    }`}
                  />
                </motion.div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-center mb-2 sm:mb-3 text-gray-800">
                  {info.title}
                </h3>
                <p className="text-center font-semibold text-gray-700 mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base">
                  {info.primary}
                </p>
                <p className="text-center text-xs sm:text-sm text-gray-600">
                  {info.secondary}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Hospital Hours */}
        <motion.section
          {...riseIn(0.6, 0.8)}
          className="mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            {...fadeIn(0.7, 0.6)}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800"
          >
            Hospital Hours
          </motion.h2>
          <motion.div
            className="max-w-6xl mx-auto bg-gradient-to-r from-white to-emerald-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
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
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 lg:p-5 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-emerald-50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md border border-gray-100 hover:border-emerald-200"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                    <motion.div
                      initial={{ rotate: -180, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ delay: 1.1 + index * 0.1, type: "spring" }}
                      className="flex-shrink-0"
                    >
                      <FaClock className="text-emerald-500 text-lg sm:text-xl" />
                    </motion.div>
                    <span className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">
                      {schedule.service}
                    </span>
                  </div>
                  <span className="text-gray-600 text-xs sm:text-sm lg:text-base font-medium sm:text-right pl-6 sm:pl-0">
                    {schedule.hours}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Social Media */}
        <motion.section
          {...riseIn(0.8, 0.8)}
          className="mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            {...fadeIn(0.9, 0.6)}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800"
          >
            Follow Us
          </motion.h2>
          <motion.div
            className="flex justify-center gap-4 sm:gap-6 lg:gap-8"
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
                className={`${social.color} p-3 sm:p-4 lg:p-5 rounded-full shadow-lg transition-all duration-300 transform hover:shadow-xl min-w-[48px] min-h-[48px] sm:min-w-[56px] sm:min-h-[56px] lg:min-w-[64px] lg:min-h-[64px] flex items-center justify-center`}
              >
                <motion.div
                  initial={{ rotate: -180 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: 1.2 + index * 0.15, duration: 0.5 }}
                >
                  <social.icon className="text-lg sm:text-xl lg:text-2xl" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.section>

        {/* Emergency Notice */}
        <motion.section
          {...riseIn(1.0, 0.8)}
          className="text-center px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            className="bg-gradient-to-r from-red-100 to-rose-200 text-red-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border-2 border-red-200 max-w-2xl mx-auto"
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
              <FaAmbulance className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 mx-auto" />
            </motion.div>
            <motion.h3
              className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              Medical Emergency?
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6"
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
              className="bg-red-600 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg lg:text-xl font-bold hover:bg-red-700 transition-all duration-300 shadow-lg min-h-[48px] flex items-center justify-center"
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
