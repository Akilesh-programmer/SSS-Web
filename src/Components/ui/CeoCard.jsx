import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const CeoCard = () => {
  const imageSrc =
    "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/3.jpeg";
  const name = "DR P.SELVAKUMAR, MD., PDCC";
  const position = "CEO & MEDICAL DIRECTOR";
  const description = `An experienced Anaesthesiologist and ICU leader with a track record of operational excellence across leading tertiary hospitals. Dr. Selvakumar brings strong clinical governance, critical care expertise, and process-driven leadership to SSS Super Speciality Hospital. He trained and led critical care teams at Apollo (Greams Road and Madurai), Velammal Super Speciality, and KMCH before joining SSS in 2024. Dr. Selvakumar brings two decades of anaesthesia and ICU leadership focused on safety, efficiency, and compassionate patient care.`;
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
      className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-stretch py-3 px-4 sm:py-4 sm:px-6 lg:py-5 lg:px-8">
        <motion.div
          variants={slideInFromLeft}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-bl from-emerald-300 to-teal-100 rounded-2xl transform -rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-bl from-white to-emerald-50 rounded-2xl border-2 border-white shadow-md overflow-hidden">
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
          className="py-6 px-6 pr-1 sm:py-6 sm:px-8 sm:pr-2 lg:py-8 lg:pl-10 lg:pr-3 order-2 lg:order-1 flex flex-col h-full justify-center items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 max-w-lg lg:max-w-none"
        >
          <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <FaQuoteLeft className="text-3xl text-emerald-600" />
            <span className="text-emerald-600 font-semibold text-lg">
              Our CEO
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:whitespace-nowrap text-center lg:text-left">
            {name}
          </h3>
          <p className="text-emerald-600 font-semibold text-base sm:text-lg mb-4 text-center lg:text-left">
            {position}
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-7 mb-4 text-justify">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CeoCard;
