import React from "react";
import UserCard from "./UserCard";


function App(){
  const userName= "Navale Pragati";
  const userAge= 25;

return(
  <div>
    <h1>User Information</h1>
    <UserCard name={userName} age={userAge}/>
  </div>
);

}

export default App;