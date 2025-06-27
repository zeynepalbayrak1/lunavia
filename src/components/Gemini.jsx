import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Gemini.css";

const Gemini = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="gemini-container">
      <header className="welcome-section">
        <h1>♊ Welcome, Gemini!</h1>
        <p>
          Uncover your dual nature and let curiosity guide your cosmic journey.
        </p>
      </header>
      <nav className="gemini-nav">
        <ul>
          <li>
            <a href="#info">🔆 Overview</a>
          </li>
          <li>
            <a href="#traits">🌟 Traits</a>
          </li>
          <li>
            <a href="#horoscope">🔮 Horoscope</a>
          </li>
          <li>
            <a href="#calendar">🌕 Calendar</a>
          </li>
        </ul>
      </nav>
      <section id="info" className="gemini-section">
        <h2>♊ Gemini – The Curious Communicator</h2>
        <p>
          Gemini is ruled by Mercury, the planet of communication. Witty,
          expressive, and intellectually restless, Geminis are the multitaskers
          of the zodiac.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> May 21 – June 20
          </li>
          <li>
            <strong>Element:</strong> Air 💨
          </li>
          <li>
            <strong>Ruling Planet:</strong> Mercury ☿
          </li>
          <li>
            <strong>Symbol:</strong> The Twins ♊
          </li>
        </ul>
      </section>
      <section id="traits" className="gemini-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>🧠 Intelligent</li>
              <li>🗣️ Articulate</li>
              <li>🎭 Adaptable</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🌪️ Indecisive</li>
              <li>🤐 Superficial</li>
              <li>🌀 Easily distracted</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="gemini-section">
        <h2>🔮 Your Horoscope</h2>
        <div className="toggle-buttons">
          <button
            onClick={() => setHoroscopeView("daily")}
            className={horoscopeView === "daily" ? "active" : ""}
          >
            Daily
          </button>
          <button
            onClick={() => setHoroscopeView("weekly")}
            className={horoscopeView === "weekly" ? "active" : ""}
          >
            Weekly
          </button>
        </div>
        {horoscopeView === "daily" ? (
          <div className="horoscope-card">
            <h3>🗓️ Daily Insight</h3>
            <p>
              Your mind races with ideas today. Focus on one thing at a time to
              maximize productivity.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week calls for deep conversations and creative expression.
              Speak your truth wisely.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="gemini-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>💫 Mercury Retrograde – Aug 10:</strong> Time for
              introspection and refined communication.
            </li>
            <li>
              <strong>🌍 Full Moon – Sept 1:</strong> Ideal for completion and
              clarity in projects.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Gemini;
