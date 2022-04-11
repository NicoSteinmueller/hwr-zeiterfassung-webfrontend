import React from "react";
import logo from "../images/logo.png";

function Logo(){
    return <div className="logo">
    <a href="#timetracker" className="logo-link">
      <img className="unicorn" src={logo} alt="Unicorn Logo" />
    </a>
  </div>
}

export default Logo;