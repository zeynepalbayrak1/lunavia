import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import "../assets/css/Forms.css";

export default function LoginRegister() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="container-form">
      <div className="stars"></div>
      <div className="form-container ">
      <div className="form-toggle">
        <button onClick={() => setIsRegister(false)} className={!isRegister ? "active" : ""}>Login</button>
        <button onClick={() => setIsRegister(true)} className={isRegister ? "active" : ""}>Create account</button>
      </div>
      {isRegister ? <Register /> : <Login />}
    </div>
    </div>
    
  );
}
