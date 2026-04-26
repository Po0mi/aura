"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePricingAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = { start: "top 75%", toggleActions: "play none none none" };

    // Underline draw setup
    const linePath = el.querySelector(".p-line path") as SVGPathElement | null;
    if (linePath) {
      const len = linePath.getTotalLength();
      gsap.set(linePath, { strokeDasharray: len, strokeDashoffset: len });
    }

    // Left column
    const leftTrigger = { trigger: el.querySelector(".pricing-left"), ...trigger };
    gsap.from(el.querySelector(".p-eyebrow"), {
      opacity: 0, y: 14, duration: 0.5, ease: "power2.out",
      scrollTrigger: leftTrigger,
    });
    gsap.from(el.querySelector(".p-title"), {
      opacity: 0, y: 24, duration: 0.7, ease: "power3.out", delay: 0.1,
      scrollTrigger: leftTrigger,
    });
    if (linePath) {
      gsap.to(linePath, {
        strokeDashoffset: 0, duration: 1.0, ease: "power2.inOut", delay: 0.55,
        scrollTrigger: leftTrigger,
      });
    }
    gsap.from(el.querySelector(".p-quote"), {
      opacity: 0, y: 18, duration: 0.65, ease: "power2.out", delay: 0.25,
      scrollTrigger: leftTrigger,
    });

    // Card slides up
    const cardTrigger = { trigger: el.querySelector(".p-card"), ...trigger };
    gsap.from(el.querySelector(".p-card"), {
      opacity: 0, y: 40, duration: 0.75, ease: "power3.out",
      scrollTrigger: cardTrigger,
    });

    // Card internals stagger after card lands
    gsap.from(
      [
        el.querySelector(".p-card-top"),
        el.querySelector(".p-price-block"),
        el.querySelector(".p-features"),
        el.querySelector(".p-btn"),
        el.querySelector(".p-guarantee"),
      ],
      {
        opacity: 0, y: 12, duration: 0.5, ease: "power2.out",
        stagger: 0.08, delay: 0.2,
        scrollTrigger: cardTrigger,
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return { ref };
}
