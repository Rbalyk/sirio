// main.js
(function () {
  'use strict';

  // ── i18n key resolver ────────────────────────────────────
  // Supports dot notation + array indices: "stats[0].num", "services.items[2].name"
  function resolve(obj, path) {
    return path
      .replace(/\[(\d+)\]/g, '.$1')
      .split('.')
      .reduce(function (acc, key) { return acc != null ? acc[key] : undefined; }, obj);
  }

  // ── Apply translations to DOM ────────────────────────────
  function applyTranslations(lang) {
    var t = window.i18n[lang];
    if (!t) return;

    // Update <title> and <meta name="description"> for SEO
    if (t.meta) {
      if (t.meta.title) document.title = t.meta.title;
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && t.meta.description) metaDesc.setAttribute('content', t.meta.description);
    }

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = resolve(t, el.dataset.i18n);
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = resolve(t, el.dataset.i18nPlaceholder);
      if (val != null) el.placeholder = val;
    });

    // Update html[lang] attribute for accessibility
    document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';
  }

  // ── Language switcher ────────────────────────────────────
  function initLang() {
    document.querySelectorAll('.nav-lang button, .lang-switcher button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        window.location.pathname = btn.dataset.lang === 'ua' ? '/ua' : '/';
      });
    });
  }

  function syncLangButtons(lang) {
    document.querySelectorAll('.nav-lang button, .lang-switcher button').forEach(function (b) {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  // ── Scroll reveal ────────────────────────────────────────
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('visible'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          setTimeout(function () { e.target.classList.add('visible'); }, i * 60);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { obs.observe(el); });
  }

  // ── CTA form ─────────────────────────────────────────────
  function initForm() {
    var btn   = document.getElementById('cta-submit');
    var inp   = document.getElementById('cta-email');
    var phone = document.getElementById('cta-phone');
    if (!btn || !inp || !phone) return;

    btn.addEventListener('click', function () {
      var email    = inp.value.trim();
      var phoneVal = phone.value.trim();
      var valid    = true;

      if (!email || !email.includes('@')) {
        inp.style.borderColor = '#E24B4A';
        setTimeout(function () { inp.style.borderColor = ''; }, 1500);
        valid = false;
      }
      if (!phoneVal || !/\d{7,}/.test(phoneVal)) {
        phone.style.borderColor = '#E24B4A';
        setTimeout(function () { phone.style.borderColor = ''; }, 1500);
        valid = false;
      }
      if (!valid) return;

      var originalText = btn.textContent;
      btn.textContent = '...';
      btn.disabled = true;

        console.log('before request')

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, phone: phoneVal })
      })
        .then(function (res) {
            console.log('Response status:', res.status);
          if (!res.ok) throw new Error('server error');
          btn.textContent = '✓ Sent!';
          inp.value   = '';
          phone.value = '';
          setTimeout(function () {
            btn.textContent = originalText;
            btn.disabled = false;
          }, 3000);
        })
        .catch(function () {
            console.error('Fetch error:', err);
          btn.textContent = 'Error, try again';
          btn.disabled = false;
          setTimeout(function () { btn.textContent = originalText; }, 3000);
        });
    });
  }

  // ── Mobile burger toggle ─────────────────────────────────
  function initBurger() {
    var burger = document.getElementById('nav-burger');
    var nav    = document.getElementById('main-nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when any mobile link is clicked
    document.querySelectorAll('.nav-mobile-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when mobile CTA is clicked
    var mobileCta = document.querySelector('.nav-mobile-cta');
    if (mobileCta) {
      mobileCta.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    }
  }

  function detectLang() {
    var path = window.location.pathname;
    return path.startsWith('/ua') ? 'ua' : 'en';
  }

  // ── Boot ─────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    window._lang = detectLang();
    applyTranslations(window._lang);
    syncLangButtons(window._lang);

    initLang();
    initBurger();
    initReveal();
    initForm();
  });
})();
