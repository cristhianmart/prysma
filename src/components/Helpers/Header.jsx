import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <nav className='header-cont'>
        <Link to={'/'} className='header-link'>Home</Link>
        <Link className='header-link'>Portafolio</Link>
        <Link to={'/sobremi'} className='header-link'>Sobre mi</Link>
        <Link to={'/contacto'} className='header-link'>Contacto</Link>
        <Link to={'/'}><img src={logo} alt="logo" className='header-logo' /></Link>
        
    </nav>
  )
}

export default Header