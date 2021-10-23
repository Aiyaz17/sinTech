import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [darkMode, setDarkMode] = useState(false);
  function scrolled(e) {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector(".nav-bar").classList.add("scrolled");
    } else {
      document.querySelector(".nav-bar").classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", scrolled);
  function changed() {
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
  return (
    <div className="nav-bar">
      <div className="nav-bar-innercontainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Sinplay
          </p>
        </Link>
        <ul className="options">
          <li
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="option"
          >
            Home
          </li>
          <li
            onClick={() => {
              document
                .querySelector(".services-container")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="option"
          >
            Our Services
          </li>
          <li
            onClick={() => {
              document
                .querySelector(".about-container")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="option"
          >
            About
          </li>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="contact-button">Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="toggle">
        <input
          type="checkbox"
          id="toggle"
          onChange={() => {
            setDarkMode((old) => !old);
            changed();
          }}
        />
        <label for="toggle"></label>
      </div>
    </div>
  );
}

export default Header;
