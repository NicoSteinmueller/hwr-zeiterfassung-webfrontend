import React from "react"
import FetchGreeting from "./fetch/FetchGreeting"

export default function Greeting({email, password}) {
  return (
    <div>
      <FetchGreeting email={email} password={password}/>
    </div>
  )
}
