import { useState, useEffect } from "react";
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
      {/* Fixed wrapper - always visible bottom-right */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[70]">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
            >
              {/* Main appointment button - simplified, no hover expansion */}
              <motion.button
                onClick={handleButtonClick}
                className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Book Appointment"
              >
                <FaCalendarAlt className="text-lg sm:text-2xl" />

                {/* Pulse animation (purely decorative) */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [0, 0.45, 0],
                  }}
                  style={{
                    backgroundColor: "rgba(16,185,129,0.28)",
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Tooltip - hidden on mobile */}
                <span className="hidden sm:block absolute left-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  Book Appointment
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
