import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppointment } from "../../contexts/AppointmentContext";
import sssLogo from "../../assets/sss-logo.jpeg";
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaEnvelope,
  FaCalendarCheck,
  FaUserMd,
  FaAmbulance,
} from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openAppointment } = useAppointment();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleAppointmentClick = () => {
    openAppointment();
    setIsMenuOpen(false);
  };

  const handleEmergencyClick = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    navigate(path);
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Specialities", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Professional Hospital Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "shadow-2xl" : "shadow-lg"
        }`}
        style={{
          background: isScrolled
            ? "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.9) 50%, rgba(255,255,255,0.88) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(248,250,252,0.85) 50%, rgba(255,255,255,0.83) 100%)",
          backdropFilter: "blur(25px) saturate(200%)",
          WebkitBackdropFilter: "blur(25px) saturate(200%)",
          borderBottom: "1px solid rgba(255,255,255,0.6)",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.8), inset 0 1px 0 rgba(255,255,255,0.9)"
            : "0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.7), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 lg:h-20">
            {/* Professional Logo Section */}
            <motion.div
              className="flex items-center space-x-4 cursor-pointer relative group"
              onClick={() => handleNavigation("/")}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-all duration-300 -m-2 p-2"></div>

              <div className="relative">
                <img
                  src={sssLogo}
                  alt="SSS Hospitals"
                  className="h-12 w-12 lg:h-14 lg:w-14 rounded-xl object-cover shadow-md ring-2 ring-white/80"
                />
                {/* Professional overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
              </div>

              <div className="hidden sm:block relative z-10">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 tracking-tight">
                  <span className="text-blue-600">SSS</span>{" "}
                  <span className="text-gray-700">Hospitals</span>
                </h1>
                <p className="text-sm text-gray-500 font-medium tracking-wide">
                  Excellence in Healthcare
                </p>
              </div>
            </motion.div>

            {/* Professional Navigation Links with Glassmorphism */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative group px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-base overflow-hidden ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    style={{
                      background: isActive
                        ? "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(147,197,253,0.08) 50%, rgba(59,130,246,0.05) 100%)"
                        : "transparent",
                      backdropFilter: isActive
                        ? "blur(15px) saturate(150%)"
                        : "none",
                      border: isActive
                        ? "1px solid rgba(59,130,246,0.2)"
                        : "1px solid transparent",
                      boxShadow: isActive
                        ? "0 4px 15px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
                        : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(147,197,253,0.04) 50%, rgba(59,130,246,0.03) 100%)";
                        e.currentTarget.style.backdropFilter =
                          "blur(12px) saturate(120%)";
                        e.currentTarget.style.border =
                          "1px solid rgba(59,130,246,0.15)";
                        e.currentTarget.style.boxShadow =
                          "0 2px 10px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.6)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.backdropFilter = "none";
                        e.currentTarget.style.border = "1px solid transparent";
                        e.currentTarget.style.boxShadow = "none";
                      }
                    }}
                  >
                    {/* Glass overlay effect */}
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                      }}
                    ></div>

                    <span className="relative z-10">{item.name}</span>

                    {/* Active indicator with glass effect */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(59,130,246,0.8) 0%, rgba(59,130,246,1) 50%, rgba(59,130,246,0.8) 100%)",
                          boxShadow: "0 2px 8px rgba(59,130,246,0.4)",
                        }}
                      ></div>
                    )}

                    {/* Hover indicator with glass effect */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-all duration-300 ${
                        isActive ? "w-0" : "w-0 group-hover:w-6"
                      }`}
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.8) 50%, rgba(59,130,246,0.6) 100%)",
                        boxShadow: "0 1px 6px rgba(59,130,246,0.3)",
                      }}
                    ></div>
                  </Link>
                );
              })}
            </div>

            {/* Enhanced Action Buttons with Glassmorphism Effects */}
            <div className="flex items-center space-x-3">
              {/* Emergency Button with Glassmorphism */}
              <motion.button
                onClick={handleEmergencyClick}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="hidden sm:flex items-center space-x-2 px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 text-white relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(220,38,38,0.9) 0%, rgba(239,68,68,0.95) 50%, rgba(220,38,38,0.9) 100%)",
                  backdropFilter: "blur(15px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow:
                    "0 8px 25px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(239,68,68,0.95) 0%, rgba(220,38,38,1) 50%, rgba(239,68,68,0.95) 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(220,38,38,0.4), inset 0 1px 0 rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(220,38,38,0.9) 0%, rgba(239,68,68,0.95) 50%, rgba(220,38,38,0.9) 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.4)";
                }}
              >
                {/* Glass overlay */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  }}
                ></div>
                <div className="relative z-10 flex items-center space-x-2">
                  <FaAmbulance className="text-sm animate-pulse drop-shadow-sm" />
                  <span className="drop-shadow-sm">Emergency</span>
                </div>
              </motion.button>

              {/* Appointment Button with Enhanced Glassmorphism */}
              <motion.button
                onClick={handleAppointmentClick}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg font-semibold text-sm lg:text-base transition-all duration-300 text-white relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.9) 0%, rgba(59,130,246,0.95) 50%, rgba(37,99,235,0.9) 100%)",
                  backdropFilter: "blur(15px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow:
                    "0 8px 25px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(59,130,246,0.95) 0%, rgba(37,99,235,1) 50%, rgba(59,130,246,0.95) 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(37,99,235,0.9) 0%, rgba(59,130,246,0.95) 50%, rgba(37,99,235,0.9) 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.4)";
                }}
              >
                {/* Glass overlay */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  }}
                ></div>
                <div className="relative z-10 flex items-center space-x-2">
                  <FaCalendarCheck className="text-sm drop-shadow-sm" />
                  <span className="drop-shadow-sm">Book Appointment</span>
                </div>
              </motion.button>

              {/* Mobile Menu Toggle with Glassmorphism */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-3 rounded-lg transition-all duration-300 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(107,114,128,0.1) 0%, rgba(156,163,175,0.08) 50%, rgba(107,114,128,0.06) 100%)",
                  backdropFilter: "blur(12px) saturate(120%)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  boxShadow:
                    "0 4px 15px rgba(107,114,128,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(107,114,128,0.15) 0%, rgba(156,163,175,0.12) 50%, rgba(107,114,128,0.1) 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(107,114,128,0.15), inset 0 1px 0 rgba(255,255,255,0.7)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, rgba(107,114,128,0.1) 0%, rgba(156,163,175,0.08) 50%, rgba(107,114,128,0.06) 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 15px rgba(107,114,128,0.1), inset 0 1px 0 rgba(255,255,255,0.6)";
                }}
              >
                {/* Glass overlay */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  }}
                ></div>
                <div className="relative z-10 text-gray-700">
                  {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu with Glassmorphism */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Enhanced glassmorphism background overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 lg:hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(0,0,0,0.08) 100%)",
                  backdropFilter: "blur(8px) saturate(120%)",
                }}
                onClick={() => setIsMenuOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden relative z-50 shadow-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 50%, rgba(255,255,255,0.92) 100%)",
                  backdropFilter: "blur(20px) saturate(180%)",
                  borderTop: "1px solid rgba(255,255,255,0.6)",
                  borderBottom: "1px solid rgba(255,255,255,0.4)",
                  boxShadow:
                    "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
                }}
              >
                <div className="container mx-auto px-4 py-6 space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                            isActive
                              ? "text-blue-600"
                              : "text-gray-700 hover:text-blue-600"
                          }`}
                          style={{
                            background: isActive
                              ? "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(147,197,253,0.08) 50%, rgba(59,130,246,0.06) 100%)"
                              : "transparent",
                            backdropFilter: isActive
                              ? "blur(15px) saturate(150%)"
                              : "none",
                            border: isActive
                              ? "1px solid rgba(59,130,246,0.25)"
                              : "1px solid transparent",
                            boxShadow: isActive
                              ? "0 4px 15px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
                              : "none",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.background =
                                "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(147,197,253,0.05) 50%, rgba(59,130,246,0.04) 100%)";
                              e.currentTarget.style.backdropFilter =
                                "blur(12px) saturate(120%)";
                              e.currentTarget.style.border =
                                "1px solid rgba(59,130,246,0.2)";
                              e.currentTarget.style.boxShadow =
                                "0 2px 10px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.6)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.backdropFilter = "none";
                              e.currentTarget.style.border =
                                "1px solid transparent";
                              e.currentTarget.style.boxShadow = "none";
                            }
                          }}
                        >
                          {/* Glass overlay effect */}
                          <div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background:
                                "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                            }}
                          ></div>

                          <div
                            className={`relative z-10 w-3 h-3 rounded-full transition-all duration-300 ${
                              isActive
                                ? "scale-125 shadow-md"
                                : "group-hover:scale-125"
                            }`}
                            style={{
                              background: isActive
                                ? "linear-gradient(135deg, rgba(59,130,246,0.9) 0%, rgba(37,99,235,1) 50%, rgba(59,130,246,0.9) 100%)"
                                : "linear-gradient(135deg, rgba(107,114,128,0.6) 0%, rgba(156,163,175,0.8) 50%, rgba(107,114,128,0.6) 100%)",
                              boxShadow: isActive
                                ? "0 2px 8px rgba(59,130,246,0.4)"
                                : "0 1px 4px rgba(107,114,128,0.2)",
                            }}
                          ></div>
                          <span className="relative z-10 font-semibold">
                            {item.name}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Mobile Contact Info with Glassmorphism */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 pt-4 relative"
                    style={{
                      borderTop: "1px solid rgba(59,130,246,0.2)",
                    }}
                  >
                    <div className="space-y-3">
                      <div
                        className="flex items-center space-x-3 text-gray-600 p-2 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(59,130,246,0.03) 0%, rgba(147,197,253,0.02) 50%, transparent 100%)",
                          backdropFilter: "blur(8px) saturate(120%)",
                        }}
                      >
                        <div
                          className="p-2 rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(37,99,235,0.08) 100%)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <FaPhone className="text-blue-600 text-sm" />
                        </div>
                        <span className="text-sm font-medium">
                          +91 98765 43210
                        </span>
                      </div>
                      <div
                        className="flex items-center space-x-3 text-gray-600 p-2 rounded-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(59,130,246,0.03) 0%, rgba(147,197,253,0.02) 50%, transparent 100%)",
                          backdropFilter: "blur(8px) saturate(120%)",
                        }}
                      >
                        <div
                          className="p-2 rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(37,99,235,0.08) 100%)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <FaEnvelope className="text-blue-600 text-sm" />
                        </div>
                        <span className="text-sm font-medium">
                          info@ssshospital.com
                        </span>
                      </div>
                      <motion.button
                        onClick={handleAppointmentClick}
                        whileTap={{ scale: 0.95 }}
                        className="w-full mt-4 py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-all duration-300 text-white relative overflow-hidden"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(37,99,235,0.9) 0%, rgba(59,130,246,0.95) 50%, rgba(37,99,235,0.9) 100%)",
                          backdropFilter: "blur(15px) saturate(150%)",
                          border: "1px solid rgba(255,255,255,0.3)",
                          boxShadow:
                            "0 8px 25px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, rgba(59,130,246,0.95) 0%, rgba(37,99,235,1) 50%, rgba(59,130,246,0.95) 100%)";
                          e.currentTarget.style.boxShadow =
                            "0 12px 35px rgba(37,99,235,0.4), inset 0 1px 0 rgba(255,255,255,0.5)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, rgba(37,99,235,0.9) 0%, rgba(59,130,246,0.95) 50%, rgba(37,99,235,0.9) 100%)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 25px rgba(37,99,235,0.3), inset 0 1px 0 rgba(255,255,255,0.4)";
                        }}
                      >
                        {/* Glass overlay */}
                        <div
                          className="absolute inset-0 rounded-lg"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                          }}
                        ></div>
                        <div className="relative z-10 flex items-center space-x-2">
                          <FaUserMd className="drop-shadow-sm" />
                          <span className="drop-shadow-sm">
                            Book Appointment
                          </span>
                        </div>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
