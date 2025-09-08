import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaUsers } from "react-icons/fa";
import Chairman from "./Chairman";

const FounderMessage = () => {
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-2xl overflow-hidden mb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
        <motion.div
          variants={slideInFromLeft}
          className="relative p-6 sm:p-8 lg:p-12 flex justify-center items-center order-1 lg:order-1"
        >
          <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-teal-100 rounded-2xl transform -rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50 rounded-2xl border-2 border-white shadow-md overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/2.png"
                alt="Dr. S. Sanjith - Founder & Managing Director"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight}
          className="p-6 sm:p-8 lg:p-12 order-2 lg:order-2"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaQuoteLeft className="text-3xl text-emerald-600" />
            <span className="text-emerald-600 font-semibold text-lg">
              Our Founder
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            DR. S. SANJITH, MD (DERM)
          </h2>
          <p className="text-emerald-600 font-semibold text-base sm:text-lg mb-6">
            FOUNDER & MANAGING DIRECTOR
          </p>

          <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
            "Our vision at SSS Super Speciality Hospital extends beyond medical
            treatment – we are committed to creating a healing environment where
            innovation meets compassion. As we continue to grow and evolve, our
            dedication remains unwavering: to provide world-class healthcare
            that transforms lives and strengthens our community. Every patient
            who walks through our doors receives not just medical expertise, but
            the care and attention they deserve on their journey to wellness."
          </blockquote>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Messages = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100 rounded-full opacity-30 animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-10 animate-pulse" />
      </div>

      {/* Header Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 mb-8"
            >
              <FaUsers className="inline mr-2 text-emerald-700" />
              <span className="text-emerald-700 font-semibold text-sm">
                LEADERSHIP MESSAGES
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-6">
              Words from Our Leaders
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the vision, values, and commitment that drive SSS Super
              Speciality Hospital through the inspiring words of our Chairman
              and Founder.
            </p>
          </motion.div>

          {/* Chairman Message */}
          <Chairman />

          {/* Founder Message */}
          <FounderMessage />
        </div>
      </section>
    </div>
  );
};

export default Messages;
