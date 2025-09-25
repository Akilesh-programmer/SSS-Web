import { departments } from "../../data/DoctorDepartmentData";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// BG Photos for hero background
import BG_DSC03391 from "../../assets/BG_Photos/DSC03391.JPG";
import BG_DSC03392 from "../../assets/BG_Photos/DSC03392.JPG";
import BG_IMG20250923WA0015 from "../../assets/BG_Photos/IMG-20250923-WA0015.jpg";
import BG_IMG20250923WA0029 from "../../assets/BG_Photos/IMG-20250923-WA0029.jpg";

// BG Photos array for hero backgrounds
const bgPhotos = [
  BG_DSC03391,
  BG_DSC03392,
  BG_IMG20250923WA0015,
  BG_IMG20250923WA0029,
];

// Function to get hero background image (using fourth image for Specialities)
const getHeroBgImage = () => {
  return bgPhotos[3]; // Use fourth image for Specialities
};

// Utility function to create URL slug from department name
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaEye,
  FaUserMd,
  FaAmbulance,
  FaXRay,
  FaStethoscope,
  FaTooth,
  FaChild,
  FaLungs,
  FaMicroscope,
  FaSyringe,
  FaHospital,
  FaHeart,
  FaFlask,
  FaHands,
  FaFileMedical,
  FaHandHoldingMedical,
  FaClinicMedical,
  FaBookMedical,
  FaNotesMedical,
  FaProcedures,
} from "react-icons/fa";
import { useState } from "react";

