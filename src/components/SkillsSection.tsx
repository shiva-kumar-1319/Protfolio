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
        return <Code className="w-5 h-5 text-[#4a2810]" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-[#4a2810]" />;
      case 'Server':
        return <Server className="w-5 h-5 text-[#4a2810]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#4a2810]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#4a2810]" />;
      default:
        return <Cpu className="w-5 h-5 text-[#4a2810]" />;
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
      className="relative py-24 bg-[#faf6f0] border-b border-[#4a2810]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 text-xs font-code font-bold text-[#4a2810] mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>STACK & INFRASTRUCTURE</span>
            </div>
            <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-[#4a2810] tracking-tight">
              Technical Skills
            </h2>
            <p className="mt-3 text-base text-[#6b3a1a] max-w-2xl">
              Languages, deep learning libraries, high-concurrency backends, and cloud orchestration tools I work with to build and deploy resilient software.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8b5a2a] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. PyTorch, K8s)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#4a2810]/20 text-xs text-[#4a2810] placeholder-[#8b5a2a] focus:outline-none focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8b5a2a] hover:text-[#4a2810] font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#4a2810]/10" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#4a2810] text-[#f5f0e4] shadow-sm'
                : 'bg-white text-[#6b3a1a] hover:text-[#4a2810] border border-[#4a2810]/15'
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
              className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                selectedCategory.toLowerCase() === cat.category.toLowerCase()
                  ? 'bg-[#a8c4e8] text-[#4a2810] shadow-sm'
                  : 'bg-white text-[#6b3a1a] hover:text-[#4a2810] border border-[#4a2810]/15'
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
              className="sh-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group bg-white border border-[#4a2810]/12"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#c8daf4]/50 border border-[#4a2810]/15 group-hover:bg-[#a8c4e8] transition-colors">
                      {getCategoryIcon(group.icon)}
                    </div>
                    <div>
                      <h3 className="font-archivo text-lg text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors">
                        {group.category}
                      </h3>
                      <span className="font-code text-[11px] text-[#8b5a2a]">
                        {group.skills.length} core technologies
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#6b3a1a] mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 text-xs font-code font-medium hover:bg-[#a8c4e8] transition-all flex items-center gap-1.5 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4a2810]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-3 border-t border-[#4a2810]/10 flex items-center justify-between text-[11px] font-code text-[#8b5a2a]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Production & Contest Verified</span>
                </span>
                <span className="text-[#a8c4e8] font-bold">●</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Skills Summary Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#4a2810]/15 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#4a2810] shrink-0" />
            <div className="text-xs sm:text-sm text-[#6b3a1a]">
              <strong className="text-[#4a2810]">Authentic Assessment:</strong> I only list technologies I have actively built, debugged, and benchmarked. No fabricated percentages or superficial buzzwords.
            </div>
          </div>
          <a
            href={PORTFOLIO_DATA.socials.resumeUrl}
            download="Shiva_Kumar_Resume.pdf"
            className="shrink-0 text-xs font-bold text-[#4a2810] hover:text-[#6b3a1a] underline underline-offset-4"
          >
            Review Skills on Resume →
          </a>
        </div>

      </div>
    </section>
  );
};
