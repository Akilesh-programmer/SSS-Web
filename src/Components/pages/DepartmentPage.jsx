import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUserMd,
  FaHospital,
  FaStethoscope,
  FaAward,
  FaMicroscope,
  FaProcedures,
  FaHeartbeat,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaGraduationCap,
} from "react-icons/fa";
import { getDepartmentBySlug } from "../../data/departmentsData";
import Navigation from "../ui/Navigation";
import DoctorPopup from "../ui/DoctorPopup";
import DefaultDoctorAvatar from "../ui/DefaultDoctorAvatar";

const DepartmentPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isDoctorPopupOpen, setIsDoctorPopupOpen] = useState(false);

  const openDoctorPopup = (doctor) => {
    setSelectedDoctor(doctor);
    setIsDoctorPopupOpen(true);
  };

  const closeDoctorPopup = () => {
    setIsDoctorPopupOpen(false);
    setSelectedDoctor(null);
  };

  useEffect(() => {
    const deptData = getDepartmentBySlug(slug);
    if (deptData) {
      setDepartment(deptData);
    } else {
      // Redirect to home if department not found
      navigate("/");
    }
  }, [slug, navigate]);

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">
            Loading department information...
          </p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: <FaHospital /> },
    { id: "doctors", label: "Our Doctors", icon: <FaUserMd /> },
    { id: "services", label: "Services", icon: <FaStethoscope /> },
    { id: "facilities", label: "Facilities", icon: <FaMicroscope /> },
  ];

  const scrollToAppointment = () => {
    navigate("/#appointment");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${department.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-700/60"></div>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <button
                onClick={() => navigate("/")}
                className="mb-6 flex items-center gap-2 text-emerald-200 hover:text-white transition-colors"
              >
                <FaArrowLeft /> Back to Home
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl text-emerald-300">
                  {department.icon}
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-2">
                    {department.name}
                  </h1>
                  <p className="text-xl lg:text-2xl text-emerald-200">
                    {department.shortDescription}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <FaClock className="text-emerald-300" />
                  <span>{department.timings}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <FaMapMarkerAlt className="text-emerald-300" />
                  <span>SSS Hospital, Erode</span>
                </div>
                <button
                  onClick={scrollToAppointment}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <FaCalendarAlt />
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-md sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {/* Department Description */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Our Department
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {department.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center gap-2">
                      <FaHeartbeat className="text-emerald-600" />
                      Common Conditions We Treat
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {department.commonConditions?.map((condition, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg"
                        >
                          <FaCheckCircle className="text-emerald-600 text-sm" />
                          <span className="text-gray-700">{condition}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center gap-2">
                      <FaProcedures className="text-emerald-600" />
                      Key Procedures
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {department.procedures?.map((procedure, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg"
                        >
                          <FaCheckCircle className="text-emerald-600 text-sm" />
                          <span className="text-gray-700">{procedure}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl p-6 text-center">
                  <FaUserMd className="text-4xl mx-auto mb-3" />
                  <div className="text-2xl font-bold">
                    {department.doctors?.length || 0}+
                  </div>
                  <div className="text-emerald-100">Expert Doctors</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center">
                  <FaStethoscope className="text-4xl mx-auto mb-3" />
                  <div className="text-2xl font-bold">
                    {department.keyServices?.length || 0}+
                  </div>
                  <div className="text-blue-100">Key Services</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 text-center">
                  <FaMicroscope className="text-4xl mx-auto mb-3" />
                  <div className="text-2xl font-bold">
                    {department.facilities?.length || 0}+
                  </div>
                  <div className="text-purple-100">Facilities</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-6 text-center">
                  <FaClock className="text-4xl mx-auto mb-3" />
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-orange-100">Available</div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Doctors Tab */}
          {activeTab === "doctors" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Meet Our Expert Doctors
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our team of highly qualified and experienced specialists are
                  dedicated to providing the best possible care for our
                  patients.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {department.doctors?.map((doctor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center">
                        {doctor.image ? (
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-48 md:h-full flex items-center justify-center">
                            <DefaultDoctorAvatar size="large" />
                          </div>
                        )}
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {doctor.name}
                            </h3>
                            <p className="text-emerald-600 font-semibold">
                              {doctor.designation}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-400" />
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <FaGraduationCap className="text-emerald-600" />
                            <span className="text-gray-700">
                              {doctor.qualifications}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaAward className="text-emerald-600" />
                            <span className="text-gray-700">
                              {doctor.experience} Experience
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaStethoscope className="text-emerald-600" />
                            <span className="text-gray-700">
                              {doctor.specialization}
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                          <button
                            onClick={scrollToAppointment}
                            className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
                          >
                            <FaCalendarAlt />
                            Book Appointment
                          </button>
                          <button
                            onClick={() => openDoctorPopup(doctor)}
                            className="border border-emerald-600 text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-2"
                          >
                            <FaUserMd />
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Services Tab */}
          {activeTab === "services" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Services
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We offer comprehensive medical services using state-of-the-art
                  technology and evidence-based treatment protocols.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {department.keyServices?.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow group"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                      <FaCheckCircle className="text-emerald-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Comprehensive care and treatment for{" "}
                      {service.toLowerCase()} with experienced specialists and
                      modern equipment.
                    </p>
                    <button
                      onClick={scrollToAppointment}
                      className="mt-4 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      Learn More →
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Facilities Tab */}
          {activeTab === "facilities" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  World-Class Facilities
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our department is equipped with cutting-edge technology and
                  modern facilities to ensure the highest quality of patient
                  care.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center gap-2">
                    <FaMicroscope className="text-emerald-600" />
                    Advanced Equipment & Technology
                  </h3>
                  <div className="space-y-4">
                    {department.facilities
                      ?.slice(0, Math.ceil(department.facilities.length / 2))
                      .map((facility, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg"
                        >
                          <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-700">{facility}</span>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center gap-2">
                    <FaHospital className="text-emerald-600" />
                    Patient Care Facilities
                  </h3>
                  <div className="space-y-4">
                    {department.facilities
                      ?.slice(Math.ceil(department.facilities.length / 2))
                      .map((facility, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg"
                        >
                          <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                          <span className="text-gray-700">{facility}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl p-8 text-white">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Get Started?
                  </h3>
                  <p className="text-emerald-100">
                    Contact our {department.name} department for appointments
                    and consultations
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <FaPhone className="text-3xl mb-3" />
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-emerald-100">+91 98765 43210</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaEnvelope className="text-3xl mb-3" />
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-emerald-100">info@ssshospital.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaCalendarAlt className="text-3xl mb-3" />
                    <h4 className="font-semibold mb-1">Book Online</h4>
                    <button
                      onClick={scrollToAppointment}
                      className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                    >
                      Schedule Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Doctor Popup */}
      <DoctorPopup
        isOpen={isDoctorPopupOpen}
        onClose={closeDoctorPopup}
        doctor={selectedDoctor}
      />
    </div>
  );
};

export default DepartmentPage;
