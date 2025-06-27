import React, { useState } from "react";
import "../assets/css/zodiac-signs.css/Leo.css";

const Leo = () => {
  const [horoscopeView, setHoroscopeView] = useState("daily");

  return (
    <div className="leo-container">
      <header className="welcome-section">
        <h1>♌ Welcome, Leo!</h1>
        <p>Shine like the sun and embrace the regal strength within you.</p>
      </header>

      <nav className="leo-nav">
        <ul>
          <li><a href="#info">🔆 Overview</a></li>
          <li><a href="#traits">🌟 Traits</a></li>
          <li><a href="#horoscope">🔮 Horoscope</a></li>
          <li><a href="#calendar">🌕 Calendar</a></li>
        </ul>
      </nav>

      <section id="info" className="leo-section">
        <h2>♌ Leo – The Majestic Leader</h2>
        <p>Ruled by the Sun, Leo radiates warmth, leadership, and unwavering confidence. As a fixed fire sign, Leo thrives on creativity and recognition.</p>
        <ul>
          <li><strong>Date Range:</strong> July 23 – August 22</li>
          <li><strong>Element:</strong> Fire 🔥</li>
          <li><strong>Ruling Planet:</strong> Sun ☀️</li>
          <li><strong>Symbol:</strong> The Lion ♌</li>
        </ul>
      </section>

      <section id="traits" className="leo-section">
        <h2>🌟 Traits</h2>
        <div className="traits-columns">
          <div>
            <h3>🌞 Strengths</h3>
            <ul>
              <li>👑 Confident</li>
              <li>🌟 Charismatic</li>
              <li>🔥 Passionate</li>
            </ul>
          </div>
          <div>
            <h3>🌑 Challenges</h3>
            <ul>
              <li>🎭 Attention-seeking</li>
              <li>🦁 Stubborn</li>
              <li>💥 Dramatic</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="horoscope" className="leo-section">
        <h2>🔮 Your Horoscope</h2>
        <div className="toggle-buttons">
          <button onClick={() => setHoroscopeView("daily")} className={horoscopeView === "daily" ? "active" : ""}>Daily</button>
          <button onClick={() => setHoroscopeView("weekly")} className={horoscopeView === "weekly" ? "active" : ""}>Weekly</button>
        </div>
        {horoscopeView === "daily" ? (
          <div className="horoscope-card">
            <h3>🗓️ Daily Insight</h3>
            <p>Your charm is magnetic today. Lead with heart, not ego.</p>
          </div>
        ) : (
          <div className="horoscope-card">
            <h3>📆 Weekly Forecast</h3>
            <p>This week invites self-expression and bold moves. Use your voice with care.</p>
          </div>
        )}
      </section>

      <section id="calendar" className="leo-section calendar-split">
        <div className="calendar-info">
          <h2>🌕 Astrological Calendar</h2>
          <ul>
            <li><strong>☀️ Sun Transit – July 23:</strong> Step into your personal spotlight.</li>
            <li><strong>🌑 New Moon – August 8:</strong> Set intentions for creativity.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Leo;