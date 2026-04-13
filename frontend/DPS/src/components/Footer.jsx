import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-content">
        
        
        <div className="footer-left">
          
               <img 
  className="logo" 
  src="https://thumbs.dreamstime.com/b/doctor-appointment-icon-flat-style-vector-eps-doctor-appointment-icon-flat-style-vector-eps-154239786.jpg" 
  alt="logo"
/>
             
          <p>Your trusted doctor appointment platform.</p>
        </div>

       
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>

       
        <div className="footer-right">
          <h4>Contact</h4>
          <p>Email: support@docapp.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 DocApp. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;