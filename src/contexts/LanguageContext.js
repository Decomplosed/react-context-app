import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export LanguageProvider() {
    this.state = { language: 'english' }
    this.changeLanguage = this.changeLanguage.bind(this)

  changeLanguage(e) {
    this.setState({ language: e.target.value })
  }

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
)
