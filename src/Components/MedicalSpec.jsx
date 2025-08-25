import {
  FaHeartbeat,
  FaUserMd,
  FaStethoscope,
  FaTooth,
  FaHospital,
  FaSyringe,
  FaBrain,
  FaBone,
  FaEye,
  FaChild,
  FaLungs,
  FaUserNurse,
  FaMicroscope,
  FaXRay,
  FaUserInjured,
  FaUserFriends,
  FaUserCheck,
  FaUserShield,
  FaUserTie,
  FaUserGraduate,
  FaUserAlt,
  FaUserCog,
  FaUserPlus,
  FaUserMinus,
  FaUserCircle,
  FaUserSecret,
  FaUserClock,
} from "react-icons/fa";

const specialties = [
  { name: "Accident & Emergency Care", icon: <FaUserInjured /> },
  { name: "Anaesthesiology", icon: <FaSyringe /> },
  { name: "Cardiology", icon: <FaHeartbeat /> },
  { name: "Dermatology & Cosmetology", icon: <FaUserMd /> },
  { name: "Dental & Oral Surgery", icon: <FaTooth /> },
  { name: "ENT & Head & Neck", icon: <FaStethoscope /> },
  { name: "Internal Medicine", icon: <FaHospital /> },
  { name: "General Surgery", icon: <FaUserNurse /> },
  { name: "Gastroenterology", icon: <FaMicroscope /> },
  { name: "Obstetrics & Gynaecology", icon: <FaUserFriends /> },
  { name: "Nephrology", icon: <FaUserCheck /> },
  { name: "Neurology", icon: <FaBrain /> },
  { name: "Neuro Surgery", icon: <FaUserCog /> },
  { name: "Orthopaedics", icon: <FaBone /> },
  { name: "Ophthalmology", icon: <FaEye /> },
  { name: "Paediatrics", icon: <FaChild /> },
  { name: "Plastic Surgery", icon: <FaUserTie /> },
  { name: "Pulmonology", icon: <FaLungs /> },
  { name: "Psychiatry", icon: <FaUserGraduate /> },
  { name: "Radiology", icon: <FaXRay /> },
  { name: "Urology", icon: <FaUserPlus /> },
  { name: "Physiotherapy", icon: <FaUserMinus /> },
  { name: "Master Health Checkup", icon: <FaUserCircle /> },
  { name: "Vascular Surgery", icon: <FaUserShield /> },
  { name: "Medical & Surgical Oncology", icon: <FaUserSecret /> },
  { name: "Medical & Surgical Gastroenterology", icon: <FaUserClock /> },
  { name: "Paediatric Surgery", icon: <FaUserAlt /> },
];

export default function MedicalSpec() {
  return (
    <div className="w-full bg-white py-12 px-2 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-emerald-900 mb-2 text-center tracking-tight">
          Our Medical Specialties
        </div>
        <div className="text-lg text-gray-600 mb-8 text-center">
          Comprehensive healthcare across all major disciplines
        </div>
        {/* Change grid-cols-1 to grid-cols-2 for small screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.map((spec, idx) => (
            <div
              key={idx}
              className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex flex-col items-center justify-center transition hover:bg-emerald-100"
              style={{
                boxShadow: "0 2px 12px 0 rgba(16,185,129,0.08)",
                minHeight: "170px",
              }}
            >
              <div className="text-emerald-600 text-4xl mb-3">{spec.icon}</div>
              <div className="text-md xl:text-lg font-semibold text-gray-900 text-center">
                {spec.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
