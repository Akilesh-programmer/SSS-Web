import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaBookOpen,
  FaBuilding,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Map Section */}
      <div className="w-full bg-white flex flex-col items-center py-8 px-2 md:px-0">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex-1 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.0317806730119!2d77.68973059999999!3d11.3254179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96ee50acf6c25%3A0x737ed856b07b068e!2sSSS%20superspeciality%20hospital!5e0!3m2!1sen!2sin!4v1756102870333!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{
                border: 0,
                borderRadius: "1rem",
                boxShadow: "0 2px 24px rgba(16,185,129,0.08)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SSS Hospital Location"
            ></iframe>
          </div>
          <div className="flex-1 w-full flex flex-col items-start justify-center mt-6 md:mt-0 px-2">
            <div className="text-lg font-bold text-emerald-900 mb-2 flex items-center gap-2">
              <FaMapMarkerAlt className="text-emerald-600" /> SSS Super
              Speciality Hospital
            </div>
            <div className="text-gray-700 text-base mb-2">
              167/2C1, Perundurai Rd, Diamond Nagar, Nalliyampalayam,
              <br />
              Erode, Tamil Nadu 638009
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-emerald-600" /> +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-600" /> info@ssshospital.com
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-emerald-600" /> www.ssshospital.com
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="w-full bg-transparent pt-12 pb-6 px-0 md:px-0 relative overflow-hidden">
        {/* Masked SSS background */}
        <div className="absolute left-0 right-0  bottom-28 xl:bottom-12 flex items-end justify-center pointer-events-none select-none z-50">
          <h1
            className="font-bold text-[2rem] md:text-[16rem] lg:text-[5rem] text-gray-200 flex items-center justify-center leading-none tracking-widest"
            style={{
              opacity: 1,
              userSelect: "none",
              marginBottom: 0,
              textShadow: "0 12px 48px rgba(16,185,129,0.08)",
            }}
          >
            SSS
          </h1>
          {/* Add image below SSS, using the Home image URL */}
          <img
            src="https://www.ssshospitals.in/images/WhatsApp%20Image%202024-11-22%20at%206.51.51%20PM.jpeg"
            alt="SSS Hospital Location"
            className="absolute bottom-0 xl:right-40 right-4 -translate-x-1/2 xl:w-24 xl:h-24 w-10 h-10  object-cover "
            style={{ zIndex: 1 }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto bg-white rounded-2xl border border-gray-100 p-8 flex flex-col md:flex-row gap-8 shadow-none">
          {/* Left: Logo & About */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-emerald-600 text-xl" />
              <span className="font-bold text-2xl text-emerald-900 tracking-wide">
                SSS Hospital
              </span>
            </div>
            <div className="text-gray-600 mb-4 text-base">
              SSS Super Speciality Hospital delivers world-class healthcare with
              compassion and innovation, serving the community for over 25
              years.
            </div>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-500 text-2xl transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 text-2xl transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 text-2xl transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-400 text-2xl transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-500 mb-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-emerald-600" /> +91 98765 43210
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-600" /> info@ssshospital.com
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-emerald-600" /> www.ssshospital.com
              </div>
            </div>
          </div>
          {/* Center: Links */}
          <div className="flex-[2] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-base">
            <div>
              <div className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaGlobe className="text-emerald-600" /> Product
              </div>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/features"
                    className="hover:text-emerald-600 transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="hover:text-emerald-600 transition"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-emerald-600 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/departments"
                    className="hover:text-emerald-600 transition"
                  >
                    Departments
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaBookOpen className="text-emerald-600" /> Resources
              </div>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/documentation"
                    className="hover:text-emerald-600 transition"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-emerald-600 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="hover:text-emerald-600 transition"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-emerald-600 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <FaBuilding className="text-emerald-600" /> Company
              </div>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/about"
                    className="hover:text-emerald-600 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="hover:text-emerald-600 transition"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-emerald-600 transition"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/partners"
                    className="hover:text-emerald-600 transition"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-6 px-4 text-xs text-gray-500">
          <div>
            © 2025 SSS Hospital. All rights reserved.
            <span className="mx-2">|</span>
            <a
              href="https://acs-liard.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 font-semibold transition"
            >
              Developed by Autom Consultancy Services
            </a>
          </div>
          <div className="flex gap-5 right-7 relative mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-emerald-600 transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-emerald-600 transition">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-emerald-600 transition">
              Cookies Settings
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
