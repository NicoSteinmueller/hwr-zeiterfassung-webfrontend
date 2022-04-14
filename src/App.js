import React, { useState } from "react";
import LoginForm from "./pages/LoginForm";
import User from "./pages/User";
import sha256 from "js-sha256";

function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
  
    let emailInput = details.email;
    let passwordInput = details.password;
  
    let user = [
      `email=${emailInput}`,
      `password=${sha256(passwordInput)}`,
    ].join("&");
    let url = `/login/basicLogin?${user}`;

console.log(url);

    fetch(url, {
      method: "POST",
    }).then(
      response => {
        if (response.ok) {
          console.log(response.status);
          setUser({
            email: details.name,
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

  return (
    <div className="App">
      {(user.email !== "") ? <User /> : <LoginForm Login={Login} error={error} />}
    </div>
  );
}

export default App;
