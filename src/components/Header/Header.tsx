import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { currentUser, logout, bioDetails } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="header__container">
      <div className="header">
        <a href="#default" className="header__logo">
          <img
            src="/Images/logoDesigns/finalLogo.svg"
            alt="logo"
            width={400}
            height={200}
            className="company__logo"
          />
        </a>
        <div className="header-right">
          {location.pathname == "/" && (
            <>
              <a className="header__tab home__tab active" href="#home">
                Home
              </a>
              <a className="header__tab mentors__tab " href="#mentors">
                Mentors
              </a>
              <a className="header__tab testimonial__tab " href="#about">
                Testimonial
              </a>
              <a className="header__tab contact__tab " href="#about">
                Contact
              </a>
            </>
          )}
          {currentUser ? (
            <>
              <div
                onClick={(e) => {
                  navigate("/profile");
                }}
              >
                <img
                  src={bioDetails.photo}
                  alt="profile"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
                <p style={{ color: "white" }}>{currentUser.displayName}</p>
              </div>
              <button
                onClick={async () => {
                  await logout();
                  navigate("/");
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="header__tab login__tab " to="/login">
                Login
              </Link>
              <Link className="header__tab signup__tab " to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
