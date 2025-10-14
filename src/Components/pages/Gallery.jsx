import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImageGrid from "../ui/OptimizedImageGrid";
import HeroSection from "../ui/HeroSection";
import { FaHospital, FaPlayCircle, FaTimes, FaImages } from "react-icons/fa";

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

  const openImage = (img) =>
    setActiveMedia({ type: "image", src: img.src, alt: img.alt });
  const openVideo = () => setActiveMedia({ type: "video", src: videoUrl });
  const closeMedia = () => setActiveMedia(null);

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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
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

        {/* Optimized Image Grid */}
        <OptimizedImageGrid
          items={images}
          onItemClick={(img) => openImage(img)}
          aspectRatio="4/3"
          columnsMinWidth={240}
          enableAnimation={false}
          className="mt-2"
        />

        {/* Video Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Full Hospital Tour
              </h3>
              <p className="text-gray-600 max-w-2xl leading-relaxed">
                Immerse yourself in a guided walkthrough of our facility
                showcasing critical care units, diagnostics, surgical suites &
                patient-centric spaces.
              </p>
            </div>
            <div>
              <button
                onClick={openVideo}
                className="group flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg hover:shadow-xl transition-all border border-emerald-500/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
              >
                <FaPlayCircle className="text-white text-xl group-hover:scale-110 transition-transform" />
                <span>Play Video</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            className="relative w-full text-left rounded-3xl overflow-hidden shadow-2xl group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60"
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
                    className="absolute inset-0 w-24 h-24 bg-white/20 rounded-full"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="relative w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border-4 border-white/60"
                    whileHover={{ scale: 1.08 }}
                  >
                    <FaPlayCircle className="text-emerald-600 text-4xl" />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6">
              <h4 className="text-white font-bold text-2xl sm:text-3xl mb-2 tracking-tight drop-shadow-lg">
                Hospital Virtual Tour
              </h4>
              <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                Click to view the full immersive walkthrough.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeMedia && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMedia}
          >
            <motion.div
              layout
              className="relative w-full max-w-6xl mx-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeMedia}
                className="absolute -top-14 right-0 text-white/80 hover:text-white transition-colors"
              >
                <FaTimes className="w-8 h-8" />
              </button>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black/50">
                {activeMedia.type === "image" && (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.alt || "Gallery Image"}
                    className="w-full h-full object-contain max-h-[78vh] mx-auto"
                  />
                )}
                {activeMedia.type === "video" && (
                  <video
                    src={activeMedia.src}
                    className="w-full h-full max-h-[78vh] object-contain"
                    controls
                    autoPlay
                  >
                    <track kind="captions" label="English captions" />
                  </video>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
