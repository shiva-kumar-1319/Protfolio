import React, { useState } from 'react';
import type { DomainType, SkillCategory } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import {
  Code2,
  Binary,
  Server,
  Layout,
  Database,
  Network,
  Cloud,
  Cpu,
  Brain,
  Layers,
  MessageSquareCode,
  Sparkles,
  Boxes,
  LineChart,
  Search,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

interface SkillsSectionProps {
  currentDomain: DomainType;
  onSelectDomain: (domain: DomainType) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ currentDomain, onSelectDomain }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Icon resolver
  const getIcon = (iconName: string, domain: 'sde' | 'ai-ml') => {
    const isAi = domain === 'ai-ml';
    const className = `w-5 h-5 ${isAi ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`;

    switch (iconName) {
      case 'Code2':
        return <Code2 className={className} />;
      case 'Binary':
        return <Binary className={className} />;
      case 'Server':
        return <Server className={className} />;
      case 'Layout':
        return <Layout className={className} />;
      case 'Database':
        return <Database className={className} />;
      case 'Network':
        return <Network className={className} />;
      case 'Cloud':
        return <Cloud className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Brain':
        return <Brain className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'MessageSquareCode':
        return <MessageSquareCode className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Boxes':
        return <Boxes className={className} />;
      case 'LineChart':
        return <LineChart className={className} />;
      default:
        return isAi ? <Brain className={className} /> : <Terminal className={className} />;
    }
  };

  // Determine categories to show based on domain filter
  const sdeCategories = PORTFOLIO_CONFIG.sdeSkills;
  const aiCategories = PORTFOLIO_CONFIG.aiSkills;

  let displayedCategories: SkillCategory[] = [];
  if (currentDomain === 'sde') {
    displayedCategories = sdeCategories;
  } else if (currentDomain === 'ai-ml') {
    displayedCategories = aiCategories;
  } else {
    // Interleaved or grouped display
    displayedCategories = [...sdeCategories, ...aiCategories];
  }

  // Filter by search query if any
  const filteredCategories = displayedCategories
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const matchesCategory = cat.category.toLowerCase().includes(searchQuery.toLowerCase());
      const filteredSkills = cat.skills.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (matchesCategory) return cat;
      if (filteredSkills.length > 0) return { ...cat, skills: filteredSkills };
      return null;
    })
    .filter((cat): cat is SkillCategory => cat !== null);

  return (
    <section id="skills" className="relative py-20 border-t border-blue-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1930] border border-blue-500/30 text-xs font-mono text-[#22D3EE] mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Verified Technical Skillset
            </h2>
            <p className="mt-2 text-sm text-[#94A3B8] max-w-2xl">
              Concrete tools, paradigms, and frameworks validated by production projects and competitive problem solving. No artificial proficiency percentages.
            </p>
          </div>

          {/* Interactive Search & Domain Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#94A3B8] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills (e.g. FastAPI, LoRA)..."
                className="w-full sm:w-64 pl-9 pr-3.5 py-2 text-xs font-mono bg-[#080F1F] border border-blue-900/60 rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] outline-none transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-white"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center p-1 rounded-xl bg-[#080F1F] border border-blue-900/60">
              <button
                type="button"
                onClick={() => onSelectDomain('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  currentDomain === 'all'
                    ? 'bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-[#05070D]'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                All ({sdeCategories.length + aiCategories.length})
              </button>
              <button
                type="button"
                onClick={() => onSelectDomain('sde')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  currentDomain === 'sde'
                    ? 'bg-[#2563EB] text-white shadow'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                SDE ({sdeCategories.length})
              </button>
              <button
                type="button"
                onClick={() => onSelectDomain('ai-ml')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  currentDomain === 'ai-ml'
                    ? 'bg-[#22D3EE] text-[#05070D] shadow'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                AI/ML ({aiCategories.length})
              </button>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const isAi = cat.domain === 'ai-ml';
            return (
              <div
                key={`${cat.category}-${idx}`}
                className={`group relative rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between ${
                  isAi
                    ? 'glass-panel hover:border-[#22D3EE]/50 hover:shadow-[0_8px_25px_rgba(34,211,238,0.15)]'
                    : 'glass-panel hover:border-[#3B82F6]/50 hover:shadow-[0_8px_25px_rgba(37,99,235,0.15)]'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-xl border ${
                          isAi
                            ? 'bg-[#22D3EE]/10 border-[#22D3EE]/30'
                            : 'bg-[#2563EB]/10 border-[#2563EB]/30'
                        }`}
                      >
                        {getIcon(cat.icon, cat.domain)}
                      </div>
                      <div>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider block ${
                            isAi ? 'text-[#22D3EE]' : 'text-[#60A5FA]'
                          }`}
                        >
                          {isAi ? 'AI & Machine Learning' : 'Software Engineering'}
                        </span>
                        <h3 className="text-base font-bold text-[#F8FAFC]">
                          {cat.category}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] mb-4">
                    {cat.description}
                  </p>

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all ${
                          isAi
                            ? 'bg-[#080F1F] text-[#67E8F9] border-cyan-900/60 hover:border-[#22D3EE] hover:bg-[#0B1930]'
                            : 'bg-[#080F1F] text-[#93C5FD] border-blue-900/60 hover:border-[#3B82F6] hover:bg-[#0B1930]'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer verification check */}
                <div className="mt-5 pt-3 border-t border-blue-950/60 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        isAi ? 'text-[#22D3EE]' : 'text-[#3B82F6]'
                      }`}
                    />
                    <span>Production Verified</span>
                  </span>
                  <span>{cat.skills.length} competencies</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 rounded-2xl glass-panel">
            <p className="text-sm text-[#94A3B8] font-mono">
              No skills found matching "{searchQuery}". Try searching for another term.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
