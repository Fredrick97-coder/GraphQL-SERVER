import React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from './context/authContext'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
