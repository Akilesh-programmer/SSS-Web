import React from "react";
import { motion } from "framer-motion";
import {
  FaStethoscope,
  FaCheck,
  FaHeartbeat,
  FaUserMd,
  FaShieldAlt,
  FaBaby,
  FaStar,
} from "react-icons/fa";

const Packages = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const packages = [
    {
      name: "Diabetic Health Checkup",
      price: "₹900",
      icon: FaHeartbeat,
      color: "bg-red-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "Sr. CREATININE",
        "URINE COMPLETE",
        "ALPHA - CONSUMABLES",
        "DIET COUNSELLING",
      ],
    },
    {
      name: "Basic Master Health Checkup",
      price: "₹1,250",
      icon: FaStethoscope,
      color: "bg-emerald-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "LIPID PROFILE",
        "Sr. CREATININE",
        "URINE COMPLETE",
        "ALPHA - CONSUMABLES",
        "DIET COUNSELLING",
        "ECG",
        "CHEST X-RAY PA View",
      ],
    },
    {
      name: "Executive Health Checkup",
      price: "₹2,100",
      icon: FaUserMd,
      color: "bg-blue-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "LIPID PROFILE",
        "LFT",
        "RFT",
        "URINE COMPLETE",
        "ALPHA - CONSUMABLES",
        "DIET COUNSELLING",
        "ECG",
        "CHEST X-RAY PA View",
        "USG Whole Abdomen",
        "2D Echo",
        "TMT",
      ],
    },
    {
      name: "Full Body Master Health Checkup",
      price: "₹3,250",
      icon: FaShieldAlt,
      color: "bg-purple-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "LIPID PROFILE",
        "LFT",
        "RFT",
        "TFT",
        "URINE COMPLETE",
        "ALPHA - CONSUMABLES",
        "DIET COUNSELLING",
        "ECG",
        "CHEST X-RAY PA View",
        "USG Whole Abdomen",
        "2D Echo",
        "TMT",
        "Vitamin D",
        "Vitamin B12",
        "PSA (for men above 40 years)",
        "PAP Smear (for women)",
        "Mammogram (for women above 40 years)",
      ],
    },
    {
      name: "Women's Health Checkup",
      price: "₹2,850",
      icon: FaBaby,
      color: "bg-pink-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "LIPID PROFILE",
        "LFT",
        "RFT",
        "TFT",
        "URINE COMPLETE",
        "ALPHA - CONSUMABLES",
        "DIET COUNSELLING",
        "ECG",
        "CHEST X-RAY PA View",
        "USG Whole Abdomen & Pelvis",
        "2D Echo",
        "TMT",
        "Vitamin D",
        "Vitamin B12",
        "PAP Smear",
        "Mammogram",
        "CA 125",
      ],
    },
    {
      name: "Senior Citizen Health Checkup",
      price: "₹3,450",
      icon: FaStar,
      color: "bg-orange-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "LIPID PROFILE",
        "LFT",
        "RFT",
        "TFT",
        "URINE COMPLETE",
        "ALPHA - CONSUMABLES",
        "DIET COUNSELLING",
        "ECG",
        "CHEST X-RAY PA View",
        "USG Whole Abdomen",
        "2D Echo",
        "TMT",
        "Vitamin D",
        "Vitamin B12",
        "PSA (for men)",
        "PAP Smear (for women)",
        "Mammogram (for women)",
        "Bone Densitometry",
        "Ophthalmological Examination",
        "Neurological Assessment",
      ],
    },
  ];

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
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 mb-8"
            >
              <FaStethoscope className="inline mr-2 text-emerald-700" />
              <span className="text-emerald-700 font-semibold text-sm">
                HEALTH PACKAGES
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-6">
              Health Checkup Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive health screening packages designed to detect early
              signs of health issues and maintain your overall well-being.
            </p>
          </motion.div>

          {/* Packages Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-emerald-100 group relative overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />

                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-20 h-20 ${pkg.color} text-white rounded-xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-10 h-10" />
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-4 group-hover:text-emerald-600 transition-colors">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-emerald-600">
                      {pkg.price}
                    </span>
                    <span className="text-gray-500 ml-2">per package</span>
                  </div>

                  {/* Tests List */}
                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-700 mb-4 text-center">
                      Tests Included:
                    </h4>
                    {pkg.tests.map((test, testIndex) => (
                      <div
                        key={testIndex}
                        className="flex items-center text-gray-600"
                      >
                        <FaCheck className="text-emerald-500 mr-3 text-sm flex-shrink-0" />
                        <span className="text-sm">{test}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Now Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Package
                  </motion.button>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Why Choose Our Health Packages?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStethoscope className="text-emerald-600 text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Expert Care
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Conducted by experienced medical professionals
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShieldAlt className="text-emerald-600 text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Comprehensive
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Complete health assessment with detailed reports
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaStar className="text-emerald-600 text-2xl" />
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Affordable
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Best value packages for your health investment
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
