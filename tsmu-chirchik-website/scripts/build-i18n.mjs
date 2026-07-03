import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(SCRIPT_DIR, "..");
const LOCALES_DIR = path.join(SITE_ROOT, "locales");
const BASE_URL = "https://chirchik-tsmu.uz";
const LOCALE_CODES = ["en", "ru", "uz", "ar", "tk", "tg", "ky"];

const BASE_STRINGS = {
  "Home": "Home",
  "About": "About",
  "About the University": "About the University",
  "Mission": "Mission",
  "Structure": "Structure",
  "Administration": "Administration",
  "Director": "Director",
  "Departments": "Departments",
  "Centers and Organizations": "Centers and Organizations",
  "Quality Assurance": "Quality Assurance",
  "Academics": "Academics",
  "Academics Overview": "Academics Overview",
  "Educational Sections": "Educational Sections",
  "Information Resource Center": "Information Resource Center",
  "Information Resource Center and Digital Library": "Information Resource Center and Digital Library",
  "E-Learning": "E-Learning",
  "Downloads": "Downloads",
  "Downloads and Forms": "Downloads and Forms",
  "Faculties": "Faculties",
  "All Faculties": "All Faculties",
  "General Medicine": "General Medicine",
  "Medical Pediatrics": "Medical Pediatrics",
  "Pharmacy": "Pharmacy",
  "Psychology": "Psychology",
  "Clinical Practice": "Clinical Practice",
  "Clinical Practice and Partner Hospitals": "Clinical Practice and Partner Hospitals",
  "Simulation Center": "Simulation Center",
  "Research": "Research",
  "Research and Innovation": "Research and Innovation",
  "Publications": "Publications",
  "Admissions": "Admissions",
  "Apply": "Apply",
  "Apply Online": "Apply Online",
  "Online Application Portal": "Online Application Portal",
  "Entrant Guide": "Entrant Guide",
  "Entrant Information": "Entrant Information",
  "Scholarships": "Scholarships",
  "Scholarships and Financial Support": "Scholarships and Financial Support",
  "Parents Guide": "Parents Guide",
  "FAQ": "FAQ",
  "Frequently Asked Questions": "Frequently Asked Questions",
  "International": "International",
  "International Students": "International Students",
  "International Department": "International Department",
  "International Relations": "International Relations",
  "Visa Invitation": "Visa Invitation",
  "Visa and Invitation Letter Support": "Visa and Invitation Letter Support",
  "Health Insurance": "Health Insurance",
  "Health Insurance and Medical Support": "Health Insurance and Medical Support",
  "Hostel": "Hostel",
  "Hostel and Accommodation": "Hostel and Accommodation",
  "Living in Uzbekistan": "Living in Uzbekistan",
  "Emergency and Safety": "Emergency and Safety",
  "Student Safety and Emergency Support": "Student Safety and Emergency Support",
  "Campus Tour": "Campus Tour",
  "Campus Tour and Virtual Tour": "Campus Tour and Virtual Tour",
  "Students": "Students",
  "Student Life": "Student Life",
  "Student Life and Services": "Student Life and Services",
  "Student Portal": "Student Portal",
  "Student Council": "Student Council",
  "Student Council and Clubs": "Student Council and Clubs",
  "Alumni": "Alumni",
  "Alumni Network": "Alumni Network",
  "Careers": "Careers",
  "Careers and Recruitment": "Careers and Recruitment",
  "News": "News",
  "Announcements": "Announcements",
  "Announcements and Official Notices": "Announcements and Official Notices",
  "Events": "Events",
  "Events and Academic Calendar": "Events and Academic Calendar",
  "Press Service": "Press Service",
  "Press Service and Media Center": "Press Service and Media Center",
  "Activity": "Activity",
  "University Activity": "University Activity",
  "Gallery": "Gallery",
  "Community Outreach": "Community Outreach",
  "Contact": "Contact",
  "Registrar Office": "Registrar Office",
  "Faculty Portal": "Faculty Portal",
  "Official Website": "Official Website",
  "Page Not Found": "Page Not Found",
  "Language": "Language",
  "Primary navigation": "Primary navigation",
  "Open navigation": "Open navigation",
  "Apply Now": "Apply Now",
  "Contact Center": "Contact Center",
  "How can we help you?": "How can we help you?",
  "Send Inquiry": "Send Inquiry",
  "Office Directory": "Office Directory",
  "Working hours.": "Working hours.",
  "Before you contact us.": "Before you contact us.",
  "Stay connected with the university.": "Stay connected with the university.",
  "Become the Doctor the World Needs": "Become the Doctor the World Needs",
  "Explore Faculties": "Explore Faculties",
  "Start Application": "Start Application",
  "Latest university updates.": "Latest university updates.",
  "Start your journey at TSMU Chirchik Branch.": "Start your journey at TSMU Chirchik Branch.",
  "Admissions, international support and campus inquiries.": "Admissions, international support and campus inquiries.",
  "Send your question.": "Send your question.",
  "Emergency contacts for students.": "Emergency contacts for students.",
  "University Offices": "University Offices",
  "Partner hospitals for student clinical practice.": "Partner hospitals for student clinical practice.",
  "Inquiry Form": "Inquiry Form",
  "Back to homepage": "Back to homepage",
  "Newsletter": "Newsletter",
  "Join": "Join",
  "Email address": "Email address",
  "Accessibility": "Accessibility",
  "Accessibility Statement": "Accessibility Statement",
  "Privacy Policy and Data Protection": "Privacy Policy and Data Protection",
  "Terms of Use and Website Policy": "Terms of Use and Website Policy",
  "Search and University Directory": "Search and University Directory",
  "AI Admission Assistant": "AI Admission Assistant",
  "Tashkent State Medical University": "Tashkent State Medical University",
  "Chirchik Branch": "Chirchik Branch",
  "TSMU Chirchik Branch": "TSMU Chirchik Branch",
  "Tashkent State Medical University Chirchik Branch logo": "Tashkent State Medical University Chirchik Branch logo",
  "Tashkent State Medical University Chirchik Branch home": "Tashkent State Medical University Chirchik Branch home",
  "Medical education for global impact": "Medical education for global impact"
};

