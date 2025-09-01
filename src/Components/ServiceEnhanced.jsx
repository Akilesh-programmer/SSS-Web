import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../data/departmentsData";

const Service = () => {
  const navigate = useNavigate();
  const departments = getAllDepartments();

  // Enhanced Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: "easeOutBack",
      },
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const handleCardClick = (department) => {
    navigate(`/department/${department.slug}`);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"></div>

        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-teal-400 rounded-full animate-pulse animation-delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-2000 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOutCubic" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 border border-emerald-200">
              <span className="text-emerald-700 font-semibold text-sm tracking-wide uppercase">
                Medical Excellence
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Our Medical
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Specialities
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover world-class healthcare across {departments.length}{" "}
            specialized departments, where cutting-edge technology meets
            compassionate care to deliver exceptional medical outcomes.
          </motion.p>
        </motion.div>

        {/* Enhanced Departments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {departments.map((department, index) => (
            <motion.div
              key={department.id}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOutCubic" },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative cursor-pointer perspective-1000"
              onClick={() => handleCardClick(department)}
              style={{
                transformStyle: "preserve-3d",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 h-full flex flex-col overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500"></div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>

                {/* Enhanced Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <motion.div
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <div className="text-white text-4xl filter drop-shadow-sm">
                        {department.icon}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Content */}
                <div className="relative flex-grow text-center">
                  <motion.h3
                    className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {department.name}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 mb-6 leading-relaxed text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    {department.description}
                  </motion.p>

                  {/* Enhanced Key Services */}
                  <motion.div
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {department.overview?.features
                      ?.slice(0, 3)
                      .map((feature, featureIndex) => (
                        <motion.div
                          key={`${department.id}-feature-${featureIndex}`}
                          className="flex items-center justify-center space-x-3"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>
                          <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                  </motion.div>
                </div>

                {/* Enhanced Learn More Button */}
                <motion.div
                  className="relative mt-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Service;
