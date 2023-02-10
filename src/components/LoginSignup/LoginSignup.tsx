import React, { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import './LoginSignup.css';

export default function LoginSignup() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
    setIsSignIn(true);
  };

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
    setIsSignIn(false);
  };

  return (
    <div className="container" id="container">
      <div className={`form-container sign-up-container ${showSignIn ? 'right-panel-active' : ''}`}>
        <form action="#">
          <h1>Create </h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebookF />
            </a>
            <a href="#" className="social">
              <FaGooglePlusG />
            </a>
            <a href="#" className="social">
              <FaLinkedinIn />
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="name__input"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="email__input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="password__input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            className="confirmPassword__input"
          />
          <button>Sign Up</button>
        </form>
      </div>
      <div className={`form-container sign-in-container ${showSignUp ? 'right-panel-active' : ''}`}>
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FaFacebookF />
            </a>
            <a href="#" className="social">
              <FaGooglePlusG />
            </a>
            <a href="#" className="social">
              <FaLinkedinIn />
            </a>
          </div>
          <span>or use your account</span>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="email__input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="password__input"
          />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>

      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost ghost__signin__btn" onClick={toggleSignIn} id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost ghost__signup__btn" onClick={toggleSignUp} id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}