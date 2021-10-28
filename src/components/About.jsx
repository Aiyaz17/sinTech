import React from "react";
import Fade from "react-reveal/Fade";

function About() {
  var person1 = "https://markitup.in/assets/img/team/team-1.jpg";
  var person2 = "https://markitup.in/assets/img/team/team-2.jpg";
  return (
    <div>
      <Fade bottom>
        <h1 className="container-title about-us-heading" id="about">
          About Us
        </h1>
      </Fade>
      <div className="about-container">
        <div className="about">
          <Fade bottom delay={0} duration={1000}>
            <div className="about-content">
              <p className="content-small-title">WHO WE ARE</p>
              <h1 className="content-title">
                We are a team of experienced creators who love creating content
              </h1>
              <p className="content-body">
                We specialize in various forms of content creation, anything
                from video production to graphic design to creating creative
                memes that engage with the right audience.
              </p>
              <p className="about-button contact-button">Contact Us</p>
            </div>
          </Fade>
          <div className="team-members">
            <Fade bottom delay={200} duration={1000}>
              <div className="about-member1 about-card">
                <div className="about-card-image">
                  <img src={person1} alt="name_of_person" />
                </div>
                <div className="about-details">
                  <p className="about-card-name">Ishan Sharma</p>
                  <p className="about-card-position">Co Founder</p>
                  <p className="about-card-description">
                    YouTuber with 180K+ subscribers and experienced in making
                    content for multiple successful brands like Unacademy,
                    GeeksforGeeks, Leap Scholar Able Jobs(YC '19). Grew
                    codedamn's revenue by 20X using various growth strategies.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade bottom delay={500} duration={1000}>
              <div className="about-member1 about-card">
                <div className="about-card-image">
                  <img src={person2} alt="name_of_person" />
                </div>
                <div className="about-details">
                  <p className="about-card-name">Saransh Anand</p>
                  <p className="about-card-position">Co Founder</p>
                  <p className="about-card-description">
                    Social media marketer with experience of growing an
                    eCommerce brand from zero to 20k+ followers. He is also a
                    content creator and a meme marketer. He has worked with
                    various brands to build their growth strategy.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
