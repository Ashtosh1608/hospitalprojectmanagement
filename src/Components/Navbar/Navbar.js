import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='navb'>
      <div className='rightnavb'>
      <p>Navbar</p>

      </div>
      <div className='leftnavb'>
        <p>Home</p>
        <p>Contact</p>
        <p>Logout</p>

      </div>
    </div>
  )
}
