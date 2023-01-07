import React from "react";
import { links } from "../portfolio";
import { SocialIcon } from "react-social-icons";

import Fade from "react-reveal/Fade";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-title">
        <Fade bottom cascade duration={2500}>
          Reach Out To Me!
        </Fade>
      </h1>
      <div className="icon">
        {links.map((link) => (
          <div className="icons">
            {" "}
            <SocialIcon url={link}  target="_blank" />{" "}
          </div>
        ))}
      </div>

      <center>
        {/* <p id="emailPhone"><a href="tel:+918208663529">📞+91 8208663529</a>  <a href="mailto:mswagh98@gmail.com" target="_blank" id="email"> 📧 mswagh98@gmail.com</a></p> */}
        
        <hr className="style-f" />
      </center>
       <p className="copyright">
        Thanks ❤ to <b id="footName">Kapil Jadon</b>  
       </p> 
      

    </div>
  );
};

export default Contact;
