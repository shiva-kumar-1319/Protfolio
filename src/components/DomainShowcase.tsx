import React from 'react';
import type { DomainType } from '../data/portfolioData';
import { Terminal, Brain, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface DomainShowcaseProps {
  currentDomain: DomainType;
  onSelectDomain: (domain: DomainType) => void;
}

export const DomainShowcase: React.FC<DomainShowcaseProps> = ({ currentDomain, onSelectDomain }) => {
  return (
    <section id="domains" className="relative py-20 border-t border-blue-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1930] border border-blue-500/30 text-xs font-mono text-[#22D3EE] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>DUAL-DOMAIN ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-4">
            Two Specialized Pillars, One Engineering Foundation
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Positioned at the intersection of high-scale systems software and modern artificial intelligence. Toggle below to focus on a domain or view the synergistic union.
          </p>

          {/* Quick Domain Filter Bar */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-[#080F1F] border border-blue-900/60 shadow-xl" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={currentDomain === 'all'}
              onClick={() => onSelectDomain('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                currentDomain === 'all'
                  ? 'bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-[#05070D] shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              Unified Overview (All)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentDomain === 'sde'}
              onClick={() => onSelectDomain('sde')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                currentDomain === 'sde'
                  ? 'bg-[#2563EB] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Software Engineering</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={currentDomain === 'ai-ml'}
              onClick={() => onSelectDomain('ai-ml')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                currentDomain === 'ai-ml'
                  ? 'bg-[#22D3EE] text-[#05070D] shadow-[0_0_15px_rgba(34,211,238,0.4)]'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC]'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span>AI & Machine Learning</span>
            </button>
          </div>
        </div>

        {/* The Two Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DOMAIN A: SOFTWARE ENGINEERING */}
          <div
            onClick={() => onSelectDomain('sde')}
            className={`group relative rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
              currentDomain === 'sde'
                ? 'glass-panel-glow border-[#2563EB] shadow-[0_0_35px_rgba(37,99,235,0.35)] scale-[1.01]'
                : currentDomain === 'ai-ml'
                ? 'glass-panel opacity-60 hover:opacity-100 hover:border-blue-500/50'
                : 'glass-panel hover:border-[#3B82F6]/60'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#3B82F6] group-hover:scale-105 transition-transform">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#60A5FA] tracking-widest block">
                    Domain A
                  </span>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">
                    Software Engineering (SDE)
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#60A5FA] group-hover:text-[#22D3EE] transition-colors">
                <span>Focus SDE</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Engineering high-concurrency backend services, event-driven architectures, transactional integrity, and scalable cloud systems designed for continuous resilience.
            </p>

            {/* Core Competencies Pills */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <span><strong>Distributed Systems:</strong> Message queues (RabbitMQ, Kafka), asynchronous workers, and decoupled microservices.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <span><strong>Backend & APIs:</strong> FastAPI, Flask, Node.js, low-latency REST endpoints, and secure JWT/OAuth token lifecycles.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <span><strong>Database Architecture:</strong> PostgreSQL ACID compliance, row-level concurrency locks, and optimal index structures.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                <span><strong>DevOps & Cloud:</strong> Docker containerization, Kubernetes pod reconciliation, Linux internals, and CI/CD automation.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-900/40 flex flex-wrap gap-2">
              {['Python', 'Java', 'C++', 'FastAPI', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Kubernetes'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[#080F1F] text-[#93C5FD] border border-blue-900/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* DOMAIN B: ARTIFICIAL INTELLIGENCE & MACHINE LEARNING */}
          <div
            onClick={() => onSelectDomain('ai-ml')}
            className={`group relative rounded-3xl p-8 cursor-pointer transition-all duration-300 ${
              currentDomain === 'ai-ml'
                ? 'glass-panel-glow border-[#22D3EE] shadow-[0_0_35px_rgba(34,211,238,0.35)] scale-[1.01]'
                : currentDomain === 'sde'
                ? 'glass-panel opacity-60 hover:opacity-100 hover:border-cyan-500/50'
                : 'glass-panel hover:border-[#22D3EE]/60'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[#22D3EE] group-hover:scale-105 transition-transform">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#22D3EE] tracking-widest block">
                    Domain B
                  </span>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">
                    AI & Machine Learning (AI/ML)
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#22D3EE] group-hover:text-white transition-colors">
                <span>Focus AI/ML</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
              Architecting intelligent pipelines, parameter-efficient fine-tuning (LoRA), dense semantic vector retrieval (RAG), and deep learning models with verifiable provenance.
            </p>

            {/* Core Competencies Pills */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                <span><strong>Generative AI & LLMs:</strong> Qwen models, LoRA PEFT adapters, prompt engineering, and deterministic hallucination guards.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                <span><strong>RAG & Vector Search:</strong> FAISS cosine indexing, LangChain agent loops, chunking strategies, and exact citation tracking.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                <span><strong>Deep Learning & CV:</strong> PyTorch convolutional neural networks, transfer learning, and Grad-CAM explainability heatmaps.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                <span><strong>Data Science & ML:</strong> Scikit-learn supervised/unsupervised algorithms, feature engineering, and statistical analytics.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-cyan-900/40 flex flex-wrap gap-2">
              {['PyTorch', 'Qwen LLM', 'LoRA', 'FAISS', 'LangChain', 'Hugging Face', 'Transformers', 'Scikit-learn'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-[#080F1F] text-[#67E8F9] border border-cyan-900/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
