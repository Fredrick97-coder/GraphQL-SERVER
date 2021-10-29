import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    console.log('Submit')
  }

  return (
    <div className="container p-5">
      <div className="row p-5">
        <h4>Login Page</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ width: '60%' }}>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter email"
              disabled={loading}
            />
          </div>
        </form>
        <h3>{email}</h3>
      </div>
    </div>
  )
}

export default Login
