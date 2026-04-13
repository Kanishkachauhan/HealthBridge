import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate = useNavigate()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Email:', email)
        console.log('Password:', password)
        console.log('Role:', role)
        if(!email || !password || !role){
            alert('Please fill all fields')
            return
        }
        localStorage.setItem('user', JSON.stringify({email, password, role}))
        alert('Login successful!')
        if(role === 'doctor'){
            navigate('/doctors')
        } else {
            navigate('/')
        }
    }
     function roleChange(e){
  const value = e.target.value
  setRole(value)
  console.log(value)   
}

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <select onChange={(e)=> roleChange(e)} value={role} className="select">
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>


          <button type="submit">Submit</button>

        </form>

        
        <p className="register-text">
          Don't have an account? 
          <Link to="/register">Register</Link>
        </p>

      </div>
    </div>
  )
}

export default Login