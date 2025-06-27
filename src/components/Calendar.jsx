import React, { useState, useMemo } from "react";
import dayjs from "dayjs";
import "../assets/css/AstroCalendar.css";

const EVENTS = {
  "2025-06-10": {
    title: "New Moon in Gemini",
    desc: "The New Moon in Gemini marks a time for fresh beginnings in communication, learning, and social connections. Gemini, ruled by Mercury, governs how we think, speak, and gather information. This lunar phase encourages curiosity, adaptability, and exchanging ideas. It’s an excellent moment to start new projects involving writing, teaching, or networking. With the mutable air energy, you may feel inspired to explore different perspectives and stay mentally active. Use this time to set intentions related to expanding your knowledge and improving your communication skills.",
  },
  "2025-06-21": {
    title: "Full Moon in Sagittarius",
    desc: "The Full Moon in Sagittarius brings a surge of adventurous energy and a thirst for truth. Sagittarius, ruled by Jupiter, is associated with exploration, higher learning, and spiritual growth. This lunar phase often highlights the need to break free from limitations and see the bigger picture. Emotions may rise around beliefs, freedom, or long-distance connections. It’s a powerful time for releasing outdated views and embracing personal growth through experience and wisdom. Trust your inner compass and aim for higher meaning in your actions.",
  },
  "2025-06-30": {
    title: "Mercury Retrograde",
    desc: "Mercury Retrograde is a period when the planet Mercury appears to move backward in the sky. Astrologically, it's known for disrupting communication, technology, and travel. Plans may change unexpectedly, messages get lost, and misunderstandings are common. It's not an ideal time to start new projects or sign important contracts. However, it's a powerful time for reflection, revisiting the past, and tying up loose ends. Use this phase to slow down, review your goals, and reconnect with people or ideas you’ve set aside. Patience and flexibility are key.",
  },
  "2025-07-05": {
    title: "New Moon in Cancer",
    desc: "The New Moon in Cancer invites you to turn inward and nurture your emotional world. Cancer is ruled by the Moon itself, symbolizing home, family, and deep sensitivity. This lunar phase is ideal for setting intentions related to emotional healing, personal security, and close relationships. It's a time to create comfort in your environment and connect with what truly makes you feel safe and loved. Trust your intuition—it’s stronger now. Let this New Moon guide you to care for yourself and those you hold dear, both emotionally and spiritually.",
  },
  "2025-07-17": {
    title: "Mars enters Leo",
    desc: "When Mars enters Leo, boldness, passion, and creative drive surge. Mars, the planet of action and ambition, feels fiery and confident in Leo, a sign ruled by the Sun. This transit fuels self-expression, leadership, and the desire to be seen and admired. You may feel more motivated to pursue goals that align with your heart and personal pride. It’s a great time for artistic projects, romance, and taking center stage in your life. Just watch out for stubbornness or ego clashes—lead with confidence, not control.",
  },
};

function getMonthMatrix(year, month) {
  const startOfMonth = dayjs(`${year}-${month}-01`);
  const startDay = startOfMonth.startOf("week"); // pazar
  const endDay = startOfMonth.endOf("month").endOf("week");

  let day = startDay;
  const weeks = [];

  while (day.isBefore(endDay)) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(day);
      day = day.add(1, "day");
    }
    weeks.push(week);
  }
  return weeks;
}

export default function AstroCalendar() {
  const [monthIndex, setMonthIndex] = useState(0); // 0 = Haziran, 1 = Temmuz
  const [modalEvent, setModalEvent] = useState(null);
  const year = 2025;
  const month = monthIndex === 0 ? 6 : 7; // Haziran veya Temmuz
  const monthName = dayjs(`${year}-${month}-01`).format("MMMM");
  const weeks = useMemo(() => getMonthMatrix(year, month), [year, month]);
  const openEvent = (dateStr) => {
    if (EVENTS[dateStr]) setModalEvent({ date: dateStr, ...EVENTS[dateStr] });
  };

  return (
    <div className="container-calendar">
      <div className="calendar-container">
        <h2>Astro Calendar - {monthName} 2025</h2>
        <div className="btn-group">
          <button
            className={monthIndex === 0 ? "active" : ""}
            onClick={() => setMonthIndex(0)}
          >
            This Month
          </button>
          <button
            className={monthIndex === 1 ? "active" : ""}
            onClick={() => setMonthIndex(1)}
          >
            Next Month
          </button>
        </div>
        <div className="weekdays">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="calendar-grid">
          {weeks.map((week, wi) =>
            week.map((day) => {
              const dayStr = day.format("YYYY-MM-DD");
              const isCurrentMonth = day.month() + 1 === month;
              const event = EVENTS[dayStr];
              return (
                <div
                  key={dayStr}
                  className={`day-cell ${isCurrentMonth ? "" : "disabled"}`}
                >
                  <div className="date">{day.date()}</div>
                  {event && (
                    <button
                      className="event-btn"
                      onClick={() => openEvent(dayStr)}
                    >
                      {event.title}
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
        {modalEvent && (
          <div className="modal-overlay" onClick={() => setModalEvent(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setModalEvent(null)}>
                ×
              </button>
              <h3>{modalEvent.title}</h3>
              <p>{modalEvent.desc}</p>
              <small>{dayjs(modalEvent.date).format("MMMM D, YYYY")}</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
