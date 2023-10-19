import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
import Theme from "./components/Theme";

function App() {
  const [cssProp, setCssProp] = useState({
    "--ptc": "#111111",
    "--pbgc": "#eeeeee"
  });

  const homeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  const scrollToSection = (section) => {
    if (section === "home") {
      scrollToRef(homeRef);
    } else if (section === "experience") {
      scrollToRef(experienceRef);
    } else if (section === "projects") {
      scrollToRef(projectsRef);
    } else if (section === "achievements") {
      scrollToRef(achievementsRef);
    } else if (section === "about") {
      scrollToRef(aboutRef);
    } else if (section === "contact") {
      scrollToRef(contactRef);
    }
  };

  return (
    <div className="app-main" style={cssProp}>
      <Header scrollToSection={scrollToSection} />
      <div className="app">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={experienceRef}>
          <Experience />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={achievementsRef}>
          <Achievements />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      <Theme setCssProp={setCssProp}/>
    </div>
  );
}

export default App;
