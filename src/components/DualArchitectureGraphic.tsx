import React, { useState } from 'react';
import type { DomainType } from '../data/portfolioData';
import { Terminal, Brain, Server, Database, Cpu, Activity, Zap, RefreshCw, GitBranch, ShieldCheck } from 'lucide-react';

interface DualGraphicProps {
  currentDomain?: DomainType;
  onSelectDomain: (domain: DomainType) => void;
}

export const DualArchitectureGraphic: React.FC<DualGraphicProps> = ({ onSelectDomain }) => {
  const [activeTab, setActiveTab] = useState<'both' | 'sde' | 'ai'>('both');

  return (
    <div className="relative w-full rounded-2xl glass-panel-glow bg-[#080F1F]/90 border border-[#3B82F6]/30 p-4 sm:p-6 overflow-hidden shadow-[0_20px_50px_rgba(5,7,13,0.9)]">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid-dense opacity-20 pointer-events-none" />

      {/* Header bar of the visualizer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-blue-900/40">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B1930] border border-blue-500/30">
            <span className="h-2 w-2 rounded-full bg-[#22D3EE] animate-pulse"></span>
            <span className="text-[11px] font-mono font-semibold tracking-wider text-[#22D3EE] uppercase">
              Dual-Domain Architecture Simulator
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#94A3B8]">
            v2.6 • Real-Time Interplay
          </span>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-[#05070D] border border-blue-900/50 text-[11px] font-mono">
          <button
            type="button"
            onClick={() => {
              setActiveTab('both');
              onSelectDomain('all');
            }}
            className={`px-2.5 py-1 rounded transition-all ${
              activeTab === 'both'
                ? 'bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-[#05070D] font-bold shadow'
                : 'text-[#94A3B8] hover:text-white'
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
            className={`px-2.5 py-1 rounded transition-all ${
              activeTab === 'sde'
                ? 'bg-[#2563EB] text-white font-bold shadow'
                : 'text-[#94A3B8] hover:text-white'
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
            className={`px-2.5 py-1 rounded transition-all ${
              activeTab === 'ai'
                ? 'bg-[#22D3EE] text-[#05070D] font-bold shadow'
                : 'text-[#94A3B8] hover:text-white'
            }`}
          >
            AI/ML Core
          </button>
        </div>
      </div>

      {/* Main Dual System Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* SDE SIDE */}
        <div
          className={`flex flex-col rounded-xl p-4 transition-all duration-300 ${
            activeTab === 'ai'
              ? 'opacity-40 grayscale-[40%]'
              : 'bg-[#0B1930]/60 border border-[#3B82F6]/30 shadow-md'
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-900/30">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#3B82F6]">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-[#F8FAFC] tracking-wide font-mono">
                  SDE: DISTRIBUTED INFRASTRUCTURE
                </h2>
                <span className="text-[10px] text-[#94A3B8]">
                  FastAPI • RabbitMQ • Docker • K8s • PostgreSQL
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#60A5FA] border border-[#2563EB]/40">
              Uptime 99.98%
            </span>
          </div>

          {/* Interactive Topology Nodes */}
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-[#080F1F] border border-blue-900/60 hover:border-[#3B82F6] transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span className="text-[#F8FAFC]">API Gateway / FastAPI Async</span>
              </div>
              <span className="text-[10px] text-[#22D3EE] bg-[#0B1930] px-1.5 py-0.5 rounded">
                &lt;8ms latency
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#080F1F] border border-blue-900/60 hover:border-[#3B82F6] transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 text-[#60A5FA] animate-spin" style={{ animationDuration: '6s' }} />
                <span className="text-[#F8FAFC]">RabbitMQ / Message Queue</span>
              </div>
              <span className="text-[10px] text-[#94A3B8]">
                Decoupled telemetry
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#080F1F] border border-blue-900/60 hover:border-[#3B82F6] transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[#F8FAFC]">Kubernetes Self-Healing Pods</span>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-800/40">
                Auto-Reconciling
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#080F1F] border border-blue-900/60 hover:border-[#3B82F6] transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#2563EB]" />
                <span className="text-[#F8FAFC]">PostgreSQL / ACID Ledger Store</span>
              </div>
              <span className="text-[10px] text-[#94A3B8]">
                Indexed B-Trees
              </span>
            </div>
          </div>

          {/* Micro Terminal Snippet */}
          <div className="mt-3 p-2.5 rounded-lg bg-[#05070D] border border-blue-900/50 font-mono text-[11px] text-[#94A3B8] overflow-hidden">
            <div className="flex items-center justify-between text-[10px] text-blue-400 mb-1 border-b border-blue-950 pb-1">
              <span>cloudpulse_healing_agent.py</span>
              <span className="text-emerald-400">● ACTIVE</span>
            </div>
            <pre className="text-blue-200/90 leading-tight">
              <code>{`@app.post("/reconcile")
async def trigger_recovery(pod_id: str):
  metric = await telemetry_queue.get()
  if metric.health < THRESHOLD:
    return await k8s.redeploy_pod(pod_id)`}</code>
            </pre>
          </div>
        </div>

        {/* AI/ML SIDE */}
        <div
          className={`flex flex-col rounded-xl p-4 transition-all duration-300 ${
            activeTab === 'sde'
              ? 'opacity-40 grayscale-[40%]'
              : 'bg-[#0B1930]/60 border border-[#22D3EE]/30 shadow-md'
          }`}
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-900/30">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-[#22D3EE]/20 border border-[#22D3EE]/40 text-[#22D3EE]">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-[#F8FAFC] tracking-wide font-mono">
                  AI/ML: INTELLIGENT PIPELINES
                </h2>
                <span className="text-[10px] text-[#94A3B8]">
                  Qwen LLM • LoRA Tuning • FAISS • PyTorch • RAG
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/40">
              Rank 16 LoRA
            </span>
          </div>

          {/* Interactive Topology Nodes */}
          <div className="space-y-2 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-[#080F1F] border border-cyan-950 hover:border-[#22D3EE] transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span className="text-[#F8FAFC]">Dense Embeddings / HuggingFace</span>
              </div>
              <span className="text-[10px] text-[#38BDF8] bg-[#0B1930] px-1.5 py-0.5 rounded">
                768-Dim Tensors
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#080F1F] border border-cyan-950 hover:border-[#22D3EE] transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-[#F8FAFC]">FAISS Semantic Vector Index</span>
              </div>
              <span className="text-[10px] text-[#22D3EE]">
                Cosine Sim &lt;110ms
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#080F1F] border border-cyan-950 hover:border-[#22D3EE] transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-cyan-300" />
                <span className="text-[#F8FAFC]">Qwen + LoRA Parameter Tuning</span>
              </div>
              <span className="text-[10px] text-cyan-300 bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40">
                Low-Rank Matrix
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[#080F1F] border border-cyan-950 hover:border-[#22D3EE] transition-all flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-[#818CF8]" />
                <span className="text-[#F8FAFC]">Citation Grounding & RAG Sync</span>
              </div>
              <span className="text-[10px] text-[#94A3B8]">
                Verified Attribution
              </span>
            </div>
          </div>

          {/* Micro Model Snippet */}
          <div className="mt-3 p-2.5 rounded-lg bg-[#05070D] border border-cyan-950 font-mono text-[11px] text-[#94A3B8] overflow-hidden">
            <div className="flex items-center justify-between text-[10px] text-cyan-400 mb-1 border-b border-cyan-950 pb-1">
              <span>neural_query_rag.py</span>
              <span className="text-cyan-400">● INFERENCE</span>
            </div>
            <pre className="text-cyan-200/90 leading-tight">
              <code>{`lora_model = PeftModel.from_pretrained(
    base_model=qwen_7b,
    model_id="shiva/qwen-research-lora"
)
contexts = faiss_store.similarity_search(query)`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Synergistic Connection Banner */}
      <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-[#0B1930]/90 via-[#080F1F] to-[#0B1930]/90 border border-blue-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#22D3EE]"></span>
          <span className="text-[#F8FAFC] font-medium">
            Bridging Scalable Distributed Engineering with Production Machine Learning
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-[#94A3B8]">
          <span className="text-[#3B82F6]">● Low Latency Backend</span>
          <span className="text-[#22D3EE]">● Intelligent Inference</span>
          <span className="text-[#818CF8]">● Zero Drift</span>
        </div>
      </div>
    </div>
  );
};
