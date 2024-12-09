import React from "react";

function UserStatus({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> :
                    <p>Please log in!</p>}
    </div>
  );
}

export default UserStatus;
