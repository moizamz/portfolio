"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Magnetic } from "@/components/ui/magnetic";
import { SectionHeading } from "@/components/ui/section-heading";
import { personal, socials } from "@/lib/data";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Open mail client with prefilled body, no backend required.
    const subject = `Portfolio inquiry from ${form.name || "Recruiter"}`;
    const body = `${form.message}\n\nFrom: ${form.name}\n${form.email}`;
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2400);
    }, 600);
  }

  return (
    <section id="contact" className="section">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-72 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(34,211,238,0.12),transparent_70%)]"
      />
      <div className="container-tight">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Have a role, project, or idea?{" "}
              <span className="gradient-text">Let's talk.</span>
            </>
          }
          description="Open to SDE, full-stack and ML engineer opportunities: full-time, internship or contract. I respond within 24 hours."
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-14 grid w-full max-w-5xl gap-6 lg:grid-cols-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-7 md:p-9">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    id="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <div className="group relative rounded-xl border border-white/10 bg-white/[0.02] transition-colors focus-within:border-violet-400/40">
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Tell me about the role, the team, and what you're building..."
                      className="block w-full resize-none rounded-xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-muted-foreground">
                    Pressing send opens your email client with the message
                    prefilled.
                  </p>
                  <Magnetic strength={0.25}>
                    <Button
                      size="lg"
                      type="submit"
                      disabled={status !== "idle"}
                      data-cursor
                      data-cursor-label={
                        status === "sending"
                          ? "Sending"
                          : status === "sent"
                            ? "Sent"
                            : "Send"
                      }
                    >
                      {status === "idle" && (
                        <>
                          <Send className="h-4 w-4" /> Send Message
                        </>
                      )}
                      {status === "sending" && (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Opening...
                        </>
                      )}
                      {status === "sent" && (
                        <>
                          <Check className="h-4 w-4" /> Sent
                        </>
                      )}
                    </Button>
                  </Magnetic>
                </div>
              </form>
            </GlassCard>
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 lg:col-span-5"
          >
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Direct
              </p>
              <a
                href={`mailto:${personal.email}`}
                className="group mt-3 flex items-center gap-3 text-foreground/95"
                data-cursor
                data-cursor-label="Email"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-500/10 text-violet-200">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="font-display text-base font-semibold">
                  {personal.email}
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-3 flex items-center gap-3 text-foreground/95"
                data-cursor
                data-cursor-label="LinkedIn"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/30 to-violet-500/10 text-cyan-200">
                  <Linkedin className="h-4 w-4" />
                </span>
                <span className="font-display text-base font-semibold">
                  linkedin.com/in/moizamz
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500/30 to-teal-500/10 text-emerald-200">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Based in
                  </p>
                  <p className="font-display text-base font-semibold">
                    {personal.location}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Open to remote, hybrid and relocation. Available globally for
                async-first teams.
              </p>
            </GlassCard>

            <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Find me
              </p>
              <div className="flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <Magnetic key={label} strength={0.3}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-foreground/85 transition-all hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-foreground"
                      data-cursor
                      data-cursor-label={label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      <div className="group relative rounded-xl border border-white/10 bg-white/[0.02] transition-colors focus-within:border-violet-400/40">
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="block w-full rounded-xl bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
        />
      </div>
    </div>
  );
}
