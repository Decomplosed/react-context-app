import React, { createContext } from 'react'

const ThemeContext = createContext()

class ThemeProvider extends Comment {
  render() {
    <ThemeContext.Provider>{this.props.children}</ThemeContext.Provider>
  }
}

export default ThemeProvider
