import { useState, useMemo, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../ui/HeroSection";
import {
  FaHospital,
  FaPlayCircle,
  FaTimes,
  FaImages,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// Using public assets for better performance during deployment
const BG1 = "/assets/heroes/main-1.avif";
const BG2 = "/assets/heroes/main-2.avif";
const BG3 = "/assets/infrastructure/infrastructure-03326.avif";
const BG4 = "/assets/heroes/heroes-20250923.avif";
const INF1 = "/assets/infrastructure/infrastructure-03356.avif";
const INF2 = "/assets/infrastructure/infrastructure-03360.avif";
const INF3 = "/assets/infrastructure/infrastructure-03365.avif";
const INF4 = "/assets/infrastructure/infrastructure-03386.avif";
const INF5 = "/assets/infrastructure/infrastructure-03388.avif";
const INF6 = "/assets/infrastructure/infrastructure-03412.avif";
const INF7 = "/assets/infrastructure/infrastructure-03426.avif";
const INF8 = "/assets/infrastructure/infrastructure-03427.avif";
const INF9 = "/assets/infrastructure/infrastructure-03428.avif";
const INF10 = "/assets/heroes/main-3.avif";
const INF11 = "/assets/infrastructure/infrastructure-03435.avif";
const INF12 = "/assets/infrastructure/infrastructure-wa0016.avif";
const INF13 = "/assets/infrastructure/infrastructure-wa0018.avif";
const INF14 = "/assets/infrastructure/infrastructure-wa0019.avif";
const INF15 = "/assets/infrastructure/infrastructure-wa0020.avif";
const INF16 = "/assets/infrastructure/infrastructure-wa0023.avif";
const INF17 = "/assets/infrastructure/infrastructure-wa0026.avif";
const INF18 = "/assets/infrastructure/infrastructure-wa0027.avif";
const INF19 = "/assets/infrastructure/infrastructure-wa0028.avif";
const INF20 = "/assets/infrastructure/infrastructure-wa0030.avif";
const INF21 = "/assets/infrastructure/infrastructure-wa0032.avif";
const hospitalVideo = "/assets/hospital-tour-video.mp4";
const hospitalImg = "/assets/other/other-sss-hospital.avif";

// Central list of infrastructure images
const infrastructureImageList = [
  "Infrastructure_Photos/DSC03356.webp",
  "Infrastructure_Photos/DSC03360.webp",
  "Infrastructure_Photos/DSC03365.webp",
  "Infrastructure_Photos/DSC03386.webp",
  "Infrastructure_Photos/DSC03388.webp",
  "Infrastructure_Photos/DSC03412.webp",
  "Infrastructure_Photos/DSC03426.webp",
  "Infrastructure_Photos/DSC03427.webp",
  "Infrastructure_Photos/DSC03428.webp",
  "Infrastructure_Photos/DSC03434.webp",
  "Infrastructure_Photos/DSC03435.webp",
  "Infrastructure_Photos/IMG-20250923-WA0016.webp",
  "Infrastructure_Photos/IMG-20250923-WA0018.webp",
  "Infrastructure_Photos/IMG-20250923-WA0019.webp",
  "Infrastructure_Photos/IMG-20250923-WA0020.webp",
  "Infrastructure_Photos/IMG-20250923-WA0023.webp",
  "Infrastructure_Photos/IMG-20250923-WA0026.webp",
  "Infrastructure_Photos/IMG-20250923-WA0027.webp",
  "Infrastructure_Photos/IMG-20250923-WA0028.webp",
  "Infrastructure_Photos/IMG-20250923-WA0030.webp",
  "Infrastructure_Photos/IMG-20250923-WA0032.webp",
];

const videoUrl = hospitalVideo;

// BG Photos array for hero backgrounds (reuse style consistency with other pages)
const bgPhotos = [BG1, BG2, BG3, BG4];

const getHeroBgImage = () => bgPhotos[2]; // use specified DSC03326.webp for hero

const Gallery = () => {
  const [activeMedia, setActiveMedia] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () =>
      infrastructureImageList.map((path, i) => {
        const map = [
          INF1,
          INF2,
          INF3,
          INF4,
          INF5,
          INF6,
          INF7,
          INF8,
          INF9,
          INF10,
          INF11,
          INF12,
          INF13,
          INF14,
          INF15,
          INF16,
          INF17,
          INF18,
          INF19,
          INF20,
          INF21,
        ];
        return {
          id: path + i,
          src: map[i],
          alt: "Hospital Infrastructure Photo " + (i + 1),
        };
      }),
    []
  );

  // Keyboard navigation for modal (images and videos)
  useEffect(() => {
    if (!activeMedia) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMedia();
      }

      // Only handle left/right arrows for image galleries
      if (activeMedia.type === "image") {
        if (e.key === "ArrowLeft") {
          navigateImage("prev");
        } else if (e.key === "ArrowRight") {
          navigateImage("next");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // Intentionally include navigateImage/closeMedia in deps so handler has latest refs
  }, [activeMedia, currentImageIndex]);

  const openImage = useCallback(
    (img) => {
      const index = images.findIndex((image) => image.id === img.id);
      setCurrentImageIndex(index);
      setActiveMedia({ type: "image", src: img.src, alt: img.alt });
    },
    [images]
  );

  const openVideo = useCallback(
    () => setActiveMedia({ type: "video", src: videoUrl }),
    []
  );

  const closeMedia = useCallback(() => setActiveMedia(null), []);

  const navigateImage = useCallback(
    (direction) => {
      let newIndex;
      if (direction === "prev") {
        newIndex =
          currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
      } else {
        newIndex =
          currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
      }
      setCurrentImageIndex(newIndex);
      setActiveMedia({
        type: "image",
        src: images[newIndex].src,
        alt: images[newIndex].alt,
      });
    },
    [currentImageIndex, images]
  );

  // Removed old heroVariants (hero redesigned to match site-wide pattern)

  // Removed old per-item animation variants; handled by OptimizedImageGrid

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 pt-0">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={getHeroBgImage()}
        badge={{ icon: FaImages, text: "Infrastructure Gallery" }}
        title="Our Facilities"
        subtitle="Explore Our State-of-the-Art Healthcare Infrastructure"
      />

      {/* Main Content */}
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-green-100 rounded-full px-5 py-2.5 border border-emerald-200 mb-5">
              <FaHospital className="text-emerald-600" />
              <span className="text-emerald-700 font-bold text-sm tracking-wide">
                INFRASTRUCTURE
              </span>
            </div>
            <h2 className="text-heading-xl mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              World-Class Medical Facilities
            </h2>
            <p className="text-gray-600 max-w-xl leading-relaxed">
              A visual showcase of our advanced clinical environment designed
              for precision, comfort & safety.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2 text-gray-600 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-gray-200">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow"></span>
              <span>{images.length} Photos</span>
            </div>
            <button
              onClick={openVideo}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg hover:shadow-xl transition-all border border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            >
              <FaPlayCircle className="text-white text-lg group-hover:scale-110 transition-transform" />
              <span>Watch Tour Video</span>
            </button>
          </div>
        </div>

        {/* Optimized Image Grid with Hover Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-2">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => openImage(image)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              {/* Expand Icon Indicator */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <FaExpand className="text-emerald-600 text-sm" />
              </div>
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-8 mb-10">
            <div className="text-center">
              <h3 className="text-heading-lg mb-3 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Explore Our Hospital
              </h3>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                Immerse yourself in a guided walkthrough of our facility
                showcasing critical care units, diagnostics, surgical suites &
                patient-centric spaces.
              </p>
            </div>
            {/* Right-side play button removed per request */}
          </div>

          <div className="max-w-4xl mx-auto">
            <button
              type="button"
              className="relative w-full text-left rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 transition-all duration-300"
              onClick={openVideo}
              aria-label="Open hospital tour video"
            >
              <div className="aspect-video relative">
                <img
                  src={hospitalImg}
                  alt="Hospital preview for virtual tour"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 group-hover:from-black/60 transition-colors" />

                {/* Play Button with subtle ripple */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 rounded-full"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border-2 sm:border-3 md:border-4 border-white/60"
                      whileHover={{ scale: 1.08 }}
                    >
                      <FaPlayCircle className="text-emerald-600 text-2xl sm:text-3xl md:text-4xl" />
                    </motion.div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4 sm:p-6">
                <h4 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1 sm:mb-2 tracking-tight drop-shadow-lg">
                  Hospital Virtual Tour
                </h4>
                <p className="text-white/80 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
                  Click to view the full immersive walkthrough.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Modal with Navigation - Glossy Transparent Background */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 backdrop-blur-2xl"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMedia}
          >
            <motion.div
              className="relative w-full max-w-5xl mx-auto flex flex-col px-2 sm:px-4 md:px-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Counter and Close Button */}
              <div className="flex items-center justify-between mb-4">
                {activeMedia.type === "image" && (
                  <motion.div
                    className="text-gray-900 text-sm font-semibold bg-white/90 backdrop-blur-md border border-white/40 rounded-full px-4 py-2 shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {currentImageIndex + 1} / {images.length}
                  </motion.div>
                )}
                {activeMedia.type === "video" && <div />}

                {/* Close Button */}
                <motion.button
                  onClick={closeMedia}
                  className="bg-white/90 hover:bg-white backdrop-blur-md border border-white/40 rounded-full p-3 text-gray-900 transition-all duration-300 group shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Content with Navigation for Images */}
              {activeMedia.type === "image" ? (
                <div className="relative flex-1 flex items-center justify-center">
                  {/* Previous Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                    className="absolute left-2 md:left-4 z-20 bg-white/90 hover:bg-white backdrop-blur-md border border-white/40 rounded-full p-3 md:p-4 text-gray-900 transition-all duration-300 group shadow-lg"
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.button>

                  {/* Image with Animation */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      className="relative max-w-full max-h-full"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={activeMedia.src}
                        alt={activeMedia.alt || "Infrastructure Photo"}
                        className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Next Button */}
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                    className="absolute right-2 md:right-4 z-20 bg-white/90 hover:bg-white backdrop-blur-md border border-white/40 rounded-full p-3 md:p-4 text-gray-900 transition-all duration-300 group shadow-lg"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.button>
                </div>
              ) : (
                /* Video Content */
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black/50 w-full">
                  <div className="aspect-video">
                    <video
                      src={activeMedia.src}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                    >
                      <track kind="captions" label="English captions" />
                    </video>
                  </div>
                </div>
              )}

              {/* Keyboard hint removed per UX request */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
