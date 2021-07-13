import React from 'react'
import { Link } from 'react-router-dom'
import Modals from './Modal'
import Modal from './Modal'

export default function Navbar() {
  return (
    <div>
 {/* <Modals /> Replace with a specific nav bar */}
        <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          
  
    </div>

  )
}
