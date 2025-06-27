import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Scorpio.css";

const Scorpio = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="scorpio-container">
      <header className="welcome-section">
        <h1>🦂 Welcome, Scorpio!</h1>
        <p>
          Unveil your emotional depth and magnetic energy through the mysteries
          of the stars.
        </p>
      </header>
      <nav className="scorpio-nav">
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
      <section id="info" className="scorpio-section">
        <h2>🦂 Scorpio – The Mysterious Alchemist</h2>
        <p>
          Ruled by Pluto and Mars, Scorpio is known for deep transformation,
          emotional intensity, and powerful intuition.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> October 23 – November 21
          </li>
          <li>
            <strong>Element:</strong> Water 💧
          </li>
          <li>
            <strong>Ruling Planet:</strong> Pluto & Mars 🪐
          </li>
          <li>
            <strong>Symbol:</strong> The Scorpion 🦂
          </li>
        </ul>
      </section>

      <section id="traits" className="scorpio-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>🔍 Deep and analytical</li>
              <li>🔥 Passionate and brave</li>
              <li>🛡️ Loyal and determined</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>😤 Jealous or possessive</li>
              <li>🤐 Secretive and controlling</li>
              <li>🕳️ Emotionally intense</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="horoscope" className="scorpio-section">
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
              Today brings revelations. Trust your gut and follow your instincts
              through complexity.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week encourages transformation. Let go of what no longer
              serves you and rise renewed.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="scorpio-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>🌑 New Moon in Scorpio – Nov 13:</strong> A perfect time
              for setting deep intentions.
            </li>
            <li>
              <strong>♇ Pluto Retrograde – Oct 2:</strong> Inner transformation
              intensifies.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Scorpio;
