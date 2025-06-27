import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import getZodiacSign from "../utils/getZodiacSign";
import "../assets/css/Profile.css";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [zodiacData, setZodiacData] = useState(null);
  const [zodiac, setZodiac] = useState("");

  useEffect(() => {
    if (!user) return;

    let sign = user.zodiac || user.zodiacSign;
    if (!sign && user.birthDate) {
      const [year, month, day] = user.birthDate.split("-").map(Number);
      sign = getZodiacSign(day, month);
    }
    setZodiac(sign);
    fetch("../../public/data/zodiac-info.json")
      .then((res) => res.json())
      .then((data) => {
        if (sign && data[sign]) {
          setZodiacData(data[sign]);
        }
      })
      .catch((err) => {
        console.error("Zodiac info fetch failed:", err);
      });
  }, [user]);

  if (!user) {
    return <p className="not-logged">🚫 Please log in first.</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>🌟 Your Profile</h2>
        <p>
          <strong>👤 Name:</strong> {user.firstName} {user.lastName}
        </p>
        <p>
          <strong>📧 Email:</strong> {user.email}
        </p>
        <p>
          <strong>🎂 Birthdate:</strong> {user.birthDate}
        </p>

        {zodiac && (
          <div className="zodiac-highlight">
            <p className="zodiac-name">
              ♈ Your Zodiac Sign: <strong>{zodiac}</strong>
            </p>
            {zodiacData ? (
              <div className="zodiac-details">
                <p>
                  <strong>Element:</strong> {zodiacData.element}
                </p>
                <p>
                  <strong>Planet:</strong> {zodiacData.planet}
                </p>
                <p>
                  <strong>Compatible Signs:</strong>{" "}
                  {zodiacData.compatible.join(", ")}
                </p>
                <p>
                  <strong>About You:</strong> {zodiacData.description}
                </p>
              </div>
            ) : (
              <p>Loading zodiac information...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
