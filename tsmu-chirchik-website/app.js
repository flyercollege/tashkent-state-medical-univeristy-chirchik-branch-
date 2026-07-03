'use strict';

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const ICONS = {
  arrowRight: '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  play: '<path d="m8 5 11 7-11 7Z"/>',
  stethoscope: '<path d="M6 3v5a6 6 0 0 0 12 0V3"/><path d="M6 3H4"/><path d="M18 3h2"/><path d="M12 14v3a4 4 0 0 0 8 0v-2"/><circle cx="20" cy="13" r="2"/>',
  graduation: '<path d="m22 10-10-5-10 5 10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',
  microscope: '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 0 0 1-13"/><path d="M9 14 5 10l6-6 4 4-6 6Z"/><path d="m10.5 12.5 3-3"/>',
  tooth: '<path d="M12 3c-1.5 0-2 .7-3.4.7C6.9 3.7 5 3 4 5.1 2.4 8.4 4.5 20 7.4 20c1.5 0 1.5-4.2 4.6-4.2S15.1 20 16.6 20C19.5 20 21.6 8.4 20 5.1 19 3 17.1 3.7 15.4 3.7 14 3.7 13.5 3 12 3Z"/>',
  pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 0 0-7-7l-10 10a4.95 4.95 0 0 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  heartPulse: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3.5 12h4l1.5-3 3 7 2-4h6.5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/>',
  building: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M12 7h.01M17 7h.01M7 12h.01M12 12h.01M17 12h.01M7 17h.01M12 17h.01M17 17h.01"/>',
  flask: '<path d="M10 2v6L4.5 19A2 2 0 0 0 6.4 22h11.2a2 2 0 0 0 1.9-3L14 8V2"/><path d="M8 2h8"/><path d="M7 16h10"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4v15.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5"/>',
  laptop: '<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M2 20h20"/>',
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  dumbbell: '<path d="M6.5 6.5 17.5 17.5"/><path d="m21 21-1.5-1.5M3 3l1.5 1.5M18.5 15.5l3-3M15.5 18.5l3-3M5.5 8.5l3-3M2.5 11.5l3-3"/>',
  coffee: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/>',
  hospital: '<path d="M3 21h18"/><path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/><path d="M9 21v-6h6v6M10 9h4M12 7v4"/>',
  presentation: '<path d="M3 3h18v12H3z"/><path d="M7 21l5-6 5 6"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.6A6 6 0 1 0 7.5 11.4C8.3 12.3 8.8 13 9 14"/><path d="M9 18h6M10 22h4"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  plane: '<path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4Z"/>',
  bed: '<path d="M2 4v16"/><path d="M2 10h20v10"/><path d="M6 10V7a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3"/>',
  journal: '<path d="M4 19.5V4a2 2 0 0 1 2-2h12v20H6a2 2 0 0 1-2-2.5Z"/><path d="M8 6h6M8 10h6M8 14h4"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  video: '<path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
  trophy: '<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M5 5H3v2a4 4 0 0 0 4 4M19 5h2v2a4 4 0 0 1-4 4"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 12h20"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  map: '<path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M9 9h6M9 13h4"/>'
};
const icon = (name, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ICONS.stethoscope}</svg>`;

const translations = {
  en: {
    applyNow: 'Apply Now', studentPortal: 'Student Portal', facultyPortal: 'Faculty Portal',
    navHome: 'Home', navAbout: 'About', navAcademics: 'Academics', navAdmissions: 'Admissions',
    navInternational: 'International Students', navResearch: 'Research', navCampusLife: 'Campus Life', navNews: 'News', navGallery: 'Gallery', navContact: 'Contact',
    heroTitle: 'Become the Doctor the World Needs', heroSub: 'Tashkent State Medical University – Chirchik Branch provides internationally focused medical education through experienced faculty, modern laboratories, clinical excellence, and a vibrant student community, empowering future healthcare professionals to make a global impact.'
  },
  ru: {
    applyNow: 'Подать заявку', studentPortal: 'Портал студента', facultyPortal: 'Портал преподавателя',
    navHome: 'Главная', navAbout: 'О нас', navAcademics: 'Обучение', navAdmissions: 'Приём',
    navInternational: 'Иностранные студенты', navResearch: 'Наука', navCampusLife: 'Жизнь кампуса', navNews: 'Новости', navGallery: 'Галерея', navContact: 'Контакты',
    heroTitle: 'Станьте врачом, который нужен миру', heroSub: 'Чирчикский филиал Ташкентского государственного медицинского университета предлагает международно ориентированное медицинское образование, опытных преподавателей, современные лаборатории, клиническую практику и активное студенческое сообщество.'
  },
  uz: {
    applyNow: 'Ariza topshirish', studentPortal: 'Talaba portali', facultyPortal: 'O‘qituvchi portali',
    navHome: 'Bosh sahifa', navAbout: 'Universitet', navAcademics: 'Ta’lim', navAdmissions: 'Qabul',
    navInternational: 'Xalqaro talabalar', navResearch: 'Tadqiqot', navCampusLife: 'Talabalar hayoti', navNews: 'Yangiliklar', navGallery: 'Galereya', navContact: 'Aloqa',
    heroTitle: 'Dunyoga kerak bo‘lgan shifokor bo‘ling', heroSub: 'Toshkent davlat tibbiyot universiteti Chirchiq filiali tajribali professorlar, zamonaviy laboratoriyalar, klinik mukammallik va faol talaba hamjamiyati orqali xalqaro yo‘naltirilgan tibbiy ta’lim beradi.'
  },
  ar: {
    applyNow: 'قدّم الآن', studentPortal: 'بوابة الطالب', facultyPortal: 'بوابة الهيئة التدريسية',
    navHome: 'الرئيسية', navAbout: 'عن الجامعة', navAcademics: 'الأكاديميات', navAdmissions: 'القبول',
    navInternational: 'الطلاب الدوليون', navResearch: 'البحث', navCampusLife: 'الحياة الجامعية', navNews: 'الأخبار', navGallery: 'المعرض', navContact: 'اتصل بنا',
    heroTitle: 'كن الطبيب الذي يحتاجه العالم', heroSub: 'يوفر فرع تشيرتشيك لجامعة طشقند الطبية الحكومية تعليماً طبياً ذا توجه دولي من خلال هيئة تدريس خبيرة ومختبرات حديثة وتميز سريري ومجتمع طلابي نابض بالحياة.'
  }
};

const stats = [
  ['5000', '+', 'Students'], ['500', '+', 'International Students'], ['300', '+', 'Faculty Members'],
  ['50', '+', 'Laboratories'], ['15', '+', 'Clinical Hospitals'], ['20', '+', 'Student Clubs']
];

const whyChoose = [
  ['International Curriculum', 'globally benchmarked medical learning pathways', 'globe'],
  ['Experienced Professors', 'mentors with clinical, research and academic depth', 'graduation'],
  ['Modern Laboratories', 'simulation, anatomy, biochemistry and digital labs', 'microscope'],
  ['Affordable Tuition', 'transparent fees and value-focused education', 'award'],
  ['Clinical Training', 'hospital-based practice from early study years', 'hospital'],
  ['Safe Campus', 'student welfare, security and health support', 'shield'],
  ['Global Recognition', 'international outlook and academic partnerships', 'globe'],
  ['Excellent Student Support', 'admissions, visa, hostel and academic advising', 'users']
];

const programs = [
  ['General Medicine (MBBS)', 'A comprehensive six-year program that integrates medical sciences with extensive clinical practice, preparing graduates for successful careers in healthcare.', 'stethoscope', '6 years'],
  ['Dentistry', 'Develop expertise in oral health through modern simulation laboratories, clinical practice, and patient-centered education.', 'tooth', '5 years'],
  ['Pharmacy', 'Gain knowledge in pharmaceutical sciences, drug development, clinical pharmacy, and healthcare innovation.', 'pill', '5 years'],
  ['Nursing', 'Prepare for professional nursing careers through evidence-based learning, practical training, and compassionate patient care.', 'heartPulse', '4 years']
];

const admissionSteps = ['Online Application', 'Document Verification', 'Admission Letter', 'Visa Processing', 'Travel Assistance', 'Arrival & Orientation'];
const facilities = [
  ['Modern Smart Classrooms', 'presentation'], ['Simulation Labs', 'microscope'], ['Library', 'book'], ['Computer Labs', 'laptop'],
  ['Research Centers', 'flask'], ['Hostel', 'bed'], ['Sports Complex', 'dumbbell'], ['Student Cafeteria', 'coffee'],
  ['Medical Museum', 'building'], ['Clinical Hospitals', 'hospital'], ['Conference Hall', 'presentation'], ['Innovation Center', 'lightbulb']
];
const lifeItems = [
  ['Student clubs', 'Leadership, debate, culture, medical interest groups', 'users'], ['Sports', 'Fitness, football, volleyball and wellness activities', 'dumbbell'],
  ['Cultural festivals', 'International celebrations and intercultural evenings', 'globe'], ['Research competitions', 'Poster sessions, Olympiads and innovation days', 'trophy'],
  ['Medical workshops', 'Skills training, CPR and simulation practice', 'stethoscope'], ['Volunteer activities', 'Community health campaigns and outreach', 'heartPulse'],
  ['International celebrations', 'Student-led traditions from Asia, Africa and the Middle East', 'award'], ['Leadership programs', 'Student council and peer mentoring', 'briefcase']
];

const testimonials = [
  ['Aisha Rahman', 'MBBS student, Bangladesh', 'The international office guided me from admission to airport pickup. The labs, clinical exposure, and supportive professors make this feel like a world-class medical community.', 'AR'],
  ['Otabek Karimov', 'Clinical mentor', 'Students learn medicine with empathy, precision, and evidence. Our goal is to connect classroom science with real hospital responsibility.', 'OK'],
  ['Fatima Al-Mansoori', 'International student, UAE', 'I chose Chirchik Branch because it is affordable, safe, multicultural, and serious about preparing doctors for global healthcare challenges.', 'FA']
];

const baseNews = [
  { title: 'Admissions 2026/2027 officially open for international applicants', category: 'Admissions', date: '2026-07-02', summary: 'Applicants can now submit documents online and receive guided support for invitation letters, visas, and hostel placement.', featured: true },
  { title: 'Clinical simulation week strengthens emergency care skills', category: 'Events', date: '2026-06-24', summary: 'Students practiced trauma response, patient communication, and multidisciplinary teamwork in modern simulation labs.', featured: false },
  { title: 'Faculty research group publishes findings in public health', category: 'Research', date: '2026-06-17', summary: 'The branch continues to promote student-faculty research collaborations with regional healthcare partners.', featured: false },
  { title: 'Student team wins regional medical quiz championship', category: 'Achievements', date: '2026-06-12', summary: 'The academic competition showcased excellence in anatomy, pathology, pharmacology, and clinical reasoning.', featured: false },
  { title: 'Sports and wellness festival brings campus community together', category: 'Sports', date: '2026-05-30', summary: 'Students joined football, volleyball, athletics, and wellness activities to support a healthy campus culture.', featured: false },
  { title: 'Updated academic calendar released for fall semester', category: 'Announcements', date: '2026-05-20', summary: 'The Registrar Office has published key teaching, examination, orientation, and holiday dates.', featured: false }
];

const faqs = [
  ['What programs are available?', 'The branch offers General Medicine (MBBS), Dentistry, Pharmacy, and Nursing, supported by clinical education and modern laboratories.'],
  ['How do international students apply?', 'Students submit the online application, passport, academic certificates, photo, and medical documents. The International Office then supports invitation letter and visa steps.'],
  ['Is hostel accommodation available?', 'Yes. Hostel rooms, dining options, security, study areas, and student welfare support are available subject to capacity.'],
  ['Can I receive airport pickup?', 'Yes. The International Office coordinates arrival support, airport pickup, orientation, and accommodation guidance for confirmed students.'],
  ['Is the website multi-language ready?', 'Yes. Core navigation supports English, Russian, Uzbek, and Arabic with RTL layout support for Arabic. Full content translation can be connected through a CMS.']
];

const pageInfo = {
  about: ['About Our University', 'History, vision, mission, values, achievements, rankings, quality assurance, and leadership of TSMU – Chirchik Branch.'],
  administration: ['University Administration', 'Meet the Director, vice directors, registrar, academic council, administration departments, and office contacts.'],
  academics: ['Academics', 'Academic calendar, teaching methodology, credit system, curriculum, assessment, examinations, and clinical education.'],
  faculties: ['Faculties', 'Explore General Medicine, Dentistry, Pharmacy, and Nursing with deans, missions, departments, research, and contacts.'],
  departments: ['Departments', 'Academic departments with history, heads, faculty members, teaching, research, laboratories, publications, and collaborations.'],
  admissions: ['Admissions', 'Admission requirements, eligibility, documents, application process, fee structure, scholarships, forms, FAQs, and online application.'],
  international: ['International Students', 'Everything international students need: visa, invitation letter, airport pickup, accommodation, insurance, and life in Uzbekistan.'],
  hostel: ['Hostel', 'Room types, facilities, dining, security, rules, gallery, fees, and hostel application.'],
  research: ['Research & Innovation', 'Research centers, publications, innovation, conferences, projects, journals, and research ethics.'],
  news: ['News', 'Admissions, events, research, sports, achievements, and announcements with search and filtering.'],
  events: ['Events', 'Upcoming and past events, academic calendar, seminars, workshops, and graduation activities.'],
  gallery: ['Gallery', 'Photos, videos, campus tour, 360° virtual tour, and category filters.'],
  'student-life': ['Student Life', 'Student clubs, sports, cultural activities, medical camps, community outreach, international students, and student council.'],
  careers: ['Careers', 'Faculty recruitment, staff recruitment, internships, and online application opportunities.'],
  alumni: ['Alumni', 'Alumni network, success stories, distinguished alumni, events, and registration.'],
  contact: ['Contact', 'Google Maps, inquiry form, emergency contacts, admissions, international and hostel offices, social media, and office hours.']
};

const faculties = [
  { name: 'General Medicine', dean: 'Prof. Dilshod Yusupov', icon: 'stethoscope', mission: 'Prepare future physicians with strong biomedical knowledge, clinical reasoning, ethics, and patient-centered care.', departments: ['Anatomy', 'Internal Medicine', 'Surgery', 'Pediatrics', 'Public Health'], research: 'Clinical outcomes, preventive medicine, primary healthcare, and evidence-based practice.' },
  { name: 'Dentistry', dean: 'Dr. Madina Saidova', icon: 'tooth', mission: 'Educate oral healthcare professionals skilled in prevention, diagnosis, restorative care, and dental innovation.', departments: ['Therapeutic Dentistry', 'Oral Surgery', 'Orthodontics', 'Prosthodontics'], research: 'Oral epidemiology, biomaterials, digital dentistry, and community dental health.' },
  { name: 'Pharmacy', dean: 'Dr. Akmal Juraev', icon: 'pill', mission: 'Advance pharmaceutical sciences, clinical pharmacy, medication safety, and healthcare innovation.', departments: ['Pharmacology', 'Pharmaceutical Chemistry', 'Clinical Pharmacy', 'Toxicology'], research: 'Drug discovery, rational pharmacotherapy, herbal medicines, and quality control.' },
  { name: 'Nursing', dean: 'Dr. Nargiza Tursunova', icon: 'heartPulse', mission: 'Develop compassionate nurses prepared for evidence-based practice, leadership, and community care.', departments: ['Fundamentals of Nursing', 'Emergency Care', 'Maternal Health', 'Community Nursing'], research: 'Patient safety, nursing education, chronic disease management, and health promotion.' }
];

const departments = [
  ['Anatomy and Histology', 'Prof. Sardor Rakhimov', 'Gross anatomy, histology, morphology labs, anatomical museum, and student scientific clubs.', 'Cadaveric simulation, digital anatomy tables, microscopy and morphology publications.'],
  ['Biochemistry and Molecular Medicine', 'Dr. Laylo Nabiyeva', 'Molecular pathways, laboratory diagnostics, metabolism, and practical lab-based teaching.', 'Clinical biochemistry, biomarkers, nutrition, molecular diagnostics and international collaboration.'],
  ['Internal Medicine', 'Prof. Azizbek Yunusov', 'Bedside teaching, diagnostics, cardiology, pulmonology, endocrinology and case-based learning.', 'Hospital rounds, clinical audits, evidence-based protocols and research seminars.'],
  ['Surgery and Emergency Medicine', 'Dr. Kamol Abdullaev', 'Surgical principles, operating room preparation, emergency care, trauma and simulation.', 'Simulation laboratories, laparoscopic workshops, publications and surgical clubs.'],
  ['Public Health and Epidemiology', 'Dr. Sevara Islomova', 'Population health, epidemiology, biostatistics, prevention and healthcare management.', 'Community studies, outbreak response, public health projects and global partnerships.'],
  ['Languages and Medical Humanities', 'Dr. Malika Roberts', 'Medical English, Russian, Uzbek, ethics, communication and professionalism.', 'Intercultural communication, academic writing, ethics debates and student presentations.']
];

const events = [
  { date: '2026-07-06', title: 'International Applicant Webinar', type: 'Admissions' },
  { date: '2026-07-10', title: 'Clinical Skills Workshop', type: 'Workshop' },
  { date: '2026-07-16', title: 'Research Ethics Seminar', type: 'Seminar' },
  { date: '2026-07-22', title: 'Student Club Expo', type: 'Campus Life' },
  { date: '2026-08-01', title: 'Orientation Week Begins', type: 'Academic Calendar' },
  { date: '2026-09-18', title: 'White Coat Ceremony', type: 'Graduation' }
];

let currentLang = localStorage.getItem('tsmu-lang') || 'en';
let testimonialIndex = 0;
let testimonialTimer;

function t(key) { return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key; }

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  const select = $('#languageSelect');
  if (select) select.value = currentLang;
}

function sceneSVG(kind) {
  const common = '<path d="M48 306 C112 250 160 284 216 230 S340 176 472 108"/><path d="M54 340h414"/><circle cx="396" cy="104" r="42"/><path d="M362 104h68M396 70v68"/>';
  const people = '<circle cx="136" cy="168" r="34"/><path d="M84 286c8-58 28-88 52-88s44 30 52 88"/><circle cx="242" cy="176" r="30"/><path d="M196 286c7-52 24-80 46-80s39 28 46 80"/>';
  const lab = '<path d="M120 92v76L70 286h126l-50-118V92"/><path d="M104 92h58M92 238h82"/><path d="M284 92h94v194h-94zM310 138h42M310 178h42M310 218h42"/>';
  const campus = '<path d="M82 286V142l134-64 134 64v144"/><path d="M130 286v-80h54v80M250 286v-80h54v80M216 78v208"/><path d="M62 142h308"/>';
  const hospital = '<path d="M92 286V82h270v204"/><path d="M146 286v-70h62v70M246 286v-70h62v70"/><path d="M208 134h38M227 115v38"/><path d="M130 174h40M284 174h40"/>';
  const grad = '<path d="m94 150 162-74 162 74-162 74-162-74Z"/><path d="M158 190v54c54 38 142 38 196 0v-54"/><path d="M418 150v86"/><circle cx="418" cy="254" r="14"/>';
  const body = { students: people, lab, campus, hospital, graduation: grad }[kind] || campus;
  return `<svg viewBox="0 0 520 390" aria-hidden="true">${common}${body}</svg>`;
}

function heroScene(kind, title, subtitle) {
  return `<div class="hero__scene"><div class="hero__visual-card">${sceneSVG(kind)}<div class="hero__label"><div><strong>${title}</strong><span>${subtitle}</span></div>${icon(kind === 'lab' ? 'microscope' : kind === 'hospital' ? 'hospital' : kind === 'graduation' ? 'graduation' : 'stethoscope')}</div></div></div>`;
}

function renderHome() {
  return `
    <section class="hero" aria-labelledby="heroTitle">
      <div class="hero__motion" aria-hidden="true">
        ${heroScene('students', 'Medical Students', 'team-based learning')}
        ${heroScene('campus', 'Modern Campus', 'smart classrooms')}
        ${heroScene('hospital', 'Clinical Hospitals', 'patient-centered practice')}
        ${heroScene('lab', 'Advanced Laboratories', 'simulation and research')}
        ${heroScene('graduation', 'Graduation', 'global healthcare careers')}
        <div class="hero__orb hero__orb--sky"></div><div class="hero__orb hero__orb--gold"></div>
      </div>
      <div class="container hero__grid">
        <div class="hero__copy reveal">
          <span class="kicker">${icon('shield')} International medical education in Uzbekistan</span>
          <h1 id="heroTitle" data-i18n="heroTitle">${t('heroTitle')}</h1>
          <p class="lead" data-i18n="heroSub">${t('heroSub')}</p>
          <div class="btn-row">
            <button class="btn btn--gold" type="button" data-open-apply>${icon('arrowRight')} Apply Now</button>
            <button class="btn btn--white" type="button" data-download-brochure>${icon('download')} Download Brochure</button>
            <a class="btn btn--ghost" href="#gallery" data-route="gallery">${icon('play')} Virtual Tour</a>
          </div>
        </div>
        <div class="hero__proof" data-stagger>
          <div class="proof-card"><strong>5,000+</strong><span>active students</span></div>
          <div class="proof-card"><strong>15+</strong><span>clinical hospitals</span></div>
          <div class="proof-card"><strong>50+</strong><span>teaching laboratories</span></div>
        </div>
      </div>
      <div class="hero__scroll" aria-hidden="true"><span></span></div>
    </section>

    <section class="section" id="about-home">
      <div class="container about-mosaic">
        <div class="reveal">
          <span class="eyebrow">About Our University</span>
          <h2>Excellence in medical education, clinical practice and student success.</h2>
          <p class="lead">Tashkent State Medical University – Chirchik Branch is dedicated to delivering excellence in medical education through innovative teaching, advanced research, and practical clinical experience. Our mission is to prepare compassionate, ethical, and highly skilled healthcare professionals who can serve communities worldwide.</p>
          <p>The university offers a dynamic learning environment where students gain knowledge through modern classrooms, state-of-the-art laboratories, and extensive hospital-based training.</p>
          <div class="btn-row"><a class="btn btn--primary" href="#about" data-route="about">Explore About ${icon('arrowRight')}</a><a class="btn btn--ghost" href="#academics" data-route="academics">Academic system</a></div>
        </div>
        <div class="mosaic-visual reveal" aria-label="University campus montage">
          <div class="mosaic-card mosaic-card--1"><strong>International Office</strong><p>admission to graduation support</p></div>
          <div class="mosaic-card mosaic-card--2"><strong>Clinical Excellence</strong><p>hospital-based practical training</p></div>
          <div class="mosaic-card mosaic-card--3"><strong>Modern Laboratories</strong><p>simulation and research facilities</p></div>
          <div class="mosaic-illustration">${sceneSVG('campus')}</div>
        </div>
      </div>
      <div class="container stats-grid" data-stagger>
        ${stats.map(([value, suffix, label]) => `<div class="stat-card"><strong><span data-count="${value}">0</span>${suffix}</strong><span>${label}</span></div>`).join('')}
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="section__head section__head--center reveal"><span class="eyebrow">Why Choose Us</span><h2>Designed around the needs of future doctors.</h2><p>Every part of the learning journey is built for international standards, safety, affordability, and excellent student support.</p></div>
        <div class="grid grid-4" data-stagger>${whyChoose.map(([title, text, ic]) => featureCard(title, text, ic)).join('')}</div>
      </div>
    </section>

    <section class="section" id="programs">
      <div class="container">
        <div class="section__head reveal"><div><span class="eyebrow">Academic Programs</span><h2>Programs for tomorrow’s healthcare leaders.</h2></div><a class="btn btn--ghost" href="#faculties" data-route="faculties">View faculties ${icon('arrowRight')}</a></div>
        <div class="grid grid-4" data-stagger>${programs.map(programCard).join('')}</div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container">
        <div class="section__head section__head--center reveal"><span class="eyebrow">Admission Process</span><h2>A clear, supported path from application to orientation.</h2></div>
        <div class="timeline" data-stagger>${admissionSteps.map((step, i) => `<div class="timeline-step"><div class="timeline-step__number">${String(i + 1).padStart(2, '0')}</div><h3>${step}</h3><p>${admissionStepCopy(step)}</p></div>`).join('')}</div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__head reveal"><div><span class="eyebrow">Campus Facilities</span><h2>Modern spaces for learning, research and wellbeing.</h2></div><a class="btn btn--primary" href="#gallery" data-route="gallery">View Gallery</a></div>
        <div class="facility-grid" data-stagger>${facilities.map(([name, ic]) => `<div class="facility-item">${icon(ic)}<span>${name}</span></div>`).join('')}</div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container split-feature">
        <div class="world-map reveal" aria-label="Students from Asia, Africa and the Middle East">
          <svg viewBox="0 0 600 360"><path d="M72 175c60-84 170-98 250-52s134 34 208-20"/><path d="M96 240c74-28 154-16 238 20s128 24 184-24"/><circle cx="300" cy="178" r="112"/><path d="M188 178h224M300 66v224"/></svg>
          <span class="map-chip">Asia</span><span class="map-chip">Middle East</span><span class="map-chip">Africa</span><span class="map-chip">CIS</span>
        </div>
        <div class="feature-panel reveal"><span class="eyebrow">International Students</span><h2>Multicultural, affordable and fully supported.</h2><p class="lead">Students from across Asia, Africa, and the Middle East choose Tashkent State Medical University – Chirchik Branch for its affordable education, multicultural environment, and internationally focused medical training.</p><p>The International Office provides complete support from admission to graduation, including visa assistance, accommodation, airport pickup, orientation, and student welfare.</p><div class="tag-list"><span class="tag">Visa assistance</span><span class="tag">Airport pickup</span><span class="tag">Hostel support</span><span class="tag">Orientation</span></div></div>
      </div>
    </section>

    <section class="section section--navy">
      <div class="container">
        <div class="section__head reveal"><div><span class="eyebrow">Research & Innovation</span><h2>Scientific thinking from the first year onward.</h2></div><a class="btn btn--white" href="#research" data-route="research">Research portal</a></div>
        <div class="research-band" data-stagger>
          <div class="card"><div class="card__body"><div class="card__icon">${icon('flask')}</div><h3>Research projects</h3><p>Students and faculty participate in conferences, publications and interdisciplinary healthcare innovation.</p></div></div>
          <div class="card"><div class="card__body"><div class="card__icon">${icon('lightbulb')}</div><h3>Innovation center</h3><p>Clinical problem-solving, digital health, simulation and startup-style medical innovation.</p></div></div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__head section__head--center reveal"><span class="eyebrow">Student Life</span><h2>A vibrant community beyond the classroom.</h2></div>
        <div class="life-grid" data-stagger>${lifeItems.map(([title, text, ic]) => `<div class="life-tile">${icon(ic)}<h3>${title}</h3><p>${text}</p></div>`).join('')}</div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container testimonial-shell">
        <div class="testimonial-video reveal"><button class="play-button" type="button" aria-label="Play video testimonial">${icon('play')}</button><div><h3>Video testimonials</h3><p>Hear from students about admissions, clinical learning, hostel life and international support.</p></div></div>
        <div class="card testimonial-card reveal" id="testimonialCard"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__head reveal"><div><span class="eyebrow">Latest News</span><h2>Featured news and university updates.</h2></div><a class="btn btn--ghost" href="#news" data-route="news">All news ${icon('arrowRight')}</a></div>
        <div class="news-grid" data-stagger>${getNews().slice(0, 5).map((item, i) => newsCard(item, i === 0)).join('')}</div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="container grid grid-2">
        <div class="reveal"><span class="eyebrow">FAQ</span><h2>Frequently asked questions.</h2><p>Quick answers for applicants, parents, and international students.</p><button class="btn btn--primary" type="button" data-open-apply>Start application</button></div>
        <div class="accordion reveal">${faqs.map(faqItem).join('')}</div>
      </div>
    </section>`;
}

function featureCard(title, text, ic) {
  return `<article class="card"><div class="card__body"><div class="card__icon">${icon(ic)}</div><h3>${title}</h3><p>${text}.</p></div></article>`;
}
function programCard([title, text, ic, duration]) {
  return `<article class="card program-card"><div class="program-card__top">${icon(ic)}<div><span class="badge">${duration}</span><h3>${title}</h3></div></div><div class="card__body"><p>${text}</p><a class="btn btn--ghost" href="#faculties" data-route="faculties">Faculty details</a></div></article>`;
}
function admissionStepCopy(step) {
  const map = {
    'Online Application': 'Submit your details and choose your academic program.',
    'Document Verification': 'Admissions officers review certificates and identity documents.',
    'Admission Letter': 'Qualified applicants receive an official admission offer.',
    'Visa Processing': 'The International Office supports invitation and visa guidance.',
    'Travel Assistance': 'Students receive arrival, ticket and airport coordination advice.',
    'Arrival & Orientation': 'Join campus orientation, hostel check-in and academic briefing.'
  };
  return map[step];
}
function faqItem([q, a]) { return `<div class="accordion-item"><button class="accordion-trigger" type="button"><span>${q}</span>${icon('chevronDown')}</button><div class="accordion-panel"><p>${a}</p></div></div>`; }
function newsCard(item, featured = false) {
  return `<article class="card news-card ${featured ? 'news-card--featured' : ''}" data-category="${item.category}"><div class="news-card__media"></div><div class="news-card__content"><div class="news-meta"><span>${item.category}</span><span>${formatDate(item.date)}</span></div><h3>${item.title}</h3><p>${item.summary}</p><a class="btn btn--ghost" href="#news" data-route="news">Read more</a></div></article>`;
}
function formatDate(date) { return new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date)); }

function pageHero(route) {
  const [title, subtitle] = pageInfo[route] || ['Page', ''];
  return `<section class="page-hero"><div class="container"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="#home" data-route="home">Home</a><span>/</span><span>${title}</span></nav><span class="eyebrow">TSMU Chirchik Branch</span><h1>${title}</h1><p>${subtitle}</p></div></section>`;
}
function pageTabs(tabs) {
  return `<div class="page-tabs"><div class="container page-tabs__inner">${tabs.map(([id, label]) => `<a href="#${id}" data-scroll-target="${id}">${label}</a>`).join('')}</div></div>`;
}
function pageShell(route, tabs, content) { return `${pageHero(route)}${pageTabs(tabs)}${content}`; }

function renderAbout() {
  return pageShell('about', [['history','History'],['vision','Vision & Mission'],['goals','Goals'],['leadership','Leadership'],['quality','Quality']], `
    <section class="section" id="history"><div class="container grid grid-2"><div class="reveal"><span class="eyebrow">History</span><h2>A growing medical education hub in Tashkent Region.</h2><p class="lead">The Chirchik Branch advances the academic legacy of Tashkent State Medical University by expanding access to high-quality medical education, research, and clinical training.</p><p>Its development focuses on modern laboratories, hospital partnerships, international student services, and community health impact.</p></div><div class="timeline-vertical reveal"><div class="timeline-vertical__item"><h3>Foundation</h3><p>Established to serve regional healthcare education needs and widen access to medical training.</p></div><div class="timeline-vertical__item"><h3>Clinical Expansion</h3><p>Hospital partnerships strengthened practical education and bedside teaching.</p></div><div class="timeline-vertical__item"><h3>Internationalization</h3><p>Programs, admissions support and campus services were aligned for global students.</p></div></div></div></section>
    <section class="section section--soft" id="vision"><div class="container grid grid-3" data-stagger>${featureCard('Vision','To become one of Asia’s respected medical education branches known for clinical excellence and research relevance','globe')}${featureCard('Mission','To prepare compassionate, ethical and highly skilled healthcare professionals who serve communities worldwide','heartPulse')}${featureCard('Core Values','Integrity, empathy, academic excellence, innovation, diversity, safety and service','shield')}</div></section>
    <section class="section" id="goals"><div class="container grid grid-2"><div class="info-panel reveal"><span class="eyebrow">Strategic Goals</span><ul class="check-list"><li>Strengthen internationally benchmarked curricula.</li><li>Expand clinical hospital training and simulation.</li><li>Increase student-faculty research publications.</li><li>Improve digital services, portals and CMS workflows.</li><li>Grow student welfare, hostel and international support.</li></ul></div><div class="info-panel reveal"><span class="eyebrow">Achievements & Rankings</span><p>Recognized within a leading national medical university ecosystem, the branch emphasizes measurable teaching quality, research participation, clinical readiness, student support and international outreach.</p><div class="tag-list"><span class="tag">Quality education</span><span class="tag">Clinical partners</span><span class="tag">International support</span><span class="tag">Research culture</span></div></div></div></section>
    <section class="section section--soft" id="leadership"><div class="container grid grid-2"><div class="info-panel info-panel--gradient reveal"><span class="eyebrow">Message from the Director</span><h2>“We educate doctors with knowledge, skill and humanity.”</h2><p>Our branch is committed to a student-centered academic environment where modern science, clinical discipline and compassionate care meet. We welcome students from Uzbekistan and around the world.</p><strong>Director of TSMU – Chirchik Branch</strong></div><div class="info-panel reveal"><span class="eyebrow">University Leadership</span><div class="org-chart"><div class="org-level"><div class="org-node">Director</div></div><div class="org-level"><div class="org-node">Vice Director Academic</div><div class="org-node">Vice Director Research</div><div class="org-node">Vice Director International</div></div><div class="org-level"><div class="org-node">Faculties</div><div class="org-node">Departments</div><div class="org-node">Student Services</div></div></div></div></div></section>
    <section class="section" id="quality"><div class="container grid grid-3" data-stagger>${featureCard('Quality Assurance','Continuous curriculum review, student feedback, examination standards and academic monitoring','award')}${featureCard('Accreditations','Accreditation-ready documentation, compliance systems and transparent academic governance','file')}${featureCard('Campus Overview','Smart classrooms, laboratories, library, hostel, cafeteria, sport and clinical training access','building')}</div></section>`);
}

function renderAdministration() {
  const leaders = [['Director','Strategic leadership, academic quality and institutional development.'],['Vice Director for Academic Affairs','Curriculum, teaching quality, assessment and academic calendar.'],['Vice Director for Research & Innovation','Research centers, ethics, publications and innovation projects.'],['Vice Director for International Relations','International admissions, partnerships, visa and student welfare.'],['Registrar','Records, enrollment, transcripts, examinations and student status.'],['Academic Council','Academic governance, program review and quality decisions.']];
  return pageShell('administration', [['leadership','Leadership'],['departments','Departments'],['chart','Organizational Chart'],['contacts','Office Contacts']], `
    <section class="section" id="leadership"><div class="container"><div class="grid grid-3" data-stagger>${leaders.map(([title,text]) => featureCard(title,text,'user')).join('')}</div></div></section>
    <section class="section section--soft" id="departments"><div class="container"><div class="section__head reveal"><div><span class="eyebrow">Administration Departments</span><h2>Student-centered university services.</h2></div></div><div class="grid grid-4" data-stagger>${['Admissions Office','International Office','Registrar Office','Dean Offices','Finance Office','Human Resources','Hostel Office','IT & Digital Services'].map(name => featureCard(name,'Responsive services for students, faculty and partners','building')).join('')}</div></div></section>
    <section class="section" id="chart"><div class="container grid grid-2"><div class="info-panel reveal"><span class="eyebrow">Organizational Chart</span><div class="org-chart"><div class="org-level"><div class="org-node">Director</div></div><div class="org-level"><div class="org-node">Academic Affairs</div><div class="org-node">Research</div><div class="org-node">International</div><div class="org-node">Administration</div></div><div class="org-level"><div class="org-node">Faculties</div><div class="org-node">Departments</div><div class="org-node">Registrar</div><div class="org-node">Student Life</div></div></div></div><div class="info-panel reveal"><span class="eyebrow">Academic Council</span><p>The Academic Council reviews educational strategy, faculty development, academic regulations, assessment quality, research priorities, and student success indicators.</p><ul class="check-list"><li>Program approval and updates</li><li>Academic standards and assessment</li><li>Research and ethics oversight</li><li>Student academic appeals</li></ul></div></div></section>
    <section class="section section--soft" id="contacts"><div class="container grid grid-3" data-stagger>${officeContacts().join('')}</div></section>`);
}

function renderAcademics() {
  return pageShell('academics', [['overview','Overview'],['calendar','Calendar'],['method','Methodology'],['clinical','Clinical Education']], `
    <section class="section" id="overview"><div class="container grid grid-2"><div class="reveal"><span class="eyebrow">Academic Overview</span><h2>Structured learning from foundational science to clinical confidence.</h2><p class="lead">Academic programs integrate lectures, seminars, simulation, laboratory practice, clinical rotations, independent learning and continuous assessment.</p></div><div class="info-panel reveal"><ul class="check-list"><li>Credit-based academic system</li><li>Transparent curriculum and learning outcomes</li><li>Modern assessment and examinations</li><li>Clinical education in partner hospitals</li><li>Academic advising and remediation support</li></ul></div></div></section>
    <section class="section section--soft" id="calendar"><div class="container"><div class="section__head reveal"><div><span class="eyebrow">Academic Calendar</span><h2>Key academic milestones.</h2></div><a class="btn btn--ghost" href="#events" data-route="events">Event calendar</a></div><div class="timeline" data-stagger>${['Orientation','Fall Semester','Midterm Assessment','Clinical Practice','Final Exams','Winter Break'].map((x,i)=>`<div class="timeline-step"><div class="timeline-step__number">${i+1}</div><h3>${x}</h3><p>Published by the Registrar Office for each academic year.</p></div>`).join('')}</div></div></section>
    <section class="section" id="method"><div class="container grid grid-3" data-stagger>${featureCard('Teaching Methodology','Problem-based learning, case discussions, simulation and interactive seminars','presentation')}${featureCard('Credit System','Credit accumulation, learning outcomes and transparent workload planning','award')}${featureCard('Curriculum','Integrated foundational, preclinical, clinical and elective modules','book')}${featureCard('Assessment','Continuous assessment, OSCE-style skills checks, written exams and practical tasks','file')}${featureCard('Examinations','Secure procedures, clear rubrics and academic integrity standards','shield')}${featureCard('Digital Learning','Student portal, e-library resources and blended learning support','laptop')}</div></section>
    <section class="section section--navy" id="clinical"><div class="container split-feature"><div class="reveal"><span class="eyebrow">Clinical Education</span><h2>Hospital-based training with professional supervision.</h2><p>Students develop clinical reasoning, patient communication, documentation, teamwork, ethics and practical skills through structured rotations and simulation preparation.</p></div><div class="grid grid-2" data-stagger>${['Internal Medicine','Surgery','Pediatrics','Obstetrics & Gynecology','Emergency Care','Community Health'].map(x=>`<div class="card"><div class="card__body"><h3>${x}</h3><p>Supervised clinical exposure and reflective practice.</p></div></div>`).join('')}</div></div></section>`);
}

function renderFaculties() {
  return pageShell('faculties', faculties.map(f => [slug(f.name), f.name]), `
    <section class="section"><div class="container"><div class="grid" data-stagger>${faculties.map(f => `
      <article class="card faculty-profile" id="${slug(f.name)}">
        <div class="dean-card"><div class="dean-photo">${icon(f.icon)}</div><h2>${f.name}</h2><p><strong>Dean:</strong> ${f.dean}</p><p>${f.mission}</p><a class="btn btn--white" href="#contact" data-route="contact">Contact faculty</a></div>
        <div class="card__body"><span class="eyebrow">Faculty Page</span><div class="grid grid-2"><div><h3>Faculty History</h3><p>The faculty supports the branch mission by combining academic tradition with modern healthcare needs.</p><h3>Faculty Structure</h3><p>Dean office, academic departments, teaching laboratories, research clubs and student advising.</p></div><div><h3>Departments</h3><div class="tag-list">${f.departments.map(d => `<span class="tag">${d}</span>`).join('')}</div><h3 style="margin-top:22px">Research</h3><p>${f.research}</p></div></div><div class="tag-list"><span class="tag">Gallery</span><span class="tag">Faculty news</span><span class="tag">Faculty members</span><span class="tag">International collaboration</span></div></div>
      </article>`).join('')}</div></div></section>`);
}

function renderDepartments() {
  return pageShell('departments', [['overview','Overview'],['departments-list','Departments'],['collaboration','Collaboration']], `
    <section class="section" id="overview"><div class="container grid grid-2"><div class="reveal"><span class="eyebrow">Departments</span><h2>Academic units that connect science, skills and service.</h2><p class="lead">Each department maintains teaching, research, laboratories, publications, scientific clubs, gallery updates, international collaboration and contact channels.</p></div><div class="info-panel reveal"><ul class="check-list"><li>Department heads and faculty profiles</li><li>Teaching modules and laboratory resources</li><li>Student scientific clubs and seminars</li><li>Publications and conference activity</li><li>International collaboration and exchange</li></ul></div></div></section>
    <section class="section section--soft" id="departments-list"><div class="container department-grid" data-stagger>${departments.map(([name, head, teaching, research]) => `<article class="card"><div class="card__body"><div class="card__icon">${icon('building')}</div><h3>${name}</h3><p><strong>Department Head:</strong> ${head}</p><h4>Teaching</h4><p>${teaching}</p><h4>Research & Laboratories</h4><p>${research}</p><div class="tag-list"><span class="tag">Faculty members</span><span class="tag">Publications</span><span class="tag">Scientific clubs</span><span class="tag">Gallery</span><span class="tag">Contact</span></div></div></article>`).join('')}</div></section>
    <section class="section" id="collaboration"><div class="container grid grid-3" data-stagger>${featureCard('International Collaboration','Joint seminars, guest lectures and research links with partner institutions','globe')}${featureCard('Scientific Clubs','Student research circles, case discussions and poster competitions','users')}${featureCard('Publications','Faculty and student articles, conference abstracts and journals','journal')}</div></section>`);
}

function renderAdmissions() {
  return pageShell('admissions', [['requirements','Requirements'],['process','Process'],['fees','Fees'],['faq','FAQs'],['apply','Apply']], `
    <section class="section" id="requirements"><div class="container grid grid-2"><div class="info-panel reveal"><span class="eyebrow">Admission Requirements</span><h2>Eligibility</h2><ul class="check-list"><li>Completed secondary education or equivalent.</li><li>Strong science background in biology and chemistry.</li><li>Valid passport for international applicants.</li><li>Health documents and translated certificates where required.</li><li>English/Russian/Uzbek language pathway depending on program.</li></ul></div><div class="info-panel reveal"><span class="eyebrow">Required Documents</span><ul class="check-list"><li>Passport copy</li><li>Academic certificates and transcripts</li><li>Passport-size photo</li><li>Medical certificate where applicable</li><li>Application form</li><li>Document translations/notarization if required</li></ul></div></div></section>
    <section class="section section--soft" id="process"><div class="container"><div class="timeline" data-stagger>${admissionSteps.map((step,i)=>`<div class="timeline-step"><div class="timeline-step__number">${i+1}</div><h3>${step}</h3><p>${admissionStepCopy(step)}</p></div>`).join('')}</div></div></section>
    <section class="section" id="fees"><div class="container grid grid-2"><div class="table-wrap reveal"><table><thead><tr><th>Program</th><th>Duration</th><th>Fee Note</th></tr></thead><tbody>${programs.map(([p,, ,duration])=>`<tr><td>${p}</td><td>${duration}</td><td>Transparent annual tuition; official fees confirmed by Admissions Office.</td></tr>`).join('')}</tbody></table></div><div class="info-panel reveal"><span class="eyebrow">Scholarships & Forms</span><p>Merit support and partner scholarships may be available according to university policy and applicant profile.</p><div class="btn-row"><button class="btn btn--gold" type="button" data-download-brochure>${icon('download')} Download Forms</button><button class="btn btn--primary" type="button" data-open-apply>Online Application</button></div></div></div></section>
    <section class="section section--soft" id="faq"><div class="container grid grid-2"><div><span class="eyebrow">Admissions FAQ</span><h2>Answers before you apply.</h2></div><div class="accordion">${faqs.slice(0,4).map(faqItem).join('')}</div></div></section>
    <section class="section section--navy" id="apply"><div class="container split-feature"><div class="reveal"><span class="eyebrow">Online Application Portal</span><h2>Start your medical journey today.</h2><p>Upload documents, choose a program and receive step-by-step admissions guidance.</p></div><div class="info-panel reveal"><button class="btn btn--gold" type="button" data-open-apply>${icon('upload')} Apply Online</button></div></div></section>`);
}

function renderInternational() {
  return pageShell('international', [['why','Why Study Here'],['visa','Visa'],['support','Student Support'],['living','Living in Uzbekistan']], `
    <section class="section" id="why"><div class="container split-feature"><div class="feature-panel reveal"><span class="eyebrow">Why Study Here</span><h2>Affordable, multicultural, clinically focused.</h2><p class="lead">Students from Asia, Africa and the Middle East choose the branch for internationally focused medical training, affordable living, safety and complete support.</p><div class="tag-list"><span class="tag">Affordable tuition</span><span class="tag">Safe campus</span><span class="tag">Clinical training</span><span class="tag">Multicultural community</span></div></div><div class="world-map reveal"><svg viewBox="0 0 600 360"><circle cx="300" cy="180" r="130"/><path d="M170 180h260M300 50v260"/><path d="M90 230c100-60 180-20 260 0s120 20 170-30"/></svg><span class="map-chip">Asia</span><span class="map-chip">Middle East</span><span class="map-chip">Africa</span><span class="map-chip">CIS</span></div></div></section>
    <section class="section section--soft" id="visa"><div class="container grid grid-4" data-stagger>${featureCard('Visa','Invitation letter guidance, visa checklist and arrival coordination','plane')}${featureCard('Invitation Letter','Official documentation support after admission confirmation','file')}${featureCard('Airport Pickup','Arrival reception and transfer coordination for confirmed students','map')}${featureCard('Insurance','Health insurance guidance and safety information','shield')}</div></section>
    <section class="section" id="support"><div class="container grid grid-3" data-stagger>${featureCard('Accommodation','Hostel placement support subject to availability','bed')}${featureCard('Student Support','Orientation, welfare, academic advising and emergency contacts','users')}${featureCard('FAQs','Dedicated answers about documents, arrival, fees and daily life','message')}</div></section>
    <section class="section section--navy" id="living"><div class="container grid grid-2"><div class="reveal"><span class="eyebrow">Living in Uzbekistan</span><h2>Welcoming, historic and student-friendly.</h2><p>Uzbekistan offers rich culture, affordable living, safe cities, warm hospitality, and convenient access across Central Asia.</p></div><div class="grid grid-2" data-stagger>${['Cost of living guidance','Local registration support','Cultural orientation','Student welfare'].map(x=>`<div class="card"><div class="card__body"><h3>${x}</h3><p>International Office guidance from arrival to graduation.</p></div></div>`).join('')}</div></div></section>`);
}

function renderHostel() {
  return pageShell('hostel', [['rooms','Room Types'],['facilities','Facilities'],['fees','Fees'],['apply-hostel','Apply']], `
    <section class="section" id="rooms"><div class="container grid grid-3" data-stagger>${['Standard shared room','Enhanced shared room','Limited quiet-study room'].map((r,i)=>`<article class="card"><div class="card__body"><div class="card__icon">${icon('bed')}</div><h3>${r}</h3><p>Comfortable accommodation with study-friendly environment and student support.</p><span class="badge">${i+2}-bed option</span></div></article>`).join('')}</div></section>
    <section class="section section--soft" id="facilities"><div class="container grid grid-4" data-stagger>${['Dining','Security','Study areas','Laundry','Wi-Fi zones','Common rooms','Medical assistance','Student wardens'].map(x=>featureCard(x,'Available to support safe and convenient student living','home')).join('')}</div></section>
    <section class="section" id="fees"><div class="container grid grid-2"><div class="table-wrap reveal"><table><thead><tr><th>Item</th><th>Details</th></tr></thead><tbody><tr><td>Fees</td><td>Confirmed annually by Hostel Office.</td></tr><tr><td>Rules</td><td>Respect, safety, quiet hours, visitor policy and cleanliness.</td></tr><tr><td>Gallery</td><td>Rooms, dining, common areas and study spaces.</td></tr></tbody></table></div><div class="info-panel reveal"><span class="eyebrow">Hostel Rules</span><ul class="check-list"><li>Maintain cleanliness and shared responsibility.</li><li>Follow security and visitor procedures.</li><li>Respect quiet hours and community living.</li><li>Report maintenance issues promptly.</li></ul></div></div></section>
    <section class="section section--navy" id="apply-hostel"><div class="container split-feature"><div><span class="eyebrow">Apply for Hostel</span><h2>Request accommodation after admission confirmation.</h2><p>Hostel placement is coordinated based on availability and student needs.</p></div><button class="btn btn--gold" type="button" data-open-apply>Request Hostel Support</button></div></section>`);
}

function renderResearch() {
  return pageShell('research', [['centers','Centers'],['publications','Publications'],['innovation','Innovation'],['ethics','Ethics']], `
    <section class="section" id="centers"><div class="container grid grid-3" data-stagger>${['Clinical Research Center','Public Health & Epidemiology Unit','Simulation & Medical Education Lab','Pharmaceutical Sciences Group','Dental Innovation Unit','Digital Health Initiative'].map(x=>featureCard(x,'Student-faculty projects, seminars, publications and healthcare impact','flask')).join('')}</div></section>
    <section class="section section--soft" id="publications"><div class="container grid grid-2"><div class="info-panel reveal"><span class="eyebrow">Publications & Journals</span><h2>Growing research output.</h2><p>Faculty and students contribute to scientific journals, conference proceedings, case reports, literature reviews and applied healthcare projects.</p><div class="tag-list"><span class="tag">Scientific journals</span><span class="tag">Conference abstracts</span><span class="tag">Student papers</span><span class="tag">Clinical reports</span></div></div><div class="info-panel reveal"><span class="eyebrow">Conferences & Projects</span><ul class="check-list"><li>Annual student scientific conference</li><li>Clinical innovation workshops</li><li>Public health field projects</li><li>International partner webinars</li></ul></div></div></section>
    <section class="section" id="innovation"><div class="container split-feature"><div class="mosaic-visual reveal"><div class="mosaic-card mosaic-card--1"><strong>Digital Health</strong><p>AI-ready triage concepts</p></div><div class="mosaic-card mosaic-card--2"><strong>Simulation</strong><p>skills under supervision</p></div><div class="mosaic-card mosaic-card--3"><strong>Innovation</strong><p>student-led prototypes</p></div></div><div class="reveal"><span class="eyebrow">Innovation</span><h2>Research that solves healthcare problems.</h2><p class="lead">Innovation activities promote interdisciplinary collaboration, applied clinical problem-solving and technology-enhanced learning.</p><button class="btn btn--primary" type="button" data-open-apply>Join research interest list</button></div></div></section>
    <section class="section section--navy" id="ethics"><div class="container grid grid-3" data-stagger>${featureCard('Research Ethics','Ethical review, informed consent and responsible conduct of research','shield')}${featureCard('Mentorship','Faculty supervisors guide students through design, methods and publication','users')}${featureCard('Collaboration','Partnerships with hospitals, universities and scientific societies','globe')}</div></section>`);
}

function renderNews() {
  return pageShell('news', [['news-list','All News'],['cms','CMS'],['newsletter','Newsletter']], `
    <section class="section" id="news-list"><div class="container"><div class="filter-bar" role="toolbar" aria-label="News categories">${['All','Admissions','Events','Research','Sports','Achievements','Announcements'].map((c,i)=>`<button class="filter-btn ${i===0?'active':''}" type="button" data-news-filter="${c}">${c}</button>`).join('')}<input id="newsSearch" type="search" placeholder="Search news..." aria-label="Search news" style="max-width:260px"></div><div class="news-grid" id="newsGrid">${getNews().map((n,i)=>newsCard(n,i===0)).join('')}</div></div></section>
    <section class="section section--soft" id="cms"><div class="container grid grid-2"><div class="reveal"><span class="eyebrow">News Management CMS</span><h2>Publish and filter updates with a CMS-ready workflow.</h2><p>Add a demo news item locally, then connect this interface to a backend CMS for editorial roles, media uploads and approvals.</p></div><div class="info-panel reveal"><button class="btn btn--primary" type="button" id="cmsOpenInline">Open CMS Demo</button></div></div></section>
    <section class="section" id="newsletter"><div class="container info-panel reveal"><span class="eyebrow">Featured Categories</span><div class="tag-list"><span class="tag">Admissions</span><span class="tag">Events</span><span class="tag">Research</span><span class="tag">Sports</span><span class="tag">Achievements</span><span class="tag">Announcements</span></div></div></section>`);
}

function renderEvents() {
  return pageShell('events', [['upcoming','Upcoming'],['calendar-section','Calendar'],['past','Past Events']], `
    <section class="section" id="upcoming"><div class="container grid grid-3" data-stagger>${events.map(e=>`<article class="card"><div class="card__body"><span class="badge">${e.type}</span><h3>${e.title}</h3><p>${formatDate(e.date)}</p><a class="btn btn--ghost" href="#contact" data-route="contact">Ask about event</a></div></article>`).join('')}</div></section>
    <section class="section section--soft" id="calendar-section"><div class="container grid grid-2"><div class="reveal"><span class="eyebrow">Event Calendar</span><h2>July 2026</h2><p>Seminars, workshops, orientation, academic calendar dates and graduation events.</p></div><div class="calendar reveal">${calendarMarkup()}</div></div></section>
    <section class="section" id="past"><div class="container grid grid-4" data-stagger>${['Research poster day','Medical workshop','Cultural evening','Graduation ceremony'].map(x=>featureCard(x,'Past event gallery and summary available through the Events Office','calendar')).join('')}</div></section>`);
}

function calendarMarkup() {
  const heads = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const julyStartOffset = 2; // July 1, 2026 is Wednesday
  let html = heads.map(h=>`<div class="calendar__head">${h}</div>`).join('');
  for (let i = 0; i < julyStartOffset; i++) html += '<div class="calendar__day is-muted"></div>';
  for (let d = 1; d <= 31; d++) {
    const date = `2026-07-${String(d).padStart(2,'0')}`;
    const ev = events.find(e => e.date === date);
    html += `<div class="calendar__day ${ev?'has-event':''}"><strong>${d}</strong>${ev?`<span class="calendar__event">${ev.title}</span>`:''}</div>`;
  }
  return html;
}

function renderGallery() {
  const items = [
    ['Photos','Campus architecture','image','campus'],['Photos','Modern laboratories','microscope','labs'],['Videos','Student testimonials','video','videos'],['Campus Tour','Library and classrooms','building','campus'],
    ['360° Virtual Tour','Interactive campus walkthrough','globe','tour'],['Photos','Clinical hospitals','hospital','clinical'],['Photos','Graduation moments','graduation','events'],['Videos','Research events','video','research']
  ];
  return pageShell('gallery', [['gallery-list','Gallery'],['tour','Virtual Tour']], `
    <section class="section" id="gallery-list"><div class="container"><div class="filter-bar">${['All','Photos','Videos','Campus Tour','360° Virtual Tour'].map((c,i)=>`<button class="filter-btn ${i===0?'active':''}" type="button" data-gallery-filter="${c}">${c}</button>`).join('')}</div><div class="gallery-grid" id="galleryGrid" data-stagger>${items.map(([cat,title,ic,key])=>`<article class="gallery-card" data-gallery-category="${cat}">${icon(ic)}<div><span class="badge">${cat}</span><h3>${title}</h3><p>${key}</p></div></article>`).join('')}</div></div></section>
    <section class="section section--navy" id="tour"><div class="container split-feature"><div class="reveal"><span class="eyebrow">360° Virtual Tour</span><h2>Explore campus before you arrive.</h2><p>This tour section is ready for 360° media integration. The current offline preview uses optimized CSS visuals for fast loading.</p></div><div class="testimonial-video reveal"><button class="play-button" type="button">${icon('play')}</button><div><h3>Virtual campus film</h3><p>Replace with real 360° media or video in production.</p></div></div></div></section>`);
}

function renderStudentLife() {
  return pageShell('student-life', [['clubs','Clubs'],['sports','Sports'],['outreach','Outreach'],['council','Council']], `
    <section class="section" id="clubs"><div class="container life-grid" data-stagger>${lifeItems.map(([title,text,ic])=>`<div class="life-tile">${icon(ic)}<h3>${title}</h3><p>${text}</p></div>`).join('')}</div></section>
    <section class="section section--soft" id="sports"><div class="container grid grid-3" data-stagger>${featureCard('Sports','Football, volleyball, athletics, fitness and wellness activities','dumbbell')}${featureCard('Cultural Activities','Festivals, heritage nights, performances and student creativity','globe')}${featureCard('Achievements','Competitions, awards, student excellence and leadership recognition','trophy')}</div></section>
    <section class="section" id="outreach"><div class="container grid grid-2"><div class="info-panel reveal"><span class="eyebrow">Medical Camps & Community Outreach</span><p>Students participate in health awareness campaigns, volunteer activities, medical workshops and community service under supervision.</p></div><div class="info-panel reveal"><span class="eyebrow">International Students</span><p>A multicultural student community celebrates traditions, supports newcomers and builds lifelong friendships.</p></div></div></section>
    <section class="section section--navy" id="council"><div class="container split-feature"><div><span class="eyebrow">Student Council</span><h2>Leadership, representation and service.</h2><p>The Student Council supports clubs, events, feedback channels, peer mentoring and campus initiatives.</p></div><a class="btn btn--gold" href="#contact" data-route="contact">Contact Student Council</a></div></section>`);
}

function renderCareers() {
  return pageShell('careers', [['faculty','Faculty Recruitment'],['staff','Staff'],['internships','Internships'],['apply-career','Apply']], `
    <section class="section" id="faculty"><div class="container grid grid-3" data-stagger>${['Professor / Associate Professor','Clinical Instructor','Research Fellow'].map(x=>featureCard(x,'Join a growing academic medical branch focused on teaching, research and service','briefcase')).join('')}</div></section>
    <section class="section section--soft" id="staff"><div class="container grid grid-3" data-stagger>${['Registrar staff','International office coordinator','Laboratory technician','IT support','Hostel supervisor','Student affairs officer'].map(x=>featureCard(x,'Professional staff opportunities supporting excellent student services','users')).join('')}</div></section>
    <section class="section" id="internships"><div class="container info-panel reveal"><span class="eyebrow">Internships</span><h2>Administrative, research and student support internships.</h2><p>Internship opportunities are announced by department and office needs.</p></div></section>
    <section class="section section--navy" id="apply-career"><div class="container split-feature"><div><span class="eyebrow">Apply Online</span><h2>Send your CV and cover letter.</h2><p>Connect this form to an HR workflow for production recruitment.</p></div><button class="btn btn--gold" type="button" data-open-apply>Apply Online</button></div></section>`);
}

function renderAlumni() {
  return pageShell('alumni', [['network','Network'],['stories','Success Stories'],['events-alumni','Events'],['registration','Registration']], `
    <section class="section" id="network"><div class="container grid grid-3" data-stagger>${featureCard('Alumni Network','Connect graduates across healthcare systems, research and leadership roles','globe')}${featureCard('Mentorship','Alumni support current students through career talks and guidance','users')}${featureCard('Distinguished Alumni','Celebrate outstanding service, leadership and scientific contribution','award')}</div></section>
    <section class="section section--soft" id="stories"><div class="container testimonial-shell"><div class="testimonial-video reveal"><button class="play-button">${icon('play')}</button><div><h3>Success stories</h3><p>Video interviews and alumni journeys.</p></div></div><div class="info-panel reveal"><span class="eyebrow">Success Stories</span><h2>Graduates serving communities worldwide.</h2><p>Alumni pages can feature career paths, residency success, research achievements and community health leadership.</p></div></div></section>
    <section class="section" id="events-alumni"><div class="container grid grid-3" data-stagger>${['Annual reunion','Career mentoring day','Research alumni lecture'].map(x=>featureCard(x,'Alumni events and networking opportunities','calendar')).join('')}</div></section>
    <section class="section section--navy" id="registration"><div class="container split-feature"><div><span class="eyebrow">Alumni Registration</span><h2>Join the alumni directory.</h2><p>Register to receive news, events and mentoring opportunities.</p></div><button class="btn btn--gold" type="button" data-open-apply>Register</button></div></section>`);
}

function renderContact() {
  return pageShell('contact', [['map','Map'],['inquiry','Inquiry'],['offices','Offices'],['hours','Office Hours']], `
    <section class="section" id="map"><div class="container grid grid-2"><div class="map-large reveal"><div class="map-pin"></div><div class="map-overlay"><h3>Chirchik, Tashkent Region, Uzbekistan</h3><p>Google Maps integration placeholder for offline preview.</p><a class="btn btn--primary" href="https://maps.google.com/?q=Chirchik%20Tashkent%20State%20Medical%20University" target="_blank" rel="noopener">Open Google Maps</a></div></div><div class="grid" data-stagger>${officeContacts().join('')}</div></div></section>
    <section class="section section--soft" id="inquiry"><div class="container grid grid-2"><div class="reveal"><span class="eyebrow">Inquiry Form</span><h2>How can we help?</h2><p>Use the secure contact form for admissions, international support, hostel, careers, research and general questions.</p></div><form class="info-panel application-form reveal" id="contactForm"><div class="form-grid"><label>Name<input required type="text" placeholder="Full name"></label><label>Email<input required type="email" placeholder="name@example.com"></label><label>Topic<select><option>Admissions Office</option><option>International Office</option><option>Hostel Office</option><option>Research</option><option>General Inquiry</option></select></label><label>Phone<input type="tel" placeholder="+998 ..."></label></div><label>Message<textarea required rows="5" placeholder="Write your question"></textarea></label><button class="btn btn--primary" type="submit">Send Inquiry</button></form></div></section>
    <section class="section" id="offices"><div class="container grid grid-4" data-stagger>${['Emergency Contacts','Admissions Office','International Office','Hostel Office','Social Media','Registrar Office','Research Office','Student Affairs'].map(x=>featureCard(x,'Phone, email and office support details available through contact center','phone')).join('')}</div></section>
    <section class="section section--navy" id="hours"><div class="container grid grid-2"><div><span class="eyebrow">Office Hours</span><h2>Monday – Friday, 09:00 – 18:00</h2><p>Emergency and hostel duty support can be coordinated outside standard hours.</p></div><div class="info-panel"><h3>Contact Center</h3><p>Email: admissions@chirchik-tsmu.uz<br>Phone: +998 71 123 45 67<br>WhatsApp: +998 71 123 45 67</p></div></div></section>`);
}

function officeContacts() {
  return [
    `<div class="contact-card">${icon('mail')}<div><h3>Admissions Office</h3><p>admissions@chirchik-tsmu.uz<br>+998 71 123 45 67</p></div></div>`,
    `<div class="contact-card">${icon('globe')}<div><h3>International Office</h3><p>international@chirchik-tsmu.uz<br>Visa, invitation and arrival support</p></div></div>`,
    `<div class="contact-card">${icon('bed')}<div><h3>Hostel Office</h3><p>hostel@chirchik-tsmu.uz<br>Accommodation and welfare</p></div></div>`
  ];
}

const routes = {
  home: renderHome,
  about: renderAbout,
  administration: renderAdministration,
  academics: renderAcademics,
  faculties: renderFaculties,
  departments: renderDepartments,
  admissions: renderAdmissions,
  international: renderInternational,
  hostel: renderHostel,
  research: renderResearch,
  news: renderNews,
  events: renderEvents,
  gallery: renderGallery,
  'student-life': renderStudentLife,
  careers: renderCareers,
  alumni: renderAlumni,
  contact: renderContact
};

function getCmsNews() {
  try { return JSON.parse(localStorage.getItem('tsmu-cms-news') || '[]'); } catch { return []; }
}
function getNews() {
  return [...getCmsNews(), ...baseNews].sort((a,b) => new Date(b.date) - new Date(a.date));
}
function slug(str) { return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }

function renderRoute() {
  const route = (location.hash || '#home').slice(1).split('?')[0] || 'home';
  const renderer = routes[route] || routes.home;
  $('#main').innerHTML = renderer();
  document.title = `${(pageInfo[route] && pageInfo[route][0]) || 'Home'} | TSMU – Chirchik Branch`;
  $$('#primaryMenu [data-route]').forEach(a => a.classList.toggle('active', a.dataset.route === route));
  applyTranslations();
  setupPageInteractions();
  $('#main').focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupPageInteractions() {
  setupReveal();
  setupCounters();
  setupAccordions();
  setupTestimonials();
  setupNewsFilters();
  setupGalleryFilters();
  $$('[data-scroll-target]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.scrollTarget);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  const contactForm = $('#contactForm');
  if (contactForm) contactForm.addEventListener('submit', e => { e.preventDefault(); showToast('Thank you. Your inquiry has been received in this demo.'); contactForm.reset(); });
  const cmsInline = $('#cmsOpenInline');
  if (cmsInline) cmsInline.addEventListener('click', () => openModal('#cmsModal'));
}

function setupReveal() {
  const items = $$('.reveal, [data-stagger]');
  if (!items.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); } });
  }, { threshold: 0.12 });
  items.forEach(item => io.observe(item));
}
function setupCounters() {
  const counters = $$('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const duration = 1200;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3))).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
}
function setupAccordions() {
  $$('.accordion-trigger').forEach(btn => btn.addEventListener('click', () => btn.closest('.accordion-item').classList.toggle('open')));
  const first = $('.accordion-item');
  if (first) first.classList.add('open');
}
function setupTestimonials() {
  const card = $('#testimonialCard');
  if (!card) { clearInterval(testimonialTimer); return; }
  const draw = () => {
    const [name, role, quote, initials] = testimonials[testimonialIndex];
    card.innerHTML = `<div><div class="quote-mark">“</div><h2>${quote}</h2></div><div><div class="testimonial-author"><div class="avatar">${initials}</div><div><strong>${name}</strong><p>${role}</p></div></div><div class="slider-controls">${testimonials.map((_, i) => `<button class="slider-dot ${i === testimonialIndex ? 'active' : ''}" type="button" aria-label="Show testimonial ${i+1}" data-testimonial="${i}"></button>`).join('')}</div></div>`;
    $$('[data-testimonial]', card).forEach(dot => dot.addEventListener('click', () => { testimonialIndex = Number(dot.dataset.testimonial); draw(); resetTimer(); }));
  };
  const resetTimer = () => { clearInterval(testimonialTimer); testimonialTimer = setInterval(() => { testimonialIndex = (testimonialIndex + 1) % testimonials.length; draw(); }, 6000); };
  draw(); resetTimer();
}
function setupNewsFilters() {
  const grid = $('#newsGrid');
  if (!grid) return;
  const buttons = $$('[data-news-filter]');
  const input = $('#newsSearch');
  let filter = 'All';
  const draw = () => {
    const q = (input?.value || '').toLowerCase();
    const items = getNews().filter(n => (filter === 'All' || n.category === filter) && (`${n.title} ${n.summary} ${n.category}`.toLowerCase().includes(q)));
    grid.innerHTML = items.length ? items.map((n,i)=>newsCard(n,i===0)).join('') : '<div class="info-panel"><h3>No news found</h3><p>Try another category or keyword.</p></div>';
  };
  buttons.forEach(btn => btn.addEventListener('click', () => { filter = btn.dataset.newsFilter; buttons.forEach(b => b.classList.toggle('active', b === btn)); draw(); }));
  if (input) input.addEventListener('input', draw);
}
function setupGalleryFilters() {
  const grid = $('#galleryGrid');
  if (!grid) return;
  const buttons = $$('[data-gallery-filter]');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    const filter = btn.dataset.galleryFilter;
    buttons.forEach(b => b.classList.toggle('active', b === btn));
    $$('[data-gallery-category]', grid).forEach(card => card.style.display = filter === 'All' || card.dataset.galleryCategory === filter ? '' : 'none');
  }));
}

function openModal(selector) {
  const modal = $(selector);
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  setTimeout(() => $('input, select, textarea, button', modal)?.focus(), 60);
}
function closeModals() {
  $$('.modal.is-open').forEach(modal => { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); });
  document.body.classList.remove('modal-open');
}
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 3500);
}

function downloadBrochure() {
  const content = `Tashkent State Medical University – Chirchik Branch\n\nPrograms: General Medicine (MBBS), Dentistry, Pharmacy, Nursing.\nAdmissions: Online application, document verification, admission letter, visa processing, travel assistance, arrival and orientation.\nSupport: International Office, hostel, airport pickup, student welfare, research opportunities.\nContact: admissions@chirchik-tsmu.uz | +998 71 123 45 67`;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'TSMU-Chirchik-Brochure.txt'; a.click();
  URL.revokeObjectURL(url);
  showToast('Brochure download started. Replace demo text with official PDF in production.');
}

function buildSearchIndex() {
  const pages = Object.entries(pageInfo).map(([route, [title, subtitle]]) => ({ route, title, text: subtitle }));
  return [
    { route: 'home', title: 'Home', text: 'Become the Doctor the World Needs medical students campus hospital laboratories graduation about statistics programs admission facilities international research student life testimonials FAQ' },
    ...pages,
    ...programs.map(([title, text]) => ({ route: 'faculties', title, text })),
    ...faculties.map(f => ({ route: 'faculties', title: f.name, text: `${f.dean} ${f.mission} ${f.departments.join(' ')} ${f.research}` })),
    ...departments.map(([title, head, teaching, research]) => ({ route: 'departments', title, text: `${head} ${teaching} ${research}` })),
    ...getNews().map(n => ({ route: 'news', title: n.title, text: `${n.category} ${n.summary}` })),
    ...events.map(e => ({ route: 'events', title: e.title, text: `${e.type} ${e.date}` }))
  ];
}
function runSearch(query) {
  const results = $('#searchResults');
  const q = query.trim().toLowerCase();
  if (!q) { results.innerHTML = '<p>Type a keyword to search the website.</p>'; return; }
  const found = buildSearchIndex().filter(item => `${item.title} ${item.text}`.toLowerCase().includes(q)).slice(0, 10);
  results.innerHTML = found.length ? found.map(item => `<a class="search-result" href="#${item.route}" data-route="${item.route}"><strong>${item.title}</strong><span>${item.text.slice(0, 140)}...</span></a>`).join('') : '<p>No results found. Try admissions, hostel, visa, research or MBBS.</p>';
}

function chatReply(text) {
  const q = text.toLowerCase();
  if (/document|passport|certificate|transcript/.test(q)) return 'Required documents usually include passport copy, academic certificates/transcripts, passport photo, application form, and medical certificate where applicable.';
  if (/visa|invitation|letter/.test(q)) return 'After admission confirmation, the International Office supports invitation letter and visa guidance. Keep your passport and verified documents ready.';
  if (/hostel|accommodation|room/.test(q)) return 'Hostel support is available subject to capacity. Rooms include shared options, study areas, dining, security and student welfare support.';
  if (/fee|tuition|cost|scholarship/.test(q)) return 'Tuition is program-based and confirmed by the Admissions Office. Merit support or scholarships may be available according to university policy.';
  if (/program|mbbs|medicine|dentistry|pharmacy|nursing/.test(q)) return 'Available programs are General Medicine (MBBS), Dentistry, Pharmacy and Nursing, with clinical training and modern laboratories.';
  if (/airport|arrival|orientation|pickup/.test(q)) return 'Confirmed international students can receive airport pickup coordination, hostel check-in guidance and orientation support.';
  return 'I can help with admissions, documents, visa, hostel, fees, programs and arrival support. You can also submit the online application for personalized guidance.';
}
function addChatMessage(text, type) {
  const box = $('#chatMessages');
  const msg = document.createElement('div');
  msg.className = `message message--${type}`;
  msg.textContent = text;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}

function initGlobal() {
  applyTranslations();

  const dark = localStorage.getItem('tsmu-dark') === 'true';
  document.body.classList.toggle('dark', dark);
  $('#themeToggle')?.setAttribute('aria-pressed', String(dark));

  document.addEventListener('click', e => {
    const routeLink = e.target.closest('[data-route]');
    if (routeLink) {
      e.preventDefault();
      document.body.classList.remove('nav-open');
      $('.nav-toggle')?.setAttribute('aria-expanded', 'false');
      location.hash = routeLink.dataset.route;
      closeModals();
      return;
    }
    if (e.target.closest('[data-open-apply]')) { openModal('#applyModal'); return; }
    const portal = e.target.closest('[data-open-portal]');
    if (portal) { $('#portalTitle').textContent = portal.dataset.openPortal === 'faculty' ? 'Faculty Portal Login' : 'Student Portal Login'; openModal('#portalModal'); return; }
    if (e.target.closest('[data-close-modal]')) closeModals();
    if (e.target.closest('[data-download-brochure]')) downloadBrochure();
  });

  $('.nav-toggle')?.addEventListener('click', () => {
    const open = !document.body.classList.contains('nav-open');
    document.body.classList.toggle('nav-open', open);
    $('.nav-toggle').setAttribute('aria-expanded', String(open));
  });
  $('#themeToggle')?.addEventListener('click', () => {
    const next = !document.body.classList.contains('dark');
    document.body.classList.toggle('dark', next);
    localStorage.setItem('tsmu-dark', String(next));
    $('#themeToggle').setAttribute('aria-pressed', String(next));
  });
  $('#languageSelect')?.addEventListener('change', e => {
    currentLang = e.target.value;
    localStorage.setItem('tsmu-lang', currentLang);
    renderRoute();
  });

  $('#searchOpen')?.addEventListener('click', () => { openModal('#searchModal'); setTimeout(() => $('#globalSearch')?.focus(), 80); runSearch(''); });
  $('#globalSearch')?.addEventListener('input', e => runSearch(e.target.value));
  $('#cmsOpen')?.addEventListener('click', () => openModal('#cmsModal'));
  $('#chatOpen')?.addEventListener('click', () => { $('#chatbot').classList.add('is-open'); $('#chatbot').setAttribute('aria-hidden','false'); $('#chatInput').focus(); });
  $('#chatClose')?.addEventListener('click', () => { $('#chatbot').classList.remove('is-open'); $('#chatbot').setAttribute('aria-hidden','true'); });
  $('#backToTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  $('#applicationForm')?.addEventListener('submit', e => { e.preventDefault(); showToast('Application submitted in demo mode. Connect a secure backend for production.'); e.target.reset(); closeModals(); });
  $('#portalForm')?.addEventListener('submit', e => { e.preventDefault(); showToast('Demo portal login. Connect SSO/LMS for production.'); });
  $('#newsletterForm')?.addEventListener('submit', e => { e.preventDefault(); showToast('Thank you for subscribing.'); e.target.reset(); });
  $('#cmsForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const item = { title: fd.get('title'), category: fd.get('category'), date: fd.get('date'), featured: fd.get('featured') === 'Yes', summary: fd.get('summary') };
    const existing = getCmsNews(); existing.unshift(item);
    localStorage.setItem('tsmu-cms-news', JSON.stringify(existing.slice(0, 20)));
    showToast('News item published in local demo CMS.');
    e.target.reset(); closeModals();
    if ((location.hash || '').includes('news')) renderRoute();
  });
  $('#chatForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const input = $('#chatInput');
    const value = input.value.trim();
    if (!value) return;
    addChatMessage(value, 'user');
    input.value = '';
    setTimeout(() => addChatMessage(chatReply(value), 'bot'), 450);
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModals(); document.body.classList.remove('nav-open'); } });
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 18;
    $('#siteHeader')?.classList.toggle('is-scrolled', scrolled);
    $('#backToTop')?.classList.toggle('is-visible', window.scrollY > 650);
    const motion = $('.hero__motion');
    if (motion && window.scrollY < window.innerHeight) motion.style.transform = `translateY(${window.scrollY * 0.18}px)`;
  }, { passive: true });
}

window.addEventListener('hashchange', renderRoute);
window.addEventListener('DOMContentLoaded', () => { initGlobal(); renderRoute(); });
