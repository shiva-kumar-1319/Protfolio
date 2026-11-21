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

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleDialogClick}
      aria-labelledby="project-modal-title"
      className="m-auto w-[92vw] max-w-4xl max-h-[90vh] rounded-3xl p-0 bg-[#faf6f0] text-[#4a2810] border-2 border-[#4a2810]/20 shadow-[0_25px_70px_rgba(74,40,16,0.3)] overflow-hidden focus:outline-none"
    >
      <div className="flex flex-col h-full max-h-[90vh] overflow-y-auto">
        {/* Header Banner */}
        <div className="relative p-6 sm:p-8 bg-[#4a2810] text-[#f0e8d8] border-b border-[#6b3a1a]">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-full bg-[#a8c4e8] text-[#4a2810]">
                {project.categoryBadge}
              </span>
              {project.highlightMetrics && (
                <span className="hidden sm:inline-block text-xs font-mono text-[#f0e8d8]/80 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                  {project.highlightMetrics}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#f0e8d8] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-archivo uppercase text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#a8c4e8] mt-1 font-semibold">
            {project.subtitle}
          </p>

          {/* Key Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
              {project.stats.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/10 border border-white/10">
                  <span className="text-[10px] font-mono text-[#f0e8d8]/70 uppercase block">
                    {s.label}
                  </span>
                  <span className="text-sm font-bold font-archivo text-[#a8c4e8]">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7 bg-[#faf6f0]">
          {/* Detailed Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b5a2a] mb-2 flex items-center gap-2 font-bold">
              <Terminal className="w-4 h-4 text-[#4a2810]" />
              <span>Executive Engineering Summary</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#4a2810]/85 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Architecture Pipeline Flow (if present) */}
          {project.architecture && project.architecture.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#4a2810] mb-3 flex items-center gap-2 font-bold">
                <Layers className="w-4 h-4 text-[#8b5a2a]" />
                <span>Architecture & Pipeline Breakdown</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecture.map((arch, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#4a2810]/12 shadow-sm"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-[#4a2810] mb-1">
                      <span>{arch.step}</span>
                      <span className="text-[10px] text-[#4a2810] bg-[#a8c4e8] px-2 py-0.5 rounded-full font-mono">
                        {arch.tech}
                      </span>
                    </div>
                    <p className="text-xs text-[#8b5a2a] leading-relaxed">
                      {arch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b5a2a] mb-3 flex items-center gap-2 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#4a2810]" />
              <span>Core System Capabilities & Tested Edge Cases</span>
            </h3>

            <div className="space-y-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a2810]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b5a2a] mb-2.5 flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4 text-[#4a2810]" />
              <span>Technology & Production Stack</span>
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-white text-[#4a2810] border border-[#4a2810]/15 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#f5f0e4] border-t border-[#4a2810]/12 flex flex-wrap items-center justify-between gap-4 mt-auto">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brown px-4 py-2 text-xs flex items-center gap-2 shadow-sm"
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
                className="btn-sky px-4 py-2 text-xs flex items-center gap-2 shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demonstration</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#4a2810] hover:bg-[#4a2810]/10 transition-colors"
          >
            Close Panel
          </button>
        </div>
      </div>
    </dialog>
  );
};
