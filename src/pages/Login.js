import React from "react";
import { Button, Input, Space } from "antd";
import Logo from "../components/Logo";
import classes from "./Login.module.css";
import "antd/dist/antd.css";
import sha256 from "js-sha256";


let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

function loginHandler() {
    
  let user = [
    `email=${emailInput.value}`,
    `password=${sha256(passwordInput.value)}`,
  ].join("&");
  let url = `/login/basicLogin?${user}`;

  fetch(url, {
    method: "POST",
  }).then((response) => {
    if (response.ok) {
      console.log(response.status);
      
    } else {
      console.log(response.status);
    }
  });
}

function Login() {
  return (
    <div className={classes.logincontainer}>
      <div className={classes.login}>
        <Logo className={classes.logo}> </Logo>
        <form >
          <Space direction="vertical">
            <Input placeholder="Email" id="email" />
            <Input.Password placeholder="Passwort" id="password" />
            <Button className={classes.button} onClick={loginHandler}> Anmelden </Button>
          </Space>
        </form>
      </div>
    </div>
  );
}

export default Login;
