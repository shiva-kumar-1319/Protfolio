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
        return <Zap className="w-5 h-5 text-[#4a2810]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#4a2810]" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-[#4a2810]" />;
      default:
        return <Award className="w-5 h-5 text-[#4a2810]" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-[#f5f0e4] border-b border-[#4a2810]/10 z-20"
      aria-label="Key Engineering Metrics"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PORTFOLIO_DATA.quickStats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`sh-card-invert rounded-2xl p-6 relative group overflow-hidden transition-all duration-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="invert-icon-bg p-2.5 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 transition-colors">
                  {getIcon(stat.iconName)}
                </div>
                <span className="font-code text-xs text-[#8b5a2a] group-hover:text-[#a8c4e8] transition-colors flex items-center gap-0.5 font-bold">
                  <span>0{idx + 1}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>

              {/* Big Stat Value in Archivo Black */}
              <div className="invert-num font-archivo text-3xl sm:text-4xl text-[#4a2810] tracking-tight transition-colors mb-1">
                {stat.value}
              </div>

              {/* Stat Main Label */}
              <div className="invert-title text-sm font-bold text-[#4a2810] mb-1 transition-colors">
                {stat.label}
              </div>

              {/* Sub-label */}
              <div className="invert-sub text-xs text-[#6b3a1a] font-code transition-colors">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
