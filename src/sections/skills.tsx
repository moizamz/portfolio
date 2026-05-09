"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div className="container-tight">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              An end-to-end{" "}
              <span className="gradient-text">engineering toolkit.</span>
            </>
          }
          description="The languages, frameworks and concepts I reach for when building production software, across web, mobile, AI/ML and systems."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-foreground/95 shadow-inner-glow ring-1 ring-white/10",
                        cat.accent,
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
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
