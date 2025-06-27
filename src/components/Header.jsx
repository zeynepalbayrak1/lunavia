import React from "react";

const Header = () => (
  <header id="daily" className="daily-header d-flex align-items-center">
    <div className="container text-center position-relative">
      <h1 className="display-4 fw-bold fs-4">Daily Horoscope</h1>
      <p className="lead mx-auto my-4 fs-5" style={{ maxWidth: "600px" }}>
        Check your zodiac sign's daily insights into love, career, health, lucky
        color, and more.
      </p>
    </div>
  </header>
);

export default Header;
