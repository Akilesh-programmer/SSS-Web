import React from "react";
import { motion } from "framer-motion";
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
  FaBed,
} from "react-icons/fa";

const AboutUs = () => {
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

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-emerald-900 mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            To provide comprehensive, compassionate, and accessible healthcare
            services that meet the highest standards of medical excellence,
            while fostering a healing environment that respects the dignity and
            worth of every individual.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
