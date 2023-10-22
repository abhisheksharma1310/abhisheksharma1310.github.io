import React from "react";
import Card from "./Card";
import experience from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="flex-col">
      <div className="s-head heading">
        <h2>Experience</h2>
      </div>
      <div className="s-area">
        {experience?.map((exp, ind) => (
          <Card
            key={ind}
            img={exp.img}
            text1={exp.company}
            text2={exp.position}
            text3={exp.duration}
            text4={exp.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
