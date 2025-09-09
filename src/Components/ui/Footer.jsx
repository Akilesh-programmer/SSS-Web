import { useRef, useEffect, useState } from "react";
import logoFull from "../../assets/SSS-full-logo.png";
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaAmbulance,
} from "react-icons/fa";

// Small Counter component: counts 0 -> end over `duration` ms when visible
function Counter({
  end = 0,
  suffix = "",
  duration = 2000,
  className = "text-xl lg:text-2xl font-bold text-slate-800",
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const elRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTs = null;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const current = Math.round(progress * end);
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [started, end, duration]);

  return (
    <div ref={elRef}>
      <div className={className}>
        {value}
        {suffix}
      </div>
    </div>
  );
}

Counter.propTypes = {
  end: PropTypes.number,
  suffix: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
};

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      {/* Main Footer */}
      <div className="bg-slate-900 text-slate-50 pt-8 lg:pt-12 pb-6 lg:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Hospital Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={logoFull}
                  alt="SSS Hospital Logo"
                  className="w-24 h-18 lg:w-28 lg:h-20 rounded-lg object-cover ring-2 ring-teal-500/20 shadow-md"
                />
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-teal-300">
                    SSS Hospital
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Excellence in Healthcare
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-6">
                Bringing world-class healthcare to the heart of Erode. Your
                trusted partner in health with comprehensive medical services
                available 24/7.
              </p>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/ssshospitals_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href="https://x.com/sss_hospitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-500 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <FaTwitter className="text-lg" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61553553123476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  href="https://www.youtube.com/@SSS_Hospitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-red-600 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <FaYoutube className="text-lg" />
                </a>
                <a
                  href="https://www.linkedin.com/company/sss-hospitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h4 className="text-lg lg:text-xl font-bold mb-5 text-teal-300 flex items-center gap-2">
                <FaPhoneAlt className="text-base" />
                Contact Us
              </h4>

              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <h5 className="font-semibold text-white mb-2 text-sm uppercase tracking-wide">
                    Hospital Lines
                  </h5>
                  <div className="space-y-2">
                    <a
                      href="tel:04242888777"
                      aria-label="Call 0424 2888777"
                      className="flex items-center gap-3 px-4 py-3 rounded-md text-teal-300 hover:text-teal-200 transition-colors text-sm lg:text-base font-medium w-full justify-center md:w-auto md:justify-start focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 cursor-pointer"
                    >
                      <FaPhoneAlt className="text-teal-300 flex-shrink-0" />
                      <span>0424 - 2888777</span>
                    </a>

                    <a
                      href="tel:+917729888777"
                      aria-label="Call +91 7729 888777"
                      className="flex items-center gap-3 px-4 py-3 rounded-md text-teal-300 hover:text-teal-200 transition-colors text-sm lg:text-base font-medium w-full justify-center md:w-auto md:justify-start focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 cursor-pointer"
                    >
                      <FaPhoneAlt className="text-teal-300 flex-shrink-0" />
                      <span>+91 7729 888777</span>
                    </a>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <h5 className="font-semibold text-white mb-2 text-sm uppercase tracking-wide">
                    Email
                  </h5>
                  <a
                    href="mailto:info@ssshospitals.in"
                    aria-label="Email info@ssshospitals.in"
                    className="flex items-center gap-3 px-4 py-3 rounded-md text-teal-300 hover:text-teal-200 transition-colors text-sm lg:text-base break-all w-full justify-center md:w-auto md:justify-start focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 cursor-pointer"
                  >
                    <FaEnvelope className="text-teal-300 flex-shrink-0" />
                    <span>info@ssshospitals.in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Emergency & Availability */}
            <div className="lg:col-span-1">
              <h4 className="text-lg lg:text-xl font-bold mb-5 text-red-400 flex items-center gap-2">
                <FaAmbulance className="text-base" />
                Emergency
              </h4>

              <div className="space-y-4">
                <a
                  href="tel:+918925931193"
                  className="block bg-red-600 rounded-xl p-4 hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                  aria-label="Click to call ambulance 89259 31193"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaAmbulance className="text-white text-lg" />
                    <span className="font-bold text-white text-base">
                      Click to Call Ambulance
                    </span>
                  </div>
                  <div className="text-white text-lg lg:text-xl font-bold">
                    89259 31193
                  </div>
                  <div className="text-red-100 text-sm">
                    24/7 Emergency Response
                  </div>
                </a>

                <div className="bg-teal-900/30 rounded-lg p-4 border border-teal-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FaClock className="text-teal-400" />
                    <span className="font-semibold text-teal-300 text-sm uppercase tracking-wide">
                      Availability
                    </span>
                  </div>
                  <div className="text-white font-bold text-base">
                    24/7 Healthcare Services
                  </div>
                  <div className="text-teal-200 text-sm">
                    Always here for you
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="lg:col-span-1">
              <h4 className="text-lg lg:text-xl font-bold mb-5 text-teal-300 flex items-center gap-2">
                <FaMapMarkerAlt className="text-base" />
                Location
              </h4>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <div className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  <div className="font-semibold text-white mb-2">Address</div>
                  167/2C1, Perundurai Road,
                  <br />
                  Opp to SBI Bank, URC Nagar,
                  <br />
                  Erode - 638 009
                </div>
              </div>

              <div className="mt-4 text-center">
                <a
                  href="https://maps.google.com/?q=SSS+Hospital+Erode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  <FaMapMarkerAlt />
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-6 pt-4">
            <div className="flex justify-center items-center py-2">
              <div className="text-slate-400 text-sm text-center">
                © 2025 SSS Super Speciality Hospital. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
