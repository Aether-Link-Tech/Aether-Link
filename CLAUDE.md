# CLAUDE.md: Aether Link company website

Static marketing site for **Aether Link**, an AI / software startup from Pakistan.
Live: https://aether-link-tech.github.io/Aether-Link/  ·  Repo: https://github.com/Aether-Link-Tech/Aether-Link

## Stack and architecture
- Plain HTML pages + Tailwind CSS + vanilla JS. **No framework, no bundler, no npm.**
- Node is **not installed** on the main dev machine (Windows). Do not add steps that need `npm` locally.
- Tailwind runs from the **Play CDN** (`<script src="https://cdn.tailwindcss.com">`) + `js/tailwind-config.js`, both locally and on the live site. Open any `.html` file in a browser to preview.
- **Hosting:** GitHub Pages, **"Deploy from a branch"** (`main`, `/` root). Every push to `main` is served as-is. There is no build step and no deploy workflow, by the owner's choice.
- Header and footer are **injected by JS** (`js/components.js`) into `<div id="site-header">` / `<div id="site-footer">` on every page. Edit nav/footer there, never per page.

## Files
| File | Purpose |
|---|---|
| `js/config.js` | **Single source of truth** for email, phone, WhatsApp, address, hours, intro video, Web3Forms key, social links. Empty string = hidden everywhere. |
| `js/components.js` | NAV array (menu + dropdowns), header, footer, dark-mode toggle, mobile menu, back-to-top. |
| `js/main.js` | Icon filling, contact details from config, scroll reveal, project filters, contact form (Web3Forms, mailto fallback), `?service=` / `?project=` prefill. |
| `js/icons.js` | Inline SVG icon map. Use `<span data-icon="name" class="block w-6 h-6"></span>`. |
| `js/tailwind-config.js` | Theme (colours as CSS-variable RGB triplets, Poppins + Marcellus fonts). Sets the CDN's `tailwind.config`; also exports via `module.exports` in case a CLI build is added later. |
| `css/styles.css` | Light/dark CSS variables, buttons (`.btn-*`), `.lift` cards, header dropdown, `.reveal` animation, form `.field`. |
| `assets/` | `logo.svg` (AL monogram, hand-traced vector), `logo-full*.png` (crest, navy and white, transparent), `hero.svg`, `og-image.png` (1200x630 share image). |
| `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` | Pages/SEO support. |

## Conventions
- **Every page** must keep the same `<head>` block (theme pre-script, fonts, Tailwind CDN + config, styles.css, OG tags) and the 4 scripts at the end in this order: `config.js`, `icons.js`, `components.js`, `main.js`.
- Write Tailwind classes as complete literal strings (no `'text-' + color` concatenation), so a compiled build stays possible later. Arbitrary values (`w-[58px]`) are fine.
- The CDN injects its styles AFTER `css/styles.css`, so utilities like `hidden` override component classes like `.btn`. Any future compiled `tailwind.css` must also be linked after `styles.css`.
- Colours: use theme tokens (`bg-surface`, `text-ink`, `text-muted`, `border-line`, `text-brand`, `from-navy`) so dark mode works. Brand navy = logo navy `#001c3e`. Accent blue = `--brand`.
- Internal links get `data-nav`. Links are relative (`about.html`), because the site lives under the `/Aether-Link/` sub-path.
- Animate-on-scroll: add class `reveal` (optional `style="--d:.08s"` delay).
- Contact rows that read from config use `data-c="mail|tel|wa|map|hours|social-<name>"` inside an `.info-row`. The whole row hides when the value is empty.
- Project cards: `data-cat` must match a `.filter-btn[data-f]`. "Build something like this" links use `contact.html?service=<key>&project=<name>`. Service keys: `ai, data, web, network, design, it, other` (match `<option data-key>` in contact.html).
- **Honesty rule:** the company is a young startup. Do not add invented stats, client counts, testimonials or fake case studies. Placeholder content must be clearly marked or hidden.
- Wordmark "AETHER LINK" uses `font-display` (Marcellus); body text uses Poppins.

## Workflow
- Preview: open the HTML file directly, or take headless screenshots with Chrome:
  `"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --screenshot=out.png --window-size=1366,1500 --virtual-time-budget=6000 file:///C:/Users/pc/Desktop/Aether-Link/index.html`
  (For phone widths, headless Chrome clamps the window, so render the page inside a 390px `<iframe>` instead.)
- Commits: the owner prefers **one commit per file**, with a message that explains what that file does or what changed. End each message with the Co-Authored-By trailer.
- Deploy = push to `main`. GitHub's built-in "pages build and deployment" publishes it in about 30 to 60 seconds.
- Every file in the repo is public on the site (README.md and CLAUDE.md included). Never commit secrets or private notes.

## Contact form
Web3Forms (free, 250 submissions/month). Messages are emailed to the inbox that owns the access key in `js/config.js`. The key is public by design (it can only send to that inbox). Includes a honeypot field `botcheck`. Restrict the key to the live domain in the Web3Forms dashboard once a custom domain exists.

## Pending / known TODOs
- Custom domain not bought yet. When it is: set it in Pages settings, update `robots.txt`, `sitemap.xml`, `og:image` URLs in every page, and `email` in config.js.
- Blog / guides on resources.html are "Coming soon" with no real articles.
- Data Science and ML Pipeline project descriptions are generic; ask the owner for specifics.
- Phone, WhatsApp, address, hours, intro video: not provided yet (hidden).

