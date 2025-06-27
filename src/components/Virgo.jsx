import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Virgo.css";

const Virgo = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="virgo-container">
      <header className="welcome-section">
        <h1>♍ Welcome, Virgo!</h1>
        <p>
          Find clarity in detail and strength in your calm, collected energy.
        </p>
      </header>
      <nav className="virgo-nav">
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
      <section id="info" className="virgo-section">
        <h2>♍ Virgo – The Precise Perfectionist</h2>
        <p>
          Ruled by Mercury, Virgo is detail-oriented, analytical, and
          thoughtful. As an Earth sign, Virgo strives for practical perfection
          and service.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> August 23 – September 22
          </li>
          <li>
            <strong>Element:</strong> Earth 🌍
          </li>
          <li>
            <strong>Ruling Planet:</strong> Mercury ☿
          </li>
          <li>
            <strong>Symbol:</strong> The Virgin ♍
          </li>
        </ul>
      </section>
      <section id="traits" className="virgo-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>📚 Analytical</li>
              <li>🧹 Organized</li>
              <li>🧠 Intelligent</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🔍 Overcritical</li>
              <li>🌀 Anxious</li>
              <li>📏 Perfectionist</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="virgo-section">
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
              Today is ideal for organizing your thoughts. Focus on efficiency
              without overthinking.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week encourages mental clarity. Clear communication will ease
              tension in relationships.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="virgo-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>🌾 Mercury in Virgo – Sept 1:</strong> Mental clarity and
              attention to detail heighten.
            </li>
            <li>
              <strong>🌕 Full Moon – Sept 14:</strong> A powerful time for
              reflection and completion.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Virgo;
