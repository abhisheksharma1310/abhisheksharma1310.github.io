import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <section id="experience" className="flex-col">
      <div className="s-head heading">
        <h2>Experience</h2>
      </div>
      <div className="s-area">
        <Card/>
        <Card/>
      </div>
    </section>
  );
};

export default Experience;
