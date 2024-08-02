import React, { useState } from "react";
import "../styles/navbar.css"; // Import CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome for the search icon
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import logo from "../assets/Signature.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <div className="page-wrapper">
      <div className="nav-wrapper">
        <div className="grad-bar"></div>
        <nav className="navbar">
          <img src={logo} alt="Company Logo" />
          <div
            className={`menu-toggle ${isMenuOpen ? "is-active" : ""}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`nav ${isSearchActive ? "search" : "no-search"} ${
              isMenuOpen ? "mobile-nav" : ""
            }`}
          >
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/work">Work</a>
            </li>
            <li className="nav-item">
              <a href="/resume">Resume</a>
            </li>
            <li className="nav-item">
              <a href="/contactme">Contact Me</a>
            </li>
            {/* <li>
              <FontAwesomeIcon
                icon={faSearch}
                id="search-icon"
                onClick={toggleSearch}
              />
            </li> */}
            <input
              className={`search-input ${
                isSearchActive ? "search-active" : ""
              }`}
              type="text"
              placeholder="Search.."
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
