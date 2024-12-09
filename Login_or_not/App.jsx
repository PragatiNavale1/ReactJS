import React from "react";
import UserStatus from "./UserStatus";

function App() {
  const isUserLoggedIn = true; // Change to false to test

  return (
    <div>
      <UserStatus isLoggedIn={isUserLoggedIn} />
    </div>
  );
}

export default App;
