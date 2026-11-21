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
  Terminal,
  Activity,
  Cpu,
  Copy,
  Check,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const phrases = PORTFOLIO_DATA.personal.rotatingPhrases;

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [phrases.length]);

  const copyWhoami = () => {
    navigator.clipboard.writeText("npx shiva-kumar-kavali");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#070A12]"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#22D3EE]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-grid-cyber pointer-events-none opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Status Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.2)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
              </span>
              <span className="font-code text-[11px] font-semibold tracking-wider text-[#22D3EE] uppercase">
                {PORTFOLIO_DATA.personal.statusBadge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8FAFC] leading-[1.1] mb-4">
              Hi, I'm <span className="gradient-text-electric">Shiva Kumar Kavali</span>.
            </h1>

            {/* Rotating Animated Headline */}
            <div className="h-10 sm:h-12 mb-5 flex items-center overflow-hidden">
              <span className="font-heading text-xl sm:text-2xl md:text-3xl font-semibold text-[#a8c4e8] tracking-tight flex items-center gap-2">
                <span className="text-[#3B82F6]">▸</span>
                <span
                  key={phraseIndex}
                  className="gradient-text-accent animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  {phrases[phraseIndex]}
                </span>
                <span className="cursor-blink" />
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl mb-8">
              {PORTFOLIO_DATA.personal.heroDescription}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] hover:from-[#60A5FA] hover:to-[#3B82F6] text-[#F8FAFC] font-semibold text-sm shadow-[0_4px_25px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_30px_rgba(34,211,238,0.5)] transition-all duration-300 active:scale-95 group"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href={PORTFOLIO_DATA.socials.resumeUrl}
                download="Shiva_Kumar_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#101A2B] hover:bg-[#15233B] text-[#F8FAFC] hover:text-[#22D3EE] border border-blue-900/50 hover:border-[#3B82F6] font-semibold text-sm shadow-md transition-all duration-300 active:scale-95"
                title="Download Shiva Kumar's Resume (PDF)"
              >
                <FileDown className="w-4 h-4 text-[#3B82F6]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Social Links with Recognizable Icons */}
            <div className="flex flex-col gap-2.5 pt-6 border-t border-blue-900/30 w-full max-w-xl">
              <span className="font-code text-[11px] uppercase tracking-wider text-[#94A3B8] font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                Verified Profiles & Engineering Footprint
              </span>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* GitHub */}
                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#F8FAFC] border border-blue-900/40 hover:border-[#3B82F6] transition-all hover:scale-105 active:scale-95 group"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#38BDF8] border border-blue-900/40 hover:border-[#38BDF8] transition-all hover:scale-105 active:scale-95 group"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 group-hover:text-[#38BDF8] transition-colors" />
                </a>

                {/* LeetCode */}
                <a
                  href={PORTFOLIO_DATA.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#FFA116] border border-blue-900/40 hover:border-[#FFA116] transition-all hover:scale-105 active:scale-95 group"
                  aria-label="LeetCode Profile (500+ Solved)"
                  title="LeetCode (500+ Solved)"
                >
                  <LeetCodeIcon className="w-4 h-4 group-hover:text-[#FFA116] transition-colors" />
                </a>

                {/* Codeforces */}
                <a
                  href={PORTFOLIO_DATA.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#3B82F6] border border-blue-900/40 hover:border-[#3B82F6] transition-all hover:scale-105 active:scale-95 group"
                  aria-label="Codeforces Profile (~1200 Rating)"
                  title="Codeforces (~1200 Rating)"
                >
                  <CodeforcesIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>

                {/* CodeChef */}
                <a
                  href={PORTFOLIO_DATA.socials.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#F97316] border border-blue-900/40 hover:border-[#F97316] transition-all hover:scale-105 active:scale-95 group"
                  aria-label="CodeChef Profile (3-Star)"
                  title="CodeChef (3-Star)"
                >
                  <CodeChefIcon className="w-4 h-4 group-hover:text-[#F97316] transition-colors" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.socials.email}?subject=Hello%20Shiva%20Kumar%20-%20Engineering%20Opportunity`}
                  className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#22D3EE] border border-blue-900/40 hover:border-[#22D3EE] transition-all hover:scale-105 active:scale-95 group"
                  aria-label="Direct Email"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4 group-hover:text-[#22D3EE] transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: DEVELOPER IDENTITY VISUAL ================= */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-lg relative group">
              
              {/* Outer Glow Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6]/30 via-[#22D3EE]/25 to-[#8B5CF6]/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />

              {/* Developer Terminal Box */}
              <div className="relative rounded-2xl bg-[#0B1220]/95 border border-blue-500/25 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#101A2B] border-b border-blue-950">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block shadow-[0_0_6px_#ef4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block shadow-[0_0_6px_#f59e0b]" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block shadow-[0_0_6px_#10b981]" />
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-xs font-code text-[#94A3B8]">
                    <Terminal className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>shiva@kavali-node:~</span>
                  </div>

                  <button
                    type="button"
                    onClick={copyWhoami}
                    className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Copy CLI command"
                    aria-label="Copy CLI command"
                  >
                    {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Profile & Terminal Body */}
                <div className="p-5 sm:p-6 space-y-4 font-code text-xs sm:text-sm">
                  
                  {/* Avatar + Quick ID card */}
                  <div className="flex items-center gap-4 pb-4 border-b border-blue-950/70">
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 border-[#3B82F6]/40 shadow-md shrink-0 bg-[#070A12]">
                      <img
                        src={PORTFOLIO_DATA.personal.photoUrl}
                        alt="Shiva Kumar Kavali"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[#F8FAFC] font-heading font-bold text-base truncate">
                        {PORTFOLIO_DATA.personal.name}
                      </div>
                      <div className="text-[11px] text-[#22D3EE] flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                        <span>Systems Active · B.Tech AI & ML</span>
                      </div>
                      <div className="text-[10px] text-[#94A3B8] font-code mt-0.5">
                        Hyderabad, India · UTC+05:30
                      </div>
                    </div>
                  </div>

                  {/* Terminal Command 1: $ whoami */}
                  <div>
                    <div className="flex items-center gap-2 text-[#38BDF8]">
                      <span className="text-[#22D3EE] font-bold">$</span>
                      <span className="font-semibold">whoami</span>
                    </div>
                    <div className="pl-4 pt-1 text-[#F8FAFC] font-medium">
                      {PORTFOLIO_DATA.personal.terminal.whoami}
                    </div>
                  </div>

                  {/* Terminal Command 2: $ focus */}
                  <div>
                    <div className="flex items-center gap-2 text-[#38BDF8]">
                      <span className="text-[#22D3EE] font-bold">$</span>
                      <span className="font-semibold">focus</span>
                    </div>
                    <div className="pl-4 pt-1 text-[#a8c4e8] font-medium">
                      {PORTFOLIO_DATA.personal.terminal.focus}
                    </div>
                  </div>

                  {/* Terminal Command 3: $ building */}
                  <div>
                    <div className="flex items-center gap-2 text-[#38BDF8]">
                      <span className="text-[#22D3EE] font-bold">$</span>
                      <span className="font-semibold">building</span>
                    </div>
                    <div className="pl-4 pt-1 text-[#34D399] font-medium">
                      {PORTFOLIO_DATA.personal.terminal.building}
                    </div>
                  </div>

                  {/* Telemetry live status box */}
                  <div className="pt-3 border-t border-blue-950/70 grid grid-cols-3 gap-2 text-[10px] text-center">
                    <div className="p-1.5 rounded-lg bg-[#070A12] border border-blue-950">
                      <span className="text-slate-500 block">K8S PODS</span>
                      <span className="text-[#22D3EE] font-bold">RECONCILED</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-[#070A12] border border-blue-950">
                      <span className="text-slate-500 block">DSA SCORE</span>
                      <span className="text-[#FFA116] font-bold">500+ LC</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-[#070A12] border border-blue-950">
                      <span className="text-slate-500 block">LATENCY</span>
                      <span className="text-emerald-400 font-bold">&lt; 15ms</span>
                    </div>
                  </div>

                  {/* Floating Technology Labels */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {["FastAPI", "PyTorch", "Kubernetes", "Docker", "PostgreSQL", "RabbitMQ"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#101A2B] text-[#a8c4e8] border border-blue-900/40 text-[10px] hover:border-[#22D3EE] hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Terminal Footer Bar */}
                <div className="px-4 py-2 bg-[#080F1F] border-t border-blue-950 text-[10px] text-[#94A3B8] flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3 h-3 text-[#3B82F6]" />
                    <span>Node: Production Ready</span>
                  </span>
                  <span className="text-emerald-400 font-mono">● Online</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
