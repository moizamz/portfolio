"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { navLinks, personal } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        className="fixed inset-x-0 top-3 z-[80] flex justify-center px-4"
      >
        <div
          className={cn(
            "flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border border-white/[0.06] bg-background/40 px-3 py-2 backdrop-blur-xl transition-all duration-500",
            scrolled &&
              "border-white/[0.12] bg-background/70 shadow-[0_10px_40px_-20px_rgba(139,92,246,0.45)]",
          )}
        >
          <a
            href="#hero"
            className="group inline-flex items-center gap-2 px-2"
            aria-label="Go to top"
          >
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full">
              <span className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,rgba(139,92,246,0.0),rgba(139,92,246,0.7),rgba(34,211,238,0.7),rgba(139,92,246,0.0))]" />
              <span className="relative grid h-[28px] w-[28px] place-items-center rounded-full bg-background font-display text-[11px] font-semibold tracking-tight">
                <span className="gradient-text">{personal.initials}</span>
              </span>
            </span>
            <span className="hidden font-display text-sm font-medium tracking-tight sm:inline-flex">
              {personal.name}
            </span>
          </a>

          <nav className="hidden items-center md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium transition-colors duration-300",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                  data-cursor
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Magnetic strength={0.25}>
              <Button
                asChild={false}
                size="sm"
                variant="primary"
                className="hidden md:inline-flex"
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
                Resume
              </Button>
            </Magnetic>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition-colors hover:border-white/25 md:hidden"
              data-cursor
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[75] md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/85 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
              className="relative mx-auto mt-24 flex w-[min(92%,440px)] flex-col gap-1 rounded-3xl border border-white/10 bg-background/85 p-3 backdrop-blur-xl"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 + i * 0.04, duration: 0.3 }}
                  className="group flex items-center justify-between rounded-2xl border border-white/[0.04] bg-white/[0.02] px-4 py-4 text-base font-medium text-foreground/90 transition-colors hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                    {link.label}
                  </span>
                  <Sparkles className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-violet-400" />
                </motion.a>
              ))}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-2"
              >
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = personal.resumeFile;
                    a.download = "Abdul-Moiz-Resume.pdf";
                    a.click();
                    setOpen(false);
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
