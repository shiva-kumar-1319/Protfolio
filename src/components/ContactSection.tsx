import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import {
  Copy,
  Check,
  Send,
  Code2,
  Terminal,
  Sparkles,
  MessageSquare,
  AlertCircle,
  Phone,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Both SDE & AI/ML',
    message: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [readyToLaunchMail, setReadyToLaunchMail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_CONFIG.socials.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#4a2810', '#6b3a1a', '#a8c4e8'],
      });
    } catch {
      // safe fallback
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setErrorMsg('');
    setReadyToLaunchMail(true);

    const subject = encodeURIComponent(`[Portfolio Inquiry - ${formData.domain}] From ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Shiva,\n\nName: ${formData.name}\nEmail: ${formData.email}\nDomain Interest: ${formData.domain}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PORTFOLIO_CONFIG.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative">
      
      {/* SHRINITHI-STYLE "LET'S BUILD" BANNER */}
      <div className="bg-[#6b3a1a] py-16 px-4 sm:px-8 text-center relative overflow-hidden text-[#f0e8d8] border-b border-[#4a2810]/20">
        <span
          className="font-archivo absolute -bottom-6 left-1/2 -translate-x-1/2 text-7xl sm:text-9xl text-white/5 select-none pointer-events-none whitespace-nowrap uppercase"
          aria-hidden="true"
        >
          Let's Build Together
        </span>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#a8c4e8] font-bold block mb-2">
            AVAILABLE FOR FULL-TIME SDE & AI/ML ROLES
          </span>
          <h2 className="text-3xl sm:text-4xl font-archivo uppercase text-white mb-4 tracking-tight">
            Have a Problem to Solve? Let's Talk.
          </h2>
          <p className="text-xs sm:text-sm text-[#f0e8d8]/85 mb-6 leading-relaxed">
            Whether you need a backend engineer who understands distributed queues and database locking, or an AI engineer who evaluates LLMs beyond shallow prompts—I am ready to contribute.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PORTFOLIO_CONFIG.socials.email}?subject=Opportunity%20Inquiry%20-%20Shiva%20Kumar`}
              className="btn-sky px-7 py-3 text-xs shadow-md"
            >
              Get in Touch →
            </a>
            <a
              href={PORTFOLIO_CONFIG.socials.resumeUrl}
              download="Shiva_Kumar_Resume.pdf"
              className="btn-brown px-7 py-3 text-xs shadow-md border border-white/20"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>

      {/* 2-COLUMN CONTACT DISPATCH SECTION */}
      <div className="bg-[#f5f0e4] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#4a2810]/10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[2px] text-[#8b5a2a] block mb-1 font-bold">
                COMMUNICATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-archivo uppercase text-[#4a2810] tracking-tight">
                Direct Channels
              </h3>
              <p className="text-xs text-[#4a2810]/80 mt-1">
                Reach out directly via email, connect on LinkedIn, or inspect my repositories on GitHub.
              </p>
            </div>

            {/* Email Box */}
            <div className="bg-white p-5 rounded-2xl border-2 border-[#4a2810]/12 shadow-sm">
              <span className="text-[10px] font-mono uppercase text-[#8b5a2a] font-bold block mb-1">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-mono font-bold text-[#4a2810] truncate">
                  {PORTFOLIO_CONFIG.socials.email}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-1 rounded-full bg-[#f5f0e4] hover:bg-[#a8c4e8] text-[11px] font-mono font-bold text-[#4a2810] transition-colors flex items-center gap-1 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-800" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-[#4a2810]/10 flex items-center gap-2 text-xs font-mono text-[#8b5a2a]">
                <Phone className="w-3.5 h-3.5 text-[#4a2810]" />
                <a href={`tel:${PORTFOLIO_CONFIG.socials.phone}`} className="hover:text-[#4a2810]">
                  {PORTFOLIO_CONFIG.socials.phone}
                </a>
              </div>
            </div>

            {/* Social Links List */}
            <div className="space-y-2">
              <a
                href={PORTFOLIO_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-[#faf6f0] border border-[#4a2810]/12 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#4a2810]">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </div>
                <span className="text-[11px] font-mono text-[#8b5a2a] group-hover:text-[#4a2810]">
                  @shiva-kumar-1319 ↗
                </span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-[#faf6f0] border border-[#4a2810]/12 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#4a2810]">
                  <LinkedinIcon className="w-4 h-4 text-[#3B82F6]" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-[11px] font-mono text-[#8b5a2a] group-hover:text-[#4a2810]">
                  shiva-kumar-kavali ↗
                </span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-[#faf6f0] border border-[#4a2810]/12 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#4a2810]">
                  <Code2 className="w-4 h-4 text-[#FFA116]" />
                  <span>LeetCode Profile</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#FFA116]">
                  500+ Solved ↗
                </span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.socials.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-[#faf6f0] border border-[#4a2810]/12 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#4a2810]">
                  <Terminal className="w-4 h-4 text-[#1890FF]" />
                  <span>Codeforces Profile</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#1890FF]">
                  1200+ Rating ↗
                </span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.socials.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white hover:bg-[#faf6f0] border border-[#4a2810]/12 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#4a2810]">
                  <Sparkles className="w-4 h-4 text-[#F97316]" />
                  <span>CodeChef Profile</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#F97316]">
                  3-Star Rated ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#4a2810]/12 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-[#4a2810]" />
                <h3 className="text-xl font-archivo uppercase text-[#4a2810]">
                  Direct Message Composer
                </h3>
              </div>
              <p className="text-xs text-[#8b5a2a] mb-6">
                This form prepares a direct formatted dispatch via your default mail client.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2 text-xs text-red-800">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {readyToLaunchMail && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-800">
                  <Check className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>
                    Mail client triggered! You can also reach me directly at <strong>{PORTFOLIO_CONFIG.socials.email}</strong>.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-mono uppercase font-bold text-[#8b5a2a] mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 text-xs bg-[#faf6f0] border border-[#4a2810]/15 rounded-xl text-[#4a2810] placeholder-[#8b5a2a]/60 focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-mono uppercase font-bold text-[#8b5a2a] mb-1.5"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 text-xs bg-[#faf6f0] border border-[#4a2810]/15 rounded-xl text-[#4a2810] placeholder-[#8b5a2a]/60 focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-domain"
                    className="block text-[11px] font-mono uppercase font-bold text-[#8b5a2a] mb-1.5"
                  >
                    Opportunity Domain Focus
                  </label>
                  <select
                    id="contact-domain"
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-[#faf6f0] border border-[#4a2810]/15 rounded-xl text-[#4a2810] focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] outline-none transition-all font-semibold"
                  >
                    <option value="Both SDE & AI/ML">Dual-Role: Both SDE & AI/ML</option>
                    <option value="Software Development Engineer (SDE)">Software Development Engineer (SDE)</option>
                    <option value="AI & Machine Learning Engineer (AI/ML)">AI & Machine Learning Engineer (AI/ML)</option>
                    <option value="Distributed Systems / Backend">Distributed Systems / Backend</option>
                    <option value="Generative AI & LLMs">Generative AI & LLMs</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-mono uppercase font-bold text-[#8b5a2a] mb-1.5"
                  >
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team requirements, or open roles..."
                    className="w-full px-4 py-3 text-xs bg-[#faf6f0] border border-[#4a2810]/15 rounded-xl text-[#4a2810] placeholder-[#8b5a2a]/60 focus:border-[#4a2810] focus:ring-1 focus:ring-[#4a2810] outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[#8b5a2a]">
                    Dispatches directly via your default email client.
                  </span>

                  <button
                    type="submit"
                    className="btn-brown px-7 py-3 text-xs shadow-md flex items-center gap-2 hover:scale-[1.01]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message (mailto)</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
