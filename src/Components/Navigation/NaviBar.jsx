import React from 'react'
import { Link } from 'react-router-dom'
import Font, {Text} from 'react-font'
import Header from '../Header/Header'

export default function NaviBar() {
  return (
<>    
    
      <Font family='Archivo Black'>
        <div className="site-nav">
          
        {/* <img src='./img/LUNK1.png' className="site-logo"/> */}
          
            <Header />
            
          
          
          <Link to="/" className="link Home">
            <Text family='Archivo Narrow'>Home</Text>
          </Link>
          <Link to="/calculator" className="link Calculator ">
            <Text family='Archivo Narrow'>Calculator</Text>
          </Link>
            </div>
         </Font>
      
  </>  


  )
}
