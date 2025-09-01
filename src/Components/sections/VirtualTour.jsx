import React, { useState } from "react";
import {
  FaPlay,
  FaTimes,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import hospitalVideo from "../../assets/Hospital Full Tour Video.mp4";
import hospitalImg from "../../assets/sss-hospital.avif";

const VirtualTour = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const hospitalInfo = [
    {
      icon: <FaMapMarkerAlt className="text-emerald-600" />,
      title: "Location",
      details:
        "167/2C1, Perundurai Rd, Diamond Nagar, Nalliyampalayam, Erode, Tamil Nadu 638009",
    },
    {
      icon: <FaPhone className="text-emerald-600" />,
      title: "24/7 Emergency",
      details: "+91 98765 43210",
    },
    {
      icon: <FaClock className="text-emerald-600" />,
      title: "OPD Hours",
      details: "Mon-Sat: 9AM-8PM",
    },
  ];

  return (
    <section id="virtual-tour" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">
            Take a Virtual Tour
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our state-of-the-art facilities and modern infrastructure
            that makes SSS Super Speciality Hospital the best choice for your
            healthcare needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-gradient-to-br from-emerald-600 to-teal-700 p-2">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={hospitalImg}
                  alt="SSS Hospital"
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-300"></div>

                {/* Play Button with Ripple Effect */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="relative">
                    {/* Ripple animations */}
                    <div className="absolute inset-0 w-20 h-20 bg-white/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>

                    {/* Main play button */}
                    <div className="relative w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:scale-125 transition-all duration-300 border-4 border-white/50">
                      <FaPlay className="text-emerald-600 text-2xl ml-1 drop-shadow-sm" />
                    </div>
                  </div>
                </button>

                {/* Video Label with enhanced design */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-emerald-900 font-semibold">
                    Hospital Full Tour
                  </p>
                  <p className="text-sm text-gray-600">
                    Click to watch our facilities
                  </p>
                </div>
              </div>
            </div>

            {/* Hospital Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <h3 className="text-2xl font-bold text-emerald-600">150+</h3>
                <p className="text-sm text-gray-600">Beds</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <h3 className="text-2xl font-bold text-emerald-600">4</h3>
                <p className="text-sm text-gray-600">Operating Theatres</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <h3 className="text-2xl font-bold text-emerald-600">30+</h3>
                <p className="text-sm text-gray-600">ICU Beds</p>
              </div>
            </div>
          </motion.div>

          {/* Hospital Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Modern Healthcare Infrastructure
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our hospital features cutting-edge medical technology, spacious
                patient rooms, and world-class facilities designed to provide
                the highest standard of care in a comfortable and healing
                environment.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">🏥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Advanced AI & 3D Cath Lab
                  </h4>
                  <p className="text-gray-600">
                    State-of-the-art cardiac catheterization laboratory with AI
                    technology
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">🚑</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    24/7 Emergency Services
                  </h4>
                  <p className="text-gray-600">
                    Round-the-clock emergency care with trained paramedics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-600 font-bold">🔬</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Modern Diagnostic Center
                  </h4>
                  <p className="text-gray-600">
                    Advanced radiology and laboratory services for accurate
                    diagnosis
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid gap-4 pt-6">
              {hospitalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-md"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <FaTimes />
              </button>
              <video
                src={hospitalVideo}
                controls
                autoPlay
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VirtualTour;
