"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedEffects } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type ParticleFieldProps = {
  className?: string;
  density?: number;
  /** Whether particles connect with subtle lines when close */
  connect?: boolean;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
};

export function ParticleField({
  className,
  density = 70,
  connect = true,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedEffects = useReducedEffects();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    // Skip the entire particle simulation on mobile / touch / reduced-motion.
    // It's the single most expensive thing on the page.
    if (reducedEffects) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    let particles: Particle[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.max(
        20,
        Math.min(density, Math.floor((width * height) / 16000)),
      );
      particles = new Array(target).fill(0).map(() => spawn());
    }

    function spawn(): Particle {
      const hue = 250 + Math.random() * 80;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 0.6 + Math.random() * 1.5,
        hue,
      };
    }

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            const f = (120 - dist) / 1200;
            p.vx -= dx * f * 0.02;
            p.vy -= dy * f * 0.02;
          }
        }

        p.vx *= 0.995;
        p.vy *= 0.995;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, 0.9)`;
        ctx.shadowColor = `hsla(${p.hue}, 90%, 65%, 0.7)`;
        ctx.shadowBlur = 8;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (connect) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.hypot(dx, dy);
            if (d < 110) {
              const alpha = (1 - d / 110) * 0.18;
              ctx.strokeStyle = `hsla(265, 90%, 75%, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [density, connect, mounted, reducedEffects]);

  if (reducedEffects) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 h-full w-full",
        className,
      )}
    />
  );
}
