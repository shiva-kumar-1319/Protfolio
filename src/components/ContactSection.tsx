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
        colors: ['#4a2810', '#6b3a1a', '#a8c4e8', '#c8daf4'],
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
      className="relative py-24 bg-[#faf6f0] border-b border-[#4a2810]/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Shrinithi-Style Full-Width Callout Statement Banner */}
        <div className="mb-20 rounded-3xl bg-[#4a2810] text-[#f5f0e4] p-8 sm:p-12 md:p-16 border border-[#321706] shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-code text-xs text-[#a8c4e8] font-bold uppercase tracking-wider block mb-2">
              ✦ OPEN FOR HIGH-IMPACT OPPORTUNITIES
            </span>
            <h3 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Have an engineering challenge or role? Let's build it.
            </h3>
            <p className="mt-4 text-sm sm:text-base text-[#f0e8d8] leading-relaxed">
              Available for full-time Software Development Engineer (SDE) and AI/ML Engineering roles, research fellowships, and high-concurrency systems design.
            </p>
          </div>

          <a
            href={`mailto:${PORTFOLIO_DATA.socials.email}?subject=Engineering%20Opportunity%20-%20Shiva%20Kumar`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#a8c4e8] hover:bg-[#c8daf4] text-[#4a2810] font-bold text-sm shadow-md transition-all shrink-0 hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Say Hello Directly</span>
          </a>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a8c4e8] border border-[#4a2810]/15 text-xs font-code font-bold text-[#4a2810] mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT CHANNELS & INQUIRIES</span>
          </div>

          <h2 className="font-archivo text-3xl sm:text-4xl md:text-5xl text-[#4a2810] tracking-tight mb-4">
            Get In Touch
          </h2>

          <p className="text-base sm:text-lg text-[#6b3a1a] leading-relaxed">
            Interested in AI/ML, Cloud Engineering, Distributed Systems, Backend Engineering, Research, and collaborative engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Email */}
            <div className="sh-card rounded-2xl p-6 group bg-white border border-[#4a2810]/15 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810] group-hover:bg-[#a8c4e8] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-code text-[11px] text-[#8b5a2a] block uppercase font-bold">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.socials.email}`}
                      className="text-sm sm:text-base font-bold text-[#4a2810] hover:text-[#6b3a1a] transition-colors font-code"
                    >
                      {PORTFOLIO_DATA.socials.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2.5 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810] hover:bg-[#a8c4e8] transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Card 2: LinkedIn */}
            <div className="sh-card rounded-2xl p-6 group bg-white border border-[#4a2810]/15 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810] group-hover:bg-[#a8c4e8] transition-colors">
                    <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
                  </div>
                  <div>
                    <span className="font-code text-[11px] text-[#8b5a2a] block uppercase font-bold">
                      Professional Network
                    </span>
                    <a
                      href={PORTFOLIO_DATA.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-[#4a2810] hover:text-[#6b3a1a] transition-colors"
                    >
                      linkedin.com/in/shiva-kumar-kavali
                    </a>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810] hover:bg-[#a8c4e8] transition-colors"
                  title="Open LinkedIn"
                  aria-label="Open LinkedIn Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3: GitHub */}
            <div className="sh-card rounded-2xl p-6 group bg-white border border-[#4a2810]/15 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810] group-hover:bg-[#a8c4e8] transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-code text-[11px] text-[#8b5a2a] block uppercase font-bold">
                      Code Repositories
                    </span>
                    <a
                      href={PORTFOLIO_DATA.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-[#4a2810] hover:text-[#6b3a1a] transition-colors font-code"
                    >
                      github.com/shiva-kumar-1319
                    </a>
                  </div>
                </div>

                <a
                  href={PORTFOLIO_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#faf6f0] border border-[#4a2810]/15 text-[#4a2810] hover:bg-[#a8c4e8] transition-colors"
                  title="Open GitHub"
                  aria-label="Open GitHub Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location & Timezone info */}
            <div className="p-4 rounded-xl bg-white border border-[#4a2810]/15 flex items-center justify-between text-xs font-code text-[#6b3a1a] shadow-sm">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4a2810]" />
                <span>Hyderabad, India (UTC+05:30)</span>
              </span>
              <span className="text-emerald-700 font-bold">● Open to Relocation</span>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="sh-card rounded-3xl p-7 sm:p-9 border border-[#4a2810]/15 bg-white shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#4a2810]/10">
                <MessageSquare className="w-5 h-5 text-[#4a2810]" />
                <h3 className="font-archivo text-xl text-[#4a2810]">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-code text-[#6b3a1a] mb-1.5 uppercase font-bold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/20 text-sm text-[#4a2810] placeholder-[#8b5a2a] focus:outline-none focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-code text-[#6b3a1a] mb-1.5 uppercase font-bold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/20 text-sm text-[#4a2810] placeholder-[#8b5a2a] focus:outline-none focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-code text-[#6b3a1a] mb-1.5 uppercase font-bold">
                    Subject / Discussion Area
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/20 text-sm text-[#4a2810] focus:outline-none focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] transition-all"
                  >
                    <option value="SDE & Backend Engineering Role">Software Development Engineer (SDE) Role</option>
                    <option value="AI/ML Engineering Role">AI/ML Engineer Role</option>
                    <option value="Cloud & Distributed Systems Project">Cloud & Distributed Systems Engineering</option>
                    <option value="Summer / Immediate Internship">Internship Opportunity</option>
                    <option value="General Technical Inquiry">Technical Collaboration & Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-code text-[#6b3a1a] mb-1.5 uppercase font-bold">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your team, project, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/20 text-sm text-[#4a2810] placeholder-[#8b5a2a] focus:outline-none focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] transition-all resize-none"
                  />
                </div>

                {/* Primary Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#4a2810] hover:bg-[#6b3a1a] text-[#f5f0e4] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:scale-102 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
