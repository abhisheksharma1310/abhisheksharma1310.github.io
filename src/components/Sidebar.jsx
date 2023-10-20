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
        <button className="hamburger-icon" onClick={closeMobileMenu}>
          Close
        </button>
      </div>
      <Navbar
        screen="mobile"
        handleNavItemClick={handleNavItemClick}
        activeNavItem={activeNavItem}
        closeMobileMenu={closeMobileMenu}
      />
    </div>
  );
};

export default Sidebar;
