import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Pisces.css";

const Pisces = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="pisces-container">
      <header className="welcome-section">
        <h1>♓ Welcome, Pisces!</h1>
        <p>
          Let your imagination and compassion flow freely under the watchful eye
          of the cosmos.
        </p>
      </header>
      <nav className="pisces-nav">
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
      <section id="info" className="pisces-section">
        <h2>♓ Pisces – The Dreamy Healer</h2>
        <p>
          Ruled by Neptune, Pisces is intuitive, sensitive, and deeply in tune
          with the unseen realms of emotion and spirit.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> February 19 – March 20
          </li>
          <li>
            <strong>Element:</strong> Water 💧
          </li>
          <li>
            <strong>Ruling Planet:</strong> Neptune ♆
          </li>
          <li>
            <strong>Symbol:</strong> Two Fish Swimming Opposite Ways 🐟
          </li>
        </ul>
      </section>
      <section id="traits" className="pisces-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>💖 Compassionate and empathetic</li>
              <li>🎨 Creative and artistic</li>
              <li>🌌 Spiritual and intuitive</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🌀 Overly idealistic</li>
              <li>🌫️ Prone to escapism</li>
              <li>🧱 Struggles with boundaries</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="pisces-section">
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
              Trust your intuition today—it will lead you toward emotional
              clarity and unexpected peace.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week invites spiritual growth. Carve out time for solitude
              and creative reflection.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="pisces-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>🌊 New Moon in Pisces – Mar 10:</strong> Open your heart
              to dreams and healing.
            </li>
            <li>
              <strong>♆ Neptune Retrograde – July 2:</strong> Time to examine
              your illusions and inner truth.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Pisces;
