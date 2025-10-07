import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptimizedImageGrid from "../ui/OptimizedImageGrid";

// Using public assets for better performance during deployment
const BG1 = "/assets/Final_Photos/DSC03391.webp";
const BG2 = "/assets/Final_Photos/DSC03392.webp";
const BG3 = "/assets/Final_Photos/DSC03326.webp";
const BG4 = "/assets/Final_Photos/IMG-20250923-WA0029.webp";
const INF1 = "/assets/Infrastructure_Photos/DSC03356.webp";
const INF2 = "/assets/Infrastructure_Photos/DSC03360.webp";
const INF3 = "/assets/Infrastructure_Photos/DSC03365.webp";
const INF4 = "/assets/Infrastructure_Photos/DSC03386.webp";
const INF5 = "/assets/Infrastructure_Photos/DSC03388.webp";
const INF6 = "/assets/Infrastructure_Photos/DSC03412.webp";
const INF7 = "/assets/Infrastructure_Photos/DSC03426.webp";
const INF8 = "/assets/Infrastructure_Photos/DSC03427.webp";
const INF9 = "/assets/Infrastructure_Photos/DSC03428.webp";
const INF10 = "/assets/Infrastructure_Photos/DSC03434.webp";
const INF11 = "/assets/Infrastructure_Photos/DSC03435.webp";
const INF12 = "/assets/Infrastructure_Photos/IMG-20250923-WA0016.webp";
const INF13 = "/assets/Infrastructure_Photos/IMG-20250923-WA0018.webp";
const INF14 = "/assets/Infrastructure_Photos/IMG-20250923-WA0019.webp";
const INF15 = "/assets/Infrastructure_Photos/IMG-20250923-WA0020.webp";
const INF16 = "/assets/Infrastructure_Photos/IMG-20250923-WA0023.webp";
const INF17 = "/assets/Infrastructure_Photos/IMG-20250923-WA0026.webp";
const INF18 = "/assets/Infrastructure_Photos/IMG-20250923-WA0027.webp";
const INF19 = "/assets/Infrastructure_Photos/IMG-20250923-WA0028.webp";
const INF20 = "/assets/Infrastructure_Photos/IMG-20250923-WA0030.webp";
const INF21 = "/assets/Infrastructure_Photos/IMG-20250923-WA0032.webp";
const hospitalVideo = "/assets/Hospital Full Tour Video.mp4";
const hospitalImg = "/assets/sss-hospital.avif";
import { FaHospital, FaPlayCircle, FaTimes } from "react-icons/fa";

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
      {/* Hero Section (consistent style) */}
      <motion.section
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${getHeroBgImage()})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8"
          >
            <FaHospital className="text-base md:text-xl mr-2 md:mr-3" />
            <span className="text-xs md:text-sm font-medium tracking-wide uppercase">
              Hospital Gallery
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              World-Class Infrastructure
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          >
            Explore our advanced facilities & patient-centric spaces through a
            curated visual experience.
          </motion.p>
        </div>
      </motion.section>

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
