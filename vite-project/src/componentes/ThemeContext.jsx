// ThemeContext.jsx
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

  );
}

// Hook para usar o contexto facilmente
export const useTheme = () => useContext(ThemeContext)

export default ThemeContext;