import React, { useState } from "react";
// import { classes } from "./LoginForm.module.css";

function LoginForm2({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Login</h2>
        
        {(error != "") ? <div className="error">{error}</div> : "" }

        <div className="form-group">
          <label htmlFor="email"> Benutzername: </label>
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.value}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            placeholder="Password"
            type="text"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <input type="submit" value="Anmelden" />
      </div>
    </form>
  );
}

export default LoginForm2;
