import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Temperature from './pages/Temperature'
import './App.css'
import './components/ScrollReveal.css'
import { initScrollReveal } from './utils/scrollReveal'

export default function App() {
  // Initialize scroll reveal
  React.useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/temperature" element={<Temperature />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
