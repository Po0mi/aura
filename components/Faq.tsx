"use client";
import "./Faq.scss";
import { useFaqAnimation } from "@/hooks/useFaqAnimation";

const faqs = [
  {
    q: "What format is the book in?",
    a: "You'll receive both PDF and ePub files instantly after purchase. They work on any device — phone, tablet, Kindle, laptop, or desktop.",
  },
  {
    q: "Is this about playing games or being someone I'm not?",
    a: "No. Understood is about understanding the psychology of attraction so you can stop working against yourself — not about performing a role. The goal is to be more fully yourself, not less.",
  },
  {
    q: "Will this work if I'm already in a relationship?",
    a: "Yes. The dynamics covered apply to new connections and long-term relationships equally. Presence, groundedness, and emotional calibration matter at every stage.",
  },
  {
    q: "How long will it take to read?",
    a: "Most readers finish in one sitting — roughly 2 to 3 hours. Each chapter is focused and direct. There's no filler.",
  },
  {
    q: "What if I don't find it valuable?",
    a: "There's a 30-day soft refund. If you read it and feel it didn't shift something for you, reach out and we'll sort it out — no lengthy process.",
  },
  {
    q: "Who is this book for?",
    a: "Women who are thoughtful, self-aware, and already doing the work — but still feel like something invisible is holding them back in romantic dynamics. If you've ever left a date feeling uncertain despite it going well, this book was written for you.",
  },
];

const Faq = () => {
  const { ref } = useFaqAnimation();

  return (
    <section className="faq" id="faq">
      <div className="faq-container" ref={ref}>

        <header className="faq-header">
          <span className="faq-eyebrow">Common questions</span>
          <h2 className="faq-title">FAQ</h2>
        </header>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-question">
                <span>{item.q}</span>
                <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M4 6 L8 10 L12 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="faq-answer">{item.a}</p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
