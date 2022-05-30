import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div>
          <Link to="/" className='logo'>CONCERT CLUB</Link>
        </div>
        <div className='buttons'>
            <button className='header_btn'>Версия для слабовидящих</button>
            <button className='header_btn'>Мой профиль</button>
        </div>
    </div>
  )
}

export default Header