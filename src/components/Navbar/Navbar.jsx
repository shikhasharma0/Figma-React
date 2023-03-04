import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
   <nav>
    <a href='#' className='logo'>
        DESIGN<span className='red'> ****UI Player****</span>
    </a>
    <ul>
        <li>
            <a href='#'>Header </a>
        </li>
 

        <li>
            <a href='#'>Info </a>
        </li>
 
        <li>
            <a href='#'>About </a>
        </li>

        <li>
            <a href='#'>Blog </a>
        </li>

    </ul>
   </nav>
  )
}

export default Navbar
