const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const revealIO = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach((el) => revealIO.observe(el));

const applyForm = $('#applyForm');
if (applyForm) {
  applyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Application submitted in demo mode. Connect this form to a secure backend for production.');
    applyForm.reset();
  });
}

const newsletter = $('#newsletter');
if (newsletter) {
  newsletter.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for subscribing.');
    newsletter.reset();
  });
}
