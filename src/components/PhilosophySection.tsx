import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative py-20 bg-[#6b3a1a] text-[#f0e8d8] overflow-hidden">
      {/* Background script watermark */}
      <span
        className="font-signature absolute -top-4 right-6 text-7xl sm:text-9xl text-white/5 select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        fundamentals over hype
      </span>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#a8c4e8] block mb-2 font-bold">
            ENGINEERING PRINCIPLES & REALITY CHECK
          </span>
          <h2 className="text-3xl sm:text-4xl font-archivo uppercase tracking-tight text-white mb-4">
            Depth Over Breadth. Proven Impact Over Buzzwords.
          </h2>
          <p className="text-sm sm:text-base text-[#f0e8d8]/85 leading-relaxed">
            Interviewers dig deep into every technology listed on a profile. I focus on technologies I have built, benchmarked, and stress-tested in production and competitive environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Principle 1 */}
          <div className="p-7 rounded-2xl bg-[#4a2810]/70 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="p-3 w-fit rounded-xl bg-[#a8c4e8]/20 border border-[#a8c4e8]/30 text-[#a8c4e8] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-archivo text-white mb-2">
                1. Depth Over Superficial Breadth
              </h3>
              <p className="text-xs sm:text-sm text-[#f0e8d8]/80 leading-relaxed mb-4">
                Rather than listing 15 frameworks superficially, I demonstrate deep working mastery of core languages (Python, Java, C++) and foundational infrastructure (FastAPI, PostgreSQL, RabbitMQ, Docker, Kubernetes).
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#a8c4e8]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Authentic Technical Self-Assessment</span>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="p-7 rounded-2xl bg-[#4a2810]/70 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="p-3 w-fit rounded-xl bg-[#a8c4e8]/20 border border-[#a8c4e8]/30 text-[#a8c4e8] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-archivo text-white mb-2">
                2. Impact With Duration Context
              </h3>
              <p className="text-xs sm:text-sm text-[#f0e8d8]/80 leading-relaxed mb-4">
                Real engineering is defined by measurable outcomes: boosting unsupported-claim rejection from 38% to 89% via LoRA fine-tuning, designing zero-downtime microservices with chaos engineering, and ensuring ACID consistency.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#a8c4e8]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Measurable & Evaluated Benchmarks</span>
            </div>
          </div>

          {/* Principle 3 */}
          <div className="p-7 rounded-2xl bg-[#4a2810]/70 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="p-3 w-fit rounded-xl bg-[#a8c4e8]/20 border border-[#a8c4e8]/30 text-[#a8c4e8] mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-archivo text-white mb-2">
                3. Strong Fundamentals & Curiosity
              </h3>
              <p className="text-xs sm:text-sm text-[#f0e8d8]/80 leading-relaxed mb-4">
                Validated through 500+ LeetCode problems, 1200+ Codeforces rating, and 3-Star CodeChef ranking. Coupled with leadership as Captain of the college football team and College Chess Champion.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#a8c4e8]">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Algorithmic Rigor & Team Leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
