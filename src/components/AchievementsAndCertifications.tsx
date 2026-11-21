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
      className="relative py-24 bg-[#faf6f0] border-b border-[#4a2810]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 text-xs font-code font-bold text-[#4a2810] mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>CREDENTIALS & MILESTONES</span>
          </div>

          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-[#4a2810] tracking-tight mb-4">
            Experience & Achievements
          </h2>

          <p className="text-base text-[#6b3a1a] leading-relaxed">
            Industry internship experience in Generative AI, national hackathon podium finish, nationwide top 3,000 ML selection, and technical certifications.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#4a2810]/10" role="tablist">
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
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#4a2810] text-[#f5f0e4] shadow-sm'
                  : 'bg-white text-[#6b3a1a] hover:text-[#4a2810] border border-[#4a2810]/15'
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
              <Briefcase className="w-5 h-5 text-[#4a2810]" />
              <h3 className="font-archivo text-xl text-[#4a2810]">
                Professional Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="sh-card rounded-2xl p-7 sm:p-8 border border-[#4a2810]/15 bg-white relative group shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#4a2810]/10">
                    <div>
                      <span className="font-code text-xs text-[#4a2810] bg-[#a8c4e8] font-bold px-3 py-1 rounded-full border border-[#4a2810]/15 mb-2 inline-block">
                        {exp.badge}
                      </span>
                      <h4 className="font-archivo text-xl sm:text-2xl text-[#4a2810]">
                        {exp.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-code text-[#6b3a1a] mt-1">
                        <span className="font-bold text-[#4a2810]">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-[#6b3a1a]">
                          <MapPin className="w-3 h-3 text-[#4a2810]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf6f0] border border-[#4a2810]/15 text-xs font-code text-[#4a2810] self-start sm:self-center">
                      <Calendar className="w-3.5 h-3.5 text-[#4a2810]" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a2810] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#4a2810] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#4a2810]/10">
                    <span className="font-code text-xs text-[#8b5a2a] mr-1 uppercase font-bold">
                      Environment:
                    </span>
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#faf6f0] text-[#4a2810] border border-[#4a2810]/15 text-xs font-code font-medium hover:bg-[#a8c4e8] transition-colors"
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
              <Trophy className="w-5 h-5 text-[#4a2810]" />
              <h3 className="font-archivo text-xl text-[#4a2810]">
                Honors & Key Achievements
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PORTFOLIO_DATA.achievements.map((item) => (
                <div
                  key={item.id}
                  className="sh-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden bg-white border border-[#4a2810]/15 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-2.5 rounded-xl bg-[#c8daf4]/50 border border-[#4a2810]/15 group-hover:bg-[#a8c4e8] transition-colors">
                        <Award className="w-5 h-5 text-[#4a2810]" />
                      </div>
                      <span className="font-code text-xs font-bold text-[#4a2810] px-3 py-1 rounded-full bg-[#faf6f0] border border-[#4a2810]/15">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-archivo text-lg text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors mb-2">
                      {item.title}
                    </h4>

                    <div className="font-code text-xs text-[#8b5a2a] mb-3">
                      {item.organization} · {item.year}
                    </div>

                    <p className="text-xs sm:text-sm text-[#6b3a1a] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#4a2810]/10 flex items-center justify-between">
                    <span className="font-code text-xs font-bold text-[#4a2810]">
                      {item.metrics}
                    </span>
                    {item.projectUrl && (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#4a2810] hover:text-[#6b3a1a] flex items-center gap-1 font-bold"
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
              <ShieldCheck className="w-5 h-5 text-[#4a2810]" />
              <h3 className="font-archivo text-xl text-[#4a2810]">
                Verified Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PORTFOLIO_DATA.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="sh-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group bg-white border border-[#4a2810]/15 shadow-sm"
                >
                  <div>
                    <div className="p-2 w-fit rounded-lg bg-[#c8daf4]/50 border border-[#4a2810]/15 text-[#4a2810] mb-3">
                      <Award className="w-4 h-4" />
                    </div>

                    <h4 className="font-archivo text-base text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors mb-1.5">
                      {cert.name}
                    </h4>

                    <p className="text-xs text-[#6b3a1a] leading-relaxed mb-3">
                      {cert.issuer}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-[#faf6f0] text-[10px] font-code text-[#4a2810] border border-[#4a2810]/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#4a2810]/10 text-[11px] font-code text-[#8b5a2a] flex items-center justify-between">
                      <span>Status:</span>
                      <span className="text-emerald-700 font-bold">{cert.dateOrBadge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. ACADEMIC EDUCATION SECTION */}
        <div className="mt-14 pt-14 border-t border-[#4a2810]/10">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-[#4a2810]" />
            <h3 className="font-archivo text-xl text-[#4a2810]">
              Academic Background
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="sh-card rounded-2xl p-7 flex flex-col justify-between group bg-white border border-[#4a2810]/15 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-code text-xs font-bold text-[#4a2810] bg-[#a8c4e8] px-3 py-1 rounded-full border border-[#4a2810]/15">
                      {edu.badge}
                    </span>
                    <span className="font-code text-xs font-bold text-[#4a2810] bg-[#faf6f0] px-3 py-1 rounded-md border border-[#4a2810]/15">
                      {edu.cgpa}
                    </span>
                  </div>

                  <h4 className="font-archivo text-xl text-[#4a2810] group-hover:text-[#6b3a1a] transition-colors mb-1">
                    {edu.degree}
                  </h4>

                  <div className="text-sm font-semibold text-[#6b3a1a] mb-3">
                    {edu.field}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-code text-[#8b5a2a] mb-4 pb-3 border-b border-[#4a2810]/10">
                    <span className="flex items-center gap-1.5 text-[#4a2810] font-bold">
                      <BookOpen className="w-3.5 h-3.5 text-[#4a2810]" />
                      {edu.institution}
                    </span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span>{edu.duration}</span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-[#6b3a1a] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4a2810] shrink-0 mt-0.5" />
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
