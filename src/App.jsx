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

// Lazy-load page components for code splitting
const Home = lazy(() => import("./Components/pages/Home"));
const HomeAboutUs = lazy(() => import("./Components/sections/HomeAboutUs"));
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

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent mb-4"></div>
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <PageWrapper pageKey="home-page">
      <SEO {...PAGE_SEO.home} />
      <Navigation />
      <Suspense fallback={<LoadingFallback />}>
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
    <PageWrapper pageKey="about-page">
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
          <AboutUs key="about-us" />
        </div>
      </Suspense>
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
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Specialities key="specialities" />
        </div>
      </Suspense>
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
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Services key="services" />
        </div>
      </Suspense>
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
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Packages key="packages" />
        </div>
      </Suspense>
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
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <DoctorsPage key="doctors-page-content" />
        </div>
      </Suspense>
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
      <Suspense fallback={<LoadingFallback />}>
        <div className="pt-20">
          <Contact key="contact-content" />
        </div>
      </Suspense>
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
            element={
              <Suspense fallback={<LoadingFallback />}>
                <DepartmentPageLayout />
              </Suspense>
            }
          />
          {/* Backward-compat for older links */}
          <Route
            path="/department/:departmentSlug"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <DepartmentPageLayout />
              </Suspense>
            }
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
                <Suspense fallback={<LoadingFallback />}>
                  <div className="pt-20">
                    <Gallery />
                  </div>
                </Suspense>
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
                <Suspense fallback={<LoadingFallback />}>
                  <div className="pt-20">
                    <Rooms />
                  </div>
                </Suspense>
                <Footer />
              </PageWrapper>
            }
          />
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
