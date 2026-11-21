import React from 'react';
import type { DomainType } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { FileDown, Mail, Code2, ArrowRight, MapPin } from 'lucide-react';

interface HeroSectionProps {
  currentDomain?: DomainType;
  onSelectDomain?: (domain: DomainType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="about" className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 bg-[#faf6f0] border-b border-[#4a2810]/10 overflow-hidden">
      {/* Giant Shrinithi-style Watermark Typography in Background */}
      <div className="absolute top-28 left-0 right-0 pointer-events-none select-none overflow-hidden z-0 opacity-40">
        <span className="font-archivo text-[clamp(48px,12vw,144px)] text-[#c8daf4] leading-none tracking-[-3px] block pl-4 sm:pl-12 uppercase">
          Scalable
        </span>
        <span className="font-archivo text-[clamp(44px,11vw,132px)] text-[#c8daf4] leading-[0.85] tracking-[-3px] block pl-16 sm:pl-48 uppercase">
          Intelligent
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT/TOP: PORTRAIT PHOTO & DIRECT QUICK ACTIONS UNDERNEATH */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Framed Portrait Photo */}
            <div className="relative group">
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-[0_16px_40px_rgba(74,40,16,0.12)] bg-[#f5f0e4]">
                <img
                  src={PORTFOLIO_CONFIG.personal.photoUrl}
                  alt="Shiva Kumar Kavali - SDE and AI/ML Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating iMessage style status bubble (from Shrinithi style) */}
              <div className="absolute -bottom-3 -right-2 sm:-right-4 bg-white px-3.5 py-1.5 rounded-2xl shadow-lg border border-[#4a2810]/10 flex items-center gap-2 text-xs font-semibold text-[#4a2810]">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for SDE & AI/ML roles</span>
              </div>
            </div>

            {/* QUICK ACTIONS ROW DIRECTLY UNDER THE PICTURE */}
            <div className="mt-6 w-full max-w-sm flex flex-col items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#8b5a2a] font-bold">
                Quick Actions
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
                {/* 1. Resume */}
                <a
                  href={PORTFOLIO_CONFIG.socials.resumeUrl}
                  download="Shiva_Kumar_Resume.pdf"
                  className="btn-brown py-2.5 px-3 flex items-center justify-center gap-1.5 text-xs shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  title="Download Verified Resume PDF"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>

                {/* 2. Mail */}
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.socials.email}?subject=Opportunity%20Inquiry%20-%20Shiva%20Kumar`}
                  className="btn-sky py-2.5 px-3 flex items-center justify-center gap-1.5 text-xs shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  title="Send Direct Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Mail</span>
                </a>

                {/* 3. LeetCode */}
                <a
                  href={PORTFOLIO_CONFIG.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#FFA116]/10 text-[#4a2810] border border-[#4a2810]/15 py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider uppercase shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  title="LeetCode (500+ Solved)"
                >
                  <Code2 className="w-3.5 h-3.5 text-[#FFA116]" />
                  <span>LeetCode</span>
                </a>

                {/* 4. GitHub */}
                <a
                  href={PORTFOLIO_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-[#4a2810]/10 text-[#4a2810] border border-[#4a2810]/15 py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-xs font-bold tracking-wider uppercase shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Sub-pills: LinkedIn and phone */}
              <div className="flex items-center justify-center gap-3 pt-1 text-xs text-[#8b5a2a] font-medium">
                <a
                  href={PORTFOLIO_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#4a2810] transition-colors flex items-center gap-1"
                >
                  <LinkedinIcon className="w-3 h-3 text-[#3B82F6]" />
                  <span>LinkedIn ↗</span>
                </a>
                <span>•</span>
                <a href={`tel:${PORTFOLIO_CONFIG.socials.phone}`} className="hover:text-[#4a2810] transition-colors">
                  {PORTFOLIO_CONFIG.socials.phone}
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: HEADLINE, BIO & AUTHENTIC METRICS */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Signature Logo */}
            <span className="font-signature text-3xl sm:text-4xl text-[#4a2810] mb-2 block">
              Shiva Kumar Kavali
            </span>

            {/* Tagline / Subtitle */}
            <p className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-[#8b5a2a] mb-3">
              Software Development Engineer (SDE) · Artificial Intelligence & Machine Learning (AI/ML)
            </p>

            {/* Heavy Punch Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-archivo uppercase text-[#4a2810] tracking-tight mb-4 leading-snug">
              Building Resilient Backend Architectures & Real-World Machine Learning Systems.
            </h1>

            {/* Bio Description */}
            <p className="text-sm sm:text-base text-[#4a2810]/85 leading-relaxed mb-6 max-w-2xl">
              I am an Artificial Intelligence and Machine Learning undergraduate passionate about backend systems, distributed architectures, and production LLMs. I believe in <strong>depth over breadth</strong>—presenting authentic, benchmarked engineering rather than superficial buzzwords.
            </p>

            {/* Real Stats Bar from Resume */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl mb-7">
              <div className="p-3 rounded-2xl bg-white border border-[#4a2810]/12 text-center shadow-sm">
                <span className="text-[10px] font-mono text-[#8b5a2a] uppercase block font-semibold">LeetCode</span>
                <span className="text-base font-bold font-archivo text-[#4a2810]">500+ Solved</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#4a2810]/12 text-center shadow-sm">
                <span className="text-[10px] font-mono text-[#8b5a2a] uppercase block font-semibold">Codeforces</span>
                <span className="text-base font-bold font-archivo text-[#4a2810]">1200+ Rating</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#4a2810]/12 text-center shadow-sm">
                <span className="text-[10px] font-mono text-[#8b5a2a] uppercase block font-semibold">CodeChef</span>
                <span className="text-base font-bold font-archivo text-[#4a2810]">3-Star Rated</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#4a2810]/12 text-center shadow-sm">
                <span className="text-[10px] font-mono text-[#8b5a2a] uppercase block font-semibold">Amazon ML</span>
                <span className="text-base font-bold font-archivo text-[#4a2810]">Top 3,000</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#projects"
                className="btn-brown px-6 py-3 text-xs shadow-md flex items-center gap-2"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#philosophy"
                className="btn-sky px-5 py-3 text-xs shadow-sm flex items-center gap-1.5"
              >
                <span>Engineering Reality Check</span>
              </a>

              <div className="inline-flex items-center gap-1.5 text-xs text-[#8b5a2a] font-mono py-1 px-2">
                <MapPin className="w-3.5 h-3.5 text-[#4a2810]" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
