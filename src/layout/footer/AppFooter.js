import React from "react"
import layout from "../Layout.module.css"
import style from "./AppFooter.module.css"
import logo from "../../images/GithubLogo.png"

export default function AppFooter() {
  return (
    <div className={layout.appfooter}> 
      <a className={style.link} href="https://github.com/Stier-09/hwr-zeiterfassung-desktopfrontend">
        <img className={style.logo} src={logo} alt="Github Logo" />
        Desktopclient Repository
      </a>
      <a className={style.link} href="https://github.com/Stier-09/hwr-zeiterfassung-webfrontend">
        <img className={style.logo} src={logo} alt="Github Logo" />
        Website Repository
      </a>
      <a className={style.link} href="https://github.com/Stier-09/hwr-zeiterfassung-backend">
        <img className={style.logo} src={logo} alt="Github Logo" />
        Backend Repository
      </a>
    </div>
  )
}
