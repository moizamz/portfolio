"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap, Layers, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { personal, stats } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Engineer first.{" "}
              <span className="gradient-text">Builder always.</span>
            </>
          }
          description={personal.longSummary}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <GlassCard className="p-7 md:p-9">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-violet-500/0 text-violet-300">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      BS Computer Science · NUST SEECS
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Islamabad, Pakistan · Class of May 2026
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                  <PillarChip
                    icon={<Sparkles className="h-3.5 w-3.5" />}
                    text=".NET · MERN / MEAN"
                  />
                  <PillarChip
                    icon={<Sparkles className="h-3.5 w-3.5" />}
                    text="AI/ ML + Data Science"
                  />
                  <PillarChip
                    icon={<Layers className="h-3.5 w-3.5" />}
                    text="Full-Stack + Mobile"
                  />
                  <PillarChip
                    icon={<Sparkles className="h-3.5 w-3.5" />}
                    text="Systems &amp; Security"
                  />
                </div>
              </div>

              <div className="flex items-center md:col-span-7">
                <p className="text-pretty text-foreground/85">
                  My coursework spans the entire CS spectrum: Object Oriented
                  Programming, Data Structures &amp; Algorithms, Operating
                  Systems, Computer Networks, Information &amp; Network
                  Security, Web Engineering, Mobile App Development,
                  Artificial Intelligence, Machine Learning, Parallel &amp;
                  Distributed Computing, Software Engineering, Theory of
                  Automata and Formal Languages and Compiler Construction.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats row */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarChip({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-white/[0.06]">
      <span className="text-violet-300">{icon}</span>
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: { label: string; value: string; suffix?: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const numeric = Number(stat.value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / dur);
      setCount(Math.round(numeric * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric]);

  const display = Number.isNaN(numeric) ? stat.value : count;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <GlassCard className="h-full p-5">
        <div className="flex items-baseline gap-1 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          <span className="gradient-text">{display}</span>
          {stat.suffix && (
            <span className="gradient-text-cool text-2xl md:text-3xl">
              {stat.suffix}
            </span>
          )}
        </div>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {stat.label}
        </p>
      </GlassCard>
    </motion.div>
  );
}
