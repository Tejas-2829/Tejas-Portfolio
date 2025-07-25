import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import SkillsSection from './Components/SkillsSection'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <HeroSection />
    <SkillsSection />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
