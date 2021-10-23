import React from "react";
function About() {
  var person1 = "https://markitup.in/assets/img/team/team-1.jpg";
  var person2 = "https://markitup.in/assets/img/team/team-2.jpg";
  return (
    <div className="about-container">
      {/* <h1 className="container-title">About Us</h1> */}
      <div className="about">
        <div className="about-content">
          <p className="content-small-title">WHO WE ARE</p>
          <h1 className="content-title">
            We are a team of experienced creators who love creating content
          </h1>
          <p className="content-body">
            We specialize in various forms of content creation, anything from
            video production to graphic design to creating creative memes that
            engage with the right audience.
          </p>
          <p className="about-button contact-button">Contact Us</p>
        </div>
        <div className="about-member1 about-card">
          <div className="about-card-image">
            <img src={person1} alt="name_of_person" />
          </div>
          <div className="about-details">
            <p className="about-card-name">Ishan Sharma</p>
            <p className="about-card-position">Co Founder</p>
            <p className="about-card-description">
              YouTuber with 180K+ subscribers and experienced in making content
              for multiple successful brands like Unacademy, GeeksforGeeks, Leap
              Scholar Able Jobs(YC '19). Grew codedamn's revenue by 20X using
              various growth strategies.
            </p>
          </div>
        </div>
        <div className="about-member1 about-card">
          <div className="about-card-image">
            <img src={person2} alt="name_of_person" />
          </div>
          <div className="about-details">
            <p className="about-card-name">Saransh Anand</p>
            <p className="about-card-position">Co Founder</p>
            <p className="about-card-description">
              Social media marketer with experience of growing an eCommerce
              brand from zero to 20k+ followers. He is also a content creator
              and a meme marketer. He has worked with various brands to build
              their growth strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
