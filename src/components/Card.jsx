import React, { memo } from "react";
import LinksIcon from "./LinksIcon";

const Card = ({
  img,
  text1 = "",
  text2 = "",
  text3 = "",
  text4 = "",
  links = "",
}) => {
  return (
    <article className="card">
      <img
        className="card-img reveal-image"
        src={img}
        alt="as"
        loading="lazy"
      />
      <div className="desc1">
        <h3>{text1}</h3>
        <h4>{text2}</h4>
        <p>{text3}</p>
        <span className="v-space"></span>
        <p>{text4}</p>
        <span className="v-space"></span>
        {typeof links !== "string" && <LinksIcon links={links} />}
      </div>
    </article>
  );
};

export default memo(Card);
