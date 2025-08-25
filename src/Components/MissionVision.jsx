import React from "react";

export default function MissionVision() {
  return (
    <div className="relative bg-white py-12 px-2 md:px-12 flex flex-col md:flex-row items-center justify-center min-h-[420px] overflow-hidden">
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
      <div className="bg-gray-50 rounded-xl shadow-xl p-8 md:p-12 max-w-xl w-full z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-900 mb-8">
          Mission & Vision
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <span className="font-bold text-emerald-700 min-w-[70px]">
              MISSION
            </span>
            <p className="text-gray-700 leading-relaxed">
              To provide every patient with exceptional care, compassion, and
              advanced medical expertise in a safe and welcoming environment.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-bold text-emerald-700 min-w-[70px]">
              VISION
            </span>
            <p className="text-gray-700 leading-relaxed">
              To be a leader in healthcare innovation, setting new standards for
              excellence and patient satisfaction in our community and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline / Stats */}
      <div className="flex flex-col items-center md:items-start justify-center md:ml-16 mt-10 md:mt-0 z-10">
        <div className="flex flex-row md:flex-col items-center md:items-start gap-8 md:gap-10">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-[55%] top-1/2 transform -translate-y-1/2 h-56 w-2">
            <svg height="100%" width="100%">
              <line
                x1="1"
                y1="0"
                x2="1"
                y2="220"
                stroke="#fde68a"
                strokeWidth="4"
              />
            </svg>
          </div>
          {/* Dots and stats */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="w-4 h-4 rounded-full bg-yellow-200 border-2 border-yellow-300" />
              <div>
                <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  14,000
                </span>
                <div className="text-gray-600 text-sm">patients cared for</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-4 h-4 rounded-full bg-yellow-200 border-2 border-yellow-300" />
              <div>
                <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  Since 1998
                </span>
                <div className="text-gray-600 text-sm">
                  serving the community
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-4 h-4 rounded-full bg-yellow-200 border-2 border-yellow-300" />
              <div>
                <span className="text-2xl md:text-3xl font-extrabold text-gray-900">
                  30+ specialties
                </span>
                <div className="text-gray-600 text-sm">expert departments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
