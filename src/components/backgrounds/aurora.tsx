"use client";

import { useReducedEffects } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function Aurora({ className }: { className?: string }) {
  const reduced = useReducedEffects();

  // Lightweight static gradient on mobile / touch / reduced motion.
  // Avoids `blur-3xl` on huge rotating elements (extremely expensive on mobile GPUs).
  if (reduced) {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(139,92,246,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full bg-aurora opacity-30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 -translate-y-1/2 animate-aurora-move rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0.35),rgba(139,92,246,0.35),rgba(236,72,153,0.3),rgba(34,211,238,0.35))] opacity-25 blur-2xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
    </div>
  );
}
