import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f5f0e4] border-t border-[#4a2810]/15 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#4a2810]/10">
          {/* Left Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-signature text-3xl font-bold text-[#4a2810] mb-1">
              {PORTFOLIO_CONFIG.personal.name}
            </span>
            <p className="text-xs text-[#8b5a2a] max-w-md">
              Software Development Engineer (SDE) & Artificial Intelligence / Machine Learning Engineer (AI/ML).
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-[#4a2810] text-[#4a2810] hover:text-[#f0e8d8] border border-[#4a2810]/15 transition-all shadow-sm"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-[#a8c4e8] text-[#4a2810] border border-[#4a2810]/15 transition-all shadow-sm"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4a2810] text-[#f0e8d8] hover:bg-[#6b3a1a] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-sm"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8b5a2a]">
          <div>
            <span>© {new Date().getFullYear()} Shiva Kumar Kavali. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 font-semibold">
            <span className="flex h-2 w-2 rounded-full bg-emerald-700"></span>
            <span>Available for SDE & AI/ML opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
