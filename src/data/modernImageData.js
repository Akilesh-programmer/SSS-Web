/**
 * MODERN IMAGE DATA MANAGEMENT SYSTEM
 * Centralized configuration for all website images with optimization metadata
 */

import { loadImage, IMAGE_CATEGORIES } from "./imageUrls.js";

/**
 * Image collections with optimization metadata
 */
export const ImageCollections = {
  // Background Images (Hero sections)
  backgrounds: [
    {
      id: "bg-1",
      path: "BG_Photos/DSC03391.JPG",
      alt: "SSS Hospital - Modern Healthcare Facility",
      aspectRatio: 16 / 9,
      priority: true,
      usage: ["home-hero", "about-hero"],
      sizes: "100vw",
    },
    {
      id: "bg-2",
      path: "BG_Photos/DSC03392.JPG",
      alt: "SSS Hospital - Patient Care Area",
      aspectRatio: 16 / 9,
      priority: false,
      usage: ["about-hero"],
      sizes: "100vw",
    },
    {
      id: "bg-3",
      path: "BG_Photos/IMG-20250923-WA0015.jpg",
      alt: "SSS Hospital - Medical Excellence",
      aspectRatio: 16 / 9,
      priority: false,
      usage: ["doctors-hero", "services-hero"],
      sizes: "100vw",
    },
    {
      id: "bg-4",
      path: "BG_Photos/IMG-20250923-WA0029.jpg",
      alt: "SSS Hospital - Comprehensive Care",
      aspectRatio: 16 / 9,
      priority: false,
      usage: ["gallery-hero", "packages-hero"],
      sizes: "100vw",
    },
  ],

  // Infrastructure Images (Gallery & facility showcase)
  infrastructure: [
    {
      id: "inf-1",
      path: "Infrastructure_Photos/DSC03356.JPG",
      alt: "SSS Hospital - Advanced Medical Equipment",
      aspectRatio: 4 / 3,
      category: "equipment",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "inf-2",
      path: "Infrastructure_Photos/DSC03360.JPG",
      alt: "SSS Hospital - Patient Reception Area",
      aspectRatio: 4 / 3,
      category: "facilities",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "inf-3",
      path: "Infrastructure_Photos/DSC03365.JPG",
      alt: "SSS Hospital - Modern Treatment Room",
      aspectRatio: 4 / 3,
      category: "treatment",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "inf-4",
      path: "Infrastructure_Photos/DSC03386.JPG",
      alt: "SSS Hospital - Diagnostic Center",
      aspectRatio: 4 / 3,
      category: "diagnostics",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "inf-5",
      path: "Infrastructure_Photos/DSC03388.JPG",
      alt: "SSS Hospital - Surgical Suite",
      aspectRatio: 4 / 3,
      category: "surgery",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    // Add remaining infrastructure images...
  ],

  // Doctor Images (Professional portraits)
  doctors: Array.from({ length: 33 }, (_, i) => {
    const num = i + 1;
    const extension = num === 3 ? "jpeg" : "png";
    return {
      id: `doctor-${num}`,
      path: `doctor_photos/${num}.${extension}`,
      alt: `Dr. ${num} - Medical Professional at SSS Hospital`,
      aspectRatio: 1,
      category: "portrait",
      sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px",
      priority: num <= 6, // First 6 doctors are priority
    };
  }),

  // Service Images
  services: Array.from({ length: 9 }, (_, i) => {
    const num = i + 1;
    const extension = num === 8 ? "JPG" : num === 9 ? "jpg" : "png";
    return {
      id: `service-${num}`,
      path: `services_photos/${num}.${extension}`,
      alt: `SSS Hospital - Medical Service ${num}`,
      aspectRatio: 4 / 3,
      category: "service",
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    };
  }),

  // Main Hospital Images
  hospital: [
    {
      id: "hospital-main",
      path: "sss-hospital.avif",
      alt: "SSS Hospital - Main Building View",
      aspectRatio: 16 / 9,
      priority: true,
      sizes: "100vw",
    },
    {
      id: "hospital-video",
      path: "Hospital Full Tour Video.mp4",
      alt: "SSS Hospital - Virtual Tour Video",
      type: "video",
      aspectRatio: 16 / 9,
      sizes: "100vw",
    },
    {
      id: "hospital-pdf",
      path: "hospital_data.pdf",
      alt: "SSS Hospital - Information Brochure",
      type: "document",
    },
  ],

  // Infrastructure Photos
  infrastructure: [
    // DSC Photos
    {
      id: "infra-dsc-356",
      path: "Infrastructure_Photos/DSC03356.JPG",
      alt: "SSS Hospital - Medical Equipment and Facilities",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-360",
      path: "Infrastructure_Photos/DSC03360.JPG",
      alt: "SSS Hospital - Treatment Room",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-365",
      path: "Infrastructure_Photos/DSC03365.JPG",
      alt: "SSS Hospital - Diagnostic Center",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-386",
      path: "Infrastructure_Photos/DSC03386.JPG",
      alt: "SSS Hospital - Patient Ward",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-388",
      path: "Infrastructure_Photos/DSC03388.JPG",
      alt: "SSS Hospital - ICU Facility",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-412",
      path: "Infrastructure_Photos/DSC03412.JPG",
      alt: "SSS Hospital - Operation Theater",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-426",
      path: "Infrastructure_Photos/DSC03426.JPG",
      alt: "SSS Hospital - Laboratory",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-427",
      path: "Infrastructure_Photos/DSC03427.JPG",
      alt: "SSS Hospital - Emergency Department",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-428",
      path: "Infrastructure_Photos/DSC03428.JPG",
      alt: "SSS Hospital - Reception Area",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-434",
      path: "Infrastructure_Photos/DSC03434.JPG",
      alt: "SSS Hospital - Consultation Room",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-dsc-435",
      path: "Infrastructure_Photos/DSC03435.JPG",
      alt: "SSS Hospital - Medical Equipment",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    // WhatsApp Photos
    {
      id: "infra-wa-016",
      path: "Infrastructure_Photos/IMG-20250923-WA0016.jpg",
      alt: "SSS Hospital - Modern Medical Facility",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-018",
      path: "Infrastructure_Photos/IMG-20250923-WA0018.jpg",
      alt: "SSS Hospital - Patient Care Area",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-019",
      path: "Infrastructure_Photos/IMG-20250923-WA0019.jpg",
      alt: "SSS Hospital - Treatment Facility",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-020",
      path: "Infrastructure_Photos/IMG-20250923-WA0020.jpg",
      alt: "SSS Hospital - Medical Center",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-023",
      path: "Infrastructure_Photos/IMG-20250923-WA0023.jpg",
      alt: "SSS Hospital - Healthcare Infrastructure",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-026",
      path: "Infrastructure_Photos/IMG-20250923-WA0026.jpg",
      alt: "SSS Hospital - Medical Equipment Room",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-027",
      path: "Infrastructure_Photos/IMG-20250923-WA0027.jpg",
      alt: "SSS Hospital - Specialized Department",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-028",
      path: "Infrastructure_Photos/IMG-20250923-WA0028.jpg",
      alt: "SSS Hospital - Patient Services",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-030",
      path: "Infrastructure_Photos/IMG-20250923-WA0030.jpg",
      alt: "SSS Hospital - Clinical Area",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
    {
      id: "infra-wa-032",
      path: "Infrastructure_Photos/IMG-20250923-WA0032.jpg",
      alt: "SSS Hospital - Medical Technology",
      aspectRatio: 4 / 3,
      sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    },
  ],

  // Branding Images (Logos, portraits)
  branding: [
    {
      id: "logo-full",
      path: "SSS-full-logo.png",
      alt: "SSS Hospital - Full Logo",
      aspectRatio: 3 / 1,
      priority: true,
      sizes: "(max-width: 640px) 200px, 300px",
    },
    {
      id: "logo-simple",
      path: "sss-logo.jpeg",
      alt: "SSS Hospital - Logo",
      aspectRatio: 1,
      priority: true,
      sizes: "(max-width: 640px) 80px, 120px",
    },
    {
      id: "founder-portrait",
      path: "Sanjith-SSS-Hospitals.png",
      alt: "Dr. S. Sanjith - Founder of SSS Hospital",
      aspectRatio: 3 / 4,
      priority: false,
      sizes: "(max-width: 640px) 200px, 300px",
    },
    {
      id: "hospital-main",
      path: "sss-hospital.avif",
      alt: "SSS Hospital - Main Building",
      aspectRatio: 16 / 9,
      priority: true,
      sizes: "(max-width: 640px) 100vw, 50vw",
    },
  ],
};

/**
 * Image loading utilities with modern optimization
 */
export class ModernImageManager {
  constructor() {
    this.cache = new Map();
    this.loadingPromises = new Map();
    this.preloadedImages = new Set();
  }

  /**
   * Get image data by ID with optimized loading
   */
  async getImage(imageId, options = {}) {
    const cacheKey = `${imageId}-${JSON.stringify(options)}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    if (this.loadingPromises.has(cacheKey)) {
      return this.loadingPromises.get(cacheKey);
    }

    const loadPromise = this._loadImageData(imageId, options);
    this.loadingPromises.set(cacheKey, loadPromise);

    try {
      const result = await loadPromise;
      this.cache.set(cacheKey, result);
      this.loadingPromises.delete(cacheKey);
      return result;
    } catch (error) {
      this.loadingPromises.delete(cacheKey);
      throw error;
    }
  }

  /**
   * Get images by category
   */
  getImagesByCategory(category) {
    const allImages = Object.values(ImageCollections).flat();
    return allImages.filter((img) => img.category === category);
  }

  /**
   * Get images by usage context
   */
  getImagesByUsage(usage) {
    const allImages = Object.values(ImageCollections).flat();
    return allImages.filter((img) => img.usage?.includes(usage));
  }

  /**
   * Preload critical images
   */
  async preloadCriticalImages() {
    const criticalImages = Object.values(ImageCollections)
      .flat()
      .filter((img) => img.priority)
      .slice(0, 10); // Limit to first 10 critical images

    const preloadPromises = criticalImages.map(async (imageData) => {
      try {
        const url = await loadImage(imageData.path, {
          preferAVIF: true,
          preferWebP: true,
        });
        if (url) {
          this.preloadedImages.add(imageData.id);

          // Cache the image without creating preload links to avoid warnings
          const img = new Image();
          img.src = url;
        }
      } catch (error) {
        // Failed to preload critical image silently
      }
    });

    await Promise.allSettled(preloadPromises);
    // Critical images preloaded silently
  }

  /**
   * Private method to load individual image data
   */
  async _loadImageData(imageId, options) {
    const imageData = this._findImageById(imageId);
    if (!imageData) {
      throw new Error(`Image not found: ${imageId}`);
    }

    const url = await loadImage(imageData.path, {
      preferAVIF: true,
      preferWebP: true,
      ...options,
    });

    return {
      ...imageData,
      url,
      isPreloaded: this.preloadedImages.has(imageId),
    };
  }

  /**
   * Find image data by ID
   */
  _findImageById(imageId) {
    const allImages = Object.values(ImageCollections).flat();
    return allImages.find((img) => img.id === imageId);
  }

  /**
   * Get performance metrics
   */
  getMetrics() {
    return {
      cachedImages: this.cache.size,
      preloadedImages: this.preloadedImages.size,
      loadingImages: this.loadingPromises.size,
    };
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
    this.loadingPromises.clear();
  }
}

// Global image manager instance
export const imageManager = new ModernImageManager();

/**
 * Helper functions for common image operations
 */
export const ImageHelpers = {
  /**
   * Get hero background for specific page
   */
  getHeroBackground(page) {
    const heroMappings = {
      home: "bg-1",
      about: "bg-2",
      doctors: "bg-3",
      services: "bg-3",
      gallery: "bg-4",
      packages: "bg-4",
    };

    return heroMappings[page] || "bg-1";
  },

  /**
   * Get optimized image dimensions for container
   */
  getOptimalDimensions(containerWidth, aspectRatio = 1) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const targetWidth = containerWidth * devicePixelRatio;

    // Common breakpoints
    const breakpoints = [320, 480, 640, 800, 1024, 1280, 1600];
    const optimalWidth = breakpoints.find((bp) => bp >= targetWidth) || 1600;

    return {
      width: optimalWidth,
      height: Math.round(optimalWidth / aspectRatio),
    };
  },

  /**
   * Generate responsive sizes attribute
   */
  generateSizes(breakpoints) {
    return Object.entries(breakpoints)
      .map(([breakpoint, size]) => `(max-width: ${breakpoint}px) ${size}`)
      .join(", ");
  },
};

// Initialize critical image preloading when module loads
if (typeof window !== "undefined") {
  // Preload critical images after a short delay to not block initial render
  setTimeout(() => {
    imageManager.preloadCriticalImages().catch(() => {});
  }, 100);
}
