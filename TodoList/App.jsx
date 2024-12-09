import React from "react";
import TodoList from "./TodoList";

function App() {
  const todoItems = ["By groceries", "Complete project", "Workout"];

  return (
    <div>
      <h1>My Task</h1>
      <TodoList todos={todoItems}/>
    </div>
  );
}

export default App;