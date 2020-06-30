import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar =()=>  {

    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className=" navFont nav-wrapper">
            <Link
              to="/"
              
              className="col s5 brand-logo center black-text navFont"
            >
              Budget Sight
            </Link>
          </div>
        </nav>
      </div>
    );
}
export default Navbar;