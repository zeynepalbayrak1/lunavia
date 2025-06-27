import React, { useState } from "react";
import horoscopes from "../data/find-zodiac.json";
import "../assets/css/Home.css"; // Stil dosyan

const getZodiacSign = (month, day) => {
  for (let sign of horoscopes) {
    const [startMonth, startDay] = sign.startDate.split("-").map(Number);
    const [endMonth, endDay] = sign.endDate.split("-").map(Number);

    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay) ||
      (startMonth > endMonth && (month === startMonth || month === endMonth))
    ) {
      return sign;
    }
  }
  return null;
};

const FindZodiac = () => {
  const [birthDate, setBirthDate] = useState("");
  const [selectedSign, setSelectedSign] = useState(null);

  const handleFindSign = () => {
    if (!birthDate) return;
    const date = new Date(birthDate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const foundSign = getZodiacSign(month, day);
    setSelectedSign(foundSign);
  };

  return (
    <section className="find-zodiac-section text-center">
      <h2 className="mb-3">Find Your Zodiac Sign</h2>
      <input
        type="date"
        className="form-control w-25 mx-auto mb-3"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleFindSign}>
        Find Sign
      </button>
      {selectedSign && (
        <div className="sign-box mt-4">
          <h3>{selectedSign.name}</h3>
          {selectedSign.image && (
            <img
              src={selectedSign.image}
              alt={selectedSign.name}
              style={{ maxWidth: "150px", height: "auto", margin: "10px 0" }}
            />
          )}
          <p>{selectedSign.description}</p>
        </div>
      )}
    </section>
  );
};

export default FindZodiac;
