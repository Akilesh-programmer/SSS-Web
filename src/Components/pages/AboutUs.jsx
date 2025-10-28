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
                  <p className="text-body-md text-gray-600">
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
                  <p className="text-body-md text-gray-600">
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
                    <p className="text-body-lg text-gray-700">
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
                    <p className="text-body-lg text-gray-700">
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

                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background image (kept the same), with hero-like black overlay instead of green shade */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          initial={{ scale: 1.06, y: -10, opacity: 0.9 }}
          whileInView={{ scale: 1, y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${BG3})`,
          }}
        />
        {/* Match hero overlay shade */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <FaHeartbeat className="text-white text-xl" />
              <span className="text-white font-semibold text-sm tracking-wide">
                EXCELLENCE IN HEALTHCARE
              </span>
            </div>

            <h2 className="text-display-xl text-white mb-6 leading-tight">
              Why Choose{" "}
              <span className="block text-emerald-200">
                SSS Super Speciality Hospital?
              </span>
            </h2>

            <div className="w-24 h-1 bg-emerald-300 mx-auto rounded-full mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Content */}
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  At SSS Super Speciality Hospital, we stand as a beacon of
                  medical excellence, combining{" "}
                  <strong className="text-emerald-700">
                    expert healthcare professionals
                  </strong>{" "}
                  with state-of-the-art technology to deliver unparalleled
                  patient care. Our commitment extends beyond treatment to
                  encompass compassionate service, ensuring every patient
                  receives personalized attention in our modern, comfortable
                  environment.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  With{" "}
                  <strong className="text-emerald-700">
                    round-the-clock emergency services
                  </strong>{" "}
                  and cutting-edge diagnostic facilities, we provide
                  comprehensive healthcare solutions under one roof. Our
                  transparent, affordable pricing model ensures that quality
                  medical care remains accessible to all, while our experienced
                  medical team delivers treatments with empathy and
                  understanding.
                </p>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="flex flex-wrap gap-3 mt-6"
                >
                  {[
                    "Expert Medical Team",
                    "Advanced Technology",
                    "24/7 Emergency Care",
                    "Affordable Pricing",
                    "Modern Infrastructure",
                    "Quality Assurance",
                  ].map((tag, index) => (
                    <motion.span
                      key={tag}
                      variants={fadeInUp}
                      className="inline-flex items-center px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full border border-emerald-200"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right Stats/Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: FaUserMd,
                    number: 50,
                    suffix: "+",
                    label: "Expert Doctors",
                  },
                  {
                    icon: FaBed,
                    number: 150,
                    suffix: "+",
                    label: "Hospital Beds",
                  },
                  {
                    icon: FaMicroscope,
                    number: 25,
                    suffix: "+",
                    label: "Specialties",
                  },
                  {
                    icon: FaClock,
                    number: 24,
                    label: "Emergency Care",
                    isDayHour: true,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/40 hover:bg-white/95 transition-all duration-300"
                  >
                    <stat.icon className="text-3xl text-emerald-600 mx-auto mb-3" />
                    <div className="text-heading-lg text-gray-900 mb-1 tabular-nums">
                      {stat.isDayHour ? (
                        <span className="whitespace-nowrap">
                          <AnimatedCounter
                            end={stat.number}
                            className="m-0 inline-block text-2xl"
                          />
                          <span className="ml-0.5 align-baseline">/7</span>
                        </span>
                      ) : (
                        <AnimatedCounter
                          end={stat.number}
                          suffix={stat.suffix || ""}
                          className="m-0 inline-block text-2xl"
                        />
                      )}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40">
                <div className="flex items-center gap-3 mb-4">
                  <FaHeartbeat className="text-2xl text-emerald-600" />
                  <h3 className="text-heading-md text-gray-900">
                    Patient-Centered Care
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Every aspect of our hospital is designed with patients in mind
                  - from our comfortable facilities to our compassionate staff
                  who ensure you receive the highest standard of medical care in
                  a supportive environment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
