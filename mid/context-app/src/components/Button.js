import React ,{useContext}from 'react'
import {useTheme} from '../context/ThemeContext'
function Button() {
  const {theme,setTheme} = useTheme()
  console.log(theme)
  return (
    <>
    
    <div>Active Theme: {theme}</div>
    <button onClick={() => setTheme(theme => theme === 'dark' ? 'light':'dark')}>Change Theme</button>
    </>

  )
}

export default Button