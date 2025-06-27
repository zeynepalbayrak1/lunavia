import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import horoscopesData from "../data/daily-horoscope.json";
import "../assets/css/DailyHoroscope.css";

const zodiacSigns = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
];

export default function DailyHoroscope() {
  const [selectedSign, setSelectedSign] = useState("");
  const [horoscope, setHoroscope] = useState(null);
  const [birthDate, setBirthDate] = useState("");
  const [personalizedComment, setPersonalizedComment] = useState("");

  useEffect(() => {
    if (selectedSign) {
      const data = horoscopesData[selectedSign];
      setHoroscope(data);
      setPersonalizedComment("");
    }
  }, [selectedSign]);

  const generatePersonalizedComment = () => {
    if (!birthDate) {
      alert("Please enter your birth date.");
      return;
    }
    if (horoscope) {
      setPersonalizedComment(horoscope.aiPersonalized);
    }
  };

  const paragraphs = [
    {
      title: "🌌 Welcome to Your Celestial Journey",
      text: "Every day the stars shift and realign, subtly influencing our thoughts, feelings, and direction. Let your zodiac guide you toward clarity and empowerment.",
    },
    {
      title: "🧭 How to Use This Page",
      text: "Select your zodiac sign to see today’s horoscope. Enter your birth date for a personalized, AI-enhanced insight based on your unique profile.",
    },
    {
      title: "🔮 Why Astrology Matters",
      text: "Astrology bridges the gap between who we are and who we are becoming. Your daily horoscope gives insight into hidden patterns and emotional waves.",
    },
    {
      title: "✨ The Power of Personalized Guidance",
      text: "AI-powered reflections go beyond the generic. Receive guidance aligned with your unique astrological fingerprint—designed just for you.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
    }, 5000); // 5 saniyede bir geçiş

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="image-container">
        <img
          src="../../public/img/bg5.jpg"
          alt="Arka Plan"
          className="background-image"
        />
        <div className="overlay-color"></div>
        <div className="overlay-text">
          <h2>🔮☀️ Your Cosmic Clue for Today 🌟📜</h2>
          <h5>
            ✨ Start your day with the stars. Let the universe whisper its
            wisdom to you — one sign at a time. 🌌♈♉♊
          </h5>
        </div>
      </div>
      <div className="slider-container">
        <div className="auto-slider-container">
          <div className="auto-slider-card">
            <h3>{paragraphs[currentIndex].title}</h3>
            <p>{paragraphs[currentIndex].text}</p>
          </div>
        </div>
      </div>
      <div className="daily-horoscope-container">
        <h2>In every sign, a story unfolds. Discover yours today.</h2>
        <div className="two-column-layout">
          {/* Sol Sütun: Burç Seçimi ve Genel Yorum */}
          <div className="left-panel">
            <div className="selector">
              <label>Select your zodiac sign:</label>
              <select
                value={selectedSign}
                onChange={(e) => setSelectedSign(e.target.value)}
              >
                <option value="">Choose Zodiac Sign</option>
                {zodiacSigns.map((sign) => (
                  <option key={sign} value={sign}>
                    {sign.charAt(0).toUpperCase() + sign.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            {horoscope && (
              <div className="horoscope-content">
                <h2>{selectedSign.toUpperCase()}</h2>
                <p>
                  <strong>General Insight:</strong> {horoscope.general}
                </p>
                <p>
                  <strong>Suggestion:</strong> {horoscope.advice}
                </p>
              </div>
            )}
          </div>
          {/* Sağ Sütun: Kişisel Yorum */}
          <div className="right-panel">
            <div className="personalize-section">
              <label>Enter your birth date:</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <button onClick={generatePersonalizedComment}>
                Get Personalized Insight
              </button>
            </div>
            {personalizedComment && (
              <div className="personalized-comment">
                <h3>Personalized Comment:</h3>
                <p>{personalizedComment}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
