
import Greeting from "../components/Greeting";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";


function AppHeader() {
  return (
    <div className="appheader-container">
      <Logo /> 
      <Greeting />
      <Navigation />
    </div>
  );
}

export default AppHeader;
