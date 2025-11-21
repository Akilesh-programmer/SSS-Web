import { useState, useMemo } from "react";
import ModalPortal from "../ui/ModalPortal";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBed,
  FaHome,
  FaCrown,
  FaFileMedical,
  FaClock,
  FaEye,
  FaClinicMedical,
  FaTimes,
} from "react-icons/fa";
import HeroSection from "../ui/HeroSection";

// Hero background - using room photo as requested
const BG_HERO = "/assets/rooms/rooms-03401.avif";

// Room photos
const ROOM_PHOTOS = [
  "/assets/rooms/rooms-7.avif",
  "/assets/rooms/rooms-03401.avif",
  "/assets/rooms/rooms-03403.avif",
  "/assets/rooms/rooms-03404.avif",
  "/assets/rooms/rooms-03406.avif",
  "/assets/rooms/rooms-03407.avif",
  "/assets/rooms/rooms-03408.avif",
  "/assets/rooms/rooms-03409.avif",
];

const Rooms = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Room categories - merged Suite Rooms as requested
  const roomCategories = [
    {
      id: 1,
      name: "General Ward",
      icon: FaBed,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      name: "Semi Private Room",
      icon: FaHome,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      name: "Semi Private Room (A/C)",
      icon: FaHome,
      color: "from-teal-500 to-teal-600",
    },
    {
      id: 4,
      name: "Private Room",
      icon: FaBed,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: 5,
      name: "Private Room (A/C)",
      icon: FaBed,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 6,
      name: "Deluxe Room",
      icon: FaCrown,
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 7,
      name: "Suite Room",
      icon: FaCrown,
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 9,
      name: "EMR Observation",
      icon: FaFileMedical,
      color: "from-red-500 to-red-600",
    },
    {
      id: 10,
      name: "Daycare Observation",
      icon: FaClock,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 11,
      name: "Ophthalmic Daycare",
      icon: FaEye,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: 12,
      name: "Post Op Recovery",
      icon: FaClinicMedical,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  // Room images for gallery
  const roomImages = useMemo(
    () =>
      ROOM_PHOTOS.map((src, i) => ({
        id: i + 1,
        src,
        alt: `Hospital Room ${i + 1}`,
      })),
    []
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={BG_HERO}
        badge={{ icon: FaBed, text: "Accommodation" }}
        title="Rooms & Facilities"
        subtitle="Comfortable & Modern Patient Accommodation"
      />

      {/* Main Content - Side by Side Layout */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-3 mb-6 border border-emerald-200">
              <FaBed className="text-emerald-600 text-lg" />
              <span className="text-emerald-700 font-bold text-sm tracking-wide">
                ACCOMMODATION OPTIONS
              </span>
            </div>

            <h2 className="text-heading-xl mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Patient Rooms & Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern, comfortable accommodation designed for optimal patient
              care and recovery
            </p>
          </motion.div>

          {/* Desktop: Side by Side Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Room Images */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-heading-lg text-gray-800 mb-6">
                Room Gallery
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-20">
                {roomImages.map((image) => (
                  <motion.div
                    key={image.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Room Categories */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-heading-lg text-gray-800 mb-6">
                Room Categories
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {roomCategories.map((room) => {
                  const IconComponent = room.icon;
                  return (
                    <motion.div
                      key={room.id}
                      variants={fadeInUp}
                      whileHover={{ x: 4, scale: 1.01 }}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div
                        className={`flex items-center gap-4 p-5 bg-gradient-to-r ${room.color}`}
                      >
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="text-2xl text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {room.name}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Mobile: Stacked Layout */}
          <div className="lg:hidden space-y-12">
            {/* Room Categories First on Mobile */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <h3 className="text-heading-lg text-gray-800 mb-6">
                Room Categories
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roomCategories.map((room) => {
                  const IconComponent = room.icon;
                  return (
                    <motion.div
                      key={room.id}
                      variants={fadeInUp}
                      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                    >
                      <div
                        className={`flex items-center gap-3 p-4 bg-gradient-to-r ${room.color}`}
                      >
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="text-xl text-white" />
                        </div>
                        <h3 className="text-sm font-bold text-white">
                          {room.name}
                        </h3>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Room Images */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <h3 className="text-heading-lg text-gray-800 mb-6">
                Room Gallery
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {roomImages.map((image) => (
                  <motion.div
                    key={image.id}
                    variants={fadeInUp}
                    whileHover={{ y: -4 }}
                    className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ModalPortal>
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                className="relative max-w-5xl w-full max-h-[90vh]"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 22 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 text-white/90 hover:text-white bg-black/40 backdrop-blur-md rounded-full p-2 shadow-lg"
                  aria-label="Close image"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black/40">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-contain max-h-[85vh] mx-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </ModalPortal>
    </div>
  );
};

export default Rooms;
