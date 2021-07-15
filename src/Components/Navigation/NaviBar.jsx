import React from 'react'
import { Link } from 'react-router-dom'
import Font from 'react-font'

export default function NaviBar() {
  return (
    <div>
      {/* <Modals /> Replace with a specific nav bar */}
        <Font family='Archivo Narrow'>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/weightlog">Weight-Log</Link>
         </Font>
   
      </div>
    


  )
}
