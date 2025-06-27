import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Libra.css";

const Libra = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="libra-container">
      <header className="welcome-section">
        <h1>♎ Welcome, Libra!</h1>
        <p>
          Seek balance, embrace beauty, and discover how harmony leads your
          path.
        </p>
      </header>
      <nav className="libra-nav">
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
      <section id="info" className="libra-section">
        <h2>♎ Libra – The Harmonious Diplomat</h2>
        <p>
          Ruled by Venus, Libra is all about balance, fairness, and aesthetics.
          As an Air sign, Libra excels in communication and social connection.
        </p>
        <ul>
          <li>
            <strong>Date Range:</strong> September 23 – October 22
          </li>
          <li>
            <strong>Element:</strong> Air 🌬️
          </li>
          <li>
            <strong>Ruling Planet:</strong> Venus ♀
          </li>
          <li>
            <strong>Symbol:</strong> The Scales ⚖️
          </li>
        </ul>
      </section>
      <section id="traits" className="libra-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>🤝 Diplomatic</li>
              <li>🎨 Charming</li>
              <li>⚖️ Fair-minded</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>😶 Indecisive</li>
              <li>🌀 Avoids confrontation</li>
              <li>🎭 People-pleaser</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="horoscope" className="libra-section">
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
              Today favors diplomatic moves. Seek peace in conversations and
              express yourself with grace.
            </p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>
              This week may test your decision-making. Trust your gut and avoid
              overthinking.
            </p>
          </div>
        )}
      </section>
      <section id="calendar" className="libra-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li>
              <strong>💫 Venus Direct – Oct 5:</strong> Favorable time for love
              and aesthetics.
            </li>
            <li>
              <strong>🌕 Full Moon – Oct 14:</strong> Expect clarity in
              relationships and decisions.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Libra;