const Specialities = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  // Filter out "All Specialists" as it's not a specific department
  const hospitalDepartments = departments.filter(
    (dept) => dept.name !== "All Specialists"
  );

  const handleDepartmentClick = (departmentName) => {
    const slug = createSlug(departmentName);
    navigate(`/department/${slug}`);
  };

  // Icon mapping for each department - Enhanced with professional medical icons
  const departmentIcons = {
    "Accident & Emergency Care": <FaAmbulance className="w-8 h-8" />,
    Anaesthesiology: <FaSyringe className="w-8 h-8" />,
    Cardiology: <FaHeartbeat className="w-8 h-8" />,
    "Dermatology and Cosmetology": <FaHandHoldingMedical className="w-8 h-8" />,
    "Dental & Oral and Maxillofacial Surgery": <FaTooth className="w-8 h-8" />,
    "ENT & Head & Neck": <FaStethoscope className="w-8 h-8" />,
    "General Surgery": <FaProcedures className="w-8 h-8" />,
    Gastroenterology: <FaMicroscope className="w-8 h-8" />,
    "Internal Medicine": <FaUserMd className="w-8 h-8" />,
    "Master Health Check up": <FaFileMedical className="w-8 h-8" />,
    Nephrology: <FaBookMedical className="w-8 h-8" />,
    Neurology: <FaBrain className="w-8 h-8" />,
    "Neuro Surgery": <FaBrain className="w-8 h-8" />,
    "Obstetrics & Gynaecology": <FaChild className="w-8 h-8" />,
    Orthopaedics: <FaBone className="w-8 h-8" />,
    Ophthalmology: <FaEye className="w-8 h-8" />,
    Paediatrics: <FaChild className="w-8 h-8" />,
    Physiotherapy: <FaHands className="w-8 h-8" />,
    "Plastic Surgery": <FaClinicMedical className="w-8 h-8" />,
    Pulmonology: <FaLungs className="w-8 h-8" />,
    Psychiatry: <FaNotesMedical className="w-8 h-8" />,
    Radiology: <FaXRay className="w-8 h-8" />,
    Urology: <FaFlask className="w-8 h-8" />,
    "Vascular Surgery": <FaHeart className="w-8 h-8" />,
  };

  // Get icon for department
  const getDepartmentIcon = (departmentName) => {
    return (
      departmentIcons[departmentName] || <FaHospital className="w-8 h-8" />
    );
  };

  return (
    <>
      {/* Hero Section with BG_Photos Background */}
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
          {/* Specialities Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"
          >
            <FaHospital className="text-base md:text-xl mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
              Medical Specialities
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Our Specialities
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            Comprehensive Healthcare Services Across{" "}
            {hospitalDepartments.length} Medical Departments
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-emerald-50 to-teal-50 relative overflow-hidden min-h-screen">
        {/* Subtle Professional Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gentle floating shapes */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-200/8 to-teal-300/8 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-float"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-emerald-300/10 to-teal-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-float-delayed"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-br from-emerald-200/10 to-teal-300/10 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-float-slow"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Duplicate header removed (title is shown in hero) */}

          {/* Professional Departments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {hospitalDepartments.map((department, index) => {
              const isHovered = hoveredCard === department.id;

              return (
                <div
                  key={department.id}
                  role="button"
                  tabIndex={0}
                  className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-gray-100 cursor-pointer transition-all duration-300 ease-out opacity-0 animate-fadeInUp ${
                    isHovered
                      ? "shadow-lg -translate-y-1 scale-102 border-emerald-200"
                      : "hover:shadow-md hover:-translate-y-0.5"
                  }`}
                  style={{
                    animationDelay: `${600 + index * 100}ms`,
                  }}
                  onMouseEnter={() => setHoveredCard(department.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => handleDepartmentClick(department.name)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleDepartmentClick(department.name);
                    }
                  }}
                  onBlur={() => setHoveredCard(null)}
                >
                  {/* Subtle gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-emerald-200/4 via-teal-200/4 to-emerald-200/4 rounded-2xl transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>

                  {/* Professional Icon Container */}
                  <div className="relative mb-6 flex justify-center">
                    <div
                      className={`relative transition-all duration-300 ease-out ${
                        isHovered ? "scale-105" : "scale-100"
                      }`}
                    >
                      {/* Subtle icon glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl blur-lg transition-opacity duration-300 ${
                          isHovered ? "opacity-20" : "opacity-10"
                        }`}
                      ></div>

                      {/* Icon container */}
                      <div
                        className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 transition-all duration-300 ${
                          isHovered ? "shadow-lg" : "shadow-md"
                        }`}
                      >
                        <div className="text-white transition-transform duration-300">
                          {getDepartmentIcon(department.name)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Department Name */}
                  <div className="relative text-center">
                    <h3
                      className={`text-xl font-bold leading-tight mb-3 transition-colors duration-300 ${
                        isHovered ? "text-emerald-600" : "text-gray-800"
                      }`}
                    >
                      {department.name}
                    </h3>

                    {/* Simple decorative line */}
                    <div
                      className={`mx-auto h-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-400 ${
                        isHovered ? "w-12" : "w-0"
                      }`}
                    ></div>

                    {/* Professional View Details Button - Visible on mobile, hover-based on desktop */}
                    <div
                      className={`mt-3 transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 transform translate-y-0"
                          : "opacity-100 md:opacity-0 transform translate-y-0 md:translate-y-2"
                      }`}
                    >
                      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 group-hover:scale-105">
                        <span>View Details</span>
                        <svg
                          className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div
            className="mt-20 text-center opacity-0 animate-fadeInUp"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
              <FaHospital className="text-emerald-600 w-5 h-5" />
              <span className="text-gray-700 font-medium">
                {hospitalDepartments.length} Specialized Departments
              </span>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gentle-float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }

        @keyframes gentle-float-delayed {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-8px); 
          }
        }

        @keyframes gentle-float-slow {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-6px); 
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-gentle-float {
          animation: gentle-float 8s ease-in-out infinite;
        }

        .animate-gentle-float-delayed {
          animation: gentle-float-delayed 10s ease-in-out infinite;
        }

        .animate-gentle-float-slow {
          animation: gentle-float-slow 12s ease-in-out infinite;
        }

        .scale-102 {
          transform: scale(1.02);
        }

        /* Professional hover transitions */
        .transition-professional {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Subtle glow effect */
        .hover-glow:hover {
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15);
        }

        /* Clean focus styles for accessibility */
        [role="button"]:focus {
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 2px;
        }

        /* Smooth gradient transitions */
        .gradient-text {
          background-size: 100% 100%;
          transition: all 0.3s ease;
        }

        /* Professional card hover state */
        .card-professional:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      </section>
    </>
  );
};

export default Specialities;
