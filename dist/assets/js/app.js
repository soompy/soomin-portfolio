const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-details-toggle]');
const details = document.querySelector('#momenttune-details');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateHeader() {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

if (toggle && details) {
  toggle.addEventListener('click', () => {
    const willOpen = details.hidden;
    details.hidden = !willOpen;
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.lastElementChild.textContent = willOpen ? '−' : '＋';
  });
}

const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  revealItems.forEach((item) => observer.observe(item));
}
