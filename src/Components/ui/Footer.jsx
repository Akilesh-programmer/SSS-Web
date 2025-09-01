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
  FaClock,
  FaAmbulance,
  FaHeart,
  FaUserMd,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Specialties", href: "#specialties" },
    { name: "Emergency Services", href: "tel:+919876543210" },
    { name: "Virtual Tour", href: "#virtual-tour" },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Enhanced Map Section */}
      <div className="w-full bg-gray-50 flex flex-col items-center py-12 px-4">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 text-center mb-8">
            Visit Our Hospital
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.0317806730119!2d77.68973059999999!3d11.3254179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96ee50acf6c25%3A0x737ed856b07b068e!2sSSS%20superspeciality%20hospital!5e0!3m2!1sen!2sin!4v1756102870333!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{
                  border: 0,
                  borderRadius: "1rem",
                  boxShadow: "0 4px 24px rgba(16,185,129,0.15)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SSS Hospital Location"
              ></iframe>
            </div>

            <div className="flex-1 w-full lg:pl-8">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-600" /> Hospital
                  Address
                </h3>
                <div className="text-gray-700 leading-relaxed mb-4">
                  167/2C1, Perundurai Rd, Diamond Nagar, Nalliyampalayam,
                  <br />
                  Erode, Tamil Nadu 638009
                </div>

                <div className="grid gap-3">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaPhoneAlt className="text-emerald-600" />
                    <div>
                      <span className="font-semibold">Emergency: </span>
                      <a
                        href="tel:+919876543210"
                        className="text-emerald-600 hover:underline"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaEnvelope className="text-emerald-600" />
                    <div>
                      <span className="font-semibold">Email: </span>
                      <a
                        href="mailto:info@ssshospital.com"
                        className="text-emerald-600 hover:underline"
                      >
                        info@ssshospital.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaClock className="text-emerald-600" />
                    <div>
                      <span className="font-semibold">OPD Hours: </span>
                      Mon-Sat: 9AM-8PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                  <FaHeart className="text-3xl text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-900">
                    150+
                  </div>
                  <div className="text-sm text-gray-600">Hospital Beds</div>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                  <FaUserMd className="text-3xl text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-900">25+</div>
                  <div className="text-sm text-gray-600">Specialties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Hospital Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/src/assets/sss-logo.jpeg"
                  alt="SSS Hospital Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-emerald-400">
                    SSS Hospital
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Excellence in Healthcare
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-base mb-6">
                Bringing world-class healthcare to the heart of Erode. Your
                trusted partner in health with comprehensive medical services
                and 24/7 emergency care.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-emerald-400 transition-colors text-left text-base"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Contact & Hours
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2 text-base">
                    Hospital Hours
                  </h5>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div>OPD: Mon-Sat 9AM-8PM</div>
                    <div>Emergency: 24/7</div>
                    <div>ICU Visits: 4PM-6PM</div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-white mb-2 text-base">
                    Contact Info
                  </h5>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div>Reception: +91 98765 43210</div>
                    <div>Ambulance: +91 98765 43211</div>
                    <div>Email: info@ssshospital.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital Address & Emergency */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-emerald-400">
                Hospital Address
              </h4>
              <div className="text-gray-300 text-sm leading-relaxed mb-6">
                167/2C1, Perundurai Rd, Diamond Nagar,
                <br />
                Nalliyampalayam, Erode, Tamil Nadu 638009
              </div>

              {/* Emergency Banner - Clickable */}
              <div
                onClick={() => (window.location.href = "tel:+919876543210")}
                className="bg-red-600 rounded-lg p-4 cursor-pointer hover:bg-red-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FaAmbulance className="text-white text-xl" />
                  <span className="font-bold text-white">24/7 Emergency</span>
                </div>
                <div className="text-white text-lg font-bold">
                  +91 98765 43210
                </div>
                <div className="text-red-100 text-xs mt-1">
                  Click to call now
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 SSS Super Speciality Hospital. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Careers
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
