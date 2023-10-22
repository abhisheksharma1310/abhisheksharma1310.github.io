import React from "react";
import achievements from "../data/achievements";

const AchievementItem = ({ img, text1 = "", text2 = "", text3 = "" }) => {
  return (
    <article className="list flex-row justify-start">
      <div className="flex-col flex-center">
        <img className="list-image" src={img} alt="as" />
      </div>
      <div className="desc1">
        <h3>{text1}</h3>
        <h4>{text2}</h4>
        <p>{text3}</p>
      </div>
    </article>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="flex-col">
      <div className="s-head heading">
        <h2>Achievements</h2>
      </div>
      <div className="flex-col flex-center gap-1">
        {achievements?.map((ach) => (
          <AchievementItem
            img={ach?.img}
            text1={ach?.title}
            text2={ach?.description}
            text3={ach?.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
