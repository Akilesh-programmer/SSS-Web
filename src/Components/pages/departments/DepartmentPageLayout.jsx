import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUserMd,
  FaImages,
  FaExpand,
  FaGraduationCap,
  FaHospital,
  FaChevronDown,
  FaQuestionCircle,
} from "react-icons/fa";
import Footer from "../../ui/Footer";
import PageWrapper from "../../ui/PageWrapper";
import DefaultDoctorAvatar from "../../ui/DefaultDoctorAvatar";
import HeroSection from "../../ui/HeroSection";
import SEO from "../../ui/SEO";
import departmentPageData from "../../../data/departmentPageData";
import { DEPARTMENT_SEO_TEMPLATE } from "../../../data/seoData";
import departmentFAQs from "../../../data/departmentFAQs";
import {
  departments,
  doctors as doctorsData,
} from "../../../data/DoctorDepartmentData";
import { generatePhysicianSchema } from "../../../utils/seo";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Using public assets for better performance during deployment
const BG1 = "/assets/heroes/main-1.avif";
const BG2 = "/assets/heroes/main-2.avif";
const BG3 = "/assets/heroes/heroes-20250923.avif";
const BG4 = "/assets/heroes/heroes-20250923.avif";

// Department-specific images
// Accident & Emergency Care (Department ID: 2)
const EMERGENCY_HERO =
  "/assets/departments/whatsapp-image-2025-09-09-at-23-15-38_a6224a71.avif";
const EMERGENCY_INFRA =
  "/assets/departments/whatsapp-image-2025-09-09-at-23-15-40_dac5ba67.avif";

