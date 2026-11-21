import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  CodeforcesIcon,
  CodeChefIcon,
} from './BrandIcons';
import {
  FileDown,
  Mail,
  ArrowDown,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [selectedDomain, setSelectedDomain] = useState<'all' | 'sde' | 'aiml'>('all');
  const phrases = PORTFOLIO_DATA.personal.rotatingPhrases;

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#faf6f0] border-b border-[#4a2810]/10"
    >
      {/* Background Watermark Text (Shrinithi style ghost typography) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center select-none pointer-events-none opacity-40 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-archivo text-[12vw] tracking-tighter text-[#c8daf4]/40 uppercase whitespace-nowrap leading-none block">
          SCALABLE SYSTEMS
        </span>
      </div>

      {/* Subtle warm grid pattern */}
      <div className="absolute inset-0 bg-warm-grid pointer-events-none opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN: INTRO & DUAL-DOMAIN ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a2810] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a2810]"></span>
              </span>
              <span className="font-code text-xs font-bold text-[#4a2810] tracking-wide uppercase">
                {PORTFOLIO_DATA.personal.statusBadge}
              </span>
            </div>

            {/* Main Headline in Archivo Black */}
            <h1 className="font-archivo text-4xl sm:text-5xl lg:text-6xl text-[#4a2810] tracking-tight leading-[1.08] mb-4">
              Hi, I'm Shiva Kumar Kavali.
            </h1>

            {/* Sub-headline: Dual Domain Role */}
            <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#6b3a1a] mb-3 flex items-center gap-2 flex-wrap">
              <span>Software Engineer</span>
              <span className="text-[#a8c4e8]">/</span>
              <span>AI & ML Engineer</span>
            </div>

            {/* Rotating Engineering Focus Phrase */}
            <div className="h-10 mb-6 flex items-center overflow-hidden">
              <div className="font-code text-sm sm:text-base font-semibold text-[#8b5a2a] flex items-center gap-2">
                <span className="text-[#4a2810]">▸</span>
                <span
                  key={phraseIndex}
                  className="bg-[#c8daf4]/40 px-2.5 py-1 rounded-md text-[#4a2810] border border-[#4a2810]/10"
                >
                  {phrases[phraseIndex]}
                </span>
                <span className="cursor-blink" />
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#6b3a1a] leading-relaxed max-w-2xl mb-8">
              {PORTFOLIO_DATA.personal.heroDescription}
            </p>

            {/* Dual Domain Selector Switcher */}
            <div className="mb-8 p-1.5 rounded-2xl bg-white border border-[#4a2810]/15 shadow-sm inline-flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-code font-bold text-[#8b5a2a] px-3">
                Focus Filter:
              </span>
              <button
                type="button"
                onClick={() => setSelectedDomain('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedDomain === 'all'
                    ? 'bg-[#4a2810] text-[#f5f0e4] shadow-sm'
                    : 'text-[#6b3a1a] hover:bg-[#faf6f0]'
                }`}
              >
                All Domains
              </button>
              <button
                type="button"
                onClick={() => setSelectedDomain('sde')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedDomain === 'sde'
                    ? 'bg-[#4a2810] text-[#f5f0e4] shadow-sm'
                    : 'text-[#6b3a1a] hover:bg-[#faf6f0]'
                }`}
              >
                Software Engineering (SDE)
              </button>
              <button
                type="button"
                onClick={() => setSelectedDomain('aiml')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedDomain === 'aiml'
                    ? 'bg-[#4a2810] text-[#f5f0e4] shadow-sm'
                    : 'text-[#6b3a1a] hover:bg-[#faf6f0]'
                }`}
              >
                AI & Machine Learning
              </button>
            </div>

            {/* Domain Context Alert / Banner based on selection */}
            {selectedDomain === 'sde' && (
              <div className="mb-8 p-4 rounded-xl bg-white border-l-4 border-[#4a2810] text-xs text-[#6b3a1a] max-w-xl shadow-sm">
                <span className="font-bold text-[#4a2810] block mb-0.5">SDE Focus Highlights:</span>
                Distributed Systems, Microservices, FastAPI, RabbitMQ, Docker & Kubernetes autonomous reconciliation, high-concurrency database queries.
              </div>
            )}
            {selectedDomain === 'aiml' && (
              <div className="mb-8 p-4 rounded-xl bg-white border-l-4 border-[#a8c4e8] text-xs text-[#6b3a1a] max-w-xl shadow-sm">
                <span className="font-bold text-[#4a2810] block mb-0.5">AI/ML Focus Highlights:</span>
                PyTorch Deep Learning, RAG Pipelines with FAISS Vector Stores, LoRA Fine-Tuning with Qwen models, Real-time browser-based neural inference.
              </div>
            )}

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#4a2810] hover:bg-[#6b3a1a] text-[#f5f0e4] font-bold text-xs shadow-md transition-all duration-200 active:scale-95 group"
              >
                <span>Explore Featured Systems</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#a8c4e8] hover:bg-[#c8daf4] text-[#4a2810] font-bold text-xs border border-[#4a2810]/15 shadow-sm transition-all duration-200 active:scale-95"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick Competitive & Verified Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#4a2810]/10 w-full max-w-xl">
              <span className="text-[11px] font-code text-[#8b5a2a] mr-2">Verified Footprint:</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#4a2810]/15 text-[11px] font-code font-semibold text-[#4a2810]">
                <span className="w-2 h-2 rounded-full bg-[#FFA116]" />
                500+ LeetCode
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#4a2810]/15 text-[11px] font-code font-semibold text-[#4a2810]">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                ~1200 Codeforces
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#4a2810]/15 text-[11px] font-code font-semibold text-[#4a2810]">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                3★ CodeChef
              </span>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: PICTURE + 4 BUTTONS UNDERNEATH ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* The Framed Picture Card */}
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              
              {/* Outer decorative shadow/offset border (Warm aesthetic) */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[#a8c4e8] border-2 border-[#4a2810] transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />

              {/* Main Photo Container */}
              <div className="relative rounded-3xl overflow-hidden border-3 border-[#4a2810] bg-white shadow-xl">
                <img
                  src={PORTFOLIO_DATA.personal.photoUrl}
                  alt="Shiva Kumar Kavali"
                  className="w-full h-80 sm:h-96 object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#4a2810]/90 via-[#4a2810]/60 to-transparent text-[#f5f0e4]">
                  <div className="font-archivo text-base font-bold tracking-tight">
                    Shiva Kumar Kavali
                  </div>
                  <div className="text-xs text-[#a8c4e8] font-code flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>MVSR Engg College • Hyderabad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SPECIFIC USER REQUIREMENT:
                "add this resume add this picture under this include Resume, Mail, Leetcode, github at the very top page"
            */}
            <div className="mt-8 w-full max-w-xs sm:max-w-sm">
              <div className="text-center mb-2.5">
                <span className="font-code text-[11px] font-bold text-[#8b5a2a] uppercase tracking-wider">
                  Quick Direct Actions:
                </span>
              </div>

              {/* 4 ACTION BUTTONS DIRECTLY UNDER THE PICTURE */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* 1. Resume */}
                <a
                  href={PORTFOLIO_DATA.socials.resumeUrl}
                  download="Shiva_Kumar_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#4a2810] hover:bg-[#6b3a1a] text-[#f5f0e4] text-xs font-bold shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                  title="Download Official Resume PDF"
                >
                  <FileDown className="w-4 h-4 text-[#a8c4e8]" />
                  <span>Resume</span>
                </a>

                {/* 2. Mail */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.socials.email}?subject=Hello%20Shiva%20Kumar%20-%20Engineering%20Opportunity`}
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#a8c4e8] hover:bg-[#c8daf4] text-[#4a2810] text-xs font-bold border border-[#4a2810]/15 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4 text-[#4a2810]" />
                  <span>Mail</span>
                </a>

                {/* 3. LeetCode */}
                <a
                  href={PORTFOLIO_DATA.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#faf6f0] text-[#4a2810] text-xs font-bold border border-[#4a2810]/20 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                  title="View LeetCode Profile (500+ Solved)"
                >
                  <LeetCodeIcon className="w-4 h-4 text-[#FFA116]" />
                  <span>LeetCode</span>
                </a>

                {/* 4. GitHub */}
                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#faf6f0] text-[#4a2810] text-xs font-bold border border-[#4a2810]/20 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                  title="View GitHub Repositories"
                >
                  <GithubIcon className="w-4 h-4 text-[#4a2810]" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Extra Secondary Links: Codeforces, CodeChef, LinkedIn */}
              <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-[#4a2810]/10">
                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all text-xs flex items-center gap-1.5 font-semibold"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all text-xs flex items-center gap-1.5 font-semibold"
                  title="Codeforces"
                >
                  <CodeforcesIcon className="w-3.5 h-3.5" />
                  <span>Codeforces</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.socials.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all text-xs flex items-center gap-1.5 font-semibold"
                  title="CodeChef"
                >
                  <CodeChefIcon className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>CodeChef</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
