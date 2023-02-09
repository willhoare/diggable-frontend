import "./Footer.scss";
import textlogo from "../../assets/logos/cropped.png";
import { NavLink } from "react-router-dom";
import instaIcon from "../../assets/icons/Icon-instagram.svg";
import facebookIcon from "../../assets/icons/Icon-facebook.svg";
import twitterIcon from "../../assets/icons/Icon-twitter.svg";
import footerLogo from "../../assets/logos/png/logo-white.png";

export default Header;

function Header() {
  return (
    <footer className="footer">
      <div className="footer__textlogowrap">
        <NavLink to="/">
          <img
            className="footer__textlogo"
            src={footerLogo}
            alt="site logo"
          ></img>
        </NavLink>
      </div>
      <div className="socialIcons">
        <img className="socialIcon" src={facebookIcon} alt="facebook icon" />
        <img className="socialIcon" src={instaIcon} alt="instagram icon" />
        <img className="socialIcon" src={twitterIcon} alt="twitter icon" />
      </div>
      <div className="footer__links">
        <div className="footer__links-left">
          <div>Contact</div>
          <div>Terms of use</div>
        </div>
        <div className="footer__links-right">Hackienda Industries</div>
      </div>
    </footer>
  );
}
