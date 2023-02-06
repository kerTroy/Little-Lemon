import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <div className="logo">
        <img src="logo/Logo.png" alt="Little Leomon Logo" width={280} height={78} />
        <nav className='nav-bar'>
        <ul>
          <li>
            <a href='Home'>Home</a>
          </li>
          <li>
            <a href='About'>About</a>
          </li>
          <li>
            <a href='Menu'>Menu</a>
          </li>
          <li>
            <a href='Reservations'>Reservations</a>
          </li>
          <li>
            <a href='Order Online'>Order Online</a>
          </li>
          <li>
            <a href='Login'>Login</a>
          </li>
        </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav