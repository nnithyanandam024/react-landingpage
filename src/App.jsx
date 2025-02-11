import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Testimonial from './pages/Testimonial.jsx'
import Navbar from './components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar/>
    
    <div className="App">

    { 
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/testimonial" element={<Testimonial />} />
</Routes> }
    </div>
     

    </>
  )
}



export default App
