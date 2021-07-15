import React from 'react'
import Font from 'react-font'
import {AiFillGithub, AiFillLinkedin,AiFillMail} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className="site-footer">
      <address>
        <Font family='Archivo Narrow' weight={700}>
          <p>&copy; The Banned Lunk </p>
          <p> If you want to shoot the breeze on all things fitness and nutrition related contact me using the links below</p>
        </Font>
          <a href="https://github.com/keyy123/MaintenanceCalculator/"><AiFillGithub value={{ className: 'react-icons GH' }} /></a>
          <a href="https://www.linkedin.com/in/kheyyon-parker-b98739179/"><AiFillLinkedin value={{className: 'react-icons LI'}}/></a>
          <a href="mailto:kheyyon.parker@gmail.com"><AiFillMail value={{className: 'react-icons mail'}}/></a>
      </address>
    </div>
  )
}
