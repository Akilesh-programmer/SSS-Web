export const departments = [
  {
    id: 1,
    name: "All Specialists",
  },
  {
    id: 2,
    name: "Accident & Emergency Care",
  },
  {
    id: 3,
    name: "Anaesthesiology",
  },
  {
    id: 4,
    name: "Cardiology",
  },
  {
    id: 5,
    name: "Dermatology and Cosmetology",
  },
  {
    id: 6,
    name: "Dental & Oral and Maxillofacial Surgery",
  },
  {
    id: 7,
    name: "ENT & Head & Neck",
  },
  {
    id: 8,
    name: "General Surgery",
  },
  {
    id: 9,
    name: "Gastroenterology",
  },
  {
    id: 10,
    name: "Internal Medicine",
  },
  {
    id: 11,
    name: "Master Health Check up",
  },
  {
    id: 12,
    name: "Nephrology",
  },
  {
    id: 13,
    name: "Neurology",
  },
  {
    id: 14,
    name: "Neuro Surgery",
  },
  {
    id: 15,
    name: "Obstetrics & Gynaecology",
  },
  {
    id: 16,
    name: "Orthopaedics",
  },
  {
    id: 17,
    name: "Ophthalmology",
  },
  {
    id: 18,
    name: "Paediatrics",
  },
  {
    id: 20,
    name: "Physiotherapy",
  },
  {
    id: 21,
    name: "Plastic Surgery",
  },
  {
    id: 22,
    name: "Pulmonology",
  },
  {
    id: 23,
    name: "Psychiatry",
  },
  {
    id: 24,
    name: "Radiology",
  },
  {
    id: 25,
    name: "Urology",
  },
  {
    id: 26,
    name: "Vascular Surgery",
  },
  {
    id: 27,
    name: "Medical and Hemato Oncology",
  },
];

// Doctor images — using public assets for better performance during deployment
// Existing doctor photos (unchanged)
const IMG_SANJITH = "/assets/doctors/doctor-2.avif";
const IMG_SELVAKUMAR = "/assets/doctors/doctor-3.avif";
const IMG_PRASATH = "/assets/doctors/doctor-6.avif";
const IMG_PARVATHAVARDHINI = "/assets/doctors/doctor-13.avif";
const IMG_NATARAJAN = "/assets/doctors/doctor-7.avif";
const IMG_SILAMBARASAN = "/assets/doctors/doctor-8.avif";
const IMG_KISHORE = "/assets/doctors/doctor-9.avif";
const IMG_KANCHANADEVI = "/assets/doctors/doctor-14.avif";
const IMG_PREMAKUMARI = "/assets/doctors/doctor-12.avif";
const IMG_PRAVEEN = "/assets/doctors/doctor-11.avif";
const IMG_SATHISH = "/assets/doctors/doctor-33.avif";
const IMG_JEYTURUVAN = "/assets/doctors/doctor-19.avif";
const IMG_CHANDRASEKAR = "/assets/doctors/doctor-26.avif";
const IMG_YUVARAJA = "/assets/doctors/doctor-16.avif";
const IMG_SURESH = "/assets/doctors/doctor-20.avif";
const IMG_VIGGNESH = "/assets/doctors/doctor-21.avif";
const IMG_GOKUL = "/assets/doctors/doctor-28.avif";
const IMG_ASHWIN = "/assets/doctors/doctor-27.avif";
const IMG_SINDOORY = "/assets/doctors/doctor-22.avif";
const IMG_DEEPICA = "/assets/doctors/doctor-29.avif";
const IMG_DHARUN = "/assets/doctors/doctor-17.avif";

// New doctor photos — user will provide these as .avif files
const IMG_KAARVENTHAN = "/assets/doctors/doctor-36.avif";
const IMG_GOWTHAM = "/assets/doctors/doctor-37.avif";
const IMG_HARIPRASATH = "/assets/doctors/doctor-38.avif";
const IMG_NIVETHITHA = "/assets/doctors/doctor-40.avif";
const IMG_NARENDHRAKUMAR = "/assets/doctors/doctor-43.avif";
const IMG_PRIYADHARSHINI = "/assets/doctors/doctor-44.avif";

