/* Shared header + footer, injected into every page so you edit them in ONE place. */
(function () {
  var C = window.AETHER_CONFIG;
  var current = document.body.dataset.page || 'home';

  var NAV = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'services', label: 'Services', href: 'services.html', children: [
      ['AI Solutions & Automation', 'services.html#ai'],
      ['Data Science & ML', 'services.html#data'],
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

  /* Logo: the Aether Nova symbol (assets/logo.svg) + live text wordmark, so it adapts to light/dark mode */
  var wordmark = '<span class="wordmark">AETHER <span class="text-grad">NOVA</span></span>';

  /* ---------- Header ---------- */
  var desktop = NAV.map(function (n) {
    var active = n.id === current ? ' active' : '';
    var link = '<a data-nav href="' + n.href + '" class="nav-link' + active + ' inline-flex items-center gap-1 whitespace-nowrap px-3 xl:px-4 py-2 rounded-full text-sm font-medium"' + (active ? ' aria-current="page"' : '') + '>' +
      n.label + (n.children ? '<span data-icon="chev" class="chev block w-3 h-3"></span>' : '') + '</a>';
    if (!n.children) return '<li>' + link + '</li>';
    var dd = n.children.map(function (c) { return '<a data-nav href="' + c[1] + '" class="block px-4 py-2.5 rounded-lg text-sm">' + c[0] + '</a>'; }).join('');
    return '<li class="has-dd relative">' + link +
      '<div class="dd absolute left-0 top-full pt-2 min-w-[240px] z-50"><div class="bg-surface border border-line rounded-2xl shadow-lift p-2">' + dd + '</div></div></li>';
  }).join('');

  var mobile = NAV.map(function (n) {
    var active = n.id === current ? 'bg-solid text-white' : 'hover:bg-surface2';
    var out = '<a data-nav href="' + n.href + '" class="block px-4 py-3 rounded-xl text-sm font-medium ' + active + '">' + n.label + '</a>';
    if (n.children) out += n.children.map(function (c) { return '<a data-nav href="' + c[1] + '" class="block pl-8 pr-4 py-2 text-sm text-muted hover:text-brand">' + c[0] + '</a>'; }).join('');
    return out;
  }).join('');

  var header =
    '<header class="site-header sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-line">' +
      '<div class="mx-auto max-w-7xl px-4 h-[72px] flex items-center justify-between gap-3">' +
        '<a data-nav href="index.html" class="brand flex items-center gap-2.5 shrink-0" aria-label="Aether Nova home">' +
          '<img src="assets/logo.svg" alt="" width="64" height="38" class="logo-mark w-[52px] sm:w-[60px] h-auto">' +
          '<span class="leading-tight whitespace-nowrap"><span class="block text-[15px] sm:text-lg xl:text-xl">' + wordmark + '</span>' +
          '<span class="hidden sm:block lg:hidden xl:block text-[10px] text-muted font-medium tracking-wide">Intelligent software, brilliantly built.</span></span>' +
        '</a>' +
        '<nav class="hidden lg:block" aria-label="Main"><ul class="flex items-center gap-0.5 xl:gap-1">' + desktop + '</ul></nav>' +
        '<div class="flex items-center gap-2 shrink-0">' +
          '<button id="theme-btn" aria-label="Switch light or dark mode" title="Switch light or dark mode" class="w-10 h-10 rounded-full border border-line bg-surface grid place-items-center hover:border-brand hover:text-brand transition">' +
            '<span data-icon="sun" class="block w-5 h-5 dark:hidden"></span><span data-icon="moon" class="hidden w-5 h-5 dark:block"></span></button>' +
          '<a data-nav href="contact.html" class="btn btn-nav hidden md:inline-flex lg:hidden xl:inline-flex">Start a Project <span data-icon="arrow" class="block w-4 h-4"></span></a>' +
          '<button id="burger" class="burger lg:hidden w-11 h-11 rounded-xl border border-line bg-surface grid place-items-center" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span class="burger-line"></span></button>' +
        '</div>' +
      '</div>' +
      '<span id="progress" aria-hidden="true"></span>' +
      '<div id="mobile-menu" class="lg:hidden bg-surface border-t border-line"><div class="px-4 py-3 space-y-1">' + mobile +
        '<a data-nav href="contact.html" class="btn btn-primary w-full mt-3">Start a Project</a></div></div>' +
    '</header>';

  /* ---------- Footer ---------- */
  var social = Object.keys(C.social || {}).filter(function (k) { return C.social[k]; }).map(function (k) {
    return '<a href="' + C.social[k] + '" target="_blank" rel="noopener" aria-label="' + k + '" class="social-btn w-10 h-10 rounded-full border border-white/20 grid place-items-center"><span data-icon="' + k + '" class="block w-[18px] h-[18px] text-white"></span></a>';
  }).join('');

  var footer =
    '<footer class="site-footer bg-navy text-[#c3cde4] pt-16 pb-6">' +
      '<span class="watermark" style="right:-80px;bottom:-60px;width:520px;height:320px" aria-hidden="true"></span>' +
      '<div class="relative mx-auto max-w-6xl px-4">' +
        '<div class="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">' +
          '<div><a data-nav href="index.html" class="flex items-center gap-2.5 text-white text-lg mb-3"><img src="assets/logo.svg" alt="" width="56" height="34" class="w-14 h-auto">' + wordmark + '</a>' +
            '<p class="text-sm leading-relaxed max-w-xs">Intelligent software, brilliantly built. AI, data and software solutions for growing businesses.</p>' +
            '<div class="flex gap-2.5 mt-5">' + social + '</div></div>' +
          '<div><h4 class="text-white font-semibold mb-3">Company</h4>' +
            '<a data-nav class="foot-link" href="index.html">Home</a><a data-nav class="foot-link" href="about.html">About</a><a data-nav class="foot-link" href="projects.html">Projects</a><a data-nav class="foot-link" href="resources.html">Resources</a><a data-nav class="foot-link" href="contact.html">Contact</a></div>' +
          '<div><h4 class="text-white font-semibold mb-3">Services</h4>' +
            '<a data-nav class="foot-link" href="services.html#ai">AI &amp; Automation</a><a data-nav class="foot-link" href="services.html#data">Data Science &amp; ML</a><a data-nav class="foot-link" href="services.html#web">Web &amp; App</a><a data-nav class="foot-link" href="services.html#network">Networking</a><a data-nav class="foot-link" href="services.html#design">Design</a><a data-nav class="foot-link" href="services.html#it">IT Consulting</a></div>' +
          '<div><h4 class="text-white font-semibold mb-3">Get in touch</h4>' +
            (C.email ? '<a class="foot-link break-all" href="mailto:' + C.email + '">' + C.email + '</a>' : '') +
            (C.phone ? '<a class="foot-link" href="tel:' + C.phone.replace(/[^+\d]/g, '') + '">' + C.phone + '</a>' : '') +
            (C.whatsapp ? '<a class="foot-link" target="_blank" rel="noopener" href="https://wa.me/' + C.whatsapp + '">WhatsApp</a>' : '') +
            (C.address ? '<a class="foot-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(C.address) + '">' + C.address + '</a>' : '') +
            '<a data-nav href="contact.html" class="btn btn-primary mt-4 !py-2.5 !text-sm">Start a Project <span data-icon="arrow" class="block w-4 h-4"></span></a></div>' +
        '</div>' +
        '<div class="border-t border-white/10 mt-12 pt-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-[#8a96b3]">' +
          '<span>&copy; ' + new Date().getFullYear() + ' Aether Nova. All rights reserved.</span><span>Designed &amp; built by the Aether Nova team.</span></div>' +
      '</div>' +
    '</footer>' +
    '<a href="#top" id="to-top" aria-label="Back to top" class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full text-white grid place-items-center shadow-lift hover:-translate-y-1 transition"><span data-icon="up" class="block w-5 h-5"></span></a>';

  var h = document.getElementById('site-header'), f = document.getElementById('site-footer');
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  /* ---------- Theme: follows the device until the visitor chooses ---------- */
  var root = document.documentElement, KEY = 'an-theme';
  var mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  document.getElementById('theme-btn').addEventListener('click', function () {
    var dark = root.classList.toggle('dark');
    try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) {}
  });
  if (mq && mq.addEventListener) mq.addEventListener('change', function (e) {
    if (!saved()) root.classList.toggle('dark', e.matches);
  });

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById('burger'), menu = document.getElementById('mobile-menu');
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  window.addEventListener('resize', function () { if (window.innerWidth >= 1024) { menu.classList.remove('open'); burger.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });

  /* ---------- Scroll: progress bar, header shadow, back-to-top ---------- */
  var toTop = document.getElementById('to-top'), bar = document.getElementById('progress'), head = document.querySelector('.site-header');
  function onScroll() {
    var y = window.scrollY, max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty('--p', max > 0 ? Math.min(y / max, 1) : 0);
    head.classList.toggle('scrolled', y > 8);
    toTop.classList.toggle('show', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
