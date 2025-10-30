import React, { useState, useRef, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAmbulance,
  FaHeartbeat,
  FaStethoscope,
  FaBaby,
  FaXRay,
  FaShieldAlt,
  FaCapsules,
  FaLungs,
  FaMicroscope,
  FaFlask,
  FaTint,
  FaCreditCard,
  FaWaveSquare,
  FaProcedures,
  FaHandHoldingMedical,
  FaRadiation,
  FaChevronLeft,
  FaChevronRight,
  FaHome,
  FaImages,
} from "react-icons/fa";
import HeroSection from "../ui/HeroSection";

// Using public assets for better performance during deployment
const BG1 = "/assets/heroes/main-1.avif";
const BG2 = "/assets/heroes/main-2.avif";
const BG3 = "/assets/heroes/heroes-20250923.avif";
const BG4 = "/assets/heroes/heroes-20250923.avif";

// Service images - left and right side
const SERVICE_LEFT_1 =
  "/assets/departments/whatsapp-image-2025-09-09-at-23-15-40_dac5ba67.avif";
const SERVICE_LEFT_2 =
  "/assets/departments/whatsapp-image-2025-09-09-at-23-15-38_a6224a71.avif";
const SERVICE_LEFT_3 = "/assets/infrastructure/infrastructure-wa0027.avif";
const SERVICE_LEFT_4 = "/assets/infrastructure/infrastructure-03324.avif";
// previous left-5 will be moved to right side as next right image
const SERVICE_LEFT_5 = "/assets/infrastructure/infrastructure-wa0026.avif";
const SERVICE_RIGHT_5 = "/assets/infrastructure/infrastructure-9.avif";
const SERVICE_RIGHT_1 = "/assets/heroes/main-3.avif";
const SERVICE_RIGHT_2 = "/assets/infrastructure/infrastructure-0336899.avif";
const SERVICE_RIGHT_3 = "/assets/infrastructure/infrastructure-03412.avif";
const SERVICE_RIGHT_4 = "/assets/infrastructure/infrastructure-03377.avif";

// Logo for watermark
const sssLogo = "/assets/logos/sss-full-logo.avif";

// BG Photos array for hero backgrounds
const bgPhotos = [BG1, BG2, BG3, BG4];

// Function to get hero background image (using third image for Services/Infrastructure)
const getHeroBgImage = () => {
  return bgPhotos[2]; // Use third image for Infrastructure
};

