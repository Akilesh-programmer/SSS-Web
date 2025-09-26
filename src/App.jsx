import { Routes, Route } from "react-router-dom";
import { useAppointment } from "./contexts/AppointmentContext";
import Navigation from "./Components/ui/Navigation";
import Home from "./Components/pages/Home";
import HomeAboutUs from "./Components/sections/HomeAboutUs";
import AboutUs from "./Components/pages/AboutUs";
import VirtualTour from "./Components/sections/VirtualTour";
import PatientTestimonials from "./Components/sections/PatientTestimonials";
import Specialities from "./Components/pages/Specialities";
import Services from "./Components/pages/Services";
import Packages from "./Components/pages/Packages";
import Gallery from "./Components/pages/Gallery";
import FounderSection from "./Components/sections/FounderSection";
import AppointmentBooking from "./Components/sections/AppointmentBooking";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/ui/Footer";
import DoctorsPage from "./Components/pages/DoctorsPage";
import DepartmentPageLayout from "./Components/pages/departments/DepartmentPageLayout";
import FloatingAppointmentButton from "./Components/ui/FloatingAppointmentButton";
import FloatingChatbot from "./Components/ui/FloatingChatbot";
import ScrollToTopButton from "./Components/ui/ScrollToTopButton";
import AppointmentPopup from "./Components/ui/AppointmentPopup";
import ScrollToTop from "./Components/ui/ScrollToTop";
import PageWrapper from "./Components/ui/PageWrapper";
import ErrorBoundary from "./Components/ui/ErrorBoundary";

const HomePage = () => {
  return (
    <PageWrapper pageKey="home-page">
      <Navigation />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <HomeAboutUs />
      </div>
      <FounderSection />
      <VirtualTour />
      <PatientTestimonials />
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
      </div>
      <Footer />
    </PageWrapper>
  );
};

// Specialities Page - All specialities and departments
const SpecialitiesPage = () => {
  return (
    <PageWrapper pageKey="specialities-page">
      <Navigation />
      <div className="pt-20">
        <Specialities key="specialities" />
      </div>
      <Footer />
    </PageWrapper>
  );
};

// Services Page - All medical services
const ServicesPage = () => {
  return (
    <PageWrapper pageKey="services-page">
      <Navigation />
      <div className="pt-20">
        <Services key="services" />
      </div>
      <Footer />
    </PageWrapper>
  );
};

// Packages Page - Health checkup packages
const PackagesPage = () => {
  return (
    <PageWrapper pageKey="packages-page">
      <Navigation />
      <div className="pt-20">
        <Packages key="packages" />
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
          <Route path="/specialities" element={<SpecialitiesPage />} />
          <Route
            path="/department/:departmentSlug"
            element={<DepartmentPageLayout />}
          />
          <Route path="/infrastructure" element={<ServicesPage />} />
          <Route
            path="/gallery"
            element={
              <PageWrapper pageKey="gallery-page">
                <Navigation />
                <div className="pt-20">
                  <Gallery />
                </div>
                <Footer />
              </PageWrapper>
            }
          />
          <Route path="/doctors" element={<DoctorsPageWrapper />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FloatingAppointmentButton />
        <FloatingChatbot />
        <ScrollToTopButton />

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
