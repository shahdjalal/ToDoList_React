import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import style from './Footer.module.css'
export default function Footer() {

  


  return (
  <>
     <footer>
  <div className="container">
    <p>© 2025 Shahd Jalal. All rights reserved.</p>
    <div className={style.socialIcons}>
      <a href="https://github.com/shahdjalal/To_Do_List_App/tree/main" target="_blank"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/shahd-marouf/" target="_blank"><FaLinkedin /></a>
      <a href="#" ><FaTwitter /></a>
    </div>
  </div>
</footer>

</>
  )
}
