import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div><NavLink to="/" />Logo</div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Login">Log in</NavLink></li>
            <li><NavLink to="/Createpost">Create Post</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar