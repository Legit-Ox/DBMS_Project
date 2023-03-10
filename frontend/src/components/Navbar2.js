import React, { useState } from 'react'
import { GiKnifeFork } from "react-icons/gi";
import { Link } from 'react-router-dom'
import "./nav.css"
const Navbar2 = () => {
    const [Mobile, setMobile] = useState(false)
  return (
    <nav className='navbar'>
        
        <h3 className='logo'>Logo</h3>

        <ul className={Mobile ? "nav-links-mobile" :"nav-links" } onClick={() => setMobile(false)}>
            <Link to='/table'>
                <li>Table</li>
            </Link>
            <Link to='/menu'>
                <li>Menu</li>
            </Link>
            <Link to='/cart'>
                <li>Cart</li>
            </Link>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile) }>
            {Mobile? <GiKnifeFork /> : <GiKnifeFork />}
        </button>
        </ul>
        
    </nav>
  )
}

export default Navbar2
