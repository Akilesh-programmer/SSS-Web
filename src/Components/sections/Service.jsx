import {
  FaArrowRight,
  FaSearch,
  FaAmbulance,
  FaHeartbeat,
  FaUserMd,
  FaPills,
} from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const facilities = [
  {
    label: "Emergency Medicine",
    desc: "Expert emergency care, 24/7 ambulance service.",
    icon: FaAmbulance,
    tag: "Emergency Care",
  },
  {
    label: "Cardiology",
    desc: "Advanced heart care and diagnostics.",
    icon: FaHeartbeat,
    tag: "Cardiology",
  },
  {
    label: "Outpatient Services",
    desc: "Comfortable rooms and personalized attention.",
    icon: FaUserMd,
    tag: "Outpatient",
    badge: "Premium",
  },
  {
    label: "Pharmacy & Medication",
    desc: "On-site pharmacy with quick delivery.",
    icon: FaPills,
    tag: "Pharmacy",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

export default function Service() {
  return (
    <div className="py-16 bg-gradient-to-br from-emerald-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-emerald-600 font-semibold">Our Core Services</span>
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Excellence in Healthcare Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical care with state-of-the-art facilities and expert healthcare professionals
            </p>
          </motion.div>
        </div>

      {/* Facilities Carousel */}
      <div className="w-full max-w-6xl">
        <Carousel
          responsive={responsive}
          arrows
          showDots={false}
          infinite
          autoPlay={false}
          keyBoardControl
          containerClass="carousel-container"
          itemClass="px-2"
        >
          {facilities.map((f, idx) => (
            <div key={idx}>
              <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-emerald-50 to-teal-50 flex-shrink-0 mx-auto max-w-xs w-full transition-transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Professional Icon Background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-emerald-200">
                    <f.icon className="text-8xl" />
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 via-emerald-500/60 to-transparent" />

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col">
                  <div className="p-4">
                    <span className="bg-white/90 text-emerald-800 rounded-full px-3 py-1 text-xs font-semibold shadow">
                      {f.tag}
                    </span>
                    {f.badge && (
                      <span className="bg-emerald-600 text-white rounded-full px-3 py-1 text-xs font-semibold shadow ml-2">
                        {f.badge}
                      </span>
                    )}
                  </div>

                  {/* Icon in center */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 border border-white/30">
                      <f.icon className="text-4xl text-white" />
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 drop-shadow">
                      {f.label}
                    </h3>
                    <p className="text-white/90 text-sm mb-3">{f.desc}</p>
                    <button className="bg-white/80 text-emerald-900 rounded-full px-4 py-2 font-semibold flex items-center gap-2 shadow hover:bg-white transition">
                      Learn More <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Description */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
        <div className="text-gray-700 text-sm max-w-md text-left">
          Book an appointment for personalized consultations, specialized
          treatments, or routine checkups, and take a step towards better
          health.
        </div>
      </div>
    </div>
  );
}
