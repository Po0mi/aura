"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useInsideAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = { start: "top 75%", toggleActions: "play none none none" };

    // Header
    gsap.from(el.querySelector(".inside-eyebrow"), {
      opacity: 0, y: 14, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: el.querySelector(".inside-header"), ...trigger },
    });
    gsap.from(el.querySelector(".inside-title"), {
      opacity: 0, y: 22, duration: 0.7, ease: "power3.out", delay: 0.1,
      scrollTrigger: { trigger: el.querySelector(".inside-header"), ...trigger },
    });
    gsap.from(el.querySelector(".inside-subtitle"), {
      opacity: 0, y: 14, duration: 0.55, ease: "power2.out", delay: 0.2,
      scrollTrigger: { trigger: el.querySelector(".inside-header"), ...trigger },
    });

    // Image slides in from the left
    gsap.from(el.querySelector(".inside-image-wrap"), {
      opacity: 0, x: -30, duration: 0.8, ease: "power2.out",
      scrollTrigger: { trigger: el.querySelector(".inside-body"), ...trigger },
    });

    // Each chapter row fires as it enters
    el.querySelectorAll(".inside-item").forEach((item) => {
      gsap.from(item.querySelector(".item-num"), {
        opacity: 0, x: -10, duration: 0.4, ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(item.querySelector(".item-body"), {
        opacity: 0, y: 14, duration: 0.55, ease: "power2.out", delay: 0.08,
        scrollTrigger: { trigger: item, start: "top 85%", toggleActions: "play none none none" },
      });
    });

    // CTA
    gsap.from(el.querySelector(".inside-cta"), {
      opacity: 0, y: 18, duration: 0.6, ease: "power2.out",
      scrollTrigger: { trigger: el.querySelector(".inside-cta"), start: "top 88%", toggleActions: "play none none none" },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return { ref };
}
