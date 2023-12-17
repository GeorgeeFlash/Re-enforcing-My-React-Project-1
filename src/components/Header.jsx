import React from 'react'
import logo from '../assets/images/logo.png';
import './Header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className="inner-header">
            <div className="logo">
                <img src={logo} alt="logo" className='react-logo' />
                <h3>ReactFacts</h3>
            </div>
            <p>React Course - Project 1</p>
        </div>
    </div>
  )
}

export default Header