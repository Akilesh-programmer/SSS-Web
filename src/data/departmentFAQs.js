/**
 * Department FAQ Data — SEO-optimized FAQs for high-traffic department pages
 * Each FAQ set generates FAQPage schema markup for Google rich snippets
 * Updated: July 2026
 */

const departmentFAQs = {
  // Cardiology (ID: 4)
  cardiology: [
    {
      question: "Who is the best cardiologist in Erode?",
      answer:
        "SSS Super Speciality Hospital has experienced interventional cardiologists including Dr. N. Padmanaban (MBBS, MD, DM Cardiology) who specialises in cardiac catheterisation, angioplasty, and comprehensive heart disease management. Book a consultation to discuss your cardiac concerns.",
    },
    {
      question: "What cardiac tests are available at SSS Hospital Erode?",
      answer:
        "We offer a full range of cardiac diagnostic services including ECG (Electrocardiogram), 2D Echocardiography, Stress Test (TMT), 24-hour Holter Monitoring, Coronary Angiography, and advanced cardiac imaging. All tests are interpreted by qualified cardiologists.",
    },
    {
      question: "Does SSS Hospital Erode have 24/7 emergency care for heart attacks?",
      answer:
        "Yes, SSS Super Speciality Hospital provides round-the-clock emergency cardiac care. Our emergency department is equipped to handle acute heart attacks (myocardial infarction) with rapid response protocols. Call our emergency number 89259 31193 immediately if you suspect a heart attack.",
    },
    {
      question: "What are the signs I should see a cardiologist?",
      answer:
        "You should consult a cardiologist if you experience chest pain or discomfort, shortness of breath during normal activities, persistent irregular heartbeat, dizziness or fainting spells, swelling in your legs or feet, unexplained fatigue, or if you have risk factors like diabetes, high blood pressure, high cholesterol, or a family history of heart disease.",
    },
    {
      question: "Is cashless insurance available for cardiac treatment at SSS Hospital?",
      answer:
        "Yes, SSS Super Speciality Hospital accepts cashless health insurance from major providers for cardiac treatments including angiography, angioplasty, and other heart procedures. Please contact our billing department at 0424-2888777 for details about your specific insurance plan.",
    },
  ],

  // Orthopaedics (ID: 16)
  orthopaedics: [
    {
      question: "Who is the best orthopedic doctor in Erode?",
      answer:
        "SSS Super Speciality Hospital has experienced orthopedic surgeons including Dr. S. Natarajan (MBBS, MS Ortho, D.Ortho) who specialises in joint replacement surgery, fracture management, sports injuries, and arthroscopic surgery. Book a consultation for expert bone and joint care.",
    },
    {
      question: "Does SSS Hospital perform joint replacement surgery?",
      answer:
        "Yes, our orthopedic department performs total knee replacement, total hip replacement, and partial joint replacement surgeries using advanced techniques and implants. Our surgeons have extensive experience in both primary and revision joint replacement procedures.",
    },
    {
      question: "What should I do if I have a fracture or bone injury?",
      answer:
        "Visit our 24/7 emergency department immediately. Our team includes orthopedic surgeons and trauma specialists equipped with advanced imaging (X-ray, CT scan) for rapid diagnosis. We provide comprehensive fracture care from casting and splinting to surgical fixation for complex fractures.",
    },
    {
      question: "How long is the recovery after knee replacement surgery?",
      answer:
        "Recovery from total knee replacement typically involves 3-5 days of hospital stay, followed by physiotherapy rehabilitation. Most patients can walk with support within 2-3 days after surgery. Full recovery usually takes 3-6 months with regular physiotherapy sessions at our rehabilitation centre.",
    },
    {
      question: "Does SSS Hospital treat sports injuries?",
      answer:
        "Yes, our orthopedic department treats all types of sports injuries including ligament tears (ACL/PCL), meniscus injuries, rotator cuff tears, tennis elbow, and stress fractures. We offer both conservative management and arthroscopic (minimally invasive) surgical options.",
    },
  ],

  // Gastroenterology (ID: 9)
  gastroenterology: [
    {
      question: "Who is the best gastroenterologist in Erode?",
      answer:
        "SSS Super Speciality Hospital has senior gastroenterologists including Dr. K. L. Sathish Kumar (MBBS, MS, FRCS Edinburgh) who is an expert in diagnostic and therapeutic endoscopy, laparoscopic surgery, and comprehensive digestive disease management.",
    },
    {
      question: "What endoscopy procedures are available at SSS Hospital?",
      answer:
        "We offer upper GI endoscopy (gastroscopy), colonoscopy, ERCP (Endoscopic Retrograde Cholangiopancreatography), capsule endoscopy, and therapeutic endoscopic procedures like polypectomy and variceal banding. All procedures are performed by experienced gastroenterologists with advanced endoscopy equipment.",
    },
    {
      question: "When should I see a gastroenterologist?",
      answer:
        "You should consult a gastroenterologist if you experience persistent abdominal pain, chronic acid reflux or heartburn, difficulty swallowing, unexplained weight loss, blood in stool, chronic diarrhoea or constipation, jaundice, or liver problems. Early consultation helps in timely diagnosis and treatment.",
    },
    {
      question: "Does SSS Hospital treat liver diseases?",
      answer:
        "Yes, our gastroenterology department provides comprehensive liver disease management including treatment for hepatitis (A, B, C), fatty liver disease, cirrhosis, and liver-related complications. We offer advanced diagnostic testing, medical management, and interventional procedures.",
    },
    {
      question: "How should I prepare for an endoscopy at SSS Hospital?",
      answer:
        "For an upper GI endoscopy, you typically need to fast for 6-8 hours before the procedure. For a colonoscopy, bowel preparation with prescribed laxatives is required the day before. Our team will provide detailed preparation instructions when you book your appointment. Call 0424-2888777 for scheduling.",
    },
  ],

  // Neurology (ID: 13)
  neurology: [
    {
      question: "Who is the best neurologist in Erode?",
      answer:
        "SSS Super Speciality Hospital has experienced neurologists including Dr. C. P. Suresh (MBBS, MD Paediatrics, DM Neurology) who specialises in stroke management, epilepsy treatment, headache disorders, and other neurological conditions. Book a consultation for expert brain and nerve care.",
    },
    {
      question: "What are the warning signs of a stroke?",
      answer:
        "Remember the acronym FAST: Face drooping on one side, Arm weakness or numbness, Speech difficulty or slurring, Time to call emergency (89259 31193). Other signs include sudden severe headache, vision problems, dizziness, and confusion. A stroke is a medical emergency — every minute counts. Our hospital provides 24/7 emergency stroke care.",
    },
    {
      question: "Does SSS Hospital have facilities for brain and nerve testing?",
      answer:
        "Yes, we offer comprehensive neurological diagnostics including EEG (Electroencephalogram) for brain wave monitoring, EMG/NCV (nerve conduction studies), advanced brain imaging (CT scan and MRI referral), and complete neurological evaluations by qualified neurologists.",
    },
    {
      question: "What neurological conditions are treated at SSS Hospital?",
      answer:
        "Our neurology department treats stroke, epilepsy and seizure disorders, migraine and headache disorders, Parkinson's disease, dementia, neuropathy (nerve damage), vertigo, multiple sclerosis, and neuromuscular disorders. We provide both outpatient consultations and inpatient neurological care.",
    },
    {
      question: "When should I see a neurologist instead of a general physician?",
      answer:
        "You should see a neurologist if you experience frequent or severe headaches, seizures, persistent numbness or tingling, muscle weakness, tremors, memory problems, balance issues, or if you have been diagnosed with a neurological condition. A referral from your general physician is helpful but not always required.",
    },
  ],

  // Obstetrics & Gynaecology (ID: 15)
  "obstetrics-gynaecology": [
    {
      question: "Who is the best gynaecologist in Erode?",
      answer:
        "SSS Super Speciality Hospital has experienced obstetricians and gynaecologists including Dr. R. Premakumari (MBBS, MD OG) who has performed thousands of deliveries and specialises in high-risk pregnancy management, gynaecological surgery, and women's health care.",
    },
    {
      question: "Does SSS Hospital offer normal delivery and C-section?",
      answer:
        "Yes, our obstetrics department supports both normal (vaginal) delivery and Caesarean section. Our experienced team prioritises natural delivery when safe and performs C-sections only when medically indicated. We have fully equipped labour rooms, operation theatres, and a neonatal ICU for comprehensive maternity care.",
    },
    {
      question: "What pregnancy care services are available at SSS Hospital Erode?",
      answer:
        "We provide complete pregnancy care including regular antenatal checkups, ultrasound scans (including anomaly scans), high-risk pregnancy management, gestational diabetes screening, blood group and Rh factor testing, vaccination guidance, and postnatal care for both mother and baby.",
    },
    {
      question: "Does SSS Hospital treat PCOS and fertility issues?",
      answer:
        "Yes, our gynaecology department provides diagnosis and management of Polycystic Ovary Syndrome (PCOS), hormonal disorders, irregular periods, and basic fertility evaluation. Treatment includes hormonal therapy, lifestyle counselling, and gynaecological procedures as needed.",
    },
    {
      question: "What gynaecological surgeries are performed at SSS Hospital?",
      answer:
        "Our gynaecology department performs hysterectomy (abdominal and vaginal), fibroid removal (myomectomy), ovarian cyst removal, laparoscopic gynaecological surgery, D&C (Dilation and Curettage), and other gynaecological procedures. Both open and minimally invasive surgical options are available.",
    },
  ],

  // Nephrology (ID: 12)
  nephrology: [
    {
      question: "Does SSS Hospital have a dialysis center?",
      answer:
        "Yes, SSS Super Speciality Hospital has a well-equipped dialysis centre providing haemodialysis services. Our dialysis unit is managed by experienced nephrologists and trained nursing staff, with modern dialysis machines ensuring safe and effective treatment for patients with kidney failure.",
    },
    {
      question: "Who is the best nephrologist in Erode?",
      answer:
        "Our nephrology department is led by Dr. K. Yuvaraja (MBBS, MD, DM Nephrology) who specialises in kidney disease management, dialysis care, and renal transplant evaluation. He provides comprehensive care for all types of kidney disorders.",
    },
    {
      question: "What are the early signs of kidney disease?",
      answer:
        "Early signs include swelling in feet and ankles, fatigue and weakness, changes in urination (frequency, colour, foamy urine), persistent back pain near the kidneys, loss of appetite, nausea, and high blood pressure. If you have diabetes or hypertension, regular kidney function tests are recommended.",
    },
  ],

  // Urology (ID: 25)
  urology: [
    {
      question: "What kidney stone treatments are available at SSS Hospital?",
      answer:
        "We offer comprehensive kidney stone treatment including medical management for small stones, ESWL (Extracorporeal Shock Wave Lithotripsy) for non-invasive stone breaking, ureteroscopy with laser lithotripsy, and PCNL (Percutaneous Nephrolithotomy) for large stones. Our urologists recommend the most appropriate treatment based on stone size and location.",
    },
    {
      question: "Who is the best urologist in Erode?",
      answer:
        "SSS Super Speciality Hospital has experienced urologists including Dr. S. Dharun Kumar (MBBS, MS, MCH Urology) who specialises in kidney stone management, prostate treatment, urinary disorders, and minimally invasive urological surgery.",
    },
    {
      question: "What prostate problems does SSS Hospital treat?",
      answer:
        "Our urology department treats benign prostatic hyperplasia (BPH/enlarged prostate), prostatitis, and provides prostate cancer screening. Treatment options include medication management, minimally invasive procedures like TURP (Transurethral Resection of Prostate), and surgical options as needed.",
    },
  ],
};

export default departmentFAQs;
