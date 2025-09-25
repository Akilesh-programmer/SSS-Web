import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  FaBed,
  FaEye,
  FaClock,
  FaFlask,
  FaFileMedical,
  FaCog,
  FaHands,
  FaWheelchair,
  FaTint,
  FaCalendarAlt,
  FaCreditCard,
  FaVials,
  FaWaveSquare,
  FaSpa,
  FaMoon,
  FaUserTie,
  FaCrown,
  FaHome,
  FaProcedures,
  FaClinicMedical,
  FaHandHoldingMedical,
  FaTooth,
  FaBookMedical,
  FaRadiation,
  FaNotesMedical,
} from "react-icons/fa";

// BG Photos for hero background
import BG_DSC03391 from "../../assets/BG_Photos/DSC03391.JPG";
import BG_DSC03392 from "../../assets/BG_Photos/DSC03392.JPG";
import BG_IMG20250923WA0015 from "../../assets/BG_Photos/IMG-20250923-WA0015.jpg";
import BG_IMG20250923WA0029 from "../../assets/BG_Photos/IMG-20250923-WA0029.jpg";

// Infrastructure Photos imports (selecting 20 for good distribution)
import infra1 from "../../assets/Infrastructure_Photos/DSC03356.JPG";
import infra2 from "../../assets/Infrastructure_Photos/DSC03360.JPG";
import infra3 from "../../assets/Infrastructure_Photos/DSC03365.JPG";
import infra4 from "../../assets/Infrastructure_Photos/DSC03386.JPG";
import infra5 from "../../assets/Infrastructure_Photos/DSC03388.JPG";
import infra6 from "../../assets/Infrastructure_Photos/DSC03412.JPG";
import infra7 from "../../assets/Infrastructure_Photos/DSC03426.JPG";
import infra8 from "../../assets/Infrastructure_Photos/DSC03427.JPG";
import infra9 from "../../assets/Infrastructure_Photos/DSC03428.JPG";
import infra10 from "../../assets/Infrastructure_Photos/DSC03434.JPG";
import infra11 from "../../assets/Infrastructure_Photos/DSC03435.JPG";
import infra12 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0016.jpg";
import infra13 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0018.jpg";
import infra14 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0019.jpg";
import infra15 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0020.jpg";
import infra16 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0023.jpg";
import infra17 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0026.jpg";
import infra18 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0027.jpg";
import infra19 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0028.jpg";
import infra20 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0030.jpg";
import infra21 from "../../assets/Infrastructure_Photos/IMG-20250923-WA0032.jpg";

