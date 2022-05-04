import React from "react"
import Navigation from "./navigation/Navigation"
import Greeting from "./navigation/greeting/Greeting"
import Logo from "./navigation/logo/Logo"
import style from "../Layout.module.css"


export default function AppHeader({Logout, email, password}) {
  return (
    <div className={style.appheader}>
      <Logo />
      <Greeting email={email} password={password}/>
      <Navigation Logout={Logout}/>
    </div>
  )
}
