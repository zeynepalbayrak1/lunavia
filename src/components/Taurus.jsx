import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Taurus.css";

const Taurus = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="taurus-container">
      <header className="welcome-section">
        <h1>♉ Welcome, Taurus!</h1>
        <p>Feel the grounded strength of Earth and discover how stability shapes your journey.</p>
      </header>

      <nav className="taurus-nav">
        <ul>
          <li><a href="#info">🔆 Overview</a></li>
          <li><a href="#traits">🌟 Traits</a></li>
          <li><a href="#horoscope">🔮 Horoscope</a></li>
          <li><a href="#calendar">🌕 Calendar</a></li>
        </ul>
      </nav>

      <section id="info" className="taurus-section">
        <h2>♉ Taurus – The Earthbound Stabilizer</h2>
        <p>Ruled by Venus, Taurus radiates with love, patience, and a strong connection to the physical world. A symbol of loyalty and endurance, Taurus builds solid foundations.</p>
        <ul>
          <li><strong>Date Range:</strong> April 20 – May 20</li>
          <li><strong>Element:</strong> Earth 🌍</li>
          <li><strong>Ruling Planet:</strong> Venus ♀</li>
          <li><strong>Symbol:</strong> The Bull ♉</li>
        </ul>
      </section>

      <section id="traits" className="taurus-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>🌱 Dependable</li>
              <li>🎨 Aesthetic</li>
              <li>💪 Persistent</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🐂 Stubborn</li>
              <li>💤 Resistant to change</li>
              <li>🎯 Possessive</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="horoscope" className="taurus-section">
        <h2>🔮 Your Horoscope</h2>
        <div className="toggle-buttons">
          <button onClick={() => setHoroscopeView("daily")} className={horoscopeView === "daily" ? "active" : ""}>Daily</button>
          <button onClick={() => setHoroscopeView("weekly")} className={horoscopeView === "weekly" ? "active" : ""}>Weekly</button>
        </div>
        {horoscopeView === "daily" ? (
          <div className="horoscope-card">
            <h3>🗓️ Daily Insight</h3>
            <p>Today is ideal for steady progress. Stay grounded and don’t rush important decisions.</p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>This week invites you to embrace routine. Use your practical side to organize and build.</p>
          </div>
        )}
      </section>

      <section id="calendar" className="taurus-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li><strong>🌸 Venus Harmony – May 12:</strong> Time to nurture relationships.</li>
            <li><strong>🌑 Lunar Eclipse – May 25:</strong> Reflect and realign your goals.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Taurus;
