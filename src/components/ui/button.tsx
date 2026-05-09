"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50 select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.55)] hover:shadow-[0_14px_36px_-8px_rgba(139,92,246,0.7)]",
        secondary:
          "border border-white/10 bg-white/[0.04] text-foreground backdrop-blur-md hover:border-white/25 hover:bg-white/[0.07]",
        ghost:
          "text-foreground/80 hover:text-foreground hover:bg-white/[0.04]",
        outline:
          "border border-white/15 text-foreground hover:border-white/30 hover:bg-white/[0.04]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-[15px]",
        xl: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
  glow?: boolean;
  children?: ReactNode;
};

export type ButtonProps = ButtonOwnProps &
  Omit<HTMLMotionProps<"button">, keyof ButtonOwnProps | "children">;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      glow = true,
      asChild: _asChild,
      children,
      ...props
    },
    ref,
  ) => {
    void _asChild;
    const isPrimary = variant === "primary";
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {isPrimary && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[linear-gradient(120deg,#8b5cf6_0%,#6366f1_40%,#22d3ee_100%)]"
          />
        )}
        {isPrimary && glow && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-20 rounded-full bg-[linear-gradient(120deg,#8b5cf6,#22d3ee)] opacity-50 blur-xl"
          />
        )}
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </motion.button>
    );
  },
);
Button.displayName = "Button";
