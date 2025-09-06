import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getAllDepartments } from "../../data/departmentsData";
import PropTypes from "prop-types";
import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaEye,
  FaUserMd,
  FaAmbulance,
  FaXRay,
  FaStethoscope,
  FaTooth,
  FaChild,
  FaLungs,
  FaMicroscope,
  FaUserInjured,
  FaUserFriends,
  FaSyringe,
  FaHospital,
  FaCut,
  FaHeart,
  FaBandAid,
  FaFlask,
  FaPrescriptionBottleAlt,
  FaPills,
  FaArrowRight,
} from "react-icons/fa";

const SpecialitiesPreview = ({ count = 4 }) => {
  const navigate = useNavigate();
  const departments = getAllDepartments().slice(0, count);

  const handleSeeAll = () => navigate("/specialities");

  const departmentIcons = {
    "Accident & Emergency Care": <FaAmbulance />,
    Cardiology: <FaHeartbeat />,
    Dermatology: <FaBandAid />,
    Dentistry: <FaTooth />,
    Endocrinology: <FaFlask />,
    "ENT (Ear, Nose & Throat)": <FaStethoscope />,
    "General Medicine": <FaUserMd />,
    "General Surgery": <FaCut />,
    Gastroenterology: <FaMicroscope />,
    "Obstetrics & Gynaecology": <FaUserFriends />,
    Nephrology: <FaPills />,
    Neurology: <FaBrain />,
    "Neuro Surgery": <FaBrain />,
    Orthopaedics: <FaBone />,
    Orthopedics: <FaBone />,
    Ophthalmology: <FaEye />,
    Paediatrics: <FaChild />,
    Psychiatry: <FaBrain />,
    Pulmonology: <FaLungs />,
    Radiology: <FaXRay />,
    Anaesthesiology: <FaSyringe />,
    Physiotherapy: <FaUserInjured />,
    "Critical Care Medicine": <FaHeart />,
    Pathology: <FaMicroscope />,
    "Plastic Surgery": <FaCut />,
    Pharmacy: <FaPrescriptionBottleAlt />,
  };

  const getDepartmentIcon = (name) => departmentIcons[name] || <FaHospital />;

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-emerald-900">
            Our Key Specialities
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            A selection of our major departments delivering advanced care and
            expert teams.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {departments.map((dept, idx) => (
            <motion.div
              key={dept.id}
              className="group relative text-left p-4 lg:p-6 rounded-2xl bg-white/95 shadow-lg hover:shadow-2xl border border-transparent hover:border-emerald-100 transition-all duration-300 cursor-default overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -8,
                rotateX: 6,
                rotateY: -3,
                boxShadow: "0 28px 50px rgba(2,6,23,0.12)",
              }}
              transition={{ duration: 0.45 }}
            >
              {/* decorative accent */}
              <motion.div
                aria-hidden
                initial={{ scale: 0.8, x: 0, y: 0, opacity: 0 }}
                whileInView={{
                  scale: [0.8, 1],
                  x: [-6, 0, 6],
                  y: [0, -4, 0],
                  opacity: [0, 0.06],
                }}
                transition={{
                  duration: 0.9,
                  delay: idx * 0.06,
                  ease: "easeInOut",
                  repeat: 0,
                }}
                className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 opacity-10 pointer-events-none blur-3xl"
              />

              <div className="flex items-center gap-4 relative z-10">
                <motion.div
                  className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-md"
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: idx * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: [1, 1.04, 1], rotate: [0, 3, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    className="text-xl"
                  >
                    {getDepartmentIcon(dept.name)}
                  </motion.div>
                </motion.div>
                <div className="flex-1 text-left">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {dept.name}
                  </h4>
                </div>
              </div>
              {/* hover shimmer */}
              <motion.div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-900 ease-out" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleSeeAll}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            See all specialities
            <FaArrowRight className="ml-1" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SpecialitiesPreview;

SpecialitiesPreview.propTypes = {
  count: PropTypes.number,
};
