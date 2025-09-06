import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserMd,
  FaSearch,
  FaTimes,
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaFilter,
  FaThList,
  FaThLarge,
  FaChevronDown,
  FaInfoCircle,
} from "react-icons/fa";
import { departments, doctors } from "../../data/doctorsData";

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Specialists");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

  // Handle page navigation and animation resets
  useEffect(() => {
    // Scroll to top when navigating to this page
    window.scrollTo(0, 0);

    // Reset any animation states
    setSelectedDoctor(null);
    setShowDepartmentDropdown(false);

    // Add a small delay to ensure proper animation triggers
    const timer = setTimeout(() => {
      // Trigger re-render for viewport animations
      window.dispatchEvent(new Event("resize"));
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  // Compute department counts without mutating imported data
  const deptCounts = useMemo(() => {
    return departments.map((d) => ({
      ...d,
      count:
        d.id === "all"
          ? doctors.length
          : doctors.filter((doctor) => doctor.department == d.id).length,
    }));
  }, [doctors]);

  // Memoize selected department lookup
  const selectedDept = useMemo(() => {
    return deptCounts.find((d) => d.name === selectedDepartment);
  }, [deptCounts, selectedDepartment]);

  // Filter doctors based on selected department and search term (memoized)
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      // Determine department match by resolving selected department name to id
      let matchesDepartment = true;
      if (selectedDepartment !== "All Specialists") {
        const dept = departments.find((d) => d.name === selectedDepartment);
        matchesDepartment = !!dept ? doctor.department == dept.id : false;
      }
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.qualification.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesDepartment && matchesSearch;
    });
  }, [doctors, selectedDepartment, searchTerm]);

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
    hidden: { opacity: 0, y: 18, scale: 0.995 },
    // visible is a function so we can use the motion `custom` prop to stagger within a row
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.15 },
    }),
  };

  const DoctorModal = ({ doctor, onClose }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FaTimes className="text-gray-600" />
              </button>

              <div className="text-center mb-6">
                {doctor.image ? (
                  <div className="w-32 h-32 mx-auto">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full rounded-full object-cover shadow-lg border-4 border-emerald-200"
                    />
                  </div>
                ) : (
                  <DefaultDoctorAvatar name={doctor.name} size="large" />
                )}
                <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                  {doctor.name}
                </h2>
                <p className="text-emerald-600 font-semibold text-lg">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600">{doctor.designation}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaGraduationCap className="mr-3 text-emerald-500" />
                  <span>{doctor.qualification}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 pt-16 lg:pt-20">
      {/* Header Section with proper spacing from navbar */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 lg:mb-6 gap-4">
              <div className="p-3 lg:p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
                <FaUserMd className="text-3xl lg:text-4xl text-emerald-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent text-center sm:text-left">
                Our Medical Specialists
              </h1>
            </div>
            <p className="text-base lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4 lg:px-0">
              Meet our exceptional team of {doctors.length} healthcare
              professionals dedicated to providing world-class medical care with
              expertise, compassion, and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Enhanced Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 lg:mb-8 bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-xl border border-white/20 p-4 sm:p-6 lg:p-8"
        >
          {/* Search Bar */}
          <div className="relative mb-6 lg:mb-8">
            <FaSearch className="absolute left-4 lg:left-6 top-1/2 transform -translate-y-1/2 text-emerald-400 text-base lg:text-lg" />
            <input
              type="text"
              placeholder="Search by name, specialty, or qualification..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 lg:pl-16 pr-12 lg:pr-6 py-3 lg:py-4 border-2 border-emerald-100 rounded-xl lg:rounded-2xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-300 outline-none text-gray-700 text-sm lg:text-lg bg-white/70"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 lg:right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <FaTimes className="text-base lg:text-lg" />
              </button>
            )}
          </div>

          {/* Department Filter - Modern Dropdown Style */}
          <div className="mb-4 lg:mb-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
              <h3 className="text-lg lg:text-xl font-semibold text-gray-700">
                Filter by Medical Department
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <span className="text-xs lg:text-sm text-gray-500">
                  Showing {filteredDoctors.length} of {doctors.length} doctors
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-gray-100 text-gray-600 hover:bg-emerald-50"
                    }`}
                  >
                    <FaThLarge />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-gray-100 text-gray-600 hover:bg-emerald-50"
                    }`}
                  >
                    <FaThList />
                  </button>
                </div>
              </div>
            </div>

            {/* Department Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setShowDepartmentDropdown(!showDepartmentDropdown)
                }
                className="w-full md:w-auto bg-white border-2 border-emerald-200 rounded-2xl px-6 py-3 flex items-center justify-between min-w-[300px] hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-center">
                  {selectedDept?.icon && (
                    <selectedDept.icon className="mr-3 text-emerald-600" />
                  )}
                  <span className="font-medium">{selectedDepartment}</span>
                  <span className="ml-2 text-sm text-gray-500">
                    ({selectedDept?.count || 0})
                  </span>
                </div>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    showDepartmentDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showDepartmentDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-emerald-200 rounded-2xl shadow-xl z-50 max-h-96 overflow-y-auto"
                  >
                    {deptCounts.map((dept) => {
                      const IconComponent = dept.icon;
                      return (
                        <button
                          key={dept.id}
                          onClick={() => {
                            setSelectedDepartment(dept.name);
                            setShowDepartmentDropdown(false);
                          }}
                          className={`w-full px-6 py-3 flex items-center justify-between hover:bg-emerald-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl ${
                            selectedDepartment === dept.name
                              ? "bg-emerald-50 text-emerald-700"
                              : ""
                          }`}
                        >
                          <div className="flex items-center">
                            {IconComponent && (
                              <IconComponent className="mr-3 text-emerald-600" />
                            )}
                            <span className="font-medium">{dept.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">
                            ({dept.count})
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedDepartment !== "All Specialists" || searchTerm) && (
            <div className="flex flex-wrap gap-3">
              {selectedDepartment !== "All Specialists" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <FaFilter className="mr-2 text-xs" />
                  <span>Department: {selectedDepartment}</span>
                  <button
                    onClick={() => setSelectedDepartment("All Specialists")}
                    className="ml-3 hover:text-emerald-900 transition-colors"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </motion.div>
              )}
              {searchTerm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <FaSearch className="mr-2 text-xs" />
                  <span>Search: "{searchTerm}"</span>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-3 hover:text-teal-900 transition-colors"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>

        {/* Doctors Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedDepartment}-${searchTerm}-${viewMode}`}
            // no container-level whileInView: cards animate individually when they enter viewport
            exit={{ opacity: 0, y: -20 }}
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
                : "space-y-4"
            }
          >
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor, index) => {
                // compute a small per-card stagger index relative to its column position so
                // cards in the same row animate close together. For grid with upto 4 cols.
                const cols = viewMode === "grid" ? 4 : 1;
                const staggerIndex = index % cols;

                return (
                  <motion.div
                    key={doctor.id}
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={staggerIndex}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/20 ${
                      viewMode === "list"
                        ? "flex items-center p-4 sm:p-6"
                        : "p-4 sm:p-6"
                    }`}
                  >
                    {viewMode === "grid" ? (
                      <>
                        {/* Grid View */}
                        <div className="relative text-center mb-4">
                          {doctor.image ? (
                            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full rounded-full object-cover shadow-lg border-4 border-emerald-200"
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
                            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                              Founder
                            </div>
                          )}

                          {/* department tag removed - specialty shown below in the card */}
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
                            <div className="flex items-center justify-center text-gray-500 text-xs">
                              <FaGraduationCap className="mr-2 text-emerald-500" />
                              {doctor.qualification}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* List View */}
                        <div className="flex items-center mr-6">
                          {doctor.image ? (
                            <div className="w-16 h-16">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-emerald-200"
                              />
                            </div>
                          ) : (
                            <DefaultDoctorAvatar
                              name={doctor.name}
                              size="small"
                            />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                              {doctor.name}
                            </h3>
                            <div className="flex items-center gap-2">
                              {doctor.isFounder && (
                                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                  Founder
                                </span>
                              )}
                            </div>
                          </div>

                          <p className="text-emerald-600 font-semibold mb-1">
                            {doctor.specialty}
                          </p>
                          <p className="text-gray-600 text-sm mb-3">
                            {doctor.designation}
                          </p>

                          <div className="text-sm">
                            <div className="flex items-center text-gray-500">
                              <FaGraduationCap className="mr-2 text-emerald-500" />
                              {doctor.qualification}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
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
                  Try adjusting your search criteria or department filter.
                </p>
                {(selectedDepartment !== "All Specialists" || searchTerm) && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedDepartment("All Specialists");
                      setSearchTerm("");
                    }}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                  >
                    Clear All Filters
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100 rounded-3xl p-8 border border-emerald-200/50 shadow-xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
              Our Medical Excellence
            </h2>
            <p className="text-gray-600">
              Committed to providing the highest standard of healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-emerald-200/30">
              <div className="text-3xl font-bold text-emerald-700">
                {doctors.length}+
              </div>
              <div className="text-gray-600 font-medium">Expert Doctors</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-emerald-200/30">
              <div className="text-3xl font-bold text-emerald-700">
                {deptCounts.length - 1}+
              </div>
              <div className="text-gray-600 font-medium">Specialties</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-emerald-200/30">
              <div className="text-3xl font-bold text-emerald-700">24/7</div>
              <div className="text-gray-600 font-medium">Emergency Care</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-emerald-200/30">
              <div className="text-3xl font-bold text-emerald-700">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <DoctorModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

export default DoctorsPage;
