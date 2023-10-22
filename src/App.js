import React, { useEffect, useRef, useState } from "react";
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
import Notification from "./components/Notification";

function App() {
  const [cssProp, setCssProp] = useState({});
  const [notify, setNotify] = useState(false);
  const [scrollPostion, setScrollPostion] = useState(0);

  
  const listenToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
    });
  }

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const postion = Math.floor(scrollTop / totalDocScrollLength * 100)
    setScrollPostion(postion);
  }

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
  }

  useEffect(() => {
    listenToScrollEvent();
  })

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

  const handleNotification = () => {
    setTimeout(() => {
      setNotify(false);
    }, 5000);
  };

  useEffect(() => {
    if (notify) handleNotification();
  }, [notify]);

  return (
    <div className="app-main" style={cssProp}>
      <Header scrollToSection={scrollToSection} />
      <div className="progress-scroll" style={{"--scrollPostion": `${scrollPostion}%`}} ></div>
      {notify && <Notification />}
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
        <Contact setNotify={setNotify} />
      </div>
      <Footer />
      <Theme setCssProp={setCssProp} />
    </div>
  );
}

export default App;
