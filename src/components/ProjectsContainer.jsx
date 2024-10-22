import React, { useState } from "react";
import Projects from "./Projects";
import projects1 from "../data/projects1";
import projects2 from "../data/projects2";

const ProjectsContainer = () => {
  const path = window.document.location.pathname;
  const [active, setActive] = useState(path === "/cloud" ? false : true);

  const handleTab = () => {
    setActive((p) => !p);
  };

  return (
    <section id="projects" className="flex-col">
      <div className="s-head heading">
        <h2>Projects</h2>
      </div>
      <div className="flex-row justify-center">
        <button className="btn-link" type="button" onClick={handleTab}>
          {active ? "IoT/Cloud Projects" : "Web App Projects"}
        </button>
      </div>
      {active && <Projects projects={projects1} />}
      {!active && <Projects projects={projects2} />}
    </section>
  );
};

export default ProjectsContainer;
