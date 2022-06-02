import React from "react"
import layout from "../Layout.module.css"
import style from "./AppSider.module.css"
import moment from 'moment'


export default function AppSider() {
  return (
    <div className={layout.appsider}>
      <h1>{moment().format('DD.MM.YYYY')}</h1>
      <div className={style.container}>
        <h2>Soll-Arbeitszeit</h2>
        <h2 className={style.time}>08:00</h2>
      </div>
      <div className={style.container}>
        <h2>Mindestpausenzeit</h2>
        <h2 className={style.time}>00:30</h2>
      </div>      
      <div className={style.container}>
        <h2> Geplantes Arbeitsende </h2>
        <h2 className={style.disabled}>00:00</h2>
      </div>      
      <div className={style.container}>
        <h2>Ist-Arbeitszeit</h2>
        <h2 className={style.disabled}>00:00</h2>
      </div>      
      <div className={style.container}>
        <h2>Arbeitszeitkonto</h2>
        <h2 className={style.disabled}>00:00</h2>
      </div>
    </div>
  )
}
