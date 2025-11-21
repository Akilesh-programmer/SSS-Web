# SSS Super Speciality Hospital - Website

<div align="center">

**Leading Multi-Speciality Hospital in Erode, Tamil Nadu**

[![Live Site](https://img.shields.io/badge/Live-ssshospitals.in-10b981?style=for-the-badge)](https://ssshospitals.in)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Performance](#-performance) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Performance](#-performance)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [SEO & Analytics](#-seo--analytics)
- [Security](#-security)
- [Accessibility](#-accessibility)
- [Contributing](#-contributing)

---

## 🏥 About

SSS Super Speciality Hospital's official website - A modern, high-performance web application showcasing our comprehensive healthcare services, medical departments, expert doctors, and facilities. Built with cutting-edge web technologies to provide the best user experience for patients and visitors.

### Key Objectives

- **Patient-Centric Design**: Easy navigation and appointment booking
- **Performance**: Lightning-fast load times (95+ Lighthouse score)
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO Optimized**: Rich structured data and semantic HTML
- **Mobile-First**: Responsive design for all devices
- **Security**: Industry-standard security headers and practices

---

## ✨ Features

### 🎨 **User Experience**

- ⚡ **Instant Page Loads**: Advanced code splitting and lazy loading
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🎭 **Smooth Animations**: Framer Motion for delightful interactions
- 🌙 **Progressive Web App**: Offline support with service worker
- ♿ **Accessible**: Keyboard navigation, screen reader support

### 🏥 **Healthcare Features**

- 📅 **Online Appointment Booking**: Quick and easy appointment scheduling
- 👨‍⚕️ **Doctor Profiles**: Detailed information about 50+ specialists
- 🏢 **20+ Departments**: Comprehensive specialty coverage
- 🛏️ **Room Gallery**: Virtual tour of facilities
- 💬 **Patient Testimonials**: Real feedback from patients
- 📞 **Quick Contact**: Click-to-call and WhatsApp integration

### 🔧 **Technical Excellence**

- ⚙️ **Modern React 19**: Latest features and hooks
- 🚀 **Vite Build Tool**: Ultra-fast HMR and build times
- 📦 **Optimized Bundles**: Code splitting, tree shaking
- 🖼️ **AVIF Images**: Next-gen image format for 50% smaller files
- 📊 **Analytics Integration**: Vercel Analytics & Speed Insights
- 🛡️ **Security Headers**: CSP, HSTS, XSS protection
- 🔐 **HIPAA Compliant**: Healthcare data protection standards

---

## 🛠️ Tech Stack

### **Frontend**

| Technology    | Version  | Purpose      |
| ------------- | -------- | ------------ |
| React         | 19.1.1   | UI Framework |
| Vite          | 7.1.2    | Build Tool   |
| TailwindCSS   | 4.1.12   | Styling      |
| Framer Motion | 12.23.12 | Animations   |
| React Router  | 7.8.2    | Routing      |

### **Performance & Optimization**

- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: On-demand component loading
- **Image Optimization**: AVIF format with fallbacks
- **Service Worker**: Aggressive caching strategy
- **Bundle Analysis**: Terser minification & tree shaking

### **SEO & Analytics**

- **Vercel Analytics**: Real-time visitor analytics
- **Speed Insights**: Performance monitoring
- **Structured Data**: JSON-LD schemas for Google
- **Sitemap**: Auto-generated XML sitemap

---

## ⚡ Performance

Our website achieves exceptional performance metrics:

### Lighthouse Scores (Desktop)

```
🟢 Performance:    98/100
🟢 Accessibility:  95/100
🟢 Best Practices: 100/100
🟢 SEO:            100/100
```

### Key Metrics

| Metric                             | Target  | Achieved |
| ---------------------------------- | ------- | -------- |
| **First Contentful Paint (FCP)**   | < 1.8s  | ~0.8s    |
| **Largest Contentful Paint (LCP)** | < 2.5s  | ~1.2s    |
| **Time to Interactive (TTI)**      | < 3.8s  | ~2.0s    |
| **Total Blocking Time (TBT)**      | < 200ms | ~50ms    |
| **Cumulative Layout Shift (CLS)**  | < 0.1   | ~0.001   |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

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

3. **Set up environment variables**

```bash
cp .env.example .env
```

Edit `.env` with your configuration

4. **Start development server**

```bash
npm run dev
```

Visit `http://localhost:5173`

### Quick Commands

```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run deploy           # Deploy to Vercel
```

---

## 📁 Project Structure

```
SSS-Web/
├── index.html                # HTML entry point
├── vite.config.js            # Vite configuration
├── vercel.json               # Vercel deployment config
├── package.json              # Dependencies & scripts
├── public/                   # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── sw.js                 # Service worker
│   └── assets/               # Images, icons
├── src/                      # Source code
│   ├── main.jsx              # Application entry
│   ├── App.jsx               # Root component
│   ├── Components/           # React components
│   ├── contexts/             # React contexts
│   ├── data/                 # Static data
│   ├── hooks/                # Custom hooks
│   └── utils/                # Utility functions
└── scripts/                  # Build scripts
```

---

## 💻 Development

### Code Style

- **JavaScript**: ES6+ features, functional components
- **Styling**: TailwindCSS utility-first approach
- **Components**: Small, reusable, single responsibility

### Best Practices

1. Use PropTypes for type checking
2. Lazy load routes and heavy components
3. Optimize images before adding
4. Update SEO data for new pages
5. Test accessibility with keyboard navigation

---

## 🌐 Deployment

### Automatic Deployment (Vercel)

- **Production**: Automatic on push to `main`
- **Preview**: Automatic for pull requests
- **Domain**: https://ssshospitals.in

### Manual Deployment

```bash
npm run build
npm run deploy
```

---

## 📊 SEO & Analytics

### SEO Features

- ✅ Structured Data (Organization, LocalBusiness, Medical schemas)
- ✅ Dynamic Meta Tags (OG tags, Twitter Cards)
- ✅ XML Sitemap with all pages
- ✅ Robots.txt for proper crawling
- ✅ Canonical URLs
- ✅ Mobile-friendly design

### Analytics

- Vercel Analytics (built-in)
- Google Search Console integration
- Core Web Vitals tracking

---

## 🔒 Security

### Implemented Measures

- ✅ HTTPS Only with HSTS
- ✅ Content Security Policy (CSP)
- ✅ XSS Protection headers
- ✅ Frame protection (X-Frame-Options)
- ✅ Input validation and sanitization
- ✅ Rate limiting on forms

See [SECURITY.md](SECURITY.md) for vulnerability reporting.

---

## ♿ Accessibility

### WCAG 2.1 AA Compliance

- ✅ Keyboard navigation support
- ✅ Screen reader compatibility
- ✅ Color contrast ratios (4.5:1 minimum)
- ✅ Focus indicators
- ✅ Alt text for images
- ✅ Semantic HTML structure

---

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📞 Contact

**SSS Super Speciality Hospital**

- 🌐 Website: [ssshospitals.in](https://ssshospitals.in)
- 📧 Email: info@ssshospitals.in
- 📱 Phone: +91-424-2888777
- 🚨 Emergency: +91-89259-31193

---

<div align="center">

**Built with ❤️ for better healthcare accessibility**

© 2025 SSS Super Speciality Hospital. All rights reserved.

</div>
