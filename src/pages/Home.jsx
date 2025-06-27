import React, { useEffect, useState } from "react";
import "../../src/assets/css/Home.css";
import horoscopes from "../data/horoscopes.json";
import FindZodiac from "../components/FindZodiac";
import WelcomeScreen from "../components/WelcomeScreen";
import Navbar from "../components/Navbar";
import DidYouKnow from "../components/DidYouKnow";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Home = () => {
  const words = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricornus",
    "Aquarius",
    "Pisces",
  ];

  // daily sign ve intro zodiac bölümü
  const [dailySign, setDailySign] = useState(null);

  useEffect(() => {
    const today = new Date();
    const index = today.getDate() % horoscopes.length;
    setDailySign(horoscopes[index]);
  }, []);

  return (
    <>
      <Navbar />
      <WelcomeScreen />
      {dailySign && (
        <section className="daily-sign-section">
          <div className="daily-sign-left">
            <h2>Sign of the Day</h2>
            <div className="sign-box">
              <h3>{dailySign.name}</h3>
              {dailySign.image && (
                <img
                  src={dailySign.image}
                  alt={dailySign.name}
                  style={{
                    maxWidth: "150px",
                    height: "auto",
                    marginBottom: "15px",
                  }}
                />
              )}
              <p>{dailySign.description}</p>
            </div>
          </div>
          <div className="daily-sign-right">
            <h2>Introduction to Zodiac Signs</h2>
            <p>
              Astrology is an ancient belief system that connects the positions
              of celestial bodies with human behavior, personality, and destiny.
              At its core, astrology divides the sky into twelve zodiac signs,
              each representing a unique archetype influenced by the time and
              place of one’s birth.
              <br />
              The zodiac signs—ranging from Aries to Pisces—are categorized by
              four elements: fire, earth, air, and water. Each element and sign
              is associated with particular traits, tendencies, and
              compatibility with others.
              <br />
              <br />
              Whether you're a curious skeptic or a passionate believer, the
              zodiac provides a symbolic lens through which many explore
              themselves and the universe around them.
            </p>
          </div>
        </section>
      )}
      <FindZodiac />
      <DidYouKnow />
    </>
  );
};

export default Home;
