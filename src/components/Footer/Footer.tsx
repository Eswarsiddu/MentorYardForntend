import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__icons">
        icons here
      <div className="footer__icons__options">
      <a href="https://www.facebook.com/vishalkrsoni">
        <i className="fa fa-facebook-square" />
      </a>
      <a href="https://myaccount.google.com/profile">
        <i className="fa fa-google-plus-square" />
      </a>
      <a href="https://www.instagram.com/vishalkrsoni/">
        <i className="fa fa-instagram" />
      </a>
      <a href="https://github.com/vishalkrsoni">
        <i className="fa fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
        <i className="fa fa-linkedin-square"></i>
      </a>
      </div>
      
      </div>

      <div className="footer__contact__info">
      contact info
      <div className="footer__contact__options">
      <div className="footer__contact__number">+91-7838516299</div>
      <div className="footer__contact__email">vishal.sony1@gmail.com</div>
      <div className="footer__contact__address">Bangalore,India</div>

      </div>

      </div>
     
      <div className="footer__navigate">
        Navigate to :
        <div className="footer__navigate__options">
        <div className="footer__contactUs">contact Us</div>
        <div className="footer__aboutUs">about us</div>
        <div className="footer__testimonial">testimonial</div>
        <div className="footer__montors">Our Mentors</div>

        </div>
       
      </div>
    </div>
  );
}

export default Footer;
