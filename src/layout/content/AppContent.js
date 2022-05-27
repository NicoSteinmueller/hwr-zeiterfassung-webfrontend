import React from "react"
import Timetracker from "./timetracker/Timetracker"
import Correct from "./correct/Correct"
import Statistics from "./statistics/Statistics"
import Absence from "./absence/Absence"
import Profile from "./profile/Profile"
import style from "../Layout.module.css"

export default function AppContent({email, password}) {
  return (
    <div className={style.appcontent}>
      <Timetracker />
      <Correct email={email} password={password}/>
      <Statistics email={email} password={password}/>
      <Absence />
      <Profile />
    </div>
  )
}
