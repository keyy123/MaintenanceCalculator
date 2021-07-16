import React from 'react'
import { Link } from 'react-router-dom'
import Font, {Text} from 'react-font'
import Header from '../Header/Header'

export default function NaviBar() {
  return (
<>    
    
      <Font family='Archivo Black'>
      <div className="site-nav">
        <img src="https://www.canva.com/design/DAEkX0FRMBA/G_Jn6JaJLrhafa-sZ3Rbdw/view?utm_content=DAEkX0FRMBA&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" className="site-logo"/>
          <Link to="/" className="site-header">
            <Header />
            
          </Link>
          
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
