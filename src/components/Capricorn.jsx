import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Capricorn.css";

const Capricorn = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="capricorn-container">
      <header className="welcome-section">
        <h1>🐐 Welcome, Capricorn!</h1>
        <p>
          Climb your personal mountain with ambition and discipline—guided by
          the stars.
        </p>
      </header>
      <nav className="capricorn-nav">
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
            <a href="#compatibility">💞 Compatibility</a>
          </li>
          <li>
            <a href="#calendar">🌕 Calendar</a>
          </li>
        </ul>
      </nav>
      <section id="info" className="capricorn-section">
        <h2>🐐 Capricorn – The Determined Climber</h2>
        <p>
          Ruled by Saturn, Capricorn is practical, ambitious, and focused on
          long-term goals and success.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> December 22 – January 19
          </li>
          <li>
            <strong>Element:</strong> Earth 🌍
          </li>
          <li>
            <strong>Ruling Planet:</strong> Saturn ♄
          </li>
          <li>
            <strong>Symbol:</strong> The Sea-Goat 🐐
          </li>
        </ul>
      </section>
      <section id="traits" className="capricorn-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>🎯 Ambitious and disciplined</li>
              <li>🛠️ Responsible and resourceful</li>
              <li>🧠 Practical and wise</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🧊 Emotionally reserved</li>
              <li>💼 Workaholic tendencies</li>
              <li>📏 Perfectionist and rigid</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="capricorn-section">
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
              Focus and persistence will help you overcome minor setbacks. Stay
              the course.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week, long-term planning pays off. A professional opportunity
              may take shape—be ready.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="capricorn-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>🌑 New Moon in Capricorn – Jan 11:</strong> Ideal time to
              set career goals.
            </li>
            <li>
              <strong>♄ Saturn Retrograde – June 30:</strong> Reflect on
              discipline and structure.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Capricorn;
