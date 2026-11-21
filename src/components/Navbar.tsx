import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'competitive', 'contact'];
      const scrollPos = window.scrollY + 130;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Milestones', href: '#experience', id: 'experience' },
    { name: 'CP / DSA', href: '#competitive', id: 'competitive' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const tickerText =
    "✦ SHIVA KUMAR KAVALI ✦ SOFTWARE DEVELOPMENT ENGINEER (SDE) ✦ ARTIFICIAL INTELLIGENCE & MACHINE LEARNING ✦ DISTRIBUTED SYSTEMS ✦ 500+ LEETCODE ✦ CLOUDPULSE ✦ NEURALQUERY ✦ HYDERABAD, INDIA ✦ OPEN FOR SDE & AI/ML OPPORTUNITIES ✦ ";

  return (
    <>
      {/* 1. TOP RUNNING MARQUEE TICKER (Shrinithi style) */}
      <div className="bg-[#4a2810] text-[#f0e8d8] text-xs font-code font-semibold tracking-wide py-1.5 overflow-hidden border-b border-[#321706] select-none z-50 relative">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="mx-4">{tickerText}</span>
          <span className="mx-4">{tickerText}</span>
          <span className="mx-4">{tickerText}</span>
          <span className="mx-4">{tickerText}</span>
        </div>
      </div>

      {/* 2. STICKY MAIN NAVBAR */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#f5f0e4]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(74,40,16,0.08)] border-b border-[#4a2810]/10 py-3'
            : 'bg-[#f5f0e4] border-b border-[#4a2810]/08 py-4'
        }`}
      >
        {/* Skip Link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 z-50 px-4 py-2 bg-[#4a2810] text-[#f5f0e4] rounded-lg font-code text-xs shadow-lg outline-none"
        >
          Skip to main content
        </a>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* LEFT: Logo in Dancing Script */}
            <a
              href="#home"
              className="flex items-baseline gap-2 group focus:outline-none"
              aria-label="Shiva Kumar Kavali - Return to top"
            >
              <span className="font-script text-3xl sm:text-4xl font-bold text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors leading-none tracking-tight">
                Shiva Kumar
              </span>
              <span className="hidden sm:inline-block font-code text-[11px] text-[#8b5a2a] tracking-wider uppercase pl-1">
                / SDE & AI
              </span>
            </a>

            {/* CENTER: Navigation Links */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 relative ${
                      isActive
                        ? 'text-[#4a2810] bg-[#a8c4e8]/60 shadow-sm'
                        : 'text-[#6b3a1a] hover:text-[#4a2810] hover:bg-[#faf6f0]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: Quick Action Pills */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* LinkedIn Pill */}
              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] hover:bg-[#c8daf4] text-[#4a2810] text-xs font-bold transition-all duration-200 border border-[#4a2810]/10 shadow-sm hover:scale-105 active:scale-95"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#4a2810]" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Pill */}
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#4a2810] hover:bg-[#6b3a1a] text-[#f5f0e4] text-xs font-bold transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#f5f0e4]" />
                <span>GitHub</span>
              </a>

              {/* Resume Button */}
              <a
                href={PORTFOLIO_DATA.socials.resumeUrl}
                download="Shiva_Kumar_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#faf6f0] text-[#4a2810] text-xs font-bold border border-[#4a2810]/20 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
                title="Download Resume (PDF)"
              >
                <FileDown className="w-3.5 h-3.5 text-[#4a2810]" />
                <span>Resume</span>
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={PORTFOLIO_DATA.socials.resumeUrl}
                download="Shiva_Kumar_Resume.pdf"
                className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#a8c4e8] text-[#4a2810] text-xs font-bold"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>CV</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white border border-[#4a2810]/20 text-[#4a2810] hover:bg-[#faf6f0] focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#4a2810]" /> : <Menu className="w-5 h-5 text-[#4a2810]" />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE NAV DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#f5f0e4] border-b border-[#4a2810]/15 px-4 pt-3 pb-6 transition-all shadow-xl">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      isActive
                        ? 'bg-[#a8c4e8] text-[#4a2810]'
                        : 'text-[#6b3a1a] hover:bg-white hover:text-[#4a2810]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}

              <div className="mt-4 pt-4 border-t border-[#4a2810]/15 flex flex-col gap-2.5">
                <a
                  href={PORTFOLIO_DATA.socials.resumeUrl}
                  download="Shiva_Kumar_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#4a2810] text-[#f5f0e4] text-xs font-bold shadow-md"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href={PORTFOLIO_DATA.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-full bg-[#a8c4e8] text-[#4a2810] text-xs font-bold"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={PORTFOLIO_DATA.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-full bg-white border border-[#4a2810]/20 text-[#4a2810] text-xs font-bold"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
