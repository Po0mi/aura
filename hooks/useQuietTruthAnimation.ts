"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useQuietTruthAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Underline draw setup
    const linePath = el.querySelector(".truth-line path") as SVGPathElement | null;
    if (linePath) {
      const len = linePath.getTotalLength();
      gsap.set(linePath, { strokeDasharray: len, strokeDashoffset: len });
    }

    const trigger = {
      trigger: el,
      start: "top 75%",
      toggleActions: "play none none none",
    };

    // Left column
    gsap.from(el.querySelector(".truth-eyebrow"), {
      opacity: 0, y: 16, duration: 0.6, ease: "power2.out",
      scrollTrigger: trigger,
    });
    gsap.from(el.querySelector(".truth-heading"), {
      opacity: 0, y: 24, duration: 0.75, ease: "power3.out",
      delay: 0.1, scrollTrigger: trigger,
    });
    if (linePath) {
      gsap.to(linePath, {
        strokeDashoffset: 0, duration: 1.0, ease: "power2.inOut",
        delay: 0.5, scrollTrigger: trigger,
      });
    }

    // Right column stagger
    gsap.from(el.querySelectorAll(".truth-body, .truth-pullquote"), {
      opacity: 0, y: 20, duration: 0.65, ease: "power2.out",
      stagger: 0.15, delay: 0.2, scrollTrigger: trigger,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return { ref };
}
