import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const values = {
    theme,
    setTheme
  }
  useEffect(() => {
    localStorage.setItem('theme', theme)
    return () => {
      localStorage.removeItem('theme')
    }
  }, [theme])


  return <ThemeContext.Provider value={values}>
    {children}
  </ThemeContext.Provider>
}

const useTheme = () => useContext(ThemeContext)
export  {useTheme, ThemeProvider}