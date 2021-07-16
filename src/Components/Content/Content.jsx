import React from 'react'
import Modals from '../Navigation/Modal'
import {FcCalculator} from 'react-icons/fc'
import {Link} from 'react-router-dom'
export default function Content() {


  return (
    <>
    <div className ="content bg">
      <div className="content p">

      
          <Modals />
        
        
          </div>
      </div>
     <Link to="/calculator"><button className="calcBtn"><FcCalculator/>Calculator</button></Link> 
          
 
</>         
  )
}
