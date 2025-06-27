import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/WelcomeScreen.css";

const zodiacSigns = [
  { name: "Aries", icon: "♈" },
  { name: "Taurus", icon: "♉" },
  { name: "Gemini", icon: "♊" },
  { name: "Cancer", icon: "♋" },
  { name: "Leo", icon: "♌" },
  { name: "Virgo", icon: "♍" },
  { name: "Libra", icon: "♎" },
  { name: "Scorpio", icon: "♏" },
  { name: "Sagittarius", icon: "♐" },
  { name: "Capricorn", icon: "♑" },
  { name: "Aquarius", icon: "♒" },
  { name: "Pisces", icon: "♓" },
];

export default function WelcomeScreen() {
  const [selectedSign, setSelectedSign] = useState(null);
  const navigate = useNavigate();

  const handleSignClick = (sign) => {
    setSelectedSign(sign);
  };

  return (
    <div className="container">
      <div className="stars"></div>
      <div className="content">
        <h1 className="title">Welcome to the World of Astrology!</h1>
        <p className="subtitle">
          Discover your daily and weekly horoscope, compatibility tests, and
          personalized guidance.
        </p>

        <div className="signsContainer">
          {zodiacSigns.map(({ name, icon }) => (
            <button
              key={name}
              className={`signButton ${
                selectedSign === name ? "selected" : ""
              }`}
              onClick={() => handleSignClick(name)}
              title={name}
            >
              <span className="signIcon">{icon}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
        <div className="buttonsContainer">
          <button
            className="mainButton"
            onClick={() => {
              if (selectedSign) navigate(`/${selectedSign.toLowerCase()}`);
              else alert("Please select your sign first!");
            }}
          >
            Select Your Sign
          </button>
          <button
            className="mainButton mainButtonLogin"
            onClick={() => navigate("/register")}
          >
            Sign Up / Log In
          </button>
        </div>
      </div>
    </div>
  );
}
