(function () {
  const STYLE_ID = "tsmu-shared-header-css";
  const ASSET_VERSION = "20260703-2";
  const PAGE_FILE = (window.location.pathname.split("/").pop() || "index.html").split("?")[0].split("#")[0];

  const HEADER_HTML = `
    <header class="tsmu-gh" data-shared-header="true">
      <div class="tsmu-gh__inner">
        <a class="tsmu-gh__brand" href="index.html" aria-label="Tashkent State Medical University Chirchik Branch home">
          <span class="tsmu-gh__mark">
            <img src="assets/logo-official-badge.png" alt="Tashkent State Medical University Chirchik Branch logo">
          </span>
          <span class="tsmu-gh__copy">
            <strong>Tashkent State Medical University</strong>
            <span>Chirchik Branch</span>
          </span>
        </a>
        <nav class="tsmu-gh__nav" aria-label="Primary navigation">
          <a class="tsmu-gh__link" href="index.html">Home</a>

          <div class="tsmu-gh__item" data-group="about">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false">
              About
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">University</span>
                  <h3>Institution Overview</h3>
                  <ul>
                    <li><a href="about.html">About the University</a></li>
                    <li><a href="mission.html">Mission</a></li>
                    <li><a href="achievements.html">Achievements</a></li>
                    <li><a href="structure.html">Structure</a></li>
                    <li><a href="administration.html">Administration</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Leadership</span>
                  <h3>People and Units</h3>
                  <ul>
                    <li><a href="director-page.html">Director</a></li>
                    <li><a href="professors.html">Professors and Teachers</a></li>
                    <li><a href="departments.html">Departments</a></li>
                    <li><a href="centers-organizations.html">Centers and Organizations</a></li>
                    <li><a href="quality-assurance.html">Quality Assurance</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="academics">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false">
              Academics
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--3">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Faculties</span>
                  <h3>Programs</h3>
                  <ul>
                    <li><a href="faculties.html">All Faculties</a></li>
                    <li><a href="general-medicine.html">General Medicine</a></li>
                    <li><a href="medical-pediatrics.html">Medical Pediatrics</a></li>
                    <li><a href="pharmacy.html">Pharmacy</a></li>
                    <li><a href="psychology.html">Psychology</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Academic Pages</span>
                  <h3>Teaching Resources</h3>
                  <ul>
                    <li><a href="academics.html">Academics Overview</a></li>
                    <li><a href="educational-sections.html">Educational Sections</a></li>
                    <li><a href="information-resource-center.html">Information Resource Center</a></li>
                    <li><a href="e-learning.html">E-Learning</a></li>
                    <li><a href="downloads.html">Downloads</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Practice</span>
                  <h3>Research and Training</h3>
                  <ul>
                    <li><a href="clinical-practice.html">Clinical Practice</a></li>
                    <li><a href="simulation-center.html">Simulation Center</a></li>
                    <li><a href="research.html">Research</a></li>
                    <li><a href="publications.html">Publications</a></li>
                    <li><a href="departments.html">Departments</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="admissions">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false">
              Admissions
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Apply</span>
                  <h3>Admissions Essentials</h3>
                  <ul>
                    <li><a href="admissions.html">Admissions Overview</a></li>
                    <li><a href="apply.html">Apply Online</a></li>
                    <li><a href="entrant.html">Entrant Guide</a></li>
                    <li><a href="scholarships.html">Scholarships</a></li>
                    <li><a href="parents-guide.html">Parents Guide</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Support</span>
                  <h3>Helpful Planning Pages</h3>
                  <ul>
                    <li><a href="ai-admission-assistant.html">AI Admission Assistant</a></li>
                    <li><a href="faq.html">Frequently Asked Questions</a></li>
                    <li><a href="contact.html">Admissions Contact</a></li>
                    <li><a href="downloads.html">Required Downloads</a></li>
                    <li><a href="international-students.html">International Students</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="international">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false">
              International
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">International</span>
                  <h3>Global Student Services</h3>
                  <ul>
                    <li><a href="international-students.html">International Students</a></li>
                    <li><a href="international-department.html">International Department</a></li>
                    <li><a href="international-relations.html">International Relations</a></li>
                    <li><a href="visa-invitation.html">Visa Invitation</a></li>
                    <li><a href="health-insurance.html">Health Insurance</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Living Support</span>
                  <h3>Arrival and Daily Life</h3>
                  <ul>
                    <li><a href="hostel.html">Hostel</a></li>
                    <li><a href="living-in-uzbekistan.html">Living in Uzbekistan</a></li>
                    <li><a href="emergency-safety.html">Emergency and Safety</a></li>
                    <li><a href="campus-tour.html">Campus Tour</a></li>
                    <li><a href="contact.html">Contact International Office</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="students">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false">
              Students
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Campus Life</span>
                  <h3>Student Pages</h3>
                  <ul>
                    <li><a href="student.html">Student Life</a></li>
                    <li><a href="student-portal.html">Student Portal</a></li>
                    <li><a href="student-council.html">Student Council</a></li>
                    <li><a href="alumni.html">Alumni</a></li>
                    <li><a href="careers.html">Careers</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Support</span>
                  <h3>Guides and Access</h3>
                  <ul>
                    <li><a href="accessibility.html">Accessibility</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="parents-guide.html">Parents Guide</a></li>
                    <li><a href="scholarships.html">Scholarships</a></li>
                    <li><a href="downloads.html">Downloads</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="tsmu-gh__item" data-group="news">
            <button class="tsmu-gh__trigger" type="button" aria-expanded="false">
              News
              <svg class="tsmu-gh__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>
            </button>
            <div class="tsmu-gh__mega">
              <div class="tsmu-gh__mega-grid tsmu-gh__mega-grid--2">
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Updates</span>
                  <h3>News and Events</h3>
                  <ul>
                    <li><a href="news.html">News</a></li>
                    <li><a href="announcements.html">Announcements</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="press-service.html">Press Service</a></li>
                    <li><a href="activity.html">Activity</a></li>
                  </ul>
                </div>
                <div class="tsmu-gh__col">
                  <span class="tsmu-gh__eyebrow">Media</span>
                  <h3>Stories and Outreach</h3>
                  <ul>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="community-outreach.html">Community Outreach</a></li>
                    <li><a href="egyptian-embassy-visit.html">Featured Story</a></li>
                    <li><a href="international-relations.html">International Relations</a></li>
                    <li><a href="contact.html">Media Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a class="tsmu-gh__link" href="contact.html">Contact</a>
        </nav>
        <div class="tsmu-gh__actions">
          <a class="tsmu-gh__apply" href="apply.html">Apply Now</a>
          <button class="tsmu-gh__toggle" type="button" aria-label="Open navigation" aria-expanded="false">
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
    const current = PAGE_FILE || "index.html";
    const directMatch = header.querySelector(`.tsmu-gh__nav > a[href="${current}"]`);
    const fallbackMatch = header.querySelector(`a[href="${current}"]`);
    const activeLink = directMatch || fallbackMatch;

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
