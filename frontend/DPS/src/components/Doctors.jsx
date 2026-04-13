import React from 'react'
import './Doctors.css'
import { useNavigate } from 'react-router-dom'

function Doctors() {

  const navigate = useNavigate()

  return (
    <div className="doctors-container">

    \
      <div className="hero">
        <h1>Find Your Doctor</h1>
        <p>Choose from different categories</p>
      </div>

    
      <div className="card-container">

        <div className="card" onClick={() => navigate('/all-doctors')}>
          <h2>👨‍⚕️</h2>
          <h3>All Doctors</h3>
          <p>Browse all available doctors</p>
        </div>

        <div className="card" onClick={() => navigate('/specialists')}>
          <h2>❤️</h2>
          <h3>Specialists</h3>
          <p>Find doctors by specialization</p>
        </div>

        <div className="card" onClick={() => navigate('/top-rated')}>
          <h2>⭐</h2>
          <h3>Top Rated</h3>
          <p>Best rated doctors</p>
        </div>

        <div className="card" onClick={() => navigate('/available')}>
          <h2>📅</h2>
          <h3>Available Today</h3>
          <p>Doctors available today</p>
        </div>

      </div>

    </div>
  )
}

export default Doctors