/* Shared header + footer, injected into every page so you edit them in ONE place. */
(function () {
  var C = window.AETHER_CONFIG, I = window.ICONS;
  var current = document.body.dataset.page || 'home';

  var NAV = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'services', label: 'Services', href: 'services.html', children: [
      ['AI Solutions & Automation', 'services.html#ai'],
      ['Web & App Development', 'services.html#web'],
      ['Networking & Technical', 'services.html#network'],
      ['Graphic & Digital Design', 'services.html#design'],
      ['IT Projects & Consulting', 'services.html#it']
    ]},
    { id: 'projects', label: 'Projects', href: 'projects.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'resources', label: 'Resources', href: 'resources.html', children: [
      ['Blog & Insights', 'resources.html#blog'],
      ['Guides & Tutorials', 'resources.html#guides'],
      ['FAQ', 'resources.html#faq']
    ]},
    { id: 'contact', label: 'Contact', href: 'contact.html' }
  ];

  /* ---------- Header ---------- */
  var desktop = NAV.map(function (n) {
    var active = n.id === current ? ' active' : '';
    var link = '<a data-nav href="' + n.href + '" class="nav-link' + active + ' inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium">' +
      n.label + (n.children ? '<span data-icon="chev" class="chev block w-3 h-3"></span>' : '') + '</a>';
    if (!n.children) return '<li>' + link + '</li>';
    var dd = n.children.map(function (c) { return '<a data-nav href="' + c[1] + '" class="block px-4 py-2.5 rounded-lg text-sm">' + c[0] + '</a>'; }).join('');
    return '<li class="has-dd relative">' + link +
      '<div class="dd absolute left-0 top-full pt-2 min-w-[230px] z-50"><div class="bg-surface border border-line rounded-2xl shadow-lift p-2">' + dd + '</div></div></li>';
  }).join('');

  var mobile = NAV.map(function (n) {
    var active = n.id === current ? 'bg-brand text-white' : 'hover:bg-page';
    var out = '<a data-nav href="' + n.href + '" class="block px-4 py-3 rounded-xl text-sm font-medium ' + active + '">' + n.label + '</a>';
    if (n.children) out += n.children.map(function (c) { return '<a data-nav href="' + c[1] + '" class="block pl-8 pr-4 py-2 text-sm text-muted hover:text-brand">' + c[0] + '</a>'; }).join('');
    return out;
  }).join('');

  var header =
    '<header class="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-line">' +
      '<div class="mx-auto max-w-6xl px-4 h-[78px] flex items-center justify-between gap-4">' +
        '<a data-nav href="index.html" class="brand flex items-center gap-3.5" aria-label="Aether Link home">' +
          '<img src="assets/logo.svg" alt="" width="58" height="58" class="logo-spin w-12 h-12 sm:w-[58px] sm:h-[58px]">' +
          '<span class="hidden xs:block w-px h-11 bg-ink/50"></span>' +
          '<span class="leading-tight"><span class="block font-display text-xl sm:text-2xl tracking-[.12em]">AETHER LINK</span>' +
          '<span class="hidden sm:block text-[10px] text-muted font-medium">Connecting Ideas, Building Solutions.</span></span>' +
        '</a>' +
        '<nav class="hidden lg:block" aria-label="Main"><ul class="flex items-center gap-1">' + desktop + '</ul></nav>' +
        '<div class="flex items-center gap-2.5">' +
          '<button id="theme-btn" aria-label="Toggle dark mode" title="Toggle dark mode" class="w-10 h-10 rounded-full border border-line bg-surface grid place-items-center hover:border-brand hover:rotate-[25deg] hover:scale-110 transition">' +
            '<span data-icon="sun" class="block w-5 h-5 dark:hidden"></span><span data-icon="moon" class="hidden w-5 h-5 dark:block"></span></button>' +
          '<a data-nav href="contact.html" class="btn btn-nav hidden md:inline-flex">Get in Touch <span data-icon="arrow" class="block w-4 h-4"></span></a>' +
          '<button id="burger" class="burger lg:hidden w-11 h-11 rounded-xl border border-line bg-surface grid place-items-center" aria-label="Open menu" aria-expanded="false"><span class="burger-line"></span></button>' +
        '</div>' +
      '</div>' +
      '<div id="mobile-menu" class="lg:hidden bg-surface border-t border-line"><div class="px-4 py-3 space-y-1">' + mobile +
        '<a data-nav href="contact.html" class="btn btn-primary w-full mt-3">Get in Touch</a></div></div>' +
    '</header>';

  /* ---------- Footer ---------- */
  var social = Object.keys(C.social || {}).filter(function (k) { return C.social[k]; }).map(function (k) {
    return '<a href="' + C.social[k] + '" target="_blank" rel="noopener" aria-label="' + k + '" class="social-btn w-10 h-10 rounded-full border border-[#2f4f90] grid place-items-center"><span data-icon="' + k + '" class="block w-[18px] h-[18px] text-white"></span></a>';
  }).join('');

  var footer =
    '<footer class="bg-navy text-[#cfe0ff] pt-14 pb-6">' +
      '<div class="mx-auto max-w-6xl px-4">' +
        '<div class="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">' +
          '<div><h4 class="flex items-center gap-3 text-white font-display text-xl tracking-[.12em] mb-3"><img src="assets/logo.svg" alt="" width="40" height="40" class="w-10 h-10 rounded-full ring-1 ring-white/40">AETHER LINK</h4>' +
            '<p class="text-sm">Connecting Ideas, Building Solutions. Smart, scalable and creative digital solutions for growing businesses.</p>' +
            '<div class="flex gap-2.5 mt-4">' + social + '</div></div>' +
          '<div><h4 class="text-white font-semibold mb-3">Company</h4>' +
            '<a data-nav class="foot-link" href="index.html">Home</a><a data-nav class="foot-link" href="about.html">About</a><a data-nav class="foot-link" href="projects.html">Projects</a><a data-nav class="foot-link" href="contact.html">Contact</a></div>' +
          '<div><h4 class="text-white font-semibold mb-3">Services</h4>' +
            '<a data-nav class="foot-link" href="services.html#ai">AI &amp; Automation</a><a data-nav class="foot-link" href="services.html#web">Web &amp; App</a><a data-nav class="foot-link" href="services.html#network">Networking</a><a data-nav class="foot-link" href="services.html#design">Design</a><a data-nav class="foot-link" href="services.html#it">IT Consulting</a></div>' +
          '<div><h4 class="text-white font-semibold mb-3">Get in touch</h4>' +
            (C.email ? '<a class="foot-link break-all" href="mailto:' + C.email + '">' + C.email + '</a>' : '') +
            (C.phone ? '<a class="foot-link" href="tel:' + C.phone.replace(/[^+\d]/g, '') + '">' + C.phone + '</a>' : '') +
            (C.whatsapp ? '<a class="foot-link" target="_blank" rel="noopener" href="https://wa.me/' + C.whatsapp + '">WhatsApp</a>' : '') +
            (C.address ? '<a class="foot-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(C.address) + '">' + C.address + '</a>' : '') +
            '<a data-nav class="foot-link" href="contact.html">Send us a message &rarr;</a></div>' +
        '</div>' +
        '<div class="border-t border-[#1f3a73] mt-9 pt-5 text-center text-xs text-[#8ea6d6]">&copy; ' + new Date().getFullYear() + ' Aether Link. All rights reserved.</div>' +
      '</div>' +
    '</footer>' +
    '<a href="#top" id="to-top" aria-label="Back to top" class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-brand text-white grid place-items-center shadow-lift hover:-translate-y-1 transition"><span data-icon="up" class="block w-5 h-5"></span></a>';

  var h = document.getElementById('site-header'), f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  /* ---------- Behaviour ---------- */
  var root = document.documentElement;
  document.getElementById('theme-btn').addEventListener('click', function () {
    var dark = root.classList.toggle('dark');
    try { localStorage.setItem('al-theme', dark ? 'dark' : 'light'); } catch (e) {}
  });

  var burger = document.getElementById('burger'), menu = document.getElementById('mobile-menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1024) { menu.classList.remove('open'); burger.classList.remove('open'); } });

  var toTop = document.getElementById('to-top');
  window.addEventListener('scroll', function () { toTop.classList.toggle('show', window.scrollY > 500); }, { passive: true });
})();
