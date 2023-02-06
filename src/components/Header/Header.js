import "./Header.scss";
import textlogo from "../../assets/logos/cropped.png";
import visuallogo from "../../assets/logos/fac-1.jpg";
import { NavLink, Link } from "react-router-dom";

export default Header;

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__visuallogowrap">
          <NavLink to="/">
            <img
              className="header__visuallogo"
              src={visuallogo}
              alt="site logo"
            ></img>
          </NavLink>
        </div>

        <div className="header__textlogowrap">
          <NavLink to="/">
            <img
              className="header__textlogo"
              src={textlogo}
              alt="site logo"
            ></img>
          </NavLink>
        </div>
      </div>

      <nav className="navbar">
        {/* <div className="navbar__pages pullup"> */}
        <div class="container lime pullUp">
          <h2>HOME</h2>
          <h2>DISCOVER</h2>
          <h2>NEWS</h2>
          <h2>CAMPAIGNS</h2>
        </div>

        <div className="container lime pullUp navbar__login">
          <h2>LOG IN</h2>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
}
