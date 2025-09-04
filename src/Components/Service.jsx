import React from "react";
import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../data/departmentsData";
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
} from "react-icons/fa";

const Service = () => {
  const navigate = useNavigate();
  const departments = getAllDepartments();

  // Icon mapping for each department
  const departmentIcons = {
    "Accident & Emergency Care": <FaAmbulance />,
    Cardiology: <FaHeartbeat />,
    Dermatology: <FaBandAid />,
    Dentistry: <FaTooth />,
    Endocrinology: <FaFlask />,
    "ENT (Ear, Nose & Throat)": <FaStethoscope />,
    "General Medicine": <FaUserMd />,
    "General Surgery": <FaCut />,
    Gastroenterology: <FaMicroscope />,
    "Obstetrics & Gynaecology": <FaUserFriends />,
    Nephrology: <FaPills />,
    Neurology: <FaBrain />,
    "Neuro Surgery": <FaBrain />,
    Orthopaedics: <FaBone />,
    Ophthalmology: <FaEye />,
    Paediatrics: <FaChild />,
    Psychiatry: <FaBrain />,
    Pulmonology: <FaLungs />,
    Radiology: <FaXRay />,
    Anaesthesiology: <FaSyringe />,
    Physiotherapy: <FaUserInjured />,
    "Critical Care Medicine": <FaHeart />,
    Pathology: <FaMicroscope />,
    "Plastic Surgery": <FaCut />,
    Pharmacy: <FaPrescriptionBottleAlt />,
  };

  // Get icon for department
  const getDepartmentIcon = (departmentName) => {
    return departmentIcons[departmentName] || <FaHospital />;
  };

  const handleCardClick = (department) => {
    navigate(`/department/${department.slug}`);
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 lg:top-20 left-5 lg:left-10 w-40 h-40 lg:w-72 lg:h-72 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-20 lg:top-40 right-5 lg:right-10 w-40 h-40 lg:w-72 lg:h-72 bg-gradient-to-br from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-4 lg:-bottom-8 left-1/3 w-40 h-40 lg:w-72 lg:h-72 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block mb-4 lg:mb-6">
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-4 lg:px-6 py-2 border border-emerald-200">
              <span className="text-emerald-700 font-semibold text-xs lg:text-sm tracking-wide uppercase">
                Medical Excellence
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight px-4">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Our Medical
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Specialities
            </span>
          </h2>

          <p className="text-base lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Discover world-class healthcare across {departments.length}{" "}
            specialized departments, where cutting-edge technology meets
            compassionate care.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10 grid-optimized">
          {departments.map((department) => (
            <button
              key={department.id}
              className="group relative cursor-pointer card-container text-left transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              onClick={() => handleCardClick(department)}
              type="button"
              aria-label={`Learn more about ${department.name}`}
            >
              <div className="relative backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-xl hover:shadow-2xl h-full flex flex-col service-card fixed-height-content overflow-hidden bg-white/95 transition-all duration-300 border border-transparent hover:border-emerald-200">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl lg:rounded-3xl transition-opacity duration-300"></div>

                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out"></div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-4 lg:mb-6 flex justify-center">
                  <div className="relative transform transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
                    <div className="relative inline-flex p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <div className="text-white text-4xl transform transition-transform duration-300 group-hover:scale-110">
                        {getDepartmentIcon(department.name)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative flex-grow text-center content-loading">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 mb-4 min-h-[3rem] flex items-center justify-center department-title transition-colors duration-300">
                    {department.name}
                  </h3>

                  <p className="text-gray-600 group-hover:text-gray-700 mb-6 leading-relaxed text-sm min-h-[4rem] line-clamp-3 department-desc transition-colors duration-300">
                    {department.description ||
                      "Comprehensive medical care with expert specialists and advanced treatment options."}
                  </p>

                  {/* Key Services */}
                  <div className="space-y-3 mb-6 min-h-[6rem]">
                    {department.overview?.features
                      ?.slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={`${department.id}-feature-${featureIndex}`}
                          className="flex items-start space-x-3 feature-item transform transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex-shrink-0 mt-2 transform transition-transform duration-300 group-hover:scale-125"></div>
                          <span className="text-sm text-gray-600 group-hover:text-gray-700 font-medium text-left leading-relaxed transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      )) || (
                      // Fallback content if features are not available
                      <>
                        <div className="flex items-start space-x-3 feature-item transform transition-transform duration-300 group-hover:translate-x-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex-shrink-0 mt-2 transform transition-transform duration-300 group-hover:scale-125"></div>
                          <span className="text-sm text-gray-600 group-hover:text-gray-700 font-medium text-left leading-relaxed transition-colors duration-300">
                            Expert Medical Care
                          </span>
                        </div>
                        <div className="flex items-start space-x-3 feature-item transform transition-transform duration-300 group-hover:translate-x-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex-shrink-0 mt-2 transform transition-transform duration-300 group-hover:scale-125"></div>
                          <span className="text-sm text-gray-600 group-hover:text-gray-700 font-medium text-left leading-relaxed transition-colors duration-300">
                            Advanced Treatment
                          </span>
                        </div>
                        <div className="flex items-start space-x-3 feature-item transform transition-transform duration-300 group-hover:translate-x-1">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex-shrink-0 mt-2 transform transition-transform duration-300 group-hover:scale-125"></div>
                          <span className="text-sm text-gray-600 group-hover:text-gray-700 font-medium text-left leading-relaxed transition-colors duration-300">
                            24/7 Care Available
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="relative mt-auto">
                  <button
                    className="learn-more-btn w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 
                    opacity-100 translate-y-0 
                    md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(department);
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 hover:scale-105">
                      Learn More
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 -translate-x-full hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out"></div>
                    </div>
                  </button>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Ensure consistent card heights and remove border artifacts */
        .service-card {
          min-height: 400px;
          border-radius: 1.5rem !important;
          overflow: hidden;
          position: relative;
          border: none !important;
          outline: none !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          background: rgba(255, 255, 255, 0.98) !important;
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.15), 0 25px 25px -5px rgba(0, 0, 0, 0.1);
          transform: translateZ(0);
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 1.5rem;
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        /* Content styling with smooth transitions */
        .content-loading {
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .department-title {
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .department-desc {
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .feature-item {
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        /* Learn More button styling with enhanced hover effects */
        .learn-more-btn {
          pointer-events: auto;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity, box-shadow;
        }
        
        .learn-more-btn:hover {
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.4);
        }
        
        /* Card container styling with smooth animations */
        .card-container {
          transform-origin: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          isolation: isolate;
          opacity: 1;
          border-radius: 1.5rem;
          overflow: hidden;
          pointer-events: auto;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, box-shadow;
        }
        
        /* Enhanced hover state for card container */
        .card-container:hover {
          z-index: 10;
        }
        
        .service-card {
          will-change: transform, box-shadow;
          isolation: isolate;
        }
        
        /* Ensure child elements don't have conflicting gray backgrounds */
        .service-card > *:not(.service-card) {
          background: transparent !important;
        }
        
        /* Fix layout shifts and bullet alignment */
        .fixed-height-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100%;
          background: transparent !important;
        }
        
        /* Bullet point positioning */
        .feature-item {
          align-items: flex-start;
        }
        
        .feature-item .w-2 {
          margin-top: 6px;
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default Service;
