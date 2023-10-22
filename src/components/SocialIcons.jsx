import React from "react";
import socailLinks from "../data/socialLinks";

const SocialIcons = () => {
  return (
    <div className="flex-row width-m gap-1">
      {socailLinks.map((link) => {
        const href = link.link[0] !== "h" ? "mailto:"+link.link : link.link; 
        return (
          <a
            key={link.link}
            href={href}
            target="_blank"
            rel="noreferrer"
            title={link.desc}
          >
            <img className="social-icon round" src={link.icon} alt="link" width="40px" height="40px"/>
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
