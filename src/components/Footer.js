import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
        <MicrosoftIcon />
      </div>
      <p> &copy;2023 Edwin Monsalve</p>
    </div>
  );
}

export default Footer;
