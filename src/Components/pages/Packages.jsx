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
        "RFT",
        "TSH",
        "URINE COMPLETE",
        "ALPHA - CONSUMABLES",
        "ECG",
        "DIET COUNSELLING",
      ],
    },
    {
      name: "Employment Checkup",
      price: "₹1,400",
      icon: FaUserMd,
      color: "bg-blue-500",
      tests: [
        "CBC",
        "RBS",
        "HbA1C",
        "URINE COMPLETE",
        "RFT",
        "ALPHA - CONSUMABLES",
        "ECG",
        "CHEST X-RAY",
        "GEN MEDICINE OPINION",
        "DIET COUNSELLING",
      ],
    },
    {
      name: "Advanced Health Checkup",
      price: "₹4,250",
      icon: FaShieldAlt,
      color: "bg-purple-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "LIPID PROFILE",
        "RFT",
        "LFT",
        "TSH",
        "FT3, FT4",
        "URINE COMPLETE",
        "ALPHA - CONSUMABLES",
        "CHEST X-RAY",
        "ECG",
        "ECHO",
        "USG (ABDOMEN & PELVIC)",
        "GEN MEDICINE OPINION",
        "OPTHAL OPINION",
        "DIET COUNSELLING",
      ],
    },
    {
      name: "Comprehensive Health Checkup (Without TMT)",
      price: "₹5,300",
      icon: FaBaby,
      color: "bg-indigo-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "LIPID PROFILE",
        "RFT",
        "LFT",
        "TSH",
        "FT3, FT4",
        "URINE COMPLETE",
        "PSA",
        "ALPHA - CONSUMABLES",
        "ECG",
        "ECHO",
        "USG (ABDOMEN & PELVIC)",
        "CHEST X-RAY",
        "GEN MEDICINE OPINION",
        "OPTHAL OPINION",
        "DENTAL OPINION",
        "DIET COUNSELLING",
      ],
    },
    {
      name: "Comprehensive Health Checkup (With TMT)",
      price: "₹6,500",
      icon: FaStar,
      color: "bg-teal-500",
      tests: [
        "CBC",
        "FBS",
        "PPBS",
        "HbA1C",
        "LIPID PROFILE",
        "RFT",
        "LFT",
        "TSH",
        "FT3, FT4",
        "URINE COMPLETE",
        "PSA",
        "ALPHA - CONSUMABLES",
        "ECG",
        "ECHO",
        "USG (ABDOMEN & PELVIC)",
        "CHEST X-RAY",
        "TMT",
        "GEN MEDICINE OPINION",
        "OPTHAL OPINION",
        "DENTAL OPINION",
        "DIET COUNSELLING",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden min-h-screen">
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #0d9488);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #0f766e);
        }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100 rounded-full opacity-30 animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-10 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-emerald-50 rounded-full opacity-20" />
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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon;
              return (
                <motion.div
                  key={pkg.name}
                  variants={cardVariant}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group relative overflow-hidden"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />

                  {/* Card content */}
                  <div className="p-6 lg:p-8">
                    {/* Icon and header */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`flex items-center justify-center w-16 h-16 ${pkg.color} text-white rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-emerald-600">
                          {pkg.price}
                        </div>
                        <div className="text-sm text-gray-500 font-medium">
                          per package
                        </div>
                      </div>
                    </div>

                    {/* Package Name */}
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 group-hover:text-emerald-600 transition-colors leading-tight">
                      {pkg.name}
                    </h3>

                    {/* Tests List */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-700 text-lg mb-4 border-b border-gray-100 pb-2">
                        Tests Included:
                      </h4>
                      <div className="max-h-64 overflow-y-auto custom-scrollbar">
                        {pkg.tests.map((test, testIndex) => (
                          <div
                            key={testIndex}
                            className="flex items-start text-gray-600 py-1"
                          >
                            <FaCheck className="text-emerald-500 mr-3 text-xs flex-shrink-0 mt-1" />
                            <span className="text-sm font-medium leading-relaxed">
                              {test}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Professional bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
                </motion.div>
              );
            })}
          </motion.div>
          {/* Additional Information removed per request */}
        </div>
      </section>
    </div>
  );
};

export default Packages;
