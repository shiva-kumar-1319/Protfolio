import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Code2, Terminal, Cpu, ExternalLink, CheckCircle2, ShieldCheck, Binary, Zap } from 'lucide-react';

export const CompetitiveProgramming: React.FC = () => {
  const { overview, platforms, coreTopics } = PORTFOLIO_CONFIG.competitiveProgramming;

  const getPlatformIcon = (icon: string) => {
    switch (icon) {
      case 'Code':
        return <Code2 className="w-5 h-5 text-[#FFA116]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#1890FF]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#F97316]" />;
      default:
        return <Binary className="w-5 h-5 text-[#22D3EE]" />;
    }
  };

  return (
    <section id="competitive" className="relative py-20 border-t border-blue-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1930] border border-blue-500/30 text-xs font-mono text-[#22D3EE] mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>ALGORITHMIC PROBLEM SOLVING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Competitive Programming
          </h2>
          <p className="mt-2 text-sm text-[#94A3B8]">
            {overview}
          </p>
        </div>

        {/* 3 Main Platform Cards with Authentic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((plat) => (
            <div
              key={plat.name}
              className="glass-panel rounded-3xl p-6 flex flex-col justify-between hover:border-[#3B82F6]/60 hover:shadow-[0_10px_30px_rgba(37,99,235,0.25)] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-2xl bg-[#05070D] border border-blue-900/50">
                      {getPlatformIcon(plat.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#F8FAFC]">
                        {plat.name}
                      </h3>
                      <span className="text-xs font-mono text-[#94A3B8]">
                        @{plat.handle}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#05070D] text-[#22D3EE] border border-blue-900/60 shadow">
                    {plat.statsHighlight}
                  </span>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-6">
                  {plat.description}
                </p>
              </div>

              <div>
                <a
                  href={plat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#0B1930] hover:bg-[#2563EB]/20 border border-blue-900/60 hover:border-[#3B82F6] text-xs font-semibold font-mono text-[#F8FAFC] group-hover:text-[#22D3EE] transition-all"
                  aria-label={`Verify Shiva's ${plat.name} profile in a new tab`}
                >
                  <span>Verify Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Algorithmic Focus Area Chips */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-blue-900/40">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#22D3EE]" />
              <h3 className="text-base font-bold text-[#F8FAFC]">
                Core Algorithmic Strengths & Patterns
              </h3>
            </div>
            <span className="text-xs font-mono text-[#94A3B8]">
              Verified in 500+ LeetCode Submissions & Contests
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {coreTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#080F1F] border border-blue-950 hover:border-[#3B82F6]/50 transition-colors flex items-center gap-2 text-xs font-mono text-[#CBD5E1]"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
