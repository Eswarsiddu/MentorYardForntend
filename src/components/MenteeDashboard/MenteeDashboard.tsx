import "./MenteeDashboard.css";
import React, { useState } from "react";
import { FaIgloo, FaSearch, FaHome, FaPaperPlane, FaUserFriends, FaUsers, FaBullhorn, FaQuestionCircle } from 'react-icons/fa'
import { FlippingCard } from "../FlippingCard/FlippingCard";
import OurMentors from "../OurMentors/OurMentors";
// import logo from '../../../public/Images/logoDesigns/logoPng.png'




const MenteeDashboard = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div className="dashboard__container">
      <div className="topbar">
        <div className="topbar-left">
          <FaIgloo />
          {/* <img src={logo}/> */}


          <h1>MentorYard</h1>
        </div>
        <div className="topbar-center">
          <div className="topbar-search">
            <FaSearch />

            <input type="text" placeholder="Search..." />
          </div>

        </div>
        <div className="topbar-right">
          <div className="line-container" onClick={toggleActive}>
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </div>

      </div>


      <div className="dashboard__display__content">
        {/* <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem blanditiis est a esse hic maiores natus iusto temporibus
          earum tempora id provident, quas vitae expedita recusandae! Cupiditate a
          dipisci odit libero, quasi consequatur dicta modi aspernatur nulla possimus n
          esciunt incidunt quibusdam deleniti dignissimos dolores. Incidunt vel consectetur
          asperiores nesciunt quaerat maxime, voluptate officia ut, illum beatae repellat ani
          mi? Impedit minima velit placeat sint voluptatem, commodi sequi explicabo ducimus quibusd
          am ab temporibus, eveniet voluptates repellat enim iste laudantium exercitationem accusanti
          um illum! Aliquid quis eum aperiam quo explicabo accusamus, eveniet dicta pariatur provident
          voluptatem corrupti ipsum accusantium maiores possimus error mollitia dolores, at rerum quibusdam
          magnam odio! Voluptatum, suscipit veniam porro delectus laboriosam recusandae officiis reiciendis,
          beatae, perspiciatis sint provident. Debitis, officia nemo!</h3> */}
        <FlippingCard />
        {/* <FlippingCard /> */}

        {/* <OurMentors /> */}

        
      </div>



      <div className={`menu ${isActive ? "active" : ""}`}>
        <div className="menu-top">
          <div className="menu-search">
            <FaSearch />

            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="menu-center">
          <div className="menu-item">
            <FaHome />

            <span>Home</span>
          </div>
          <div className="menu-item">
            <FaPaperPlane />

            <span>My DashBoard</span>
          </div>
          <div className="menu-item">
            <FaUserFriends />

            <span>My Mentors</span>
          </div>
          <div className="menu-item">
            <FaUsers />

            <span>All Mentors</span>
          </div>
          <div className="menu-item">
            <FaBullhorn />

            <span>Updates</span>
          </div>
        </div>
        <div className="menu-bottom">
          <div className="menu-bottom-user">
            <img
              src="https://images.pexels.com/photos/5944321/pexels-photo-5944321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <span>John Doe</span>
          </div>
          <FaQuestionCircle />

        </div>
      </div>


    </div>
  );
};

export default MenteeDashboard
