import React from 'react'
import './Header.css'
// import companyLogo from '../../assets/Images/logoDesigns/pngLogo.png'
import companyLogo from '../../assets/Images/logoDesigns/finalLogo.svg'


function Header() {
  return (
    <div className='header__container'>
      <div className="header">
        <a href="#default" className="header__logo">
          <img src={companyLogo} alt="logo" width={400} height={200} className='company__logo' />
        </a>
        <div className="header-right">
          <a className="header__tab home__tab active" href="#home" >Home</a>
          <a className="header__tab mentors__tab " href="#contact">Mentors</a>
          <a className="header__tab testimonial__tab " href="#about">Testimonial</a>
          <a className="header__tab contact__tab " href="#about">Contact</a>
          <a className="header__tab login__tab " href="#about">Login</a>
          <a className="header__tab signup__tab " href="#about">Sign Up</a>
        </div>
      </div></div>
  )
}

export default Header