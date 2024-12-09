import React from 'react';
import Services from './Services';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <h1>MyBank</h1>
      </header>

      <section className="hero-section">
        <h2>Welcome to MyBank</h2>
        <p>Your trusted partner for all banking solutions.</p>
        <button>Explore Services</button>
      </section>

      <Services />
    </div>
  );
}

export default App;
