import React from "react"
import { Link } from "react-scroll"

import classes from "./Navigation.module.css"

const offset = -64
const duration = 500


export default function Navigation({Logout}) {

  const submitHandler = () => {
    Logout()
  }

  return (
    <div>
      <nav className={classes.navbar}>
        <ul className={classes.container}>
          <li>
            <Link
              activeClass={classes.active}
              to="#timetracker"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              Zeiterfassung
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.active}
              to="#correct"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              Korrektur
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.active}
              to="#statistics"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              Statistik
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.active}
              to="#absence"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              Abwesenheit
            </Link>
          </li>
          <li>
            <Link
              activeClass={classes.active}
              to="#profile"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              Profil
            </Link>
          </li>
          <li className={classes.button}>
            <a href="#logout" className={classes.button} onClick={submitHandler}>
              Abmelden
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
