import React from "react";
import { motion } from "framer-motion";
import {
  FaAmbulance,
  FaHeartbeat,
  FaStethoscope,
  FaCog,
  FaBaby,
  FaTint,
  FaProcedures,
  FaXRay,
  FaEye,
  FaBed,
  FaShieldAlt,
  FaCapsules,
  FaFlask,
  FaChartLine,
  FaBrain,
  FaVolumeUp,
  FaLungs,
  FaTools,
  FaCogs,
} from "react-icons/fa";

const Services = () => {
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

  const servicesWithIcons = [
    { name: "24x7 Ambulance", icon: FaAmbulance, color: "bg-red-500" },
    {
      name: "24x7 Emergency & Critical Care Unit",
      icon: FaHeartbeat,
      color: "bg-emerald-500",
    },
    { name: "24x7 CT Scan", icon: FaXRay, color: "bg-blue-500" },
    { name: "Advanced AI and 3D Cathlab", icon: FaCog, color: "bg-purple-500" },
    {
      name: "Labour Room with VIP Labour Suite",
      icon: FaBaby,
      color: "bg-pink-500",
    },
    { name: "Dialysis", icon: FaTint, color: "bg-cyan-500" },
    {
      name: "ECG/Echo/Treadmill Testing (TMT)",
      icon: FaProcedures,
      color: "bg-indigo-500",
    },
    { name: "24x7 Digital X-ray", icon: FaXRay, color: "bg-gray-500" },
    { name: "Endoscopy Services", icon: FaEye, color: "bg-orange-500" },
    {
      name: "Rooms in all Categories Including Suite Rooms",
      icon: FaBed,
      color: "bg-teal-500",
    },
    {
      name: "Preventive Health Checkup",
      icon: FaShieldAlt,
      color: "bg-green-500",
    },
    { name: "24x7 Pharmacy", icon: FaCapsules, color: "bg-yellow-500" },
    { name: "24x7 Clinical Laboratory", icon: FaFlask, color: "bg-violet-500" },
    { name: "Holter Monitoring", icon: FaChartLine, color: "bg-rose-500" },
    { name: "EEG", icon: FaBrain, color: "bg-amber-500" },
    {
      name: "24x7 Ultrasound & Colour Doppler",
      icon: FaVolumeUp,
      color: "bg-lime-500",
    },
    {
      name: "Pulmonary Function Test (PFT)",
      icon: FaLungs,
      color: "bg-sky-500",
    },
    { name: "CSSD", icon: FaTools, color: "bg-stone-500" },
    { name: "Modular Operating Rooms", icon: FaCogs, color: "bg-emerald-600" },
  ];

  const serviceImages = [
    {
      src: "/src/assets/services_photos/1.png",
      title: "Advanced Medical Equipment",
    },
    {
      src: "/src/assets/services_photos/2.png",
      title: "Modern Operating Rooms",
    },
    { src: "/src/assets/services_photos/3.png", title: "Emergency Care Unit" },
    {
      src: "/src/assets/services_photos/4.png",
      title: "Patient Care Facilities",
    },
    { src: "/src/assets/services_photos/5.png", title: "Diagnostic Services" },
    { src: "/src/assets/services_photos/6.png", title: "Critical Care Unit" },
    { src: "/src/assets/services_photos/7.png", title: "Medical Technology" },
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
                HEALTHCARE SERVICES
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-6">
              Our Medical Services & Facilities
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive healthcare services delivered with cutting-edge
              technology and compassionate care, available 24/7 for your peace
              of mind.
            </p>
          </motion.div>

          {/* Desktop Layout: Images on sides, Services in center */}
          <div className="hidden lg:block">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-12 gap-6 mb-16"
            >
              {/* Left Images Column */}
              <div className="col-span-3 space-y-6">
                {serviceImages
                  .slice(0, Math.ceil(serviceImages.length / 2))
                  .map((image, index) => (
                    <motion.div
                      key={`left-${image.title}`}
                      variants={cardVariant}
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* hover text removed per request */}
                    </motion.div>
                  ))}
              </div>

              {/* Center Services Column */}
              <div className="col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  {servicesWithIcons.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.name}
                        variants={cardVariant}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 border border-emerald-100 group"
                      >
                        <div
                          className={`flex items-center justify-center w-12 h-12 ${service.color} text-white rounded-xl mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 text-center group-hover:text-emerald-600 transition-colors leading-tight">
                          {service.name}
                        </h3>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Images Column */}
              <div className="col-span-3 space-y-6">
                {serviceImages
                  .slice(Math.ceil(serviceImages.length / 2))
                  .map((image, index) => (
                    <motion.div
                      key={`right-${image.title}`}
                      variants={cardVariant}
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {/* hover text removed per request */}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout: Alternating Columns */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8 mb-16"
            >
              {/* Create alternating rows for mobile */}
              {Array.from({
                length: Math.ceil(
                  Math.max(servicesWithIcons.length, serviceImages.length) / 3
                ),
              }).map((_, rowIndex) => {
                const isEvenRow = rowIndex % 2 === 0;
                const servicesStart = rowIndex * 3;
                const servicesEnd = servicesStart + 3;
                const imageIndex = rowIndex % serviceImages.length;
                const currentServices = servicesWithIcons.slice(
                  servicesStart,
                  servicesEnd
                );

                if (currentServices.length === 0) return null;

                const rowKey =
                  currentServices[0]?.name ||
                  serviceImages[imageIndex]?.title ||
                  `row-${rowIndex}`;
                return (
                  <div key={rowKey} className="grid grid-cols-2 gap-4">
                    {isEvenRow ? (
                      <>
                        {/* Even rows: Image left, Services right */}
                        <motion.div
                          variants={cardVariant}
                          whileHover={{ scale: 1.05 }}
                          className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                          <img
                            src={serviceImages[imageIndex].src}
                            alt={serviceImages[imageIndex].title}
                            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {/* hover text removed per request */}
                        </motion.div>

                        <div className="space-y-3">
                          {currentServices.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <motion.div
                                key={service.name}
                                variants={cardVariant}
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3 border border-emerald-100 group"
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`flex items-center justify-center w-10 h-10 ${service.color} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}
                                  >
                                    <IconComponent className="w-5 h-5" />
                                  </div>
                                  <h3 className="text-xs font-bold text-gray-800 group-hover:text-emerald-600 transition-colors leading-tight">
                                    {service.name}
                                  </h3>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Odd rows: Services left, Image right */}
                        <div className="space-y-3">
                          {currentServices.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <motion.div
                                key={service.name}
                                variants={cardVariant}
                                whileHover={{ y: -3, scale: 1.02 }}
                                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-3 border border-emerald-100 group"
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`flex items-center justify-center w-10 h-10 ${service.color} text-white rounded-lg group-hover:scale-110 transition-transform duration-300`}
                                  >
                                    <IconComponent className="w-5 h-5" />
                                  </div>
                                  <h3 className="text-xs font-bold text-gray-800 group-hover:text-emerald-600 transition-colors leading-tight">
                                    {service.name}
                                  </h3>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>

                        <motion.div
                          variants={cardVariant}
                          whileHover={{ scale: 1.05 }}
                          className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                        >
                          <img
                            src={serviceImages[imageIndex].src}
                            alt={serviceImages[imageIndex].title}
                            className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {/* hover text removed per request */}
                        </motion.div>
                      </>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Call-to-Action Section removed per request */}
        </div>
      </section>
    </div>
  );
};

export default Services;
