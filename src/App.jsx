import { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'

import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Footer } from './components/layout/Footer'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
