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
      className="relative py-24 bg-[#0B1220] border-b border-blue-900/30 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 text-xs font-code text-[#22D3EE] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTION-STYLE SYSTEMS</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4">
            Featured Projects
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Engineering architectures built for high resiliency, autonomous Kubernetes remediation, RAG document intelligence, and real-time client-side neural vision.
          </p>
        </div>

        {/* Projects List — Large Premium Cards */}
        <div className="space-y-12">
          {PORTFOLIO_DATA.projects.map((project: FeaturedProject) => {
            const isArchitectureExpanded = activeArchitectureId === project.id;

            return (
              <div
                key={project.id}
                className="engineering-card rounded-3xl p-7 sm:p-10 border border-blue-500/20 hover:border-[#22D3EE]/50 transition-all shadow-[0_20px_50px_rgba(5,7,13,0.8)] relative group overflow-hidden"
              >
                {/* Accent Watermark */}
                <span
                  className="font-heading font-black text-8xl text-slate-800/15 absolute -top-4 right-8 select-none pointer-events-none"
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
                        <span className="font-code text-xs font-bold text-[#22D3EE] px-3 py-1 rounded-full bg-[#070A12] border border-cyan-900/60 shadow">
                          {project.category}
                        </span>
                        <span className="font-code text-xs text-[#a8c4e8] bg-[#101A2B] px-2.5 py-0.5 rounded-md border border-blue-950">
                          Project {project.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors mb-4">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Key Features Highlights */}
                      <div className="space-y-2.5 mb-6">
                        <span className="font-code text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                          Key Engineering Highlights:
                        </span>
                        {project.keyHighlights.map((hl, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                            <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="mb-6">
                        <span className="font-code text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                          Technology Stack:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg bg-[#070A12] text-[#a8c4e8] border border-blue-950 text-xs font-code group-hover:border-blue-900 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-blue-950/70">
                      {/* GitHub Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#2563EB] hover:from-[#60A5FA] hover:to-[#3B82F6] text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all"
                        aria-label={`View ${project.title} GitHub repository in a new tab`}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3 ml-0.5" />
                      </a>

                      {/* Live Demo Button (if available) */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#070A12] hover:bg-[#15233B] text-[#22D3EE] border border-cyan-900/60 hover:border-[#22D3EE] text-xs font-semibold transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {/* Architecture View Toggle */}
                      <button
                        type="button"
                        onClick={() => toggleArchitecture(project.id)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#101A2B] hover:bg-[#15233B] text-[#a8c4e8] hover:text-[#22D3EE] border border-blue-900/40 text-xs font-code transition-all ml-auto"
                      >
                        <GitBranch className="w-3.5 h-3.5 text-[#3B82F6]" />
                        <span>{isArchitectureExpanded ? 'Hide Architecture' : 'View Architecture'}</span>
                        {isArchitectureExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                  </div>

                  {/* Right Side: Architecture Visualization Box */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#070A12] border border-blue-900/50 relative overflow-hidden">
                      
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-blue-950">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#22D3EE]" />
                          <span className="font-code text-xs font-bold text-[#F8FAFC]">
                            Pipeline & System Flow
                          </span>
                        </div>
                        <span className="text-[10px] font-code text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900">
                          Active Loop
                        </span>
                      </div>

                      {/* Step by step flow diagram */}
                      <div className="space-y-2">
                        {project.architectureSteps.map((step, sIdx) => {
                          const isLast = sIdx === project.architectureSteps.length - 1;
                          return (
                            <div key={sIdx} className="flex flex-col">
                              <div className="flex items-center gap-3 p-2 rounded-lg bg-[#0B1220] border border-blue-950 text-xs font-code text-[#F8FAFC] hover:border-[#3B82F6]/60 transition-colors">
                                <span className="w-5 h-5 rounded-full bg-[#3B82F6]/20 text-[#38BDF8] flex items-center justify-center text-[10px] font-bold shrink-0">
                                  {sIdx + 1}
                                </span>
                                <span className="font-medium truncate">{step}</span>
                              </div>
                              {!isLast && (
                                <div className="pl-4 py-1 flex items-center text-slate-600 text-xs font-code">
                                  <span>↓</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Bottom Metric Pill */}
                      <div className="mt-4 pt-3 border-t border-blue-950/80 flex items-center justify-between text-[11px] font-code text-[#94A3B8]">
                        <span className="text-[#a8c4e8] font-semibold">{project.metricsBadge}</span>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Expanded Architecture Deep-Dive Drawer */}
                {isArchitectureExpanded && project.architectureDetails && (
                  <div className="mt-8 pt-8 border-t border-blue-900/40 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="w-4 h-4 text-[#22D3EE]" />
                      <h4 className="font-heading font-bold text-base text-[#F8FAFC]">
                        In-Depth Architecture Breakdown — {project.title.split('—')[0]}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.architectureDetails.map((step, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-[#070A12] border border-blue-950 flex flex-col justify-between"
                        >
                          <div>
                            <div className="font-code text-xs font-bold text-[#22D3EE] mb-1">
                              {step.step}
                            </div>
                            <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                              {step.description}
                            </p>
                          </div>
                          <span className="font-code text-[10px] text-[#3B82F6] bg-blue-950/40 px-2 py-0.5 rounded w-fit border border-blue-900">
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
