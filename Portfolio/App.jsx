import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <p>Welcome to my personal website!</p>
    </header>
  );
}

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <img
        src="public/Assets/PassPort P.jpg"
        alt="c:\Users\Windows 10\Music\Pictures\IMP Documents\PassPort P.jpgProfile"
        className="profile-image"
      />
      <p>
        Hello! I'm [Your Name], a passionate web developer. I specialize in
        building responsive websites and web applications. I love creating clean,
        user-friendly interfaces with modern technologies.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-cards">
        <ProjectCard
          title="Project One"
          description="This is a description of my first project."
          link="#"
        />
        <ProjectCard
          title="Project Two"
          description="This is a description of my second project."
          link="#"
        />
        <ProjectCard
          title="Project Three"
          description="This is a description of my third project."
          link="#"
        />
      </div>
    </section>
  );
}

function ProjectCard({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default App;
