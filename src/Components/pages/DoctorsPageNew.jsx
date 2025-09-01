import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserMd,
  FaSearch,
  FaTimes,
  FaGraduationCap,
  FaAward,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
  FaStethoscope,
  FaHeart,
  FaBrain,
  FaBone,
  FaBaby,
  FaEye,
  FaTooth,
  FaLungs,
  FaTint,
  FaVenus,
  FaCut,
  FaAmbulance,
  FaPills,
  FaUserCog,
  FaFilter,
  FaThList,
  FaThLarge,
  FaChevronDown,
  FaInfoCircle,
} from "react-icons/fa";

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Specialists");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

  // Enhanced departments with better categorization
  const departments = [
    {
      id: "all",
      name: "All Specialists",
      icon: FaUserMd,
      gradient: "from-emerald-500 to-teal-500",
      color: "emerald",
      count: 0,
    },
    {
      id: "cardiology",
      name: "Cardiology",
      icon: FaHeart,
      gradient: "from-red-500 to-pink-500",
      color: "red",
      count: 0,
    },
    {
      id: "dermatology",
      name: "Dermatology",
      icon: FaUserMd,
      gradient: "from-orange-500 to-amber-500",
      color: "orange",
      count: 0,
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      icon: FaBone,
      gradient: "from-blue-500 to-indigo-500",
      color: "blue",
      count: 0,
    },
    {
      id: "pediatrics",
      name: "Pediatrics",
      icon: FaBaby,
      gradient: "from-pink-500 to-rose-500",
      color: "pink",
      count: 0,
    },
    {
      id: "neurology",
      name: "Neurology",
      icon: FaBrain,
      gradient: "from-purple-500 to-violet-500",
      color: "purple",
      count: 0,
    },
    {
      id: "emergency",
      name: "Emergency",
      icon: FaAmbulance,
      gradient: "from-red-600 to-red-700",
      color: "red",
      count: 0,
    },
    {
      id: "surgery",
      name: "Surgery",
      icon: FaCut,
      gradient: "from-gray-600 to-gray-700",
      color: "gray",
      count: 0,
    },
    {
      id: "gynecology",
      name: "Gynecology",
      icon: FaVenus,
      gradient: "from-pink-400 to-rose-400",
      color: "pink",
      count: 0,
    },
    {
      id: "urology",
      name: "Urology",
      icon: FaTint,
      gradient: "from-blue-400 to-cyan-400",
      color: "blue",
      count: 0,
    },
    {
      id: "nephrology",
      name: "Nephrology",
      icon: FaTint,
      gradient: "from-teal-500 to-cyan-500",
      color: "teal",
      count: 0,
    },
    {
      id: "psychiatry",
      name: "Psychiatry",
      icon: FaBrain,
      gradient: "from-indigo-500 to-purple-500",
      color: "indigo",
      count: 0,
    },
    {
      id: "ophthalmology",
      name: "Ophthalmology",
      icon: FaEye,
      gradient: "from-green-500 to-emerald-500",
      color: "green",
      count: 0,
    },
    {
      id: "anesthesia",
      name: "Anesthesia",
      icon: FaPills,
      gradient: "from-slate-500 to-gray-500",
      color: "slate",
      count: 0,
    },
    {
      id: "medicine",
      name: "Internal Medicine",
      icon: FaStethoscope,
      gradient: "from-emerald-600 to-green-600",
      color: "emerald",
      count: 0,
    },
    {
      id: "radiology",
      name: "Radiology",
      icon: FaUserCog,
      gradient: "from-violet-500 to-purple-500",
      color: "violet",
      count: 0,
    },
  ];

  // Comprehensive doctors list from hospital data
  const doctors = [
    {
      id: 1,
      name: "Dr. S. Sanjith",
      specialty: "Dermatology & Cosmetology",
      designation: "Founder & Managing Director, Consultant Dermatologist",
      department: "dermatology",
      qualification: "MD (DERM)",
      experience: "15+ years",
      availability: "Mon-Sat: 9AM-6PM",
      specializations: [
        "Dermatology",
        "Cosmetology",
        "Skin Care",
        "Hair Treatment",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Leading dermatology care with expertise and compassionate healing",
      isFounder: true,
    },
    {
      id: 2,
      name: "Dr. P. Selvakumar",
      specialty: "Emergency & Critical Care",
      designation: "CEO & Medical Director, Senior Consultant",
      department: "emergency",
      qualification: "MD, PDCC",
      experience: "20+ years",
      availability: "24/7 Emergency",
      specializations: [
        "Emergency Medicine",
        "Critical Care",
        "Anesthesia",
        "Trauma Care",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in emergency medicine and critical care management",
      isCEO: true,
    },
    {
      id: 3,
      name: "Dr. P. Eswaravel",
      specialty: "Cardiology",
      designation: "Consultant Cardiologist",
      department: "cardiology",
      qualification: "MD, DCC",
      experience: "18+ years",
      availability: "Mon-Fri: 9AM-5PM",
      specializations: [
        "Cardiac Care",
        "Heart Conditions",
        "Preventive Cardiology",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Expert cardiac care with specialization in managing complex heart conditions",
    },
    {
      id: 4,
      name: "Dr. S. Natarajan",
      specialty: "Orthopedic Surgery",
      designation: "Senior Consultant Orthopedic Surgeon",
      department: "orthopedics",
      qualification: "MBBS, MS, DNB (ORTHO), MRCS (EDIN)",
      experience: "16+ years",
      availability: "Mon-Sat: 10AM-5PM",
      specializations: [
        "Orthopedic Surgery",
        "Joint Replacement",
        "Sports Medicine",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Experienced in advanced orthopedic surgeries and precision care",
    },
    {
      id: 5,
      name: "Dr. P. Ramesh Babu",
      specialty: "Interventional Cardiology",
      designation: "Consultant Interventional Cardiologist",
      department: "cardiology",
      qualification: "MD, DM (CARD)",
      experience: "14+ years",
      availability: "Mon-Fri: 8AM-4PM",
      specializations: ["Angioplasty", "Stenting", "Cardiac Emergencies"],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Expert in angioplasty, stenting, and managing cardiac emergencies",
    },
    {
      id: 6,
      name: "Dr. E. Karthikeyan",
      specialty: "Orthopedic & Hand Surgery",
      designation: "Consultant Orthopedic, Hand & Micro Surgeon",
      department: "orthopedics",
      qualification: "MBBS, MS (Ortho)",
      experience: "12+ years",
      availability: "Tue-Sat: 11AM-6PM",
      specializations: ["Hand Surgery", "Microsurgery", "Trauma Surgery"],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Skilled in complex hand surgeries and microsurgery techniques",
    },
    {
      id: 7,
      name: "Dr. V. S. Arhichandran",
      specialty: "Internal Medicine & Cardiology",
      designation: "Consultant Internal Medicine & Cardiologist",
      department: "medicine",
      qualification: "MD (General Medicine), DM (CARD)",
      experience: "15+ years",
      availability: "Mon-Fri: 9AM-5PM",
      specializations: [
        "Internal Medicine",
        "Cardiac Treatment",
        "Preventive Care",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Comprehensive care for internal medicine and advanced cardiac treatment",
    },
    {
      id: 8,
      name: "Dr. S. Shankar",
      specialty: "Internal Medicine & Diabetology",
      designation: "Consultant Internal Medicine & Diabetologist",
      department: "medicine",
      qualification: "MD (General Medicine), DM (Diabetology)",
      experience: "13+ years",
      availability: "Mon-Sat: 8AM-4PM",
      specializations: [
        "Diabetes Management",
        "Internal Medicine",
        "Metabolic Disorders",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in diabetes management and internal medicine",
    },
    {
      id: 9,
      name: "Dr. R. Venkata",
      specialty: "Internal Medicine & Critical Care",
      designation:
        "Consultant Internal Medicine & Senior Critical Care Physician",
      department: "medicine",
      qualification: "MD (Internal Medicine), DNB (Critical Care), IFCCM",
      experience: "16+ years",
      availability: "24/7 Critical Care",
      specializations: ["Critical Care", "Internal Medicine", "ICU Management"],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Specializes in managing critical care and complex internal medicine cases",
    },
    {
      id: 10,
      name: "Dr. S. Shriram Narayanan",
      specialty: "Urology & Renal Transplant",
      designation: "Consultant Urologist & Renal Transplant Specialist",
      department: "urology",
      qualification: "MBBS, M.Ch (Urology)",
      experience: "14+ years",
      availability: "Mon-Sat: 10AM-5PM",
      specializations: [
        "Renal Transplantation",
        "Urological Surgery",
        "Kidney Stone Treatment",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Expertise in renal transplantation and urological surgeries",
    },
    {
      id: 11,
      name: "Dr. S. Divakar",
      specialty: "Surgical Gastroenterology",
      designation:
        "Senior Consultant Surgical Gastroenterologist & Laparoscopic Surgeon",
      department: "surgery",
      qualification: "MS, FMAS, DIP. LAP",
      experience: "18+ years",
      availability: "Mon-Fri: 9AM-5PM",
      specializations: [
        "Laparoscopic Surgery",
        "Gastrointestinal Surgery",
        "Endoscopy",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Experienced in advanced laparoscopic and gastrointestinal surgeries",
    },
    {
      id: 12,
      name: "Dr. S. Maharajan",
      specialty: "Orthopedic & Spine Surgery",
      designation: "Orthopedic & Spine Surgeon",
      department: "orthopedics",
      qualification: "MBBS, MS (Ortho)",
      experience: "15+ years",
      availability: "Mon-Sat: 10AM-6PM",
      specializations: [
        "Spine Surgery",
        "Orthopedic Disorders",
        "Spinal Conditions",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Provides specialized care in spinal conditions and orthopedic disorders",
    },
    {
      id: 13,
      name: "Dr. S. V. Dhayanithi",
      specialty: "General Medicine & Critical Care",
      designation: "Consultant General Medicine, Critical Care & Anesthetist",
      department: "anesthesia",
      qualification: "MBBS, MD",
      experience: "12+ years",
      availability: "24/7 Emergency",
      specializations: ["Critical Care", "Anesthesia", "Emergency Medicine"],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Handles critical care and anesthesia with expert knowledge",
    },
    {
      id: 14,
      name: "Dr. K. Arthikeyan",
      specialty: "Multi-Specialty Medicine",
      designation:
        "Consultant in General Medicine, Critical Care, Diabetology & Optical Care",
      department: "medicine",
      qualification: "MBBS, MD",
      experience: "11+ years",
      availability: "Mon-Sat: 9AM-5PM",
      specializations: [
        "General Medicine",
        "Critical Care",
        "Diabetology",
        "Optical Care",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Multi-disciplinary specialist treating complex internal disorders",
    },
    {
      id: 15,
      name: "Dr. S. Shivaraman Maratha",
      specialty: "ENT Surgery",
      designation: "Consultant ENT Surgeon",
      department: "surgery",
      qualification: "MBBS, MS (ENT)",
      experience: "10+ years",
      availability: "Mon-Fri: 10AM-5PM",
      specializations: [
        "ENT Surgery",
        "Head & Neck Surgery",
        "Hearing Disorders",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in ENT and head & neck surgical procedures",
    },
    {
      id: 16,
      name: "Dr. V. Chandran",
      specialty: "Neurology",
      designation: "Consultant Neurologist",
      department: "neurology",
      qualification: "MBBS, MD, DM (Neurology)",
      experience: "14+ years",
      availability: "Mon-Fri: 9AM-5PM",
      specializations: [
        "Neurological Disorders",
        "Stroke Management",
        "Epilepsy",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in managing complex neurological conditions",
    },
    {
      id: 17,
      name: "Dr. B. Abirami Janani",
      specialty: "Psychiatry",
      designation: "Consultant Psychiatrist",
      department: "psychiatry",
      qualification: "MBBS, MD (Psychiatry)",
      experience: "8+ years",
      availability: "Mon-Fri: 10AM-6PM",
      specializations: [
        "Mental Health",
        "Depression",
        "Anxiety",
        "Behavioral Therapy",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Specialized in mental health and behavioral therapy",
    },
    {
      id: 18,
      name: "Dr. S. Chidambaram",
      specialty: "Nephrology & Hypertension",
      designation: "Consultant Nephrologist & Hypertension Specialist",
      department: "nephrology",
      qualification: "MBBS, MD, DM (Nephrology)",
      experience: "13+ years",
      availability: "Mon-Sat: 9AM-5PM",
      specializations: [
        "Kidney Disease",
        "Hypertension",
        "Dialysis",
        "Renal Care",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Expert in kidney disease management and hypertension treatment",
    },
    {
      id: 19,
      name: "Dr. S. Divya Rajan",
      specialty: "Plastic Surgery",
      designation: "Consultant Plastic Surgeon",
      department: "surgery",
      qualification: "MBBS, M.Ch (Plastic Surgery)",
      experience: "9+ years",
      availability: "Tue-Sat: 10AM-5PM",
      specializations: [
        "Plastic Surgery",
        "Reconstructive Surgery",
        "Aesthetic Surgery",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in plastic and reconstructive surgical procedures",
    },
    {
      id: 20,
      name: "Dr. M. Praveen Kumar",
      specialty: "Interventional Cardiology",
      designation: "Consultant Interventional Cardiologist",
      department: "cardiology",
      qualification: "MBBS, MD, DM (Cardiology)",
      experience: "11+ years",
      availability: "Mon-Fri: 8AM-4PM",
      specializations: [
        "Interventional Cardiology",
        "Heart Procedures",
        "Cardiac Catheterization",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Advanced expertise in interventional heart procedures",
    },
    {
      id: 21,
      name: "Dr. K.L. Sathish Kumar",
      specialty: "Surgical Gastroenterology",
      designation:
        "Senior Consultant Endoscopist & Surgical Gastroenterologist",
      department: "surgery",
      qualification: "MBBS, MS, DNB, FRCS (Ed), DNB (Surg Gastro), FMAS",
      experience: "17+ years",
      availability: "Mon-Sat: 9AM-5PM",
      specializations: [
        "Endoscopy",
        "Surgical Gastroenterology",
        "Laparoscopic Surgery",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Expert in endoscopic and laparoscopic gastrointestinal procedures",
    },
    {
      id: 22,
      name: "Dr. E. Parvathavardhini",
      specialty: "Pediatrics & Neonatology",
      designation: "Senior Consultant Pediatrician & Neonatologist",
      department: "pediatrics",
      qualification: "MBBS, MD (Pediatrics)",
      experience: "12+ years",
      availability: "Mon-Sat: 9AM-6PM",
      specializations: [
        "Pediatrics",
        "Neonatology",
        "Child Wellness",
        "Vaccinations",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Specialized in newborn and child wellness care",
    },
    {
      id: 23,
      name: "Dr. K. Yuvaraja",
      specialty: "Nephrology & Renal Transplant",
      designation: "Consultant Nephrologist & Renal Transplant Physician",
      department: "nephrology",
      qualification: "MBBS, MD, DM (Nephrology)",
      experience: "12+ years",
      availability: "Mon-Sat: 9AM-5PM",
      specializations: [
        "Kidney Disease Management",
        "Dialysis Care",
        "Renal Transplants",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description:
        "Expert in kidney disease management and renal transplantation",
    },
    {
      id: 24,
      name: "Dr. N. Padmanaban",
      specialty: "Cardiology",
      designation: "Senior Consultant Cardiologist",
      department: "cardiology",
      qualification: "MBBS, MD, DM (Cardiology)",
      experience: "16+ years",
      availability: "Mon-Fri: 9AM-6PM",
      specializations: [
        "Heart Disease Prevention",
        "Angioplasty",
        "Stenting",
        "Cardiac Emergencies",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in comprehensive cardiac care and prevention",
    },
    {
      id: 25,
      name: "Dr. R. Premakumari",
      specialty: "Obstetrics & Gynecology",
      designation: "Senior Consultant Obstetrician & Gynecologist",
      department: "gynecology",
      qualification: "MBBS, MD (OG)",
      experience: "15+ years",
      availability: "Mon-Sat: 9AM-6PM",
      specializations: [
        "Pregnancy & Delivery",
        "Women's Wellness",
        "Gynecological Surgeries",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Comprehensive women's health and pregnancy care",
    },
    {
      id: 26,
      name: "Dr. S. Gokul Balaji",
      specialty: "Plastic Surgery",
      designation: "Consultant Plastic Surgeon",
      department: "surgery",
      qualification: "MBBS, M.Ch (Plastic & Reconstructive Surgery)",
      experience: "10+ years",
      availability: "Tue-Sat: 10AM-5PM",
      specializations: [
        "Plastic Surgery",
        "Reconstructive Surgery",
        "Burn Treatment",
        "Aesthetic Surgery",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in plastic, reconstructive, and aesthetic surgery",
    },
    {
      id: 27,
      name: "Dr. C.P. Suresh",
      specialty: "Pediatric Neurology",
      designation: "Consultant Pediatric Neurologist",
      department: "neurology",
      qualification: "MBBS, MD (Pediatrics), DM (Neurology)",
      experience: "12+ years",
      availability: "Mon-Fri: 9AM-5PM",
      specializations: [
        "Pediatric Neurology",
        "Child Development Disorders",
        "Epilepsy in Children",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Specialized in pediatric neurological conditions",
    },
    {
      id: 28,
      name: "Dr. S.M. Sindoory",
      specialty: "Ophthalmology",
      designation: "Consultant Ophthalmologist",
      department: "ophthalmology",
      qualification: "MBBS, DO",
      experience: "11+ years",
      availability: "Mon-Sat: 9AM-5PM",
      specializations: [
        "Eye Care",
        "Vision Correction",
        "Cataract Surgery",
        "Retinal Disorders",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Comprehensive eye care and vision correction services",
    },
    {
      id: 29,
      name: "Dr. A. Deepica Kumar",
      specialty: "Psychiatry",
      designation: "Consultant Psychiatrist",
      department: "psychiatry",
      qualification: "MBBS, MD (Psychiatry)",
      experience: "8+ years",
      availability: "Mon-Fri: 10AM-6PM",
      specializations: [
        "Mental Health",
        "Depression",
        "Anxiety",
        "Behavioral Therapy",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in mental health and psychological well-being",
    },
    {
      id: 30,
      name: "Dr. Sindhu Karthikeyan",
      specialty: "Radiology",
      designation: "Consultant Radiologist",
      department: "radiology",
      qualification: "MBBS, DNB (Radiology)",
      experience: "9+ years",
      availability: "Mon-Sat: 8AM-6PM",
      specializations: ["Medical Imaging", "CT Scan", "MRI", "Ultrasound"],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Expert in medical imaging and diagnostic radiology",
    },
    {
      id: 31,
      name: "Dr. S. Dharun Kumar",
      specialty: "Urology",
      designation: "Consultant Urologist",
      department: "urology",
      qualification: "MBBS, MS, MCh (Urology)",
      experience: "10+ years",
      availability: "Mon-Sat: 9AM-5PM",
      specializations: [
        "Urological Surgery",
        "Kidney Stone Treatment",
        "Prostate Surgery",
      ],
      phone: "+91 7729-888777",
      email: "info@ssshospitals.in",
      description: "Comprehensive urological care and surgical expertise",
    },
  ];

  // Calculate department counts
  departments.forEach((dept) => {
    if (dept.id === "all") {
      dept.count = doctors.length;
    } else {
      dept.count = doctors.filter(
        (doctor) => doctor.department === dept.id
      ).length;
    }
  });

  // Filter doctors based on selected department and search term
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesDepartment =
      selectedDepartment === "All Specialists" ||
      doctor.department ===
        selectedDepartment.toLowerCase().replace(/\s+/g, "-");
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.qualification.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const DefaultDoctorAvatar = ({ name, size = "large" }) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);
    const sizeClasses =
      size === "large" ? "w-32 h-32 text-3xl" : "w-16 h-16 text-lg";

    return (
      <div
        className={`${sizeClasses} bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
      >
        {initials}
      </div>
    );
  };

  const DoctorModal = ({ doctor, onClose }) => {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <FaTimes className="text-gray-600" />
              </button>

              <div className="text-center mb-6">
                <DefaultDoctorAvatar name={doctor.name} size="large" />
                <h2 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                  {doctor.name}
                </h2>
                <p className="text-emerald-600 font-semibold text-lg">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600">{doctor.designation}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaGraduationCap className="mr-3 text-emerald-500" />
                  <span>{doctor.qualification}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaAward className="mr-3 text-amber-500" />
                  <span>{doctor.experience}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-3 text-emerald-500" />
                  <span>{doctor.availability}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhone className="mr-3 text-emerald-500" />
                  <span>{doctor.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-3 text-emerald-500" />
                  <span>{doctor.email}</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((spec, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {doctor.description && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    About
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {doctor.description}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 pt-20">
      {/* Header Section with proper spacing from navbar */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full mr-4">
                <FaUserMd className="text-4xl text-emerald-600" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                Our Medical Specialists
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet our exceptional team of {doctors.length} healthcare
              professionals dedicated to providing world-class medical care with
              expertise, compassion, and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Enhanced Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8"
        >
          {/* Search Bar */}
          <div className="relative mb-8">
            <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-emerald-400 text-lg" />
            <input
              type="text"
              placeholder="Search for doctors by name, specialty, or qualification..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-4 border-2 border-emerald-100 rounded-2xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-300 outline-none text-gray-700 text-lg bg-white/70"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <FaTimes className="text-lg" />
              </button>
            )}
          </div>

          {/* Department Filter - Modern Dropdown Style */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-700">
                Filter by Medical Department
              </h3>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">
                  Showing {filteredDoctors.length} of {doctors.length} doctors
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "grid"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-gray-100 text-gray-600 hover:bg-emerald-50"
                    }`}
                  >
                    <FaThLarge />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-colors ${
                      viewMode === "list"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-gray-100 text-gray-600 hover:bg-emerald-50"
                    }`}
                  >
                    <FaThList />
                  </button>
                </div>
              </div>
            </div>

            {/* Department Dropdown */}
            <div className="relative">
              <button
                onClick={() =>
                  setShowDepartmentDropdown(!showDepartmentDropdown)
                }
                className="w-full md:w-auto bg-white border-2 border-emerald-200 rounded-2xl px-6 py-3 flex items-center justify-between min-w-[300px] hover:border-emerald-300 transition-colors"
              >
                <div className="flex items-center">
                  {(() => {
                    const selectedDept = departments.find(
                      (d) => d.name === selectedDepartment
                    );
                    const IconComponent = selectedDept?.icon;
                    return (
                      IconComponent && (
                        <IconComponent className="mr-3 text-emerald-600" />
                      )
                    );
                  })()}
                  <span className="font-medium">{selectedDepartment}</span>
                  <span className="ml-2 text-sm text-gray-500">
                    (
                    {departments.find((d) => d.name === selectedDepartment)
                      ?.count || 0}
                    )
                  </span>
                </div>
                <FaChevronDown
                  className={`transition-transform duration-200 ${
                    showDepartmentDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showDepartmentDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white border border-emerald-200 rounded-2xl shadow-xl z-10 max-h-96 overflow-y-auto"
                  >
                    {departments.map((dept) => {
                      const IconComponent = dept.icon;
                      return (
                        <button
                          key={dept.id}
                          onClick={() => {
                            setSelectedDepartment(dept.name);
                            setShowDepartmentDropdown(false);
                          }}
                          className={`w-full px-6 py-3 flex items-center justify-between hover:bg-emerald-50 transition-colors first:rounded-t-2xl last:rounded-b-2xl ${
                            selectedDepartment === dept.name
                              ? "bg-emerald-50 text-emerald-700"
                              : ""
                          }`}
                        >
                          <div className="flex items-center">
                            <IconComponent className="mr-3 text-emerald-600" />
                            <span className="font-medium">{dept.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">
                            ({dept.count})
                          </span>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedDepartment !== "All Specialists" || searchTerm) && (
            <div className="flex flex-wrap gap-3">
              {selectedDepartment !== "All Specialists" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <FaFilter className="mr-2 text-xs" />
                  <span>Department: {selectedDepartment}</span>
                  <button
                    onClick={() => setSelectedDepartment("All Specialists")}
                    className="ml-3 hover:text-emerald-900 transition-colors"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </motion.div>
              )}
              {searchTerm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <FaSearch className="mr-2 text-xs" />
                  <span>Search: "{searchTerm}"</span>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-3 hover:text-teal-900 transition-colors"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>

        {/* Doctors Grid/List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedDepartment}-${searchTerm}-${viewMode}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === "grid"
                ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "space-y-4"
            }
          >
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-white/20 cursor-pointer ${
                    viewMode === "list" ? "flex items-center p-6" : "p-6"
                  }`}
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  {viewMode === "grid" ? (
                    <>
                      {/* Grid View */}
                      <div className="relative text-center mb-4">
                        <DefaultDoctorAvatar name={doctor.name} size="large" />

                        {/* Special Badges */}
                        {doctor.isFounder && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            Founder
                          </div>
                        )}
                        {doctor.isCEO && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            CEO
                          </div>
                        )}

                        {/* Department Badge */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-emerald-700 border border-emerald-200">
                          {departments.find((d) => d.id === doctor.department)
                            ?.name || "General"}
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                          {doctor.name}
                        </h3>
                        <p className="text-emerald-600 font-semibold mb-1 text-sm">
                          {doctor.specialty}
                        </p>
                        <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                          {doctor.designation}
                        </p>

                        <div className="space-y-1 mb-4">
                          <div className="flex items-center justify-center text-gray-500 text-xs">
                            <FaGraduationCap className="mr-2 text-emerald-500" />
                            {doctor.qualification}
                          </div>
                          <div className="flex items-center justify-center text-gray-500 text-xs">
                            <FaAward className="mr-2 text-amber-500" />
                            {doctor.experience}
                          </div>
                        </div>

                        {/* Specializations Preview */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1 justify-center">
                            {doctor.specializations
                              .slice(0, 2)
                              .map((spec, idx) => (
                                <span
                                  key={idx}
                                  className="bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-2 py-1 rounded-full text-xs border border-emerald-200"
                                >
                                  {spec}
                                </span>
                              ))}
                            {doctor.specializations.length > 2 && (
                              <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs border border-gray-200">
                                +{doctor.specializations.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-center text-gray-600 text-xs">
                          <FaCalendarAlt className="mr-2 text-emerald-500" />
                          {doctor.availability}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* List View */}
                      <div className="flex items-center mr-6">
                        <DefaultDoctorAvatar name={doctor.name} size="small" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                            {doctor.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            {doctor.isFounder && (
                              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                Founder
                              </span>
                            )}
                            {doctor.isCEO && (
                              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                                CEO
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-emerald-600 font-semibold mb-1">
                          {doctor.specialty}
                        </p>
                        <p className="text-gray-600 text-sm mb-3">
                          {doctor.designation}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center text-gray-500">
                            <FaGraduationCap className="mr-2 text-emerald-500" />
                            {doctor.qualification}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <FaAward className="mr-2 text-amber-500" />
                            {doctor.experience}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <FaCalendarAlt className="mr-2 text-emerald-500" />
                            {doctor.availability}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <FaInfoCircle className="mr-2 text-blue-500" />
                            Click for details
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full text-center py-16"
              >
                <div className="text-6xl text-emerald-300 mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No doctors found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search criteria or department filter.
                </p>
                {(selectedDepartment !== "All Specialists" || searchTerm) && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedDepartment("All Specialists");
                      setSearchTerm("");
                    }}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg"
                  >
                    Clear All Filters
                  </motion.button>
                )}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Medical Excellence</h2>
            <p className="text-emerald-100">
              Committed to providing the highest standard of healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{doctors.length}+</div>
              <div className="text-emerald-100">Expert Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">
                {departments.length - 1}+
              </div>
              <div className="text-emerald-100">Specialties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-emerald-100">Emergency Care</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <DoctorModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

export default DoctorsPage;
