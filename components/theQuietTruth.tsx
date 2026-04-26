"use client";
import "./theQuietTruth.scss";

const TheQuietTruth = () => {
  return (
    <section className="truth" id="truth">
      <div className="truth-container">

        <div className="truth-left">
          <span className="truth-eyebrow">The quiet truth</span>
          <h2 className="truth-heading">
            You did everything right. And still walked home unsure.
          </h2>
        </div>

        <div className="truth-right">
          <p className="truth-body">
            You laughed at the right moments. You asked the thoughtful
            questions. You looked your best — and yet something still
            felt off. Not wrong, exactly. Just&hellip; unresolved.
          </p>

          <blockquote className="truth-pullquote">
            &ldquo;Attraction isn&rsquo;t built in what you say.
            It lives in the eye contact. The way you hold yourself
            when nothing is happening at all.&rdquo;
          </blockquote>

          <p className="truth-body">
            Most women are taught to perform — to be interesting,
            agreeable, available. No one teaches the thing that
            actually moves him: groundedness. This book does.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TheQuietTruth;
