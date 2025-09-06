import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useCountAnimation } from "../../hooks/useOptimizedAnimations";
import {
  FaHospital,
  FaUserMd,
  FaClock,
  FaShieldAlt,
  FaMicroscope,
  FaAmbulance,
  FaHeartbeat,
  FaStethoscope,
  FaCoins,
  FaBed,
} from "react-icons/fa";
import DoctorsSection from "../sections/Doctors/DoctorsSection";

const AboutUs = () => {
  // Motion variants for hero
  const heroTitleVariant = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const heroDescVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.08, ease: "easeOut" },
    },
  };

  const heroAccent = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.5, delay: 0.12, ease: "circOut" },
    },
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay: 0.08 + i * 0.06 },
    }),
    hover: { scale: 1.04, transition: { duration: 0.18 } },
  };
  // Create individual count animations for each stat
  const AnimatedCounter = ({ end, suffix = "" }) => {
    const { count, ref } = useCountAnimation(end, 2000);

    return (
      <div ref={ref} className="text-3xl font-bold text-emerald-900 mb-2">
        {count}
        {suffix}
      </div>
    );
  };
  const stats = [
    {
      number: 150,
      label: "Hospital Beds",
      icon: <FaBed className="text-4xl text-emerald-600" />,
    },
    {
      number: 25,
      label: "Medical Specialties",
      icon: <FaUserMd className="text-4xl text-emerald-600" />,
    },
    {
      number: 4,
      label: "Operating Theatres",
      icon: <FaMicroscope className="text-4xl text-emerald-600" />,
    },
    {
      number: 30,
      label: "ICU Beds",
      icon: (
        <FaHeartbeat className="text-4xl text-emerald-600 heart-pulse-red" />
      ),
    },
  ];

  const location = useLocation();
  const isAboutPage =
    location.pathname === "/about" || location.pathname.startsWith("/about");

  const whyChooseUs = [
    {
      icon: <FaUserMd className="text-3xl text-emerald-600" />,
      title: "Expert Doctors",
      description:
        "Highly qualified and experienced medical professionals dedicated to your health",
    },
    {
      icon: <FaMicroscope className="text-3xl text-emerald-600" />,
      title: "Advanced Technology & Diagnosis",
      description:
        "State-of-the-art medical equipment and cutting-edge diagnostic facilities",
    },
    {
      icon: <FaHospital className="text-3xl text-emerald-600" />,
      title: "Modern Infrastructure & Facilities",
      description:
        "Contemporary hospital infrastructure designed for patient comfort and care",
    },
    {
      icon: <FaStethoscope className="text-3xl text-emerald-600" />,
      title: "Quality Care with Compassion",
      description:
        "Personalized healthcare services delivered with empathy and understanding",
    },
    {
      icon: <FaClock className="text-3xl text-emerald-600" />,
      title: "24/7 Emergency Services",
      description:
        "Round-the-clock emergency care with quick response times and trained staff",
    },
    {
      icon: <FaCoins className="text-3xl text-emerald-600" />,
      title: "Affordable Prices",
      description:
        "High-quality care at transparent, competitive pricing to make healthcare accessible to everyone",
    },
  ];

  const services = [
    {
      icon: <FaClock className="text-2xl text-white" />,
      title: "Round the Clock Availability",
      description: "24/7 medical services for all your healthcare needs",
    },
    {
      icon: <FaAmbulance className="text-2xl text-white" />,
      title: "Trained Paramedics on Board",
      description:
        "Skilled emergency medical technicians ready for any situation",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "GPS-Enabled Quick Response",
      description: "Fast, location-based emergency response services",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 lg:py-16 bg-white scroll-mt-32 lg:scroll-mt-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero: Number 1 Multispeciality Hospital in Erode */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="mb-8"
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-700 to-teal-500 text-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <motion.p
                  variants={heroTitleVariant}
                  className="uppercase tracking-wider text-sm sm:text-base font-semibold opacity-90"
                >
                  No. 1 Multispeciality Hospital in Erode
                </motion.p>
                <motion.h1
                  variants={heroTitleVariant}
                  className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight max-w-full break-words"
                >
                  SSS Super Speciality Hospital — Premier Multispeciality Care
                </motion.h1>
                <motion.p
                  variants={heroDescVariant}
                  className="mt-2 text-sm sm:text-base opacity-90 max-w-xl break-words"
                >
                  Comprehensive care across specialties, world-class clinicians,
                  and patient-first service — providing trusted healthcare to
                  Erode and the surrounding region.
                </motion.p>

                <motion.div
                  className="mt-3 h-1 w-36 origin-left bg-white/40 rounded-full"
                  variants={heroAccent}
                  initial="hidden"
                  animate="visible"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                {/* Compact trust badges / quick facts */}
                <motion.div
                  variants={badgeVariant}
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-sm sm:text-sm md:px-5 md:py-4 min-h-[64px] w-full sm:w-auto"
                >
                  <div className="flex-shrink-0 w-10 sm:w-12 md:w-14 flex items-center justify-center">
                    <FaBed className="text-white text-2xl sm:text-3xl md:text-4xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-xl md:text-2xl font-extrabold">
                      150+
                    </div>
                    <div className="text-xs sm:text-sm opacity-90 whitespace-nowrap">
                      Beds
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={badgeVariant}
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-sm sm:text-sm md:px-5 md:py-4 min-h-[64px] w-full sm:w-auto"
                >
                  <div className="flex-shrink-0 w-10 sm:w-12 md:w-14 flex items-center justify-center">
                    <FaUserMd className="text-white text-2xl sm:text-3xl md:text-4xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-xl md:text-2xl font-extrabold">
                      25+
                    </div>
                    <div className="text-xs sm:text-sm opacity-90 whitespace-nowrap">
                      Specialties
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={badgeVariant}
                  custom={2}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl text-sm sm:text-sm md:px-5 md:py-4 min-h-[64px] w-full sm:w-auto"
                >
                  <div className="flex-shrink-0 w-10 sm:w-12 md:w-14 flex items-center justify-center">
                    <FaHeartbeat className="text-white text-2xl sm:text-3xl md:text-4xl" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-xl md:text-2xl font-extrabold">
                      30+
                    </div>
                    <div className="text-xs sm:text-sm opacity-90 whitespace-nowrap">
                      ICU Beds
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        {/* Main About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-900 mb-4 lg:mb-6 px-4">
            About SSS Super Speciality Hospital
          </h2>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
              <strong className="text-emerald-700">
                Bringing world-class healthcare to the heart of Erode
              </strong>{" "}
              - SSS Super Speciality Hospital stands as the premier medical
              institution in the region, committed to delivering exceptional
              healthcare services with cutting-edge technology and compassionate
              care.
            </p>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              As the{" "}
              <strong className="text-emerald-700">
                Best Super Speciality Hospital In Erode
              </strong>
              , we combine medical excellence with modern infrastructure to
              provide{" "}
              <strong className="text-emerald-700">
                "The Care You Deserve; Now Closer Than Ever"
              </strong>
              .
            </p>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-emerald-50 rounded-xl p-4 lg:p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl lg:text-4xl text-emerald-600 mb-3 lg:mb-4 flex justify-center">
                {stat.icon}
              </div>
              <AnimatedCounter
                end={stat.number}
                duration={2.5}
                suffix={stat.label === "Hospital Beds" ? "+" : ""}
              />
              <p className="text-gray-600 font-medium text-sm lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Our Mission & Vision (placed above Our Services) - only show on About page */}

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
                    <span className="text-xs font-semibold text-emerald-700 tracking-wide">
                      MISSION
                    </span>
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-4">
                    Our Mission
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    To provide comprehensive, compassionate, and accessible
                    healthcare services that meet the highest standards of
                    medical excellence, while fostering a healing environment
                    that respects the dignity and worth of every individual.
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
                    <span className="text-xs font-semibold text-emerald-700 tracking-wide">
                      VISION
                    </span>
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-bold text-emerald-900 mb-4">
                    Our Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                    To lead healthcare innovation, setting new standards for
                    excellence and patient satisfaction in our community and
                    beyond.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="h-1 w-24 bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full opacity-90 ml-auto" />
                </div>
              </motion.div>
            </div>

            {/* Decorative separator for larger screens (thicker + accent) */}
            <div className="hidden md:flex absolute inset-y-0 left-1/2 transform -translate-x-1/2 items-center pointer-events-none">
              <div className="h-3/4 border-l-2 border-emerald-400 border-dotted opacity-90" />
              {/* center accent dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/95 border-2 border-emerald-300" />
            </div>
          </div>
        </motion.div>

        {/* Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 lg:mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-emerald-900 mb-6 lg:mb-8 px-4">
            Our Key Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-xl p-4 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200/50 group"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {React.cloneElement(service.icon, {
                    className: "text-lg lg:text-2xl text-white",
                  })}
                </div>
                <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-gray-800 group-hover:text-emerald-700 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center text-emerald-900 mb-8">
            Why Choose SSS Super Speciality Hospital?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
