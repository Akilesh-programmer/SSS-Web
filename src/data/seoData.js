/**
 * SEO Data for all pages - SSS Super Speciality Hospital
 * Optimized titles (<60 chars), unique descriptions (150-160 chars) with CTAs
 * MASSIVE keyword coverage — general, department, condition, treatment, Tamil, nearby towns
 * Updated: August 2026
 */

import { SITE_CONFIG, MEDICAL_KEYWORDS } from "../utils/seo";

// ─── Nearby towns for geo-modifier keywords ───
const NEARBY_TOWNS = [
  "erode",
  "perundurai",
  "bhavani",
  "gobichettipalayam",
  "sathyamangalam",
  "kangayam",
  "dharapuram",
];

// Helper: generate town variants of a keyword
const withTowns = (base, towns = NEARBY_TOWNS) =>
  towns.map((t) => `${base} ${t}`);

// ═══════════════════════════════════════════════
//  PAGE-LEVEL SEO (General / Non-Department Pages)
// ═══════════════════════════════════════════════

export const PAGE_SEO = {
  home: {
    title:
      "SSS Super Speciality Hospital - Best Multi-Speciality Hospital in Erode, Tamil Nadu",
    description:
      "SSS Super Speciality Hospital — leading NABH-certified multi-speciality hospital in Erode with 24/7 emergency care, 20+ specialities & expert doctors. Book now!",
    keywords: [
      // ── Brand & identity ──
      "sss hospital erode",
      "sss super speciality hospital",
      "sss hospital",
      "sss erode",

      // ── Best hospital searches ──
      "best hospital in erode",
      "best hospital erode",
      "top hospital in erode",
      "top hospitals erode",
      "no 1 hospital in erode",
      "number one hospital erode",
      "leading hospital erode",
      "famous hospital in erode",
      "good hospital in erode",
      "well known hospital in erode",
      "trusted hospital erode",
      "best private hospital erode",
      "top rated hospital erode",
      "best rated hospital in erode",

      // ── Multi-speciality / Super-speciality ──
      "multi speciality hospital erode",
      "multispeciality hospital erode",
      "super speciality hospital erode",
      "superspeciality hospital erode",
      "multi speciality hospital tamil nadu",
      "super speciality hospital tamil nadu",
      "best multi speciality hospital erode",
      "best super speciality hospital erode",
      "best multispeciality hospital in tamil nadu",

      // ── Emergency & 24/7 ──
      "24/7 hospital erode",
      "24 hours hospital erode",
      "emergency hospital erode",
      "emergency hospital near me erode",
      "accident hospital erode",
      "trauma hospital erode",
      "ambulance service erode",
      "emergency care erode",

      // ── General health searches ──
      "hospital near me erode",
      "hospital in erode",
      "hospitals in erode tamil nadu",
      "best medical care erode",
      "advanced healthcare erode",
      "affordable hospital erode",
      "low cost hospital erode",
      "best treatment in erode",
      "health care erode",

      // ── NABH / accreditation ──
      "NABH hospital erode",
      "NABH certified hospital erode",
      "NABH accredited hospital erode",
      "accredited hospital erode",

      // ── Insurance / scheme searches ──
      "CMCHIS hospital erode",
      "insurance hospital erode",
      "cashless hospital erode",
      "government scheme hospital erode",
      "health insurance hospital erode",

      // ── Nearby town searches ──
      ...withTowns("best hospital"),
      ...withTowns("hospital near me"),
      ...withTowns("multi speciality hospital"),
      "hospital perundurai road erode",

      // ── Tamil language ──
      "சிறந்த மருத்துவமனை ஈரோடு",
      "ஈரோடு மருத்துவமனை",
      "ஈரோட்டில் சிறந்த மருத்துவமனை",
      "மல்டி ஸ்பெஷாலிட்டி மருத்துவமனை ஈரோடு",
      "எஸ்எஸ்எஸ் மருத்துவமனை",
      "அவசர சிகிச்சை மருத்துவமனை ஈரோடு",

      // ── Symptom-based general ──
      "doctor near me erode",
      "specialist doctor erode",
      "best doctor in erode",
      "medical consultation erode",
      "health checkup erode",
      "diagnostic center erode",
      "lab test erode",
      "blood test erode",
    ],
    url: "/",
    type: "website",
  },

  about: {
    title: "About SSS Super Speciality Hospital Erode | Our Mission",
    description:
      "Learn about SSS Super Speciality Hospital — Erode's trusted healthcare provider with 20+ specialities, NABH-accredited facilities, and a mission to deliver world-class medical care. Visit us today.",
    keywords: [
      "about sss hospital",
      "about sss super speciality hospital",
      "sss hospital history",
      "sss hospital erode about",
      "hospital history erode",
      "best hospital erode",
      "healthcare mission vision",
      "hospital infrastructure erode",
      "medical excellence erode",
      "patient care philosophy",
      "NABH hospital erode",
      "NABH certified hospital erode",
      "hospital management team erode",
      "hospital founder erode",
      "dr sanjith erode",
      "dr selvakumar erode",
      "hospital awards erode",
      "nalam viruthugal award hospital",
      "best emerging hospital erode",
      "world class healthcare erode",
      "compassionate healthcare erode",
      "modern hospital erode",
      "advanced medical facility erode",
      "hospital with latest technology erode",
    ],
    url: "/about",
    type: "website",
  },

  specialities: {
    title: "20+ Medical Specialities | SSS Hospital Erode",
    description:
      "Explore 20+ medical specialities at SSS Hospital Erode — Cardiology, Neurology, Orthopedics, Gastroenterology, Nephrology & more. Expert specialists under one roof. Book an appointment now.",
    keywords: [
      "medical specialities erode",
      "hospital departments erode",
      "specialist departments erode",
      "all specialities hospital erode",
      "multi department hospital erode",

      // individual speciality mentions for indexing
      "cardiology erode",
      "neurology erode",
      "orthopedics erode",
      "orthopaedics erode",
      "gastroenterology erode",
      "nephrology erode",
      "urology erode",
      "dermatology erode",
      "ENT erode",
      "ophthalmology erode",
      "pediatrics erode",
      "paediatrics erode",
      "obstetrics gynaecology erode",
      "gynecology erode",
      "general surgery erode",
      "neurosurgery erode",
      "plastic surgery erode",
      "vascular surgery erode",
      "pulmonology erode",
      "psychiatry erode",
      "internal medicine erode",
      "radiology erode",
      "anaesthesiology erode",
      "dental surgery erode",
      "physiotherapy erode",

      "multi speciality services",
      "specialist doctors erode",
      "all departments hospital erode",
      "comprehensive medical care erode",
      "one stop hospital erode",
    ],
    url: "/specialities",
    type: "website",
  },

  services: {
    title: "Medical Services & Facilities | SSS Hospital Erode",
    description:
      "Comprehensive medical services at SSS Hospital Erode — 24/7 Emergency Care, ICU, Dialysis, Advanced Surgery, Health Checkups, Lab, Radiology & Ambulance. Call 0424-2888777 now.",
    keywords: [
      // ── Core services ──
      "medical services erode",
      "hospital services erode",
      "healthcare services erode",
      "hospital facilities erode",

      // ── Emergency ──
      "emergency care erode",
      "24/7 emergency erode",
      "trauma care erode",
      "accident care erode",
      "ambulance service erode",
      "ambulance erode",
      "emergency ambulance erode",

      // ── ICU ──
      "icu services erode",
      "intensive care unit erode",
      "critical care erode",
      "icu hospital erode",
      "best icu erode",
      "ventilator facility erode",
      "icu beds erode",

      // ── Surgery ──
      "surgery hospital erode",
      "operation theatre erode",
      "advanced surgery erode",
      "laparoscopic surgery erode",
      "minimally invasive surgery erode",
      "day care surgery erode",

      // ── Dialysis ──
      "dialysis center erode",
      "dialysis hospital erode",
      "hemodialysis erode",
      "kidney dialysis erode",
      "affordable dialysis erode",

      // ── Diagnostics ──
      "diagnostic services erode",
      "diagnostic center erode",
      "lab test erode",
      "blood test erode",
      "pathology lab erode",
      "diagnostic lab erode",

      // ── Imaging ──
      "x ray erode",
      "CT scan erode",
      "ultrasound erode",
      "ECG erode",
      "echocardiography erode",
      "digital x ray erode",
      "radiology services erode",

      // ── Health checkup ──
      "health checkup erode",
      "master health checkup erode",
      "full body checkup erode",
      "annual health checkup erode",
      "preventive health checkup erode",

      // ── Pharmacy ──
      "24/7 pharmacy erode",
      "hospital pharmacy erode",

      // ── General ──
      "best hospital services erode",
      "affordable medical services erode",
      "low cost medical treatment erode",
      "cashless treatment erode",

      // ── Tamil ──
      "மருத்துவ சேவைகள் ஈரோடு",
      "அவசர சிகிச்சை ஈரோடு",
      "ஐசியு ஈரோடு",
    ],
    url: "/services",
    type: "website",
  },

  doctors: {
    title: "Expert Doctors & Specialists | SSS Hospital Erode",
    description:
      "Meet our team of 29+ highly qualified specialist doctors across 20+ medical specialities at SSS Hospital Erode. Experienced physicians dedicated to your wellbeing. Book a consultation today.",
    keywords: [
      // ── General doctor searches ──
      "doctors in erode",
      "best doctors in erode",
      "specialist doctors erode",
      "expert doctors erode",
      "hospital doctors erode",
      "top doctors erode",
      "experienced doctors erode",
      "qualified doctors erode",
      "medical consultants erode",
      "doctor near me erode",
      "best doctor near me",

      // ── Specialist type searches ──
      "cardiologist erode",
      "best cardiologist erode",
      "heart doctor erode",
      "neurologist erode",
      "brain doctor erode",
      "orthopedic doctor erode",
      "bone doctor erode",
      "gynecologist erode",
      "lady doctor erode",
      "pediatrician erode",
      "child doctor erode",
      "gastroenterologist erode",
      "stomach doctor erode",
      "nephrologist erode",
      "kidney doctor erode",
      "urologist erode",
      "dermatologist erode",
      "skin doctor erode",
      "ENT doctor erode",
      "ENT specialist erode",
      "eye doctor erode",
      "ophthalmologist erode",
      "dentist erode",
      "dental surgeon erode",
      "general surgeon erode",
      "neurosurgeon erode",
      "pulmonologist erode",
      "lung doctor erode",
      "psychiatrist erode",
      "mental health doctor erode",
      "plastic surgeon erode",
      "vascular surgeon erode",
      "radiologist erode",
      "anaesthesiologist erode",
      "physiotherapist erode",
      "diabetologist erode",

      // ── Named doctor searches ──
      "dr sanjith erode",
      "dr selvakumar erode",
      "dr padmanaban cardiologist erode",
      "dr natarajan orthopedic erode",
      "dr premakumari gynecologist erode",
      "dr sathish kumar gastro erode",
      "dr yuvaraja nephrologist erode",
      "dr suresh neurologist erode",
      "dr dharun kumar urologist erode",

      // ── Nearby town ──
      ...withTowns("best doctor"),
      ...withTowns("specialist doctor"),

      // ── Tamil ──
      "மருத்துவர்கள் ஈரோடு",
      "சிறந்த மருத்துவர் ஈரோடு",
      "நிபுணர் மருத்துவர் ஈரோடு",
    ],
    url: "/doctors",
    type: "website",
  },

  packages: {
    title: "Health Checkup Packages | SSS Hospital Erode",
    description:
      "Affordable health checkup & master health checkup packages at SSS Hospital Erode. Full body checkups, cardiac screening, diabetes screening & wellness packages. Book your checkup now.",
    keywords: [
      "health checkup packages erode",
      "master health checkup erode",
      "full body checkup erode",
      "preventive healthcare erode",
      "wellness packages erode",
      "cardiac screening erode",
      "diabetes checkup erode",
      "health screening erode",
      "medical checkup erode",
      "annual health checkup erode",
      "comprehensive health checkup erode",
      "health checkup cost erode",
      "affordable health checkup erode",
      "cheap health checkup erode",
      "best health checkup erode",
      "executive health checkup erode",
      "women health checkup erode",
      "senior citizen health checkup erode",
      "blood test packages erode",
      "thyroid test erode",
      "liver function test erode",
      "kidney function test erode",
      "lipid profile test erode",
      "complete blood count erode",
      "HbA1c test erode",
      "ECG test erode",
      "health checkup offers erode",
      ...withTowns("health checkup"),
      ...withTowns("full body checkup"),
      "உடல்நல பரிசோதனை ஈரோடு",
      "மாஸ்டர் ஹெல்த் செக்அப் ஈரோடு",
    ],
    url: "/packages",
    type: "website",
  },

  infrastructure: {
    title: "Hospital Infrastructure & Facilities | SSS Hospital Erode",
    description:
      "Explore state-of-the-art infrastructure at SSS Hospital Erode — modern OTs, advanced ICU, dialysis unit, diagnostic lab, radiology department & comfortable patient rooms. Take a virtual tour.",
    keywords: [
      "hospital infrastructure erode",
      "modern hospital facilities",
      "operation theatre erode",
      "icu facilities erode",
      "medical equipment erode",
      "hospital rooms erode",
      "diagnostic lab erode",
      "advanced healthcare facility",
      "hospital virtual tour erode",
      "hospital gallery erode",
      "modern hospital erode",
      "state of the art hospital erode",
      "hospital technology erode",
      "cath lab erode",
      "cardiac cath lab erode",
      "AI enabled cath lab erode",
      "3D cath lab erode",
      "advanced OT erode",
      "modular operation theatre erode",
      "NICU erode",
      "neonatal ICU erode",
      "dialysis unit erode",
      "pharmacy erode",
      "hospital parking erode",
      "hospital building erode",
    ],
    url: "/infrastructure",
    type: "website",
  },

  rooms: {
    title: "Patient Rooms & Facilities | SSS Hospital Erode",
    description:
      "Comfortable patient rooms with modern amenities at SSS Hospital Erode. General Wards, Semi-Private, Private Rooms & Deluxe Suites — all with 24/7 nursing care, AC & TV. Book a room today.",
    keywords: [
      "hospital rooms erode",
      "patient rooms erode",
      "private rooms erode",
      "deluxe suites hospital",
      "comfortable hospital stay",
      "patient accommodation erode",
      "hospital amenities erode",
      "hospital room charges erode",
      "hospital room cost erode",
      "affordable hospital rooms erode",
      "AC hospital room erode",
      "general ward erode",
      "semi private room erode",
      "hospital bed charges erode",
      "hospital stay erode",
      "best hospital rooms erode",
      "hospital room booking erode",
    ],
    url: "/rooms",
    type: "website",
  },

  contact: {
    title: "Contact Us & Book Appointment | SSS Hospital Erode",
    description:
      "Contact SSS Hospital Erode for appointments & enquiries. Call 0424-2888777 or emergency 89259 31193. Visit us at Perundurai Road, Erode. Available 24/7 for your healthcare needs.",
    keywords: [
      "contact sss hospital",
      "sss hospital phone number",
      "sss hospital erode contact",
      "sss hospital address",
      "book appointment erode",
      "hospital phone number erode",
      "hospital address erode",
      "emergency contact erode",
      "hospital location erode",
      "24/7 emergency erode",
      "appointment booking erode",
      "book doctor appointment erode",
      "online appointment hospital erode",
      "hospital directions erode",
      "hospital map erode",
      "perundurai road hospital",
      "hospital near SBI bank erode",
      "hospital URC nagar erode",
      "sss hospital how to reach",
      "hospital erode location map",
      ...withTowns("hospital contact"),
      "மருத்துவமனை தொடர்பு ஈரோடு",
      "அப்பாயின்ட்மென்ட் ஈரோடு",
    ],
    url: "/contact",
    type: "website",
  },
};

