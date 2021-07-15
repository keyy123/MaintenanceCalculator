import React from 'react'
import { Link } from 'react-router-dom'


export default function NaviBar() {
  return (
    <div>
      {/* <Modals /> Replace with a specific nav bar */}
      
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/weightlog">Weight-Log</Link>
  
   
      </div>
    


  )
}
