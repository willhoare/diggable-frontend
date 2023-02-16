import "./BurgerBar.scss";
import textlogo from "../../assets/logos/cropped.png";
import visuallogo from "../../assets/logos/fac-1.jpg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default BurgerBar;

function BurgerBar() {
  //to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="mobileNavbar">
      <div style={{ width: "100%", height: "100vh" }}>
        <nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
        </nav>
        <div className={menu_class}>
          <h1 className="burgerNavlinks">
            <NavLink to="/">
              <h2>HOME</h2>
            </NavLink>
          </h1>
          <h1 className="burgerNavlinks">
            <NavLink to="/createcampaign">
              <h2>CREATE CAMPAIGN</h2>
            </NavLink>
          </h1>
          <h1 className="burgerNavlinks">
            <NavLink to="/allcampaigns">
              <h2>CAMPAIGNS</h2>
            </NavLink>
          </h1>
          <h1 className="burgerNavlinks">
            <NavLink to="/signup">
              <h2>SIGN UP</h2>
            </NavLink>
          </h1>
          <h1 className="burgerNavlinks">
            <NavLink to="/signin">
              <h2>SIGN IN</h2>
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
}
