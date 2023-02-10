import React, { useEffect } from "react";
import gsap from "gsap";
import "./VerticalCarousel.css";
import pic1 from '../../../public/Images/MentorsSlider/1.png'
import pic2 from '../../../public/Images/MentorsSlider/2.png'
import pic3 from '../../../public/Images/MentorsSlider/4.png'

function VerticalCarousel() {
  useEffect(() => {
    const divs = document.querySelectorAll(".slider__box");
    gsap.set(divs[1], { x: 100, opacity: 1 });

    gsap
      .timeline({ repeat: -1, defaults: { duration: 2.2 } })
      .add("one")
      .to(divs[0], { y: 450, x: 0, opacity: 0.05 }, "one")
      .to(divs[1], { y: -350, x: 10, opacity: 0.05 }, "one")
      .to(divs[2], { y: -400, x: 70, opacity: 1 }, "one")

      .add("two")
      .to(divs[0], { y: 300, x: 70, opacity: 1 }, "two")
      .to(divs[1], { y: 200, x: 0, opacity: 0.05 }, "two")
      .to(divs[2], { y: -400, x: 0, opacity: 0.05 }, "two")

      .add("three")
      .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "three")
      .to(divs[1], { y: 30, x: 75, opacity: 1 }, "three")
      .to(divs[2], { y: 0, x: 0, opacity: 0.05 }, "three");
  });

  return (
    <div className="slider__container">
      <div className="slider__box">
        <div className="slider__content">
          <div className="slider__pic">
            <img
              src={pic1}
              alt="Person"
              className="slider__image"
            />
          </div>
          <div className="slider__text">
            <h2 className="slider__text__name">Vishal Soni</h2>
            <h3 className="slider__text__occupation">Co-Founder & CTO</h3>
            <p className="slider__text__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              qui culpa quaerat possimus obcaecati, porro quidem deserunt eum
              repudiandae iure animi debitis aliquid vero quibusdam
            </p>
          </div>
        </div>
      </div>
      <div className="slider__box">
        <div className="slider__content">
          <div className="slider__pic">
            <img
              src={pic3}
              alt="Person"
              className="slider__image"
            />
          </div>
          <div className="slider__text">
            <h2 className="slider__text__name">Siddu Eswar</h2>
            <h3 className="slider__text__occupation">Co-Founder & CTO</h3>
            <p className="slider__text__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              qui culpa quaerat possimus obcaecati, porro quidem deserunt eum
              repudiandae iure animi debitis aliquid vero quibusdam
            </p>
          </div>
        </div>
      </div>
      <div className="slider__box">
        <div className="slider__content">
          <div className="slider__pic">
            <img
              src={pic2}
              alt="Person"
              className="slider__image"
            />
          </div>
          <div className="slider__text">
            <h2 className="slider__text__name">Vivek Regmi</h2>
            <h3 className="slider__text__occupation"> Co-Founder CEO </h3>
            <p className="slider__text__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              qui culpa quaerat possimus obcaecati, porro quidem deserunt eum
              repudiandae iure animi debitis aliquid vero quibusdam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalCarousel;
