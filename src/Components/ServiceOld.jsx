import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { departments } from "../data/departmentsData";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaEye,
  FaUserMd,
  FaAmbulance,
  FaXRay,
  FaSyringe,
  FaMicroscope,
  FaStethoscope,
  FaPills,
  FaLungs,
} from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: <FaHeartbeat className="text-4xl text-red-500" />,
      title: "Cardiology",
      description:
        "Comprehensive heart care with advanced cardiac treatments and procedures.",
      features: [
        "ECG & Echo",
        "Cardiac Surgery",
        "Angioplasty",
        "Heart Monitoring",
      ],
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: <FaBrain className="text-4xl text-purple-500" />,
      title: "Neurology",
      description:
        "Expert neurological care for brain and nervous system disorders.",
      features: [
        "Brain Surgery",
        "Stroke Care",
        "Epilepsy Treatment",
        "Neurocritical Care",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <FaBone className="text-4xl text-blue-500" />,
      title: "Orthopedics",
      description:
        "Advanced bone and joint treatments with modern surgical techniques.",
      features: [
        "Joint Replacement",
        "Sports Injuries",
        "Spine Surgery",
        "Fracture Care",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaEye className="text-4xl text-green-500" />,
      title: "Ophthalmology",
      description:
        "Complete eye care services with state-of-the-art vision treatments.",
      features: [
        "Cataract Surgery",
        "LASIK",
        "Retinal Care",
        "Glaucoma Treatment",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaUserMd className="text-4xl text-orange-500" />,
      title: "General Medicine",
      description:
        "Comprehensive primary healthcare services for all age groups.",
      features: [
        "Health Checkups",
        "Chronic Disease",
        "Preventive Care",
        "Family Medicine",
      ],
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <FaAmbulance className="text-4xl text-red-600" />,
      title: "Emergency Care",
      description:
        "24/7 emergency medical services with rapid response capabilities.",
      features: [
        "Trauma Care",
        "Critical Care",
        "Emergency Surgery",
        "Ambulance Service",
      ],
      gradient: "from-red-600 to-red-400",
    },
    {
      icon: <FaXRay className="text-4xl text-gray-600" />,
      title: "Radiology",
      description:
        "Advanced imaging services with latest diagnostic technology.",
      features: ["CT Scan", "MRI", "X-Ray", "Ultrasound"],
      gradient: "from-gray-600 to-gray-400",
    },
    {
      icon: <FaSyringe className="text-4xl text-teal-500" />,
      title: "Surgery",
      description:
        "Expert surgical services across multiple specialties and procedures.",
      features: [
        "Minimally Invasive",
        "Robotic Surgery",
        "Day Care Surgery",
        "Complex Procedures",
      ],
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: <FaMicroscope className="text-4xl text-indigo-500" />,
      title: "Pathology",
      description:
        "Comprehensive laboratory services with accurate diagnostic testing.",
      features: [
        "Blood Tests",
        "Biopsy",
        "Molecular Testing",
        "Clinical Chemistry",
      ],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaStethoscope className="text-4xl text-emerald-500" />,
      title: "Internal Medicine",
      description:
        "Specialized care for adult diseases and complex medical conditions.",
      features: [
        "Diabetes Care",
        "Hypertension",
        "Liver Disease",
        "Kidney Disease",
      ],
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: <FaPills className="text-4xl text-pink-500" />,
      title: "Pharmacy",
      description: "Full-service pharmacy with 24/7 medication availability.",
      features: [
        "Prescription Drugs",
        "Medical Supplies",
        "Home Delivery",
        "Consultation",
      ],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaLungs className="text-4xl text-blue-600" />,
      title: "Pulmonology",
      description: "Specialized respiratory care and lung disease treatments.",
      features: [
        "Asthma Care",
        "Sleep Studies",
        "Lung Function",
        "Respiratory Therapy",
      ],
      gradient: "from-blue-600 to-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Our Medical Specialities
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive healthcare services with world-class medical
            expertise, cutting-edge technology, and compassionate care for all
            your health needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                {/* Gradient Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon Container */}
                <div className="relative mb-4">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} group-hover:scale-125 transition-transform duration-300`}
                        ></div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="relative mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Medical Assistance?
            </h3>
            <p className="text-lg mb-6 text-emerald-50">
              Our expert medical team is available 24/7 to provide you with the
              best healthcare services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <FaUserMd />
                <span>Book Appointment</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <FaAmbulance />
                <span>Emergency: +91 98765 43210</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
