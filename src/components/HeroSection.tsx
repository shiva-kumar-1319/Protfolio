import React from 'react';
import type { DomainType } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { DualArchitectureGraphic } from './DualArchitectureGraphic';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { FileDown, Mail, Code2, ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  currentDomain: DomainType;
  onSelectDomain: (domain: DomainType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentDomain, onSelectDomain }) => {
  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP HERO PROFILE HERO CARD ================= */}
        <div className="relative mb-12 p-6 sm:p-8 rounded-3xl glass-panel-glow bg-gradient-to-b from-[#0B1930]/90 via-[#080F1F]/90 to-[#0B1930]/80 border border-[#3B82F6]/30 shadow-[0_20px_50px_rgba(5,7,13,0.85)]">
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* PICTURE CONTAINER & QUICK ACTION BAR UNDERNEATH */}
            <div className="flex flex-col items-center shrink-0">
              {/* Picture with Futuristic Cyber Frame */}
              <div className="relative group">
                {/* Glowing Outer Rings */}
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#3B82F6] opacity-75 blur-md group-hover:opacity-100 transition-opacity animate-pulse-glow" />
                
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 border-[#22D3EE]/50 bg-[#080F1F] shadow-2xl">
                  <img
                    src={PORTFOLIO_CONFIG.personal.photoUrl}
                    alt="Shiva Kumar Kavali - Software Engineer and AI/ML Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070D]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Status Badge */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#080F1F]/90 backdrop-blur-md border border-[#22D3EE]/40 text-[10px] font-mono text-[#22D3EE]">
                    <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
                    <span className="font-semibold">AVAILABLE FOR SDE & AI/ML</span>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS DIRECTLY UNDER THE PICTURE: Resume, Mail, LeetCode, GitHub */}
              <div className="mt-5 w-full flex flex-col items-center gap-2.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]">
                  Quick Actions
                </span>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-md">
                  {/* 1. RESUME */}
                  <a
                    href={PORTFOLIO_CONFIG.socials.resumeUrl}
                    download="Shiva_Kumar_Resume.pdf"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-mono font-bold text-xs shadow-[0_0_12px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    title="Download Official Resume PDF"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </a>

                  {/* 2. MAIL */}
                  <a
                    href={`mailto:${PORTFOLIO_CONFIG.socials.email}?subject=Opportunity%20Inquiry%20-%20Shiva%20Kumar`}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B1930] hover:bg-[#22D3EE]/20 border border-[#22D3EE]/40 hover:border-[#22D3EE] text-[#22D3EE] font-mono font-bold text-xs shadow-[0_0_12px_rgba(34,211,238,0.15)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    title="Send Email Directly"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Mail</span>
                  </a>

                  {/* 3. LEETCODE */}
                  <a
                    href={PORTFOLIO_CONFIG.socials.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B1930] hover:bg-[#FFA116]/20 border border-[#FFA116]/40 hover:border-[#FFA116] text-[#FFA116] font-mono font-bold text-xs shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    title="View LeetCode Profile (500+ Solved)"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>LeetCode</span>
                  </a>

                  {/* 4. GITHUB */}
                  <a
                    href={PORTFOLIO_CONFIG.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B1930] hover:bg-[#3B82F6]/20 border border-[#3B82F6]/40 hover:border-[#3B82F6] text-[#F8FAFC] font-mono font-bold text-xs shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                    title="View GitHub Repositories"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>

                {/* Additional Quick Pills: LinkedIn & Phone */}
                <div className="flex items-center justify-center gap-3 pt-1">
                  <a
                    href={PORTFOLIO_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
                  >
                    <LinkedinIcon className="w-3 h-3 text-[#3B82F6]" />
                    <span>LinkedIn Profile ↗</span>
                  </a>
                  <span className="text-blue-900">•</span>
                  <a
                    href={`tel:${PORTFOLIO_CONFIG.socials.phone}`}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
                  >
                    <span>{PORTFOLIO_CONFIG.socials.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* INTRO TEXT, HEADLINES & DESCRIPTIONS */}
            <div className="flex-1 text-center lg:text-left">
              {/* Eyebrow Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080F1F] border border-blue-500/30 text-xs font-mono text-[#22D3EE]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DUAL-DOMAIN ARCHITECT</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080F1F] border border-blue-900/40 text-xs font-mono text-[#94A3B8]">
                  <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>{PORTFOLIO_CONFIG.personal.location}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-700/40 text-xs font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{PORTFOLIO_CONFIG.personal.status}</span>
                </div>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F8FAFC] mb-2">
                <span className="block text-xs sm:text-sm font-mono font-medium text-[#22D3EE] uppercase tracking-widest mb-1">
                  Personal Portfolio of
                </span>
                <span className="bg-gradient-to-r from-[#F8FAFC] via-[#E2E8F0] to-[#94A3B8] bg-clip-text text-transparent">
                  {PORTFOLIO_CONFIG.personal.name}
                </span>
              </h1>

              {/* Main Headline */}
              <div className="mb-3">
                <span className="inline-block text-lg sm:text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] via-[#3B82F6] to-[#2563EB]">
                  {PORTFOLIO_CONFIG.personal.title}
                </span>
              </div>

              {/* Supporting Headline */}
              <p className="text-sm sm:text-base font-semibold text-[#CBD5E1] mb-4 leading-snug">
                {PORTFOLIO_CONFIG.personal.tagline}
              </p>

              {/* Detailed Description */}
              <p className="text-xs sm:text-sm text-[#94A3B8] mb-6 leading-relaxed max-w-2xl">
                {PORTFOLIO_CONFIG.personal.about}
              </p>

              {/* Verified Key Statistics Bar from Resume */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-xl">
                <div className="p-2.5 rounded-xl bg-[#05070D]/80 border border-blue-900/40 text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">LeetCode</span>
                  <span className="text-sm font-bold font-mono text-[#FFA116]">500+ Solved</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#05070D]/80 border border-blue-900/40 text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Codeforces</span>
                  <span className="text-sm font-bold font-mono text-[#1890FF]">1200+ Rating</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#05070D]/80 border border-blue-900/40 text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">CodeChef</span>
                  <span className="text-sm font-bold font-mono text-[#F97316]">3-Star Rated</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#05070D]/80 border border-blue-900/40 text-center">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Amazon ML</span>
                  <span className="text-sm font-bold font-mono text-[#22D3EE]">Top 3,000</span>
                </div>
              </div>

              {/* Project Navigation CTA */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white font-semibold text-xs shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
                >
                  <span>Explore Featured Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#domains"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] text-[#CBD5E1] text-xs font-mono border border-blue-900/60 hover:border-blue-600 transition-all"
                >
                  <span>Dual Architecture Overview</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DUAL ARCHITECTURE GRAPHIC SIMULATOR ================= */}
        <div>
          <DualArchitectureGraphic
            currentDomain={currentDomain}
            onSelectDomain={onSelectDomain}
          />
        </div>
      </div>
    </section>
  );
};
