import React, { useState } from 'react'
import { auth } from '../../firebase'
function Register() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const config = {
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
      handleCodeInApp: true,
    }
    const result = await auth.sendSignInLinkToEmail(email, config)
    console.log(result)

    // save user email to local storage
    window.localStorage.setItem('emailFormRegistration', email)

    // clear state
    setEmail('')
    setLoading('')
  }

  return (
    <div className="container p-5">
      <h4>Register Page</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ width: '60%' }}>
          <label className="color-secondary">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter email"
            disabled={loading}
          />
        </div>
        <button
          className="btn btn-raised btn-primary mt-3"
          disabled={!email || loading}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Register
