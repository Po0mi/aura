import "./Testimonials.scss";

const chapters = [
  {
    number: "01",
    title: "The Attention Trap",
    desc: "Why being noticed and being desired are two completely different things — and how most women confuse the two.",
  },
  {
    number: "02",
    title: "The Overcommunication Pattern",
    desc: "How over-explaining, over-texting, and over-clarifying quietly signal anxiety instead of confidence.",
  },
  {
    number: "03",
    title: "Presence vs Performance",
    desc: "The difference between a woman who is magnetic and a woman who is trying to be. He feels it. You can learn it.",
  },
  {
    number: "04",
    title: "Reading the Unspoken",
    desc: "What his silences, his pace, and his inconsistency are actually communicating — and how to respond without reacting.",
  },
  {
    number: "05",
    title: "The Groundedness Shift",
    desc: "How to stop managing his perception and start being rooted in your own. This is where the dynamic changes.",
  },
  {
    number: "06",
    title: "Warmth Without Loss of Self",
    desc: "How to stay open and soft without abandoning your centre — and why that balance is what actually keeps him.",
  },
];

const WhatIsInside = () => (
  <section className="inside" id="inside">
    <div className="inside-container">

      <header className="inside-header">
        <span className="inside-eyebrow">78 pages · 6 chapters</span>
        <h2 className="inside-title">What&rsquo;s inside.</h2>
        <p className="inside-subtitle">
          Each chapter targets a specific pattern — the ones that feel normal,
          but quietly work against you.
        </p>
      </header>

      <div className="inside-grid">
        {chapters.map((ch) => (
          <div key={ch.number} className="inside-item">
            <span className="item-num">{ch.number}</span>
            <div className="item-body">
              <strong className="item-title">{ch.title}</strong>
              <p className="item-desc">{ch.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="inside-cta">
        <a href="#pricing" className="inside-btn">Get Instant Access — $24</a>
        <span className="inside-note">Instant download · PDF & ePub · Read anywhere</span>
      </div>

    </div>
  </section>
);

export default WhatIsInside;
