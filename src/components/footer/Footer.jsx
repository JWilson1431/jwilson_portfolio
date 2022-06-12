import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer__logo'>Janet Wilson</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href="https://github.com/JWilson1431" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/janet-wilson-750608179/" target="_blank"><BsLinkedin /></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; Janet Wilson. All Rights Reserved. </small>
        </div>
    </footer>
  )
}

export default Footer