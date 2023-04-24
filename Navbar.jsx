import React from 'react'
import "./navbar.css";

const Navbar = ({toggle,setToggle}) => {
  return (
    <nav style={{left:toggle && "0"}} className='navbar'>
      <ul className='navbar-links'>
        <li onClick={()=>setToggle(false)} className="navbar-link">Home</li>
        <li onClick={()=>setToggle(false)} className="navbar-link">Faculty</li>
        <li onClick={()=>setToggle(false)} className="navbar-link">About us</li>
        <li onClick={()=>setToggle(false)} className="navbar-link">Contact us</li>
        <li onClick={()=>setToggle(false)} className="navbar-link">Register</li>
      </ul>
    </nav>
  )
}

export default Navbar