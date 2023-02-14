import "./Header.scss";
import textlogo from "../../assets/logos/cropped.png";
import visuallogo from "../../assets/logos/fac-1.jpg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import BurgerBar from "../BurgerBar/BurgerBar";

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
      <BurgerBar />
      <nav className="navbar">
        {/* <div className="navbar__pages pullup"> */}
        <div className="container lime pullUp">
          <NavLink to="/">
            <h2>HOME</h2>{" "}
          </NavLink>
          <NavLink to="/createcampaign">
            <h2>CREATE CAMPAIGN</h2>
          </NavLink>
          {/* <h2>NEWS</h2> */}
          <NavLink to="/allcampaigns">
            <h2>CAMPAIGNS</h2>
          </NavLink>
        </div>

        <div className="container lime pullUp navbar__login">
          <NavLink to="/signup">
            <h2>SIGN UP</h2>
          </NavLink>
          <NavLink to="/signin">
            <h2>SIGN IN</h2>
          </NavLink>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
}
