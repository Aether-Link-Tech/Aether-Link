/* Tailwind configuration, shared by:
   - the browser (Tailwind CDN, used when you open the files locally), and
   - the production build (GitHub Actions compiles a small, fast CSS file from it).
   Colours come from CSS variables in css/styles.css, so light and dark mode switch automatically. */
(function () {
  var config = {
    darkMode: 'class',
    theme: {
      extend: {
        screens: { xs: '480px' },
        fontFamily: {
          sans: ['Poppins', 'system-ui', 'sans-serif'],
          display: ['Marcellus', 'Georgia', 'serif']   // brand wordmark, matches the logo
        },
        colors: {
          page:    'rgb(var(--page) / <alpha-value>)',
          surface: 'rgb(var(--surface) / <alpha-value>)',
          ink:     'rgb(var(--ink) / <alpha-value>)',
          muted:   'rgb(var(--muted) / <alpha-value>)',
          line:    'rgb(var(--line) / <alpha-value>)',
          brand:   'rgb(var(--brand) / <alpha-value>)',
          brand2:  'rgb(var(--brand2) / <alpha-value>)',
          navy:    'rgb(var(--navy) / <alpha-value>)',
          navy2:   'rgb(var(--navy2) / <alpha-value>)'
        },
        boxShadow: {
          soft: '0 10px 30px rgba(23,105,255,.10)',
          lift: '0 18px 44px rgba(23,105,255,.22)'
        }
      }
    }
  };
  if (typeof module !== 'undefined' && module.exports) {
    config.content = ['./*.html', './js/**/*.js'];
    module.exports = config;
  } else {
    tailwind.config = config;
  }
})();
