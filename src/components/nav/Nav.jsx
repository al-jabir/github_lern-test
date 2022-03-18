import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='menu'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">portfolio</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/service">Service</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav