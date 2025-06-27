import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DailyHoroscopes from "./pages/DailyHoroscope";
import AstroCalendar from "./pages/AstroCalendar";
import CompatibilityTest from "./pages/CompatibilityTest";
import LoginRegister from "./pages/LoginRegister";
import Profile from "./pages/Profile";
import Aries from "./components/Aries";
import Taurus from "./components/Taurus";
import Gemini from "./components/Gemini";
import Cancer from "./components/Cancer";
import Leo from "./components/Leo";
import Virgo from "./components/Virgo";
import Libra from "./components/Libra";
import Scorpio from "./components/Scorpio";
import Sagittarius from "./components/Sagittarius";
import Capricorn from "./components/Capricorn";
import Aquarius from "./components/Aquarius";
import Pisces from "./components/Pisces";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const toggleForm = () => setShowLogin(!showLogin);
  if (user) return <Dashboard user={user} />;

  return (
    <Router>
      <Navbar /> {/* Tüm sayfalarda görünecek */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daily-horoscopes" element={<DailyHoroscopes />} />
        <Route path="/astro-calendar" element={<AstroCalendar />} />
        <Route path="/compatibility" element={<CompatibilityTest />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aries" element={<Aries />} />
        <Route path="/taurus" element={<Taurus />} />
        <Route path="/gemini" element={<Gemini />} />
        <Route path="/cancer" element={<Cancer />} />
        <Route path="/leo" element={<Leo />} />
        <Route path="/virgo" element={<Virgo />} />
        <Route path="/libra" element={<Libra />} />
        <Route path="/scorpio" element={<Scorpio />} />
        <Route path="/sagittarius" element={<Sagittarius />} />
        <Route path="/capricorn" element={<Capricorn />} />
        <Route path="/aquarius" element={<Aquarius />} />
        <Route path="/pisces" element={<Pisces />} />
      </Routes>
      <Footer /> {/* Tüm sayfalarda görünecek */}
    </Router>
  );
}

export default App;
