import React from "react";
import "../assets/css/DidYouKnow.css";

const facts = [
  { emoji: "🔥", text: "Mars rules Aries." },
  { emoji: "🌊", text: "Water signs are deeply intuitive." },
  { emoji: "🌕", text: "Full moons often mark emotional climaxes." },
  { emoji: "💨", text: "Air signs love intellectual conversations." },
  { emoji: "🐂", text: "Taurus is ruled by Venus – planet of beauty." },
  { emoji: "🪐", text: "Saturn governs structure and discipline." },
];

export default function DidYouKnow() {
  return (
    <section className="did-you-know-section">
      <h2>✨ Did You Know?</h2>
      <div className="fact-cards">
        {facts.map((fact, index) => (
          <div className="fact-card" key={index}>
            <span className="emoji">{fact.emoji}</span>
            <p>{fact.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
