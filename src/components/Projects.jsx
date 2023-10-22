import React, { memo } from "react";
import Card from "./Card";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="flex-col">
      <div className="s-head heading">
        <h2>Projects</h2>
      </div>
      <div className="s-area">
        {projects?.map((project, ind) => (
          <Card
            key={ind}
            img={project?.img}
            text1={project?.title}
            text2={project?.description}
            text3={project?.duration}
            text4={project?.details}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Projects);
