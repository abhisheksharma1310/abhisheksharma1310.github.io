import React from "react";

const About = () => {
  return (
    <section id="about" className="flex-col">
      <div className="s-head heading">
        <h2>About</h2>
      </div>
      <article className="list flex-row justify-center">
        <img className="list-image" src="" alt="as" width="500px"/>
        <div className="desc1 flex-col">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a className="btn-link" href="" target="_blank">
            View Resume
          </a>
        </div>
      </article>
    </section>
  );
};

export default About;
