import Greeting from "../components/Greeting";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

import classes from "./Layout.module.css";





function AppHeader({Logout, email, password}) {
  return (
    <div className={classes.appheader}>
      <Logo />
      <Greeting email={email} password={password}/>
      <Navigation Logout={Logout}/>
    </div>
  );
}

export default AppHeader;
