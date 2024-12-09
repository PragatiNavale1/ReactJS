import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Sanjivani College of Engineering, Kopargaon</h1>
        <p>Where excellence meets education</p>
      </header>

      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#departments">Departments</a>
        <a href="#admissions">Admissions</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about" className="section about">
        <h2>About Us</h2>
        <p>
          Sanjivani College has been a leader in education for over 50 years.
          Our mission is to empower students with knowledge and skills for a
          bright future.
        </p>
      </section>

      <section id="departments" className="section departments">
        <h2>Our Departments</h2>
        <div className="department-list">
          <div className="department-item">
            <h3>Computer Science</h3>
            <p>Cutting-edge knowledge in software development, data science, and AI.</p>
          </div>
          <div className="department-item">
            <h3>Electrical Engineering</h3>
            <p>Innovative solutions in power systems, electronics, and automation.</p>
          </div>
          <div className="department-item">
            <h3>Mechanical Engineering</h3>
            <p>Hands-on experience with manufacturing, design, and robotics.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Sanjivani College of Engineering. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
