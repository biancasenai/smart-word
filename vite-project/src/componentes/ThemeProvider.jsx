import React from 'react'
import { useTheme } from './ThemeContext'

const ThemeProvider = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button onClick={toggleTheme}>
      Trocar para {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}
export default ThemeProvider