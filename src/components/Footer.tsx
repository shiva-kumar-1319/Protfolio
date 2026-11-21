import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-blue-900/40 bg-[#05070D] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-950">
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-base font-bold text-[#F8FAFC]">
                {PORTFOLIO_CONFIG.personal.name}
              </span>
              <span className="text-xs font-mono text-[#22D3EE] px-2 py-0.5 rounded bg-[#0B1930] border border-blue-900">
                SDE • AI/ML
              </span>
            </div>
            <p className="text-xs text-[#94A3B8]">
              {PORTFOLIO_CONFIG.personal.tagline}
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] text-[#94A3B8] hover:text-[#22D3EE] border border-blue-950 hover:border-[#3B82F6] transition-all"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] text-[#94A3B8] hover:text-[#22D3EE] border border-blue-950 hover:border-[#3B82F6] transition-all"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#0B1930] hover:bg-[#2563EB]/20 text-[#22D3EE] border border-blue-900/60 hover:border-[#22D3EE] text-xs font-mono transition-all group"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Shiva Kumar. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#22D3EE]"></span>
            <span>Built with React, TypeScript, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
