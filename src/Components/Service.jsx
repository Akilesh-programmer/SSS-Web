import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../data/departmentsData";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaEye,
  FaUserMd,
  FaAmbulance,
  FaXRay,
  FaStethoscope,
  FaTooth,
  FaChild,
  FaLungs,
  FaUserNurse,
  FaMicroscope,
  FaUserInjured,
  FaUserFriends,
  FaUserCheck,
  FaSyringe,
  FaHospital,
  FaCut,
  FaHeart,
  FaBandAid,
  FaFlask,
  FaPrescriptionBottleAlt,
  FaPills,
  FaShieldAlt,
} from "react-icons/fa";

const Service = () => {
  const navigate = useNavigate();
  const departments = getAllDepartments();

  // Icon mapping for each department
  const departmentIcons = {
    "Accident & Emergency Care": <FaAmbulance />,
    Cardiology: <FaHeartbeat />,
    Dermatology: <FaBandAid />,
    Dentistry: <FaTooth />,
    Endocrinology: <FaFlask />,
    "ENT (Ear, Nose & Throat)": <FaStethoscope />,
    "General Medicine": <FaUserMd />,
    "General Surgery": <FaCut />,
    Gastroenterology: <FaMicroscope />,
    "Obstetrics & Gynaecology": <FaUserFriends />,
    Nephrology: <FaPills />,
    Neurology: <FaBrain />,
    "Neuro Surgery": <FaBrain />,
    Orthopaedics: <FaBone />,
    Ophthalmology: <FaEye />,
    Paediatrics: <FaChild />,
    Psychiatry: <FaBrain />,
    Pulmonology: <FaLungs />,
    Radiology: <FaXRay />,
    Anaesthesiology: <FaSyringe />,
    Physiotherapy: <FaUserInjured />,
    "Critical Care Medicine": <FaHeart />,
    Pathology: <FaMicroscope />,
    "Plastic Surgery": <FaCut />,
    Pharmacy: <FaPrescriptionBottleAlt />,
  };

  // Get icon for department
  const getDepartmentIcon = (departmentName) => {
    return departmentIcons[departmentName] || <FaHospital />;
  };

  // Simplified Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren",
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const handleCardClick = (department) => {
    navigate(`/department/${department.slug}`);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 border border-emerald-200">
              <span className="text-emerald-700 font-semibold text-sm tracking-wide uppercase">
                Medical Excellence
              </span>
            </div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Our Medical
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Specialities
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover world-class healthcare across {departments.length}{" "}
            specialized departments, where cutting-edge technology meets
            compassionate care.
          </p>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {departments.map((department) => (
            <motion.div
              key={department.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative cursor-pointer card-container"
              onClick={() => handleCardClick(department)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative backdrop-blur-sm rounded-3xl p-6 shadow-xl transition-all duration-500 h-full flex flex-col service-card fixed-height-content overflow-hidden bg-white/95">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>

                {/* Icon Container */}
                <motion.div
                  className="relative mb-6 flex justify-center"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      delay: 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 150,
                      damping: 12,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300 group-hover:scale-110"></div>
                    <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <div className="text-white text-4xl group-hover:scale-105 transition-transform duration-300">
                        {getDepartmentIcon(department.name)}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  className="relative flex-grow text-center content-loading"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.4,
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300 min-h-[3rem] flex items-center justify-center department-title"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.6,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    {department.name}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-6 leading-relaxed text-sm min-h-[4rem] line-clamp-3 department-desc"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        delay: 0.8,
                        duration: 0.5,
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    {department.description ||
                      "Comprehensive medical care with expert specialists and advanced treatment options."}
                  </motion.p>

                  {/* Key Services */}
                  <motion.div
                    className="space-y-3 mb-6 min-h-[6rem]"
                    initial={{ opacity: 0 }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        delay: 1.0,
                        duration: 0.6,
                        staggerChildren: 0.1,
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    {department.overview?.features
                      ?.slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={`${department.id}-feature-${featureIndex}`}
                          className="flex items-start space-x-3 feature-item"
                          style={{ animationDelay: `${featureIndex * 0.1}s` }}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:scale-125 transition-transform duration-300 flex-shrink-0 mt-2"></div>
                          <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium text-left leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      )) || (
                      // Fallback content if features are not available
                      <>
                        <div
                          className="flex items-start space-x-3 feature-item"
                          style={{ animationDelay: "0s" }}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex-shrink-0 mt-2"></div>
                          <span className="text-sm text-gray-600 font-medium text-left leading-relaxed">
                            Expert Medical Care
                          </span>
                        </div>
                        <div
                          className="flex items-start space-x-3 feature-item"
                          style={{ animationDelay: "0.1s" }}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex-shrink-0 mt-2"></div>
                          <span className="text-sm text-gray-600 font-medium text-left leading-relaxed">
                            Advanced Treatment
                          </span>
                        </div>
                        <div
                          className="flex items-start space-x-3 feature-item"
                          style={{ animationDelay: "0.2s" }}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex-shrink-0 mt-2"></div>
                          <span className="text-sm text-gray-600 font-medium text-left leading-relaxed">
                            24/7 Care Available
                          </span>
                        </div>
                      </>
                    )}
                  </motion.div>
                </motion.div>

                {/* Learn More Button */}
                <motion.div
                  className="relative mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 1.2,
                      duration: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="learn-more-btn w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg relative overflow-hidden group-hover:shadow-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(department);
                    }}
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 transition-opacity duration-300 learn-more-overlay"></div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .animation-delay-2s {
          animation-delay: 2s;
        }
        
        .animation-delay-4s {
          animation-delay: 4s;
        }
        
        /* Ensure consistent card heights and remove border artifacts */
        .service-card {
          min-height: 400px;
          border-radius: 1.5rem !important;
          overflow: hidden;
          position: relative;
          border: none !important;
          outline: none !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          background: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(10px);
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 1.5rem;
          z-index: -1;
        }
        
        /* Enhanced loading transitions with staggered animations */
        .content-loading {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .department-title {
          opacity: 0;
          animation: slideInFromLeft 0.8s ease-out 0.1s forwards;
        }
        
        .department-desc {
          opacity: 0;
          animation: slideInFromRight 0.8s ease-out 0.2s forwards;
        }
        
        .feature-item {
          opacity: 0;
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        /* Learn More button improvements */
        .learn-more-btn {
          pointer-events: none;
          transition: all 0.3s ease;
        }
        
        .group:hover .learn-more-btn {
          pointer-events: auto;
          transform: translateY(-4px) scale(1.02) !important;
          box-shadow: 0 15px 30px rgba(16, 185, 129, 0.3) !important;
        }
        
        .learn-more-btn:hover .learn-more-overlay {
          opacity: 1;
        }
        
        .learn-more-btn:hover {
          transform: translateY(-6px) scale(1.05) !important;
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4) !important;
        }
        
        /* Fix card hover conflicts and flickering */
        .card-container {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          isolation: isolate;
          animation: cardSlideIn 0.8s ease-out forwards;
          opacity: 0;
          border-radius: 1.5rem;
          overflow: hidden;
        }
        
        .card-container:nth-child(1) { animation-delay: 0.1s; }
        .card-container:nth-child(2) { animation-delay: 0.2s; }
        .card-container:nth-child(3) { animation-delay: 0.3s; }
        .card-container:nth-child(4) { animation-delay: 0.4s; }
        .card-container:nth-child(5) { animation-delay: 0.5s; }
        .card-container:nth-child(6) { animation-delay: 0.6s; }
        .card-container:nth-child(7) { animation-delay: 0.7s; }
        .card-container:nth-child(8) { animation-delay: 0.8s; }
        
        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(15deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }
        
        .card-container:hover {
          z-index: 10;
          transform: translateY(-8px) scale(1.02) !important;
        }
        
        .service-card {
          transition: box-shadow 0.4s ease;
          will-change: transform, box-shadow;
          isolation: isolate;
          border: none !important;
          outline: none !important;
          background: rgba(255, 255, 255, 0.98) !important;
          border-radius: 1.5rem;
          overflow: hidden;
        }
        
        .group:hover .service-card {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1);
        }
        
        /* Ensure child elements don't have conflicting gray backgrounds */
        .service-card > *:not(.service-card) {
          background: transparent !important;
        }
        
        /* Prevent cursor flickering */
        .card-container * {
          pointer-events: none;
        }
        
        .card-container {
          pointer-events: auto;
        }
        
        .learn-more-btn {
          pointer-events: none;
        }
        
        .group:hover .learn-more-btn {
          pointer-events: auto;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Fix layout shifts and bullet alignment */
        .fixed-height-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100%;
          background: transparent !important;
        }
        
        /* Smooth bullet point positioning */
        .feature-item {
          align-items: flex-start;
        }
        
        .feature-item .w-2 {
          margin-top: 6px;
          flex-shrink: 0;
        }
        
        /* Loading shimmer effect */
        .content-loading::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shimmer 1.5s ease-in-out;
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Service;
