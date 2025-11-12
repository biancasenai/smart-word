import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  // Carrega o tema do localStorage ou usa o padrão "light"
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => setDarkMode((prev) => !prev);

// Alterna entre os temas e salva no localStorage
const toggleTheme = () => {
  setDarkMode((prev) => {
    const newTheme = !prev;
    localStorage.setItem("darkMode", newTheme); // Salva no localStorage
    return newTheme;
  });
};

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  ); // ← estava faltando este fechamento aqui!
}

// Hook para usar o contexto
export function UseTheme() {
  return useContext(ThemeContext);
}
