import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaAmbulance,
  FaClock,
  FaCalendarCheck,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import CallModal from "../ui/CallModal";

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
  // Contact information copied from Footer (keep in sync with Footer.jsx)
  const contactInfo = [
    {
      id: "hospital-lines",
      icon: FaPhone,
      title: "Hospital Lines",
      primary: "0424 - 2888777",
      secondary: "+91 7729 888777",
      // modal-driven; handled by component state
      action: null,
      urgent: false,
    },
    {
      id: "email",
      icon: FaEnvelope,
      title: "Email",
      primary: "info@ssshospitals.in",
      secondary: "",
      action: "mailto:info@ssshospitals.in",
      urgent: false,
    },
    {
      id: "availability",
      icon: FaClock,
      title: "Availability",
      primary: "24/7 Available",
      secondary: "Always here for you",
      action: null,
      urgent: false,
    },
    {
      id: "address",
      icon: FaMapMarkerAlt,
      title: "Address",
      primary: "167/2C1, Perundurai Road",
      secondary: "Opp to SBI Bank, URC Nagar, Erode - 638 009",
      action: "https://maps.google.com/?q=SSS+Hospital+Erode",
      urgent: false,
    },
  ];

  // Modal state for call options
  const [callModalOpen, setCallModalOpen] = useState(false);

  const handleInfoClick = (info) => {
    if (info.id === "hospital-lines") {
      setCallModalOpen(true);
      return;
    }
    if (!info.action) return;
    try {
      if (typeof info.action === "function") info.action();
      else if (typeof info.action === "string") window.open(info.action);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Contact action failed", e);
    }
  };

  const handleQuickAction = (action) => {
    if (action.id === "book-appointment") {
      setCallModalOpen(true);
      return;
    }
    try {
      if (typeof action.action === "function") action.action();
      else if (typeof action.action === "string") window.open(action.action);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn("Quick action failed", e);
    }
  };

  const quickActions = [
    {
      id: "book-appointment",
      icon: FaCalendarCheck,
      title: "Book Appointment",
      subtitle: "Schedule your visit",
      action: () => window.open("tel:+916379276131"),
      color:
        "bg-gradient-to-r from-emerald-100 to-teal-200 hover:from-emerald-200 hover:to-teal-300 text-emerald-700 hover:text-emerald-800",
    },
    {
      id: "emergency-action",
      icon: FaAmbulance,
      title: "Emergency",
      subtitle: "Call immediately",
      action: () => window.open("tel:+918925931193"),
      color:
        "bg-gradient-to-r from-red-100 to-rose-200 hover:from-red-200 hover:to-rose-300 text-red-700 hover:text-red-800",
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      title: "WhatsApp",
      subtitle: "Chat with us",
      action: () => window.open("https://wa.me/917729888777"),
      color:
        "bg-gradient-to-r from-green-100 to-emerald-200 hover:from-green-200 hover:to-emerald-300 text-green-700 hover:text-green-800",
    },
  ];

  const socialLinks = [
    {
      id: "facebook",
      icon: FaFacebook,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61553553123476",
      color:
        "bg-gradient-to-r from-blue-100 to-indigo-200 hover:from-blue-200 hover:to-indigo-300 text-blue-600 hover:text-blue-700",
    },
    {
      id: "instagram",
      icon: FaInstagram,
      name: "Instagram",
      url: "https://www.instagram.com/ssshospitals_",
      color:
        "bg-gradient-to-r from-pink-100 to-purple-200 hover:from-pink-200 hover:to-purple-300 text-pink-600 hover:text-pink-700",
    },
    {
      id: "twitter",
      icon: FaTwitter,
      name: "Twitter",
      url: "https://x.com/sss_hospitals",
      color:
        "bg-gradient-to-r from-sky-100 to-blue-200 hover:from-sky-200 hover:to-blue-300 text-sky-600 hover:text-sky-700",
    },
    {
      id: "youtube",
      icon: FaYoutube,
      name: "YouTube",
      url: "https://www.youtube.com/@SSS_Hospitals",
      color:
        "bg-gradient-to-r from-red-100 to-rose-200 hover:from-red-200 hover:to-rose-300 text-red-600 hover:text-red-700",
    },
    {
      id: "linkedin",
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/sss-hospitals",
      color:
        "bg-gradient-to-r from-blue-100 to-indigo-200 hover:from-blue-200 hover:to-indigo-300 text-blue-700 hover:text-blue-800",
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
                key={action.id}
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
                onClick={() => handleQuickAction(action)}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                  className="text-center"
                >
                  <action.icon className="text-3xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 mx-auto" />
                </motion.div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-center mb-1 sm:mb-2">
                  {action.title}
                </h3>
                <p className="text-center opacity-90 text-sm sm:text-sm lg:text-base">
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
                key={info.id}
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
                onClick={() => handleInfoClick(info)}
              >
                <motion.div
                  className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${
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
                    className={`text-xl sm:text-2xl lg:text-3xl ${
                      info.urgent ? "text-red-500" : "text-emerald-500"
                    }`}
                  />
                </motion.div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-center mb-2 sm:mb-3 text-gray-800">
                  {info.title}
                </h3>
                <p className="text-center font-semibold text-gray-700 mb-1 sm:mb-2 text-sm sm:text-sm lg:text-base">
                  {info.primary}
                </p>
                <p className="text-center font-semibold text-gray-700 mb-1 sm:mb-2 text-sm sm:text-sm lg:text-base">
                  {info.secondary}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Hospital Hours removed per request */}

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
                key={social.id}
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

        {/* Call Modal */}
        <CallModal
          isOpen={callModalOpen}
          onClose={() => setCallModalOpen(false)}
          title="Contact SSS Hospital"
          primaryNumber="0424 - 2888777"
          secondaryNumber="+91 7729 888777"
          whatsappNumber="+91 7729 888777"
        />
      </div>
    </div>
  );
};

export default Contact;
