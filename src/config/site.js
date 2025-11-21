/**
 * Site Configuration
 * Centralized configuration for SSS Hospital Website
 */

export const SITE_CONFIG = {
  // Basic Information
  siteName: "SSS Super Speciality Hospital",
  siteUrl: "https://ssshospitals.in",
  description:
    "Leading multi-speciality hospital in Erode offering 24/7 emergency care, advanced medical treatments, and state-of-the-art facilities.",

  // Contact Information
  contact: {
    phone: {
      primary: "+91-424-2888777",
      emergency: "+91-89259-31193",
      whatsapp: "+91-7729-888777",
      formatted: {
        primary: "+91 424 2888777",
        emergency: "+91 89259 31193",
        whatsapp: "+91 7729 888777",
      },
    },
    email: {
      info: "info@ssshospitals.in",
      support: "support@ssshospitals.in",
      careers: "careers@ssshospitals.in",
      appointments: "appointments@ssshospitals.in",
    },
    address: {
      street: "167/2C1, Perundurai Road, Opp to SBI Bank, URC Nagar",
      city: "Erode",
      state: "Tamil Nadu",
      postalCode: "638009",
      country: "India",
      full: "167/2C1, Perundurai Road, Opp to SBI Bank, URC Nagar, Erode, Tamil Nadu - 638009",
    },
    location: {
      latitude: 11.341,
      longitude: 77.7172,
      googleMapsUrl: "https://maps.app.goo.gl/2xkTddYbxgtg8dec7",
    },
  },

  // Social Media
  social: {
    facebook: {
      url: "https://www.facebook.com/SSS.Superspeciality.Hospital",
      handle: "@SSS.Superspeciality.Hospital",
    },
    instagram: {
      url: "https://www.instagram.com/sss_superspeciality_hospital",
      handle: "@sss_superspeciality_hospital",
    },
    twitter: {
      url: "https://x.com/sss_hospital_ed",
      handle: "@sss_hospital_ed",
    },
    youtube: {
      url: "https://www.youtube.com/@SSSHospital-ed",
      handle: "@SSSHospital-ed",
    },
    linkedin: {
      url: "",
      handle: "",
    },
  },

  // Business Hours
  hours: {
    emergency: "24/7",
    opd: {
      weekdays: "9:00 AM - 8:00 PM",
      weekends: "9:00 AM - 5:00 PM",
    },
    pharmacy: "24/7",
    lab: "24/7",
  },

  // Features
  features: {
    appointments: true,
    onlineConsultation: false,
    emergencyServices: true,
    homeHealthcare: false,
    ambulanceService: true,
    pharmacy: true,
    diagnostics: true,
    bloodBank: false,
  },

  // SEO
  seo: {
    defaultTitle:
      "SSS Super Speciality Hospital - Best Multi-Speciality Hospital in Erode",
    titleTemplate: "%s | SSS Hospital",
    defaultDescription:
      "Leading multi-speciality hospital in Erode offering 24/7 emergency care, advanced medical treatments across 20+ specialities, expert doctors, and state-of-the-art facilities.",
    keywords: [
      "hospital in erode",
      "best hospital in erode",
      "multi speciality hospital",
      "super speciality hospital tamil nadu",
      "24/7 emergency hospital",
      "SSS hospital",
    ],
    ogImage: "/assets/heroes/main-1.avif",
    twitterCard: "summary_large_image",
  },

  // Analytics IDs (set via environment variables in production)
  analytics: {
    ga4: import.meta.env.VITE_GA_MEASUREMENT_ID || "",
    gtm: import.meta.env.VITE_GTM_ID || "",
    hotjar: import.meta.env.VITE_HOTJAR_ID || "",
    clarity: import.meta.env.VITE_CLARITY_ID || "",
    facebookPixel: import.meta.env.VITE_FACEBOOK_PIXEL_ID || "",
  },

  // Performance Settings
  performance: {
    enableServiceWorker: true,
    enableLazyLoading: true,
    imageQuality: 85,
    enablePreload: true,
    enablePrefetch: true,
    chunkStrategy: "smart",
  },

  // Feature Flags
  flags: {
    enableChatbot: true,
    enableTestimonials: true,
    enableVirtualTour: true,
    enableAppointmentBooking: true,
    enableNewsletter: false,
    enableBlog: false,
    enableCookieConsent: false,
    enableErrorTracking: import.meta.env.PROD,
  },

  // API Endpoints (if applicable)
  api: {
    baseUrl: import.meta.env.VITE_API_URL || "https://api.ssshospitals.in",
    endpoints: {
      appointments: "/api/appointments",
      contact: "/api/contact",
      newsletter: "/api/newsletter",
      feedback: "/api/feedback",
    },
  },

  // Departments
  departments: [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Gastroenterology",
    "Nephrology",
    "Urology",
    "Dermatology",
    "ENT",
    "Ophthalmology",
    "Pediatrics",
    "Obstetrics & Gynecology",
    "General Surgery",
    "Plastic Surgery",
    "Neurosurgery",
    "Vascular Surgery",
    "Internal Medicine",
    "Pulmonology",
    "Psychiatry",
    "Physiotherapy",
    "Radiology",
    "Anaesthesiology",
    "Dental & Oral Surgery",
  ],

  // Services
  services: [
    "24/7 Emergency Care",
    "ICU & Critical Care",
    "Operation Theaters",
    "Diagnostic Services",
    "Pharmacy",
    "Ambulance Service",
    "Blood Bank",
    "Master Health Checkup",
    "Home Healthcare",
    "Telemedicine",
  ],

  // Facilities
  facilities: {
    beds: "150+",
    doctors: "50+",
    specialities: "20+",
    operationTheaters: "5",
    icuBeds: "30",
    parkingSpaces: "100+",
  },

  // Legal
  legal: {
    privacyPolicyUrl: "/privacy-policy",
    termsOfServiceUrl: "/terms-of-service",
    disclaimerUrl: "/disclaimer",
    copyrightYear: "2025",
    registrationNumber: "REG/SSS/2025/XXX", // Update with actual registration
  },

  // Compliance
  compliance: {
    hipaa: true,
    nabh: false, // Set to true if accredited
    nabl: false, // Set to true if accredited
    iso: false, // Set to true if certified
  },
};

export default SITE_CONFIG;
