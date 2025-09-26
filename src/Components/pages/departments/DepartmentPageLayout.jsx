import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserMd, FaImages, FaExpand, FaGraduationCap } from "react-icons/fa";
import Navigation from "../../ui/Navigation";
import Footer from "../../ui/Footer";
import PageWrapper from "../../ui/PageWrapper";
import DefaultDoctorAvatar from "../../ui/DefaultDoctorAvatar";
import departmentPageData from "../../../data/departmentPageData";
import {
  departments,
  doctors as doctorsData,
} from "../../../data/DoctorDepartmentData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { raw } from "../../../data/imageUrls";

// BG Photos array for hero backgrounds (alternating)
const bgPhotos = [
  raw("BG_Photos/DSC03391.JPG"),
  raw("BG_Photos/DSC03392.JPG"),
  raw("BG_Photos/IMG-20250923-WA0015.jpg"),
  raw("BG_Photos/IMG-20250923-WA0029.jpg"),
];

// Function to get hero background image for department
const getHeroBgImage = (departmentId) => {
  if (!departmentId) return bgPhotos[0];
  return bgPhotos[(departmentId - 1) % bgPhotos.length];
};

// Infrastructure photos for content integration
const infrastructurePhotos = [
  { src: raw("Infrastructure_Photos/DSC03356.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03360.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03365.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03386.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03388.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03412.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03426.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03427.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03428.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03434.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/DSC03435.JPG"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0016.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0018.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0019.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0020.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0023.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0026.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0027.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0028.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0030.jpg"), alt: "" },
  { src: raw("Infrastructure_Photos/IMG-20250923-WA0032.jpg"), alt: "" },
];

// Function to get infrastructure photos for each department (different sets)
const getDepartmentInfraPhotos = (departmentId) => {
  if (!departmentId) return [];
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

// Function to find department ID from slug
const findDepartmentIdBySlug = (slug) => {
  const department = departments.find((dept) => createSlug(dept.name) === slug);
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            Hospital Infrastructure
          </h2>
        </div>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-4 md:px-0">
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

const DepartmentPageLayout = () => {
  const { departmentSlug } = useParams();
  const navigate = useNavigate();
  // Compute departmentId from slug at component scope so it's available during render
  const departmentId = findDepartmentIdBySlug(departmentSlug);
  const [department, setDepartment] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDepartmentData = () => {
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

      setDoctors(departmentDoctors);
      setIsLoading(false);
    };

    loadDepartmentData();
  }, [departmentSlug, navigate]);

  const handleBackClick = () => {
    navigate("/specialities");
  };

  // No inline appointment or call CTAs per request

  if (isLoading) {
    return (
      <PageWrapper pageKey="department-loading">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              Loading department information...
            </p>
          </div>
        </div>
      </PageWrapper>
    );
  }

  if (!department) {
    return (
      <PageWrapper pageKey="department-not-found">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
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
      <Navigation />

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
            backgroundImage: `url(${getHeroBgImage(departmentId)})`,
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Department Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"
          >
            <FaUserMd className="text-base md:text-xl mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
              Medical Department
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              {department.name}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            Expert Care, Advanced Technology, Compassionate Service
          </motion.p>
        </div>
      </motion.section>

      {/* Department Content - Enhanced Medical Professional Design with Infrastructure Photos */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50/30 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-blue-300 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-teal-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.4, ease: "easeOut" }}
                className="markdown-content prose prose-xl max-w-none"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children }) => (
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 mt-16 first:mt-0 border-l-4 border-blue-600 pl-6 bg-gradient-to-r from-blue-50 to-transparent py-4 -ml-6"
                      >
                        {children}
                      </motion.h2>
                    ),
                    h3: ({ children }) => (
                      <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 mt-12 border-l-2 border-teal-500 pl-4"
                      >
                        {children}
                      </motion.h3>
                    ),
                    p: ({ children }) => (
                      <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light tracking-wide">
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul className="space-y-4 mb-8 pl-0">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-600 text-lg leading-relaxed flex items-start bg-white rounded-lg p-4 shadow-sm border-l-3 border-blue-400 hover:shadow-md transition-shadow duration-200">
                        <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-4 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span className="font-medium">{children}</span>
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-blue-700 bg-blue-50 px-1 py-0.5 rounded">
                        {children}
                      </strong>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-6 my-8 rounded-r-lg italic">
                        <div className="text-blue-800 font-medium">
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
                className="sticky top-24"
              >
                {/* Department Infrastructure heading removed per request */}
                <motion.div
                  className="grid grid-cols-1 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {getDepartmentInfraPhotos(departmentId).map(
                    (photo, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.7,
                          delay: 1.0 + index * 0.15,
                          ease: "easeOut",
                        }}
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          transition: { duration: 0.2 },
                        }}
                        className="group cursor-pointer"
                        onClick={() => {
                          // Create a blurred backdrop modal (no heavy black shade)
                          const modal = document.createElement("div");
                          modal.className =
                            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-transparent";
                          // Apply backdrop blur inline for broader compatibility
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
                            "fixed top-4 right-4 z-[60] text-gray-900 bg-white/90 rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform shadow-xl ring-1 ring-white/70";
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
                            if (e.target === modal) modal.remove();
                          });
                        }}
                      >
                        <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                          <img
                            src={photo.src}
                            alt=""
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-white/90 rounded-full p-3">
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

              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Our Medical Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                Meet our highly qualified healthcare professionals dedicated to
                providing exceptional medical care with expertise and compassion
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
                        <DefaultDoctorAvatar name={doctor.name} size="large" />
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
                      <p className="text-emerald-600 font-semibold mb-1 text-sm">
                        {doctor.specialty}
                      </p>
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
                  <h3 className="text-2xl font-semibold text-gray-600 mb-4">
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

      <Footer />
    </PageWrapper>
  );
};

export default DepartmentPageLayout;
