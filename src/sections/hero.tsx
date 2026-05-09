"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedGrid } from "@/components/backgrounds/animated-grid";
import { ParticleField } from "@/components/backgrounds/particle-field";
import { Spotlight } from "@/components/backgrounds/spotlight";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { personal, rotatingRoles, socials } from "@/lib/data";

export function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIdx((i) => (i + 1) % rotatingRoles.length),
      2400,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden pt-28"
    >
      {/* Backgrounds */}
      <AnimatedGrid />
      <ParticleField />
      <Spotlight className="-top-40 left-1/2 -translate-x-1/2" />
      <Spotlight
        className="bottom-[-30vh] right-[-20vw]"
        fill="rgba(34,211,238,0.25)"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background"
      />

      <div className="container-tight">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {personal.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7, ease: "easeOut" }}
              className="mt-6 font-display text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl lg:text-[88px]"
            >
              <span className="block text-foreground/80">Hi, I'm</span>
              <span className="mt-2 block">
                <span className="gradient-text">{personal.name}.</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-2xl text-foreground/85 md:text-3xl"
            >
              <span className="font-mono text-base text-cyan-300/90">
                <span className="text-muted-foreground">$</span> role :=
              </span>
              <span className="relative inline-flex h-10 items-center md:h-12">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingRoles[roleIdx]}
                    initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                    transition={{ duration: 0.5 }}
                    className="font-display font-semibold tracking-tight"
                  >
                    <span className="gradient-text-cool">
                      {rotatingRoles[roleIdx]}
                    </span>
                  </motion.span>
                </AnimatePresence>
                <span className="ml-1 inline-block h-7 w-[3px] animate-blink bg-gradient-to-b from-violet-400 to-cyan-400 md:h-8" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {personal.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <Button
                  size="lg"
                  onClick={() => {
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-cursor
                  data-cursor-label="Explore"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  size="lg"
                  variant="secondary"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-violet-400" />
                {personal.location}
              </span>
              <span className="hidden h-4 w-px bg-white/10 md:inline-block" />
              <div className="flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <Magnetic key={label} strength={0.3}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-white/[0.07] hover:text-foreground"
                      data-cursor
                      data-cursor-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Terminal accent card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <TerminalCard />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="h-px w-10 bg-gradient-to-r from-violet-400/70 to-transparent" />
          <Sparkles className="h-3.5 w-3.5 text-violet-300" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/30 via-cyan-400/20 to-pink-500/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b14]/90 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            ~/abdul-moiz · zsh
          </span>
        </div>
        <div className="space-y-2.5 p-5 font-mono text-[12.5px] leading-relaxed">
          <TerminalLine prompt user="moiz" host="dev" cmd="whoami" />
          <p className="pl-3 text-foreground/85">
            <span className="text-violet-300">Abdul Moiz</span> · CS @ NUST SEECS
          </p>
          <TerminalLine prompt user="moiz" host="dev" cmd="ls skills/" delay />
          <p className="pl-3 text-cyan-300/90">
            ai-ml/ · full-stack/ · mobile/ · systems/ · security/ · dsa/
          </p>
          <TerminalLine prompt user="moiz" host="dev" cmd="cat status.txt" delay />
          <p className="pl-3 text-emerald-300/90">
            building → shipping → repeat 🚀
          </p>
          <p className="pl-3 text-foreground/60">
            open to <span className="text-violet-300">SDE</span> &amp;{" "}
            <span className="text-cyan-300">ML</span> roles · 2026
          </p>
          <div className="pt-1 font-mono text-foreground/80">
            <span className="text-emerald-400">moiz@dev</span>
            <span className="text-foreground/50"> ~ </span>
            <span className="text-violet-400">$</span>{" "}
            <span className="ml-0.5 inline-block h-3 w-[7px] animate-blink bg-foreground/80 align-middle" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalLine({
  prompt,
  user,
  host,
  cmd,
  delay = false,
}: {
  prompt?: boolean;
  user: string;
  host: string;
  cmd: string;
  delay?: boolean;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay ? 1.4 : 0.9, duration: 0.4 }}
      className="font-mono text-[12.5px]"
    >
      {prompt && (
        <>
          <span className="text-emerald-400">{user}@{host}</span>
          <span className="text-foreground/50"> ~ </span>
          <span className="text-violet-400">$ </span>
        </>
      )}
      <span className="text-foreground/90">{cmd}</span>
    </motion.p>
  );
}
