import React, { useState, useEffect } from 'react';
import type { DomainType } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Menu, X, FileDown, Terminal, Brain, Layers } from 'lucide-react';

interface NavbarProps {
  currentDomain: DomainType;
  onDomainChange: (domain: DomainType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentDomain, onDomainChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Competitive', href: '#competitive' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 z-50 px-4 py-2 bg-[#4a2810] text-[#f0e8d8] rounded-full font-mono text-xs shadow-lg outline-none ring-2 ring-[#a8c4e8]"
      >
        Skip to main content
      </a>

      {/* CONTINUOUS MARQUEE TICKER (Shrinithi style) */}
      <div className="bg-[#4a2810] text-[#f0e8d8] py-2 text-[10px] sm:text-[11px] font-semibold tracking-[2px] uppercase overflow-hidden whitespace-nowrap border-b border-[#6b3a1a]">
        <div className="ticker-inner">
          &nbsp; SHIVA KUMAR KAVALI · SOFTWARE DEVELOPMENT ENGINEER (SDE) · ARTIFICIAL INTELLIGENCE & MACHINE LEARNING (AI/ML) · 500+ LEETCODE · 1200+ CODEFORCES · 3★ CODECHEF · HYDERABAD, INDIA · AVAILABLE FOR FULL-TIME ROLES ✦ &nbsp; SHIVA KUMAR KAVALI · SOFTWARE DEVELOPMENT ENGINEER (SDE) · ARTIFICIAL INTELLIGENCE & MACHINE LEARNING (AI/ML) · 500+ LEETCODE · 1200+ CODEFORCES · 3★ CODECHEF · HYDERABAD, INDIA · AVAILABLE FOR FULL-TIME ROLES ✦ &nbsp;
        </div>
      </div>

      {/* MAIN NAV BAR */}
      <nav
        aria-label="Main Navigation"
        className={`bg-[#f5f0e4] border-b border-[#4a2810]/15 px-4 sm:px-8 py-3 transition-all duration-200 ${
          isScrolled ? 'shadow-md py-2.5 bg-[#f5f0e4]/95 backdrop-blur-md' : ''
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          
          {/* Logo in Dancing Script */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Shiva Kumar Kavali Home"
          >
            <span className="font-signature text-2xl sm:text-3xl font-bold text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors">
              Shiva Kumar
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold text-[#4a2810]/80 hover:text-[#4a2810] tracking-[1px] uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Dual-Domain Filter Pill (All | SDE | AI/ML) */}
          <div
            className="hidden md:flex items-center p-1 rounded-full bg-[#faf6f0] border border-[#4a2810]/15 shadow-sm text-xs font-semibold"
            role="radiogroup"
            aria-label="Domain Filter"
          >
            <button
              type="button"
              role="radio"
              aria-checked={currentDomain === 'all'}
              onClick={() => onDomainChange('all')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all text-[11px] uppercase tracking-wider ${
                currentDomain === 'all'
                  ? 'bg-[#4a2810] text-[#f0e8d8] font-bold shadow-sm'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>All</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={currentDomain === 'sde'}
              onClick={() => onDomainChange('sde')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all text-[11px] uppercase tracking-wider ${
                currentDomain === 'sde'
                  ? 'bg-[#4a2810] text-[#f0e8d8] font-bold shadow-sm'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>SDE</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={currentDomain === 'ai-ml'}
              onClick={() => onDomainChange('ai-ml')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all text-[11px] uppercase tracking-wider ${
                currentDomain === 'ai-ml'
                  ? 'bg-[#a8c4e8] text-[#4a2810] font-bold shadow-sm'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
              }`}
            >
              <Brain className="w-3 h-3" />
              <span>AI / ML</span>
            </button>
          </div>

          {/* Action CTAs: LinkedIn (Sky) & GitHub (Brown) & Resume */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PORTFOLIO_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sky px-4 py-1.5 text-[11px] shadow-sm flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brown px-4 py-1.5 text-[11px] shadow-sm flex items-center gap-1.5"
            >
              <span>GitHub</span>
            </a>

            <a
              href={PORTFOLIO_CONFIG.socials.resumeUrl}
              download="Shiva_Kumar_Resume.pdf"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#4a2810]/30 hover:border-[#4a2810] text-[11px] font-bold tracking-wider uppercase text-[#4a2810] hover:bg-[#faf6f0] transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PORTFOLIO_CONFIG.socials.resumeUrl}
              download="Shiva_Kumar_Resume.pdf"
              className="p-2 text-xs font-bold text-[#4a2810] bg-[#a8c4e8] rounded-full"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mt-3 p-4 rounded-2xl bg-[#faf6f0] border border-[#4a2810]/15 shadow-xl md:hidden">
            <div className="flex flex-col gap-3">
              {/* Domain Switcher */}
              <div className="p-2 rounded-xl bg-[#f5f0e4] border border-[#4a2810]/10">
                <span className="text-[10px] font-mono uppercase text-[#8b5a2a] tracking-wider block mb-2 px-1">
                  Active Domain Focus
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      onDomainChange('all');
                      setMobileMenuOpen(false);
                    }}
                    className={`py-1.5 text-xs font-bold rounded-lg text-center ${
                      currentDomain === 'all'
                        ? 'bg-[#4a2810] text-[#f0e8d8]'
                        : 'text-[#4a2810] bg-white border border-[#4a2810]/10'
                    }`}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onDomainChange('sde');
                      setMobileMenuOpen(false);
                    }}
                    className={`py-1.5 text-xs font-bold rounded-lg text-center ${
                      currentDomain === 'sde'
                        ? 'bg-[#4a2810] text-[#f0e8d8]'
                        : 'text-[#4a2810] bg-white border border-[#4a2810]/10'
                    }`}
                  >
                    SDE
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onDomainChange('ai-ml');
                      setMobileMenuOpen(false);
                    }}
                    className={`py-1.5 text-xs font-bold rounded-lg text-center ${
                      currentDomain === 'ai-ml'
                        ? 'bg-[#a8c4e8] text-[#4a2810]'
                        : 'text-[#4a2810] bg-white border border-[#4a2810]/10'
                    }`}
                  >
                    AI / ML
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1 py-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-xs font-bold tracking-wider uppercase text-[#4a2810] hover:bg-[#a8c4e8]/30 rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-[#4a2810]/10 flex flex-col gap-2">
                <a
                  href={PORTFOLIO_CONFIG.socials.resumeUrl}
                  download="Shiva_Kumar_Resume.pdf"
                  className="btn-brown text-center py-2 text-xs"
                >
                  Download Resume PDF
                </a>
                <a
                  href={PORTFOLIO_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sky text-center py-2 text-xs"
                >
                  LinkedIn Profile ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
