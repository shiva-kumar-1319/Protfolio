import React, { useState } from 'react';
import { PORTFOLIO_DATA, type FeaturedProject } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';
import {
  ExternalLink,
  Sparkles,
  GitBranch,
  Layers,
  Cpu,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeArchitectureId, setActiveArchitectureId] = useState<string | null>('cloudpulse');

  const toggleArchitecture = (id: string) => {
    setActiveArchitectureId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#f5f0e4] border-b border-[#4a2810]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 text-xs font-code font-bold text-[#4a2810] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION-STYLE SYSTEMS</span>
          </div>

          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-[#4a2810] tracking-tight mb-4">
            Featured Projects
          </h2>

          <p className="text-base sm:text-lg text-[#6b3a1a] leading-relaxed">
            Engineering architectures built for high resiliency, autonomous Kubernetes remediation, RAG document intelligence, and real-time client-side neural vision.
          </p>
        </div>

        {/* Projects List — Large Clean Cards */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.projects.map((project: FeaturedProject) => {
            const isArchitectureExpanded = activeArchitectureId === project.id;

            return (
              <div
                key={project.id}
                className="sh-card rounded-3xl p-7 sm:p-10 border border-[#4a2810]/15 bg-white shadow-md relative group overflow-hidden"
              >
                {/* Accent Watermark */}
                <span
                  className="font-archivo font-black text-8xl text-[#4a2810]/06 absolute -top-4 right-8 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {project.number}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Info: Meta, Title, Description, Tech Stack */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Category Badge & Project Number */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-code text-xs font-bold text-[#4a2810] px-3.5 py-1 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 shadow-xs">
                          {project.category}
                        </span>
                        <span className="font-code text-xs font-bold text-[#8b5a2a] bg-[#faf6f0] px-3 py-1 rounded-full border border-[#4a2810]/15">
                          Project {project.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-archivo text-2xl sm:text-3xl text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors mb-4">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#6b3a1a] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Features Highlights */}
                      <div className="space-y-2.5 mb-6">
                        <span className="font-code text-xs uppercase tracking-wider text-[#4a2810] font-bold block">
                          Key Engineering Highlights:
                        </span>
                        {project.keyHighlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a2810]">
                            <CheckCircle2 className="w-4 h-4 text-[#4a2810] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="mb-6">
                        <span className="font-code text-xs uppercase tracking-wider text-[#8b5a2a] font-bold block mb-2">
                          Technology Stack:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 text-xs font-code font-medium hover:bg-[#a8c4e8] transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#4a2810]/10">
                      {/* GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4a2810] hover:bg-[#6b3a1a] text-[#f5f0e4] text-xs font-bold shadow-sm transition-all hover:scale-105 active:scale-95"
                        aria-label={`View ${project.title} GitHub repository in a new tab`}
                      >
                        <GithubIcon className="w-4 h-4 text-[#f5f0e4]" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>

                      {/* Live Demo Button (if available) */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#a8c4e8] hover:bg-[#c8daf4] text-[#4a2810] border border-[#4a2810]/15 text-xs font-bold transition-all hover:scale-105 active:scale-95"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {/* Architecture View Toggle */}
                      <button
                        type="button"
                        onClick={() => toggleArchitecture(project.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/20 text-xs font-code font-semibold transition-all ml-auto"
                      >
                        <GitBranch className="w-3.5 h-3.5 text-[#4a2810]" />
                        <span>{isArchitectureExpanded ? 'Hide Architecture' : 'View Architecture'}</span>
                        {isArchitectureExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                  </div>

                  {/* Right Side: Architecture Flow Diagram Box */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#faf6f0] border border-[#4a2810]/15 relative overflow-hidden">
                      
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#4a2810]/10">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#4a2810]" />
                          <span className="font-code text-xs font-bold text-[#4a2810]">
                            Pipeline & System Flow
                          </span>
                        </div>
                        <span className="text-[10px] font-code text-[#4a2810] bg-[#a8c4e8] px-2.5 py-0.5 rounded-full font-bold border border-[#4a2810]/15">
                          Active Loop
                        </span>
                      </div>

                      {/* Step by step flow diagram */}
                      <div className="space-y-2">
                        {project.architectureSteps.map((step, sIdx) => {
                          const isLast = sIdx === project.architectureSteps.length - 1;
                          return (
                            <div key={sIdx} className="flex flex-col">
                              <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-[#4a2810]/12 text-xs font-code text-[#4a2810] shadow-xs">
                                <span className="w-5 h-5 rounded-full bg-[#a8c4e8] text-[#4a2810] flex items-center justify-center text-[10px] font-bold shrink-0">
                                  {sIdx + 1}
                                </span>
                                <span className="font-medium truncate">{step}</span>
                              </div>
                              {!isLast && (
                                <div className="pl-4 py-1 flex items-center text-[#8b5a2a] text-xs font-code">
                                  <span>↓</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Bottom Metric Pill */}
                      <div className="mt-4 pt-3 border-t border-[#4a2810]/10 flex items-center justify-between text-[11px] font-code text-[#6b3a1a]">
                        <span className="font-bold text-[#4a2810]">{project.metricsBadge}</span>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Expanded Architecture Deep-Dive Drawer */}
                {isArchitectureExpanded && project.architectureDetails && (
                  <div className="mt-8 pt-8 border-t border-[#4a2810]/15 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="w-4 h-4 text-[#4a2810]" />
                      <h4 className="font-archivo text-base text-[#4a2810]">
                        In-Depth Architecture Breakdown — {project.title.split('—')[0]}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.architectureDetails.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 flex flex-col justify-between"
                        >
                          <div>
                            <div className="font-code text-xs font-bold text-[#4a2810] mb-1">
                              {step.step}
                            </div>
                            <p className="text-xs text-[#6b3a1a] leading-relaxed mb-3">
                              {step.description}
                            </p>
                          </div>
                          <span className="font-code text-[10px] text-[#4a2810] bg-[#a8c4e8] px-2.5 py-0.5 rounded-full w-fit font-semibold border border-[#4a2810]/10">
                            {step.tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
