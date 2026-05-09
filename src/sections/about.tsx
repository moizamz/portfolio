"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap, Layers, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
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

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <PhotoCard />
          </motion.div>

          {/* Bio + pillars */}
          <GlassCard className="p-7 lg:col-span-7">
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

            <p className="mt-6 text-pretty text-foreground/85">
              My coursework spans the entire CS spectrum: Data Structures &amp;
              Algorithms, OS, Computer Networks, Information &amp; Network
              Security, Web Engineering, Mobile App Development, AI, Machine
              Learning, NLP, Parallel &amp; Distributed Computing, Software
              Engineering and TAFL. I treat every framework as a tool, and
              never let one box me in.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <PillarChip
                icon={<Sparkles className="h-3.5 w-3.5" />}
                text=".NET · MERN / MEAN"
              />
              <PillarChip
                icon={<Sparkles className="h-3.5 w-3.5" />}
                text="AI × Data Science"
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
          </GlassCard>
        </div>

        {/* Stats row — full width below */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoCard() {
  const [imgError, setImgError] = useState(false);
  const showImage = !!personal.photo && !imgError;

  return (
    <div className="group relative h-full">
      {/* Soft outer glow — only visible on hover */}
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/15 to-cyan-400/25 opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />

      <GlassCard
        className="relative aspect-[4/5] overflow-hidden p-0"
        spotlight={false}
      >
        {/* Gradient border ring (mask trick) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
          style={{
            padding: 1,
            background:
              "linear-gradient(135deg, rgba(167,139,250,0.55), rgba(34,211,238,0.45) 50%, rgba(236,72,153,0.4))",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Background grid for fallback */}
        <div
          aria-hidden
          className="absolute inset-0 grid-bg opacity-40"
        />

        {showImage ? (
          <Image
            src={personal.photo}
            alt={`${personal.name} — portrait`}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 60vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            priority
            onError={() => setImgError(true)}
          />
        ) : (
          <FallbackAvatar />
        )}

        {/* Bottom gradient overlay for legibility */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-background via-background/70 to-transparent"
        />

        {/* Name label */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for work
          </div>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
            {personal.name}
          </h3>
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-violet-300" />
            {personal.location}
          </p>
        </div>
      </GlassCard>
    </div>
  );
}

function FallbackAvatar() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/15" />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <div className="grid h-28 w-28 place-items-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur">
          <span className="font-display text-4xl font-semibold gradient-text">
            {personal.initials}
          </span>
        </div>
        <p className="max-w-[16rem] text-xs text-muted-foreground">
          Drop a photo at{" "}
          <code className="font-mono text-foreground/80">
            public{personal.photo}
          </code>{" "}
          to replace this.
        </p>
      </div>
    </div>
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
