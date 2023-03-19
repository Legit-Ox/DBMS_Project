import React, { useState } from "react";
import "./nav.css";
import { GiKnifeFork } from "react-icons/gi";

const Navbar2 = () => {
  const [Mobile, setMobile] = useState(false);
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar my-2">
        <h3 className="logo">Plate Tracker</h3>
        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#menu" onClick={closeMenu}>
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#table" onClick={closeMenu}>
              Table
            </a>
          </li>
          <li className="nav-item">
            <a href="#cart" onClick={closeMenu}>
              Cart
            </a>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <GiKnifeFork /> : <GiKnifeFork />}
        </button>
      </nav>
    </>
  );
};

export default Navbar2;
