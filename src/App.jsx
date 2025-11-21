/* eslint-disable no-unused-vars */
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppointment } from "./contexts/AppointmentContext";

// Critical UI components - load immediately
import Navigation from "./Components/ui/Navigation";
import Footer from "./Components/ui/Footer";
import FloatingAppointmentButton from "./Components/ui/FloatingAppointmentButton";
import ScrollToTopButton from "./Components/ui/ScrollToTopButton";
import AppointmentPopup from "./Components/ui/AppointmentPopup";
import ScrollToTop from "./Components/ui/ScrollToTop";
import PageWrapper from "./Components/ui/PageWrapper";
import ErrorBoundary from "./Components/ui/ErrorBoundary";
import SEO from "./Components/ui/SEO";
import { PAGE_SEO } from "./data/seoData";
import { generateAppointmentSchema } from "./utils/seo";

// Load Home page components immediately for instant render
import Home from "./Components/pages/Home";
import HomeAboutUs from "./Components/sections/HomeAboutUs";

// Lazy-load other page components for code splitting
const AboutUs = lazy(() => import("./Components/pages/AboutUs"));
const VirtualTour = lazy(() => import("./Components/sections/VirtualTour"));
const PatientTestimonials = lazy(() =>
  import("./Components/sections/PatientTestimonials")
);
const Specialities = lazy(() => import("./Components/pages/Specialities"));
const Services = lazy(() => import("./Components/pages/Services"));
const Packages = lazy(() => import("./Components/pages/Packages"));
const Gallery = lazy(() => import("./Components/pages/Gallery"));
const Rooms = lazy(() => import("./Components/pages/Rooms"));
const FounderSection = lazy(() =>
  import("./Components/sections/FounderSection")
);
const AppointmentBooking = lazy(() =>
  import("./Components/sections/AppointmentBooking")
);
const Contact = lazy(() => import("./Components/sections/Contact"));
const DoctorsPage = lazy(() => import("./Components/pages/DoctorsPage"));
const DepartmentPageLayout = lazy(() =>
  import("./Components/pages/departments/DepartmentPageLayout")
);
const NotFound = lazy(() => import("./Components/pages/NotFound"));

// Empty fallback - no visible loader for instant content display
const LoadingFallback = () => null;

const HomePage = () => {
  return (
    <PageWrapper>
      <SEO {...PAGE_SEO.home} />
      <Navigation />
      {/* Load hero and about immediately */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <HomeAboutUs />
      </div>
      {/* Lazy load below-the-fold content */}
      <Suspense fallback={<LoadingFallback />}>
        <FounderSection />
        <VirtualTour />
        <PatientTestimonials />
        <AppointmentBooking />
      </Suspense>
      <div id="contact">
        <Footer />
      </div>
    </PageWrapper>
  );
};

// About Page - Comprehensive about information
const AboutPage = () => {
  return (
    <PageWrapper>
      <SEO
        {...PAGE_SEO.about}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <AboutUs />
        </div>
        <Footer />
      </Suspense>
    </PageWrapper>
  );
};

// Specialities Page - All specialities and departments
const SpecialitiesPage = () => {
  return (
    <PageWrapper>
      <SEO
        {...PAGE_SEO.specialities}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Specialities", url: "/specialities" },
        ]}
      />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Specialities />
        </div>
        <Footer />
      </Suspense>
    </PageWrapper>
  );
};

// Services Page - All medical services
const ServicesPage = () => {
  return (
    <PageWrapper>
      <SEO
        {...PAGE_SEO.services}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Services />
        </div>
        <Footer />
      </Suspense>
    </PageWrapper>
  );
};

// Packages Page - Health checkup packages
const PackagesPage = () => {
  return (
    <PageWrapper>
      <SEO
        {...PAGE_SEO.packages}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Packages", url: "/packages" },
        ]}
      />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Packages />
        </div>
        <Footer />
      </Suspense>
    </PageWrapper>
  );
};

// Doctors Page - All doctors and medical team
const DoctorsPageWrapper = () => {
  return (
    <PageWrapper>
      <SEO
        {...PAGE_SEO.doctors}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Doctors", url: "/doctors" },
        ]}
      />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <DoctorsPage />
        </div>
        <Footer />
      </Suspense>
    </PageWrapper>
  );
};

// Contact Page - Enhanced contact information and appointment booking
const ContactPage = () => {
  return (
    <PageWrapper>
      <SEO
        {...PAGE_SEO.contact}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
        schema={generateAppointmentSchema()}
      />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Contact />
        </div>
        <Footer />
      </Suspense>
    </PageWrapper>
  );
};

// Infrastructure/Gallery Page - Hospital infrastructure showcase
const InfrastructurePage = () => {
  return (
    <PageWrapper>
      <SEO
        {...PAGE_SEO.infrastructure}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Infrastructure", url: "/infrastructure" },
        ]}
      />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Gallery />
        </div>
        <Footer />
      </Suspense>
    </PageWrapper>
  );
};

// Rooms Page - Room types and facilities
const RoomsPage = () => {
  return (
    <PageWrapper>
      <SEO
        {...PAGE_SEO.rooms}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Rooms & Facilities", url: "/rooms" },
        ]}
      />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Rooms />
        </div>
        <Footer />
      </Suspense>
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
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/doctors" element={<DoctorsPageWrapper />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <NotFound />
              </Suspense>
            }
          />
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
