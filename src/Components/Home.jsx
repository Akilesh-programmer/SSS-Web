import React from "react";
import {
  FaSearch,
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full flex flex-col bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.jdmagicbox.com/v2/comp/erode/b5/9999px424.x424.250603121223.m3b5/catalogue/sss-super-speciality-hospital-thindal-erode-erode-multispeciality-hospitals-4rr18wrrje.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/60 to-white/10 pointer-events-none"></div>

      {/* Top Navigation */}
      <nav className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-6 md:pt-8">
        <div className="flex gap-2 md:gap-4">
          {["About Us", "Services", "Facilities", "Membership"].map((item) => (
            <button
              key={item}
              className="bg-white/70 backdrop-blur-md rounded-full px-3 md:px-5 py-2 text-emerald-900 font-semibold text-xs md:text-sm hover:bg-white shadow transition"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-0">
          <div className="bg-white rounded-full p-1 shadow">
            <img
              src="https://www.ssshospitals.in/images/WhatsApp%20Image%202024-11-22%20at%206.51.51%20PM.jpeg"
              alt="SSS Super Speciality Hospital Logo"
              className="w-8 h-8 md:w-12 md:h-12 object-cover rounded-full"
            />
          </div>
          <span className="text-lg md:text-2xl font-extrabold text-emerald-900 tracking-wide">
            SSS Super Speciality Hospital
          </span>
        </div>
        <div className="flex gap-2 items-center mt-3 md:mt-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="rounded-full px-3 md:px-4 py-2 bg-white/80 text-gray-700 shadow outline-none w-32 md:w-44 text-xs md:text-base"
            />
            <FaSearch className="absolute right-2 md:right-3 top-3 text-gray-400 text-xs md:text-base" />
          </div>
          <button className="bg-emerald-600 text-white rounded-full px-4 md:px-5 py-2 font-semibold flex items-center gap-2 shadow hover:bg-emerald-700 transition text-xs md:text-base">
            Book Now <FaArrowRight />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-1 px-2 md:px-0 pt-8 md:pt-10 pb-8 md:pb-10">
        {/* Headline Section */}
        <section className="w-full max-w-2xl md:max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-emerald-900 mb-3 md:mb-4 drop-shadow">
            Discover Hospitals, Access Care,
            <br />& Find Trusted Services Nearby
          </h1>
          <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-lg font-medium">
            Search trusted hospitals for top-notch care and easy appointments.
            <br className="hidden md:block" />
            Find the best hospitals near you in seconds!
          </p>
          <button
            className="bg-white rounded-full px-5 md:px-7 py-3 md:py-4 font-semibold text-emerald-900 shadow-xl flex items-center gap-2 md:gap-3 text-base md:text-lg mx-auto hover:bg-emerald-50 transition"
            as="a"
            href="https://maps.app.goo.gl/XpWFL8M2emx5sFwx5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Locate SSS Hospital <FaArrowRight className="text-emerald-600" />
          </button>
        </section>

        <section className="w-full hidden md:flex flex-row items-start justify-between mt-12 gap-8">
          <div className="bg-white/90 rounded-2xl shadow-xl p-6 flex flex-col items-center xl:min-w-[420px] max-w-[220px] ml-12">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client 1"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client 2"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Client 3"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
              <span className="bg-emerald-50 rounded-full px-3 py-1 text-xs font-semibold text-emerald-900 shadow whitespace-nowrap">
                25K+ SATISFIED CLIENT WITH US
              </span>
            </div>
            <p className="text-gray-700 font-medium text-center text-sm">
              We're committed to delivering a high-quality experience in a
              welcoming and supportive atmosphere.
            </p>
          </div>

          {/* Social & App Buttons */}
          <div className="flex flex-col items-end gap-4 mr-16">
            <div className="flex flex-col gap-2">
              <button className="bg-white rounded-full px-5 py-2 flex items-center gap-2 shadow hover:bg-emerald-50 transition font-semibold text-emerald-900">
                <FaInstagram className="text-pink-500" /> Instagram
              </button>
              <button className="bg-white rounded-full px-5 py-2 flex items-center gap-2 shadow hover:bg-emerald-50 transition font-semibold text-emerald-900">
                <FaTwitter className="text-blue-400" /> Twitter
              </button>
              <button className="bg-white rounded-full px-5 py-2 flex items-center gap-2 shadow hover:bg-emerald-50 transition font-semibold text-emerald-900">
                <FaFacebook className="text-blue-700" /> Facebook
              </button>
            </div>
            <button className="bg-emerald-600 text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-emerald-700 transition mt-2">
              Get the app
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
