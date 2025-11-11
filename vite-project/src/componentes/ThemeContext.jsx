import React, { createContext, useState, useContext } from 'react'

// Cria o contexto
const ThemeContext = createContext()

// Provider que gerencia o tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

// Hook para usar o contexto facilmente
export const useTheme = () => useContext(ThemeContext)

export default ThemeContext;