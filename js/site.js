/* Kensington Bathrooms — site behaviour. No dependencies. */
(function () {
  'use strict';
  var cfg = window.KB_CONFIG || {};

  // Tracking hook: dispatches DOM events only. No analytics tool is loaded
  // until one is approved; that tool can listen for 'kb:track'.
  function track(name, detail) {
    document.dispatchEvent(new CustomEvent('kb:track', { detail: Object.assign({ event: name }, detail || {}) }));
  }

  // Header border once the page scrolls.
  var header = document.querySelector('.site-header');
  var onScroll = function () { header && header.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu.
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.querySelector('.menu-toggle__label').textContent = open ? 'Menu' : 'Close';
      menu.hidden = open;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { toggle.click(); toggle.focus(); }
    });
  }

  // Contact drawer (native <dialog>: focus trapping and Escape handled by the browser).
  var drawer = document.getElementById('contact-drawer');
  var lastTrigger = null;
  document.querySelectorAll('[data-open-drawer]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!drawer || typeof drawer.showModal !== 'function') { window.location.href = '/kensington-bathrooms/contact/'; return; }
      lastTrigger = btn;
      drawer.showModal();
      track('expert_drawer_open');
    });
  });
  if (drawer) {
    drawer.querySelectorAll('[data-close-drawer]').forEach(function (b) {
      b.addEventListener('click', function () { drawer.close(); });
    });
    // Close when the backdrop (outside the panel) is clicked.
    drawer.addEventListener('click', function (e) { if (e.target === drawer) drawer.close(); });
    drawer.addEventListener('close', function () { if (lastTrigger) lastTrigger.focus(); });
  }

  // WhatsApp prefilled message (only present when a number is configured).
  document.querySelectorAll('[data-whatsapp]').forEach(function (a) {
    a.addEventListener('click', function () {
      var pc = (document.querySelector('input[name="postcode"]') || {}).value || '';
      var msg = (cfg.whatsappMessage || '').replace('{postcode}', pc ? ' in ' + pc.trim().toUpperCase() : '');
      a.href = a.href.split('?')[0] + '?text=' + encodeURIComponent(msg);
    });
  });

  // Click tracking for call/WhatsApp links.
  document.querySelectorAll('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () { track(el.getAttribute('data-track')); });
  });

  // Forms: accessible validation, honeypot, submission to the configured endpoint.
  var messages = {
    name: 'Enter your name',
    email: 'Enter an email address, like name@example.com',
    telephone: 'Enter a telephone number',
    postcode: 'Enter the property postcode',
    project_type: 'Choose the type of project',
    investment: 'Choose an investment range',
    timeframe: 'Choose when you would like to start'
  };

  function setError(input, text) {
    var err = document.getElementById(input.id + '-error');
    if (text) { input.setAttribute('aria-invalid', 'true'); if (err) { err.textContent = text; err.hidden = false; } }
    else { input.removeAttribute('aria-invalid'); if (err) { err.textContent = ''; err.hidden = true; } }
  }

  function validate(input) {
    var v = (input.value || '').trim();
    if (input.required && !v) return messages[input.name] || 'This field is required';
    if (input.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return messages.email;
    if (input.type === 'tel' && v && v.replace(/[^\d]/g, '').length < 10) return 'Enter a telephone number with at least 10 digits';
    if (input.name === 'postcode' && v && !/^[A-Za-z]{1,2}\d[A-Za-z\d]?\s*\d[A-Za-z]{2}$/.test(v)) return 'Enter a full UK postcode, like W14 9AA';
    return '';
  }

  document.querySelectorAll('[data-kb-form]').forEach(function (form) {
    var status = form.querySelector('.form__status');
    var fields = form.querySelectorAll('input:not([name="website"]), select, textarea');
    fields.forEach(function (f) {
      f.addEventListener('blur', function () { if (f.getAttribute('aria-invalid')) setError(f, validate(f)); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstBad = null;
      fields.forEach(function (f) {
        var msg = validate(f); setError(f, msg);
        if (msg && !firstBad) firstBad = f;
      });
      if (firstBad) { firstBad.focus(); status.textContent = 'Please check the highlighted fields.'; return; }

      var data = new FormData(form);
      if (data.get('website')) return; // honeypot filled: silently drop

      if (!cfg.formEndpoint) {
        status.textContent = 'This form is not connected yet, so nothing has been sent.';
        return;
      }
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      status.textContent = 'Sending…';
      data.append('form', form.getAttribute('data-kb-form'));
      data.append('page', window.location.pathname);
      fetch(cfg.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); })
        .then(function () {
          var kind = form.getAttribute('data-kb-form');
          form.reset();
          status.textContent = kind === 'callback'
            ? 'Thank you. We have your number and will call you back.'
            : 'Thank you. We have your details and will be in touch to arrange a visit. If you have photos of the room, you can reply to our email with them.';
          track(kind === 'callback' ? 'callback_request' : 'consultation_submit');
        })
        .catch(function () {
          status.textContent = 'Your message could not be sent. Please try again in a moment.';
        })
        .finally(function () { btn.disabled = false; });
    });
  });
})();
