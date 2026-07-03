(function () {
  const VERSION = "20260703-1";
  const STORAGE_KEY = "tsmu:locale";
  const MANUAL_KEY = "tsmu:locale:manual";
  const INIT_KEY = "tsmu:locale:initialized";
  const BASE_URL = "https://chirchik-tsmu.uz";
  const SUPPORTED_LOCALES = {
    en: { nativeName: "English", dir: "ltr" },
    ru: { nativeName: "Русский", dir: "ltr" },
    uz: { nativeName: "O'zbekcha", dir: "ltr" },
    ar: { nativeName: "العربية", dir: "rtl" },
    tk: { nativeName: "Türkmençe", dir: "ltr" },
    tg: { nativeName: "Тоҷикӣ", dir: "ltr" },
    ky: { nativeName: "Кыргызча", dir: "ltr" }
  };
  const COUNTRY_TO_LOCALE = {
    UZ: "uz",
    RU: "ru",
    KZ: "ru",
    BY: "ru",
    KG: "ky",
    TJ: "tg",
    TM: "tk",
    SA: "ar",
    AE: "ar",
    QA: "ar",
    OM: "ar",
    KW: "ar",
    BH: "ar",
    EG: "ar",
    JO: "ar",
    IQ: "ar",
    SY: "ar",
    LB: "ar",
    PS: "ar",
    DZ: "ar",
    MA: "ar",
    TN: "ar",
    LY: "ar",
    YE: "ar"
  };
  const PAGE_TITLES = {
    "404.html": "Page Not Found",
    "about.html": "About the University",
    "academics.html": "Academics",
    "accessibility.html": "Accessibility Statement",
    "achievements.html": "Achievements, Rankings and Recognition",
    "activity.html": "University Activity",
    "administration.html": "University Administration",
    "admissions.html": "Admissions",
    "ai-admission-assistant.html": "AI Admission Assistant",
    "alumni.html": "Alumni Network",
    "announcements.html": "Announcements and Official Notices",
    "apply.html": "Online Application Portal",
    "campus-facilities.html": "Campus Facilities",
    "campus-tour.html": "Campus Tour and Virtual Tour",
    "careers.html": "Careers and Recruitment",
    "centers-organizations.html": "Centers and Organizations",
    "clinical-practice.html": "Clinical Practice and Partner Hospitals",
    "community-outreach.html": "Community Outreach and Medical Camps",
    "contact.html": "Contact",
    "departments.html": "Departments",
    "director-page.html": "Director",
    "director.html": "Director",
    "downloads.html": "Downloads and Forms",
    "e-learning.html": "E-Learning and Digital Services",
    "educational-sections.html": "Educational Sections",
    "egyptian-embassy-visit.html": "Egyptian Embassy Visit News",
    "emergency-safety.html": "Student Safety and Emergency Support",
    "entrant.html": "Entrant Information",
    "events.html": "Events and Academic Calendar",
    "faculties.html": "Faculties",
    "faculty-portal.html": "Faculty Portal",
    "faq.html": "FAQ and Help Center",
    "finance-departments.html": "Finance Departments",
    "gallery.html": "Gallery",
    "general-medicine.html": "Faculty of General Medicine",
    "health-insurance.html": "Health Insurance and Medical Support",
    "hostel.html": "Hostel and Accommodation",
    "index.html": "Official Website",
    "information-resource-center.html": "Information Resource Center and Digital Library",
    "international-department.html": "International Department",
    "international-relations.html": "International Relations",
    "international-students.html": "International Students",
    "living-in-uzbekistan.html": "Living in Uzbekistan",
    "medical-pediatrics.html": "Faculty of Medical Pediatrics",
    "mission.html": "Mission, Vision and Strategic Goals",
    "news.html": "News",
    "parents-guide.html": "Parents and Guardians Guide",
    "pediatrics.html": "Faculty of Medical Pediatrics",
    "pharmacology.html": "Faculty of Pharmacy",
    "pharmacy.html": "Faculty of Pharmacy",
    "press-service.html": "Press Service and Media Center",
    "privacy-policy.html": "Privacy Policy and Data Protection",
    "professors.html": "Professors and Teachers",
    "psychology.html": "Faculty of Psychology",
    "publications.html": "Publications and Scientific Journals",
    "quality-assurance.html": "Quality Assurance and Accreditations",
    "registrar.html": "Registrar Office",
    "research.html": "Research and Innovation",
    "scholarships.html": "Scholarships and Financial Support",
    "search.html": "Search and University Directory",
    "simulation-center.html": "Simulation Center",
    "structure.html": "University Structure",
    "student-council.html": "Student Council and Clubs",
    "student-portal.html": "Student Portal",
    "student.html": "Student Life and Services",
    "terms.html": "Terms of Use and Website Policy",
    "visa-invitation.html": "Visa and Invitation Letter Support"
  };

  const translationsCache = new Map();
  const originalTextNodes = new WeakMap();
  const originalAttributes = new WeakMap();

  const pathname = window.location.pathname || "/";
  const pathParts = pathname.split("/").filter(Boolean);
  const routeLocale = SUPPORTED_LOCALES[pathParts[0]] ? pathParts[0] : "en";
  const isLocalizedRoute = routeLocale !== "en";
  const pagePath = isLocalizedRoute
    ? pathParts.slice(1).join("/") || "index.html"
    : pathParts.join("/") || "index.html";

  function assetPath(fileName) {
    if (fileName.startsWith("/")) {
      return fileName;
    }
    return `/${fileName}`;
  }

  function normalizeLocale(input) {
    if (!input) {
      return null;
    }

    const lower = String(input).toLowerCase();
    const prefix = lower.split(/[-_]/)[0];
    return SUPPORTED_LOCALES[prefix] ? prefix : null;
  }

  function getStoredLocale(key) {
    try {
      const value = window.localStorage.getItem(key);
      return normalizeLocale(value);
    } catch {
      return null;
    }
  }

  function setStoredLocale(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Ignore storage failures.
    }
  }

  function setCookie(name, value) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
  }

  function resolvePath(object, keyPath) {
    return keyPath.split(".").reduce((value, segment) => {
      return value && Object.prototype.hasOwnProperty.call(value, segment) ? value[segment] : undefined;
    }, object);
  }

  async function loadLocale(locale) {
    if (translationsCache.has(locale)) {
      return translationsCache.get(locale);
    }

    const request = fetch(assetPath(`locales/${locale}.json`), { credentials: "same-origin" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Unable to load locale: ${locale}`);
        }
        return response.json();
      });

    translationsCache.set(locale, request);
    return request;
  }

  function ensureStyles() {
    if (document.getElementById("tsmu-i18n-css")) {
      return;
    }

    const link = document.createElement("link");
    link.id = "tsmu-i18n-css";
    link.rel = "stylesheet";
    link.href = `${assetPath("i18n.css")}?v=${VERSION}`;
    document.head.appendChild(link);
  }

  function buildLocalizedPath(locale) {
    if (pagePath === "index.html") {
      return locale === "en" ? "/" : `/${locale}/`;
    }
    return locale === "en" ? `/${pagePath}` : `/${locale}/${pagePath}`;
  }

  function interpolate(template, replacements) {
    return String(template).replace(/\{\{(\w+)\}\}/g, (_, key) => replacements[key] ?? "");
  }

  function currentPageTitle() {
    return PAGE_TITLES[pagePath] || document.title.split("|")[0].trim() || "Official Website";
  }

  function ensureAlternateLinks() {
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());
    Object.keys(SUPPORTED_LOCALES).forEach((locale) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = locale;
      link.href = `${BASE_URL}${buildLocalizedPath(locale)}`;
      document.head.appendChild(link);
    });
  }

  function setMetaContent(selector, content) {
    const element = document.head.querySelector(selector);
    if (element) {
      element.setAttribute("content", content);
    }
  }

  function ensureCanonical(href) {
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = href;
  }

  function updateStructuredData(siteName, url, description) {
    const script = document.querySelector('script[data-seo="tsmu"]');
    if (!script) {
      return;
    }

    try {
      const data = JSON.parse(script.textContent);
      data.name = siteName;
      data.alternateName = siteName;
      data.url = pagePath === "index.html" ? url : `${BASE_URL}/`;
      data.description = description;
      script.textContent = JSON.stringify(data, null, 2);
    } catch {
      // Ignore invalid structured data.
    }
  }

  function updateSeo(locale, messages) {
    const siteName = `${messages.site.fullName} ${messages.site.branchName}`.trim();
    const englishPageTitle = currentPageTitle();
    const translatedPageTitle = messages.strings[englishPageTitle] || englishPageTitle;
    const title = pagePath === "index.html"
      ? interpolate(messages.seo.homeTitle, { site: siteName })
      : interpolate(messages.seo.titleTemplate, { page: translatedPageTitle, site: siteName });
    const description = pagePath === "index.html"
      ? interpolate(messages.seo.homeDescription, { site: siteName })
      : interpolate(messages.seo.pageDescriptionTemplate, { page: translatedPageTitle, site: siteName });
    const url = `${BASE_URL}${buildLocalizedPath(locale)}`;

    document.title = title;
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", SUPPORTED_LOCALES[locale].dir);
    document.body.classList.toggle("tsmu-is-rtl", SUPPORTED_LOCALES[locale].dir === "rtl");

    ensureCanonical(url);
    ensureAlternateLinks();
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[property="og:site_name"]', siteName);
    setMetaContent('meta[property="og:locale"]', messages.seo.ogLocale);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="application-name"]', siteName);
    setMetaContent('meta[name="apple-mobile-web-app-title"]', messages.site.shortName);

    updateStructuredData(siteName, url, description);
  }

  function buildLanguageControl(messages, locale) {
    const wrapper = document.createElement("label");
    wrapper.className = "tsmu-locale-switcher";

    const label = document.createElement("span");
    label.className = "tsmu-locale-switcher__label";
    label.textContent = `🌐 ${messages.ui.languageLabel}`;

    const select = document.createElement("select");
    select.className = "tsmu-locale-switcher__select";
    select.setAttribute("aria-label", messages.ui.selectorAriaLabel);

    Object.entries(SUPPORTED_LOCALES).forEach(([code, data]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = data.nativeName;
      option.selected = code === locale;
      select.appendChild(option);
    });

    select.addEventListener("change", () => {
      applyLocale(select.value, { source: "manual", updateUrl: false });
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    return wrapper;
  }

  function renderLanguageControls(messages, locale) {
    const targets = [
      document.querySelector(".tsmu-gh__actions"),
      document.querySelector(".nav-actions")
    ].filter(Boolean);

    targets.forEach((target) => {
      const existing = target.querySelector(".tsmu-locale-switcher");
      const control = buildLanguageControl(messages, locale);

      if (existing) {
        existing.replaceWith(control);
        return;
      }

      const reference = target.querySelector(".tsmu-gh__apply, .nav-apply");
      if (reference) {
        target.insertBefore(control, reference);
      } else {
        target.prepend(control);
      }
    });
  }

  function translateDataKeys(messages) {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = resolvePath(messages, element.getAttribute("data-i18n"));
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = resolvePath(messages, element.getAttribute("data-i18n-html"));
      if (typeof value === "string") {
        element.innerHTML = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = resolvePath(messages, element.getAttribute("data-i18n-aria-label"));
      if (typeof value === "string") {
        element.setAttribute("aria-label", value);
      }
    });
  }

  function normalizeText(value) {
    return String(value).replace(/\s+/g, " ").trim();
  }

  function translateStringValue(originalValue, strings) {
    const normalized = normalizeText(originalValue);
    return strings[normalized] || originalValue;
  }

  function translateAttributes(strings) {
    document.querySelectorAll("[placeholder],[aria-label],[title],[alt]").forEach((element) => {
      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, {
          placeholder: element.getAttribute("placeholder"),
          "aria-label": element.getAttribute("aria-label"),
          title: element.getAttribute("title"),
          alt: element.getAttribute("alt")
        });
      }

      const original = originalAttributes.get(element);
      Object.entries(original).forEach(([attribute, value]) => {
        if (typeof value !== "string") {
          return;
        }
        element.setAttribute(attribute, translateStringValue(value, strings));
      });
    });
  }

  function translateTextNodes(strings) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (!node.parentElement) {
          return NodeFilter.FILTER_REJECT;
        }
        const tagName = node.parentElement.tagName;
        if (["SCRIPT", "STYLE", "NOSCRIPT"].includes(tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!node.textContent.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!originalTextNodes.has(node)) {
        originalTextNodes.set(node, node.textContent);
      }

      const source = originalTextNodes.get(node);
      const match = source.match(/^(\s*)([\s\S]*?)(\s*)$/);
      if (!match) {
        continue;
      }

      const translated = translateStringValue(match[2], strings);
      node.textContent = `${match[1]}${translated}${match[3]}`;
    }
  }

  function updateHistory(locale) {
    const nextPath = buildLocalizedPath(locale);
    const nextUrl = `${nextPath}${window.location.search}${window.location.hash}`;
    if (nextUrl !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.replaceState({}, "", nextUrl);
    }
  }

  function persistLocale(locale, source) {
    setStoredLocale(STORAGE_KEY, locale);
    setCookie("tsmu_locale", locale);

    if (source === "manual") {
      setStoredLocale(MANUAL_KEY, locale);
      setCookie("tsmu_locale_manual", "1");
    }

    if (source === "auto") {
      setStoredLocale(INIT_KEY, "1");
    }
  }

  async function detectCountryLocale() {
    if (!window.fetch) {
      return null;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 1500);

    try {
      const response = await fetch("https://ipwho.is/", {
        mode: "cors",
        cache: "force-cache",
        signal: controller.signal
      });
      const payload = await response.json();
      const countryCode = String(payload.country_code || "").toUpperCase();
      return COUNTRY_TO_LOCALE[countryCode] || null;
    } catch {
      return null;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  async function resolveInitialLocale() {
    const manualLocale = getStoredLocale(MANUAL_KEY);
    const savedLocale = getStoredLocale(STORAGE_KEY);

    if (routeLocale !== "en" && SUPPORTED_LOCALES[routeLocale]) {
      return { locale: routeLocale, source: "route" };
    }

    if (manualLocale) {
      return { locale: manualLocale, source: "saved-manual" };
    }

    if (savedLocale) {
      return { locale: savedLocale, source: "saved" };
    }

    const browserLocale = normalizeLocale((navigator.languages && navigator.languages[0]) || navigator.language);
    if (browserLocale) {
      return { locale: browserLocale, source: "auto" };
    }

    const countryLocale = await detectCountryLocale();
    if (countryLocale) {
      return { locale: countryLocale, source: "auto" };
    }

    return { locale: "en", source: "auto" };
  }

  let currentMessages = null;
  let domObserver = null;

  function translateDocument(messages) {
    translateDataKeys(messages);
    translateTextNodes(messages.strings);
    translateAttributes(messages.strings);
  }

  function ensureDomObserver() {
    if (domObserver) {
      return;
    }

    domObserver = new MutationObserver(() => {
      if (!currentMessages) {
        return;
      }
      translateDocument(currentMessages);
    });

    domObserver.observe(document.documentElement, {
      subtree: true,
      childList: true,
      characterData: false
    });
  }

  async function applyLocale(locale, options) {
    const nextLocale = normalizeLocale(locale) || "en";
    const source = options?.source || "auto";
    const messages = await loadLocale(nextLocale);

    currentMessages = messages;

    ensureStyles();
    updateSeo(nextLocale, messages);
    renderLanguageControls(messages, nextLocale);

    translateDocument(messages);
    ensureDomObserver();

    if (source === "manual") {
      persistLocale(nextLocale, "manual");
    } else if (source === "auto") {
      persistLocale(nextLocale, "auto");
    } else if (source === "saved") {
      persistLocale(nextLocale, "saved");
    } else if (source === "route" && !getStoredLocale(MANUAL_KEY)) {
      persistLocale(nextLocale, "saved");
    }

    if (options?.updateUrl !== false) {
      updateHistory(nextLocale);
    }
  }

  async function init() {
    ensureStyles();
    const initial = await resolveInitialLocale();
    await applyLocale(initial.locale, {
      source: initial.source,
      updateUrl: initial.source !== "route"
    });
  }

  window.TSMUI18n = { applyLocale };
  init().catch((error) => {
    console.error("[TSMU i18n]", error);
  });
})();
