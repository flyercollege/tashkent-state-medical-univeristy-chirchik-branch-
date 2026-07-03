(function () {
  const STYLE_ID = "tsmu-shared-header-css";
  const ASSET_VERSION = "20260703-2";
  const PAGE_FILE = (window.location.pathname.split("/").pop() || "index.html").split("?")[0].split("#")[0];

  const SUPPORTED_LOCALES = ["en", "ru", "uz", "ar", "tk", "tg", "ky"];

  function getRouteLocale() {
    const parts = (window.location.pathname || "/").split("/").filter(Boolean);
    const maybe = parts[0];
    return SUPPORTED_LOCALES.includes(maybe) ? maybe : "en";
  }

  const routeLocale = getRouteLocale();

  function localizeHref(href) {
    if (!href || typeof href !== "string") return href;

    const trimmed = href.trim();

    // Keep hashes and external links as-is
    if (/^(#|https?:|mailto:|tel:)/i.test(trimmed)) return trimmed;

    // Keep absolute paths already localized
    if (/^\/(en|ru|uz|ar|tk|tg|ky)\//.test(trimmed)) return trimmed;

    // index.html -> / (or /{locale}/)
    if (trimmed === "index.html") {
      return routeLocale === "en" ? "/" : `/${routeLocale}/`;
    }

    // *.html -> /{locale}/{file}.html (or /{file}.html for en)
    if (/^[a-z0-9-]+\.html$/i.test(trimmed)) {
      return routeLocale === "en" ? `/${trimmed}` : `/${routeLocale}/${trimmed}`;
    }

    return trimmed;
  }

  const HEADER_HTML = `
    <header class="tsmu-gh" data-shared-header="true">
      <div class="tsmu-gh__inner">
        <a class="tsmu-gh__brand" href="index.html" data-i18n-aria-label="Tashkent State Medical University Chirchik Branch home">
          <span class="tsmu-gh__mark">
            <img src="assets/logo-official-badge.png" alt="Tashkent State Medical University Chirchik Branch logo">
          </span>
          <span class="tsmu-gh__copy">
            <strong data-i18n="Tashkent State Medical University">Tashkent State Medical University</strong>
            <span data-i18n="Chirchik Branch">Chirchik Branch</span>
          </span>
        </a>
        <nav class="tsmu-gh__nav" aria-label="Primary navigation">
          <a class="tsmu-gh__link" href="index.html" data-i18n="Home">Home</a>

          <div class="tsmu-gh__item" data-group="about">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false" data-i18n="About">About
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="About the University">About the University</span>
                  <h3 data-i18n="Institution Overview">Institution Overview</h3>
                  <ul>
                    <li><a href="about.html" data-i18n="About the University">About the University</a></li>
                    <li><a href="mission.html" data-i18n="Mission">Mission</a></li>
                    <li><a href="achievements.html" data-i18n="Achievements, Rankings and Recognition">Achievements</a></li>
                    <li><a href="structure.html" data-i18n="Structure">Structure</a></li>
                    <li><a href="administration.html" data-i18n="Administration">Administration</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Director">Leadership</span>
                  <h3 data-i18n="People and Units">People and Units</h3>
                  <ul>
                    <li><a href="director-page.html" data-i18n="Director">Director</a></li>
                    <li><a href="professors.html" data-i18n="Professors and Teachers">Professors and Teachers</a></li>
                    <li><a href="departments.html" data-i18n="Departments">Departments</a></li>
                    <li><a href="centers-organizations.html" data-i18n="Centers and Organizations">Centers and Organizations</a></li>
                    <li><a href="quality-assurance.html" data-i18n="Quality Assurance">Quality Assurance</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="academics">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false" data-i18n="Academics">Academics
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--3">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Faculties">Faculties</span>
                  <h3 data-i18n="Programs">Programs</h3>
                  <ul>
                    <li><a href="faculties.html" data-i18n="All Faculties">All Faculties</a></li>
                    <li><a href="general-medicine.html" data-i18n="General Medicine">General Medicine</a></li>
                    <li><a href="medical-pediatrics.html" data-i18n="Medical Pediatrics">Medical Pediatrics</a></li>
                    <li><a href="pharmacy.html" data-i18n="Pharmacy">Pharmacy</a></li>
                    <li><a href="psychology.html" data-i18n="Psychology">Psychology</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Academics Overview">Academic Pages</span>
                  <h3 data-i18n="Teaching Resources">Teaching Resources</h3>
                  <ul>
                    <li><a href="academics.html" data-i18n="Academics Overview">Academics Overview</a></li>
                    <li><a href="educational-sections.html" data-i18n="Educational Sections">Educational Sections</a></li>
                    <li><a href="information-resource-center.html" data-i18n="Information Resource Center">Information Resource Center</a></li>
                    <li><a href="e-learning.html" data-i18n="E-Learning">E-Learning</a></li>
                    <li><a href="downloads.html" data-i18n="Downloads">Downloads</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Clinical Practice">Practice</span>
                  <h3 data-i18n="Research and Innovation">Research and Training</h3>
                  <ul>
                    <li><a href="clinical-practice.html" data-i18n="Clinical Practice">Clinical Practice</a></li>
                    <li><a href="simulation-center.html" data-i18n="Simulation Center">Simulation Center</a></li>
                    <li><a href="research.html" data-i18n="Research">Research</a></li>
                    <li><a href="publications.html" data-i18n="Publications">Publications</a></li>
                    <li><a href="departments.html" data-i18n="Departments">Departments</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="admissions">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false" data-i18n="Admissions">Admissions
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Apply">Apply</span>
                  <h3 data-i18n="Admissions">Admissions Essentials</h3>
                  <ul>
                    <li><a href="admissions.html" data-i18n="Admissions">Admissions Overview</a></li>
                    <li><a href="apply.html" data-i18n="Apply Online">Apply Online</a></li>
                    <li><a href="entrant.html" data-i18n="Entrant Guide">Entrant Guide</a></li>
                    <li><a href="scholarships.html" data-i18n="Scholarships">Scholarships</a></li>
                    <li><a href="parents-guide.html" data-i18n="Parents Guide">Parents Guide</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Office Directory">Support</span>
                  <h3 data-i18n="Contact">Helpful Planning Pages</h3>
                  <ul>
                    <li><a href="ai-admission-assistant.html" data-i18n="AI Admission Assistant">AI Admission Assistant</a></li>
                    <li><a href="faq.html" data-i18n="Frequently Asked Questions">Frequently Asked Questions</a></li>
                    <li><a href="contact.html" data-i18n="Contact">Admissions Contact</a></li>
                    <li><a href="downloads.html" data-i18n="Downloads and Forms">Required Downloads</a></li>
                    <li><a href="international-students.html" data-i18n="International Students">International Students</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="international">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false" data-i18n="International">International
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="International">International</span>
                  <h3 data-i18n="International Students">Global Student Services</h3>
                  <ul>
                    <li><a href="international-students.html" data-i18n="International Students">International Students</a></li>
                    <li><a href="international-department.html" data-i18n="International Department">International Department</a></li>
                    <li><a href="international-relations.html" data-i18n="International Relations">International Relations</a></li>
                    <li><a href="visa-invitation.html" data-i18n="Visa Invitation">Visa Invitation</a></li>
                    <li><a href="health-insurance.html" data-i18n="Health Insurance">Health Insurance</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Living in Uzbekistan">Living Support</span>
                  <h3 data-i18n="Campus Tour and Virtual Tour">Arrival and Daily Life</h3>
                  <ul>
                    <li><a href="hostel.html" data-i18n="Hostel">Hostel</a></li>
                    <li><a href="living-in-uzbekistan.html" data-i18n="Living in Uzbekistan">Living in Uzbekistan</a></li>
                    <li><a href="emergency-safety.html" data-i18n="Emergency and Safety">Emergency and Safety</a></li>
                    <li><a href="campus-tour.html" data-i18n="Campus Tour">Campus Tour</a></li>
                    <li><a href="contact.html" data-i18n="Contact">Contact International Office</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="students">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false" data-i18n="Student Life">Students
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Student Life">Campus Life</span>
                  <h3 data-i18n="Student Life and Services">Student Pages</h3>
                  <ul>
                    <li><a href="student.html" data-i18n="Student Life">Student Life</a></li>
                    <li><a href="student-portal.html" data-i18n="Student Portal">Student Portal</a></li>
                    <li><a href="student-council.html" data-i18n="Student Council">Student Council</a></li>
                    <li><a href="alumni.html" data-i18n="Alumni">Alumni</a></li>
                    <li><a href="careers.html" data-i18n="Careers">Careers</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="FAQ">Support</span>
                  <h3 data-i18n="Primary navigation">Guides and Access</h3>
                  <ul>
                    <li><a href="accessibility.html" data-i18n="Accessibility">Accessibility</a></li>
                    <li><a href="faq.html" data-i18n="FAQ">FAQ</a></li>
                    <li><a href="parents-guide.html" data-i18n="Parents Guide">Parents Guide</a></li>
                    <li><a href="scholarships.html" data-i18n="Scholarships">Scholarships</a></li>
                    <li><a href="downloads.html" data-i18n="Downloads">Downloads</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="news">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false" data-i18n="News">News
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="News">Updates</span>
                  <h3 data-i18n="Events and Academic Calendar">News and Events</h3>
                  <ul>
                    <li><a href="news.html" data-i18n="News">News</a></li>
                    <li><a href="announcements.html" data-i18n="Announcements">Announcements</a></li>
                    <li><a href="events.html" data-i18n="Events">Events</a></li>
                    <li><a href="press-service.html" data-i18n="Press Service">Press Service</a></li>
                    <li><a href="activity.html" data-i18n="University Activity">Activity</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow" data-i18n="Gallery">Media</span>
                  <h3 data-i18n="Community Outreach">Stories and Outreach</h3>
                  <ul>
                    <li><a href="gallery.html" data-i18n="Gallery">Gallery</a></li>
                    <li><a href="community-outreach.html" data-i18n="Community Outreach">Community Outreach</a></li>
                    <li><a href="egyptian-embassy-visit.html" data-i18n="International Relations">Featured Story</a></li>
                    <li><a href="international-relations.html" data-i18n="International Relations">International Relations</a></li>
                    <li><a href="contact.html" data-i18n="Contact">Media Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a class="tsmu-gh__link" href="contact.html" data-i18n="Contact">Contact</a>
        </nav>
        <div class="tsmu-gh__actions">
          <a class="tsmu-gh__apply" href="apply.html" data-i18n="Apply Now">Apply Now</a>
          <button class="tsmu-gh__toggle" type="button" aria-label="Open navigation" data-i18n-aria-label="Open navigation" aria-expanded="false">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `;

  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) {
      return;
    }

    const link = document.createElement("link");
    link.id = STYLE_ID;
    link.rel = "stylesheet";
    link.href = `shared-header.css?v=${ASSET_VERSION}`;
    document.head.appendChild(link);
  }

  function insertHeader() {
    const legacyTopbar = document.querySelector(".topbar, .top-strip");
    const legacyHeader = document.querySelector("header.header");
    const legacyMainHeader = document.querySelector("header.main-header");

    const skipLink = document.querySelector(".skip");
    if (skipLink) {
      skipLink.insertAdjacentHTML("afterend", HEADER_HTML);
    } else if (legacyTopbar) {
      legacyTopbar.insertAdjacentHTML("beforebegin", HEADER_HTML);
    } else if (legacyHeader) {
      legacyHeader.insertAdjacentHTML("beforebegin", HEADER_HTML);
    } else {
      document.body.insertAdjacentHTML("afterbegin", HEADER_HTML);
    }

    if (legacyTopbar) {
      legacyTopbar.remove();
    }
    if (legacyHeader) {
      legacyHeader.remove();
    }
    if (legacyMainHeader) {
      legacyMainHeader.remove();
    }

    return document.querySelector("[data-shared-header='true']");
  }

  function closeMenus(header) {
    const nav = header.querySelector(".tsmu-gh__nav");
    const toggle = header.querySelector(".tsmu-gh__toggle");
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    header.querySelectorAll(".tsmu-gh__item.is-open").forEach((item) => {
      item.classList.remove("is-open");
      const trigger = item.querySelector(".tsmu-gh__trigger");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  function markActive(header) {
    const currentFile = PAGE_FILE || "index.html";
    const activeLink = header.querySelector(`.tsmu-gh__nav a[href$="/${currentFile}"], .tsmu-gh__nav a[href="${currentFile}"], .tsmu-gh__nav a[href$="/${currentFile}"]`) || header.querySelector(`.tsmu-gh__nav a[href$="${currentFile}"]`);

    if (!activeLink) {
      return;
    }

    activeLink.classList.add("is-current");
    const item = activeLink.closest(".tsmu-gh__item");
    if (item) {
      item.classList.add("is-current-parent");
    }
  }

  function wireHeader(header) {
    const nav = header.querySelector(".tsmu-gh__nav");
    const toggle = header.querySelector(".tsmu-gh__toggle");
    const items = Array.from(header.querySelectorAll(".tsmu-gh__item"));
    const triggers = Array.from(header.querySelectorAll(".tsmu-gh__trigger"));

    const syncScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    syncScroll();
    window.addEventListener("scroll", syncScroll, { passive: true });

    toggle.addEventListener("click", () => {
      const nextState = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", nextState);
      toggle.setAttribute("aria-expanded", String(nextState));
      if (!nextState) {
        items.forEach((item) => {
          item.classList.remove("is-open");
          const trigger = item.querySelector(".tsmu-gh__trigger");
          if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
          }
        });
      }
    });

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        if (window.innerWidth > 1120) {
          return;
        }

        const item = trigger.closest(".tsmu-gh__item");
        const nextState = !item.classList.contains("is-open");

        items.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("is-open");
            const otherTrigger = otherItem.querySelector(".tsmu-gh__trigger");
            if (otherTrigger) {
              otherTrigger.setAttribute("aria-expanded", "false");
            }
          }
        });

        item.classList.toggle("is-open", nextState);
        trigger.setAttribute("aria-expanded", String(nextState));
      });
    });

    header.querySelectorAll(".tsmu-gh__nav a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenus(header);
      });
    });

    document.addEventListener("click", (event) => {
      if (!header.contains(event.target)) {
        closeMenus(header);
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenus(header);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1120) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        items.forEach((item) => {
          item.classList.remove("is-open");
          const trigger = item.querySelector(".tsmu-gh__trigger");
          if (trigger) {
            trigger.setAttribute("aria-expanded", "false");
          }
        });
      }
    });
  }

  ensureStyles();
  const header = document.querySelector("[data-shared-header='true']") || insertHeader();
  if (!header) {
    return;
  }
  markActive(header);
  wireHeader(header);
})();
