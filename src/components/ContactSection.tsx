import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import {
  Mail,
  Copy,
  Check,
  Send,
  MessageSquare,
  ExternalLink,
  MapPin,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Software Engineering / AI Opportunity',
    message: '',
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.socials.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#3B82F6', '#22D3EE', '#8B5CF6'],
      });
    } catch {
      // safe fallback
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${formData.topic}] From ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Shiva,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#070A12] border-b border-blue-900/30 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#22D3EE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101A2B] border border-blue-500/30 text-xs font-code text-[#22D3EE] mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT CHANNELS & INQUIRIES</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F8FAFC] mb-4">
            Let's Build Something Great.
          </h2>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            Interested in AI/ML, Cloud Engineering, Distributed Systems, Backend Engineering, Research, Internships, and collaborative projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Email */}
            <div className="engineering-card rounded-2xl p-6 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#070A12] border border-blue-950 text-[#22D3EE] group-hover:border-[#22D3EE]/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-code text-[11px] text-slate-500 block uppercase">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.socials.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#22D3EE] transition-colors font-code"
                    >
                      {PORTFOLIO_DATA.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-[#070A12] border border-blue-950 text-slate-400 hover:text-white hover:border-[#3B82F6] transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Card 2: LinkedIn */}
            <div className="engineering-card rounded-2xl p-6 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#070A12] border border-blue-950 text-[#38BDF8] group-hover:border-[#38BDF8]/50 transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-code text-[11px] text-slate-500 block uppercase">
                      Professional Network
                    </span>
                    <a
                      href={PORTFOLIO_DATA.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-[#38BDF8] transition-colors"
                    >
                      linkedin.com/in/shiva-kumar-kavali
                    </a>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#070A12] border border-blue-950 text-slate-400 hover:text-[#38BDF8] hover:border-[#38BDF8] transition-colors"
                  title="Open LinkedIn"
                  aria-label="Open LinkedIn Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3: GitHub */}
            <div className="engineering-card rounded-2xl p-6 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#070A12] border border-blue-950 text-white group-hover:border-white/50 transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-code text-[11px] text-slate-500 block uppercase">
                      Code Repositories
                    </span>
                    <a
                      href={PORTFOLIO_DATA.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-[#22D3EE] transition-colors font-code"
                    >
                      github.com/shiva-kumar-1319
                    </a>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#070A12] border border-blue-950 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
                  title="Open GitHub"
                  aria-label="Open GitHub Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Timezone info */}
            <div className="p-4 rounded-xl bg-[#101A2B] border border-blue-950 flex items-center justify-between text-xs font-code text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Hyderabad, India</span>
              </span>
              <span className="text-emerald-400 font-semibold">● Open to Relocation & Remote</span>
            </div>

          </div>

          {/* Right Column: Interactive "Let's Connect" Message Form */}
          <div className="lg:col-span-7">
            <div className="engineering-card rounded-3xl p-7 sm:p-9 border border-blue-500/25">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-blue-950">
                <MessageSquare className="w-5 h-5 text-[#22D3EE]" />
                <h3 className="font-heading font-bold text-xl text-[#F8FAFC]">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-code text-[#94A3B8] mb-1.5 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-blue-900/50 text-sm text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-code text-[#94A3B8] mb-1.5 uppercase">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-blue-900/50 text-sm text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-code text-[#94A3B8] mb-1.5 uppercase">
                    Subject / Discussion Area
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-blue-900/50 text-sm text-[#F8FAFC] focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all"
                  >
                    <option value="SDE & Backend Engineering Role">Software Development Engineer (SDE) Role</option>
                    <option value="AI/ML Engineering Role">AI/ML Engineer Role</option>
                    <option value="Cloud & Distributed Systems Project">Cloud & Distributed Systems Engineering</option>
                    <option value="Summer / Immediate Internship">Internship Opportunity</option>
                    <option value="General Technical Inquiry">Technical Collaboration & Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-code text-[#94A3B8] mb-1.5 uppercase">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your team, project, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#070A12] border border-blue-900/50 text-sm text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] transition-all resize-none"
                  />
                </div>

                {/* Primary Button: Let's Connect */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] hover:from-[#60A5FA] hover:to-[#3B82F6] text-white font-semibold text-sm shadow-[0_4px_25px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_30px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Let's Connect</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
