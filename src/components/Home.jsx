import React from "react";
import SocialIcons from "./SocialIcons";
import myPhoto1 from "../assets/images/abhishek-sharma.png";

const Home = () => {
  return (
    <section id="home" className="flex-col">
      <div className="main-header flex-col">
        <h3 className="bg2">Hello I am</h3>
        <h1>Abhishek Sharma</h1>
        <h3 className="txt-col1">Web Developer</h3>
        <SocialIcons/>
      </div>
      <div className="main-img flex-col flex-end">
        <img className="round" src={myPhoto1} alt="me"/>
      </div>
    </section>
  );
};

export default Home;
