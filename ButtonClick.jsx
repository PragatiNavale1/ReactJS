import React from "react";

function ButtonClick() {
    // Handler function to show alert
    const click = () => {
      alert("Button clicked!");
    };

return (
    <button onClick={click}> Click Me </button>
  );
}

export default ButtonClick;