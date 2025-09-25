import React from "react";
import { motion } from "framer-motion";
import {
  FaAmbulance,
  FaHeartbeat,
  FaStethoscope,
  FaBaby,
  FaXRay,
  FaShieldAlt,
  FaCapsules,
  FaBrain,
  FaLungs,
  FaUserMd,
  FaHospital,
  FaMicroscope,
  FaSyringe,
  FaHeart,
  FaFileMedical,
} from "react-icons/fa";
import img1 from "../../assets/services_photos/1.png";
import img2 from "../../assets/services_photos/2.png";
import img3 from "../../assets/services_photos/3.png";
import img4 from "../../assets/services_photos/4.png";
import img5 from "../../assets/services_photos/5.png";
import img6 from "../../assets/services_photos/6.png";
import img7 from "../../assets/services_photos/7.png";

// BG Photos for hero background
import BG_DSC03391 from "../../assets/BG_Photos/DSC03391.JPG";
import BG_DSC03392 from "../../assets/BG_Photos/DSC03392.JPG";
import BG_IMG20250923WA0015 from "../../assets/BG_Photos/IMG-20250923-WA0015.jpg";
import BG_IMG20250923WA0029 from "../../assets/BG_Photos/IMG-20250923-WA0029.jpg";

// BG Photos array for hero backgrounds
const bgPhotos = [
  BG_DSC03391,
  BG_DSC03392,
  BG_IMG20250923WA0015,
  BG_IMG20250923WA0029,
];

// Function to get hero background image (using first image for Services)
const getHeroBgImage = () => {
  return bgPhotos[0]; // Use first image for Services
};

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
      icon: FaHeart,
      color: "bg-emerald-500",
    },
    { name: "24x7 CT Scan", icon: FaXRay, color: "bg-blue-500" },
    {
      name: "Advanced AI and 3D Cathlab",
      icon: FaHeartbeat,
      color: "bg-purple-500",
    },
    {
      name: "Labour Room with VIP Labour Suite",
      icon: FaBaby,
      color: "bg-pink-500",
    },
    { name: "Dialysis", icon: FaUserMd, color: "bg-cyan-500" },
    {
      name: "ECG/Echo/Treadmill Testing (TMT)",
      icon: FaStethoscope,
      color: "bg-indigo-500",
    },
    { name: "24x7 Digital X-ray", icon: FaXRay, color: "bg-gray-500" },
    { name: "Endoscopy Services", icon: FaMicroscope, color: "bg-orange-500" },
    {
      name: "Rooms in all Categories Including Suite Rooms",
      icon: FaHospital,
      color: "bg-teal-500",
    },
    {
      name: "Preventive Health Checkup",
      icon: FaFileMedical,
      color: "bg-green-500",
    },
    {
      name: "Insurance",
      icon: FaShieldAlt,
      color: "bg-emerald-600",
    },
    { name: "24x7 Pharmacy", icon: FaCapsules, color: "bg-yellow-500" },
    {
      name: "24x7 Clinical Laboratory",
      icon: FaMicroscope,
      color: "bg-violet-500",
    },
    { name: "Holter Monitoring", icon: FaHeartbeat, color: "bg-rose-500" },
    { name: "EEG", icon: FaBrain, color: "bg-amber-500" },
    {
      name: "24x7 Ultrasound & Colour Doppler",
      icon: FaStethoscope,
      color: "bg-lime-500",
    },
    {
      name: "Pulmonary Function Test (PFT)",
      icon: FaLungs,
      color: "bg-sky-500",
    },
    { name: "CSSD", icon: FaFileMedical, color: "bg-stone-500" },
    {
      name: "Modular Operating Rooms",
      icon: FaSyringe,
      color: "bg-emerald-600",
    },
  ];

  const serviceImages = [
    {
      src: img1,
      title: "Advanced Medical Equipment",
    },
    {
      src: img2,
      title: "Modern Operating Rooms",
    },
    { src: img3, title: "Emergency Care Unit" },
    {
      src: img4,
      title: "Patient Care Facilities",
    },
    { src: img5, title: "Diagnostic Services" },
    { src: img6, title: "Critical Care Unit" },
    { src: img7, title: "Medical Technology" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden min-h-screen">
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
          {/* Services Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"
          >
            <FaStethoscope className="text-base md:text-xl mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
              Healthcare Services
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Our Medical Services
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            Comprehensive Healthcare Services Available 24/7
          </motion.p>
        </div>
      </motion.section>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100 rounded-full opacity-30 animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-10 animate-pulse" />
      </div>

      {/* Services Content Section */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50/30 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-300 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-teal-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            {/* Duplicate header removed (title is shown in hero) */}
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
                          {service.image ? (
                            <img
                              src={service.image}
                              alt={service.name}
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            <IconComponent className="w-6 h-6" />
                          )}
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

          {/* Mobile Layout: Professional Medical Design */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-12"
            >
              {/* Services Section */}
              <div className="mb-12">
                <motion.div variants={cardVariant} className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-200 mb-4">
                    <FaStethoscope className="text-emerald-600 text-sm" />
                    <span className="text-emerald-700 font-semibold text-sm">
                      Our Services
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Comprehensive Medical Care
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                    Advanced healthcare services available 24/7
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-4">
                  {servicesWithIcons.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <motion.div
                        key={service.name}
                        variants={cardVariant}
                        whileHover={{ y: -2, scale: 1.01 }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 group"
                      >
                        <div className="flex items-start gap-4">
                          {/* Fixed-size icon container */}
                          <div
                            className={`flex items-center justify-center w-12 h-12 ${service.color} text-white rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
                          >
                            {service.image ? (
                              <img
                                src={service.image}
                                alt={service.name}
                                className="w-6 h-6 object-contain"
                              />
                            ) : (
                              <IconComponent className="w-6 h-6" />
                            )}
                          </div>

                          {/* Service content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-gray-800 group-hover:text-emerald-600 transition-colors leading-tight">
                              {service.name}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Facilities Gallery Section */}
              <div className="mb-12">
                <motion.div variants={cardVariant} className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full border border-teal-200 mb-4">
                    <FaShieldAlt className="text-teal-600 text-sm" />
                    <span className="text-teal-700 font-semibold text-sm">
                      Our Facilities
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    State-of-the-Art Infrastructure
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                    Modern medical equipment and patient-centered facilities
                  </p>
                </motion.div>

                <div className="space-y-4">
                  {serviceImages.map((image, index) => (
                    <motion.div
                      key={image.title}
                      variants={cardVariant}
                      whileHover={{ scale: 1.02 }}
                      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />

                      {/* Professional overlay content */}
                      {/* image overlay text removed per request */}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Emergency CTA removed per request */}
            </motion.div>
          </div>

          {/* Call-to-Action Section removed per request */}
        </div>
      </section>
    </div>
  );
};

export default Services;
