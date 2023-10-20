import React from "react";

const navItems = [
  "home",
  "experience",
  "projects",
  "achievements",
  "about",
  "contact",
];

const Navbar = ({
  handleNavItemClick,
  activeNavItem,
  screen,
  closeMobileMenu,
}) => {
  const onClick = (item) => {
    if (screen === "mobile") {
      closeMobileMenu();
      setTimeout(() => {
        handleNavItemClick(item);
      }, 300);
    } else {
      setTimeout(() => {
        handleNavItemClick(item);
      }, 200);
    }
  };

  return (
    <ul
      className={
        screen === "desktop" ? "nav-list flex-row" : "nav-list flex-col"
      }
    >
      {navItems.map((item) => (
        <li key={item}>
          <button
            onClick={() => onClick(item)}
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
