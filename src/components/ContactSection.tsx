import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import {
  Mail,
  Copy,
  Check,
  Send,
  Code2,
  Terminal,
  Sparkles,
  FileDown,
  MessageSquare,
  AlertCircle,
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
        colors: ['#2563EB', '#3B82F6', '#22D3EE'],
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

    // Direct, honest mailto trigger: no fake mock server success!
    const subject = encodeURIComponent(`[Portfolio Inquiry - ${formData.domain}] From ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Shiva,\n\nName: ${formData.name}\nEmail: ${formData.email}\nDomain Interest: ${formData.domain}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PORTFOLIO_CONFIG.socials.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20 border-t border-blue-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1930] border border-blue-500/30 text-xs font-mono text-[#22D3EE] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION & OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
            Initiate Contact
          </h2>
          <p className="mt-2 text-sm text-[#94A3B8]">
            Looking for a Software Development Engineer or an AI/ML Engineer? Let's discuss backend architectures, scalable systems, and intelligent machine learning applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Contact & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-7">
              <span className="text-[10px] font-mono uppercase text-[#22D3EE] tracking-widest block mb-2">
                Primary Direct Channel
              </span>
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">
                Email Dispatch
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed mb-5">
                Send an email directly or copy the address to your clipboard. All messages land directly in my inbox.
              </p>

              <div className="p-3 rounded-2xl bg-[#05070D] border border-blue-900/60 flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#CBD5E1] truncate">
                  <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span className="truncate">{PORTFOLIO_CONFIG.socials.email}</span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-xl bg-[#0B1930] hover:bg-[#2563EB]/30 text-xs font-mono text-[#22D3EE] border border-blue-900/60 hover:border-[#22D3EE] transition-all flex items-center gap-1.5 shrink-0"
                  aria-label="Copy Shiva's email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${PORTFOLIO_CONFIG.socials.email}?subject=Opportunity%20Inquiry%20-%20Shiva%20Kumar`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-xs font-semibold font-mono shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Launch Mail App</span>
                </a>

                <a
                  href={PORTFOLIO_CONFIG.socials.resumeUrl}
                  download="Shiva_Kumar_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#0B1930] hover:bg-[#2563EB]/20 text-[#22D3EE] text-xs font-semibold font-mono border border-[#22D3EE]/30 hover:border-[#22D3EE] transition-all"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download Verified Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Social Links List */}
            <div className="glass-panel rounded-3xl p-6">
              <h4 className="text-xs font-mono uppercase text-[#94A3B8] tracking-wider mb-4">
                Verified Online Presence
              </h4>

              <div className="space-y-2.5 font-mono text-xs">
                <a
                  href={PORTFOLIO_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] border border-blue-950 hover:border-[#3B82F6] transition-all group"
                >
                  <div className="flex items-center gap-3 text-[#F8FAFC]">
                    <GithubIcon className="w-4 h-4 text-[#3B82F6]" />
                    <span>GitHub</span>
                  </div>
                  <span className="text-[#94A3B8] group-hover:text-[#22D3EE] text-[11px]">
                    shiva-kumar-1319 ↗
                  </span>
                </a>

                <a
                  href={PORTFOLIO_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] border border-blue-950 hover:border-[#3B82F6] transition-all group"
                >
                  <div className="flex items-center gap-3 text-[#F8FAFC]">
                    <LinkedinIcon className="w-4 h-4 text-[#3B82F6]" />
                    <span>LinkedIn</span>
                  </div>
                  <span className="text-[#94A3B8] group-hover:text-[#22D3EE] text-[11px]">
                    shiva-kumar-kavali ↗
                  </span>
                </a>

                <a
                  href={PORTFOLIO_CONFIG.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] border border-blue-950 hover:border-[#FFA116] transition-all group"
                >
                  <div className="flex items-center gap-3 text-[#F8FAFC]">
                    <Code2 className="w-4 h-4 text-[#FFA116]" />
                    <span>LeetCode</span>
                  </div>
                  <span className="text-[#94A3B8] group-hover:text-[#FFA116] text-[11px]">
                    shivakumarnaidu ↗
                  </span>
                </a>

                <a
                  href={PORTFOLIO_CONFIG.socials.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] border border-blue-950 hover:border-[#3B82F6] transition-all group"
                >
                  <div className="flex items-center gap-3 text-[#F8FAFC]">
                    <Terminal className="w-4 h-4 text-[#3B82F6]" />
                    <span>Codeforces</span>
                  </div>
                  <span className="text-[#94A3B8] group-hover:text-[#60A5FA] text-[11px]">
                    Kavali_Shiva_Kumar_Naidu ↗
                  </span>
                </a>

                <a
                  href={PORTFOLIO_CONFIG.socials.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#080F1F] hover:bg-[#0B1930] border border-blue-950 hover:border-[#F97316] transition-all group"
                >
                  <div className="flex items-center gap-3 text-[#F8FAFC]">
                    <Sparkles className="w-4 h-4 text-[#F97316]" />
                    <span>CodeChef</span>
                  </div>
                  <span className="text-[#94A3B8] group-hover:text-[#F97316] text-[11px]">
                    shivakumar1319 ↗
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Composer with Validation */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-[#22D3EE]" />
                <h3 className="text-xl font-bold text-[#F8FAFC]">
                  Direct Message Composer
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
                Fill out this form to prepare a formatted direct email dispatched via your default email client. No fabricated server confirmations.
              </p>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-950/40 border border-red-800/50 flex items-center gap-2 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {readyToLaunchMail && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/50 flex items-center gap-2 text-xs text-emerald-300">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>
                    Mail client triggered! If it didn't open automatically, you can also reach me directly at <strong>{PORTFOLIO_CONFIG.socials.email}</strong>.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5"
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
                      className="w-full px-4 py-2.5 text-xs font-mono bg-[#05070D] border border-blue-900/60 rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5"
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
                      className="w-full px-4 py-2.5 text-xs font-mono bg-[#05070D] border border-blue-900/60 rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-domain"
                    className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5"
                  >
                    Role Domain Focus
                  </label>
                  <select
                    id="contact-domain"
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs font-mono bg-[#05070D] border border-blue-900/60 rounded-xl text-[#F8FAFC] focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] outline-none transition-all"
                  >
                    <option value="Both SDE & AI/ML">Dual-Role: Both SDE & AI/ML</option>
                    <option value="Software Development Engineer (SDE)">Software Development Engineer (SDE)</option>
                    <option value="AI & Machine Learning Engineer (AI/ML)">AI & Machine Learning Engineer (AI/ML)</option>
                    <option value="Distributed Systems / Backend">Distributed Systems / Backend</option>
                    <option value="LLM / Generative AI / RAG">LLM / Generative AI / RAG</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase text-[#94A3B8] mb-1.5"
                  >
                    Message / Opportunity Details *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your team, project requirements, or open roles..."
                    className="w-full px-4 py-3 text-xs font-mono bg-[#05070D] border border-blue-900/60 rounded-xl text-[#F8FAFC] placeholder-[#94A3B8] focus:border-[#22D3EE] focus:ring-1 focus:ring-[#22D3EE] outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[#94A3B8]">
                    Opens directly in your mail provider with pre-filled details.
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#22D3EE] hover:from-[#1D4ED8] hover:to-[#06B6D4] text-[#05070D] font-bold text-xs font-mono shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
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
