import React from "react";
import Navbar from "./Navbar";

const Sidebar = ({
  isOpen,
  closeMobileMenu,
  handleNavItemClick,
  activeNavItem,
}) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="row-rev">
        <button onClick={closeMobileMenu}>Close</button>
      </div>
      <Navbar
        screen="mobile"
        handleNavItemClick={handleNavItemClick}
        activeNavItem={activeNavItem}
      />
    </div>
  );
};

export default Sidebar;
