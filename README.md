# Shiva Kumar – Dual-Domain Portfolio (SDE + AI/ML)

An engineering-first, futuristic, highly interactive portfolio designed to position **Shiva Kumar** with equal prominence for both **Software Development Engineer (SDE)** and **Artificial Intelligence & Machine Learning Engineer (AI/ML)** roles.

---

## 🌟 Highlights & Key Features

- **Equal Dual-Domain Prominence**: No domain is secondary. Seamless, interactive switcher toggles between **Unified (All)**, **Software Engineering (SDE)**, and **AI & Machine Learning (AI/ML)**.
- **Dual-Domain Architecture Simulator**: An interactive interactive canvas and system visualizer displaying distributed microservice topologies (FastAPI, RabbitMQ, Docker, Kubernetes) alongside state-of-the-art AI pipelines (Qwen LLM, LoRA PEFT, FAISS vector search, RAG citations).
- **Interactive Technical Skillset**: Categorized skills across 14 distinct engineering and AI categories with real-time keyword search. No fabricated percentages—focuses purely on verified technical competencies.
- **Featured Engineering Projects**:
  - **NeuralQuery**: AI Research Assistant with LoRA fine-tuning, dense vector embeddings, LangChain orchestration, and PostgreSQL citation store.
  - **CloudPulse**: Autonomous self-healing cloud platform with microservices, RabbitMQ event streaming, and Kubernetes auto-reconciliation.
  - **PayPilot**: Distributed, idempotent payment ledger ensuring ACID compliance and zero double-spending.
  - **FlowScale Engine**: Distributed asynchronous task scheduler and sliding-window rate limiter.
  - **VisionCare DL**: Deep learning medical diagnostic classifier with PyTorch and Grad-CAM visual heatmaps.
- **Accessible `<dialog>` Architecture Deep-Dives**: Built according to Modern Web Guidance standards with keyboard escape dismiss, backdrop overscroll containment, and step-by-step pipeline breakdowns.
- **Verified Competitive Programming**: Direct profile links and algorithmic strengths for LeetCode, Codeforces, and CodeChef.
- **Achievements & Academic Foundations**: National Top 10 Finalist (Visinory Hackathon), Amazon ML Summer School 2026 Shortlist (Top 3,000 nationwide), B.Tech in AI & ML from MVSR Engineering College.
- **Centralized Data Model**: All content, projects, achievements, and social links are maintained in `src/data/portfolioData.ts`.
- **Verified Resume Asset**: Direct PDF download configured at `/assets/Shiva_Kumar_Resume.pdf`.

---

## 🛠️ Technology Stack

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animation & Interactivity**: [Framer Motion](https://www.framer.com/motion/), High-performance HTML5 Canvas
- **Icons**: [Lucide React](https://lucide.dev/)
- **Special Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Local Development Setup

### 1. Prerequisites
- Node.js (v18+ or v20+ recommended)
- npm or pnpm

### 2. Installation
```bash
git clone https://github.com/shiva-kumar-1319/portfolio.git
cd portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
```bash
npm run build
```
The production bundle will be generated in `dist/`.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial dual-domain portfolio"
   git branch -M main
   git remote add origin https://github.com/shiva-kumar-1319/portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New..."** → **"Project"**.
4. Import your `portfolio` repository.
5. In the Project Configuration:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**. Vercel will deploy the site and provide a production URL (e.g., `https://shiva-kumar-portfolio.vercel.app`).

### Option B: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run deployment:
   ```bash
   vercel
   ```
3. To deploy to production:
   ```bash
   vercel --prod
   ```

---

## 📄 Updating Resume or Content

- **Resume PDF**: Simply replace `public/assets/Shiva_Kumar_Resume.pdf` with your updated resume PDF. The Download Resume button across the entire portfolio links directly to this asset.
- **Portfolio Data**: Update `src/data/portfolioData.ts` to add new projects, update competitive programming ratings, or edit contact details.
