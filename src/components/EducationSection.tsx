import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { GraduationCap, BookOpen, MapPin, CheckCircle2, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 border-t border-blue-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1930] border border-blue-500/30 text-xs font-mono text-[#22D3EE] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm text-[#94A3B8]">
            Formal engineering degree in Artificial Intelligence & Machine Learning and technical diploma in Computer Science.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PORTFOLIO_CONFIG.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-7 flex flex-col justify-between hover:border-[#3B82F6]/60 transition-all group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-[#2563EB]/15 text-[#60A5FA] border border-[#2563EB]/30">
                    {edu.domainBadge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#22D3EE] px-2.5 py-0.5 rounded-lg bg-[#05070D] border border-blue-950">
                    {edu.cgpa}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-[#38BDF8] mb-3">
                  {edu.field}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8] font-mono mb-6 pb-4 border-b border-blue-900/40">
                  <span className="flex items-center gap-1.5 text-[#F8FAFC]">
                    <BookOpen className="w-3.5 h-3.5 text-[#3B82F6]" />
                    {edu.institution}
                  </span>
                  <span className="text-blue-500/40">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#22D3EE]" />
                    {edu.location}
                  </span>
                  <span className="text-blue-500/40">•</span>
                  <span>{edu.duration}</span>
                </div>

                {/* Coursework & Highlights */}
                <div className="space-y-2.5 mb-4">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-blue-950 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Award className="w-3.5 h-3.5" />
                  <span>Accredited Academic Record</span>
                </span>
                <span>{edu.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
