import React from 'react';
import Logo from '../assets/logo.png';
import data from './data';
import './navbar.css';

function Navbar() {
  return (
    <nav className='nav__main'>
      <div className='container nav__container'>
        <a className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(menu => 
              <li key={menu.id}>
                <a href={menu.link}>
                  {menu.title}
                </a>
              </li>
            )
          }
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;