// Doctors ordered per user specification
export const doctors = [
  // 1. Dr S. Sanjith — Founder (EXISTING — data unchanged)
  {
    id: 1,
    name: "Dr. S. Sanjith",
    specialty: "Dermatology & Cosmetology",
    designation: "Founder & Managing Director, Consultant Dermatologist",
    department: [5],
    qualification: "MD (DERM)",
    image: IMG_SANJITH,
    isFounder: true,
  },
  // 2. Dr P. Selvakumar — CEO (EXISTING — data unchanged)
  {
    id: 2,
    name: "Dr. P. Selvakumar",
    specialty: "Emergency, Critical Care & Anaesthesia",
    designation: "CEO & Medical Director, Senior Consultant",
    department: [2, 3],
    qualification: "MD, PDCC",
    image: IMG_SELVAKUMAR,
    isFounder: false,
  },
  // 3. Dr L. Rajeswari (NEW — no photo)
  {
    id: 3,
    name: "Dr. L. Rajeswari",
    specialty: "Anaesthesiologist & Critical Care",
    designation: "Consultant Anaesthesiologist & Critical Care Physician",
    department: [2, 3],
    qualification: "MBBS, MD, IDCCM",
    image: null,
    isFounder: false,
  },
  // 4. Dr Sankarnarayanan (NEW — no photo)
  {
    id: 4,
    name: "Dr. Sankarnarayanan",
    specialty: "Anaesthesiologist & Critical Care",
    designation: "Consultant Anaesthesiologist & Critical Care Physician",
    department: [2, 3],
    qualification: "MBBS, MD (Anes)",
    image: null,
    isFounder: false,
  },
  // 5. Dr Kaarventhan (NEW — photo to be provided)
  {
    id: 5,
    name: "Dr. Kaarventhan",
    specialty: "Emergency Medicine",
    designation: "Consultant Emergency Physician",
    department: [2],
    qualification: "MEM",
    image: IMG_KAARVENTHAN,
    isFounder: false,
  },
  // 6. Dr Gowtham (NEW — photo to be provided)
  {
    id: 6,
    name: "Dr. Gowtham",
    specialty: "Emergency Medicine",
    designation: "Consultant Emergency Physician",
    department: [2],
    qualification: "MRCEM",
    image: IMG_GOWTHAM,
    isFounder: false,
  },
  // 7. Dr E. Parvathavardhini (EXISTING — data unchanged)
  {
    id: 7,
    name: "Dr. E. Parvathavardhini",
    specialty: "Pediatrician & Neonatologist",
    designation:
      "Senior Consultant Pediatrician & Neonatologist / Lactation Consultant",
    department: [18],
    qualification: "MBBS, MD (PAED)",
    image: IMG_PARVATHAVARDHINI,
    isFounder: false,
  },
  // 8. Dr M. Silambarasan (EXISTING — data unchanged)
  {
    id: 8,
    name: "Dr. M. Silambarasan",
    specialty: "Orthopaedic & Arthroscopic Surgeon",
    designation: "Consultant - Orthopaedic & Arthroscopic Surgeon",
    department: [16],
    qualification: "MBBS, MS (ORTHO), FASM, ISAKOS",
    image: IMG_SILAMBARASAN,
    isFounder: false,
  },
  // 9. Dr V. Kishore (EXISTING — data unchanged)
  {
    id: 9,
    name: "Dr. V. Kishore",
    specialty: "Orthopaedics",
    designation: "Consultant Orthopaedic, Hand &  Microsurgeon",
    department: [16],
    qualification:
      "MBBS, MS (ORTHO), DNB (ORTHO), MNAMS, MRCS, MCH(Hand & Microsurgery)",
    image: IMG_KISHORE,
    isFounder: false,
  },
  // 10. Dr V. Kanchanadevi (EXISTING — data unchanged)
  {
    id: 10,
    name: "Dr. V. Kanchanadevi",
    specialty: "Diabetologist",
    designation: "Senior Consultant - Internal Medicine and Diabetologist",
    department: [10],
    qualification: "MBBS, MD (Internal Medicine & DIAB)",
    image: IMG_KANCHANADEVI,
    isFounder: false,
  },
  // 11. Dr Hariprasath (NEW — photo to be provided)
  {
    id: 11,
    name: "Dr. Hariprasath",
    specialty: "General Medicine & Diabetology",
    designation: "Consultant Physician & Diabetologist",
    department: [10],
    qualification: "MBBS, MD (Gen Med)",
    image: IMG_HARIPRASATH,
    isFounder: false,
  },
  // 12. Dr R. Premakumari (EXISTING — data unchanged)
  {
    id: 12,
    name: "Dr. R. Premakumari",
    specialty: "Obstetrician & Gynaecologist",
    designation: "Senior Consultant, Obstetrician & Gynaecologist",
    department: [15],
    qualification: "MBBS, MD (OG)",
    image: IMG_PREMAKUMARI,
    isFounder: false,
  },
  // 13. Dr S. Natarajan (EXISTING — data unchanged)
  {
    id: 13,
    name: "Dr. S. Natarajan",
    specialty: "Orthopedic Surgeon",
    designation: "Senior Consultant, Orthopedic Surgeon",
    department: [16],
    qualification: "MBBS, MS (ORTHO), D.ORTHO",
    image: IMG_NATARAJAN,
    isFounder: false,
  },
  // 14. Dr M. Praveen Kumar (EXISTING — data unchanged)
  {
    id: 14,
    name: "Dr. M. Praveen Kumar",
    specialty: "Interventional Cardiologist",
    designation: "Consultant Interventional Cardiologist",
    department: [4],
    qualification: "MBBS, MD, DM (CARDIO)",
    image: IMG_PRAVEEN,
    isFounder: false,
  },
  // 15. Dr K. L. Sathish Kumar (EXISTING — data unchanged)
  {
    id: 15,
    name: "Dr. K. L. Sathish Kumar",
    specialty: "Gastroenterologist",
    designation:
      "Sr. Consultant Endoscopist, Surgical Gastroenterologist & Laproscopic Surgeon",
    department: [9, 8],
    qualification: "MBBS, MS (Gen Surg), FRCS (Ed), DBB (Surg Gastro), FMAS",
    image: IMG_SATHISH,
    isFounder: false,
  },
  // 16. Dr Raveenthran (NEW — no photo)
  {
    id: 16,
    name: "Dr. Raveenthran",
    specialty: "Oral & Maxillofacial Surgery",
    designation: "Consultant Oral & Maxillofacial Surgeon",
    department: [6],
    qualification: "BDS, MDS",
    image: null,
    isFounder: false,
  },
  // 17. Dr M. Jeyturuvan (EXISTING — data unchanged)
  {
    id: 17,
    name: "Dr. M. Jeyturuvan",
    specialty: "Dental",
    designation: "Consultant - Dental & OMFS Surgeon",
    department: [6],
    qualification: "BDS, MDS",
    image: IMG_JEYTURUVAN,
    isFounder: false,
  },
  // 18. Dr S. Chandrasekar (EXISTING — data unchanged)
  {
    id: 18,
    name: "Dr. S. Chandrasekar",
    specialty: "Pulmonologist",
    designation: "Senior Consultant Pulmonologist",
    department: [22],
    qualification: "MBBS, DTED, DNB, EDARM",
    image: IMG_CHANDRASEKAR,
    isFounder: false,
  },
  // 19. Dr Nivethitha (NEW — photo to be provided)
  {
    id: 19,
    name: "Dr. Nivethitha",
    specialty: "Interventional Pulmonologist",
    designation: "Consultant Interventional Pulmonologist",
    department: [22],
    qualification: "MBBS, MD (Resp)",
    image: IMG_NIVETHITHA,
    isFounder: false,
  },
  // 20. Dr Roopak Visakan Raja (NEW — no photo)
  {
    id: 20,
    name: "Dr. Roopak Visakan Raja",
    specialty: "ENT, Head & Neck Onco Surgery",
    designation: "Consultant ENT, Head & Neck Onco Surgeon",
    department: [7],
    qualification: "MBBS, MS (ENT), FHNO (Head, Neck), PDCC (Skull Base Sx)",
    image: null,
    isFounder: false,
  },
  // 21. Dr K. Yuvaraja (EXISTING — data unchanged)
  {
    id: 21,
    name: "Dr. K. Yuvaraja",
    specialty: "Nephrologist",
    designation: "Consultant - Nephrologist & Renal Transplant Physician",
    department: [12],
    qualification: "MBBS, MD, DM (Nephro)",
    image: IMG_YUVARAJA,
    isFounder: false,
  },
  // 22. Dr Harish (NEW — no photo)
  {
    id: 22,
    name: "Dr. Harish",
    specialty: "Nephrologist",
    designation: "Consultant Nephrologist & Renal Transplant Physician",
    department: [12],
    qualification: "MBBS, MD, DM (Nephro)",
    image: null,
    isFounder: false,
  },
  // 23. Dr C. P. Suresh (EXISTING — data unchanged)
  {
    id: 23,
    name: "Dr. C. P. Suresh",
    specialty: "Neurologist",
    designation: "Consultant - Neurologist",
    department: [13],
    qualification: "MBBS, MD (PAED), DM (NEURO)",
    image: IMG_SURESH,
    isFounder: false,
  },
  // 24. Dr P. Viggnesh (EXISTING — data unchanged)
  {
    id: 24,
    name: "Dr. P. Viggnesh",
    specialty: "Neurologist",
    designation: "Consultant - Brain & Spine Surgeon",
    department: [13, 14],
    qualification: "MBBS, MS, MCH, (NEURO SURGERY)",
    image: IMG_VIGGNESH,
    isFounder: false,
  },
  // 25. Dr Narendhrakumar (NEW — photo to be provided)
  {
    id: 25,
    name: "Dr. Narendhrakumar",
    specialty: "Interventional Neuro Surgeon",
    designation:
      "Consultant Interventional Neuro Surgeon & Endoscopic Spine Surgeon",
    department: [14],
    qualification:
      "MBBS, MS, MRCS (UK), MCh (AIIMS Delhi), DrNB (Neuro Surgery), FINR (Delhi), FESS (South Korea)",
    image: IMG_NARENDHRAKUMAR,
    isFounder: false,
  },
  // 26. Dr Priyadharshini (NEW — photo to be provided)
  {
    id: 26,
    name: "Dr. Priyadharshini",
    specialty: "Plastic & Cosmetic Surgeon",
    designation: "Consultant Plastic Reconstructive & Cosmetic Surgeon",
    department: [21],
    qualification:
      "MBBS, MS, DrNB (Plastic Surgery) MAMC Delhi, IAAPS Aesthetic Fellowship Delhi",
    image: IMG_PRIYADHARSHINI,
    isFounder: false,
  },
  // 27. Dr S. Gokul Balaji (EXISTING — data unchanged)
  {
    id: 27,
    name: "Dr. S. Gokul Balaji",
    specialty: "Plastic Surgeon",
    designation: "Consultant - Plastic Surgeon",
    department: [21],
    qualification:
      "MBBS, MS, MCH (Plastic & Reconstructive Surgery), F.Cosmetic Surgery & Clinical Aesthetics",
    image: IMG_GOKUL,
    isFounder: false,
  },
  // 28. Dr N. Prasath Kumaran (EXISTING — data unchanged)
  {
    id: 28,
    name: "Dr. N. Prasath Kumaran",
    specialty: "Anaesthesiologist",
    designation: "Emergency, Critical Care & Anaesthesia",
    department: [2, 3],
    qualification: "MBBS, MD (ANAES)",
    image: IMG_PRASATH,
    isFounder: false,
  },
  // 29. Dr Ashwin Raja (EXISTING — data unchanged)
  {
    id: 29,
    name: "Dr. Ashwin Raja",
    specialty: "Plastic Surgery",
    designation:
      "Consultant - Plastic Reconstructive Aesthetic Hand Diabetic Foot & Microvascular Surgeon",
    department: [21],
    qualification: "MBBS, MS, MCH (Plastic Surgery)",
    image: IMG_ASHWIN,
    isFounder: false,
  },
  // 30. Dr S. Vijay Kumar (NEW — no photo)
  {
    id: 30,
    name: "Dr. S. Vijay Kumar",
    specialty: "Ophthalmologist",
    designation:
      "Senior Consultant Ophthalmologist, Phaco-Refractive Surgeon, Minimally Invasive Glaucoma Surgeon and Medical Retina",
    department: [17],
    qualification: "MBBS, MS, FICO",
    image: null,
    isFounder: false,
  },
  // 31. Dr S. M. Sindoory (EXISTING — data unchanged)
  {
    id: 31,
    name: "Dr. S. M. Sindoory",
    specialty: "Ophthalmologist",
    designation: "Consultant - PHACO Comprehensive Ophthalmologist",
    department: [17],
    qualification: "MBBS, DO",
    image: IMG_SINDOORY,
    isFounder: false,
  },
  // 32. Dr A. Deepica Kumar (EXISTING — data unchanged)
  {
    id: 32,
    name: "Dr. A. Deepica Kumar",
    specialty: "Psychiatrist",
    designation: "Consultant Psychiatrist",
    department: [23],
    qualification: "MBBS, MD (Psychiatry)",
    image: IMG_DEEPICA,
    isFounder: false,
  },
  // 33. Dr Harish Priya (NEW — no photo)
  {
    id: 33,
    name: "Dr. Harish Priya",
    specialty: "Radiologist",
    designation: "Consultant Radiologist",
    department: [24],
    qualification: "MBBS, DMRD, DNB (Radiology)",
    image: null,
    isFounder: false,
  },
  // 34. Dr S. Dharun Kumar (EXISTING — data unchanged)
  {
    id: 34,
    name: "Dr. S. Dharun Kumar",
    specialty: "Urologist & Andrologist",
    designation:
      "Consultant - Urologist & Andrologist, Renal Transplant Surgeon",
    department: [25],
    qualification: "MBBS, MS, MCH (Urology)",
    image: IMG_DHARUN,
    isFounder: false,
  },
  // 35. Dr Mohammed Minnathulla (NEW — no photo)
  {
    id: 35,
    name: "Dr. Mohammed Minnathulla",
    specialty: "Cardiothoracic & Vascular Surgeon",
    designation: "Consultant Cardiothoracic and Vascular Surgeon",
    department: [26],
    qualification: "MBBS, MS, MCh (CTVS)",
    image: null,
    isFounder: false,
  },
  // 36. Dr Nirmal Arasu (NEW — no photo)
  {
    id: 36,
    name: "Dr. Nirmal Arasu",
    specialty: "Medical & Hemato Oncologist",
    designation: "Consultant Medical & Hemato Oncologist",
    department: [27],
    qualification: "MBBS, MD (Gen Med), DM (Med Onco)",
    image: null,
    isFounder: false,
  },
];
