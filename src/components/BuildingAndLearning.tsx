import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Hammer, BookMarked, Cpu } from 'lucide-react';

export const BuildingAndLearning: React.FC = () => {
  const { building, learning } = PORTFOLIO_DATA.buildingAndLearning;

  return (
    <section className="relative py-20 bg-[#faf6f0] border-b border-[#4a2810]/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 text-xs font-code font-bold text-[#4a2810] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>CONTINUOUS TECHNICAL PROGRESSION</span>
          </div>

          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-[#4a2810] tracking-tight mb-4">
            Currently Building & Learning
          </h2>

          <p className="text-base text-[#6b3a1a]">
            Real engineering is a continuous craft. Here are the active focus areas and architectural systems I am currently building and deepening.
          </p>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: CURRENTLY BUILDING */}
          <div className="sh-card rounded-3xl p-7 sm:p-9 border border-[#4a2810]/15 bg-white shadow-sm flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#4a2810]/10">
                <div className="p-3 rounded-2xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810]">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-code text-xs text-[#8b5a2a] font-bold uppercase tracking-wider block">
                    ACTIVE SPRINT
                  </span>
                  <h3 className="font-archivo text-xl sm:text-2xl text-[#4a2810]">
                    Currently Building
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {building.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#faf6f0] border border-[#4a2810]/12 hover:border-[#4a2810]/40 transition-all"
                  >
                    <div className="flex items-center gap-2 text-sm font-bold text-[#4a2810] mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#4a2810]" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#6b3a1a] leading-relaxed pl-4">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#4a2810]/10 text-xs font-code text-[#6b3a1a] flex items-center justify-between">
              <span>Goal: Production Resiliency</span>
              <span className="text-emerald-700 font-bold">● Active Repos</span>
            </div>
          </div>

          {/* Card 2: CURRENTLY LEARNING */}
          <div className="sh-card rounded-3xl p-7 sm:p-9 border border-[#4a2810]/15 bg-white shadow-sm flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#4a2810]/10">
                <div className="p-3 rounded-2xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810]">
                  <BookMarked className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-code text-xs text-[#8b5a2a] font-bold uppercase tracking-wider block">
                    KNOWLEDGE DEEP-DIVE
                  </span>
                  <h3 className="font-archivo text-xl sm:text-2xl text-[#4a2810]">
                    Currently Learning
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {learning.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#faf6f0] border border-[#4a2810]/12 hover:border-[#4a2810]/40 transition-all flex flex-col justify-between"
                  >
                    <div className="font-bold text-sm text-[#4a2810] mb-1">
                      {item.name}
                    </div>
                    <span className="text-[11px] font-code text-[#6b3a1a]">
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#4a2810]/10 text-xs font-code text-[#6b3a1a] flex items-center justify-between">
              <span>Foundation over hype</span>
              <span className="text-[#4a2810] font-bold">● Ongoing Study</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
