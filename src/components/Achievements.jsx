import React from "react";

const Achievements = () => {
  const AchievementItem = () => {
    return (
      <article className="list flex-row justify-center">
        <img className="list-image" src="" alt="as" />
        <div className="desc1">
          <h3>UPWORK </h3>
          <h4>Freelance</h4>
          <p>2021-2023</p>
        </div>
      </article>
    );
  };

  return (
    <section id="achievements" className="flex-col">
      <div className="s-head heading">
        <h2>Achievements</h2>
      </div>
      <div className="flex-col flex-center">
        <AchievementItem />
      </div>
    </section>
  );
};

export default Achievements;
