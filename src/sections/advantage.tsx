"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { advantages } from "@/lib/data";
import { cn } from "@/lib/utils";

export function AdvantageSection() {
  return (
    <section id="advantage" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Why Me"
          title={
            <>
              Built different, on{" "}
              <span className="gradient-text">first principles.</span>
            </>
          }
          description="The qualities top engineering organizations recruit for — backed by coursework, internships and a portfolio of work that proves them out."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
                whileHover={{ y: -4 }}
                className="group h-full"
              >
                <GlassCard className="relative h-full overflow-hidden p-7">
                  <div
                    aria-hidden
                    className={cn(
                      "absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                      a.accent,
                    )}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground/95">
                        <Icon className="h-5 w-5 text-violet-300 transition-colors duration-300 group-hover:text-cyan-300" />
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {a.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
