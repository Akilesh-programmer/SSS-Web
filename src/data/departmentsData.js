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
  FaUserCog,
  FaUserPlus,
  FaUserMinus,
  FaUserCircle,
  FaUserSecret,
} from "react-icons/fa";

const departments = [
  {
    id: 1,
    name: "Accident & Emergency Care",
    slug: "accident-emergency",
    description:
      "24/7 emergency medical services with trained trauma specialists and state-of-the-art emergency equipment.",
    overview: {
      introduction:
        "Our Emergency Department is equipped with the latest medical technology and staffed by experienced emergency physicians, nurses, and support staff who are available 24/7 to handle all types of medical emergencies.",
      features: [
        "24/7 Emergency Services",
        "Trauma Care Unit",
        "Critical Care Management",
        "Advanced Life Support",
        "Emergency Surgery Capabilities",
        "Poison Control Center",
        "Emergency Pediatric Care",
        "Cardiac Emergency Management",
      ],
      stats: {
        "Patients Treated Annually": "50,000+",
        "Average Response Time": "< 5 minutes",
        "Success Rate": "98.5%",
        "Emergency Beds": "25",
      },
    },
    doctors: [
      {
        name: "Dr. Rajesh Kumar",
        designation: "Chief Emergency Physician",
        experience: "15 years",
        specialization: "Emergency Medicine, Trauma Care",
        qualifications: "MBBS, MD Emergency Medicine",
        availability: "24/7 Emergency Coverage",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Priya Sharma",
        designation: "Senior Emergency Consultant",
        experience: "12 years",
        specialization: "Pediatric Emergency, Critical Care",
        qualifications: "MBBS, MD Pediatrics, Fellowship Emergency Medicine",
        availability: "Mon-Fri: 8AM-8PM",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Amit Patel",
        designation: "Emergency Medicine Specialist",
        experience: "10 years",
        specialization: "Trauma Surgery, Emergency Procedures",
        qualifications: "MBBS, MS General Surgery, DNB Emergency Medicine",
        availability: "Weekends & Night Shifts",
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80",
      },
    ],
    services: [
      {
        name: "Trauma Care",
        description:
          "Comprehensive trauma management for accident victims and severe injuries",
        procedures: [
          "Emergency Surgery",
          "Fracture Management",
          "Head Injury Care",
          "Spinal Injury Treatment",
        ],
      },
      {
        name: "Cardiac Emergency",
        description: "Immediate care for heart-related emergencies",
        procedures: [
          "CPR",
          "Defibrillation",
          "Emergency Angioplasty",
          "Heart Attack Management",
        ],
      },
      {
        name: "Stroke Care",
        description: "Rapid diagnosis and treatment of stroke patients",
        procedures: [
          "CT Brain Scan",
          "Thrombolysis",
          "Stroke Rehabilitation Planning",
        ],
      },
      {
        name: "Emergency Surgery",
        description: "Life-saving surgical procedures in emergency situations",
        procedures: [
          "Appendectomy",
          "Emergency Laparotomy",
          "Emergency Caesarean",
          "Trauma Surgery",
        ],
      },
    ],
    facilities: [
      "24/7 Emergency Department",
      "Trauma Resuscitation Bays",
      "Emergency Operating Theatres",
      "Critical Care Monitoring",
      "Advanced Diagnostic Imaging",
      "Emergency Pharmacy",
      "Ambulance Services",
      "Emergency Blood Bank",
      "Poison Control Center",
      "Emergency Pediatric Unit",
    ],
    conditions: [
      "Heart Attack",
      "Stroke",
      "Severe Injuries",
      "Burns",
      "Poisoning",
      "Respiratory Distress",
      "Seizures",
      "Severe Bleeding",
      "Allergic Reactions",
      "Emergency Childbirth",
    ],
    timings: "24/7 Available",
    contact: {
      phone: "+91-9876543210",
      emergency: "108",
      email: "emergency@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1666214280577-909294d7c41f?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    name: "Cardiology",
    slug: "cardiology",
    description:
      "Comprehensive heart care with advanced cardiac procedures, preventive cardiology, and cardiac rehabilitation services.",
    overview: {
      introduction:
        "Our Cardiology Department offers complete cardiovascular care with state-of-the-art diagnostic and treatment facilities. We provide comprehensive cardiac services from prevention to complex interventional procedures.",
      features: [
        "Advanced Cardiac Catheterization Lab",
        "Non-invasive Cardiac Testing",
        "Interventional Cardiology",
        "Cardiac Surgery",
        "Heart Failure Management",
        "Preventive Cardiology",
        "Cardiac Rehabilitation",
        "24/7 Emergency Cardiac Care",
      ],
      stats: {
        "Procedures Annually": "5,000+",
        "Success Rate": "97.2%",
        "Cardiac Surgeries": "500+",
        Specialists: "8",
      },
    },
    doctors: [
      {
        name: "Dr. Suresh Reddy",
        designation: "Chief Cardiologist",
        experience: "20 years",
        specialization: "Interventional Cardiology, Cardiac Surgery",
        qualifications: "MBBS, MD Cardiology, DM Interventional Cardiology",
        availability: "Mon-Sat: 10AM-4PM",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Kavitha Menon",
        designation: "Senior Cardiac Consultant",
        experience: "18 years",
        specialization: "Preventive Cardiology, Heart Failure",
        qualifications: "MBBS, MD Medicine, DM Cardiology",
        availability: "Mon-Fri: 9AM-5PM",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Arun Singh",
        designation: "Interventional Cardiologist",
        experience: "15 years",
        specialization: "Angioplasty, Cardiac Stenting",
        qualifications:
          "MBBS, MD Cardiology, Fellowship Interventional Cardiology",
        availability: "Tue-Sat: 11AM-3PM",
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80",
      },
    ],
    services: [
      {
        name: "Diagnostic Cardiology",
        description: "Comprehensive cardiac diagnostic services",
        procedures: [
          "ECG",
          "Echo Cardiogram",
          "Stress Testing",
          "Holter Monitoring",
          "CT Angiography",
          "MRI Heart",
        ],
      },
      {
        name: "Interventional Cardiology",
        description: "Minimally invasive cardiac procedures",
        procedures: [
          "Angioplasty",
          "Stent Placement",
          "Balloon Valvuloplasty",
          "Cardiac Catheterization",
        ],
      },
      {
        name: "Cardiac Surgery",
        description: "Advanced cardiac surgical procedures",
        procedures: [
          "Bypass Surgery",
          "Valve Replacement",
          "Pacemaker Implantation",
          "Heart Transplant",
        ],
      },
      {
        name: "Preventive Cardiology",
        description: "Heart disease prevention and management",
        procedures: [
          "Risk Assessment",
          "Lifestyle Counseling",
          "Medication Management",
          "Regular Monitoring",
        ],
      },
    ],
    facilities: [
      "Cardiac Catheterization Lab",
      "Echo Cardiography Suite",
      "Cardiac CT & MRI",
      "Stress Testing Lab",
      "Cardiac Surgery OT",
      "CCU (Coronary Care Unit)",
      "Cardiac Rehabilitation Center",
      "Heart Station",
      "Emergency Cardiac Care",
      "Cardiac Pharmacy",
    ],
    conditions: [
      "Coronary Artery Disease",
      "Heart Attack",
      "Heart Failure",
      "Arrhythmias",
      "Valve Diseases",
      "High Blood Pressure",
      "Congenital Heart Disease",
      "Cardiomyopathy",
      "Peripheral Artery Disease",
      "Aortic Diseases",
    ],
    timings: "Mon-Sat: 9AM-6PM",
    contact: {
      phone: "+91-9876543211",
      email: "cardiology@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    name: "Neurology",
    slug: "neurology",
    description:
      "Specialized care for neurological disorders affecting the brain, spinal cord, and nervous system.",
    overview: {
      introduction:
        "Our Neurology Department provides comprehensive care for disorders of the nervous system. We offer advanced diagnostic and treatment options for a wide range of neurological conditions.",
      features: [
        "Advanced Neuroimaging",
        "Epilepsy Monitoring Unit",
        "Stroke Care Unit",
        "Movement Disorder Clinic",
        "Memory Clinic",
        "Neuromuscular Clinic",
        "Sleep Disorder Center",
        "Neuro-rehabilitation",
      ],
      stats: {
        "Patients Treated": "3,000+ annually",
        "Neurological Procedures": "1,200+",
        "Success Rate": "95.8%",
        Specialists: "6",
      },
    },
    doctors: [
      {
        name: "Dr. Ashok Verma",
        designation: "Chief Neurologist",
        experience: "22 years",
        specialization: "Epilepsy, Movement Disorders",
        qualifications: "MBBS, MD Neurology, Fellowship Epilepsy",
        availability: "Mon-Sat: 10AM-4PM",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Rekha Sharma",
        designation: "Senior Neurology Consultant",
        experience: "16 years",
        specialization: "Stroke, Neurovascular Disorders",
        qualifications: "MBBS, MD Medicine, DM Neurology",
        availability: "Mon-Fri: 11AM-5PM",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Sanjay Gupta",
        designation: "Movement Disorder Specialist",
        experience: "14 years",
        specialization: "Parkinson's Disease, Dystonia",
        qualifications: "MBBS, DM Neurology, Fellowship Movement Disorders",
        availability: "Wed-Sat: 2PM-6PM",
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80",
      },
    ],
    services: [
      {
        name: "Stroke Care",
        description: "Comprehensive stroke diagnosis and treatment",
        procedures: [
          "Thrombolysis",
          "Mechanical Thrombectomy",
          "Stroke Rehabilitation",
          "Carotid Stenting",
        ],
      },
      {
        name: "Epilepsy Management",
        description: "Complete epilepsy care and monitoring",
        procedures: [
          "Video EEG Monitoring",
          "Epilepsy Surgery Evaluation",
          "Medication Management",
          "Ketogenic Diet",
        ],
      },
      {
        name: "Movement Disorders",
        description: "Treatment for movement-related conditions",
        procedures: [
          "DBS (Deep Brain Stimulation)",
          "Botox Injections",
          "Medication Management",
          "Physiotherapy",
        ],
      },
      {
        name: "Neuromuscular Disorders",
        description: "Care for muscle and nerve conditions",
        procedures: [
          "EMG/NCV Studies",
          "Muscle Biopsy",
          "Genetic Testing",
          "Rehabilitation",
        ],
      },
    ],
    facilities: [
      "MRI & CT Brain Imaging",
      "EEG Laboratory",
      "EMG/NCV Suite",
      "Video EEG Monitoring",
      "Stroke Unit",
      "Neurology ICU",
      "Sleep Study Lab",
      "Neuro-rehabilitation Center",
      "Movement Disorder Clinic",
      "Memory Assessment Center",
    ],
    conditions: [
      "Stroke",
      "Epilepsy",
      "Parkinson's Disease",
      "Multiple Sclerosis",
      "Alzheimer's Disease",
      "Migraine",
      "Brain Tumors",
      "Spinal Cord Disorders",
      "Peripheral Neuropathy",
      "Muscle Disorders",
    ],
    timings: "Mon-Sat: 9AM-6PM",
    contact: {
      phone: "+91-9876543212",
      email: "neurology@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    name: "Orthopedics",
    slug: "orthopedics",
    description:
      "Comprehensive bone, joint, and musculoskeletal care with advanced surgical and non-surgical treatments.",
    overview: {
      introduction:
        "Our Orthopedics Department provides comprehensive care for musculoskeletal disorders. We offer both surgical and non-surgical treatments for bones, joints, muscles, and related structures.",
      features: [
        "Joint Replacement Surgery",
        "Arthroscopic Surgery",
        "Trauma & Fracture Care",
        "Sports Medicine",
        "Spine Surgery",
        "Pediatric Orthopedics",
        "Physiotherapy",
        "Pain Management",
      ],
      stats: {
        "Surgeries Annually": "2,500+",
        "Joint Replacements": "800+",
        "Success Rate": "96.5%",
        Specialists: "7",
      },
    },
    doctors: [
      {
        name: "Dr. Ramesh Babu",
        designation: "Chief Orthopedic Surgeon",
        experience: "25 years",
        specialization: "Joint Replacement, Trauma Surgery",
        qualifications: "MBBS, MS Orthopedics, Fellowship Joint Replacement",
        availability: "Mon-Sat: 9AM-6PM",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Vidya Sagar",
        designation: "Senior Orthopedic Consultant",
        experience: "18 years",
        specialization: "Spine Surgery, Sports Medicine",
        qualifications: "MBBS, MS Orthopedics, Fellowship Spine Surgery",
        availability: "Tue-Sat: 10AM-4PM",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Ravi Kumar",
        designation: "Arthroscopic Surgeon",
        experience: "12 years",
        specialization: "Minimally Invasive Surgery, Sports Injuries",
        qualifications: "MBBS, MS Orthopedics, Fellowship Arthroscopy",
        availability: "Mon-Fri: 11AM-5PM",
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80",
      },
    ],
    services: [
      {
        name: "Joint Replacement",
        description: "Advanced joint replacement surgeries",
        procedures: [
          "Hip Replacement",
          "Knee Replacement",
          "Shoulder Replacement",
          "Revision Surgery",
        ],
      },
      {
        name: "Arthroscopic Surgery",
        description: "Minimally invasive joint procedures",
        procedures: [
          "Knee Arthroscopy",
          "Shoulder Arthroscopy",
          "Hip Arthroscopy",
          "Ankle Arthroscopy",
        ],
      },
      {
        name: "Trauma Care",
        description: "Emergency and elective fracture treatment",
        procedures: [
          "Fracture Fixation",
          "Emergency Surgery",
          "Polytrauma Management",
          "Complex Reconstructions",
        ],
      },
      {
        name: "Spine Surgery",
        description: "Comprehensive spine care",
        procedures: [
          "Disc Surgery",
          "Spinal Fusion",
          "Minimally Invasive Spine Surgery",
          "Deformity Correction",
        ],
      },
    ],
    facilities: [
      "Modern Operating Theatres",
      "Arthroscopy Suite",
      "Joint Replacement Center",
      "Trauma Unit",
      "Physiotherapy Department",
      "Sports Medicine Clinic",
      "Pain Management Center",
      "Orthopedic ICU",
      "Digital X-ray & MRI",
      "Gait Analysis Lab",
    ],
    conditions: [
      "Arthritis",
      "Joint Pain",
      "Fractures",
      "Sports Injuries",
      "Back Pain",
      "Spine Disorders",
      "Bone Tumors",
      "Osteoporosis",
      "Tendon Injuries",
      "Ligament Tears",
    ],
    timings: "Mon-Sat: 8AM-7PM",
    contact: {
      phone: "+91-9876543213",
      email: "orthopedics@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 5,
    name: "Pediatrics",
    slug: "pediatrics",
    description:
      "Specialized healthcare for infants, children, and adolescents with child-friendly environment and expert pediatric care.",
    overview: {
      introduction:
        "Our Pediatrics Department provides comprehensive healthcare for children from birth to 18 years. We offer specialized care in a child-friendly environment with experienced pediatricians and pediatric subspecialists.",
      features: [
        "Newborn Care",
        "Pediatric ICU",
        "Child Development Center",
        "Vaccination Services",
        "Pediatric Surgery",
        "Pediatric Cardiology",
        "Child Psychology",
        "Growth Monitoring",
      ],
      stats: {
        "Children Treated": "10,000+ annually",
        "NICU Admissions": "500+",
        "Success Rate": "98.2%",
        Specialists: "12",
      },
    },
    doctors: [
      {
        name: "Dr. Sudha Menon",
        designation: "Chief Pediatrician",
        experience: "20 years",
        specialization: "Neonatology, Pediatric Critical Care",
        qualifications: "MBBS, MD Pediatrics, Fellowship Neonatology",
        availability: "Mon-Sat: 9AM-7PM",
        image:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Prasad Iyer",
        designation: "Senior Pediatric Consultant",
        experience: "16 years",
        specialization: "Pediatric Cardiology, Child Development",
        qualifications: "MBBS, MD Pediatrics, DM Pediatric Cardiology",
        availability: "Mon-Fri: 10AM-6PM",
        image:
          "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80",
      },
      {
        name: "Dr. Meera Nair",
        designation: "Pediatric Subspecialist",
        experience: "14 years",
        specialization: "Pediatric Gastroenterology, Nutrition",
        qualifications: "MBBS, MD Pediatrics, Fellowship Gastroenterology",
        availability: "Tue-Sat: 11AM-5PM",
        image:
          "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=300&q=80",
      },
    ],
    services: [
      {
        name: "Newborn Care",
        description: "Comprehensive care for newborns",
        procedures: [
          "NICU Care",
          "Newborn Screening",
          "Feeding Support",
          "Premature Baby Care",
        ],
      },
      {
        name: "Child Development",
        description: "Growth and development monitoring",
        procedures: [
          "Developmental Assessment",
          "Early Intervention",
          "Speech Therapy",
          "Behavioral Support",
        ],
      },
      {
        name: "Pediatric Subspecialties",
        description: "Specialized pediatric care",
        procedures: [
          "Pediatric Cardiology",
          "Pediatric Neurology",
          "Pediatric Surgery",
          "Child Psychology",
        ],
      },
      {
        name: "Vaccination Programs",
        description: "Complete immunization services",
        procedures: [
          "Routine Immunizations",
          "Travel Vaccines",
          "Catch-up Schedules",
          "Vaccine Counseling",
        ],
      },
    ],
    facilities: [
      "Pediatric Emergency Department",
      "Neonatal ICU (NICU)",
      "Pediatric ICU (PICU)",
      "Child-friendly Wards",
      "Play Therapy Room",
      "Pediatric Surgery OT",
      "Vaccination Center",
      "Child Development Center",
      "Pediatric Radiology",
      "Lactation Support Center",
    ],
    conditions: [
      "Childhood Infections",
      "Respiratory Disorders",
      "Growth Disorders",
      "Developmental Delays",
      "Congenital Conditions",
      "Childhood Diabetes",
      "Asthma",
      "Allergies",
      "Nutritional Disorders",
      "Behavioral Issues",
    ],
    timings: "Mon-Sat: 8AM-8PM",
    contact: {
      phone: "+91-9876543214",
      email: "pediatrics@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 6,
    name: "Dermatology & Cosmetology",
    slug: "dermatology",
    description:
      "Comprehensive skin care solutions from medical dermatology to advanced cosmetic procedures.",
    overview: {
      introduction:
        "Our Dermatology Department provides comprehensive skin care solutions, from medical dermatology to advanced cosmetic procedures. Led by our founder Dr. S. Sanjith, we offer personalized treatment plans for all skin conditions.",
      features: [
        "Medical Dermatology",
        "Cosmetic Procedures",
        "Laser Treatments",
        "Hair Restoration",
        "Acne Treatment",
        "Psoriasis Management",
        "Skin Cancer Screening",
        "Anti-Aging Treatments",
      ],
      stats: {
        "Procedures Performed": "10,000+",
        "Patient Satisfaction": "98%",
        "Treatment Centers": "3",
        "Specialized Equipment": "15+",
      },
    },
    doctors: [
      {
        name: "Dr. S. Sanjith",
        designation: "Founder, Managing Director & Consultant Dermatologist",
        experience: "15+ years",
        specialization: "Medical & Cosmetic Dermatology",
        qualifications: "MD (DERM)",
        availability: "Mon-Sat: 9AM-6PM",
        image: "/src/assets/Sanjith-SSS-Hospitals.jpg",
        achievements: [
          "Founder of SSS Super Speciality Hospital",
          "Expert in Advanced Dermatological Procedures",
          "Pioneer in Cosmetic Dermatology in Erode",
        ],
      },
    ],
    services: [
      {
        name: "Medical Dermatology",
        description: "Treatment of skin diseases and disorders",
        procedures: [
          "Acne Treatment",
          "Psoriasis Management",
          "Eczema Care",
          "Skin Infection Treatment",
        ],
      },
      {
        name: "Cosmetic Dermatology",
        description: "Advanced cosmetic procedures for skin enhancement",
        procedures: [
          "Laser Hair Removal",
          "Chemical Peels",
          "Botox Treatments",
          "Dermal Fillers",
        ],
      },
    ],
    facilities: [
      "Advanced Laser Equipment",
      "Digital Dermoscopy",
      "Cryotherapy Unit",
      "Phototherapy Chamber",
    ],
    contact: {
      phone: "+91-9876543215",
      email: "dermatology@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 7,
    name: "General Surgery",
    slug: "general-surgery",
    description:
      "Expert surgical care with minimally invasive techniques and comprehensive post-operative support.",
    overview: {
      introduction:
        "Our General Surgery Department offers comprehensive surgical services using advanced minimally invasive techniques. Our experienced surgeons provide expert care for a wide range of surgical conditions.",
      features: [
        "Minimally Invasive Surgery",
        "Laparoscopic Procedures",
        "Emergency Surgery",
        "Daycare Surgery",
        "Robotic Surgery",
        "Endoscopic Procedures",
        "Trauma Surgery",
        "Oncological Surgery",
      ],
      stats: {
        "Surgeries Performed": "5,000+",
        "Success Rate": "99.2%",
        "Operating Theaters": "4",
        "Recovery Rate": "95%",
      },
    },
    doctors: [
      {
        name: "Dr. S. Divakar",
        designation:
          "Senior Consultant Surgical Gastroenterologist & Laparoscopic Surgeon",
        experience: "12+ years",
        specialization: "Laparoscopic & Gastrointestinal Surgery",
        qualifications: "MS, FMAS, DIP. LAP",
        availability: "Mon-Sat: 10AM-5PM",
      },
    ],
    services: [
      {
        name: "Laparoscopic Surgery",
        description: "Minimally invasive surgical procedures",
        procedures: [
          "Gallbladder Surgery",
          "Hernia Repair",
          "Appendectomy",
          "Bowel Surgery",
        ],
      },
      {
        name: "Emergency Surgery",
        description: "24/7 emergency surgical services",
        procedures: [
          "Trauma Surgery",
          "Emergency Appendectomy",
          "Perforation Repair",
          "Emergency Hernia Repair",
        ],
      },
    ],
    facilities: [
      "State-of-the-art Operating Theaters",
      "Advanced Laparoscopic Equipment",
      "ICU for Post-operative Care",
      "Modern Recovery Rooms",
    ],
    contact: {
      phone: "+91-9876543216",
      email: "surgery@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 8,
    name: "Internal Medicine",
    slug: "internal-medicine",
    description:
      "Comprehensive primary healthcare and management of complex medical conditions for adults.",
    overview: {
      introduction:
        "Our Internal Medicine Department provides comprehensive healthcare for adults, focusing on prevention, diagnosis, and treatment of internal diseases. Our physicians are experts in managing complex medical conditions.",
      features: [
        "Preventive Healthcare",
        "Chronic Disease Management",
        "Diabetes Care",
        "Hypertension Management",
        "Cardiac Risk Assessment",
        "Health Screening",
        "Geriatric Care",
        "Infectious Disease Treatment",
      ],
      stats: {
        "Patients Treated": "15,000+",
        "Chronic Disease Management": "3,000+",
        "Health Checkups": "5,000+",
        "Patient Satisfaction": "97%",
      },
    },
    doctors: [
      {
        name: "Dr. S. Shankar",
        designation: "Consultant Internal Medicine & Diabetologist",
        experience: "10+ years",
        specialization: "Internal Medicine & Diabetes Management",
        qualifications: "MD (GENERAL MEDICINE), DM (DIABETOLOGY)",
        availability: "Mon-Sat: 9AM-6PM",
      },
    ],
    services: [
      {
        name: "Diabetes Management",
        description: "Comprehensive diabetes care and education",
        procedures: [
          "Blood Sugar Monitoring",
          "Insulin Therapy",
          "Diabetic Diet Planning",
          "Complication Prevention",
        ],
      },
      {
        name: "Preventive Healthcare",
        description: "Health screening and preventive care services",
        procedures: [
          "Health Checkups",
          "Vaccination",
          "Risk Assessment",
          "Lifestyle Counseling",
        ],
      },
    ],
    facilities: [
      "Modern Consultation Rooms",
      "Diagnostic Equipment",
      "Patient Education Center",
      "Chronic Care Clinic",
    ],
    contact: {
      phone: "+91-9876543217",
      email: "internalmedicine@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 9,
    name: "Dental & Oral Surgery",
    slug: "dental",
    description:
      "Complete dental care from routine checkups to advanced oral surgical procedures.",
    overview: {
      introduction:
        "Our Dental Department provides comprehensive oral healthcare services, from routine dental care to advanced oral surgical procedures. We ensure optimal oral health for patients of all ages.",
      features: [
        "Preventive Dentistry",
        "Cosmetic Dentistry",
        "Oral Surgery",
        "Orthodontics",
        "Endodontics",
        "Periodontics",
        "Pediatric Dentistry",
        "Dental Implants",
      ],
      stats: {
        "Patients Treated": "8,000+",
        "Procedures Performed": "12,000+",
        "Success Rate": "98.5%",
        "Dental Chairs": "6",
      },
    },
    doctors: [
      {
        name: "Dr. S. Priya",
        designation: "Senior Consultant Dental & Oral Surgeon",
        experience: "8+ years",
        specialization: "Oral Surgery & Cosmetic Dentistry",
        qualifications: "BDS, MDS (ORAL SURGERY)",
        availability: "Mon-Sat: 9AM-7PM",
      },
    ],
    services: [
      {
        name: "General Dentistry",
        description: "Routine dental care and treatments",
        procedures: [
          "Dental Checkups",
          "Teeth Cleaning",
          "Fillings",
          "Root Canal Treatment",
        ],
      },
      {
        name: "Cosmetic Dentistry",
        description: "Aesthetic dental procedures",
        procedures: [
          "Teeth Whitening",
          "Veneers",
          "Crowns & Bridges",
          "Smile Makeover",
        ],
      },
    ],
    facilities: [
      "Modern Dental Chairs",
      "Digital X-Ray",
      "Sterilization Equipment",
      "Laser Dentistry",
    ],
    contact: {
      phone: "+91-9876543218",
      email: "dental@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 10,
    name: "Obstetrics & Gynaecology",
    slug: "obstetrics-gynaecology",
    description:
      "Comprehensive women's healthcare including maternity care and gynecological treatments.",
    overview: {
      introduction:
        "Our Obstetrics & Gynaecology Department provides comprehensive women's healthcare services, from routine gynecological care to high-risk pregnancy management and advanced reproductive treatments.",
      features: [
        "Maternity Care",
        "High-Risk Pregnancy",
        "Gynecological Surgery",
        "Infertility Treatment",
        "Menopause Management",
        "PCOS Treatment",
        "Contraceptive Counseling",
        "Cancer Screening",
      ],
      stats: {
        Deliveries: "2,500+",
        Surgeries: "1,500+",
        "Success Rate": "99.1%",
        "NICU Admissions": "200+",
      },
    },
    doctors: [
      {
        name: "Dr. S. Kavitha",
        designation: "Senior Consultant Obstetrician & Gynaecologist",
        experience: "12+ years",
        specialization: "High-Risk Pregnancy & Gynecological Surgery",
        qualifications: "MD (OBG), DGO",
        availability: "Mon-Sat: 10AM-6PM",
      },
    ],
    services: [
      {
        name: "Maternity Services",
        description: "Comprehensive pregnancy and delivery care",
        procedures: [
          "Prenatal Care",
          "Normal Delivery",
          "C-Section",
          "High-Risk Pregnancy",
        ],
      },
      {
        name: "Gynecological Care",
        description: "Women's health and reproductive care",
        procedures: [
          "Pap Smear",
          "Colposcopy",
          "Hysterectomy",
          "Ovarian Cyst Removal",
        ],
      },
    ],
    facilities: [
      "Labor & Delivery Suites",
      "NICU",
      "Operating Theaters",
      "Lactation Support Center",
    ],
    contact: {
      phone: "+91-9876543219",
      email: "obgyn@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 11,
    name: "ENT & Head-Neck Surgery",
    slug: "ent",
    description:
      "Specialized care for ear, nose, throat conditions and head-neck surgical procedures.",
    overview: {
      introduction:
        "Our ENT Department provides comprehensive care for disorders of the ear, nose, throat, and related structures of the head and neck. We offer both medical and surgical treatments using advanced techniques.",
      features: [
        "Hearing Assessment",
        "Sinus Surgery",
        "Voice Disorders",
        "Sleep Apnea Treatment",
        "Head & Neck Cancer",
        "Facial Plastic Surgery",
        "Pediatric ENT",
        "Allergy Treatment",
      ],
      stats: {
        "Patients Treated": "6,000+",
        Surgeries: "1,200+",
        "Hearing Tests": "3,000+",
        "Success Rate": "97.8%",
      },
    },
    doctors: [
      {
        name: "Dr. R. Murugan",
        designation: "Senior Consultant ENT & Head-Neck Surgeon",
        experience: "10+ years",
        specialization: "ENT Surgery & Head-Neck Oncology",
        qualifications: "MS (ENT), DNB",
        availability: "Mon-Sat: 9AM-5PM",
      },
    ],
    services: [
      {
        name: "Diagnostic Services",
        description: "Comprehensive ENT diagnostics",
        procedures: [
          "Audiometry",
          "Nasal Endoscopy",
          "Laryngoscopy",
          "CT Scan Interpretation",
        ],
      },
      {
        name: "Surgical Services",
        description: "Advanced ENT surgical procedures",
        procedures: [
          "Tonsillectomy",
          "FESS Surgery",
          "Thyroidectomy",
          "Mastoidectomy",
        ],
      },
    ],
    facilities: [
      "Audiometry Room",
      "Endoscopy Suite",
      "Minor Surgery Theater",
      "Speech Therapy Center",
    ],
    contact: {
      phone: "+91-9876543220",
      email: "ent@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 12,
    name: "Anaesthesiology",
    slug: "anaesthesiology",
    description:
      "Expert anesthesia services ensuring patient comfort and safety during surgical procedures.",
    overview: {
      introduction:
        "Our Anaesthesiology Department provides comprehensive anesthesia care, pain management, and critical care services. Our experienced anesthesiologists ensure patient safety and comfort during all surgical procedures.",
      features: [
        "General Anesthesia",
        "Regional Anesthesia",
        "Local Anesthesia",
        "Pain Management",
        "Critical Care",
        "Pre-operative Assessment",
        "Post-operative Care",
        "Emergency Anesthesia",
      ],
      stats: {
        "Anesthesia Procedures": "8,000+",
        "Surgery Success Rate": "99.8%",
        "Pain Management Cases": "2,000+",
        "Critical Care Patients": "1,500+",
      },
    },
    doctors: [
      {
        name: "Dr. Anil Gupta",
        designation: "Senior Consultant Anaesthesiologist",
        experience: "15+ years",
        specialization: "Anesthesia & Pain Management",
        qualifications: "MD (ANAESTHESIA), DA",
        availability: "24/7 On-Call",
      },
    ],
    services: [
      {
        name: "Surgical Anesthesia",
        description: "Comprehensive anesthesia for all surgical procedures",
        procedures: [
          "General Anesthesia",
          "Spinal Anesthesia",
          "Epidural Anesthesia",
          "Nerve Blocks",
        ],
      },
      {
        name: "Pain Management",
        description: "Specialized pain relief treatments",
        procedures: [
          "Chronic Pain Treatment",
          "Cancer Pain Management",
          "Back Pain Treatment",
          "Arthritis Pain Relief",
        ],
      },
    ],
    facilities: [
      "Modern Anesthesia Machines",
      "Patient Monitoring Systems",
      "Pain Management Clinic",
      "Critical Care Equipment",
    ],
    contact: {
      phone: "+91-9876543221",
      email: "anaesthesia@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 13,
    name: "Gastroenterology",
    slug: "gastroenterology",
    description:
      "Advanced digestive system care with state-of-the-art endoscopic procedures and treatments.",
    overview: {
      introduction:
        "Our Gastroenterology Department specializes in the diagnosis and treatment of digestive system disorders, offering advanced endoscopic procedures and comprehensive gastrointestinal care.",
      features: [
        "Upper Endoscopy",
        "Colonoscopy",
        "ERCP Procedures",
        "Liver Disease Treatment",
        "IBD Management",
        "Hepatitis Care",
        "Pancreatic Disorders",
        "Acid Reflux Treatment",
      ],
      stats: {
        "Endoscopies Performed": "3,000+",
        "Patients Treated": "5,000+",
        "Success Rate": "96.5%",
        "Early Cancer Detection": "150+",
      },
    },
    doctors: [
      {
        name: "Dr. Ravi Kumar",
        designation: "Senior Consultant Gastroenterologist",
        experience: "12+ years",
        specialization: "Advanced Endoscopy & Hepatology",
        qualifications: "MD (MEDICINE), DM (GASTRO)",
        availability: "Mon-Sat: 10AM-4PM",
      },
    ],
    services: [
      {
        name: "Diagnostic Endoscopy",
        description: "Advanced endoscopic diagnostic procedures",
        procedures: [
          "Upper GI Endoscopy",
          "Colonoscopy",
          "ERCP",
          "EUS (Endoscopic Ultrasound)",
        ],
      },
      {
        name: "Liver Care",
        description: "Comprehensive liver disease management",
        procedures: [
          "Hepatitis Treatment",
          "Liver Biopsy",
          "Fatty Liver Management",
          "Cirrhosis Care",
        ],
      },
    ],
    facilities: [
      "Advanced Endoscopy Suite",
      "Digital Imaging Systems",
      "Recovery Areas",
      "Liver Function Lab",
    ],
    contact: {
      phone: "+91-9876543222",
      email: "gastro@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 14,
    name: "Nephrology",
    slug: "nephrology",
    description:
      "Comprehensive kidney care including dialysis services and transplant support.",
    overview: {
      introduction:
        "Our Nephrology Department provides comprehensive kidney care, from preventive measures to advanced treatments including dialysis services and kidney transplant support.",
      features: [
        "Chronic Kidney Disease",
        "Dialysis Services",
        "Kidney Transplant Support",
        "Hypertension Management",
        "Acute Kidney Injury",
        "Electrolyte Disorders",
        "Glomerular Diseases",
        "Pediatric Nephrology",
      ],
      stats: {
        "Dialysis Sessions": "15,000+",
        "Patients on Dialysis": "200+",
        "Transplant Support": "50+",
        "Success Rate": "95%",
      },
    },
    doctors: [
      {
        name: "Dr. Sunil Agarwal",
        designation: "Senior Consultant Nephrologist",
        experience: "14+ years",
        specialization: "Kidney Disease & Dialysis",
        qualifications: "MD (MEDICINE), DM (NEPHROLOGY)",
        availability: "Mon-Sat: 10AM-4PM",
      },
    ],
    services: [
      {
        name: "Dialysis Services",
        description: "Advanced dialysis treatments and care",
        procedures: [
          "Hemodialysis",
          "Peritoneal Dialysis",
          "Continuous Dialysis",
          "Emergency Dialysis",
        ],
      },
      {
        name: "Kidney Disease Management",
        description: "Comprehensive kidney care programs",
        procedures: [
          "CKD Management",
          "Transplant Preparation",
          "Post-transplant Care",
          "Biopsy Services",
        ],
      },
    ],
    facilities: [
      "Modern Dialysis Center",
      "Transplant Support Unit",
      "Nephrology ICU",
      "Outpatient Clinics",
    ],
    contact: {
      phone: "+91-9876543223",
      email: "nephrology@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 15,
    name: "Neuro Surgery",
    slug: "neurosurgery",
    description:
      "Advanced neurosurgical procedures for brain, spine, and nervous system disorders.",
    overview: {
      introduction:
        "Our Neurosurgery Department offers cutting-edge surgical treatments for disorders of the brain, spine, and nervous system, utilizing the latest minimally invasive techniques and technology.",
      features: [
        "Brain Surgery",
        "Spine Surgery",
        "Tumor Removal",
        "Aneurysm Treatment",
        "Epilepsy Surgery",
        "Minimally Invasive Procedures",
        "Stereotactic Surgery",
        "Pediatric Neurosurgery",
      ],
      stats: {
        "Surgeries Performed": "1,500+",
        "Success Rate": "97.8%",
        "Brain Tumors Treated": "300+",
        "Spine Surgeries": "800+",
      },
    },
    doctors: [
      {
        name: "Dr. Kiran Reddy",
        designation: "Senior Consultant Neurosurgeon",
        experience: "16+ years",
        specialization: "Brain & Spine Surgery",
        qualifications: "MS (NEUROSURGERY), MCH",
        availability: "Mon-Sat: 9AM-3PM",
      },
    ],
    services: [
      {
        name: "Brain Surgery",
        description: "Advanced brain surgical procedures",
        procedures: [
          "Tumor Removal",
          "Aneurysm Clipping",
          "Epilepsy Surgery",
          "Trauma Surgery",
        ],
      },
      {
        name: "Spine Surgery",
        description: "Comprehensive spine surgical treatments",
        procedures: [
          "Disc Surgery",
          "Spinal Fusion",
          "Minimally Invasive Surgery",
          "Deformity Correction",
        ],
      },
    ],
    facilities: [
      "Advanced Operating Theaters",
      "Neuro ICU",
      "Image-guided Surgery",
      "Microsurgical Equipment",
    ],
    contact: {
      phone: "+91-9876543224",
      email: "neurosurgery@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 16,
    name: "Ophthalmology",
    slug: "ophthalmology",
    description:
      "Comprehensive eye care services including advanced surgical procedures and vision correction.",
    overview: {
      introduction:
        "Our Ophthalmology Department provides comprehensive eye care services, from routine eye examinations to advanced surgical procedures, ensuring optimal vision health for all patients.",
      features: [
        "Cataract Surgery",
        "Retinal Treatments",
        "Glaucoma Management",
        "Corneal Transplants",
        "LASIK Surgery",
        "Pediatric Ophthalmology",
        "Oculoplastic Surgery",
        "Emergency Eye Care",
      ],
      stats: {
        "Surgeries Performed": "4,000+",
        "Cataract Surgeries": "2,500+",
        "LASIK Procedures": "800+",
        "Success Rate": "98.5%",
      },
    },
    doctors: [
      {
        name: "Dr. Satish Kumar",
        designation: "Senior Consultant Ophthalmologist",
        experience: "18+ years",
        specialization: "Retinal Surgery & LASIK",
        qualifications: "MS (OPHTHALMOLOGY), FICO",
        availability: "Mon-Sat: 10AM-6PM",
      },
    ],
    services: [
      {
        name: "Surgical Services",
        description: "Advanced eye surgical procedures",
        procedures: [
          "Cataract Surgery",
          "Retinal Surgery",
          "Glaucoma Surgery",
          "LASIK Surgery",
        ],
      },
      {
        name: "Diagnostic Services",
        description: "Comprehensive eye examinations",
        procedures: [
          "Comprehensive Eye Exam",
          "OCT Scanning",
          "Visual Field Testing",
          "Fundus Photography",
        ],
      },
    ],
    facilities: [
      "Modern Eye Operation Theater",
      "LASIK Suite",
      "Advanced Diagnostic Equipment",
      "Low Vision Aids Center",
    ],
    contact: {
      phone: "+91-9876543225",
      email: "ophthalmology@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 17,
    name: "Plastic Surgery",
    slug: "plastic-surgery",
    description:
      "Reconstructive and cosmetic surgical procedures for aesthetic and functional enhancement.",
    overview: {
      introduction:
        "Our Plastic Surgery Department offers both reconstructive and cosmetic surgical procedures, helping patients achieve their aesthetic goals while restoring function and confidence.",
      features: [
        "Cosmetic Surgery",
        "Reconstructive Surgery",
        "Burn Treatment",
        "Hand Surgery",
        "Microsurgery",
        "Breast Surgery",
        "Facial Surgery",
        "Body Contouring",
      ],
      stats: {
        "Surgeries Performed": "2,000+",
        "Cosmetic Procedures": "1,200+",
        "Reconstructive Cases": "800+",
        "Success Rate": "96.8%",
      },
    },
    doctors: [
      {
        name: "Dr. Vikram Singh",
        designation: "Senior Consultant Plastic Surgeon",
        experience: "14+ years",
        specialization: "Cosmetic & Reconstructive Surgery",
        qualifications: "MS (PLASTIC SURGERY), MCH",
        availability: "Mon-Sat: 10AM-4PM",
      },
    ],
    services: [
      {
        name: "Cosmetic Surgery",
        description: "Aesthetic enhancement procedures",
        procedures: [
          "Rhinoplasty",
          "Breast Augmentation",
          "Liposuction",
          "Face Lift",
        ],
      },
      {
        name: "Reconstructive Surgery",
        description: "Functional restoration procedures",
        procedures: [
          "Burn Reconstruction",
          "Trauma Repair",
          "Cleft Repair",
          "Cancer Reconstruction",
        ],
      },
    ],
    facilities: [
      "Advanced Operating Suites",
      "Recovery Rooms",
      "Consultation Areas",
      "Laser Equipment",
    ],
    contact: {
      phone: "+91-9876543226",
      email: "plasticsurgery@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 18,
    name: "Pulmonology",
    slug: "pulmonology",
    description:
      "Specialized care for respiratory system disorders and lung diseases.",
    overview: {
      introduction:
        "Our Pulmonology Department specializes in the diagnosis and treatment of respiratory disorders, offering comprehensive care for lung diseases and breathing problems.",
      features: [
        "Asthma Management",
        "COPD Treatment",
        "Sleep Studies",
        "Bronchoscopy",
        "Lung Function Tests",
        "Pneumonia Care",
        "Tuberculosis Treatment",
        "Interventional Pulmonology",
      ],
      stats: {
        "Patients Treated": "4,000+",
        Bronchoscopies: "800+",
        "Sleep Studies": "500+",
        "Success Rate": "94.5%",
      },
    },
    doctors: [
      {
        name: "Dr. Harish Rao",
        designation: "Senior Consultant Pulmonologist",
        experience: "13+ years",
        specialization: "Respiratory Medicine & Sleep Disorders",
        qualifications: "MD (PULMONARY MEDICINE), DTCD",
        availability: "Mon-Sat: 10AM-5PM",
      },
    ],
    services: [
      {
        name: "Respiratory Care",
        description: "Comprehensive lung disease management",
        procedures: [
          "Asthma Treatment",
          "COPD Management",
          "Pneumonia Care",
          "TB Treatment",
        ],
      },
      {
        name: "Diagnostic Services",
        description: "Advanced respiratory diagnostics",
        procedures: [
          "Bronchoscopy",
          "Lung Function Tests",
          "Sleep Studies",
          "CT Guided Biopsy",
        ],
      },
    ],
    facilities: [
      "Bronchoscopy Suite",
      "Sleep Study Lab",
      "Pulmonary Function Lab",
      "Respiratory ICU",
    ],
    contact: {
      phone: "+91-9876543227",
      email: "pulmonology@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 19,
    name: "Psychiatry",
    slug: "psychiatry",
    description:
      "Mental health services and psychological wellness programs for comprehensive mental care.",
    overview: {
      introduction:
        "Our Psychiatry Department provides comprehensive mental health services, offering evidence-based treatments for various psychological conditions in a supportive environment.",
      features: [
        "Depression Treatment",
        "Anxiety Disorders",
        "Addiction Treatment",
        "Child Psychiatry",
        "Geriatric Psychiatry",
        "Counseling Services",
        "Group Therapy",
        "Crisis Intervention",
      ],
      stats: {
        "Patients Treated": "3,000+",
        "Therapy Sessions": "8,000+",
        "Recovery Rate": "85%",
        "Family Counseling": "1,200+",
      },
    },
    doctors: [
      {
        name: "Dr. Manoj Kumar",
        designation: "Senior Consultant Psychiatrist",
        experience: "15+ years",
        specialization: "Adult & Child Psychiatry",
        qualifications: "MD (PSYCHIATRY), DPM",
        availability: "Mon-Sat: 11AM-6PM",
      },
    ],
    services: [
      {
        name: "Individual Therapy",
        description: "Personalized mental health treatment",
        procedures: [
          "Depression Therapy",
          "Anxiety Treatment",
          "PTSD Counseling",
          "Behavioral Therapy",
        ],
      },
      {
        name: "Specialized Programs",
        description: "Targeted mental health programs",
        procedures: [
          "Addiction Recovery",
          "Child Psychology",
          "Couples Therapy",
          "Group Sessions",
        ],
      },
    ],
    facilities: [
      "Private Consultation Rooms",
      "Group Therapy Rooms",
      "Relaxation Areas",
      "Family Counseling Center",
    ],
    contact: {
      phone: "+91-9876543228",
      email: "psychiatry@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 20,
    name: "Radiology",
    slug: "radiology",
    description:
      "Advanced medical imaging services for accurate diagnosis and treatment planning.",
    overview: {
      introduction:
        "Our Radiology Department provides state-of-the-art medical imaging services, utilizing the latest technology for accurate diagnosis and effective treatment planning.",
      features: [
        "CT Scans",
        "MRI Imaging",
        "X-Ray Services",
        "Ultrasound",
        "Mammography",
        "Interventional Radiology",
        "Nuclear Medicine",
        "PET-CT Scans",
      ],
      stats: {
        "Scans Performed": "25,000+",
        "CT Scans": "8,000+",
        "MRI Scans": "5,000+",
        "Accuracy Rate": "99.2%",
      },
    },
    doctors: [
      {
        name: "Dr. Chandran Nair",
        designation: "Senior Consultant Radiologist",
        experience: "17+ years",
        specialization: "Advanced Imaging & Interventional Radiology",
        qualifications: "MD (RADIOLOGY), DMRD",
        availability: "Mon-Sat: 8AM-8PM",
      },
    ],
    services: [
      {
        name: "Diagnostic Imaging",
        description: "Comprehensive imaging services",
        procedures: ["CT Scans", "MRI Imaging", "Digital X-Rays", "Ultrasound"],
      },
      {
        name: "Interventional Radiology",
        description: "Minimally invasive procedures",
        procedures: [
          "Angiography",
          "Biopsies",
          "Drainage Procedures",
          "Stent Placement",
        ],
      },
    ],
    facilities: [
      "64-Slice CT Scanner",
      "1.5T MRI Machine",
      "Digital X-Ray Systems",
      "Mammography Unit",
    ],
    contact: {
      phone: "+91-9876543229",
      email: "radiology@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 21,
    name: "Urology",
    slug: "urology",
    description:
      "Comprehensive urological care for kidney, bladder, and reproductive system disorders.",
    overview: {
      introduction:
        "Our Urology Department provides comprehensive care for disorders of the urinary system and male reproductive system, offering both medical and surgical treatments.",
      features: [
        "Kidney Stone Treatment",
        "Prostate Care",
        "Bladder Disorders",
        "Male Infertility",
        "Urological Cancer",
        "Minimally Invasive Surgery",
        "Erectile Dysfunction",
        "Incontinence Treatment",
      ],
      stats: {
        "Surgeries Performed": "2,500+",
        "Stone Procedures": "1,500+",
        "Patients Treated": "4,000+",
        "Success Rate": "96.2%",
      },
    },
    doctors: [
      {
        name: "Dr. Rajan Pillai",
        designation: "Senior Consultant Urologist",
        experience: "16+ years",
        specialization: "Uro-oncology & Endourology",
        qualifications: "MS (UROLOGY), MCH",
        availability: "Mon-Sat: 10AM-4PM",
      },
    ],
    services: [
      {
        name: "Stone Management",
        description: "Advanced kidney stone treatments",
        procedures: ["PCNL", "URSL", "Shock Wave Lithotripsy", "Open Surgery"],
      },
      {
        name: "Prostate Care",
        description: "Comprehensive prostate treatments",
        procedures: [
          "TURP",
          "Laser Prostatectomy",
          "Prostate Biopsy",
          "Cancer Treatment",
        ],
      },
    ],
    facilities: [
      "Lithotripsy Unit",
      "Endoscopy Suite",
      "Day Care Center",
      "Andrology Lab",
    ],
    contact: {
      phone: "+91-9876543230",
      email: "urology@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 22,
    name: "Physiotherapy",
    slug: "physiotherapy",
    description:
      "Physical rehabilitation and movement therapy for optimal recovery and wellness.",
    overview: {
      introduction:
        "Our Physiotherapy Department provides comprehensive rehabilitation services, helping patients recover from injuries, surgeries, and chronic conditions through evidence-based therapeutic approaches.",
      features: [
        "Orthopedic Rehabilitation",
        "Neurological Rehabilitation",
        "Sports Physiotherapy",
        "Cardiac Rehabilitation",
        "Pediatric Physiotherapy",
        "Geriatric Care",
        "Pain Management",
        "Home Care Services",
      ],
      stats: {
        "Patients Treated": "6,000+",
        "Therapy Sessions": "20,000+",
        "Recovery Rate": "92%",
        "Sports Injuries": "800+",
      },
    },
    doctors: [
      {
        name: "Dr. Gopal Krishna",
        designation: "Senior Physiotherapist",
        experience: "12+ years",
        specialization: "Orthopedic & Sports Rehabilitation",
        qualifications: "BPT, MPT (ORTHOPEDICS)",
        availability: "Mon-Sat: 8AM-7PM",
      },
    ],
    services: [
      {
        name: "Rehabilitation Services",
        description: "Comprehensive physical rehabilitation",
        procedures: [
          "Post-Surgical Rehabilitation",
          "Injury Recovery",
          "Mobility Training",
          "Strength Building",
        ],
      },
      {
        name: "Specialized Therapy",
        description: "Targeted therapeutic interventions",
        procedures: [
          "Manual Therapy",
          "Electrotherapy",
          "Exercise Therapy",
          "Aquatic Therapy",
        ],
      },
    ],
    facilities: [
      "Therapy Gymnasium",
      "Electrotherapy Unit",
      "Hydrotherapy Pool",
      "Assessment Rooms",
    ],
    contact: {
      phone: "+91-9876543231",
      email: "physiotherapy@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 23,
    name: "Master Health Checkup",
    slug: "health-checkup",
    description:
      "Comprehensive health screening packages for preventive healthcare and early detection.",
    overview: {
      introduction:
        "Our Master Health Checkup program offers comprehensive health screening packages designed for preventive healthcare, early disease detection, and wellness monitoring.",
      features: [
        "Complete Blood Profile",
        "Cardiac Assessment",
        "Cancer Screening",
        "Diabetes Screening",
        "Liver Function Tests",
        "Kidney Function Tests",
        "Thyroid Assessment",
        "Lifestyle Counseling",
      ],
      stats: {
        "Health Checkups": "8,000+",
        "Early Detection Rate": "95%",
        "Packages Available": "15+",
        "Follow-up Rate": "88%",
      },
    },
    doctors: [
      {
        name: "Dr. Balaji Rao",
        designation: "Consultant Internal Medicine & Preventive Care",
        experience: "11+ years",
        specialization: "Preventive Medicine & Health Screening",
        qualifications: "MD (GENERAL MEDICINE), DIP. DIABETES",
        availability: "Mon-Sat: 7AM-12PM",
      },
    ],
    services: [
      {
        name: "Executive Packages",
        description: "Comprehensive health screening for executives",
        procedures: [
          "Complete Blood Work",
          "Cardiac Assessment",
          "Imaging Studies",
          "Specialist Consultations",
        ],
      },
      {
        name: "Wellness Programs",
        description: "Preventive healthcare programs",
        procedures: [
          "Annual Health Checkup",
          "Diabetic Screening",
          "Cancer Prevention",
          "Lifestyle Assessment",
        ],
      },
    ],
    facilities: [
      "Dedicated Health Checkup Center",
      "Modern Lab Facilities",
      "Imaging Services",
      "Consultation Rooms",
    ],
    contact: {
      phone: "+91-9876543232",
      email: "healthcheckup@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 24,
    name: "Vascular Surgery",
    slug: "vascular-surgery",
    description:
      "Specialized surgical care for blood vessel disorders and vascular system diseases.",
    overview: {
      introduction:
        "Our Vascular Surgery Department specializes in the surgical treatment of diseases affecting the circulatory system, offering both open and minimally invasive procedures.",
      features: [
        "Arterial Surgery",
        "Venous Surgery",
        "Aneurysm Repair",
        "Bypass Surgery",
        "Endovascular Procedures",
        "Diabetic Foot Care",
        "Varicose Vein Treatment",
        "Emergency Vascular Care",
      ],
      stats: {
        "Surgeries Performed": "1,200+",
        "Bypass Procedures": "400+",
        "Endovascular Cases": "600+",
        "Success Rate": "97.5%",
      },
    },
    doctors: [
      {
        name: "Dr. Krishnan Iyer",
        designation: "Senior Consultant Vascular Surgeon",
        experience: "14+ years",
        specialization: "Endovascular & Open Vascular Surgery",
        qualifications: "MS (GENERAL SURGERY), MCH (VASCULAR)",
        availability: "Mon-Sat: 9AM-4PM",
      },
    ],
    services: [
      {
        name: "Arterial Procedures",
        description: "Comprehensive arterial disease treatment",
        procedures: [
          "Angioplasty",
          "Bypass Surgery",
          "Aneurysm Repair",
          "Endarterectomy",
        ],
      },
      {
        name: "Venous Care",
        description: "Venous disorder treatments",
        procedures: [
          "Varicose Vein Surgery",
          "DVT Treatment",
          "Venous Stenting",
          "Sclerotherapy",
        ],
      },
    ],
    facilities: [
      "Hybrid Operating Theater",
      "Vascular Lab",
      "Angiography Suite",
      "Recovery Units",
    ],
    contact: {
      phone: "+91-9876543233",
      email: "vascularsurgery@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 25,
    name: "Pharmacy",
    slug: "pharmacy",
    description:
      "24/7 pharmaceutical services providing comprehensive medication management and dispensing.",
    overview: {
      introduction:
        "Our Pharmacy Department provides round-the-clock pharmaceutical services, ensuring safe medication dispensing, counseling, and comprehensive drug information services.",
      features: [
        "24/7 Pharmacy Services",
        "Prescription Dispensing",
        "Drug Information",
        "Medication Counseling",
        "Clinical Pharmacy",
        "Inventory Management",
        "Emergency Medications",
        "Home Delivery",
      ],
      stats: {
        "Prescriptions Filled": "100,000+",
        "Medications Stocked": "5,000+",
        "Patient Counseling": "15,000+",
        "Accuracy Rate": "99.8%",
      },
    },
    doctors: [
      {
        name: "Pharmacist Ravi Kumar",
        designation: "Chief Pharmacist",
        experience: "10+ years",
        specialization: "Clinical Pharmacy & Drug Information",
        qualifications: "PharmD, RPh",
        availability: "24/7 Available",
      },
    ],
    services: [
      {
        name: "Dispensing Services",
        description: "Safe and accurate medication dispensing",
        procedures: [
          "Prescription Filling",
          "Drug Interaction Checking",
          "Dosage Verification",
          "Label Generation",
        ],
      },
      {
        name: "Clinical Services",
        description: "Patient-centered pharmaceutical care",
        procedures: [
          "Medication Counseling",
          "Drug Information",
          "Therapy Monitoring",
          "Adverse Effect Reporting",
        ],
      },
    ],
    facilities: [
      "Modern Dispensing Area",
      "Cold Storage Unit",
      "Automated Systems",
      "Consultation Counter",
    ],
    contact: {
      phone: "+91-9876543234",
      email: "pharmacy@ssshospital.com",
    },
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    ],
  },
];

// Helper functions
export const getAllDepartments = () => departments;

export const getDepartmentBySlug = (slug) => {
  return departments.find((dept) => dept.slug === slug);
};

export const getDepartmentById = (id) => {
  return departments.find((dept) => dept.id === id);
};
