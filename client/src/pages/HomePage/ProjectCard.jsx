import React from "react";
import "./projectCard.css";

const ProjectCard = ({ ele }) => {
  const { projectName, episodes } = ele;

  return (
    <div className="project-card">
      <div className="icon">
        <div className="icon-text">SP</div>
      </div>
      <div className="details">
        <div>
          <h3 className="project-title">{projectName}</h3>
          <p className="episodes">
            {episodes.length > 0 ? episodes.length : 0} Episodes
          </p>
        </div>

        <p className="last-edited">{"Last edited a week ago"}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
