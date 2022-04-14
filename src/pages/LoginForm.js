import React, { useState } from "react";
import { Button, Input, Space } from "antd";
import Logo from "../components/Logo";
import classes from "./LoginForm.module.css";
import "antd/dist/antd.css";

function Login2({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <div className={classes.logincontainer}>
      <div className={classes.login}>
        <Logo className={classes.logo}> </Logo>
        <form >
          
          <Space direction="vertical">
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />

            <Input.Password
              type="text"
              name="password"
              id="password"
              placeholder="Passwort"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <Button type="primary" block onClick={submitHandler}>Anmelden</Button>

            {error !== "" ? <div className="error">{error}</div> : ""}
          </Space>
        </form>
      </div>
    </div>
  );
}

export default Login2;
