import React, { useState } from 'react';
import type { DomainType, ProjectItem } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './BrandIcons';
import { Terminal, Brain, ExternalLink, ArrowRight, Activity, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  currentDomain: DomainType;
  onSelectDomain: (domain: DomainType) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentDomain, onSelectDomain }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter projects based on current domain selection
  const filteredProjects = PORTFOLIO_CONFIG.projects.filter((p) => {
    if (currentDomain === 'all') return true;
    if (currentDomain === 'sde') return p.domain === 'sde' || p.domain === 'both';
    if (currentDomain === 'ai-ml') return p.domain === 'ai-ml' || p.domain === 'both';
    return true;
  });

  return (
    <section id="projects" className="relative py-20 border-t border-blue-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1930] border border-blue-500/30 text-xs font-mono text-[#22D3EE] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED SYSTEMS & APPLICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Engineering Showcase
            </h2>
            <p className="mt-2 text-sm text-[#94A3B8] max-w-2xl">
              Scalable distributed backends, self-healing platforms, and parameter-tuned AI pipelines. Select any project to inspect its architecture and implementation breakdown.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-[#080F1F] border border-blue-900/60" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={currentDomain === 'all'}
              onClick={() => onSelectDomain('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                currentDomain === 'all'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-[#05070D]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              All Projects ({PORTFOLIO_CONFIG.projects.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentDomain === 'sde'}
              onClick={() => onSelectDomain('sde')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                currentDomain === 'sde'
                  ? 'bg-[#2563EB] text-white shadow'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>SDE Focus</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentDomain === 'ai-ml'}
              onClick={() => onSelectDomain('ai-ml')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                currentDomain === 'ai-ml'
                  ? 'bg-[#22D3EE] text-[#05070D] shadow'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>AI/ML Focus</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isAi = project.domain === 'ai-ml';
            const isBoth = project.domain === 'both';

            return (
              <div
                key={project.id}
                className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isBoth
                    ? 'glass-panel-glow border-blue-500/40 hover:border-[#22D3EE]'
                    : isAi
                    ? 'glass-panel hover:border-[#22D3EE]/50 hover:shadow-[0_10px_35px_rgba(34,211,238,0.2)]'
                    : 'glass-panel hover:border-[#3B82F6]/50 hover:shadow-[0_10px_35px_rgba(37,99,235,0.2)]'
                }`}
              >
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-mono font-semibold rounded-full border ${
                        isAi
                          ? 'bg-[#22D3EE]/15 text-[#22D3EE] border-[#22D3EE]/30'
                          : isBoth
                          ? 'bg-gradient-to-r from-[#2563EB]/25 to-[#22D3EE]/25 text-white border-blue-400/30'
                          : 'bg-[#2563EB]/15 text-[#60A5FA] border-[#2563EB]/30'
                      }`}
                    >
                      {project.categoryBadge}
                    </span>

                    {project.highlightMetrics && (
                      <span className="text-[11px] font-mono text-[#94A3B8] bg-[#05070D]/80 px-2.5 py-1 rounded-md border border-blue-950">
                        {project.highlightMetrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#38BDF8] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights / Architecture peek */}
                  {project.architecture && (
                    <div className="mb-6 p-3 rounded-xl bg-[#05070D]/70 border border-blue-950 text-xs font-mono">
                      <div className="text-[10px] uppercase text-[#60A5FA] mb-1 font-semibold flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-[#22D3EE]" />
                        <span>Core Pipeline Snapshot:</span>
                      </div>
                      <div className="text-[#CBD5E1] truncate">
                        {project.architecture.map((a) => a.step).join(' → ')}
                      </div>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[#0B1930] text-[#93C5FD] border border-blue-900/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-blue-900/40 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1930] hover:bg-[#2563EB]/20 border border-blue-900/60 hover:border-[#22D3EE] text-xs font-semibold font-mono text-[#F8FAFC] transition-all group/btn"
                  >
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#22D3EE] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] text-[#94A3B8] hover:text-[#F8FAFC] border border-blue-900/50 hover:border-[#3B82F6] transition-all"
                        aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] text-[#94A3B8] hover:text-[#22D3EE] border border-blue-900/50 hover:border-[#22D3EE] transition-all"
                        aria-label={`Open ${project.title} live demonstration (opens in new tab)`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
