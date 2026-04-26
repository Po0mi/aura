"use client";
import Image from "next/image";
import "./Hero.scss";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

const Hero = () => {
  const { ref } = useHeroAnimation();

  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <div className="hero-container" ref={ref}>
        <span className="hero-audience" role="text">
          For women tired of guessing, performing, or feeling invisible.
        </span>
        <h1 className="hero-title" id="hero-heading">
          Be the woman he can&apos;t
          <span className="forget-highlight">
            forget.
            <svg
              className="handdrawn-circle"
              viewBox="0 0 230 70"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M115,4 C152,0 205,8 218,28 C228,46 214,62 172,67 C142,71 78,70 45,63 C16,56 2,42 6,26 C11,8 76,1 115,4 Z" />
            </svg>
          </span>
        </h1>
        <p className="hero-subtitle">
          Stop overthinking your dates — start understanding what actually
          creates attraction and why effort alone isn&apos;t what makes him stay
          interested.
        </p>
        <div className="hero-cta">
          <a
            href="#pricing"
            className="primary-btn"
            aria-label="Get instant access to the guide"
          >
            Get Instant Access
          </a>
          <span className="cta-meta">
            Instant download • 78 pages • No fluff, just clarity
          </span>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/images/woman.png"
            alt="Confident woman in white blouse, arms crossed, holding glasses — representing grounded presence and self-assured femininity"
            width={800}
            height={800}
            className="girl-image"
            priority
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
