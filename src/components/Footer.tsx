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
    <footer className="relative bg-[#070A12] border-t border-blue-900/40 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-950">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-[#3B82F6] to-[#22D3EE] shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="font-heading text-lg font-bold text-[#F8FAFC]">
                {PORTFOLIO_DATA.personal.name.toUpperCase()}
              </span>
              <span className="font-code text-[10px] text-[#22D3EE] px-2 py-0.5 rounded bg-[#101A2B] border border-blue-900">
                SDE • AI/ML • SYSTEMS
              </span>
            </div>
            <p className="text-xs text-[#94A3B8]">
              Building intelligent systems, one project at a time.
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* GitHub */}
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-white border border-blue-950 hover:border-[#3B82F6] transition-all"
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
              className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#38BDF8] border border-blue-950 hover:border-[#38BDF8] transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* LeetCode */}
            <a
              href={PORTFOLIO_DATA.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#FFA116] border border-blue-950 hover:border-[#FFA116] transition-all"
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>

            {/* Codeforces */}
            <a
              href={PORTFOLIO_DATA.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#3B82F6] border border-blue-950 hover:border-[#3B82F6] transition-all"
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
              className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#F97316] border border-blue-950 hover:border-[#F97316] transition-all"
              aria-label="CodeChef Profile"
              title="CodeChef"
            >
              <CodeChefIcon className="w-4 h-4" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PORTFOLIO_DATA.socials.email}`}
              className="p-2.5 rounded-xl bg-[#101A2B] hover:bg-[#1B2942] text-[#94A3B8] hover:text-[#22D3EE] border border-blue-950 hover:border-[#22D3EE] transition-all"
              aria-label="Email Shiva Kumar"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#101A2B] hover:bg-blue-600/20 text-[#22D3EE] border border-blue-900/60 hover:border-[#22D3EE] text-xs font-code transition-all group ml-2"
              aria-label="Scroll back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-code text-slate-500">
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
