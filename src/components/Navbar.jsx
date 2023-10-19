import React from "react";

const navItems = [
  "home",
  "experience",
  "projects",
  "achievements",
  "about",
  "contact",
];

const Navbar = ({ handleNavItemClick, activeNavItem, screen }) => {
  return (
    <ul
      className={
        screen === "desktop" ? "nav-list flex-row" : "nav-list flex-col"
      }
    >
      {navItems.map((item) => (
        <li key={item}>
          <button
            onClick={() => handleNavItemClick(item)}
            className={activeNavItem === item ? "nav-active" : ""}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
