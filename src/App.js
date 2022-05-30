import React, { useEffect, useState } from "react"
import sha256 from "js-sha256"
import AppHeader from "./layout/header/AppHeader"
import AppContent from "./layout/content/AppContent"
import AppSider from "./layout/sider/AppSider"
import AppFooter from "./layout/footer/AppFooter"
import LoginForm from "./login/LoginForm"
import { BrowserRouter } from "react-router-dom"


export default function App() {
  const [user, setUser] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const Login = (details) => {
  
    let emailInput = details.email
    let passwordInput = details.password
  
    let param = [
      `email=${emailInput}`,
      `password=${sha256(passwordInput)}`,
    ].join("&")
    let url = `/login/basicLogin?${param}`

    fetch(url, {
      method: "POST",
    }).then(
      response => {
        if (response.ok) {
            setUser({
            email: details.email,
            password: details.password 
          }) 
          
        } else {
          setError(`Error: ${response.status} ${response.statusText}`)
        }
      }
    )
  }

  const Logout = () => {
    setUser({
      email:"",
      password:""
    })
  }

  return (
    <div className="App">
      <BrowserRouter>
        {(user.email !== "") ? 
          <>
            <AppHeader Logout={Logout} email={user.email} password={user.password}/>  
            <AppContent email={user.email} password={user.password}/>
            <AppSider />
            <AppFooter />
          </> 
          : <LoginForm Login={Login} error={error} />}
      </BrowserRouter>
    </div>
  )
}
