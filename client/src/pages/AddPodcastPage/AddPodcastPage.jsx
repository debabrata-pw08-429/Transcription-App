import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import bellIcon from "../../assets/bell.png";
import logoutIcon from "../../assets/logout.png";
import { podcastOptions } from "../../constantData/index";
import PodcastCard from "./PodcastCard";
import { GoHome } from "react-icons/go";
import FileUpload from "../../components/UploadFileComponent/FileUpload";
import FilesTable from "../../components/FilesTable/FilesTable";
import AccountSettings from "../../components/AccountSettings/AccountSettings";
import "./AddPodcastPage.css";
import EditTranscript from "../../components/EditTranscript/EditTranscript";
import { generateBreadcrumb } from "../../Utility/generateBreadcrumb";
import { useSearchParams } from "react-router-dom";

const AddPodcastPage = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [projectEpisodesData, setProjectEpisodesData] = useState([]);
  const [openAccountSettings, setOpenAccountSettings] = useState(false);
  const [openEditTranscript, setOpenEditTranscript] = useState(false);
  const breadcrumb = generateBreadcrumb(window.location.href);
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("id");

  useEffect(() => {
    const fetchProjectById = async () => {
      if (!projectId) return;

      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/projects/${projectId}`
        );

        if (response.ok) {
          const project = await response.json();
          setProjectEpisodesData(project.episodes);
        } else {
          console.error(`Error fetching project: ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error fetching project: ${error.message}`);
      }
    };

    fetchProjectById();
  }, [projectId]);

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
          console.log(`Failed to fetch projects: ${errorMessage}`);
        }
      } catch (error) {
        console.log(`Failed to fetch projects: ${error.message}`);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="project_details_page">
      <div>
        <Sidebar setOpenAccountSettings={setOpenAccountSettings} />
      </div>
      <div className="project_details_page_main">
        <div className="project_details_page_breadcrumb">
          {`${(<GoHome />)} ${breadcrumb}`}
          <div className="project_details_page_breadcrumb_Icons">
            <div>
              <img src={bellIcon} alt="bellIcon" />
            </div>
            <div>
              <img src={logoutIcon} alt="logoutIcon" />
            </div>
          </div>
        </div>

        <div className="project_details_page_main_content">
          {openAccountSettings ? (
            <AccountSettings />
          ) : (
            <>
              {openEditTranscript ? (
                <EditTranscript />
              ) : (
                <>
                  <div className="add-podcast">
                    <h1>Add Podcast</h1>
                    <div className="podcast-card-container">
                      {podcastOptions?.map((option, index) => (
                        <PodcastCard
                          key={index}
                          image={option.image}
                          title={option.title}
                          description={option.description}
                          projectId={projectId}
                          setProjectEpisodesData={setProjectEpisodesData}
                        />
                      ))}
                    </div>
                    <div>
                      {projectEpisodesData.length > 0 ? (
                        <>
                          <FilesTable
                            files={projectEpisodesData}
                            setOpenEditTranscript={setOpenEditTranscript}
                          />
                        </>
                      ) : (
                        <>
                          <FileUpload
                            projectId={projectId}
                            allProjects={allProjects}
                            setProjectEpisodesData={setProjectEpisodesData}
                          />
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPodcastPage;