// ═══════════════════════════════════════════════
//  DEPARTMENT-SPECIFIC SEO TEMPLATES
//  Each department: 25-40+ keywords covering
//  specialist, condition, treatment, symptom,
//  Tamil, nearby-town, insurance, doctor-name
// ═══════════════════════════════════════════════

export const DEPARTMENT_SEO_TEMPLATE = {
  "accident-emergency-care": {
    title: "24/7 Emergency & Trauma Care | SSS Hospital Erode",
    description:
      "Round-the-clock emergency & accident care at SSS Hospital Erode. Expert trauma team, ambulance services, and advanced life support. Call 89259 31193 for emergencies.",
    keywords: [
      "emergency hospital erode",
      "24/7 emergency care erode",
      "24 hours emergency erode",
      "trauma care erode",
      "accident hospital erode",
      "ambulance service erode",
      "emergency room erode",
      "ER erode",
      "accident and emergency erode",
      "road accident hospital erode",
      "trauma center erode",
      "emergency doctor erode",
      "first aid hospital erode",
      "snake bite treatment erode",
      "burn treatment erode",
      "poisoning treatment erode",
      "head injury hospital erode",
      "emergency surgery erode",
      "critical care erode",
      "life support erode",
      "ventilator hospital erode",
      "dr selvakumar emergency erode",
      "dr karthikeyan emergency erode",
      ...withTowns("emergency hospital"),
      ...withTowns("ambulance"),
      "அவசர சிகிச்சை ஈரோடு",
      "விபத்து மருத்துவமனை ஈரோடு",
      "ஆம்புலன்ஸ் ஈரோடு",
    ],
  },

  anaesthesiology: {
    title: "Anaesthesiology Department | SSS Hospital Erode",
    description:
      "Safe anaesthesia & pain management services at SSS Hospital Erode. Expert anaesthesiologists for all surgical procedures, ICU care & pain clinics. Book a consultation.",
    keywords: [
      "anaesthesiology erode",
      "anaesthesiologist erode",
      "anesthesiologist erode",
      "pain management erode",
      "surgical anaesthesia erode",
      "critical care erode",
      "pain clinic erode",
      "chronic pain treatment erode",
      "epidural anaesthesia erode",
      "spinal anaesthesia erode",
      "general anaesthesia erode",
      "local anaesthesia erode",
      "painless surgery erode",
      "pain relief doctor erode",
      "best anaesthesiologist erode",
      "dr dhayanethi anaesthesia erode",
      "dr prasath kumaran anaesthesia erode",
      "anaesthesia specialist erode",
      "nerve block erode",
      "pain management clinic erode",
      "வலி நிவாரண மருத்துவர் ஈரோடு",
    ],
  },

  cardiology: {
    title: "Best Cardiologist in Erode | Cardiology – SSS Hospital",
    description:
      "Expert cardiology services at SSS Hospital Erode — ECG, echo, stress tests, angiography & heart disease management. Experienced cardiologists available. Book an appointment today.",
    keywords: [
      // ── Specialist searches ──
      "cardiologist erode",
      "best cardiologist in erode",
      "heart specialist erode",
      "heart doctor erode",
      "cardiac specialist erode",
      "interventional cardiologist erode",
      "best heart doctor in erode",

      // ── Condition searches ──
      "heart attack treatment erode",
      "chest pain treatment erode",
      "heart disease treatment erode",
      "heart failure treatment erode",
      "high blood pressure treatment erode",
      "hypertension doctor erode",
      "cholesterol treatment erode",
      "irregular heartbeat treatment erode",
      "arrhythmia treatment erode",
      "blocked artery treatment erode",
      "coronary artery disease erode",
      "valve disease treatment erode",
      "heart murmur doctor erode",

      // ── Treatment/procedure searches ──
      "angioplasty hospital erode",
      "angiography erode",
      "coronary angiography erode",
      "stent placement erode",
      "bypass surgery erode",
      "pacemaker implant erode",
      "echocardiography erode",
      "ECG test erode",
      "TMT test erode",
      "stress test erode",
      "holter monitoring erode",
      "cardiac catheterization erode",
      "cath lab erode",
      "3D cath lab erode",
      "AI cath lab erode",

      // ── Symptom searches ──
      "chest pain doctor erode",
      "breathing difficulty doctor erode",
      "heart palpitations doctor erode",
      "shortness of breath erode",
      "leg swelling doctor erode",

      // ── Doctor name searches ──
      "dr padmanaban cardiologist erode",
      "dr praveen kumar cardiologist erode",
      "dr n padmanaban heart doctor",
      "dr m praveen kumar heart specialist",

      // ── Nearby town searches ──
      ...withTowns("cardiologist"),
      ...withTowns("heart doctor"),
      ...withTowns("heart specialist"),

      // ── Insurance / cost ──
      "affordable heart treatment erode",
      "CMCHIS cardiology erode",
      "heart treatment cost erode",
      "angioplasty cost erode",
      "cashless heart treatment erode",

      // ── Tamil ──
      "இருதய மருத்துவர் ஈரோடு",
      "இதய நிபுணர் ஈரோடு",
      "மாரடைப்பு சிகிச்சை ஈரோடு",
      "நெஞ்சு வலி மருத்துவர் ஈரோடு",

      // ── Regional ranking ──
      "best cardiology hospital erode",
      "best heart hospital tamil nadu",
      "24/7 cardiac emergency erode",
      "cardiac hospital near me",
    ],
  },

  "dermatology-cosmetology": {
    title: "Best Dermatologist in Erode | Skin Care – SSS Hospital",
    description:
      "Expert dermatology & cosmetology services at SSS Hospital Erode. Acne, eczema, hair loss, laser therapy & cosmetic treatments by experienced dermatologists. Book now.",
    keywords: [
      "dermatologist erode",
      "best dermatologist in erode",
      "skin specialist erode",
      "skin doctor erode",
      "cosmetology erode",
      "cosmetic dermatologist erode",

      // conditions
      "acne treatment erode",
      "pimple treatment erode",
      "eczema treatment erode",
      "psoriasis treatment erode",
      "skin allergy treatment erode",
      "skin rash doctor erode",
      "fungal infection treatment erode",
      "ringworm treatment erode",
      "vitiligo treatment erode",
      "pigmentation treatment erode",
      "dark spots treatment erode",
      "warts removal erode",
      "skin infection treatment erode",

      // hair
      "hair loss treatment erode",
      "hair fall doctor erode",
      "hair transplant erode",
      "baldness treatment erode",
      "dandruff treatment erode",
      "PRP hair treatment erode",

      // cosmetic
      "laser treatment erode",
      "laser skin treatment erode",
      "chemical peel erode",
      "botox erode",
      "skin whitening treatment erode",
      "anti aging treatment erode",
      "scar removal erode",

      // doctor
      "dr sanjith dermatologist erode",
      "dr s sanjith skin doctor",

      // towns
      ...withTowns("skin doctor"),
      ...withTowns("dermatologist"),

      // Tamil
      "தோல் மருத்துவர் ஈரோடு",
      "சரும நிபுணர் ஈரோடு",
      "முடி உதிர்வு சிகிச்சை ஈரோடு",
      "பரு சிகிச்சை ஈரோடு",
    ],
  },

  "dental-oral-and-maxillofacial-surgery": {
    title: "Best Dentist in Erode | Dental Surgery – SSS Hospital",
    description:
      "Comprehensive dental & oral surgery at SSS Hospital Erode. Implants, root canals, wisdom teeth, jaw surgery & orthodontics by expert dental surgeons. Book your visit.",
    keywords: [
      "dentist erode",
      "best dentist in erode",
      "dental hospital erode",
      "dental surgeon erode",
      "dental clinic erode",
      "oral surgeon erode",

      // treatments
      "dental implants erode",
      "root canal treatment erode",
      "RCT treatment erode",
      "wisdom tooth removal erode",
      "tooth extraction erode",
      "dental crown erode",
      "dental bridge erode",
      "teeth cleaning erode",
      "scaling polishing erode",
      "orthodontics erode",
      "braces erode",
      "teeth alignment erode",
      "dentures erode",
      "dental filling erode",

      // conditions
      "toothache doctor erode",
      "tooth pain treatment erode",
      "gum disease treatment erode",
      "bleeding gums treatment erode",
      "jaw pain treatment erode",
      "TMJ treatment erode",
      "oral cancer treatment erode",
      "mouth ulcer treatment erode",

      // surgery
      "maxillofacial surgery erode",
      "jaw surgery erode",
      "facial trauma surgery erode",
      "cleft lip surgery erode",

      // doctor
      "dr jeyturuvan dentist erode",

      // towns
      ...withTowns("dentist"),
      ...withTowns("dental hospital"),

      // Tamil
      "பல் மருத்துவர் ஈரோடு",
      "பல் வலி சிகிச்சை ஈரோடு",
      "பல் இம்ப்ளாண்ட் ஈரோடு",
    ],
  },

  "ent-head-neck": {
    title: "Best ENT Specialist in Erode | ENT – SSS Hospital",
    description:
      "Expert ENT services at SSS Hospital Erode — ear, nose & throat care, sinus surgery, hearing aids & tonsillectomy. Experienced ENT surgeons available. Call now.",
    keywords: [
      "ENT specialist erode",
      "best ENT doctor in erode",
      "ENT doctor erode",
      "ENT hospital erode",
      "ear nose throat erode",
      "ear doctor erode",
      "nose doctor erode",
      "throat doctor erode",

      // conditions
      "sinus treatment erode",
      "sinusitis treatment erode",
      "hearing loss erode",
      "ear infection treatment erode",
      "tonsillitis treatment erode",
      "snoring treatment erode",
      "sleep apnea erode",
      "nasal polyps treatment erode",
      "vertigo treatment erode",
      "ear pain doctor erode",
      "throat infection treatment erode",
      "voice problem doctor erode",
      "nasal bleeding treatment erode",
      "deviated septum treatment erode",
      "ear discharge treatment erode",
      "allergic rhinitis erode",

      // procedures
      "tonsillectomy erode",
      "adenoidectomy erode",
      "sinus surgery erode",
      "septoplasty erode",
      "ear surgery erode",
      "hearing test erode",
      "audiometry erode",
      "hearing aid erode",
      "endoscopic sinus surgery erode",

      // doctor
      "dr shravanthi mantra ENT erode",

      // towns
      ...withTowns("ENT doctor"),
      ...withTowns("ENT specialist"),

      // Tamil
      "காது மூக்கு தொண்டை மருத்துவர் ஈரோடு",
      "காது வலி சிகிச்சை ஈரோடு",
      "சைனஸ் சிகிச்சை ஈரோடு",
    ],
  },

  "general-surgery": {
    title: "Best General Surgeon in Erode | Surgery – SSS Hospital",
    description:
      "Expert general & laparoscopic surgery at SSS Hospital Erode. Hernia, appendix, gallbladder, piles & cancer surgery with minimally invasive techniques. Book a consultation.",
    keywords: [
      "general surgeon erode",
      "best surgeon in erode",
      "surgery hospital erode",
      "laparoscopic surgeon erode",
      "laparoscopic surgery erode",
      "best general surgeon erode",
      "surgeon near me erode",

      // conditions/procedures
      "hernia surgery erode",
      "hernia treatment erode",
      "inguinal hernia erode",
      "umbilical hernia erode",
      "appendix surgery erode",
      "appendicitis treatment erode",
      "gallbladder surgery erode",
      "gallstone surgery erode",
      "cholecystectomy erode",
      "piles treatment erode",
      "hemorrhoids treatment erode",
      "fistula treatment erode",
      "fissure treatment erode",
      "pilonidal sinus treatment erode",
      "lipoma removal erode",
      "cyst removal erode",
      "abscess treatment erode",
      "thyroid surgery erode",
      "breast lump surgery erode",
      "cancer surgery erode",
      "laparoscopic hernia surgery erode",
      "laparoscopic appendix surgery erode",
      "laparoscopic gallbladder surgery erode",
      "minimally invasive surgery erode",

      // doctor
      "dr sathish kumar surgeon erode",
      "dr senthil kumar surgeon erode",

      // towns
      ...withTowns("surgeon"),
      ...withTowns("hernia surgery"),
      ...withTowns("piles treatment"),

      // Tamil
      "அறுவை சிகிச்சை நிபுணர் ஈரோடு",
      "குடலிறக்க சிகிச்சை ஈரோடு",
      "மூல நோய் சிகிச்சை ஈரோடு",
      "பித்தப்பை கல் சிகிச்சை ஈரோடு",
    ],
  },

  gastroenterology: {
    title: "Best Gastroenterologist in Erode | GI Care – SSS Hospital",
    description:
      "Expert gastroenterology at SSS Hospital Erode. Endoscopy, colonoscopy, liver disease & digestive disorder treatment by experienced gastroenterologists. Book an appointment.",
    keywords: [
      "gastroenterologist erode",
      "best gastroenterologist in erode",
      "stomach doctor erode",
      "digestive specialist erode",
      "gastro doctor erode",
      "GI specialist erode",
      "liver specialist erode",
      "liver doctor erode",

      // conditions
      "acidity treatment erode",
      "acid reflux treatment erode",
      "GERD treatment erode",
      "ulcer treatment erode",
      "stomach ulcer treatment erode",
      "gastric problem treatment erode",
      "irritable bowel syndrome erode",
      "IBS treatment erode",
      "constipation treatment erode",
      "diarrhea treatment erode",
      "bloating treatment erode",
      "stomach pain treatment erode",
      "abdominal pain doctor erode",
      "liver disease treatment erode",
      "jaundice treatment erode",
      "hepatitis treatment erode",
      "fatty liver treatment erode",
      "pancreatitis treatment erode",
      "food poisoning treatment erode",
      "colon cancer screening erode",
      "blood in stool doctor erode",
      "vomiting treatment erode",

      // procedures
      "endoscopy erode",
      "upper GI endoscopy erode",
      "colonoscopy erode",
      "ERCP erode",
      "liver biopsy erode",
      "capsule endoscopy erode",

      // doctor
      "dr sathish kumar gastro erode",
      "dr k l sathish kumar erode",

      // towns
      ...withTowns("gastroenterologist"),
      ...withTowns("stomach doctor"),
      ...withTowns("endoscopy"),

      // Tamil
      "வயிறு மருத்துவர் ஈரோடு",
      "செரிமான பிரச்சனை சிகிச்சை ஈரோடு",
      "கல்லீரல் மருத்துவர் ஈரோடு",
      "அமிலத்தன்மை சிகிச்சை ஈரோடு",
    ],
  },

  "internal-medicine": {
    title: "Best Physician in Erode | Internal Medicine – SSS Hospital",
    description:
      "Expert internal medicine & diabetology at SSS Hospital Erode. Diabetes, hypertension, thyroid & chronic disease management by senior physicians. Book a consultation today.",
    keywords: [
      "physician erode",
      "best physician in erode",
      "internal medicine erode",
      "general physician erode",
      "medicine doctor erode",
      "best general physician erode",

      // conditions
      "diabetologist erode",
      "diabetes doctor erode",
      "diabetes treatment erode",
      "sugar disease treatment erode",
      "type 2 diabetes treatment erode",
      "insulin treatment erode",
      "hypertension treatment erode",
      "blood pressure doctor erode",
      "high BP treatment erode",
      "thyroid treatment erode",
      "thyroid doctor erode",
      "fever treatment erode",
      "typhoid treatment erode",
      "dengue treatment erode",
      "malaria treatment erode",
      "pneumonia treatment erode",
      "anemia treatment erode",
      "arthritis treatment erode",
      "joint pain doctor erode",
      "body pain treatment erode",
      "weakness treatment erode",
      "weight loss doctor erode",
      "obesity treatment erode",
      "infection treatment erode",
      "chronic disease management erode",

      // doctor
      "dr kanchanadevi physician erode",
      "dr sharath diabetologist erode",

      // towns
      ...withTowns("physician"),
      ...withTowns("diabetes doctor"),
      ...withTowns("general doctor"),

      // Tamil
      "பொது மருத்துவர் ஈரோடு",
      "நீரிழிவு மருத்துவர் ஈரோடு",
      "சர்க்கரை நோய் சிகிச்சை ஈரோடு",
      "இரத்த அழுத்த சிகிச்சை ஈரோடு",
      "தைராய்டு சிகிச்சை ஈரோடு",
      "காய்ச்சல் சிகிச்சை ஈரோடு",
    ],
  },

  "master-health-check-up": {
    title: "Master Health Checkup Packages | SSS Hospital Erode",
    description:
      "Comprehensive master health checkup packages at SSS Hospital Erode. Full body checkup, cardiac screening, diabetes screening & preventive health assessments. Book today.",
    keywords: [
      "master health checkup erode",
      "health checkup packages erode",
      "full body checkup erode",
      "complete health checkup erode",
      "preventive health erode",
      "health screening erode",
      "annual health checkup erode",
      "executive health checkup erode",
      "comprehensive health checkup erode",
      "best health checkup erode",
      "affordable health checkup erode",
      "health checkup cost erode",
      "health checkup price erode",
      "blood test package erode",
      "cardiac health checkup erode",
      "diabetes screening erode",
      "cancer screening erode",
      "women health checkup erode",
      "men health checkup erode",
      "senior citizen health checkup erode",
      "corporate health checkup erode",
      "pre employment health checkup erode",
      "dr revathy health checkup erode",
      ...withTowns("health checkup"),
      ...withTowns("full body checkup"),
      "உடல்நல பரிசோதனை ஈரோடு",
      "முழு உடல் பரிசோதனை ஈரோடு",
      "ஹெல்த் செக்அப் ஈரோடு",
    ],
  },

  nephrology: {
    title: "Best Nephrologist in Erode | Kidney Care – SSS Hospital",
    description:
      "Expert nephrology & dialysis services at SSS Hospital Erode. Kidney disease management, dialysis unit & renal transplant evaluation. Experienced nephrologists. Call now.",
    keywords: [
      "nephrologist erode",
      "best nephrologist in erode",
      "kidney specialist erode",
      "kidney doctor erode",
      "renal specialist erode",

      // conditions
      "kidney disease treatment erode",
      "chronic kidney disease erode",
      "CKD treatment erode",
      "kidney failure treatment erode",
      "kidney infection treatment erode",
      "kidney stone treatment erode",
      "polycystic kidney erode",
      "proteinuria treatment erode",
      "creatinine high treatment erode",
      "high creatinine doctor erode",
      "swelling treatment erode",
      "edema treatment erode",
      "UTI treatment erode",
      "urinary tract infection erode",
      "kidney pain treatment erode",
      "blood in urine doctor erode",

      // procedures
      "dialysis center erode",
      "dialysis hospital erode",
      "hemodialysis erode",
      "kidney dialysis erode",
      "affordable dialysis erode",
      "best dialysis center erode",
      "24/7 dialysis erode",
      "renal transplant erode",
      "kidney transplant erode",
      "kidney biopsy erode",
      "AV fistula erode",

      // doctor
      "dr yuvaraja nephrologist erode",
      "dr k yuvaraja kidney doctor",

      // towns
      ...withTowns("nephrologist"),
      ...withTowns("kidney doctor"),
      ...withTowns("dialysis center"),

      // insurance
      "CMCHIS dialysis erode",
      "affordable kidney treatment erode",
      "kidney treatment cost erode",

      // Tamil
      "சிறுநீரக மருத்துவர் ஈரோடு",
      "சிறுநீரக நோய் சிகிச்சை ஈரோடு",
      "டயாலிசிஸ் ஈரோடு",
      "சிறுநீரக கல் சிகிச்சை ஈரோடு",
    ],
  },

  neurology: {
    title: "Best Neurologist in Erode | Brain & Nerve Care – SSS Hospital",
    description:
      "Expert neurology services at SSS Hospital Erode. Stroke, epilepsy, headache, Parkinson's & nerve disorder treatment by experienced neurologists. Book an appointment.",
    keywords: [
      "neurologist erode",
      "best neurologist in erode",
      "brain specialist erode",
      "brain doctor erode",
      "nerve doctor erode",
      "nerve specialist erode",

      // conditions
      "stroke treatment erode",
      "paralysis treatment erode",
      "epilepsy treatment erode",
      "seizure treatment erode",
      "fits treatment erode",
      "headache treatment erode",
      "migraine treatment erode",
      "vertigo treatment erode",
      "dizziness doctor erode",
      "numbness treatment erode",
      "tingling treatment erode",
      "neuropathy treatment erode",
      "Parkinson disease treatment erode",
      "Alzheimer treatment erode",
      "dementia treatment erode",
      "memory loss doctor erode",
      "brain tumor treatment erode",
      "multiple sclerosis treatment erode",
      "nerve pain treatment erode",
      "sciatica treatment erode",
      "tremor treatment erode",
      "weakness doctor erode",
      "facial palsy treatment erode",

      // procedures
      "EEG test erode",
      "EMG test erode",
      "NCS test erode",
      "brain MRI erode",
      "brain CT scan erode",

      // doctor
      "dr suresh neurologist erode",
      "dr c p suresh brain doctor",
      "dr viggnesh neurosurgeon erode",

      // towns
      ...withTowns("neurologist"),
      ...withTowns("brain doctor"),
      ...withTowns("stroke treatment"),

      // Tamil
      "நரம்பு மருத்துவர் ஈரோடு",
      "மூளை நிபுணர் ஈரோடு",
      "பக்கவாதம் சிகிச்சை ஈரோடு",
      "வலிப்பு சிகிச்சை ஈரோடு",
      "தலைவலி சிகிச்சை ஈரோடு",
    ],
  },

  "neuro-surgery": {
    title: "Best Neurosurgeon in Erode | Brain Surgery – SSS Hospital",
    description:
      "Expert brain & spine surgery at SSS Hospital Erode. Brain tumors, spinal disc, hydrocephalus & trauma surgery by experienced neurosurgeons. Book a consultation.",
    keywords: [
      "neurosurgeon erode",
      "best neurosurgeon in erode",
      "brain surgeon erode",
      "brain surgery erode",
      "spine surgeon erode",
      "spine surgery erode",
      "brain tumor surgery erode",
      "brain tumor treatment erode",
      "spinal disc surgery erode",
      "slipped disc treatment erode",
      "disc prolapse treatment erode",
      "hydrocephalus treatment erode",
      "spinal cord surgery erode",
      "head injury surgery erode",
      "skull fracture treatment erode",
      "brain hemorrhage treatment erode",
      "spinal fusion surgery erode",
      "laminectomy erode",
      "microdiscectomy erode",
      "craniotomy erode",
      "dr viggnesh neurosurgeon erode",
      "dr p viggnesh brain surgeon",
      ...withTowns("neurosurgeon"),
      ...withTowns("brain surgery"),
      "மூளை அறுவை சிகிச்சை ஈரோடு",
      "முதுகெலும்பு அறுவை சிகிச்சை ஈரோடு",
    ],
  },

  "obstetrics-gynaecology": {
    title: "Best Gynaecologist in Erode | OB-GYN – SSS Hospital",
    description:
      "Expert obstetrics & gynaecology at SSS Hospital Erode. Pregnancy care, normal & C-section delivery, PCOS, fibroid treatment & women's health. Book your appointment.",
    keywords: [
      "gynaecologist erode",
      "best gynaecologist in erode",
      "gynecologist erode",
      "obstetrician erode",
      "lady doctor erode",
      "women doctor erode",
      "women specialist erode",
      "female doctor erode",

      // pregnancy
      "pregnancy doctor erode",
      "pregnancy care erode",
      "prenatal care erode",
      "antenatal care erode",
      "high risk pregnancy erode",
      "delivery hospital erode",
      "normal delivery erode",
      "C section hospital erode",
      "caesarean delivery erode",
      "painless delivery erode",
      "maternity hospital erode",
      "best maternity hospital erode",
      "best delivery hospital erode",
      "baby delivery hospital erode",
      "safe delivery hospital erode",

      // conditions
      "PCOS treatment erode",
      "PCOD treatment erode",
      "fibroid treatment erode",
      "uterine fibroid erode",
      "ovarian cyst treatment erode",
      "infertility treatment erode",
      "infertility doctor erode",
      "menstrual problems treatment erode",
      "irregular periods treatment erode",
      "heavy bleeding treatment erode",
      "endometriosis treatment erode",
      "white discharge treatment erode",
      "menopause treatment erode",
      "uterus removal surgery erode",
      "hysterectomy erode",
      "cervical cancer screening erode",
      "pap smear test erode",
      "ectopic pregnancy treatment erode",
      "miscarriage treatment erode",

      // procedures
      "laparoscopic gynaecology erode",
      "hysteroscopy erode",
      "IUI treatment erode",
      "family planning erode",

      // doctor
      "dr premakumari gynaecologist erode",
      "dr r premakumari OB GYN",

      // towns
      ...withTowns("gynaecologist"),
      ...withTowns("gynecologist"),
      ...withTowns("lady doctor"),
      ...withTowns("delivery hospital"),
      ...withTowns("maternity hospital"),

      // insurance
      "CMCHIS delivery erode",
      "affordable delivery hospital erode",
      "delivery cost erode",

      // Tamil
      "மகப்பேறு மருத்துவர் ஈரோடு",
      "பெண்கள் நல மருத்துவர் ஈரோடு",
      "பிரசவ மருத்துவமனை ஈரோடு",
      "சிசேரியன் மருத்துவமனை ஈரோடு",
      "கர்ப்ப பராமரிப்பு ஈரோடு",
      "பிசிஓஎஸ் சிகிச்சை ஈரோடு",
    ],
  },

  orthopaedics: {
    title: "Best Orthopedic Doctor in Erode | Bone Care – SSS Hospital",
    description:
      "Expert orthopedic care at SSS Hospital Erode. Joint replacement, fracture treatment, sports injuries, arthroscopy & spine care by experienced orthopedic surgeons. Book now.",
    keywords: [
      "orthopedic doctor erode",
      "best orthopedic in erode",
      "orthopedic surgeon erode",
      "bone doctor erode",
      "bone specialist erode",
      "joint specialist erode",
      "best bone doctor erode",

      // procedures
      "joint replacement erode",
      "knee replacement erode",
      "knee replacement surgery erode",
      "total knee replacement erode",
      "hip replacement erode",
      "hip replacement surgery erode",
      "fracture treatment erode",
      "bone fracture treatment erode",
      "arthroscopy erode",
      "arthroscopic surgery erode",
      "ligament surgery erode",
      "ACL surgery erode",
      "meniscus surgery erode",
      "shoulder surgery erode",
      "rotator cuff surgery erode",
      "hand surgery erode",
      "wrist surgery erode",
      "spine surgery ortho erode",
      "spinal fusion erode",
      "plaster cast erode",

      // conditions
      "knee pain treatment erode",
      "back pain treatment erode",
      "joint pain treatment erode",
      "neck pain treatment erode",
      "shoulder pain treatment erode",
      "hip pain treatment erode",
      "sports injury erode",
      "sports injury treatment erode",
      "disc problem treatment erode",
      "osteoporosis treatment erode",
      "arthritis treatment erode",
      "rheumatoid arthritis erode",
      "osteoarthritis erode",
      "frozen shoulder treatment erode",
      "tennis elbow treatment erode",
      "carpal tunnel treatment erode",
      "flat foot treatment erode",
      "bone tumor treatment erode",
      "bone infection treatment erode",

      // doctor
      "dr natarajan orthopedic erode",
      "dr silambarasan arthroscopic erode",
      "dr kishore hand surgeon erode",
      "dr s natarajan bone doctor",
      "dr m silambarasan orthopedic",

      // towns
      ...withTowns("orthopedic doctor"),
      ...withTowns("bone doctor"),
      ...withTowns("fracture treatment"),
      ...withTowns("knee replacement"),

      // cost/insurance
      "affordable joint replacement erode",
      "knee replacement cost erode",
      "CMCHIS orthopedic erode",

      // Tamil
      "எலும்பு மருத்துவர் ஈரோடு",
      "மூட்டு மாற்று அறுவை சிகிச்சை ஈரோடு",
      "எலும்பு முறிவு சிகிச்சை ஈரோடு",
      "முழங்கால் வலி சிகிச்சை ஈரோடு",
      "முதுகு வலி சிகிச்சை ஈரோடு",
    ],
  },

  ophthalmology: {
    title: "Best Eye Doctor in Erode | Eye Care – SSS Hospital",
    description:
      "Expert eye care at SSS Hospital Erode. Cataract surgery, glaucoma, retina treatment, LASIK & comprehensive eye exams by experienced ophthalmologists. Book an eye checkup.",
    keywords: [
      "eye doctor erode",
      "best eye doctor in erode",
      "ophthalmologist erode",
      "eye specialist erode",
      "eye hospital erode",

      // conditions
      "cataract surgery erode",
      "cataract treatment erode",
      "glaucoma treatment erode",
      "retina treatment erode",
      "diabetic retinopathy erode",
      "eye infection treatment erode",
      "dry eyes treatment erode",
      "watery eyes treatment erode",
      "blurred vision treatment erode",
      "eye allergy treatment erode",
      "squint treatment erode",
      "lazy eye treatment erode",
      "macular degeneration erode",
      "eye floaters treatment erode",

      // procedures
      "eye exam erode",
      "eye checkup erode",
      "eye test erode",
      "vision test erode",
      "phaco surgery erode",
      "IOL implant erode",
      "LASIK surgery erode",
      "laser eye surgery erode",
      "spectacle removal surgery erode",
      "glasses removal surgery erode",

      // doctor
      "dr sindoory ophthalmologist erode",

      // towns
      ...withTowns("eye doctor"),
      ...withTowns("cataract surgery"),

      // Tamil
      "கண் மருத்துவர் ஈரோடு",
      "கண் நிபுணர் ஈரோடு",
      "கண்புரை அறுவை சிகிச்சை ஈரோடு",
      "கண் பரிசோதனை ஈரோடு",
    ],
  },

  paediatrics: {
    title: "Best Pediatrician in Erode | Child Care – SSS Hospital",
    description:
      "Expert pediatric & neonatal care at SSS Hospital Erode. Child health, vaccinations, NICU & newborn care by experienced pediatricians. Book your child's appointment today.",
    keywords: [
      "pediatrician erode",
      "best pediatrician in erode",
      "child specialist erode",
      "child doctor erode",
      "children doctor erode",
      "baby doctor erode",
      "kids doctor erode",
      "neonatologist erode",
      "newborn doctor erode",

      // conditions
      "child fever treatment erode",
      "child cold cough treatment erode",
      "child asthma treatment erode",
      "child allergy treatment erode",
      "child diarrhea treatment erode",
      "child infection treatment erode",
      "child skin rash treatment erode",
      "childhood obesity treatment erode",
      "child growth problem erode",
      "child nutrition doctor erode",
      "premature baby care erode",
      "low birth weight baby erode",
      "jaundice baby treatment erode",
      "newborn jaundice erode",

      // services
      "child vaccination erode",
      "vaccination center erode",
      "immunization erode",
      "NICU erode",
      "neonatal ICU erode",
      "newborn screening erode",
      "child health checkup erode",

      // doctor
      "dr parvathavardhini pediatrician erode",
      "dr e parvathavardhini child doctor",

      // towns
      ...withTowns("pediatrician"),
      ...withTowns("child doctor"),
      ...withTowns("child specialist"),

      // Tamil
      "குழந்தை மருத்துவர் ஈரோடு",
      "குழந்தை நிபுணர் ஈரோடு",
      "தடுப்பூசி மையம் ஈரோடு",
      "நவஜாத குழந்தை பராமரிப்பு ஈரோடு",
    ],
  },

  physiotherapy: {
    title: "Physiotherapy & Rehabilitation | SSS Hospital Erode",
    description:
      "Expert physiotherapy & rehabilitation at SSS Hospital Erode. Post-surgery rehab, sports injury recovery, back pain & stroke rehabilitation. Book a physiotherapy session.",
    keywords: [
      "physiotherapy erode",
      "best physiotherapist in erode",
      "physiotherapist erode",
      "physiotherapy center erode",
      "rehabilitation center erode",
      "rehab center erode",
      "physical therapy erode",

      // conditions
      "back pain physiotherapy erode",
      "neck pain physiotherapy erode",
      "knee pain physiotherapy erode",
      "shoulder pain physiotherapy erode",
      "frozen shoulder physiotherapy erode",
      "sports injury rehab erode",
      "stroke rehabilitation erode",
      "paralysis rehabilitation erode",
      "post surgery rehabilitation erode",
      "post fracture physiotherapy erode",
      "joint stiffness treatment erode",
      "muscle pain treatment erode",
      "sciatica physiotherapy erode",
      "slip disc physiotherapy erode",

      // techniques
      "exercise therapy erode",
      "electrotherapy erode",
      "ultrasound therapy erode",
      "TENS therapy erode",
      "traction therapy erode",
      "wax therapy erode",

      // towns
      ...withTowns("physiotherapy"),
      ...withTowns("physiotherapist"),

      // Tamil
      "பிசியோதெரபி ஈரோடு",
      "உடல்பயிற்சி சிகிச்சை ஈரோடு",
      "புனர்வாழ்வு மையம் ஈரோடு",
    ],
  },

  // Alias
  "physiotherapy-rehabilitation": {
    title: "Physiotherapy & Rehabilitation | SSS Hospital Erode",
    description:
      "Expert physiotherapy & rehabilitation at SSS Hospital Erode. Post-surgery rehab, sports injury recovery, back pain & stroke rehabilitation. Book a physiotherapy session.",
    keywords: [
      "physiotherapy erode",
      "best physiotherapist in erode",
      "rehabilitation center erode",
      "sports injury rehab erode",
      "back pain treatment erode",
      "stroke rehabilitation erode",
      "post surgery rehabilitation erode",
      ...withTowns("physiotherapy"),
    ],
  },

  "plastic-surgery": {
    title: "Best Plastic Surgeon in Erode | Plastic Surgery – SSS Hospital",
    description:
      "Expert plastic & reconstructive surgery at SSS Hospital Erode. Burns, trauma reconstruction, hand surgery, cosmetic procedures & microsurgery. Book a consultation.",
    keywords: [
      "plastic surgeon erode",
      "best plastic surgeon in erode",
      "plastic surgery erode",
      "reconstructive surgery erode",
      "cosmetic surgery erode",
      "cosmetic surgeon erode",

      // procedures
      "burn treatment erode",
      "burn surgery erode",
      "scar removal erode",
      "scar revision surgery erode",
      "hand surgery erode",
      "finger surgery erode",
      "microsurgery erode",
      "skin grafting erode",
      "flap surgery erode",
      "cleft lip repair erode",
      "cleft palate surgery erode",
      "face surgery erode",
      "facial reconstruction erode",
      "ear reconstruction erode",
      "diabetic foot surgery erode",
      "wound care erode",
      "chronic wound treatment erode",
      "keloid treatment erode",
      "liposuction erode",
      "rhinoplasty erode",
      "breast reconstruction erode",

      // doctor
      "dr ashwin raja plastic surgeon erode",
      "dr gokul balaji plastic surgeon erode",

      // towns
      ...withTowns("plastic surgeon"),
      ...withTowns("burn treatment"),

      // Tamil
      "பிளாஸ்டிக் சர்ஜன் ஈரோடு",
      "தீக்காய சிகிச்சை ஈரோடு",
      "ஒட்டுத்தோல் அறுவை சிகிச்சை ஈரோடு",
    ],
  },

  pulmonology: {
    title: "Best Pulmonologist in Erode | Lung Care – SSS Hospital",
    description:
      "Expert pulmonology services at SSS Hospital Erode. Asthma, COPD, TB, sleep apnea & lung disease treatment by senior pulmonologists. Book an appointment today.",
    keywords: [
      "pulmonologist erode",
      "best pulmonologist in erode",
      "lung specialist erode",
      "lung doctor erode",
      "chest doctor erode",
      "chest specialist erode",
      "respiratory doctor erode",

      // conditions
      "asthma treatment erode",
      "asthma doctor erode",
      "COPD treatment erode",
      "tuberculosis treatment erode",
      "TB treatment erode",
      "lung infection treatment erode",
      "pneumonia treatment erode",
      "bronchitis treatment erode",
      "chronic cough treatment erode",
      "cough doctor erode",
      "wheezing treatment erode",
      "breathing difficulty erode",
      "shortness of breath erode",
      "sleep apnea erode",
      "snoring treatment erode",
      "lung cancer screening erode",
      "pleural effusion treatment erode",
      "interstitial lung disease erode",
      "allergic bronchitis erode",
      "occupational lung disease erode",
      "covid lung treatment erode",

      // procedures
      "pulmonary function test erode",
      "PFT test erode",
      "spirometry erode",
      "bronchoscopy erode",
      "chest x ray erode",
      "sleep study erode",

      // doctor
      "dr chandrasekar pulmonologist erode",
      "dr s chandrasekar lung doctor",

      // towns
      ...withTowns("pulmonologist"),
      ...withTowns("lung doctor"),
      ...withTowns("asthma treatment"),

      // Tamil
      "நுரையீரல் மருத்துவர் ஈரோடு",
      "ஆஸ்துமா சிகிச்சை ஈரோடு",
      "இருமல் சிகிச்சை ஈரோடு",
      "மூச்சு திணறல் மருத்துவர் ஈரோடு",
    ],
  },

  psychiatry: {
    title: "Best Psychiatrist in Erode | Mental Health – SSS Hospital",
    description:
      "Confidential psychiatric care at SSS Hospital Erode. Depression, anxiety, OCD, bipolar disorder & addiction treatment by experienced psychiatrists. Book a consultation.",
    keywords: [
      "psychiatrist erode",
      "best psychiatrist in erode",
      "mental health doctor erode",
      "mental health specialist erode",
      "psychologist erode",
      "counselor erode",
      "counselling erode",

      // conditions
      "depression treatment erode",
      "anxiety treatment erode",
      "stress treatment erode",
      "OCD treatment erode",
      "bipolar disorder treatment erode",
      "schizophrenia treatment erode",
      "insomnia treatment erode",
      "sleep disorder treatment erode",
      "panic attack treatment erode",
      "phobia treatment erode",
      "PTSD treatment erode",
      "addiction treatment erode",
      "alcohol addiction treatment erode",
      "drug addiction treatment erode",
      "smoking cessation erode",
      "child psychiatrist erode",
      "ADHD treatment erode",
      "autism doctor erode",
      "dementia treatment erode",
      "mood disorder treatment erode",
      "anger management erode",
      "relationship counseling erode",
      "marriage counseling erode",
      "suicidal thoughts help erode",

      // doctor
      "dr deepica kumar psychiatrist erode",

      // towns
      ...withTowns("psychiatrist"),
      ...withTowns("mental health doctor"),

      // Tamil
      "மனநல மருத்துவர் ஈரோடு",
      "மன அழுத்த சிகிச்சை ஈரோடு",
      "தூக்கமின்மை சிகிச்சை ஈரோடு",
      "மது போதை சிகிச்சை ஈரோடு",
    ],
  },

  radiology: {
    title: "Radiology & Imaging Services | SSS Hospital Erode",
    description:
      "Advanced diagnostic imaging at SSS Hospital Erode. X-ray, CT scan, MRI, ultrasound & mammography with expert radiologists. Fast reports available. Book a scan today.",
    keywords: [
      "radiology erode",
      "radiologist erode",
      "diagnostic imaging erode",
      "imaging center erode",
      "scan center erode",

      // procedures
      "CT scan erode",
      "CT scan hospital erode",
      "CT scan cost erode",
      "MRI scan erode",
      "MRI hospital erode",
      "MRI cost erode",
      "ultrasound erode",
      "ultrasound scan erode",
      "pregnancy scan erode",
      "anomaly scan erode",
      "X ray erode",
      "digital X ray erode",
      "mammography erode",
      "mammogram erode",
      "breast screening erode",
      "doppler ultrasound erode",
      "color doppler erode",
      "ECG erode",
      "echocardiography erode",
      "bone density test erode",
      "DEXA scan erode",

      // doctor
      "dr sindhu karthikeyan radiologist erode",

      // towns
      ...withTowns("CT scan"),
      ...withTowns("MRI scan"),
      ...withTowns("ultrasound"),
      ...withTowns("X ray"),

      // Tamil
      "சிடி ஸ்கேன் ஈரோடு",
      "எம்ஆர்ஐ ஸ்கேன் ஈரோடு",
      "அல்ட்ரா சவுண்ட் ஸ்கேன் ஈரோடு",
      "எக்ஸ்ரே ஈரோடு",
    ],
  },

  urology: {
    title: "Best Urologist in Erode | Kidney & Urology – SSS Hospital",
    description:
      "Expert urology services at SSS Hospital Erode. Kidney stones, prostate treatment, urinary problems & renal transplant surgery by experienced urologists. Book now.",
    keywords: [
      "urologist erode",
      "best urologist in erode",
      "urology hospital erode",
      "urology specialist erode",
      "urinary doctor erode",

      // conditions
      "kidney stone treatment erode",
      "kidney stone surgery erode",
      "kidney stone removal erode",
      "renal calculi treatment erode",
      "prostate treatment erode",
      "prostate surgery erode",
      "enlarged prostate treatment erode",
      "BPH treatment erode",
      "prostate cancer treatment erode",
      "urinary tract infection erode",
      "UTI treatment erode",
      "urinary incontinence erode",
      "blood in urine treatment erode",
      "hematuria doctor erode",
      "frequent urination treatment erode",
      "urinary blockage treatment erode",
      "testicular pain treatment erode",
      "hydrocele treatment erode",
      "varicocele treatment erode",
      "phimosis treatment erode",
      "circumcision erode",
      "erectile dysfunction erode",
      "male infertility treatment erode",
      "andrologist erode",
      "bladder stone treatment erode",
      "ureter stone treatment erode",

      // procedures
      "ESWL erode",
      "lithotripsy erode",
      "PCNL erode",
      "TURP surgery erode",
      "URS surgery erode",
      "ureteroscopy erode",
      "cystoscopy erode",
      "renal transplant surgery erode",
      "kidney transplant erode",

      // doctor
      "dr dharun kumar urologist erode",
      "dr s dharun kumar urology",

      // towns
      ...withTowns("urologist"),
      ...withTowns("kidney stone treatment"),
      ...withTowns("prostate treatment"),

      // Tamil
      "சிறுநீரக கல் சிகிச்சை ஈரோடு",
      "புரோஸ்டேட் சிகிச்சை ஈரோடு",
      "சிறுநீர் பிரச்சனை மருத்துவர் ஈரோடு",
      "யூரோலஜிஸ்ட் ஈரோடு",
    ],
  },

  "vascular-surgery": {
    title: "Vascular Surgery | SSS Hospital Erode",
    description:
      "Expert vascular surgery at SSS Hospital Erode. Varicose veins, peripheral artery disease, diabetic foot care & dialysis access surgery. Book a consultation today.",
    keywords: [
      "vascular surgeon erode",
      "vascular surgery erode",
      "vascular specialist erode",
      "best vascular surgeon erode",

      // conditions
      "varicose veins treatment erode",
      "varicose veins surgery erode",
      "varicose veins doctor erode",
      "spider veins treatment erode",
      "peripheral artery disease erode",
      "PAD treatment erode",
      "deep vein thrombosis erode",
      "DVT treatment erode",
      "diabetic foot care erode",
      "diabetic foot surgery erode",
      "gangrene treatment erode",
      "leg ulcer treatment erode",
      "blood clot treatment erode",
      "poor circulation treatment erode",
      "leg pain treatment erode",
      "leg swelling treatment erode",
      "aortic aneurysm treatment erode",
      "carotid artery disease erode",

      // procedures
      "dialysis access surgery erode",
      "AV fistula surgery erode",
      "bypass surgery vascular erode",
      "angioplasty peripheral erode",
      "stent peripheral erode",
      "laser varicose veins erode",
      "sclerotherapy erode",
      "embolization erode",

      // towns
      ...withTowns("varicose veins treatment"),
      ...withTowns("vascular surgeon"),

      // Tamil
      "நரம்பு சிகிச்சை ஈரோடு",
      "வெரிகோஸ் வெயின்ஸ் சிகிச்சை ஈரோடு",
      "நீரிழிவு கால் சிகிச்சை ஈரோடு",
    ],
  },
};

