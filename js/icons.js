/* Icon library. Use anywhere in HTML:  <span data-icon="ai" class="block w-12 h-12 text-brand"></span> */
(function () {
  var S = 'viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"';
  var T = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"';
  var F = 'viewBox="0 0 24 24" fill="currentColor" class="w-full h-full"';
  window.ICONS = {
    ai:   '<svg ' + S + ' stroke-width="2.2"><rect x="12" y="12" width="24" height="24" rx="3"/><path d="M18 24l3-8 3 8M19 22h4M28 16v8"/><path d="M17 12V6M24 12V6M31 12V6M17 42v-6M24 42v-6M31 42v-6M12 17H6M12 24H6M12 31H6M42 17h-6M42 24h-6M42 31h-6"/></svg>',
    code: '<svg ' + S + ' stroke-width="2.6"><path d="M16 14L5 24l11 10M32 14l11 10-11 10M28 8L20 40"/></svg>',
    net:  '<svg ' + S + ' stroke-width="2.4"><circle cx="24" cy="9" r="4.5"/><circle cx="11" cy="37" r="4.5"/><circle cx="37" cy="37" r="4.5"/><circle cx="24" cy="24" r="3"/><path d="M24 13.5V21M21.5 26l-8 7.5M26.5 26l8 7.5"/></svg>',
    pal:  '<svg ' + S + ' stroke-width="2.3"><path d="M24 6C13 6 6 14 6 23c0 9 8 17 18 17 3 0 4-2 3-4-1.5-3 .5-5 3.5-5H36c4 0 6-2 6-6C42 13 34 6 24 6z"/><circle cx="15" cy="22" r="2.2"/><circle cx="21" cy="14" r="2.2"/><circle cx="30" cy="14" r="2.2"/><circle cx="35" cy="22" r="2.2"/></svg>',
    lap:  '<svg ' + S + ' stroke-width="2.3"><rect x="8" y="9" width="32" height="22" rx="2.5"/><path d="M3 38h42l-3-7H6z"/><circle cx="24" cy="20" r="4"/><path d="M24 13v3M24 24v3M17 20h3M28 20h3"/></svg>',
    arrow:'<svg ' + T + ' stroke-width="2.6"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
    chev: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full"><path d="M2 4l4 4 4-4"/></svg>',
    mail: '<svg ' + T + '><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    phone:'<svg ' + T + '><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/></svg>',
    pin:  '<svg ' + T + '><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock:'<svg ' + T + '><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    chat: '<svg ' + T + '><path d="M4 5h16v11H9l-5 4z"/></svg>',
    sun:  '<svg ' + T + '><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>',
    moon: '<svg ' + T + '><path d="M20 14.5A8.5 8.5 0 019.5 4 8.5 8.5 0 1020 14.5z"/></svg>',
    up:   '<svg ' + T + ' stroke-width="2.6"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    rocket:'<svg ' + F + '><path d="M14.5 3c3 .3 5.7 3 6 6-1.5 3.5-4.2 6-7 7.5l-4.5-4.5C10.5 8.2 12.5 4.8 14.5 3zm-1 4.5a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM6.5 12.2l5.3 5.3-2.7 1.2-3.8-3.8zM3.5 20.5c.2-2 1-3.2 2.4-3.6l1.2 1.2c-.4 1.4-1.6 2.2-3.6 2.4z"/></svg>',
    users:'<svg ' + F + '><circle cx="9" cy="8" r="3.4"/><path d="M2.5 19c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6z"/><circle cx="17" cy="9" r="2.6"/><path d="M17 13c2.9 0 4.8 1.9 4.8 4.5V19h-4.6c0-2.2-.7-4.2-2-5.4.5-.4 1.1-.6 1.8-.6z"/></svg>',
    star: '<svg ' + F + '><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',
    linkedin: '<svg ' + F + '><path d="M4.98 3.5a2.5 2.5 0 11-.01 5 2.5 2.5 0 01.01-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4z"/></svg>',
    github:   '<svg ' + F + '><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 2.9.8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0012 2z"/></svg>',
    chart:    '<svg ' + S + ' stroke-width="2.4"><path d="M6 6v36h36"/><path d="M12 32l9-10 7 6 12-14"/><circle cx="21" cy="22" r="2.2"/><circle cx="28" cy="28" r="2.2"/><circle cx="40" cy="14" r="2.2"/></svg>',
    flow:     '<svg ' + S + ' stroke-width="2.4"><rect x="4" y="18" width="10" height="12" rx="2.5"/><rect x="19" y="18" width="10" height="12" rx="2.5"/><rect x="34" y="18" width="10" height="12" rx="2.5"/><path d="M14 24h5M29 24h5"/><path d="M39 18v-6H9v6M9 30v6h30v-6" stroke-dasharray="3 3"/></svg>',
    mobile:   '<svg ' + S + ' stroke-width="2.4"><rect x="13" y="4" width="22" height="40" rx="4"/><path d="M21 38h6"/><path d="M18 13h12M18 19h12M18 25h7"/></svg>',
    rag:      '<svg ' + S + ' stroke-width="2.3"><path d="M8 8h18l6 6v18H8z"/><path d="M26 8v6h6M13 18h12M13 23h12M13 28h8"/><circle cx="34" cy="34" r="7"/><path d="M39 39l5 5"/></svg>',
    check:    '<svg ' + T + ' stroke-width="2.6"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    bulb:     '<svg ' + T + '><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0012 3z"/></svg>',
    shield:   '<svg ' + T + '><path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>',
    x:        '<svg ' + F + '><path d="M17.8 3h3L14.2 10.6 22 21h-6.1l-4.8-6.3L5.6 21h-3l7-8.1L2 3h6.2l4.3 5.7zM16.7 19.2h1.7L7.3 4.7H5.5z"/></svg>',
    facebook: '<svg ' + F + '><path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.9.4-1.7 1.8-1.7h1.6V3.8S15.6 3.5 14.3 3.5c-2.7 0-4.4 1.6-4.4 4.5v2.5H7v3.3h2.9V22z"/></svg>',
    instagram:'<svg ' + F + '><path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.3-3.3a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>'
  };
})();
