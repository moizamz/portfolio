"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Spotlight({
  className,
  fill = "rgba(139, 92, 246, 0.45)",
}: {
  className?: string;
  fill?: string;
}) {
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
