import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppointment } from "../../contexts/AppointmentContext";
import CallModal from "./CallModal";
const sssLogoLocal = "/assets/logos/sss-logo.avif";
const sssLogo = sssLogoLocal;
import { FaBars, FaTimes, FaAmbulance, FaCalendarPlus } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [infraDropdownOpen, setInfraDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // --- Style helpers to avoid repeating large inline objects ---
  const navStyle = (scrolled) => ({
    background: scrolled
      ? "rgba(255, 255, 255, 0.85)"
      : "rgba(255, 255, 255, 0.75)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    borderBottom: scrolled
      ? "1px solid rgba(226, 232, 240, 0.8)"
      : "1px solid rgba(226, 232, 240, 0.5)",
    boxShadow: scrolled
      ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      : "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  });

  const emergencyStyle = {
    background:
      "linear-gradient(135deg, rgba(220,38,38,0.92) 0%, rgba(239,68,68,0.95) 50%, rgba(220,38,38,0.92) 100%)",
    backdropFilter: "blur(20px) saturate(160%)",
    WebkitBackdropFilter: "blur(20px) saturate(160%)",
    border: "1px solid rgba(255,255,255,0.4)",
    boxShadow:
      "0 8px 32px rgba(220,38,38,0.35), 0 4px 16px rgba(220,38,38,0.25), inset 0 1px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.1)",
  };

  const toggleStyle = {
    background:
      "linear-gradient(135deg, rgba(107,114,128,0.15) 0%, rgba(156,163,175,0.12) 50%, rgba(107,114,128,0.1) 100%)",
    backdropFilter: "blur(16px) saturate(140%)",
    WebkitBackdropFilter: "blur(16px) saturate(140%)",
    border: "1px solid rgba(255,255,255,0.5)",
    boxShadow:
      "0 4px 16px rgba(107,114,128,0.12), 0 2px 8px rgba(107,114,128,0.08), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.05)",
  };

  const overlayStyle = {
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(59,130,246,0.12) 50%, rgba(0,0,0,0.18) 100%)",
    backdropFilter: "blur(16px) saturate(160%)",
    WebkitBackdropFilter: "blur(16px) saturate(160%)",
  };

  const mobileMenuStyle = {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    borderTop: "1px solid rgba(226, 232, 240, 0.8)",
    boxShadow:
      "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  const navLinkStyle = (isActive) => ({
    background: isActive
      ? "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(147,197,253,0.16) 50%, rgba(59,130,246,0.14) 100%)"
      : "transparent",
    backdropFilter: isActive
      ? "blur(30px) saturate(180%) brightness(1.05)"
      : "none",
    WebkitBackdropFilter: isActive
      ? "blur(30px) saturate(180%) brightness(1.05)"
      : "none",
    border: isActive
      ? "1.5px solid rgba(59,130,246,0.35)"
      : "1.5px solid transparent",
    boxShadow: isActive
      ? "0 6px 20px rgba(59,130,246,0.18), 0 3px 10px rgba(59,130,246,0.12), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(59,130,246,0.15), inset 0 0 40px rgba(255,255,255,0.1)"
      : "none",
  });

  const mobileNavLinkStyle = (isActive) => ({
    background: isActive
      ? "linear-gradient(135deg, rgba(59,130,246,0.25) 0%, rgba(147,197,253,0.2) 50%, rgba(59,130,246,0.18) 100%)"
      : "transparent",
    backdropFilter: isActive
      ? "blur(30px) saturate(180%) brightness(1.05)"
      : "none",
    WebkitBackdropFilter: isActive
      ? "blur(30px) saturate(180%) brightness(1.05)"
      : "none",
    border: isActive
      ? "1.5px solid rgba(59,130,246,0.4)"
      : "1.5px solid transparent",
    boxShadow: isActive
      ? "0 6px 20px rgba(59,130,246,0.2), 0 3px 10px rgba(59,130,246,0.14), inset 0 2px 0 rgba(255,255,255,0.6), inset 0 -2px 0 rgba(59,130,246,0.18), inset 0 0 40px rgba(255,255,255,0.12)"
      : "none",
  });

  // Reusable overlay backgrounds and contact styles
  const overlayBg =
    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)";
  const overlayBgSoft =
    "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, transparent 100%)";
  const overlayBgStronger =
    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 50%, transparent 100%)";

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

  const handleEmergencyClick = () => {
    window.location.href = "tel:+91 8925931193";
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
    { name: "About Us", path: "/about" },
    { name: "Specialities", path: "/specialities" },
    { name: "Services", path: "/services" },
    {
      name: "Infrastructure",
      path: "/infrastructure",
      dropdown: [
        { name: "Infrastructure Gallery", path: "/infrastructure" },
        { name: "Rooms & Facilities", path: "/rooms" },
      ],
    },
    { name: "Doctors", path: "/doctors" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Mobile overlay moved outside the nav so it blurs the full viewport (including area below the navbar) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={overlayStyle}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Professional Hospital Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0, transition: { duration: 0.25, ease: "easeOut" } }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? "shadow-2xl" : "shadow-lg"
        }`}
        style={navStyle(isScrolled)}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-18">
            {/* Professional Logo Section - Full Display */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer relative group"
              onClick={() => handleNavigation("/")}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-all duration-300 -m-2 p-2"></div>

              <div className="relative">
                <img
                  src={sssLogo}
                  alt="SSS Super Speciality Hospital Logo"
                  className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg object-contain bg-white p-1 shadow-lg ring-1 ring-emerald-200"
                />
                {/* Professional overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-100/30 to-transparent pointer-events-none"></div>
              </div>

              <div className="relative z-10 text-center flex items-center">
                <h1 className="font-bold tracking-tight leading-none text-gray-900">
                  {/* Mobile/Small screens - compact to fit navbar */}
                  <span className="inline-block w-20 sm:hidden">
                    <span className="block text-sm font-black leading-none mb-0.5">
                      SSS
                    </span>
                    <span className="block h-0.5 w-16 bg-amber-500 mb-0.5 mx-auto"></span>
                    <span className="block text-[6px] font-bold tracking-[0.15em] uppercase leading-none mb-0.5">
                      SUPER SPECIALITY
                    </span>
                    <span className="block text-[10px] font-black leading-none">
                      HOSPITAL
                    </span>
                  </span>

                  {/* Medium screens and up - better proportions */}
                  <span className="hidden sm:inline-block w-28 md:w-30 lg:w-32">
                    <span className="block text-base md:text-lg lg:text-xl font-black leading-none mb-0.5">
                      SSS
                    </span>
                    <span className="block h-0.5 w-20 md:w-24 lg:w-28 bg-amber-500 mb-0.5 mx-auto"></span>
                    <span className="block text-[7px] md:text-[8px] lg:text-[9px] font-bold tracking-[0.15em] uppercase leading-none mb-0.5">
                      SUPER SPECIALITY
                    </span>
                    <span className="block text-xs md:text-sm lg:text-base font-black leading-none">
                      HOSPITAL
                    </span>
                  </span>

                  <span className="sr-only">SSS Super Speciality Hospital</span>
                </h1>
              </div>
            </motion.div>

            {/* Professional Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive =
                  location.pathname === item.path ||
                  (item.dropdown &&
                    item.dropdown.some(
                      (sub) => sub.path === location.pathname
                    ));

                // If item has dropdown
                if (item.dropdown) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setInfraDropdownOpen(true)}
                      onMouseLeave={() => setInfraDropdownOpen(false)}
                    >
                      <Link
                        to={item.path}
                        className={`relative group px-4 py-2 rounded-lg transition-all duration-200 text-label-md ${
                          isActive
                            ? "text-blue-600 bg-blue-50 font-semibold"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium"
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {isActive && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full"></div>
                        )}
                      </Link>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {infraDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                          >
                            {item.dropdown.map((subItem) => {
                              const isSubActive =
                                location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className={`block px-4 py-3 transition-all duration-200 text-body-md ${
                                    isSubActive
                                      ? "text-blue-600 bg-blue-50 font-semibold"
                                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium"
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Regular nav item without dropdown
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative group px-4 py-2 rounded-lg transition-all duration-200 text-label-md ${
                      isActive
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Professional Action Buttons */}
            <div className="flex items-center space-x-3">
              {/* Desktop Action Buttons - Matched Heights */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* Book Appointment Button */}
                <motion.button
                  onClick={() => setIsCallModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-cta transition-all duration-300 shadow-lg hover:shadow-xl h-12"
                  style={{
                    textShadow:
                      "0 1px 3px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  <FaCalendarPlus className="text-sm" />
                  <span>Book Appointment</span>
                </motion.button>

                {/* Emergency Button */}
                <motion.button
                  onClick={handleEmergencyClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-cta transition-all duration-300 shadow-lg hover:shadow-xl h-12"
                  style={{
                    textShadow:
                      "0 1px 3px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  <FaAmbulance className="text-sm animate-pulse" />
                  <div className="flex flex-col text-left">
                    <span className="text-body-sm font-semibold leading-tight">
                      Emergency
                    </span>
                    <span className="text-body-xs opacity-90 leading-tight">
                      +91 8925931193
                    </span>
                  </div>
                </motion.button>
              </div>

              {/* Mobile Menu Toggle Only */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all duration-300"
              >
                {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Professional Mobile Menu with Proper Scrolling */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden fixed left-0 right-0 z-50 border-t max-h-[calc(100vh-4rem)] overflow-y-auto"
              style={mobileMenuStyle}
            >
              <div className="container mx-auto px-4 py-6">
                {/* Action Buttons First */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {/* Mobile Book Appointment */}
                  <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsCallModalOpen(true);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 px-4 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-cta transition-all duration-300 shadow-lg"
                  >
                    <FaCalendarPlus className="text-sm" />
                    <span>Book Appointment</span>
                  </motion.button>

                  {/* Mobile Emergency Button */}
                  <motion.button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleEmergencyClick();
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 px-4 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-cta transition-all duration-300 shadow-lg"
                  >
                    <FaAmbulance className="text-sm animate-pulse" />
                    <span>Emergency</span>
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-2">
                  {navItems.map((item, index) => {
                    const isActive =
                      location.pathname === item.path ||
                      (item.dropdown &&
                        item.dropdown.some(
                          (sub) => sub.path === location.pathname
                        ));

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {/* Parent item */}
                        {!item.dropdown ? (
                          <Link
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-200 group ${
                              isActive
                                ? "text-blue-600 bg-blue-50"
                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                isActive
                                  ? "bg-blue-600"
                                  : "bg-gray-400 group-hover:bg-blue-600"
                              }`}
                            ></div>
                            <span className="font-bold">{item.name}</span>
                          </Link>
                        ) : (
                          <div className="space-y-1">
                            {/* Infrastructure Parent Label */}
                            <div className="flex items-center space-x-3 p-4 text-gray-800 font-semibold rounded-xl bg-gray-50">
                              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                              <span>{item.name}</span>
                            </div>
                            {/* Dropdown items */}
                            {item.dropdown.map((subItem) => {
                              const isSubActive =
                                location.pathname === subItem.path;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  onClick={() => setIsMenuOpen(false)}
                                  className={`flex items-center space-x-3 p-3 pl-10 rounded-xl transition-all duration-200 group ${
                                    isSubActive
                                      ? "text-blue-600 bg-blue-50"
                                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                  }`}
                                >
                                  <div
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                      isSubActive
                                        ? "bg-blue-600"
                                        : "bg-gray-300 group-hover:bg-blue-600"
                                    }`}
                                  ></div>
                                  <span className="font-medium text-sm">
                                    {subItem.name}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Call Modal for Book Appointment */}
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

export default Navigation;
