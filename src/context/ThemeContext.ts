import { createContext } from 'react'

const defaultVal = {
  currentTheme: 'light',
  changeCurrentTheme: (newTheme: 'light' | 'dark') => {}
}

const ThemeContext = createContext(defaultVal)

export default ThemeContext
