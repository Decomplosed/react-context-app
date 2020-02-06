import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export function LanguageProvider() {
  const [language, setLanguage] = useState('english')
  const changeLanguage = e => setLanguage(e.target.value)

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {this.props.children}
    </LanguageContext.Provider>
  )
}
