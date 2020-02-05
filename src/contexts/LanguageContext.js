import React, { Component, createContext } from 'react'

export const LanguageContext = createContext()

export class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    this.state = { language: 'french' }
  }

  changeLanguage(e) {
    this.setState({ language: e.target.value })
  }

  render() {
    return (
      <LanguageContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}
