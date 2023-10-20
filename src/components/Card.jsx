import React from "react";
import as1 from "../assets/images/restaurant.jpg";

const Card = () => {
  return (
    <article className="card">
      <img className="card-img reveal-image" src={as1} alt="as"/>
      <div className="desc1">
        <h3>UPWORK</h3>
        <h4>Freelance</h4>
        <p>2021-2023</p>
        <br />
        <p>
          The value is a space-separated-list, where each value defines the
          width of the respective column. If you want your grid layout to
          contain 4 columns, specify the width of the 4 columns, or "auto" if
          all columns should have the same width.
        </p>
      </div>
    </article>
  );
};

export default Card;
