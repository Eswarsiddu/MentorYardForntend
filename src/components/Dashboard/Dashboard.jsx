import React, { useState } from "react";
import './Dashboard.css'
import { FaIgloo, FaSearch, FaHome, FaMediumM, FaJenkins, FaPaperPlane, FaUserFriends, FaUsers, FaBullhorn, FaQuestionCircle } from 'react-icons/fa'
import VerticalCardSlider from "../VerticalCardSlider/VerticalCardSlider";

const Dashboard = () => {
  const [ isActive, setIsActive ] = useState(false);
  const toggleActive = () => setIsActive(!isActive);
  return (
    <div className="dashboard__container">
      <div className="topbar">
        <div className="topbar-left">
          <div className="company_icon">
            {/* <FaMediumM /> */}
            <p>MentorYard</p>
          </div>
          {/* <h1>MentorYard</h1> */}
        </div>
        <div className="topbar-center">

          <div className="tab__options">
            <span>Home</span>
            <span>About</span>
            <span>MyMentors</span>
            <span>AllMentors</span>

          </div>

        </div>
        <div className="topbar-right">
          <div className="line-container" onClick={toggleActive}>
            <img
              src="https://images.pexels.com/photos/5944321/pexels-photo-5944321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
        </div>
      </div>


      <div className="dashboard__display__content">
        <div className="dashboard__display__content__left">
          <VerticalCardSlider />


        </div>
        <div className="dashboard__display__content__right">
          <h1>
            Content part
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.

            Officiis voluptas labore molestiae ipsam quaerat provident
            libero cupiditate voluptatibus quas dolores. Mollitia expedita nobis fugit,
            placeat veritatis molestias eaque odit a ut obcaecati nostrum temporibus cum officia,
            accusantium voluptatum provident fugiat dolores similique doloremque! Sint optio voluptas 
             Officiis voluptas labore molestiae ipsam quaerat provident 
             libero cupiditate voluptatibus quas dolores. Mollitia expedita nobis fugit,
              placeat veritatis molestias eaque odit a ut obcaecati nostrum temporibus cum officia, 
              accusantium voluptatum provident fugiat dolores similique doloremque! Sint optio voluptas 
              soluta pariatur, incidunt quasi nulla voluptatum neque architecto, quis animi debitis mollitia! Illum corporis quod quisquam. Perferendis sequi ex cum? Expedita consectetur, iure et fugiat natus a mollitia accusamus magni dolorem vitae culpa quidem dolore sapiente libero minima! Ab doloremque impedit nulla dolorem amet iste mollitia, itaque repellat veritatis a. Odio, doloribus quo.</p>
        </div>
      </div>

      <div className={`menu ${isActive ? "active" : ""}`}>
        <div className="menu-top">
          <div className="menu-top-user">
            <span className="menu-top-username">John Doe</span>
          </div>

          <div className="menu-search">
            <FaSearch />

            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="menu-center">
          <div className="menu-item">
            <i className="fas fa-home"><FaHome /></i>

            <span>Home</span>
          </div>
          <div className="menu-item">
            <i className="fas fa-paper-plane"><FaPaperPlane /></i>

            <span>My DashBoard</span>
          </div>
          <div className="menu-item">
            <i className="fas fa-user-friends"><FaUserFriends /></i>

            <span>My Mentors</span>
          </div>
          <div className="menu-item">
            <i className="fas fa-users"><FaUsers /></i>

            <span>All Mentors</span>
          </div>
          <div className="menu-item">
            <i className="fas fa-bullhorn"><FaBullhorn /></i>

            <span>Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard
