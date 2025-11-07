import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useCountAnimation } from "../../hooks/useOptimizedAnimations";
import {
  FaHospital,
  FaUserMd,
  FaClock,
  FaMicroscope,
  FaHeartbeat,
  FaStethoscope,
  FaBed,
  FaAmbulance,
  FaUsers,
  FaAward,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaDollarSign,
} from "react-icons/fa";
import ChairmanCard from "../ui/ChairmanCard";
import FounderCard from "../ui/FounderCard";
import CeoCard from "../ui/CeoCard";
import HeroSection from "../ui/HeroSection";

// BG Photos for hero background - using public assets for better performance
const BG1 = "/assets/heroes/main-1.avif";
const BG2 = "/assets/heroes/main-2.avif";
const BG3 = "/assets/infrastructure/infrastructure-wa0016.avif";
const BG4 = "/assets/heroes/main-3.avif";
// Doctor images used in leadership array
const doc2 = "/assets/doctors/doctor-2.avif";
const doc3 = "/assets/doctors/doctor-3.avif";

// BG Photos array for hero backgrounds
const bgPhotos = [BG1, BG2, BG3, BG4];

// Function to get hero background image (using second image for AboutUs)
const getHeroBgImage = () => {
  return bgPhotos[1]; // Use second image for AboutUs
};

// Counter component for stats (accepts className so we can reuse with different color schemes)
const AnimatedCounter = ({ end, suffix = "", className = "" }) => {
  const { count, ref } = useCountAnimation(end, 2000);
  return (
    <div ref={ref} className={`text-display-lg mb-2 ${className}`}>
      {count}
      {suffix}
    </div>
  );
};

AnimatedCounter.propTypes = {
  end: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  className: PropTypes.string,
};

// Tiny inline counter used inside small chips (e.g., numbered badges)
const InlineCounter = ({ end, duration = 900, className = "" }) => {
  const { count, ref } = useCountAnimation(end, duration);
  return (
    <span ref={ref} className={`inline-block tabular-nums ${className}`}>
      {count}
    </span>
  );
};

InlineCounter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  className: PropTypes.string,
};

