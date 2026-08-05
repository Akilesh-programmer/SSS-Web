# SSS Hospital — Deployment & SEO Guide

> **Last Updated:** July 2026  
> **Site:** [ssshospitals.in](https://ssshospitals.in)  
> **Stack:** React (Vite) + Puppeteer SSG Pre-rendering + Vercel Build Output API

---

## Table of Contents

1. [Why This Guide Exists](#why-this-guide-exists)
2. [Architecture Overview](#architecture-overview)
3. [Deployment Workflow](#deployment-workflow)
4. [Critical: Disable Vercel Auto-Builds](#critical-disable-vercel-auto-builds)
5. [How Pre-rendering Works](#how-pre-rendering-works)
6. [How Vercel Routing Works](#how-vercel-routing-works)
7. [SEO Verification Checklist](#seo-verification-checklist)
8. [Common Pitfalls & Troubleshooting](#common-pitfalls--troubleshooting)
9. [Post-Deployment SEO Steps](#post-deployment-seo-steps)

---

## Why This Guide Exists

This site is a **React Single Page Application (SPA)**. By default, SPAs serve a single `index.html` with an empty `<div id="root"></div>` — all content is rendered by JavaScript in the browser after the page loads.

**The problem:** Search engine crawlers (Google, Bing) often see only that empty `<div>`. They don't reliably execute JavaScript, which means:
- No page titles, descriptions, or keywords are indexed
- No department-specific content is visible to crawlers
- No structured data (JSON-LD schemas) is parsed
- The site effectively doesn't exist for SEO purposes

**The solution:** We pre-render every route at build time using headless Chrome (Puppeteer). This generates a fully rendered static HTML file for each page. When Googlebot requests `/specialities/cardiology`, it receives a complete HTML document with the title, meta tags, body content, and schemas already baked in — no JavaScript required.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                   LOCAL MACHINE                         │
│                                                         │
│  1. npm run build                                       │
│     ├── Vite builds the React app                       │
│     ├── Puppeteer launches headless Chrome               │
│     ├── Visits each of the 34 routes                    │
│     ├── Waits for React to render + set meta tags       │
│     └── Saves the full HTML as dist/<route>/index.html  │
│                                                         │
│  2. node scripts/vercel-prebuilt.js                     │
│     ├── Copies dist/ → .vercel/output/static/           │
│     ├── Parses public/vercel.json                       │
│     ├── Compiles redirects, headers, rewrites           │
│     │   into Build Output API "routes" array            │
│     └── Writes .vercel/output/config.json               │
│                                                         │
│  3. npx vercel deploy --prebuilt --prod --yes           │
│     ├── Uploads .vercel/output/ to Vercel               │
│     ├── Vercel skips its own build step                  │
│     └── Deploys static files directly to CDN edge       │
│                                                         │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                   VERCEL CDN EDGE                       │
│                                                         │
│  Request: /specialities/cardiology                      │
│     1. Check redirects → no match                       │
│     2. Apply response headers (CSP, HSTS, etc.)         │
│     3. Check filesystem → finds                         │
│        /specialities/cardiology/index.html (85 KB)      │
│     4. Serve the pre-rendered static HTML ✅             │
│        (unique title, canonical, schemas, body content) │
│                                                         │
│  Request: /some-unknown-route                           │
│     1. Check redirects → no match                       │
│     2. Apply response headers                           │
│     3. Check filesystem → NOT found                     │
│     4. Fall through to SPA rewrite → /index.html        │
│     5. Client-side React router handles the route       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Deployment Workflow

### The Only Correct Way to Deploy

```bash
# Single command that does everything:
npm run deploy
```

This runs three steps sequentially:
1. `npm run build` — Vite production build + Puppeteer pre-rendering
2. `node scripts/vercel-prebuilt.js` — Compiles Vercel routing config
3. `npx vercel deploy --prebuilt --prod --yes` — Deploys to production

### Pushing Code to Git (Version Control Only)

```bash
git add .
git commit -m "your commit message"
git push origin dev
```

> ⚠️ **IMPORTANT:** Pushing to Git should **NOT** trigger a Vercel build. If it does, Vercel will overwrite your prebuilt deployment with a broken one. See the next section.

### Full Workflow Example

```bash
# 1. Make your code changes
# 2. Test locally
npm run dev

# 3. Deploy to production
npm run deploy

# 4. Verify the deployment (see SEO Verification Checklist below)

# 5. Commit and push to Git for version control
git add .
git commit -m "feat: updated cardiology department content"
git push origin dev
```

> **Order matters!** Deploy first, then push to Git. If you push first and Vercel auto-builds aren't disabled, the auto-build will overwrite your deployment.

---

> [!IMPORTANT]
> # 🚨 MANDATORY POST-DEPLOYMENT STEP: RESUBMIT SITEMAP!
> 
> ### **AFTER EVERY SINGLE DEPLOYMENT, YOU MUST RESUBMIT THE SITEMAP IN GOOGLE SEARCH CONSOLE:**
> 
> 1. Open **[Google Search Console](https://search.google.com/search-console)**
> 2. Go to **Sitemaps** (under *Indexing*)
> 3. Enter URL: **`https://ssshospitals.in/sitemap.xml`**
> 4. Click **SUBMIT**
> 
> **Why this is critical:** Resubmitting forces Googlebot to immediately queue all 34 pre-rendered static pages for crawling, updating titles, descriptions, and schemas in search results right away!

---

## Critical: Vercel Auto-Builds Are Disabled

### The Problem

Vercel's GitHub integration automatically triggers a remote build whenever you push code. That remote build runs `npm run build` on Vercel's servers — but **Puppeteer cannot run on Vercel's build machines** because they lack the Chrome binary and required system libraries.

This means:
- Vercel builds a standard SPA (empty `<div id="root"></div>`)
- That broken build **overwrites** your perfectly good local prebuilt deployment
- All SEO gains are immediately lost
- The site reverts to serving generic, non-indexed content

### The Fix (Already Applied)

This is handled in the root `vercel.json` with:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "git": {
    "deploymentEnabled": false
  }
}
```

This tells Vercel: "When a git push arrives, do **not** trigger a build or deployment."

> ⚠️ **WARNING:** Do not remove the `"git": { "deploymentEnabled": false }` property from `vercel.json`. If you do, the next `git push` will trigger Vercel's auto-build, which will overwrite your prebuilt deployment with a broken SPA.

### Verification

After pushing a commit, check the Vercel dashboard. No new deployment should appear. Your existing production deployment should remain unchanged.

---

## How Pre-rendering Works

### What Happens During `npm run build`

The Vite build process includes a custom Rollup plugin (`vite-plugin-prerender`) that:

1. **Builds the React app** normally (JS bundles, CSS, assets)
2. **Launches headless Chrome** via Puppeteer
3. **Visits each route** from a predefined list of 34 routes:
   - `/` (homepage)
   - `/about`, `/contact`, `/doctors`, `/services`, `/infrastructure`, `/rooms`, `/packages`
   - `/specialities` (listing page)
   - `/specialities/cardiology`, `/specialities/neurology`, `/specialities/orthopaedics`, etc. (22 department pages)
4. **Waits for React to finish rendering**, including:
   - Dynamic meta tag injection (title, description, canonical)
   - JSON-LD schema injection (MedicalWebPage, Physician, FAQPage)
   - Full body content rendering (department descriptions, doctor lists, FAQs)
5. **Captures the fully rendered HTML** and saves it as `dist/<route>/index.html`

### What Each Pre-rendered File Contains

For a department page like `/specialities/cardiology`, the generated `index.html` includes:

| Element | Content |
|:---|:---|
| `<title>` | `Best Cardiologist in Erode \| Cardiology – SSS Hospital` |
| `<meta name="description">` | Department-specific description with local keywords |
| `<meta name="keywords">` | Cardiology-specific keyword set |
| `<link rel="canonical">` | `https://ssshospitals.in/specialities/cardiology` (self-referencing) |
| `<meta property="og:title">` | Cardiology-specific Open Graph title |
| `<meta property="og:url">` | `https://ssshospitals.in/specialities/cardiology` |
| JSON-LD: `MedicalWebPage` | Department name, specialty, reviewed-by |
| JSON-LD: `MedicalSpecialty` | Specialty name, available-at hospital |
| JSON-LD: `Physician` | Each doctor's name, qualifications, image, specialty |
| JSON-LD: `FAQPage` | Department-specific FAQs with answers |
| JSON-LD: `BreadcrumbList` | Home → Specialities → Cardiology |
| `<div id="root">` | **Full rendered HTML** — navigation, hero, content, footer |

---

## How Vercel Routing Works

### The `vercel.json` → `config.json` Compilation

Vercel's Build Output API (used with `--prebuilt`) does **not** read `vercel.json`. Instead, it requires a `.vercel/output/config.json` file with a `routes` array.

The script `scripts/vercel-prebuilt.js` compiles `public/vercel.json` into this format:

```
vercel.json                          config.json routes
─────────────────────────────────    ────────────────────────────────

"redirects": [                  →   { "src": "^/old$", "status": 308,
  { "source": "/old",                "headers": { "Location": "/new" } }
    "destination": "/new",
    "permanent": true }
]

"headers": [                    →   { "src": "^/(.*)$",
  { "source": "/(.*)",               "headers": { "X-Frame-Options": "..." } }
    "headers": [...] }
]

                                →   { "handle": "filesystem" }
                                    ↑ This checkpoint tells Vercel:
                                      "Check if a static file exists on disk.
                                       If yes, serve it. If no, continue."

"rewrites": [                   →   { "src": "^/(.*)$",
  { "source": "/(.*)",               "dest": "/index.html" }
    "destination": "/index.html" }    ↑ SPA fallback (only reached if no
]                                       static file was found)
```

### Route Resolution Order

When a request hits Vercel's edge:

1. **Redirects** — If the URL matches a redirect rule (e.g., `/temp28may25/doctors.html`), return a `308 Permanent Redirect` immediately
2. **Headers** — Apply security headers (CSP, HSTS, X-Frame-Options, etc.) to the response
3. **Filesystem check** — Look for a matching static file in `.vercel/output/static/`:
   - `/specialities/cardiology` → checks for `/specialities/cardiology/index.html` → **found** → serve it ✅
   - `/some-random-path` → checks for `/some-random-path/index.html` → **not found** → continue
4. **SPA rewrite** — If no file was found, rewrite to `/index.html` (the SPA shell) so client-side routing can handle it

### Why `cleanUrls: true` Matters

With `cleanUrls: true` in `config.json`, Vercel automatically resolves:
- `/about` → serves `/about/index.html`
- `/specialities/cardiology` → serves `/specialities/cardiology/index.html`

Without it, requesting `/specialities/cardiology` would not find a file (because the actual file is `/specialities/cardiology/index.html`), would fall through to the SPA rewrite, and serve the generic empty-root `index.html` instead.

---

## SEO Verification Checklist

After every deployment, run through this checklist to confirm SEO is working:

### 1. Check the Title Tag (Quick Test)

```bash
curl -s https://ssshospitals.in/specialities/cardiology | findstr "<title>"
```

**Expected:** `<title>Best Cardiologist in Erode | Cardiology – SSS Hospital</title>`  
**Broken:** `<title>SSS Super Speciality Hospital - Best Multi-Speciality Hospital in Erode, Tamil Nadu</title>` (this is the generic homepage title)

### 2. Check the Canonical Tag

```bash
curl -s https://ssshospitals.in/specialities/cardiology | findstr "canonical"
```

**Expected:** `<link rel="canonical" href="https://ssshospitals.in/specialities/cardiology">`  
**Broken:** `<link rel="canonical" href="https://ssshospitals.in/">`

### 3. Check that `<div id="root">` is NOT Empty

```bash
curl -s https://ssshospitals.in/specialities/cardiology | findstr "root"
```

**Expected:** A very long line starting with `<div id="root"><div class="font-primary min-h-screen">...` (thousands of characters of rendered HTML)  
**Broken:** `<div id="root"></div>` (empty — no content)

### 4. Check Redirects

```bash
curl -I https://ssshospitals.in/temp28may25/doctors.html
```

**Expected:** `HTTP/1.1 308 Permanent Redirect` with `Location: /doctors`  
**Broken:** `HTTP/1.1 404 Not Found`

### 5. Check Homepage

```bash
curl -s https://ssshospitals.in/ | findstr "<title>"
```

**Expected:** `<title>SSS Super Speciality Hospital - Best Multi-Speciality Hospital in Erode, Tamil Nadu</title>` with a filled `<div id="root">`  
**Broken:** An empty `<div id="root"></div>` with a `<noscript>` fallback containing "This website requires JavaScript"

### 6. Check Response Headers

```bash
curl -I https://ssshospitals.in/specialities/cardiology
```

Verify these headers are present:
- `Content-Security-Policy: ...`
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: ALLOW-FROM https://ssshospitals.in`
- `Referrer-Policy: strict-origin-when-cross-origin`

### 7. Use Google's Rich Results Test

Go to [Google Rich Results Test](https://search.google.com/test/rich-results) and enter:
- `https://ssshospitals.in/specialities/cardiology`

It should detect the following structured data:
- **FAQPage** — Department-specific questions and answers
- **Physician** — Doctor profiles with qualifications
- **MedicalWebPage** — Department page metadata
- **BreadcrumbList** — Navigation hierarchy

### 8. View Page Source in Browser

1. Open Chrome → go to the URL
2. **Right-click → "View Page Source"** (NOT "Inspect Element")
3. Search for `<title>` — it should show the department-specific title
4. Search for `id="root"` — the div should contain thousands of characters of rendered HTML, not be empty

> **Note:** "Inspect Element" shows the DOM **after** JavaScript runs, so it will always look correct. "View Page Source" shows the raw HTML **before** JavaScript runs — this is what Googlebot sees.

---

## Common Pitfalls & Troubleshooting

### Pitfall 1: Vercel Auto-Build Overwrites Deployment

**Symptom:** Site works perfectly after `npm run deploy`, but breaks within minutes.  
**Cause:** A `git push` triggered Vercel's automatic build, which produced a broken SPA build (no Puppeteer on Vercel's servers) and overwrote the prebuilt deployment.  
**Fix:** Disable Vercel auto-builds (see [Critical: Disable Vercel Auto-Builds](#critical-disable-vercel-auto-builds)).

### Pitfall 2: `vercel.json` Rules Not Working

**Symptom:** Redirects return 404, security headers are missing.  
**Cause:** The Build Output API ignores `vercel.json`. Rules must be compiled into `.vercel/output/config.json` as a `routes` array.  
**Fix:** The `scripts/vercel-prebuilt.js` script handles this compilation automatically. If you modify `public/vercel.json`, simply re-run `npm run deploy`.

### Pitfall 3: All Department Pages Show Generic Homepage Title

**Symptom:** Every department page has the same `<title>` and `<meta description>` as the homepage.  
**Cause:** Either (a) prerendering failed silently, or (b) the SPA fallback is being served instead of the static file.  
**Fix:** 
1. Check that `dist/specialities/cardiology/index.html` exists and contains department-specific content after `npm run build`
2. Check that `.vercel/output/config.json` has `"cleanUrls": true` and a `{ "handle": "filesystem" }` route before the SPA rewrite
3. Re-run `npm run deploy`

### Pitfall 4: "specialities/index.html overwrites a previously emitted file"

**Symptom:** Build warning: `The emitted file "specialities\index.html" overwrites a previously emitted file of the same name.`  
**Cause:** Multiple department routes generate intermediate `specialities/index.html` files during the prerender step.  
**Impact:** This is harmless. The final `specialities/index.html` is the specialities listing page, which is the correct one. Individual department pages are saved in subdirectories (e.g., `specialities/cardiology/index.html`).

### Pitfall 5: CDN Cache Serving Old Content

**Symptom:** `curl` returns old content even after a fresh deployment.  
**Cause:** Vercel's edge CDN may cache the old response for a short time.  
**Fix:** Wait 1–2 minutes and retry. Check the `Age` response header — if it's high (e.g., `Age: 445`), the response is cached. A fresh response will show `Age: 0`.

---

## Post-Deployment SEO Steps

After confirming the deployment is working correctly:

### 1. Submit Sitemap to Google Search Console
- Log into [Google Search Console](https://search.google.com/search-console)
- Go to **Sitemaps** → enter `https://ssshospitals.in/sitemap.xml` → **Submit**

### 2. Request Re-indexing for Key Pages
- In Search Console, go to **URL Inspection**
- Enter each key URL and click **"Request Indexing"**:
  - `https://ssshospitals.in/`
  - `https://ssshospitals.in/specialities/cardiology`
  - `https://ssshospitals.in/specialities/orthopaedics`
  - `https://ssshospitals.in/specialities/neurology`
  - `https://ssshospitals.in/about`
  - `https://ssshospitals.in/doctors`

### 3. Verify with Rich Results Test
- Go to [Rich Results Test](https://search.google.com/test/rich-results)
- Test at least the homepage and 2–3 department pages
- Confirm structured data (FAQPage, Physician, MedicalWebPage) is detected

### 4. Monitor Coverage Report
- In Search Console, check **Pages** → **Indexing** after 1–2 weeks
- All submitted URLs should show as **"Indexed"**
- If any show "Discovered – currently not indexed" or "Crawled – currently not indexed", investigate

### 5. Google Business Profile
- Claim/optimize your Google Business Profile for "SSS Super Speciality Hospital Erode"
- Ensure NAP (Name, Address, Phone) is identical to what's on the website
- Add categories, services, photos, and Q&A

---

## File Reference

| File | Purpose |
|:---|:---|
| `scripts/vercel-prebuilt.js` | Compiles `vercel.json` → `.vercel/output/config.json` and copies `dist/` to Vercel output |
| `public/vercel.json` | Source of truth for redirects, headers, and rewrites |
| `vite.config.js` | Contains the Puppeteer pre-rendering plugin configuration and route list |
| `.vercel/output/config.json` | Generated file — Vercel Build Output API routing config (do not edit manually) |
| `.vercel/output/static/` | Generated directory — contains all static files served by Vercel CDN |
| `dist/` | Generated directory — Vite build output with pre-rendered HTML files |
| `public/robots.txt` | Controls crawler access — blocks `/temp28may25/` directory |
| `public/sitemap.xml` | Lists all indexable URLs for search engines |

---

## Quick Reference Card

```
┌──────────────────────────────────────────────────┐
│            DEPLOYMENT CHEAT SHEET                │
├──────────────────────────────────────────────────┤
│                                                  │
│  Deploy to production:    npm run deploy          │
│  Push to Git:             git push origin dev     │
│                                                  │
│  🚨 MANDATORY: RESUBMIT SITEMAP IN GSC AFTER DEPLOY │
│     https://ssshospitals.in/sitemap.xml          │
│                                                  │
│  ⚠️  NEVER rely on Vercel auto-builds            │
│  ⚠️  ALWAYS deploy locally (Puppeteer needs it)  │
│  ⚠️  ALWAYS verify SEO after deploying           │
│  ⚠️  Deploy BEFORE pushing to Git                │
│                                                  │
│  Quick SEO check:                                │
│  curl -s https://ssshospitals.in/specialities/   │
│  cardiology | findstr "<title>"                  │
│                                                  │
│  Should show: "Best Cardiologist in Erode..."    │
│  Should NOT show: "SSS Super Speciality..."      │
│                                                  │
└──────────────────────────────────────────────────┘
```
