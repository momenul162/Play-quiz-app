import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleNavBar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navBar relative">
      <div className="container flex justify-between justify-items-center my-6 p-4 shadow-lg">
        <div>
          <h1 className="text-5xl site-name">
            <span className="text-[#be185d]">Play</span> Quiz
          </h1>
        </div>
        <div className={`nav-element ${showNavbar && "active"}`}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="about">About</NavLink>
        </div>
        <div className="menu-icon hidden" onClick={handleNavBar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
