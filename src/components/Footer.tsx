import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  CodeforcesIcon,
  CodeChefIcon,
} from './BrandIcons';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f5f0e4] border-t border-[#4a2810]/15 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#4a2810]/10">
          
          {/* Brand Info with Dancing Script signature */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-baseline gap-2 mb-1.5">
              <span className="font-script text-3xl sm:text-4xl font-bold text-[#4a2810]">
                Shiva Kumar
              </span>
              <span className="font-code text-[11px] text-[#4a2810] font-bold px-2.5 py-0.5 rounded-full bg-[#a8c4e8]">
                SDE • AI/ML
              </span>
            </div>
            <p className="text-xs text-[#6b3a1a]">
              Building scalable software systems & intelligent applications.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {/* GitHub */}
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all shadow-xs"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all shadow-xs"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
            </a>

            {/* LeetCode */}
            <a
              href={PORTFOLIO_DATA.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all shadow-xs"
              aria-label="LeetCode Profile"
              title="LeetCode (500+)"
            >
              <LeetCodeIcon className="w-4 h-4 text-[#FFA116]" />
            </a>

            {/* Codeforces */}
            <a
              href={PORTFOLIO_DATA.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all shadow-xs"
              aria-label="Codeforces Profile"
              title="Codeforces"
            >
              <CodeforcesIcon className="w-4 h-4" />
            </a>

            {/* CodeChef */}
            <a
              href={PORTFOLIO_DATA.socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all shadow-xs"
              aria-label="CodeChef Profile"
              title="CodeChef"
            >
              <CodeChefIcon className="w-4 h-4 text-[#F97316]" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PORTFOLIO_DATA.socials.email}`}
              className="p-2.5 rounded-full bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 transition-all shadow-xs"
              aria-label="Email Shiva Kumar"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#4a2810] hover:bg-[#6b3a1a] text-[#f5f0e4] text-xs font-bold transition-all shadow-sm ml-2"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-[#8b5a2a]">
          <div>
            © {currentYear} Shiva Kumar Kavali. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>FastAPI • PyTorch • Kubernetes • React</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
