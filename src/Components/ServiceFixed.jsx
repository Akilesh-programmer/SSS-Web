import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../data/departmentsData";

const Service = () => {
  const navigate = useNavigate();
  const departments = getAllDepartments();

  // Simplified Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {departments.map((department) => (
            <motion.div
              key={department.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative cursor-pointer"
              onClick={() => handleCardClick(department)}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 h-full flex flex-col">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>

                {/* Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <div className="text-white text-4xl">
                        {department.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-grow text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {department.name}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {department.description}
                  </p>

                  {/* Key Services */}
                  <div className="space-y-3 mb-6">
                    {department.overview?.features
                      ?.slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={`${department.id}-feature-${featureIndex}`}
                          className="flex items-center justify-center space-x-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="relative mt-auto">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden"
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
