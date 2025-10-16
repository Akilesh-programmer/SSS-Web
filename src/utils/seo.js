/**
 * SEO Utilities for SSS Super Speciality Hospital
 * Comprehensive SEO management for medical website
 */

// Base site configuration
export const SITE_CONFIG = {
  name: "SSS Super Speciality Hospital",
  shortName: "SSS Hospital",
  description:
    "Leading multi-speciality hospital in Erode offering 24/7 emergency care, advanced medical treatments, and compassionate healthcare services with expert doctors and state-of-the-art facilities.",
  url: "https://ssshospitals.in",
  logo: "https://ssshospitals.in/assets/logos/sss-full-logo.avif",
  image: "https://ssshospitals.in/assets/heroes/main-1.avif",
  email: "info@ssshospitals.in",
  phone: "+91 424 2888777",
  emergencyPhone: "+91 89259 31193",
  whatsapp: "+91 7729 888777",
  address: {
    street: "167/2C1, Perundurai Road, Opp to SBI Bank, URC Nagar",
    city: "Erode",
    state: "Tamil Nadu",
    postalCode: "638009",
    country: "India",
  },
  coordinates: {
    latitude: "11.3410",
    longitude: "77.7172",
  },
  social: {
    facebook: "https://www.facebook.com/SSS.Superspeciality.Hospital",
    instagram: "https://www.instagram.com/sss_superspeciality_hospital",
    twitter: "https://x.com/sss_hospital_ed",
    youtube: "https://www.youtube.com/@SSSHospital-ed",
  },
  established: "2025",
  languages: ["en", "ta"],
  acceptsHealthInsurance: true,
};

// Medical specialities and services keywords
export const MEDICAL_KEYWORDS = {
  general: [
    "hospital in erode",
    "multi speciality hospital erode",
    "best hospital in erode",
    "super speciality hospital tamil nadu",
    "24/7 emergency care erode",
    "healthcare services erode",
    "medical treatment erode",
    "advanced healthcare facility",
    "top hospitals in erode",
  ],
  specialities: [
    "cardiology",
    "neurology",
    "orthopedics",
    "gastroenterology",
    "nephrology",
    "urology",
    "dermatology",
    "ENT",
    "ophthalmology",
    "pediatrics",
    "obstetrics gynecology",
    "general surgery",
    "plastic surgery",
    "neurosurgery",
    "vascular surgery",
    "internal medicine",
    "pulmonology",
    "psychiatry",
    "physiotherapy",
    "radiology",
    "anaesthesiology",
    "dental oral surgery",
  ],
  services: [
    "master health checkup",
    "emergency services",
    "ICU care",
    "dialysis",
    "surgery",
    "laboratory services",
    "radiology imaging",
    "pharmacy",
    "ambulance services",
  ],
};

/**
 * Generate meta tags for a page
 */
export const generateMetaTags = ({
  title,
  description,
  keywords = [],
  image = SITE_CONFIG.image,
  url,
  type = "website",
  author = SITE_CONFIG.name,
  publishedTime,
  modifiedTime,
  noindex = false,
}) => {
  const fullTitle = title.includes(SITE_CONFIG.shortName)
    ? title
    : `${title} | ${SITE_CONFIG.shortName}`;

  const fullUrl = url ? `${SITE_CONFIG.url}${url}` : SITE_CONFIG.url;

  const allKeywords = [
    ...keywords,
    ...MEDICAL_KEYWORDS.general,
    SITE_CONFIG.name,
    "erode hospital",
    "tamil nadu healthcare",
  ].join(", ");

  return {
    // Basic meta tags
    title: fullTitle,
    description,
    keywords: allKeywords,
    author,
    robots: noindex
      ? "noindex, nofollow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",

    // Open Graph (Facebook, LinkedIn)
    "og:type": type,
    "og:site_name": SITE_CONFIG.name,
    "og:title": fullTitle,
    "og:description": description,
    "og:image": image,
    "og:image:alt": title,
    "og:url": fullUrl,
    "og:locale": "en_IN",

    // Twitter Card
    "twitter:card": "summary_large_image",
    "twitter:title": fullTitle,
    "twitter:description": description,
    "twitter:image": image,
    "twitter:site": "@sss_hospital_ed",
    "twitter:creator": "@sss_hospital_ed",

    // Additional meta
    ...(publishedTime && { "article:published_time": publishedTime }),
    ...(modifiedTime && { "article:modified_time": modifiedTime }),

    // Mobile
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": SITE_CONFIG.shortName,

    // Geographic
    "geo.region": "IN-TN",
    "geo.placename": "Erode",
    "geo.position": `${SITE_CONFIG.coordinates.latitude};${SITE_CONFIG.coordinates.longitude}`,
    ICBM: `${SITE_CONFIG.coordinates.latitude}, ${SITE_CONFIG.coordinates.longitude}`,
  };
};

/**
 * Apply meta tags to document head
 */
