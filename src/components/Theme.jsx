import React, { useEffect, useState } from "react";
import Dark from "../assets/icons/dark.svg";
import Bright from "../assets/icons/bright.svg";

const Theme = ({ setCssProp }) => {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark((p) => !p);
  };

  const handleTheme = () => {
    if (isDark) {
      setCssProp({
        "--ptc": "#ffffff",
        "--pbgc": "#111111",
        "--phc": "#111111",
        "--pt1": "#ffeeee"
      });
    } else {
      setCssProp({
        "--ptc": "#111111",
        "--pbgc": "#eeeeee",
        "--phc": "#ffffff",
        "--pt1": "#444444"
      });
    }
  };

  useEffect(() => {
    handleTheme();
  }, [isDark]);

  return (
    <div className="theme flex-col flex-center" onClick={handleClick}>
      <img
        className="theme-btn"
        src={isDark ? Bright : Dark}
        alt="theme-mode"
      />
    </div>
  );
};

export default Theme;
