import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";

/**
 * Reusable Hero Section Component
 * Professional, full-screen hero with subtle overlay and scroll indicator
 * Accounts for navbar height (assume ~80px)
 */
const HeroSection = ({ backgroundImage, badge, title, subtitle }) => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      className="relative h-screen w-full flex items-center justify-center overflow-hidden -mt-20 md:-mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Image with Subtle Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Subtle Black Overlay - Keep Image Visible */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center px-4 md:px-6 py-2.5 md:py-3 bg-white/15 backdrop-blur-md rounded-full border border-white/30 mb-6 md:mb-8 shadow-xl"
          >
            {typeof badge === "object" && badge.icon && badge.text ? (
              <>
                <badge.icon className="text-base md:text-xl mr-2 md:mr-3" />
                <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
                  {badge.text}
                </span>
              </>
            ) : (
              badge
            )}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight tracking-tight"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="bg-gradient-to-r from-white via-white to-gray-100 bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="text-base md:text-xl lg:text-2xl text-white/95 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
        onClick={handleScrollDown}
      >
        <motion.div
          className="flex flex-col items-center gap-2 group"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white/90 text-xs md:text-sm font-medium tracking-wider uppercase group-hover:text-white transition-colors">
            Scroll to Explore
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <FaChevronDown className="text-white/70 text-base md:text-lg group-hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

HeroSection.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  badge: PropTypes.node,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default HeroSection;
