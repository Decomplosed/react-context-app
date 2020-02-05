import React, { createContext } from 'react'

export const ThemeContext = createContext()

class ThemeProvider extends Comment {
  constructor(props) {
    super(props)
    this.state = { isDarkMode: true }
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
