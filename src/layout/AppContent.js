import Timetracker from "../pages/Timetracker";
import Correct from "../pages/Correct";
import Statistics from "../pages/Statistics";
import Absence from "../pages/Absence";
import Profile from "../pages/Profile";

function AppContent() {
  return (
    <div className="content">
      <body>
        <div className="pages-container">
          <Timetracker />
          <Correct />
          <Statistics />
          <Absence />
          <Profile />
        </div>
      </body>
    </div>
  );
}

export default AppContent;
