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

// BG_Photos imports for hero section background
import BG_DSC03391 from "../../assets/BG_Photos/DSC03391.JPG";
import BG_DSC03392 from "../../assets/BG_Photos/DSC03392.JPG";
import BG_IMG20250923WA0015 from "../../assets/BG_Photos/IMG-20250923-WA0015.jpg";
import BG_IMG20250923WA0029 from "../../assets/BG_Photos/IMG-20250923-WA0029.jpg";

const Packages = () => {
  // Background images array for hero section
  const bgPhotos = [
    BG_DSC03391,
    BG_DSC03392,
    BG_IMG20250923WA0015,
    BG_IMG20250923WA0029,
  ];

  // Function to get hero background image
  const getHeroBgImage = () => {
    // Using index 1 (BG_DSC03392) for Packages page
    return bgPhotos[1];
  };
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

      {/* Hero Section with BG_Photos Background */}
      <motion.section
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getHeroBgImage()})`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Packages Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"
          >
            <FaShieldAlt className="text-base md:text-xl mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
              Health Packages
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Comprehensive Health Packages
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            Preventive Healthcare Plans Tailored for Your Well-being
          </motion.p>
        </div>
      </motion.section>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100 rounded-full opacity-30 animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-10 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-emerald-50 rounded-full opacity-20" />
      </div>

      {/* Packages Content Section */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50/30 relative">
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

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-6">
              Health Checkup Packages
            </h2>
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
