import Timetracker from "../pages/Timetracker";
import Correct from "../pages/Correct";
import Statistics from "../pages/Statistics";
import Absence from "../pages/Absence";
import Profile from "../pages/Profile";

import classes from "./Layout.module.css";

function AppContent() {
  return (
    <div className={classes.content}>
      <Timetracker />
      <Correct />
      <Statistics />
      <Absence />
      <Profile />
    </div>
  );
}

export default AppContent;
