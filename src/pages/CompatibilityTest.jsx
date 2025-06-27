import React, { useState } from "react";
import compatibilityData from "../data/compatibility-data.json";
import "../assets/css/CompatibilityTest.css";
import "../assets/css/CompatibilityResult.css";

const insights = [
  {
    title: "💞 The Cosmic Dance of Compatibility",
    content:
      "Every zodiac pair creates a unique energetic bond. Some signs naturally harmonize, while others challenge each other to grow. Compatibility reveals where sparks fly and where tension brews. Understanding your astrological chemistry helps build deeper, more balanced connections.",
  },
  {
    title: "🔥 Elemental Harmony or Clash?",
    content:
      "Fire, Earth, Air, and Water signs bring different energies to a relationship. Matches within the same element often flow easily, while opposite elements can either attract or collide. Knowing your elemental match can explain instant chemistry—or constant friction.",
  },
  {
    title: "🌙 Why Some Signs Just “Get” Each Other",
    content:
      "Ever feel like you instantly click—or clash—with someone? Astrology shows how certain sun signs intuitively understand each other, thanks to shared modes, values, or ruling planets. Compatibility helps uncover those hidden patterns in your relationships.",
  },
  {
    title: "🌌 Beyond the Stars: True Connection",
    content:
      "Zodiac compatibility isn’t about finding a “perfect” match—it’s about understanding each other’s strengths, struggles, and emotional language. Some signs challenge us, others comfort us. But every match has its own magic, if we’re open to learning from the stars.",
  },
];
const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];
const relationshipTypes = ["Romantic", "Friendship", "Professional"];

export default function CompatibilityTest() {
  const [currentIndex] = useState(0);
  const [sign1, setSign1] = useState("");
  const [sign2, setSign2] = useState("");
  const [relationshipType, setRelationshipType] = useState("Romantic");
  const [result, setResult] = useState(null);

  const checkCompatibility = () => {
    if (!sign1 || !sign2) {
      alert("Lütfen iki burç seçin.");
      return;
    }
    if (sign1 === sign2) {
      setResult({
        score: 100,
        description: "Aynı burçlar harika bir uyum yakalar!",
      });
      return;
    }
    const relData = compatibilityData[relationshipType];
    if (!relData) {
      setResult({
        score: 50,
        description: "Uyum bilgisi mevcut değil, tahmini 50%.",
      });
      return;
    }

    const data = relData[sign1]?.[sign2] ||
      relData[sign2]?.[sign1] || {
        score: 50,
        description: "Uyum bilgisi mevcut değil, tahmini 50%.",
      };

    setResult(data);
  };

  return (
    <>
      <div className="image-container">
        <div className="overlay-color"></div>
        <div className="overlay-text">
          <h2>🔮✨ Stars Know Your Connection 🌌💞</h2>
          <h5>
            🌙💫 Follow the moon, trace the planets, and discover your cosmic
            compatibility.
          </h5>
        </div>
      </div>
      <div className="slider-container">
        <div className="auto-slider-container">
          <div className="auto-slider-card">
            <h3>{insights[currentIndex].title}</h3>
            <p>{insights[currentIndex].content}</p>
          </div>
        </div>
      </div>
      <div className="container-comtability">
        <div className="compatibility-test-container">
          <h2>🌟 Horoscope Compatibility Test</h2>
          <div className="selectors">
            <select value={sign1} onChange={(e) => setSign1(e.target.value)}>
              <option value="">Select First Sign</option>
              {zodiacSigns.map((sign) => (
                <option key={sign} value={sign}>
                  {sign}
                </option>
              ))}
            </select>
            <select value={sign2} onChange={(e) => setSign2(e.target.value)}>
              <option value="">Select Second Sign</option>
              {zodiacSigns.map((sign) => (
                <option key={sign} value={sign}>
                  {sign}
                </option>
              ))}
            </select>
            <select
              value={relationshipType}
              onChange={(e) => setRelationshipType(e.target.value)}
            >
              {relationshipTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <button onClick={checkCompatibility}>Show Compatibility</button>
          {result && (
            <div className="result">
              <h3>Compatibility Score: {result.score}%</h3>
              <p>{result.description}</p>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${result.score}%` }}
                  aria-label={`Compatibility score is ${result.score} percent`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
