import React, { useState } from "react";
import Typical from 'react-typical';
import { toast } from "react-toastify";
import axios from "axios";
import imgBack from "../../assets/Images/ContactUs/mailz2.jpeg";
import load1 from "../../assets/Images/ContactUs/load2.gif";
import './ContactUs.css'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading.js";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";


export const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };
  const handleEmail = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setMessage(e.target.value);
  };
  console.log(name, email, message);
  const submitForm = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);

      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Us"} />

      <div className="central-form" id="ContactMe">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Get In Touch 🤝",
                2200,
                "Email Us And 📧",
                2200,
                "Get Your Job Done! 👍🏻",
                2200,
              ]}
            />
          </h2>{" "}


          <div className="logo__icons">

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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" className="contact__bg__image" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div></div>
  )
}
