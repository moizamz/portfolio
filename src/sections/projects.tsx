"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  type Project,
  type ProjectCategory,
  projectCategories,
  projects,
} from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered = useMemo(
    () =>
      active === "All" ? projects : projects.filter((p) => p.category === active),
    [active],
  );

  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(139,92,246,0.12),transparent_70%)]"
      />
      <div className="container-tight">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Projects engineered with{" "}
              <span className="gradient-text">depth and intent.</span>
            </>
          }
          description="Each project is built end-to-end, from architecture to deployment. Spanning AI/ML, full-stack, mobile, systems and security."
        />

        {/* Featured */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((p, i) => (
            <FeaturedProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Filter */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <span className="section-eyebrow">
              <Sparkles className="h-3 w-3 text-violet-300" />
              Full Project Index
            </span>
            <p className="text-sm text-muted-foreground">
              {filtered.length} of {projects.length} projects
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={cn(
                    "relative rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                    isActive
                      ? "border-violet-400/40 text-foreground"
                      : "border-white/10 text-muted-foreground hover:border-white/25 hover:text-foreground",
                  )}
                  data-cursor
                >
                  {isActive && (
                    <motion.span
                      layoutId="proj-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500/25 to-cyan-400/15"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.97 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const Icon = project.icon;
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${y * -6}deg`);
    el.style.setProperty("--ry", `${x * 8}deg`);
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: "perspective(1200px) rotateX(var(--rx,0)) rotateY(var(--ry,0))",
        transition: "transform 0.4s ease-out",
      }}
      className="group h-full"
    >
      <div className="relative h-full">
        <div
          className={cn(
            "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-60",
            project.accent,
          )}
        />
        <GlassCard className="relative h-full overflow-hidden p-0">
          <ProjectThumb project={project} />
          <div className="space-y-4 p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
                    project.accent,
                  )}
                >
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <Badge>{project.category}</Badge>
              </div>
              <a
                href={project.live ?? project.github ?? "#"}
                aria-label="Open project"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/80 transition-all duration-300 group-hover:border-white/30 group-hover:text-foreground"
                data-cursor
                data-cursor-label="View"
              >
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {project.tagline}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-foreground/80">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.stack.slice(0, 5).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <GlassCard className="group flex h-full flex-col p-6">
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ring-1 ring-white/10",
            project.accent,
          )}
        >
          <Icon className="h-5 w-5 text-white" />
        </span>
        <div className="flex items-center gap-1.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${project.title} on GitHub`}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/80 transition-colors hover:border-white/25 hover:text-foreground"
              data-cursor
            >
              <Github className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={project.live ?? "#"}
            aria-label="Open project"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/80 transition-all duration-300 group-hover:border-violet-400/40 group-hover:text-foreground"
            data-cursor
          >
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      <div className="mt-5">
        <Badge>{project.category}</Badge>
        <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
      </div>

      <p className="mt-4 line-clamp-3 text-sm text-foreground/75">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {project.stack.slice(0, 4).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
        {project.stack.length > 4 && (
          <Badge>+{project.stack.length - 4}</Badge>
        )}
      </div>
    </GlassCard>
  );
}

function ProjectThumb({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className="relative h-44 w-full overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-90",
          project.accent,
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_60%)]"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="grid h-20 w-20 place-items-center rounded-3xl bg-white/10 backdrop-blur-xl ring-1 ring-white/20"
        >
          <Icon className="h-9 w-9 text-white drop-shadow-lg" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
        / {project.category}
      </div>
    </div>
  );
}
