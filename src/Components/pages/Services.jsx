import React, { useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import OptimizedImageGrid from "../ui/OptimizedImageGrid";
import {
  FaAmbulance,
  FaHeartbeat,
  FaStethoscope,
  FaBaby,
  FaXRay,
  FaShieldAlt,
  FaCapsules,
  FaLungs,
  FaHospital,
  FaMicroscope,
  FaBed,
  FaEye,
  FaClock,
  FaFlask,
  FaFileMedical,
  FaTint,
  FaCreditCard,
  FaWaveSquare,
  FaCrown,
  FaHome,
  FaProcedures,
  FaClinicMedical,
  FaHandHoldingMedical,
  FaRadiation,
} from "react-icons/fa";

// Using public assets for better performance during deployment
const BG1 = "/assets/BG_Photos/DSC03391.JPG";
const BG2 = "/assets/BG_Photos/DSC03392.JPG";
const BG3 = "/assets/BG_Photos/IMG-20250923-WA0015.jpg";
const BG4 = "/assets/BG_Photos/IMG-20250923-WA0029.jpg";

// Infrastructure photos from public assets
const INF1 = "/assets/Infrastructure_Photos/DSC03356.JPG";
const INF2 = "/assets/Infrastructure_Photos/DSC03360.JPG";
const INF3 = "/assets/Infrastructure_Photos/DSC03365.JPG";
const INF4 = "/assets/Infrastructure_Photos/DSC03386.JPG";
const INF5 = "/assets/Infrastructure_Photos/DSC03388.JPG";
const INF6 = "/assets/Infrastructure_Photos/DSC03412.JPG";
const INF7 = "/assets/Infrastructure_Photos/DSC03426.JPG";
const INF8 = "/assets/Infrastructure_Photos/DSC03427.JPG";
const INF9 = "/assets/Infrastructure_Photos/DSC03428.JPG";
const INF10 = "/assets/Infrastructure_Photos/DSC03434.JPG";
const INF11 = "/assets/Infrastructure_Photos/DSC03435.JPG";
const INF12 = "/assets/Infrastructure_Photos/IMG-20250923-WA0016.jpg";
const INF13 = "/assets/Infrastructure_Photos/IMG-20250923-WA0018.jpg";
const INF14 = "/assets/Infrastructure_Photos/IMG-20250923-WA0019.jpg";
const INF15 = "/assets/Infrastructure_Photos/IMG-20250923-WA0020.jpg";
const INF16 = "/assets/Infrastructure_Photos/IMG-20250923-WA0023.jpg";
const INF17 = "/assets/Infrastructure_Photos/IMG-20250923-WA0026.jpg";
const INF18 = "/assets/Infrastructure_Photos/IMG-20250923-WA0027.jpg";
const INF19 = "/assets/Infrastructure_Photos/IMG-20250923-WA0028.jpg";
const INF20 = "/assets/Infrastructure_Photos/IMG-20250923-WA0030.jpg";
const INF21 = "/assets/Infrastructure_Photos/IMG-20250923-WA0032.jpg";

// Infrastructure Photos imports (all 21 images)

// BG Photos array for hero backgrounds
const bgPhotos = [BG1, BG2, BG3, BG4];

// Function to get hero background image (using third image for Services/Infrastructure)
const getHeroBgImage = () => {
  return bgPhotos[2]; // Use third image for Infrastructure
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Image modal state
  const [selectedImage, setSelectedImage] = useState(null);

  // Modal functions
  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Infrastructure photos array (memoized to avoid re-renders)
  const infrastructureImages = useMemo(
    () => [
      { id: 1, src: INF1, alt: "Hospital Infrastructure" },
      { id: 2, src: INF2, alt: "Medical Facility" },
      { id: 3, src: INF3, alt: "Hospital Equipment" },
      { id: 4, src: INF4, alt: "Healthcare Infrastructure" },
      { id: 5, src: INF5, alt: "Medical Technology" },
      { id: 6, src: INF6, alt: "Hospital Interior" },
      { id: 7, src: INF7, alt: "Medical Facility" },
      { id: 8, src: INF8, alt: "Healthcare Equipment" },
      { id: 9, src: INF9, alt: "Hospital Infrastructure" },
      { id: 10, src: INF10, alt: "Medical Center" },
      { id: 11, src: INF11, alt: "Healthcare Facility" },
      { id: 12, src: INF12, alt: "Hospital Interior" },
      { id: 13, src: INF13, alt: "Medical Infrastructure" },
      { id: 14, src: INF14, alt: "Healthcare Technology" },
      { id: 15, src: INF15, alt: "Hospital Equipment" },
      { id: 16, src: INF16, alt: "Medical Facility" },
      { id: 17, src: INF17, alt: "Healthcare Infrastructure" },
      { id: 18, src: INF18, alt: "Hospital Interior" },
      { id: 19, src: INF19, alt: "Medical Technology" },
      { id: 20, src: INF20, alt: "Healthcare Facility" },
      { id: 21, src: INF21, alt: "Hospital Infrastructure" },
    ],
    []
  );

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
      name: "Rooms in all Categories Including Suite Rooms",
      icon: FaBed,
      color: "from-amber-500 to-amber-600",
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

  // Updated room categories with more appropriate icons
  const roomCategories = [
    {
      id: 1,
      name: "GENERAL WARD",
      icon: FaBed,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "SEMI PRIVATE ROOM",
      icon: FaHome,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      name: "SEMI PRIVATE ROOM (A/C)",
      icon: FaHome,
      color: "from-teal-500 to-teal-600",
    },
    {
      id: 4,
      name: "PRIVATE ROOM",
      icon: FaBed,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 5,
      name: "PRIVATE ROOM (A/C)",
      icon: FaBed,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 6,
      name: "DELUXE ROOM",
      icon: FaCrown,
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 7,
      name: "SUITE ROOM (SMALL)",
      icon: FaCrown,
      color: "from-amber-500 to-amber-600",
    },
    {
      id: 8,
      name: "SUITE ROOM (BIG)",
      icon: FaCrown,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 9,
      name: "EMR OBSERVATION",
      icon: FaFileMedical,
      color: "from-red-500 to-red-600",
    },
    {
      id: 10,
      name: "DAYCARE OBSERVATION",
      icon: FaClock,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 11,
      name: "OPHTHAL DAYCARE",
      icon: FaEye,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: 12,
      name: "POST OP RECOVERY",
      icon: FaClinicMedical,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Enhanced hover variants for cards
  const cardHoverVariants = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Enhanced icon animation variants
  const iconHoverVariants = {
    rest: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Image animation variants
  const imageVariants = {
    rest: {
      scale: 1,
      filter: "brightness(1)",
    },
    hover: {
      scale: 1.02,
      filter: "brightness(1.1)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      {/* Hero Section */}
      <motion.section
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Background Image with Overlay */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${getHeroBgImage()})` }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <span className="block">Infrastructure &</span>
            <span className="bg-gradient-to-r from-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              Medical Services
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            State-of-the-art Medical Facilities & Healthcare Services
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout: Continuous Images on sides, Combined Content in center */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-8">
              {/* Left Images Column replaced with optimized grid (subset) */}
              <div className="col-span-3">
                <OptimizedImageGrid
                  items={infrastructureImages.slice(0, 10)}
                  onItemClick={(img) => openModal(img)}
                  aspectRatio="4/3"
                  columnsMinWidth={180}
                  className="!gap-8"
                />
              </div>

              {/* Center Content Column - Both Services and Rooms */}
              <div className="col-span-6 space-y-16">
                {/* Medical Services Section */}
                <motion.div variants={itemVariants}>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-6 py-3 mb-6 border border-emerald-200">
                      <FaStethoscope className="text-emerald-600 text-lg" />
                      <span className="text-emerald-700 font-bold text-sm tracking-wide">
                        MEDICAL SERVICES
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        Comprehensive Healthcare Services
                      </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      Advanced medical facilities and expert care for your
                      health needs.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {medicalServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <motion.div
                          key={index}
                          variants={cardHoverVariants}
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                          className="bg-white rounded-xl shadow-md border border-gray-100 group cursor-pointer p-4 flex flex-col items-center justify-center text-center min-h-[120px] hover:shadow-lg transition-all duration-300"
                        >
                          <motion.div
                            className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-3 shadow-sm`}
                            variants={iconHoverVariants}
                          >
                            <IconComponent className="text-white text-lg" />
                          </motion.div>
                          <h3 className="text-sm font-bold text-gray-800 group-hover:text-emerald-600 transition-colors leading-tight">
                            {service.name}
                          </h3>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Room Categories Section */}
                <motion.div variants={itemVariants}>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-6 py-3 mb-6 border border-emerald-200">
                      <FaBed className="text-emerald-600 text-lg" />
                      <span className="text-emerald-700 font-bold text-sm tracking-wide">
                        ACCOMMODATION
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                        Room Categories
                      </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      Comfortable accommodation facilities for optimal patient
                      care and recovery.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {roomCategories.map((room, index) => {
                      const IconComponent = room.icon;
                      return (
                        <motion.div
                          key={room.id}
                          variants={cardHoverVariants}
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                          className="bg-white rounded-xl shadow-md border border-gray-100 group cursor-pointer p-4 flex flex-col items-center justify-center text-center min-h-[100px] hover:shadow-lg transition-all duration-300"
                        >
                          <motion.div
                            className={`w-10 h-10 bg-gradient-to-br ${room.color} rounded-lg flex items-center justify-center text-white shadow-sm mb-2`}
                            variants={iconHoverVariants}
                          >
                            <IconComponent className="text-sm" />
                          </motion.div>
                          <h3 className="text-xs font-bold text-gray-800 group-hover:text-emerald-600 transition-colors leading-tight">
                            {room.name}
                          </h3>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Right Images Column replaced with optimized grid (subset) */}
              <div className="col-span-3">
                <OptimizedImageGrid
                  items={infrastructureImages.slice(11, 21)}
                  onItemClick={(img) => openModal(img)}
                  aspectRatio="4/3"
                  columnsMinWidth={180}
                  className="!gap-8"
                />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-12">
            {/* Medical Services Section */}
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 py-2 mb-4 border border-emerald-200">
                  <FaStethoscope className="text-emerald-600" />
                  <span className="text-emerald-700 font-bold text-sm">
                    MEDICAL SERVICES
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Healthcare Services
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Advanced medical facilities and expert care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {medicalServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardHoverVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="bg-white rounded-xl shadow-md border border-gray-100 group cursor-pointer p-4 flex flex-col items-center justify-center text-center min-h-[120px]"
                    >
                      <motion.div
                        className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-sm mb-2`}
                        variants={iconHoverVariants}
                      >
                        <IconComponent className="text-sm" />
                      </motion.div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                        {service.name}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Room Categories Section */}
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-4 py-2 mb-4 border border-emerald-200">
                  <FaBed className="text-emerald-600" />
                  <span className="text-emerald-700 font-bold text-sm">
                    ACCOMMODATION
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Room Categories
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Comfortable accommodation for optimal patient care.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roomCategories.map((room, index) => {
                  const IconComponent = room.icon;
                  return (
                    <motion.div
                      key={room.id}
                      variants={cardHoverVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="bg-white rounded-xl shadow-md border border-gray-100 group cursor-pointer p-4 flex flex-col items-center justify-center text-center min-h-[120px]"
                    >
                      <motion.div
                        className={`w-10 h-10 bg-gradient-to-br ${room.color} rounded-xl flex items-center justify-center text-white shadow-sm mb-2`}
                        variants={iconHoverVariants}
                      >
                        <IconComponent className="text-sm" />
                      </motion.div>
                      <h3 className="text-sm font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                        {room.name}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Infrastructure Images Gallery for Mobile (optimized grid) */}
            <div>
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full px-4 py-2 mb-4 border border-gray-200">
                  <FaHospital className="text-gray-600" />
                  <span className="text-gray-700 font-bold text-sm">
                    INFRASTRUCTURE
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent">
                    Hospital Infrastructure
                  </span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art medical facilities and equipment.
                </p>
              </div>
              <OptimizedImageGrid
                items={infrastructureImages}
                onItemClick={(img) => openModal(img)}
                aspectRatio="4/3"
                columnsMinWidth={260}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-[80vh] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg
                className="w-8 h-8"
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
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
