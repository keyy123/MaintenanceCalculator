import React from 'react'
import { Link } from 'react-router-dom'
import Font from 'react-font'

export default function Header() {
  return (
<>
      
      <Link to="/">
        <Font family = "Archivo Black">
          <h1 className="header-text"> The Lunk-i-nator 3000 </h1>
        </Font>
      </Link>
        
       
      </>
  )
}
