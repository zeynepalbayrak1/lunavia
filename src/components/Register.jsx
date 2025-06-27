import React, { useState } from "react";
import getZodiacSign from "../utils/getZodiacSign";
import "../assets/css/Forms.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    zodiac: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Doğum tarihi seçildiğinde burcu hesapla
    if (name === "birthDate") {
      const date = new Date(value);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const zodiacSign = getZodiacSign(day, month);

      setFormData((prev) => ({
        ...prev,
        [name]: value,
        zodiac: zodiacSign,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Eski kullanıcıları al
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Aynı e-posta ile kayıtlı kullanıcı var mı kontrol et
    const isEmailUsed = existingUsers.some(
      (user) => user.email === formData.email
    );

    if (isEmailUsed) {
      alert("An account with this email already exists.");
      return;
    }

    // Yeni kullanıcıyı ekle
    const updatedUsers = [...existingUsers, formData];

    // localStorage’a kaydet
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("You have successfully registered! Please sign in to continue.");

    // Formu temizle
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthDate: "",
      zodiac: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create account</h2>

      <input
        type="text"
        name="firstName"
        placeholder="Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Surname"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
        required
      />

      {formData.zodiac && (
        <p className="zodiac-info">
          🌟 Your Zodiac Sign:<strong>{formData.zodiac}</strong>
        </p>
      )}

      <button type="submit">Create account</button>
    </form>
  );
};

export default Register;
