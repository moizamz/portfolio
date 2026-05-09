"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarRange, MapPin } from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Hands-on at{" "}
              <span className="gradient-text">production scale.</span>
            </>
          }
          description="Internships building real software with modern teams, across full-stack web and applied machine learning."
        />

        <div ref={containerRef} className="relative mt-16 pl-6 md:pl-0">
          {/* Timeline rail */}
          <div className="absolute bottom-0 left-2 top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-px origin-top bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_18px_rgba(139,92,246,0.6)]"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  {/* Node */}
                  <span className="absolute left-2 top-6 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-violet-500/30" />
                    <span className="relative h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 shadow-[0_0_14px_rgba(139,92,246,0.6)]" />
                  </span>

                  {/* Date */}
                  <div
                    className={
                      isLeft
                        ? "md:col-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80">
                      {exp.start} → {exp.end}
                    </p>
                    <p className="mt-2 hidden font-display text-sm text-muted-foreground md:block">
                      {exp.type}
                    </p>
                  </div>

                  {/* Card */}
                  <div
                    className={
                      isLeft
                        ? "mt-4 md:col-start-2 md:row-start-1 md:mt-0 md:pl-12"
                        : "mt-4 md:col-start-1 md:row-start-1 md:mt-0 md:pr-12"
                    }
                  >
                    <GlassCard className="p-6 md:p-7">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-500/10 text-violet-200 ring-1 ring-white/10">
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="font-display text-lg font-semibold tracking-tight">
                              {exp.role}
                            </h3>
                            <p className="text-sm text-foreground/85">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <Badge>{exp.type}</Badge>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground md:hidden">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarRange className="h-3.5 w-3.5" />
                          {exp.start} → {exp.end}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>
                      <div className="mt-3 hidden flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground md:flex">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="mt-5 space-y-2.5">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="relative pl-5 text-sm text-foreground/85"
                          >
                            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-400" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <Badge key={s}>{s}</Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
