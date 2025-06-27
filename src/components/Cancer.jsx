import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Cancer.css";

const Cancer = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="cancer-container">
      <header className="welcome-section">
        <h1>♋ Welcome, Cancer!</h1>
        <p>
          Embrace the tides of your emotions and discover the lunar path that
          guides you.
        </p>
      </header>
      <nav className="cancer-nav">
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
      <section id="info" className="cancer-section">
        <h2>♋ Cancer – The Intuitive Guardian</h2>
        <p>
          Born under the nurturing moon, Cancer is deeply intuitive, protective,
          and emotionally intelligent. A natural caregiver, Cancer cherishes
          home and heart above all.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> June 21 – July 22
          </li>
          <li>
            <strong>Element:</strong> Water 💧
          </li>
          <li>
            <strong>Ruling Planet:</strong> Moon 🌙
          </li>
          <li>
            <strong>Symbol:</strong> The Crab ♋
          </li>
        </ul>
      </section>
      <section id="traits" className="cancer-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>💖 Compassionate</li>
              <li>🏡 Family-oriented</li>
              <li>🌊 Deeply empathetic</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🦀 Moody</li>
              <li>🔐 Withdrawn</li>
              <li>⚖️ Overprotective</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="cancer-section">
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
              Today calls for emotional clarity. Let your heart speak, but keep
              your boundaries in check.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week centers around family ties and self-care. Reflect before
              reacting.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="cancer-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>🌙 Full Moon – July 3:</strong> Emotions rise to the
              surface. A good time to reflect.
            </li>
            <li>
              <strong>🌊 Neptune Retrograde – July 11:</strong> Dreams may blur
              with reality.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Cancer;
