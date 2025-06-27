import React, { useState } from "react";
import "../assets/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const zodiacSigns = [
  { name: "Aries", img: "img/aries.jpg", link: "./html/aries.html" },
  { name: "Taurus", img: "img/taurus.png", link: "./html/taurus.html" },
  { name: "Gemini", img: "img/gemini.png", link: "./html/gemini.html" },
  { name: "Cancer", img: "img/cancer.png", link: "./html/cancer.html" },
  { name: "Leo", img: "img/leo.png", link: "./html/leo.html" },
  { name: "Virgo", img: "img/virgo.png", link: "./html/virgo.html" },
  { name: "Libra", img: "img/libra.png", link: "./html/libra.html" },
  { name: "Scorpio", img: "img/scorpio.png", link: "./html/scorpio.html" },
  {
    name: "Sagittarius",
    img: "img/sagittarius.png",
    link: "./html/sagittarius.html",
  },
  {
    name: "Capricorn",
    img: "img/capricornus.png",
    link: "./html/capricorn.html",
  },
  { name: "Aquarius", img: "img/aquarius.png", link: "./html/aquarius.html" },
  { name: "Pisces", img: "img/pisces.png", link: "./html/pisces.html" },
];

const ZodiacSection = () => {
  return (
    <section className="main-zodiac">
      <h2 className="mb-5">What is Your Zodiac?</h2>
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
          {zodiacSigns.map(({ name, img, link }) => (
            <div key={name} className="col">
              <div
                className="zodiac-icon"
                style={{ border: "5px solid #D4AF37" }}
              >
                <a href={link}>
                  <img src={img} alt={name} />
                </a>
              </div>
              <div className="zodiac-name">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacSection;