// BG Photos array for hero backgrounds
const bgPhotos = [
  BG_DSC03391,
  BG_DSC03392,
  BG_IMG20250923WA0015,
  BG_IMG20250923WA0029,
];

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

  // Infrastructure photos array
  const infrastructureImages = [
    { src: infra1, alt: "Hospital Infrastructure" },
    { src: infra2, alt: "Medical Facility" },
    { src: infra3, alt: "Hospital Equipment" },
    { src: infra4, alt: "Healthcare Infrastructure" },
    { src: infra5, alt: "Medical Technology" },
    { src: infra6, alt: "Hospital Interior" },
    { src: infra7, alt: "Medical Facility" },
    { src: infra8, alt: "Healthcare Equipment" },
    { src: infra9, alt: "Hospital Infrastructure" },
    { src: infra10, alt: "Medical Center" },
    { src: infra11, alt: "Healthcare Facility" },
    { src: infra12, alt: "Hospital Interior" },
    { src: infra13, alt: "Medical Infrastructure" },
    { src: infra14, alt: "Healthcare Technology" },
    { src: infra15, alt: "Hospital Equipment" },
    { src: infra16, alt: "Medical Facility" },
    { src: infra17, alt: "Healthcare Infrastructure" },
    { src: infra18, alt: "Hospital Interior" },
    { src: infra19, alt: "Medical Technology" },
    { src: infra20, alt: "Healthcare Facility" },
    { src: infra21, alt: "Hospital Infrastructure" },
  ];

  // Updated medical services with more appropriate icons
  const medicalServices = [
    {
      name: "24x7 Ambulance",
      icon: FaAmbulance,
      color: "from-red-500 to-red-600",
    },
    {
      name: "24x7 Emergency & Critical Care Unit",
      icon: FaHeartbeat,
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "24x7 CT Scan",
      icon: FaBrain,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Advanced AI and 3D Cathlab",
      icon: FaCog,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Labour Room with VIP Labour Suite",
      icon: FaBaby,
      color: "from-yellow-500 to-orange-500",
    },
    { name: "Dialysis", icon: FaTint, color: "from-cyan-500 to-cyan-600" },
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
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  const cardHoverVariants = {
    rest: {
      scale: 1,
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    hover: {
      scale: 1.03,
      y: -4,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const iconHoverVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
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
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
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
          {/* Medical Infrastructure Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"
          >
            <FaHospital className="text-base md:text-xl mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
              Medical Infrastructure
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Infrastructure
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
          {/* Desktop Layout: Images on sides, Content in center */}
          <div className="hidden lg:block">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="grid grid-cols-12 gap-8"
            >
              {/* Left Images Column */}
              <div className="col-span-3 space-y-3">
                {infrastructureImages.slice(0, 7).map((image, index) => (
                  <motion.div
                    key={`left-${index}`}
                    variants={imageVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                    onClick={() => openModal(image)}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-28 object-cover"
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 },
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Zoom indicator */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      variants={{
                        rest: { opacity: 0, scale: 0.8 },
                        hover: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg
                          className="w-5 h-5 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Center Content Column */}
              <div className="col-span-6">
                {/* Medical Services Section */}
                <motion.div variants={itemVariants} className="mb-12">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-3 mb-6 border border-emerald-200">
                      <FaStethoscope className="text-emerald-600 text-lg" />
                      <span className="text-emerald-700 font-bold text-sm tracking-wide">
                        MEDICAL SERVICES
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Healthcare Services
                      </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      Comprehensive medical care with modern equipment and
                      experienced professionals.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {medicalServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <motion.div
                          key={service.name}
                          variants={cardHoverVariants}
                          initial="rest"
                          whileHover="hover"
                          animate="rest"
                          className="bg-white rounded-2xl shadow-md border border-gray-100 group cursor-pointer p-5 flex flex-col items-center justify-center text-center min-h-[120px]"
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
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 mb-6 border border-blue-200">
                      <FaBed className="text-blue-600 text-lg" />
                      <span className="text-blue-700 font-bold text-sm tracking-wide">
                        ROOM CATEGORIES
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Accommodation Facilities
                      </span>
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      Comfortable accommodation for optimal patient care and
                      comfort.
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
                          className="bg-white rounded-xl shadow-md border border-gray-100 group cursor-pointer p-4 flex flex-col items-center justify-center text-center min-h-[100px]"
                        >
                          <motion.div
                            className={`w-10 h-10 bg-gradient-to-br ${room.color} rounded-lg flex items-center justify-center text-white shadow-sm mb-2`}
                            variants={iconHoverVariants}
                          >
                            <IconComponent className="text-sm" />
                          </motion.div>
                          <h3 className="text-xs font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight">
                            {room.name}
                          </h3>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Right Images Column */}
              <div className="col-span-3 space-y-3">
                {infrastructureImages.slice(7, 14).map((image, index) => (
                  <motion.div
                    key={`right-${index}`}
                    variants={imageVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                    onClick={() => openModal(image)}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-28 object-cover"
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.1 },
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Zoom indicator */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      variants={{
                        rest: { opacity: 0, scale: 0.8 },
                        hover: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg
                          className="w-5 h-5 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-12">
            {/* Medical Services Section */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-4 py-2 mb-4 border border-emerald-200">
                  <FaStethoscope className="text-emerald-600" />
                  <span className="text-emerald-700 font-bold text-sm">
                    MEDICAL SERVICES
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Healthcare Services
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Comprehensive medical care with modern equipment.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {medicalServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <motion.div
                      key={service.name}
                      variants={cardHoverVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="bg-white rounded-2xl shadow-md border border-gray-100 group cursor-pointer p-5 flex flex-col items-center justify-center text-center min-h-[140px]"
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-3 shadow-sm`}
                        variants={iconHoverVariants}
                      >
                        <IconComponent className="text-white text-lg" />
                      </motion.div>
                      <h3 className="text-base font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                        {service.name}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Room Categories Section with Left and Right Images */}
            <motion.div variants={containerVariants} className="mt-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-4 py-2 mb-4 border border-blue-200">
                  <FaBed className="text-blue-600" />
                  <span className="text-blue-700 font-bold text-sm">
                    ROOM CATEGORIES
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Accommodation Facilities
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed">
                  Comfortable accommodation for optimal patient care.
                </p>
              </div>

              {/* Rooms Layout with Side Images */}
              <div className="grid grid-cols-12 gap-4">
                {/* Left Images Column */}
                <div className="col-span-3 space-y-3">
                  {/* Use images 14-16 for rooms left side */}
                  {infrastructureImages.slice(14, 17).map((image, index) => (
                    <motion.div
                      key={`rooms-left-${index}`}
                      variants={imageVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                      onClick={() => openModal(image)}
                    >
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-28 object-cover"
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.1 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Zoom indicator */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                          rest: { opacity: 0, scale: 0.8 },
                          hover: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                          <svg
                            className="w-4 h-4 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Center Rooms Content */}
                <div className="col-span-6">
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
                          <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                            {room.name}
                          </h3>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Images Column */}
                <div className="col-span-3 space-y-3">
                  {/* Use images 17-20 for rooms right side */}
                  {infrastructureImages.slice(17, 21).map((image, index) => (
                    <motion.div
                      key={`rooms-right-${index}`}
                      variants={imageVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                      onClick={() => openModal(image)}
                    >
                      <motion.img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-28 object-cover"
                        variants={{
                          rest: { scale: 1 },
                          hover: { scale: 1.1 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      {/* Zoom indicator */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                          rest: { opacity: 0, scale: 0.8 },
                          hover: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                          <svg
                            className="w-4 h-4 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Infrastructure Images Gallery for Mobile */}
            <motion.div variants={containerVariants}>
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

              <div className="space-y-4">
                {infrastructureImages.map((image, index) => (
                  <motion.div
                    key={`mobile-${index}`}
                    variants={imageVariants}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                    onClick={() => openModal(image)}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-48 object-cover"
                      variants={{
                        rest: { scale: 1 },
                        hover: { scale: 1.08 },
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                      variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Zoom indicator */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      variants={{
                        rest: { opacity: 0, scale: 0.8 },
                        hover: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg
                          className="w-6 h-6 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent"
          onClick={closeModal}
          style={{ backdropFilter: "blur(10px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Close image"
              className="fixed top-4 right-4 z-[60] text-gray-900 bg-white/90 rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform shadow-xl ring-1 ring-white/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Services;
