import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
        <div>
            <h1>DESTINATION</h1>
        </div>
        <ul className='nav'> 
            <li><Link to = {"/home"}>Home</Link></li>
            <li><Link to = {"/contact"}>Contact</Link></li>
            <li><Link to = {"/about"}>About</Link></li>
            <li><Link to = {"/product"}>Category</Link></li>
        </ul>
    </nav>
  )
}

export default Header