// Anaesthesiology (Department ID: 3)
const ANAESTHESIOLOGY_HERO = "/assets/infrastructure/infrastructure-03428.avif";
const ANAESTHESIOLOGY_INFRA = "/assets/departments/anaesthesiology_cover.avif";
// Cardiology (Department ID: 4)
const CARDIOLOGY_HERO = "/assets/infrastructure/infrastructure-03412.avif";
const CARDIOLOGY_INFRA = "/assets/infrastructure/infrastructure-03377.avif";
// Dermatology & Cosmetology (Department ID: 5)
const DERMATOLOGY_HERO = "/assets/departments/dermatology_cover.avif";
const DERMATOLOGY_INFRA = "/assets/departments/dermatology.avif";
// Dental & Oral and Maxillofacial Surgery (Department ID: 6)
const DENTAL_HERO = "/assets/infrastructure/infrastructure-03386.avif"; // (was duplicate of infrastructure-8)
const DENTAL_INFRA = "/assets/departments/dental.avif";
// ENT & Head & Neck (Department ID: 7)
const ENT_HERO = "/assets/departments/ent_hero.avif";
const ENT_INFRA = "/assets/departments/ent.avif";
// General Surgery (Department ID: 8)
const GS_HERO = "/assets/infrastructure/infrastructure-wa0018.avif"; // hero background
const GS_INFRA = "/assets/infrastructure/infrastructure-9.avif"; // in-page image
// Gastroenterology (Department ID: 9)
const GASTRO_HERO = "/assets/infrastructure/infrastructure-wa0028.avif"; // cover photo
const GASTRO_INFRA = "/assets/departments/gastro.avif"; // inside page picture
// Internal Medicine (Department ID: 10)
const IM_HERO = "/assets/infrastructure/infrastructure-wa0027.avif"; // hero image
const IM_INFRA = "/assets/departments/internal_side.avif"; // inside image
// Master Health Check up (Department ID: 11)
const MHC_HERO = "/assets/departments/master_health_cover.avif"; // cover image
const MHC_INFRA = "/assets/infrastructure/infrastructure-03377.avif"; // side image
// Nephrology (Department ID: 12)
const NEPHRO_HERO = "/assets/departments/nephrology_sidew.avif"; // cover background image
const NEPHRO_INFRA = "/assets/departments/nephrology_background.avif"; // side photo
// Neurology (Department ID: 13)
const NEURO_HERO = "/assets/departments/neurology_back.avif"; // background
const NEURO_INFRA = "/assets/departments/neurology_side.avif"; // side image
// Neuro Surgery (Department ID: 14)
const NS_HERO = "/assets/departments/neuro_surgery.avif"; // back
const NS_INFRA = "/assets/departments/neuro_surgery_side.avif"; // side image
// Obstetrics & Gynaecology (Department ID: 15)
const OBST_HERO = "/assets/departments/obst_back.avif"; // background
const OBST_INFRA = "/assets/departments/obst_side.avif"; // side image
// Orthopaedics (Department ID: 16)
const ORTHO_HERO = "/assets/departments/ortho_back.avif"; // back
const ORTHO_INFRA = "/assets/departments/ortho_side.avif"; // side image
// Ophthalmology (Department ID: 17)
const OPHTHALM_HERO = "/assets/departments/opthalm_back.avif"; // back
const OPHTHALM_INFRA = "/assets/departments/opthalm_side.avif"; // side
// Paediatrics (Department ID: 18)
const PAED_HERO = "/assets/departments/paediatrics_back.avif"; // back
const PAED_INFRA = "/assets/departments/paediatrics_side.avif"; // side
// Physiotherapy (Department ID: 20)
const PHYSIO_HERO = "/assets/departments/physio_back.avif"; // back
const PHYSIO_INFRA = "/assets/departments/physio_side.avif"; // side
// Plastic Surgery (Department ID: 21)
const PLASTIC_HERO = "/assets/departments/plastic_back.avif"; // back
const PLASTIC_INFRA = "/assets/departments/plastic_side.avif"; // side
// Pulmonology (Department ID: 22)
const PULM_HERO = "/assets/departments/pulmonology_back.avif"; // back
const PULM_INFRA = "/assets/departments/pulmonology_side.avif"; // side
// Psychiatry (Department ID: 23)
const PSYCH_HERO = "/assets/departments/psychiatry_back.avif"; // back
const PSYCH_INFRA = "/assets/departments/psychiatry_side.avif"; // side
// Radiology (Department ID: 24)
const RADIO_HERO = "/assets/departments/master_health_cover.avif"; // back (was duplicate of master_health_cover)
const RADIO_INFRA = "/assets/departments/radiologhy_side.avif"; // side
// Urology (Department ID: 25)
const URO_HERO = "/assets/departments/urology_back.avif"; // back
const URO_INFRA = "/assets/departments/nephrology_sidew.avif"; // side (was duplicate of nephrology_sidew)
// Vascular Surgery (Department ID: 26)
const VASC_HERO = "/assets/departments/vascular_back.avif"; // back
const VASC_INFRA = "/assets/departments/vascular_side.avif"; // side
const INF1 = "/assets/infrastructure/infrastructure-03356.avif";
const INF2 = "/assets/infrastructure/infrastructure-03360.avif";
const INF3 = "/assets/infrastructure/infrastructure-03365.avif";
const INF4 = "/assets/infrastructure/infrastructure-03386.avif";
const INF5 = "/assets/infrastructure/infrastructure-03388.avif";
const INF6 = "/assets/infrastructure/infrastructure-03412.avif";
const INF7 = "/assets/infrastructure/infrastructure-03426.avif";
const INF8 = "/assets/infrastructure/infrastructure-03427.avif";
const INF9 = "/assets/infrastructure/infrastructure-03428.avif";
const INF10 = "/assets/heroes/main-3.avif";
const INF11 = "/assets/infrastructure/infrastructure-03435.avif";
const INF12 = "/assets/infrastructure/infrastructure-wa0016.avif";
const INF13 = "/assets/infrastructure/infrastructure-wa0018.avif";
const INF14 = "/assets/infrastructure/infrastructure-wa0019.avif";
const INF15 = "/assets/infrastructure/infrastructure-wa0020.avif";
const INF16 = "/assets/infrastructure/infrastructure-wa0023.avif";
const INF17 = "/assets/infrastructure/infrastructure-wa0026.avif";
const INF18 = "/assets/infrastructure/infrastructure-wa0027.avif";
const INF19 = "/assets/infrastructure/infrastructure-wa0028.avif";
const INF20 = "/assets/infrastructure/infrastructure-wa0030.avif";
const INF21 = "/assets/infrastructure/infrastructure-wa0032.avif";