const LOCALE_DEFS = {
  en: {
    nativeName: "English",
    direction: "ltr",
    site: {
      fullName: "Tashkent State Medical University",
      branchName: "Chirchik Branch",
      shortName: "TSMU Chirchik"
    },
    ui: {
      languageLabel: "Language",
      selectorAriaLabel: "Select website language"
    },
    seo: {
      ogLocale: "en_US",
      homeTitle: "Official Website | {{site}}",
      homeDescription: "Official website of {{site}}. Explore medical education, admissions, clinical training, research, international student support, and campus life in Chirchik, Uzbekistan.",
      titleTemplate: "{{page}} | {{site}}",
      pageDescriptionTemplate: "Official {{page}} page of {{site}}. Explore medical education, admissions, research, clinical practice, international student services, and campus life in Chirchik, Uzbekistan."
    },
    strings: {}
  },
  ru: {
    nativeName: "Русский",
    direction: "ltr",
    site: {
      fullName: "Ташкентский государственный медицинский университет",
      branchName: "Чирчикский филиал",
      shortName: "ТСМУ Чирчик"
    },
    ui: {
      languageLabel: "Язык",
      selectorAriaLabel: "Выберите язык сайта"
    },
    seo: {
      ogLocale: "ru_RU",
      homeTitle: "Официальный сайт | {{site}}",
      homeDescription: "Официальный сайт {{site}}. Изучайте медицинское образование, прием, клиническую подготовку, исследования, поддержку иностранных студентов и жизнь кампуса в Чирчике, Узбекистан.",
      titleTemplate: "{{page}} | {{site}}",
      pageDescriptionTemplate: "Официальная страница «{{page}}» университета {{site}}. Изучайте медицинское образование, прием, исследования, клиническую практику, поддержку иностранных студентов и жизнь кампуса в Чирчике, Узбекистан."
    },
    strings: {
      "Home": "Главная",
      "About": "О нас",
      "About the University": "Об университете",
      "Mission": "Миссия",
      "Structure": "Структура",
      "Administration": "Администрация",
      "Director": "Директор",
      "Departments": "Кафедры",
      "Centers and Organizations": "Центры и организации",
      "Quality Assurance": "Обеспечение качества",
      "Academics": "Академическая деятельность",
      "Educational Sections": "Учебные разделы",
      "Information Resource Center": "Информационно-ресурсный центр",
      "Information Resource Center and Digital Library": "Информационно-ресурсный центр и цифровая библиотека",
      "E-Learning": "Электронное обучение",
      "Downloads": "Загрузки",
      "Downloads and Forms": "Загрузки и формы",
      "Faculties": "Факультеты",
      "All Faculties": "Все факультеты",
      "General Medicine": "Общая медицина",
      "Medical Pediatrics": "Медицинская педиатрия",
      "Pharmacy": "Фармация",
      "Psychology": "Психология",
      "Clinical Practice": "Клиническая практика",
      "Clinical Practice and Partner Hospitals": "Клиническая практика и партнерские больницы",
      "Simulation Center": "Симуляционный центр",
      "Research": "Исследования",
      "Research and Innovation": "Исследования и инновации",
      "Publications": "Публикации",
      "Admissions": "Прием",
      "Apply": "Подать заявку",
      "Apply Online": "Подать заявку онлайн",
      "Online Application Portal": "Онлайн-портал подачи заявлений",
      "Entrant Guide": "Путеводитель абитуриента",
      "Entrant Information": "Информация для абитуриентов",
      "Scholarships": "Стипендии",
      "Scholarships and Financial Support": "Стипендии и финансовая поддержка",
      "Parents Guide": "Путеводитель для родителей",
      "FAQ": "FAQ",
      "Frequently Asked Questions": "Часто задаваемые вопросы",
      "International": "Международное направление",
      "International Students": "Иностранные студенты",
      "International Department": "Международный отдел",
      "International Relations": "Международные связи",
      "Visa Invitation": "Визовое приглашение",
      "Visa and Invitation Letter Support": "Визовая поддержка и приглашения",
      "Health Insurance": "Медицинская страховка",
      "Health Insurance and Medical Support": "Медицинская страховка и поддержка",
      "Hostel": "Общежитие",
      "Hostel and Accommodation": "Общежитие и проживание",
      "Living in Uzbekistan": "Жизнь в Узбекистане",
      "Emergency and Safety": "Безопасность и экстренная помощь",
      "Student Safety and Emergency Support": "Безопасность студентов и экстренная поддержка",
      "Campus Tour": "Тур по кампусу",
      "Campus Tour and Virtual Tour": "Тур по кампусу и виртуальный тур",
      "Students": "Студентам",
      "Student Life": "Студенческая жизнь",
      "Student Life and Services": "Студенческая жизнь и сервисы",
      "Student Portal": "Студенческий портал",
      "Student Council": "Студенческий совет",
      "Student Council and Clubs": "Студенческий совет и клубы",
      "Alumni": "Выпускники",
      "Alumni Network": "Сеть выпускников",
      "Careers": "Карьера",
      "Careers and Recruitment": "Карьера и набор",
      "News": "Новости",
      "Announcements": "Объявления",
      "Announcements and Official Notices": "Объявления и официальные уведомления",
      "Events": "События",
      "Events and Academic Calendar": "События и академический календарь",
      "Press Service": "Пресс-служба",
      "Press Service and Media Center": "Пресс-служба и медиацентр",
      "Activity": "Деятельность",
      "University Activity": "Деятельность университета",
      "Gallery": "Галерея",
      "Community Outreach": "Общественная работа",
      "Contact": "Контакты",
      "Registrar Office": "Регистратура",
      "Faculty Portal": "Портал преподавателя",
      "Official Website": "Официальный сайт",
      "Page Not Found": "Страница не найдена",
      "Language": "Язык",
      "Primary navigation": "Основная навигация",
      "Open navigation": "Открыть навигацию",
      "Apply Now": "Подать заявку",
      "Contact Center": "Контактный центр",
      "How can we help you?": "Чем мы можем помочь?",
      "Send Inquiry": "Отправить запрос",
      "Office Directory": "Справочник офисов",
      "Working hours.": "Часы работы.",
      "Before you contact us.": "Перед тем как связаться с нами.",
      "Stay connected with the university.": "Оставайтесь на связи с университетом.",
      "Become the Doctor the World Needs": "Станьте врачом, который нужен миру",
      "Explore Faculties": "Изучить факультеты",
      "Start Application": "Начать подачу",
      "Latest university updates.": "Последние обновления университета.",
      "Start your journey at TSMU Chirchik Branch.": "Начните свой путь в Чирчикском филиале ТГМУ.",
      "Admissions, international support and campus inquiries.": "Прием, международная поддержка и вопросы о кампусе.",
      "Send your question.": "Отправьте свой вопрос.",
      "Emergency contacts for students.": "Экстренные контакты для студентов.",
      "University Offices": "Офисы университета",
      "Partner hospitals for student clinical practice.": "Партнерские больницы для клинической практики студентов.",
      "Inquiry Form": "Форма запроса",
      "Back to homepage": "Вернуться на главную",
      "Newsletter": "Рассылка",
      "Join": "Подписаться",
      "Email address": "Адрес электронной почты",
      "Accessibility": "Доступность",
      "Accessibility Statement": "Заявление о доступности",
      "Privacy Policy and Data Protection": "Политика конфиденциальности и защита данных",
      "Terms of Use and Website Policy": "Условия использования и политика сайта",
      "Search and University Directory": "Поиск и справочник университета",
      "AI Admission Assistant": "ИИ-помощник по поступлению",
      "Tashkent State Medical University": "Ташкентский государственный медицинский университет",
      "Chirchik Branch": "Чирчикский филиал",
      "TSMU Chirchik Branch": "ТСМУ Чирчик",
      "Tashkent State Medical University Chirchik Branch logo": "Логотип Чирчикского филиала Ташкентского государственного медицинского университета",
      "Tashkent State Medical University Chirchik Branch home": "Главная страница Чирчикского филиала Ташкентского государственного медицинского университета",
      "Medical education for global impact": "Медицинское образование для глобального влияния"
    }
  },
  uz: {
    nativeName: "O'zbekcha",
    direction: "ltr",
    site: {
      fullName: "Toshkent davlat tibbiyot universiteti",
      branchName: "Chirchiq filiali",
      shortName: "TDTU Chirchiq"
    },
    ui: {
      languageLabel: "Til",
      selectorAriaLabel: "Sayt tilini tanlang"
    },
    seo: {
      ogLocale: "uz_UZ",
      homeTitle: "Rasmiy veb-sayt | {{site}}",
      homeDescription: "{{site}} rasmiy veb-sayti. Tibbiy ta'lim, qabul, klinik tayyorgarlik, tadqiqotlar, xalqaro talabalar yordami va Chirchiqdagi kampus hayoti haqida bilib oling.",
      titleTemplate: "{{page}} | {{site}}",
      pageDescriptionTemplate: "{{site}}ning \"{{page}}\" sahifasi. Tibbiy ta'lim, qabul, tadqiqotlar, klinik amaliyot, xalqaro talabalar xizmati va Chirchiqdagi kampus hayoti haqida bilib oling."
    },
    strings: {
      "Home": "Bosh sahifa",
      "About": "Universitet haqida",
      "About the University": "Universitet haqida",
      "Mission": "Missiya",
      "Structure": "Tuzilma",
      "Administration": "Ma'muriyat",
      "Director": "Direktor",
      "Departments": "Kafedralar",
      "Centers and Organizations": "Markazlar va tashkilotlar",
      "Quality Assurance": "Sifat ta'minoti",
      "Academics": "Akademik faoliyat",
      "Educational Sections": "Ta'lim bo'limlari",
      "Information Resource Center": "Axborot-resurs markazi",
      "Information Resource Center and Digital Library": "Axborot-resurs markazi va raqamli kutubxona",
      "E-Learning": "Elektron ta'lim",
      "Downloads": "Yuklamalar",
      "Downloads and Forms": "Yuklamalar va shakllar",
      "Faculties": "Fakultetlar",
      "All Faculties": "Barcha fakultetlar",
      "General Medicine": "Davolash ishi",
      "Medical Pediatrics": "Tibbiy pediatriya",
      "Pharmacy": "Farmatsiya",
      "Psychology": "Psixologiya",
      "Clinical Practice": "Klinik amaliyot",
      "Clinical Practice and Partner Hospitals": "Klinik amaliyot va hamkor shifoxonalar",
      "Simulation Center": "Simulyatsiya markazi",
      "Research": "Tadqiqot",
      "Research and Innovation": "Tadqiqot va innovatsiya",
      "Publications": "Nashrlar",
      "Admissions": "Qabul",
      "Apply": "Ariza topshirish",
      "Apply Online": "Onlayn ariza",
      "Online Application Portal": "Onlayn ariza portali",
      "Entrant Guide": "Abituriyent yo'riqnomasi",
      "Entrant Information": "Abituriyentlar uchun ma'lumot",
      "Scholarships": "Stipendiyalar",
      "Scholarships and Financial Support": "Stipendiyalar va moliyaviy yordam",
      "Parents Guide": "Ota-onalar uchun qo'llanma",
      "FAQ": "Ko'p so'raladigan savollar",
      "Frequently Asked Questions": "Ko'p so'raladigan savollar",
      "International": "Xalqaro",
      "International Students": "Xalqaro talabalar",
      "International Department": "Xalqaro bo'lim",
      "International Relations": "Xalqaro aloqalar",
      "Visa Invitation": "Viza taklifnomasi",
      "Visa and Invitation Letter Support": "Viza va taklifnoma bo'yicha yordam",
      "Health Insurance": "Tibbiy sug'urta",
      "Health Insurance and Medical Support": "Tibbiy sug'urta va tibbiy yordam",
      "Hostel": "Yotoqxona",
      "Hostel and Accommodation": "Yotoqxona va turar joy",
      "Living in Uzbekistan": "O'zbekistonda yashash",
      "Emergency and Safety": "Favqulodda holat va xavfsizlik",
      "Student Safety and Emergency Support": "Talabalar xavfsizligi va favqulodda yordam",
      "Campus Tour": "Kampus bo'ylab sayohat",
      "Campus Tour and Virtual Tour": "Kampus bo'ylab va virtual sayohat",
      "Students": "Talabalar",
      "Student Life": "Talabalar hayoti",
      "Student Life and Services": "Talabalar hayoti va xizmatlar",
      "Student Portal": "Talabalar portali",
      "Student Council": "Talabalar kengashi",
      "Student Council and Clubs": "Talabalar kengashi va klublar",
      "Alumni": "Bitiruvchilar",
      "Alumni Network": "Bitiruvchilar tarmog'i",
      "Careers": "Karyera",
      "Careers and Recruitment": "Karyera va ishga qabul",
      "News": "Yangiliklar",
      "Announcements": "E'lonlar",
      "Announcements and Official Notices": "E'lonlar va rasmiy xabarlar",
      "Events": "Tadbirlar",
      "Events and Academic Calendar": "Tadbirlar va akademik kalendar",
      "Press Service": "Matbuot xizmati",
      "Press Service and Media Center": "Matbuot xizmati va media markaz",
      "Activity": "Faoliyat",
      "University Activity": "Universitet faoliyati",
      "Gallery": "Galereya",
      "Community Outreach": "Jamoatchilik bilan ishlash",
      "Contact": "Bog'lanish",
      "Registrar Office": "Registrar ofisi",
      "Faculty Portal": "Professor-o'qituvchilar portali",
      "Official Website": "Rasmiy veb-sayt",
      "Page Not Found": "Sahifa topilmadi",
      "Language": "Til",
      "Primary navigation": "Asosiy navigatsiya",
      "Open navigation": "Navigatsiyani ochish",
      "Apply Now": "Hozir ariza topshiring",
      "Contact Center": "Aloqa markazi",
      "How can we help you?": "Sizga qanday yordam bera olamiz?",
      "Send Inquiry": "So'rov yuborish",
      "Office Directory": "Bo'limlar katalogi",
      "Working hours.": "Ish vaqti.",
      "Before you contact us.": "Biz bilan bog'lanishdan oldin.",
      "Stay connected with the university.": "Universitet bilan aloqada bo'ling.",
      "Become the Doctor the World Needs": "Dunyo ehtiyoj sezayotgan shifokorga aylaning",
      "Explore Faculties": "Fakultetlarni ko'rish",
      "Start Application": "Arizani boshlash",
      "Latest university updates.": "Universitetning so'nggi yangiliklari.",
      "Start your journey at TSMU Chirchik Branch.": "TDTU Chirchiq filialida o'z yo'lingizni boshlang.",
      "Admissions, international support and campus inquiries.": "Qabul, xalqaro yordam va kampus bo'yicha murojaatlar.",
      "Send your question.": "Savolingizni yuboring.",
      "Emergency contacts for students.": "Talabalar uchun favqulodda aloqa ma'lumotlari.",
      "University Offices": "Universitet bo'limlari",
      "Partner hospitals for student clinical practice.": "Talabalar klinik amaliyoti uchun hamkor shifoxonalar.",
      "Inquiry Form": "Murojaat formasi",
      "Back to homepage": "Bosh sahifaga qaytish",
      "Newsletter": "Yangiliklar xabarnomasi",
      "Join": "Qo'shilish",
      "Email address": "Elektron pochta manzili",
      "Accessibility": "Moslashuvchanlik",
      "Accessibility Statement": "Moslashuvchanlik bayonoti",
      "Privacy Policy and Data Protection": "Maxfiylik siyosati va ma'lumotlarni himoya qilish",
      "Terms of Use and Website Policy": "Foydalanish shartlari va sayt siyosati",
      "Search and University Directory": "Qidiruv va universitet ma'lumotnomasi",
      "AI Admission Assistant": "Sun'iy intellekt qabul yordamchisi",
      "Tashkent State Medical University": "Toshkent davlat tibbiyot universiteti",
      "Chirchik Branch": "Chirchiq filiali",
      "TSMU Chirchik Branch": "TDTU Chirchiq",
      "Tashkent State Medical University Chirchik Branch logo": "Toshkent davlat tibbiyot universiteti Chirchiq filiali logotipi",
      "Tashkent State Medical University Chirchik Branch home": "Toshkent davlat tibbiyot universiteti Chirchiq filiali bosh sahifasi",
      "Medical education for global impact": "Global ta'sir uchun tibbiy ta'lim"
    }
  },
  ar: {
    nativeName: "العربية",
    direction: "rtl",
    site: {
      fullName: "جامعة طشقند الحكومية الطبية",
      branchName: "فرع تشيرتشيك",
      shortName: "جامعة طشقند الطبية تشيرتشيك"
    },
    ui: {
      languageLabel: "اللغة",
      selectorAriaLabel: "اختر لغة الموقع"
    },
    seo: {
      ogLocale: "ar_AR",
      homeTitle: "الموقع الرسمي | {{site}}",
      homeDescription: "الموقع الرسمي لـ {{site}}. استكشف التعليم الطبي، القبول، التدريب السريري، البحث العلمي، دعم الطلاب الدوليين، والحياة الجامعية في تشيرتشيك بأوزبكستان.",
      titleTemplate: "{{page}} | {{site}}",
      pageDescriptionTemplate: "الصفحة الرسمية \"{{page}}\" في {{site}}. استكشف التعليم الطبي، القبول، البحث، التدريب السريري، خدمات الطلاب الدوليين، والحياة الجامعية في تشيرتشيك بأوزبكستان."
    },
    strings: {
      "Home": "الرئيسية",
      "About": "عن الجامعة",
      "About the University": "عن الجامعة",
      "Mission": "الرسالة",
      "Structure": "الهيكل",
      "Administration": "الإدارة",
      "Director": "المدير",
      "Departments": "الأقسام",
      "Centers and Organizations": "المراكز والمنظمات",
      "Quality Assurance": "ضمان الجودة",
      "Academics": "الشؤون الأكاديمية",
      "Educational Sections": "الأقسام التعليمية",
      "Information Resource Center": "مركز الموارد المعلوماتية",
      "Information Resource Center and Digital Library": "مركز الموارد المعلوماتية والمكتبة الرقمية",
      "E-Learning": "التعلم الإلكتروني",
      "Downloads": "التنزيلات",
      "Downloads and Forms": "التنزيلات والنماذج",
      "Faculties": "الكليات",
      "All Faculties": "جميع الكليات",
      "General Medicine": "الطب العام",
      "Medical Pediatrics": "طب الأطفال الطبي",
      "Pharmacy": "الصيدلة",
      "Psychology": "علم النفس",
      "Clinical Practice": "التدريب السريري",
      "Clinical Practice and Partner Hospitals": "التدريب السريري والمستشفيات الشريكة",
      "Simulation Center": "مركز المحاكاة",
      "Research": "البحث العلمي",
      "Research and Innovation": "البحث والابتكار",
      "Publications": "المنشورات",
      "Admissions": "القبول",
      "Apply": "التقديم",
      "Apply Online": "التقديم عبر الإنترنت",
      "Online Application Portal": "بوابة التقديم الإلكترونية",
      "Entrant Guide": "دليل المتقدم",
      "Entrant Information": "معلومات المتقدمين",
      "Scholarships": "المنح الدراسية",
      "Scholarships and Financial Support": "المنح والدعم المالي",
      "Parents Guide": "دليل أولياء الأمور",
      "FAQ": "الأسئلة الشائعة",
      "Frequently Asked Questions": "الأسئلة الشائعة",
      "International": "الدولي",
      "International Students": "الطلاب الدوليون",
      "International Department": "القسم الدولي",
      "International Relations": "العلاقات الدولية",
      "Visa Invitation": "دعوة التأشيرة",
      "Visa and Invitation Letter Support": "دعم التأشيرة وخطاب الدعوة",
      "Health Insurance": "التأمين الصحي",
      "Health Insurance and Medical Support": "التأمين الصحي والدعم الطبي",
      "Hostel": "السكن الجامعي",
      "Hostel and Accommodation": "السكن والإقامة",
      "Living in Uzbekistan": "الحياة في أوزبكستان",
      "Emergency and Safety": "الطوارئ والسلامة",
      "Student Safety and Emergency Support": "سلامة الطلاب والدعم الطارئ",
      "Campus Tour": "جولة في الحرم",
      "Campus Tour and Virtual Tour": "جولة الحرم والجولة الافتراضية",
      "Students": "الطلاب",
      "Student Life": "الحياة الطلابية",
      "Student Life and Services": "الحياة الطلابية والخدمات",
      "Student Portal": "بوابة الطلاب",
      "Student Council": "مجلس الطلاب",
      "Student Council and Clubs": "مجلس الطلاب والأندية",
      "Alumni": "الخريجون",
      "Alumni Network": "شبكة الخريجين",
      "Careers": "الوظائف",
      "Careers and Recruitment": "الوظائف والتوظيف",
      "News": "الأخبار",
      "Announcements": "الإعلانات",
      "Announcements and Official Notices": "الإعلانات والإشعارات الرسمية",
      "Events": "الفعاليات",
      "Events and Academic Calendar": "الفعاليات والتقويم الأكاديمي",
      "Press Service": "الخدمة الصحفية",
      "Press Service and Media Center": "الخدمة الصحفية والمركز الإعلامي",
      "Activity": "الأنشطة",
      "University Activity": "أنشطة الجامعة",
      "Gallery": "المعرض",
      "Community Outreach": "خدمة المجتمع",
      "Contact": "اتصل بنا",
      "Registrar Office": "مكتب التسجيل",
      "Faculty Portal": "بوابة الهيئة التدريسية",
      "Official Website": "الموقع الرسمي",
      "Page Not Found": "الصفحة غير موجودة",
      "Language": "اللغة",
      "Primary navigation": "التنقل الرئيسي",
      "Open navigation": "فتح التنقل",
      "Apply Now": "قدّم الآن",
      "Contact Center": "مركز الاتصال",
      "How can we help you?": "كيف يمكننا مساعدتك؟",
      "Send Inquiry": "إرسال استفسار",
      "Office Directory": "دليل المكاتب",
      "Working hours.": "ساعات العمل.",
      "Before you contact us.": "قبل التواصل معنا.",
      "Stay connected with the university.": "ابقَ على تواصل مع الجامعة.",
      "Become the Doctor the World Needs": "كن الطبيب الذي يحتاجه العالم",
      "Explore Faculties": "استكشف الكليات",
      "Start Application": "ابدأ التقديم",
      "Latest university updates.": "آخر تحديثات الجامعة.",
      "Start your journey at TSMU Chirchik Branch.": "ابدأ رحلتك في فرع تشيرتشيك.",
      "Admissions, international support and campus inquiries.": "القبول، الدعم الدولي، واستفسارات الحرم الجامعي.",
      "Send your question.": "أرسل سؤالك.",
      "Emergency contacts for students.": "جهات الاتصال الطارئة للطلاب.",
      "University Offices": "مكاتب الجامعة",
      "Partner hospitals for student clinical practice.": "المستشفيات الشريكة للتدريب السريري للطلاب.",
      "Inquiry Form": "نموذج الاستفسار",
      "Back to homepage": "العودة إلى الصفحة الرئيسية",
      "Newsletter": "النشرة البريدية",
      "Join": "انضم",
      "Email address": "البريد الإلكتروني",
      "Accessibility": "إمكانية الوصول",
      "Accessibility Statement": "بيان إمكانية الوصول",
      "Privacy Policy and Data Protection": "سياسة الخصوصية وحماية البيانات",
      "Terms of Use and Website Policy": "شروط الاستخدام وسياسة الموقع",
      "Search and University Directory": "البحث ودليل الجامعة",
      "AI Admission Assistant": "مساعد القبول بالذكاء الاصطناعي",
      "Tashkent State Medical University": "جامعة طشقند الحكومية الطبية",
      "Chirchik Branch": "فرع تشيرتشيك",
      "TSMU Chirchik Branch": "جامعة طشقند الطبية تشيرتشيك",
      "Tashkent State Medical University Chirchik Branch logo": "شعار فرع تشيرتشيك لجامعة طشقند الحكومية الطبية",
      "Tashkent State Medical University Chirchik Branch home": "الصفحة الرئيسية لفرع تشيرتشيك لجامعة طشقند الحكومية الطبية",
      "Medical education for global impact": "تعليم طبي لأثر عالمي"
    }
  },
  tk: {
    nativeName: "Türkmençe",
    direction: "ltr",
    site: {
      fullName: "Daşkent döwlet lukmançylyk uniwersiteti",
      branchName: "Çirçik şahamçasy",
      shortName: "DDLU Çirçik"
    },
    ui: {
      languageLabel: "Dil",
      selectorAriaLabel: "Saýtyň dilini saýlaň"
    },
    seo: {
      ogLocale: "tk_TM",
      homeTitle: "Resmi web sahypa | {{site}}",
      homeDescription: "{{site}} resmi web sahypasy. Lukmançylyk bilimi, kabul ediş, kliniki taýýarlyk, ylmy işler, halkara talyp goldawy we Çirçikdäki kampus durmuşy bilen tanyşyň.",
      titleTemplate: "{{page}} | {{site}}",
      pageDescriptionTemplate: "{{site}} üçin \"{{page}}\" resmi sahypasy. Lukmançylyk bilimi, kabul ediş, ylmy işler, kliniki tejribe, halkara talyp hyzmatlary we Çirçikdäki kampus durmuşy bilen tanyşyň."
    },
    strings: {
      "Home": "Baş sahypa",
      "About": "Uniwersitet barada",
      "About the University": "Uniwersitet barada",
      "Mission": "Missiýa",
      "Structure": "Gurluş",
      "Administration": "Dolandyryş",
      "Director": "Direktor",
      "Departments": "Kafedralar",
      "Centers and Organizations": "Merkezler we guramalar",
      "Quality Assurance": "Hil üpjünçiligi",
      "Academics": "Akademiki işler",
      "Faculties": "Fakultetler",
      "General Medicine": "Umumy lukmançylyk",
      "Medical Pediatrics": "Lukmançylyk pediatriýasy",
      "Pharmacy": "Dermanhana işi",
      "Psychology": "Psihologiýa",
      "Clinical Practice": "Kliniki tejribe",
      "Research": "Ylmy işler",
      "Admissions": "Kabul ediş",
      "Apply": "Arza bermek",
      "Apply Online": "Onlaýn arza bermek",
      "Scholarships": "Stipendiýalar",
      "International": "Halkara",
      "International Students": "Halkara talyplar",
      "International Department": "Halkara bölüm",
      "International Relations": "Halkara gatnaşyklar",
      "Hostel": "Ýatahana",
      "Living in Uzbekistan": "Özbegistanda ýaşaýyş",
      "Students": "Talyplar",
      "Student Life": "Talyp durmuşy",
      "Student Portal": "Talyp portaly",
      "Student Council": "Talyp geňeşi",
      "Careers": "Kär",
      "News": "Habarlar",
      "Announcements": "Bildirişler",
      "Events": "Çäreler",
      "Press Service": "Metbugat gullugy",
      "Gallery": "Galereýa",
      "Contact": "Habarlaşmak",
      "Official Website": "Resmi web sahypa",
      "Page Not Found": "Sahypa tapylmady",
      "Language": "Dil",
      "Apply Now": "Häzir ýüz tutuň",
      "How can we help you?": "Size nähili kömek edip bileris?",
      "Send Inquiry": "Sorag ibermek",
      "Office Directory": "Ofis sanawy",
      "Working hours.": "Iş wagty.",
      "Before you contact us.": "Biz bilen habarlaşmazdan öň.",
      "Stay connected with the university.": "Uniwersitet bilen aragatnaşykda boluň.",
      "Become the Doctor the World Needs": "Dünýäniň mätäç bolan lukmanyna öwrüliň",
      "Explore Faculties": "Fakultetleri görüň",
      "Start Application": "Arzany başlatmak",
      "Latest university updates.": "Uniwersitetiň soňky täzelikleri.",
      "Start your journey at TSMU Chirchik Branch.": "Çirçik şahamçasynda ýoluňyzy başlaň.",
      "Admissions, international support and campus inquiries.": "Kabul ediş, halkara goldaw we kampus boýunça soraglar.",
      "Send your question.": "Soragyňyzy iberiň.",
      "Emergency contacts for students.": "Talyplar üçin gyssagly aragatnaşyklar.",
      "University Offices": "Uniwersitet ofisleri",
      "Partner hospitals for student clinical practice.": "Talyp kliniki tejribesi üçin hyzmatdaş hassahanalar.",
      "Inquiry Form": "Sorag formasy",
      "Back to homepage": "Baş sahypa gaýtmak",
      "Newsletter": "Habar bülteni",
      "Join": "Goşulmak",
      "Email address": "E-poçta salgysy",
      "Accessibility": "Elýeterlilik",
      "Accessibility Statement": "Elýeterlilik beýannamasy",
      "Search and University Directory": "Gözleg we uniwersitet maglumatlygy",
      "Tashkent State Medical University": "Daşkent döwlet lukmançylyk uniwersiteti",
      "Chirchik Branch": "Çirçik şahamçasy",
      "TSMU Chirchik Branch": "DDLU Çirçik",
      "Medical education for global impact": "Dünýä täsiri üçin lukmançylyk bilimi"
    }
  },
  tg: {
    nativeName: "Тоҷикӣ",
    direction: "ltr",
    site: {
      fullName: "Донишгоҳи давлатии тиббии Тошканд",
      branchName: "филиали Чирчиқ",
      shortName: "ДДТТ Чирчиқ"
    },
    ui: {
      languageLabel: "Забон",
      selectorAriaLabel: "Забони сомонаро интихоб кунед"
    },
    seo: {
      ogLocale: "tg_TJ",
      homeTitle: "Сомонаи расмӣ | {{site}}",
      homeDescription: "Сомонаи расмии {{site}}. Бо таҳсилоти тиббӣ, қабул, омодагии клиникӣ, таҳқиқот, дастгирии донишҷӯёни хориҷӣ ва ҳаёти кампус дар Чирчиқ шинос шавед.",
      titleTemplate: "{{page}} | {{site}}",
      pageDescriptionTemplate: "Саҳифаи расмии \"{{page}}\" дар {{site}}. Бо таҳсилоти тиббӣ, қабул, таҳқиқот, таҷрибаи клиникӣ, хизматрасониҳои донишҷӯёни хориҷӣ ва ҳаёти кампус дар Чирчиқ шинос шавед."
    },
    strings: {
      "Home": "Саҳифаи асосӣ",
      "About": "Дар бораи донишгоҳ",
      "About the University": "Дар бораи донишгоҳ",
      "Mission": "Миссия",
      "Structure": "Сохтор",
      "Administration": "Маъмурият",
      "Director": "Директор",
      "Departments": "Кафедраҳо",
      "Centers and Organizations": "Марказҳо ва ташкилотҳо",
      "Quality Assurance": "Таъмини сифат",
      "Academics": "Фаъолияти академӣ",
      "Faculties": "Факултетҳо",
      "General Medicine": "Тибби умумӣ",
      "Medical Pediatrics": "Педиатрияи тиббӣ",
      "Pharmacy": "Фарматсия",
      "Psychology": "Психология",
      "Clinical Practice": "Таҷрибаи клиникӣ",
      "Research": "Таҳқиқот",
      "Admissions": "Қабул",
      "Apply": "Ариза",
      "Apply Online": "Аризаи онлайн",
      "Scholarships": "Стипендияҳо",
      "International": "Байналмилалӣ",
      "International Students": "Донишҷӯёни хориҷӣ",
      "International Department": "Шуъбаи байналмилалӣ",
      "International Relations": "Муносибатҳои байналмилалӣ",
      "Hostel": "Хобгоҳ",
      "Living in Uzbekistan": "Зиндагӣ дар Ӯзбекистон",
      "Students": "Донишҷӯён",
      "Student Life": "Ҳаёти донишҷӯӣ",
      "Student Portal": "Портали донишҷӯён",
      "Student Council": "Шӯрои донишҷӯён",
      "Careers": "Карера",
      "News": "Ахбор",
      "Announcements": "Эълонҳо",
      "Events": "Рӯйдодҳо",
      "Press Service": "Хадамоти матбуот",
      "Gallery": "Галерея",
      "Contact": "Тамос",
      "Official Website": "Сомонаи расмӣ",
      "Page Not Found": "Саҳифа ёфт нашуд",
      "Language": "Забон",
      "Apply Now": "Ҳоло ариза диҳед",
      "How can we help you?": "Чӣ гуна метавонем кумак кунем?",
      "Send Inquiry": "Ирсоли дархост",
      "Office Directory": "Феҳристи идораҳо",
      "Working hours.": "Соатҳои корӣ.",
      "Before you contact us.": "Пеш аз тамос бо мо.",
      "Stay connected with the university.": "Бо донишгоҳ дар тамос бошед.",
      "Become the Doctor the World Needs": "Духтуре шавед, ки ҷаҳон ба ӯ ниёз дорад",
      "Explore Faculties": "Шиносоӣ бо факултетҳо",
      "Start Application": "Оғози ариза",
      "Latest university updates.": "Навгониҳои охирини донишгоҳ.",
      "Start your journey at TSMU Chirchik Branch.": "Роҳи худро дар филиали Чирчиқ оғоз кунед.",
      "Admissions, international support and campus inquiries.": "Қабул, дастгирии байналмилалӣ ва дархостҳои кампус.",
      "Send your question.": "Саволи худро фиристед.",
      "Emergency contacts for students.": "Тамосҳои фавқулода барои донишҷӯён.",
      "University Offices": "Идораҳои донишгоҳ",
      "Partner hospitals for student clinical practice.": "Беморхонаҳои шарик барои таҷрибаи клиникии донишҷӯён.",
      "Inquiry Form": "Шакли дархост",
      "Back to homepage": "Бозгашт ба саҳифаи асосӣ",
      "Newsletter": "Ахборнома",
      "Join": "Ҳамроҳ шавед",
      "Email address": "Суроғаи почтаи электронӣ",
      "Accessibility": "Дастрасӣ",
      "Accessibility Statement": "Баёнияи дастрасӣ",
      "Search and University Directory": "Ҷустуҷӯ ва феҳристи донишгоҳ",
      "Tashkent State Medical University": "Донишгоҳи давлатии тиббии Тошканд",
      "Chirchik Branch": "филиали Чирчиқ",
      "TSMU Chirchik Branch": "ДДТТ Чирчиқ",
      "Medical education for global impact": "Таҳсилоти тиббӣ барои таъсири ҷаҳонӣ"
    }
  },
  ky: {
    nativeName: "Кыргызча",
    direction: "ltr",
    site: {
      fullName: "Ташкент мамлекеттик медициналык университети",
      branchName: "Чирчик филиалы",
      shortName: "ТММУ Чирчик"
    },
    ui: {
      languageLabel: "Тил",
      selectorAriaLabel: "Сайттын тилин тандаңыз"
    },
    seo: {
      ogLocale: "ky_KG",
      homeTitle: "Расмий сайт | {{site}}",
      homeDescription: "{{site}} расмий сайты. Медициналык билим, кабыл алуу, клиникалык даярдык, изилдөө, эл аралык студенттерди колдоо жана Чирчиктеги кампус турмушу менен таанышыңыз.",
      titleTemplate: "{{page}} | {{site}}",
      pageDescriptionTemplate: "{{site}} үчүн \"{{page}}\" расмий барагы. Медициналык билим, кабыл алуу, изилдөө, клиникалык тажрыйба, эл аралык студенттик кызматтар жана Чирчиктеги кампус турмушу менен таанышыңыз."
    },
    strings: {
      "Home": "Башкы бет",
      "About": "Университет жөнүндө",
      "About the University": "Университет жөнүндө",
      "Mission": "Миссия",
      "Structure": "Түзүм",
      "Administration": "Администрация",
      "Director": "Директор",
      "Departments": "Кафедралар",
      "Centers and Organizations": "Борборлор жана уюмдар",
      "Quality Assurance": "Сапатты камсыздоо",
      "Academics": "Академиялык иштер",
      "Faculties": "Факультеттер",
      "General Medicine": "Жалпы медицина",
      "Medical Pediatrics": "Медициналык педиатрия",
      "Pharmacy": "Фармация",
      "Psychology": "Психология",
      "Clinical Practice": "Клиникалык практика",
      "Research": "Изилдөө",
      "Admissions": "Кабыл алуу",
      "Apply": "Тапшыруу",
      "Apply Online": "Онлайн тапшыруу",
      "Scholarships": "Стипендиялар",
      "International": "Эл аралык",
      "International Students": "Эл аралык студенттер",
      "International Department": "Эл аралык бөлүм",
      "International Relations": "Эл аралык байланыштар",
      "Hostel": "Жатакана",
      "Living in Uzbekistan": "Өзбекстанда жашоо",
      "Students": "Студенттер",
      "Student Life": "Студенттик жашоо",
      "Student Portal": "Студенттик портал",
      "Student Council": "Студенттик кеңеш",
      "Careers": "Карьера",
      "News": "Жаңылыктар",
      "Announcements": "Билдирүүлөр",
      "Events": "Иш-чаралар",
      "Press Service": "Басма сөз кызматы",
      "Gallery": "Галерея",
      "Contact": "Байланыш",
      "Official Website": "Расмий сайт",
      "Page Not Found": "Баракча табылган жок",
      "Language": "Тил",
      "Apply Now": "Азыр тапшырыңыз",
      "How can we help you?": "Сизге кантип жардам бере алабыз?",
      "Send Inquiry": "Суроо жөнөтүү",
      "Office Directory": "Кеңселер тизмеси",
      "Working hours.": "Иштөө убактысы.",
      "Before you contact us.": "Биз менен байланышаардан мурун.",
      "Stay connected with the university.": "Университет менен байланышта болуңуз.",
      "Become the Doctor the World Needs": "Дүйнөгө керек болгон дарыгер болуңуз",
      "Explore Faculties": "Факультеттерди көрүү",
      "Start Application": "Арызды баштоо",
      "Latest university updates.": "Университеттин акыркы жаңылыктары.",
      "Start your journey at TSMU Chirchik Branch.": "Чирчик филиалында өз жолуңузду баштаңыз.",
      "Admissions, international support and campus inquiries.": "Кабыл алуу, эл аралык колдоо жана кампус боюнча суроолор.",
      "Send your question.": "Сурооңузду жөнөтүңүз.",
      "Emergency contacts for students.": "Студенттер үчүн шашылыш байланыштар.",
      "University Offices": "Университет кеңселери",
      "Partner hospitals for student clinical practice.": "Студенттердин клиникалык практикасы үчүн өнөктөш ооруканалар.",
      "Inquiry Form": "Суроо формасы",
      "Back to homepage": "Башкы бетке кайтуу",
      "Newsletter": "Маалымат бюллетени",
      "Join": "Кошулуу",
      "Email address": "Электрондук почта дареги",
      "Accessibility": "Жеткиликтүүлүк",
      "Accessibility Statement": "Жеткиликтүүлүк билдирүүсү",
      "Search and University Directory": "Издөө жана университет маалымдамасы",
      "Tashkent State Medical University": "Ташкент мамлекеттик медициналык университети",
      "Chirchik Branch": "Чирчик филиалы",
      "TSMU Chirchik Branch": "ТММУ Чирчик",
      "Medical education for global impact": "Дүйнөлүк таасир үчүн медициналык билим"
    }
  }
};

