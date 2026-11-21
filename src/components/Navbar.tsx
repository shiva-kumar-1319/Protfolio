import React, { useState, useEffect } from 'react';
import type { DomainType } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Terminal, Brain, Menu, X, FileDown, Layers } from 'lucide-react';

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
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'CP Profiles', href: '#competitive' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#2563EB] text-white rounded font-mono text-sm shadow-lg outline-none ring-2 ring-[#22D3EE]"
      >
        Skip to main content
      </a>

      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled ? 'pt-2 pb-2' : 'pt-4 pb-3'
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            isScrolled
              ? 'glass-panel-glow border-b border-blue-500/20 bg-[#080F1F]/80 shadow-[0_8px_32px_rgba(5,7,13,0.8)]'
              : 'glass-panel bg-[#080F1F]/60'
          }`}
        >
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Shiva Kumar Portfolio Home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0B1930] to-[#080F1F] border border-[#3B82F6]/30 group-hover:border-[#22D3EE] transition-colors shadow-[0_0_15px_rgba(37,99,235,0.25)]">
              <span className="font-mono text-sm font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#22D3EE] to-[#3B82F6]">
                SK
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22D3EE]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                {PORTFOLIO_CONFIG.personal.name}
              </span>
              <span className="text-[10px] font-mono text-[#94A3B8] tracking-widest uppercase">
                SDE • AI/ML ARCHITECT
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0B1930]/60 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Dual-Domain Switcher Pill */}
          <div
            className="hidden md:flex items-center p-1 rounded-xl bg-[#05070D]/90 border border-blue-900/40 shadow-inner"
            role="radiogroup"
            aria-label="Domain view filter"
          >
            <button
              type="button"
              role="radio"
              aria-checked={currentDomain === 'all'}
              onClick={() => onDomainChange('all')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                currentDomain === 'all'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              <span>All</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={currentDomain === 'sde'}
              onClick={() => onDomainChange('sde')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                currentDomain === 'sde'
                  ? 'bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
              <span>SDE</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={currentDomain === 'ai-ml'}
              onClick={() => onDomainChange('ai-ml')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                currentDomain === 'ai-ml'
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#22D3EE] text-[#05070D] font-semibold shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5" aria-hidden="true" />
              <span>AI / ML</span>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PORTFOLIO_CONFIG.socials.resumeUrl}
              download="Shiva_Kumar_Resume.pdf"
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#22D3EE] bg-[#0B1930]/80 hover:bg-[#2563EB]/20 border border-[#22D3EE]/30 hover:border-[#22D3EE] rounded-xl transition-all shadow-[0_0_12px_rgba(34,211,238,0.15)] group"
            >
              <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PORTFOLIO_CONFIG.socials.resumeUrl}
              download="Shiva_Kumar_Resume.pdf"
              className="p-2 text-xs font-semibold text-[#22D3EE] bg-[#0B1930]/80 border border-[#22D3EE]/30 rounded-lg"
              aria-label="Download Resume"
            >
              <FileDown className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0B1930] text-[#94A3B8] hover:text-white border border-blue-900/40"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 p-4 rounded-2xl glass-panel-glow bg-[#080F1F]/95 border border-[#3B82F6]/30 shadow-2xl md:hidden">
            <div className="flex flex-col gap-3">
              {/* Domain Switcher Mobile */}
              <div className="p-2 rounded-xl bg-[#05070D] border border-blue-900/50">
                <span className="text-[10px] font-mono uppercase text-[#94A3B8] tracking-wider block mb-2 px-1">
                  Active Domain Focus
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => {
                      onDomainChange('all');
                      setMobileMenuOpen(false);
                    }}
                    className={`py-1.5 text-xs font-medium rounded-lg text-center ${
                      currentDomain === 'all'
                        ? 'bg-[#2563EB] text-white'
                        : 'text-[#94A3B8] bg-[#0B1930]/50'
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
                    className={`py-1.5 text-xs font-medium rounded-lg text-center ${
                      currentDomain === 'sde'
                        ? 'bg-[#2563EB] text-white'
                        : 'text-[#94A3B8] bg-[#0B1930]/50'
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
                    className={`py-1.5 text-xs font-medium rounded-lg text-center ${
                      currentDomain === 'ai-ml'
                        ? 'bg-[#22D3EE] text-[#05070D] font-semibold'
                        : 'text-[#94A3B8] bg-[#0B1930]/50'
                    }`}
                  >
                    AI / ML
                  </button>
                </div>
              </div>

              {/* Navigation links */}
              <nav aria-label="Mobile Navigation" className="flex flex-col gap-1 py-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#22D3EE] hover:bg-[#0B1930] rounded-lg transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-blue-900/40">
                <a
                  href={PORTFOLIO_CONFIG.socials.resumeUrl}
                  download="Shiva_Kumar_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-[#F8FAFC] bg-gradient-to-r from-[#2563EB] to-[#3B82F6] rounded-xl shadow-md"
                >
                  <FileDown className="w-4 h-4" aria-hidden="true" />
                  <span>Download Shiva's Resume</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
