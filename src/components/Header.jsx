import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = (props) => {
  const [activeNavItem, setActiveNavItem] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen((p) => !p);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to handle clicks on navigation items
  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
    // Scroll to the corresponding section
    props.scrollToSection(item);
  };

  // Add event listeners for scrolling
  const handleScroll = (scroll) => {
    const homeSection = document.getElementById("home");
    const experienceSection = document.getElementById("experience");
    const projectsSection = document.getElementById("projects");
    const achievementsSection = document.getElementById("achievements");
    const aboutSection = document.getElementById("about");
    const contactSection = document.getElementById("contact");

    //Set activeNav
    if (isInViewport(homeSection)) {
      setActiveNavItem("home");
    } else if (isInViewport(experienceSection)) {
      setActiveNavItem("experience");
    } else if (isInViewport(projectsSection)) {
      setActiveNavItem("projects");
    } else if (isInViewport(achievementsSection)) {
      setActiveNavItem("achievements");
    } else if (isInViewport(aboutSection)) {
      setActiveNavItem("about");
    } else if (isInViewport(contactSection)) {
      setActiveNavItem("contact");
    }

    //set IsScrolled
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  function isInViewport(element) {
    const rect = element?.getBoundingClientRect();
    const windowHeight = window?.innerHeight;

    // Check if the top edge of the element is within the viewport
    const topIsVisible = rect?.top >= 0 && rect?.top <= windowHeight;

    // Check if the bottom edge is within the viewport (for cases where element height > viewport height)
    const bottomIsVisible = rect?.bottom >= 0 && rect?.bottom <= windowHeight;

    // Return true if either the top or bottom of the element is visible
    return topIsVisible || bottomIsVisible;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`header flex-row justify-between ${isScrolled ? "header-scrolled" : ""}`}
    >
      <div></div>
      {isMobile ? (
        <>
          <button onClick={openMobileMenu}>
            <span className="hamburger-icon">&#9776;</span>
          </button>
          <Sidebar
            isOpen={isMobileMenuOpen}
            closeMobileMenu={closeMobileMenu}
            handleNavItemClick={handleNavItemClick}
            activeNavItem={activeNavItem}
          />
        </>
      ) : (
        <Navbar
          screen="desktop"
          handleNavItemClick={handleNavItemClick}
          activeNavItem={activeNavItem}
        />
      )}
    </header>
  );
};

export default Header;
