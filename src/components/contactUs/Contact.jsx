import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Connect with us</span>
        <div className="mail">
          <input type="text" placeholder="Your email" />
          <button>Send</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
          <GoogleIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
