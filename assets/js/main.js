/**
 * Resume — Interactive Features
 * Theme toggle, scroll animations, smooth navigation
 */

(function () {
  'use strict';

  /* --- Theme Toggle --- */
  const html = document.documentElement;
  const toggle = document.getElementById('themeToggle');

  function getPreferredTheme() {
    const saved = localStorage.getItem('resume-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('resume-theme', theme);
  }

  applyTheme(getPreferredTheme());

  if (toggle) {
    toggle.addEventListener('click', function () {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  /* --- Scroll-triggered reveal --- */
  const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -30px 0px' };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.version-card, .case-card, .radar-category').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  /* --- Print button --- */
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      // Browser's native print — CSS @media print handles the rest
    }
  });

})();
