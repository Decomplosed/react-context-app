import React, { createContext } from 'react'
import useToggleState from '../hooks/useToggleState'

export const ThemeContext = createContext()

export function ThemeProvider(props) {
  const [isDarkMode, toggle] = useToggleState(false)

  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode })
  }

    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {props.children}
      </ThemeContext.Provider>
    )
}
