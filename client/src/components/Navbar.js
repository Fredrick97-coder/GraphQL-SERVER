import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand me-2 font-weight-bold" to="/">
          Clark's Blog
        </Link>

        <div className="d-flex align-items-center">
          <Link to="/login">
            <button type="button" className="btn btn-link px-3 me-2">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button type="button" className="btn btn-primary me-3">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
