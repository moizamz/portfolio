"use client";

import { ArrowUp } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { personal, socials } from "@/lib/data";

export function FooterSection() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
      />
      <div className="container-tight">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full">
              <span className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,rgba(139,92,246,0.0),rgba(139,92,246,0.7),rgba(34,211,238,0.7),rgba(139,92,246,0.0))]" />
              <span className="relative grid h-[30px] w-[30px] place-items-center rounded-full bg-background font-display text-[12px] font-semibold tracking-tight">
                <span className="gradient-text">{personal.initials}</span>
              </span>
            </span>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold tracking-tight">
                {personal.name}
              </span>
              <span className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} · Designed &amp; engineered with care.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-foreground"
                data-cursor
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <Magnetic strength={0.25}>
              <a
                href="#hero"
                aria-label="Back to top"
                className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-foreground/85 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-foreground"
                data-cursor
                data-cursor-label="Top"
              >
                Back to top
                <ArrowUp className="h-3.5 w-3.5" />
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 md:flex-row">
          <span>Built with Next.js · Tailwind · Framer Motion</span>
          <span className="font-mono">v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
