import React, { useEffect, useRef } from 'react';
import type { DomainType } from '../data/portfolioData';

interface InteractiveBackgroundProps {
  currentDomain: DomainType;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  type: 'sde' | 'ai';
}

export const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ currentDomain }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle setup
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    let particles: Particle[] = [];

    const getColors = () => {
      if (currentDomain === 'sde') {
        return ['#2563EB', '#3B82F6', '#60A5FA'];
      } else if (currentDomain === 'ai-ml') {
        return ['#22D3EE', '#38BDF8', '#818CF8'];
      }
      return ['#2563EB', '#3B82F6', '#22D3EE', '#818CF8'];
    };

    const initParticles = () => {
      particles = [];
      const colors = getColors();
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.45,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2,
          type: Math.random() > 0.5 ? 'sde' : 'ai',
        });
      }
    };

    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      const maxDistance = 120;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        if (!prefersReducedMotion) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha * 0.6;
        ctx.fill();

        // Connect to nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / maxDistance) * 0.18;
            ctx.strokeStyle = p1.color;
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse interaction
        if (mouseRef.current.active) {
          const mdx = p1.x - mouseRef.current.x;
          const mdy = p1.y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 160) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = '#22D3EE';
            ctx.globalAlpha = (1 - mDist / 160) * 0.28;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [currentDomain]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient gradient orbs */}
      <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#2563EB]/10 blur-[130px] animate-pulse-glow" />
      <div className="absolute top-[40%] -right-[15%] w-[650px] h-[650px] rounded-full bg-[#22D3EE]/10 blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-[15%] left-[25%] w-[550px] h-[550px] rounded-full bg-[#0B1930]/40 blur-[120px]" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      <div className="absolute inset-0 cyber-grid opacity-30" />
    </div>
  );
};
