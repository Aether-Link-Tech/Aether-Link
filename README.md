# Aether Link: company website

Plain HTML + Tailwind CSS + JavaScript. No build step needed to edit or preview.
**Open `index.html` in a browser** to preview (internet is needed for Tailwind CDN and Google Fonts).

Live site: https://aether-link-tech.github.io/Aether-Link/

## Folder map
```
index.html  services.html  projects.html  about.html  resources.html  contact.html  404.html
assets/   logo.svg (AL monogram)  logo-full.png / logo-full-white.png (crest)  hero.svg  og-image.png (link preview)
css/      styles.css          theme colours (light/dark), buttons, hover effects
js/       config.js           YOUR contact details, social links, form key, intro video
          tailwind-config.js  Tailwind colours / fonts (used locally AND by the live build)
          icons.js            icon library  (<span data-icon="ai"></span>)
          components.js       shared header + footer, dark mode, mobile menu
          main.js             reveal animation, filters, contact form
.github/workflows/deploy.yml  publishes the site to GitHub Pages on every push to main
robots.txt  sitemap.xml       search-engine files (update the URL when you get a domain)
```

## Common edits
| I want to change...        | Edit this |
|----------------------------|-----------|
| Email / phone / WhatsApp / address / hours / socials / intro video | `js/config.js` (empty value = hidden on the site) |
| Make the contact form deliver to your inbox | get a free key at web3forms.com, paste it into `formAccessKey` in `js/config.js` |
| Menu items or footer links | `js/components.js` |
| Logo / images              | files in `assets/` |
| Brand colours              | variables at the top of `css/styles.css` |
| Page text                  | the matching `.html` file |

## Deploying
Every push to `main` deploys automatically. The workflow compiles Tailwind into a small
`css/tailwind.css`, so the live site doesn't use the Tailwind CDN.

One-time setup: GitHub repo -> **Settings -> Pages -> Source: GitHub Actions**.

### When you buy a domain
1. Repo **Settings -> Pages -> Custom domain**: enter it (e.g. `aetherlink.pk`) and tick *Enforce HTTPS*.
2. At your domain registrar, add the DNS records GitHub shows (4 `A` records for the root domain, or a `CNAME` for `www` pointing to `aether-link-tech.github.io`).
3. Replace `https://aether-link-tech.github.io/Aether-Link/` in `robots.txt` and `sitemap.xml` with your domain.
4. Change `email` in `js/config.js` to your company-domain address.
