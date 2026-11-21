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
        return <Code2 className="w-6 h-6 text-[#22D3EE]" />;
    }
  };

  return (
    <section
      id="competitive"
      className="relative py-24 bg-[#070A12] border-b border-blue-900/30 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#FFA116]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 text-xs font-code text-[#22D3EE] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>ALGORITHMIC RIGOR & DATA STRUCTURES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4">
            Competitive Programming
          </h2>

          <p className="text-base text-[#94A3B8] leading-relaxed">
            {overview}
          </p>
        </div>

        {/* 3 Main Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((plat) => (
            <div
              key={plat.name}
              className="engineering-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Top Header */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#070A12] border border-blue-950 group-hover:border-[#3B82F6]/60 transition-colors shadow-inner">
                      {getPlatformIcon(plat.icon)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                        {plat.name}
                      </h3>
                      <span className="font-code text-xs text-[#94A3B8]">
                        @{plat.handle}
                      </span>
                    </div>
                  </div>

                  {/* Rating / Solve Pill */}
                  <span className="font-code text-xs font-bold px-3 py-1 rounded-lg bg-[#070A12] text-[#22D3EE] border border-blue-950 shadow">
                    {plat.ratingBadge}
                  </span>
                </div>

                {/* Subtitle / Rank */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-code text-xs font-semibold text-[#a8c4e8]">
                    {plat.rankBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {plat.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {plat.stats.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#070A12] border border-blue-950 text-center">
                      <span className="text-[10px] text-slate-500 font-code block uppercase">{s.label}</span>
                      <span className="text-sm font-bold text-white font-code">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Profile Link Button */}
              <a
                href={plat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#070A12] hover:bg-blue-600/20 border border-blue-950 hover:border-[#3B82F6] text-xs font-semibold font-code text-[#F8FAFC] group-hover:text-[#22D3EE] transition-all"
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
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-[#101A2B] border border-blue-900/40 shadow-lg">
            <span className="font-code text-xs text-[#a8c4e8] px-3 font-semibold">
              View All Coding Profiles:
            </span>
            <a
              href={PORTFOLIO_DATA.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-[#070A12] hover:bg-[#FFA116]/20 text-xs font-code text-[#FFA116] border border-[#FFA116]/30 flex items-center gap-1.5 transition-all"
            >
              <span>LeetCode (500+)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PORTFOLIO_DATA.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-[#070A12] hover:bg-[#3B82F6]/20 text-xs font-code text-[#38BDF8] border border-blue-900 flex items-center gap-1.5 transition-all"
            >
              <span>Codeforces (~1200)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={PORTFOLIO_DATA.socials.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-[#070A12] hover:bg-[#F97316]/20 text-xs font-code text-[#F97316] border border-[#F97316]/30 flex items-center gap-1.5 transition-all"
            >
              <span>CodeChef (3★)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Core Algorithmic Strengths & Topics */}
        <div className="engineering-card rounded-3xl p-7 sm:p-9 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-blue-950/80">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#22D3EE]" />
              <h3 className="font-heading text-lg font-bold text-[#F8FAFC]">
                Core Algorithmic Strengths & Patterns
              </h3>
            </div>
            <span className="font-code text-xs text-[#94A3B8]">
              Verified in 500+ LeetCode Submissions & Timed Contests
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {coreTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#070A12] border border-blue-950 flex items-center gap-2.5 text-xs text-[#F8FAFC] font-code hover:border-[#3B82F6]/50 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{topic}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
