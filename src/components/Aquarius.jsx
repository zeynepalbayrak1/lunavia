import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Aquarius.css";

const Aquarius = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="aquarius-container">
      <header className="welcome-section">
        <h1>♒ Welcome, Aquarius!</h1>
        <p>
          Innovate your world and embrace your uniqueness under the guidance of
          the stars.
        </p>
      </header>
      <nav className="aquarius-nav">
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
      <section id="info" className="aquarius-section">
        <h2>♒ Aquarius – The Visionary Rebel</h2>
        <p>
          Ruled by Uranus, Aquarius is forward-thinking, eccentric, and driven
          by humanitarian ideals and mental clarity.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> January 20 – February 18
          </li>
          <li>
            <strong>Element:</strong> Air 🌬️
          </li>
          <li>
            <strong>Ruling Planet:</strong> Uranus ♅
          </li>
          <li>
            <strong>Symbol:</strong> The Water Bearer ♒
          </li>
        </ul>
      </section>
      <section id="traits" className="aquarius-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>🌐 Innovative and independent</li>
              <li>🧠 Intelligent and analytical</li>
              <li>❤️ Humanitarian and idealistic</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🌪️ Emotionally detached</li>
              <li>🌀 Unpredictable and rebellious</li>
              <li>❄️ Stubborn in ideas</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="aquarius-section">
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
              Your originality shines today. A sudden idea may lead to a
              breakthrough—don’t ignore it!
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week may challenge your flexibility. Balance your
              individuality with collaboration.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="aquarius-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>♒ New Moon in Aquarius – Feb 9:</strong> A perfect moment
              to launch your ideas.
            </li>
            <li>
              <strong>♅ Uranus Retrograde – Aug 24:</strong> Time to rethink
              what freedom means to you.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Aquarius;
