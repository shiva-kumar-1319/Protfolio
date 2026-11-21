import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Code2, Terminal, Cpu, ExternalLink, CheckCircle2, ShieldCheck, Binary } from 'lucide-react';

export const CompetitiveProgramming: React.FC = () => {
  const { overview, platforms, coreTopics } = PORTFOLIO_CONFIG.competitiveProgramming;

  const getPlatformIcon = (icon: string) => {
    switch (icon) {
      case 'Code':
        return <Code2 className="w-6 h-6 text-[#FFA116]" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-[#1890FF]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#F97316]" />;
      default:
        return <Binary className="w-6 h-6 text-[#4a2810]" />;
    }
  };

  return (
    <section id="competitive" className="relative py-20 bg-[#f5f0e4] border-b border-[#4a2810]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-2 font-bold">
            ALGORITHMIC RIGOR · DATA STRUCTURES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo uppercase text-[#4a2810] tracking-tight">
            Competitive Programming
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4a2810]/80 leading-relaxed">
            {overview}
          </p>
        </div>

        {/* 3 Main Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((plat) => (
            <div
              key={plat.name}
              className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border-2 border-[#4a2810]/12 hover:border-[#4a2810]/30 transition-all shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#faf6f0] border border-[#4a2810]/10">
                      {getPlatformIcon(plat.icon)}
                    </div>
                    <div>
                      <h3 className="font-archivo text-xl uppercase text-[#4a2810]">
                        {plat.name}
                      </h3>
                      <span className="text-xs font-mono text-[#8b5a2a]">
                        @{plat.handle}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#4a2810] text-[#f0e8d8] shadow-sm">
                    {plat.statsHighlight}
                  </span>
                </div>

                <p className="text-xs text-[#8b5a2a] leading-relaxed mb-6">
                  {plat.description}
                </p>
              </div>

              <div>
                <a
                  href={plat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brown flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs shadow-sm hover:scale-[1.01]"
                  aria-label={`Verify Shiva's ${plat.name} profile`}
                >
                  <span>Verify Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Core Topics Breakdown */}
        <div className="bg-[#faf6f0] rounded-3xl p-6 sm:p-8 max-w-5xl border-2 border-[#4a2810]/12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#4a2810]/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#4a2810]" />
              <h3 className="text-base sm:text-lg font-archivo uppercase text-[#4a2810] tracking-tight">
                Mastered Algorithmic Patterns
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8b5a2a]">
              Validated in 500+ LeetCode Submissions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {coreTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white border border-[#4a2810]/10 flex items-center gap-2 text-xs font-mono text-[#4a2810] shadow-sm font-semibold"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
