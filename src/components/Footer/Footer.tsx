import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__icons">
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
        <div className="footer__contact__options">
          <div className="footer__contact number">
            <i className="uil uil-phone-volume contact__icon"></i>
            <div className="numbers">
            <span> +91-7838516299</span>
            <span> +91-9502766882</span>
            </div>
           
          </div>
          <div className="footer__contact email">
            <i className="uil uil-envelope-edit contact__icon"></i>
           <div className="emails">
           <span>vishal.sony1@gmail.com</span>
            <span>siddueshu@gmail.com</span>

           </div>
            

          </div>
          <div className="footer__contact address">
            <i className="uil uil-map-marker-alt contact__icon"></i>

            <div className="address__details">
            <span>Indiranagar</span>
            <span>Bangalore, India</span>
            {/* <span>560038</span> */}


            </div>
          </div>
        </div>
      </div>

      <div className="footer__navigate">
        Navigate to :
        <div className="footer__navigate__options">
          <div className="footer__contactUs tab">contact Us</div>
          <div className="footer__aboutUs tab">about us</div>
          <div className="footer__testimonial tab">testimonial</div>
          <div className="footer__montors tab">Our Mentors</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
