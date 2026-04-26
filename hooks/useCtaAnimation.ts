"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useCtaAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = {
      trigger: el,
      start: "top 75%",
      toggleActions: "play none none none",
    };

    gsap.from(el.querySelector(".cta-final-eyebrow"), {
      opacity: 0, y: 14, duration: 0.5, ease: "power2.out",
      scrollTrigger: trigger,
    });
    gsap.from(el.querySelector(".cta-final-heading"), {
      opacity: 0, y: 28, duration: 0.75, ease: "power3.out", delay: 0.1,
      scrollTrigger: trigger,
    });
    gsap.from(el.querySelector(".cta-final-sub"), {
      opacity: 0, y: 16, duration: 0.6, ease: "power2.out", delay: 0.25,
      scrollTrigger: trigger,
    });
    gsap.from(el.querySelector(".cta-final-actions"), {
      opacity: 0, y: 20, duration: 0.6, ease: "power2.out", delay: 0.38,
      scrollTrigger: trigger,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return { ref };
}
