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
];

export const doctors = [
  {
    id: 1,
    name: "Dr. S. Sanjith",
    specialty: "Dermatology & Cosmetology",
    designation: "Founder & Managing Director, Consultant Dermatologist",
    department: [5],
    qualification: "MD (DERM)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/2.png",
    isFounder: true,
  },
  {
    id: 2,
    name: "Dr. P. Selvakumar",
    specialty: "Emergency, Critical Care & Anaesthesia",
    designation: "CEO & Medical Director, Senior Consultant",
    department: [2, 3],
    qualification: "MD, PDCC",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/3.jpeg",
    isFounder: false,
  },
  {
    id: 3,
    name: "Dr. S. Natarajan",
    specialty: "Orthopedic Surgeon",
    designation: "Senior Consultant, Orthopedic Surgeon",
    department: [16],
    qualification: "MBBS, MS (ORTHO), D.ORTHO",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/7.png",
    isFounder: false,
  },
  {
    id: 4,
    name: "Dr. R. Premakumari",
    specialty: "Obstetrician & Gynaecologist",
    designation: "Senior Consultant, Obstetrician & Gynaecologist",
    department: [15],
    qualification: "MBBS, MD (OG)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/12.png",
    isFounder: false,
  },
  {
    id: 5,
    name: "Dr. N. Padmanaban",
    specialty: "Interventional Cardiologist",
    designation: "Senior Consultant, Interventional Cardiologist",
    department: [4],
    qualification: "MBBS, MD, DM (CARDIO)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/10.png",
    isFounder: false,
  },
  {
    id: 6,
    name: "Dr. K. L. Sathish Kumar",
    specialty: "Gastroenterologist",
    designation:
      "Sr. Consultant Endoscopist, Surgical Gastroenterologist & Laproscopic Surgeon",
    department: [9, 8],
    qualification: "MBBS, MS (Gen Surg), FRCS (Ed), DBB (Surg Gastro), FMAS",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/33.png",
    isFounder: false,
  },
  {
    id: 7,
    name: "Dr. M. Praveen Kumar",
    specialty: "Interventional Cardiologist",
    designation: "Consultant Interventional Cardiologist",
    department: [4],
    qualification: "MBBS, MD, DM (CARDIO)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/11.png",
    isFounder: false,
  },
  {
    id: 8,
    name: "Dr. E. Parvathavardhini",
    specialty: "Pediatrician & Neonatologist",
    designation:
      "Senior Consultant Pediatrician & Neonatologist / Lactation Consultant",
    department: [18],
    qualification: "MBBS, MD (PAED)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/13.png",
    isFounder: false,
  },
  {
    id: 9,
    name: "Dr. V. Kanchanadevi",
    specialty: "Diabetologist",
    designation: "Senior Consultant - Internal Medicine and Diabetologist",
    department: [10],
    qualification: "MBBS, MD (Internal Medicine & DIAB)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/14.png",
    isFounder: false,
  },
  {
    id: 10,
    name: "Dr. T. R. Sharath",
    specialty: "Diabetologist",
    designation: "Consultant - Internal Medicine and Diabetologist",
    department: [10],
    qualification: "MBBS, MD (Internal Medicine)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/15.png",
    isFounder: false,
  },
  {
    id: 11,
    name: "Dr. K. Yuvaraja",
    specialty: "Nephrologist",
    designation: "Consultant - Nephrologist & Renal Transplant Physician",
    department: [12],
    qualification: "MBBS, MD, DM (Nephro)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/16.png",
    isFounder: false,
  },
  {
    id: 12,
    name: "Dr. S. Dharun Kumar",
    specialty: "Urologist & Andrologist",
    designation:
      "Consultant - Urologist & Andrologist, Renal Transplant Surgeon",
    department: [25],
    qualification: "MBBS, MS, MCH (Urology)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/17.png",
    isFounder: false,
  },
  {
    id: 13,
    name: "Dr. M. Silambarasan",
    specialty: "Orthopaedic & Arthroscopic Surgeon",
    designation: "Consultant - Orthopaedic & Arthroscopic Surgeon",
    department: [16],
    qualification: "MBBS, MS (ORTHO), FASM, ISAKOS",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/8.png",
    isFounder: false,
  },
  {
    id: 14,
    name: "Dr. V. Kishore",
    specialty: "Orthopaedics",
    designation: "Consultant Orthopaedic, Hand &  Microsurgeon",
    department: [16],
    qualification: "MBBS, MS (ORTHO), DNB (ORTHO), MNAMS, MRCS, MCH(Hand & Microsurgery)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/9.png",
    isFounder: false,
  },
  {
    id: 15,
    name: "Dr. V. C. Dhayanethi",
    specialty: "Anaesthesiologist",
    designation: "Consultant - Emergency, Critical Care & Anaesthesia",
    department: [3, 2],
    qualification: "MBBS, MD, DNB",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/4.png",
    isFounder: false,
  },
  {
    id: 16,
    name: "Dr. R. Karthikeyan",
    specialty: "Emergency & Critical Care",
    designation: "Consultant - Emergency & Critical Care",
    department: [2],
    qualification: "MBBS, MRCEM, MEM, F.DIAB",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/5.png",
    isFounder: false,
  },
  {
    id: 17,
    name: "Dr. N. Prasath Kumaran",
    specialty: "Anaesthesiologist",
    designation: "Emergency, Critical Care & Anaesthesia",
    department: [2, 3],
    qualification: "MBBS, MD (ANAES)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/6.png",
    isFounder: false,
  },
  {
    id: 18,
    name: "Dr. Shravanthi Mantra",
    specialty: "ENT",
    designation: "Consultant - ENT Surgeon",
    department: [7],
    qualification: "MBBS, MS (ENT)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/18.png",
    isFounder: false,
  },
  {
    id: 19,
    name: "Dr. M. Jeyturuvan",
    specialty: "Dental",
    designation: "Consultant - Dental & OMFS Surgeon",
    department: [6],
    qualification: "BDS, MDS",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/19.png",
    isFounder: false,
  },
  {
    id: 20,
    name: "Dr. C. P. Suresh",
    specialty: "Neurologist",
    designation: "Consultant - Neurologist",
    department: [13],
    qualification: "MBBS, MD (PAED), DM (NEURO)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/20.png",
    isFounder: false,
  },
  {
    id: 21,
    name: "Dr. P. Viggnesh",
    specialty: "Neurologist",
    designation: "Consultant - Brain & Spine Surgeon",
    department: [13, 14],
    qualification: "MBBS, MS, MCH, (NEURO SURGERY)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/21.png",
    isFounder: false,
  },
  {
    id: 22,
    name: "Dr. S. M. Sindoory",
    specialty: "Ophthalmologist",
    designation: "Consultant - PHACO Comprehensive Ophthalmologist",
    department: [17],
    qualification: "MBBS, DO",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/22.png",
    isFounder: false,
  },
  {
    id: 23,
    name: "Dr. Sindhu Karthikeyan",
    specialty: "Radiologist",
    designation: "Consultant - Radiologist",
    department: [24],
    qualification: "MBBS, DNB (Radiology)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/23.png",
    isFounder: false,
  },
  {
    id: 24,
    name: "Dr. Revathy",
    specialty: "Master Health Checkup",
    designation: "Consultant - Master Health Checkup",
    department: [11],
    qualification: "MBBS, DCH",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/24.png",
    isFounder: false,
  },
  {
    id: 25,
    name: "Dr. K. Senthil Kumar",
    specialty: "General Surgeon",
    designation: "Consultant - General Surgeon",
    department: [8],
    qualification: "MBBS, MS (GEN Surgery), FIAGES, FALS (HERNIA)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/25.png",
    isFounder: false,
  },
  {
    id: 26,
    name: "Dr. S. Chandrasekar",
    specialty: "Pulmonologist",
    designation: "Senior Consultant Pulmonologist",
    department: [22],
    qualification: "MBBS, DTED, DNB, EDARM",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/26.png",
    isFounder: false,
  },
  {
    id: 27,
    name: "Dr. A. Deepica Kumar",
    specialty: "Psychiatrist",
    designation: "Consultant Psychiatrist",
    department: [23],
    qualification: "MBBS, MD (Psychiatry)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/29.png",
    isFounder: false,
  },
  {
    id: 28,
    name: "Dr. Ashwin Raja",
    specialty: "Plastic Surgery",
    designation:
      "Consultant - Plastic Reconstructive Aesthetic Hand Diabetic Foot & Microvascular Surgeon",
    department: [21],
    qualification: "MBBS, MS, MCH (Plastic Surgery)",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/27.png",
    isFounder: false,
  },
  {
    id: 29,
    name: "Dr. S. Gokul Balaji",
    specialty: "Plastic Surgeon",
    designation: "Consultant - Plastic Surgeon",
    department: [21],
    qualification: "MBBS, MS, MCH (Plastic & Reconstructive Surgery), F.Cosmetic Surgery & Clinical Aesthetics",
    image:
      "https://raw.githubusercontent.com/Akilesh-programmer/SSS-Web/dev/src/assets/doctor_photos/28.png",
    isFounder: false,
  },
];
