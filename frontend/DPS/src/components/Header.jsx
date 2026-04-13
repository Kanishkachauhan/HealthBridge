import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'




function Header() {
  return (
    
        <header className='header'>
              
               <img 
  className="logo" 
  src="https://thumbs.dreamstime.com/b/doctor-appointment-icon-flat-style-vector-eps-doctor-appointment-icon-flat-style-vector-eps-154239786.jpg" 
  alt="logo"
/>
             
            <div className='header-div'>
            <h1>HealthBridge</h1>
            <nav>
            <ul className='nav-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            </nav>
            </div>
        </header>
      
    
  )
}

export default Header
