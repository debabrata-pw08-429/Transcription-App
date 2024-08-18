import { useEffect } from "react";
import CreateProject from "./CreateProject";
import "./home.css";
import ProjectCard from "./ProjectCard";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/projects`
        );
        if (response.ok) {
          const projects = await response.json();
          setAllProjects(projects);
        } else {
          const errorMessage = await response.text();
          setError(`Failed to fetch projects: ${errorMessage}`);
        }
      } catch (error) {
        setError(`Failed to fetch projects: ${error.message}`);
      }
    };

    fetchProjects();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProjectName("");
    setError("");
  };

  const handleCreateProject = async () => {
    if (!projectName.trim()) {
      setError("Project Name Can't be empty");
    } else {
      try {
        const projectData = {
          projectName: projectName.trim(),
          episodes: [],
        };

        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/projects`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(projectData),
          }
        );

        if (response.ok) {
          const newProject = await response.json();
          setAllProjects((prevProjects) => [...prevProjects, newProject]);
          closeModal();
        } else {
          const errorMessage = await response.text();
          setError(`Failed to create project: ${errorMessage}`);
        }
      } catch (error) {
        setError(`Failed to create project: ${error.message}`);
      }
    }
  };

  return (
    <>
      <Navbar />

      {allProjects.length > 0 ? (
        <>
          <div className="all_projects_container">
            <div>
              <h1>Projects</h1>
              <div>
                <button className="create-button" onClick={openModal}>
                  <span>+</span>Create New Project
                </button>
              </div>
            </div>
            <div>
              {allProjects.map((ele) => {
                return (
                  <Link
                    to={`${window.location.pathname}/${ele.projectName}/add your podcast?id=${ele._id}`}
                    key={ele.projectName}
                  >
                    <ProjectCard ele={ele} />
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <CreateProject openModal={openModal} />
      )}

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create Project</h2>
            <div className="form-group">
              <label>Enter Project Name:</label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Type here"
              />
              {error && <p className="error-text">{error}</p>}
            </div>
            <div className="modal-buttons">
              <button className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="create-button-modal"
                onClick={handleCreateProject}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Home;
