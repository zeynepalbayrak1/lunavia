import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Sagittarius.css";

const Sagittarius = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="sagittarius-container">
      <header className="welcome-section">
        <h1>🏹 Welcome, Sagittarius!</h1>
        <p>
          Embrace your wanderlust spirit and seek truth under the vast sky of
          the stars.
        </p>
      </header>

      <nav className="sagittarius-nav">
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
      <section id="info" className="sagittarius-section">
        <h2>🏹 Sagittarius – The Freedom Seeker</h2>
        <p>
          Ruled by Jupiter, Sagittarius is known for its boundless curiosity,
          love of adventure, and thirst for knowledge and truth.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> November 22 – December 21
          </li>
          <li>
            <strong>Element:</strong> Fire 🔥
          </li>
          <li>
            <strong>Ruling Planet:</strong> Jupiter ♃
          </li>
          <li>
            <strong>Symbol:</strong> The Archer 🏹
          </li>
        </ul>
      </section>
      <section id="traits" className="sagittarius-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>🌍 Adventurous and bold</li>
              <li>📚 Philosophical and wise</li>
              <li>😊 Optimistic and independent</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🗯️ Blunt or tactless</li>
              <li>😅 Overconfident</li>
              <li>🏃‍♀️ Restless and impatient</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="sagittarius-section">
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
              New opportunities for learning or travel may emerge. Say yes—but
              avoid impulsiveness.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week, growth comes through self-reflection. Take time to
              refine your goals.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="sagittarius-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>📍 Jupiter Alignments – Dec 4:</strong> Ideal for
              goal-setting and travel planning.
            </li>
            <li>
              <strong>🌗 Full Moon in Sagittarius – Dec 15:</strong> Emotional
              clarity and spiritual insight peak.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Sagittarius;
