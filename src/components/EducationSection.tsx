import React from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { BookOpen, MapPin, CheckCircle2, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 bg-[#ffffff] border-b border-[#4a2810]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-2 font-bold">
            ACADEMIC FOUNDATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo uppercase text-[#4a2810] tracking-tight">
            Formal Education
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#4a2810]/80">
            Degree in Artificial Intelligence & Machine Learning and Technical Diploma in Computer Science & Engineering.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {PORTFOLIO_CONFIG.education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#faf6f0] rounded-3xl p-7 sm:p-8 flex flex-col justify-between border-2 border-[#4a2810]/12 shadow-sm"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-full bg-[#a8c4e8] text-[#4a2810]">
                    {edu.domainBadge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#f0e8d8] px-3 py-1 rounded-full bg-[#4a2810]">
                    {edu.cgpa}
                  </span>
                </div>

                <h3 className="font-archivo text-xl uppercase text-[#4a2810] mb-1">
                  {edu.degree}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#8b5a2a] mb-3">
                  {edu.field}
                </p>

                <div className="flex flex-wrap items-center gap-2 text-xs text-[#8b5a2a] font-mono mb-6 pb-4 border-b border-[#4a2810]/10">
                  <span className="flex items-center gap-1.5 text-[#4a2810] font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-[#4a2810]" />
                    {edu.institution}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#4a2810]" />
                    {edu.location}
                  </span>
                  <span>•</span>
                  <span>{edu.duration}</span>
                </div>

                {/* Coursework & Highlights */}
                <div className="space-y-2 mb-4">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#4a2810]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#4a2810]/10 flex items-center justify-between text-xs font-mono text-[#8b5a2a]">
                <span className="flex items-center gap-1 text-emerald-800 font-bold">
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
