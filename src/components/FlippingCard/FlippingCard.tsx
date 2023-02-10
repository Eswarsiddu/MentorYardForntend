import React from 'react'
import './FlippingCard.css'
import frontImage from '../../../public/Images/Mentors/AntMan.jpeg'
import backImage from '../../../public/Images/Mentors/SuperMan.jpeg'

export const FlippingCard = () => {
  return (
    <div>
      <div className="wrapper">

        <div className="card front-face">
          <div className="mentor__front__pic">
            <img src={frontImage} />
          </div>
          <div className="mentor__info front__info">
            <h4>Name</h4>
            <p>Company</p>
            <span>Domain</span>
          </div>
        </div>


        <div className="card back-face">
          <div className="mentor__back__pic">

            <img src={backImage} />
          </div>

          <div className="info back__info">
            <div className="title">
              Super Man
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Ullam laboriosam quam vero minus,
              dolore perspiciatis fugit assumenda rem architecto nostrum.</p>
          </div>

          <ul>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </ul>


        </div>
      </div>

    </div>
  )
}
