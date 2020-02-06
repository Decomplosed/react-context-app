import React, { createContext } from 'react'
import useToggleState from '../hooks/useToggleState'

export const ThemeContext = createContext()

export function ThemeProvider(props) {
    this.state = { isDarkMode: false }
    this.toggleTheme = this.toggleTheme.bind(this)

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
