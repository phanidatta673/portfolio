import { useState } from 'react'
import { motion } from 'framer-motion'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black w-full">
      {/* Main Content */}
      <main className="w-full">
        {/* Hero Section */}
        <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center w-full max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Krishna Chivukula
              <span className="text-accent">.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Software Engineer passionate about building scalable systems and creating impactful user experiences.
              Currently focused on distributed systems and cloud computing.
            </p>
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              View My Work
            </button>
          </motion.div>
        </section>

        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
