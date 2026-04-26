import "./TheIllusion.scss";

const items = [
  {
    number: "01",
    belief: "If I just show up as my best self, he'll feel lucky to have me.",
    truth: "Worthiness isn't the issue. Most women who struggle with attraction are already exceptional. The problem is that desirability runs on a different frequency.",
  },
  {
    number: "02",
    belief: "If I show how much I care, he'll value me more.",
    truth: "Investment signals availability. Availability removes mystery. Mystery is what keeps curiosity alive — and curiosity is what keeps him coming back.",
  },
  {
    number: "03",
    belief: "If I stop playing games and just be real with him, it will work.",
    truth: "Authenticity is magnetic. But openness without timing floods a dynamic that needs room to breathe.",
  },
  {
    number: "04",
    belief: "If I communicate everything clearly, there will be no confusion.",
    truth: "Clarity doesn't fix dynamics that are misaligned. Some things don't need to be said — they need to be felt.",
  },
];

const TheIllusion = () => (
  <section className="illusion" id="illusion">
    <div className="illusion-container">

      <header className="illusion-header">
        <span className="illusion-eyebrow">Common misconceptions</span>
        <h2 className="illusion-title">The Illusion</h2>
        <p className="illusion-subtitle">
          The beliefs that feel completely logical — and quietly work against you.
        </p>
      </header>

      <div className="illusion-table">
        <div className="illusion-col-labels" aria-hidden="true">
          <span>The belief</span>
          <span>The reality</span>
        </div>

        {items.map((item) => (
          <div key={item.number} className="illusion-row">
            <div className="row-belief">
              <blockquote>&ldquo;{item.belief}&rdquo;</blockquote>
            </div>
            <div className="row-truth">
              <span className="row-num">{item.number}</span>
              <p>{item.truth}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="illusion-footer">
        You were never lacking effort.{" "}
        <em>You were just following rules that don&rsquo;t create attraction.</em>
      </footer>

    </div>
  </section>
);

export default TheIllusion;
