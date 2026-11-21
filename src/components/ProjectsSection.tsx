import React, { useState } from 'react';
import type { DomainType, ProjectItem } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './BrandIcons';
import { Terminal, Brain, ArrowRight, Server, Activity } from 'lucide-react';

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

  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case 'ai-ml':
        return <Brain className="w-8 h-8 text-[#4a2810]/40" />;
      case 'sde':
        return <Server className="w-8 h-8 text-[#4a2810]/40" />;
      default:
        return <Activity className="w-8 h-8 text-[#4a2810]/40" />;
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-[#f5f0e4] border-b border-[#4a2810]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Shrinithi style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-2 font-bold">
              FEATURED ENGINEERING & RESEARCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo uppercase text-[#4a2810] tracking-tight">
              Selected Works
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4a2810]/80 max-w-2xl leading-relaxed">
              Real systems engineered with measurable impact. Evaluated on real benchmarks, stress-tested with chaos engineering, and built for high-concurrency resilience.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center p-1 rounded-full bg-white border border-[#4a2810]/15 shadow-sm text-xs font-semibold" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={currentDomain === 'all'}
              onClick={() => onSelectDomain('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                currentDomain === 'all'
                  ? 'bg-[#4a2810] text-[#f0e8d8] shadow-sm'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
              }`}
            >
              All Works ({PORTFOLIO_CONFIG.projects.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentDomain === 'sde'}
              onClick={() => onSelectDomain('sde')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                currentDomain === 'sde'
                  ? 'bg-[#4a2810] text-[#f0e8d8] shadow-sm'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
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
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                currentDomain === 'ai-ml'
                  ? 'bg-[#a8c4e8] text-[#4a2810] shadow-sm'
                  : 'text-[#4a2810]/70 hover:text-[#4a2810]'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>AI/ML Focus</span>
            </button>
          </div>
        </div>

        {/* 2-Column Grid of Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project, idx) => {
            const projectNumber = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="editorial-card cursor-pointer group flex flex-col justify-between overflow-hidden shadow-sm"
              >
                <div>
                  {/* Thumbnail Banner with Ghost Numeral & Badge */}
                  <div className="relative h-36 bg-[#faf6f0] border-b border-[#4a2810]/10 p-5 flex items-center justify-between overflow-hidden">
                    {/* Ghost Number in Archivo Black */}
                    <span className="font-archivo text-7xl text-[#4a2810]/10 select-none pointer-events-none group-hover:text-white/10 transition-colors">
                      {projectNumber}
                    </span>

                    {/* Centered Graphic Icon */}
                    <div className="p-3 rounded-2xl bg-white/70 group-hover:bg-white/10 border border-[#4a2810]/10 group-hover:border-white/15 transition-colors">
                      {getDomainIcon(project.domain)}
                    </div>

                    {/* Category Badge */}
                    <span className="card-tag absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-[#4a2810] text-[#f0e8d8] transition-colors shadow-sm">
                      {project.categoryBadge}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-1 font-bold">
                      {project.domain === 'both' ? 'SDE + AI/ML Pipeline' : project.domain === 'sde' ? 'Distributed Systems' : 'Generative AI & LLM'}
                    </span>

                    <h3 className="font-archivo text-xl sm:text-2xl text-[#4a2810] group-hover:text-white transition-colors tracking-tight mb-1">
                      {project.title}
                    </h3>

                    <p className="card-subtitle text-xs sm:text-sm font-semibold text-[#8b5a2a] mb-3">
                      {project.subtitle}
                    </p>

                    <p className="card-desc text-xs text-[#4a2810]/80 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="card-tech px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span className="card-tech px-2 py-0.5 text-[11px] font-mono rounded-md bg-[#faf6f0] text-[#4a2810]/60 border border-[#4a2810]/10">
                          +{project.techStack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 border-t border-[#4a2810]/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5 text-[#4a2810] group-hover:text-[#a8c4e8] transition-colors">
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="card-icon-btn p-2 rounded-full bg-[#f5f0e4] text-[#4a2810] hover:bg-[#a8c4e8] transition-colors"
                      aria-label="View on GitHub"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
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
