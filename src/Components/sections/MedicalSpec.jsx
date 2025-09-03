import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getDepartmentBySlug } from "../../data/departmentsData";
import {
  FaHeartbeat,
  FaUserMd,
  FaStethoscope,
  FaTooth,
  FaHospital,
  FaSyringe,
  FaBrain,
  FaBone,
  FaEye,
  FaChild,
  FaLungs,
  FaUserNurse,
  FaMicroscope,
  FaXRay,
  FaUserInjured,
  FaUserFriends,
  FaUserCheck,
  FaUserShield,
  FaUserTie,
  FaUserGraduate,
  FaUserCog,
  FaUserPlus,
  FaUserMinus,
  FaUserCircle,
  FaUserSecret,
  FaTimes,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const specialties = [
  {
    name: "Accident & Emergency Care",
    icon: <FaUserInjured />,
    description:
      "24/7 emergency medical services with trained trauma specialists",
    doctors: ["Dr. Rajesh Kumar", "Dr. Priya Sharma"],
    timings: "24/7 Available",
    slug: "accident-emergency",
  },
  {
    name: "Anaesthesiology",
    icon: <FaSyringe />,
    description: "Advanced pain management and anesthesia services",
    doctors: ["Dr. Anil Gupta", "Dr. Meera Nair"],
    timings: "Mon-Sat: 9AM-6PM",
    slug: "anaesthesiology",
  },
  {
    name: "Cardiology",
    icon: <FaHeartbeat />,
    description: "Comprehensive heart care with advanced cardiac procedures",
    doctors: ["Dr. Suresh Reddy", "Dr. Kavitha Menon"],
    timings: "Mon-Sat: 10AM-4PM",
    slug: "cardiology",
  },
  {
    name: "Dermatology & Cosmetology",
    icon: <FaUserMd />,
    description: "Complete skin care and cosmetic treatments",
    doctors: ["Dr. S. Sanjith", "Dr. Lakshmi Devi"],
    timings: "Mon-Sat: 10AM-6PM",
    slug: "dermatology",
  },
  {
    name: "Dental & Oral Surgery",
    icon: <FaTooth />,
    description: "Advanced dental care and oral surgical procedures",
    doctors: ["Dr. Venkat Rao", "Dr. Shanti Priya"],
    timings: "Mon-Sat: 9AM-7PM",
    slug: "dental",
  },
  {
    name: "ENT & Head & Neck",
    icon: <FaStethoscope />,
    description:
      "Specialized care for ear, nose, throat and head-neck conditions",
    doctors: ["Dr. Raman Singh", "Dr. Deepa Joshi"],
    timings: "Mon-Sat: 10AM-5PM",
    slug: "ent",
  },
  {
    name: "Internal Medicine",
    icon: <FaHospital />,
    description: "Comprehensive internal medicine and general healthcare",
    doctors: ["Dr. Mohan Lal", "Dr. Sunitha Rao"],
    timings: "Mon-Sat: 9AM-6PM",
    slug: "internal-medicine",
  },
  {
    name: "General Surgery",
    icon: <FaUserNurse />,
    description:
      "Advanced surgical procedures with minimally invasive techniques",
    doctors: ["Dr. Prakash Iyer", "Dr. Usha Reddy"],
    timings: "Mon-Sat: 8AM-4PM",
    slug: "general-surgery",
  },
  {
    name: "Gastroenterology",
    icon: <FaMicroscope />,
    description:
      "Digestive system disorders and advanced endoscopic procedures",
    doctors: ["Dr. Ravi Kumar", "Dr. Indira Devi"],
    timings: "Mon-Sat: 10AM-4PM",
    slug: "gastroenterology",
  },
  {
    name: "Obstetrics & Gynaecology",
    icon: <FaUserFriends />,
    description: "Women's health, pregnancy care and gynecological services",
    doctors: ["Dr. Sangeetha Nair", "Dr. Radha Krishna"],
    timings: "Mon-Sat: 9AM-6PM",
    slug: "obstetrics-gynaecology",
  },
  {
    name: "Nephrology",
    icon: <FaUserCheck />,
    description: "Kidney care and dialysis services",
    doctors: ["Dr. Sunil Agarwal", "Dr. Malini Iyer"],
    timings: "Mon-Sat: 10AM-4PM",
    slug: "nephrology",
  },
  {
    name: "Neurology",
    icon: <FaBrain />,
    description: "Neurological disorders and brain-related conditions",
    doctors: ["Dr. Ashok Verma", "Dr. Rekha Sharma"],
    timings: "Mon-Sat: 10AM-4PM",
    slug: "neurology",
  },
  {
    name: "Neuro Surgery",
    icon: <FaUserCog />,
    description: "Advanced neurosurgical procedures and brain surgery",
    doctors: ["Dr. Kiran Reddy", "Dr. Shalini Gupta"],
    timings: "Mon-Sat: 9AM-3PM",
    slug: "neurosurgery",
  },
  {
    name: "Orthopaedics",
    icon: <FaBone />,
    description: "Bone, joint and musculoskeletal system care",
    doctors: ["Dr. Ramesh Babu", "Dr. Vidya Sagar"],
    timings: "Mon-Sat: 9AM-6PM",
    slug: "orthopedics",
  },
  {
    name: "Ophthalmology",
    icon: <FaEye />,
    description: "Comprehensive eye care and vision correction",
    doctors: ["Dr. Satish Kumar", "Dr. Purnima Rao"],
    timings: "Mon-Sat: 10AM-6PM",
    slug: "ophthalmology",
  },
  {
    name: "Paediatrics",
    icon: <FaChild />,
    description: "Specialized healthcare for infants, children and adolescents",
    doctors: ["Dr. Sudha Menon", "Dr. Prasad Iyer"],
    timings: "Mon-Sat: 9AM-7PM",
    slug: "pediatrics",
  },
  {
    name: "Plastic Surgery",
    icon: <FaUserTie />,
    description: "Reconstructive and cosmetic surgical procedures",
    doctors: ["Dr. Vikram Singh", "Dr. Anjali Sharma"],
    timings: "Mon-Sat: 10AM-4PM",
    slug: "plastic-surgery",
  },
  {
    name: "Pulmonology",
    icon: <FaLungs />,
    description: "Respiratory system and lung-related disorders",
    doctors: ["Dr. Harish Rao", "Dr. Latha Krishnan"],
    timings: "Mon-Sat: 10AM-5PM",
    slug: "pulmonology",
  },
  {
    name: "Psychiatry",
    icon: <FaUserGraduate />,
    description: "Mental health and psychological wellness services",
    doctors: ["Dr. Manoj Kumar", "Dr. Shobha Nair"],
    timings: "Mon-Sat: 11AM-6PM",
    slug: "psychiatry",
  },
  {
    name: "Radiology",
    icon: <FaXRay />,
    description: "Advanced medical imaging and diagnostic services",
    doctors: ["Dr. Chandran Nair", "Dr. Geeta Rao"],
    timings: "Mon-Sat: 8AM-8PM",
    slug: "radiology",
  },
  {
    name: "Urology",
    icon: <FaUserPlus />,
    description: "Urinary system and male reproductive health",
    doctors: ["Dr. Rajan Pillai", "Dr. Suma Devi"],
    timings: "Mon-Sat: 10AM-4PM",
    slug: "urology",
  },
  {
    name: "Physiotherapy",
    icon: <FaUserMinus />,
    description: "Physical rehabilitation and movement therapy",
    doctors: ["Dr. Gopal Krishna", "Dr. Nandita Shah"],
    timings: "Mon-Sat: 8AM-7PM",
    slug: "physiotherapy",
  },
  {
    name: "Master Health Checkup",
    icon: <FaUserCircle />,
    description: "Comprehensive health screening and preventive care",
    doctors: ["Dr. Balaji Rao", "Dr. Divya Menon"],
    timings: "Mon-Sat: 7AM-12PM",
    slug: "health-checkup",
  },
  {
    name: "Vascular Surgery",
    icon: <FaUserShield />,
    description: "Blood vessel and vascular system surgical procedures",
    doctors: ["Dr. Krishnan Iyer", "Dr. Padma Reddy"],
    timings: "Mon-Sat: 9AM-4PM",
    slug: "vascular-surgery",
  },
  {
    name: "Pharmacy",
    icon: <FaUserSecret />,
    description: "24/7 pharmaceutical services and medication dispensing",
    doctors: ["Pharmacist Ravi", "Pharmacist Meera"],
    timings: "24/7 Available",
    slug: "pharmacy",
  },
];

export default function MedicalSpec() {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Force re-render to ensure animations trigger properly
    const timer = setTimeout(() => {
      // This forces a re-render to ensure viewport animations work
      window.dispatchEvent(new Event("resize"));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const openSpecialtyModal = (specialty) => {
    setSelectedSpecialty(specialty);
  };

  const closeModal = () => {
    setSelectedSpecialty(null);
  };

  const navigateToDepartment = (slug) => {
    // Check if detailed page exists for this department
    const departmentExists = getDepartmentBySlug(slug);
    if (departmentExists) {
      navigate(`/department/${slug}`);
    } else {
      // For departments without detailed pages, show modal
      const specialty = specialties.find((s) => s.slug === slug);
      openSpecialtyModal(specialty);
    }
  };

  return (
    <div id="specialties" className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-900 mb-4 tracking-tight">
            Our Medical Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive healthcare services with expert specialists and
            state-of-the-art facilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 grid-optimized">
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className="group bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 overflow-hidden cursor-pointer hover-optimized"
              whileHover={{ y: -4 }}
              onClick={() => navigateToDepartment(specialty.slug)}
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mx-auto mb-4 text-white text-2xl group-hover:from-emerald-600 group-hover:to-teal-700 transition-all duration-300">
                  {specialty.icon}
                </div>
                <h3 className="text-lg font-bold text-emerald-900 mb-3 text-center group-hover:text-emerald-700 transition-colors">
                  {specialty.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                  {specialty.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-center text-emerald-600 text-sm font-medium group-hover:text-emerald-700 transition-colors">
                    <span>Learn More</span>
                    <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for departments without detailed pages */}
      {selectedSpecialty && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl transition-colors"
              >
                <FaTimes />
              </button>

              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white text-3xl mb-4">
                  {selectedSpecialty.icon}
                </div>
                <h3 className="text-3xl font-bold text-emerald-900 mb-2">
                  {selectedSpecialty.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedSpecialty.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <FaUserMd className="text-emerald-600 text-xl mr-3" />
                    <h4 className="text-lg font-semibold text-emerald-900">
                      Our Specialists
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {selectedSpecialty.doctors.map((doctor, index) => (
                      <li
                        key={index}
                        className="text-gray-700 flex items-center"
                      >
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                        {doctor}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <FaClock className="text-emerald-600 text-xl mr-3" />
                    <h4 className="text-lg font-semibold text-emerald-900">
                      Consultation Hours
                    </h4>
                  </div>
                  <p className="text-gray-700 text-lg">
                    {selectedSpecialty.timings}
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                  onClick={closeModal}
                >
                  Book Appointment
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
