import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  ShieldAlert,
  Search,
  Server,
  Binary,
  Compass,
  Sparkles,
  ArrowRight,
  Terminal,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { heading, content, focusCards } = PORTFOLIO_DATA.about;

  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#4a2810]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#4a2810]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#4a2810]" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-[#4a2810]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#4a2810]" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-[#f5f0e4] border-b border-[#4a2810]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 text-xs font-code font-bold text-[#4a2810] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY & IDENTITY</span>
          </div>

          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-[#4a2810] tracking-tight mb-6">
            {heading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#6b3a1a] leading-relaxed">
            {content.split('\n\n').map((paragraph, i) => (
              <p key={i}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 4 Focus-Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusCards.map((card) => (
            <div
              key={card.number}
              className="sh-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden bg-white"
            >
              {/* Background Number Watermark */}
              <span
                className="font-archivo font-extrabold text-7xl text-[#4a2810]/08 absolute -top-2 right-4 select-none pointer-events-none group-hover:text-[#4a2810]/15 transition-colors"
                aria-hidden="true"
              >
                {card.number}
              </span>

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-[#c8daf4]/50 border border-[#4a2810]/15 group-hover:bg-[#a8c4e8] transition-colors">
                    {getFocusIcon(card.icon)}
                  </div>
                  <span className="font-code text-xs font-bold text-[#4a2810] px-3 py-1 rounded-full bg-[#faf6f0] border border-[#4a2810]/15">
                    Area {card.number}
                  </span>
                </div>

                <h3 className="font-archivo text-xl text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-[#6b3a1a] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Tags / Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#4a2810]/10">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 text-xs font-code font-medium hover:bg-[#a8c4e8]/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Systems Mindset Callout Banner (Shrinithi warm brown tone) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#4a2810] text-[#f5f0e4] border border-[#321706] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#6b3a1a] border border-[#8b5a2a] text-[#a8c4e8] shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-archivo text-lg text-white mb-1">
                From Prototype to Resilient Architecture
              </h4>
              <p className="text-sm text-[#f0e8d8] max-w-2xl">
                Every service is constructed with telemetry in mind: structured logging, Prometheus metric scrapes, chaos failure mitigation, and distributed idempotency.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#4a2810] px-5 py-3 rounded-full bg-[#a8c4e8] hover:bg-[#c8daf4] transition-all shrink-0 self-start sm:self-center shadow"
          >
            <span>See Implementations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
