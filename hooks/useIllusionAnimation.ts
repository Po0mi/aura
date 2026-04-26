"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useIllusionAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = { start: "top 75%", toggleActions: "play none none none" };

    // Header
    gsap.from(el.querySelector(".illusion-eyebrow"), {
      opacity: 0, y: 14, duration: 0.55, ease: "power2.out",
      scrollTrigger: { trigger: el.querySelector(".illusion-header"), ...trigger },
    });
    gsap.from(el.querySelector(".illusion-title"), {
      opacity: 0, y: 22, duration: 0.7, ease: "power3.out", delay: 0.1,
      scrollTrigger: { trigger: el.querySelector(".illusion-header"), ...trigger },
    });
    gsap.from(el.querySelector(".illusion-subtitle"), {
      opacity: 0, y: 14, duration: 0.55, ease: "power2.out", delay: 0.2,
      scrollTrigger: { trigger: el.querySelector(".illusion-header"), ...trigger },
    });

    // Each item staggered as it enters the viewport
    el.querySelectorAll(".illusion-item").forEach((item) => {
      const num     = item.querySelector(".item-num");
      const belief  = item.querySelector(".item-belief");
      const truth   = item.querySelector(".item-truth-wrap");

      gsap.from(num, {
        opacity: 0, x: -12, duration: 0.45, ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 80%", toggleActions: "play none none none" },
      });
      gsap.from(belief, {
        opacity: 0, y: 18, duration: 0.6, ease: "power3.out", delay: 0.08,
        scrollTrigger: { trigger: item, start: "top 80%", toggleActions: "play none none none" },
      });
      gsap.from(truth, {
        opacity: 0, y: 14, duration: 0.55, ease: "power2.out", delay: 0.2,
        scrollTrigger: { trigger: item, start: "top 80%", toggleActions: "play none none none" },
      });
    });

    // Footer
    gsap.from(el.querySelector(".illusion-footer"), {
      opacity: 0, y: 16, duration: 0.65, ease: "power2.out",
      scrollTrigger: { trigger: el.querySelector(".illusion-footer"), start: "top 88%", toggleActions: "play none none none" },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return { ref };
}
