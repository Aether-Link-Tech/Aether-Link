/* Page behaviour: icons, contact details, reveal animation, filters, contact form */
(function () {
  var C = window.AETHER_CONFIG, I = window.ICONS;
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 1. Fill icons: <span data-icon="ai"></span> */
  $$('[data-icon]').forEach(function (el) { el.innerHTML = I[el.dataset.icon] || ''; });

  /* 2. Contact details from config.js: <a data-c="mail">, "tel", "wa", "map", "hours".
        If a value is empty in config.js, its whole row (.info-row) is hidden. */
  function fill(key, value, apply) {
    $$('[data-c="' + key + '"]').forEach(function (el) {
      if (!value) { var row = el.closest('.info-row'); (row || el).classList.add('hidden'); return; }
      apply(el);
    });
  }
  fill('mail', C.email, function (a) { a.href = 'mailto:' + C.email; a.textContent = C.email; });
  fill('tel', C.phone, function (a) { a.href = 'tel:' + C.phone.replace(/[^+\d]/g, ''); a.textContent = C.phone; });
  fill('wa', C.whatsapp, function (a) { a.href = 'https://wa.me/' + C.whatsapp; });
  fill('map', C.address, function (a) { a.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(C.address); a.textContent = C.address; });
  fill('hours', C.hours, function (a) { a.textContent = C.hours; });
  ['linkedin', 'github', 'x', 'facebook', 'instagram'].forEach(function (k) {
    var url = (C.social || {})[k];
    fill('social-' + k, url, function (a) { a.href = url; });
  });
  $$('[data-href="intro"]').forEach(function (a) {
    if (C.introVideo) a.href = C.introVideo; else a.classList.add('hidden');
  });

  /* 3. Scroll reveal */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* 4. Project filters */
  var btns = $$('.filter-btn');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      btns.forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-pressed', 'false'); });
      b.classList.add('on'); b.setAttribute('aria-pressed', 'true');
      var f = b.dataset.f;
      $$('[data-cat]').forEach(function (card) { card.classList.toggle('hidden', f !== 'all' && card.dataset.cat !== f); });
    });
  });

  /* 5. Pre-select the service when arriving from "Discuss this service" (contact.html?service=web) */
  var form = document.getElementById('contact-form');
  if (!form) return;
  var pre = new URLSearchParams(location.search).get('service');
  if (pre && form.service) {
    $$('option', form.service).forEach(function (o) { if (o.dataset.key === pre) o.selected = true; });
  }

  /* 6. Contact form.
        With a Web3Forms key in config.js -> message is delivered straight to your inbox.
        Without a key -> opens the visitor's email app with the message filled in. */
  var status = document.getElementById('form-status');
  var btn = form.querySelector('button[type="submit"]');
  function say(msg, ok) {
    status.textContent = msg;
    status.className = 'text-sm font-medium ' + (ok ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    if (d.get('botcheck')) return; // spam bot filled the hidden field
    var subject = 'Website enquiry: ' + d.get('service');

    if (!C.formAccessKey) {
      var body = 'Name: ' + d.get('name') + '\nEmail: ' + d.get('email') + '\nService: ' + d.get('service') + '\n\n' + d.get('msg');
      window.location.href = 'mailto:' + C.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      return;
    }

    btn.disabled = true; btn.classList.add('opacity-60');
    say('Sending...', true);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: C.formAccessKey,
        subject: subject,
        from_name: 'Aether Link website',
        name: d.get('name'),
        email: d.get('email'),
        service: d.get('service'),
        message: d.get('msg')
      })
    }).then(function (r) { return r.json(); }).then(function (res) {
      if (!res.success) throw new Error(res.message);
      form.reset();
      say('Thank you! Your message has been sent. We will get back to you soon.', true);
    }).catch(function () {
      say('Sorry, something went wrong. Please email us directly at ' + C.email + '.', false);
    }).then(function () { btn.disabled = false; btn.classList.remove('opacity-60'); });
  });
})();
