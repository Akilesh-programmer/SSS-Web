import { Routes, Route } from "react-router-dom";
import { useAppointment } from "./contexts/AppointmentContext";
import Navigation from "./Components/ui/Navigation";
import Home from "./Components/pages/Home";
import HomeAboutUs from "./Components/sections/HomeAboutUs";
import AboutUs from "./Components/pages/AboutUs";
import VirtualTour from "./Components/sections/VirtualTour";
import PatientTestimonials from "./Components/sections/PatientTestimonials";
import Specialities from "./Components/pages/Specialities";
import FounderSection from "./Components/sections/FounderSection";
import AppointmentBooking from "./Components/sections/AppointmentBooking";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/ui/Footer";
import DoctorsPage from "./Components/pages/DoctorsPage";
import FloatingAppointmentButton from "./Components/ui/FloatingAppointmentButton";
import FloatingChatbot from "./Components/ui/FloatingChatbot";
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
      <VirtualTour />
      <PatientTestimonials />
      <FounderSection />
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
        {/* <MissionVision key="mission-vision" /> */}
        <FounderSection key="founders-message" />
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
          <Route path="/specialities" element={<SpecialitiesPage />} />
          <Route path="/doctors" element={<DoctorsPageWrapper />} />
          <Route path="/contact" element={<ContactPage />} />
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
