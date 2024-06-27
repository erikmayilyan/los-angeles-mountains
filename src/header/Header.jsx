import React from 'react';
import data from './data';
import './header.css';

function Header() {
  return (
    <header id="header" className="header__main">
      <div className='container header__container'>
        {
          data.map(res => {
            return <div key={res.id} className='header__text'>
              <p className='text1'>{res.text1}</p>
              <p className='text2'>{res.text2}</p>
            </div>
          })
        }
      </div>
    </header>
  );
};

export default Header;