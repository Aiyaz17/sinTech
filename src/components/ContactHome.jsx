import React from "react";
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
function ContactHome() {
  return (
    <div className="contact-us">
      <Fade bottom>
        <h1 className="container-title">Contact Us</h1>
      </Fade>
      <div className="address-email-container">
        <Fade bottom>
          <div className="contact-us-address">
            <p className="contact-us-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </p>
            <h1 className="address-header">Address</h1>
            <p className="line-height">
              153, fz1,
              <br />
              Lorem ipsum awsd fwas,
              <br />
              MH - 656 854 486
            </p>
          </div>
        </Fade>
        <Fade bottom delay={300}>
          <div className="contact-us-email">
            <p className="contact-us-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </p>
            <h1 className="address-header">Email Us</h1>
            <p className="line-height">
              contact@markitup.in
              <br />
              ishan@markitup.in
              <br />
              saransh@markitup.in
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
export default ContactHome;
