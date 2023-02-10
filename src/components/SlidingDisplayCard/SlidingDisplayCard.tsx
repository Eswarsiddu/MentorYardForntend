
import React, { useState, useEffect } from 'react';
import './SlidingDisplayCards.css';
import frontImage from "../../../public/Mentors/AntMan.jpeg";


interface User {
  id: number;
  name: string;
  avatar: string;
}

interface Props {
  users: User[];
}

const SlidingDisplayCards: React.FC<Props> = ({ users }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<any>(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % users.length);
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, [currentIndex, users.length, intervalId]);

  return (
    <div className="sliding-display-cards">
      {users.map((user, index) => {
        const isActive = index === currentIndex;
        const className = isActive ? 'sliding-card active' : 'sliding-card';
        return (
          <div key={user.id} className={className}>
            <img src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SlidingDisplayCards;
