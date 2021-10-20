import React from "react";

function Header() {
  function scrolled(e) {
    if (window.scrollY >= 50) {
      if (!document.querySelector("body").classList.contains("scrolled"))
        document.querySelector("body").classList.add("scrolled");
    }
    if (window.scrollY < 60) {
      if (document.querySelector("body").classList.contains("scrolled"))
        document.querySelector("body").classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", scrolled);
  return (
    <div className="nav-bar">
      <div className="nav-bar-innercontainer">
        <p
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Sinplay
        </p>
        <ul className="options">
          <li className="option">Home</li>
          <li className="option">Our Services</li>
          <li className="option">About</li>
          <li className="contact-button">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
