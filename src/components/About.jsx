import React from "react";
import about from "../data/about";

const About = () => {
  return (
    <section id="about" className="flex-col flex-center">
      <div className="s-head heading">
        <h2>About</h2>
      </div>
      <article className="flex-col flex-center">
        <img className="about-img" src={about?.img} alt="as" width="500px" />
        <div className="desc1 flex-col flex-start gap-1">
          <>
            {about?.about
              .split("##")
              .map((text, ind) => text && <p key={ind}>{text}</p>)}
          </>
          <a
            className="btn-link"
            href={about?.resume}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
          </a>
        </div>
      </article>
    </section>
  );
};

export default About;
