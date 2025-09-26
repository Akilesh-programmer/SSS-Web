import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserMd,
  FaSearch,
  FaTimes,
  FaGraduationCap,
  FaFilter,
  FaStethoscope,
} from "react-icons/fa";
import { FaSort, FaFilterCircleXmark } from "react-icons/fa6";
import { departments, doctors } from "../../data/DoctorDepartmentData";

import { raw } from "../../data/imageUrls";

// BG Photos array for hero backgrounds
const bgPhotos = [
  raw("BG_Photos/DSC03391.JPG"),
  raw("BG_Photos/DSC03392.JPG"),
  raw("BG_Photos/IMG-20250923-WA0015.jpg"),
  raw("BG_Photos/IMG-20250923-WA0029.jpg"),
];

// Function to get hero background image (using third image for DoctorsPage)
const getHeroBgImage = () => {
  return bgPhotos[2]; // Use third image for DoctorsPage
};

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  // 'default' preserves the original doctors array order from the data source
  const [sortBy, setSortBy] = useState("default"); // default, name, specialty, experience
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  // ...existing code...
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Debounce search term for performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Generate search suggestions
  const generateSuggestions = useCallback((term) => {
    if (!term || term.length < 2) return [];

    const suggestions = new Set();
    const lowerTerm = term.toLowerCase();

    doctors.forEach((doctor) => {
      // Add name suggestions
      if (doctor.name.toLowerCase().includes(lowerTerm)) {
        suggestions.add(doctor.name);
      }

      // Add specialty suggestions
      if (doctor.specialty.toLowerCase().includes(lowerTerm)) {
        suggestions.add(doctor.specialty);
      }

      // Add qualification keywords
      const qualWords = doctor.qualification.split(/[,\s]+/);
      qualWords.forEach((word) => {
        if (word.toLowerCase().includes(lowerTerm) && word.length > 2) {
          suggestions.add(word);
        }
      });
    });

    return Array.from(suggestions).slice(0, 6);
  }, []);

  // Update suggestions when search term changes
  useEffect(() => {
    const suggestions = generateSuggestions(searchTerm);
    setSearchSuggestions(suggestions);
    setShowSuggestions(searchTerm.length >= 2 && suggestions.length > 0);
  }, [searchTerm, generateSuggestions]);

  // Handle page navigation and animation resets
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowSuggestions(false);

    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Advanced search function with fuzzy matching
  const searchDoctors = useCallback((doctors, searchTerm) => {
    if (!searchTerm) return doctors;

    const terms = searchTerm
      .toLowerCase()
      .split(/\s+/)
      .filter((term) => term.length > 0);

    return doctors.filter((doctor) => {
      // Create searchable text from all relevant fields
      const searchableText = `
        ${doctor.name} 
        ${doctor.specialty} 
        ${doctor.designation} 
        ${doctor.qualification}
      `.toLowerCase();

      // Check if all search terms are found (AND logic)
      return terms.every((term) => {
        // Exact match
        if (searchableText.includes(term)) return true;

        // Fuzzy matching for typos (simple Levenshtein-like)
        const words = searchableText.split(/\s+/);
        return words.some((word) => {
          if (word.length < 3) return false;
          // Allow 1 character difference for words > 3 chars
          let differences = 0;
          const minLength = Math.min(word.length, term.length);
          for (let i = 0; i < minLength; i++) {
            if (word[i] !== term[i]) differences++;
            if (differences > 1) return false;
          }
          return differences <= 1 && Math.abs(word.length - term.length) <= 1;
        });
      });
    });
  }, []);

  // Compute department counts with selected state
  const deptCounts = useMemo(() => {
    const availableDoctors = searchDoctors(doctors, debouncedSearchTerm);

    return departments.map((d) => ({
      ...d,
      count:
        d.id === 1
          ? availableDoctors.length
          : availableDoctors.filter((doctor) =>
              Array.isArray(doctor.department)
                ? doctor.department.includes(d.id)
                : doctor.department === d.id
            ).length,
      isSelected: selectedDepartments.includes(d.id),
    }));
  }, [doctors, debouncedSearchTerm, selectedDepartments, searchDoctors]);

  // Filter and sort doctors (memoized for performance)
  const filteredAndSortedDoctors = useMemo(() => {
    let filtered = searchDoctors(doctors, debouncedSearchTerm);

    // Apply department filters
    if (selectedDepartments.length > 0 && !selectedDepartments.includes(1)) {
      filtered = filtered.filter((doctor) => {
        const doctorDepts = Array.isArray(doctor.department)
          ? doctor.department
          : [doctor.department];
        return selectedDepartments.some((deptId) =>
          doctorDepts.includes(deptId)
        );
      });
    }

    // If user wants default, preserve original data order from `doctors`.
    if (sortBy === "default") return filtered;

    // Sort results when a specific order is chosen.
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "specialty":
          return a.specialty.localeCompare(b.specialty);
        default:
          return 0;
      }
    });
  }, [
    doctors,
    debouncedSearchTerm,
    selectedDepartments,
    sortBy,
    searchDoctors,
  ]);

  // Handle department selection
  const toggleDepartment = useCallback((deptId) => {
    setSelectedDepartments((prev) => {
      if (deptId === 1) {
        // "All Specialists" - clear all selections
        return [];
      }

      if (prev.includes(deptId)) {
        return prev.filter((id) => id !== deptId);
      } else {
        return [...prev.filter((id) => id !== 1), deptId]; // Remove "All" if adding specific dept
      }
    });
  }, []);

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setSearchTerm("");
    setDebouncedSearchTerm("");
    setSelectedDepartments([]);
    setSortBy("default");
    setShowSuggestions(false);
  }, []);

  // Handle doctor card click
  const handleDoctorClick = useCallback((doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDoctor(null), 300);
  }, []);

  const DefaultDoctorAvatar = ({ name, size = "large" }) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);
    const sizeClasses =
      size === "large" ? "w-32 h-32 text-3xl" : "w-16 h-16 text-lg";

    return (
      <div
        className={`${sizeClasses} bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
      >
        {initials}
      </div>
    );
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    // visible is a function so we can use the motion `custom` prop to stagger within a row
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
        delay: i * 0.25,
      },
    }),
  };

  // Doctor detail modal removed per request - cards no longer open a popup

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
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
          {/* Medical Specialists Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"
          >
            <FaUserMd className="text-base md:text-xl mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
              Medical Specialists
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Our Medical Team
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            Meet Our {doctors.length} Healthcare Professionals Dedicated to
            Excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-br from-white to-emerald-50/30 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-emerald-300 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-teal-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Enhanced Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 lg:mb-8 bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl border border-white/20 p-4 sm:p-6 lg:p-8"
          >
            {/* Advanced Search Bar with Suggestions */}
            <div className="relative mb-6 lg:mb-8">
              <div className="relative">
                <FaSearch className="absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 text-emerald-500 text-base lg:text-lg z-10" />
                <input
                  type="text"
                  placeholder="Search doctors by name, specialty, qualification, or medical condition..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() =>
                    setShowSuggestions(
                      searchTerm.length >= 2 && searchSuggestions.length > 0
                    )
                  }
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 200)
                  }
                  className="w-full pl-12 lg:pl-16 pr-12 lg:pr-6 py-4 lg:py-5 border-2 border-emerald-200 rounded-xl lg:rounded-2xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 transition-all duration-300 outline-none text-gray-700 text-sm lg:text-lg bg-white/90 placeholder-gray-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setShowSuggestions(false);
                    }}
                    className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors z-10"
                  >
                    <FaTimes className="text-base lg:text-lg" />
                  </button>
                )}
              </div>

              {/* Search Suggestions Dropdown */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-emerald-200 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto"
                  >
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSearchTerm(suggestion);
                          setShowSuggestions(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-emerald-50 transition-colors border-b border-emerald-50 last:border-b-0 flex items-center gap-3"
                      >
                        <FaSearch className="text-emerald-400 text-sm" />
                        <span className="text-gray-700">{suggestion}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Filter Controls Row */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-6 mb-6">
              {/* Results Summary */}
              <div className="flex items-center gap-4">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-700">
                  Medical Specialists
                </h3>
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  {filteredAndSortedDoctors.length} of {doctors.length} doctors
                </div>
              </div>

              {/* Sort and Filter Controls */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                {/* Sort Dropdown */}
                <div className="relative flex-1 lg:flex-none">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all cursor-pointer min-w-[140px]"
                  >
                    <option value="default">Default</option>
                    <option value="name">Sort by Name</option>
                    <option value="specialty">Sort by Specialty</option>
                  </select>
                  <FaSort className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>

                {/* Advanced Filters Toggle */}
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-medium text-sm ${
                    showAdvancedFilters || selectedDepartments.length > 0
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-emerald-50"
                  }`}
                >
                  <FaFilter className="text-sm" />
                  <span className="hidden sm:inline">Filters</span>
                  {selectedDepartments.length > 0 && (
                    <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                      {selectedDepartments.length}
                    </span>
                  )}
                </button>

                {/* Clear Filters */}
                {(searchTerm || selectedDepartments.length > 0) && (
                  <button
                    onClick={clearAllFilters}
                    className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-medium text-sm"
                  >
                    <FaFilterCircleXmark className="text-sm" />
                    <span className="hidden sm:inline">Clear</span>
                  </button>
                )}
              </div>
            </div>

            {/* Advanced Department Filters */}
            <AnimatePresence>
              {showAdvancedFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-md font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <FaStethoscope className="text-emerald-500" />
                      Medical Departments
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                      {deptCounts
                        .filter((dept) => dept.count > 0)
                        .map((dept) => (
                          <button
                            key={dept.id}
                            onClick={() => toggleDepartment(dept.id)}
                            className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all text-left ${
                              dept.isSelected
                                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50"
                            }`}
                          >
                            <span className="font-medium text-sm">
                              {dept.name}
                            </span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                dept.isSelected
                                  ? "bg-emerald-200 text-emerald-800"
                                  : "bg-gray-200 text-gray-600"
                              }`}
                            >
                              {dept.count}
                            </span>
                          </button>
                        ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Active Filters Summary */}
            {(selectedDepartments.length > 0 || searchTerm) && (
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex flex-wrap gap-2">
                  {selectedDepartments.map((deptId) => {
                    const dept = departments.find((d) => d.id === deptId);
                    return dept ? (
                      <motion.div
                        key={deptId}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        <span>{dept.name}</span>
                        <button
                          onClick={() => toggleDepartment(deptId)}
                          className="ml-2 hover:text-emerald-900 transition-colors"
                        >
                          <FaTimes className="text-xs" />
                        </button>
                      </motion.div>
                    ) : null;
                  })}

                  {searchTerm && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      <FaSearch className="mr-1 text-xs" />
                      <span>"{searchTerm}"</span>
                      <button
                        onClick={() => setSearchTerm("")}
                        className="ml-2 hover:text-teal-900 transition-colors"
                      >
                        <FaTimes className="text-xs" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Doctors Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDepartments.join(
                "-"
              )}-${debouncedSearchTerm}-${sortBy}`}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
            >
              {filteredAndSortedDoctors.length > 0 ? (
                filteredAndSortedDoctors.map((doctor, index) => {
                  const cols = 4;
                  const staggerIndex = index % cols;

                  return (
                    <motion.div
                      key={doctor.id}
                      variants={cardVariant}
                      initial="hidden"
                      animate="visible"
                      custom={staggerIndex}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white/95 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/20 cursor-pointer p-4 sm:p-6"
                      onClick={() => handleDoctorClick(doctor)}
                    >
                      {/* Grid View */}
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
                        <p className="text-emerald-600 font-semibold mb-1 text-sm">
                          {doctor.specialty}
                        </p>
                        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                          {doctor.designation}
                        </p>

                        <div className="space-y-1 mb-4">
                          {doctor.qualification && (
                            <div className="bg-gray-50 rounded-lg p-2 mb-3">
                              <p className="text-gray-700 text-xs font-medium text-center">
                                {doctor.qualification.length > 50
                                  ? `${doctor.qualification.substring(
                                      0,
                                      50
                                    )}...`
                                  : doctor.qualification}
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Quick Action Button removed per request */}
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="col-span-full text-center py-16"
                >
                  <div className="text-6xl text-emerald-300 mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No doctors found
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your search criteria or department filters.
                  </p>
                  {(selectedDepartments.length > 0 || searchTerm) && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={clearAllFilters}
                      className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                    >
                      Clear All Filters
                    </motion.button>
                  )}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Doctor Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 p-6 sm:p-8 rounded-t-3xl">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaTimes className="text-lg" />
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {selectedDoctor.image ? (
                    <div className="w-24 h-24 sm:w-32 sm:h-32">
                      <img
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-lg"
                      />
                    </div>
                  ) : (
                    <DefaultDoctorAvatar
                      name={selectedDoctor.name}
                      size="large"
                    />
                  )}

                  <div className="text-center sm:text-left flex-1">
                    <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
                      <h2 className="text-2xl sm:text-3xl font-bold">
                        {selectedDoctor.name}
                      </h2>
                      {selectedDoctor.isFounder && (
                        <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full font-bold ring-1 ring-amber-200">
                          Founder
                        </span>
                      )}
                      {selectedDoctor.designation &&
                        /ceo/i.test(selectedDoctor.designation) && (
                          <span className="bg-purple-400 text-purple-900 text-xs px-3 py-1 rounded-full font-bold">
                            CEO
                          </span>
                        )}
                    </div>
                    <p className="text-emerald-700 font-semibold text-lg mb-1">
                      {selectedDoctor.specialty}
                    </p>
                    <p className="text-emerald-700/80 text-sm">
                      {selectedDoctor.designation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Qualifications Section */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <FaGraduationCap className="text-white text-lg" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Qualifications
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedDoctor.qualification}
                  </p>
                </div>

                {/* Experience & Specialty Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <FaStethoscope className="text-white text-lg" />
                      </div>
                      <h4 className="font-bold text-gray-800">Specialty</h4>
                    </div>
                    <p className="text-gray-700 font-semibold">
                      {selectedDoctor.specialty}
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <FaUserMd className="text-white text-lg" />
                      </div>
                      <h4 className="font-bold text-gray-800">Department</h4>
                    </div>
                    <p className="text-gray-700 font-semibold">
                      {Array.isArray(selectedDoctor.department)
                        ? selectedDoctor.department
                            .map(
                              (deptId) =>
                                departments.find((d) => d.id === deptId)?.name
                            )
                            .filter(Boolean)
                            .join(", ")
                        : departments.find(
                            (d) => d.id === selectedDoctor.department
                          )?.name || "General Medicine"}
                    </p>
                  </div>
                </div>

                {/* Removed action buttons and hospital info per request */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoctorsPage;
