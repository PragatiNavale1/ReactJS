import React from "react";

function UserCard({name, age}) {
    return (
        <div>
            <p>NAME: {name}</p>
            <p>AGE: {age}</p>
        </div>
    );
}

export default UserCard;