import React, { createContext } from 'react'

const ThemeContext = createContext()

class ThemeProvider extends Comment {
  constructor(props) {
    super(props)
    this.state = {isDarkMode: true}
  }
  render() {
    <ThemeContext.Provider value={{...this.state}}>{this.props.children}</ThemeContext.Provider>
  }
}

export default ThemeProvider
