import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook.svg";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-4">
        <aside className="text-center">
          <Link to="/">
            <h1 className="text-4xl site-name">
              <span className="text-[#be185d]">Play</span> Quiz
            </h1>
          </Link>
        </aside>
        <nav className="grid-flow-col gap-4 md:justify-self-end">
          <Link to="https://www.facebook.com">
            <img style={{ height: "25px" }} src={facebook} alt="" />
          </Link>

          <Link to="https://github.com">
            <img style={{ height: "25px" }} src={github} alt="" />
          </Link>
          <Link to="https://www.linkedin.com">
            <img style={{ height: "25px" }} src={linkedin} alt="" />
          </Link>
        </nav>
      </footer>
      <p className="text-center text-sm">Copyright © 2024 - All right reserved</p>
    </>
  );
};

export default Footer;
