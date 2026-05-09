"use client";

import { cn } from "@/lib/utils";

type AnimatedGridProps = {
  className?: string;
  /** Color stops for the radial mask spotlight */
  spotlight?: boolean;
};

export function AnimatedGrid({ className, spotlight = true }: AnimatedGridProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 grid-bg opacity-60"
        style={{
          maskImage: spotlight
            ? "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)"
            : undefined,
          WebkitMaskImage: spotlight
            ? "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)"
            : undefined,
        }}
      />
    </div>
  );
}
