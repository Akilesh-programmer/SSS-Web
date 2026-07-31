# SSS Super Speciality Hospital - Website

<div align="center">

**Leading Multi-Speciality Hospital in Erode, Tamil Nadu**

[![Live Site](https://img.shields.io/badge/Live-ssshospitals.in-10b981?style=for-the-badge)](https://ssshospitals.in)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Prerendering System](#-prerendering--static-site-generation-ssg) • [Deployment](#-deployment) • [SEO & Schema](#-seo--structured-data)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerendering & Static Site Generation (SSG)](#-prerendering--static-site-generation-ssg)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development Workflow](#-development-workflow)
- [Deployment](#-deployment)
- [SEO & Structured Data](#-seo--structured-data)
- [Security & Performance](#-security--performance)
- [Accessibility](#-accessibility)
- [Contact](#-contact)

---

## 🏥 About

SSS Super Speciality Hospital's official website is a modern, high-performance web application showcasing our healthcare services, medical departments, expert doctors, and facilities. 

To solve the limitations of standard Single Page Applications (SPAs) where search engine crawlers index a near-blank page due to client-side rendering (CSR), this project uses a build-time **Static Site Generation (SSG) Pre-rendering Engine**. This compiles all pages into fully-rendered static HTML files containing metadata and structured JSON-LD schemas.

---

## ✨ Features

### 🎨 **User Experience**
- ⚡ **Instant Page Loads**: Pre-rendered static pages hosted on Vercel's global CDN.
- 📱 **Fully Responsive**: Optimized for mobile devices, tablets, and desktops.
- 🎭 **Smooth Animations**: Interactive elements powered by Framer Motion.
- 🖼️ **Optimized Media**: AVIF next-gen formats for infrastructure images, with explicit width/height and descriptive alt tags.

### 🏥 **Healthcare Features**
- 📞 **Direct CTA Booking**: Navbar and home page "Book Appointment" buttons redirect directly to call routing (`tel:+917729888777`).
- 👨‍⚕️ **Doctor Profiles**: Dynamic profiles with Physician schemas.
- 🏢 **23 Departments**: Specialized department layouts with custom content, doctors lists, and FAQs.
- 💬 **Bilingual CMCHIS Slide**: Highlighting Govt of Tamil Nadu health scheme availability.
- 🛡️ **NABH Accreditation**: Accredited badge and organization credentials displayed prominently.

---

## 🛠️ Tech Stack

### **Core Stack**
- **React**: `v19.1.1` (UI Library)
- **React Router Dom**: `v7.8.2` (Client-side routing)
- **Vite**: `v7.2.4` (Development server & bundler)
- **TailwindCSS**: `v4.1.12` (Utility styling)
- **Framer Motion**: `v12.23.12` (Animations)

### **Prerendering & Build System**
- **Rollup Prerenderer**: `@prerenderer/rollup-plugin` (ESM-compliant build prerenderer)
- **Puppeteer Renderer**: `@prerenderer/renderer-puppeteer` (Headless Chrome rendering)
- **Prebuilt script**: `scripts/vercel-prebuilt.js` (Prebuilt Build Output API tool)

---

## ⚙️ Prerendering & Static Site Generation (SSG)

Standard Vite SPAs compile into a single `index.html` with a blank `#root` container. This project integrates `@prerenderer/rollup-plugin` to generate static files at build time:

1. **Compilation**: Vite builds the app assets.
2. **Mount Event**: In `src/main.jsx`, React mounts and dispatches a `custom-render-trigger` event to the document window after 300ms.
3. **Headless Chrome**: Puppeteer boots up a headless Chrome browser, loads all **34 routes** individually, waits for the trigger event, fetches the fully rendered DOM (with titles, meta tags, and structured JSON-LD schemas injected), and saves it to `.html` index files under the `dist` folder.
4. **Conditional Bypassing**: To avoid missing library errors (`libnspr4.so`) on Vercel's remote build containers, the prerendering plugin is dynamically skipped when `process.env.VERCEL === '1'` is detected. Prerendering runs locally on your development machine where Chromium can launch.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v20.x or higher
- **npm**: v10.x or higher

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Akilesh-programmer/SSS-Web.git
   cd SSS-Web
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the local development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

---

## 📁 Project Structure

```text
SSS-Web/
├── index.html                # Entry point template
├── vite.config.js            # Vite configurations (prerendering + code-splitting)
├── package.json              # Package metadata and scripts
├── public/                   # Static assets (copied directly to dist/)
│   ├── vercel.json           # Permanent 301 redirects and routing rules
│   ├── robots.txt            # Search crawler directives
│   ├── sitemap.xml           # XML sitemap with all routes
│   └── assets/               # Local icons & images
├── scripts/
│   ├── vercel-prebuilt.js    # Prepares local dist folder in Vercel Prebuilt format
│   └── analyze-build.js      # Reports build size statistics
├── src/                      # React application
│   ├── main.jsx              # React mounting and prerender dispatch trigger
│   ├── App.jsx               # Page router configuration
│   ├── Components/
│   │   ├── pages/            # Home, About, Doctors, Specialties, Rooms pages
│   │   ├── sections/         # CTA, Testimonials, Tours sections
│   │   └── ui/               # Footer, Navigation, SEO tags, Popups
│   ├── data/                 # SEO meta templates, FAQs, doctors data
│   └── utils/                # Schema builders and meta tag injectors
```

---

## 💻 Development Workflow

When modifying code or updating SEO copy, follow these steps to deploy correctly:

### 1. Write Code and Test Locally
Launch your dev server and check visual changes:
```bash
npm run dev
```

### 2. Run Local Build
Compile the site locally to verify pre-rendering compiles all 34 routes:
```bash
npm run build
```
*(Verify generated files are populated inside `dist/`)*

### 3. Commit and Push to Git
Commit files to your git branch:
```bash
git add .
git commit -m "feat: updated cardiology department content"
git push origin main
```
*Note: Pushing triggers Vercel CI, which compiles without crashing because the remote build bypasses Puppeteer.*

### 4. Deploy Pre-rendered Site to Vercel
To publish your local pre-rendered HTML files to production, run:
```bash
npm run deploy
```
This script automates:
- `npm run build`: Compiles and pre-renders locally.
- `node scripts/vercel-prebuilt.js`: Copies `dist` into `.vercel/output/static`.
- `npx vercel deploy --prebuilt --prod --yes`: Uploads the static folder directly to Vercel production without remote build overrides.

---

## 📊 SEO & Structured Data

The website is fully optimized for local search metrics targeting **Erode, Tamil Nadu** and surrounding service towns.

### Metas & Canonicals
- **Unique Titles & Meta Descriptions**: Custom metadata applied to all pages. Brand keywords are front-loaded.
- **Self-Referencing Canonical Tags**: Injected dynamically into `<head>` to prevent duplicate content indexing.
- **Alt Text**: Descriptive attributes placed on all infrastructure images.

### JSON-LD Schema Implementations
- **Hospital Schema** (`Hospital` / `MedicalOrganization` on homepage): Name, character-for-character exact NAP, geo-coordinates, emergency services flag, available procedures, and NABH credentials.
- **Physician Schema** (`Physician` on doctor profiles): Name, medical specialty, qualifications, licensing body, and affiliated hospital.
- **MedicalWebPage Schema** (`MedicalWebPage` on department views): Last reviewed dates, medical specialty details.
- **FAQPage Schema** (`FAQPage` on department views): Pre-rendered accordion FAQs to secure rich snippets.

---

## 🔒 Security & Performance
- **Image Formats**: AVIF next-gen formats for 50%+ asset size reduction.
- **HSTS / CSP**: Configured inside `vercel.json` to enforce secure headers.
- **Caching**: Service worker (`sw.js`) caches critical assets for offline support.

---

## ♿ Accessibility
- Alt tags on all images.
- ARIA accessibility label descriptions on phone and ambulance buttons.
- Semantic HTML tags for clean document nesting (H1 -> H2 -> H3).

---

## 📞 Contact

**SSS Super Speciality Hospital**
- 🌐 Website: [ssshospitals.in](https://ssshospitals.in)
- 📍 Address: 167/2C1, Perundurai Road, Opp to SBI Bank, URC Nagar, Erode - 638009
- 📧 Email: info@ssshospitals.in
- 🚨 Emergency: +91 89259 31193

---

<div align="center">

**Built with ❤️ for better healthcare accessibility**

© 2026 SSS Super Speciality Hospital. All rights reserved.

</div>
