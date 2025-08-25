import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFilePdf,
  FaAward,
  FaStar,
  FaCalendarAlt,
  FaUserMd,
  FaHospitalSymbol,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

const milestones = [
  { year: "1998", label: "Hospital Founded" },
  { year: "2005", label: "First NABH Accreditation" },
  { year: "2015", label: "Expansion to 30+ Departments" },
  { year: "2024", label: "Best Hospital Award" },
];

const testimonials = [
  "Dr. Kumar’s vision and care changed my life. – Patient",
  "A true leader in healthcare innovation. – Staff",
  "Compassionate and dedicated to every patient. – Family Member",
];

const faqs = [
  {
    q: "How can I contact the founder?",
    a: "You can use the Connect button above or reach out via LinkedIn or Twitter.",
  },
  {
    q: "What is the founder's main vision for the hospital?",
    a: "To set new standards in patient care and healthcare innovation.",
  },
];

export default function FoundersMessage() {
  const [faqOpen, setFaqOpen] = useState(Array(faqs.length).fill(false));
  const toggleFaq = (idx) => {
    setFaqOpen(faqOpen.map((open, i) => (i === idx ? !open : open)));
  };

  return (
    <div className="w-full bg-white py-12 px-2 md:px-8 flex flex-col items-center min-h-[700px]">
      {/* Hospital Logo */}
      <img
        src="https://www.ssshospitals.in/images/WhatsApp%20Image%202024-11-22%20at%206.51.51%20PM.jpeg"
        alt="Hospital Logo"
        className="w-16 h-16 rounded-full mb-6 shadow"
      />
      {/* Professional 2-column grid */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="   xl:max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-8"
      >
        {/* Left Column */}
        <div className="flex flex-col gap-7 items-start">
          {/* Founder’s Portrait */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-200 shadow-lg mb-2">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Name & Title */}
          <div>
            <div className="text-2xl font-semibold text-emerald-900 tracking-tight">
              Dr. S. Kumar
            </div>
            <div className="text-sm text-gray-500 mb-2">Founder & Chairman</div>
          </div>
          {/* Founder Bio/About Section */}
          <div className="bg-emerald-50 rounded-xl shadow px-4 py-3 border border-emerald-100 text-gray-700 text-base leading-relaxed mb-2">
            <span className="font-semibold text-emerald-900 mb-1 block">
              About the Founder
            </span>
            Dr. S. Kumar is a visionary leader in healthcare, with over 25 years of
            experience in patient care and hospital management. He founded SSS Super
            Speciality Hospital with a mission to bring world-class medical services to
            the community. His dedication to innovation, compassion, and excellence has
            earned the hospital numerous awards and accreditations. Dr. Kumar is known
            for his hands-on approach, mentoring staff, and always putting patients
            first.
          </div>
          {/* Credentials & Achievements */}
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-1 text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <FaAward className="text-yellow-500" /> NABH Accredited
            </span>
            <span className="flex items-center gap-1 text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <FaStar className="text-yellow-400" /> Best Hospital 2024
            </span>
            <span className="flex items-center gap-1 text-sm bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <FaCalendarAlt className="text-emerald-400" /> 25+ Years Experience
            </span>
          </div>
          {/* Social Media Links */}
          <div className="flex gap-4 mb-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900 text-xl"
            >
              <FaTwitter />
            </a>
          </div>
          {/* Connect Button */}
          <button className="bg-emerald-600 text-white rounded-full px-6 py-2 flex items-center gap-2 font-semibold shadow hover:bg-emerald-700 transition">
            <FaEnvelope /> Connect with Founder
          </button>
          {/* Downloadable Profile */}
          <a
            href="/founder-profile.pdf"
            download
            className="mt-3 flex items-center gap-2 text-emerald-700 hover:text-emerald-900 text-sm font-medium"
          >
            <FaFilePdf /> Download Profile
          </a>
          {/* Signature */}
          <div
            className="text-emerald-700 text-2xl mt-6"
            style={{ fontFamily: "cursive" }}
          >
            Dr. S. Kumar
          </div>
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-5">
          {/* Animated Quote */}
          <div className="flex items-center gap-2 mb-2">
            <FaQuoteLeft className="text-yellow-400 text-xl" />
            <span className="text-lg md:text-xl text-gray-700 font-medium italic">
              <Typewriter
                words={["Compassion.", "Excellence.", "Innovation."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1200}
              />
            </span>
          </div>
          {/* Message */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Welcome to SSS Super Speciality Hospital. Our mission is to deliver
            world-class healthcare with a personal touch, ensuring every patient
            feels valued and cared for.
          </p>
          {/* Short Video Message */}
          <div className="w-full flex justify-start">
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              className="rounded-xl shadow-lg w-full max-w-sm"
              poster="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=256&q=80"
            />
          </div>
          {/* Patient/Staff Testimonials */}
          <div className="w-full">
            <div className="bg-emerald-50 rounded-xl shadow px-4 py-3 border border-emerald-100 text-center text-gray-700 italic">
              <Typewriter
                words={testimonials}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1200}
              />
            </div>
          </div>
          {/* Founder’s Vision for the Future */}
          <div className="text-gray-700 text-base md:text-lg">
            <span className="font-semibold text-emerald-900">
              Vision for the Future:
            </span>
            <br />
            To pioneer new healthcare technologies and expand our reach,
            ensuring every patient receives the best care possible.
          </div>
          {/* Animated Stats */}
          <div className="flex gap-10 mt-2">
            <div className="flex flex-col items-center">
              <FaUserMd className="text-emerald-600 text-2xl mb-1" />
              <span className="text-xl font-semibold text-gray-900">
                25+
              </span>
              <span className="text-xs text-gray-500">Years Service</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCalendarAlt className="text-yellow-400 text-2xl mb-1" />
              <span className="text-xl font-semibold text-gray-900">
                14,000+
              </span>
              <span className="text-xs text-gray-500">Patients Helped</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHospitalSymbol className="text-emerald-400 text-2xl mb-1" />
              <span className="text-xl font-semibold text-gray-900">
                30+
              </span>
              <span className="text-xs text-gray-500">Departments Led</span>
            </div>
          </div>
          {/* Hospital Milestones Timeline */}
          <div className="mt-6 w-full">
            <div className="bg-white rounded-xl shadow px-4 py-3 border border-emerald-100">
              <div className="flex flex-col gap-2">
                {milestones.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-gray-900">
                      {m.year}
                    </span>
                    <span className="text-gray-600 text-sm">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Interactive Q&A */}
          <div className="mt-6 w-full">
            <div className="bg-white rounded-xl shadow px-4 py-3 border border-emerald-100">
              <div className="font-semibold text-emerald-900 mb-2">FAQ</div>
              {faqs.map((faq, idx) => (
                <div key={idx} className="mb-2">
                  <button
                    className="w-full text-left text-gray-700 font-medium py-2 px-3 rounded bg-emerald-50 hover:bg-emerald-100 transition"
                    onClick={() => toggleFaq(idx)}
                  >
                    {faq.q}
                  </button>
                  {faqOpen[idx] && (
                    <div className="bg-white border-l-4 border-emerald-400 px-4 py-2 text-gray-600 text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Contact/Appointment Link */}
          <a
            href="/appointment"
            className="mt-6 bg-yellow-400 text-emerald-900 rounded-full px-6 py-2 font-semibold shadow hover:bg-yellow-300 transition text-center block w-fit"
          >
            Book an Appointment
          </a>
        </div>
      </motion.div>
    </div>
  );
}