// BG Photos array for hero backgrounds (alternating)
const bgPhotos = [BG1, BG2, BG3, BG4];

// Function to get hero background image for department
const getHeroBgImage = (departmentId) => {
  if (!departmentId) return bgPhotos[0];

  // Department-specific hero images
  if (departmentId === 2) return EMERGENCY_HERO; // Accident & Emergency Care
  if (departmentId === 3) return ANAESTHESIOLOGY_HERO; // Anaesthesiology
  if (departmentId === 4) return CARDIOLOGY_HERO; // Cardiology
  if (departmentId === 5) return DERMATOLOGY_HERO; // Dermatology & Cosmetology
  if (departmentId === 6) return DENTAL_HERO; // Dental & Oral and Maxillofacial Surgery
  if (departmentId === 7) return ENT_HERO; // ENT & Head & Neck
  if (departmentId === 8) return GS_HERO; // General Surgery
  if (departmentId === 9) return GASTRO_HERO; // Gastroenterology
  if (departmentId === 10) return IM_HERO; // Internal Medicine
  if (departmentId === 11) return MHC_HERO; // Master Health Check up
  if (departmentId === 12) return NEPHRO_HERO; // Nephrology
  if (departmentId === 13) return NEURO_HERO; // Neurology
  if (departmentId === 14) return NS_HERO; // Neuro Surgery
  if (departmentId === 15) return OBST_HERO; // Obstetrics & Gynaecology
  if (departmentId === 16) return ORTHO_HERO; // Orthopaedics
  if (departmentId === 17) return OPHTHALM_HERO; // Ophthalmology
  if (departmentId === 18) return PAED_HERO; // Paediatrics
  if (departmentId === 20) return PHYSIO_HERO; // Physiotherapy
  if (departmentId === 21) return PLASTIC_HERO; // Plastic Surgery
  if (departmentId === 22) return PULM_HERO; // Pulmonology
  if (departmentId === 23) return PSYCH_HERO; // Psychiatry
  if (departmentId === 24) return RADIO_HERO; // Radiology
  if (departmentId === 25) return URO_HERO; // Urology
  if (departmentId === 26) return VASC_HERO; // Vascular Surgery

  return bgPhotos[(departmentId - 1) % bgPhotos.length];
};

// Infrastructure photos for content integration
const infrastructurePhotos = [
  { src: INF1, alt: "Modern medical facility at SSS Hospital Erode" },
  { src: INF2, alt: "State-of-the-art operation theatre at SSS Hospital" },
  { src: INF3, alt: "Advanced diagnostic equipment at SSS Hospital Erode" },
  { src: INF4, alt: "Patient care ward at SSS Super Speciality Hospital" },
  { src: INF5, alt: "Emergency care unit at SSS Hospital Erode" },
  { src: INF6, alt: "Hospital corridor and nursing station at SSS Hospital" },
  { src: INF7, alt: "Laboratory and diagnostics at SSS Hospital Erode" },
  { src: INF8, alt: "Reception area at SSS Super Speciality Hospital" },
  { src: INF9, alt: "Advanced medical infrastructure at SSS Hospital" },
  { src: INF10, alt: "SSS Super Speciality Hospital building exterior" },
  { src: INF11, alt: "ICU facility at SSS Hospital Erode" },
  { src: INF12, alt: "Patient room at SSS Super Speciality Hospital" },
  { src: INF13, alt: "Pharmacy at SSS Hospital Erode" },
  { src: INF14, alt: "Waiting area at SSS Super Speciality Hospital" },
  { src: INF15, alt: "Medical equipment at SSS Hospital Erode" },
  { src: INF16, alt: "Consultation room at SSS Super Speciality Hospital" },
  { src: INF17, alt: "Radiology department at SSS Hospital Erode" },
  { src: INF18, alt: "Dialysis unit at SSS Super Speciality Hospital" },
  { src: INF19, alt: "Physiotherapy centre at SSS Hospital Erode" },
  { src: INF20, alt: "Blood bank facility at SSS Hospital" },
  { src: INF21, alt: "Ambulance service at SSS Super Speciality Hospital" },
];

