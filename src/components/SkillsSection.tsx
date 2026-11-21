import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Code,
  Brain,
  Server,
  Cloud,
  Terminal,
  Layers,
  Sparkles,
  Search,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-[#3B82F6]" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#22D3EE]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#38BDF8]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#8B5CF6]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#34D399]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#3B82F6]" />;
    }
  };

  const categories = PORTFOLIO_DATA.skills;

  // Filter categories by tab and search query
  const filteredCategories = categories
    .filter((group) => {
      if (selectedCategory === 'all') return true;
      return group.category.toLowerCase() === selectedCategory.toLowerCase();
    })
    .map((group) => {
      if (!searchQuery.trim()) return group;
      const q = searchQuery.toLowerCase();
      const matchesGroup = group.category.toLowerCase().includes(q);
      const filteredSkills = group.skills.filter((s) => s.toLowerCase().includes(q));
      if (matchesGroup) return group;
      if (filteredSkills.length > 0) return { ...group, skills: filteredSkills };
      return null;
    })
    .filter((group): group is typeof categories[0] => group !== null);

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#070A12] border-b border-blue-900/30 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 text-xs font-code text-[#22D3EE] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>STACK & INFRASTRUCTURE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC]">
              Technical Skills
            </h2>
            <p className="mt-3 text-base text-[#94A3B8] max-w-2xl">
              Languages, deep learning libraries, high-concurrency backends, and cloud orchestration tools I work with to build and deploy resilient software.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. PyTorch, K8s)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#101A2B] border border-blue-900/50 text-xs text-[#F8FAFC] placeholder-slate-500 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-blue-950/70" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-code transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#3B82F6] text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                : 'bg-[#101A2B] text-[#94A3B8] hover:text-[#F8FAFC] border border-blue-900/40 hover:border-[#3B82F6]/50'
            }`}
          >
            All Categories ({categories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.category}
              type="button"
              role="tab"
              aria-selected={selectedCategory.toLowerCase() === cat.category.toLowerCase()}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-3.5 py-2 rounded-xl text-xs font-code transition-all flex items-center gap-2 ${
                selectedCategory.toLowerCase() === cat.category.toLowerCase()
                  ? 'bg-[#22D3EE] text-[#070A12] font-bold shadow-[0_0_15px_rgba(34,211,238,0.5)]'
                  : 'bg-[#101A2B] text-[#94A3B8] hover:text-[#F8FAFC] border border-blue-900/40 hover:border-[#22D3EE]/50'
              }`}
            >
              <span>{cat.category}</span>
              <span className="text-[10px] opacity-75">({cat.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="engineering-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#070A12] border border-blue-900/50 group-hover:border-[#3B82F6]/60 transition-colors">
                      {getCategoryIcon(group.icon)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                        {group.category}
                      </h3>
                      <span className="font-code text-[11px] text-[#94A3B8]">
                        {group.skills.length} core technologies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-[#070A12] text-[#F8FAFC] border border-blue-950 text-xs font-code hover:border-[#22D3EE] hover:text-[#22D3EE] hover:bg-blue-500/10 transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-3 border-t border-blue-950/70 flex items-center justify-between text-[11px] font-code text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production & Contest Verified</span>
                </span>
                <span className="text-[#3B82F6]">●</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Skills Summary Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B1220] border border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#22D3EE] shrink-0" />
            <div className="text-xs sm:text-sm text-[#94A3B8]">
              <strong className="text-white">Authentic Assessment:</strong> I only list technologies I have actively built, debugged, and benchmarked. No fabricated percentages or superficial buzzwords.
            </div>
          </div>
          <a
            href={PORTFOLIO_DATA.socials.resumeUrl}
            download="Shiva_Kumar_Resume.pdf"
            className="shrink-0 text-xs font-code font-semibold text-[#a8c4e8] hover:text-[#22D3EE] underline underline-offset-4"
          >
            Review Skills on Resume →
          </a>
        </div>

      </div>
    </section>
  );
};
