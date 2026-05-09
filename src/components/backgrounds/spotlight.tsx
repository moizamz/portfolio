"use client";

import { motion } from "framer-motion";
import { useReducedEffects } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function Spotlight({
  className,
  fill = "rgba(139, 92, 246, 0.45)",
}: {
  className?: string;
  fill?: string;
}) {
  const reduced = useReducedEffects();

  if (reduced) {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -z-10 h-[55vh] w-[55vh] rounded-full opacity-70",
          className,
        )}
        style={{
          background: `radial-gradient(closest-side, ${fill}, transparent 70%)`,
        }}
      />
    );
  }

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className={cn(
        "pointer-events-none absolute -z-10 h-[80vh] w-[80vh] rounded-full blur-3xl",
        className,
      )}
      style={{
        background: `radial-gradient(closest-side, ${fill}, transparent 70%)`,
      }}
    />
  );
}
