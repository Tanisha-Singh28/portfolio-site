# Modern Personal Portfolio Website

A modern, high-performance, dark-themed personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

Designed with an ultra-clean aesthetic inspired by high-end developer portfolios and award-winning creative technologist sites.

---

## ✨ Features & Highlights

- **4 Dedicated Responsive Pages**:
  - **Page 1: Home / Hero Section**:
    - High-impact typography hero featuring `"Hi, I'm Alex Rivera."`
    - Dynamic role subtitle and active status badge (`🟢 Available for Work`).
    - Interactive Developer HUD / Live Code Terminal with tab switching (`code` / `status`), real-time ping simulation, and performance stats.
    - Quick statistics counter (`6+ YOE`, `35+ Shipped`, `1.2M+ MAU`, `4.8k Stars`).
    - Selected creations preview with case-study triggers.
    - Core engineering capabilities breakdown.
    - Bold call-to-action banner.
  - **Page 2: About Page**:
    - Personal narrative and bio card.
    - Interactive skills matrix with progress bars categorized into Frontend, Backend, DevOps, and Tools.
    - Career timeline with milestone highlights, company badges, and responsibilities.
    - Engineering philosophy and principles.
    - Verified leadership endorsements & testimonials.
    - Downloadable Curriculum Vitae modal with print / PDF preview.
  - **Page 3: Projects Page**:
    - Filterable project gallery (`All`, `Full-Stack`, `Frontend / UI`, `AI & Tools`).
    - Real-time instant search bar.
    - High-density project cards with animated tags, metrics, and live demo / source code shortcuts.
    - Interactive **Project Deep Dive Case Study Modal** detailing the technical challenge and architecture solution.
    - Open-source contributions section.
  - **Page 4: Contact Page**:
    - Interactive contact form with validation, scope selection, budget range picker, and celebration confetti.
    - One-click **Copy Email** button with instant visual feedback.
    - Live **San Francisco / Pacific Time Clock** showing real-time hours and seconds.
    - Direct calendar booking trigger.
    - Frequently Asked Questions accordion.

- **Design System**:
  - **Background**: Deep carbon black (`#0A0A0A`).
  - **Accents**: Electric purple (`#8B5CF6`, `#A855F7`) and electric blue/cyan (`#38BDF8`, `#06B6D4`).
  - **Typography**: Inter & Space Grotesk via Google Fonts.
  - **Ambience**: Subtle radial blur meshes, floating ambient orbs, and glassmorphism panels.
  - **Micro-interactions**: Custom desktop cursor follower, smooth page transitions with Framer Motion, and hover elevation states.
  - **Responsiveness**: 100% responsive across mobile phones, tablets, laptops, and ultra-wide displays.

---

## 🛠️ Tech Stack

- **React 18**: Component-based UI library
- **Vite 5**: Next-generation lightning-fast build tool
- **Tailwind CSS 3**: Utility-first CSS styling
- **Framer Motion 11**: Physics-based animations and layout transitions
- **React Router DOM 6**: Client-side multi-page routing
- **Lucide React**: Modern iconography
- **Canvas Confetti**: Delightful celebration physics on form submission

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview the Production Build
```bash
npm run preview
```

---

## 🎨 Customizing Your Portfolio

All personal data, skills, career history, and projects are centralized in a single clean configuration file:

📁 **`src/data/portfolioData.js`**

1. **Change Your Name & Bio**:
   Edit `personalInfo.name`, `personalInfo.heroRole`, `personalInfo.heroBio`, and contact links.
2. **Add / Modify Projects**:
   Update `projectsData` with your own titles, cover images, descriptions, metrics, and case studies.
3. **Update Skills**:
   Modify `skillsData` to reflect your current tech stack and proficiency percentages.
4. **Update Experience**:
   Customize `careerTimeline` with your career journey, achievements, and education.

---

## 📦 Deployment

This Vite project is ready to deploy to any modern hosting platform:
- **Vercel**: Import repository and hit Deploy (automatically detects Vite).
- **Netlify**: Connect repository or drag-and-drop the `dist` folder.
- **GitHub Pages**: Build with `npm run build` and deploy the `dist` folder.
