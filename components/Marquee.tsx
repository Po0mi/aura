import "./Marquee.scss";

const items = [
  {
    label: "78 Pages",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M5 3 L5 17 Q5 18 6 18 L15 18 Q16 18 16 17 L16 6 L13 3 Z" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M13 3 L13 6 L16 6" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 10 L13 10 M8 13 L12 13" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Instant Download",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 3 L10 13 M6 10 L10 14 L14 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16 L16 16" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Understand Attraction",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 16 C10 16 3 11 3 7 C3 4.5 5 3 7 3 C8.5 3 9.5 3.8 10 4.5 C10.5 3.8 11.5 3 13 3 C15 3 17 4.5 17 7 C17 11 10 16 10 16 Z" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Become Magnetic",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 2 L11.5 7.5 L17 7.5 L12.5 11 L14.2 17 L10 13.5 L5.8 17 L7.5 11 L3 7.5 L8.5 7.5 Z" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Effortless Presence",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 3 C10 3 14 6 14 10 C14 12.5 12.2 14.5 10 15 C7.8 14.5 6 12.5 6 10 C6 6 10 3 10 3 Z" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M10 8 L10 12 M8 10 L12 10" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Read in One Sitting",
    icon: (
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <circle cx="10" cy="6" r="2.5" strokeWidth="1.4" />
        <path d="M6 10 C6 10 7 9 10 9 C13 9 14 10 14 10 L14 14 C14 15 13 16 12 16 L8 16 C7 16 6 15 6 14 Z" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Marquee = () => (
  <div className="marquee-strip">
    <ul className="marquee-list">
      {items.map((item) => (
        <li key={item.label} className="marquee-logo">
          {item.icon}
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Marquee;
