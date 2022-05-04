import React from "react"
import logo from "../../../../images/logo.png"

import classes from "./Logo.module.css"

export default function Logo() {
  return (
    <div className="logo">
      <a href="#timetracker" className="logo-link">
        <img className={classes.logo} src={logo} alt="Unicorn Logo" />
      </a>
    </div>
  )
}
