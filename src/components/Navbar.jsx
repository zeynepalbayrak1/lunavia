import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../assets/css/Navbar.css";
import moonLogo from "../../public/img/moon.png";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const goToProfile = () => {
    navigate("/profile");
  };
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={moonLogo} alt="Lunavia Logo" className="logo" />
        <span className="site-title">Lunavia</span>
      </div>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          end
          className="nav-link"
          activeclassname="active"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/daily-horoscopes"
          className="nav-link"
          activeclassname="active"
          onClick={closeMenu}
        >
          Daily Horoscopes
        </NavLink>
        <NavLink
          to="/astro-calendar"
          className="nav-link"
          activeclassname="active"
          onClick={closeMenu}
        >
          Astro Calendar
        </NavLink>
        <NavLink
          to="/compatibility"
          className="nav-link"
          activeclassname="active"
          onClick={closeMenu}
        >
          Compatibility
        </NavLink>
        {!user && (
          <NavLink
            to="/register"
            className="nav-link login-register-link"
            activeclassname="active"
            onClick={closeMenu}
          >
            Login / Register
          </NavLink>
        )}
        {user && (
          <div className="user-menu">
            <div className="user-initial-avatar" onClick={goToProfile}>
              {user.firstName.charAt(0).toUpperCase()}
            </div>
            <FiLogOut
              size={20}
              color="white"
              onClick={handleLogout}
              style={{ cursor: "pointer", marginLeft: "10px" }}
              title="Log out"
            />
          </div>
        )}
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
    </header>
  );
};

export default Navbar;