const Services = () => {
  const ref = useRef(null);

  // Image modal state with navigation
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageCategory, setImageCategory] = useState(""); // 'left' or 'right'

  // Left side images array
  const leftImages = useMemo(
    () => [
      { id: 1, src: SERVICE_LEFT_1, alt: "Hospital Service" },
      { id: 2, src: SERVICE_LEFT_2, alt: "Medical Facility" },
      { id: 3, src: SERVICE_LEFT_3, alt: "Medical Facility 2" },
      { id: 4, src: SERVICE_LEFT_4, alt: "Medical Facility 3" },
      { id: 5, src: SERVICE_LEFT_5, alt: "Medical Facility 4" },
    ],
    []
  );

  // Right side images array
  const rightImages = useMemo(
    () => [
      { id: 1, src: SERVICE_RIGHT_1, alt: "Hospital Infrastructure" },
      { id: 2, src: SERVICE_RIGHT_2, alt: "Hospital Infrastructure 2" },
      { id: 3, src: SERVICE_RIGHT_3, alt: "Hospital Infrastructure 3" },
      { id: 4, src: SERVICE_RIGHT_4, alt: "Hospital Infrastructure 4" },
      { id: 5, src: SERVICE_RIGHT_5, alt: "Hospital Infrastructure 5" },
    ],
    []
  );

  // Combine all images for modal navigation
  const allImages = useMemo(
    () => [...leftImages, ...rightImages],
    [leftImages, rightImages]
  );

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  // Modal functions with navigation
  const openModal = (image, category = "") => {
    const imageArray =
      category === "left"
        ? leftImages
        : category === "right"
        ? rightImages
        : allImages;
    const index = imageArray.findIndex((img) => img.id === image.id);
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setImageCategory(category);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setImageCategory("");
  };

  const navigateImage = (direction) => {
    let imageArray;
    if (imageCategory === "left") {
      imageArray = leftImages;
    } else if (imageCategory === "right") {
      imageArray = rightImages;
    } else {
      imageArray = allImages;
    }

    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentImageIndex > 0 ? currentImageIndex - 1 : imageArray.length - 1;
    } else {
      newIndex =
        currentImageIndex < imageArray.length - 1 ? currentImageIndex + 1 : 0;
    }

    setCurrentImageIndex(newIndex);
    setSelectedImage(imageArray[newIndex]);
  };

  // Updated medical services with more appropriate icons
  const medicalServices = [
    {
      name: "24x7 Ambulance",
      icon: FaAmbulance,
      color: "from-red-500 to-red-600",
    },
    {
      name: "ICU & ICCU",
      icon: FaHeartbeat,
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "24x7 Emergency Services",
      icon: FaStethoscope,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Labor Room & NICU",
      icon: FaBaby,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Dialysis",
      icon: FaTint,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      name: "ECG/Echo/Treadmill Testing (TMT)",
      icon: FaWaveSquare,
      color: "from-green-500 to-green-600",
    },
    {
      name: "24x7 Digital X-ray",
      icon: FaXRay,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Endoscopy Services",
      icon: FaMicroscope,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Preventive Health Checkup",
      icon: FaShieldAlt,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Insurance",
      icon: FaCreditCard,
      color: "from-violet-500 to-violet-600",
    },
    {
      name: "24x7 Pharmacy",
      icon: FaCapsules,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "24x7 Clinical Laboratory",
      icon: FaFlask,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      name: "Holter Monitoring",
      icon: FaStethoscope,
      color: "from-pink-500 to-rose-600",
    },
    { name: "EEG", icon: FaRadiation, color: "from-indigo-500 to-indigo-600" },
    {
      name: "24x7 Ultrasound & Colour Doppler",
      icon: FaWaveSquare,
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Pulmonary Function Test (PFT)",
      icon: FaLungs,
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "CSSD",
      icon: FaHandHoldingMedical,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Modular Operating Rooms",
      icon: FaProcedures,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  // Enhanced animation variants with stagger
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={getHeroBgImage()}
        badge={
          <>
            <FaStethoscope className="text-lg md:text-xl mr-2 md:mr-3 text-emerald-300" />
            <span className="text-label-sm tracking-wider uppercase text-white">
              Healthcare Excellence
            </span>
          </>
        }
        title="Medical Services"
        subtitle="State-of-the-art Medical Facilities & Comprehensive Healthcare Services"
      />

      {/* Main Content */}
      <section className="py-24 md:py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout: Images on both sides, cards in middle */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Images Column */}
              <motion.div
                className="col-span-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Spacer to align images lower to match card section height */}
                <div className="h-64"></div>

                <div className="space-y-10">
                  {leftImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                      onClick={() => openModal(image, "left")}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      {/* View Indicator */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <FaImages className="text-emerald-600 text-sm" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Center Content Column - Services Cards */}
              <motion.div
                className="col-span-6 space-y-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Medical Services Section */}
                <div>
                  <div className="text-center mb-12">
                    {/* Animated Badge */}
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 via-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6 border border-emerald-200 shadow-lg"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaStethoscope className="text-emerald-600 text-lg" />
                      <span className="text-label-sm text-emerald-700 tracking-wide uppercase">
                        Medical Services
                      </span>
                    </motion.div>

                    {/* Enhanced Heading */}
                    <motion.h2
                      className="text-display-lg mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                        Comprehensive Healthcare
                      </span>
                    </motion.h2>

                    <motion.p
                      className="text-body-lg text-gray-600 max-w-2xl mx-auto"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Advanced medical facilities and expert care for all your
                      health needs
                    </motion.p>
                  </div>

                  {/* Enhanced Service Cards Grid with Stagger Animation */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {medicalServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <motion.div
                          key={service.name}
                          variants={itemVariants}
                          whileHover={{
                            scale: 1.06,
                            y: -8,
                            boxShadow:
                              "0 20px 25px -5px rgba(16, 185, 129, 0.15), 0 10px 10px -5px rgba(16, 185, 129, 0.1)",
                          }}
                          className="bg-white rounded-2xl shadow-md border border-gray-100 group cursor-pointer p-4 flex flex-col items-center justify-center text-center min-h-[120px] transition-all duration-300 hover:border-emerald-200 relative overflow-hidden"
                        >
                          {/* Background Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Content */}
                          <motion.div
                            className={`relative w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-3 shadow-md`}
                            whileHover={{
                              scale: 1.15,
                              rotate: 8,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <IconComponent className="text-white text-base relative z-10" />
                            {/* Icon Glow */}
                            <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </motion.div>

                          <h3 className="text-label-md text-gray-800 group-hover:text-emerald-600 transition-colors px-2 relative z-10">
                            {service.name}
                          </h3>

                          {/* Corner Accent */}
                          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Images Column */}
              <motion.div
                className="col-span-3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                {/* Spacer to align images lower to match card section height */}
                <div className="h-64"></div>

                <div className="space-y-10">
                  {rightImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                      onClick={() => openModal(image, "right")}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      {/* View Indicator */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                        <FaImages className="text-emerald-600 text-sm" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Layout - Enhanced */}
          <div className="block lg:hidden space-y-16">
            {/* Medical Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10">
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 via-green-100 to-emerald-100 rounded-full px-5 py-2.5 mb-5 border border-emerald-200 shadow-md"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaStethoscope className="text-emerald-600 text-base" />
                  <span className="text-label-sm text-emerald-700 uppercase tracking-wide">
                    Medical Services
                  </span>
                </motion.div>

                <h2 className="text-heading-xl mb-4 px-4">
                  <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Healthcare Services
                  </span>
                </h2>

                <p className="text-body-md text-gray-600 px-4">
                  Advanced medical facilities and expert care
                </p>
              </div>

              {/* Enhanced Mobile Cards Grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {medicalServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={service.name}
                      variants={itemVariants}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 group active:shadow-xl p-5 flex flex-col items-center justify-center text-center min-h-[130px] transition-all duration-300 hover:border-emerald-200 relative overflow-hidden touch-manipulation"
                    >
                      {/* Background Gradient on Touch/Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />

                      {/* Icon */}
                      <motion.div
                        className={`relative w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-md mb-3`}
                        whileTap={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="text-lg relative z-10" />
                        <div className="absolute inset-0 bg-white/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>

                      <h3 className="text-body-md text-gray-800 group-hover:text-emerald-600 group-active:text-emerald-600 transition-colors relative z-10">
                        {service.name}
                      </h3>

                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Service Images Gallery for Mobile - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10">
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full px-5 py-2.5 mb-5 border border-gray-200 shadow-md"
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <FaImages className="text-gray-600 text-base" />
                  <span className="text-label-sm text-gray-700 uppercase tracking-wide">
                    Gallery ({allImages.length})
                  </span>
                </motion.div>
                <h2 className="text-heading-xl mb-4 px-4">
                  <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                    Our Facilities
                  </span>
                </h2>
                <p className="text-body-md text-gray-600 px-4">
                  State-of-the-art medical facilities and equipment
                </p>
              </div>

              {/* Enhanced Mobile Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {allImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group touch-manipulation"
                    onClick={() => openModal(image)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-105"
                        loading="lazy"
                      />
                    </div>
                    {/* View Icon */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 shadow-lg">
                      <FaImages className="text-emerald-600 text-sm" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Image Modal with Navigation - Glossy Transparent Background */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Modal Container */}
            <motion.div
              className="relative max-w-6xl max-h-[85vh] w-full flex flex-col"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between mb-4 px-2">
                <motion.div
                  className="flex items-center gap-3 text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-white/90 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold">
                      {currentImageIndex + 1} /{" "}
                      {(() => {
                        if (imageCategory === "left") return leftImages.length;
                        if (imageCategory === "right")
                          return rightImages.length;
                        return allImages.length;
                      })()}
                    </span>
                  </div>
                </motion.div>

                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  className="bg-white/90 hover:bg-white backdrop-blur-md border border-white/40 rounded-full p-3 text-gray-900 transition-all duration-300 group shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Image Container with Navigation */}
              <div className="relative flex-1 flex items-center justify-center">
                {/* Previous Button */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("prev");
                  }}
                  className="absolute left-2 md:left-4 z-20 bg-white/90 hover:bg-white backdrop-blur-md border border-white/40 rounded-full p-3 md:p-4 text-gray-900 transition-all duration-300 group shadow-lg"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>

                {/* Image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage.id}
                    className="relative max-w-full max-h-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                    />
                    {/* SSS Hospital Logo Watermark - Conditionally shown based on image category and index */}
                    {((imageCategory === "left" &&
                      [2, 3, 4].includes(currentImageIndex)) ||
                      (imageCategory === "right" &&
                        [0, 1, 2, 3].includes(currentImageIndex))) && (
                      <img
                        src={sssLogo}
                        alt="SSS Hospital Logo"
                        className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-90 drop-shadow-lg pointer-events-none"
                        style={{ objectFit: "contain" }}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Next Button */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage("next");
                  }}
                  className="absolute right-2 md:right-4 z-20 bg-white/90 hover:bg-white backdrop-blur-md border border-white/40 rounded-full p-3 md:p-4 text-gray-900 transition-all duration-300 group shadow-lg"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.button>
              </div>

              {/* Keyboard hint removed per UX request */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
