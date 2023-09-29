import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import teams from "../assets/teams3.png";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/edwin-andres-monsalve-giraldo-6934b126a/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>

        <a href="https://github.com/EdwinAMG" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a
          href='https://teams.microsoft.com/l/chat/0/0?users="edwin.monsalve@eia.edu.co"'
          target="_blank"
          rel="noreferrer"
        >
          <img className="teamsLogo" src={teams} alt="Teams" />
        </a>
      </div>
      <p> &copy;2023 Edwin Monsalve</p>
    </div>
  );
}

export default Footer;
