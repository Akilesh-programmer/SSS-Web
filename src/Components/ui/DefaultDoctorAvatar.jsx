import React from "react";
import { FaUserMd, FaStethoscope } from "react-icons/fa";

const DefaultDoctorAvatar = ({ size = "large", className = "" }) => {
  const sizeClasses = {
    small: "w-12 h-12",
    medium: "w-20 h-20",
    large: "w-32 h-32",
    xlarge: "w-48 h-48",
  };

  const iconSizes = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
    xlarge: "text-6xl",
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      {/* Main container with professional gradient */}
      <div className="w-full h-full bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-100 rounded-full flex items-center justify-center border-3 border-emerald-200 shadow-lg relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 right-2">
            <FaStethoscope className="text-emerald-400 text-sm rotate-12" />
          </div>
          <div className="absolute bottom-2 left-2">
            <FaStethoscope className="text-emerald-400 text-sm -rotate-12" />
          </div>
        </div>

        {/* Main doctor icon */}
        <div className="relative z-10 bg-gradient-to-b from-emerald-600 to-emerald-700 rounded-full p-3 shadow-inner">
          <FaUserMd className={`${iconSizes[size]} text-white`} />
        </div>

        {/* Professional badge */}
        <div className="absolute bottom-0 right-0 bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-white shadow">
          MD
        </div>
      </div>

      {/* Pulse effect for larger avatars */}
      {(size === "large" || size === "xlarge") && (
        <div className="absolute inset-0 rounded-full border-2 border-emerald-300 animate-ping opacity-30"></div>
      )}
    </div>
  );
};

export default DefaultDoctorAvatar;
