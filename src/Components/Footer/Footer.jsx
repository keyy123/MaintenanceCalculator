import React from 'react'
import Font from 'react-font'
import {AiFillGithub, AiFillLinkedin,AiFillMail} from 'react-icons/ai'
export default function Footer() {
  
  return (
    <div className="site-footer">
      <address>
        <Font family='Archivo Black' weight={700}>
          <p>&copy; The Banned Lunk </p>
        </Font>
        <Font family='Archivo Narrow' weight={400}>
          <div id="contact-me">
           
            <p id="contact-info"> Contact me at the following:<br/>Irvington NJ <br/> 973-123-4567 <br /> hi</p>
            <p id="contact-links">
              Contact me using the links below
              <div className = "links">
              <a href="https://github.com/keyy123/MaintenanceCalculator/"><AiFillGithub value={{ className: 'react-icons GH' }} /></a>
              <a href="https://www.linkedin.com/in/kheyyon-parker-b98739179/"><AiFillLinkedin value={{className: 'react-icons LI'}}/></a>
              <a href="mailto:kheyyon.parker@gmail.com"><AiFillMail value={{ className: 'react-icons mail' }} /></a>
            </div>
            </p>
            <p id="something">something</p>
          </div>
         
        </Font>
     
         
      </address>
    </div>
  )
}
