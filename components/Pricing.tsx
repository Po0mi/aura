"use client";
import "./Pricing.scss";
import { usePricingAnimation } from "@/hooks/usePricingAnimation";

const features = [
  "78-page digital ebook (PDF & ePub)",
  "Read on any device, forever",
  "All future updates included",
  "Private reflection prompts",
];

const Check = () => (
  <svg className="feat-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 8.5 L6.5 12 L13 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Pricing = () => {
  const { ref } = usePricingAnimation();

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container" ref={ref}>

        <div className="pricing-left">
          <span className="p-eyebrow">Simple pricing</span>
          <h2 className="p-title">
            One book.<br />A lifetime<br />of{" "}
            <span className="p-underline">
              clarity.
              <svg
                className="p-line"
                viewBox="0 0 105 16"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2,11 C22,5 50,14 75,8 C88,5 98,10 103,9" />
              </svg>
            </span>
          </h2>
          <blockquote className="p-quote">
            <p>&ldquo;I wrote Understood for the woman I used to be — the one who
            tried so hard to be chosen, she forgot she was already enough.&rdquo;</p>
            <footer>
              <strong>Eloïse M.</strong>
              <span>Relationship coach · 8 years guiding women</span>
            </footer>
          </blockquote>
        </div>

        <div className="pricing-right">
          <div className="p-card">

            <div className="p-card-top">
              <span className="p-card-eyebrow">The Ebook</span>
              <h3 className="p-card-name">Understood</h3>
            </div>

            <div className="p-price-block">
              <div className="p-price-row">
                <span className="p-price">$24</span>
                <span className="p-was">$39</span>
              </div>
              <span className="p-note">One-time payment · Instant access</span>
            </div>

            <ul className="p-features">
              {features.map((f, i) => (
                <li key={i}><Check /><span>{f}</span></li>
              ))}
            </ul>

            <a href="#" className="p-btn">Get Instant Access</a>

            <p className="p-guarantee">
              30-day soft refund · Secure checkout
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
