import React from 'react'
import './nav.css'
import {ImHome} from 'react-icons/im'
import {ImUser} from 'react-icons/im'
import {HiDesktopComputer} from 'react-icons/hi'
import {RiServiceFill} from 'react-icons/ri'
import {MdPermContactCalendar} from 'react-icons/md'
import {useState} from 'react'
import {BsBook} from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><ImHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><ImUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiDesktopComputer /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBook /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar /></a>

    </nav>
  )
}

export default Nav
