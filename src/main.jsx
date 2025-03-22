
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router  future={{ v7_startTransition: true,  v7_relativeSplatPath: true }} >
    <App />
   </Router>
  </React.StrictMode>,
)
