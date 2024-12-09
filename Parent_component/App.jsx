import React from "react";
import Header from "./Header"; // Import the Header component

// Parent Component

function App() {
  const title = "Welcome to My Application"; // Title to pass as a prop

  return (
    <div>
      {/* Pass the title as a prop to the Header component */}
      <Header title={title} />
    </div>
  );
}

export default App;
