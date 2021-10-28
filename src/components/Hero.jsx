import React from "react";
import heroImage from "../Images/hero-img-min.png";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <div className="hero" id="hero" tabIndex={-1}>
      {window.scrollTo({ top: 0, behavior: "smooth" })}
      <div className="inner-hero">
        <div className="text">
          <div className="text-container">
            <Fade bottom delay={500} distance={"100px"}>
              <h1 className="title">Lorem ipsum dolor sit amet maxime</h1>
            </Fade>
            <Fade bottom delay={800} distance={"100px"}>
              <h3 className="subtitle">
                Nemo ut explicabo sunt est recusandae necessitatibus non quis
              </h3>
            </Fade>
            <Fade bottom delay={1000} distance={"100px"}>
              <p className="hero-button">Learn now</p>
            </Fade>
          </div>
        </div>
        <Fade delay={500} duration={2000}>
          <img className="hero-img" src={heroImage} alt="hero-img" />
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
