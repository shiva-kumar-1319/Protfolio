import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Zap, Award, Trophy, ArrowUpRight } from 'lucide-react';

export const QuickStatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-[#FFA116]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#22D3EE]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#3B82F6]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#A855F7]" />;
      default:
        return <Award className="w-5 h-5 text-[#22D3EE]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-[#070A12] border-y border-blue-900/30 z-20"
      aria-label="Key Engineering Metrics"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.quickStats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`engineering-card rounded-2xl p-6 relative group overflow-hidden transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-blue-500/20 transition-all duration-300" />

              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-[#070A12] border border-blue-900/50 group-hover:border-[#3B82F6]/60 transition-colors">
                  {getIcon(stat.iconName)}
                </div>
                <span className="font-code text-[11px] text-[#94A3B8] group-hover:text-[#a8c4e8] transition-colors flex items-center gap-0.5">
                  <span>0{idx + 1}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>

              {/* Big Stat Value */}
              <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight group-hover:text-[#22D3EE] transition-colors mb-1">
                {stat.value}
              </div>

              {/* Stat Main Label */}
              <div className="text-sm font-semibold text-[#F8FAFC] mb-1">
                {stat.label}
              </div>

              {/* Sub-label */}
              <div className="text-xs text-[#94A3B8] font-code">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
