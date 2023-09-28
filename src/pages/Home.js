import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "../Styles/Home.css";

const PDF_FILE_URL =
  "portfolio-edwinmonsalve.web.app/Edwin Andres Monsalve Giraldo.pdf";

function Home() {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob)
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
  return (
    <div className="home">
      <div className="about">
        <h2 className="presentacion">Hi, My Name is Edwin Andres</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating</p>
          <CodeIcon />
          <FontAwesomeIcon icon={faReact} />
          <CodeIcon />
        </div>
        <button
          className="cv-button"
          onClick={() => {
            downloadFileAtURL(PDF_FILE_URL);
          }}
        >
          Download CV
        </button>
      </div>
      <div className="skills">
        <h1 className="skillHome">Skills</h1>
        <ol className="listHome">
          <li className="item">
            <h2 className="type">Front-End</h2>
            <span className="h1">
              ReactJS, CSS, React Native, HTML, MaterialUi, StyledComponents,
              contentFul
            </span>
          </li>
          <li className="item">
            <h2 className="type">Back-End</h2>
            <span className="h1">AWS Amplify, NodeJS, MySQL, FireBase </span>
          </li>
          <li className="item">
            <h2 className="type">Languages</h2>
            <span className="h1">JavaScript, Java, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
