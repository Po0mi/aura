import "./CtaSection.scss";

const CtaSection = () => (
  <section className="cta-final">
    <div className="cta-final-container">

      <div className="cta-final-content">
        <span className="cta-final-eyebrow">Ready when you are</span>
        <h2 className="cta-final-heading">
          You already know<br />
          something has<br />
          to change.
        </h2>
        <p className="cta-final-sub">
          Understood gives you the awareness, the language,
          and the shift — in 78 pages.
        </p>

        <div className="cta-final-actions">
          <a href="#pricing" className="cta-final-btn">Get Instant Access — $24</a>
          <span className="cta-final-note">Instant download · 30-day soft refund</span>
        </div>
      </div>

    </div>
  </section>
);

export default CtaSection;
