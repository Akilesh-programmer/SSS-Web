import { departments } from "../../data/doctorsData";
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
  FaUserInjured,
  FaUserFriends,
  FaSyringe,
  FaHospital,
  FaCut,
  FaHeart,
  FaBandAid,
  FaFlask,
  FaPrescriptionBottleAlt,
  FaPills,
  FaCheckCircle,
  FaHands,
  FaRibbon,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Specialities = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Filter out "All Specialists" as it's not a specific department
  const hospitalDepartments = departments.filter(
    (dept) => dept.name !== "All Specialists"
  );

  // Icon mapping for each department
  const departmentIcons = {
    "Accident & Emergency Care": <FaAmbulance className="w-8 h-8" />,
    Anaesthesiology: <FaSyringe className="w-8 h-8" />,
    Cardiology: <FaHeartbeat className="w-8 h-8" />,
    "Dermatology and Cosmetology": <FaBandAid className="w-8 h-8" />,
    "Dental & Oral and Maxillofacial Surgery": <FaTooth className="w-8 h-8" />,
    "ENT & Head & Neck": <FaStethoscope className="w-8 h-8" />,
    "General Surgery": <FaCut className="w-8 h-8" />,
    Gastroenterology: <FaMicroscope className="w-8 h-8" />,
    "Internal Medicine": <FaUserMd className="w-8 h-8" />,
    "Master Health Check up": <FaCheckCircle className="w-8 h-8" />,
    Nephrology: <FaPills className="w-8 h-8" />,
    Neurology: <FaBrain className="w-8 h-8" />,
    "Neuro Surgery": <FaBrain className="w-8 h-8" />,
    "Obstetrics & Gynaecology": <FaUserFriends className="w-8 h-8" />,
    Orthopaedics: <FaBone className="w-8 h-8" />,
    Ophthalmology: <FaEye className="w-8 h-8" />,
    Paediatrics: <FaChild className="w-8 h-8" />,
    Physiotherapy: <FaHands className="w-8 h-8" />,
    "Plastic Surgery": <FaRibbon className="w-8 h-8" />,
    Pulmonology: <FaLungs className="w-8 h-8" />,
    Psychiatry: <FaBrain className="w-8 h-8" />,
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
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
      {/* Subtle Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gentle floating shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-300/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-float"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-emerald-300/10 to-teal-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-float-delayed"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-300/8 to-indigo-400/8 rounded-full mix-blend-multiply filter blur-3xl animate-gentle-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6 opacity-0 animate-fadeInUp">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3 border border-blue-200 shadow-sm">
              <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">
                Medical Excellence
              </span>
            </div>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight opacity-0 animate-fadeInUp"
            style={{ animationDelay: "200ms" }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Our Medical
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Specialities
            </span>
          </h1>

          <p
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInUp"
            style={{ animationDelay: "400ms" }}
          >
            Comprehensive healthcare services across{" "}
            <span className="font-semibold text-blue-600">
              {hospitalDepartments.length}
            </span>{" "}
            specialized departments, delivering exceptional medical care with
            cutting-edge technology and compassionate expertise.
          </p>
        </div>

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
                    ? "shadow-lg -translate-y-1 scale-102 border-blue-200"
                    : "hover:shadow-md hover:-translate-y-0.5"
                }`}
                style={{
                  animationDelay: `${600 + index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredCard(department.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setHoveredCard(department.id);
                  }
                }}
                onBlur={() => setHoveredCard(null)}
              >
                {/* Subtle gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500/3 via-indigo-500/2 to-blue-500/3 rounded-2xl transition-opacity duration-300 ${
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
                      className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl blur-lg transition-opacity duration-300 ${
                        isHovered ? "opacity-20" : "opacity-10"
                      }`}
                    ></div>

                    {/* Icon container */}
                    <div
                      className={`relative inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 transition-all duration-300 ${
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
                      isHovered ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {department.name}
                  </h3>

                  {/* Simple decorative line */}
                  <div
                    className={`mx-auto h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-400 ${
                      isHovered ? "w-12" : "w-0"
                    }`}
                  ></div>
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
            <FaHospital className="text-blue-600 w-5 h-5" />
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
  );
};

export default Specialities;
