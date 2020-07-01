import React from "react";
import "./Footer.scss"
import resume from "../../img/ENResume20.pdf";

const Footer =()=>  {

    return (
        <footer className="footer page-footer">
          <div className="container">
          <div className="row">
      <ul className="nav">
        {/* portfolio link */}
        <div className="col s3">
        <li className="nav_item">
        <a
          href="https://ericnaiman.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__link"
        >
          <p>Portfolio</p>
        </a>
        </li>
        </div>
        {/* github link */}
        <div className="col s3">
        <li className="nav_item">
        <a
          href="https://github.com/enaiman1"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__link"
        >
          <p>GitHub</p>
        </a>
        </li>
        </div>

        {/* Resume link - internal */}
        <div className="col s3">
        <li className="nav_item">
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="nav__link"
        >
        <p>Resume</p>
        </a>
        </li>
        </div>
        {/* linked In */}
        <div className="col s3">
        <li className="nav_item">
        <a
          href="https://www.linkedin.com/in/enaiman1"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__link"
        >
         <p>Linked In</p>
        </a>
        </li>
        </div>
      </ul>
      </div>
      <p className="copyright">
        &copy; Copyright 2020 by Eric Naiman.
      </p>
      </div>
    </footer>
    );
}
export default Footer;