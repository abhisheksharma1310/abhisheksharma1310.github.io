import React, { memo, useEffect, useState } from "react";
import Dark from "../assets/icons/dark.svg";
import Bright from "../assets/icons/bright.svg";

const themeColor = {
  "--primary-bg1": "#eeeeee",
  "--primary-bg3": "#ffffff",
  "--primary-text2": "#111111",
  "--primary-text3": "#444444",
};

const Theme = ({ setCssProp }) => {
  const [isDark, setIsDark] = useState(true);

  const handleClick = () => {
    setIsDark((p) => !p);
  };

  const handleTheme = () => {
    if (isDark) {
      setCssProp({
        "--ptc": themeColor["--primary-bg3"],
        "--pbgc": themeColor["--primary-text2"],
        "--phc": themeColor["--primary-text2"],
        "--pt1": themeColor["--primary-bg1"],
      });
    } else {
      setCssProp({
        "--ptc": themeColor["--primary-text2"],
        "--pbgc": themeColor["--primary-bg1"],
        "--phc": themeColor["--primary-bg3"],
        "--pt1": themeColor["--primary-text3"],
      });
    }
  };

  useEffect(() => {
    handleTheme();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return (
    <div className="theme flex-col flex-center" onClick={handleClick}>
      <img
        className="theme-btn"
        src={isDark ? Bright : Dark}
        alt="theme-mode"
        loading="lazy"
      />
    </div>
  );
};

export default memo(Theme);
