import React from "react";

const Card = ({ img, text1 = "", text2 = "", text3 = "", text4 = "" }) => {
  return (
    <article className="card">
      <img className="card-img reveal-image" src={img} alt="as" />
      <div className="desc1">
        <h3>{text1}</h3>
        <h4>{text2}</h4>
        <p>{text3}</p>
        <br />
        <p>{text4}</p>
      </div>
    </article>
  );
};

export default Card;
