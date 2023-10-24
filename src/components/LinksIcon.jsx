import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const LinksIcon = ({ links }) => {
  return (
    <div className="gap-1 ">
      <a href={links?.github} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="link-icon" icon={faGithub} />
      </a>
      <span className="h-space"></span>
      <a href={links?.demo} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="link-icon" icon={faLink} />
      </a>
    </div>
  );
};

export default LinksIcon;
