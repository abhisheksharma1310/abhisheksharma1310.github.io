import React, { memo } from "react";
import Card from "./Card";

const Projects = ({ projects }) => {
  return (
    <>
      <div className="s-area">
        {projects?.map((project, ind) => (
          <Card
            key={ind}
            img={project?.img}
            text1={project?.title}
            text2={project?.description}
            text3={project?.duration}
            text4={project?.details}
            links={project?.links}
          />
        ))}
      </div>
    </>
  );
};

export default memo(Projects);