// Function to get infrastructure photos for each department (different sets)
const getDepartmentInfraPhotos = (departmentId) => {
  if (!departmentId) return [];

  // Department-specific infrastructure photos
  if (departmentId === 2) {
    // Accident & Emergency Care - single image
    return [{ src: EMERGENCY_INFRA, alt: "Emergency Care Facility" }];
  }
  if (departmentId === 3) {
    // Anaesthesiology - single image
    return [{ src: ANAESTHESIOLOGY_INFRA, alt: "Anaesthesiology Department" }];
  }
  if (departmentId === 4) {
    // Cardiology - single image
    return [{ src: CARDIOLOGY_INFRA, alt: "Cardiology Department" }];
  }
  if (departmentId === 5) {
    return [{ src: DERMATOLOGY_INFRA, alt: "Dermatology Department" }];
  }
  if (departmentId === 6) {
    return [{ src: DENTAL_INFRA, alt: "Dental Department" }];
  }
  if (departmentId === 7) {
    return [{ src: ENT_INFRA, alt: "ENT Department" }];
  }
  if (departmentId === 8) {
    return [{ src: GS_INFRA, alt: "General Surgery" }];
  }
  if (departmentId === 9) {
    return [{ src: GASTRO_INFRA, alt: "Gastroenterology Department" }];
  }
  if (departmentId === 10) {
    return [{ src: IM_INFRA, alt: "Internal Medicine Department" }];
  }
  if (departmentId === 11) {
    return [{ src: MHC_INFRA, alt: "Master Health Check up" }];
  }
  if (departmentId === 12) {
    return [{ src: NEPHRO_INFRA, alt: "Nephrology Department" }];
  }
  if (departmentId === 13) {
    return [{ src: NEURO_INFRA, alt: "Neurology Department" }];
  }
  if (departmentId === 14) {
    return [{ src: NS_INFRA, alt: "Neuro Surgery Department" }];
  }
  if (departmentId === 15) {
    return [{ src: OBST_INFRA, alt: "Obstetrics & Gynaecology Department" }];
  }
  if (departmentId === 16) {
    return [{ src: ORTHO_INFRA, alt: "Orthopaedics Department" }];
  }
  if (departmentId === 17) {
    return [{ src: OPHTHALM_INFRA, alt: "Ophthalmology Department" }];
  }
  if (departmentId === 18) {
    return [{ src: PAED_INFRA, alt: "Paediatrics Department" }];
  }
  if (departmentId === 20) {
    return [{ src: PHYSIO_INFRA, alt: "Physiotherapy Department" }];
  }
  if (departmentId === 21) {
    return [{ src: PLASTIC_INFRA, alt: "Plastic Surgery Department" }];
  }
  if (departmentId === 22) {
    return [{ src: PULM_INFRA, alt: "Pulmonology Department" }];
  }
  if (departmentId === 23) {
    return [{ src: PSYCH_INFRA, alt: "Psychiatry Department" }];
  }
  if (departmentId === 24) {
    return [{ src: RADIO_INFRA, alt: "Radiology Department" }];
  }
  if (departmentId === 25) {
    return [{ src: URO_INFRA, alt: "Urology Department" }];
  }
  if (departmentId === 26) {
    return [{ src: VASC_INFRA, alt: "Vascular Surgery Department" }];
  }

  const startIndex = ((departmentId - 1) * 3) % infrastructurePhotos.length;
  return [
    infrastructurePhotos[startIndex],
    infrastructurePhotos[(startIndex + 1) % infrastructurePhotos.length],
    infrastructurePhotos[(startIndex + 2) % infrastructurePhotos.length],
  ];
};

// Utility function to create URL slug from department name
const createSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