// ═══════════════════════════════════════════════
//  DOCTOR PROFILE SEO GENERATOR
// ═══════════════════════════════════════════════

export const generateDoctorSEO = (doctor) => {
  const speciality = Array.isArray(doctor.speciality)
    ? doctor.speciality[0]
    : doctor.speciality || doctor.specialty;
  return {
    title: `Dr. ${doctor.name.replace("Dr. ", "")} – ${speciality} in Erode | SSS Hospital`,
    description: `Consult Dr. ${doctor.name.replace("Dr. ", "")}, experienced ${speciality} specialist at SSS Hospital Erode. ${
      doctor.qualification || "Highly qualified"
    } with expertise in ${speciality.toLowerCase()} care. Book an appointment today.`,
    keywords: [
      `${doctor.name.toLowerCase()}`,
      `${doctor.name.toLowerCase()} erode`,
      `${doctor.name.toLowerCase()} sss hospital`,
      `${speciality.toLowerCase()} doctor erode`,
      `${speciality.toLowerCase()} specialist erode`,
      `best ${speciality.toLowerCase()} doctor erode`,
      `${speciality.toLowerCase()} erode`,
      `${speciality.toLowerCase()} doctor near me`,
      ...withTowns(`${speciality.toLowerCase()} doctor`),
    ],
  };
};
