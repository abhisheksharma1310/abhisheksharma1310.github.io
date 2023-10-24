import React, { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import socailLinks from "../data/socialLinks";

const SocialIcons = () => {
  return (
    <div className="flex-row width-m gap-1">
      {socailLinks.map((link) => {
        return (
          <a
            key={link?.link}
            href={link?.link}
            target="_blank"
            rel="noreferrer"
            title={link?.desc}
          >
            <FontAwesomeIcon className="social-icon round" icon={link?.icon} />
          </a>
        );
      })}
    </div>
  );
};

export default memo(SocialIcons);
