import React, { memo } from "react";
import achievements from "../data/achievements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const AchievementItem = ({
  img,
  text1 = "",
  text2 = "",
  text3 = "",
  link = "",
}) => {
  return (
    <article className="list flex-row justify-start">
      <div className="flex-col flex-center">
        <img className="list-image" src={img} alt="as" loading="lazy" />
      </div>
      <div className="desc1">
        <h3>{text1}</h3>
        <h4>{text2}</h4>
        <p>
          {text3}{" "}
          <span>
            <a href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </span>
        </p>
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
      <div className="flex-col gap-1">
        {achievements?.map((ach, ind) => (
          <AchievementItem
            key={ind}
            img={ach?.img}
            text1={ach?.title}
            text2={ach?.description}
            text3={ach?.date}
            link={ach?.link}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Achievements);