function createLocalePayload(code) {
  const locale = LOCALE_DEFS[code];
  return {
    locale: code,
    nativeName: locale.nativeName,
    direction: locale.direction,
    site: locale.site,
    ui: locale.ui,
    seo: locale.seo,
    strings: { ...BASE_STRINGS, ...locale.strings }
  };
}

function getLocalizedPath(locale, fileName) {
  if (fileName === "index.html") {
    return locale === "en" ? "/" : `/${locale}/`;
  }
  return locale === "en" ? `/${fileName}` : `/${locale}/${fileName}`;
}

function interpolate(template, replacements) {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => replacements[key] ?? "");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceTagContent(html, tagName, content) {
  return html.replace(new RegExp(`<${tagName}>[\\s\\S]*?<\\/${tagName}>`, "i"), `<${tagName}>${content}</${tagName}>`);
}

function replaceMetaContent(html, selector, content) {
  const pattern = new RegExp(`<meta[^>]*${selector}[^>]*>`, "i");
  if (pattern.test(html)) {
    return html.replace(pattern, (tag) => {
      if (/content="[^"]*"/i.test(tag)) {
        return tag.replace(/content="[^"]*"/i, `content="${content}"`);
      }
      return tag.replace(/>$/, ` content="${content}">`);
    });
  }
  return html;
}

