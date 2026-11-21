import React from 'react';
import type { DomainType } from '../data/portfolioData';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { Award, Trophy, Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ExperienceProps {
  currentDomain?: DomainType;
}

export const ExperienceAchievements: React.FC<ExperienceProps> = () => {
  return (
    <section id="achievements" className="relative py-20 border-t border-blue-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================= WORK EXPERIENCE SECTION ================= */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1930] border border-blue-500/30 text-xs font-mono text-[#22D3EE] mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>INDUSTRY WORK EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Professional Experience
            </h2>
            <p className="mt-2 text-sm text-[#94A3B8]">
              Hands-on enterprise engineering experience in Generative AI, model telemetry, LLM evaluation, and prompt architecture.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {PORTFOLIO_CONFIG.experience.map((exp) => (
              <div
                key={exp.id}
                className="glass-panel-glow rounded-3xl p-7 sm:p-8 border border-blue-500/30 hover:border-[#22D3EE]/50 transition-all shadow-[0_15px_40px_rgba(5,7,13,0.8)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-blue-900/40">
                  <div>
                    <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/30 mb-2 inline-block">
                      {exp.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#38BDF8] mt-1">
                      <span className="font-semibold text-white">{exp.company}</span>
                      <span className="text-blue-500/40">•</span>
                      <span className="flex items-center gap-1 text-[#94A3B8]">
                        <MapPin className="w-3 h-3 text-[#22D3EE]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#05070D] border border-blue-900/50 text-xs font-mono text-[#94A3B8] shrink-0 self-start sm:self-center">
                    <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-blue-950">
                  <span className="text-[11px] font-mono uppercase text-[#94A3B8] mr-1">
                    Environment:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-[#05070D] text-[#67E8F9] border border-cyan-900/50"
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1930] border border-blue-500/30 text-xs font-mono text-[#22D3EE] mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & COMPETITIVE MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Key Achievements
          </h2>
          <p className="mt-2 text-sm text-[#94A3B8]">
            National hackathon podium finish, nationwide top 3,000 ML selection, and sports leadership.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {PORTFOLIO_CONFIG.achievements.map((item) => {
            const isAi = item.domain === 'ai-ml';
            const isBoth = item.domain === 'both';

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isBoth
                    ? 'glass-panel-glow border-blue-500/40'
                    : isAi
                    ? 'glass-panel hover:border-[#22D3EE]/50 hover:shadow-[0_10px_30px_rgba(34,211,238,0.2)]'
                    : 'glass-panel hover:border-[#3B82F6]/50 hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-2 rounded-xl border ${
                          isAi
                            ? 'bg-[#22D3EE]/15 border-[#22D3EE]/30 text-[#22D3EE]'
                            : 'bg-[#2563EB]/15 border-[#2563EB]/30 text-[#60A5FA]'
                        }`}
                      >
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8]">
                          {item.organization}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05070D] border border-blue-900/50 text-xs font-mono text-[#94A3B8] shrink-0">
                      <span>{item.year}</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-lg border ${
                        isAi
                          ? 'bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/30'
                          : 'bg-[#2563EB]/10 text-[#93C5FD] border-[#2563EB]/30'
                      }`}
                    >
                      ★ {item.metrics}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-blue-900/40 flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Milestone</span>
                  </span>
                  <span className="text-[#3B82F6]">{item.badge}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= OFFICIAL CERTIFICATIONS ================= */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-blue-900/40">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#22D3EE]" />
              <h3 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                Official Professional Certifications
              </h3>
            </div>
            <span className="text-xs font-mono text-[#94A3B8]">
              Industry Credentials Verified
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PORTFOLIO_CONFIG.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#080F1F] border border-blue-950 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#3B82F6]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8FAFC]">
                      {cert.name}
                    </h4>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      Issuer: {cert.issuer}
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-emerald-950/40 text-emerald-400 border border-emerald-800/40">
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
