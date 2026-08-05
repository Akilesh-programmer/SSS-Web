import { useRef, useEffect, useState } from "react";
const logoFullLocal = "/assets/logos/sss-full-logo.avif";
const logoFull = logoFullLocal;
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaAmbulance,
} from "react-icons/fa";
import { SiX } from "react-icons/si";

// Small Counter component — renders final value for SSG, counts 0 -> end in browser
function Counter({
  end = 0,
  suffix = "",
  duration = 2000,
  className = "text-heading-md text-slate-800",
}) {
  // Initialize with end value so pre-rendered HTML shows the real number (not 0)
  const [value, setValue] = useState(end);
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
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    // Detect if running inside Puppeteer SSG pre-renderer
    const isPrerendering =
      typeof window !== "undefined" &&
      (window.__PRERENDER_INJECTED ||
        navigator.userAgent.includes("HeadlessChrome") ||
        navigator.userAgent.includes("Puppeteer") ||
        navigator.userAgent.includes("Prerender"));

    let startTs = null;

    if (!isPrerendering) {
      setValue(0);
    }

    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const current = Math.round(progress * end);
      if (!isPrerendering) {
        setValue(current);
      }
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
    <footer className="bg-slate-900 text-slate-50" itemScope itemType="https://schema.org/Hospital">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Hospital Info - Enhanced */}
          <div className="lg:col-span-4">
            {/* Centered Logo with NABH Badge */}
            <div className="flex items-center justify-center mb-4">
              <div className="rounded-lg bg-white p-2 flex items-center justify-center shadow-lg gap-2 sm:gap-3">
                <img
                  src={logoFull}
                  alt="SSS Super Speciality Hospital Logo"
                  className="h-16 sm:h-18 md:h-20 w-auto object-contain rounded-sm"
                />
                {/* Vertical divider */}
                <div className="h-10 sm:h-12 md:h-14 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent shrink-0"></div>
                {/* NABH Badge */}
                <img
                  src="/NABH.jpeg"
                  alt="NABH Accredited Hospital - National Accreditation Board for Hospitals"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-sm"
                />
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-3 text-center" itemProp="description">
              Bringing world-class healthcare to Erode with comprehensive
              medical services available 24/7. Serving patients from Erode,
              Perundurai, Bhavani & surrounding areas.
            </p>

            {/* Key Department Links for Internal Linking */}
            <div className="flex flex-wrap gap-1.5 justify-center mb-4">
              {[
                { name: "Cardiology", href: "/specialities/cardiology" },
                { name: "Orthopaedics", href: "/specialities/orthopaedics" },
                { name: "Neurology", href: "/specialities/neurology" },
                { name: "OB-GYN", href: "/specialities/obstetrics-gynaecology" },
                { name: "Gastro", href: "/specialities/gastroenterology" },
                { name: "Nephrology", href: "/specialities/nephrology" },
              ].map((dept) => (
                <a
                  key={dept.name}
                  href={dept.href}
                  className="text-xs bg-slate-800 text-teal-300 px-2 py-1 rounded hover:bg-slate-700 transition-colors"
                >
                  {dept.name}
                </a>
              ))}
            </div>

            {/* Social Media - Compact */}
            <div className="flex gap-2 justify-center">
              <a
                href="https://www.instagram.com/sss_superspeciality_hospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow SSS Hospital on Instagram"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://x.com/sss_hospital_ed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow SSS Hospital on X (Twitter)"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <SiX className="text-sm" />
              </a>
              <a
                href="https://www.facebook.com/SSS.Superspeciality.Hospital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow SSS Hospital on Facebook"
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaFacebook className="text-sm" />
              </a>
              <a
                href="https://www.youtube.com/@SSSHospital-ed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch SSS Hospital on YouTube"
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
                  <span className="sr-only">Hospital Lines</span>
                </p>
                <div className="space-y-1">
                  <a
                    href="tel:04242888777"
                    className="flex items-center gap-2 text-teal-300 hover:text-teal-200 transition-colors text-sm"
                    itemProp="telephone"
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
                <h4 className="text-lg font-bold mb-0 text-teal-300 flex items-center gap-2">
                  <FaEnvelope className="text-sm" />
                  Email
                </h4>
                <a
                  href="mailto:info@ssshospitals.in"
                  className="text-teal-300 hover:text-teal-200 transition-colors text-sm"
                  itemProp="email"
                >
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
            <h4 className="text-lg font-bold mb-4 text-red-400">
              <span className="sr-only">Emergency</span>
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
          <div className="lg:col-span-2" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <h4 className="text-lg font-bold mb-4 text-teal-300 flex items-center gap-2">
              <FaMapMarkerAlt className="text-sm" />
              Location
            </h4>

            <div className="text-gray-300 text-sm leading-relaxed mb-4">
              <div className="font-semibold text-white mb-1" itemProp="name">SSS Super Speciality Hospital</div>
              <span itemProp="streetAddress">167/2C1, Perundurai Road, </span>
              <span className="whitespace-nowrap">
                Opp to SBI Bank, URC Nagar,
              </span>
              <span> <span itemProp="addressLocality">Erode</span> - <span itemProp="postalCode">638 009</span></span>
              <meta itemProp="addressRegion" content="Tamil Nadu" />
              <meta itemProp="addressCountry" content="IN" />
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2026 SSS Super Speciality Hospital. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
