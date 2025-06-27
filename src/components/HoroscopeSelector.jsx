import React, { useState } from "react";

const HoroscopeSelector = () => {
  const [sign, setSign] = useState("");
  const [day, setDay] = useState("today");
  const handleDayChange = (newDay) => setDay(newDay);

  return (
    <div className="text-center my-4">
      <div className="select-group daily-horoscope">
        <label htmlFor="signSelector" style={{ marginRight: "0.5rem" }}>
          Select your sign:
        </label>
        <select id="signSelector" onChange={(e) => setSign(e.target.value)}>
          <option value="" disabled selected>
            Choose a sign
          </option>
          {[
            "aries",
            "taurus",
            "gemini",
            "cancer",
            "leo",
            "virgo",
            "libra",
            "scorpio",
            "sagittarius",
            "capricorn",
            "aquarius",
            "pisces",
          ].map((sign) => (
            <option key={sign} value={sign}>
              {sign.charAt(0).toUpperCase() + sign.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="btn-group daily-horoscope my-3">
        {["yesterday", "today", "tomorrow"].map((d) => (
          <button
            key={d}
            className={`btn ${day === d ? "active" : ""}`}
            onClick={() => handleDayChange(d)}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>
      <div id="horoscopeText">
        {sign
          ? `Showing ${day} horoscope for ${sign}`
          : "Please select your sign and day."}
      </div>
    </div>
  );
};

export default HoroscopeSelector;
