import React, { useState } from "react";
import sha256 from "js-sha256";
import AppHeader from "./layout/AppHeader";
import AppContent from "./layout/AppContent";
import AppSider from "./layout/AppSider";
import AppFooter from "./layout/AppFooter";
import LoginForm from "./pages/LoginForm";
import { BrowserRouter } from "react-router-dom";



function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  
    let emailInput = details.email;
    let passwordInput = details.password;
  
    let param = [
      `email=${emailInput}`,
      `password=${sha256(passwordInput)}`,
    ].join("&");
    let url = `/login/basicLogin?${param}`;

    fetch(url, {
      method: "POST",
    }).then(
      response => {
        if (response.ok) {
          console.log(response.status);
            setUser({
            email: details.email,
            password: details.password 
          }) 
          
        } else {
          setError(`Error: ${response.status} ${response.statusText}`)
        }
      }
    );
  };

  const Logout = () => {
    console.log("Logout");
    setUser({
      email:"",
      password:""
    })
  };

  console.log(user.email);
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
  );
}

export default App;
