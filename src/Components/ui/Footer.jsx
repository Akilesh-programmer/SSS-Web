import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaAmbulance,
  FaHeart,
  FaUserMd,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      {/* Map + Contact Card */}
      <div className="w-full flex flex-col items-center py-8 lg:py-12 px-4">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-emerald-900 text-center mb-6 lg:mb-8 px-4">
            Visit Our Hospital
          </h2>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="flex-1 w-full">
              <iframe
                title="SSS Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d978.0317806730119!2d77.68973059999999!3d11.3254179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96ee50acf6c25%3A0x737ed856b07b068e!2sSSS%20superspeciality%20hospital!5e0!3m2!1sen!2sin!4v1756102870333!5m2!1sen!2sin"
                className="w-full lg:h-[400px] h-72 rounded-xl shadow-[0_4px_24px_rgba(16,185,129,0.15)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex-1 w-full lg:pl-8">
              <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-4 lg:mb-6">
                <h3 className="text-lg lg:text-xl font-bold text-emerald-900 mb-3 lg:mb-4 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-600" /> Hospital
                  Address
                </h3>

                <div className="text-gray-700 leading-relaxed mb-3 lg:mb-4 text-sm lg:text-base">
                  167/2C1, Perundurai Rd, Diamond Nagar, Nalliyampalayam,
                  <br /> Erode, Tamil Nadu 638009
                </div>

                <div className="grid gap-2 lg:gap-3">
                  <div className="flex items-center gap-2 lg:gap-3 text-gray-700 text-sm lg:text-base">
                    <FaPhoneAlt className="text-emerald-600 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Emergency: </span>
                      <a
                        href="tel:+919876543210"
                        className="text-emerald-600 hover:underline break-all"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 lg:gap-3 text-gray-700 text-sm lg:text-base">
                    <FaEnvelope className="text-emerald-600 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Email: </span>
                      <a
                        href="mailto:info@ssshospital.com"
                        className="text-emerald-600 hover:underline break-all"
                      >
                        info@ssshospital.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 lg:gap-3 text-gray-700 text-sm lg:text-base">
                    <FaClock className="text-emerald-600 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">OPD Hours: </span>
                      Mon-Sat: 9AM-8PM
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="bg-emerald-50 rounded-lg p-3 lg:p-4 text-center">
                  <FaHeart className="text-2xl lg:text-3xl text-emerald-600 mx-auto mb-1 lg:mb-2" />
                  <div className="text-xl lg:text-2xl font-bold text-emerald-900">
                    150+
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">
                    Hospital Beds
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-3 lg:p-4 text-center">
                  <FaUserMd className="text-2xl lg:text-3xl text-emerald-600 mx-auto mb-1 lg:mb-2" />
                  <div className="text-xl lg:text-2xl font-bold text-emerald-900">
                    25+
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">
                    Specialties
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-white pt-6 lg:pt-8 pb-4 lg:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/src/assets/sss-logo.jpeg"
                  alt="SSS Hospital Logo"
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-emerald-400">
                    SSS Hospital
                  </h3>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    Excellence in Healthcare
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4">
                Bringing world-class healthcare to the heart of Erode. Your
                trusted partner in health with comprehensive medical services
                and 24/7 emergency care.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/ssshospitals_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/sss_hospitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61553553123476"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">
                Contact & Hours
              </h4>
              <div className="space-y-3">
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

            <div>
              <h4 className="text-lg font-semibold mb-4 text-emerald-400">
                Emergency & Location
              </h4>

              <a
                href="tel:+919876543210"
                className="block bg-red-600 rounded-lg p-3 hover:bg-red-700 transition-colors mb-3"
              >
                <div className="flex items-center gap-2 mb-1">
                  <FaAmbulance className="text-white text-lg" />
                  <span className="font-bold text-white text-base">
                    24/7 Emergency
                  </span>
                </div>
                <div className="text-white text-lg font-bold">
                  +91 98765 43210
                </div>
                <div className="text-red-100 text-sm">Click to call now</div>
              </a>

              <div className="text-gray-300 text-sm leading-relaxed">
                <div className="font-semibold text-white mb-1">Address</div>
                167/2C1, Perundurai Rd, Diamond Nagar,
                <br /> Nalliyampalayam, Erode, Tamil Nadu 638009
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 pt-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 SSS Super Speciality Hospital. All rights reserved.
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex gap-4 text-gray-400">
                  <a
                    href="/privacy"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="/careers"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    Careers
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
