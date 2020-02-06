import React, { createContext } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider() {
    this.state = { isDarkMode: false }
    this.toggleTheme = this.toggleTheme.bind(this)

  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode })
  }

    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    )
}