export const applyMetaTags = (metaTags) => {
  // Update title
  if (metaTags.title) {
    document.title = metaTags.title;
  }

  // Remove old meta tags
  const existingMetas = document.querySelectorAll('meta[data-seo="true"]');
  existingMetas.forEach((meta) => meta.remove());

  // Add new meta tags
  Object.entries(metaTags).forEach(([key, value]) => {
    if (key === "title") return; // Already handled

    let meta =
      document.querySelector(`meta[name="${key}"]`) ||
      document.querySelector(`meta[property="${key}"]`);

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("data-seo", "true");

      // Determine if it's a property or name attribute
      if (key.startsWith("og:") || key.startsWith("article:")) {
        meta.setAttribute("property", key);
      } else if (key.startsWith("twitter:")) {
        meta.setAttribute("name", key);
      } else {
        meta.setAttribute("name", key);
      }

      document.head.appendChild(meta);
    }

    meta.setAttribute("content", value);
  });

  // Add canonical link
  const canonical =
    document.querySelector('link[rel="canonical"]') ||
    document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", metaTags["og:url"] || SITE_CONFIG.url);
  if (!canonical.parentElement) {
    document.head.appendChild(canonical);
  }
};

/**
 * Generate JSON-LD structured data for organization
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: SITE_CONFIG.shortName,
    url: SITE_CONFIG.url,
    logo: {
      "@type": "ImageObject",
      url: SITE_CONFIG.logo,
      width: 512,
      height: 512,
    },
    image: SITE_CONFIG.image,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: Object.values(SITE_CONFIG.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Tamil", "Hindi"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        telephone: SITE_CONFIG.emergencyPhone,
        contactType: "emergency",
        availableLanguage: ["English", "Tamil", "Hindi"],
        areaServed: "IN",
      },
    ],
    foundingDate: SITE_CONFIG.established,
    medicalSpecialty: MEDICAL_KEYWORDS.specialities,
    availableService: MEDICAL_KEYWORDS.services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service,
    })),
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Medical License",
    },
    acceptsHealthInsurance: SITE_CONFIG.acceptsHealthInsurance,
  };
};

/**
 * Generate JSON-LD structured data for local business
 */
export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": `${SITE_CONFIG.url}/#hospital`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    image: SITE_CONFIG.image,
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.coordinates.latitude,
      longitude: SITE_CONFIG.coordinates.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasMap: "https://maps.app.goo.gl/2xkTddYbxgtg8dec7",
    isAccessibleForFree: false,
    publicAccess: true,
  };
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_CONFIG.url}${crumb.url}`,
    })),
  };
};

/**
 * Insert JSON-LD schema into document
 */
export const insertStructuredData = (schema) => {
  const scriptId = `schema-${schema["@type"].toLowerCase()}`;
  let script = document.getElementById(scriptId);

  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema, null, 2);
};

/**
 * Remove structured data from document
 */
export const removeStructuredData = (type) => {
  const scriptId = `schema-${type.toLowerCase()}`;
  const script = document.getElementById(scriptId);
  if (script) {
    script.remove();
  }
};

/**
 * Generate FAQ Schema for common medical questions
 */
export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

/**
 * Generate Physician Schema for doctor profiles
 */
export const generatePhysicianSchema = (doctor) => {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    honorificPrefix: doctor.title || "Dr.",
    image: doctor.image || SITE_CONFIG.image,
    description: doctor.description || doctor.bio,
    medicalSpecialty: doctor.specialty || doctor.speciality,
    worksFor: {
      "@type": "Hospital",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    alumniOf: doctor.education
      ? {
          "@type": "EducationalOrganization",
          name: doctor.education,
        }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      addressCountry: SITE_CONFIG.address.country,
    },
    availableLanguage: doctor.languages || ["English", "Tamil"],
  };
};

/**
 * Generate MedicalSpecialty Schema for department pages
 */
export const generateMedicalSpecialtySchema = (specialty) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalSpecialty",
    name: specialty.name,
    description: specialty.description,
    availableAt: {
      "@type": "Hospital",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
};

/**
 * Generate AggregateRating Schema for reviews
 */
export const generateAggregateRatingSchema = (rating) => {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: rating.value || "4.8",
    bestRating: "5",
    ratingCount: rating.count || "500",
    reviewCount: rating.reviewCount || "450",
  };
};

/**
 * Generate Review Schema for testimonials
 */
export const generateReviewSchema = (review) => {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating || "5",
      bestRating: "5",
    },
    reviewBody: review.text,
    datePublished: review.date || new Date().toISOString().split("T")[0],
    itemReviewed: {
      "@type": "Hospital",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
};

/**
 * Generate MedicalWebPage Schema for health content
 */
export const generateMedicalWebPageSchema = (page) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.title,
    description: page.description,
    url: `${SITE_CONFIG.url}${page.url}`,
    lastReviewed: page.lastReviewed || new Date().toISOString().split("T")[0],
    specialty: page.specialty || "General Medicine",
    reviewedBy: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };
};

/**
 * Generate Article Schema for blog posts or health articles
 */
export const generateArticleSchema = (article) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    headline: article.title,
    description: article.description,
    image: article.image || SITE_CONFIG.image,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: SITE_CONFIG.logo,
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}${article.url}`,
    },
  };
};

/**
 * Generate Appointment Schema for booking
 */
export const generateAppointmentSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/contact`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Medical Appointment",
      },
    },
  };
};
