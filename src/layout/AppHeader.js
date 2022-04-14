import Greeting from "../components/Greeting";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

import classes from "./Layout.module.css";

function AppHeader() {
  return (
    <div className={classes.appheader}>
      <Logo />
      <Greeting />
      <Navigation />
    </div>
  );
}

export default AppHeader;
