import React, { useEffect, useRef } from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';
import { X, ExternalLink, Cpu, CheckCircle2, ShieldCheck, Terminal, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [project]);

  // Light dismiss: click outside modal content closes the dialog
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (!isInDialog) {
      onClose();
    }
  };

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    onClose();
  };

  if (!project) return null;

  const isAi = project.domain === 'ai-ml';
  const isBoth = project.domain === 'both';

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleDialogClick}
      aria-labelledby="project-modal-title"
      className="m-auto w-[92vw] max-w-4xl max-h-[90vh] rounded-3xl p-0 bg-[#080F1F] text-[#F8FAFC] border border-[#3B82F6]/40 shadow-[0_25px_60px_rgba(5,7,13,0.95)] overflow-hidden focus:outline-none"
    >
      <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
        {/* Header Banner */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#0B1930] via-[#080F1F] to-[#0B1930] border-b border-blue-900/40">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 text-xs font-mono font-semibold rounded-full border ${
                  isAi
                    ? 'bg-[#22D3EE]/20 text-[#22D3EE] border-[#22D3EE]/40'
                    : isBoth
                    ? 'bg-gradient-to-r from-[#2563EB]/30 to-[#22D3EE]/30 text-white border-blue-400/40'
                    : 'bg-[#2563EB]/20 text-[#60A5FA] border-[#2563EB]/40'
                }`}
              >
                {project.categoryBadge}
              </span>
              {project.highlightMetrics && (
                <span className="hidden sm:inline-block text-xs font-mono text-[#94A3B8] bg-[#05070D] px-2.5 py-1 rounded-md border border-blue-955">
                  {project.highlightMetrics}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#05070D] hover:bg-[#0B1930] text-[#94A3B8] hover:text-white border border-blue-900/40 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-[#38BDF8] mt-1 font-medium">
            {project.subtitle}
          </p>

          {/* Key Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
              {project.stats.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#05070D]/80 border border-blue-900/40">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                    {s.label}
                  </span>
                  <span className="text-sm font-bold font-mono text-[#22D3EE]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#3B82F6]" />
              <span>Executive Engineering Summary</span>
            </h3>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Architecture Pipeline Flow (if present) */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#22D3EE] mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Architecture & Pipeline Breakdown</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0B1930]/60 border border-blue-900/50 hover:border-[#22D3EE]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono font-bold text-[#F8FAFC] mb-1.5">
                      <span>{arch.step}</span>
                      <span className="text-[10px] text-[#22D3EE] bg-[#05070D] px-2 py-0.5 rounded border border-blue-950">
                        {arch.tech}
                      </span>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {arch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Core System Capabilities & Engineering Solves</span>
            </h3>

            <div className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#3B82F6]" />
              <span>Technology & Infrastructure Stack</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-mono rounded-xl bg-[#0B1930] text-[#93C5FD] border border-blue-900/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#05070D] border-t border-blue-900/40 flex flex-wrap items-center justify-between gap-4 mt-auto">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1930] hover:bg-[#2563EB]/20 border border-blue-900/60 hover:border-[#3B82F6] text-[#F8FAFC] text-xs font-semibold font-mono transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-[#05070D] text-xs font-bold font-mono shadow transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-[#94A3B8] hover:text-white bg-[#0B1930]/50 border border-blue-900/30 hover:border-blue-700 transition-colors"
          >
            Close Panel
          </button>
        </div>
      </div>
    </dialog>
  );
};