// Map of slug variations to department ID for robust routing and SEO aliases
const slugAliasMap = {
  "accident-emergency-care": 2,
  "anaesthesiology": 3,
  "cardiology": 4,
  "dermatology-cosmetology": 5,
  "dermatology-and-cosmetology": 5,
  "dental-oral-and-maxillofacial-surgery": 6,
  "dental-oral-surgery": 6,
  "ent-head-neck": 7,
  "ent": 7,
  "general-surgery": 8,
  "gastroenterology": 9,
  "internal-medicine": 10,
  "master-health-check-up": 11,
  "nephrology": 12,
  "neurology": 13,
  "neuro-surgery": 14,
  "neurosurgery": 14,
  "obstetrics-gynaecology": 15,
  "orthopaedics": 16,
  "ophthalmology": 17,
  "paediatrics": 18,
  "physiotherapy": 20,
  "physiotherapy-rehabilitation": 20,
  "plastic-surgery": 21,
  "pulmonology": 22,
  "psychiatry": 23,
  "radiology": 24,
  "urology": 25,
  "vascular-surgery": 26,
};

// Function to find department ID from slug
const findDepartmentIdBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  if (slugAliasMap[cleanSlug]) {
    return slugAliasMap[cleanSlug];
  }
  const department = departments.find((dept) => createSlug(dept.name) === cleanSlug);
  return department ? department.id : null;
};

// Card animation variant (same as DoctorsPage)
const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.15 },
  }),
};

