import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useAppointment } from "../../contexts/AppointmentContext";

const FloatingAppointmentButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const { openAppointment } = useAppointment();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMainButtonClick = () => {
    if (isMobile) {
      setClickCount((prev) => prev + 1);

      if (clickCount === 0) {
        // First click - expand other buttons
        setIsExpanded(true);
        // Reset click count after 2 seconds
        setTimeout(() => {
          setClickCount(0);
          setIsExpanded(false);
        }, 2000);
      } else {
        // Second click - open appointment
        setClickCount(0);
        setIsExpanded(false);
        openAppointment();
      }
    } else {
      // Desktop behavior - direct appointment
      openAppointment();
    }
  };

  const floatingButtons = [
    {
      icon: FaCalendarAlt,
      label: "Book Appointment",
      color: "from-emerald-500 to-emerald-600",
      action: () => openAppointment(),
    },
    {
      icon: FaPhone,
      label: "Call Now",
      color: "from-blue-500 to-blue-600",
      action: () => (window.location.href = "tel:+917729888777"),
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "from-green-500 to-green-600",
      action: () => window.open("https://wa.me/916379276131", "_blank"),
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40"
          onMouseEnter={() => !isMobile && setIsExpanded(true)}
          onMouseLeave={() => !isMobile && setIsExpanded(false)}
        >
          {/* Container that includes space for expanded buttons */}
          <div className="relative flex flex-col items-end">
            {/* Expanded buttons container with padding for hover area */}
            <div className="mb-2 sm:mb-3 space-y-2 sm:space-y-3">
              <AnimatePresence>
                {isExpanded &&
                  floatingButtons
                    .slice(1)
                    .reverse()
                    .map((button, index) => (
                      <motion.div
                        key={button.label}
                        initial={{ opacity: 0, x: 50, scale: 0 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 50, scale: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-end"
                      >
                        {/* Tooltip - hide on mobile for touch targets */}
                        <motion.span
                          className="hidden sm:block bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap mr-3 shadow-lg"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {button.label}
                        </motion.span>

                        {/* Button with mobile-optimized touch targets */}
                        <motion.button
                          onClick={button.action}
                          className={`bg-gradient-to-r ${button.color} text-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 mobile-touch-target`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <button.icon className="text-lg sm:text-xl" />
                        </motion.button>
                      </motion.div>
                    ))}
              </AnimatePresence>
            </div>

            {/* Main button with mobile-optimized size */}
            <motion.button
              onClick={handleMainButtonClick}
              className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 heart-pulse-red mobile-touch-target"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
                <FaCalendarAlt className="text-lg sm:text-2xl" />
              </motion.div>

              {/* Red pulse animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0, 0.6, 0],
                  boxShadow: [
                    "0 0 0 0 rgba(239, 68, 68, 0.7)",
                    "0 0 0 20px rgba(239, 68, 68, 0)",
                    "0 0 0 0 rgba(239, 68, 68, 0)",
                  ],
                }}
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.3)",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Always show Book Now tooltip - hidden on mobile */}
              <span className="hidden sm:block absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Book Now
                <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
              </span>
            </motion.button>

            {/* Floating particles - reduced on mobile */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                  animate={{
                    y: [-15, -45],
                    x: [0, (i - 1) * 15],
                    opacity: [1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut",
                  }}
                  style={{
                    left: "50%",
                    top: "20%",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingAppointmentButton;
