import { FaArrowRight, FaSearch } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const facilities = [
  {
    label: "Emergency Medicine",
    desc: "Expert emergency care, 24/7 ambulance service.",
    img: "https://dam.northwell.edu/m/457c0fb15afb62a7/Drupal-NEWS_Five-challenges-facing-emergency-medicine.jpg",
    tag: "Emergency Care",
  },
  {
    label: "Cardiology",
    desc: "Advanced heart care and diagnostics.",
    img: "https://www.mountsinai.org/files/MSHealth/Assets/Media/final/HS/Care/heart-attack-coronary-kini-md.jpg",
    tag: "Cardiology",
  },
  {
    label: "Outpatient Services",
    desc: "Comfortable rooms and personalized attention.",
    img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2307982.jpg",
    tag: "Outpatient",
    badge: "Premium",
  },
  {
    label: "Pharmacy & Medication",
    desc: "On-site pharmacy with quick delivery.",
    img: "https://tourforcure.com/dimg/upload/282171636286944.jpg",
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
    <div className="h-[40rem] xl:h-[32rem] bg-gray-50 flex flex-col items-center justify-start px-2 md:px-8">
      {/* Header */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <button className="bg-emerald-100 text-emerald-900 rounded-full px-4 py-2 font-semibold text-sm shadow">
            Facilities
          </button>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Facilities
          </h2>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="rounded-full px-4 py-2 bg-white text-gray-700 shadow outline-none w-40"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button className="bg-black text-white rounded-full px-5 py-2 font-semibold flex items-center gap-2 shadow hover:bg-gray-800 transition">
            View All <FaArrowRight />
          </button>
        </div>
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
              <div className="relative h-[340px] rounded-2xl overflow-hidden shadow-xl bg-white flex-shrink-0 mx-auto max-w-xs w-full transition-transform hover:-translate-y-2 hover:shadow-2xl">
                <img
                  src={f.img}
                  alt={f.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/80 text-gray-900 rounded-full px-3 py-1 text-xs font-semibold shadow">
                    {f.tag}
                  </span>
                </div>
                {f.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-emerald-600 text-white rounded-full px-3 py-1 text-xs font-semibold shadow">
                      {f.badge}
                    </span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-2 drop-shadow">
                    {f.label}
                  </h3>
                  <p className="text-white/90 text-sm mb-3">{f.desc}</p>
                  <button className="bg-white/80 text-emerald-900 rounded-full px-4 py-2 font-semibold flex items-center gap-2 shadow hover:bg-white transition">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Description */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
        <div className="text-gray-700 text-sm max-w-md text-right">
          Book an appointment for personalized consultations, specialized
          treatments, or routine checkups, and take a step towards better
          health.
        </div>
      </div>
    </div>
  );
}
