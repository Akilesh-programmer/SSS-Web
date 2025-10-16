/* eslint-disable react/jsx-pascal-case */
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
import Rooms from "./Components/pages/Rooms";
import FounderSection from "./Components/sections/FounderSection";
import AppointmentBooking from "./Components/sections/AppointmentBooking";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/ui/Footer";
import DoctorsPage from "./Components/pages/DoctorsPage";
import DepartmentPageLayout from "./Components/pages/departments/DepartmentPageLayout";
import FloatingAppointmentButton from "./Components/ui/FloatingAppointmentButton";
// FloatingChatbot removed per UX update: appointment button moved to bottom-left
import ScrollToTopButton from "./Components/ui/ScrollToTopButton";
import AppointmentPopup from "./Components/ui/AppointmentPopup";
import ScrollToTop from "./Components/ui/ScrollToTop";
import PageWrapper from "./Components/ui/PageWrapper";
import ErrorBoundary from "./Components/ui/ErrorBoundary";
import SEO from "./Components/ui/SEO";
import { PAGE_SEO } from "./data/seoData";
import NotFound from "./Components/pages/NotFound";
import { generateAppointmentSchema } from "./utils/seo";

const HomePage = () => {
  return (
    <PageWrapper pageKey="home-page">
      <SEO {...PAGE_SEO.home} />
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
      <SEO
        {...PAGE_SEO.about}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
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
      <SEO
        {...PAGE_SEO.specialities}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Specialities", url: "/specialities" },
        ]}
      />
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
      <SEO
        {...PAGE_SEO.services}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
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
      <SEO
        {...PAGE_SEO.packages}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" },
        ]}
      />
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
      <SEO
        {...PAGE_SEO.doctors}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Doctors", url: "/doctors" },
        ]}
      />
      <Navigation />
      <div className="pt-20">
        <DoctorsPage key="doctors-page-content" />
      </div>
      <Footer />
    </PageWrapper>
  );
};

// Contact Page - Enhanced contact information and appointment booking
const ContactPage = () => {
  return (
    <PageWrapper pageKey="contact-page">
      <SEO
        {...PAGE_SEO.contact}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
        schema={generateAppointmentSchema()}
      />
      <Navigation />
      <div className="pt-20">
        <Contact key="contact-content" />
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
          {/* Preferred route, matches sitemap URLs */}
          <Route
            path="/specialities/:departmentSlug"
            element={<DepartmentPageLayout />}
          />
          {/* Backward-compat for older links */}
          <Route
            path="/department/:departmentSlug"
            element={<DepartmentPageLayout />}
          />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/infrastructure"
            element={
              <PageWrapper pageKey="gallery-page">
                <SEO
                  {...PAGE_SEO.infrastructure}
                  breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "Infrastructure", url: "/infrastructure" },
                  ]}
                />
                <Navigation />
                <div className="pt-20">
                  <Gallery />
                </div>
                <Footer />
              </PageWrapper>
            }
          />
          <Route
            path="/rooms"
            element={
              <PageWrapper pageKey="rooms-page">
                <SEO
                  {...PAGE_SEO.rooms}
                  breadcrumbs={[
                    { name: "Home", url: "/" },
                    { name: "Rooms & Facilities", url: "/rooms" },
                  ]}
                />
                <Navigation />
                <div className="pt-20">
                  <Rooms />
                </div>
                <Footer />
              </PageWrapper>
            }
          />
          <Route path="/doctors" element={<DoctorsPageWrapper />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingAppointmentButton />
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
