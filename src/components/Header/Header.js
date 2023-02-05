import "./Header.scss";
import textlogo from "../../assets/logos/cropped.png";
import visuallogo from "../../assets/logos/fac-1.jpg";
import { NavLink } from "react-router-dom";

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
        <div className="navbar__pages">
          <h2>Home</h2>
          <h2>Local</h2>
          <h2>Campaigns</h2>
          <h2>News</h2>
        </div>
        <div className="navbar__login">
          <h2>Login</h2>
        </div>
      </nav>
    </header>
  );
}
