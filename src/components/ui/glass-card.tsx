"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Enables interactive cursor-tracking spotlight */
  spotlight?: boolean;
  spotlightColor?: string;
};

export function GlassCard({
  children,
  className,
  spotlight = true,
  spotlightColor = "rgba(139, 92, 246, 0.18)",
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!spotlight) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl transition-colors duration-300 hover:border-white/15",
        className,
      )}
      style={{
        boxShadow:
          "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 30px 80px -40px rgba(0,0,0,0.6)",
      }}
    >
      {spotlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(450px circle at var(--mx, 50%) var(--my, 50%), ${spotlightColor}, transparent 60%)`,
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
