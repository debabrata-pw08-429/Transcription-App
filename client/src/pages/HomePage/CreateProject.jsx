import React, { useState } from "react";
import "./createProject.css";
import createProjectImage from "../../assets/Group16.png";

const CreateProject = ({ openModal }) => {
  return (
    <div className="create-project">
      <h1>Create a New Project</h1>
      <div className="image-container">
        <img src={createProjectImage} alt="Create New Project" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button className="create-button" onClick={openModal}>
        <span>+</span>Create New Project
      </button>
    </div>
  );
};

export default CreateProject;