// Infrastructure Gallery Component
const InfrastructureGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 8;

  const totalPages = Math.ceil(infrastructurePhotos.length / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const currentImages = infrastructurePhotos.slice(
    startIndex,
    startIndex + imagesPerPage
  );

  const openModal = (photo) => {
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="w-full">
      {/* Gallery Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <FaImages className="text-2xl md:text-3xl text-blue-600 mr-2 md:mr-3" />
          <h2 className="text-display-lg text-gray-800">
            Hospital Infrastructure
          </h2>
        </div>
        <p
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
          style={{ textAlign: "justify" }}
        >
          Explore our state-of-the-art medical facilities and infrastructure
          designed to provide world-class healthcare services
        </p>
      </motion.div>

      {/* Image Grid - Enhanced Mobile Responsiveness */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8"
      >
        {currentImages.map((photo, index) => (
          <motion.div
            key={startIndex + index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => openModal(photo)}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 right-4">
                  <FaExpand className="text-white text-lg" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevPage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 0}
          >
            Previous
          </button>
          <span className="text-gray-600">
            {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal for enlarged view (blurred backdrop instead of heavy black shade) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent"
          onClick={closeModal}
          style={{ backdropFilter: "blur(8px)" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            {/* Fixed top-right close button (below navbar) */}
            <button
              onClick={closeModal}
              aria-label="Close image"
              className="fixed top-4 right-4 z-[60] text-gray-900 bg-white/90 rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform shadow-xl ring-1 ring-white/70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            {/* No caption shown here by design (image-only modal) */}
          </motion.div>
        </div>
      )}
    </div>
  );
};

// FAQ Accordion Item Component
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-gray-800 pr-4">
          {faq.question}
        </span>
        <FaChevronDown
          className={`text-blue-600 text-sm shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

const DepartmentPageLayout = () => {
  const { departmentSlug } = useParams();
  const navigate = useNavigate();
  // Compute departmentId from slug at component scope so it's available during render
  const departmentId = findDepartmentIdBySlug(departmentSlug);
  const [department, setDepartment] = useState(null);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // departmentId is computed at component scope from departmentSlug
    if (!departmentId) {
      navigate("/specialities");
      return;
    }

    // Find department content
    const deptContent = departmentPageData.find(
      (dept) => dept.id === parseInt(departmentId)
    );

    // Find department info from departments data
    const deptInfo = departments.find(
      (dept) => dept.id === parseInt(departmentId)
    );

    if (!deptContent || !deptInfo) {
      navigate("/specialities");
      return;
    }

    setDepartment({ ...deptContent, ...deptInfo });

    // Get doctors for this department with improved filtering logic using DoctorDepartmentData
    const departmentDoctors = doctorsData.filter((doctor) => {
      // Handle both array and single department cases
      const doctorDepts = Array.isArray(doctor.department)
        ? doctor.department
        : [doctor.department];

      // Check if doctor belongs to this department
      return doctorDepts.includes(parseInt(departmentId));
    });

    // Custom sorting for Accident & Emergency Care (departmentId: 2)
    // Move Dr. Karthikeyan (id: 16) to second position
    if (parseInt(departmentId) === 2) {
      const karthikeyanIndex = departmentDoctors.findIndex(
        (doc) => doc.id === 16
      );
      if (karthikeyanIndex > 1) {
        // Remove Dr. Karthikeyan from current position
        const [karthikeyan] = departmentDoctors.splice(karthikeyanIndex, 1);
        // Insert at second position (index 1)
        departmentDoctors.splice(1, 0, karthikeyan);
      }
    }

    setDoctors(departmentDoctors);
  }, [departmentSlug, navigate, departmentId]);

  const _handleBackClick = () => {
    navigate("/specialities");
  };

  // No inline appointment or call CTAs per request

  if (!department) {
    return null;
  }

  if (!department) {
    return (
      <PageWrapper pageKey="department-not-found">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
          <div className="text-center">
            <h1 className="text-heading-xl text-gray-800 mb-4">
              Department Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The department you're looking for doesn't exist.
            </p>
            {/* Back button removed per request */}
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper pageKey={`department-${departmentId}`}>
      {/* SEO Component with Department-Specific Schema */}
      {(() => {
        const seoTemplate = DEPARTMENT_SEO_TEMPLATE[departmentSlug];
        const seoTitle = seoTemplate
          ? seoTemplate.title
          : `${department.name} - Expert Care at SSS Super Speciality Hospital Erode`;
        const seoDescription = seoTemplate
          ? seoTemplate.description
          : `Comprehensive ${department.name} services at SSS Hospital Erode. Expert doctors, advanced treatments, and state-of-the-art facilities for ${department.name}.`;
        const seoKeywords = seoTemplate
          ? seoTemplate.keywords
          : [
              department.name.toLowerCase(),
              `${department.name.toLowerCase()} erode`,
              `best ${department.name.toLowerCase()} erode`,
              "sss hospital",
            ];

        // Build combined schema array
        const schemaArray = [
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: `${department.name} Department`,
            description: seoDescription,
            url: `https://ssshospitals.in/specialities/${departmentSlug}`,
            lastReviewed: new Date().toISOString().split("T")[0],
            specialty: department.name,
            reviewedBy: {
              "@type": "Organization",
              name: "SSS Super Speciality Hospital",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "MedicalSpecialty",
            name: department.name,
            description: `Expert ${department.name} services at SSS Super Speciality Hospital Erode`,
            availableAt: {
              "@type": "Hospital",
              name: "SSS Super Speciality Hospital",
              url: "https://ssshospitals.in",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "167/2C1, Perundurai Road, Opp to SBI Bank, URC Nagar",
                addressLocality: "Erode",
                addressRegion: "Tamil Nadu",
                postalCode: "638009",
                addressCountry: "IN",
              },
            },
          },
        ];

        // Add Physician schemas for each doctor
        doctors.forEach((doctor) => {
          schemaArray.push(generatePhysicianSchema(doctor));
        });

        // Add FAQPage schema if FAQs exist
        const faqs = departmentFAQs[departmentSlug];
        if (faqs && faqs.length > 0) {
          schemaArray.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          });
        }

        return (
          <SEO
            title={seoTitle}
            description={seoDescription}
            keywords={seoKeywords}
            url={`/specialities/${departmentSlug}`}
            type="website"
            breadcrumbs={[
              { name: "Home", url: "/" },
              { name: "Specialities", url: "/specialities" },
              {
                name: department.name,
                url: `/specialities/${departmentSlug}`,
              },
            ]}
            schema={schemaArray}
          />
        );
      })()}

      <div className="overflow-x-hidden max-w-full">
        {/* Hero Section */}
        <HeroSection
          backgroundImage={getHeroBgImage(departmentId)}
          badge={{ icon: FaUserMd, text: "Medical Department" }}
          title={department.name}
          subtitle="Expert Care, Advanced Technology, Compassionate Service"
        />

        {/* Department Content - Enhanced Medical Professional Design with Infrastructure Photos */}
        <section className="py-20 bg-gradient-to-br from-white to-blue-50/30 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 border border-blue-300 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-teal-300 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Content Column */}
              <div className="lg:col-span-2 min-w-0">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
                  className="markdown-content prose prose-lg md:prose-xl max-w-none break-words overflow-hidden"
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children }) => (
                        <motion.h2
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-2xl md:text-3xl lg:text-heading-xl text-gray-800 mb-8 mt-16 first:mt-0 border-l-4 border-blue-600 pl-4 md:pl-6 bg-gradient-to-r from-blue-50 to-transparent py-4 -ml-4 md:-ml-6 break-words"
                        >
                          {children}
                        </motion.h2>
                      ),
                      h3: ({ children }) => (
                        <motion.h3
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-xl md:text-heading-lg font-semibold text-gray-700 mb-6 mt-12 border-l-2 border-teal-500 pl-4 break-words"
                        >
                          {children}
                        </motion.h3>
                      ),
                      p: ({ children }) => (
                        <p
                          className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light tracking-wide break-words"
                          style={{ textAlign: "justify" }}
                        >
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="space-y-4 mb-8 pl-0">{children}</ul>
                      ),
                      li: ({ children }) => (
                        <li className="text-gray-600 text-base md:text-lg leading-relaxed flex items-start bg-white rounded-lg p-3 md:p-4 shadow-sm border-l-3 border-blue-400 hover:shadow-md transition-shadow duration-200 break-words">
                          <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 md:mr-4 mt-1 flex-shrink-0">
                            ✓
                          </span>
                          <span className="font-medium break-words flex-1">
                            {children}
                          </span>
                        </li>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-blue-700 bg-blue-50 px-1 py-0.5 rounded break-words">
                          {children}
                        </strong>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 md:p-6 my-8 rounded-r-lg italic break-words">
                          <div className="text-blue-800 font-medium break-words">
                            {children}
                          </div>
                        </blockquote>
                      ),
                    }}
                  >
                    {department.content}
                  </ReactMarkdown>
                </motion.div>
              </div>

              {/* Infrastructure Photos Column */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
                  className="sticky top-24 h-[calc(100vh-6rem)] flex items-center justify-center"
                >
                  {/* Department Infrastructure heading removed per request */}
                  <motion.div
                    className="flex flex-col gap-4 items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {getDepartmentInfraPhotos(departmentId).map(
                      (photo, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.7,
                            delay: 0.1 + index * 0.15,
                            ease: "easeOut",
                          }}
                          whileHover={{
                            scale: 1.02,
                            y: -2,
                            transition: { duration: 0.2 },
                          }}
                          className="group cursor-pointer mx-auto w-full"
                          onClick={() => {
                            // Create a blurred backdrop modal (no heavy black shade)
                            const modal = document.createElement("div");
                            modal.className =
                              "z-50 flex items-center justify-center p-4 bg-transparent";
                            // Apply inline styles for fixed positioning and backdrop blur
                            modal.style.position = "fixed";
                            modal.style.top = "0";
                            modal.style.left = "0";
                            modal.style.right = "0";
                            modal.style.bottom = "0";
                            modal.style.backdropFilter = "blur(8px)";
                            modal.innerHTML = `
                          <div class="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                            <img src="${photo.src}" alt="" class="max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                          </div>
                        `;
                            // Create a fixed close button positioned under the navbar so it's outside the image
                            const closeBtn = document.createElement("button");
                            closeBtn.setAttribute("aria-label", "Close image");
                            closeBtn.className =
                              "z-[60] text-gray-900 bg-white/90 rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform shadow-xl ring-1 ring-white/70";
                            closeBtn.style.position = "fixed";
                            closeBtn.style.top = "1rem";
                            closeBtn.style.right = "1rem";
                            closeBtn.innerHTML = `
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='w-5 h-5' aria-hidden='true'>
                              <line x1='18' y1='6' x2='6' y2='18' />
                              <line x1='6' y1='6' x2='18' y2='18' />
                            </svg>
                          `;
                            closeBtn.onclick = () => {
                              // remove modal and button
                              modal.remove();
                              closeBtn.remove();
                            };
                            document.body.appendChild(closeBtn);
                            document.body.appendChild(modal);
                            // Close when clicking on backdrop
                            modal.addEventListener("click", (e) => {
                              if (e.target === modal) {
                                modal.remove();
                                closeBtn.remove();
                              }
                            });
                          }}
                        >
                          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 w-full">
                            <div className="aspect-[4/3] w-full">
                              <img
                                src={photo.src}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/95 rounded-full p-4 shadow-lg backdrop-blur-sm">
                                  <svg
                                    className="w-6 h-6 text-gray-800"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section - Enhanced Professional Design */}
        {doctors.length > 0 && (
          <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 right-20 w-40 h-40 border border-blue-300 rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-32 h-32 border border-teal-300 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mb-16"
              >
                {/* Department Specialists Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full mb-6 shadow-lg"
                >
                  <FaUserMd className="text-lg mr-3" />
                  <span className="font-semibold tracking-wide">
                    Department Specialists
                  </span>
                </motion.div>

                <h2 className="text-display-xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                  Our Medical Experts
                </h2>
                <p
                  className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
                  style={{ textAlign: "justify" }}
                >
                  Meet our highly qualified healthcare professionals dedicated
                  to providing exceptional medical care with expertise and
                  compassion
                </p>
              </motion.div>

              {/* Doctors Grid - Using Exact DoctorsPage Design */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
                initial="hidden"
                animate="visible"
              >
                {doctors.map((doctor, index) => {
                  const cols = 4;
                  const staggerIndex = index % cols;

                  return (
                    <motion.div
                      key={doctor.id}
                      initial={{ opacity: 0, y: 40, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1 * staggerIndex,
                        type: "spring",
                        bounce: 0.1,
                      }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/20 cursor-pointer p-4 sm:p-6"
                    >
                      {/* Grid View - Exact DoctorsPage Design */}
                      <div className="relative text-center mb-4">
                        {doctor.image ? (
                          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto">
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="w-full h-full rounded-full object-cover shadow-lg border-4 border-emerald-200 group-hover:border-emerald-300 transition-colors"
                            />
                          </div>
                        ) : (
                          <DefaultDoctorAvatar
                            name={doctor.name}
                            size="large"
                          />
                        )}

                        {/* Special Badges */}
                        {doctor.isFounder && (
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-bold shadow-md ring-1 ring-amber-200">
                            Founder
                          </div>
                        )}

                        {doctor.designation &&
                          /ceo/i.test(doctor.designation) && (
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                              CEO
                            </div>
                          )}
                      </div>

                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                          {doctor.name}
                        </h3>
                        {/* Hide specialty for Internal Medicine (departmentId: 10) as both doctors are Diabetologists */}
                        {departmentId !== 10 && (
                          <p className="text-emerald-600 font-semibold mb-1 text-sm">
                            {doctor.specialty}
                          </p>
                        )}
                        <p className="text-gray-600 text-xs mb-3">
                          {doctor.designation}
                        </p>
                        {doctor.qualification && (
                          <div className="bg-gray-50 rounded-lg p-2 mb-3">
                            <p className="text-gray-700 text-xs font-medium">
                              {doctor.qualification}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* No Doctors Found State */}
              {doctors.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="bg-white rounded-2xl p-12 shadow-lg border border-gray-100">
                    <FaUserMd className="text-6xl text-gray-300 mx-auto mb-6" />
                    <h3 className="text-heading-lg font-semibold text-gray-600 mb-4">
                      No Specialists Available
                    </h3>
                    <p className="text-gray-500">
                      Currently, there are no specialists assigned to this
                      department. Please check back later or contact us for more
                      information.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* Contact CTA Section intentionally removed per request */}

        {/* Department FAQ Section */}
        {departmentFAQs[departmentSlug] &&
          departmentFAQs[departmentSlug].length > 0 && (
            <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center mb-4">
                    <FaQuestionCircle className="text-2xl md:text-3xl text-blue-600 mr-2 md:mr-3" />
                    <h2 className="text-display-lg text-gray-800">
                      Frequently Asked Questions
                    </h2>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg">
                    Common questions about {department.name} at SSS Hospital
                    Erode
                  </p>
                </div>

                <div className="space-y-4">
                  {departmentFAQs[departmentSlug].map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                  ))}
                </div>
              </div>
            </section>
          )}
      </div>

      <Footer />
    </PageWrapper>
  );
};

export default DepartmentPageLayout;
