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
    <div className="">
      <nav className="navBar container md:mx-auto">
        <div className="flex justify-between justify-items-center my-4 p-4">
          <div>
            <Link to="/">
              <h1 className="text-6xl site-name font-semibold">
                <span className="text-[#be185d]">Play</span> Quiz
              </h1>
            </Link>
          </div>
          <div className={`nav-element ${showNavbar && "active"}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="about">About</NavLink>
          </div>
          <div className="menu-icon hidden" onClick={handleNavBar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
