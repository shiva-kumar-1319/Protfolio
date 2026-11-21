import React, { useState } from 'react';
import type { DomainType } from '../data/portfolioData';
import { Terminal, Brain, Server, Database, Cpu, Activity, Zap, RefreshCw, ShieldCheck } from 'lucide-react';

interface DualGraphicProps {
  currentDomain?: DomainType;
  onSelectDomain: (domain: DomainType) => void;
}

export const DualArchitectureGraphic: React.FC<DualGraphicProps> = ({ onSelectDomain }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'sde' | 'ai'>('both');

  return (
    <div className="relative w-full rounded-3xl bg-[#faf6f0] border-2 border-[#4a2810]/15 p-6 sm:p-8 shadow-sm">
      {/* Header bar of the visualizer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-[#4a2810]/12">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-[2px] text-[#8b5a2a] block">
            HOW MY SYSTEMS WORK IN PRODUCTION
          </span>
          <h3 className="text-xl sm:text-2xl font-archivo uppercase text-[#4a2810] tracking-tight">
            Dual-Core Engineering Architecture
          </h3>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-white border border-[#4a2810]/15 text-xs font-semibold shadow-sm">
          <button
            type="button"
            onClick={() => {
              setActiveTab('both');
              onSelectDomain('all');
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider text-[11px] ${
              activeTab === 'both'
                ? 'bg-[#4a2810] text-[#f0e8d8] font-bold shadow-sm'
                : 'text-[#4a2810]/70 hover:text-[#4a2810]'
            }`}
          >
            Unified (SDE + AI)
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('sde');
              onSelectDomain('sde');
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider text-[11px] ${
              activeTab === 'sde'
                ? 'bg-[#4a2810] text-[#f0e8d8] font-bold shadow-sm'
                : 'text-[#4a2810]/70 hover:text-[#4a2810]'
            }`}
          >
            SDE Core
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab('ai');
              onSelectDomain('ai-ml');
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all uppercase tracking-wider text-[11px] ${
              activeTab === 'ai'
                ? 'bg-[#a8c4e8] text-[#4a2810] font-bold shadow-sm'
                : 'text-[#4a2810]/70 hover:text-[#4a2810]'
            }`}
          >
            AI/ML Core
          </button>
        </div>
      </div>

      {/* Main Dual System Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SDE SIDE */}
        <div
          className={`flex flex-col rounded-2xl p-6 transition-all duration-300 ${
            activeTab === 'ai'
              ? 'opacity-40 grayscale-[30%]'
              : 'bg-white border-2 border-[#4a2810]/12 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#4a2810]/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#4a2810] text-[#f0e8d8]">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-archivo uppercase text-[#4a2810] tracking-wide">
                  SDE: Self-Healing Microservices
                </h4>
                <span className="text-[10px] text-[#8b5a2a] font-mono">
                  FastAPI · RabbitMQ · Docker · K8s · Prometheus
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f5f0e4] text-[#4a2810] border border-[#4a2810]/15 font-bold">
              99.98% Uptime
            </span>
          </div>

          {/* Interactive Topology Nodes */}
          <div className="space-y-2 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#4a2810]" />
                <span className="text-[#4a2810] font-medium">FastAPI Gateway / Async Pipelines</span>
              </div>
              <span className="text-[10px] text-[#4a2810] bg-white px-2 py-0.5 rounded-full font-bold">
                &lt;8ms latency
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-[#6b3a1a]" />
                <span className="text-[#4a2810] font-medium">RabbitMQ Message Exchange Broker</span>
              </div>
              <span className="text-[10px] text-[#8b5a2a]">
                Async Dequeuing
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-[#4a2810] font-medium">Kubernetes Self-Healing Pod Controller</span>
              </div>
              <span className="text-[10px] text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full font-bold">
                Auto-Reconciling
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#4a2810]" />
                <span className="text-[#4a2810] font-medium">PostgreSQL 4-Table Normalized Store</span>
              </div>
              <span className="text-[10px] text-[#8b5a2a]">
                7 B-Tree Indexes
              </span>
            </div>
          </div>
        </div>

        {/* AI/ML SIDE */}
        <div
          className={`flex flex-col rounded-2xl p-6 transition-all duration-300 ${
            activeTab === 'sde'
              ? 'opacity-40 grayscale-[30%]'
              : 'bg-white border-2 border-[#4a2810]/12 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#4a2810]/10">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#a8c4e8] text-[#4a2810]">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-archivo uppercase text-[#4a2810] tracking-wide">
                  AI/ML: Fine-Tuned LLMs & Isolation Forest
                </h4>
                <span className="text-[10px] text-[#8b5a2a] font-mono">
                  Qwen2.5-1.5B · LoRA PEFT · PyTorch · Scikit-learn
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#a8c4e8] text-[#4a2810] font-bold">
              38% → 89% Rejection
            </span>
          </div>

          {/* Interactive Topology Nodes */}
          <div className="space-y-2 font-mono text-xs">
            <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#4a2810]" />
                <span className="text-[#4a2810] font-medium">Prometheus Telemetry Scraper</span>
              </div>
              <span className="text-[10px] text-[#4a2810] bg-white px-2 py-0.5 rounded-full font-bold">
                Live Metrics
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#6b3a1a]" />
                <span className="text-[#4a2810] font-medium">Isolation Forest Anomaly Detector</span>
              </div>
              <span className="text-[10px] text-[#8b5a2a]">
                Scikit-learn Model
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#4a2810]" />
                <span className="text-[#4a2810] font-medium">Qwen2.5-1.5B LoRA Adapter Inference</span>
              </div>
              <span className="text-[10px] text-[#4a2810] bg-[#a8c4e8] px-2 py-0.5 rounded-full font-bold">
                Low-Rank Weights
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#faf6f0] border border-[#4a2810]/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#4a2810]" />
                <span className="text-[#4a2810] font-medium">Factory-Pattern LLM Provider Layer</span>
              </div>
              <span className="text-[10px] text-[#8b5a2a]">
                Unit-Tested Clean Code
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
