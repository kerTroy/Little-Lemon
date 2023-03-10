import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <header>
        <img class='logo' src='logo/Logo.png' alt='Little Leomon Logo' />
        <nav className='nav_link'>
          <ul>
            <li>
              <a href='#Home'>Home</a>
            </li>
            <li>
              <a href='#About'>About</a>
            </li>
            <li>
              <a href='#Menu'>Menu</a>
            </li>
            <li>
              <a href='#Reservations'>Reservations</a>
            </li>
            <li>
              <a href='#Order Online'>Order Online</a>
            </li>
            <li>
              <a href='#Login'>Login</a>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Nav