function replaceLinkHref(html, rel, href) {
  const pattern = new RegExp(`<link[^>]*rel="${rel}"[^>]*>`, "i");
  if (pattern.test(html)) {
    return html.replace(pattern, (tag) => {
      if (/href="[^"]*"/i.test(tag)) {
        return tag.replace(/href="[^"]*"/i, `href="${href}"`);
      }
      return tag.replace(/>$/, ` href="${href}">`);
    });
  }
  return html;
}

function rewriteStaticAssets(html, locale) {
  if (locale === "en") {
    return html;
  }

  return html
    .replace(/((?:src|href)=["'])assets\//g, "$1../assets/")
    .replace(/((?:src|href)=["'])premium-font\.css/g, "$1../premium-font.css")
    .replace(/((?:src|href)=["'])shared-header\.css/g, "$1../shared-header.css")
    .replace(/((?:src|href)=["'])shared-header\.js/g, "$1../shared-header.js")
    .replace(/((?:src|href)=["'])i18n\.js/g, "$1../i18n.js")
    .replace(/((?:src|href)=["'])site\.webmanifest/g, "$1../site.webmanifest");
}

function translateStaticHtml(html, strings, locale) {
  if (locale === "en") {
    return html;
  }

  const entries = Object.entries(strings)
    .filter(([source, target]) => source && target && source !== target)
    .sort((a, b) => b[0].length - a[0].length);

  let translated = html;
  for (const [source, target] of entries) {
    translated = translated.replace(new RegExp(escapeRegExp(source), "g"), target);
  }
  return translated;
}

function buildAlternateLinks(fileName) {
  return LOCALE_CODES.map((locale) => {
    const href = `${BASE_URL}${getLocalizedPath(locale, fileName)}`;
    return `<link rel="alternate" hreflang="${locale}" href="${href}">`;
  }).join("");
}

function transformHtml(sourceHtml, fileName, payload, locale) {
  const pageSourceTitle = (sourceHtml.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "Official Website").trim();
  const pageName = pageSourceTitle.split("|")[0].trim();
  const translatedPageName = payload.strings[pageName] || pageName;
  const siteName = `${payload.site.fullName} ${payload.site.branchName}`.trim();
  const title = fileName === "index.html"
    ? interpolate(payload.seo.homeTitle, { site: siteName })
    : interpolate(payload.seo.titleTemplate, { page: translatedPageName, site: siteName });
  const description = fileName === "index.html"
    ? interpolate(payload.seo.homeDescription, { site: siteName })
    : interpolate(payload.seo.pageDescriptionTemplate, { page: translatedPageName, site: siteName });
  const pageUrl = `${BASE_URL}${getLocalizedPath(locale, fileName)}`;

  let html = sourceHtml;
  html = replaceTagContent(html, "title", title);
  html = replaceMetaContent(html, 'name="description"', description);
  html = replaceMetaContent(html, 'property="og:title"', title);
  html = replaceMetaContent(html, 'property="og:description"', description);
  html = replaceMetaContent(html, 'property="og:url"', pageUrl);
  html = replaceMetaContent(html, 'property="og:site_name"', siteName);
  html = replaceMetaContent(html, 'property="og:locale"', payload.seo.ogLocale);
  html = replaceMetaContent(html, 'name="twitter:title"', title);
  html = replaceMetaContent(html, 'name="twitter:description"', description);
  html = replaceMetaContent(html, 'name="application-name"', siteName);
  html = replaceMetaContent(html, 'name="apple-mobile-web-app-title"', payload.site.shortName);
  html = replaceLinkHref(html, "canonical", pageUrl);
  html = html.replace(/<html([^>]*)lang="[^"]*"([^>]*)>/i, `<html$1lang="${locale}"${payload.direction === "rtl" ? ' dir="rtl"' : ""}$2>`);
  html = html.replace(/<link rel="alternate" hreflang="[^"]+" href="[^"]*">/g, "");
  html = html.replace(/<\/head>/i, `${buildAlternateLinks(fileName)}</head>`);
  html = rewriteStaticAssets(html, locale);
  return html;
}

function buildSitemap(fileNames) {
  const items = [];

  for (const fileName of fileNames) {
    for (const locale of LOCALE_CODES) {
      const loc = `${BASE_URL}${getLocalizedPath(locale, fileName)}`;
      const alternates = LOCALE_CODES.map((altLocale) => {
        return `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${BASE_URL}${getLocalizedPath(altLocale, fileName)}" />`;
      }).join("\n");

      items.push(
        [
          "  <url>",
          `    <loc>${loc}</loc>`,
          alternates,
          "  </url>"
        ].join("\n")
      );
    }
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    items.join("\n"),
    "</urlset>",
    ""
  ].join("\n");
}

async function main() {
  await fs.mkdir(LOCALES_DIR, { recursive: true });

  const localePayloads = Object.fromEntries(
    LOCALE_CODES.map((code) => [code, createLocalePayload(code)])
  );

  for (const [code, payload] of Object.entries(localePayloads)) {
    await fs.writeFile(
      path.join(LOCALES_DIR, `${code}.json`),
      `${JSON.stringify(payload, null, 2)}\n`,
      "utf8"
    );
  }

  const fileNames = (await fs.readdir(SITE_ROOT))
    .filter((entry) => entry.endsWith(".html"))
    .sort();

  for (const locale of LOCALE_CODES) {
    if (locale !== "en") {
      await fs.rm(path.join(SITE_ROOT, locale), { recursive: true, force: true });
      await fs.mkdir(path.join(SITE_ROOT, locale), { recursive: true });
    }
  }

  for (const fileName of fileNames) {
    const sourceHtml = await fs.readFile(path.join(SITE_ROOT, fileName), "utf8");

    for (const locale of LOCALE_CODES) {
      const transformed = transformHtml(sourceHtml, fileName, localePayloads[locale], locale);
      const outputPath = locale === "en"
        ? path.join(SITE_ROOT, fileName)
        : path.join(SITE_ROOT, locale, fileName);
      await fs.writeFile(outputPath, transformed, "utf8");
    }
  }

  await fs.writeFile(path.join(SITE_ROOT, "sitemap.xml"), buildSitemap(fileNames), "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