---

# Roadmap: making the site more advanced

Ordered roughly from easiest / highest value to largest effort. Each item notes what it needs.

### 1. Custom domain + company email
- Buy a domain (e.g. `aetherlink.pk` from PKNIC, or a `.com`/`.tech` from Namecheap or Cloudflare).
- GitHub Pages: Settings → Pages → Custom domain, add the DNS records, enforce HTTPS. Add a `CNAME` file containing the domain to the repo root.
- Email on the domain: Zoho Mail (free tier) or Google Workspace. Then update `email` in config.js and the Web3Forms inbox.

### 2. Analytics
- Privacy-friendly and simple: Cloudflare Web Analytics (free) or Plausible. Add their one `<script>` to every page `<head>`.
- Google Analytics 4 if marketing needs it (requires a cookie notice).
- Track form submissions as a conversion event in `main.js` after `res.success`.

### 3. SEO upgrades
- Add JSON-LD `Organization` + `WebSite` structured data to index.html (name, logo, sameAs: LinkedIn/GitHub).
- Unique `og:image` per page; `<link rel="canonical">` once on the custom domain.
- Submit the sitemap in Google Search Console and Bing Webmaster Tools.
- Real blog articles (item 5) are the biggest SEO lever.

### 4. Lead management (admin side)
- **Google Sheets log:** a Google Apps Script web app that appends each submission to a sheet. Post to it from `main.js` in parallel with Web3Forms. Free, viewable on a phone.
- **Instant alerts:** Web3Forms → Slack, Telegram or Discord webhooks (built into their dashboard), or Zapier/Make → WhatsApp.
- **Real CRM / admin dashboard:** Supabase (Postgres + auth). Form posts to a Supabase table through an edge function; a password-protected `/admin` page lists leads with status (new / contacted / won). Needs a backend, see item 7.

### 5. Blog and content management
- Small scale: write each article as its own HTML page using the same head/scripts and link it from resources.html.
- Better: migrate to **Astro** (item 8) and write posts in Markdown (`src/content/blog/*.md`).
- Non-technical editing: add **Decap CMS** (Git-based, free) or a headless CMS (Sanity, Contentful) so the team edits content from a web UI.

### 6. AI features (shows off the company's own skills)
- **Website chatbot powered by your RAG system:** answers questions about services and pricing from your own documents.
  - API keys must NEVER be in front-end JS. Run a small backend: **Cloudflare Workers** (free tier) or Vercel/Netlify functions.
  - The worker receives the question, retrieves context (vector DB such as Supabase pgvector, Pinecone or Qdrant), and calls an LLM (e.g. the Claude API with the latest Claude model), then streams the answer back.
  - Add a floating chat button in `components.js`.
- **AI project estimator:** a form where visitors describe a project and get an instant rough scope/timeline, then a "send to Aether Link" button that posts to the lead pipeline.
- **Live demos:** embed small public demos of your projects (RAG, summariser) on the Projects page.

### 7. Moving beyond static hosting
GitHub Pages only serves static files. For backends (chatbot, admin, CRM):
- **Cloudflare Pages + Workers**: host the site and serverless functions together, free tier, fast in Pakistan. Recommended next host.
- Vercel / Netlify: same idea, with built-in forms and functions.
- Keep secrets (API keys) in the host's environment variables, never in the repo.

### 8. Framework migration (when the site grows)
- **Astro** (recommended): keeps the site static and fast, adds real components (header/footer as `.astro` files instead of JS injection), Markdown blog, image optimisation, sitemap plugin, and first-class Tailwind. Most HTML can be pasted in almost unchanged.
- Next.js only if you need a heavy app (logged-in client portal, dashboards).
- Requires Node.js locally (`winget install OpenJS.NodeJS.LTS`), then `npm create astro@latest`.
- Deploy with the official Astro GitHub Pages action, or Cloudflare Pages.

### 9. Client portal (later stage)
- Login for clients to see project progress, invoices and files.
- Stack: Next.js or Astro + Supabase Auth + Supabase Storage, or a ready tool (e.g. Notion client portals) to start.

### 10. Quality, accessibility and performance
- **Compiled Tailwind instead of the CDN** (~19 KB vs ~400 KB, faster first load): switch Pages source to "GitHub Actions" and add a workflow that runs the Tailwind v3 standalone CLI with `-c js/tailwind-config.js`, removes the two CDN `<script>` tags and links `css/tailwind.css` after `styles.css`. A working version exists in git history (`.github/workflows/deploy.yml`, removed in favour of branch deploys).
- Add **Lighthouse CI** to a workflow to fail builds that regress performance, accessibility or SEO scores.
- Self-host fonts (download Poppins/Marcellus woff2 into `assets/fonts/`) to remove the Google Fonts request.
- Convert large PNGs to WebP/AVIF; add `loading="lazy"` to below-the-fold images.
- Test keyboard navigation of the dropdown menu and the dark-mode contrast.

### 11. Multilingual
- English + Urdu (RTL). Easiest after the Astro migration with its i18n routing. Add `dir="rtl"` and an Urdu font such as Noto Nastaliq Urdu.

### 12. Trust and marketing content
- Team section on about.html (photos, roles, LinkedIn links).
- Real testimonials and case studies (only once they exist).
- Pricing / packages page with clear starting prices.
- Careers page and newsletter signup (Buttondown, Mailchimp or Brevo).
