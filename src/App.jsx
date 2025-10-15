import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Footer } from './components/layout/Footer'
import { About } from './components/sections/About'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <Hero/>
        <About/>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
