import React from 'react'
import './patient.css';
import { useNavigate } from 'react-router-dom'

function Patient() {

  const navigate = useNavigate()

  return (
    <div className="home-container">

     
      <div className="hero">
        <h1>HealthBridge</h1>
        <p>Bridging Patients & Doctors Seamlessly</p>
      </div>

     
      <div className="card-container">

        <div className="card" onClick={() => navigate('/doctors')}>
          <h2>👨‍⚕️</h2>
          <h3>Find Doctors</h3>
          <p>Browse and find trusted doctors near you</p>
        </div>

        <div className="card" onClick={() => navigate('/medicines')}>
          <h2>💊</h2>
          <h3>Medicines Info</h3>
          <p>Get information about medicines and usage</p>
        </div>

        <div className="card" onClick={() => navigate('/booking')}>
          <h2>📅</h2>
          <h3>Book Appointment</h3>
          <p>Schedule your appointment easily</p>
        </div>

        <div className="card" onClick={() => navigate('/appointments')}>
          <h2>📋</h2>
          <h3>My Appointments</h3>
          <p>View and manage your bookings</p>
        </div>

      </div>

    </div>
  )
}

export default Patient