import { createContext } from 'react'
import { DARK } from './constants/theme'

const ThemeContext = createContext(DARK)

export const ThemeProvider = ThemeContext.Provider

export default ThemeContext