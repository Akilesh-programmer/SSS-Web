import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const FloatingAppointmentButton = () => {
  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[70]">
      <motion.a
        href="tel:+917729888777"
        className="group relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Call us at +91 7729 888777"
      >
        <FaPhone className="text-lg sm:text-2xl" />

        {/* Pulse animation */}
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
        <span className="hidden sm:block absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          +91 7729 888777
          <span className="absolute -right-3 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingAppointmentButton;
