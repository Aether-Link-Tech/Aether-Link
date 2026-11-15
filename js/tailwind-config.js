/* Tailwind configuration for the Tailwind CDN (and any future compiled build).
   Colours come from CSS variables in css/styles.css, so light and dark mode switch automatically. */
(function () {
  var config = {
    darkMode: 'class',
    theme: {
      extend: {
        screens: { xs: '480px' },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          head: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
          display: ['Archivo', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif']   // wordmark, matches the logo lettering
        },
        colors: {
          page:     'rgb(var(--page) / <alpha-value>)',
          surface:  'rgb(var(--surface) / <alpha-value>)',
          surface2: 'rgb(var(--surface2) / <alpha-value>)',
          ink:      'rgb(var(--ink) / <alpha-value>)',
          muted:    'rgb(var(--muted) / <alpha-value>)',
          line:     'rgb(var(--line) / <alpha-value>)',
          brand:    'rgb(var(--brand) / <alpha-value>)',
          brand2:   'rgb(var(--brand2) / <alpha-value>)',
          solid:    'rgb(var(--solid) / <alpha-value>)',
          cyan:     'rgb(var(--cyan) / <alpha-value>)',
          violet:   'rgb(var(--violet) / <alpha-value>)',
          navy:     'rgb(var(--navy) / <alpha-value>)',
          navy2:    'rgb(var(--navy2) / <alpha-value>)'
        },
        boxShadow: {
          soft: '0 10px 30px rgba(29,78,216,.08)',
          lift: '0 18px 44px rgba(29,78,216,.18)'
        }
      }
    }
  };
  if (typeof module !== 'undefined' && module.exports) {
    config.content = ['./*.html', './js/**/*.js'];
    module.exports = config;
  } else if (window.tailwind) {
    tailwind.config = config;
  }
})();
