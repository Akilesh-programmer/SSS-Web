import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import founderImgLocal from "../../assets/doctor_photos/2.png";

const FounderCard = () => {
  const imageSrc = founderImgLocal;
  const name = "DR. S. SANJITH, MD (DERM)";
  const title = "FOUNDER & MANAGING DIRECTOR";
  const quote = `Our vision at SSS Super Speciality Hospital extends beyond medical treatment – we are committed to creating a healing environment where innovation meets compassion. As we continue to grow and evolve, our dedication remains unwavering: to provide world-class healthcare that transforms lives and strengthens our community. Every patient who walks through our doors receives not just medical expertise, but the care and attention they deserve on their journey to wellness.`;
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
      className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-2xl overflow-hidden mb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
        <motion.div
          variants={slideInFromLeft}
          className="relative py-8 px-6 sm:py-8 sm:px-8 lg:py-9 lg:px-10 flex justify-center items-center order-1 lg:order-1"
        >
          <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-teal-100 rounded-2xl transform -rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50 rounded-2xl border-2 border-white shadow-md overflow-hidden">
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight}
          className="py-8 px-6 sm:py-8 sm:px-8 lg:py-9 lg:pl-3 lg:pr-10 order-2 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 max-w-lg lg:max-w-none"
        >
          <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
            <FaQuoteLeft className="text-3xl text-emerald-600" />
            <span className="text-emerald-600 font-semibold text-lg">
              Our Founder
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
            {name}
          </h2>
          <p className="text-emerald-600 font-semibold text-base sm:text-lg mb-6 text-center lg:text-left">
            {title}
          </p>

          <blockquote className="text-gray-700 text-base sm:text-lg leading-7 italic text-justify mx-auto lg:mx-0">
            {quote}
          </blockquote>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FounderCard;
