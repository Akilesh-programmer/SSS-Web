/* eslint-disable no-unused-vars */
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppointment } from "./contexts/AppointmentContext";

// Critical UI components - load immediately
import Navigation from "./Components/ui/Navigation";
import Footer from "./Components/ui/Footer";
import AppointmentPopup from "./Components/ui/AppointmentPopup";
import ScrollToTop from "./Components/ui/ScrollToTop";
import PageWrapper from "./Components/ui/PageWrapper";
import FloatingAppointmentButton from "./Components/ui/FloatingAppointmentButton";
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
      <Suspense fallback={<LoadingFallback />}>
        <AboutUs />
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
      <Suspense fallback={<LoadingFallback />}>
        <Specialities />
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
      <Suspense fallback={<LoadingFallback />}>
        <Services />
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
      <Suspense fallback={<LoadingFallback />}>
        <Packages />
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
      <Suspense fallback={<LoadingFallback />}>
        <DoctorsPage />
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
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
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
      <Suspense fallback={<LoadingFallback />}>
        <Gallery />
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
      <Suspense fallback={<LoadingFallback />}>
        <Rooms />
        <Footer />
      </Suspense>
    </PageWrapper>
  );
};

function App() {
  const { isAppointmentOpen, closeAppointment } = useAppointment();

  return (
    <ErrorBoundary>
      <div className="font-primary min-h-screen">
        <ScrollToTop />

        {/* Fixed Navigation at top - sticky behavior without layout shift */}
        <div className="sticky top-0 z-50">
          <Navigation />
        </div>

        {/* Main content area - no top padding, content flows naturally */}
        <main className="-mt-[3.5rem] sm:-mt-16 xl:-mt-[4.5rem]">
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
        </main>

        {/* Global Appointment Popup */}
        <AppointmentPopup
          isOpen={isAppointmentOpen}
          onClose={closeAppointment}
        />
        <FloatingAppointmentButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;
