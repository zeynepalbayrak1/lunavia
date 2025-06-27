import React, { useState, useEffect } from "react";
import "../assets/css/AstroCalendar.css";
import Calendar from "../components/Calendar";

const insights = [
  {
    title: "General Monthly Overview",
    content:
      "This month’s celestial landscape brings a dynamic mix of energy shifts—perfect for inner transformation and external action. With Mercury preparing for retrograde and both a New Moon and a Full Moon appearing, you’ll feel cosmic forces pushing you to reflect, reset, and realign. Use this time to reimagine your goals, deepen communication, and embrace growth with clarity.",
  },
  {
    title: "New Moon in Gemini – June 10, 2025",
    content:
      "The New Moon in Gemini opens a portal for fresh ideas and new conversations. This lunar phase encourages writing, learning, and sharing your thoughts with clarity. It’s a powerful moment to set intentions related to personal projects or intellectual pursuits. Mutable signs (Gemini, Virgo, Sagittarius, Pisces) may feel especially inspired or scattered—focus is your superpower now.",
  },
  {
    title: "Full Moon in Sagittarius – June 21, 2025",
    content:
      "This fiery Full Moon brings emotional revelations and bold decisions. You may feel called to seek truth or challenge outdated beliefs. It’s also a time when long-distance travel, philosophy, or higher education come into focus. Sagittarius invites you to expand—not just geographically, but spiritually.",
  },
  {
    title: "Mercury Retrograde – June 30, 2025",
    content:
      "Mercury retrograde asks you to slow down and reflect. It's not the ideal time for major purchases or contract signings, but it’s excellent for reviewing past projects and reconnecting with old friends. Watch out for miscommunications and tech glitches. Gemini and Virgo especially should practice patience and double-check their plans.",
  },
];

function AstroCalendarPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % insights.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="image-container">
        <img
          src="../../public/img/bg5.jpg"
          alt="Arka Plan"
          className="background-image"
        />
        <div className="overlay-color"></div>
        <div className="overlay-text">
          <h2>🎴✨ Your Monthly Map to the Stars 🌟🗺️</h2>
          <h5>
            🌙💫 Follow the moon, trace the planets, and align with the cosmos.
          </h5>
        </div>
      </div>
      <div className="slider-container">
        <div className="auto-slider-container">
          <div className="auto-slider-card">
            <h3>{insights[currentIndex].title}</h3>
            <p>{insights[currentIndex].content}</p>
          </div>
        </div>
      </div>
      {<Calendar />}
    </>
  );
}

export default AstroCalendarPage;
