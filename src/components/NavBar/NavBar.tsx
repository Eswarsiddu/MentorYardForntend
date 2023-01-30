import "./NavBar.css";
import logoIcon from '../../assets/logoDesigns/svg/logo-no-background.svg'


export function NavBar() {
  return <nav id="nav-container" className="nav__container">

    <img src={logoIcon} alt="Logo Image upload failed" id="nav-icon" className="nav__icon"/>
    <div className="nav__options">
      <div className="nav__option">Home</div>
      <div className="nav__option">About Us</div>
      <div className="nav__option">Contact Us</div>
    </div>
  </nav>;
}
