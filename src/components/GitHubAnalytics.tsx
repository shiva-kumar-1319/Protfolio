import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';
import {
  ExternalLink,
  Code2,
  Activity,
} from 'lucide-react';

export const GitHubAnalytics: React.FC = () => {
  const username = "shiva-kumar-1319";

  return (
    <section className="relative py-20 bg-[#0B1220] border-b border-blue-900/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 text-xs font-code text-[#22D3EE] mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORY ACTIVITY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4">
            GitHub Analytics
          </h2>

          <p className="text-base text-[#94A3B8]">
            Real-time activity and repository telemetry from{' '}
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22D3EE] hover:underline font-code font-semibold"
            >
              @{username}
            </a>
            .
          </p>
        </div>

        {/* GitHub Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* GitHub Overall Stats Card */}
          <div className="engineering-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-950">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#070A12] border border-blue-950 text-white">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      Profile Telemetry
                    </h3>
                    <span className="font-code text-xs text-[#94A3B8]">
                      github.com/{username}
                    </span>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-code text-[#22D3EE] flex items-center gap-1 hover:underline"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* GitHub Stats Embed with graceful dark image container */}
              <div className="rounded-xl overflow-hidden bg-[#070A12] border border-blue-950 p-2 flex items-center justify-center min-h-[160px]">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=070A12&title_color=22D3EE&icon_color=3B82F6&text_color=94A3B8`}
                  alt={`${username}'s GitHub statistics`}
                  className="w-full max-w-md h-auto"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to stylized custom stats if API rate limited
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'p-4 text-center font-code text-xs text-[#94A3B8]';
                      fallback.innerHTML = `
                        <div class="text-[#22D3EE] font-bold mb-1">Active Public Repositories: 14+</div>
                        <div>Primary Focus: CloudPulse • NeuralQuery • IDQS • Animal Keypoint</div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-blue-950 flex items-center justify-between text-xs font-code text-slate-500">
              <span>Verified Public Activity</span>
              <span className="text-emerald-400">● Live Sync</span>
            </div>
          </div>

          {/* Top Languages Card */}
          <div className="engineering-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-950">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#070A12] border border-blue-950 text-[#22D3EE]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white">
                      Top Languages & Tooling
                    </h3>
                    <span className="font-code text-xs text-[#94A3B8]">
                      Distribution across repositories
                    </span>
                  </div>
                </div>

                <span className="font-code text-xs text-[#a8c4e8] bg-[#070A12] px-2.5 py-1 rounded-md border border-blue-950">
                  Python • C++ • Java
                </span>
              </div>

              {/* GitHub Top Languages Embed */}
              <div className="rounded-xl overflow-hidden bg-[#070A12] border border-blue-950 p-2 flex items-center justify-center min-h-[160px]">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=070A12&title_color=22D3EE&text_color=94A3B8`}
                  alt={`${username}'s top languages`}
                  className="w-full max-w-md h-auto"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'p-4 text-center font-code text-xs text-[#94A3B8]';
                      fallback.innerHTML = `
                        <div class="text-[#22D3EE] font-bold mb-1">Top Languages</div>
                        <div>Python (65%) • C++ (20%) • Java (10%) • SQL / TS (5%)</div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-blue-950 flex items-center justify-between text-xs font-code text-slate-500">
              <span>Codebase Footprint</span>
              <span className="text-[#3B82F6]">● Automated Metric</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
