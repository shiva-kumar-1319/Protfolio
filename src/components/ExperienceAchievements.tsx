import React from 'react';
import type { DomainType } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Trophy, Calendar, MapPin, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

interface ExperienceProps {
  currentDomain?: DomainType;
}

export const ExperienceAchievements: React.FC<ExperienceProps> = () => {
  return (
    <section id="experience" className="relative py-20 bg-[#ffffff] border-b border-[#4a2810]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= WORK EXPERIENCE SECTION ================= */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-2 font-bold">
              HANDS-ON PRODUCTION WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-archivo uppercase text-[#4a2810] tracking-tight">
              Work Experience
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4a2810]/80 leading-relaxed">
              Real engineering experience focused on Generative AI pipelines, model telemetry, LLM benchmarking, and enterprise security boundaries.
            </p>
          </div>

          <div className="max-w-4xl">
            {PORTFOLIO_CONFIG.experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-[#faf6f0] rounded-3xl p-7 sm:p-8 border-2 border-[#4a2810]/12 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#4a2810]/10">
                  <div>
                    <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full bg-[#a8c4e8] text-[#4a2810] mb-2 inline-block">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-archivo uppercase text-[#4a2810] tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8b5a2a] mt-1 font-semibold">
                      <span className="text-[#4a2810]">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#8b5a2a]">
                        <MapPin className="w-3.5 h-3.5 text-[#4a2810]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#4a2810]/15 text-xs font-mono font-bold text-[#4a2810] self-start sm:self-center shadow-sm">
                    <Calendar className="w-3.5 h-3.5 text-[#8b5a2a]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a2810]/90 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#4a2810]/10">
                  <span className="text-[11px] font-mono uppercase text-[#8b5a2a] font-bold mr-1">
                    Environment:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-white text-[#4a2810] border border-[#4a2810]/12"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= HONORS & ACHIEVEMENTS SECTION ================= */}
        <div className="mb-16">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-2 font-bold">
              RECOGNITION & PODIUM FINISHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-archivo uppercase text-[#4a2810] tracking-tight">
              Verified Achievements
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4a2810]/80">
              National competitive hackathon rankings, nationwide ML selections, and leadership achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {PORTFOLIO_CONFIG.achievements.map((item) => (
              <div
                key={item.id}
                className="bg-[#faf6f0] rounded-2xl p-6 border-2 border-[#4a2810]/12 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#a8c4e8] text-[#4a2810]">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#8b5a2a] font-bold">
                          {item.organization}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold font-archivo uppercase text-[#4a2810]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-[#4a2810]/12 text-[#4a2810]">
                      {item.year}
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#4a2810] text-[#f0e8d8]">
                      ★ {item.metrics}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4a2810]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#4a2810]/10 flex items-center justify-between text-xs font-mono text-[#8b5a2a]">
                  <span className="flex items-center gap-1.5 text-emerald-800 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Milestone</span>
                  </span>
                  <span className="text-[#4a2810] font-semibold">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= OFFICIAL CERTIFICATIONS ================= */}
        <div className="bg-[#faf6f0] rounded-3xl p-6 sm:p-8 max-w-5xl border-2 border-[#4a2810]/12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#4a2810]/10">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#4a2810]" />
              <h3 className="text-lg font-archivo uppercase text-[#4a2810] tracking-tight">
                Official Certifications
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8b5a2a] font-semibold">
              Oracle Industry Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_CONFIG.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white border border-[#4a2810]/12 flex items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#a8c4e8] text-[#4a2810]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-archivo uppercase text-[#4a2810]">
                      {cert.name}
                    </h4>
                    <span className="text-xs font-mono text-[#8b5a2a]">
                      Issuer: {cert.issuer}
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-full bg-[#4a2810] text-[#f0e8d8]">
                  {cert.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
