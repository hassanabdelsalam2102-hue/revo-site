// assets/js/main.js
/* =========================
  REVO — Main JS
  - Mobile nav toggle
  - Active year in footer
  - Back-to-top button
  - Scroll progress bar
  - Smooth scroll offset helper
  - Reveal-on-scroll animation
  - Contact form localStorage + mailto fallback
========================= */

(function () {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // Footer year
  const yearEl = $('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const navToggle = $('[data-nav-toggle]');
  const navMenu = $('[data-nav-menu]');
  if (navToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close when clicking a link (mobile)
    $$('.nav-link', navMenu).forEach((a) => {
      a.addEventListener('click', () => closeMenu());
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      const target = e.target;
      const clickedInside = navMenu.contains(target) || navToggle.contains(target);
      if (!clickedInside) closeMenu();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Back to top
  const backToTop = $('[data-back-to-top]');
  const header = $('[data-header]');
  const headerHeight = () => (header ? header.getBoundingClientRect().height : 72);

  const toggleBackToTop = () => {
    if (!backToTop) return;
    const y = window.scrollY || document.documentElement.scrollTop;
    backToTop.classList.toggle('show', y > 600);
  };

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll progress
  const progressEl = $('[data-scroll-progress]');
  const updateProgress = () => {
    if (!progressEl) return;
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressEl.style.width = pct.toFixed(2) + '%';
  };

  // Smooth scroll offset for internal links that point to #id
  // Keeps target from hiding under sticky header
  const enhanceAnchorLinks = () => {
    $$('a[href^="#"]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href.length < 2) return;
      a.addEventListener('click', (e) => {
        const id = href.slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const rect = target.getBoundingClientRect();
        const top = window.scrollY + rect.top - headerHeight() - 10;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        setTimeout(() => target.removeAttribute('tabindex'), 600);
      });
    });
  };
  enhanceAnchorLinks();

  // Reveal on scroll
  const revealEls = $$('.reveal');
  if (revealEls.length) {
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reducedMotion && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealEls.forEach((el) => io.observe(el));
    } else {
      // If reduced motion or no support, show everything
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }

  // Contact form: localStorage submission + confirmation
  const form = $('[data-contact-form]');
  const statusEl = $('[data-form-status]');
  const mailtoBtn = $('[data-mailto]');

  const showStatus = (msg, type = 'ok') => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.classList.add('show');
    statusEl.classList.toggle('error', type === 'error');
  };

  const setFieldError = (name, msg) => {
    const el = document.querySelector(`[data-error-for="${name}"]`);
    if (el) el.textContent = msg || '';
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Reset errors
      ['name', 'email', 'market', 'service'].forEach((k) => setFieldError(k, ''));

      const data = Object.fromEntries(new FormData(form).entries());
      let ok = true;

      if (!data.name || String(data.name).trim().length < 2) {
        setFieldError('name', 'Please enter your name.');
        ok = false;
      }
      if (!data.email || !validateEmail(String(data.email).trim())) {
        setFieldError('email', 'Please enter a valid email.');
        ok = false;
      }
      if (!data.market || String(data.market).trim().length < 2) {
        setFieldError('market', 'Please enter your market.');
        ok = false;
      }
      if (!data.service || String(data.service).trim().length < 2) {
        setFieldError('service', 'Please select a service.');
        ok = false;
      }

      if (!ok) {
        showStatus('Please fix the highlighted fields and try again.', 'error');
        return;
      }

      // Persist submissions (local only)
      const payload = {
        ...data,
        createdAt: new Date().toISOString(),
        page: location.pathname
      };

      try {
        const key = 'revo_contact_submissions';
        const current = JSON.parse(localStorage.getItem(key) || '[]');
        current.push(payload);
        localStorage.setItem(key, JSON.stringify(current));
      } catch (err) {
        // LocalStorage might fail in private mode; still show success state
      }

      // Thank you message
      showStatus("Thanks — we’ll reach out within 24 hours.", 'ok');

      // Reset form but keep email/phone in case user wants mailto
      form.reset();
    });
  }

  // Mailto fallback
  if (mailtoBtn) {
    mailtoBtn.addEventListener('click', () => {
      const opsEmail = 'ops@revo.example';
      const subject = encodeURIComponent('REVO — Book a Call');
      const body = encodeURIComponent(
        "Hi REVO,\n\nI'd like to book a call.\n\nName:\nEmail:\nPhone:\nMarket:\nService interest:\nMessage:\n\nThanks!"
      );
      window.location.href = `mailto:${opsEmail}?subject=${subject}&body=${body}`;
    });
  }

  // Scroll listeners (throttled)
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateProgress();
      toggleBackToTop();
      ticking = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    updateProgress();
    toggleBackToTop();
  });

  // Init
  updateProgress();
  toggleBackToTop();
})();
