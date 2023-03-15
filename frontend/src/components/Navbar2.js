import React, { useState } from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'
import { GiKnifeFork } from "react-icons/gi"


const Navbar2 = () => {
    const [Mobile, setMobile] = useState(false)
  return (
    <>
    <nav className='navbar my-2'>
        
        <h3 className='logo'>Plate Tracker</h3>

        <ul className={Mobile ? "nav-links-mobile" :"nav-links" } onClick={() => setMobile(false)}>
            <Link to='/home' >
                <li>Home</li>
            </Link>
            <Link to='/table' >
                <li>Table</li>
            </Link>
            <Link to='/menu' >
                <li>Menu</li>
            </Link>
            <Link to='/cart' >
                <li>Cart</li>
            </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile) }>
            {Mobile ? <GiKnifeFork /> : <GiKnifeFork />}
        </button>    
    </nav>
    </>
  )
}

export default Navbar2
