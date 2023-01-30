import React, { useEffect } from "react";
import gsap from "gsap";
import "./VerticalCarousel.css";
import img1 from "../../assets/TestimonialImages/1.jpeg";
import img2 from "../../assets/TestimonialImages/2.jpeg";
import img3 from "../../assets/TestimonialImages/3.jpeg";

function VerticalCarousel() {
  useEffect(() => {
    const divs = document.querySelectorAll(".slider__box");
    gsap.set(divs[1], { x: 100, opacity: 1 });

    gsap
      .timeline({ repeat: -1, defaults: { duration: 2 } })
      .add("one")
      .to(divs[0], { y: 600, x: 0, opacity: 0.05 }, "one")
      .to(divs[1], { y: -350, x: 10, opacity: 0.05 }, "one")
      .to(divs[2], { y: -450, x: 100, opacity: 1 }, "one")

      .add("two")
      .to(divs[0], { y: 300, x: 100, opacity: 1 }, "two")
      .to(divs[1], { y: 200, x: 0, opacity: 0.05 }, "two")
      .to(divs[2], { y: -600, x: 0, opacity: 0.05 }, "two")

      .add("three")
      .to(divs[0], { y: 0, x: 0, opacity: 0.05 }, "three")
      .to(divs[1], { y: 0, x: 100, opacity: 1 }, "three")
      .to(divs[2], { y: 0, x: 0, opacity: 0.05 }, "three");
  });

  return (
    <div className="slider__container">
      <div className="slider__box">
        <div className="slider__content">
          <div className="slider__pic">
            <img src={img1} alt="Person" className="slider__image" />
          </div>
          <div className="slider__text">
            <h2>Shahrukh khan</h2>
            <h3>Actor </h3>
            <p>
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
            <img src={img2} alt="Person" className="slider__image" />
          </div>
          <div className="slider__text">
            <h2>Salman Khan</h2>
            <h3>Freelancer </h3>
            <p>
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
            <img src={img3} alt="Person" className="slider__image" />
          </div>
          <div className="slider__text">
            <h2>Ranvir Kapoor</h2>
            <h3>Freelancer </h3>
            <p>
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
