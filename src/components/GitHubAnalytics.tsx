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
    <section className="relative py-20 bg-[#f5f0e4] border-b border-[#4a2810]/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 text-xs font-code font-bold text-[#4a2810] mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & REPOSITORY ACTIVITY</span>
          </div>

          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-[#4a2810] tracking-tight mb-4">
            GitHub Analytics
          </h2>

          <p className="text-base text-[#6b3a1a]">
            Real-time activity and repository telemetry from{' '}
            <a
              href={PORTFOLIO_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4a2810] font-bold hover:underline font-code"
            >
              @{username}
            </a>
            .
          </p>
        </div>

        {/* GitHub Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* GitHub Overall Stats Card */}
          <div className="sh-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group bg-white border border-[#4a2810]/15 shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#4a2810]/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810]">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-archivo text-lg text-[#4a2810]">
                      Profile Telemetry
                    </h3>
                    <span className="font-code text-xs text-[#8b5a2a]">
                      github.com/{username}
                    </span>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-code font-bold text-[#4a2810] flex items-center gap-1 hover:underline"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* GitHub Stats Embed with clean light warm card */}
              <div className="rounded-xl overflow-hidden bg-[#faf6f0] border border-[#4a2810]/12 p-3 flex items-center justify-center min-h-[160px]">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=faf6f0&title_color=4a2810&icon_color=4a2810&text_color=6b3a1a`}
                  alt={`${username}'s GitHub statistics`}
                  className="w-full max-w-md h-auto"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to stylized custom stats if API rate limited
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'p-4 text-center font-code text-xs text-[#6b3a1a]';
                      fallback.innerHTML = `
                        <div class="text-[#4a2810] font-bold mb-1">Active Public Repositories: 14+</div>
                        <div>Primary Focus: CloudPulse • NeuralQuery • IDQS • Animal Keypoint</div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#4a2810]/10 flex items-center justify-between text-xs font-code text-[#8b5a2a]">
              <span>Verified Public Activity</span>
              <span className="text-emerald-700 font-bold">● Live Sync</span>
            </div>
          </div>

          {/* Top Languages Card */}
          <div className="sh-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group bg-white border border-[#4a2810]/15 shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#4a2810]/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-archivo text-lg text-[#4a2810]">
                      Top Languages & Tooling
                    </h3>
                    <span className="font-code text-xs text-[#8b5a2a]">
                      Distribution across repositories
                    </span>
                  </div>
                </div>

                <span className="font-code text-xs text-[#4a2810] font-bold bg-[#faf6f0] px-3 py-1 rounded-full border border-[#4a2810]/15">
                  Python • C++ • Java
                </span>
              </div>

              {/* GitHub Top Languages Embed */}
              <div className="rounded-xl overflow-hidden bg-[#faf6f0] border border-[#4a2810]/12 p-3 flex items-center justify-center min-h-[160px]">
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=faf6f0&title_color=4a2810&text_color=6b3a1a`}
                  alt={`${username}'s top languages`}
                  className="w-full max-w-md h-auto"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'p-4 text-center font-code text-xs text-[#6b3a1a]';
                      fallback.innerHTML = `
                        <div class="text-[#4a2810] font-bold mb-1">Top Languages</div>
                        <div>Python (65%) • C++ (20%) • Java (10%) • SQL / TS (5%)</div>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#4a2810]/10 flex items-center justify-between text-xs font-code text-[#8b5a2a]">
              <span>Codebase Footprint</span>
              <span className="text-[#4a2810] font-bold">● Automated Metric</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
