import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, FileDown, ArrowUpRight, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'competitive', 'contact'];
      const scrollPos = window.scrollY + 120;

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
    { name: 'Experience / Achievements', href: '#experience', id: 'experience' },
    { name: 'Competitive Programming', href: '#competitive', id: 'competitive' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070A12]/85 backdrop-blur-md border-b border-blue-900/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 z-50 px-4 py-2 bg-[#3B82F6] text-[#F8FAFC] rounded-lg font-code text-xs shadow-lg outline-none ring-2 ring-[#22D3EE]"
      >
        Skip to main content
      </a>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* LEFT: Name & Engineering Subtitle */}
          <a
            href="#home"
            className="flex flex-col group focus:outline-none"
            aria-label="Shiva Kumar Kavali - Return to top"
          >
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-[#3B82F6] to-[#22D3EE] shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:rotate-45 transition-transform duration-300" />
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                {PORTFOLIO_DATA.personal.shortName}
              </span>
            </div>
            <span className="font-code text-[10px] tracking-wider text-[#94A3B8] group-hover:text-[#a8c4e8] transition-colors pl-4.5">
              {PORTFOLIO_DATA.personal.roleSubtitle}
            </span>
          </a>

          {/* RIGHT: Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-[#22D3EE] bg-blue-500/10 font-semibold'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#22D3EE] rounded-full shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ACTION BUTTONS (DESKTOP) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.socials.resumeUrl}
              download="Shiva_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#60A5FA] hover:to-[#3B82F6] text-white text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.35)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-200 active:scale-95"
              title="Download Shiva Kumar's Resume (PDF)"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#101A2B] hover:bg-[#15233B] text-[#a8c4e8] hover:text-[#22D3EE] border border-blue-900/40 hover:border-[#3B82F6]/60 text-xs font-medium transition-all duration-200"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.socials.resumeUrl}
              download="Shiva_Kumar_Resume.pdf"
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#3B82F6] text-white text-[11px] font-semibold"
            >
              <FileDown className="w-3 h-3" />
              <span>CV</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#101A2B] border border-blue-900/40 text-[#94A3B8] hover:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#22D3EE]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#070A12]/95 backdrop-blur-xl border-b border-blue-900/40 px-4 pt-4 pb-6 transition-all animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? 'bg-blue-600/15 text-[#22D3EE] font-semibold border-l-2 border-[#22D3EE]'
                      : 'text-[#94A3B8] hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="font-code text-[11px] text-slate-500">#{link.id}</span>
                </a>
              );
            })}

            <div className="mt-4 pt-4 border-t border-blue-950 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.socials.resumeUrl}
                download="Shiva_Kumar_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white text-xs font-semibold shadow-md"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-[#94A3B8] font-code py-1">
                <Terminal className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>shiva@engineering-node:~</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
