import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Aries.css";

const Aries = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="aries-container">
      <header className="welcome-section">
        <h1>♈ Welcome, Aries!</h1>
        <p>
          Discover your inner fire and explore how the stars shape your journey.
        </p>
      </header>
      <nav className="aries-nav">
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
      <section id="info" className="aries-section">
        <h2>♈ Aries – The Fiery Trailblazer</h2>
        <p>
          Born under the crimson flame of Mars, Aries radiates passion,
          initiative, and drive. As the first sign of the zodiac, Aries leads
          with courage and confidence.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> March 21 – April 19
          </li>
          <li>
            <strong>Element:</strong> Fire 🔥
          </li>
          <li>
            <strong>Ruling Planet:</strong> Mars ♂
          </li>
          <li>
            <strong>Symbol:</strong> The Ram ♈
          </li>
        </ul>
      </section>
      <section id="traits" className="aries-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>🔥 Courageous</li>
              <li>🚀 Ambitious</li>
              <li>💡 Innovative</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>⚡ Impulsive</li>
              <li>🔥 Quick-tempered</li>
              <li>🎯 Over-competitive</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="aries-section">
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
              Today, your inner fire ignites new beginnings. Stay bold but think
              before you leap.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week brings reflection and growth. Trust your instincts but
              listen more than usual.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="aries-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>🔥 Mars Transit – July 5:</strong> Action-oriented energy
              peaks.
            </li>
            <li>
              <strong>🌌 Mercury Retrograde – Aug 10:</strong> Think twice
              before reacting.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Aries;
