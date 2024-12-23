import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../images/facebook.svg";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-slate-800">
      <footer className="footer items-center p-4 container mx-auto">
        <aside className="text-center">
          <Link to="/">
            <h1 className="text-4xl site-name text-white">
              <span className="text-[#be185d]">Play</span> Quiz
            </h1>
          </Link>
          <p className="container mx-auto text-center text-lg text-white">A quiz test platform</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:justify-self-end">
          <Link to="https://www.facebook.com">
            <img
              className="transition duration-300 ease-in-out transform hover:scale-110 h-10"
              src={facebook}
              alt=""
            />
          </Link>

          <Link to="https://github.com">
            <img
              className="transition duration-300 ease-in-out transform hover:scale-110 h-10"
              src={github}
              alt=""
            />
          </Link>
          <Link to="https://www.linkedin.com">
            <img
              className="transition duration-300 ease-in-out transform hover:scale-110 h-10"
              src={linkedin}
              alt=""
            />
          </Link>
        </nav>
      </footer>
      <div className="divider"></div>
      <p className="text-center text-sm text-white pb-3">Copyright © 2024 - All right reserved</p>
    </div>
  );
};

export default Footer;
