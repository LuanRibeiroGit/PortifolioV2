import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

import { Header } from './components/layout/Header'
import { Hero } from './components/Hero'
import { Footer } from './components/layout/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <Hero/>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
