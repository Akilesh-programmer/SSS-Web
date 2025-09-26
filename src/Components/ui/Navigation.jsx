import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppointment } from "../../contexts/AppointmentContext";
import { raw } from "../../data/imageUrls";
const sssLogo = raw("sss-logo.jpeg");
import { FaBars, FaTimes, FaAmbulance } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Appointment context retained for potential future use (no direct call right now)
  useAppointment();
  const navigate = useNavigate();
  const location = useLocation();
  // --- Style helpers to avoid repeating large inline objects ---
  const navStyle = (scrolled) => ({
    background: scrolled
      ? "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.9) 50%, rgba(255,255,255,0.88) 100%)"
      : "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(248,250,252,0.85) 50%, rgba(255,255,255,0.83) 100%)",
    backdropFilter: "blur(25px) saturate(200%)",
    WebkitBackdropFilter: "blur(25px) saturate(200%)",
    borderBottom: "1px solid rgba(255,255,255,0.6)",
    boxShadow: scrolled
      ? "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(255,255,255,0.8), inset 0 1px 0 rgba(255,255,255,0.9)"
      : "0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.7), inset 0 1px 0 rgba(255,255,255,0.8)",
  });

  const emergencyStyle = {
    background:
      "linear-gradient(135deg, rgba(220,38,38,0.9) 0%, rgba(239,68,68,0.95) 50%, rgba(220,38,38,0.9) 100%)",
    backdropFilter: "blur(15px) saturate(150%)",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow:
      "0 8px 25px rgba(220,38,38,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",
  };

  const toggleStyle = {
    background:
      "linear-gradient(135deg, rgba(107,114,128,0.1) 0%, rgba(156,163,175,0.08) 50%, rgba(107,114,128,0.06) 100%)",
    backdropFilter: "blur(12px) saturate(120%)",
    border: "1px solid rgba(255,255,255,0.4)",
    boxShadow:
      "0 4px 15px rgba(107,114,128,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
  };

  const overlayStyle = {
    background:
      "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(59,130,246,0.05) 50%, rgba(0,0,0,0.08) 100%)",
    backdropFilter: "blur(8px) saturate(120%)",
  };

  const mobileMenuStyle = {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.95) 50%, rgba(255,255,255,0.92) 100%)",
    backdropFilter: "blur(20px) saturate(180%)",
    borderTop: "1px solid rgba(255,255,255,0.6)",
    borderBottom: "1px solid rgba(255,255,255,0.4)",
    boxShadow:
      "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
  };

  const navLinkStyle = (isActive) => ({
    background: isActive
      ? "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(147,197,253,0.08) 50%, rgba(59,130,246,0.05) 100%)"
      : "transparent",
    backdropFilter: isActive ? "blur(15px) saturate(150%)" : "none",
    border: isActive
      ? "1px solid rgba(59,130,246,0.2)"
      : "1px solid transparent",
    boxShadow: isActive
      ? "0 4px 15px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
      : "none",
  });

  const mobileNavLinkStyle = (isActive) => ({
    background: isActive
      ? "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(147,197,253,0.08) 50%, rgba(59,130,246,0.06) 100%)"
      : "transparent",
    backdropFilter: isActive ? "blur(15px) saturate(150%)" : "none",
    border: isActive
      ? "1px solid rgba(59,130,246,0.25)"
      : "1px solid transparent",
    boxShadow: isActive
      ? "0 4px 15px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.8)"
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
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Gallery", path: "/gallery" },
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
          <div className="flex justify-between items-center h-14 lg:h-16">
            {/* Professional Logo Section */}
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

              <div className="relative z-10 text-center max-w-xs sm:max-w-none">
                <h1 className="font-bold text-gray-800 tracking-tight leading-none">
                  {/* Mobile single-line */}
                  <span className="sm:hidden text-base md:text-lg text-emerald-600 block text-center whitespace-nowrap font-bold">
                    SSS Super Speciality Hospital
                  </span>

                  {/* Two-line for sm+ - first line larger, second line slightly smaller to balance length */}
                  <span className="hidden sm:block">
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-600 block text-center leading-none font-bold">
                      SSS Super
                    </span>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-emerald-600 block text-center font-bold -mt-0.5">
                      Speciality Hospital
                    </span>
                  </span>

                  <span className="sr-only">SSS Super Speciality Hospital</span>
                </h1>
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
                    style={navLinkStyle(isActive)}
                  >
                    {/* Glass overlay effect */}
                    <div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: overlayBg }}
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
                style={emergencyStyle}
              >
                {/* Glass overlay */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ background: overlayBgSoft }}
                ></div>
                <div className="relative z-10 flex items-center space-x-2">
                  <FaAmbulance className="text-sm animate-pulse drop-shadow-sm" />
                  <span className="drop-shadow-sm">Emergency</span>
                </div>
              </motion.button>

              {/* Appointment button removed as requested */}

              {/* Mobile Menu Toggle with Glassmorphism */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden p-3 rounded-lg transition-all duration-300 relative overflow-hidden"
                // ensure the toggle (and close icon) sits above the mobile overlay
                style={{ ...toggleStyle, zIndex: 9999 }}
              >
                {/* Glass overlay */}
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{ background: overlayBgSoft }}
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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden relative z-50 shadow-2xl overflow-hidden"
              style={mobileMenuStyle}
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
                        style={mobileNavLinkStyle(isActive)}
                      >
                        {/* Glass overlay effect */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: overlayBgStronger }}
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

                {/* Mobile contact info removed per mobile UX requirements (phone/email/Book Appointment) */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
