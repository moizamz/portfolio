"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Briefcase,
  Code2,
  Download,
  FileText,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Magnetic } from "@/components/ui/magnetic";
import { SectionHeading } from "@/components/ui/section-heading";
import { personal } from "@/lib/data";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "BS CS · NUST SEECS · 2026",
  },
  {
    icon: Briefcase,
    label: "Experience",
    value: "Bitsmiths · NUST HPC Lab",
  },
  {
    icon: Code2,
    label: "Stacks",
    value: ".NET · Web · Mobile · ML",
  },
  {
    icon: Brain,
    label: "Focus",
    value: ".NET · AI/ML · Data Science",
  },
];

export function ResumeSection() {
  return (
    <section id="resume" className="section">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Resume"
          title={
            <>
              Want the deep dive?{" "}
              <span className="gradient-text">Grab the full CV.</span>
            </>
          }
          description="A single, clean PDF — engineered to be skimmed by recruiters in 30 seconds and read in depth by hiring managers."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <GlassCard className="relative aspect-[4/5] overflow-hidden p-0">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/15" />
              <div className="relative flex h-full flex-col p-8">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/[0.05] backdrop-blur">
                      <FileText className="h-5 w-5 text-violet-300" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        document.pdf
                      </p>
                      <p className="font-display text-sm font-semibold">
                        Abdul-Moiz-Resume
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-background/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur">
                    1 page
                  </span>
                </div>

                <div className="mt-10">
                  <p className="font-display text-3xl font-semibold tracking-tight">
                    {personal.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {personal.headline}
                  </p>
                </div>

                <div className="mt-auto space-y-2.5">
                  {[
                    "Objective + Education",
                    "Internship Experience × 2",
                    "11+ Engineering Projects",
                    "Technical Skills + Concepts",
                  ].map((row, i) => (
                    <div
                      key={row}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-xs text-muted-foreground"
                    >
                      <span className="font-mono text-[10px] text-violet-300">
                        0{i + 1}
                      </span>
                      <span className="h-px flex-1 bg-white/10" />
                      <span>{row}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute right-4 top-4 h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <GlassCard className="h-full p-7 md:p-9">
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                What's inside
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Concise, technical and recruiter-friendly. Built for both ATS
                and human eyes.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-violet-500/25 to-cyan-500/10 text-violet-200">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-foreground/95">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <Button
                    size="lg"
                    onClick={() => {
                      const a = document.createElement("a");
                      a.href = personal.resumeFile;
                      a.download = "Abdul-Moiz-Resume.pdf";
                      a.click();
                    }}
                    data-cursor
                    data-cursor-label="Download"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() =>
                      window.open(personal.resumeFile, "_blank", "noopener")
                    }
                    data-cursor
                    data-cursor-label="Open"
                  >
                    Open in new tab
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Magnetic>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
