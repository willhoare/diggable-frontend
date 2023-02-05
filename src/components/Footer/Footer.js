import "./Footer.scss";
import textlogo from "../../assets/logos/cropped.png";
import visuallogo from "../../assets/logos/fac-1.jpg";
import { NavLink } from "react-router-dom";
import instaIcon from "../../assets/icons/icons8-instagram-24.png";
import facebookIcon from "../../assets/icons/icons8-facebook-24.png";
import twitterIcon from "../../assets/icons/icons8-twitter-24.png";

export default Header;

function Header() {
  return (
    <footer className="footer">
      <div className="footer__textlogowrap">
        <NavLink to="/">
          <img
            className="footer__textlogo"
            src={textlogo}
            alt="site logo"
          ></img>
        </NavLink>
      </div>
      <div className="socialIcons">
        <img src={facebookIcon} />
        <img src={instaIcon} />
        <img src={twitterIcon} />
      </div>
      <div>Contact</div>
      <div>Terms of use</div>
    </footer>
  );
}
