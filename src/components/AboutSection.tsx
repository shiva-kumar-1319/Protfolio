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
        return <ShieldAlert className="w-5 h-5 text-[#22D3EE]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#38BDF8]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#3B82F6]" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-[#A855F7]" />;
      default:
        return <Terminal className="w-5 h-5 text-[#22D3EE]" />;
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-[#0B1220] border-b border-blue-900/30 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#22D3EE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 text-xs font-code text-[#22D3EE] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ENGINEERING PHILOSOPHY & IDENTITY</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-6">
            {heading}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
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
              className="engineering-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background Number Watermark */}
              <span
                className="font-heading font-extrabold text-7xl text-slate-800/25 absolute -top-2 right-4 select-none pointer-events-none group-hover:text-blue-500/15 transition-colors"
                aria-hidden="true"
              >
                {card.number}
              </span>

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-[#070A12] border border-blue-900/50 group-hover:border-[#22D3EE]/60 transition-colors">
                    {getFocusIcon(card.icon)}
                  </div>
                  <span className="font-code text-xs font-semibold text-[#3B82F6] px-2.5 py-1 rounded-md bg-[#070A12] border border-blue-950">
                    Area {card.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Tags / Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-950/70">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#070A12] text-[#a8c4e8] border border-blue-950 text-xs font-code group-hover:border-blue-900/80 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Systems Mindset Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#101A2B] via-[#0B1220] to-[#101A2B] border border-blue-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#070A12] border border-blue-900/60 text-[#22D3EE] shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-[#F8FAFC] mb-1">
                From Prototype to Resilient Architecture
              </h4>
              <p className="text-sm text-[#94A3B8] max-w-2xl">
                Every service is constructed with telemetry in mind: structured logging, Prometheus metric scrapes, chaos failure mitigation, and distributed idempotency.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-code font-semibold text-[#22D3EE] hover:text-white px-4 py-2.5 rounded-xl bg-[#070A12] border border-blue-900/60 hover:border-[#3B82F6] transition-all shrink-0 self-start sm:self-center"
          >
            <span>See Implementations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
