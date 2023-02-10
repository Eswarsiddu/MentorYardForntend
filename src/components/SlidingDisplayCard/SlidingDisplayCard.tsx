import React from "react";
import frontImage from "../../../public/Mentors/AntMan.jpeg";

interface SlidingDisplayCardProps {
  delay: number;
}

const SlidingDisplayCard: React.FC<SlidingDisplayCardProps> = ({ delay }) => {
  return (
    <div className="card" style={{ display: "flex", "--delay": delay }}>
      <div className="content">
        <div className="img">
          <img src={frontImage} alt="" />
        </div>
        <div className="details">
          <span className="name">Name</span>
          <p>Position</p>
        </div>
      </div>
      <a href="#">Follow</a>
    </div>
  );
};

const SlidingDisplayCards: React.FC = () => {
  return (
    <div className="slider__container">
      <div className="wrapper">
        <div className="outer">
          <SlidingDisplayCard delay={-1} />
          <SlidingDisplayCard delay={0} />
          <SlidingDisplayCard delay={1} />
          <SlidingDisplayCard delay={2} />
          <SlidingDisplayCard delay={2} />
        </div>
      </div>
    </div>
  );
};

export default SlidingDisplayCards;
