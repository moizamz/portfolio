"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the device is "low-power" — i.e. a mobile/touch device
 * or a user that prefers reduced motion. Use this to skip or simplify
 * expensive animations and large blurred backgrounds.
 *
 * Defaults to `true` on SSR / first paint so we never accidentally render
 * heavy effects before we know what device we're on.
 */
export function useReducedEffects(): boolean {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const update = () => {
      const isSmall = window.matchMedia("(max-width: 900px)").matches;
      const isTouch = window.matchMedia(
        "(hover: none) and (pointer: coarse)",
      ).matches;
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      setReduced(isSmall || isTouch || reducedMotion);
    };

    update();

    const mqlSmall = window.matchMedia("(max-width: 900px)");
    const mqlTouch = window.matchMedia("(hover: none) and (pointer: coarse)");
    const mqlMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    mqlSmall.addEventListener("change", update);
    mqlTouch.addEventListener("change", update);
    mqlMotion.addEventListener("change", update);

    return () => {
      mqlSmall.removeEventListener("change", update);
      mqlTouch.removeEventListener("change", update);
      mqlMotion.removeEventListener("change", update);
    };
  }, []);

  return reduced;
}

/**
 * Tracks viewport size as a simple boolean. Use only for layout decisions —
 * for performance toggles, prefer {@link useReducedEffects}.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}
