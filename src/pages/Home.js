import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Edwin Andres</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <GitHubIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, CSS, React Native, HTML, MaterialUi, StyledComponents,
              contentFul
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>AWS Amplify, NodeJS, MySQL, FireBase </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
