import React ,{useContext}from 'react'
import {useTheme} from '../context/ThemeContext'

function Header() {
  const {theme,setTheme} = useTheme()
  return (
    <>
    <div>Header</div>
    <div>Active Theme: {theme}</div>
    <button onClick={() => setTheme(theme => theme === 'dark' ? 'light':'dark')}>Change Theme</button>
    </>
  )
}

export default Header