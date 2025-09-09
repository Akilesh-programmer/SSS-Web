import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import CallModal from "./CallModal";

const FloatingAppointmentButton = () => {
  const [isVisible, setIsVisible] = useState(true); // Visible on page load
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    // Keep button visible on page load, no scroll dependency needed
    setIsVisible(true);
  }, []);

  const handleButtonClick = () => {
    setIsCallModalOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40"
          >
            {/* Main appointment button - simplified, no hover expansion */}
            <motion.button
              onClick={handleButtonClick}
              className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Book Appointment"
            >
              <FaCalendarAlt className="text-lg sm:text-2xl" />

              {/* Pulse animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0, 0.6, 0],
                }}
                style={{
                  backgroundColor: "rgba(16, 185, 129, 0.3)",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Tooltip - hidden on mobile */}
              <span className="hidden sm:block absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Book Appointment
                <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Modal */}
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

export default FloatingAppointmentButton;
