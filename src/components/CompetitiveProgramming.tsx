import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  LeetCodeIcon,
  CodeforcesIcon,
  CodeChefIcon,
} from './BrandIcons';
import {
  Zap,
  ExternalLink,
  ShieldCheck,
  Code2,
  CheckCircle2,
} from 'lucide-react';

export const CompetitiveProgramming: React.FC = () => {
  const { overview, platforms, coreTopics } = PORTFOLIO_DATA.competitiveProgramming;

  const getPlatformIcon = (icon: string) => {
    switch (icon) {
      case 'LeetCode':
        return <LeetCodeIcon className="w-6 h-6 text-[#FFA116]" />;
      case 'Codeforces':
        return <CodeforcesIcon className="w-6 h-6" />;
      case 'CodeChef':
        return <CodeChefIcon className="w-6 h-6 text-[#F97316]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#4a2810]" />;
    }
  };

  return (
    <section
      id="competitive"
      className="relative py-24 bg-[#f5f0e4] border-b border-[#4a2810]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 text-xs font-code font-bold text-[#4a2810] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>ALGORITHMIC RIGOR & DATA STRUCTURES</span>
          </div>

          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-[#4a2810] tracking-tight mb-4">
            Competitive Programming
          </h2>

          <p className="text-base text-[#6b3a1a] leading-relaxed">
            {overview}
          </p>
        </div>

        {/* 3 Main Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((plat) => (
            <div
              key={plat.name}
              className="sh-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden bg-white border border-[#4a2810]/15 shadow-sm"
            >
              <div>
                {/* Top Header */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#faf6f0] border border-[#4a2810]/15 group-hover:bg-[#a8c4e8] transition-colors shadow-xs">
                      {getPlatformIcon(plat.icon)}
                    </div>
                    <div>
                      <h3 className="font-archivo text-xl text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors">
                        {plat.name}
                      </h3>
                      <span className="font-code text-xs text-[#8b5a2a]">
                        @{plat.handle}
                      </span>
                    </div>
                  </div>

                  {/* Rating / Solve Pill */}
                  <span className="font-code text-xs font-bold px-3 py-1 rounded-full bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 shadow-xs">
                    {plat.ratingBadge}
                  </span>
                </div>

                {/* Subtitle / Rank */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-code text-xs font-bold text-[#4a2810]">
                    {plat.rankBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#6b3a1a] leading-relaxed mb-6">
                  {plat.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {plat.stats.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#faf6f0] border border-[#4a2810]/12 text-center">
                      <span className="text-[10px] text-[#8b5a2a] font-code block uppercase font-bold">{s.label}</span>
                      <span className="text-sm font-bold text-[#4a2810] font-code">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Profile Link Button */}
              <a
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full bg-[#4a2810] hover:bg-[#6b3a1a] border border-[#4a2810] text-xs font-bold text-[#f5f0e4] transition-all hover:scale-102 active:scale-98 shadow-sm"
                aria-label={`Open Shiva's ${plat.name} profile in a new tab`}
              >
                <span>View {plat.name} Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Coding Profiles Hub Bar */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2.5 rounded-full bg-white border border-[#4a2810]/15 shadow-md">
            <span className="font-code text-xs text-[#4a2810] px-3 font-bold">
              View All Coding Profiles:
            </span>
            <a
              href={PORTFOLIO_DATA.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#faf6f0] hover:bg-[#FFA116]/20 text-xs font-code font-bold text-[#4a2810] border border-[#4a2810]/15 flex items-center gap-1.5 transition-all"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 text-[#FFA116]" />
              <span>LeetCode (500+)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PORTFOLIO_DATA.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#faf6f0] hover:bg-[#3B82F6]/20 text-xs font-code font-bold text-[#4a2810] border border-[#4a2810]/15 flex items-center gap-1.5 transition-all"
            >
              <CodeforcesIcon className="w-3.5 h-3.5" />
              <span>Codeforces (~1200)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PORTFOLIO_DATA.socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-[#faf6f0] hover:bg-[#F97316]/20 text-xs font-code font-bold text-[#4a2810] border border-[#4a2810]/15 flex items-center gap-1.5 transition-all"
            >
              <CodeChefIcon className="w-3.5 h-3.5 text-[#F97316]" />
              <span>CodeChef (3★)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Core Algorithmic Strengths & Topics */}
        <div className="sh-card rounded-3xl p-7 sm:p-9 max-w-5xl mx-auto bg-white border border-[#4a2810]/15 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#4a2810]/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#4a2810]" />
              <h3 className="font-archivo text-lg text-[#4a2810]">
                Core Algorithmic Strengths & Patterns
              </h3>
            </div>
            <span className="font-code text-xs text-[#8b5a2a] font-medium">
              Verified in 500+ LeetCode Submissions & Timed Contests
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {coreTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/12 flex items-center gap-2.5 text-xs text-[#4a2810] font-code hover:bg-[#a8c4e8]/50 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#4a2810] shrink-0" />
                <span className="truncate font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
