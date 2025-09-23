import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const ChairmanCard = () => {
  const imageSrc =
    "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/1.png";
  const name = "S.SARAVANA BHAVAN";
  const title = "CHAIRMAN";
  const quote = `At SSS Super Speciality Hospital, We believe in combining medical excellence with a personal touch in providing hope, care and cure. We offer medical treatment with a motherly touch - because healing begins with bonding. It is our commitment to bring the best of technology under one roof for the people of Erode and beyond.`;
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
      className="bg-gradient-to-tl from-emerald-50 to-white rounded-3xl shadow-2xl overflow-hidden mb-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
        <motion.div
          variants={slideInFromLeft}
          className="py-8 pl-6 pr-1 sm:py-8 sm:pl-8 sm:pr-2 lg:py-9 lg:pl-10 lg:pr-3 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaQuoteLeft className="text-3xl text-teal-600" />
            <span className="text-teal-600 font-semibold text-lg">
              Our Chairman
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {name}
          </h2>
          <p className="text-teal-600 font-semibold text-base sm:text-lg mb-6">
            {title}
          </p>

          <blockquote className="text-gray-700 text-base sm:text-lg leading-7 italic text-justify">
            {quote}
          </blockquote>
        </motion.div>

        <motion.div
          variants={slideInFromRight}
          className="relative py-8 px-6 sm:py-8 sm:px-8 lg:py-9 lg:px-10 flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-300 to-teal-100 rounded-2xl transform rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-tl from-white to-emerald-50 rounded-2xl border-2 border-white shadow-md overflow-hidden">
              <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChairmanCard;
