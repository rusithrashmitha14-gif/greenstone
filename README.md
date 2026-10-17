# Greenstone Landscaping — Premium Demo Website

A production-quality demonstration website for **Greenstone Landscaping**, a fictional high-end landscape architecture, hardscaping, and estate lawn maintenance firm located in **Tampa, Florida, USA**.

Built by **Brandspire Web Agency** to showcase the caliber of custom web design, conversion optimization, and editorial brand presentation we create for international landscaping companies and residential outdoor contractors.

---

## 🌟 Key Highlights & Architecture

- **Framework**: Next.js 14 (App Router) with TypeScript & React 18
- **Styling**: Tailwind CSS with custom nature-inspired dark palette
- **Typography**: Google Manrope font with refined hierarchy
- **Icons**: Lucide React
- **Imagery**: Curated high-resolution residential landscape photography (travertine patios, modern Florida backyards, native botanical plantings)
- **Zero Broken Routes**: 100% pre-rendered static routes including all 6 case studies
- **Client-Side Portfolio Filtering**: Filter projects seamlessly by *Landscape Design*, *Garden Design*, *Hardscaping*, *Outdoor Living*, and *Lawn Transformation*
- **Conversion-Optimized Quote Engine**: Production-ready form with real-time validation, accessible feedback, and clear demo mode messaging
- **SEO & Web Standards**: Dynamic `sitemap.xml`, `robots.txt`, OpenGraph social cards, structured metadata, and accessible ARIA attributes

---

## 🎨 Visual Design System

- **Primary Background**: `#101210` (Near-Black)
- **Secondary Background**: `#191D19`
- **Card Background**: `#1F241F`
- **Primary Text**: `#F7F8F5`
- **Secondary Text**: `#B6BDB3`
- **Accent Green**: `#8BCF58`
- **Subtle Borders**: `#272E27`

---

## 🧭 Site Structure & Pages

1. **Homepage (`/`)**
   - Navigation with leaf-inspired logo, sticky glass transition, and mobile drawer
   - Hero section with breathtaking Tampa backyard photograph, location badge, and dual CTAs
   - 6 Core Service Highlights with photography and feature bullets
   - Featured Case Studies editorial grid
   - Why Choose Us (Greenstone's 5 service principles with Florida climate context)
   - How It Works (4-step customer journey)
   - What Your Outdoor Project Could Look Like (Sample transformation scenarios)
   - Full-width evening garden Final CTA
   - Comprehensive footer with service areas, demo disclaimers, and Brandspire credits

2. **Services Overview (`/services`)**
   - Deep-dive sections for all 6 disciplines
   - Specific Florida climate advantages, who it suits, deliverables, and quote request prompts

3. **Our Work (`/work`)**
   - Interactive client-side category filter
   - Project cards with key metrics and case study links

4. **Individual Project Detail Pages (`/work/[slug]`)**
   - Pre-rendered static pages for all 6 projects:
     - `modern-backyard-transformation` (Davis Islands)
     - `tropical-front-garden` (Hyde Park)
     - `contemporary-stone-patio` (Palma Ceia)
     - `florida-garden-refresh` (Carrollwood)
     - `outdoor-entertaining-space` (South Tampa)
     - `residential-lawn-transformation` (Beach Park)
   - Site challenge, engineered solution, design objectives, materials palette, photo gallery, next/prev navigation

5. **About (`/about`)**
   - Brand story, design philosophy, and Florida-Friendly Landscaping™ principles

6. **Contact & Quote Request (`/contact`)**
   - Interactive quote form with full client validation
   - Property neighborhood dropdown & budget selector
   - Transparent Demo Mode submission state

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or Node.js 20+ installed
- npm 9+ or npm 10+

### Installation & Development
```bash
# Clone or navigate to the directory
cd d:/Business/Brandspire/projects/landscape

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build the production bundle
npm run build

# Start production server
npm run start
```

---

## ☁️ Deploying to Vercel

This repository is pre-configured for seamless one-click zero-config deployment on **Vercel**:
1. Push this directory to your GitHub or GitLab repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**.

---

## 🛡️ Demonstration Disclaimer
This website is a **fictional portfolio concept** designed and developed by **Brandspire Web Agency** for demonstration and sales purposes. All company identities, client scenarios, and contact details are fictional and clearly designated as demonstration content.
