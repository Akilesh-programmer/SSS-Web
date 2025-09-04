import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaUserMd, FaAward, FaHeart, FaUsers } from "react-icons/fa";
import { useAppointment } from "./contexts/AppointmentContext";
import Navigation from "./Components/ui/Navigation";
import Home from "./Components/pages/Home";
import AboutUs from "./Components/sections/AboutUs";
import VirtualTour from "./Components/sections/VirtualTour";
import Interactions from "./Components/sections/Interactions";
import Service from "./Components/Service";
import MissionVision from "./Components/sections/MissionVision";
import FoundersMessage from "./Components/sections/FoundersMessage";
import AppointmentBooking from "./Components/sections/AppointmentBooking";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/ui/Footer";
import DepartmentPage from "./Components/pages/DepartmentPage";
import DoctorsPage from "./Components/pages/DoctorsPage";
import FloatingAppointmentButton from "./Components/ui/FloatingAppointmentButton";
import FloatingChatbot from "./Components/ui/FloatingChatbot";
import AppointmentPopup from "./Components/ui/AppointmentPopup";
import ScrollToTop from "./Components/ui/ScrollToTop";
import PageWrapper from "./Components/ui/PageWrapper";
import ErrorBoundary from "./Components/ui/ErrorBoundary";

// Streamlined Home Page Component - Only essential content
const HomePage = () => {
  return (
    <PageWrapper pageKey="home-page">
      <Navigation />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <VirtualTour />
      {/* Meet Our Founder Section */}
      <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Founder Image */}
              <div className="lg:w-1/3 relative">
                <img
                  src="https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/refs/heads/dev/src/assets/Sanjith-SSS-Hospitals.jpg"
                  alt="Dr. S. Sanjith - Founder"
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Dr. S. Sanjith</h3>
                  <p className="text-emerald-200">MD (DERM)</p>
                </div>
              </div>

              {/* Founder Info */}
              <div className="lg:w-2/3 p-8">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <FaUserMd className="text-emerald-600 text-2xl" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      Meet Our Founder
                    </h2>
                  </div>

                  <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                    Dr. S. Sanjith, MD (DERM)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Founder & Managing Director | Consultant Dermatologist
                  </p>

                  <blockquote className="text-lg text-gray-700 italic mb-6 border-l-4 border-emerald-500 pl-4">
                    "Behind Every Healing Touch, There's a Doctor Who Cares
                    Beyond the Cure."
                  </blockquote>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Dr. S. Sanjith founded SSS Super Speciality Hospital with a
                    vision to bring world-class healthcare to the heart of
                    Erode. With his expertise in dermatology and commitment to
                    compassionate care, he has established a legacy of medical
                    excellence that continues to serve thousands of patients
                    with advanced technology and expert medical care.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-full">
                      <FaAward className="text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-700">
                        Medical Excellence
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                      <FaHeart className="text-blue-600 heart-pulse-subtle" />
                      <span className="text-sm font-medium text-blue-700">
                        Compassionate Care
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                      <FaUsers className="text-purple-600" />
                      <span className="text-sm font-medium text-purple-700">
                        Community Service
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <AppointmentBooking />
      <div id="contact">
        <Footer />
      </div>
    </PageWrapper>
  );
};

// About Page - Comprehensive about information
const AboutPage = () => {
  return (
    <PageWrapper pageKey="about-page">
      <Navigation />
      <div className="pt-20">
        <AboutUs key="about-us" />
        <VirtualTour key="virtual-tour" />
        <MissionVision key="mission-vision" />
        <FoundersMessage key="founders-message" />
      </div>
      <Footer />
    </PageWrapper>
  );
};

// Services Page - All services and departments
const ServicesPage = () => {
  return (
    <PageWrapper pageKey="services-page">
      <Navigation />
      <div className="pt-20">
        <Service key="service" />
      </div>
      <Footer />
    </PageWrapper>
  );
};

// Doctors Page - All doctors and medical team
const DoctorsPageWrapper = () => {
  return (
    <PageWrapper pageKey="doctors-page">
      <Navigation />
      <DoctorsPage key="doctors-page-content" />
      <Footer />
    </PageWrapper>
  );
};

// Contact Page - Enhanced contact information and appointment booking
const ContactPage = () => {
  return (
    <PageWrapper pageKey="contact-page">
      <Navigation />
      <Contact key="contact-content" />
      <div className="pt-16">
        <AppointmentBooking key="appointment-booking" />
      </div>
      <Footer />
    </PageWrapper>
  );
};

function App() {
  const { isAppointmentOpen, closeAppointment } = useAppointment();

  return (
    <ErrorBoundary>
      <div className="font-primary">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPageWrapper />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/department/:slug" element={<DepartmentPage />} />
        </Routes>
        <FloatingAppointmentButton />
        <FloatingChatbot />

        {/* Global Appointment Popup */}
        <AppointmentPopup
          isOpen={isAppointmentOpen}
          onClose={closeAppointment}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
