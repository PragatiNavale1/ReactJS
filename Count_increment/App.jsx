import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="card">
        <h1>Current Count: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
     
    </>
  )
}

export default App
