"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useFaqAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = { start: "top 75%", toggleActions: "play none none none" };

    // Header
    gsap.from(el.querySelector(".faq-eyebrow"), {
      opacity: 0, y: 14, duration: 0.5, ease: "power2.out",
      scrollTrigger: { trigger: el.querySelector(".faq-header"), ...trigger },
    });
    gsap.from(el.querySelector(".faq-title"), {
      opacity: 0, y: 22, duration: 0.7, ease: "power3.out", delay: 0.1,
      scrollTrigger: { trigger: el.querySelector(".faq-header"), ...trigger },
    });

    // Each FAQ row fires as it enters
    el.querySelectorAll(".faq-item").forEach((item) => {
      gsap.from(item, {
        opacity: 0, y: 16, duration: 0.55, ease: "power2.out",
        scrollTrigger: { trigger: item, start: "top 88%", toggleActions: "play none none none" },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return { ref };
}