const AboutUs = () => {
  // Animation variants
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

  // Note: slide-in variants removed as they are not used in this page

  const stats = [
    { number: 150, label: "Hospital Beds", icon: FaBed, suffix: "+" },
    { number: 25, label: "Medical Specialties", icon: FaUserMd, suffix: "+" },
    { number: 4, label: "Operating Theatres", icon: FaMicroscope },
    { number: 30, label: "ICU Beds", icon: FaHeartbeat, suffix: "+" },
  ];

  // Removed unused local arrays to keep file lean

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={getHeroBgImage()}
        badge={
          <>
            <FaHospital className="text-lg md:text-xl mr-2 md:mr-3 text-emerald-300" />
            <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-white">
              Excellence in Healthcare Since 1990
            </span>
          </>
        }
        title="About SSS Super Speciality Hospital"
        subtitle="Leading Multi-Specialty Healthcare with Compassionate Care & Advanced Medical Technology"
      />

      {/* About Content Section with enhanced design */}
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 mb-8"
            >
              {/* Tag removed as requested */}
            </motion.div>

            <h2 className="text-display-xl bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-8">
              Our Healthcare Excellence
            </h2>

            <div className="max-w-5xl mx-auto space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium"
                style={{ textAlign: "justify" }}
              >
                SSS Super Speciality Hospital is a premier multi-speciality
                healthcare institution in Erode, renowned for delivering
                best-in-class medical excellence. With an unwavering focus on
                patient care, safety, and satisfaction, we combine advanced
                technology, world-class expertise, and compassionate service to
                redefine healthcare standards. As an integrated centre of
                medical excellence, SSS Super Speciality Hospital is committed
                to innovation, precision, and trust — ensuring exceptional
                outcomes for every patient.
              </motion.p>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-emerald-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <h3 className="text-heading-md text-gray-800">
                      Our Journey
                    </h3>
                  </div>
                  <p
                    className="text-body-md text-gray-600"
                    style={{ textAlign: "justify" }}
                  >
                    Established in May 2025, Hospital began its journey as a
                    multi-speciality centre with 25 broad and super-speciality
                    consultants. Today, we have evolved into a comprehensive
                    150-bedded healthcare institution, setting new benchmarks in
                    medical excellence and patient care.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-lg border border-emerald-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                    <h3 className="text-heading-md text-gray-800">
                      Our Core Strengths
                    </h3>
                  </div>
                  <p
                    className="text-body-md text-gray-600"
                    style={{ textAlign: "justify" }}
                  >
                    We bring together a highly skilled and dedicated team of
                    medical experts, state-of-the-art infrastructure and
                    advanced medical technology, and compassionate patient care
                    delivered with a human touch. Our comprehensive, integrated
                    facilities support a patient-centric philosophy focused on
                    trust and long-term wellness.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Messages (Chairman + Founder) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center mb-6"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaUsers className="text-3xl text-teal-600" />
              <h2 className="text-heading-xl text-gray-900">Our Leaders</h2>
            </div>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
              Discover the vision and commitment that drive SSS Super Speciality
              Hospital through the words of our Chairman and Founder.
            </p>
          </motion.div>

          {/* Chairman and Founder cards (extracted components) */}
          <ChairmanCard />

          <FounderCard />

          {/* Render remaining leadership (e.g., CEO) below messages */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <CeoCard />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 lg:mb-16"
          >
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-stretch">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col h-full bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 lg:p-8 shadow-md border border-emerald-100/60 hover:shadow-lg transform-gpu transition-shadow"
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100/50 shadow-sm mb-4">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                      <span className="text-label-sm text-emerald-700 tracking-wide">
                        MISSION
                      </span>
                    </div>

                    <h4 className="text-heading-lg text-emerald-900 mb-4">
                      Our Mission
                    </h4>
                    <p
                      className="text-body-lg text-gray-700"
                      style={{ textAlign: "justify" }}
                    >
                      To deliver comprehensive, compassionate, and accessible
                      healthcare services that uphold the highest standards of
                      medical excellence, while nurturing a healing environment
                      that honors the dignity, trust, and well-being of every
                      individual.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full opacity-90" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.6, delay: 0.06 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col h-full bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-6 lg:p-8 shadow-md border border-emerald-100/60 hover:shadow-lg transform-gpu transition-shadow"
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100/50 shadow-sm mb-4">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2" />
                      <span className="text-label-sm text-emerald-700 tracking-wide">
                        VISION
                      </span>
                    </div>

                    <h4 className="text-heading-lg text-emerald-900 mb-4">
                      Our Vision
                    </h4>
                    <p
                      className="text-body-lg text-gray-700"
                      style={{ textAlign: "justify" }}
                    >
                      To lead healthcare innovation by setting new benchmarks
                      for excellence and patient satisfaction, both within our
                      community and beyond.
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full opacity-90 ml-auto" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative separator for larger screens */}
              <div className="hidden md:flex absolute inset-y-0 left-1/2 transform -translate-x-1/2 items-center pointer-events-none">
                <div className="h-3/4 border-l-2 border-emerald-400 border-dotted opacity-90" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/95 border-2 border-emerald-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Care Units & Facilities */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-slate-100 via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-slate-100/40 rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-slate-200/30"
            >
              <span className="text-slate-600 font-semibold text-sm">
                🏥 SPECIALIZED CARE UNITS
              </span>
            </motion.div>

            <h2 className="text-heading-xl text-slate-700 mb-6">
              Advanced Care Facilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              State-of-the-art specialized units designed for comprehensive
              patient care
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
          >
            {[
              { number: 9, label: "Bedded Emergency Unit", icon: FaAmbulance },
              { number: 7, label: "Bedded NICU", icon: FaHeartbeat },
              { number: 9, label: "Bedded Surgical Unit", icon: FaMicroscope },
              { number: 18, label: "Bedded Medical ICU", icon: FaHospital },
            ].map((unit, index) => (
              <motion.div
                key={unit.label}
                variants={fadeInUp}
                className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/40 hover:bg-white/80 hover:shadow-md transition-all duration-300"
              >
                <unit.icon className="text-4xl lg:text-5xl text-slate-500 mb-4 mx-auto" />
                <div className="text-heading-xl text-slate-700 mb-2">
                  <AnimatedCounter
                    end={unit.number}
                    className="text-slate-700"
                  />
                </div>
                <p className="text-slate-600 text-sm lg:text-base font-medium">
                  {unit.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Care Excellence */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-2 mb-6"
            >
              <span className="text-emerald-700 font-semibold text-sm">
                ⭐ OUR CARE
              </span>
            </motion.div>

            <h2 className="text-heading-xl bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-6">
              Excellence in Critical Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class infrastructure and comprehensive care protocols for
              the best patient outcomes
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {[
              {
                title: "World-Class Infrastructure",
                description:
                  "Our critical care unit is equipped with world-class infrastructure to provide the best possible care",
                icon: FaHospital,
              },
              {
                title: "Expert Medical Team",
                description:
                  "Has facilities to manage high-risk and complex medical and surgical patients with 4 full-time Consultants",
                icon: FaUserMd,
              },
              {
                title: "Advanced Equipment",
                description:
                  "Our unit is well equipped to provide non invasive and invasive ventilation, IABP, Pace maker Invasive hemodynamic monitoring, and Dialysis",
                icon: FaMicroscope,
              },
              {
                title: "Optimal Staffing",
                description:
                  "Staffing ratio 1:1 for ventilator patients and 2:1 for non-ventilator patients",
                icon: FaStethoscope,
              },
              {
                title: "24/7 Medical Coverage",
                description:
                  "Round-the-clock consultant Intensivist / Anesthesiologist / Medical Officer",
                icon: FaClock,
              },
            ].map((care, index) => (
              <motion.div
                key={care.title}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <care.icon className="text-white text-xl" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="text-heading-md text-gray-900 group-hover:text-emerald-900 transition-colors duration-300">
                          {care.title}
                        </h3>
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                          <span className="text-emerald-700 font-bold text-sm">
                            <InlineCounter end={index + 1} />
                          </span>
                        </div>
                      </div>

                      <p
                        className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                        style={{ textAlign: "justify" }}
                      >
                        {care.description}
                      </p>

                      {/* Bottom accent */}
                      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>                                        
      </section>

      {/* Why Choose Us - Modern Medical Excellence */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-200 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full px-6 py-3 mb-6 shadow-lg"
            >
              <FaAward className="text-white text-xl" />
              <span className="text-white font-semibold text-sm tracking-wide">
                EXCELLENCE IN HEALTHCARE
              </span>
            </motion.div>

            <h2 className="text-display-xl bg-gradient-to-r from-gray-800 via-emerald-700 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
              Why Choose{" "}
              <span className="block">SSS Super Speciality Hospital?</span>
            </h2>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-12 h-1 bg-emerald-400 rounded-full" />
              <FaHeartbeat className="text-emerald-500 text-2xl animate-pulse" />
              <div className="w-12 h-1 bg-emerald-400 rounded-full" />
            </div>

            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
              style={{ textAlign: "justify" }}
            >
              Discover the reasons why thousands of patients trust us with their
              health and well-being. Our commitment to excellence, advanced
              technology, and compassionate care sets us apart.
            </p>
          </motion.div>

          {/* Features Grid - 7 Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            {/* Card 1: Excellence in Care */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaAward className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                Excellence in Care
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Expert professionals with advanced technology delivering
                world-class medical care with precision and expertise.
              </p>
            </motion.div>

            {/* Card 2: Comprehensive Services */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaHospital className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                Comprehensive Services
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Complete healthcare solutions under one roof, from diagnostics
                to specialized treatments and surgeries.
              </p>
            </motion.div>

            {/* Card 3: 24/7 Emergency */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaAmbulance className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                24/7 Emergency
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Rapid, reliable emergency response available round the clock
                with our dedicated trauma care team.
              </p>
            </motion.div>

            {/* Card 4: Patient First */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaHandHoldingHeart className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-pink-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">
                Patient First
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Compassionate and personalized attention ensuring every patient
                receives individualized care and support.
              </p>
            </motion.div>

            {/* Card 5: Advanced Diagnostics */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaMicroscope className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                Advanced Diagnostics
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Precision through modern facilities with state-of-the-art
                diagnostic equipment and imaging technology.
              </p>
            </motion.div>

            {/* Card 6: Affordable & Transparent */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaShieldAlt className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                Affordable & Transparent
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Quality care at fair pricing with transparent billing, making
                healthcare accessible to everyone.
              </p>
            </motion.div>

            {/* Card 7: Empathetic Team */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 group"
            >
              <div className="relative mb-5">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-110 transform transition-transform">
                  <FaUsers className="text-white text-2xl lg:text-3xl" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-cyan-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-cyan-700 transition-colors">
                Empathetic Team
              </h3>
              <p
                className="text-gray-600 leading-relaxed text-sm lg:text-base"
                style={{ textAlign: "justify" }}
              >
                Skilled experts with a human touch, combining medical excellence
                with genuine care and understanding.
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom CTA/Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 lg:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <FaHeartbeat className="text-white text-5xl mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Your Health, Our Priority
              </h3>
              <p
                className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ textAlign: "justify" }}
              >
                Experience the difference of patient-centered care where
                cutting-edge medical technology meets compassionate service.
                Join thousands of satisfied patients who trust us with their
                health.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
