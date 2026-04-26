"use client";
import Image from "next/image";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Be the woman he can't
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
          creates attraction and why effort alone isn’t what makes him stay
          interested.
        </p>
        <div className="hero-cta">
          <a href="#pricing" className="primary-btn">
            Unlock the Guide
          </a>
          <span className="cta-meta">Instant download · 78 pages</span>
        </div>
        <div className="hero-image-wrapper">
          <Image
            src="/images/woman.png"
            alt="Letter"
            width={800}
            height={800}
            className="girl-image"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
