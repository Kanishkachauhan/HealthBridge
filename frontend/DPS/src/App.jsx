import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Headers from './components/Header'
import Footer from './components/Footer'
import Login from './components/Sign/Login'
import Register from './components/Sign/Register'
import Patient from './components/Patient'  
import Doctors from './components/Doctors'
import About from './components/About'  

function App() {
  return (
    <BrowserRouter>

      <Headers />

      <Routes>
        <Route path='/' element={<Patient />} />
          <Route path='/doctors' element={<Doctors />} />
    
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />}/>
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App