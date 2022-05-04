import React from "react";
import FetchGreeting from "../fetchData/FetchGreeting";

function Greeting({email, password}) {
  return (
    <div>
      <FetchGreeting email={email} password={password}/>
    </div>
  );
}

export default Greeting;
