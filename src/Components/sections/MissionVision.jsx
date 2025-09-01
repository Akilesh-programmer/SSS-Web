import React from "react";
import CountUp from "react-countup";
import {
  FaUserMd,
  FaCalendarAlt,
  FaHospitalSymbol,
  FaAward,
  FaStar,
} from "react-icons/fa";

export default function MissionVision() {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-yellow-50 py-12 px-2 md:px-12 flex flex-col md:flex-row items-center justify-center min-h-[520px] overflow-hidden">
      {/* Decorative SVGs */}
      <svg className="absolute top-6 left-10 w-8 h-8" viewBox="0 0 32 32">
        <polygon points="16,0 32,32 0,32" fill="#10b981" />
      </svg>
      <svg className="absolute bottom-8 left-1/3 w-10 h-6" viewBox="0 0 40 24">
        <path d="M0,24 Q20,-12 40,24" fill="#f97316" />
      </svg>
      <svg className="absolute top-4 right-1/3 w-8 h-8" viewBox="0 0 32 32">
        <polygon points="16,0 32,32 0,32" fill="#14b8a6" />
      </svg>
      <svg className="absolute top-8 right-16 w-6 h-6" viewBox="0 0 24 24">
        <polygon
          points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
          fill="#fde68a"
        />
      </svg>

      {/* Mission & Vision Card */}
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 max-w-xl w-full z-10 border border-emerald-100">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8 tracking-tight text-center">
          Mission & Vision
        </h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <span className="font-semibold text-emerald-700 min-w-[80px] text-base md:text-lg tracking-wide">
              MISSION
            </span>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              To deliver exceptional care and compassion to every patient,
              combining advanced medical expertise with a safe, welcoming
              environment.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-4">
            <span className="font-semibold text-emerald-700 min-w-[80px] text-base md:text-lg tracking-wide">
              VISION
            </span>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              To lead healthcare innovation, setting new standards for
              excellence and patient satisfaction in our community and beyond.
            </p>
          </div>
        </div>
        {/* Testimonial */}
        <div className="bg-emerald-50 rounded-xl shadow px-6 py-4 mt-8 border border-emerald-100">
          <p className="italic text-gray-700 text-center text-lg">
            "SSS Super Speciality Hospital truly cares for every patient. Their
            commitment to excellence and compassion is unmatched."
          </p>
          <div className="text-right text-emerald-700 font-medium mt-2">
            — Patient Testimonial
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-emerald-600 text-white rounded-full px-6 py-3 font-semibold shadow-lg hover:bg-emerald-700 transition text-lg">
            Meet Our Team
          </button>
        </div>
      </div>

      {/* Premium Timeline / Stats */}
      <div className="flex flex-col items-center md:items-start justify-center md:ml-16 mt-10 md:mt-0 z-10 w-full max-w-xs">
        <div className="relative flex flex-col items-center w-full py-4">
          {/* Vertical pipeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-1 bg-yellow-300 z-0" />
          {/* Timeline items */}
          <div className="relative z-10 flex flex-col gap-16 w-full">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center relative">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 border-4 border-yellow-300 shadow-lg text-emerald-700 text-2xl mb-2 z-10">
                <FaUserMd />
              </span>
              <span className="text-2xl font-bold text-gray-900">
                <CountUp end={14000} duration={2} separator="," />
              </span>
              <div className="text-gray-700 text-base">Patients Cared For</div>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center relative">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 border-4 border-yellow-300 shadow-lg text-emerald-700 text-2xl mb-2 z-10">
                <FaCalendarAlt />
              </span>
              <span className="text-2xl font-bold text-gray-900">
                Since <CountUp end={1998} duration={1.5} />
              </span>
              <div className="text-gray-700 text-base">
                Serving the Community
              </div>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center relative">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 border-4 border-yellow-300 shadow-lg text-emerald-700 text-2xl mb-2 z-10">
                <FaHospitalSymbol />
              </span>
              <span className="text-2xl font-bold text-gray-900">
                <CountUp end={30} duration={1.5} />+
              </span>
              <div className="text-gray-700 text-base">Expert Departments</div>
            </div>
          </div>
        </div>
        {/* Awards/Certifications */}
        <div className="flex gap-4 mt-10 justify-center md:justify-start">
          <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow border border-yellow-100">
            <FaAward className="text-yellow-500" />
            <span className="text-sm text-gray-700 font-medium">
              NABH Accredited
            </span>
          </span>
          <span className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow border border-yellow-100">
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-700 font-medium">
              Best Hospital 2024
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
