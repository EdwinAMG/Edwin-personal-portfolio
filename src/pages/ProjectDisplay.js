import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import "../Styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1 className="projectN"> {project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p className="des">
        <b>Skills:</b> {project.skills}
      </p>
      <div className="iconos-projects">
        {project.gitHub && (
          <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        )}
        {project.web && (
          <a
            href={`https://${project.web}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
