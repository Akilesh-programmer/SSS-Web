import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent pt-12 pb-6 px-0 md:px-0 relative overflow-hidden">
      {/* Masked SSS background */}
      <div className="absolute z-50 left-0 right-0 bottom-20 flex items-end justify-center pointer-events-none select-none ">
        <h1
          className="font-bold text-[5rem] md:text-[16rem] lg:text-[7rem] text-gray-200 flex items-center justify-center leading-none tracking-widest"
          style={{
            opacity: 1,
            userSelect: "none",
            marginBottom: 0,
            textShadow: "0 12px 48px rgba(16,185,129,0.08)",
          }}
        >
          SSS
        </h1>
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
            compassion and innovation, serving the community for over 25 years.
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
        <div className="flex-[2] grid grid-cols-1 sm:grid-cols-3 gap-8 text-base">
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
                <a href="/about" className="hover:text-emerald-600 transition">
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
        <div>© 2025 SSS Hospital. All rights reserved.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
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
  );
}

// Add these imports at the top if not present:
import { FaBookOpen, FaBuilding } from "react-icons/fa";
