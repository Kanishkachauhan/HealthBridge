import React from 'react'
import './About.css'

function About() {
  return (
    <div className="about-container">

      <div className="about-card">

        <h1 className="fade-in">About System</h1>

        <p className="slide-up delay1">
          The <strong>Doctor Appointment System</strong> is designed to simplify 
          the process of booking medical appointments.
        </p>

        <p className="slide-up delay2">
          Users can easily find doctors, schedule appointments, and manage 
          their bookings in a seamless and efficient way.
        </p>

        <p className="slide-up delay3">
          This system helps reduce waiting time and improves accessibility 
          to healthcare services through a smooth and user-friendly interface.
        </p>

        <p className="slide-up delay4">
          It ensures a fast, reliable, and convenient experience for users 
          anytime and anywhere.
        </p>

      </div>

    </div>
  )
}

export default About