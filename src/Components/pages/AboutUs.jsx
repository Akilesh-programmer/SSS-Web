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
  FaCoins,
  FaBed,
  FaQuoteLeft,
  FaAmbulance,
} from "react-icons/fa";

// Counter component for stats (accepts className so we can reuse with different color schemes)
const AnimatedCounter = ({ end, suffix = "", className = "" }) => {
  const { count, ref } = useCountAnimation(end, 2000);
  return (
    <div
      ref={ref}
      className={`text-4xl lg:text-5xl font-bold mb-2 ${className}`}
    >
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

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const stats = [
    { number: 150, label: "Hospital Beds", icon: FaBed, suffix: "+" },
    { number: 25, label: "Medical Specialties", icon: FaUserMd, suffix: "+" },
    { number: 4, label: "Operating Theatres", icon: FaMicroscope },
    { number: 30, label: "ICU Beds", icon: FaHeartbeat, suffix: "+" },
  ];

  const visionPoints = [
    "Trusted treatment at an affordable cost",
    "Compassionate care",
    "Quality health Care",
    "All Specialities under one roof",
    "Multi-specialty hospital with high-tech facility near your door step",
  ];

  const leadership = [
    {
      name: "DR S.SANJITH, MD (DERM)",
      position: "MANAGING DIRECTOR",
      image:
        "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/2.png",
      description:
        "Leading with expertise in dermatology and comprehensive healthcare management.",
    },
    {
      name: "DR P.SELVAKUMAR, MD., PDCC",
      position: "CEO & MEDICAL DIRECTOR",
      image:
        "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/3.jpeg",
      description:
        "Driving medical excellence and strategic healthcare initiatives.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Hero Section with Chairman */}
      <section className="py-12 lg:py-16 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-100 rounded-full opacity-30 animate-bounce" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-10 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                🏥 ABOUT SSS HOSPITAL
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-6">
              Excellence in Healthcare
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              SSS Super Speciality Hospital is a modern multi-speciality
              hospital situated on the Erode–Coimbatore highway in Erode.
              Established in May 2025, we have grown into a 150-bedded facility
              with state-of-the-art technology.
            </p>
          </motion.div>

          {/* Chairman Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
              <motion.div
                variants={slideInFromLeft}
                className="p-6 sm:p-8 lg:p-12 order-2 lg:order-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FaQuoteLeft className="text-3xl text-teal-600" />
                  <span className="text-teal-600 font-semibold text-lg">
                    Our Chairman
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  S.SARAVANA BHAVAN
                </h2>
                <p className="text-teal-600 font-semibold text-base sm:text-lg mb-6">
                  CHAIRMAN
                </p>

                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed italic">
                  "At SSS Super Speciality Hospital, We believe in combining
                  medical excellence with a personal touch in providing hope,
                  care and cure. We offer medical treatment with a motherly
                  touch - because healing begins with bonding. It is our
                  commitment to bring the best of technology under one roof for
                  the people of Erode and beyond."
                </blockquote>
              </motion.div>
              <motion.div
                variants={slideInFromRight}
                className="relative p-6 sm:p-8 lg:p-12 flex justify-center items-center order-1 lg:order-2"
              >
                <div className="relative w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-300 to-emerald-100 rounded-2xl transform rotate-3" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50 rounded-2xl border-2 border-white shadow-md overflow-hidden">
                    <img
                      src="https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/1.png"
                      alt="S.Saravana Bhavan - Chairman"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* About Hospital Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About SSS Super Speciality Hospital
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
              <p>
                SSS Super Speciality Hospital is a modern multi-speciality
                hospital situated on the Erode–Coimbatore highway in Erode. Its
                prime location makes it easily accessible not only from Erode,
                but also from Perundurai, Sankagiri, Tiruchengode, Bhavani, and
                Karur.
              </p>
              <p>
                Established in May 2025, SSS began as a multi-speciality
                hospital with 25 broad and super-speciality consultants. Today,
                it has grown into a 150-bedded facility, equipped with
                state-of-the-art technology and supported by highly experienced
                specialists and paramedical staff — making us the preferred
                choice for comprehensive healthcare.
              </p>
            </div>
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

              {/* Decorative separator for larger screens */}
              <div className="hidden md:flex absolute inset-y-0 left-1/2 transform -translate-x-1/2 items-center pointer-events-none">
                <div className="h-3/4 border-l-2 border-emerald-400 border-dotted opacity-90" />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/95 border-2 border-emerald-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* Leadership Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaUserMd className="text-3xl text-teal-600" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Meet Our Pillars
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team drives excellence in healthcare
              delivery
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500"
              >
                <div className="p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-emerald-100 shadow-lg">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* graduation badge removed per request */}
                    </div>

                    <div className="text-center sm:text-left flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-teal-600 font-semibold mb-3">
                        {leader.position}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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

            <h2 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-6">
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
                <div className="text-3xl lg:text-4xl font-bold text-slate-700 mb-2">
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

            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-700 bg-clip-text text-transparent mb-6">
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
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-900 transition-colors duration-300">
                          {care.title}
                        </h3>
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                          <span className="text-emerald-700 font-bold text-sm">
                            {index + 1}
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

      {/* Why Choose Us */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose SSS Hospital?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence makes us the preferred healthcare
              destination
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FaUserMd,
                title: "Expert Doctors",
                description:
                  "Highly qualified and experienced medical professionals dedicated to your health",
              },
              {
                icon: FaMicroscope,
                title: "Advanced Technology",
                description:
                  "State-of-the-art medical equipment and cutting-edge diagnostic facilities",
              },
              {
                icon: FaHospital,
                title: "Modern Infrastructure",
                description:
                  "Contemporary hospital infrastructure designed for patient comfort and care",
              },
              {
                icon: FaStethoscope,
                title: "Quality Care",
                description:
                  "Personalized healthcare services delivered with empathy and understanding",
              },
              {
                icon: FaClock,
                title: "24/7 Emergency",
                description:
                  "Round-the-clock emergency care with quick response times and trained staff",
              },
              {
                icon: FaCoins,
                title: "Affordable Prices",
                description:
                  "High-quality care at transparent, competitive pricing for everyone",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100"
              >
                <feature.icon className="text-3xl text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
