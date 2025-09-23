import { useRef, useEffect, useState } from "react";
import logoFull from "../../assets/SSS-full-logo.png";
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaAmbulance,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

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
        if (entry.isIntersecting && !started) {
          setStarted(true);
        } else if (!entry.isIntersecting && started) {
          // Reset when element goes out of view
          setStarted(false);
          setValue(0);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

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
    <footer className="bg-slate-900 text-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Hospital Info - Enhanced */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-30 h-18 rounded-md bg-white p-1 flex items-center justify-center shadow-lg flex-shrink-0">
                <img
                  src={logoFull}
                  alt="SSS Hospital Logo"
                  className="max-w-full max-h-full object-contain rounded-sm"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-teal-300 mb-1">
                  SSS Super
                </h3>
                <h4 className="text-base md:text-lg font-semibold text-teal-200 -mt-1">
                  Speciality Hospital
                </h4>
                <p className="text-gray-400 text-sm font-medium">
                  Excellence in Healthcare
                </p>
                {/* EST. 2020 removed per request */}
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Bringing world-class healthcare to Erode with comprehensive
              medical services available 24/7.
            </p>

            {/* Social Media - Compact */}
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/sss_superspeciality_hospital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://x.com/sss_hospital_ed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <SiX className="text-sm" />
              </a>
              <a
                href="https://www.facebook.com/SSS.Superspeciality.Hospital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaFacebook className="text-sm" />
              </a>
              <a
                href="https://www.youtube.com/@SSSHospital-ed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <FaYoutube className="text-sm" />
              </a>
            </div>
          </div>

          {/* Contact Information - Streamlined */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 text-teal-300 flex items-center gap-2">
              <FaPhoneAlt className="text-sm" />
              Contact
            </h4>

            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">
                  Hospital Lines
                </p>
                <div className="space-y-1">
                  <a
                    href="tel:04242888777"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors text-sm"
                  >
                    <FaPhoneAlt className="text-xs" />
                    0424 - 2888777
                  </a>
                  <a
                    href="tel:+917729888777"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors text-sm"
                  >
                    <FaPhoneAlt className="text-xs" />
                    +91 7729 888777
                  </a>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-xs font-medium mb-2 uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:info@ssshospitals.in"
                  className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors text-sm"
                >
                  <FaEnvelope className="text-xs" />
                  info@ssshospitals.in
                </a>
              </div>

              <div className="flex items-center gap-2 bg-teal-900/20 rounded-lg p-2">
                <FaClock className="text-teal-400 text-sm" />
                <div>
                  <div className="text-white font-semibold text-sm">
                    24/7 Available
                  </div>
                  <div className="text-teal-200 text-xs">
                    Always here for you
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency - Prominent */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-bold mb-4 text-red-400 flex items-center gap-2">
              <FaAmbulance className="text-sm" />
              Emergency
            </h4>

            <a
              href="tel:+918925931193"
              className="block bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-4 hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-2">
                <FaAmbulance className="text-white text-lg" />
                <span className="font-bold text-white text-sm">
                  Emergency Call
                </span>
              </div>
              <div className="text-white text-lg font-bold">89259 31193</div>
              <div className="text-red-100 text-xs">24/7 Response Team</div>
            </a>
          </div>

          {/* Location - Compact */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-4 text-teal-300 flex items-center gap-2">
              <FaMapMarkerAlt className="text-sm" />
              Location
            </h4>

            <div className="text-gray-300 text-sm leading-relaxed mb-4">
              <div className="font-semibold text-white mb-1">Address</div>
              <span>167/2C1, Perundurai Road, </span>
              <span className="whitespace-nowrap">
                Opp to SBI Bank, URC Nagar,
              </span>
              <span> Erode - 638 009</span>
            </div>

            <div className="mt-2 flex justify-center lg:justify-start">
              <a
                href="https://maps.app.goo.gl/2xkTddYbxgtg8dec7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg transition-colors text-xs font-medium"
              >
                <FaMapMarkerAlt className="text-xs" />
                Directions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 SSS Super Speciality Hospital. All rights reserved.
            </div>
            <div className="text-slate-400 text-sm flex flex-col sm:flex-row items-center gap-2">
              <span>Website by</span>
              <a
                href="https://www.automconsultancy.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-300 hover:text-teal-200 font-semibold ml-1"
                aria-label="Autom Consultancy Services website"
              >
                Autom Consultancy Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
