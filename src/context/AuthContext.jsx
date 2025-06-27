import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Sayfa yenilense bile kullanıcıyı localStorage'dan yükleyelim
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (savedUser) setUser(savedUser);
  }, []);

  // Giriş yapan kullanıcıyı set et ve localStorage'a kaydet
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  // Çıkış yap
  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
