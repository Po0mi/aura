"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useHeroAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Circle draw
    const path = el.querySelector(".handdrawn-circle path") as SVGPathElement | null;
    if (path) {
      const len = path.getTotalLength();
      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(path, { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut", delay: 0.5 });
    }

    // Staggered entrance
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.7 } });
    tl.from(el.querySelector(".hero-audience"),      { opacity: 0, y: 20 })
      .from(el.querySelector(".hero-title"),         { opacity: 0, y: 30 }, "-=0.4")
      .from(el.querySelector(".hero-subtitle"),      { opacity: 0, y: 20 }, "-=0.45")
      .from(el.querySelector(".hero-cta"),           { opacity: 0, y: 20 }, "-=0.45")
      .from(el.querySelector(".hero-image-wrapper"), { opacity: 0, x: 40, duration: 0.9 }, "-=0.6");

    // CTA hover bounce
    const btn = el.querySelector(".primary-btn") as HTMLElement | null;
    const enter = () => gsap.to(btn, { scale: 1.06, duration: 0.15, ease: "power2.out" });
    const leave = () => gsap.to(btn, { scale: 1,    duration: 0.5,  ease: "elastic.out(1, 0.5)" });
    btn?.addEventListener("mouseenter", enter);
    btn?.addEventListener("mouseleave", leave);

    return () => {
      tl.kill();
      btn?.removeEventListener("mouseenter", enter);
      btn?.removeEventListener("mouseleave", leave);
    };
  }, []);

  return { ref };
}
