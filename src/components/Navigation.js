
import React from "react";
import { Link, animateScroll } from "react-scroll";

const offset = 0;
const duration = 500;

function Navigation() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-container">
          <li>
            <Link activeClass="active" to="#timetracker" spy={true} smooth={true} offset={offset} duration={duration}> Zeiterfassung </Link>
          </li>
          <li>
            <Link activeClass="active" to="#correct" spy={true} smooth={true} offset={offset} duration={duration}> Korrektur </Link>
          </li>
          <li>
            <Link activeClass="active" to="#statistics" spy={true} smooth={true} offset={offset} duration={duration}> Statistik </Link>
          </li>
          <li>
            <Link activeClass="active" to="#absence" spy={true} smooth={true} offset={offset} duration={duration}> Abwesenheit </Link>
          </li>
          <li>
            <Link activeClass="active" to="#profile" spy={true} smooth={true} offset={offset} duration={duration}> Profil </Link>
          </li>
          <li classNaame="nav-btn">
            <a href="#logout" className="button"> Abmelden</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
