import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Trophy,
  Award,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

export const AchievementsAndCertifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'achievements' | 'certifications' | 'experience'>('all');

  return (
    <section
      id="experience"
      className="relative py-24 bg-[#0B1220] border-b border-blue-900/30 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 text-xs font-code text-[#22D3EE] mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>CREDENTIALS & MILESTONES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4">
            Experience & Achievements
          </h2>

          <p className="text-base text-[#94A3B8] leading-relaxed">
            Industry internship experience in Generative AI, national hackathon podium finish, nationwide top 3,000 ML selection, and technical certifications.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-blue-950/70" role="tablist">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'experience', label: 'Work Experience' },
            { id: 'achievements', label: 'Achievements' },
            { id: 'certifications', label: 'Certifications' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-xl text-xs font-code transition-all ${
                activeTab === tab.id
                  ? 'bg-[#3B82F6] text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'bg-[#101A2B] text-[#94A3B8] hover:text-[#F8FAFC] border border-blue-900/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. INDUSTRY EXPERIENCE (If activeTab === 'all' or 'experience') */}
        {(activeTab === 'all' || activeTab === 'experience') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-[#22D3EE]" />
              <h3 className="font-heading text-xl font-bold text-[#F8FAFC]">
                Professional Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="engineering-card rounded-2xl p-7 sm:p-8 border border-blue-500/25 relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-blue-950">
                    <div>
                      <span className="font-code text-xs text-[#22D3EE] bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 mb-2 inline-block">
                        {exp.badge}
                      </span>
                      <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                        {exp.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-code text-[#a8c4e8] mt-1">
                        <span className="font-semibold text-white">{exp.company}</span>
                        <span className="text-blue-500/40">•</span>
                        <span className="flex items-center gap-1 text-[#94A3B8]">
                          <MapPin className="w-3 h-3 text-[#22D3EE]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#070A12] border border-blue-950 text-xs font-code text-[#94A3B8] self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-blue-950/70">
                    <span className="font-code text-xs text-slate-500 mr-1 uppercase">
                      Environment:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#070A12] text-[#a8c4e8] border border-blue-950 text-xs font-code"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. ACHIEVEMENTS SECTION (If activeTab === 'all' or 'achievements') */}
        {(activeTab === 'all' || activeTab === 'achievements') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-[#FFA116]" />
              <h3 className="font-heading text-xl font-bold text-[#F8FAFC]">
                Honors & Key Achievements
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORTFOLIO_DATA.achievements.map((item) => (
                <div
                  key={item.id}
                  className="engineering-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#070A12] border border-blue-950 group-hover:border-[#FFA116]/50 transition-colors">
                        <Award className="w-5 h-5 text-[#FFA116]" />
                      </div>
                      <span className="font-code text-xs font-bold text-[#FFA116] px-2.5 py-1 rounded-md bg-[#070A12] border border-amber-950">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-lg text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors mb-2">
                      {item.title}
                    </h4>

                    <div className="font-code text-xs text-[#a8c4e8] mb-3">
                      {item.organization} · {item.year}
                    </div>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-blue-950/70 flex items-center justify-between">
                    <span className="font-code text-xs font-semibold text-[#22D3EE]">
                      {item.metrics}
                    </span>
                    {item.projectUrl && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#a8c4e8] hover:text-white flex items-center gap-1 font-code"
                      >
                        <span>Project</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. CERTIFICATIONS SECTION (If activeTab === 'all' or 'certifications') */}
        {(activeTab === 'all' || activeTab === 'certifications') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-[#3B82F6]" />
              <h3 className="font-heading text-xl font-bold text-[#F8FAFC]">
                Verified Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="engineering-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group hover:border-[#3B82F6]/60 transition-all"
                >
                  <div>
                    <div className="p-2 w-fit rounded-lg bg-[#070A12] border border-blue-950 text-[#3B82F6] mb-3">
                      <Award className="w-4 h-4" />
                    </div>

                    <h4 className="font-heading font-bold text-base text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors mb-1.5">
                      {cert.name}
                    </h4>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-3">
                      {cert.issuer}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#070A12] text-[10px] font-code text-[#a8c4e8] border border-blue-950"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-blue-950/70 text-[11px] font-code text-slate-500 flex items-center justify-between">
                      <span>Status:</span>
                      <span className="text-emerald-400 font-semibold">{cert.dateOrBadge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ACADEMIC EDUCATION SECTION */}
        <div className="mt-14 pt-14 border-t border-blue-950/70">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />
            <h3 className="font-heading text-xl font-bold text-[#F8FAFC]">
              Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="engineering-card rounded-2xl p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-code text-xs text-[#38BDF8] bg-blue-950/40 px-3 py-1 rounded-full border border-blue-900">
                      {edu.badge}
                    </span>
                    <span className="font-code text-xs font-bold text-emerald-400 bg-[#070A12] px-2.5 py-1 rounded-md border border-blue-950">
                      {edu.cgpa}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-xl text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors mb-1">
                    {edu.degree}
                  </h4>

                  <div className="font-heading text-sm text-[#a8c4e8] mb-3">
                    {edu.field}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-code text-[#94A3B8] mb-4 pb-3 border-b border-blue-950">
                    <span className="flex items-center gap-1.5 text-white">
                      <BookOpen className="w-3.5 h-3.5 text-[#3B82F6]" />
                      {edu.institution}
                    </span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-[#94A3B8] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
