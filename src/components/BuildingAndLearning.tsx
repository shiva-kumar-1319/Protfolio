import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Hammer, BookMarked, Cpu } from 'lucide-react';

export const BuildingAndLearning: React.FC = () => {
  const { building, learning } = PORTFOLIO_DATA.buildingAndLearning;

  return (
    <section className="relative py-20 bg-[#070A12] border-b border-blue-900/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 text-xs font-code text-[#22D3EE] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>CONTINUOUS TECHNICAL PROGRESSION</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4">
            Currently Building & Learning
          </h2>

          <p className="text-base text-[#94A3B8]">
            Real engineering is a continuous craft. Here are the active focus areas and architectural systems I am currently building and deepening.
          </p>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: CURRENTLY BUILDING */}
          <div className="engineering-card rounded-3xl p-7 sm:p-9 border border-blue-500/25 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-950">
                <div className="p-3 rounded-2xl bg-[#070A12] border border-blue-900/60 text-[#22D3EE]">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-code text-xs text-[#22D3EE] font-bold uppercase tracking-wider block">
                    ACTIVE SPRINT
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F8FAFC]">
                    Currently Building
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {building.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#070A12] border border-blue-950 hover:border-[#3B82F6]/60 transition-all"
                  >
                    <div className="flex items-center gap-2 text-sm font-heading font-bold text-[#F8FAFC] mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed pl-4">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-950 text-xs font-code text-[#a8c4e8] flex items-center justify-between">
              <span>Goal: Production Resiliency</span>
              <span className="text-emerald-400 font-mono">● Active Repos</span>
            </div>
          </div>

          {/* Card 2: CURRENTLY LEARNING */}
          <div className="engineering-card rounded-3xl p-7 sm:p-9 border border-blue-500/25 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-950">
                <div className="p-3 rounded-2xl bg-[#070A12] border border-blue-900/60 text-[#8B5CF6]">
                  <BookMarked className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-code text-xs text-[#8B5CF6] font-bold uppercase tracking-wider block">
                    KNOWLEDGE DEEP-DIVE
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F8FAFC]">
                    Currently Learning
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {learning.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#070A12] border border-blue-950 hover:border-[#8B5CF6]/50 transition-all flex flex-col justify-between"
                  >
                    <div className="font-heading font-bold text-sm text-[#F8FAFC] mb-1">
                      {item.name}
                    </div>
                    <span className="text-[11px] font-code text-[#a8c4e8]">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-950 text-xs font-code text-[#94A3B8] flex items-center justify-between">
              <span>Foundation over hype</span>
              <span className="text-[#8B5CF6] font-mono">● Ongoing Study</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
