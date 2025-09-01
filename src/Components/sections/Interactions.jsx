import React from "react";
import { BiChevronDown, BiChevronsRight } from "react-icons/bi";
import {
  FaPhoneAlt,
  FaUserMd,
  FaUserNurse,
  FaUser,
  FaHeartbeat,
} from "react-icons/fa";

export default function Interactions() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-50 via-white to-gray-100 p-0">
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10 items-center md:items-end w-full">
          {/* Left Section */}
          <div className="flex-1 max-w-2xl">
            <p className="flex items-center gap-2 text-sm text-emerald-700 mb-3">
              <span className="inline-block w-6 h-6 bg-emerald-100 rounded-full" />
              Trusted by thousands for premium healthcare, anytime.
            </p>
            <h1 className="text-2xl md:text-5xl font-medium leading-tight text-emerald-900 mb-2 drop-shadow">
              Excellence in Medical Care
              <br />
              at Your Convenience
            </h1>
            <span className="block mt-2 text-emerald-500 font-semibold text-lg">
              Your health, our highest priority.
            </span>
            <p className="mt-4 text-gray-700 max-w-lg">
              Experience world-class medical advice from certified
              professionals. SSS Super Speciality Hospital combines expertise,
              compassion, and technology to deliver seamless healthcare—wherever
              you are.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-600 text-white rounded-full px-6 py-3 font-semibold shadow-lg hover:bg-emerald-700 transition">
                Make an Appointment
              </button>
              <button className="border border-emerald-300 text-emerald-700 rounded-full px-6 py-3 flex items-center gap-2 font-semibold shadow-lg hover:bg-emerald-50 transition">
                Consult 30+ Specialists
                <BiChevronsRight />
              </button>
            </div>
          </div>
          {/* Right Section - Card and Animation Side by Side */}
          <div className="flex-1 flex flex-col md:flex-row gap-10 items-start justify-end w-full">
            {/* Card */}
            <div className="flex flex-col items-center w-full max-w-[400px]">
              <div className="bg-white rounded-2xl shadow-2xl p-8 mb-4 border border-emerald-100 w-full">
                <div className="flex items-center gap-4">
                  <FaUserMd className="w-12 h-12 p-2 rounded-lg bg-emerald-100 text-emerald-700 shadow" />
                  <div>
                    <div className="text-lg font-semibold text-emerald-900">
                      Online Doctor
                    </div>
                    <div className="text-xs text-emerald-500">
                      Available 24/7
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="bg-emerald-50 rounded-lg p-4 shadow-sm">
                    <div className="text-base font-bold text-emerald-700">
                      13+ Years
                    </div>
                    <div className="text-xs text-emerald-500">
                      Professional Experience
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 shadow-sm">
                    <div className="text-base font-bold text-emerald-700">
                      3,000+
                    </div>
                    <div className="text-xs text-emerald-500">
                      Satisfied Clients
                    </div>
                  </div>
                </div>
              </div>
              {/* Icon avatars row */}
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-lg border border-emerald-100 w-full justify-center">
                <FaUserMd
                  className="w-8 h-8 text-emerald-700"
                  title="Doctor 1"
                />
                <FaUserNurse
                  className="w-8 h-8 text-emerald-700"
                  title="Doctor 2"
                />
                <FaUser className="w-8 h-8 text-emerald-700" title="Doctor 3" />
                <span className="text-xs text-emerald-700 ml-2 font-medium">
                  Consult 30+ Experts
                </span>
              </div>
            </div>
            {/* Medical Icon on the right side */}
            <div className="flex flex-col items-center justify-center w-full h-auto xl:h-auto md:max-w-[400px]">
              <div className="relative">
                <FaHeartbeat className="text-emerald-500 text-[180px] md:text-[320px] heart-pulse-red drop-shadow-lg" />
                <div className="absolute inset-0 animate-ping opacity-20">
                  <FaHeartbeat className="text-emerald-400 text-[180px] md:text-[320px] heart-pulse-subtle" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Down Arrow */}
        <div className="flex justify-center mt-12">
          <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-emerald-700 border border-emerald-200">
            <BiChevronDown size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
