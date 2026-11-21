import React from 'react';
import type { DomainType } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Code2, Binary, Server, Database, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';

interface SkillsSectionProps {
  currentDomain: DomainType;
  onSelectDomain: (domain: DomainType) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentDomain, onSelectDomain }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-6 h-6 text-[#4a2810]" />;
      case 1:
        return <Binary className="w-6 h-6 text-[#4a2810]" />;
      case 2:
        return <Server className="w-6 h-6 text-[#4a2810]" />;
      case 3:
        return <Database className="w-6 h-6 text-[#4a2810]" />;
      case 4:
        return <Cloud className="w-6 h-6 text-[#4a2810]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#4a2810]" />;
    }
  };

  const sdeCategories = PORTFOLIO_CONFIG.sdeSkills;
  const aiCategories = PORTFOLIO_CONFIG.aiSkills;

  const allCategories = currentDomain === 'sde'
    ? sdeCategories
    : currentDomain === 'ai-ml'
    ? aiCategories
    : [...sdeCategories, ...aiCategories];

  return (
    <section id="skills" className="relative py-20 bg-[#faf6f0] border-b border-[#4a2810]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-2 font-bold">
              DEPTH OVER BREADTH · 100% INTERVIEW READY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo uppercase text-[#4a2810] tracking-tight">
              Technical Competencies
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4a2810]/80 max-w-2xl leading-relaxed">
              Every tool and paradigm listed below is backed by completed production code, evaluated benchmarks, and competitive problem solving. No superficial listings.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center p-1 rounded-full bg-white border border-[#4a2810]/15 shadow-sm text-xs font-semibold">
            <button
              type="button"
              onClick={() => onSelectDomain('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                currentDomain === 'all'
                  ? 'bg-[#4a2810] text-[#f0e8d8]'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
              }`}
            >
              All Skills ({allCategories.length})
            </button>
            <button
              type="button"
              onClick={() => onSelectDomain('sde')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                currentDomain === 'sde'
                  ? 'bg-[#4a2810] text-[#f0e8d8]'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
              }`}
            >
              SDE ({sdeCategories.length})
            </button>
            <button
              type="button"
              onClick={() => onSelectDomain('ai-ml')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                currentDomain === 'ai-ml'
                  ? 'bg-[#a8c4e8] text-[#4a2810]'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
              }`}
            >
              AI/ML ({aiCategories.length})
            </button>
          </div>
        </div>

        {/* 3-Column Skills Grid (Shrinithi style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCategories.map((cat, idx) => (
            <div
              key={`${cat.category}-${idx}`}
              className="bg-white p-6 rounded-2xl border-2 border-[#4a2810]/10 flex flex-col justify-between hover:border-[#4a2810]/30 transition-all shadow-sm"
            >
              <div>
                {/* 52px Circular Icon Badge */}
                <div className="w-13 h-13 rounded-full bg-[#c8daf4] border border-[#a8c4e8] flex items-center justify-center mb-4 shadow-sm">
                  {getIcon(idx)}
                </div>

                <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-1 font-bold">
                  {cat.domain === 'ai-ml' ? 'AI & Machine Learning' : 'Software Engineering'}
                </span>

                <h3 className="font-archivo text-lg uppercase text-[#4a2810] mb-2 tracking-tight">
                  {cat.category}
                </h3>

                <p className="text-xs text-[#8b5a2a] mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Dot-separated tool list / Pill badges */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/12"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#4a2810]/10 flex items-center justify-between text-xs text-[#8b5a2a] font-mono">
                <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Production Verified</span>
                </span>
                <span>{cat.skills.length} core tools</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
